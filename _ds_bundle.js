/* @ds-bundle: {"format":4,"namespace":"BasisDesignSystem_6e7350","components":[{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"BarMeter","sourcePath":"components/charts/BarMeter.jsx"},{"name":"ChartLegend","sourcePath":"components/charts/ChartLegend.jsx"},{"name":"DonutChart","sourcePath":"components/charts/DonutChart.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DeltaValue","sourcePath":"components/data/DeltaValue.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Popover","sourcePath":"components/disclosure/Popover.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Badge","sourcePath":"components/primitives/Badge.jsx"},{"name":"Button","sourcePath":"components/primitives/Button.jsx"},{"name":"Card","sourcePath":"components/primitives/Card.jsx"},{"name":"Icon","sourcePath":"components/primitives/Icon.jsx"},{"name":"IconButton","sourcePath":"components/primitives/IconButton.jsx"},{"name":"Tag","sourcePath":"components/primitives/Tag.jsx"}],"sourceHashes":{"components/charts/BarChart.jsx":"0d1d18fe95c6","components/charts/BarMeter.jsx":"80ffac73df61","components/charts/ChartLegend.jsx":"9a01d0a69ed7","components/charts/DonutChart.jsx":"a5ee4db47053","components/charts/LineChart.jsx":"ed74bec0a753","components/data/DataTable.jsx":"7c8dbf4be474","components/data/DeltaValue.jsx":"41b709ed3743","components/data/MetricCard.jsx":"14fd18825388","components/data/Sparkline.jsx":"34a06f9382f2","components/disclosure/Accordion.jsx":"1dbee5151d1b","components/disclosure/Popover.jsx":"8f737f8c0037","components/feedback/Alert.jsx":"f53834e6dd9e","components/feedback/Dialog.jsx":"3f5df92d914e","components/feedback/Toast.jsx":"e774dd87adab","components/feedback/Tooltip.jsx":"e002d71b0056","components/forms/Checkbox.jsx":"624d4838ae6f","components/forms/Field.jsx":"4f680820cac0","components/forms/Input.jsx":"c4677bee89ad","components/forms/Radio.jsx":"7fa1b68dc821","components/forms/SegmentedControl.jsx":"c636ba58263f","components/forms/Select.jsx":"df62c3cd1fb4","components/forms/Switch.jsx":"1618a2ced4b7","components/navigation/Breadcrumb.jsx":"04f25c59caf7","components/navigation/SideNav.jsx":"ee3785075796","components/navigation/Tabs.jsx":"85d6fbabf540","components/primitives/Badge.jsx":"28ba000b062d","components/primitives/Button.jsx":"9f19cb37656d","components/primitives/Card.jsx":"9973bfb1e6e0","components/primitives/Icon.jsx":"fcf92c50af93","components/primitives/IconButton.jsx":"fae39f8071d5","components/primitives/Tag.jsx":"30cc5dbcc05b","ui_kits/portfolio_terminal/AppShell.jsx":"bd1dba06ee1c","ui_kits/portfolio_terminal/AttributionScreen.jsx":"4123ee994368","ui_kits/portfolio_terminal/OverviewScreen.jsx":"d8dd5a7f7bea","ui_kits/portfolio_terminal/PositionsScreen.jsx":"432714bd6e2d","ui_kits/portfolio_terminal/RiskScreen.jsx":"844e6980505d","ui_kits/portfolio_terminal/app.jsx":"78443d04ae49","ui_kits/portfolio_terminal/data.jsx":"5e2c6e730af5","ui_kits/research_workspace/CompanyScreen.jsx":"f6f7d1f50281","ui_kits/research_workspace/NotesScreen.jsx":"c7bf272c2a7a","ui_kits/research_workspace/ScreensScreen.jsx":"4c368e37e2dd","ui_kits/research_workspace/app.jsx":"4e4f5b947f15","ui_kits/research_workspace/data.jsx":"99702ce2302f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BasisDesignSystem_6e7350 = window.BasisDesignSystem_6e7350 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/charts/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Categorical bars, vertical or horizontal, signed-aware. */
function BarChart({
  data = [],
  height = 180,
  orientation = 'vertical',
  color = 'var(--chart-1)',
  signed = false,
  formatValue = v => v.toFixed(1),
  showValues = true,
  barSize = 18,
  gap = 6,
  style,
  ...rest
}) {
  const vals = data.map(d => d.value);
  const max = Math.max(0, ...vals),
    min = Math.min(0, ...vals);
  const span = max - min || 1;
  const colorFor = d => d.color || (signed ? d.value >= 0 ? 'var(--chart-pos)' : 'var(--chart-neg)' : color);
  if (orientation === 'horizontal') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap,
        ...style
      }
    }, rest), data.map((d, i) => {
      const zero = -min / span * 100;
      const wpc = Math.abs(d.value) / span * 100;
      return /*#__PURE__*/React.createElement("div", {
        key: d.label || i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-6)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 92,
          flex: '0 0 auto',
          fontSize: 'var(--text-2xs)',
          color: 'var(--text-secondary)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, d.label), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          flex: '1 1 auto',
          height: barSize,
          background: 'var(--chart-band)',
          borderRadius: 'var(--radius-xs)'
        }
      }, signed ? /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: zero + '%',
          top: 0,
          bottom: 0,
          width: 1,
          background: 'var(--chart-axis)'
        }
      }) : null, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          top: 2,
          bottom: 2,
          left: signed ? d.value >= 0 ? zero + '%' : zero - wpc + '%' : 0,
          width: wpc + '%',
          background: colorFor(d),
          borderRadius: 'var(--radius-xs)',
          transition: 'width var(--dur-slow) var(--ease-out)'
        }
      })), showValues ? /*#__PURE__*/React.createElement("span", {
        style: {
          width: 54,
          flex: '0 0 auto',
          textAlign: 'right',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-2xs)',
          fontVariantNumeric: 'var(--numeric-tabular)',
          color: 'var(--text-primary)'
        }
      }, formatValue(d.value)) : null);
    }));
  }
  const zeroPc = -min / span * 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      gap,
      height
    }
  }, signed ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: zeroPc + '%',
      height: 1,
      background: 'var(--chart-axis)'
    }
  }) : null, data.map((d, i) => {
    const hpc = Math.abs(d.value) / span * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: d.label || i,
      style: {
        position: 'relative',
        flex: '1 1 0',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: signed ? d.value >= 0 ? zeroPc + '%' : 'auto' : 0,
        top: signed && d.value < 0 ? 100 - zeroPc + '%' : 'auto',
        height: hpc + '%',
        background: colorFor(d),
        borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0',
        transition: 'height var(--dur-slow) var(--ease-out)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: '1 1 0',
      textAlign: 'center',
      fontSize: 'var(--text-3xs)',
      color: 'var(--chart-label)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/BarMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline utilization/limit bar for table cells and risk rows. */
function BarMeter({
  value = 0,
  max = 100,
  limit,
  color = 'var(--chart-1)',
  height = 6,
  width = '100%',
  showValue = false,
  formatValue = v => v.toFixed(1) + '%',
  style,
  ...rest
}) {
  const pc = Math.max(0, Math.min(100, value / (max || 1) * 100));
  const over = limit !== undefined && value > limit;
  const fill = over ? 'var(--value-down)' : color;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '1 1 auto',
      height,
      background: 'var(--chart-band)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: pc + '%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }), limit !== undefined ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -2,
      bottom: -2,
      left: Math.min(100, limit / (max || 1) * 100) + '%',
      width: 1.5,
      background: 'var(--ink-700)'
    }
  }) : null), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      minWidth: 44,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontVariantNumeric: 'var(--numeric-tabular)',
      color: over ? 'var(--text-negative)' : 'var(--text-body)'
    }
  }, formatValue(value)) : null);
}
Object.assign(__ds_scope, { BarMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarMeter.jsx", error: String((e && e.message) || e) }); }

// components/charts/ChartLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Series key for any chart. Clickable entries toggle series visibility. */
function ChartLegend({
  series = [],
  hidden = [],
  onToggle,
  size = 'md',
  direction = 'row',
  style,
  ...rest
}) {
  const fs = size === 'sm' ? 'var(--text-3xs)' : 'var(--text-2xs)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: direction,
      flexWrap: 'wrap',
      gap: direction === 'row' ? 'var(--space-7)' : 'var(--space-3)',
      alignItems: direction === 'row' ? 'center' : 'stretch',
      ...style
    }
  }, rest), series.map(s => {
    const off = hidden.includes(s.key);
    return /*#__PURE__*/React.createElement("button", {
      key: s.key,
      type: "button",
      onClick: () => onToggle && onToggle(s.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: onToggle ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: 'var(--weight-medium)',
        color: off ? 'var(--text-disabled)' : 'var(--text-secondary)',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: s.dashed ? 12 : 8,
        height: s.dashed ? 0 : 8,
        flex: '0 0 auto',
        background: off ? 'var(--ink-300)' : s.color,
        borderRadius: s.dashed ? 0 : 2,
        borderTop: s.dashed ? '1.5px dashed ' + (off ? 'var(--ink-300)' : s.color) : undefined
      }
    }), s.label, s.value !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontVariantNumeric: 'var(--numeric-tabular)',
        color: off ? 'var(--text-disabled)' : 'var(--text-primary)'
      }
    }, s.value) : null);
  }));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/charts/DonutChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Composition ring with a centered total. Six slices maximum. */
function DonutChart({
  data = [],
  size = 132,
  thickness = 14,
  total,
  label,
  formatTotal = v => String(v),
  style,
  ...rest
}) {
  const sum = data.reduce((a, d) => a + Math.abs(d.value), 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--chart-band)",
    strokeWidth: thickness
  }), data.map((d, i) => {
    const len = Math.abs(d.value) / sum * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: d.label || i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: d.color || 'var(--chart-' + (i % 12 + 1) + ')',
      strokeWidth: thickness,
      strokeDasharray: len + ' ' + (c - len),
      strokeDashoffset: -offset,
      style: {
        transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)'
      }
    });
    offset += len;
    return el;
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-medium)',
      fontVariantNumeric: 'var(--numeric-tabular)',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, formatTotal(total !== undefined ? total : sum)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label) : null));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-series time-series plot: horizontal gridlines, optional zero rule, hover crosshair. */
function LineChart({
  series = [],
  labels = [],
  height = 200,
  width,
  padding = {
    top: 8,
    right: 8,
    bottom: 18,
    left: 38
  },
  yTicks = 4,
  zeroLine = false,
  formatY = v => v.toFixed(0),
  area = false,
  hidden = [],
  style,
  ...rest
}) {
  const [box, setBox] = React.useState({
    w: width || 640
  });
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (width || !ref.current) return;
    const ro = new ResizeObserver(es => setBox({
      w: es[0].contentRect.width
    }));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [width]);
  const [hoverI, setHoverI] = React.useState(null);
  const vis = series.filter(s => !hidden.includes(s.key));
  const w = width || box.w,
    h = height;
  const pl = padding.left,
    pr = padding.right,
    pt = padding.top,
    pb = padding.bottom;
  const iw = Math.max(10, w - pl - pr),
    ih = Math.max(10, h - pt - pb);
  const all = vis.flatMap(s => s.data || []);
  const min = all.length ? Math.min(...all) : 0,
    max = all.length ? Math.max(...all) : 1;
  const lo = zeroLine ? Math.min(0, min) : min,
    hi = max;
  const span = hi - lo || 1;
  const n = Math.max(...vis.map(s => (s.data || []).length), 1);
  const x = i => pl + (n > 1 ? i * iw / (n - 1) : iw / 2);
  const y = v => pt + ih - (v - lo) / span * ih;
  const ticks = Array.from({
    length: yTicks + 1
  }, (_, i) => lo + span * i / yTicks);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: '0 0 ' + w + ' ' + h,
    style: {
      display: 'block',
      overflow: 'visible'
    },
    onMouseMove: e => {
      const r = e.currentTarget.getBoundingClientRect();
      const i = Math.round((e.clientX - r.left - pl) / iw * (n - 1));
      setHoverI(Math.max(0, Math.min(n - 1, i)));
    },
    onMouseLeave: () => setHoverI(null)
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pl,
    x2: w - pr,
    y1: y(t),
    y2: y(t),
    stroke: "var(--chart-grid)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: pl - 6,
    y: y(t) + 3,
    textAnchor: "end",
    style: {
      fill: 'var(--chart-label)',
      fontFamily: 'var(--font-mono)',
      fontSize: 9
    }
  }, formatY(t)))), zeroLine ? /*#__PURE__*/React.createElement("line", {
    x1: pl,
    x2: w - pr,
    y1: y(0),
    y2: y(0),
    stroke: "var(--chart-axis)",
    strokeWidth: "1"
  }) : null, vis.map(s => {
    const d = (s.data || []).map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
    return /*#__PURE__*/React.createElement("g", {
      key: s.key
    }, area ? /*#__PURE__*/React.createElement("path", {
      d: d + ' L ' + x(n - 1) + ' ' + y(lo) + ' L ' + x(0) + ' ' + y(lo) + ' Z',
      fill: s.color,
      opacity: "0.10"
    }) : null, /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: s.color,
      strokeWidth: s.dashed ? 1.25 : 1.75,
      strokeDasharray: s.dashed ? '3 3' : undefined,
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }));
  }), hoverI !== null ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: x(hoverI),
    x2: x(hoverI),
    y1: pt,
    y2: pt + ih,
    stroke: "var(--chart-crosshair)",
    strokeWidth: "1",
    strokeDasharray: "2 2"
  }), vis.map(s => s.data && s.data[hoverI] !== undefined ? /*#__PURE__*/React.createElement("circle", {
    key: s.key,
    cx: x(hoverI),
    cy: y(s.data[hoverI]),
    r: "2.75",
    fill: "var(--surface-card)",
    stroke: s.color,
    strokeWidth: "1.5"
  }) : null)) : null, labels.map((l, i) => {
    const step = Math.ceil(labels.length / 7);
    if (i % step) return null;
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: x(i),
      y: h - 4,
      textAnchor: "middle",
      style: {
        fill: 'var(--chart-label)',
        fontFamily: 'var(--font-sans)',
        fontSize: 9
      }
    }, l);
  })));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline trend line, no axes. Signals shape only — pair with a number. */
