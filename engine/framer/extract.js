// Read-only Framer reference extractor. Runs inside Framer via the Framer MCP `exec` tool.
// Returns the homepage's design DNA: type system, colour tokens, sections (geometry, layout, content shape,
// effects), components, nav/footer, motion samples and two screenshots (desktop full page, phone full page).
// It never changes the project (changedNodeCount must stay 0). Text content is counted, never returned.
const { tree } = api
const out = { title: tree.title }
const pages = tree.getNodesOfTypes("WebPageNode")
out.pages = pages.filter(p => p.path).map(p => p.path).slice(0, 40)
const home = pages.find(p => p.path === "/") || pages[0]
out.breakpoints = (home.$breakpoints || []).map(b => ({ name: b.name, range: b.mediaQueryRange }))
const bps = home.children || []
const desktop = bps[0]
const phone = bps.find(b => /phone|mobile/i.test(b.name || "")) || bps[bps.length - 1]
const tokens = {}
for (const c of tree.getNodesOfTypes("ColorStyleTokenNode")) tokens[c.id] = c.name
const tok = (v) => typeof v === "string" ? v.replace(/var\(--token-([^)]+)\)/g, (_, id) => "token:" + (tokens[id] || id)) : v
out.colors = tree.getNodesOfTypes("ColorStyleTokenNode").map(c => ({ name: c.name, light: c.light, dark: c.dark || undefined }))
out.textStyles = tree.getNodesOfTypes("TextStylePresetNode").map(t => ({ name: t.name, tag: t.tag, font: t.fontName, weight: t.fontWeight, style: t.fontStyle, size: t.fontSize, tracking: t.letterSpacing, leading: t.lineHeight, transform: t.textTransform, color: tok(t.textColor), responsive: t.breakpoint ? Object.fromEntries(Object.entries(t.breakpoint).map(([k, v]) => [k, v.fontSize])) : undefined }))
out.components = tree.getNodesOfTypes("ComponentNode").map(c => c.name).filter(Boolean).slice(0, 60)
out.pageEffects = home.children?.[0]?.pageEffects ? Object.keys(home.children[0].pageEffects).length : 0

// layout template (nav/footer)
const lt = desktop?.$layoutTemplateId ? tree.get(desktop.$layoutTemplateId) : null
const ltBp = lt?.children?.[0]
const chrome = []
if (ltBp) for (const c of ltBp.children || []) chrome.push({ type: c.type, name: c.name, comp: c.$componentDisplayName, position: c.position })
let chromeTop = 0
// Count only in-flow header bars. Smooth-scroll, cursor and other helper components often report a fake 200/400px
// height; skip them, and skip tall blocks that are not named like a header. refshots.py also checks the result
// against the real screenshot height and drops an offset that does not fit.
const isHelper = (c) => /smooth|scroll|lenis|cursor|embed|code|script|analytics|preloader|loader/i.test(`${c.name || ""} ${c.$componentDisplayName || ""}`)
const isHeader = (c) => /nav|header|menu|top ?bar|banner|announcement/i.test(`${c.name || ""} ${c.$componentDisplayName || ""}`)
if (ltBp) for (const c of ltBp.children || []) {
  if (c.type === "PlaceholderNode") break
  if (c.position === "fixed" || c.position === "absolute" || c.position === "sticky" || c.visible === false || isHelper(c)) continue
  const r = await tree.getRect(c); const h = r ? Math.round(r.height) : 0
  if (h > 160 && !isHeader(c)) continue
  chromeTop += h
}
out.chromeTop = chromeTop // header height above the first section in the page screenshot
out.layoutTemplate = lt ? { name: lt.name, children: chrome, fill: tok(ltBp?.fill) } : null

