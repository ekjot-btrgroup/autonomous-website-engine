# Plan note: Framer projects read in one go

- Released: 2026-11-12 07:58 UTC
- Merge commit on main: `da7267e`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 1 file changed, 1 insertion(+), 1 deletion(-)
- Areas: docs

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `4edf9a3` | Plan: Framer projects can be read in one go (user will show how) |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-plan-note-framer-project da7267e`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 da7267e`
