The default period/view switcher. Icon-only segments are fine for view modes.

```jsx
<SegmentedControl size="sm" value={p} onChange={setP} options={[
  {value:'1d',label:'1D'},{value:'1w',label:'1W'},{value:'mtd',label:'MTD'},{value:'ytd',label:'YTD'}]} />
<SegmentedControl value={view} onChange={setView} options={[{value:'table',icon:'table-2'},{value:'chart',icon:'line-chart'}]} />
```
