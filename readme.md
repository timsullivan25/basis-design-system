# Basis Design System

A design system for a hedge fund platform running both quantitative and fundamental strategies. It is built for people who read numbers all day: dense, fast, light on chrome, and organised in layers — a summary you can absorb in one glance, with a way deeper on every surface.

**"Basis" is a working name.** No company name, logo, font files, screenshots, Figma file or codebase were supplied with the brief, so the brand identity here is authored from the written direction rather than recreated from source material. Rename it in one place (`thumbnail.html`, `guidelines/brand-wordmark.html`, `SKILL.md`) when the real name arrives.

## Sources

The only source was a written brief pasted into chat. Recorded here verbatim in substance so a future reader can audit the decisions:

- Leading hedge fund, quantitative **and** fundamental strategies. Cutting-edge tech, modern design, user friendly.
- Balance summarising information with letting the user dig deeper. Logical layers to the application.
- Modular design: standalone modules, plus modules extended to capture nuance by strategy, security, company type.
- Professional but polished and fun to use.
- Developer background is React + Material UI. Keep a similar vibe but **lighter weight and more compact** — MUI wastes space.
- Components should carry a lot of functionality and extensibility while still looking simple and digestible, without hiding the power underneath.
- Corporate colours: black, blue, light blue. Light mode default, dark mode optional.
- Extended chart palette derived from theme colours, then professional accents.
- Small, uncluttered icons used to give context at a glance.

No Figma links, GitHub repos or codebase paths were provided. If they exist, add them here and re-derive tokens from them — source values always beat the values in this repo.

## Product context

One product, two audiences, one shared shell:

1. **Portfolio Terminal** — the risk/PM surface. Exposure, P&L, attribution, limit utilisation, positions. Optimised for the 09:20 and 16:05 reads.
2. **Research Workspace** — the analyst surface. Screens, company deep-dives, notes, model output. Optimised for building conviction over hours, not seconds.

Both are recreated in `ui_kits/`. Every screen follows the same layering law: **Layer 1** summary tiles → **Layer 2** tables and charts → **Layer 3** drill-in panels and inline detail rows. Nothing important lives only in Layer 3.

## Content fundamentals

**Voice.** Neutral, specific, unhedged. The interface states what is true and where the number came from; it does not congratulate the user or explain itself twice.

**Person.** No "I". Second person only when addressing the user's own artefacts: "Your screens", "Saved to your workspace". System state is impersonal: "Prices delayed 15 minutes", not "We're having trouble".

**Casing.** Sentence case for everything readable — headings, buttons, dialog titles, alert text ("New screen", "Run backtest", "Gross exposure limit breached"). UPPERCASE only for micro-caps labels: field labels, table column headers, KPI labels, popover header strips (11px, 600, 0.07em). Never title case.

**Numbers carry the meaning, words carry the context.** A label names the measure, the figure states it, and a short clause states its provenance: `NET EXPOSURE / 42.8% NAV / −1.4% vs prior close / 16:00 ET`. Every derived figure gets a methodology note — a column `description`, a Tooltip, or a Popover — never a footnote asterisk.

**Units and conventions.** Percentages to 1–2 decimals; contribution and spreads in bps; notional with thousands separators; currency stated once in the header, not repeated per row. Signed values always carry their sign (`+2.41%`, `−0.91%`) using a true minus (−, U+2212), not a hyphen. Timestamps are exchange-local with the zone: `16:00 ET`. Settlement basis is stated where it matters: `T+1`.

**Empty and error states** say what is missing and what to do, in that order: "No positions match these filters. Clear one to widen the set." Never "Oops" or "Something went wrong".

**Length.** Buttons 1–3 words. Badges 1–2 words. Alert titles under 60 characters, with detail in the body. Analyst prose is the one place sentences run long, and it is set in the serif to signal that a human wrote it.

**Emoji: never.** Not in UI, not in labels, not in commentary. Icons carry the same job with less noise.

Examples of the register:

> Energy contributed 64 bps, almost all of it from two refiners we added in June.
> Global L/S is at 182% gross against a 175% mandate limit. Breach opened at 14:32 ET.
> Attribution recalculated on the T+1 book.

## Visual foundations

