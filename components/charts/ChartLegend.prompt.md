Series key, placed above the plot. Include the latest value so the legend doubles as a readout.

```jsx
<ChartLegend hidden={hidden} onToggle={toggle} series={[
  { key: 'fund', label: 'Fund', color: 'var(--chart-1)', value: '+12.4%' },
  { key: 'bench', label: 'S&P 500', color: 'var(--chart-benchmark)', dashed: true, value: '+9.1%' }]} />
```
