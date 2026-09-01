Standard field. Always `mono` for numbers so digits align down a column.

```jsx
<Input iconLeft="search" placeholder="Ticker, ISIN or name" onClear={reset} value={q} />
<Input mono prefix="$" suffix="mm" defaultValue="12.50" fullWidth={false} style={{width:120}} />
```