function Sparkline({
  data = [],
  width = 72,
  height = 20,
  color,
  area = true,
  baseline = false,
  strokeWidth = 1.25,
  style,
  ...rest
}) {
  if (!data.length) return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: style
  });
  const min = Math.min(...data),
    max = Math.max(...data);
  const span = max - min || 1;
  const dx = data.length > 1 ? (width - 2) / (data.length - 1) : 0;
  const y = v => height - 1.5 - (v - min) / span * (height - 3);
  const pts = data.map((v, i) => [1 + i * dx, y(v)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' ');
  const up = data[data.length - 1] >= data[0];
  const c = color || (up ? 'var(--value-up)' : 'var(--value-down)');
  const id = React.useMemo(() => 'spark' + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), area ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: c,
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: c,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: line + ' L ' + (1 + (data.length - 1) * dx).toFixed(2) + ' ' + height + ' L 1 ' + height + ' Z',
    fill: 'url(#' + id + ')',
    stroke: "none"
  })) : null, baseline ? /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: y(data[0]),
    x2: width,
    y2: y(data[0]),
    stroke: "var(--chart-grid)",
    strokeWidth: "1",
    strokeDasharray: "2 2"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: pts[pts.length - 1][0],
    cy: pts[pts.length - 1][1],
    r: "1.75",
    fill: c
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Popover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Click-anchored panel for methodology notes, column pickers and mini-forms. */
function Popover({
  trigger,
  children,
  open,
  onOpenChange,
  placement = 'bottom-start',
  width = 260,
  title,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(false);
  const isOpen = open === undefined ? inner : open;
  const set = v => {
    setInner(v);
    onOpenChange && onOpenChange(v);
  };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!isOpen) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) set(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [isOpen]);
  const pos = {
    'bottom-start': {
      top: '100%',
      left: 0,
      marginTop: 4
    },
    'bottom-end': {
      top: '100%',
      right: 0,
      marginTop: 4
    },
    'top-start': {
      bottom: '100%',
      left: 0,
      marginBottom: 4
    },
    'right-start': {
      top: 0,
      left: '100%',
      marginLeft: 4
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => set(!isOpen),
    style: {
      display: 'inline-flex'
    }
  }, trigger), isOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 80,
      width,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden',
      animation: 'basis-pop-in var(--dur-fast) var(--ease-out)',
      textAlign: 'left',
      ...pos
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-table-head)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-snug)'
    }
  }, children)) : null);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Popover.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover explanation for a glyph, abbreviation or derived figure. */
function Tooltip({
  content,
  children,
  placement = 'top',
  delay = 120,
  maxWidth = 240,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const show = () => {
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, rest), children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 60,
      maxWidth,
      padding: 'var(--space-3) var(--space-5)',
      background: 'var(--surface-tooltip)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-normal)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-3)',
      animation: 'basis-fade-in var(--dur-fast) var(--ease-out)',
      pointerEvents: 'none',
      ...pos
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio group — one column or one row of mutually exclusive options. */
function Radio({
  options = [],
  value,
  onChange,
  name,
  direction = 'column',
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-9)' : 'var(--space-5)',
      ...style
    }
  }, rest), options.map(o => {
    const on = value === o.value;
    const off = disabled || o.disabled;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: 'inline-flex',
        alignItems: o.description ? 'flex-start' : 'center',
        gap: 'var(--space-4)',
        cursor: off ? 'not-allowed' : 'pointer',
        opacity: off ? 0.6 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      disabled: off,
      onChange: () => onChange && onChange(o.value),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 14,
        height: 14,
        flex: '0 0 auto',
        marginTop: o.description ? 2 : 0,
        background: 'var(--field-bg)',
        border: '1px solid ' + (on ? 'var(--action-primary-bg)' : 'var(--field-border)'),
        borderRadius: '50%',
        boxShadow: on ? 'none' : 'var(--shadow-inset-field)',
        transition: 'var(--transition-control)'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--action-primary-bg)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        lineHeight: 1.25
      }
    }, o.label), o.description ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-secondary)'
      }
    }, o.description) : null));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle for immediate-effect settings (live updates, dark mode, overlays). */
function Switch({
  checked = false,
  onChange,
  label,
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const w = size === 'sm' ? 24 : 30,
    h = size === 'sm' ? 14 : 17,
    k = h - 4;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      if (disabled) return;
      e.preventDefault();
      onChange && onChange(!checked);
    },
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: w,
      height: h,
      flex: '0 0 auto',
      background: checked ? 'var(--action-primary-bg)' : 'var(--ink-200)',
      border: '1px solid ' + (checked ? 'var(--action-primary-bg)' : 'var(--ink-200)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: checked ? w - k - 3 : 1,
      width: k,
      height: k,
      background: 'var(--white)',
      borderRadius: '50%',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-base) var(--ease-snap)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_UMD = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js';
const pascal = n => String(n).split(/[-_ ]+/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
let loading = null;
function ensureLucide() {
  if (typeof window === 'undefined') return null;
  if (window.lucide && window.lucide.icons) return window.lucide;
  if (!loading) {
    loading = new Promise(res => {
      const existing = document.querySelector('script[data-basis-lucide]');
      if (existing) {
        existing.addEventListener('load', () => res(window.lucide));
        return;
      }
      const s = document.createElement('script');
      s.src = LUCIDE_UMD;
      s.setAttribute('data-basis-lucide', '');
      s.onload = () => res(window.lucide);
      s.onerror = () => res(null);
      document.head.appendChild(s);
    });
  }
  return null;
}

/** Lucide glyph rendered as inline SVG so it inherits color and stays crisp at any size. */
function Icon({
  name = 'circle',
  size = 14,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  title,
  ...rest
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    if (window.lucide && window.lucide.icons) return;
    ensureLucide();
    if (loading) loading.then(() => force());
  }, [name]);
  const set = typeof window !== 'undefined' && window.lucide && window.lucide.icons || null;
  if (!set) {
    ensureLucide();
  }
  const node = set ? set[pascal(name)] || set.Circle : null;
  const children = node && Array.isArray(node[2]) ? node[2] : [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title || name,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      verticalAlign: '-0.15em',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, children.map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/DeltaValue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function fmtDelta(v, {
  unit = '%',
  decimals = 2,
  signed = true
}) {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  const n = Math.abs(v).toFixed(decimals);
  const sign = !signed ? '' : v > 0 ? '+' : v < 0 ? '−' : '';
  return sign + n + (unit === 'bps' ? '' : unit) + (unit === 'bps' ? ' bps' : '');
}

/** Signed change with directional color and glyph. The atom of every P&L surface. */
function DeltaValue({
  value,
  unit = '%',
  decimals = 2,
  size = 'md',
  glyph = 'arrow',
  chip = false,
  signed = true,
  invert = false,
  style,
  ...rest
}) {
  const dir = value > 0 ? 1 : value < 0 ? -1 : 0;
  const good = invert ? -dir : dir;
  const color = good > 0 ? 'var(--value-up)' : good < 0 ? 'var(--value-down)' : 'var(--value-flat)';
  const bg = good > 0 ? 'var(--value-up-bg)' : good < 0 ? 'var(--value-down-bg)' : 'var(--status-neutral-bg)';
  const fs = {
    xs: 'var(--text-2xs)',
    sm: 'var(--text-xs)',
    md: 'var(--text-sm)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-2xl)'
  }[size] || 'var(--text-sm)';
  const isz = {
    xs: 9,
    sm: 10,
    md: 11,
    lg: 13,
    xl: 16
  }[size] || 11;
  const name = glyph === 'triangle' ? dir >= 0 ? 'triangle' : 'triangle' : dir > 0 ? 'arrow-up-right' : dir < 0 ? 'arrow-down-right' : 'minus';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: chip ? '2px var(--space-3)' : 0,
      background: chip ? bg : 'transparent',
      borderRadius: chip ? 'var(--radius-sm)' : 0,
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--weight-medium)',
      fontVariantNumeric: 'var(--numeric-tabular)',
      color,
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), glyph !== 'none' && dir !== 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: isz,
    style: glyph === 'triangle' ? {
      transform: dir < 0 ? 'rotate(180deg)' : 'none'
    } : undefined
  }) : null, fmtDelta(value, {
    unit,
    decimals,
    signed
  }));
}
Object.assign(__ds_scope, { DeltaValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DeltaValue.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Layer-1 summary tile: one number, its change, and an optional way in. */
function MetricCard({
  label,
  value,
  unit,
  delta,
  deltaUnit = '%',
  deltaLabel,
  spark,
  sparkColor,
  icon,
  footnote,
  onDrill,
  drillLabel = 'Detail',
  invertDelta = false,
  tone = 'default',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accent = {
    default: 'transparent',
    brand: 'var(--blue-700)',
    positive: 'var(--green-600)',
    negative: 'var(--red-600)',
    caution: 'var(--amber-600)'
  }[tone] || 'transparent';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onDrill,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      minWidth: 0,
      padding: 'var(--space-7) var(--space-8)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover && onDrill ? 'var(--blue-300)' : 'var(--border-default)'),
      borderTop: tone === 'default' ? '1px solid var(--border-default)' : '2px solid ' + accent,
      borderRadius: 'var(--radius-md)',
      boxShadow: hover && onDrill ? 'var(--shadow-2)' : 'none',
      cursor: onDrill ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minWidth: 0
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    color: "var(--text-tertiary)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), onDrill ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: hover ? 'var(--text-brand)' : 'var(--text-tertiary)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, drillLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 11,
    style: {
      transform: hover ? 'translateX(1px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-5)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      fontVariantNumeric: 'var(--numeric-tabular)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginLeft: 2
    }
  }, unit) : null), spark ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      paddingBottom: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: spark,
    color: sparkColor,
    width: 84,
    height: 22
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      minHeight: 14
    }
  }, delta !== undefined && delta !== null ? /*#__PURE__*/React.createElement(__ds_scope.DeltaValue, {
    value: delta,
    unit: deltaUnit,
    size: "sm",
    invert: invertDelta
  }) : null, deltaLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-tertiary)'
    }
  }, deltaLabel) : null, footnote ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-tertiary)'
    }
  }, footnote) : null));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Progressive disclosure row: summary always visible, detail on demand. */
function Accordion({
  items = [],
  openKeys = [],
  onToggle,
  dense = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => {
    const open = openKeys.includes(it.key);
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: {
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onToggle && onToggle(it.key),
      onMouseEnter: () => setHover(it.key),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        width: '100%',
        minHeight: dense ? 'var(--control-md)' : 40,
        padding: dense ? '0 var(--space-6)' : '0 var(--space-7)',
        background: open ? 'var(--surface-table-head)' : hover === it.key ? 'var(--surface-hover)' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 12,
      color: "var(--text-tertiary)",
      style: {
        transform: open ? 'rotate(90deg)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out)'
      }
    }), it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 13,
      color: "var(--text-secondary)"
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap'
      }
    }, it.label), it.summary ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-secondary)'
      }
    }, it.summary) : null), open ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: dense ? 'var(--space-6)' : 'var(--space-8)',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-app)',
        animation: 'basis-fade-in var(--dur-base) var(--ease-out)'
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 14px checkbox with indeterminate state for tree/table selection. */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  description,
  disabled = false,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      if (disabled) return;
      e.preventDefault();
      onChange && onChange(!checked);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 14,
      height: 14,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      background: on ? 'var(--action-primary-bg)' : 'var(--field-bg)',
      border: '1px solid ' + (on ? 'var(--action-primary-bg)' : 'var(--field-border)'),
      borderRadius: 'var(--radius-xs)',
      boxShadow: on ? 'none' : 'var(--shadow-inset-field)',
      transition: 'var(--transition-control)',
      color: 'var(--white)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 10
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 10
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.25
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dense sortable table with optional group rows and expandable detail. */
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  dense = false,
  striped = false,
  sort,
  onSortChange,
  selectable = false,
  selected = [],
  onSelectedChange,
  expandedKey,
  onRowClick,
  renderDetail,
  stickyHeader = true,
  maxHeight,
  style,
  ...rest
}) {
  const h = dense ? 'var(--row-h-dense)' : 'var(--row-h)';
  const [hoverRow, setHoverRow] = React.useState(null);
  const allSel = selectable && rows.length > 0 && selected.length === rows.length;
  const toggleAll = () => onSelectedChange && onSelectedChange(allSel ? [] : rows.map(r => r[rowKey]));
  const toggleRow = k => onSelectedChange && onSelectedChange(selected.includes(k) ? selected.filter(x => x !== k) : [...selected, k]);
  const align = c => c.align || (c.numeric ? 'right' : 'left');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'auto',
      maxHeight,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: dense ? 'var(--text-xs)' : 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      position: stickyHeader ? 'sticky' : 'static',
      top: 0,
      zIndex: 2,
      width: 30,
      height: 'var(--subbar-h)',
      padding: '0 var(--space-5)',
      background: 'var(--surface-table-head)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allSel,
    indeterminate: !allSel && selected.length > 0,
    onChange: toggleAll
  })) : null, columns.map(c => {
    const active = sort && sort.key === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      onClick: () => c.sortable !== false && onSortChange && onSortChange({
        key: c.key,
        dir: active && sort.dir === 'desc' ? 'asc' : 'desc'
      }),
      style: {
        position: stickyHeader ? 'sticky' : 'static',
        top: 0,
        zIndex: 2,
        height: 'var(--subbar-h)',
        padding: '0 var(--space-6)',
        width: c.width,
        textAlign: align(c),
        whiteSpace: 'nowrap',
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: 'var(--surface-table-head)',
        borderBottom: '1px solid var(--border-default)',
        cursor: c.sortable === false ? 'default' : 'pointer',
        userSelect: 'none'
      },
      title: c.description
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        flexDirection: align(c) === 'right' ? 'row-reverse' : 'row'
      }
    }, c.label, active ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: sort.dir === 'asc' ? 'arrow-up' : 'arrow-down',
      size: 10,
      color: "var(--text-brand)"
    }) : null, c.description ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "info",
      size: 10,
      color: "var(--text-tertiary)"
    }) : null));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const k = r[rowKey];
    const isGroup = r.__group;
    const expanded = expandedKey === k;
    if (isGroup) {
      return /*#__PURE__*/React.createElement("tr", {
        key: k
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: columns.length + (selectable ? 1 : 0),
        style: {
          height: 'var(--control-sm)',
          padding: '0 var(--space-6)',
          background: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: 'var(--text-2xs)',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)'
        }
      }, r.__group));
    }
    const hovered = hoverRow === k;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement("tr", {
      onMouseEnter: () => setHoverRow(k),
      onMouseLeave: () => setHoverRow(null),
      onClick: () => onRowClick && onRowClick(r),
      style: {
        background: expanded ? 'var(--surface-selected)' : hovered ? 'var(--surface-hover)' : striped && i % 2 ? 'var(--surface-table-stripe)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background-color var(--dur-instant) var(--ease-out)'
      }
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '0 var(--space-5)',
        borderBottom: '1px solid var(--border-subtle)'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: selected.includes(k),
      onChange: () => toggleRow(k)
    })) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        height: h,
        padding: '0 var(--space-6)',
        textAlign: align(c),
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: c.numeric ? 'var(--font-mono)' : 'var(--font-sans)',
        fontVariantNumeric: c.numeric ? 'var(--numeric-tabular)' : undefined,
        fontWeight: c.emphasis ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: c.muted ? 'var(--text-secondary)' : 'var(--text-body)',
        whiteSpace: 'nowrap',
        maxWidth: c.maxWidth,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, c.render ? c.render(r[c.key], r) : r[c.key]))), expanded && renderDetail ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: columns.length + (selectable ? 1 : 0),
      style: {
        padding: 0,
        background: 'var(--surface-app)',
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        animation: 'basis-fade-in var(--dur-base) var(--ease-out)'
      }
    }, renderDetail(r)))) : null);
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + help/error scaffold shared by every input. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  inline = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',
      alignItems: inline ? 'center' : 'stretch',
      gap: inline ? 'var(--space-6)' : 'var(--space-3)',
      minWidth: 0,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      width: inline ? 120 : undefined,
      flex: inline ? '0 0 auto' : undefined
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-negative)'
    }
  }, "*") : null, hint && !error ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 11,
    color: "var(--text-tertiary)",
    title: hint
  }) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: '1 1 auto'
    }
  }, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-negative)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 11
  }), error) : hint && !label ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-tertiary)'
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_SIZES = {
  sm: {
    h: 'var(--control-sm)',
    fs: 'var(--text-xs)',
    px: 'var(--space-4)',
    icon: 12
  },
  md: {
    h: 'var(--control-md)',
    fs: 'var(--text-sm)',
    px: 'var(--space-5)',
    icon: 14
  },
  lg: {
    h: 'var(--control-lg)',
    fs: 'var(--text-base)',
    px: 'var(--space-6)',
    icon: 15
  }
};

