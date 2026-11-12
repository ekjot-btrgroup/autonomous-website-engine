# Frontage  (services-home)
A local exterior-cleaning crew site built to convert: every screen carries a way to start a quote. The look is a near-white, tightly tracked grotesk system with dark ink and a single safety-yellow accent that reads like workwear, so a trade business feels organised and premium without losing approachability.

## Type
- One family, Inter Display, does everything. Display h1 64px / 500 / -0.045em / 1.02 (52px tablet, 40px phone); section heading h2 48px / 500 / -0.04em / 1.1.
- Subheading 26px, Title 20px, Title Small 16px, all 500 with negative tracking. Paragraph 15px / 400 / 1.55 in 68% ink; Lead 18px / 1.5.
- Eyebrow 12px uppercase +0.08em in 52% ink sits above every centered heading. Stats 48px / -0.04em / leading 1.
- Hierarchy comes from size and ink opacity (100 / 68 / 52%), never weight jumps.

## Colour
- Base #fafaf8 page, Grey #f2f2ee alternate bands (services, process, testimonial), so sections step in tone instead of using borders.
- Ink #0c1018 for text, primary dark buttons and two full dark cards (reviews, service-area map, final quote).
- Yellow #fff555 only on primary CTAs, tag pills on dark photos, and check icons on the dark plan card.
- Glass whites (12-18%) for nav pill and chips over photos; success/error tokens reserved for forms.

## Layout and spacing
- 1200px frame, 40px gutters, 112px top/bottom section padding, 56px between header and grid.
- Several sections are inset cards: the section has 6-12px padding and the content is a rounded 16px card, giving a framed, app-like rhythm between full-width bands.
- Radius scale: 100px pills (buttons, chips, nav), 16px cards, 12-14px images and inner panels.
- Images mostly 4:3 landscape with 12px radius; very few shadows, 11 hairline borders, backdrop blur on glass pills.

## Sections (homepage, in order)
1. Hero: full photo inside a 6px-inset rounded card; glass pill nav floats on top. Bottom-left: dot-badge, two-line display headline, lead, yellow pill CTA plus glass secondary, inline trust row. Bottom-right: white card with toggle chips to pick a job type and a dark full-width submit.
2. Proof strip: five icon-plus-two-line stats in a row, no boxes, just alignment.
3. Before and after: centered header, 3 drag sliders with labels and captions.
4. Services: grey band, 3x2 photo cards; frosted tag pill top-left, circular arrow button top-right, title, two-line description, hairline, then an icon meta row (time, method, surface).
5. Reviews: full dark rounded card, centered heading, 3x2 review tiles with star rows, quote, avatar line.
6. Process: four numbered steps with small icons in a row, heading left and CTA right.
7. Recent work: one large feature card with slider and stat footer, two stacked smaller cards on the right.
8. Testimonial: big quote heading with stars, rating badge and score at the bottom, tall portrait photo on the right with a caption chip.
9. Pricing: dark photo plan card (yellow tag, big numeral, 2-column checklist, yellow CTA) beside a grey custom-contract card with an account-manager contact strip.
10. Service areas: dark card with aerial photo, postcode input and town chips.
11. FAQ: two columns, heading and contact card left, accordion list right.
12. Quote: dark card, heading and contact left, white form panel right with a segmented residential/commercial toggle.

## Motion
- Appear on mount and in view: fade-up 24px, 0.9s, ease [0.22,1,0.36,1], delay 0.1s, threshold 15%; about two per section (header then grid).
- Hover on list rows and FAQ items: background shift to rgb(235,235,238) over 0.2s ease [0.44,0,0.56,1].
- Smooth Scroll component in the layout; fixed glass nav; custom view cursor on project cards.

## Phone
- Hero card keeps the inset photo; the quote widget drops below the copy. Display shrinks to 40px, headings to 40px.
- Grids collapse to one column; proof strip stacks; dark cards stay full-width with 12px outer inset.
- Nav becomes a pill with menu toggle.

## Signature moments
- The inset hero photo with a floating chip picker that starts the quote right there.
- Workwear yellow as the only colour, echoed by the photography.
- Before/after sliders used both as a section and inside the featured project.

## Borrow
- Inset rounded section cards alternating with full-width tonal bands for rhythm without borders.
- Quote widget in the hero with selectable chips: low-friction lead capture for any service business.
- Service card anatomy: tag pill on image, arrow button, hairline, icon meta row.
- One-family type system run purely on size and ink opacity.

## Avoid
- Four separate dark rounded cards make the long page feel repetitive; keep two at most.
- Two testimonial sections back to back with a process band between reads as padding.
- Centered eyebrow plus heading plus lead on every section becomes formulaic; vary alignment.
