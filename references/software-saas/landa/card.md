# Landa  (software-saas)
A launch page for a developer-leaning web product that wants to feel fast and engineered rather than loud. Everything sits on an almost-black green void; light is the only decoration, arriving as aqua rim glows, diagonal light streaks and a faint halftone grain, so the page reads like a dark instrument panel.

## Type
- One family: Inter Variable. Headlines at weight 550 with -2% tracking: H1 72/80 (58 tablet, 40 phone), H2 56/64 (45, 36), H3 32/40. Card titles 20-24 at 450.
- Body 16/24 and 14/20 at 400-450, set in white at 64-82% opacity rather than a grey; small labels 12/16.
- Hierarchy comes from size and opacity steps only, never colour or weight jumps. Headlines are short, centred and end with a full stop, which gives the page a calm declarative cadence.

## Colour
- bg #010907 is a black with a green cast; surfaces are not lighter fills but 2-4% mint or white overlays plus a 1px 8-12% white hairline.
- Ink #f4f7f5 at 96/82/64/24% opacity builds the whole text ramp.
- Accent aqua #69ecbf appears as light, not paint: glow arcs, button rim highlights, active tab underline, check marks, tiny pill counters. Deeper teal #09bc8a for fills at 12% behind icons.
- Three muted secondary hues (burnt orange, soft gold, sky blue) only live inside chart bars and the faint per-card colour wash in the bento.

## Layout and spacing
- 1440 canvas, content about 1078 wide (181px gutters), 112px vertical section padding; pricing gets 280px top padding to make room for its glow dome.
- 2x2 bento feature grid with tall illustration tops, then a 3-column step row divided by thin vertical rules, then a 2-column split of UI mocks separated by a single vertical hairline, then a 4-up icon row.
- Cards: 16-24px radius, 1px low-contrast border, no drop shadows; the featured pricing card is lifted by an inner aqua tint and a glowing top edge.
- Buttons are dark pills with a thin aqua light line on the top edge and a chevron.

## Sections (homepage, in order)
1. Hero: centred two-line headline over a full-width field of blurred diagonal aqua light streaks with grain; ghosted wireframe UI fragments (avatar card, toggle, panel) float left and right in dashed boxes. Small status pill above, one-line subhead, single pill CTA.
2. Logos: short centred caption then a 3x2 logo grid, very low contrast.
3. Features: centred H2, then a 2x2 bento of dark cards whose upper halves hold dotted-wireframe isometric objects with a soft colour wash; icon + title + two-line text below.
4. Process: "3 steps" style row, three centred mini columns each with a small glowing icon pill, separated by vertical hairlines.
5. Product proof: two-column split, left an optimisation checklist mock with applied states, right a live bar chart with a floating tooltip; below, a 4-up row of icon + title + text.
6. Pricing: glow-arc dome rising behind the H2, monthly/yearly tabs with an aqua underline and a discount chip, three cards with the middle one tinted and lifted.
7. Testimonials: 3x2 grid of quote cards, avatar + name + role at the bottom.
8. Stats: left statement headline with a small avatar proof chip, right a 2x2 grid of big numerals with captions.
9. FAQ: preceded by a vertical light-streak band; two-column accordion of dark rows with plus icons and a contact line under it.
10. CTA: second glow dome, centred headline and pill button, then a browser-chrome frame mock leading into a huge cropped wordmark made of light streaks, then a minimal footer.

## Motion
- 15 appear effects: fade up from y 64, spring stiffness 40 / damping 30 / mass 1, delay 0.3s, triggered on mount at 50% threshold; slow and weighty, staged section by section.
- One scroll-target style transform that scales a floating promo card from 0 to 1 (spring 500/60) when a target section is reached; fixed position.
- Glow and streak textures are static images, so the page feels animated through light, not movement.

## Phone
- Single column throughout; bento and pricing stack, step row becomes a vertical list, stats become 2x2. H1 drops to 40px and the hero keeps its streak background with the side wireframes hidden. Header collapses to logo + menu.

## Signature moments
- The aqua horizon arc that crowns pricing and the final CTA like a planet rim.
- Dotted wireframe isometric glyphs that look drawn by a plotter.
- The oversized brand wordmark built out of light streaks before the footer.

## Borrow
- Surfaces as opacity overlays plus hairlines instead of grey fills: keeps a dark page rich and coherent.
- A single accent used only as emitted light (rims, underlines, checks).
- Glow-dome section openers to give pricing and CTA a sense of arrival.
- UI mocks that show states (applied, pending) instead of static screenshots.

## Avoid
- Logos and testimonial grids are generic and low contrast; they add length without character.
- Very similar centred H2 + subtitle openers on almost every section make the rhythm monotone.
- Dark-teal glow SaaS is a crowded look; reuse needs a distinct accent or a non-tech subject to avoid feeling templated.
