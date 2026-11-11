// npm run site -- new <slug> --pick id1,id2,id3 [--fill] [--force]
//      Builds sites/<slug>/ (Lovable-ready) from the picked designs only. --fill also adds the best-matching
//      design for every other section in the brief. Brief colours/fonts/animations are applied automatically.
// npm run site -- theme <slug> [--primary #hex] [--accent #hex] [--background #hex] [--foreground #hex]
//                              [--heading "Font"] [--body "Font"] [--radius 0.75rem] [--recolor blue:emerald,indigo:teal]
//                              [--hex "#1e40af=#0f766e"] [--motion off|on]
// npm run site -- copy <slug>          print the site's text strings as compact JSON (what Claude rewrites)
// npm run site -- copy-apply <slug>    apply sites/<slug>/.engine/copy.out.json  {"<key>": "new text", ...}
// npm run site -- check <slug>         npm install + vite build (local, zero tokens)
// npm run site -- plan <slug>          show the saved plan
// npm run site -- images <slug>        list the site's photos (file, size, hint) for choosing search words
// npm run site -- images-apply <slug>  replace them with Openverse photos per sites/<slug>/.engine/images.json {"file": "words"}
// npm run site -- switcher <slug>      add/refresh the floating 'Designs' switcher (page-mode sites with 2+ options)
import fs from 'node:fs';
import path from 'node:path';
import { directionNames, P, args, die, loadMetas, readJson, writeJson, copyDir, table, rel, categoryOf, walk } from './lib/util.mjs';
import { loadLibrary } from './lib/library.mjs';
import { parseBrief, scoreDesign, isUsable } from './lib/score.mjs';
import { buildMemory, loadEvents, record } from './lib/memory.mjs';
import { AXES } from './lib/vocab.mjs';
import { extractStrings, applyToSource, recolor, applyTheme } from './lib/sitekit.mjs';
import { buildApp } from './showcase.mjs';
import { spawnSync } from 'node:child_process';

const a = args();
const [cmd, slugArg] = a._;
const slug = slugArg || die('Usage: npm run site -- <new|theme|copy|copy-apply|check|plan> <slug> ...');
const dir = path.join(P.sites, slug);
const eng = path.join(dir, '.engine');
const planFile = path.join(eng, 'site.json');
const sectionsDir = path.join(dir, 'src', 'sections');
const codeFiles = () => walk(sectionsDir).filter((f) => /\.(tsx|ts|jsx|js)$/.test(f));
// Text rewriting skips converted templates' own scripts (rewriting their strings could break menus/sliders).
const copyFiles = () => codeFiles().filter((f) => path.basename(f) !== 'template.js');

const commands = { images: () => cmdImages(false), 'images-apply': () => cmdImages(true), switcher: cmdSwitcher, new: cmdNew, theme: cmdTheme, copy: cmdCopy, 'copy-apply': cmdCopyApply, check: cmdCheck, plan: () => console.log(JSON.stringify(readJson(planFile), null, 2)) };
(commands[cmd] || (() => die(`Unknown command ${cmd}`)))();

