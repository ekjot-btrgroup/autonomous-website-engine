---
name: shortlist
description: Turn a client brief into the top 10 matching designs and publish them to the Lovable showcase page /s/<slug> for the user to pick from. Use when the user gives a brief or asks for a website.
---
# Shortlist (any chat)

1. Write `briefs/<slug>.json` from the user's brief using `briefs/_template.json` fields. Short values. `sections` = page order (vocabulary categories). Keep facts the user gave in `facts`. Do not invent facts. Ask one question only if the industry or business type is unknown.
2. `npm run -s shortlist -- <slug>` (zero tokens; deterministic ranking with reasons).
3. If it reports untagged designs, run `/add-designs` step 5 first, then repeat step 2.
4. `npm run -s push -- showcase` (no `--repo` needed after the first time; add the showcase repo to the session with push access if needed).
5. Commit + push the branch.
6. Reply in at most 8 lines: the ranked list (id, category, one reason), sections the library lacks, and:
   "Open <showcase url>/s/<slug>, pick 3, press Copy, paste it here."
Stop. Do not build until the user sends their picks.
