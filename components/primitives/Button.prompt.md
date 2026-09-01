The standard action control; use `size="sm"` inside toolbars, table rows and panel headers.

```jsx
<Button variant="primary" iconLeft="play">Run backtest</Button>
<Button size="sm" iconRight="chevron-down">Last 30d</Button>
<Button variant="ghost" size="sm" iconLeft="download" />
```

Variants: primary (one per view), secondary (default), ghost (row/toolbar actions), danger, link. Props: `loading`, `selected` (filter toggles), `fullWidth`.
