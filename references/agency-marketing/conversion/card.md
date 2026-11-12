# Conversion  (agency-marketing)
A paid-ads agency site that sells heat and momentum on a pure black canvas. The page is a centred stack of short sections; the only real colour is a blurred red-orange glow that rises behind the hero and reappears at the closing call to action, with coloured corner gradients on service cards.

## Type
- H1: Satoshi 500, 48px, tracking -0.04em, leading 1.3 (36px on phone), centred, two lines; one word in Instrument Serif italic at the same size.
- H2: Satoshi 500, 36px / 1.3, same italic-serif swap on the last or key word ("you?", "themselves.", "incredible").
- Body L 20px, Body M 18px, Body S 16px, XS 14px, all Satoshi 500 with -0.02em tracking at 56% white.
- Small rounded badge (dark pill, white text) above each heading acts as the kicker.
- The scale is modest; drama comes from the glow and the serif italic, not from size.

## Colour
- Black #000 page, #0D0D0D cards and inputs, white headings, 56% white body.
- Red-orange #FF4533 (500: #FF220E) only for the primary button and the glow core; the glow fades through orange and peach to white at its hottest point.
- Card corners pick up blue or red-orange radial gradients so each card has a lit edge.
- 12% white borders on cards, nav and badges.

## Layout and spacing
- 1200 frame, 64px sides and 64px vertical section padding: tight, consistent rhythm.
- Everything centred: badge, heading, lead, then content.
- 24px radius for cards, 500px radius for pills, buttons and the nav capsule; circular avatars.
- Floating nav: a dark capsule with a 1px border centred at the top, logo mark left, links, red button right; translucent black when scrolled.

## Sections (homepage, in order)
1. Hero: social proof row (stacked avatars, stars, client count), two-line centred headline with an italic serif word, grey lead, red solid and dark outline buttons, then the large blurred glow below with parallax.
2. Logos: "you are in good hands" line over a monochrome logo row.
3. Client stories: carousel of tall dark cards with a video area, logo, quote and name; arrow on the edge.
4. About statement: a large paragraph that sharpens from blurred to crisp as you scroll, with a red button.
5. Results: badge, heading and a ticker of result cards.
6. Services: two cards on top, one wide card below, each with a lit gradient corner and centred title plus copy.
7. Comparison: muted list of weaknesses for "other agencies" beside a raised card with the brand mark and checklist.
8. Process: three columns with small animated icons, step title and copy.
9. Testimonials: 3x2 grid of dark quote cards with avatar, name and role.
10. Team: heading and a ticker of portrait cards. 11. FAQ: stacked dark rows with plus icons.
CTA: heading with italic word over another glow, red button; footer with newsletter field and link columns.

## Motion
- Smooth scroll.
- Hero heading words fade up: opacity 0, y 10px, blur 10px, spring stiffness 400, damping 100, 0.5s delay.
- Hero elements fade in with a 1s delay (spring 400 / 100); glow has parallax speed 120.
- About paragraph switches variant from blurred to sharp on a scroll target; tickers for results and team; Lottie icons in process.

## Phone
Single column at 20px sides; H1 36px, H2 28px. Nav becomes logo plus hamburger in the capsule. Service cards stack, comparison stacks with the brand card first, testimonial grid becomes one column.

## Signature moments
- The rising red-orange glow under the hero.
- Italic serif word dropped into otherwise plain grotesk headlines.
- Cards with one lit gradient corner.

## Borrow
- A single radial glow as the hero's only visual instead of photos.
- "Them versus us" comparison with a muted list against a lit card.
- Floating capsule nav with a bordered pill shape.
- Blur-to-sharp statement paragraph on scroll.

## Avoid
- The results ticker renders empty in the static capture and the about paragraph is blurred until scrolled; never ship sections that depend on motion to be readable.
- Very little content imagery; a brand with real work needs a portfolio section.
- 56% white body text on black is low contrast for long copy.
