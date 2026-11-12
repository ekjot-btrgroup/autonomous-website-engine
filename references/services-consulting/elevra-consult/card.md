# Elevra Consult  (services-consulting)
A strategy consultancy site that sells calm and clarity. Everything sits on a pale cool grey with white cards, and one cinematic idea ties it together: grainy cobalt-sky photography with hands and horizons, which makes abstract advice feel open and aspirational.

## Type
- Display: Plus Jakarta Sans 400, h1 64px / -0.05em / 1.1 (48px tablet, 40px phone); h2 52px / -0.04em, capitalised (40px, 32px).
- Every section title is two lines: first line in ink #212d3d, second line in grey #8b939e, same size, so hierarchy comes from tone not weight.
- Card titles h3 48px and h4 36px at 500; h5 24px and h6 20px for smaller cards.
- Body: Inter Display 400, Body Lg 20px / 1.3 grey, Body Sm 16px / 1.4, labels 14px and 12px. Buttons 500, capitalised.
- Section labels are a tiny icon plus 14px text centered above the heading.

## Colour
- Page bg #f2f4f6, cards pure white, separation by fill only (no shadows).
- Ink navy #212d3d for text and all solid pill buttons; grey #8b939e for second headline lines and captions.
- White at 60-64% for text and glass panels on photos.
- The cobalt photography is effectively the accent colour; the UI itself stays monochrome.

## Layout and spacing
- 1200px frame with about 32px outer padding, cards span nearly edge to edge.
- Radius scale: 20px outer cards, 16px inner panels, 10px small tiles, full pills for buttons and tag chips.
- Section headers centered; content blocks are wide white cards with a photo pane on the left and copy on the right.
- Hairline outline chips (1px border) for service tags.

## Sections (homepage, in order)
1. Hero: headline left (second line grey), short lead and two pill buttons right; below, a three-card row: portrait photo, white stat card with large counter, sky photo with a frosted text card.
2. Who we are: heading and button left, 2x2 grid of stat tiles (two plain white, one with a sky image), then a single-line logo strip.
3. Services: three stacked rows that stick and scale as you scroll; each row has a tall photo with a glass testimonial chip and a big title, short copy, outlined tag chips and a full-width navy button.
4. Why us: big percentage stat left, simple bar comparison UI right inside a white card.
5. Process: one wide photo panel with title and copy, three narrow numbered columns that expand in turn.
6. Industries: draggable ticker of tall photo cards with small label chips.
7. Case study: tabbed case card with story copy left, photo and two result tiles right.
8. Testimonials: masonry of white quote cards plus one dark rating card.
9. FAQ: centered accordion in a white card, dark-blue help banner at the end.
10. Insights: three tall photo article cards with titles over the image.
11. CTA and footer: centered two-tone heading with pill button, then a footer with link columns, newsletter field and a huge wordmark.

## Motion
- Appear: spring, 1s, bounce 0, delay 0.3s, y 40px, at 50% in view.
- Service rows: sticky stack with style transform on view, scale 1.05 to 1, spring stiffness 180 / damping 60.
- Industry ticker: velocity 60, slows to 40% on hover, draggable.
- Fixed gradual blur at the viewport bottom and fixed floating nav and button.

## Phone
- Hero stacks: headline, lead, buttons, then the three hero cards in a column.
- Service rows become photo on top, content below; chips wrap.
- Headings scale down to 40px h1 and 32px h2 while keeping the two-tone split.

## Signature moments
- The ink plus grey two-line headline repeated on every section.
- One consistent cobalt sky palette across all photos.
- Sticky scaling service stack with glass review chips on each photo.

## Borrow
- Two-tone headline split for calm hierarchy without bold weights.
- Choosing one photographic world and grading everything to it, so the UI can stay neutral.
- Service row anatomy: photo with embedded testimonial chip, numbered tag, big title, outlined capability chips, full-width button.
- Expanding process panel: one active wide step, the others as slim numbered columns.

## Avoid
- Every section uses the same centered label plus two-tone heading plus one line of copy; vary at least a few.
- Long page with many similar white cards; the case study and testimonial sections blur together.
- Stat counters as filler when no real numbers exist.
