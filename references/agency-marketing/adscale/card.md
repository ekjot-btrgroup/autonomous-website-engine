# AdScale  (agency-marketing)
A performance marketing agency site for e-commerce brands. The concept is a calm, almost product-like page on light smoke grey where every headline is a tight neutral grotesk that tips into an italic serif on its last word, and proof is shown as live-feeling UI: sale notifications, ad dashboards, growth charts.

## Type
- H1: Inter Display 400, 78px, tracking -5px, leading 72px (64 / 50). The emphasised word swaps to Source Serif 4 italic at the same size and tracking.
- H2: Inter Display 64px / 68px, tracking -3px, again with an italic serif word (46px on phone). H3 48px, H4 36px, H5 24px.
- Body: Inter Display 16 to 20px with -0.5px tracking, leading about 1.6, grey #6D6D6D; buttons 14 to 16px at 500.
- Hierarchy is a single sans voice made characterful by the serif-italic punchline in every title.

## Colour
- Smoke #F7F7F7 page background, white cards, near-black #1A1A1A text and solid buttons.
- Violet #8554FF is the only accent: glow behind the hero phone, the centre process icon, the ad-spend figure in the hero chip, thin connector lines.
- Grey #6D6D6D body copy; 10% black hairlines; one dark #1A1A1A rounded band for the process section and a dark featured pricing card.
- Chart cards use pastel washes (blue, green, yellow, pink) to tell platforms apart.

## Layout and spacing
- 1200 frame, 60px sides, 100px section padding; section headers centred with a pill chip, title, one-line grey lead.
- Cards: white, 16 to 32px radius, almost no shadow; process band is inset 16px from the page edges with 32px radius so it floats.
- Feature grid 2x2, pricing 2-up (light and dark), team as a bento of portraits and stat cards, case studies one large plus three small.

## Sections (homepage, in order)
1. Hero: left column with a stat chip, three-line headline ending in italic serif, grey lead, outline plus solid buttons, star rating row; right a phone showing a lock screen with order notifications, one notification enlarged and overlapping the frame, violet glow behind.
2. Logos: centred "trusted by" line over a logo ticker.
3. Services: 2x2 white cards, each a platform revenue chart (number, area chart in a pastel) above a title and short copy; a row of three stats and a rating below.
4. Process (dark inset panel): centred title, four slightly rotated note cards in the corners joined by curved shimmering lines to a central violet icon tile.
5. Testimonials: carousel of white quote cards with stars and avatars, arrow controls.
6. Pricing: two plans side by side, light card and dark card, feature checklists and full-width buttons.
7. Team: bento of portrait photos, role cards and a big metric card.
8. Case studies: one featured image card with stats plus three smaller cards.
9. Overview: three icon cards (targeting, creatives, reporting).
10. Single testimonial with a wave border and a button.
11. FAQ accordion with violet plus icons. 12. CTA with italic serif word and button; newsletter in the footer.

## Motion
- Smooth scroll component.
- Headings reveal word by word: opacity 0, y 10px, blur 10px, spring stiffness 200, damping 80.
- Blocks drop in from y -20px with spring stiffness 400, damping 80 and staggered delays up to 1.2s in the hero.
- Hero phone scales from 0.7 and y -100px to full size as it enters view.
- Shimmering SVG paths animate along the process connectors; logo ticker.

## Phone
One column at 20px sides; H1 50px, H2 46px. Hero phone sits under the text; chart cards stack; process notes become a vertical list around the icon; pricing cards stack; nav collapses to logo plus menu.

## Signature moments
- The sans to italic-serif switch on the last word of every heading.
- The phone of sale notifications with one enlarged alert breaking out of the frame.
- The tilted process notes wired to a glowing centre tile.

## Borrow
- One expressive serif-italic word per headline to add voice to a plain grotesk system.
- Proof-as-UI: charts and notifications instead of icons for services.
- An inset dark rounded panel as a single contrast band.
- Pill chips with a small icon as section kickers.

## Avoid
- Thirteen sections with many repeated card grids; trim for focus.
- Review counts and spend figures are placeholder claims; never reuse numbers.
- Violet glow on a phone is a common SaaS trope; vary the device or colour.
