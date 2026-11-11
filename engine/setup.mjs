// npm run setup   one-time setup on a new computer (for example after downloading the zip). Safe to re-run.
// Checks Node, Python, Pillow, zip; installs Playwright + Chromium if missing (used for previews and HTML export);
// installs the design library's packages. Prints a short checklist.
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { P, ROOT } from './lib/util.mjs';
import { loadChromium } from './showcase.mjs';

const run = (cmd, argv, opts = {}) => spawnSync(cmd, argv, { encoding: 'utf8', cwd: ROOT, ...opts });
const ok = (b) => (b ? 'OK  ' : 'MISSING');
const rows = [];

const major = Number(process.versions.node.split('.')[0]);
rows.push([major >= 20, `Node ${process.versions.node} (need 20+)`]);

const py = run(process.platform === 'win32' ? 'python' : 'python3', ['--version']);
rows.push([py.status === 0, `Python 3 (${(py.stdout || py.stderr || '').trim() || 'not found'}) - only needed to import new HTML templates`]);
const pil = run(process.platform === 'win32' ? 'python' : 'python3', ['-c', 'import PIL']);
rows.push([pil.status === 0, 'Pillow (optional: compresses template images)  pip install pillow']);
rows.push([run('zip', ['-v']).status === 0, 'zip (optional: zips the exported HTML)']);

let browser = await loadChromium().catch(() => null);
if (!browser) {
  console.log('Installing Playwright + Chromium (one time, ~150 MB)...');
  run('npm', ['install', '--no-save', '--no-audit', '--no-fund', 'playwright@1'], { stdio: 'inherit' });
  run('npx', ['playwright', 'install', 'chromium'], { stdio: 'inherit' });
  browser = await loadChromium().catch(() => null);
}
rows.push([!!browser, 'Chromium via Playwright (previews, contact sheets, HTML export)']);
if (browser) await browser.close();

if (fs.existsSync(path.join(P.showcase, 'package.json'))) {
  console.log('Installing the design library packages...');
  const i = run('npm', ['install', '--no-audit', '--no-fund', '--loglevel=error'], { cwd: P.showcase, stdio: 'inherit' });
  rows.push([i.status === 0, 'Design library packages (showcase/node_modules)']);
}

console.log('\nSetup check');
for (const [good, label] of rows) console.log(`  ${ok(good)}  ${label}`);
const blocking = rows.filter(([g, l]) => !g && !/optional|only needed/.test(l));
console.log(blocking.length ? '\nFix the MISSING items above, then run npm run setup again.' : '\nReady. Open this folder in Claude Code and say hi.');
process.exitCode = blocking.length ? 1 : 0;
