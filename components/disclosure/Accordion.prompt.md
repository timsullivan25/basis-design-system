The layering workhorse: strategy → sleeve → position. Always put figures in `summary` so the collapsed state still answers a question.

```jsx
<Accordion openKeys={open} onToggle={toggle} items={[
  { key: 'quant', label: 'Quant', icon: 'cpu',
    summary: <><span>38.2% NAV</span><DeltaValue value={0.84} size="xs" /></>,
    content: <DataTable dense … /> }]} />
```