/** Single-line text/number input with optional icons, prefix and unit suffix. */
function Input({
  size = 'md',
  iconLeft,
  iconRight,
  prefix,
  suffix,
  invalid = false,
  disabled = false,
  mono = false,
  fullWidth = true,
  style,
  onClear,
  value,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = FIELD_SIZES[size] || FIELD_SIZES.md;
  const border = invalid ? 'var(--red-600)' : focus ? 'var(--border-focus)' : hover ? 'var(--field-border-hover)' : 'var(--field-border)';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: fullWidth ? '100%' : undefined,
      height: s.h,
      padding: '0 ' + s.px,
      boxSizing: 'border-box',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? invalid ? 'var(--focus-ring-danger)' : 'var(--focus-ring)' : 'var(--shadow-inset-field)',
      transition: 'var(--transition-control)',
      minWidth: 0,
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon,
    color: "var(--text-tertiary)"
  }) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.fs,
      color: 'var(--text-tertiary)',
      flex: '0 0 auto'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      width: '100%',
      height: '100%',
      padding: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: s.fs,
      fontVariantNumeric: mono ? 'var(--numeric-tabular)' : undefined,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-tertiary)',
      flex: '0 0 auto'
    }
  }, suffix) : null, onClear && value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear",
    onClick: onClear,
    style: {
      display: 'inline-flex',
      padding: 0,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-tertiary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: s.icon
  })) : null, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    color: "var(--text-tertiary)"
  }) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 2–5 short mutually exclusive options in one compact row. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  style,
  ...rest
}) {
  const h = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      gap: 1,
      height: h,
      padding: 2,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), options.map(o => {
    const on = value === o.value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        flex: fullWidth ? '1 1 0' : '0 0 auto',
        height: '100%',
        padding: '0 var(--space-6)',
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: on ? 'var(--surface-card)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        boxShadow: on ? 'var(--shadow-1)' : 'none',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
        whiteSpace: 'nowrap'
      }
    }, o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: size === 'sm' ? 11 : 12
    }) : null, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_SIZES = {
  sm: {
    h: 'var(--control-sm)',
    fs: 'var(--text-xs)',
    px: 'var(--space-4)',
    icon: 12
  },
  md: {
    h: 'var(--control-md)',
    fs: 'var(--text-sm)',
    px: 'var(--space-5)',
    icon: 14
  },
  lg: {
    h: 'var(--control-lg)',
    fs: 'var(--text-base)',
    px: 'var(--space-6)',
    icon: 15
  }
};

/** Native select styled to match Input; chevron is ours. */
function Select({
  options = [],
  size = 'md',
  iconLeft,
  disabled = false,
  invalid = false,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = FIELD_SIZES[size] || FIELD_SIZES.md;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width: fullWidth ? '100%' : undefined,
      height: s.h,
      padding: '0 ' + s.px,
      boxSizing: 'border-box',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: '1px solid ' + (invalid ? 'var(--red-600)' : focus ? 'var(--border-focus)' : hover ? 'var(--field-border-hover)' : 'var(--field-border)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-inset-field)',
      transition: 'var(--transition-control)',
      minWidth: 0,
      ...style
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon,
    color: "var(--text-tertiary)"
  }) : null, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: '1 1 auto',
      minWidth: 0,
      width: '100%',
      height: '100%',
      padding: 0,
      paddingRight: 'var(--space-6)',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: s.icon,
    color: "var(--text-tertiary)",
    style: {
      position: 'absolute',
      right: s.px,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Drill-path trail. Shows how deep the user is and lets them climb back out. */
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minWidth: 0,
      fontSize: 'var(--text-xs)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.value || i
    }, i > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 11,
      color: "var(--text-tertiary)"
    }) : null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: last,
      onClick: () => !last && onNavigate && onNavigate(it.value, i),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: last ? 'default' : 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: last ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: last ? 'var(--text-primary)' : 'var(--text-secondary)',
        whiteSpace: 'nowrap',
        maxWidth: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 12
    }) : null, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Left rail: modules at the top level, workspaces nested under them. */
function SideNav({
  items = [],
  value,
  onChange,
  header,
  footer,
  collapsed = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: collapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)',
      flex: '0 0 auto',
      background: 'var(--surface-chrome)',
      borderRight: '1px solid var(--border-default)',
      transition: 'width var(--dur-base) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 'var(--topbar-h)',
      padding: '0 var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      flex: '0 0 auto'
    }
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      overflow: 'auto',
      padding: 'var(--space-5) var(--space-4)'
    }
  }, items.map((item, i) => {
    if (item.section) {
      return collapsed ? /*#__PURE__*/React.createElement("div", {
        key: 's' + i,
        style: {
          height: 1,
          margin: 'var(--space-5) var(--space-4)',
          background: 'var(--border-subtle)'
        }
      }) : /*#__PURE__*/React.createElement("div", {
        key: 's' + i,
        style: {
          padding: 'var(--space-6) var(--space-5) var(--space-3)',
          fontSize: 'var(--text-3xs)',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)'
        }
      }, item.section);
    }
    const on = value === item.value;
    const hv = hover === item.value;
    return /*#__PURE__*/React.createElement("div", {
      key: item.value
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onChange && onChange(item.value),
      onMouseEnter: () => setHover(item.value),
      onMouseLeave: () => setHover(null),
      title: collapsed ? item.label : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        width: '100%',
        height: 'var(--control-md)',
        padding: '0 var(--space-5)',
        background: on ? 'var(--surface-selected)' : hv ? 'var(--surface-hover)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: on ? 'var(--text-brand)' : 'var(--text-body)',
        transition: 'var(--transition-control)',
        textAlign: 'left'
      }
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 15,
      color: on ? 'var(--text-brand)' : 'var(--text-secondary)'
    }) : null, !collapsed ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, item.label) : null, !collapsed && item.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-3xs)',
        fontVariantNumeric: 'var(--numeric-tabular)',
        color: 'var(--text-tertiary)'
      }
    }, item.badge) : null), !collapsed && on && item.children ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'var(--space-1) 0 var(--space-3) calc(var(--space-5) + 15px + var(--space-5) / 2)',
        paddingLeft: 'var(--space-5)',
        borderLeft: '1px solid var(--border-default)'
      }
    }, item.children.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.value,
      type: "button",
      onClick: () => onChange && onChange(c.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        height: 'var(--control-sm)',
        padding: '0 var(--space-4)',
        background: 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-secondary)',
        textAlign: 'left'
      }
    }, c.label))) : null);
  })), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      flex: '0 0 auto'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs — the primary within-view layer switch. */
function Tabs({
  tabs = [],
  value,
  onChange,
  size = 'md',
  actions,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const fs = size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)';
  const h = size === 'sm' ? 'var(--subbar-h)' : 'var(--topbar-h)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-8)',
      height: h,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-8)',
      minWidth: 0,
      overflow: 'auto'
    }
  }, tabs.map(t => {
    const on = value === t.value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      onClick: () => onChange && onChange(t.value),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-primary)' : hover === t.value ? 'var(--text-body)' : 'var(--text-secondary)',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 13
    }) : null, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        fontVariantNumeric: 'var(--numeric-tabular)',
        color: 'var(--text-tertiary)'
      }
    }, t.count) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--blue-700)' : 'transparent',
        borderRadius: '1px 1px 0 0',
        transition: 'background-color var(--dur-fast) var(--ease-out)'
      }
    }));
  })), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_TONES = {
  neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-fg)', 'var(--status-neutral-border)'],
  info: ['var(--status-info-bg)', 'var(--status-info-fg)', 'var(--status-info-border)'],
  positive: ['var(--status-positive-bg)', 'var(--status-positive-fg)', 'var(--status-positive-border)'],
  negative: ['var(--status-negative-bg)', 'var(--status-negative-fg)', 'var(--status-negative-border)'],
  caution: ['var(--status-caution-bg)', 'var(--status-caution-fg)', 'var(--status-caution-border)'],
  brand: ['var(--blue-700)', 'var(--white)', 'transparent']
};

/** Status pill. Reads state, not identity — use Tag for user-applied labels. */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  icon,
  dot = false,
  subtle = true,
  style,
  ...rest
}) {
  const [bg, fg, bd] = BADGE_TONES[tone] || BADGE_TONES.neutral;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 'var(--space-2)' : 'var(--space-3)',
      height: small ? 'var(--control-xs)' : 'var(--control-sm)',
      padding: '0 ' + (small ? 'var(--space-3)' : 'var(--space-4)'),
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 'var(--text-3xs)' : 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1,
      color: subtle ? fg : 'var(--white)',
      background: subtle ? bg : fg,
      border: '1px solid ' + (subtle ? bd : 'transparent'),
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      flex: '0 0 auto'
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: small ? 10 : 11
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Badge.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_SIZES = {
  xs: {
    h: 'var(--control-xs)',
    px: 'var(--space-3)',
    fs: 'var(--text-2xs)',
    icon: 11,
    gap: 'var(--space-2)'
  },
  sm: {
    h: 'var(--control-sm)',
    px: 'var(--space-4)',
    fs: 'var(--text-xs)',
    icon: 12,
    gap: 'var(--space-2)'
  },
  md: {
    h: 'var(--control-md)',
    px: 'var(--space-6)',
    fs: 'var(--text-sm)',
    icon: 14,
    gap: 'var(--space-3)'
  },
  lg: {
    h: 'var(--control-lg)',
    px: 'var(--space-8)',
    fs: 'var(--text-base)',
    icon: 15,
    gap: 'var(--space-3)'
  }
};
const BTN_VARIANTS = {
  primary: {
    bg: 'var(--action-primary-bg)',
    bgH: 'var(--action-primary-bg-hover)',
    fg: 'var(--action-primary-fg)',
    bd: 'transparent',
    sh: 'var(--shadow-1)'
  },
  secondary: {
    bg: 'var(--action-secondary-bg)',
    bgH: 'var(--action-secondary-bg-hover)',
    fg: 'var(--action-secondary-fg)',
    bd: 'var(--action-secondary-border)',
    sh: 'var(--shadow-1)'
  },
  ghost: {
    bg: 'transparent',
    bgH: 'var(--action-ghost-bg-hover)',
    fg: 'var(--action-ghost-fg)',
    bd: 'transparent',
    sh: 'none'
  },
  danger: {
    bg: 'var(--action-danger-bg)',
    bgH: 'var(--action-danger-bg-hover)',
    fg: 'var(--white)',
    bd: 'transparent',
    sh: 'var(--shadow-1)'
  },
  link: {
    bg: 'transparent',
    bgH: 'transparent',
    fg: 'var(--text-link)',
    bd: 'transparent',
    sh: 'none'
  }
};

/** Compact action button. */
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  loading = false,
  fullWidth = false,
  selected = false,
  type = 'button',
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const v = BTN_VARIANTS[variant] || BTN_VARIANTS.secondary;
  const idle = selected ? 'var(--surface-selected)' : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: '0 ' + s.px,
      boxSizing: 'border-box',
      font: 'inherit',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-normal)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: disabled ? 'var(--text-disabled)' : v.fg,
      background: disabled ? 'var(--field-bg-disabled)' : hover && !loading ? v.bgH : idle,
      border: '1px solid ' + (disabled ? 'var(--border-default)' : selected ? 'var(--blue-300)' : v.bd),
      borderRadius: 'var(--radius-md)',
      boxShadow: disabled ? 'none' : v.sh,
      textDecoration: variant === 'link' && hover ? 'underline' : 'none',
      transform: down && !disabled ? 'translateY(0.5px)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-out)',
      opacity: loading ? 0.75 : 1,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.icon,
    style: {
      animation: 'basis-spin 700ms linear infinite'
    }
  }) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Button.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container: 1px hairline, 5px radius, flat by default. */
function Card({
  children,
  title,
  subtitle,
  icon,
  actions,
  footer,
  padding = 'md',
  elevation = 0,
  dense = false,
  style,
  bodyStyle,
  ...rest
}) {
  const pad = {
    none: '0',
    sm: 'var(--space-6)',
    md: 'var(--space-8)',
    lg: 'var(--space-10)'
  }[padding] || 'var(--space-8)';
  const shadow = ['none', 'var(--shadow-1)', 'var(--shadow-2)', 'var(--shadow-3)'][elevation] || 'none';
  const hasHeader = title || actions;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: shadow,
      overflow: 'hidden',
      ...style
    }
  }, rest), hasHeader ? /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      minHeight: dense ? 'var(--subbar-h)' : 40,
      padding: dense ? '0 var(--space-6)' : '0 var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      flex: '0 0 auto'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--text-secondary)"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, actions)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      minWidth: 0,
      flex: '1 1 auto',
      ...bodyStyle
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      minHeight: 'var(--subbar-h)',
      padding: '0 var(--space-8)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-table-head)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Card.jsx", error: String((e && e.message) || e) }); }

// components/primitives/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IB_SIZES = {
  xs: {
    box: 'var(--control-xs)',
    icon: 11
  },
  sm: {
    box: 'var(--control-sm)',
    icon: 13
  },
  md: {
    box: 'var(--control-md)',
    icon: 14
  },
  lg: {
    box: 'var(--control-lg)',
    icon: 16
  }
};

