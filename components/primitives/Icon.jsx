import React from 'react';

const LUCIDE_UMD = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js';
const pascal = (n) => String(n).split(/[-_ ]+/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');

let loading = null;
function ensureLucide() {
  if (typeof window === 'undefined') return null;
  if (window.lucide && window.lucide.icons) return window.lucide;
  if (!loading) {
    loading = new Promise((res) => {
      const existing = document.querySelector('script[data-basis-lucide]');
      if (existing) { existing.addEventListener('load', () => res(window.lucide)); return; }
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
export function Icon({ name = 'circle', size = 14, color = 'currentColor', strokeWidth = 2, style, title, ...rest }) {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    if (window.lucide && window.lucide.icons) return;
    ensureLucide();
    if (loading) loading.then(() => force());
  }, [name]);

  const set = (typeof window !== 'undefined' && window.lucide && window.lucide.icons) || null;
  if (!set) { ensureLucide(); }
  const node = set ? (set[pascal(name)] || set.Circle) : null;
  const children = node && Array.isArray(node[2]) ? node[2] : [];

  return (
    <svg
      role="img" aria-label={title || name} width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', flex: '0 0 auto', verticalAlign: '-0.15em', ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children.map((c, i) => React.createElement(c[0], { key: i, ...c[1] }))}
    </svg>
  );
}
