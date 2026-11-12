# User guide

You talk to Claude in a chat on this repo; Claude runs everything. The conversation always goes:

1. **Brand brief.** Name, what the business does, who it is for, where it is, the feel you want, and any facts
   (prices, hours, services). Claude replies "I have noted the company brief and have last 3 questions."
2. **Three questions.** Animations (none, subtle, rich), colours (yours or "choose for me"), typography (yours
   or "choose for me").
3. **10 designs.** Claude studies the closest templates from your Framer reference library (and researches the
   industry if it is new), writes 10 clearly different art directions (colours, fonts, style, layout), builds
   10 full homepages in parallel, reviews each at desktop, tablet and phone sizes with a separate critic, fixes
   them, and sends a contact sheet plus the browsable designs, each with one line on why it fits.
4. **Your 3 picks.** Reply with numbers, e.g. "2, 5, 7".
5. **Final designs.** The 3 get a deeper polish and a second review, then arrive as HTML files (local edition) or
   in a new Lovable project (online edition), with a Designs button to switch between them.

Tell Claude your taste at any time ("more editorial", "no dark designs for clinics"); it is remembered for
later briefs.

## The reference library
Your Framer workspace "Moodboard" is the library. Claude reads each project (never changes it) and stores its
design rules, screenshots and detailed notes in `references/`. Add templates in Framer and say
"add the new Framer templates". See `docs/REFERENCE-IMPORT.md`.

## Quality rules
`docs/DESIGN-QUALITY.md` (craft rules and the critic checklist) and `knowledge/anti-slop.json` (banned phrases
and AI tells). Designs never copy a template's text, images or code, and never invent reviews, numbers or awards.
