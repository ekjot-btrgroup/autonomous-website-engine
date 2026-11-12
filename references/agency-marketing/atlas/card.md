# Atlas Studio  (agency-marketing)
An SEO, marketing and web agency site that wants to look technical and fast. Everything is black with a single red-orange, and the energy comes from a live liquid shader, oversized tight grotesk type and scroll-staged cards rather than lots of imagery.

## Type
- Golos Text everywhere, using fractional variable weights: H1 100px weight 460, tracking -0.06em, leading 0.87 (70 tablet, 45 phone); H1 Large 108px at -0.07em for the wordmark; H2 70px/1.03 at -0.053em; H3 36, H4 34.
- Body sizes are named by pixel (13, 15, 16, 17, 19, 20, 24, 26) at weight 410 with -0.01 to -0.02em.
- Section eyebrows are small orange caps in square brackets, like "[ LABEL ]". Services list uses huge H2 lines that fade from white to dark grey down the list.

## Colour
- Background #0c0e12 with a slightly lighter #111317 for the ticker band and cards; #050505 behind the main wrapper.
- Primary #ff4112 for the shader glow, primary pill buttons with a separate circular arrow chip, eyebrow labels and one fully orange process card.
- White text; 6-10% white for hairlines and card fills.

## Layout and spacing
- 1300 canvas, 50px side padding with thin vertical lines marking the content edges through the whole page.
- Sharp 0px corners on cards and images; only buttons and avatars are round.
- Section heads: eyebrow and H2 left, a short grey paragraph pushed to the far right column.

## Sections (homepage, in order)
1. Hero: liquid-gradient shader diagonal glow; left a three-line headline at 36px, hairline, orange pill CTA with arrow chip and an avatar-stack rating; right a small project slideshow card with a stat tag and arrows; the 108px studio wordmark sits below it full width.
2. Ticker: dark band of grey client logos.
3. About: oversized grey statement with a text-reveal effect, flip image card and tags.
4. Stats: three columns of large figures with captions and a contact link.
5. Work: big centred H1 "featured" title, then project cards staggered left and right that rise 120px into place on scroll (spring 1s bounce 0.2), each with tags and an arrow.
6. Services: list of discipline names at 70px; active one white with a small image and tag chips, the rest fading to dark grey.
7. Process: three square cards (icon, title, copy) offset diagonally down the page, sticky as you scroll, the middle one solid orange.
8. Team photo band: wide monochrome photo with headline and CTA over it.
9. Pricing: two dark plan cards, price at 24px, feature lists in two columns, the second card with a white button.
10. Team ticker, testimonials slider with rating card, blog grid of three, then a centred CTA band and minimal footer.

## Motion
- Text effects on headings: word by word, y 5px, spring 1s bounce 0, 0.07s stagger, 0.2s delay.
- Appear: fade-up 20px, tween 0.6s ease [0.12,0.23,0.5,1], 0.5s delay in the hero.
- Style transform on project cards: y 120px to 0 when in view (spring 1s bounce 0.2); sticky process cards; liquid-gradient shader; smooth scroll; text reveal and image flip components.

## Phone
Single column at 20px padding; wordmark shrinks to 50px; staggered cards align left and stack; services list stays as big fading words; process cards stack.

## Signature moments
- The red liquid light sweeping across the black hero.
- Full-width studio wordmark as a second headline.
- Diagonal staircase of process cards with one in solid orange.

## Borrow
- Visible column guide lines as a structural motif on dark sites.
- Fading list of service names as a typographic index.
- Fractional variable weights and very tight tracking for a custom-feeling grotesk.

## Avoid
- Long stretches of empty black between staggered cards.
- Grey 15px text on near-black is hard to read.
- Shader-dependent hero needs a static fallback image.
