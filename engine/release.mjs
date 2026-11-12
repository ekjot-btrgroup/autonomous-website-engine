// npm run sync                    pull the latest main (admin dashboard edits, other chats' work) into this branch
// npm run release -- "summary"    merge this branch into main, push it, tag it, and write docs/releases/<date>-<slug>.md
// npm run releases                list release notes (newest first)
//
// The user authorised releasing to main without asking. Each release note lists every commit, so any single
// feature or the whole release can be brought back (see the "Bring it back" part of each note).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, args, die, slugify } from './lib/util.mjs';

const RELEASES = path.join(ROOT, 'docs', 'releases');
const mode = process.argv[2];
const a = args(process.argv.slice(3));

function gitIn(cwd, ...argv) {
  const r = spawnSync('git', argv, { cwd, encoding: 'utf8' });
  if (r.status !== 0) { const e = new Error((r.stderr || r.stdout).trim()); e.git = argv.join(' '); throw e; }
  return r.stdout.trim();
}
const git = (...argv) => gitIn(ROOT, ...argv);
const tryGit = (...argv) => { try { return git(...argv); } catch { return null; } };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function withRetry(fn, label) {
  for (let i = 0, wait = 2000; ; i++, wait *= 2) {
    try { return fn(); } catch (e) {
      if (i >= 4 || /\b40[0-9]\b|denied|forbidden|rejected/i.test(e.message) || !/network|timed out|Could not resolve|Connection|unable to access|RPC failed|reset/i.test(e.message)) throw e;
      console.log(`${label} failed (network), retrying in ${wait / 1000}s...`); await sleep(wait);
    }
  }
}
const branch = () => git('rev-parse', '--abbrev-ref', 'HEAD');
// Works from a downloaded zip too: without a git repository (or without a remote) there is nothing to sync or release.
const hasGit = () => tryGit('rev-parse', '--is-inside-work-tree') === 'true' && !!tryGit('remote', 'get-url', 'origin');
const TARGET = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'engine.config.json'), 'utf8')).release_target || 'main'; } catch { return 'main'; } })();

async function sync() {
  if (!hasGit()) { console.log('Local copy (no git remote): nothing to sync.'); return; }
  await withRetry(() => git('fetch', '--quiet', 'origin', TARGET), 'fetch');
  const behind = Number(git('rev-list', '--count', `HEAD..origin/${TARGET}`));
  if (!behind) { console.log('Already up to date with main.'); return; }
  try { git('merge', '--autostash', '--no-edit', `origin/${TARGET}`); }
  catch (e) { tryGit('merge', '--abort'); die(`Could not merge ${TARGET} automatically (conflict):\n${e.message.slice(0, 400)}\nResolve by hand: git merge origin/${TARGET}`); }
  console.log(`Pulled ${behind} commit(s) from ${TARGET}.`);
}

async function release() {
  const summary = String(a._[0] || a.summary || '').trim() || die('Usage: npm run release -- "what this release does"');
  if (!hasGit()) { console.log('Local copy (no git remote): files are saved on this computer; nothing to release.'); return; }
  const br = branch();
  if (br === TARGET || br === 'HEAD') {
    if (git('status', '--porcelain')) { git('add', '-A'); git('commit', '--quiet', '-m', summary); }
    try { await withRetry(() => git('push', '--quiet', 'origin', `HEAD:${TARGET}`), 'push'); console.log(`Pushed to ${TARGET}.`); } catch (e) { console.log(`Saved locally; push failed (${e.message.split('\n')[0].slice(0, 80)}).`); }
    return;
  }
  if (git('status', '--porcelain')) { git('add', '-A'); git('commit', '--quiet', '-m', summary); console.log('Committed pending changes.'); }
  await withRetry(() => git('fetch', '--quiet', 'origin', TARGET), 'fetch');

  const commits = git('log', '--no-merges', '--format=%h\t%s', `origin/${TARGET}..HEAD`).split('\n').filter(Boolean).map((l) => l.split('\t'));
  if (!commits.length) { console.log(`Nothing new to release: ${TARGET} already has everything from this branch.`); return; }
  const stat = git('diff', '--shortstat', `origin/${TARGET}...HEAD`) || 'no file changes';
  const files = git('diff', '--name-only', `origin/${TARGET}...HEAD`).split('\n').filter(Boolean);
  const areas = [...new Set(files.map((f) => (f.includes('/') ? f.split('/')[0] : 'root')))].sort();

  const now = new Date();
  const stamp = now.toISOString().slice(0, 16).replace(/[-:T]/g, '').replace(/^(\d{8})(\d{4})$/, '$1-$2');
  const slug = slugify(summary, 40);
  const tag = `release-${stamp}-${slug}`;
  const rel = `docs/releases/${now.toISOString().slice(0, 10)}-${stamp.slice(9)}-${slug}.md`;

  const NOTE = (short, tagged, ref) => `# ${summary}

- Released: ${now.toISOString().slice(0, 16).replace('T', ' ')} UTC
- Merge commit on ${TARGET}: \`${short}\`${tagged ? ` (tag \`${tag}\`)` : ''}
- From branch: \`${br}\`
- Changed: ${stat}
- Areas: ${areas.join(', ')}

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
${commits.map(([h, subj]) => `| \`${h}\` | ${subj.replace(/\|/g, '/')} |`).join('\n')}

