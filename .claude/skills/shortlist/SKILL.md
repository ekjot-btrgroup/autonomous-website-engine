---
name: shortlist
description: Turn a client request into the top 10 matching designs from the showcase library, with live links, for the user to pick 3. Asks only three intake questions (animations, colours, brand brief). Use when the user wants a website or gives a brief.
---
# Shortlist (any chat)

0. `npm run -s sync` (latest main: admin dashboard edits, other chats' work).
1. **Intake, one message, only what is missing** (skip any question the user already answered):
   1. Animations: none, subtle, or rich?
   2. Colours: brand colours (hex or names), "choose for me", or "keep the designs' own colours"?
   3. Brand brief: business name, what it does, who it is for, the feel it should have, page sections wanted (optional), and any facts to use in the copy.
   Do not ask anything else. Wait for the answers.
2. Write `briefs/<slug>.json` (fields in `briefs/_template.json`). Short values; do not invent facts.
   - `niche`: closest word from `niches` in `knowledge/vocabulary.json` (or omit).
   - `profile`: your 1-5 reading of the brand on tone, energy, luxury, density, warmth, modernity (axes explained in vocabulary.json). This is the most important field for matching.
   - `style` words, `goals`, `scheme` (light/dark/omit), `animations` (none/subtle/rich), `avoid`.
   - `sections`: page order; default `navbar, hero, features, about, testimonials, cta, footer` adjusted to the business.
   - `colors`: `{primary, accent}` hex if given or "choose for me" (pick 2 that fit the brand); omit for "keep".
   - `fonts`: only if the user named fonts or the brand clearly needs a change.
3. `npm run -s shortlist -- <slug>` (zero tokens; ranking + reasons + live links).
4. If it reports untagged designs, run `/add-designs` step 5 first, then repeat step 3.
5. **One line per design:** write `.cache/why-<slug>.json` as `{"<id>": "<why this design suits THIS client and brief, max ~20 words>"}` for all 10, then `npm run -s shortlist -- <slug> --why .cache/why-<slug>.json`. Base each line on the brief and the design's traits/reasons from the output; be honest when a design is a weaker fit.
6. Show the results:
   - Showcase not on Lovable (`lovable.showcase` false): `npm run -s sheet -- <slug>` then send `reports/<slug>/shortlist.png` to the user with the SendUserFile tool (display render). Do not read the image yourself.
   - `lovable.showcase` true: `npm run -s push -- showcase`; the pick page is `<showcase_url>/s/<slug>`.
   Then commit and `npm run -s release -- "Shortlist for <slug>"`.
6b. Reply in at most 12 lines: the 10 as `rank. id (category): why line`, sections the library lacks, then:
   "Pick 3 and reply: Build site <slug> with designs: id1, id2, id3". Stop. Do not build until the user sends their picks.
7. **Feedback at any time** (one command each, zero thinking needed):
   - "X is great for bakeries": `npm run -s remember -- <id> --good "bakeries"`
   - "X is wrong for law firms": `npm run -s remember -- <id> --bad "law firms"`
   - "for luxury brands I like serif, dark, split layouts; no gradients": `npm run -s remember -- --for "luxury" --prefer "serif, dark, split" --avoid "gradient"`
   - a general taste for all briefs: omit `--for`.
   Then re-run step 3 if a shortlist is being discussed.
