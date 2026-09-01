# Research Workspace — UI kit

The analyst surface: build a screen, work down it, write the note.

## Screens

| File | Screen | What it shows |
| --- | --- | --- |
| `ScreensScreen.jsx` | Screens | Screen list rail (owner, hit count, shared marker), criteria tags with removable filters, candidate table ranked by composite score with held/note markers, new-screen dialog that can extend an existing screen. |
| `CompanyScreen.jsx` | Company deep-dive | Breadcrumb from the screen, five valuation KPIs, price vs consensus target, segment mix donut, thesis accordion (why we own it / what breaks it / levels), firm model vs consensus table. |
| `NotesScreen.jsx` | Notes | Inbox rail with type filter and search, note reader in serif prose, position metadata strip, links back to the company. |
| `data.jsx` | — | 5 screens, 7 candidates, 4 notes. |
| `app.jsx` | — | Rail, top bar, dark mode, routing, and the shared Wordmark / PageHeader. |

## Interactions that work

Screen selection · candidate search and sorting · click a candidate to open its deep-dive · breadcrumb back · deep-dive tabs · thesis accordion · note filtering and search · note selection · ticker tag opens the company · dark mode · new-screen dialog with "extend from" (the modularity requirement: a screen can inherit another and override criteria).

## Note on the "extend from" pattern

Screens, sleeves and notes all follow the same rule: a module can be used standalone or extended for a strategy, security type or company type. The dialog's "Extend from" field is where that shows up in the UI — inherit the parent's criteria, override what differs, keep the lineage visible in the list.
