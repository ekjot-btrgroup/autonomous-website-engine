# kairu  (services-education)
A one-product sales page for an online course, built like a calm startup landing page. Warm paper background, near-black type and a single saturated orange do all the work; there is almost no photography, so trust comes from UI-like cards, a framed trailer and big numbers. Very long scroll with huge gaps between sections, which makes each idea land on its own.

## Type
- H1: Cabinet Grotesk 500, 72px, tracking -0.04em, leading 1.1 (56px on phone). Two centred lines; one phrase in the second line sits inside a peach pill with fully rounded ends.
- H2: Cabinet Grotesk 500, 64px, same tracking (48px phone). Often a two-line statement, short and punchy.
- H3 / H4: Cabinet Grotesk 500 at 32px and 24px for card titles.
- Body: Geist 400, 19px, tracking -0.02em, leading 1.5; secondary copy in warm grey #9c9a97.
- Labels: Geist 600, 13px caps, tracking 0.2em, orange, inside a beige pill tag above every heading.

## Colour
- Background #f8f5f0 warm paper; Card #f0ede8 for every card and the window frame.
- Ink #141412 for headings and checklist text; grey #9c9a97 for descriptions.
- Highlight #ff6b35 for buttons, tags and section labels; a pale peach tint of it for the headline pill and module numerals.
- No borders, no shadows: cards separate from the page by a few points of tone only.

## Layout and spacing
- 1200px frame, 50px side padding, 300px of top padding before each section: very airy.
- Section headers alternate centred (problem, pricing, FAQ) and left heading with a short grey paragraph on the right (curriculum, audience, instructor).
- Radii 20px on cards, 10px on inner tiles, pills for buttons and tags.
- Faint 1px grid lines (Shimmer Grid, Grid Light components) sit behind the hero and the price card as texture.

## Sections (homepage, in order)
1. Hero: centred stars and proof line, two-line pill-highlight headline, grey lead, orange pill button with an arrow cap plus a beige secondary button; below, a ticker row of payment notification cards with app icons.
2. Video preview: wide rounded beige window with traffic-light dots and a breadcrumb title, the trailer inside.
3. Problem: centred header, 2x2 grid of icon cards with short pain points.
4. Transformation: centred header, a scroll-driven timeline of four week milestones (W1 to W4) with cards; then a proof header with avatar stack and a ticker of testimonial cards.
5. Curriculum: left header with right-hand note, 3x2 module cards each with a big peach number, title, grey line, checklist and a tiny caps lesson count; then three count-up stats centred.
6. Mid-page CTA: centred two-line H2 with the highlight pill again and an orange button, over a light grid.
7. Who this is for: left header, four audience cards that stick and stack as you scroll, tilting slightly.
8. Instructor: name as H2, portrait, bio paragraph, social link tiles, three stats.
9. Pricing: centred header, one card with a lighter inner panel holding label, big price and terms, a checklist below and a full-width orange button.
10. FAQ: 2-column grid of question cards and a small contact prompt.
Footer: product name, short line, socials and a compact link row.

## Motion
- Headings reveal line by line: 20px rise with 5px blur, 0.7s ease-out, 0.2s delay (9 text effects).
- Blocks fade up 24px over 1.5s with a soft ease-out after 0.4s (35 appear effects).
- Two tickers: payment cards in the hero and testimonial cards, both slow (velocity 20).
- Audience cards are sticky and rotate up to 3deg as they stack; count-up numbers on stats; fixed nav.

## Phone
- Headline drops to 56px; pill highlight wraps onto its own line.
- All grids become one column; module cards stack in order.
- Section padding stays large, so the page gets very long (about 20,000px).

## Signature moments
- Highlighter pill behind one headline phrase.
- Payment notification ticker as social proof without photos.
- Window-chrome frame around the video.
- Stacking, tilting sticky cards for the audience section.

## Borrow
- One accent colour plus two near-neutral beiges is enough for a whole page.
- Pill tags above every heading as a steady rhythm marker.
- Inner lighter panel inside the price card to separate price from features.
- Big tinted numerals to order a curriculum or process.

## Avoid
- The 300px gaps feel empty on short briefs; reduce to 160 to 200px when content is thin.
- Payment amounts, member revenue, ratings and student counts are template placeholders; never reuse invented proof.
- Tone-only cards can disappear on low-contrast screens; add a hairline if the palette gets lighter.
