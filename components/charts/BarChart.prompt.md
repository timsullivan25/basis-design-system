Attribution, exposure and contribution. `signed` gives the diverging zero-rule treatment.

```jsx
<BarChart orientation="horizontal" signed formatValue={(v) => v.toFixed(0) + ' bps'} data={attrib} />
<BarChart data={monthly} signed height={140} />
```
