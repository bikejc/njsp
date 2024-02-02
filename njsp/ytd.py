import json

from functools import cached_property
from os.path import relpath

import pandas as pd
from git import Repo
from utz import err

from nj_crashes.paths import DB_URI, RUNDATE_PATH, ROOT_DIR, PROJECTED_TOTALS_PATH
from nj_crashes.utils import normalized_ytd_days
from njsp.rundate import Rundate


RUNDATE_RELPATH = relpath(RUNDATE_PATH, ROOT_DIR)
PROJECTED_TOTALS_RELPATH = relpath(PROJECTED_TOTALS_PATH, ROOT_DIR)


def get_all_days():
    all_days = pd.DataFrame([
        dict(Days=days, Text=(pd.to_datetime(f'{2022}') + pd.Timedelta(days=days-1)).strftime('%b %-d'))
        for days in range(1, 366)
    ]).set_index('Days')
    return all_days


def fill_all_days(df, rundate: Rundate):
    all_days = get_all_days()
    df = df.set_index('Days').merge(
        all_days,
        left_index=True,
        right_index=True,
        how='right',
    )
    years = df.Year.dropna().unique()
    if len(years) > 1:
        raise ValueError(f"Years: {years}")
    [year] = years
    rundate_ytd_days = normalized_ytd_days(rundate.cur)
    if year == rundate.year:
        df = df[df.index < rundate_ytd_days]
    df = df.drop(columns='Year')
    df['YTD Deaths'] = df['YTD Deaths'].ffill().fillna(0).astype(int)
    return df


def projs_rundate(commit):
    tree = commit.tree
    sha = commit.hexsha
    pt = tree[PROJECTED_TOTALS_RELPATH]
    pto = json.load(pt.data_stream)
    rd = tree[RUNDATE_RELPATH]
    rdo = json.load(rd.data_stream)
    return { 'sha': sha, **rdo, **pto, }


class Ytd:
    @cached_property
    def rundate(self) -> Rundate:
        return Rundate()

    @cached_property
    def ytds(self):
        crashes = pd.read_sql_table("crashes", DB_URI)
        ytds = crashes[['dt', 'FATALITIES']].copy()
        ytds['Year'] = ytds.dt.dt.year
        ytds['Days'] = ytds.dt.apply(normalized_ytd_days)
        ytds = (
            ytds
            .groupby('Year', group_keys=False)
            .apply(lambda df: (
                df.assign(**{
                    'YTD Deaths': df.FATALITIES.cumsum().astype(int)
                })
            ))
        )
        ytds = (
            ytds[['Year', 'Days', 'YTD Deaths']]
            .groupby(['Year', 'Days'])
            .max()
            .reset_index()
        )

        ytds = ytds.groupby('Year').apply(fill_all_days, rundate=self.rundate).reset_index()
        return ytds

    @property
    def prv_year(self):
        return self.cur_year - 1

    @property
    def cur_year(self):
        return self.rundate.year

    @cached_property
    def prv_projection(self):
        """Iterate through Git commit history, looking for the oldest commit that's at least as far into last year as we currently are into the present year"""
        prv_prd = None
        prv_rundate = f'{self.prv_year}-{self.rundate.cur.strftime("%m-%d")}'
        err(f'Searching for projected totals ca. {prv_rundate}')
        repo = Repo()
        commits = repo.iter_commits()
        shas = []
        while True:
            try:
                commit = next(commits)
            except StopIteration:
                raise RuntimeError(f"Ran out of commits after {len(shas)}: {','.join(shas)}")
            shas.append(commit.hexsha[:7])
            prd = projs_rundate(commit)
            commit_rundate = prd["rundate"]
            if commit_rundate < prv_rundate:
                err(f'Found previous rundate {commit_rundate} < {prv_rundate}; breaking')
                break
            prv_prd = prd
        return prv_prd

    @property
    def prv_total(self):
        return self.prv_projection[f'{self.prv_year}']['Total']

    @property
    def prv_rundate(self):
        return pd.to_datetime(self.prv_projection['rundate'])

    @property
    def cur_year_frac(self):
        rundate = self.rundate
        cur_year_dt = rundate.cur_year_dt
        return (rundate.cur - cur_year_dt) / (rundate.nxt_year_dt - cur_year_dt)

    @property
    def prv_year_frac(self):
        rundate = self.rundate
        prv_year_dt = rundate.prv_year_dt
        return (self.prv_rundate - prv_year_dt) / (rundate.cur_year_dt - prv_year_dt)

    @cached_property
    def cur_ytd_deaths(self):
        ytds = self.ytds
        cur_ytds = ytds[ytds.Year == self.cur_year]
        return 0 if cur_ytds.empty else cur_ytds.iloc[-1]['YTD Deaths']

    @property
    def cur_roy_frac(self):
        return 1 - self.cur_year_frac

    @cached_property
    def prv_ytds(self):
        ytds = self.ytds
        return ytds[ytds.Year == self.prv_year]

    @property
    def prv_end_deaths(self):
        return self.prv_ytds.iloc[-1]['YTD Deaths']

    @property
    def prv_ytd_deaths(self):
        return self.prv_total * self.cur_year_frac / self.prv_year_frac

    @cached_property
    def projected_roy_deaths(self):
        cur_year_frac = self.cur_year_frac
        prv_ytd_deaths = self.prv_ytd_deaths
        prv_roy_deaths = self.prv_end_deaths - prv_ytd_deaths

        return int(prv_roy_deaths * (cur_year_frac * (self.cur_ytd_deaths / prv_ytd_deaths) + self.cur_roy_frac))

    @cached_property
    def projected_year_total(self):
        return self.cur_ytd_deaths + self.projected_roy_deaths