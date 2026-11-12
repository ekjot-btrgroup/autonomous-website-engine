# Forma Studio  (agency-architecture)
An interior and architecture studio site that feels calm and expensive through restraint: one grotesk, grey and charcoal surfaces, square corners and warm, low-lit interior imagery. Contrast comes from switching between a pale gallery floor and a near-black studio wall.

## Type
- Mona Sans throughout. Display 76px at -0.04em, line height 1 (the hero wordmark is far larger, set to the full width); H1 60px, H2 48px, H3 32px, H4 24px, all weight 500.
- Statement paragraphs at 24px/1.3 weight 400 in ink; body 20px; small grey paragraphs and 14px labels.
- Section labels: a small black dot plus a grey word ("About Us" style kicker).
- Stats use a monospaced numeral face at about 72px, which reads like a drawing annotation.
- Index numbers on cards written as "/01".

## Colour
- Light sections #f2f2f2; dark sections #0f0f0f with cards at about #141414 and 1px #2a2a2a borders.
- Ink #0f0f0f on light, #f2f2f2 on dark; muted greys #737373 and #b5b5b5.
- No brand accent colour at all; the warm photography is the only colour.

## Layout and spacing
- 80px side padding, 120px top and bottom; generous empty space, especially in the dark services band.
- About: image left, large statement right, three stats spaced across the full width below.
- Underlined text links with a small arrow instead of filled buttons.
- No rounded corners anywhere.

## Sections (homepage, in order)
1. Hero: full-bleed dark interior photo, small intro and text link at left mid-height, the studio wordmark spanning the bottom edge; minimal top nav with centred links and contact details at right. The hero is sticky, so the next section slides over it.
2. About: kicker, image, big statement, text link, three monospaced counters.
3. Selected works: head left with tiny note right, then a staggered gallery (wide plus narrow, narrow plus wide, one centred), captions name and year, a small "see all" link.
4. Services (dark): pinned head and short intro on the left; four tall cards on the right, each with index, title, two-line copy, a bottom line of deliverables and a photo panel; cards stick as you scroll.
5. Process (dark): head, intro and text link, then a 4x2 bordered grid alternating step cells and line-drawn plan or isometric cells.
6. Testimonial (light): avatar, name, large quote at left, rating block and arrow buttons at right.
7. FAQ (light, from the template): head and intro left, plus-icon accordion right.
8. CTA: full-bleed dark architecture photo with a centred two-line head, small line and link.
9. Footer (dark): newsletter line, link columns, contact, then the wordmark set huge across the bottom.

## Motion
- Appear: fade from 80px with a soft ease-out tween (0.23, 0.83, 0.56, 1) over 1s; word by word text reveal from 20px.
- Six sticky elements: the hero, the service head and the stacked service cards.
- Smooth scroll; counters animate on view.

## Phone
Hero keeps the photo with the wordmark shrunk to width; about stacks image, statement and stats; gallery becomes a single column; service cards stack with the photo above the text; process grid becomes one column alternating text and drawings.

## Signature moments
- Wordmark as a full-width band at both ends of the page.
- Staggered gallery rhythm instead of a uniform grid.
- Floor-plan line drawings inside the process grid.

## Borrow
- Monochrome UI plus warm imagery for premium interiors, architecture or furniture.
- Monospaced numerals for stats to hint at technical drawings.
- Sticky hero that the content slides over.
- Line-art diagrams as section illustrations instead of icons.

## Avoid
- Placeholder zero counters in the static capture.
- Long dark services band with lots of empty space between sticky cards on phone.
- Low contrast grey body text on near-black; keep it at least #b5b5b5.
