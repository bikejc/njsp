# NJ Traffic Crash Data
Analysis of [NJ State Police fatal crash data][NJSP data] (2008-present) and [NJDOT crash data][NJDOT data] (2000-2021)

- Plots: [neighbor-ryan.org/nj-crashes](https://neighbor-ryan.org/nj-crashes/)
- Hudson County map: [neighbor-ryan.org/nj-crashes/hudson/map][hudco map]

[![](screenshots/map/www/overview.png)][hudco map]

Fatal crash data updates daily (via [GitHub Action](https://github.com/neighbor-ryan/nj-crashes/actions)), plots below are current through either the most recent month or year.

### NJ traffic deaths w/ 12mo rolling avg

[![](www/public/plots/fatalities_per_month.png)](https://neighbor-ryan.org/nj-crashes/#per-month)

### 2021 and 2022 set 17-year highs for traffic deaths in NJ

[![](www/public/plots/fatalities_per_year_by_type.png)](https://neighbor-ryan.org/nj-crashes/#per-year)

(NJSP only includes victim-type data since 2020)

### In NJ, traffic deaths are 1.5x-2x homicides

![](www/public/plots/crash_homicide_cmp.png)

([Uniform Crime Reports][UCR data] 1990-2020, [Disaster Center][Disaster Center data] 1960-2019)

#### Traffic deaths, by month

![](www/public/plots/fatalities_by_month_bars.png)

---

## Analysis
- [parse-njsp-xmls.ipynb](./parse-njsp-xmls.ipynb)
- [nj-crime-stats.ipynb](./nj-crime-stats.ipynb)
- [Hudson Crashes.ipynb](./Hudson%20Crashes.ipynb)

Refresh data:
```bash
njsp refresh_data  # By default, current year and 2 preceding
njsp update_data
njsp update_plots
```

NJDOT crash data parsing / analysis in [njdot/](./njdot).

[NJDOT data]: https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm
[NJSP data]: https://nj.gov/njsp/info/fatalacc/index.shtml
[hudco map]: https://neighbor-ryan.org/nj-crashes/map/hudson/
[UCR data]: https://nj.gov/njsp/ucr/uniform-crime-reports.shtml
[Disaster Center data]: https://www.disastercenter.com/crime/njcrimn.htm
