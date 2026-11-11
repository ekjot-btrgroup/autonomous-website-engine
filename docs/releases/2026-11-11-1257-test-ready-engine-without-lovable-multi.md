# Test-ready engine without Lovable: multi-design zips, why lines, contact sheet, project state file

- Released: 2026-11-11 12:57 UTC
- Merge commit on main: `4736639`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 38 files changed, 3997 insertions(+), 39 deletions(-)
- Areas: .claude, docs, engine, root, showcase, templates, tests, wip

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `51ef8cf` | Test-ready without Lovable: multi-design zips, one-line why per design, contact sheet |
| `497c4cc` | WIP: paused admin v2 redesign moved to wip/; backend schema SQL saved |
| `b0b534d` | Engine snapshot for the admin dashboard; showcase live URL saved |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-test-ready-engine-withou 4736639`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 4736639`
