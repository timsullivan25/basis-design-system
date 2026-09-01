Mutually exclusive options that need a line of explanation each.

```jsx
<Radio name="basis" value={v} onChange={setV} options={[
  { value: 'gross', label: 'Gross exposure', description: 'Long + short, no netting' },
  { value: 'net', label: 'Net exposure' },
]} />
```