/** Square icon-only control for toolbars, table rows and panel headers. */
function IconButton({
  icon = 'more-horizontal',
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  selected = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = IB_SIZES[size] || IB_SIZES.md;
  const bordered = variant === 'outline';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      padding: 0,
      boxSizing: 'border-box',
      color: disabled ? 'var(--text-disabled)' : selected ? 'var(--text-brand)' : 'var(--action-ghost-fg)',
      background: selected ? 'var(--surface-selected)' : hover && !disabled ? 'var(--action-ghost-bg-hover)' : bordered ? 'var(--action-secondary-bg)' : 'transparent',
      border: '1px solid ' + (bordered ? 'var(--action-secondary-border)' : 'transparent'),
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ALERT_TONES = {
  info: ['var(--status-info-bg)', 'var(--status-info-border)', 'var(--status-info-fg)', 'info'],
  positive: ['var(--status-positive-bg)', 'var(--status-positive-border)', 'var(--status-positive-fg)', 'check-circle-2'],
  caution: ['var(--status-caution-bg)', 'var(--status-caution-border)', 'var(--status-caution-fg)', 'alert-triangle'],
  negative: ['var(--status-negative-bg)', 'var(--status-negative-border)', 'var(--status-negative-fg)', 'octagon-alert'],
  neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-border)', 'var(--status-neutral-fg)', 'info']
};

/** Inline message bound to the view it appears in. */
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  actions,
  onDismiss,
  compact = false,
  style,
  ...rest
}) {
  const [bg, bd, fg, defIcon] = ALERT_TONES[tone] || ALERT_TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: compact ? 'center' : 'flex-start',
      gap: 'var(--space-5)',
      padding: compact ? 'var(--space-4) var(--space-6)' : 'var(--space-6) var(--space-7)',
      background: bg,
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--text-xs)',
      color: fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || defIcon,
    size: 14,
    style: {
      marginTop: compact ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      display: 'flex',
      flexDirection: compact ? 'row' : 'column',
      gap: compact ? 'var(--space-4)' : 'var(--space-2)',
      alignItems: compact ? 'center' : 'stretch'
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 'var(--leading-snug)',
      opacity: 0.92
    }
  }, children) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flex: '0 0 auto'
    }
  }, actions) : null, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "xs",
    onClick: onDismiss,
    style: {
      color: fg,
      flex: '0 0 auto'
    }
  }) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centered modal for focused tasks and confirmations. */
function Dialog({
  open = false,
  title,
  subtitle,
  icon,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '10vh var(--space-9)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(2px)',
      animation: 'basis-fade-in var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      maxWidth: '100%',
      maxHeight: '80vh',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-4)',
      overflow: 'hidden',
      animation: 'basis-pop-in var(--dur-base) var(--ease-snap)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-7) var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      flex: '0 0 auto'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-brand)"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose,
    style: {
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      overflow: 'auto',
      flex: '1 1 auto'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-8)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-table-head)',
      flex: '0 0 auto'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOAST_FG = {
  info: 'var(--blue-300)',
  positive: 'var(--green-300)',
  negative: 'var(--red-300)',
  caution: 'var(--amber-300)'
};
const TOAST_ICON = {
  info: 'info',
  positive: 'check-circle-2',
  negative: 'octagon-alert',
  caution: 'alert-triangle'
};

/** Transient confirmation on the inverse surface. */
function Toast({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      width: 320,
      padding: 'var(--space-6) var(--space-7)',
      background: 'var(--ink-900)',
      border: '1px solid var(--alpha-white-12)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-4)',
      color: 'var(--ink-150)',
      fontSize: 'var(--text-xs)',
      animation: 'basis-pop-in var(--dur-base) var(--ease-snap)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TOAST_ICON[tone] || 'info',
    size: 14,
    color: TOAST_FG[tone] || TOAST_FG.info,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--white)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 'var(--leading-snug)',
      color: 'var(--ink-300)'
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "xs",
    onClick: onDismiss,
    style: {
      color: 'var(--ink-400)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** User-applied label: filters, taxonomies, saved-screen criteria. Removable. */
function Tag({
  children,
  icon,
  onRemove,
  color,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: 'var(--control-sm)',
      padding: '0 var(--space-3) 0 var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      color: 'var(--text-body)',
      background: interactive && hover ? 'var(--surface-active)' : 'var(--surface-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), color ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color,
      flex: '0 0 auto'
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11,
    color: "var(--text-secondary)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: onRemove ? 0 : 'var(--space-2)'
    }
  }, children), onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 15,
      height: 15,
      padding: 0,
      marginRight: 1,
      color: 'var(--text-tertiary)',
      background: 'transparent',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 10
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/AppShell.jsx
try { (() => {
const {
  SideNav,
  Tabs,
  Button,
  IconButton,
  Badge,
  Icon,
  Input,
  Breadcrumb,
  Popover,
  Switch,
  Tooltip
} = window.BasisDesignSystem_6e7350;
function Wordmark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Basis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Terminal"));
}
function TopBar({
  fund,
  onFundChange,
  dark,
  onDarkChange,
  tab,
  onTabChange,
  tabs,
  crumbs,
  onCrumb
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      background: 'var(--surface-chrome)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      height: 'var(--topbar-h)',
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Popover, {
    title: "Funds",
    width: 240,
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "briefcase",
      iconRight: "chevron-down"
    }, fund)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      margin: '-4px'
    }
  }, ['Global L/S Master', 'Quant Multi-Strat', 'Macro Opportunities', 'Credit RV'].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onFundChange(n),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 26,
      padding: '0 8px',
      background: n === fund ? 'var(--surface-selected)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: n === fund ? 'var(--text-brand)' : 'var(--text-body)',
      textAlign: 'left'
    }
  }, n === fund ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12
    }
  }), n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs,
    onNavigate: onCrumb
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Ticker, ISIN, sleeve",
    fullWidth: false,
    style: {
      width: 210
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Streaming from the prime broker feed"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-secondary)'
    }
  }, "16:04:12 ET"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom-end",
    title: "Display",
    width: 210,
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings-2",
      label: "Display settings",
      size: "sm"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: dark,
    onChange: onDarkChange,
    label: "Dark mode"
  }), /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: true,
    label: "Live prices"
  }), /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: false,
    label: "Show short book gross"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Alerts",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 600,
      color: 'var(--white)'
    }
  }, "AK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    size: "sm",
    value: tab,
    onChange: onTabChange,
    tabs: tabs,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "xs",
      variant: "ghost",
      iconLeft: "download"
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      size: "xs",
      variant: "ghost",
      iconLeft: "share-2"
    }, "Share"))
  })));
}
function PageHeader({
  title,
  meta,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-primary)'
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, meta) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, actions));
}
Object.assign(window, {
  Wordmark,
  TopBar,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/AttributionScreen.jsx
try { (() => {
const {
  Card,
  DataTable,
  DeltaValue,
  BarChart,
  LineChart,
  ChartLegend,
  SegmentedControl,
  Button,
  IconButton,
  Badge,
  Tabs,
  Popover,
  Accordion,
  Sparkline
} = window.BasisDesignSystem_6e7350;
function AttributionScreen() {
  const [basis, setBasis] = React.useState('sector');
  const [period, setPeriod] = React.useState('mtd');
  const data = basis === 'sector' ? ATTRIB_SECTOR : ATTRIB_FACTOR;
  const total = data.reduce((a, d) => a + d.value, 0);
  const rows = STRATEGIES.map((s, i) => ({
    id: s.key,
    strategy: s.label,
    nav: s.nav,
    gross: (s.nav * 2.1).toFixed(1),
    sel: Math.round(s.mtd * 70),
    alloc: Math.round(s.mtd * 22),
    fx: i === 2 ? -9 : i === 3 ? 3 : 0,
    total: Math.round(s.mtd * 100),
    spark: wave(20, s.mtd * 2, 1.2, i + 1)
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Attribution",
    meta: 'Global L/S Master · ' + (period === 'mtd' ? 'month to date' : 'year to date') + ' · bps of NAV, gross of financing',
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: period,
      onChange: setPeriod,
      options: [{
        value: 'mtd',
        label: 'MTD'
      }, {
        value: 'qtd',
        label: 'QTD'
      }, {
        value: 'ytd',
        label: 'YTD'
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "download"
    }, "Export"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Contribution",
    subtitle: "bps of NAV",
    icon: "bar-chart-3",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: basis,
      onChange: setBasis,
      options: [{
        value: 'sector',
        label: 'Sector'
      }, {
        value: 'factor',
        label: 'Factor'
      }]
    }),
    footer: /*#__PURE__*/React.createElement("span", null, "Residual is the part of return the model does not explain.")
  }, /*#__PURE__*/React.createElement(BarChart, {
    orientation: "horizontal",
    signed: true,
    barSize: 16,
    gap: 7,
    formatValue: v => (v > 0 ? '+' : '−') + Math.abs(v) + ' bps',
    data: data
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total explained"), /*#__PURE__*/React.createElement(DeltaValue, {
    value: total,
    unit: "bps",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Daily contribution",
    subtitle: "Long book vs short book, bps",
    icon: "activity",
    padding: "sm"
  }, /*#__PURE__*/React.createElement(ChartLegend, {
    style: {
      marginBottom: 'var(--space-6)'
    },
    series: [{
      key: 'long',
      label: 'Long book',
      color: 'var(--chart-1)',
      value: '+218 bps'
    }, {
      key: 'short',
      label: 'Short book',
      color: 'var(--chart-4)',
      value: '−37 bps'
    }]
  }), /*#__PURE__*/React.createElement(LineChart, {
    height: 188,
    zeroLine: true,
    area: true,
    labels: ['1', '', '5', '', '10', '', '15', '', '20'],
    formatY: v => v.toFixed(0),
    series: [{
      key: 'long',
      data: wave(20, 11, 14, 1),
      color: 'var(--chart-1)'
    }, {
      key: 'short',
      data: wave(20, -2, 9, 5),
      color: 'var(--chart-4)'
    }]
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    title: "By strategy",
    subtitle: "Selection, allocation and currency effects",
    icon: "layers",
    footer: /*#__PURE__*/React.createElement("span", null, "Brinson-Fachler decomposition \xB7 daily linked \xB7 reconciled through 11 Aug")
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    rows: rows,
    columns: [{
      key: 'strategy',
      label: 'Strategy',
      emphasis: true,
      width: 170
    }, {
      key: 'nav',
      label: '% NAV',
      numeric: true,
      width: 88,
      render: v => v.toFixed(1) + '%'
    }, {
      key: 'gross',
      label: 'Gross',
      numeric: true,
      width: 88,
      render: v => v + '%'
    }, {
      key: 'sel',
      label: 'Selection',
      numeric: true,
      width: 110,
      description: 'Return from picking names within a sleeve',
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        unit: "bps",
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'alloc',
      label: 'Allocation',
      numeric: true,
      width: 110,
      description: 'Return from sizing sleeves differently to the benchmark',
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        unit: "bps",
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'fx',
      label: 'Currency',
      numeric: true,
      width: 100,
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        unit: "bps",
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'total',
      label: 'Total',
      numeric: true,
      emphasis: true,
      width: 104,
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        unit: "bps",
        size: "xs"
      })
    }, {
      key: 'spark',
      label: '20d',
      sortable: false,
      width: 90,
      render: v => /*#__PURE__*/React.createElement(Sparkline, {
        data: v,
        width: 72,
        height: 18
      })
    }]
  })));
}
Object.assign(window, {
  AttributionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/AttributionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/OverviewScreen.jsx
try { (() => {
const {
  Card,
  MetricCard,
  DeltaValue,
  Sparkline,
  LineChart,
  BarChart,
  DonutChart,
  ChartLegend,
  Accordion,
  Alert,
  Button,
  IconButton,
  Badge,
  SegmentedControl,
  BarMeter,
  Popover,
  Icon,
  DataTable
} = window.BasisDesignSystem_6e7350;
function OverviewScreen({
  onDrill
}) {
  const [period, setPeriod] = React.useState('ytd');
  const [hidden, setHidden] = React.useState([]);
  const [open, setOpen] = React.useState(['quant']);
  const toggleSeries = k => setHidden(h => h.includes(k) ? h.filter(x => x !== k) : [...h, k]);
  const toggle = k => setOpen(o => o.includes(k) ? o.filter(x => x !== k) : [...o, k]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Overview",
    meta: "Global L/S Master \xB7 NAV as of 16:00 ET \xB7 P&L T+0 estimate",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: period,
      onChange: setPeriod,
      options: [{
        value: '1d',
        label: '1D'
      }, {
        value: '1w',
        label: '1W'
      }, {
        value: 'mtd',
        label: 'MTD'
      }, {
        value: 'qtd',
        label: 'QTD'
      }, {
        value: 'ytd',
        label: 'YTD'
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "refresh-cw"
    }, "Refresh"))
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "caution",
    compact: true,
    title: "Gross exposure is 182% against a 175% mandate limit",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "xs",
      onClick: () => onDrill('risk')
    }, "Open risk"),
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, KPIS.map(k => /*#__PURE__*/React.createElement(MetricCard, {
    key: k.key,
    label: k.label,
    value: k.value,
    unit: k.unit,
    delta: k.delta,
    deltaUnit: k.deltaUnit,
    deltaLabel: k.deltaLabel,
    icon: k.icon,
    spark: k.spark,
    tone: k.tone,
    invertDelta: k.invertDelta,
    footnote: k.footnote,
    onDrill: () => onDrill(k.key === 'var' ? 'risk' : 'positions')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.55fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Cumulative return",
    subtitle: "Net of fees, YTD",
    icon: "line-chart",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(Popover, {
      placement: "bottom-end",
      title: "How this is calculated",
      trigger: /*#__PURE__*/React.createElement(IconButton, {
        icon: "info",
        label: "Methodology",
        size: "sm"
      })
    }, "Time-weighted, net of management and performance fees, geometrically linked daily. Benchmark is unhedged total return."),
    footer: /*#__PURE__*/React.createElement("span", null, "Source: middle office \xB7 T+1 reconciled through 11 Aug")
  }, /*#__PURE__*/React.createElement(ChartLegend, {
    hidden: hidden,
    onToggle: toggleSeries,
    style: {
      marginBottom: 'var(--space-6)'
    },
    series: [{
      key: 'fund',
      label: 'Fund',
      color: 'var(--chart-1)',
      value: '+12.4%'
    }, {
      key: 'bench',
      label: 'S&P 500',
      color: 'var(--chart-benchmark)',
      dashed: true,
      value: '+9.1%'
    }, {
      key: 'peer',
      label: 'HFRI Equity Hedge',
      color: 'var(--chart-2)',
      value: '+6.8%'
    }]
  }), /*#__PURE__*/React.createElement(LineChart, {
    height: 196,
    zeroLine: true,
    labels: MONTHS,
    hidden: hidden,
    formatY: v => v.toFixed(0) + '%',
    series: [{
      key: 'fund',
      data: wave(12, 1.15, 2.4, 1),
      color: 'var(--chart-1)'
    }, {
      key: 'bench',
      data: wave(12, .82, 1.5, 3),
      color: 'var(--chart-benchmark)',
      dashed: true
    }, {
      key: 'peer',
      data: wave(12, .62, 1.1, 6),
      color: 'var(--chart-2)'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Capital by strategy",
    subtitle: "% NAV",
    icon: "pie-chart",
    padding: "sm",
    footer: /*#__PURE__*/React.createElement("span", null, "4 strategies \xB7 11 sleeves")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-9)',
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    size: 132,
    thickness: 15,
    total: "$4.2B",
    label: "AUM",
    data: STRATEGIES.map(s => ({
      label: s.label,
      value: s.nav,
      color: s.color
    }))
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    direction: "column",
    series: STRATEGIES.map(s => ({
      key: s.key,
      label: s.label,
      color: s.color,
      value: s.nav.toFixed(1) + '%'
    }))
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "MTD attribution by sector",
    subtitle: "bps of NAV",
    icon: "bar-chart-3",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "xs",
      variant: "ghost",
      iconRight: "chevron-right",
      onClick: () => onDrill('attribution')
    }, "All factors")
  }, /*#__PURE__*/React.createElement(BarChart, {
    orientation: "horizontal",
    signed: true,
    barSize: 15,
    gap: 6,
    formatValue: v => (v > 0 ? '+' : '−') + Math.abs(v) + ' bps',
    data: ATTRIB_SECTOR
  })), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Limit utilisation",
    subtitle: "Against mandate and committee limits",
    icon: "gauge",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "negative",
      size: "sm",
      icon: "alert-triangle"
    }, "1 breach")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, LIMITS.slice(0, 5).map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)',
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", null, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, "limit ", l.limit, l.unit === '% NAV' ? '%' : '')), /*#__PURE__*/React.createElement(BarMeter, {
    value: l.value,
    limit: l.limit,
    max: l.max,
    showValue: true,
    formatValue: v => v.toFixed(1) + '%'
  })))))), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Strategy detail",
    subtitle: "Expand a strategy to see its sleeves",
    icon: "layers",
    padding: "none",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "xs",
      variant: "ghost",
      iconRight: "chevron-right",
      onClick: () => onDrill('positions')
    }, "All positions")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    openKeys: open,
    onToggle: toggle,
    items: STRATEGIES.map(s => ({
      key: s.key,
      label: s.label,
      icon: s.icon,
      summary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums',
          color: 'var(--text-body)'
        }
      }, s.nav.toFixed(1), "% NAV"), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 64,
          display: 'inline-flex',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(DeltaValue, {
        value: s.mtd,
        size: "xs"
      })), /*#__PURE__*/React.createElement(Sparkline, {
        data: wave(20, s.mtd * 2, 1.4, 3),
        width: 64,
        height: 16
      })),
      content: /*#__PURE__*/React.createElement(DataTable, {
        dense: true,
        rows: s.sleeves.map((x, i) => ({
          id: s.key + i,
          ...x
        })),
        columns: [{
          key: 'name',
          label: 'Sleeve',
          emphasis: true,
          maxWidth: 260
        }, {
          key: 'names',
          label: 'Positions',
          numeric: true,
          width: 90
        }, {
          key: 'nav',
          label: '% NAV',
          numeric: true,
          width: 90,
          render: v => v.toFixed(1) + '%'
        }, {
          key: 'mtd',
          label: 'MTD',
          numeric: true,
          width: 100,
          render: v => /*#__PURE__*/React.createElement(DeltaValue, {
            value: v,
            glyph: "none",
            size: "xs"
          })
        }, {
          key: 'util',
          label: 'Risk budget used',
          numeric: true,
          width: 200,
          render: v => /*#__PURE__*/React.createElement(BarMeter, {
            value: v,
            limit: 80,
            showValue: true,
            formatValue: x => x + '%'
          })
        }]
      })
    }))
  }))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/PositionsScreen.jsx
