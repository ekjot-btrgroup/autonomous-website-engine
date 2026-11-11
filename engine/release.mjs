// npm run sync                    pull the latest main (admin dashboard edits, other chats' work) into this branch
// npm run release -- "summary"    merge this branch into main, push it, tag it, and write docs/releases/<date>-<slug>.md
// npm run releases                list release notes (newest first)
//
// The user authorised releasing to main without asking. Each release note lists every commit, so any single
// feature or the whole release can be brought back (see the "Bring it back" part of each note).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, args, die, slugify } from './lib/util.mjs';

const RELEASES = path.join(ROOT, 'docs', 'releases');
const mode = process.argv[2];
const a = args(process.argv.slice(3));

function git(...argv) {
  const r = spawnSync('git', argv, { cwd: ROOT, encoding: 'utf8' });
  if (r.status !== 0) { const e = new Error((r.stderr || r.stdout).trim()); e.git = argv.join(' '); throw e; }
  return r.stdout.trim();
}
const tryGit = (...argv) => { try { return git(...argv); } catch { return null; } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function withRetry(fn, label) {
  for (let i = 0, wait = 2000; ; i++, wait *= 2) {
    try { return fn(); } catch (e) {
      if (i >= 4 || !/network|timed out|Could not resolve|Connection|unable to access|RPC failed|reset/i.test(e.message)) throw e;
      console.log(`${label} failed (network), retrying in ${wait / 1000}s...`); await sleep(wait);
    }
  }
}
const branch = () => git('rev-parse', '--abbrev-ref', 'HEAD');

async function sync() {
  await withRetry(() => git('fetch', '--quiet', 'origin', 'main'), 'fetch');
  const behind = Number(git('rev-list', '--count', 'HEAD..origin/main'));
  if (!behind) { console.log('Already up to date with main.'); return; }
  try { git('merge', '--autostash', '--no-edit', 'origin/main'); }
  catch (e) { tryGit('merge', '--abort'); die(`Could not merge main automatically (conflict):\n${e.message.slice(0, 400)}\nResolve by hand: git merge origin/main`); }
  console.log(`Pulled ${behind} commit(s) from main (admin dashboard edits, other chats' releases).`);
}

async function release() {
  const summary = String(a._[0] || a.summary || '').trim() || die('Usage: npm run release -- "what this release does"');
  const br = branch();
  if (br === 'main' || br === 'HEAD') die('Run this from a feature branch, not main.');
  if (git('status', '--porcelain')) { git('add', '-A'); git('commit', '--quiet', '-m', summary); console.log('Committed pending changes.'); }
  await withRetry(() => git('fetch', '--quiet', 'origin', 'main'), 'fetch');

  const commits = git('log', '--no-merges', '--format=%h\t%s', 'origin/main..HEAD').split('\n').filter(Boolean).map((l) => l.split('\t'));
  if (!commits.length) { console.log('Nothing new to release: main already has everything from this branch.'); return; }
  const stat = git('diff', '--shortstat', 'origin/main...HEAD') || 'no file changes';
  const files = git('diff', '--name-only', 'origin/main...HEAD').split('\n').filter(Boolean);
  const areas = [...new Set(files.map((f) => (f.includes('/') ? f.split('/')[0] : 'root')))].sort();

  const now = new Date();
  const stamp = now.toISOString().slice(0, 16).replace(/[-:T]/g, '').replace(/^(\d{8})(\d{4})$/, '$1-$2');
  const slug = slugify(summary, 40);
  const tag = `release-${stamp}-${slug}`;
  const noteFile = path.join(RELEASES, `${now.toISOString().slice(0, 10)}-${stamp.slice(9)}-${slug}.md`);
  fs.mkdirSync(RELEASES, { recursive: true });
  fs.writeFileSync(noteFile, `# ${summary}

- Released: ${now.toISOString().slice(0, 16).replace('T', ' ')} UTC
- Tag: \`${tag}\` (the merge commit on main)
- From branch: \`${br}\`
- Changed: ${stat}
- Areas: ${areas.join(', ')}

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
${commits.map(([h, s]) => `| \`${h}\` | ${s.replace(/\|/g, '/')} |`).join('\n')}

## Bring it back
- Whole release on a new branch: \`git fetch origin --tags && git checkout -b restore-${slug.slice(0, 24)} ${tag}\`
- One feature onto your current branch: \`git cherry-pick <commit from the table>\`
- Undo the whole release on main: \`git revert -m 1 ${tag}\`
- If the tag is missing: \`git log origin/main --merges --grep "${summary.replace(/"/g, '')}" --format=%h\` gives the merge commit to use instead.
`);
  git('add', noteFile);
  git('commit', '--quiet', '-m', `Release note: ${summary}`);

  let mergeSha;
  for (let attempt = 1; ; attempt++) {
    git('checkout', '--quiet', '--detach', 'origin/main');
    try { git('merge', '--no-ff', '--no-edit', '-m', `Release: ${summary} (from ${br})`, br); }
    catch (e) {
      tryGit('merge', '--abort'); git('checkout', '--quiet', br);
      die(`Merge into main has conflicts; nothing was pushed.\nFix: npm run sync (resolve conflicts), then npm run release -- "${summary}" again.\n${e.message.slice(0, 300)}`);
    }
    mergeSha = git('rev-parse', 'HEAD');
    try { await withRetry(() => git('push', '--quiet', 'origin', 'HEAD:main'), 'push'); break; }
    catch (e) {
      git('checkout', '--quiet', br);
      if (attempt < 3 && /rejected|fetch first|non-fast-forward/i.test(e.message)) { console.log('main moved meanwhile; retrying...'); await withRetry(() => git('fetch', '--quiet', 'origin', 'main'), 'fetch'); continue; }
      die(`Push to main failed: ${e.message.slice(0, 300)}\n(Branch protection or missing permission? The branch itself is intact.)`);
    }
  }
  let tagNote = 'tag pushed';
  try { git('tag', '-a', tag, '-m', summary, mergeSha); await withRetry(() => git('push', '--quiet', 'origin', tag), 'tag push'); }
  catch (e) { tagNote = `tag not pushed (${e.message.split('\n')[0].slice(0, 80)}); the note's commit list still works`; }
  git('checkout', '--quiet', br);
  tryGit('merge', '--quiet', '--ff-only', mergeSha);
  tryGit('push', '--quiet', '-u', 'origin', br);
  console.log(`Released to main: ${mergeSha.slice(0, 7)} "${summary}" (${commits.length} commit(s), ${stat}); ${tagNote}.`);
  console.log(`Release note: ${path.relative(ROOT, noteFile)}`);
}

function list() {
  if (!fs.existsSync(RELEASES)) { console.log('No releases yet.'); return; }
  const notes = fs.readdirSync(RELEASES).filter((f) => f.endsWith('.md') && f !== 'README.md').sort().reverse();
  for (const f of notes.slice(0, Number(a.limit || 30))) {
    const txt = fs.readFileSync(path.join(RELEASES, f), 'utf8');
    const title = txt.split('\n')[0].replace(/^# /, '');
    const tag = (txt.match(/Tag: `([^`]+)`/) || [])[1] || '';
    const commits = [...txt.matchAll(/^\| `([0-9a-f]+)` \| (.*) \|$/gm)].map((m) => `${m[1]} ${m[2]}`);
    console.log(`${f.slice(0, 15)}  ${title}\n   tag ${tag}\n${commits.map((c) => `   - ${c}`).join('\n')}`);
  }
}

const run = { sync, release, releases: list }[mode];
if (!run) die('Usage: npm run sync | npm run release -- "summary" | npm run releases');
await run();