// find the section list: descend through single-child wrappers
let root = desktop
for (let i = 0; i < 6; i++) {
  const kids = (root.children || []).filter(k => k.visible !== false)
  if (kids.length >= 3 || !kids.length) break
  root = kids.sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0))[0]
}
const bpRect = await tree.getRect(desktop)
const fx = (n) => { const e = []; for (const k of ["appearEffect", "hoverEffect", "styleTransformEffect", "loopEffect", "tickerEffect", "parallaxEffect", "textEffect", "scrollVariantEffect", "dragEffect", "tapEffect"]) if (n[k]) e.push(k.replace("Effect", "")); if (n.position === "sticky") e.push("sticky"); if (n.position === "fixed") e.push("fixed"); return e }
const samples = {}
const allFx = {}
const fontUse = {}
const radii = {}
let shadows = 0, borders = 0, blur = 0
function scan(node, acc) {
  for (const n of tree.walk(node)) {
    for (const k of fx(n)) { allFx[k] = (allFx[k] || 0) + 1; acc.fx[k] = (acc.fx[k] || 0) + 1; if (!samples[k] && n[k + "Effect"]) samples[k] = n[k + "Effect"] }
    if (n.type === "RichTextNode" || n.type === "TextRun") { const t = tree.getInnerText(n) || n.text || ""; if (n.type === "RichTextNode") { acc.text++; acc.words += String(t).split(/\s+/).filter(Boolean).length } if (n.fontName) fontUse[n.fontName] = (fontUse[n.fontName] || 0) + 1; if (n.textStylePreset) acc.styles[n.textStylePreset] = (acc.styles[n.textStylePreset] || 0) + 1 }
    if (typeof n.fill === "string" && n.fill.startsWith("data:framer/asset-reference")) acc.images++
    if (n.media) acc.images++
    if (n.type === "ComponentInstanceNode" && n.$componentDisplayName) acc.comps[n.$componentDisplayName] = (acc.comps[n.$componentDisplayName] || 0) + 1
    if (n.type === "IconNode") acc.icons++
    if (n.type === "ShaderNode") acc.shaders.push(n.shader)
    if (n.type === "FormPlainTextInputNode") acc.inputs++
    if (n.layout === "grid" && n.gridColumnCount) acc.grids.push(n.gridColumnCount)
    if (typeof n.radius === "string") radii[n.radius] = (radii[n.radius] || 0) + 1
    if (n.boxShadows?.length || n.shadows?.length) shadows++
    if (n.border || n.borderWidth) borders++
    if (n.backgroundBlur) blur++
  }
}
const sections = []
for (const s of (root.children || []).filter(k => k.visible !== false).slice(0, 22)) {
  const r = await tree.getRect(s)
  const acc = { fx: {}, text: 0, words: 0, images: 0, comps: {}, icons: 0, shaders: [], inputs: 0, grids: [], styles: {} }
  scan(s, acc)
  const kids = (s.children || []).filter(k => k.visible !== false)
  sections.push({
    name: s.name, type: s.type, comp: s.$componentDisplayName,
    y: r && bpRect ? Math.round(r.y - bpRect.y) : null, h: r ? Math.round(r.height) : null, w: r ? Math.round(r.width) : null,
    fill: tok(s.fill), layout: s.layout, dir: s.stackDirection, padding: s.padding, gap: s.gap, maxWidth: s.maxWidth,
    childNames: kids.slice(0, 8).map(k => k.name || k.type),
    text: acc.text, words: acc.words, images: acc.images, icons: acc.icons, inputs: acc.inputs, grids: acc.grids.slice(0, 4),
    components: acc.comps, shaders: acc.shaders.length ? acc.shaders : undefined, effects: acc.fx,
    styles: Object.fromEntries(Object.entries(acc.styles).map(([k, v]) => [tree.get(k)?.name || k, v])),
  })
}
out.sections = sections
out.effects = allFx
out.effectSamples = samples
out.fontsUsed = fontUse
out.radii = Object.entries(radii).sort((a, b) => b[1] - a[1]).slice(0, 6)
out.surfaces = { shadows, borders, blur }
out.desktopFill = tok(desktop.fill || ltBp?.fill)
out.pageHeight = bpRect ? Math.round(bpRect.height) : null
const shots = await Promise.allSettled([tree.screenshot(home.id), phone && phone !== desktop ? tree.screenshot(phone.id) : Promise.reject("no phone")])
out.screenshots = { desktop: shots[0].value || null, phone: shots[1].value || null, desktopWidth: bpRect ? Math.round(bpRect.width) : null }
return out
