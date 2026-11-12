# Datum  (agency-architecture)
An architecture and interiors studio site that behaves like a monograph. Everything is one light-weight grotesk set very large, laid on bone and stone paper with deep umber bands, and the homepage tells the design process through scroll-driven drawings: light moving across a room, a plan being drawn line by line, a sketch turning into a built photo.

## Type
- Switzer only. Display 152px, weight 300, tracking -0.055em, leading 0.9 (136 tablet, 62 phone). The hero headline is split over two lines with the second line indented left of the first, so it reads as staggered.
- H2 72px / 300 / -0.045em / 0.98; Statement 40px / 400 / 1.12 for intro paragraphs that read as headlines.
- Index Name 72px / 300 in bone on umber for project rows; Numeral 120px / 300 for stats; Wordmark 330px / 300 in the footer.
- Body L 19px / 1.45, Body 16px, Label 13px sentence case (no uppercase, no tracking): labels feel like captions, not kickers.
- Hierarchy is weight-inverted: the bigger the text, the lighter it gets; small UI sits at 400 to 500.

## Colour
- Bone #EEEAE3 page, Stone #DED7CC alternate bands, Umber #2B1F18 for the dark project and process bands, Ink #1C1714 text.
- Taupe #665B52 for secondary text, Hairline #CEC5B8 rules on light, Umber Line #4B3B31 rules on dark.
- Signal vermilion #B83D1C appears only inside drawings: dimension lines, plan annotations and numbered note dots. Never on buttons.
- Buttons are flat rectangles: white on images and dark bands, outlined ink on light.

## Layout and spacing
- 1200 frame, 40px sides, 140px vertical section padding, 12-column grid.
- No radius anywhere except two pills; no shadows; no borders other than 1px hairlines.
- Section header habit: small sentence-case label top left, sometimes a centred caption and a right-aligned underlined link on the same hairline row.
- Images are square-cornered, often 4:3 or 1:1, and overlap text or cards on purpose.

## Sections (homepage, in order)
1. Opening: full-bleed render with a soft scrim; giant two-line headline in white, short intro top left, white rectangular button right, caption row at the bottom ("scroll" left, featured project credit right). Image scales from 1.14 to 1 on load and has parallax.
2. Light study (2400px sticky scroll): pinned left text, a room render whose light shifts with scroll.
3. Studio intro: Statement paragraph, louvred image component (slatted reveal), and three huge light numerals as stats.
4. Selected work (umber): label row on a hairline, featured project with intro left, large photo right, oversized project name crossing over the photo edge, and a bone spec card overlapping the photo bottom right. Then five index rows: number, 72px name, location, year, typology, area.
5. Plan study (2400px sticky): left headline, right a technical floor plan that builds in 5 steps with a tab row of step names and vermilion numbered notes.
6. Drawing to built: two light names and a before/after slider from line drawing to photo.
7. Disciplines (stone): H2 left, four disciplines as staggered image tiles of different heights.
8. Process (umber): sticky visual left changing variant per scroll target, five numbered stages right.
9. Materials: draggable ticker of eight swatch tiles (travertine, oak, linen, plaster) with captions.
10. Recognition (stone): portrait with a long quote, then award rows on hairlines.
Footer: umber, contact columns and a 330px wordmark with a house-like mark.

## Motion
- Lenis smooth scroll in the layout.
- Text effect on headings: word-by-word, opacity 0, y 10px, blur 8px, tween 0.9s, ease [0.16, 1, 0.3, 1], 30% in view.
- Hero image: scale 1.14 to 1 over 1.8s, same ease; parallax speed 80.
- Three sticky scroll tracks of 2400px each drive custom components (light study, plan study) and a scroll-target variant swap in the process band.
- Materials ticker velocity 28, slows to 25% on hover, draggable.

## Phone
Single column at 20 to 24px sides. Display drops to 62px and H2 to 40px, index names to 38px with their meta stacked beneath. Sticky studies become stacked image plus text. Nav becomes logo plus menu with a full-screen 40px link list.

## Signature moments
- The plan that draws itself, with vermilion dimension lines and note dots.
- Project names at 72px in a ruled index, like a book's table of contents.
- Spec card overlapping the featured photo.
- Weight 300 at enormous sizes everywhere, ending in the 330px footer wordmark.

## Borrow
- Ruled index rows (number, big name, four small facts) for any portfolio or listing.
- Overlapping fact card on a hero image for a featured item.
- Sentence-case caption labels instead of tracked uppercase kickers.
- One accent reserved for diagrams and annotations only.
- Image scale-down on load (1.14 to 1, 1.8s) for calm, expensive entrances.

## Avoid
- Three 2400px pinned sections make the page very long; one is enough for most briefs and needs a static fallback.
- Custom code components (light study, plan study, slider) cannot be reused as-is; rebuild the idea simply.
- Light 300 weight on busy photography can lose contrast; keep the scrim.
