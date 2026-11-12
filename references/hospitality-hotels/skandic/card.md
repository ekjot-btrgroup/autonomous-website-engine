# Skandic  (hospitality-hotels)
A single-property holiday rental site for a design cabin, villa or small lodge where the house itself is the product. It feels like an architecture monograph: pale grey paper, one light neo-grotesk, very few words per screen and dark moody photography, so every image and number lands with weight.

## Type
- One family: Switzer. H1 92px / 0.96 / -0.02em at weight 300 (74, 59); H2 64px; H3 40px; H4 32px; H5 20px at 400 for card titles.
- Two-tone headline: the first clause in ink, the second clause on a new line in mid grey #808080 at the same size.
- Body 13 to 17px with tight 1.2 leading, grey #808080; labels 11px uppercase with +0.02em in faint grey; prices 19px at 500.
- Chapter labels: tiny numerals plus dash plus uppercase word (01 dash INTRODUCTION) above every heading.

## Colour
- Paper #ededed as the page; pure white for cards and for a few full white sections (area, booking, rates).
- Ink #1f2120 for headings, grey #808080 for body and second lines, rules #e3e3e3.
- Deep spruce greens (#1e2d25, #141d18) appear only in the footer and dark scrims over photos.
- No bright accent at all; the white pill button on the hero is the only call to action that pops.

## Layout and spacing
- 1200px canvas, 40px side padding, 12-column grid; headings left, a narrow paragraph pushed to the far right column.
- Very generous vertical space between chapters (often 120 to 160px of empty grey).
- Cards: white, 8px radius, faint soft shadows (16 shadowed surfaces), generous inner padding.
- White sections slide up over the grey with a large top radius, giving a layered sheet feel.

## Sections (homepage, in order)
1. Hero: full-bleed cabin photo slider driven by scroll; small wordmark with location tag left, centred nav, white Enquire pill right; two-line H1 bottom left with a short line beneath; three numbered slide labels with progress bars along the bottom; faint vertical grid lines over the image.
2. Introduction: chapter label, two-tone H2, small paragraph far right, then four white stat cards (sleeps, size, year, nightly price) with huge light numerals.
3. Gallery: chapter label and heading, then a scroll-driven fan of photos that spreads apart as you scroll.
4. Rooms: 12-column masonry of interior photos in mixed sizes, no captions.
5. Guests: review cards in a grid with portraits, star rows and one large rating figure.
6. Amenities: heading, then a cloned carousel of product-style photos with arrows.
7. Benefits: a 4-column grid of twelve small feature blocks, each with an icon, label, title and two lines.
8. Area: four nearby places as photo cards with distance labels and hover fade.
9. Booking: three numbered steps in columns with a button.
10. Rates: a clean table of seasons, periods, minimum stays and nightly prices separated by hairlines.
11. FAQ: custom accordion of questions on paper.
12. Journal: three article cards.
13. Footer: dark spruce, sticky reveal, with a giant cropped wordmark.

## Motion
- 58 appear effects: soft fade-up of 16px using a short spring (0.6s, bounce 0.1), at 20% in view.
- Headings reveal line by line: y 10px, spring 0.6s, 0.08s stagger.
- Hover on area cards dims to 84% opacity over 0.4s with ease [0.22,1,0.36,1].
- Scroll-driven hero slides, a fanning gallery, sticky stat block and a sticky footer reveal; Lenis smooth scroll and a greeting preloader.

## Phone
Hero H1 drops to 59px; slide labels shrink to dots. Stat cards stack two by two; masonry becomes a single column; the rates table turns into stacked season blocks. Note: the captured phone screenshot rendered mostly blank because several sections rely on scroll-driven code components.

## Signature moments
- Grey second line in every headline.
- Numbered hero slides with progress bars.
- Big light numerals on white stat cards.
- Seasonal rates as a hairline table.

## Borrow
- Two-tone headlines to add hierarchy without a second font or colour.
- Fact cards with oversized light numerals for any property or product spec.
- A precise rates or pricing table instead of pricing cards for hospitality.
- Very sparse copy and wide margins to let architecture photography lead.
- Chapter labels to structure a long single-property page.

## Avoid
- Grey 13px body with 1.2 leading is hard to read; open it up.
- Heavy reliance on code components (scroll slides, fan gallery, cloned carousel) leaves empty areas in static renders and on phones.
- Long stretches of empty grey between chapters can feel unfinished on small content sets.
- No accent colour; add one for clear booking actions in a client build.
