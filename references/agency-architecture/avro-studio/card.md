# Avro Studio  (agency-architecture)
A dark, gallery-like site for an interior design studio. The idea is to let dim, warm room photography carry the mood while the interface stays almost invisible: black ground, grey Inter type, hairlines and square images, with a few scroll tricks (colour flip, stacking cards, before/after) doing the storytelling.

## Type
- Hero wordmark: Inter 500, 100px, uppercase, leading 1.0 (70 tablet, 50 phone), light grey on a darkened photo, centred low in the frame.
- Section titles: Inter Display 400, 44px, tracking -0.02em, leading 1.3 (32 on smaller screens). Always preceded by a 14px grey label ("Services", "Process").
- About statement: Inter 32px / 1.4 that fills from grey to black word by word as you scroll.
- Body 16px / 1.4 at 40 to 60% white; captions 12px.
- Hierarchy is quiet: only the hero is large, everything else sits between 14 and 44px.

## Colour
- Black #000 is the base for almost every band; white #FFF only for the about band and the project collage after the colour flip.
- Text is #CFCFCF on black, black on white; secondary text at 40% white.
- White 10% hairlines separate service rows; 2 to 5% white fills for subtle card surfaces in the process stack.
- No accent colour: buttons are outlined 1px rectangles with grey text.

## Layout and spacing
- Full 1440 width with 30px side padding; content runs edge to edge rather than in a centred column.
- Section padding 100px (150px for about and testimonials), 80 to 100px gaps between header and content.
- Zero radius everywhere; no shadows; dividers are 1px at 10% white.
- Project collage: five images of varied sizes, alternating left and right with large empty space, caption row (name left, year right) under each.

## Sections (homepage, in order)
1. Hero: full-bleed dim interior photo with dark overlay, centred uppercase wordmark, one-line subtitle, small outlined button; nav is fixed and transparent (logo left, links centred, contact right). Photo scales from 1.1 to 1 on load and the hero shrinks as you scroll away.
2. About (white): small square photo left, large statement paragraph right with scroll-filled text, three big numeric stats underneath.
3. Projects: header with label and title, outlined "view all" button right, then the staggered collage; the band turns from black to white on scroll.
4. Services (black): accordion rows separated by hairlines; the open row shows a description left and a small landscape photo right, plus and cross icons on the far right.
5. Compare: centred title, full-width before/after slider from line drawing to finished render.
6. Process: centred title, four tall dark cards with large grey numerals top right and step text bottom left; cards pin and stack, each scaling to 0.9 as the next covers it.
7. Testimonial: title left, short paragraph right, slideshow with avatar, quote and a large interior photo, round arrow buttons.
8. Blog: three cards, image over title.
CTA: centred title over a faded photo with an outlined button. Footer: link columns and a giant wordmark across the bottom.

## Motion
- Characters fade in: opacity 0, y 20px, blur 5px, spring 0.8s no bounce, on mount and in view (10 text effects).
- Hero image scale 1.1 to 1, tween 1.2s, ease [0.27, 0.63, 0.45, 1.06] (a slight overshoot).
- Scroll-target style transforms shrink sections to 0.9 as the next arrives; four sticky process cards.
- Scroll-variant background colour change for the project band; scroll-coloured text in about; progressive blur fixed at the viewport bottom.

## Phone
Single column at 20px sides. Wordmark drops to 50px; collage becomes full-width images in sequence; service accordion keeps the hairline rows and shows the image under the text; process cards stack normally. Nav collapses to logo plus menu.

## Signature moments
- The dim, warm hero photo with a pale uppercase wordmark.
- Black to white flip as the portfolio scrolls in.
- Stacking process cards with oversized numerals.

## Borrow
- Staggered asymmetric project collage with caption rows.
- Accordion services where the open state reveals a small photo on the right.
- Scroll-driven colour flip between two bands to mark a chapter change.
- Before/after slider from drawing to finished room.

## Avoid
- The process cards are mostly empty grey slabs; give them imagery or content if reused.
- Stats show placeholder zeros; never ship counters without real numbers.
- Grey-on-black body text at 40% opacity is close to unreadable; lift to at least 60%.
- Very little brand colour or type personality; needs a stronger typographic or colour idea to feel bespoke.
