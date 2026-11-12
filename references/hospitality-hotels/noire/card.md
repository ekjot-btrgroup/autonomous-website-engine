# NOIRE  (hospitality-hotels)
A grand-hotel and retreat site for heritage lakeside or resort properties that want to feel like a printed monograph at night. Near-black ink pages, a hairline light serif and very long, silent scroll chapters make it cinematic; bone-coloured interludes and one champagne accent keep it from going cold.

## Type
- Display: Boska 300. Page title 68px / 1.02 (50, 36); Display L 64px; H2 36px and 46px; H3 24px; card titles 22px uppercase with +0.06em.
- Wordmarks: 220px (hero) and 360px (footer) at 0.8 leading, the brand name as image.
- Numerals 104px light serif for facts; quotes 34 to 48px italic serif.
- Italic word inside a roman headline for emphasis, for example one adjective in the H1.
- Body: Satoshi 400, 17px / 1.62 and 21px / 1.55 for leads; labels and eyebrows Satoshi 500, 12 to 13px, uppercase, +0.12 to +0.22em.
- Prices in serif 26px with a small Satoshi unit.

## Colour
- Ink #0d0c0a as the page; charcoal #16140f for subtle layering.
- Text on dark #f2ede4, muted #a39c8f; on light #1a1813 and #6b655a.
- Bone #eee8dd panels for offers and journal, giving two daylight breaks in a night page.
- Champagne #b9966a only on the short rules before eyebrows and tiny details.
- Hairlines at 12% cream on dark and 12% ink on light; zero radius, no shadows, no blur.

## Layout and spacing
- 1200px canvas, 80px side padding, 160px vertical section padding: very generous.
- Asymmetric editorial grid: a narrow left column holds the numbered eyebrow, the right two thirds hold heading and copy.
- Square-edged photography in large blocks, often one big image beside a short text column.
- Sticky "stage plus runway" structures: a pinned stage while a tall invisible runway scrolls past to swap content.

## Sections (homepage, in order)
1. Hero: full-bleed dusk video; giant hairline wordmark sits behind the mountain silhouette (cut-out layering); bottom left an eyebrow with rule, one-line serif H1 with an italic word and a lead; bottom right coordinates and founding year in small caps; a ruled booking strip with four fields and a bone action block.
2. Intro: chapter eyebrow, Display paragraph with a portrait photo, then three fact cards with huge serif numerals and small uppercase captions.
3. Rooms: pinned stage that steps through room cards as you scroll, with section buttons.
4. The lake: wide landscape band, then a line-drawn lake map beside a table of destinations with distances by car and boat.
5. Experiences: pinned selector; a list of experience names on one side swaps the large image and caption on the other.
6. Offers (bone): chapter header with short intro right; one feature offer with square photo and terms, then two more offers as image cards.
7. Testimonials: dark band with a large italic quote and guest line, stage-style swap.
8. Journal (bone): two article cards with tall images.
9. Gallery: eyebrow and H2, then a horizontal film strip of a day in times (morning to night).
10. Footer: dusk image with the 360px wordmark, newsletter, link columns and fine print.

## Motion
- House curve cubic-bezier(0.22, 1, 0.36, 1) everywhere, never springs.
- Blocks fade up 16px over 0.42s on enter at 15% in view.
- Headlines reveal line by line: y 24px to 0, 0.42s, 0.06s stagger.
- Hero video parallax at speed 88; scroll-target transforms move hero content down 220px as the next section arrives.
- Two sticky stage sections (rooms, experiences) driven by long scroll runways.
- Custom cursor, smooth scroll and a page curtain transition between pages; reduced motion respected.

## Phone
Wordmark drops to 100px and still sits behind the horizon. Booking strip stacks into ruled rows. Fact numerals 68px stacked. Pinned stages become vertical stacks; lake map sits above the distance table. Footer wordmark scales to 86px.

## Signature moments
- Wordmark behind the mountains.
- Numbered chapters with champagne rules.
- Lake map with distance table.
- Night-to-bone-to-night colour rhythm.

## Borrow
- Layering a giant wordmark behind a cut-out of the hero photo for depth.
- Numbered chapter eyebrows to make a long page feel like a book.
- A location section built from an illustrated map and a precise distance list.
- Light serif at 300 with one italic word for quiet luxury headlines.
- Alternating dark and bone sections to pace a long page.

## Avoid
- Sticky runways leave very tall empty stretches in static renders and on slow devices; keep them short.
- Page is very long (over 16000px); trim chapters for smaller properties.
- 12px tracked labels in muted grey on ink are near the contrast limit.
- Square, shadowless imagery can feel severe for family or casual brands.
