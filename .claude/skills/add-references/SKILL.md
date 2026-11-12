---
name: add-references
description: Import new Framer templates from the user's Framer "Moodboard" workspace into the reference library (read-only), with detailed design notes. Use when the user adds templates to Framer or asks to refresh the library. Authorises subagents and reading screenshots.
---
# Add references from Framer

1. Silently: `npm run -s sync`.
2. Framer tools via ToolSearch (`select:mcp__Framer__list_workspaces,mcp__Framer__list_projects`). List the
   projects in the "Moodboard" workspace. Already imported: `framer_id` in `references/*/*/dna.json`
   (`grep -h '"framer_id"' references/*/*/dna.json`). Skip duplicates (same title).
3. New projects only: follow `docs/REFERENCE-IMPORT.md` for each (pass `--framer <project id>` to `refs -- save`).
   More than 5: split across parallel general-purpose agents (about 10 each) with that doc as their brief.
4. `npm run -s refs -- coverage` and check every new reference has `meta.json` and `card.md`.
5. Silently commit + release. Reply with what was added per industry and any industry still thin.
   Never change, publish or branch the Framer projects.
