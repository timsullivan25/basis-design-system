Composition where the total matters as much as the split — AUM by strategy, capital by sleeve.

```jsx
<DonutChart data={strategies} total="$4.2B" label="AUM" />
<ChartLegend direction="column" series={strategies.map(s => ({key:s.label,label:s.label,color:s.color,value:s.pct}))} />
```

Slices fall back to --chart-1..12 in order when no color is given.
