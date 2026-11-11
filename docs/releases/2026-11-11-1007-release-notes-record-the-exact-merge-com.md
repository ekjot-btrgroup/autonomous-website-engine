# Release notes record the exact merge commit

- Released: 2026-11-11 10:07 UTC
- Merge commit on main: `c1db179`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 6 files changed, 57 insertions(+), 40 deletions(-)
- Areas: docs, engine, root, tests

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `875a2f8` | Release notes name the exact merge commit; tags optional |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-release-notes-record-the c1db179`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 c1db179`