## Bring it back
- Whole release on a new branch: \`git fetch origin && git checkout -b restore-${slug.slice(0, 24)} ${ref}\`
- One feature onto your current branch: \`git cherry-pick <commit from the table>\`
- Undo the whole release on ${TARGET}: \`git revert -m 1 ${ref}\`
`;
  // The merge happens in a temporary worktree, so this working folder (and anything still writing into it) is never touched.
  const WT = fs.mkdtempSync(path.join(os.tmpdir(), 'release-'));
  git('worktree', 'add', '--quiet', '--detach', WT, `origin/${TARGET}`);
  const g = (...argv) => gitIn(WT, ...argv);
  const tg = (...argv) => { try { return g(...argv); } catch { return null; } };
  const cleanup = () => { tryGit('worktree', 'remove', '--force', WT); fs.rmSync(WT, { recursive: true, force: true }); tryGit('worktree', 'prune'); };
  try {
  // 1. Merge the branch into main and push (retry if main moved meanwhile).
  let mergeSha;
  for (let attempt = 1; ; attempt++) {
    g('checkout', '--quiet', '--detach', `origin/${TARGET}`);
    try { g('merge', '--no-ff', '--no-edit', '-m', `Release: ${summary} (from ${br})`, br); }
    catch (e) {
      tg('merge', '--abort'); cleanup();
      die(`Merge into main has conflicts; nothing was pushed.\nFix: npm run sync (resolve conflicts), then npm run release -- "${summary}" again.\n${e.message.slice(0, 300)}`);
    }
    mergeSha = g('rev-parse', 'HEAD');
    try { await withRetry(() => g('push', '--quiet', 'origin', `HEAD:${TARGET}`), 'push'); break; }
    catch (e) {
      if (attempt < 3 && /rejected|fetch first|non-fast-forward/i.test(e.message)) { console.log('main moved meanwhile; retrying...'); await withRetry(() => git('fetch', '--quiet', 'origin', TARGET), 'fetch'); continue; }
      cleanup(); die(`Push to ${TARGET} failed: ${e.message.slice(0, 300)}\n(Branch protection or missing permission? The branch itself is intact.)`);
    }
  }
  const short = mergeSha.slice(0, 7);

  // 2. Optional tag (some environments block tag pushes; the merge commit is the reliable handle).
  let tagged = false;
  try { git('tag', '-a', tag, '-m', summary, mergeSha); git('push', '--quiet', 'origin', tag); tagged = true; }
  catch { tryGit('tag', '-d', tag); }
  const ref = tagged ? tag : short;

  // 3. Release note on main, naming the exact merge commit.
  fs.mkdirSync(path.join(WT, 'docs', 'releases'), { recursive: true });
  fs.writeFileSync(path.join(WT, rel), NOTE(short, tagged, ref));
  g('add', rel);
  g('commit', '--quiet', '-m', `Release note: ${summary}`);
  for (let attempt = 1; ; attempt++) {
    try { await withRetry(() => g('push', '--quiet', 'origin', `HEAD:${TARGET}`), 'push'); break; }
    catch (e) {
      if (attempt < 3 && /rejected|fetch first|non-fast-forward/i.test(e.message)) { git('fetch', '--quiet', 'origin', TARGET); g('rebase', '--quiet', `origin/${TARGET}`); continue; }
      console.log(`Warning: release note not pushed (${e.message.split('\n')[0].slice(0, 120)}); the release itself is on main.`); break;
    }
  }
  const finalSha = g('rev-parse', 'HEAD');

  // 4. Bring the branch level with main.
  tryGit('merge', '--quiet', '--ff-only', finalSha);
  tryGit('push', '--quiet', '-u', 'origin', br);
  var done = { short, tagged };
  } finally { cleanup(); }
  const { short, tagged } = done;
  console.log(`Released to ${TARGET}: ${short} "${summary}" (${commits.length} commit(s), ${stat})${tagged ? `, tag ${tag}` : ''}.`);
  console.log(`Release note: ${rel}`);
}

function list() {
  if (!fs.existsSync(RELEASES)) { console.log('No releases yet.'); return; }
  const notes = fs.readdirSync(RELEASES).filter((f) => f.endsWith('.md') && f !== 'README.md').sort().reverse();
  for (const f of notes.slice(0, Number(a.limit || 30))) {
    const txt = fs.readFileSync(path.join(RELEASES, f), 'utf8');
    const title = txt.split('\n')[0].replace(/^# /, '');
    const merge = (txt.match(/Merge commit on [\w./-]+: `([0-9a-f]+)`/) || [])[1] || '';
    const commits = [...txt.matchAll(/^\| `([0-9a-f]+)` \| (.*) \|$/gm)].map((m) => `${m[1]} ${m[2]}`);
    console.log(`${f.slice(0, 15)}  ${title}\n   merge ${merge}\n${commits.map((c) => `   - ${c}`).join('\n')}`);
  }
}

const run = { sync, release, releases: list }[mode];
if (!run) die('Usage: npm run sync | npm run release -- "summary" | npm run releases');
await run();
