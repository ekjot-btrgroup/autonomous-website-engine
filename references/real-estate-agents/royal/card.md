# Royal  (real-estate-agents)
A personal-brand site for a high-end realtor who wants the homes to do the talking. Everything is black, the photography is shot at dusk so lit windows glow, and the type is a quiet uppercase grotesk, so the page feels like a slow film reel of properties rather than a listings portal.

## Type
- One family (Switzer) at weight 500 throughout; hierarchy comes from size and case, never weight.
- H1 50px uppercase, tracking -0.01em, leading 1.1 (40px tablet, 32px phone). Large H2 45px uppercase for the closing CTA; section H2 30px uppercase.
- Body/subheading 16px weight 400, leading 1.5, in #ccc; small badge/eyebrow 14px in white sentence case sits right above each heading.
- Card titles 20px, numbers 28px uppercase. Tight negative tracking (-0.01 to -0.04em) on all display sizes keeps it compact.

## Colour
- Pure black page and sections; #1c1c1c for cards, #222 hairlines, white for headings, #ccc for paragraphs.
- The only "accent" is white: buttons are solid white rectangles with black text. No hue anywhere except what the photos bring (amber window light, green foliage).

## Layout and spacing
- 1200px desktop, 40px side padding, 75px top/bottom per section, 45px between section heading and content, 100px between the two halves of the about block.
- Square corners on everything (no radii, no shadows, no borders recorded): a hard, architectural edge.
- Hero and property panels are full-bleed 800px tall; text sits on a dark gradient scrim.
- About: text column left, tall portrait right (~4:5), then a second paragraph offset under the portrait creating a staggered two-row composition.

## Sections (homepage, in order)
1. Hero: full-bleed night photo of a modern house, fixed transparent nav (logo left, uppercase links and white button right). Eyebrow, two-line uppercase headline and a small white button bottom-left; three tiny thumbnails bottom-right as slideshow index; a scroll indicator pill bottom-centre.
2. Featured listings: four 800px full-bleed property panels, each sticky so the next slides up over it; centred uppercase name, one-line address and two small buttons (solid and outline).
3. About/founder: eyebrow, name-as-headline, paragraph, white button left; portrait right; a looping blurred video strip bleeds in above.
4. Communities: header plus a horizontal ticker of community cards.
5. Testimonials: slideshow with an interior photo left and a quote with five stars right, square arrow controls bottom-right.
6. Press/blog: header with a "view all" button aligned right, 3-column cards with tall image, tiny category label and 2-line title.
7. CTA: centred eyebrow and huge two-line uppercase line over a dark video, single white button.
8. Footer: logo, newsletter input with attached button, four link columns in small caps.

## Motion
- Appear on section content: fade-up 40px, opacity 0, spring 2s with no bounce, in view at 50%, no replay. Slow and soft, never snappy.
- Sticky stacking on the listings column (2 sticky containers), a ticker for communities, a testimonial slideshow, background videos in about and CTA, and smooth-scroll site-wide.

## Phone
Same order in one column. Property panels shrink to about 600px tall with centred text; headline drops to 32px; nav collapses to a hamburger component; blog cards stack.

## Signature moments
- The sticky stack of full-bleed dusk homes: each house replaces the last like turning pages of a portfolio.
- Uppercase headline anchored bottom-left of the hero, balanced by a tiny thumbnail index bottom-right.
- Absolute restraint: black, white, one weight, square buttons.

## Borrow
- Sticky full-viewport stacking for a small set of flagship items (properties, rooms, projects).
- One-family, one-weight type system with case as the hierarchy device.
- Small flat white rectangular buttons on dark photography for a premium, non-salesy CTA.
- Slow 2s spring fade-ups for luxury pacing.

## Avoid
- The communities ticker renders as an empty black band in static captures; give it real content or a fallback.
- Everything black can feel heavy over 8000px; break it with one lighter or image-led band.
- Testimonial area is sparse; one quote per slide with lots of empty space reads unfinished.
