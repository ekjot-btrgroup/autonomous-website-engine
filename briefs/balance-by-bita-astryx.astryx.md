# Astryx design system digest (source: github.com/meta/astryx, packages/core/src/theme/tokens.stylex.ts, packages/themes/*, packages/cli/assets/docs/*)

Astryx is a React + StyleX system. These designs are plain HTML, so each design re-creates the Astryx token
layer as CSS custom properties with the SAME names, then styles everything through those variables.

## Rules taken from Astryx principles
- Semantic tokens only: no raw hex, px spacing or font sizes inside component rules; use the variables below.
- Colours are CSS variables (`--color-*`). Themes are an override layer of the same variable names.
- Frame first: page shell and region widths before content. Dense data (price lists, hours, FAQ) = ruled rows
  (Astryx List/Item, Table), not a grid of cards. Cards only for galleries / grouped widgets.
- No decorative badges. Status = a small dot + label (StatusDot), e.g. "Chicago: waitlist open".
- Focus: `outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color); outline-offset: var(--focus-outline-offset)` on :focus-visible.
- Hover only inside `@media (hover:hover)`. Respect `prefers-reduced-motion`.
- Motion helps only where the user must understand a change (accordion open, menu open, state change). No
  decorative entrance animations (the brief also says animations: none).

## Core token names and defaults (override palette per theme)
Spacing (4px base): --spacing-0-5 .125rem, -1 .25rem, -1-5 .375rem, -2 .5rem, -3 .75rem, -4 1rem, -5 1.25rem,
-6 1.5rem, -7 1.75rem, -8 2rem, -9 2.25rem, -10 2.5rem, -11 2.75rem, -12 3rem. (Marketing pages may add
section-scale vars such as --spacing-section built as multiples, e.g. calc(var(--spacing-12)*2.5).)
Element sizes: --size-element-sm 28px, -md 32px, -lg 36px (use min 44px tap height on phone).
Border: --border-width 1px. Radius: --radius-none 0, --radius-inner 4px, --radius-element 8px,
--radius-container 12px, --radius-page 28px, --radius-full 9999px.
Shadows: --shadow-low/med/high = two-layer soft shadows tinted with the theme's ink colour at 5-15% alpha.
Duration: --duration-fast-min 130ms, --duration-fast 175ms, --duration-fast-max 230ms, --duration-medium 410ms,
--duration-slow 975ms, --duration-exit = fast. Easing: --ease-standard / --ease-entrance / --ease-move
cubic-bezier(0.24,1,0.4,1); --ease-exit cubic-bezier(0.3,0,0.6,0.6).
Type scale (modular 1.2 from 14px): --font-size-xs .625rem, -sm .75rem, -base .875rem, -lg 1.0625rem,
-xl 1.25rem, -2xl 1.5rem, -3xl 1.8125rem, -4xl 2.1875rem, -5xl 2.625rem. Weights 400/500/600/700.
Roles: --text-display-1 (5xl, 400, 1.24), display-2 (4xl), display-3 (3xl); heading-1 2xl/600, heading-2 xl/600,
heading-3 lg/600; body base/400/1.43; large lg; label base/500; supporting sm/400/1.67.
For a marketing homepage continue the SAME 1.2 ratio upward for hero type (e.g. --font-size-6xl 3.15rem,
-7xl 3.78rem, -8xl 4.54rem, -9xl 5.44rem, -10xl 6.53rem) and use clamp() with these steps; body on the web may
use --font-size-lg (17px) for readability.
Semantic colour names: --color-background-body, --color-background-surface, --color-background-card,
--color-background-muted, --color-background-inverted, --color-text-primary, --color-text-secondary,
--color-text-accent, --color-accent, --color-accent-muted, --color-on-accent, --color-border,
--color-border-emphasized, --color-success (for "open" status dots).

## Astryx themes (source values)
- Chocolate: body/surface #FFFCF7, muted/card #EDE4D4, text #4a3520, secondary #B88859 (decorative only, too
  light for text), accent #8C5927, border #C4AC95; dark mode body #141010, surface #1c1610, card #2a2018,
  text #EDE4D4, accent #d4a06a. Fonts: Fraunces (headings), Albert Sans (body). Radius inner .375rem,
  element .625rem, container .75rem, page 1.5rem.
- Stone: slate neutrals #f0f0f7 (95), #e2e2e8 (90), #ffffff, text #25252a, secondary #5f5f64, accent = #25252a.
  Fonts: Montserrat (headings), Figtree (body). Radius .25 / .5 / .75 / 1.5rem.
- Neutral: greys #f1f1f1, #e2e2e2, #ffffff, text #000/#1b1b1b, secondary #474747. Font: Figtree.
  Radius .375 / .625 / .75 / 1.75rem.
- Matcha: greens #f0f0e0 (95), #e7ead4 (90), #dce3ce (85), text #3e481d, secondary #5a6b2a. Fonts: Playwrite US
  Trad (headings, a script), DM Sans (body). Radius 6 / 12 / 18 / 42px (the roundest theme).
- Y2K: periwinkle body, charcoal accent; Crimson Text (serif) + Poppins.
- Gothic (dark only, blue-grey), Butter (gold + blue, Sarina): not used for this brief.
Fonts load from Google Fonts with display=swap.