function cmdNew() {
  const brief = readJson(path.join(P.briefs, `${slug}.json`), null) || die(`Missing briefs/${slug}.json`);
  if (fs.existsSync(planFile) && !a.force) die(`sites/${slug} already exists. Use --force to rebuild its sections (theme/copy edits will be lost).`);
  const metas = loadLibrary();
  const byId = new Map(metas.map((m) => [m.id, m]));
  const picks = String(a.pick || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!picks.length) die('Give the chosen designs: --pick id1,id2,id3');
  for (const id of picks) if (!byId.has(id)) die(`Unknown design id ${id}`);
  const mem = buildMemory(loadEvents());
  const q = parseBrief(brief, mem);
  // Full-page designs: each pick is a whole page; the first is the homepage, the others /option-2, /option-3.
  const pageMode = picks.some((id) => byId.get(id).kind === 'page');
  if (pageMode && picks.some((id) => byId.get(id).kind !== 'page')) console.log('Note: mixing full pages and sections; only the full pages are used.');

  // 1. Slots = brief sections, in page order. Picks take their category's slot.
  const slots = q.sections.map((s) => ({ slot: s, id: null, picked: false, reason: '' }));
  for (const id of picks) {
    const cat = categoryOf(byId.get(id));
    const free = slots.find((s) => s.slot === cat && !s.id) || slots.find((s) => !s.id && (byId.get(id).tags?.also || []).includes(s.slot));
    if (free) Object.assign(free, { id, picked: true, reason: 'chosen by you' });
    else {
      // Category not in the brief's list: place after the hero (or before cta/footer).
      const after = slots.findIndex((s) => s.slot === 'hero');
      const before = slots.findIndex((s) => ['cta', 'footer'].includes(s.slot));
      const at = after >= 0 ? after + 1 : before >= 0 ? before : slots.length;
      slots.splice(at, 0, { slot: cat, id, picked: true, reason: 'chosen by you' });
    }
  }
  // 2. Fill remaining slots with the best compatible design (same colour scheme as the picks preferred).
  const schemes = picks.map((id) => byId.get(id).tags?.scheme).filter(Boolean);
  const mainScheme = schemes.sort((x, y) => schemes.filter((s) => s === y).length - schemes.filter((s) => s === x).length)[0];
  const used = new Set(picks);
  for (const s of slots) {
    if (s.id) continue;
    if (!a.fill) continue;
    const best = metas.filter((m) => isUsable(m) && categoryOf(m) === s.slot && !used.has(m.id))
      .map((m) => { const r = scoreDesign(m, q, mem); return { m, score: r.score + (mainScheme && m.tags?.scheme === mainScheme ? 12 : 0) }; })
      .sort((x, y) => y.score - x.score)[0];
    if (best) {
      const sch = best.m.tags?.scheme;
      const note = mainScheme && sch ? (sch === mainScheme ? `, ${sch} like your picks` : `, WARNING ${sch} while your picks are ${mainScheme}`) : '';
      s.id = best.m.id; s.reason = `auto-filled (score ${best.score}${note})`; used.add(best.m.id);
    }
    else s.reason = 'no design in library for this section';
  }
  const sections = pageMode
    ? picks.filter((id) => byId.get(id).kind === 'page').map((id, i) => ({ slot: 'page', id, picked: true, reason: i ? `alternative at /option-${i + 1}` : 'homepage (/)' }))
    : slots.filter((s) => s.id);
  const missing = pageMode ? [] : slots.filter((s) => !s.id).map((s) => s.slot);
  // Picks keep the brief's section order; slots the user did not pick are dropped unless --fill.

  // 3. Scaffold from the base template + the showcase's tailwind/css (keeps any merged design extensions).
  if (a.force) fs.rmSync(sectionsDir, { recursive: true, force: true });
  copyDir(path.join(P.templates, 'lovable-base'), dir);
  for (const f of ['tailwind.config.ts', 'src/index.css']) if (fs.existsSync(path.join(P.showcase, f))) fs.copyFileSync(path.join(P.showcase, f), path.join(dir, f));
  const showPkg = readJson(path.join(P.showcase, 'package.json'), { dependencies: {} });
  const pkg = readJson(path.join(dir, 'package.json'));
  pkg.name = slug;
  for (const s of sections) for (const d of byId.get(s.id).deps || []) if (!pkg.dependencies[d] && showPkg.dependencies?.[d]) pkg.dependencies[d] = showPkg.dependencies[d];
  pkg.dependencies = Object.fromEntries(Object.entries(pkg.dependencies).sort(([x], [y]) => x.localeCompare(y)));
  writeJson(path.join(dir, 'package.json'), pkg);

  sections.forEach((s, i) => {
    const folder = `${String(i + 1).padStart(2, '0')}-${s.slot}`;
    s.folder = folder;
    copyDir(path.join(P.designs, s.id), path.join(sectionsDir, folder));
    const idx = path.join(sectionsDir, folder, 'index.tsx');
    fs.writeFileSync(idx, `// Section source: design ${s.id} (showcase/src/designs/${s.id})\n` + fs.readFileSync(idx, 'utf8'));
  });
  const motionOff = String(brief.animations || '').toLowerCase() === 'none';
  if (pageMode) writePageRoutes(sections); else writeIndex(sections, motionOff);
  const htmlFile = path.join(dir, 'index.html');
  const company = String(brief.company || slug).replace(/[<>&"]/g, '');
  fs.writeFileSync(htmlFile, fs.readFileSync(htmlFile, 'utf8').replace(/<title>.*<\/title>/, `<title>${company}</title>`));
  fs.writeFileSync(path.join(dir, 'README.md'), `# ${company}\n\nBuilt by the website engine from designs: ${sections.map((s) => s.id).join(', ')}.\nEdit in Lovable or in this folder.\n`);
  // Brief colours/fonts -> theme automatically (zero tokens). Accepts colors:{primary,accent,...} or brand_colors:[...].
  const c = brief.colors || {};
  const bc = [brief.brand_colors].flat().filter((x) => /^#?[0-9a-f]{3,6}$/i.test(String(x || '')));
  const theme = Object.fromEntries(Object.entries({ primary: c.primary || bc[0], accent: c.accent || bc[1], background: c.background, foreground: c.foreground, heading: brief.fonts?.heading, body: brief.fonts?.body })
    .filter(([, v]) => v).map(([k, v]) => [k, /^[0-9a-f]{3,6}$/i.test(v) ? `#${v}` : v]));
  const applied = Object.keys(theme).length ? [...applyTheme(dir, theme), ...themeTemplates(theme)] : [];
  if (motionOff) { setMotionCss(true); applied.push('animations off'); }
  writeJson(planFile, { slug, company, created_at: new Date().toISOString(), picks, sections, missing, mode: pageMode ? 'pages' : 'sections', filled: !!a.fill, theme: { ...theme, motion: motionOff ? 'off' : 'on' } });

  // Memory: what was picked for this kind of brief, and which designs are now in use (anti-repetition).
  const shortlist = readJson(path.join(P.shortlists, `${slug}.json`), null);
  record('pick', {
    slug, context: [...q.ctx], profile: q.profile, shown: shortlist?.items?.map((i) => i.id) || [], picked: picks,
    picked_traits: picks.map((id) => { const t = byId.get(id).tags || {}; return { id, ...Object.fromEntries(AXES.filter((x) => t[x]).map((x) => [x, t[x]])), style: t.style || [], layout: t.layout || [] }; }),
  });
  record('used', { slug, ids: sections.map((s) => s.id) });

  console.log(table(sections.map((s) => ({ folder: s.folder, design: s.id, why: s.reason })), ['folder', 'design', 'why']));
  if (applied.length) console.log(`\nFrom the brief: ${applied.join('; ')}`);
  if (missing.length) console.log(a.fill ? `\nNo library design for: ${missing.join(', ')} (left out).` : `\nOnly your picks are used. Brief sections not included: ${missing.join(', ')} (add --fill to complete them automatically).`);
  console.log(`\nCreated ${rel(dir)}. Next: theme (optional) -> copy -> copy-apply -> check -> push.`);
}

function cmdTheme() {
  const plan = readJson(planFile);
  const t = Object.fromEntries(['primary', 'accent', 'background', 'foreground', 'heading', 'body', 'radius'].filter((k) => a[k] && a[k] !== true).map((k) => [k, a[k]]));
  const done = Object.keys(t).length ? [...applyTheme(dir, t), ...themeTemplates(t)] : [];
  if (a.recolor || a.hex) {
    const map = Object.fromEntries(String(a.recolor || '').split(',').filter(Boolean).map((p) => p.split(':').map((x) => x.trim())));
    const hexMap = Object.fromEntries(String(a.hex || '').split(',').filter(Boolean).map((p) => p.split('=').map((x) => x.trim())));
    let total = 0;
    for (const f of codeFiles()) { const r = recolor(fs.readFileSync(f, 'utf8'), map, hexMap); if (r.n) { fs.writeFileSync(f, r.out); total += r.n; } }
    done.push(`recoloured ${total} classes/values (${a.recolor || ''} ${a.hex || ''})`.trim());
    t.recolor = a.recolor; t.hex = a.hex;
  }
  if (a.motion === 'off' || a.motion === 'on') {
    const off = a.motion === 'off';
    writeIndex(plan.sections, off);
    setMotionCss(off);
    t.motion = a.motion;
    done.push(`animations ${a.motion}`);
  }
  plan.theme = { ...plan.theme, ...t };
  writeJson(planFile, plan);
  console.log(done.length ? `Theme updated: ${done.join('; ')}` : 'Nothing to change. Pass --primary/--heading/--body/--recolor ...');
}

// Page = sections in order. With animations off, framer-motion is told to skip motion (MotionConfig).
function writeIndex(sections, motionOff) {
  const imports = sections.map((s, i) => `import S${i + 1} from "@/sections/${s.folder}";`);
  const tags = sections.map((s, i) => `      <S${i + 1} />`);
  const open = motionOff ? '  <MotionConfig reducedMotion="always">\n' : '';
  const close = motionOff ? '  </MotionConfig>\n' : '';
  const head = motionOff ? 'import { MotionConfig } from "framer-motion";\n' : '';
  fs.writeFileSync(path.join(dir, 'src', 'pages', 'Index.tsx'), `${head}${imports.join('\n')}\n\nconst Index = () => (\n${open}  <div className="min-h-screen">\n${tags.join('\n')}\n  </div>\n${close});\n\nexport default Index;\n`);
}

// Full-page sites: first page at "/", the others at /option-2, /option-3 ... plus the floating "Designs" switcher
// (bottom right) that opens a full-screen picker of all options for this brief.
function writePageRoutes(sections, ctx = switcherContext()) {
  const names = directionNames(sections.map((s) => ctx.metaOf(s.id)));
  const opts = sections.map((s, i) => {
    const m = ctx.metaOf(s.id) || {};
    const sw = (m.summary?.colors || []).filter((c) => /^#[0-9a-f]{6}$/i.test(c)).slice(0, 3);
    return {
      path: i ? `/option-${i + 1}` : '/', number: String(i + 1).padStart(2, '0'),
      name: names[i], tagline: ctx.whyOf(s.id) || m.tags?.note || s.reason || '',
      swatches: sw.length ? sw : ['#e7e2d8', '#1b1d22', ctx.accent],
    };
  });
  const lines = [
    'import { lazy, Suspense } from "react";',
    'import { BrowserRouter, Route, Routes } from "react-router-dom";',
    'import NotFound from "./pages/NotFound";',
    'import { OptionSwitcher, type SiteOption } from "@/components/OptionSwitcher";',
    `import P1 from "@/sections/${sections[0].folder}";`,
    ...sections.slice(1).flatMap((s, i) => [`const load${i + 2} = () => import("@/sections/${s.folder}");`, `const P${i + 2} = lazy(load${i + 2});`]),
    '',
    '// Options built for this brief (generated by the website engine: npm run site -- switcher <slug>).',
    'const OPTIONS: SiteOption[] = [',
    ...opts.map((o, i) => `  { path: ${JSON.stringify(o.path)}, number: ${JSON.stringify(o.number)}, name: ${JSON.stringify(o.name)}, tagline: ${JSON.stringify(o.tagline)}, swatches: ${JSON.stringify(o.swatches)}${i ? `, preload: load${i + 1}` : ''} },`),
    '];',
    '',
    'const App = () => (',
    '  <BrowserRouter>',
    '    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>',
    '      <Routes>',
    ...opts.map((o, i) => `        <Route path="${o.path}" element={<P${i + 1} />} />`),
    '        <Route path="*" element={<NotFound />} />',
    '      </Routes>',
    '    </Suspense>',
    `    <OptionSwitcher options={OPTIONS} brand={${JSON.stringify(ctx.brand)}} kind="homepage" accent=${JSON.stringify(ctx.accent)} />`,
    '  </BrowserRouter>',
    ');',
    '',
    'export default App;',
    '',
  ];
  fs.writeFileSync(path.join(dir, 'src', 'App.tsx'), lines.join('\n'));
  fs.writeFileSync(path.join(dir, 'src', 'pages', 'Index.tsx'), `import P1 from "@/sections/${sections[0].folder}";\n\nconst Index = () => <P1 />;\n\nexport default Index;\n`);
  for (const f of ['src/components/OptionSwitcher.tsx', 'src/lib/template-runtime.ts']) {
    fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
    fs.copyFileSync(path.join(P.templates, 'lovable-base', f), path.join(dir, f));
  }
}

// Data for the switcher: brand, accent (brief primary, lightened for the dark picker), Claude's why lines, design metas.
function switcherContext() {
  const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
  const shortlist = readJson(path.join(P.shortlists, `${slug}.json`), { items: [] });
  const metas = new Map(loadLibrary().map((m) => [m.id, m]));
  const plan = readJson(planFile, {});
  const why = new Map((shortlist.items || []).map((i) => [i.id, i.why]));
  return {
    brand: String(brief.company || plan.company || slug),
    accent: pickAccent(brief.colors?.primary || plan.theme?.primary),
    whyOf: (id) => why.get(id),
    metaOf: (id) => metas.get(id),
  };
}

function pickAccent(hex) {
  const h = String(hex || '').replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(h)) return '#6ee7d2';
  let [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum < 0.55) { const t = Math.min(0.75, 0.55 - lum + 0.35); [r, g, b] = [r, g, b].map((c) => Math.round(c + (255 - c) * t)); }
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
}

function cmdImages(apply) {
  if (!fs.existsSync(planFile)) die(`No site ${slug}`);
  const py = process.platform === 'win32' ? 'python' : 'python3';
  const tool = path.join(P.root || path.dirname(P.sites), 'engine', 'tools', 'images.py');
  const argv = apply ? ['-I', tool, 'apply', dir, path.join(eng, 'images.json')] : ['-I', tool, 'list', dir];
  if (apply && !fs.existsSync(path.join(eng, 'images.json'))) die(`Write ${rel(path.join(eng, 'images.json'))} first: {"<file>": "search words"}`);
  const r = spawnSync(py, argv, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
  process.stdout.write(r.stdout || '');
  if (r.status !== 0) process.exitCode = 1;
}

function cmdSwitcher() {
  const plan = readJson(planFile, null) || die(`No site ${slug}`);
  if (plan.mode !== 'pages' || (plan.sections || []).length < 2) die('The switcher needs a page-mode site with 2+ options.');
  writePageRoutes(plan.sections);
  console.log(`Switcher added to sites/${slug}: ${plan.sections.length} options (/, ${plan.sections.slice(1).map((_, i) => `/option-${i + 2}`).join(', ')}). Next: npm run site -- check ${slug}`);
}

// Converted HTML templates keep their own CSS variables: map brand colours/fonts onto them (light touch).
// Primary = a variable named like primary/brand/accent..., else the template's most-used strong colour; accent = the
// next most-used strong colour of a different hue. Related shades (same name prefix, or same colour with alpha) follow.
function hexToRgb(h) { h = h.replace('#', ''); if (h.length === 3) h = [...h].map((c) => c + c).join(''); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); }
function rgbToHsl([r, g, b]) { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; if (mx === mn) return [0, 0, l]; const d = mx - mn, s2 = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); const h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; return [h * 60, s2, l]; }
function hslToHex([h, s2, l]) { const k = (n) => (n + h / 30) % 12, a2 = s2 * Math.min(l, 1 - l); const f = (n) => Math.round(255 * (l - a2 * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))); return '#' + [f(0), f(8), f(4)].map((c) => c.toString(16).padStart(2, '0')).join(''); }

function colourPlan(css) {
  const vars = [...css.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\b/g)].map((m) => ({ name: m[1], hex: m[2].toLowerCase() }));
  const seen = new Map();
  for (const v of vars) if (!seen.has(v.name)) seen.set(v.name, v);
  const list = [...seen.values()].map((v) => {
    const base = v.hex.length === 9 ? v.hex.slice(0, 7) : v.hex.length === 5 ? v.hex.slice(0, 4) : v.hex;
    const [h, s2, l] = rgbToHsl(hexToRgb(base));
    const uses = (css.match(new RegExp(`var\\(${v.name.replace(/[-]/g, '\\-')}\\b`, 'g')) || []).length;
    return { ...v, base: hexToRgb(base), alpha: v.hex.length === 9 ? v.hex.slice(7) : '', h, s: s2, l, uses };
  });
  const strong = list.filter((v) => v.s > 0.35 && v.l > 0.18 && v.l < 0.85 && !v.alpha);
  // An explicitly named variable (primary, brand, accent...) wins even when its colour is muted.
  const byName = (re) => list.find((v) => !v.alpha && re.test(v.name) && !/dark|light|soft|pale|bg|text|\d00/i.test(v.name));
  const ranked = [...strong].filter((v) => !/(^|-)(dark|light|soft|pale|\d00|\d)$/i.test(v.name)).sort((x, y) => y.uses - x.uses || y.s - x.s);
  const primary = byName(/primary|brand|main|theme|^--acc$|^--accent$|gold/i) || ranked[0];
  const accent = primary && (byName(/accent|secondary|highlight/i) || ranked.find((v) => v !== primary && Math.min(Math.abs(v.h - primary.h), 360 - Math.abs(v.h - primary.h)) > 40));
  const family = (root) => root ? list.filter((v) => v === root || v.name.startsWith(root.name + '-') || (v.alpha && v.base.join() === root.base.join())) : [];
  return { primary, accent: accent === primary ? null : accent, family };
}

