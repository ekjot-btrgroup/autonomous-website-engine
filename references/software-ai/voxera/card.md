# Voxera  (software-ai)
An AI phone-agent product page that sells automation through atmosphere rather than gradients. A single dramatic red canyon image sets a cinematic, almost film-poster mood, and the product UI is shown as small dark chips living inside that same landscape.

## Type
- Switzer 500 for all headings, tight -0.04em tracking: H1 64/72 (48 tablet, 36 phone), H2 48/56, H3 36/44, H4 28, H5 22.
- Body Switzer 400 at 14/16/18px with -0.02em, 22-28px leading.
- IBM Plex Mono 500 14px uppercase +0.04em for section eyebrows, always preceded by a small orange dot.
- Hierarchy is calm: one weight, big size steps, no italics.

## Colour
- Hero and the problem band are near-black or photo-red; the rest alternates white and #f7f7f7.
- Brand orange #fb6704 only on the nav CTA, the closing CTA button, eyebrow dots and small chat tags.
- Grey ramp (Dark-80 to Dark-5) handles body text, dividers and accordion states.
- The red canyon photo acts as a second "colour" inside cards across the page.

## Layout and spacing
- 1400 canvas, 60px side padding, sections 60-100px top and bottom; FAQ uses 100px.
- Section intro: mono eyebrow, two-line H2 left aligned, content below in a 3-column grid with 18px gaps.
- Radii: 18px cards, 16px media, full pills for buttons, 40px on a large banner.
- No shadows or borders; separation comes from fill changes (black, white, pale grey, red imagery).

## Sections (homepage, in order)
1. Hero: full-bleed red canyon image with dark overlay, tiny lone figure as focal point, centred white H1 over two lines, short subcopy, small white pill CTA; "backed by" logo row sits on the image bottom.
2. Problem: black band, three tall rounded cards with the canyon image and dark UI chips mapping a call going wrong, each with title and two-line text beneath.
3. Solution: split, left H2 with black pill CTA and a numbered accordion list (01 to 04, hairline separated, active row expanded with arrow), right a tall rounded lifestyle photo.
4. Chat demo: wide white band with two floating chat bubbles and coloured name tags, background video.
5. Enterprise: pale grey band, bento of three white cards: tall left and right cards with phone-style chat UI on red imagery, middle column split into compliance badges and an integrations card.
6. Results: H2 left, partner logos right, three photo cards with a large stat and caption overlaid bottom left.
7. FAQ: two columns, H2 and CTA left, accordion right with hairlines.
8. Closing CTA: black band, centred H2, subcopy and orange pill; minimal footer with two link columns.

## Motion
- Appear onInView: y 60px fade, spring stiffness 250 damping 55 mass 2.9 (slow heavy settle), 0.1s delay, no replay.
- Text effect on H1 and H2: character by character, y 10px with 10px blur, spring 0.4s bounce 0, 0.05s stagger.
- Smooth scroll, fixed nav, accordion expand transitions.

## Phone
Single column, 20px padding; H1 36px over three lines on the canyon image; card grids stack; results cards full width with stat overlays kept; nav becomes logo plus menu icon.

## Signature moments
- The lone figure in the red canyon hero.
- Product UI chips staged on top of the hero landscape inside each card.
- Mono orange-dot labels against huge tight grotesk headings.

## Borrow
- Reusing one hero photograph as a backdrop for feature cards to keep a strong art direction.
- Illustrating a service as a small flow of UI chips instead of full screenshots.
- Heavy, slow spring appear values for a premium settle.

## Avoid
- The empty white chat-demo band reads unfinished in a static capture.
- Copy in the problem band is mismatched with the product (template leftovers).
- Hero is very tall relative to content; desktop screenshot renders it taller than the canvas.
