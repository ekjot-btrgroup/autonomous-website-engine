# 02 After Hours (Fade & Co)

Concept: the shop at night. Near-black (#0d0d0d), warm copper (#d9824a) only on actions, prices and the active state,
Instrument Serif display with Manrope body. Every headline is one sentence whose second half fades to grey,
a quiet pun on the name. Every photo carries the same grade (`--grade`: sepia .35, saturate .55, contrast 1.08,
brightness .92, soft copper wash, inset vignette) so mixed stock reads as one shoot.

## Section plan (fix round 1)
1. Nav: serif wordmark ("& Co" greyed), 14px links (#d8d3ca), copper "Book a chair" pill; phone menu button with aria-expanded.
2. Hero: eyebrow (address), H1 "The quietest part of your week. / Cuts, beards and hot-towel shaves.", lede, CTAs,
   tall 4:5 chair photo with live open-now tag, three ruled fact cells. Hero has no bottom padding so the gap to "The shop" is one section (128px).
3. The shop (5/7 split): two-tone statement, short paragraph, wide tools photo.
4. Services, rebuilt (no longer the reference's three-column index/image/text row):
   desktop 5/7 grid; left column sticky at 96px holds the three service names at h2 size with copper tabular prices,
   only the active one opens its description and "includes" list, others sit in dim grey; right column is a stack of
   tall 4:5 photos (24px gaps) with a numbered tag. Phone: sticky pill bar under the nav (44px pills) lights up the same way,
   each service shows photo then name, price, text and list.
5. Gallery: wide shop shot + tall, then three equal tiles (no quote placeholder tile).
6. Team (new, brief asks for it): "The hands on King Street. / Say hello before you sit down." Three 4:5 placeholder portraits,
   "[Barber name]" and "[Speciality]" with a hairline top rule, plus a supply note.
7. Night band: full-bleed night photo, scrim, hours and walk-ins statement.
8. Prices (5/7): left h2 "Four lines. / Easy to remember.", notes and CTA; right ruled price list with dotted leaders.
9. Booking: form (7 cols) left, hours / walk-ins / address summary (5 cols) right.
10. FAQ (own section, 5/7): "Fair enough. / A few answers.", accordion max 720px.
11. Footer: giant two-tone wordmark, address with directions, hours, contact placeholders, legal line.
Section rhythm: one top padding per section (128 desktop, 96 tablet, 80 phone); team and FAQ also pad the bottom before the full-bleed band and footer.

## Signature moments
- Headlines whose second half fades from ivory to grey as they enter the viewport (instant grey with reduced motion or no JS).
- Service index as the stage: names light up and open as the matching photo passes mid-screen (desktop); pill bar on phone.

## Placeholders for the client
- Hot-towel shave price (not in brief).
- Team names, specialities and photos (portraits are stand-ins).
- Phone number and email (not in brief).
- Booking form is front-end only: connect to their booking system.
- Photos are Unsplash stand-ins (credits in img/credits.json); swap for shots of the real shop when available.