function shade(root, v, brandHex) {
  const [bh, bs, bl] = rgbToHsl(hexToRgb(brandHex));
  if (v.alpha) return brandHex + v.alpha;
  if (v === root) return brandHex;
  return hslToHex([bh, Math.max(0, Math.min(1, bs + (v.s - root.s))), Math.max(0.03, Math.min(0.97, bl + (v.l - root.l)))]);
}

function themeTemplates(t) {
  const done = [];
  for (const f of walk(sectionsDir).filter((x) => x.endsWith('template.css'))) {
    let css = fs.readFileSync(f, 'utf8').replace(/\n?\/\* THEME:START \*\/[\s\S]*?\/\* THEME:END \*\/\n?/, '\n');
    const scope = (css.match(/^\.tpl-[a-z0-9-]+/m) || [])[0];
    if (!scope) continue;
    const plan = colourPlan(css);
    const rules = [];
    if (t.primary && plan.primary) {
      const fam = plan.family(plan.primary);
      fam.forEach((v) => rules.push(`${v.name}: ${shade(plan.primary, v, t.primary)};`));
      // Dark brand colour: keep primary buttons inside menus readable (templates often grey all nav links).
      if (rgbToHsl(hexToRgb(t.primary))[2] < 0.5) rules.push('__NAVBTN__');
      done.push(`${path.basename(path.dirname(path.dirname(f)))}: ${fam.map((v) => v.name).join(', ')} -> ${t.primary}`);
    }
    if (t.accent && plan.accent) {
      const fam = plan.family(plan.accent).filter((v) => !rules.some((r) => r.startsWith(v.name + ':')));
      fam.forEach((v) => rules.push(`${v.name}: ${shade(plan.accent, v, t.accent)};`));
      if (fam.length) done.push(`accent ${fam.map((v) => v.name).join(', ')} -> ${t.accent}`);
    }
    const extra = [];
    if (t.body) extra.push(`${scope} { font-family: "${t.body}", sans-serif; }`);
    if (t.heading) extra.push(`${scope} :is(h1,h2,h3,h4) { font-family: "${t.heading}", serif; }`);
    if (!rules.length && !extra.length) continue;
    const navBtn = rules.includes('__NAVBTN__') ? `${scope} :is(nav, header, .nav-links) a:is(.btn-primary, .btn) { color: #fff; }\n` : '';
    const vars = rules.filter((r) => r !== '__NAVBTN__');
    css = css.trimEnd() + `\n\n/* THEME:START */\n${vars.length ? `${scope} { ${vars.join(' ')} }\n` : ''}${navBtn}${extra.join('\n')}\n/* THEME:END */\n`;
    fs.writeFileSync(f, css);
  }
  if (t.body || t.heading) done.push('template fonts updated');
  return done;
}