**Palette.** Cool near-black ink (`--ink-950` #0A0E14) for text and structure; electric corporate blue (`--blue-700` #0B4FD9) as the single action colour; light blue (`--sky-600` #1D9BC7) as the secondary brand and second data series. Green/red are reserved for direction of value (`--value-up`, `--value-down`) — never decorative. Amber is caution only. Violet appears only in charts. At most one accent surface per view; the page itself is `--ink-50`, cards are white.

**Type.** Archivo throughout the UI (tight tracking, −0.022em at display sizes, good at 11px); Roboto Mono for every figure, always `tabular-nums`; Newsreader for analyst prose and commentary. Body is 13px, labels 11px uppercase, KPI figures 22px mono, display 28–48px. Substitution note: all three are Google Fonts stand-ins chosen for this brief, loaded via `tokens/fonts.css` — **if licensed brand fonts exist, send the files and this file is the only thing that changes.**

**Spacing and density.** 2px base scale; 8px is the default gap inside a control, 12–16px between elements, 24–32px between sections. Control heights are 20/24/28/34/40 with 28px as default — deliberately ~20% tighter than Material's 36–40px baseline. Table rows are 30px, 26px dense. This compactness is the system's core promise: more information per screen without shrinking type below 11px.

**Backgrounds.** Flat colour. No gradients as decoration (the only gradients in the system are the 18%→0% fills under sparklines and line charts), no photography, no illustration, no texture, no pattern. Nothing full-bleed. If a surface needs to recede it goes to `--surface-sunken`, not to an image.

**Cards.** White surface, 1px `--ink-150` hairline, 5px radius, **flat** — no shadow in-page. Optional 34/40px header with an icon, title, subtitle and right-aligned actions; optional muted footer strip for as-of stamps and provenance. Elevation is a signal of floating, not of importance: `--shadow-1` on controls, `--shadow-2` on hover lift, `--shadow-3` on popovers, `--shadow-4` on dialogs.

**Borders.** Structure is carried by hairlines, not shadows: `--border-subtle` for row dividers, `--border-default` for cards and fields, `--border-strong-c` for emphasis. A 2px top border on a MetricCard is the only "coloured edge" pattern in the system, and only for status.

**Radii.** 2px chips and checkboxes, 3px inner elements, 5px controls and cards, 8px dialogs, 12px rarely, pill for tags and meters. Nothing more rounded than 8px carries content.

**Shadows.** Cool-tinted, layered, low-opacity; light mode uses `rgba(10,14,20,.05–.16)`, dark mode near-black at higher opacity. Fields get an inset shadow (`--shadow-inset-field`) so editable areas read as recessed while buttons read as raised.

**Animation.** Fast and decelerating. 80ms hover/press, 120ms colour and focus, 180ms expand/reveal, 260ms chart draw, 400ms route change. Default easing `--ease-out` cubic-bezier(.2,.8,.3,1). One bounce in the whole system: the Switch knob (`--ease-snap`). Fades and 4px rises for entrances (`basis-fade-in`, `basis-pop-in`); no slides across the viewport, no parallax, no looping motion except the spinner and `basis-pulse` on streaming values. `prefers-reduced-motion` disables all of it.

**Hover states.** Surfaces tint one step (`--surface-hover`), never change colour family; text goes one step darker; primary buttons darken to `--blue-800`; drill-in affordances become blue and nudge their chevron 1px. Rows tint on hover in 80ms.

**Press states.** 0.5px downward nudge plus one further darkening step. No scaling, no ripple — the MUI ripple is deliberately absent.

**Focus.** 3px `rgba(11,79,217,.20)` ring plus a blue border, on `:focus-visible` only. Danger controls use the red equivalent.

**Selection.** `--surface-selected` (blue-50) fill with a blue-300 border; selected nav items also switch to blue text and semibold.

**Transparency and blur.** Rare and functional: dialog scrim at 40% ink with a 2px backdrop blur, `--blur-panel` for floating panels over live data. Never on cards, headers or charts — blur costs legibility and legibility is the product.

**Layout rules.** 216px left rail (48px collapsed), 44px top bar, 34px sub-bars, 320px right drill-in panel, 16px gutters, content max 1440px. Rail, top bar and tab bars are fixed; only the content column scrolls. Table headers are sticky. Nothing floats over content except popovers, tooltips, dialogs and toasts.

**Charts.** Horizontal gridlines only, in `--chart-grid`; no plot background, no chart borders, no 3D, no drop shadows. Axis figures are 9px mono. Benchmarks are always dashed `--chart-benchmark`. Categorical series take `--chart-1..12` in order; sequential and diverging ramps exist for intensity and signed data. Legends sit above the plot and carry the latest value so they double as a readout.

**Imagery.** There is none, by design. Where a brand would put a photo, this system puts data. If imagery is ever added, keep it cool, desaturated and un-grained, and never behind text.

**Dark mode.** Same tokens, remapped (`[data-theme="dark"]`): #080B10 app, `--ink-900` cards, brand action lightens to `--blue-600`, up/down brighten to #3FBE8C / #F0637F for contrast on dark. Light mode is the default and the primary design target.

## Iconography

- **Set:** [Lucide](https://lucide.dev) 0.469, 2px stroke, 24×24 grid. **This is a flagged substitution** — no icon set was supplied. Lucide was chosen for its even 2px stroke, geometric construction and small-size legibility; it is the closest freely available match to the compact-but-friendly direction in the brief.
- **Delivery:** the Lucide UMD bundle from CDN (`unpkg.com/lucide@0.469.0`). `Icon` renders **inline SVG** built from the library's icon data, so glyphs inherit `currentColor` and stay crisp. Nothing is drawn by hand and no icon SVG is committed to this repo. If the firm has its own icon set, drop the SVGs into `assets/icons/` and swap the lookup inside `components/primitives/Icon.jsx` — no call site changes.
- **Sizes:** 12px in table cells, 14px inside controls, 15–16px in nav and card headers. Never larger than the text beside it; never larger than 16px in app chrome.
- **Colour:** `--text-secondary` or `--text-tertiary` by default; `--text-brand` when the icon marks an active or drill-in state; status colours only inside Alert/Badge.
- **Usage:** an icon is context, not decoration. Every icon either sits beside a label or is an IconButton with a `label` (accessible name + tooltip). No icon-only navigation, no icon grids, no illustrated empty states.
- **Emoji and unicode as icons:** never, with two exceptions — the true minus sign (−) in figures, and the arrow glyphs Lucide provides for direction.
- **Common vocabulary:** `layout-dashboard` overview · `table-2` positions · `gauge` risk · `filter` screens · `line-chart` / `bar-chart-3` / `pie-chart` charts · `scale` exposure · `trending-up` / `trending-down` direction · `alert-triangle` breach · `info` methodology · `download` export · `settings-2` configure · `search` find · `chevron-right` drill · `cpu` quant · `search` fundamental · `globe` macro · `file-text` notes · `briefcase` fund.

## Components

Authored from scratch — no source library defined an inventory, so this is the standard set sized to a data-dense financial product. `window.<Namespace>.<Name>` from `_ds_bundle.js`; every component has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

**`components/primitives/`** — Icon, Button, IconButton, Badge, Tag, Card
**`components/forms/`** — Field, Input, Select, Checkbox, Radio, Switch, SegmentedControl
**`components/data/`** — DeltaValue, Sparkline, MetricCard, DataTable
**`components/charts/`** — ChartLegend, LineChart, BarChart, DonutChart, BarMeter
**`components/feedback/`** — Alert, Toast, Tooltip, Dialog
**`components/navigation/`** — Tabs, SideNav, Breadcrumb
**`components/disclosure/`** — Accordion, Popover

### Intentional additions

Beyond the standard set, these exist because the domain demands them:

- **Icon** — wrapper for the Lucide glyph set; keeps sizes and colours consistent and makes the icon source swappable in one file.
- **Field** — label/hint/error scaffold shared by every input, so micro-caps labels stay consistent.
- **SegmentedControl** — period and view switching is constant in this product; a Select would be slower and taller.
- **DeltaValue, Sparkline, MetricCard, DataTable** — the summary→detail layering in the brief is not expressible with generic primitives.
- **ChartLegend, LineChart, BarChart, DonutChart, BarMeter** — the brief asks for an extended chart palette; shipping the palette without chart components would leave the most important surface undefined.
- **Accordion, Popover** — the "dig deeper without leaving the view" requirement.

## UI kits

- **`ui_kits/portfolio_terminal/`** — Overview, Positions (with drill-in), Risk & limits, Attribution. Click-through.
- **`ui_kits/research_workspace/`** — Screens, Company deep-dive, Notes. Click-through.

Each kit has `index.html` (interactive, registered as a Design System card and a starting point), `README.md`, and one JSX file per screen. Kits compose the components above; they do not re-implement them.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only. Consumers link this. |
| `tokens/fonts.css` | Webfont loading (Google Fonts; substitution flagged). |
| `tokens/palette.css` | Raw colour ramps: ink, blue, sky, green, red, amber, violet, alphas. |
| `tokens/charts.css` | Categorical, sequential and diverging chart palettes + chart furniture. |
| `tokens/typography.css` | Families, size ramp, weights, tracking, numeric features. |
| `tokens/space.css` | Spacing scale, radii, control heights, layout dimensions. |
| `tokens/elevation.css` | Shadows, insets, focus rings, border shorthands, blur. |
| `tokens/motion.css` | Durations, easings, the standard control transition. |
| `tokens/semantic.css` | Semantic aliases + the `[data-theme="dark"]` remap. |
| `tokens/base.css` | Resets, element defaults, link styles, keyframes, utility classes. |
| `guidelines/*.html` | 24 foundation specimen cards (Colors, Type, Spacing, Elevation, Motion, Brand). |
| `components/**` | React primitives: `.jsx` + `.d.ts` + `.prompt.md` + one card HTML per group. |
| `ui_kits/**` | Full-screen product recreations. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent Skills front matter for use in Claude Code. |
| `assets/` | Empty by design — no logo, font or icon files were supplied. |

## Open questions

1. Real brand name, logo files and licensed fonts.
2. Whether the corporate blue is `#0B4FD9` or something the firm already uses in print.
3. Whether dark mode is a user preference, a time-of-day default, or per-module.
4. Which modules exist beyond portfolio and research (execution? risk-committee reporting? client/IR?).
