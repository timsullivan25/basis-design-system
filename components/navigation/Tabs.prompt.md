Switches layers within one subject. Counts belong in `count`, not in the label.

```jsx
<Tabs value={tab} onChange={setTab} tabs={[
  {value:'summary',label:'Summary',icon:'layout-dashboard'},
  {value:'positions',label:'Positions',count:214},
  {value:'risk',label:'Risk'}]} actions={<Button size="sm" iconLeft="download">Export</Button>} />
```