// CSS switch that stops CSS animations/transitions site-wide.
function setMotionCss(off) {
  const f = path.join(dir, 'src', 'index.css');
  let css = fs.readFileSync(f, 'utf8').replace(/\n?\/\* MOTION:OFF \*\/[\s\S]*?\/\* \/MOTION:OFF \*\/\n?/, '\n');
  if (off) css = css.trimEnd() + '\n\n/* MOTION:OFF */\n*, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n/* /MOTION:OFF */\n';
  fs.writeFileSync(f, css);
}

function collect() {
  const index = {}, view = {};
  for (const f of copyFiles()) {
    const r = path.relative(sectionsDir, f).split(path.sep).join('/');
    const sec = r.split('/')[0].slice(0, 2);
    const items = extractStrings(fs.readFileSync(f, 'utf8'));
    items.forEach((it) => {
      const n = Object.keys(index).filter((k) => k.startsWith(`${sec}.`)).length + 1;
      const key = `${sec}.${n}`;
      index[key] = { file: r, ...it };
      (view[r.split('/')[0]] ||= {})[key] = it.text;
    });
  }
  return { index, view };
}

function cmdCopy() {
  const plan = readJson(planFile);
  const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
  const { index, view } = collect();
  writeJson(path.join(eng, 'copy-index.json'), index);
  console.log(JSON.stringify({ brief: { company: plan.company, industry: brief.industry, audience: brief.audience, tone: brief.tone || brief.style, goals: brief.goals, facts: brief.facts || brief.notes }, sections: view }));
  console.error(`\n${Object.keys(index).length} strings. Write changed ones only to ${rel(path.join(eng, 'copy.out.json'))} as {"key":"new text"} then: npm run site -- copy-apply ${slug}`);
}

