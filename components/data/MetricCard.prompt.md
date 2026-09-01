The summary layer. Rows of 3–5 tiles across the top of a view; each one links to its own detail.

```jsx
<MetricCard label="Net exposure" value="42.8" unit="% NAV" delta={-1.4} deltaLabel="vs prior close"
  spark={series} icon="scale" onDrill={() => open('exposure')} footnote="16:00 ET" />
```

`tone` adds a 2px top accent — reserve it for the one tile that needs attention.
