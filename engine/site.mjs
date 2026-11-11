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
import fs from 'node:fs';
import path from 'node:path';
import { P, args, die, loadMetas, readJson, writeJson, copyDir, table, rel, categoryOf, walk } from './lib/util.mjs';
import { loadLibrary } from './lib/library.mjs';
import { parseBrief, scoreDesign, isUsable } from './lib/score.mjs';
import { buildMemory, loadEvents, record } from './lib/memory.mjs';
import { AXES } from './lib/vocab.mjs';
import { extractStrings, applyToSource, recolor, applyTheme } from './lib/sitekit.mjs';
import { buildApp } from './showcase.mjs';

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

const commands = { new: cmdNew, theme: cmdTheme, copy: cmdCopy, 'copy-apply': cmdCopyApply, check: cmdCheck, plan: () => console.log(JSON.stringify(readJson(planFile), null, 2)) };
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

// Full-page sites: first page at "/", the others at /option-2, /option-3 ... to compare.
function writePageRoutes(sections) {
  const imp = sections.map((s, i) => `import P${i + 1} from "@/sections/${s.folder}";`).join('\n');
  const routes = sections.map((s, i) => `      <Route path="${i ? `/option-${i + 1}` : '/'}" element={<P${i + 1} />} />`).join('\n');
  fs.writeFileSync(path.join(dir, 'src', 'App.tsx'), `import { BrowserRouter, Route, Routes } from "react-router-dom";\nimport NotFound from "./pages/NotFound";\n${imp}\n\nconst App = () => (\n  <BrowserRouter>\n    <Routes>\n${routes}\n      <Route path="*" element={<NotFound />} />\n    </Routes>\n  </BrowserRouter>\n);\n\nexport default App;\n`);
  fs.writeFileSync(path.join(dir, 'src', 'pages', 'Index.tsx'), `import P1 from "@/sections/${sections[0].folder}";\n\nconst Index = () => <P1 />;\n\nexport default Index;\n`);
}

// Converted HTML templates keep their own CSS variables: map brand colours/fonts onto them (light touch).
function themeTemplates(t) {
  const done = [];
  for (const f of walk(sectionsDir).filter((x) => x.endsWith('template.css'))) {
    let css = fs.readFileSync(f, 'utf8').replace(/\n?\/\* THEME:START \*\/[\s\S]*?\/\* THEME:END \*\/\n?/, '\n');
    const scope = (css.match(/^\.tpl-[a-z0-9-]+/m) || [])[0];
    if (!scope) continue;
    const vars = [...new Set([...css.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8}|rgb[^;]+)/g)].map((m) => m[1]))];
    const pickVars = (re, not) => vars.filter((v) => re.test(v) && !(not && not.test(v)));
    const rules = [];
    if (t.primary) { const v = pickVars(/primary|brand|main|theme|^--acc$|^--accent$|gold|^--color-1/i, /dark|light|rgb|bg|text|soft|pale/i); v.forEach((x) => rules.push(`${x}: ${t.primary};`)); if (v.length) done.push(`template colour vars ${v.join(', ')} -> ${t.primary}`); }
    if (t.accent) { const v = pickVars(/accent|secondary|highlight/i, /dark|light|rgb|bg|text|soft|pale/i).filter((x) => !rules.some((r) => r.startsWith(x))); v.forEach((x) => rules.push(`${x}: ${t.accent};`)); if (v.length) done.push(`template accent vars ${v.join(', ')} -> ${t.accent}`); }
    const extra = [];
    if (t.body) extra.push(`${scope} { font-family: "${t.body}", sans-serif; }`);
    if (t.heading) extra.push(`${scope} :is(h1,h2,h3,h4) { font-family: "${t.heading}", serif; }`);
    if (!rules.length && !extra.length) continue;
    css = css.trimEnd() + `\n\n/* THEME:START */\n${rules.length ? `${scope} { ${rules.join(' ')} }\n` : ''}${extra.join('\n')}\n/* THEME:END */\n`;
    fs.writeFileSync(f, css);
    if (extra.length) done.push('template fonts updated');
  }
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
