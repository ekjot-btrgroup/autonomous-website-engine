# 01 Workwear Ledger: Fade & Co

Concept: an organised trade business. Near-white bands, one tight grotesk (Inter Tight display, Inter text),
ink for everything, safety yellow only on the things that book a chair. Every page section is a ledger page:
numbered 01 to 07, ink rule, tabular figures.

## Grid and type system (fix round 3)
- One ledger grid on the 1240px wrap: 4 + 8 columns, 96px gap at desktop (48px 900-1023). Every right-hand
  block starts on the 8-column line (x = 577 at 1440): h1, hero ticket, every h2 and intro, ledger, chair
  register, booking ticket, FAQ answers, visit route.
- One section-header system (`.sh`): ink rule, number + label in the 4-column, h2 (+ intro) on the 8-column line.
- Six type sizes only: display 80, h2 52, h3 22, body 17, small 15, label 12.

## Section plan (direction order)
1. Header: wordmark, live open/closed status, links, yellow Book a chair. Phone: Menu button.
2. Hero (new structure): ruled ledger head, h1 "Booked, seated, sorted." on the 8-column line, eyebrow + lead in
   the 4-column. Below, one joined sheet: a near-square photo (single barber, beard trim, side-on) runs flush
   into a landscape tear-off ticket (main part with service rows | vertical perforation with cut notches | stub
   with day chips, the shop facts printed as ticket terms, and the yellow button carrying the price). No ticket
   number. The facts strip lives on the stub, so there is no separate trust strip. Under 1024 the photo sits on
   top; under 640 the ticket turns upright with a horizontal perforation.
3. 01 Services: three cards, price on each number row (no "See price" links).
4. 02 Price list: ledger; "Cut and beard together: £32, not £36." Intro: "Worth knowing before you sit down."
5. 03 The work: four 4:3 photos, numbered captions (03.4 is now "Temple taper").
6. 04 Barbers (96px padding interlude): one drawn placeholder frame (three line-drawn chairs, dashed edge,
   "[Team photo to be supplied by Fade & Co]") + a chair register (Chair 01-03, [Barber name], [Speciality]).
7. 05 Booking (dark): hours in the 4-column; the form is a second landscape ticket: summary + "Change", time of
   day as ledger radio rows, then name and mobile on ruled writing lines in the stub.
8. 06 Questions: question (Q number above) in the 4-column, answer on the 8-column line.
9. 07 Visit: numbered route ledger (find No. 12 / walk in before noon / book after noon) + phone and email
   placeholders + actions; address plate in the 4-column (comes after the info on phone).

## Photos
One set, one grade: files graded together (50% grey-world, light warm tint, saturation 92%) plus CSS
`saturate(.85) contrast(1.05)`. New this round: hero (beard trim, side-on), svc-shave (hot towel in a warm shop,
cropped to drop shirt lettering), work-4 (clipper taper at the temple). None shared with 02 or 04.

## Placeholders the client must supply
- Hot-towel shave price.
- Phone number and email.
- Barber names, specialities and a team photo.
- Shop photography (Unsplash stand-ins until Fade & Co's own arrive).
- Booking system or inbox for the form (it shows a confirmation note only).
