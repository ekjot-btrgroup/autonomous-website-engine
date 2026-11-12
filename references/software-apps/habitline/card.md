# Habitline  (software-apps)
A consumer app launch page for a habit tracker that feels warm, calm and very polished. It opens like a film still (a person blurred in motion, washed in burnt orange) and then settles onto a pale grey page where phones float in clouds. The tone is optimistic and soft, not techy, with one hot orange used for energy.

## Type
- Display: Stack Sans Headline 500 everywhere, tight 1.0 leading, no tracking tricks. H1 68 (54, 48), H2 48 (42, 38), statement display 90, stat numerals 120 and a 220 option.
- Body: Google Sans Flex 500 (medium, not regular) at 18/1.3; lead 22/1.4; nav 15. The medium body weight gives a friendly, rounded app feel.
- Small pill labels above every H2 (white pill, dark 13-14px text) instead of uppercase eyebrows.
- The big centered statement headline holds small rounded image pills inline with the words, like stickers in a sentence.

## Colour
- Page ground #f7f7f7 with white cards; ink #131515 and a charcoal #494d4d for body.
- Hero is a deep near-black #131515 field lit by a burnt orange photo; the transition to the light page is a white cloud fade.
- Accent: vivid orange #ff4c00 for big numerals and key icons. A family of saturated habit colours (green #12a70a, electric blue, neon purple, pink, amber) appears only as small icon circles, progress chips and the stat suffixes (% in purple, + in blue).
- One feature card goes dark green with a grassy photographic texture to break the grey.

## Layout and spacing
- 1200 canvas, narrow 25-30px gutters, very generous 200px top padding per section, so each section reads as a fresh scene.
- Header: three separate white rounded tiles floating on the hero (logo tile left, link capsule centre, app-store icon tile right), not a single bar.
- Feature area: left-aligned H2 with a short paragraph on the far right, then a 2-column grid of large 20px-radius cards, each holding a working UI fragment (streak calendar, planner timeline, stats rings).
- Buttons: fully rounded pills; primary white on dark, or near-black on light; secondary light grey with platform glyphs.

## Sections (homepage, in order)
1. Hero: floating tile nav; "New" pill; two-line centred H1 in white; short lead; white pill CTA plus ghost play-button CTA; below, a dark phone UI with habit rows, flanked by two dark glass widgets (an achievement badge, a three-ring goal tracker), all fading into white clouds.
2. Statement: centred multi-line headline with inline image pills, a row of hashtag audience chips, then a phone mockup sitting over two looping marquee rows of habit tiles and photos; rating pill, a sentence and two store buttons.
3. Features: label pill, left H2 with right paragraph, then a grid of rich UI cards (streak rules, daily planner on a dark green texture, routine stacks, weekly reflection, gentle reminders).
4. Use cases: tabbed audience switcher (pill tabs) over a large video card with a quote overlay and a row of small labels.
5. Social: H2 with an avatar cluster and a ticker of portrait photo cards with overlaid captions and stats.
6. Counter: label pill, H2, a giant glowing orange numeral with a tilted sticker caption, a video in the middle, then three large stat figures with coloured suffixes.
7. AI suggestions: split with a phone and floating suggestion bubbles on the right, H2 and button on the left, then four small feature cards with coloured round icons.
8. Reviews: H2 with star rating line, a slideshow of portrait photos, and a three-column list of quote cards with avatars.
9. FAQ: H2 and contact prompt on the left, accordion with plus buttons on the right.
10. CTA: sticky scene with a hand holding the phone rising out of clouds; headline and store buttons on the left, QR code card on the right; then a light footer with newsletter field and link columns.

## Motion
- 71 appear effects: fade up 20px with a 0.6s spring, no bounce, 0.1s delay; a steady, soft cadence.
- Hover: buttons and cards shrink to 0.95 on a slightly bouncy spring (0.25), which feels tactile like a phone tap.
- 13 scroll-target style transforms: elements drift 50px down then up as targets pass; the CTA section is sticky with 10 of these, so the phone and clouds part as you scroll.
- 9 tickers (habit tiles, photos, reviews) at a slow velocity, draggable, slowing on hover; one decorative loop rotating 20 degrees.
- Smooth scroll and a click-effect component in the template.

## Phone
- Hero keeps the centred stack with H1 at 48; the side widgets drop and the phone sits under the buttons. Nav tiles collapse to logo and menu.
- Feature cards stack to one column at full width; stats stack; marquees keep running. A fixed "get the app" pill remains bottom right.

## Signature moments
- The motion-blurred orange portrait hero with a phone surfacing from clouds.
- Inline image pills inside a big statement sentence.
- Giant glowing orange numeral with a tilted sticker caption.
- Cloud photography as the connective tissue between sections.

## Borrow
- Floating tile-style navigation for consumer products.
- Warm cinematic photography against crisp UI renders to make an app feel human.
- Medium-weight rounded body type for friendliness.
- Tap-like hover shrink on all interactive cards.

## Avoid
- The page is long with many phone mockups; pick two or three strongest UI moments.
- Big stat counters, star ratings, review counts and user numbers must come from the brief; never fill them with placeholders that look real.
- The rainbow of habit colours can turn noisy; keep them small and functional.
- Video and clouds are heavy assets; plan loading and a still fallback.
