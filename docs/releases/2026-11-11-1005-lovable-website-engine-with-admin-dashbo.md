# Lovable website engine with admin dashboard, learning memory and auto-release

- Released: 2026-11-11 10:05 UTC
- Tag: `release-20261111-1005-lovable-website-engine-with-admin-dashbo` (the merge commit on main)
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 182 files changed, 10782 insertions(+), 1 deletion(-)
- Areas: .claude, .github, briefs, docs, engine, incoming, knowledge, library, memory, root, showcase, sites, templates, tests

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `8d2887b` | Admin dashboard in the showcase: grid, list and CMS-style design editor |
| `c6846d4` | Style-first ranking with origin niche, admin overrides, auto-release to main |
| `ab267a7` | Niche-free design traits, learning memory, 3-question intake, full docs |
| `2a473e1` | Build Lovable website engine: design library, showcase, shortlist, site builder |

## Bring it back
- Whole release on a new branch: `git fetch origin --tags && git checkout -b restore-lovable-website-engine-w release-20261111-1005-lovable-website-engine-with-admin-dashbo`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 release-20261111-1005-lovable-website-engine-with-admin-dashbo`
- If the tag is missing: `git log origin/main --merges --grep "Lovable website engine with admin dashboard, learning memory and auto-release" --format=%h` gives the merge commit to use instead.