function cmdCopyApply() {
  const index = readJson(path.join(eng, 'copy-index.json'), null) || die(`Run: npm run site -- copy ${slug} first`);
  const changes = readJson(a.file || path.join(eng, 'copy.out.json'));
  const byFile = {};
  const unknown = [];
  for (const [k, text] of Object.entries(changes)) {
    const it = index[k];
    if (!it) { unknown.push(k); continue; }
    if (text === it.text) continue;
    (byFile[it.file] ||= []).push({ ...it, text: String(text) });
  }
  let applied = 0;
  const skipped = [];
  for (const [file, list] of Object.entries(byFile)) {
    const f = path.join(sectionsDir, file);
    const r = applyToSource(fs.readFileSync(f, 'utf8'), list);
    fs.writeFileSync(f, r.out);
    applied += list.length - r.skipped.length;
    skipped.push(...r.skipped.map((s) => s.raw.slice(0, 30)));
  }
  fs.rmSync(path.join(eng, 'copy-index.json'));
  console.log(`Applied ${applied} text changes.${skipped.length ? ` Skipped ${skipped.length} (file changed since extract): ${skipped.join(' | ')}` : ''}${unknown.length ? ` Unknown keys: ${unknown.join(', ')}` : ''}`);
  console.log(`Next: npm run site -- check ${slug}`);
}

function cmdCheck() {
  console.log(`Building ${rel(dir)} (npm install + vite build)...`);
  const r = buildApp(dir);
  if (r.ok) console.log('PASS site builds.');
  else {
    console.log(`FAIL at ${r.stage}:`);
    console.log(r.output.split('\n').filter((l) => /error|Error|failed|Could not/.test(l)).slice(0, 15).join('\n') || r.output.slice(-1500));
    process.exitCode = 1;
  }
}
