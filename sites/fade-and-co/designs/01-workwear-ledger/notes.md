# 01 Workwear Ledger: Fade & Co

Concept: an organised trade business. Near-white bands, one tight grotesk (Inter Tight display, Inter text),
ink for everything, safety yellow only on the things that book a chair. Every section reads like a page of
the shop's ledger: numbered 01 to 07, hairline rules, tabular figures.

## Section plan (fix round 2, after 01-critique.md pass 2)
Order follows the direction exactly: hero, services, pricing, gallery, team, booking, faq, contact.
1. Header: wordmark, live open/closed status from the brief's hours, links, yellow Book a chair. Phone: menu button.
2. Hero (signature 1): label + h1 "Booked, seated, sorted." on paper, lead + CTAs right. Inset 2:1 daylight shop
   photo (white chairs, light wood stations, no decor or vehicles). Booking card is now a real tear-off ticket:
   header "Ticket · <today>" + "No. 0012" (tabular, after No. 12 King Street), service rows with prices,
   a dashed perforation with two 12px notches cut through the card (CSS mask), day chips, live price on the
   yellow button. Shop facts (hours, walk-ins, address) sit on the rule below the photo, left of the hanging
   ticket, so there is no separate trust strip.
3. 01 Services: the only section with eyebrow + H2 left / paragraph right. Three equal cards, 4:3 photos,
   "See price" bottom-left on all three. Phone: snap row.
4. 02 Price list (signature 2): the ledger. Cut + beard line explains itself ledger-style:
   "Lines 01 + 02 add up to £36. This line: £32." (no "saves £4" badge).
5. 03 The work: ledger head (rule, number, 2.5rem H2, no paragraph) + an even strip of four 4:3 photos with
   numbered label captions underneath (03.1 to 03.4). 2x2 on phone.
6. 04 Barbers: chair ledger rows "Chair 01 · round 64px portrait slot · [Barber name] · [Speciality] ·
   Portrait to be supplied". No stock faces.
7. 05 Booking (dark band, full-bleed on phone): the form is the ticket's stub. It carries the hero choice
   ("Cut · Thu · £24" + Change link back to the hero ticket), then only Time of day, Your name, Mobile.
   Labels in --muted (about 7:1 on white).
8. 06 Questions: numbered question ledger (Q.01 to Q.04), answers always visible, no accordion: Do I need to
   book? / What's on the menu? / Which days are you shut? / Where are you? Facts only.
9. 07 Visit: address plate (No. 12 / King Street / Leeds) beside the details list.
10. Footer: contact column full width on phone.

## Photos
One set, one treatment: all daylight, neutral-warm. Files graded together (50% grey-world balance, light warm
tint, saturation 92%), plus `filter:saturate(.85) contrast(1.05)` in CSS. Hero cropped to 2:1 to drop wall
posters. All service and gallery photos are 4:3 at 12px radius (8px inside cards). None shared with 02 or 04.

## Signature moments
- The hero ticket and the booking stub are one ticket, synced live (service, day, price).
- The price ledger with tabular numerals on hairlines; the whole page numbered like ledger pages.
- Yellow appears only on booking actions.

## Motion (subtle)
Fade-up 16px, 0.6s, cubic-bezier(.22,1,.36,1), 70ms stagger, added by script only. Hover shifts on rows,
cards, photos and buttons. Reduced motion: static and visible.

## Placeholders the client must supply
- Hot-towel shave price.
- Phone number and email.
- Barber names, specialities and portraits (round dashed slots mark where they go).
- Shop photography (Unsplash stand-ins until Fade & Co's own shots arrive).
- Booking system or inbox for the form (it shows a confirmation note only).
