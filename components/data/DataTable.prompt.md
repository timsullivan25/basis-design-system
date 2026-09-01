The workhorse of every screen. Put it in a `<Card padding="none">`.

```jsx
<DataTable dense sort={sort} onSortChange={setSort} rows={rows} expandedKey={open}
  onRowClick={(r) => setOpen(open === r.id ? null : r.id)}
  renderDetail={(r) => <PositionDetail row={r} />}
  columns={[
    { key: 'ticker', label: 'Ticker', emphasis: true },
    { key: 'name', label: 'Name', muted: true, maxWidth: 220 },
    { key: 'wgt', label: 'Weight', numeric: true, description: '% of NAV, T+1' },
    { key: 'pnl', label: 'P&L', numeric: true, render: (v) => <DeltaValue value={v} glyph="none" /> },
  ]} />
```

Every numeric column gets `numeric: true`. Explain any derived column with `description` rather than a footnote.
