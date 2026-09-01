The module rail. Sections group modules; children appear only under the active module.

```jsx
<SideNav value={v} onChange={setV} header={<Wordmark />} items={[
  { section: 'Portfolio' },
  { value: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { value: 'positions', label: 'Positions', icon: 'table-2', badge: 214,
    children: [{ value: 'longs', label: 'Longs' }, { value: 'shorts', label: 'Shorts' }] },
]} />
```
