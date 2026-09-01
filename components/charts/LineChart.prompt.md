Cumulative return, NAV, rolling risk. Pair with ChartLegend above it.

```jsx
<LineChart height={220} zeroLine labels={months} formatY={(v) => v.toFixed(0) + '%'}
  series={[{ key: 'fund', data: fund, color: 'var(--chart-1)' },
           { key: 'bench', data: bench, color: 'var(--chart-benchmark)', dashed: true }]} />
```

Benchmarks are always dashed and always `--chart-benchmark`.
