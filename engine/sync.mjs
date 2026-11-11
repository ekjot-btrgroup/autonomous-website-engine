// npm run push -- showcase --repo owner/name         first time; afterwards the repo is remembered
// npm run push -- sites/<slug> --repo owner/name
// npm run pull -- sites/<slug>                       bring edits made in Lovable back into this repo
// Options: --branch main  --force (push even if Lovable has newer commits; overwrites them)
//
// Lovable's GitHub sync makes a repo per Lovable project. This copies our folder into that repo and pushes;
// Lovable then shows the change. No Lovable credits are used.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { P, ROOT, args, die, readJson, writeJson, walk, rel, slugify } from './lib/util.mjs';

const a = args();
const mode = process.argv[2] === 'pull' ? 'pull' : 'push';
const target = (a._.find((x) => x !== 'pull' && x !== 'push') || die(`Usage: npm run ${mode} -- <showcase|sites/<slug>> [--repo owner/name]`)).replace(/\/$/, '');
const dir = path.resolve(ROOT, target);
if (!fs.existsSync(path.join(dir, 'package.json'))) die(`${target} is not an app folder`);
const isShowcase = path.resolve(dir) === path.resolve(P.showcase);
// Refresh the dashboard's data (vocabulary, repo, engine snapshot) before publishing the showcase.
if (isShowcase && process.argv[2] !== 'pull') (await import('./showcase.mjs')).writeAdminData();
const syncFile = path.join(dir, '.engine', 'sync.json');
const sync = readJson(syncFile, {});
const repo = a.repo || sync.repo || die(`No repo known for ${target}. Pass --repo owner/name (the GitHub repo Lovable created for this project).`);
const url = /^[\w.-]+\/[\w.-]+$/.test(repo) ? `https://github.com/${repo}.git` : repo;
const shown = String(repo).replace(/\/\/[^@/]*@/, '//***@'); // never print or store tokens

const EXCLUDE = /^(node_modules|dist|\.engine|\.cache|\.shots)(\/|$)|(^|\/)(package-lock\.json|bun\.lockb?|yarn\.lock|pnpm-lock\.yaml|\.DS_Store)$/;
const PROTECT = /^(\.git|supabase|\.github|public\/lovable-uploads)(\/|$)|^\.env/; // never deleted in the Lovable repo

const git = (cwd, ...argv) => {
  const r = spawnSync('git', argv, { cwd, encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`git ${argv.join(' ')}: ${(r.stderr || r.stdout).trim().split('\n').slice(-3).join(' ')}`);
  return r.stdout.trim();
};

function cloneFresh() {
  const work = path.join(P.cache, 'sync', slugify(repo, 80));
  fs.rmSync(work, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(work), { recursive: true });
  git(path.dirname(work), 'clone', '--quiet', '--depth', '20', ...(a.branch ? ['--branch', a.branch] : []), url, work);
  let head = '';
  try { head = git(work, 'rev-parse', 'HEAD'); } catch { /* empty repo */ }
  let branch = a.branch || sync.branch;
  if (!branch) { try { branch = git(work, 'rev-parse', '--abbrev-ref', 'HEAD'); } catch { branch = 'main'; } if (!branch || branch === 'HEAD') branch = 'main'; }
  return { work, head, branch };
}

const filesOf = (root, skip) => walk(root).map((f) => path.relative(root, f).split(path.sep).join('/')).filter((r) => !skip.test(r));

function push(attempt = 1) {
  const { work, head, branch } = cloneFresh();
  if (!isShowcase && sync.sha && head && head !== sync.sha && !a.force)
    die(`The Lovable repo has commits made after our last push (probably edits in Lovable).\nRun: npm run pull -- ${target}   then push again. (Or --force to overwrite them.)`);
  // Showcase after first push: additive (other chats may have pushed designs/shortlists). Sites: mirror.
  const mirror = !isShowcase || !sync.sha;
  if (mirror) for (const r of filesOf(work, PROTECT)) fs.rmSync(path.join(work, r), { force: true });
  for (const r of filesOf(dir, EXCLUDE)) {
    fs.mkdirSync(path.dirname(path.join(work, r)), { recursive: true });
    fs.copyFileSync(path.join(dir, r), path.join(work, r));
  }
  git(work, 'add', '-A');
  if (!git(work, 'status', '--porcelain')) { console.log(`Up to date: ${shown} already matches ${target}.`); save(head, branch); return; }
  const who = spawnSync('git', ['config', 'user.email'], { cwd: work, encoding: 'utf8' }).stdout.trim();
  if (!who) { git(work, 'config', 'user.email', 'website-engine@users.noreply.github.com'); git(work, 'config', 'user.name', 'Website Engine'); }
  git(work, 'commit', '--quiet', '-m', `Sync ${target} from website engine`);
  try { git(work, 'push', '--quiet', 'origin', `HEAD:${branch}`); }
  catch (e) {
    if (attempt < 3 && /rejected|fetch first|non-fast-forward/i.test(e.message)) { console.log('Remote moved while pushing; retrying...'); return push(attempt + 1); }
    die(`Push failed: ${e.message}\nIn a Claude cloud chat the repo must be added to the session first (add_repo with push access).`);
  }
  save(git(work, 'rev-parse', 'HEAD'), branch);
  console.log(`Pushed ${target} -> ${shown} (${branch}). Lovable picks it up from GitHub in a few seconds.`);
}

function pull() {
  const { work, head, branch } = cloneFresh();
  if (!head) die('Remote repo is empty.');
  const remote = filesOf(work, /^\.git(\/|$)/);
  for (const r of filesOf(dir, EXCLUDE)) if (!remote.includes(r)) fs.rmSync(path.join(dir, r), { force: true });
  for (const r of remote) { if (EXCLUDE.test(r)) continue; fs.mkdirSync(path.dirname(path.join(dir, r)), { recursive: true }); fs.copyFileSync(path.join(work, r), path.join(dir, r)); }
  save(head, branch);
  console.log(`Pulled ${shown} (${branch} @ ${head.slice(0, 7)}) into ${rel(dir)}. Commit it to keep this repo in step.`);
}

function save(sha, branch) { writeJson(syncFile, { repo: shown, branch, sha, synced_at: new Date().toISOString() }); }

mode === 'pull' ? pull() : push();
