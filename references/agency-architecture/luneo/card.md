# Luneo  (agency-architecture)
An interior design studio site that sells calm and warmth. Everything sits on a sand-paper background with clay-toned photography; the hero is a fixed full-bleed room render and the rest of the page scrolls up over it like a sheet of paper, so the brand mood stays present while the content stays very orderly.

## Type
- Display: Archivo 400, 96px (80 / 64), tracking -0.03em, leading 1.0. Hero is uppercase and split over two lines with the second line indented right, forming a step.
- Section titles: Archivo 400, 80px (64 / 40), capitalised, with a tiny superscript index beside each title.
- Closing statement: Archivo 120px uppercase over three staggered lines (left, indented, left again).
- Card titles Archivo 24 to 32px; body Inter Display 16 to 20px / 1.3; labels Inter Display 14px.
- Contrast comes from a grotesk display at a normal weight against a softer humanist body; no bold.

## Colour
- Sand #F2EDE4 page; Light #F7F6F2 for raised surfaces; Dark #171715 for text and solid buttons.
- Dark Weak #7A756B for secondary copy and captions; Border at 10% grey for hairlines.
- No chromatic accent: the photography supplies all the warmth (clay, walnut, amber light).
- Buttons are small dark rectangles with a tiny ring icon; links are underlined text.

## Layout and spacing
- 1200 frame, 32px sides; section rhythm built from a header row (large title left, short paragraph and button right) followed by content.
- Cards and images use a 20px radius; the hero and the video band are full-bleed with no radius.
- Hairline separators split the about block and service rows.
- Project grid is deliberately uneven: two cards, then one pushed right, then three, then two, each with a tiny caption beneath.

## Sections (homepage, in order)
1. Hero (fixed): full-bleed warm interior, small dot label, two-line stepped uppercase headline, paragraph bottom right, nav with links centred and an underlined project link right.
2. About: big title left, long paragraph right, hairline and two small facts (year and discipline) beneath.
3. Featured projects: staggered collage of eight interior cards with captions.
4. Services: four horizontal rows, each with a landscape image left, title and paragraph in the middle, a two-column checklist and a dark button right.
5. Inside the studio: full-bleed video or photo band with a short paragraph and button overlaid at the bottom.
6. Process: three square images with numbered captions underneath.
7. Testimonial: photo left, quote carousel right with avatar, previous and next text arrows.
8. News: three tall image cards with a category chip and date on top and the title over the image bottom.
CTA: three-line staggered uppercase statement with a dark button; footer with large "ready to begin" heading, link columns and a closing room photo strip.

## Motion
- Lenis smooth scroll.
- Hero photo scales from 1.1 to 1 over 2s, ease [0, 0.39, 0.63, 0.99]; hero text and buttons appear on mount.
- 16 appear effects on cards and headers inside the page; four sticky elements (section headings pin while their content scrolls).
- The fixed hero with a transparent spacer creates the page-over-hero reveal; a floating fixed button sits bottom right.

## Phone
One column at 20px sides. Display 64px, section titles 40px, closing statement 48px. Project collage becomes a single column of cards; service rows stack image, text, checklist and button. Nav becomes logo plus menu.

## Signature moments
- The page sliding up over the fixed hero.
- Stepped two-line uppercase headlines in hero and closing CTA.
- Superscript index numbers next to section titles.

## Borrow
- Fixed hero plus transparent spacer for a calm, cinematic opening.
- Uneven project collage with tiny captions for portfolio sections.
- Service rows with image, description, two-column checklist and button.
- Sticky section titles beside scrolling content.

## Avoid
- The whole homepage is wrapped in one container, so it reads as one long sheet; break it with at least one colour band.
- Project collage leaves awkward gaps at some widths.
- Monotone brown photography can feel samey; one contrasting image or texture helps.
