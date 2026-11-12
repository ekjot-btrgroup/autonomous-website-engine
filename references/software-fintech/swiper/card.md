# Swiper  (software-fintech)
A B2B spend-management product page aimed at finance teams who want control and clarity. It reads like the product itself: dark UI chrome, a real-looking dashboard as the hero, and a strict Inter type system where hierarchy comes from weight and grey levels, not decoration.

## Type
- Inter only. H1 56/59 at 600 with -2% tracking (40 tablet, 30 phone); H2 34/37 (28, 23); H3 18 at 600 for card titles.
- Body 15/22 in secondary grey, 13px for card copy; stat numbers 38 at 700.
- Eyebrow: 12px 600 uppercase with 8% tracking inside an outlined pill above every section title.
- Tiny detail text at 11px for trust lines under buttons ("trial" style microcopy beside the CTA, split by a hairline).

## Colour
- Background #0a0a0a with surfaces #101012 and cards #1e1e21; borders #2c2c30 at 1px on everything.
- Ink #f2f2f2, secondary #8f8f94, tertiary #646469.
- One action colour: electric blue #0084ff on the primary pill button (with an inner highlight ring) and feature icons.
- A semantic set of accents (green, purple, blue, yellow, red, turquoise, orange) each with 8% fill and 14-16% border tokens, reserved for status badges such as "NEW" or "Popular". Full light theme exists through tokens and a theme toggle.

## Layout and spacing
- 1200 canvas, 1120 content box with 40px side padding; sections use 120px top and 80px bottom padding, so rhythm feels slightly top-heavy and orderly.
- Section headers centred or left (platform section is left aligned with a ghost button on the right), followed by grids: 2x2 service cards, 3x3 icon features, 4-step process row, 3 pricing cards, 3 case cards.
- Radii 8px for cards and inputs, 100px for pills and buttons, 12px for the dashboard frame. Almost no shadows; separation is all hairline borders and slight fill steps.

## Sections (homepage, in order)
1. Hero: centred eyebrow pill, two-line H1, two-line grey subhead, blue pill CTA with a divider and two-line trust microcopy, then a wide dashboard mock (sidebar nav, three KPI tiles, line chart, category progress bars) with a radial ember glow behind it.
2. Clients: eyebrow caption and a draggable logo ticker in mid grey.
3. Platform: left-aligned heading with ghost button right, 2x2 bordered cards each with icon, title, short copy and an optional coloured status badge; compliance badges row beneath.
4. Features: centred heading, borderless 3x3 grid of blue line icon, bold title and three-line grey copy, all centred.
5. Testimonials: one large quote card with avatar, company logo top-right, big quote set at H2-ish size, and two small metric tiles at the bottom.
6. Process: four numbered steps on a line with dots, short copy, CTA below.
7. Pricing: monthly/yearly toggle with saving badge, three cards, middle one highlighted with border and "most popular" pill, check-icon feature lists; trust logos below.
8. Cases: surface-tinted band with three photo cards (tag pill, headline, read link).
9. FAQ: centred heading and full-width accordion rows separated by borders.
10. Footer CTA: "ready" line with button, link columns, small legal print.

## Motion
- 30 appear effects: fade up y 14, tween 0.5s ease [0,0,0.2,1], in view at threshold 0, no replay; small and quick, product-like.
- Hero dashboard style transform: starts rotated 16deg on X and springs flat (0.3s, bounce 0) when it enters view.
- Logo ticker velocity 25, draggable. Lenis smooth scroll and a preloader in the template.

## Phone
- Single column, dashboard mock scales down and crops, 3x3 features become a stacked list, pricing cards stack with the popular one first highlighted. H1 30px. Header collapses to logo + menu icon.

## Signature moments
- The tilted dashboard that straightens as you arrive.
- Consistent outlined eyebrow pills turning section starts into UI labels.
- Semantic micro-badges that add colour without breaking the monochrome.

## Borrow
- Product-UI-as-hero with a restrained radial glow for depth.
- Token system with 8% fill / 14% border accent pairs for statuses.
- Trust microcopy beside the main CTA separated by a vertical hairline.
- Asymmetric section padding (120 top, 80 bottom) to tie heading to content.

## Avoid
- Remove the vendor promo badge and preloader; they read as template leftovers.
- The 3x3 icon grid is generic; give features more visual weight if reused.
- Monochrome dark plus a single blue can feel cold for non-technical audiences.
