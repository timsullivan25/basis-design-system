The atom of every performance surface: signed number, directional color, tabular mono.

```jsx
<DeltaValue value={1.42} />
<DeltaValue value={-38} unit="bps" size="sm" glyph="triangle" />
<DeltaValue value={2.9} chip size="lg" />
<DeltaValue value={-1.1} invert unit="%" />   {/* drawdown: down is good */}
```

Never color a delta with anything but --value-up/--value-down. Use `glyph="none"` inside dense tables where the column header already states direction.
