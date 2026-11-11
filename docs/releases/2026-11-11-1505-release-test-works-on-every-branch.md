# Release test works on every branch

- Released: 2026-11-11 15:05 UTC
- Merge commit on main: `c212e7c`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 1 file changed, 2 insertions(+)
- Areas: tests

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `86c4790` | Release test sets its own target (works on every branch) |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-release-test-works-on-ev c212e7c`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 c212e7c`
