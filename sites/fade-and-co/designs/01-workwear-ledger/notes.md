# 01 Workwear Ledger: Fade & Co

Concept: an organised trade business. Near-white bands, one tight grotesk (Inter Tight for display, Inter for
text), ink for everything, and safety yellow only on the things that book a chair.

## Section plan (fix round 1, after 01-critique.md)
1. Header: wordmark with a small "fade" mark, live open/closed status from the brief's hours, links, yellow
   Book a chair. Phone: real menu button.
2. Hero (signature 1), rebuilt away from the reference: label + h1 "Booked, seated, sorted." (2 lines, 12ch) on the
   paper, lead and CTAs in a right column aligned to the h1 baseline. Below, an inset 16:9 shop photo at 12px radius
   on the 1240px grid. The booking card is a "work ticket" docked to the photo's bottom-right corner: square top-left
   corner, hairline header "Ticket · Book a chair" with today's date in tabular numerals, ledger rows with prices,
   day chips, live price on the yellow button. No glass pill. Phone: 4:3 photo, ticket aligned to the same gutter.
3. Shop board: hours, walk-ins, "Three services / Cut, beard, hot towel", address (no prices). 2x2 on phone.
4. Services: tall Cut card (8 cols) beside two stacked 4:3 cards (4 cols), bottoms aligned. Cards 8px padding,
   8px image radius inside 16px cards, ledger numbers 01-03, "See price" link to the ledger. Phone: snap row.
5. Price list (signature 2): the ledger, the only full price list.
6. The work: one 4:3 tile beside two stacked 4:3 tiles (column ratio worked out so all three are 4:3).
7. Barbers: "Chair 01-03" cards with dashed portrait frames for the client's own photos (no stock faces).
8. Booking (dark card): hours as 9am–7pm rows (compact on phone), white form panel.
9. FAQ "Before you sit down.": prices now point to the ledger instead of repeating numbers.
10. Visit "Find the shop.": a white address plate (No. 12 / King Street / Leeds) beside the details list.

Photos: one family (warm wood, white or cream walls, daylight), all graded as one set in the files
(saturation 84%, 6% warm paper colourise) plus `filter:saturate(.9) contrast(1.04)` in CSS. Seasonal, branded and
logo-clothing photos removed; nothing shared with designs 02 or 04.

## Signature moments
- Hero work ticket docked to the photo corner, live price, synced to the booking form.
- The price ledger: tabular numerals on hairlines.
- Yellow appears only on booking actions, so the eye always finds the next step.

## Motion (subtle)
Fade-up 16px, 0.6s, cubic-bezier(.22,1,.36,1), 70ms stagger, added by script only. Hover shifts on rows,
cards and buttons. Reduced motion: everything static and visible.

## Placeholders the client must supply
- Hot-towel shave price.
- Phone number and email.
- Barber names, roles and portraits (dashed frames mark where they go).
- Shop photography (all photos are Unsplash stand-ins until Fade & Co's own shots arrive).
- Booking system or inbox the form should send to (the form shows a confirmation note only).
