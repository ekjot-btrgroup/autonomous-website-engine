# Pane  (agency-design)
A product design studio site aimed at software founders. The idea is "show the work, not the adjectives": a calm off-white page with a soft editorial serif, where almost every section contains a believable piece of product UI (dashboards, file lists, PR reviews, pricing toggles) framed on glowing fluted-glass gradients.

## Type
- Display: Geist Serif 400, 72px (58 / 40), tracking -0.035em, leading 1.02, centred, two lines.
- H2 Geist Serif 52px / 1.06 (44 / 34), always centred over a one-line Satoshi lead; H3 Serif 38px for process steps.
- Stats and prices also in Geist Serif 52px (e.g. a large euro figure with a small "/ month" in Satoshi beside it).
- Satoshi: Lead 19px / 1.5, Body 16px / 1.6, H3 20px / 500, Label and Button 15px / 500, Caption 13px muted.
- The mix is serif for anything a founder should remember (headline, numbers, quotes) and grotesk for everything functional.

## Colour
- Background #F8F7F4, Surface Muted #F1EFEA for the proof band, white cards.
- Text Primary #17171A; body #46444C; muted #6C6A73.
- Accent indigo #3346D3 used sparingly (cursor tags, links, toggles); Success green for status pills inside mock UI.
- Near-black solid buttons with off-white text; secondary buttons white with a 1px border.
- Gradients are the colour story: warm orange, peach, lilac and blue in vertical fluted-glass streaks behind every screenshot.
- Full dark mode token set exists (each token has a dark value).

## Layout and spacing
- 1200 frame, 70px side padding, content about 1060px; 112px vertical section padding.
- Centred section headers everywhere except process (text right, visual left alternating).
- Radius scale: 4px chips, 12px inner panels, 16 to 20px cards, 99px pills. Concentric radii inside cards.
- Cards are white with a 1px warm border and a very soft shadow; inner artefact panels sit on Surface Muted with their own border.

## Sections (homepage, in order)
1. Announcement bar (black, "new" chip) and a sticky nav with dropdown menus, language switch, theme toggle, outline and solid buttons.
2. Hero: centred serif headline, lead, two buttons, star rating line, then a large rounded fluted-glass panel holding a full product dashboard with named cursor tags drifting on a loop; a logo ticker sits underneath.
3. Services: three cards, each a gradient panel with a UI screenshot on top and title plus paragraph below.
4. Process: three tall rows, gradient panel with UI on the left, serif step title and paragraph on the right; rows pin as you scroll.
5. Work: tabbed case study switcher (four tabs) with a summary card and a dashboard screenshot.
6. Reasons (muted band): bento of four cards with artefacts: avatar row plus serif "11 years", a price with a month bar chart, a file ownership list, a PR checklist.
7. Pricing: billing toggle, three plans with serif prices, middle plan highlighted on a gradient.
8. Case study: portrait photo left, serif pull quote right, three serif stats beneath.
9. Reviews: centred carousel of quote cards with faded neighbours.
10. FAQ: two-column accordion of question rows.
11. CTA: serif headline with button left, product screenshot on gradient right. Footer: four link columns.

## Motion
- Smooth scroll and count-up components in the layout.
- Headings: word-by-word, opacity 0, y 16px, blur 4px, tween 0.5s, ease [0.2, 0, 0, 1].
- Blocks fade up 18px over 0.7s with a 0.24s delay, same ease.
- Cursor tags loop: x 22, y -12, mirror, 4.2s, ease [0.45, 0, 0.55, 1], paused off screen.
- Hero panel tilts on scroll; logo ticker at velocity 36, slows to 40% on hover. Three sticky process rows.

## Phone
Single column at 20px sides; display 40px, H2 34px. Hero dashboard crops to the left half inside the gradient frame. Bento cards stack; pricing plans stack with the toggle on top; process rows become image then text. Nav becomes a compact bar with a menu sheet.

## Signature moments
- The dashboard on fluted glass with live-looking multiplayer cursors.
- Bento proof cards built from tiny realistic UI.
- Serif prices and statistics that read like headlines.

## Borrow
- Replace icon features with small, specific artefacts that prove the claim.
- Gradient "glass" panels as a consistent frame for every screenshot.
- Serif plus grotesk split: serif for memory, grotesk for function.
- Announcement bar plus dark mode tokens for a product-grade feel.

## Avoid
- Copying the fluted gradient exactly will look like this template; change hue and texture.
- Eleven sections is long; for a small brand cut to six or seven.
- The mock UI must match the client's real product or it becomes decoration.
