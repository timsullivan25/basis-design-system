# Portfolio Terminal — UI kit

The risk and PM surface: what the book looks like right now, and why.

## Screens

| File | Screen | What it shows |
| --- | --- | --- |
| `OverviewScreen.jsx` | Overview | Five KPI tiles (Layer 1), cumulative return vs benchmark and peers, capital by strategy, MTD attribution, limit utilisation, and a strategy accordion that expands into sleeve tables (Layers 2–3). |
| `PositionsScreen.jsx` | Positions | Filter bar (search, side, strategy, advanced popover), active-filter tags, dense selectable table of 12 columns, inline expanded position detail with price chart and stats. |
| `RiskScreen.jsx` | Risk & limits | Breach alerts, four risk KPIs, rolling VaR vs limit, factor exposure, full limit register with utilisation meters, and a new-alert dialog. |
| `AttributionScreen.jsx` | Attribution | Sector/factor contribution toggle, daily long vs short contribution, Brinson decomposition by strategy. |
| `AppShell.jsx` | Chrome | Wordmark, fund switcher popover, breadcrumb, search, live badge, display settings popover, module tabs, page header. |
| `data.jsx` | — | Mock book: KPIs, 4 strategies / 11 sleeves, 12 positions, 7 limits, attribution sets. |
| `app.jsx` | — | Rail navigation, dark-mode toggle wiring, screen routing. |

## Interactions that work

Module rail and tab navigation · fund switcher · dark mode toggle · KPI tiles drill into Positions or Risk · position search, side/strategy filters and removable filter tags · column sorting · row selection · row expansion into detail · strategy accordion · sector/factor and period toggles · methodology popovers · new-alert dialog · save-view toast · density switch.

## Layering

Layer 1 is the KPI row and the collapsed accordion summary. Layer 2 is the tables and charts. Layer 3 is the expanded row, the sleeve table and the methodology popovers. No figure appears only at Layer 3 without a Layer 1 or 2 signal pointing at it.
