from os.path import dirname

from math import sqrt

from dataclasses import dataclass, asdict

import pandas as pd
from pandas import read_parquet, isna
from typing import Union, Tuple
from utz import cached_property, DF, sxs, err

from nj_crashes.geo import is_nj_ll
from nj_crashes.sri.mp05 import get_mp05_map
from njdot import NJDOT_DIR
from njdot.codes import CrashSeverity
from njdot.data import END_YEAR, START_YEAR

Year = Union[str, int]
Years = Union[Year, list[Year]]


def load(
    years: Years = None,
    county: str = None,
    index: bool = True,
):
    if isinstance(years, str):
        years = years.split(',')
    elif isinstance(years, int):
        years = [str(years)]
    elif years is None:
        years = list(range(START_YEAR, END_YEAR))

    dfs = []
    for year in years:
        crashes = read_parquet(f'{NJDOT_DIR}/data/{year}/NewJersey{year}Accidents.pqt')
        crashes = crashes.rename(columns={
            'SRI (Standard Route Identifier)': 'sri',
            'Mile Post': 'mp',
            'Latitude': 'lat',
            'Longitude': 'lon',
        })
        if county:
            crashes = crashes[crashes['County Name'].str.lower() == county.lower()]
        years_col = crashes.Date.dt.year.rename('year')
        wrong_year = years_col != int(year)
        if wrong_year.any():
            num_wrong_year = wrong_year.sum()
            err(f'{num_wrong_year} crashes for year {year} have wrong year: {years_col.value_counts()}')
        crashes['year'] = years_col
        crashes['lon'] = -crashes['lon']  # Longitudes all come in positive, but are actually supposed to be negative (NJ ⊂ [-75, -73])
        crashes = crashes.rename(columns={ 'Severity': 'severity', })
        crashes['severity'] = crashes['severity'].apply(lambda s: CrashSeverity.CH2Name[s])
        if index:
            crashes = crashes.set_index([ 'year', 'County Code', 'Municipality Code', 'Department Case Number', ])
        dfs.append(crashes)
    df = pd.concat(dfs)
    if not index:
        df = df.reset_index(drop=True)
    return df


def geocode_mp(r, sris):
    sri = r.sri
    mp = r.mp
    if isna(sri):
        return dict(reason="No SRI")
    if isna(mp):
        return dict(reason="No MP")
    if sri not in sris:
        return dict(reason='SRI not found')
    mp_lls = sris[sri]
    ll = mp_lls.get(mp)
    if ll:
        return asdict(ll)
    else:
        return dict(reason="MP didn't geocode")


@dataclass
class Crashes:
    df: pd.DataFrame

    @classmethod
    def load(cls, years: Years = None, county: str = None):
        return cls(load(years, county))

    def lls(self, default='io', types=None):
        if types is None:
            # - interpolated (from SRI/MP)
            # - original (from crash report)
            # - interpolated, fall back to original
            # - original, fall back to interpolated
            types = [ 'oi' ]
            # types = [ 'i', 'o', 'io', 'oi', ]

        df = self.df.copy()
        mp05_map = get_mp05_map()
        ll = DF(sxs(df.sri, df.mp).apply(geocode_mp, sris=mp05_map, axis=1).tolist(), index=df.index)

        n = len(df)
        if len(ll) != n:
            raise RuntimeError(f"Expected {n} geocoded lls, got {len(ll)}")

        def pct(num):
            return int(num / n * 100)

        def replace(k, cross_tab=None):
            o = df[k].copy()
            i = ll[k]
            no_o = o.isna()
            yes_o = ~no_o
            num_no_o = no_o.sum()
            no_i = i.isna()
            yes_i = ~no_i
            num_yes_i = yes_i.sum()

            if cross_tab or (cross_tab is None and k == 'lat'):
                cross_tab_o = yes_o.apply(lambda b: "yes" if b else "no").rename("Original")
                cross_tab_i = yes_i.apply(lambda b: "yes" if b else "no").rename("Interpolated")
                crosstab = pd.crosstab(cross_tab_o, cross_tab_i)
                crosstab_pct = round(crosstab / n * 100, 1)
                err(f"Original {k} vs. interpolated {k}:")
                err(str(crosstab_pct))

            # Original lat/lon
            if 'o' in types:
                df[f'o{k}'] = o

            # Interpolated lat/lon
            if 'i' in types:
                df[f'i{k}'] = i

            # Original lat/lon, fall back to interpolated
            io = i.copy()
            io.loc[yes_o & no_i] = o
            if 'io' in types:
                df[f'io{k}'] = io

            # Interpolated lat/lon, fall back to original
            oi = o.copy()
            oi.loc[no_o & yes_i] = i
            if 'oi' in types:
                df[f'oi{k}'] = oi

            default_col = { 'i': i, 'o': o, 'io': io, 'oi': oi }[default]
            df[k] = default_col

        replace('lat')
        replace('lon')
        df = df[~df.lon.isna()]
        return LLCrashes(df)

    def __getattr__(self, item):
        return getattr(self.df, item)

    def __len__(self):
        return len(self.df)

    def __getitem__(self, item):
        return self.df[item]

    def __repr__(self):
        return repr(self.df)

    def _repr_html_(self):
        return self.df._repr_html_()


@dataclass
class LLCrashes(Crashes):
    df: pd.DataFrame

    @cached_property
    def nj_mask(self) -> pd.Series:
        return self.df.apply(lambda r: is_nj_ll(r.lat, r.lon), axis=1)

    @cached_property
    def njs(self) -> Tuple[pd.DataFrame, pd.DataFrame]:
        df = self.df
        nj_mask = self.nj_mask
        nnj = df[~nj_mask]
        nj = df[nj_mask]
        return nj, nnj

    @cached_property
    def nj(self) -> 'LLCrashes':
        return LLCrashes(self.njs[0])

    @cached_property
    def nnj(self) -> 'LLCrashes':
        return LLCrashes(self.njs[1])

    @cached_property
    def ll_hist(self):
        lls_count = self[['lon', 'lat', 'severity']].value_counts().rename('lls_count')
        merged = self.merge(lls_count.reset_index(), on=['lon', 'lat', 'severity'], how='left')
        merged['lls_count'] = merged['lls_count'].fillna(0)
        merged['radius'] = merged.lls_count.apply(sqrt)
        return LLCrashes(merged)