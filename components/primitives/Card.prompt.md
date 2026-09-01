The module container — one Card per idea, header states what it is, footer states where the data came from.

```jsx
<Card title="Exposure by sector" subtitle="Net, % NAV" icon="pie-chart"
  actions={<IconButton icon="maximize-2" label="Expand" size="sm" />}
  footer={<span>As of 16:00 ET · Prime broker feed</span>}>
  …
</Card>
```

`padding="none"` when the body is a DataTable. Keep `elevation={0}` in-page; 2–3 belong to Dialog and Popover.
