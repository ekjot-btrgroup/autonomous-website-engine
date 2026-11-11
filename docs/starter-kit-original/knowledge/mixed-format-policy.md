# Mixed-format source policy

A design is a section-level asset. It may be a complete folder or a self-contained component with styles/assets.

## Detection order
1. Inspect manifest and dependency declarations.
2. Inspect file extensions and import graph.
3. Inspect framework-specific syntax.
4. Inspect asset references and CSS.
5. Record framework confidence and unresolved dependencies.

## Adapters
- `static-html`: preview with a static server if self-contained.
- `react` / `nextjs`: isolated temporary project; install only required dependencies after review.
- `vue`, `svelte`, `astro`: isolated project using detected toolchain.
- `web-component`: browser preview harness.
- `framer-related`: identify whether it is an export, code component, or source requiring Framer runtime; do not claim standalone preview if unavailable.
- `unknown`: preserve source and report manual adapter needed.

Do not translate source frameworks automatically during ingestion. Translation is a separate generation decision after the user selects designs.
