# Brog  (agency-design)
A creative studio homepage that lets type and fashion photography do everything. The UI is black, white and grey; colour only arrives through the portraits, so each image reads like a magazine cover against a neutral page.

## Type
- One family, Inter Display. Hero wordmark 190px at -8px tracking, line height below 1 (120px on phone); section heads 106px at -0.04em ("Latest Works" style two-line stacks); a 70px secondary H2; 28px card titles.
- Body 500 weight at 16 to 20px with slight negative tracking; captions 14px.
- Section labels are tiny bracketed indexes with a slashed zero, "(01) Label", sitting above each head.
- Hero discipline list in 40px uppercase, stacked tight like a menu.

## Colour
- White #ffffff page, near-black #0a0b12 for the hero, services band and footer; ink #0a0a0a; greys #2b2b2b and #e0e0e0 for copy and hairlines.
- A red-orange #ff3700 exists in the token set but is barely used; the visible palette is monochrome, and photos provide all colour.
- Hero bottom fades from black to grey into the white section below.

## Layout and spacing
- 64px side padding, 120px top and bottom on every section, generous white space between head and content.
- Square image corners throughout; only pill tags, the small outline "view all" button and form button are rounded.
- Heads sit left; supporting copy floats right at roughly the halfway line, aligned to the head's baseline.
- Hairline dividers under section heads and between list rows.

## Sections (homepage, in order)
1. Hero (dark): slim top bar with logo, three contact columns and a hamburger; giant wordmark top left overlapping a centred square portrait; a second big word at right; stacked uppercase disciplines bottom left; one-line value statement bottom right.
2. Commitment: tall portrait image left (looping image card), bracket label and four-line H2 right, short paragraph, three counter stats in a row.
3. Thin logo strip.
4. Works: two-line H2 left, intro and outline pill right, then a 2x2 grid of tall fashion images with name and year under each.
5. Why us: H2 left with a small video tile right, then four columns of icon, two-line title and paragraph.
6. Services (dark): huge single-word H2, then four numbered rows with title and copy left and wrapped white pill tags right.
7. FAQ: three-line H2 stack left, plain accordion rows with plus icons right.
8. Footer (dark): social links row, contact form with underline inputs, link columns, small credits.

## Motion
- Hero content rises from 160px below with a spring (stiffness 200, damping 40) after a 2.5s intro delay; hero text reveals line by line from 30px.
- Two scroll-linked style transforms slide hero elements sideways (to -800px) as you scroll out.
- 13 appear effects in total; custom circle and image cursors are in the component set; page transitions on two pages.

## Phone
Wordmark drops to about 120px and the portrait sits behind it; disciplines stack under it; work grid becomes one column of tall images; services rows stack number, title, copy and tags; FAQ head stacks above the list.

## Signature moments
- Wordmark plus portrait collision in the hero.
- Colourful editorial photos as the only colour on the page.
- Dark services index with pill-tag clusters.

## Borrow
- Monochrome UI so client photography carries the brand colour.
- Bracketed index labels for a calm editorial rhythm.
- Services as a numbered list with tag clusters instead of cards.
- Hero word split across two corners to frame a central image.

## Avoid
- Placeholder zero counters and an empty grey video tile in the static capture.
- Repeated tag sets across services; each row needs its own.
- A thin logo strip with nothing in it; drop it unless the client has real logos.
