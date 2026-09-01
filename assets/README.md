# assets/

Empty on purpose.

No logo, wordmark file, icon set, font binary or brand image was supplied with the brief, and this system does not draw or reconstruct a company's mark from memory. Wherever a mark would go, the brand name is set in Archivo Bold at −0.03em tracking (see `guidelines/brand-wordmark.html`).

Drop files here when they arrive:

- `logo.svg` — primary mark. The project thumbnail (`thumbnail.html`) and both UI kit wordmarks will need updating to use it.
- `fonts/*.woff2` — licensed families. Replace the Google Fonts `@import` in `tokens/fonts.css` with local `@font-face` rules; nothing else changes.
- `icons/*.svg` — a house icon set. Swap the lookup inside `components/primitives/Icon.jsx`; no call site changes.