try { (() => {
const {
  Card,
  DataTable,
  DeltaValue,
  Sparkline,
  Button,
  IconButton,
  Badge,
  Tag,
  Input,
  Select,
  SegmentedControl,
  Checkbox,
  Popover,
  Icon,
  Tooltip,
  LineChart,
  ChartLegend,
  BarMeter,
  Alert,
  Toast
} = window.BasisDesignSystem_6e7350;
const fmtN = v => (v < 0 ? '−' : '') + Math.abs(v / 1e6).toFixed(1) + 'mm';
function PositionDetail({
  row
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Price \xB7 30 sessions"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, row.strategy), /*#__PURE__*/React.createElement(Badge, {
    tone: row.side === 'Long' ? 'info' : 'caution',
    size: "sm"
  }, row.side)), /*#__PURE__*/React.createElement(LineChart, {
    height: 120,
    labels: ['', '', '', '', '', ''],
    formatY: v => v.toFixed(0),
    series: [{
      key: 'px',
      data: wave(30, row.ret, 2.2, 4),
      color: row.ret >= 0 ? 'var(--chart-3)' : 'var(--chart-4)'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6) var(--space-8)',
      alignContent: 'start'
    }
  }, [['Sleeve', row.sleeve], ['Beta (60d)', row.beta.toFixed(2)], ['ADV to exit', row.liq.toFixed(1) + ' days'], ['Notional', fmtN(row.notional)], ['Weight', row.wgt.toFixed(1) + '% NAV'], ['MTD contribution', (row.pnl > 0 ? '+' : '−') + Math.abs(row.pnl) + ' bps']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-primary)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "file-text"
  }, "Open note"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "git-compare"
  }, "Compare sleeve"))));
}
function PositionsScreen() {
  const [sort, setSort] = React.useState({
    key: 'pnl',
    dir: 'desc'
  });
  const [expanded, setExpanded] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [side, setSide] = React.useState('all');
  const [strategy, setStrategy] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [dense, setDense] = React.useState(true);
  const [toast, setToast] = React.useState(false);
  let rows = POSITIONS.filter(p => (side === 'all' || p.side.toLowerCase() === side) && (strategy === 'all' || p.strategy === strategy) && (q === '' || (p.ticker + p.name).toLowerCase().includes(q.toLowerCase())));
  rows = [...rows].sort((a, b) => {
    const d = sort.dir === 'asc' ? 1 : -1;
    const av = a[sort.key],
      bv = b[sort.key];
    return typeof av === 'number' ? (av - bv) * d : String(av).localeCompare(String(bv)) * d;
  });
  const filters = [side !== 'all' && ['side', 'Side: ' + side], strategy !== 'all' && ['strategy', 'Strategy: ' + strategy]].filter(Boolean);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Positions",
    meta: rows.length + ' of ' + POSITIONS.length + ' positions · notional in USD · T+1 book',
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "columns-3"
    }, "Columns"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "save",
      onClick: () => setToast(true)
    }, "Save view"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "download"
    }, "Export"))
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Ticker or name",
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ(''),
    fullWidth: false,
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: side,
    onChange: setSide,
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'long',
      label: 'Long'
    }, {
      value: 'short',
      label: 'Short'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: strategy,
    onChange: e => setStrategy(e.target.value),
    fullWidth: false,
    style: {
      width: 170
    },
    iconLeft: "layers",
    options: [{
      value: 'all',
      label: 'All strategies'
    }, ...STRATEGIES.map(s => ({
      value: s.label,
      label: s.label
    }))]
  }), /*#__PURE__*/React.createElement(Popover, {
    title: "Advanced filters",
    width: 250,
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "sliders-horizontal"
    }, "More")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Exclude baskets"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Only limit-relevant names"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Illiquid (>1d ADV)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Added in last 5 sessions"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, selected.length ? /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, selected.length, " selected") : null, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: dense ? 'dense' : 'comfortable',
    onChange: v => setDense(v === 'dense'),
    options: [{
      value: 'comfortable',
      icon: 'rows-3'
    }, {
      value: 'dense',
      icon: 'rows-4'
    }]
  }))), filters.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-table-head)'
    }
  }, filters.map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    icon: "filter",
    onRemove: () => k === 'side' ? setSide('all') : setStrategy('all')
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "xs",
    onClick: () => {
      setSide('all');
      setStrategy('all');
    }
  }, "Clear all")) : null, /*#__PURE__*/React.createElement(DataTable, {
    dense: dense,
    sort: sort,
    onSortChange: setSort,
    rows: rows,
    selectable: true,
    selected: selected,
    onSelectedChange: setSelected,
    expandedKey: expanded,
    onRowClick: r => setExpanded(expanded === r.id ? null : r.id),
    renderDetail: r => /*#__PURE__*/React.createElement(PositionDetail, {
      row: r
    }),
    maxHeight: 430,
    columns: [{
      key: 'ticker',
      label: 'Ticker',
      emphasis: true,
      width: 110
    }, {
      key: 'name',
      label: 'Name',
      muted: true,
      maxWidth: 190
    }, {
      key: 'strategy',
      label: 'Strategy',
      width: 120,
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral",
        size: "sm"
      }, v)
    }, {
      key: 'side',
      label: 'Side',
      width: 76,
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          color: v === 'Long' ? 'var(--text-body)' : 'var(--text-caution)'
        }
      }, v)
    }, {
      key: 'notional',
      label: 'Notional',
      numeric: true,
      width: 110,
      render: fmtN
    }, {
      key: 'wgt',
      label: '% NAV',
      numeric: true,
      width: 84,
      render: v => v.toFixed(1) + '%'
    }, {
      key: 'beta',
      label: 'Beta',
      numeric: true,
      width: 74,
      description: '60-day rolling regression vs primary benchmark',
      render: v => v.toFixed(2)
    }, {
      key: 'ret',
      label: 'Return',
      numeric: true,
      width: 92,
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'pnl',
      label: 'MTD contrib',
      numeric: true,
      width: 108,
      description: 'bps of NAV, arithmetic, gross of financing',
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        unit: "bps",
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'spark',
      label: '30d',
      sortable: false,
      width: 88,
      render: v => /*#__PURE__*/React.createElement(Sparkline, {
        data: v,
        width: 72,
        height: 18
      })
    }, {
      key: 'liq',
      label: '',
      sortable: false,
      width: 40,
      render: (v, r) => /*#__PURE__*/React.createElement(Tooltip, {
        content: 'Exit in ' + v.toFixed(1) + ' days at 20% ADV'
      }, /*#__PURE__*/React.createElement(Icon, {
        name: v > 1.5 ? 'alert-triangle' : 'droplets',
        size: 12,
        color: v > 1.5 ? 'var(--text-caution)' : 'var(--text-tertiary)'
      }))
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      height: 'var(--subbar-h)',
      padding: '0 var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-table-head)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Click any row to expand its detail."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)'
    }
  }, "Gross 182.0% \xB7 Net 42.8% \xB7 214 positions in book"))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "View saved",
    onDismiss: () => setToast(false),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "xs"
    }, "Open")
  }, "Filters, sort and column widths kept.")) : null);
}
Object.assign(window, {
  PositionsScreen,
  PositionDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/PositionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/RiskScreen.jsx
try { (() => {
const {
  Card,
  DataTable,
  BarMeter,
  Badge,
  Button,
  IconButton,
  Alert,
  MetricCard,
  DeltaValue,
  LineChart,
  ChartLegend,
  BarChart,
  SegmentedControl,
  Popover,
  Dialog,
  Field,
  Input,
  Select,
  Icon,
  Tooltip
} = window.BasisDesignSystem_6e7350;
function RiskScreen() {
  const [horizon, setHorizon] = React.useState('1d');
  const [dialog, setDialog] = React.useState(false);
  const breaches = LIMITS.filter(l => l.value > l.limit);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Risk & limits",
    meta: "Firm risk engine \xB7 16:00 ET snapshot \xB7 99% confidence unless stated",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: horizon,
      onChange: setHorizon,
      options: [{
        value: '1d',
        label: '1D'
      }, {
        value: '10d',
        label: '10D'
      }, {
        value: 'stress',
        label: 'Stress'
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "bell-plus",
      onClick: () => setDialog(true)
    }, "New alert"))
  }), breaches.map(b => /*#__PURE__*/React.createElement(Alert, {
    key: b.name,
    tone: "negative",
    title: b.name + ' limit breached',
    style: {
      marginBottom: 'var(--space-6)'
    },
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: "history"
    }, "Breach log"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "eye"
    }, "Review"))
  }, b.value.toFixed(1), "% against a ", b.limit, "% ", b.owner.toLowerCase(), " limit. Opened 14:32 ET, 1h 32m outstanding. Notify risk committee before 17:00 ET.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "VaR (99%, 1d)",
    value: "\u22121.86",
    unit: "% NAV",
    delta: -0.12,
    invertDelta: true,
    deltaLabel: "1D",
    icon: "gauge",
    spark: wave(30, -.2, 1.4, 3)
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Expected shortfall",
    value: "\u22122.74",
    unit: "% NAV",
    delta: -0.08,
    invertDelta: true,
    deltaLabel: "1D",
    icon: "trending-down"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Beta-adjusted net",
    value: "31.2",
    unit: "% NAV",
    delta: 0.9,
    deltaLabel: "1D",
    icon: "scale"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Stress: 2020 Feb\u2013Mar",
    value: "\u22129.4",
    unit: "% NAV",
    tone: "caution",
    icon: "zap",
    footnote: "repriced daily"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Rolling VaR vs limit",
    subtitle: "% NAV, 99% 1-day",
    icon: "activity",
    padding: "sm",
    footer: /*#__PURE__*/React.createElement("span", null, "Historical simulation \xB7 2-year lookback \xB7 Source: firm risk engine")
  }, /*#__PURE__*/React.createElement(ChartLegend, {
    style: {
      marginBottom: 'var(--space-6)'
    },
    series: [{
      key: 'var',
      label: 'VaR',
      color: 'var(--chart-1)',
      value: '1.86%'
    }, {
      key: 'limit',
      label: 'Limit',
      color: 'var(--chart-4)',
      dashed: true,
      value: '2.50%'
    }]
  }), /*#__PURE__*/React.createElement(LineChart, {
    height: 168,
    labels: MONTHS,
    formatY: v => v.toFixed(1),
    series: [{
      key: 'var',
      data: wave(12, .06, .35, 2).map(v => 1.8 + v),
      color: 'var(--chart-1)'
    }, {
      key: 'limit',
      data: Array(12).fill(2.5),
      color: 'var(--chart-4)',
      dashed: true
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Factor exposure",
    subtitle: "Standardised beta to firm factor model",
    icon: "git-fork",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(Popover, {
      placement: "bottom-end",
      title: "Factor model",
      trigger: /*#__PURE__*/React.createElement(IconButton, {
        icon: "info",
        label: "Model",
        size: "sm"
      })
    }, "Firm 14-factor model, weekly re-estimation, exposures standardised to a 1-sigma move in each factor.")
  }, /*#__PURE__*/React.createElement(BarChart, {
    orientation: "horizontal",
    signed: true,
    barSize: 14,
    gap: 6,
    formatValue: v => (v / 100).toFixed(2),
    data: ATTRIB_FACTOR.slice(0, 5).concat([{
      label: 'Crowding',
      value: -31
    }])
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    title: "Limit register",
    subtitle: "All mandate, committee and PM limits",
    icon: "list-checks",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: breaches.length ? 'negative' : 'positive',
      size: "sm",
      icon: breaches.length ? 'alert-triangle' : 'check'
    }, breaches.length, " breach", breaches.length === 1 ? '' : 'es'),
    footer: /*#__PURE__*/React.createElement("span", null, "Limits reviewed monthly by the risk committee \xB7 Last change 28 Jul")
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    rows: LIMITS.map((l, i) => ({
      id: 'l' + i,
      ...l
    })),
    columns: [{
      key: 'name',
      label: 'Limit',
      emphasis: true,
      maxWidth: 230
    }, {
      key: 'owner',
      label: 'Owner',
      muted: true,
      width: 150
    }, {
      key: 'value',
      label: 'Current',
      numeric: true,
      width: 96,
      render: (v, r) => v.toFixed(1) + (r.unit === '% NAV' ? '%' : '')
    }, {
      key: 'limit',
      label: 'Limit',
      numeric: true,
      width: 88,
      render: v => v.toFixed(1) + '%'
    }, {
      key: 'util',
      label: 'Utilisation',
      sortable: false,
      width: 250,
      render: (v, r) => /*#__PURE__*/React.createElement(BarMeter, {
        value: r.value,
        limit: r.limit,
        max: r.max,
        showValue: true,
        formatValue: x => (x / r.limit * 100).toFixed(0) + '%'
      })
    }, {
      key: 'status',
      label: 'Status',
      sortable: false,
      width: 110,
      render: (v, r) => r.value > r.limit ? /*#__PURE__*/React.createElement(Badge, {
        tone: "negative",
        size: "sm",
        icon: "alert-triangle"
      }, "Breach") : r.value > r.limit * 0.85 ? /*#__PURE__*/React.createElement(Badge, {
        tone: "caution",
        size: "sm"
      }, "Near") : /*#__PURE__*/React.createElement(Badge, {
        tone: "positive",
        size: "sm",
        dot: true
      }, "Within")
    }]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    title: "New limit alert",
    icon: "bell-plus",
    subtitle: "Notifies you and the risk desk",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDialog(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setDialog(false)
    }, "Create alert"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Measure"
  }, /*#__PURE__*/React.createElement(Select, {
    options: LIMITS.map(l => ({
      value: l.name,
      label: l.name
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Trigger at",
    hint: "Percentage of the limit"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    suffix: "% of limit",
    defaultValue: "90"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Channel"
  }, /*#__PURE__*/React.createElement(Select, {
    options: [{
      value: 'app',
      label: 'In app'
    }, {
      value: 'email',
      label: 'In app + email'
    }, {
      value: 'desk',
      label: 'In app + risk desk'
    }]
  }))))));
}
Object.assign(window, {
  RiskScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/RiskScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/app.jsx
try { (() => {
const {
  SideNav,
  Badge,
  Icon,
  Button
} = window.BasisDesignSystem_6e7350;
const NAV = [{
  section: 'Portfolio'
}, {
  value: 'overview',
  label: 'Overview',
  icon: 'layout-dashboard'
}, {
  value: 'positions',
  label: 'Positions',
  icon: 'table-2',
  badge: 214,
  children: [{
    value: 'positions',
    label: 'All'
  }, {
    value: 'positions',
    label: 'Longs'
  }, {
    value: 'positions',
    label: 'Shorts'
  }]
}, {
  value: 'attribution',
  label: 'Attribution',
  icon: 'bar-chart-3'
}, {
  value: 'risk',
  label: 'Risk & limits',
  icon: 'gauge',
  badge: '1'
}, {
  section: 'Research'
}, {
  value: 'screens',
  label: 'Screens',
  icon: 'filter',
  badge: 8
}, {
  value: 'notes',
  label: 'Notes',
  icon: 'file-text'
}];
const TABS = {
  overview: [{
    value: 'overview',
    label: 'Summary',
    icon: 'layout-dashboard'
  }, {
    value: 'positions',
    label: 'Positions',
    count: 214
  }, {
    value: 'attribution',
    label: 'Attribution'
  }, {
    value: 'risk',
    label: 'Risk'
  }]
};
function App() {
  const [screen, setScreen] = React.useState('overview');
  const [fund, setFund] = React.useState('Global L/S Master');
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const crumbs = [{
    value: 'fund',
    label: fund,
    icon: 'briefcase'
  }, {
    label: {
      overview: 'Overview',
      positions: 'Positions',
      risk: 'Risk & limits',
      attribution: 'Attribution',
      screens: 'Screens',
      notes: 'Notes'
    }[screen]
  }];
  const body = screen === 'positions' ? /*#__PURE__*/React.createElement(PositionsScreen, null) : screen === 'risk' ? /*#__PURE__*/React.createElement(RiskScreen, null) : screen === 'attribution' ? /*#__PURE__*/React.createElement(AttributionScreen, null) : screen === 'screens' || screen === 'notes' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      maxWidth: 520,
      padding: 'var(--space-11) 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, screen === 'screens' ? 'Screens' : 'Notes'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "This module lives in the Research Workspace kit. Open ", /*#__PURE__*/React.createElement("a", {
    href: "../research_workspace/index.html"
  }, "research_workspace"), " to see it."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "arrow-left",
    onClick: () => setScreen('overview')
  }, "Back to overview")) : /*#__PURE__*/React.createElement(OverviewScreen, {
    onDrill: setScreen
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      minHeight: 0,
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    value: screen,
    onChange: setScreen,
    items: NAV,
    header: /*#__PURE__*/React.createElement(Wordmark, null),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "positive",
      size: "sm",
      dot: true
    }, "Live"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, "16:04 ET"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    fund: fund,
    onFundChange: setFund,
    dark: dark,
    onDarkChange: setDark,
    tab: screen,
    onTabChange: setScreen,
    tabs: TABS.overview,
    crumbs: crumbs,
    onCrumb: () => setScreen('overview')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: '1 1 auto',
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--space-9) var(--space-8) var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, body))));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_terminal/data.jsx
try { (() => {
const wave = (n, drift, amp, seed = 1) => Array.from({
  length: n
}, (_, i) => Math.sin((i + seed) / 2.7) * amp + Math.cos((i + seed) / 1.6) * amp * 0.4 + i * drift);
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const KPIS = [{
  key: 'nav',
  label: 'NAV',
  value: '4,218.4',
  unit: '$mm',
  delta: 0.42,
  deltaLabel: '1D',
  icon: 'wallet',
  spark: wave(30, .9, 3, 2)
}, {
  key: 'mtd',
  label: 'MTD return',
  value: '+2.41',
  unit: '%',
  delta: 38,
  deltaUnit: 'bps',
  deltaLabel: '1D',
  tone: 'positive',
  icon: 'trending-up',
  spark: wave(30, 1.1, 2.2, 5)
}, {
  key: 'net',
  label: 'Net exposure',
  value: '42.8',
  unit: '% NAV',
  delta: -1.4,
  deltaLabel: 'vs prior close',
  icon: 'scale',
  spark: wave(30, .2, 4, 9)
}, {
  key: 'gross',
  label: 'Gross exposure',
  value: '182.0',
  unit: '% NAV',
  delta: 3.1,
  deltaLabel: 'vs prior close',
  tone: 'caution',
  icon: 'layers',
  footnote: 'limit 175'
}, {
  key: 'var',
  label: 'VaR (99%, 1d)',
  value: '−1.86',
  unit: '% NAV',
  delta: -0.12,
  invertDelta: true,
  icon: 'gauge',
  spark: wave(30, -.2, 1.6, 3)
}];
const STRATEGIES = [{
  key: 'quant',
  label: 'Quant',
  icon: 'cpu',
  nav: 38.2,
  mtd: 0.84,
  color: 'var(--chart-1)',
  sleeves: [{
    name: 'Stat arb',
    nav: 14.1,
    mtd: 0.41,
    util: 72,
    names: 412
  }, {
    name: 'Cross-sectional momentum',
    nav: 12.6,
    mtd: 0.28,
    util: 58,
    names: 288
  }, {
    name: 'Vol carry',
    nav: 11.5,
    mtd: 0.15,
    util: 44,
    names: 36
  }]
}, {
  key: 'fundamental',
  label: 'Fundamental',
  icon: 'search',
  nav: 31.4,
  mtd: -0.22,
  color: 'var(--chart-2)',
  sleeves: [{
    name: 'Energy & materials',
    nav: 11.2,
    mtd: 0.64,
    util: 66,
    names: 24
  }, {
    name: 'Technology',
    nav: 10.9,
    mtd: -0.51,
    util: 71,
    names: 31
  }, {
    name: 'Consumer',
    nav: 9.3,
    mtd: -0.35,
    util: 49,
    names: 29
  }]
}, {
  key: 'macro',
  label: 'Macro',
  icon: 'globe',
  nav: 19.0,
  mtd: 0.31,
  color: 'var(--chart-3)',
  sleeves: [{
    name: 'Rates',
    nav: 8.8,
    mtd: 0.22,
    util: 61,
    names: 14
  }, {
    name: 'FX',
    nav: 6.1,
    mtd: 0.09,
    util: 38,
    names: 11
  }, {
    name: 'Commodities',
    nav: 4.1,
    mtd: 0.00,
    util: 27,
    names: 9
  }]
}, {
  key: 'credit',
  label: 'Credit',
  icon: 'landmark',
  nav: 11.4,
  mtd: 0.12,
  color: 'var(--chart-5)',
  sleeves: [{
    name: 'IG relative value',
    nav: 7.0,
    mtd: 0.08,
    util: 52,
    names: 41
  }, {
    name: 'Event',
    nav: 4.4,
    mtd: 0.04,
    util: 33,
    names: 12
  }]
}];
const POSITIONS = [{
  id: 'p1',
  ticker: 'XOM US',
  name: 'Exxon Mobil',
  strategy: 'Fundamental',
  sleeve: 'Energy & materials',
  side: 'Long',
  wgt: 4.2,
  notional: 177200000,
  ret: 1.84,
  pnl: 64,
  beta: 0.92,
  liq: 1.2,
  spark: wave(24, .9, 2, 1)
}, {
  id: 'p2',
  ticker: 'NVDA US',
  name: 'NVIDIA',
  strategy: 'Fundamental',
  sleeve: 'Technology',
  side: 'Long',
  wgt: 3.8,
  notional: 160300000,
  ret: 3.02,
  pnl: 112,
  beta: 1.64,
  liq: 0.4,
  spark: wave(24, 1.4, 3, 4)
}, {
  id: 'p3',
  ticker: 'SHEL LN',
  name: 'Shell plc',
  strategy: 'Fundamental',
  sleeve: 'Energy & materials',
  side: 'Short',
  wgt: -2.1,
  notional: -88600000,
  ret: -0.91,
  pnl: -24,
  beta: 0.81,
  liq: 1.6,
  spark: wave(24, -.6, 2, 7)
}, {
  id: 'p4',
  ticker: '6758 JP',
  name: 'Sony Group',
  strategy: 'Fundamental',
  sleeve: 'Technology',
  side: 'Long',
  wgt: 1.6,
  notional: 67500000,
  ret: -0.18,
  pnl: -6,
  beta: 1.12,
  liq: 2.1,
  spark: wave(24, -.2, 1.4, 2)
}, {
  id: 'p5',
  ticker: 'QSA-1042',
  name: 'Stat arb basket 1042',
  strategy: 'Quant',
  sleeve: 'Stat arb',
  side: 'Long',
  wgt: 5.4,
  notional: 227800000,
  ret: 0.42,
  pnl: 41,
  beta: 0.06,
  liq: 0.2,
  spark: wave(24, .5, 1, 9)
}, {
  id: 'p6',
  ticker: 'QSA-1043',
  name: 'Stat arb basket 1043',
  strategy: 'Quant',
  sleeve: 'Stat arb',
  side: 'Short',
  wgt: -5.1,
  notional: -215100000,
  ret: 0.31,
  pnl: 29,
  beta: -0.04,
  liq: 0.2,
  spark: wave(24, .4, 1, 3)
}, {
  id: 'p7',
  ticker: 'QMO-208',
  name: 'Momentum basket 208',
  strategy: 'Quant',
  sleeve: 'Cross-sectional momentum',
  side: 'Long',
  wgt: 6.2,
  notional: 261500000,
  ret: 0.28,
  pnl: 24,
  beta: 0.34,
  liq: 0.3,
  spark: wave(24, .3, 1.2, 6)
}, {
  id: 'p8',
  ticker: 'US 10Y',
  name: 'UST 10-year future',
  strategy: 'Macro',
  sleeve: 'Rates',
  side: 'Short',
  wgt: -8.8,
  notional: -371200000,
  ret: 0.22,
  pnl: 19,
  beta: -0.18,
  liq: 0.1,
  spark: wave(24, .2, 1.8, 8)
}, {
  id: 'p9',
  ticker: 'EURUSD',
  name: 'EUR/USD forward',
  strategy: 'Macro',
  sleeve: 'FX',
  side: 'Long',
  wgt: 6.1,
  notional: 257300000,
  ret: 0.09,
  pnl: 8,
  beta: 0.02,
  liq: 0.1,
  spark: wave(24, .1, 1.1, 5)
}, {
  id: 'p10',
  ticker: 'CDX IG 41',
  name: 'CDX IG series 41',
  strategy: 'Credit',
  sleeve: 'IG relative value',
  side: 'Short',
  wgt: -7.0,
  notional: -295200000,
  ret: 0.08,
  pnl: 7,
  beta: 0.09,
  liq: 0.3,
  spark: wave(24, .1, .9, 4)
}, {
  id: 'p11',
  ticker: 'PG US',
  name: 'Procter & Gamble',
  strategy: 'Fundamental',
  sleeve: 'Consumer',
  side: 'Short',
  wgt: -1.9,
  notional: -80100000,
  ret: -1.24,
  pnl: -37,
  beta: 0.58,
  liq: 1.9,
  spark: wave(24, -.7, 1.6, 1)
}, {
  id: 'p12',
  ticker: 'ASML NA',
  name: 'ASML Holding',
  strategy: 'Fundamental',
  sleeve: 'Technology',
  side: 'Long',
  wgt: 2.4,
  notional: 101200000,
  ret: -0.44,
  pnl: -14,
  beta: 1.38,
  liq: 0.9,
  spark: wave(24, -.3, 2.1, 7)
}];
const LIMITS = [{
  name: 'Gross exposure',
  value: 182,
  limit: 175,
  max: 220,
  unit: '% NAV',
  owner: 'Mandate'
}, {
  name: 'Net exposure',
  value: 42.8,
  limit: 60,
  max: 80,
  unit: '% NAV',
  owner: 'Mandate'
}, {
  name: 'Single name',
  value: 5.4,
  limit: 7.5,
  max: 10,
  unit: '% NAV',
  owner: 'Risk committee'
}, {
  name: 'Sector concentration',
  value: 24.1,
  limit: 30,
  max: 40,
  unit: '% NAV',
  owner: 'Risk committee'
}, {
  name: 'VaR (99%, 1d)',
  value: 1.86,
  limit: 2.5,
  max: 3.5,
  unit: '% NAV',
  owner: 'Mandate'
}, {
  name: 'Beta-adjusted net',
  value: 31.2,
  limit: 45,
  max: 60,
  unit: '% NAV',
  owner: 'PM'
}, {
  name: 'Illiquid (>3d ADV)',
  value: 6.4,
  limit: 8,
  max: 12,
  unit: '% NAV',
  owner: 'Risk committee'
}];
const ATTRIB_SECTOR = [{
  label: 'Energy',
  value: 64
}, {
  label: 'Technology',
  value: 41
}, {
  label: 'Financials',
  value: 12
}, {
  label: 'Industrials',
  value: 6
}, {
  label: 'Health care',
  value: -18
}, {
  label: 'Staples',
  value: -37
}];
const ATTRIB_FACTOR = [{
  label: 'Momentum',
  value: 52
}, {
  label: 'Quality',
  value: 28
}, {
  label: 'Value',
  value: -9
}, {
  label: 'Size',
  value: -14
}, {
  label: 'Low vol',
  value: -22
}, {
  label: 'Residual',
  value: 106
}];
Object.assign(window, {
  wave,
  MONTHS,
  KPIS,
  STRATEGIES,
  POSITIONS,
  LIMITS,
  ATTRIB_SECTOR,
  ATTRIB_FACTOR
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_terminal/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/research_workspace/CompanyScreen.jsx
try { (() => {
const {
  Card,
  DataTable,
  DeltaValue,
  Sparkline,
  LineChart,
  BarChart,
  ChartLegend,
  DonutChart,
  MetricCard,
  Tabs,
  Breadcrumb,
  Button,
  IconButton,
  Badge,
  Tag,
  Accordion,
  Popover,
  Tooltip,
  Icon,
  SegmentedControl,
  BarMeter,
  Alert
} = window.BasisDesignSystem_6e7350;
function CompanyScreen({
  company,
  onBack
}) {
  const [tab, setTab] = React.useState('summary');
  const [open, setOpen] = React.useState(['thesis']);
  const toggle = k => setOpen(o => o.includes(k) ? o.filter(x => x !== k) : [...o, k]);
  const c = company || CANDIDATES[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    onNavigate: onBack,
    items: [{
      value: 'screens',
      label: 'Screens',
      icon: 'filter'
    }, {
      value: 'screen',
      label: 'Refining margin torque'
    }, {
      label: c.ticker
    }]
  })), /*#__PURE__*/React.createElement(PageHeader, {
    title: c.name,
    meta: c.ticker + ' · ' + c.sector + ' · $' + c.mcap + 'bn market cap · reported in USD',
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, c.held ? /*#__PURE__*/React.createElement(Badge, {
      tone: "info",
      icon: "briefcase"
    }, "Held 4.2% NAV") : null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "star"
    }, "Watch"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "file-plus"
    }, "New note"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus"
    }, "Add to book"))
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    size: "sm",
    style: {
      marginBottom: 'var(--space-8)'
    },
    tabs: [{
      value: 'summary',
      label: 'Summary',
      icon: 'layout-dashboard'
    }, {
      value: 'model',
      label: 'Model',
      count: 4
    }, {
      value: 'ownership',
      label: 'Ownership'
    }, {
      value: 'notes',
      label: 'Notes',
      count: 3
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "EV/EBITDA",
    value: c.ev.toFixed(1),
    unit: "\xD7",
    delta: -0.4,
    deltaUnit: "\xD7",
    deltaLabel: "3m",
    invertDelta: true,
    icon: "scale"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "FCF yield",
    value: c.fcf.toFixed(1),
    unit: "%",
    delta: 1.2,
    deltaLabel: "3m",
    tone: "positive",
    icon: "banknote"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "ROIC",
    value: c.roic.toFixed(1),
    unit: "%",
    delta: 0.8,
    deltaLabel: "1y",
    icon: "target"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "EPS revisions",
    value: (c.rev > 0 ? '+' : '−') + Math.abs(c.rev).toFixed(1),
    unit: "%",
    delta: c.rev,
    deltaLabel: "3m",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Composite score",
    value: String(c.score),
    unit: "/100",
    icon: "gauge",
    footnote: "rank in screen: 2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Price and consensus target",
    subtitle: "24 months",
    icon: "line-chart",
    padding: "sm",
    actions: /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: "2y",
      onChange: () => {},
      options: [{
        value: '6m',
        label: '6M'
      }, {
        value: '2y',
        label: '2Y'
      }, {
        value: '5y',
        label: '5Y'
      }]
    }),
    footer: /*#__PURE__*/React.createElement("span", null, "Consensus from 24 contributing brokers \xB7 updated daily")
  }, /*#__PURE__*/React.createElement(ChartLegend, {
    style: {
      marginBottom: 'var(--space-6)'
    },
    series: [{
      key: 'px',
      label: 'Price',
      color: 'var(--chart-1)',
      value: '$118.40'
    }, {
      key: 'tgt',
      label: 'Consensus target',
      color: 'var(--chart-2)',
      dashed: true,
      value: '$131.00'
    }]
  }), /*#__PURE__*/React.createElement(LineChart, {
    height: 190,
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'],
    formatY: v => '$' + v.toFixed(0),
    series: [{
      key: 'px',
      data: rwave(24, 1.4, 4, 2).map(v => 92 + v),
      color: 'var(--chart-1)'
    }, {
      key: 'tgt',
      data: rwave(24, 1.1, 1.6, 6).map(v => 104 + v),
      color: 'var(--chart-2)',
      dashed: true
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Segment mix",
    subtitle: "EBITDA, last 12 months",
    icon: "pie-chart",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    size: 124,
    thickness: 14,
    total: "$41.2B",
    label: "EBITDA",
    data: [{
      label: 'Upstream',
      value: 52,
      color: 'var(--chart-1)'
    }, {
      label: 'Products',
      value: 28,
      color: 'var(--chart-2)'
    }, {
      label: 'Chemicals',
      value: 14,
      color: 'var(--chart-3)'
    }, {
      label: 'Other',
      value: 6,
      color: 'var(--chart-10)'
    }]
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    size: "sm",
    direction: "column",
    series: [{
      key: 'u',
      label: 'Upstream',
      color: 'var(--chart-1)',
      value: '52%'
    }, {
      key: 'p',
      label: 'Products',
      color: 'var(--chart-2)',
      value: '28%'
    }, {
      key: 'c',
      label: 'Chemicals',
      color: 'var(--chart-3)',
      value: '14%'
    }, {
      key: 'o',
      label: 'Other',
      color: 'var(--chart-10)',
      value: '6%'
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    dense: true,
    title: "Thesis",
    subtitle: "Owned by A. Kessler",
    icon: "notebook-pen",
    padding: "sm"
  }, /*#__PURE__*/React.createElement(Accordion, {
    dense: true,
    openKeys: open,
    onToggle: toggle,
    items: [{
      key: 'thesis',
      label: 'Why we own it',
      summary: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive",
        size: "sm"
      }, "High conviction"),
      content: /*#__PURE__*/React.createElement("p", {
        className: "prose-serif",
        style: {
          margin: 0,
          fontSize: 'var(--text-sm)'
        }
      }, "Mid-cycle crack spreads are structurally wider than the 2015\u201319 window and the capex cycle has not responded. The company converts that into buybacks at roughly 8% of market cap a year.")
    }, {
      key: 'risk',
      label: 'What breaks it',
      summary: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--text-2xs)'
        }
      }, "3 risks"),
      content: /*#__PURE__*/React.createElement("ul", {
        style: {
          margin: 0,
          paddingLeft: 16,
          fontSize: 'var(--text-xs)',
          color: 'var(--text-body)',
          lineHeight: 1.7
        }
      }, /*#__PURE__*/React.createElement("li", null, "Spreads compress to 2019 levels for two consecutive quarters"), /*#__PURE__*/React.createElement("li", null, "Buyback pauses in favour of an acquisition"), /*#__PURE__*/React.createElement("li", null, "Refinery outage above 30 days at the Gulf complex"))
    }, {
      key: 'levels',
      label: 'Levels',
      summary: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-2xs)'
        }
      }, "96 / 131 / 158"),
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-10)',
          fontSize: 'var(--text-xs)'
        }
      }, [['Downside', '$96', 'var(--text-negative)'], ['Base', '$131', 'var(--text-primary)'], ['Upside', '$158', 'var(--text-positive)']].map(([l, v, col]) => /*#__PURE__*/React.createElement("div", {
        key: l,
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--text-3xs)',
          fontWeight: 600,
          letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)'
        }
      }, l), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-lg)',
          color: col
        }
      }, v))))
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    title: "Model summary",
    subtitle: "Firm estimates vs consensus",
    icon: "table-2",
    footer: /*#__PURE__*/React.createElement("span", null, "Firm model last updated 8 Aug by A. Kessler")
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    rows: [{
      id: 'm1',
      line: 'Revenue ($bn)',
      fy24: 344.6,
      fy25: 352.1,
      cons: 349.0,
      diff: 0.9
    }, {
      id: 'm2',
      line: 'EBITDA ($bn)',
      fy24: 41.2,
      fy25: 44.8,
      cons: 42.1,
      diff: 6.4
    }, {
      id: 'm3',
      line: 'EPS ($)',
      fy24: 8.42,
      fy25: 9.61,
      cons: 8.98,
      diff: 7.0
    }, {
      id: 'm4',
      line: 'FCF ($bn)',
      fy24: 28.4,
      fy25: 32.9,
      cons: 30.1,
      diff: 9.3
    }, {
      id: 'm5',
      line: 'Buyback ($bn)',
      fy24: 17.5,
      fy25: 20.0,
      cons: 18.2,
      diff: 9.9
    }],
    columns: [{
      key: 'line',
      label: 'Line',
      emphasis: true,
      maxWidth: 150
    }, {
      key: 'fy24',
      label: 'FY24',
      numeric: true,
      width: 88
    }, {
      key: 'fy25',
      label: 'FY25E',
      numeric: true,
      width: 88
    }, {
      key: 'cons',
      label: 'Consensus',
      numeric: true,
      width: 104,
      muted: true
    }, {
      key: 'diff',
      label: 'vs cons',
      numeric: true,
      width: 96,
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        glyph: "none",
        size: "xs"
      })
    }]
  }))));
}
Object.assign(window, {
  CompanyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/research_workspace/CompanyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/research_workspace/NotesScreen.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  Badge,
  Tag,
  Input,
  Select,
  SegmentedControl,
  Icon,
  Tooltip,
  Popover,
  Alert
} = window.BasisDesignSystem_6e7350;
function NotesScreen({
  onOpenCompany
}) {
  const [active, setActive] = React.useState('n1');
  const [type, setType] = React.useState('all');
  const [q, setQ] = React.useState('');
  const list = NOTES.filter(n => (type === 'all' || n.type.toLowerCase() === type) && (q === '' || (n.title + n.body).toLowerCase().includes(q.toLowerCase())));
  const note = NOTES.find(n => n.id === active) || list[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Notes",
    meta: "Desk research \xB7 4 notes \xB7 shared with 6 people",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "filter"
    }, "Saved filters"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "file-plus"
    }, "New note"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    style: {
      width: 320,
      flex: '0 0 auto'
    },
    title: /*#__PURE__*/React.createElement("span", null, "Inbox"),
    icon: "inbox",
    actions: /*#__PURE__*/React.createElement(SegmentedControl, {
      size: "sm",
      value: type,
      onChange: setType,
      options: [{
        value: 'all',
        label: 'All'
      }, {
        value: 'initiation',
        label: 'Init'
      }, {
        value: 'update',
        label: 'Updates'
      }]
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Search notes",
    value: q,
    onChange: e => setQ(e.target.value),
    onClear: () => setQ('')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 520,
      overflow: 'auto'
    }
  }, list.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setActive(n.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: 'var(--space-6)',
        background: on ? 'var(--surface-selected)' : 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--border-subtle)',
        borderLeft: '2px solid ' + (on ? 'var(--blue-700)' : 'transparent'),
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: on ? 'var(--text-brand)' : 'var(--text-secondary)'
      }
    }, n.ticker), /*#__PURE__*/React.createElement(Badge, {
      tone: n.type === 'Initiation' ? 'info' : n.type === 'Method' ? 'neutral' : 'positive',
      size: "sm"
    }, n.type), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 'var(--text-3xs)',
        color: 'var(--text-tertiary)'
      }
    }, n.date)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 600 : 500,
        color: 'var(--text-primary)',
        lineHeight: 1.3
      }
    }, n.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-tertiary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: 260
      }
    }, n.author, " \xB7 ", n.body.slice(0, 52), "\u2026"));
  }))), /*#__PURE__*/React.createElement(Card, {
    dense: true,
    style: {
      flex: '1 1 auto',
      minWidth: 0
    },
    title: note.title,
    subtitle: note.author + ' · ' + note.date + ' · ' + note.type,
    icon: "file-text",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: note.conviction === 'High' ? 'positive' : note.conviction === 'Medium' ? 'caution' : 'neutral',
      size: "sm"
    }, note.conviction === '—' ? 'No call' : note.conviction + ' conviction'), /*#__PURE__*/React.createElement(IconButton, {
      icon: "link",
      label: "Copy link",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "printer",
      label: "Print",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      label: "More",
      size: "sm"
    })),
    footer: /*#__PURE__*/React.createElement("span", null, "Version 3 \xB7 edited 2h ago \xB7 visible to Global L/S team")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-8)'
    }
  }, note.ticker !== '—' ? /*#__PURE__*/React.createElement(Tag, {
    icon: "briefcase",
    interactive: true,
    onClick: () => onOpenCompany(CANDIDATES[0])
  }, note.ticker) : null, /*#__PURE__*/React.createElement(Tag, {
    icon: "tag"
  }, "Energy"), /*#__PURE__*/React.createElement(Tag, {
    icon: "tag"
  }, "Refining")), /*#__PURE__*/React.createElement("p", {
    className: "prose-serif",
    style: {
      maxWidth: 640,
      marginBottom: 'var(--space-9)'
    }
  }, note.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,max-content)',
      gap: 'var(--space-6) var(--space-11)',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Position', '4.2% NAV'], ['Entry', '12 Jun at $101.20'], ['Base case', '$131'], ['Next catalyst', 'Q3 print, 28 Oct']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, v)))))));
}
Object.assign(window, {
  NotesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/research_workspace/NotesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/research_workspace/ScreensScreen.jsx
try { (() => {
const {
  Card,
  DataTable,
  DeltaValue,
  Sparkline,
  Button,
  IconButton,
  Badge,
  Tag,
  Input,
  Select,
  SegmentedControl,
  Checkbox,
  Field,
  Popover,
  Dialog,
  Icon,
  Tooltip,
  Alert,
  BarMeter
} = window.BasisDesignSystem_6e7350;
function ScreensScreen({
  onOpenCompany
}) {
  const [active, setActive] = React.useState('s2');
  const [dialog, setDialog] = React.useState(false);
  const [sort, setSort] = React.useState({
    key: 'score',
    dir: 'desc'
  });
  const [q, setQ] = React.useState('');
  const def = SCREEN_DEFS.find(s => s.id === active);
  const rows = CANDIDATES.filter(c => q === '' || (c.ticker + c.name).toLowerCase().includes(q.toLowerCase()));
  const sorted = [...rows].sort((a, b) => {
    const d = sort.dir === 'asc' ? 1 : -1;
    const av = a[sort.key],
      bv = b[sort.key];
    return typeof av === 'number' ? (av - bv) * d : String(av).localeCompare(String(bv)) * d;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    title: "Screens",
    icon: "filter",
    style: {
      width: 268,
      flex: '0 0 auto'
    },
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "New screen",
      size: "sm",
      onClick: () => setDialog(true)
    }),
    footer: /*#__PURE__*/React.createElement("span", null, "5 screens \xB7 3 shared with the desk")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, SCREEN_DEFS.map(s => {
    const on = s.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setActive(s.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        padding: 'var(--space-6)',
        background: on ? 'var(--surface-selected)' : 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--border-subtle)',
        borderLeft: '2px solid ' + (on ? 'var(--blue-700)' : 'transparent'),
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--text-brand)' : 'var(--text-primary)'
      }
    }, s.name), s.shared ? /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11,
      color: "var(--text-tertiary)"
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--text-secondary)'
      }
    }, s.hits)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-tertiary)'
      }
    }, s.owner, " \xB7 ", s.updated));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: def.name,
    meta: def.universe + ' · ' + def.hits + ' names · rebuilt ' + def.updated,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "sliders-horizontal"
    }, "Criteria"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "users"
    }, "Share"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: "plus"
    }, "Add to book"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, def.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    icon: "tag"
  }, t)), /*#__PURE__*/React.createElement(Tag, {
    icon: "filter",
    onRemove: () => {}
  }, "EV/EBITDA < 9\xD7"), /*#__PURE__*/React.createElement(Tag, {
    icon: "filter",
    onRemove: () => {}
  }, "FCF yield > 4%"), /*#__PURE__*/React.createElement(Popover, {
    title: "Add criterion",
    width: 250,
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "xs",
      variant: "ghost",
      iconLeft: "plus"
    }, "Criterion")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Metric"
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: [{
      value: 'roic',
      label: 'ROIC'
    }, {
      value: 'nd',
      label: 'Net debt / EBITDA'
    }, {
      value: 'rev',
      label: 'Revision breadth'
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Threshold"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    mono: true,
    defaultValue: "12.0",
    suffix: "%"
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    dense: true,
    title: "Candidates",
    subtitle: "Ranked by composite score",
    actions: /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      iconLeft: "search",
      placeholder: "Filter",
      value: q,
      onChange: e => setQ(e.target.value),
      onClear: () => setQ(''),
      fullWidth: false,
      style: {
        width: 170
      }
    }),
    footer: /*#__PURE__*/React.createElement("span", null, "Composite score = equal-weight rank of the five criteria \xB7 fundamentals as reported, FX-adjusted")
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    sort: sort,
    onSortChange: setSort,
    rows: sorted,
    onRowClick: r => onOpenCompany(r),
    columns: [{
      key: 'ticker',
      label: 'Ticker',
      emphasis: true,
      width: 106
    }, {
      key: 'name',
      label: 'Name',
      muted: true,
      maxWidth: 180
    }, {
      key: 'mcap',
      label: 'Mkt cap',
      numeric: true,
      width: 96,
      render: v => '$' + v + 'bn'
    }, {
      key: 'ev',
      label: 'EV/EBITDA',
      numeric: true,
      width: 104,
      render: v => v.toFixed(1) + '×'
    }, {
      key: 'fcf',
      label: 'FCF yield',
      numeric: true,
      width: 96,
      render: v => v.toFixed(1) + '%'
    }, {
      key: 'roic',
      label: 'ROIC',
      numeric: true,
      width: 88,
      render: v => v.toFixed(1) + '%'
    }, {
      key: 'rev',
      label: 'Revisions',
      numeric: true,
      width: 100,
      description: '3-month change in consensus EPS, %',
      render: v => /*#__PURE__*/React.createElement(DeltaValue, {
        value: v,
        glyph: "none",
        size: "xs"
      })
    }, {
      key: 'score',
      label: 'Score',
      numeric: true,
      width: 132,
      render: v => /*#__PURE__*/React.createElement(BarMeter, {
        value: v,
        max: 100,
        showValue: true,
        formatValue: x => x.toFixed(0)
      })
    }, {
      key: 'held',
      label: '',
      sortable: false,
      width: 64,
      render: (v, r) => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          gap: 6
        }
      }, v ? /*#__PURE__*/React.createElement(Tooltip, {
        content: "Held in Global L/S"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "briefcase",
        size: 12,
        color: "var(--text-brand)"
      })) : null, r.note ? /*#__PURE__*/React.createElement(Tooltip, {
        content: "Has a research note"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 12,
        color: "var(--text-tertiary)"
      })) : null)
    }]
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    title: "New screen",
    icon: "filter",
    subtitle: "Saved to your workspace",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDialog(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setDialog(false)
    }, "Create"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "e.g. Post-capex FCF inflection"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Universe"
  }, /*#__PURE__*/React.createElement(Select, {
    options: [{
      value: 'dm',
      label: 'Developed large cap'
    }, {
      value: 'en',
      label: 'Global energy'
    }, {
      value: 'us',
      label: 'US consumer'
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Extend from",
    hint: "Inherits criteria; you can override any of them"
  }, /*#__PURE__*/React.createElement(Select, {
    options: [{
      value: 'none',
      label: 'Nothing — start empty'
    }, ...SCREEN_DEFS.map(s => ({
      value: s.id,
      label: s.name
    }))]
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Share with the desk",
    description: "Others can read and clone, not edit"
  }))));
}
Object.assign(window, {
  ScreensScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/research_workspace/ScreensScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/research_workspace/app.jsx
try { (() => {
const {
  SideNav,
  Tabs,
  Button,
  IconButton,
  Badge,
  Icon,
  Input,
  Breadcrumb,
  Popover,
  Switch,
  Tooltip
} = window.BasisDesignSystem_6e7350;
function Wordmark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)'
    }
  }, "Basis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Research"));
}
function PageHeader({
  title,
  meta,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-primary)'
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, meta) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, actions));
}
const NAV = [{
  section: 'Research'
}, {
  value: 'screens',
  label: 'Screens',
  icon: 'filter',
  badge: 5
}, {
  value: 'company',
  label: 'Companies',
  icon: 'building-2',
  badge: 42
}, {
  value: 'notes',
  label: 'Notes',
  icon: 'file-text',
  badge: 4
}, {
  section: 'Portfolio'
}, {
  value: 'terminal',
  label: 'Terminal',
  icon: 'layout-dashboard'
}];
function App() {
  const [screen, setScreen] = React.useState('screens');
  const [company, setCompany] = React.useState(null);
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const openCompany = c => {
    setCompany(c);
    setScreen('company');
  };
  const body = screen === 'company' ? /*#__PURE__*/React.createElement(CompanyScreen, {
    company: company,
    onBack: () => setScreen('screens')
  }) : screen === 'notes' ? /*#__PURE__*/React.createElement(NotesScreen, {
    onOpenCompany: openCompany
  }) : screen === 'terminal' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      maxWidth: 520,
      padding: 'var(--space-11) 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Portfolio Terminal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "The portfolio modules live in the other kit. Open ", /*#__PURE__*/React.createElement("a", {
    href: "../portfolio_terminal/index.html"
  }, "portfolio_terminal"), "."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "arrow-left",
    onClick: () => setScreen('screens')
  }, "Back to screens")) : /*#__PURE__*/React.createElement(ScreensScreen, {
    onOpenCompany: openCompany
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      minHeight: 0,
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    value: screen,
    onChange: setScreen,
    items: NAV,
    header: /*#__PURE__*/React.createElement(Wordmark, null),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        background: 'var(--ink-800)',
        borderRadius: 'var(--radius-pill)',
        fontSize: 9,
        fontWeight: 600,
        color: 'var(--white)'
      }
    }, "AK"), "A. Kessler")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      height: 'var(--topbar-h)',
      padding: '0 var(--space-8)',
      background: 'var(--surface-chrome)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Search companies, screens and notes",
    fullWidth: false,
    style: {
      width: 340
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Fundamentals refreshed nightly"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    icon: "database"
  }, "Data 06:00 ET")), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom-end",
    title: "Display",
    width: 200,
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings-2",
      label: "Display settings",
      size: "sm"
    })
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: dark,
    onChange: setDark,
    label: "Dark mode"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Alerts",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: '1 1 auto',
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--space-9) var(--space-8) var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, body))));
}
Object.assign(window, {
  Wordmark,
  PageHeader
});
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/research_workspace/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/research_workspace/data.jsx
try { (() => {
const rwave = (n, drift, amp, seed = 1) => Array.from({
  length: n
}, (_, i) => Math.sin((i + seed) / 2.7) * amp + Math.cos((i + seed) / 1.6) * amp * 0.4 + i * drift);
const SCREEN_DEFS = [{
  id: 's1',
  name: 'Quality compounders',
  owner: 'A. Kessler',
  universe: 'Developed large cap',
  hits: 42,
  updated: '2h ago',
  shared: true,
  tags: ['Quality', 'Low leverage']
}, {
  id: 's2',
  name: 'Refining margin torque',
  owner: 'A. Kessler',
  universe: 'Global energy',
  hits: 11,
  updated: 'Yesterday',
  shared: false,
  tags: ['Energy', 'Cyclical']
}, {
  id: 's3',
  name: 'Short candidates — staples',
  owner: 'M. Duarte',
  universe: 'US consumer',
  hits: 19,
  updated: '3d ago',
  shared: true,
  tags: ['Short', 'Valuation']
}, {
  id: 's4',
  name: 'Post-capex free cash inflection',
  owner: 'R. Iyer',
  universe: 'Global industrials',
  hits: 27,
  updated: '1w ago',
  shared: true,
  tags: ['FCF', 'Capex']
}, {
  id: 's5',
  name: 'Crowding decay',
  owner: 'Quant desk',
  universe: 'Global',
  hits: 64,
  updated: '15m ago',
  shared: true,
  tags: ['Crowding', 'Momentum']
}];
const CANDIDATES = [{
  id: 'c1',
  ticker: 'XOM US',
  name: 'Exxon Mobil',
  sector: 'Energy',
  mcap: 512,
  ev: 6.4,
  fcf: 8.2,
  roic: 14.1,
  rev: 4.2,
  score: 87,
  held: true,
  note: true,
  spark: rwave(24, .9, 2, 1)
}, {
  id: 'c2',
  ticker: 'VLO US',
  name: 'Valero Energy',
  sector: 'Energy',
  mcap: 48,
  ev: 5.1,
  fcf: 11.4,
  roic: 17.8,
  rev: 2.1,
  score: 84,
  held: false,
  note: true,
  spark: rwave(24, 1.1, 2.4, 3)
}, {
  id: 'c3',
  ticker: 'SHEL LN',
  name: 'Shell plc',
  sector: 'Energy',
  mcap: 214,
  ev: 5.8,
  fcf: 9.1,
  roic: 12.4,
  rev: 1.4,
  score: 79,
  held: true,
  note: false,
  spark: rwave(24, .4, 1.8, 5)
}, {
  id: 'c4',
  ticker: 'NESTE FH',
  name: 'Neste Oyj',
  sector: 'Energy',
  mcap: 14,
  ev: 8.9,
  fcf: 4.2,
  roic: 9.1,
  rev: -6.2,
  score: 61,
  held: false,
  note: false,
  spark: rwave(24, -.5, 2.6, 7)
}, {
  id: 'c5',
  ticker: 'MPC US',
  name: 'Marathon Petroleum',
  sector: 'Energy',
  mcap: 62,
  ev: 4.8,
  fcf: 12.8,
  roic: 19.2,
  rev: 1.8,
  score: 88,
  held: false,
  note: true,
  spark: rwave(24, 1.3, 2.2, 2)
}, {
  id: 'c6',
  ticker: 'REP SM',
  name: 'Repsol SA',
  sector: 'Energy',
  mcap: 18,
  ev: 3.9,
  fcf: 14.1,
  roic: 10.8,
  rev: 0.4,
  score: 72,
  held: false,
  note: false,
  spark: rwave(24, .2, 1.6, 9)
}, {
  id: 'c7',
  ticker: 'PBR US',
  name: 'Petrobras',
  sector: 'Energy',
  mcap: 94,
  ev: 3.2,
  fcf: 18.4,
  roic: 22.4,
  rev: -1.1,
  score: 75,
  held: false,
  note: false,
  spark: rwave(24, .6, 3.1, 4)
}];
const NOTES = [{
  id: 'n1',
  title: 'XOM — refining spreads are doing the work',
  ticker: 'XOM US',
  author: 'A. Kessler',
  date: '12 Aug',
  type: 'Update',
  conviction: 'High',
  body: 'Energy contributed 64 bps, almost all of it from two refiners we added in June. Positioning is unchanged into the print; we would add on any move below 8× mid-cycle. The short book cost 37 bps, concentrated in staples.'
}, {
  id: 'n2',
  title: 'MPC — capital return is the whole thesis',
  ticker: 'MPC US',
  author: 'A. Kessler',
  date: '8 Aug',
  type: 'Initiation',
  conviction: 'High',
  body: 'Marathon converts roughly 12% of market cap into free cash at mid-cycle cracks and has retired a fifth of its shares in three years. The question is not the model, it is whether the buyback survives a compression back to 2019 spreads. Our downside holds 14× on trough earnings.'
}, {
  id: 'n3',
  title: 'Staples shorts — waiting on volume, not price',
  ticker: 'PG US',
  author: 'M. Duarte',
  date: '5 Aug',
  type: 'Update',
  conviction: 'Medium',
  body: 'Price has done the work, volume has not. Elasticity in the last two prints suggests the pricing lever is exhausted. Keeping the position at 1.9% and revisiting after the September scanner data.'
}, {
  id: 'n4',
  title: 'Crowding decay screen — methodology change',
  ticker: '—',
  author: 'Quant desk',
  date: '1 Aug',
  type: 'Method',
  conviction: '—',
  body: 'Crowding is now measured on a 20-day change in short interest plus lender utilisation, replacing the 60-day version. The change shortens the signal half-life and reduces overlap with momentum by roughly a third.'
}];
Object.assign(window, {
  rwave,
  SCREEN_DEFS,
  CANDIDATES,
  NOTES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/research_workspace/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.BarMeter = __ds_scope.BarMeter;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DeltaValue = __ds_scope.DeltaValue;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

})();
