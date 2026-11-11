# Copy rewriting never touches template scripts

- Released: 2026-11-11 13:32 UTC
- Merge commit on main: `8066a66`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 2 files changed, 6 insertions(+), 1 deletion(-)
- Areas: engine, tests

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `c225920` | Copy rewriting skips converted templates' own scripts |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-copy-rewriting-never-tou 8066a66`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 8066a66`
