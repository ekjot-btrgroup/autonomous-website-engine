"""Convert full-page HTML templates into React page designs for the website engine (zero Claude tokens).

Usage (from the repo root):
  python3 -I engine/tools/html_page.py <templates-dir> [--group NAME] [--limit N] [--only NAME,NAME]

<templates-dir> holds one folder per template (each with index.html, its css/js and images).
For each template it writes:
  test-templates/<group>/<name>/          the original index.html, css, js, LICENSE + source.json (kept as the original)
  showcase/src/designs/<id>/index.tsx      re-export
  showcase/src/designs/<id>/code/Page.tsx  the page as JSX, wrapped in .tpl-<id>
  showcase/src/designs/<id>/code/template.css     the template CSS, scoped to .tpl-<id>
  showcase/src/designs/<id>/code/template.js      the template's own script (run after mount by @/lib/template-runtime)
  showcase/src/designs/<id>/code/assets/*  images (compressed to webp when Pillow is available)
  showcase/src/designs/<id>/meta.json      kind "page", detected page sections, style summary for tagging
Stdlib only; Pillow optional.
"""
import hashlib, html, json, os, re, shutil, subprocess, sys
from html.parser import HTMLParser

ROOT = os.path.abspath(os.environ.get("ENGINE_ROOT", os.getcwd()))
DESIGNS = os.path.join(ROOT, "showcase", "src", "designs")
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr", "param"}
IMG_EXT = (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".ico")
MEDIA_EXT = IMG_EXT + (".mp4", ".webm", ".woff", ".woff2", ".ttf", ".otf")

try:
    from PIL import Image  # optional
except Exception:  # pragma: no cover
    Image = None

# ---------------------------------------------------------------- HTML tree
class Node:
    __slots__ = ("tag", "attrs", "children", "text", "parent")
    def __init__(self, tag=None, attrs=None, text=None, parent=None):
        self.tag, self.attrs, self.children, self.text, self.parent = tag, attrs or [], [], text, parent

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root"); self.cur = self.root
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, parent=self.cur); self.cur.children.append(n)
        if tag not in VOID: self.cur = n
    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, parent=self.cur))
    def handle_endtag(self, tag):
        c = self.cur
        while c is not self.root and c.tag != tag: c = c.parent
        if c is not self.root: self.cur = c.parent
    def handle_data(self, data):
        self.cur.children.append(Node(None, text=data, parent=self.cur))

def find(node, tag):
    for c in node.children:
        if c.tag == tag: return c
        r = find(c, tag) if c.tag else None
        if r: return r
    return None

def find_all(node, tag, out=None):
    out = [] if out is None else out
    for c in node.children:
        if c.tag == tag: out.append(c)
        if c.tag: find_all(c, tag, out)
    return out

def attr(n, k):
    for a, v in n.attrs:
        if a == k: return v
    return None

# ---------------------------------------------------------------- JSX
ATTR_MAP = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "readonly": "readOnly", "maxlength": "maxLength",
            "minlength": "minLength", "colspan": "colSpan", "rowspan": "rowSpan", "srcset": "srcSet", "crossorigin": "crossOrigin",
            "autoplay": "autoPlay", "autocomplete": "autoComplete", "autofocus": "autoFocus", "enctype": "encType",
            "frameborder": "frameBorder", "allowfullscreen": "allowFullScreen", "playsinline": "playsInline", "novalidate": "noValidate",
            "datetime": "dateTime", "contenteditable": "contentEditable", "spellcheck": "spellCheck", "accept-charset": "acceptCharset",
            "http-equiv": "httpEquiv", "cellpadding": "cellPadding", "cellspacing": "cellSpacing", "usemap": "useMap",
            "formaction": "formAction", "inputmode": "inputMode", "referrerpolicy": "referrerPolicy", "marginwidth": "marginWidth",
            "marginheight": "marginHeight", "srclang": "srcLang", "hreflang": "hrefLang", "itemprop": "itemProp", "itemscope": "itemScope",
            "itemtype": "itemType", "xlink:href": "xlinkHref", "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", "viewbox": "viewBox",
            "allow": "allow", "charset": "charSet", "fetchpriority": None}
BOOL = {"disabled", "checked", "required", "hidden", "selected", "multiple", "autofocus", "readonly", "novalidate", "async", "defer",
        "controls", "loop", "muted", "playsinline", "open", "reversed", "itemscope", "allowfullscreen", "autoplay", "default", "nomodule"}
DROP_TAGS = {"script", "noscript", "link", "meta", "title", "base", "template"}

def camel(s):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), s)

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

class Converter:
    def __init__(self, tid, asset_ref):
        self.tid, self.asset_ref = tid, asset_ref  # asset_ref(url) -> JS identifier or None
        self.dropped_handlers = 0
        self.inline_styles = []

    def style_obj(self, css):
        props = []
        for decl in re.split(r";(?![^(]*\))", css):
            if ":" not in decl: continue
            k, v = decl.split(":", 1); k, v = k.strip(), v.strip()
            if not k or not v: continue
            kl = k.lower()
            key = js_str(k) if k.startswith("--") else ("ms" + camel(kl[3:])[1:] if kl.startswith("-ms-") else camel(kl))
            def repl(m):
                ident = self.asset_ref(m.group(2))
                return "url(${%s})" % ident if ident else m.group(0)
            new = re.sub(r"url\((['\"]?)([^'\")]+)\1\)", repl, v)
            props.append(f"{key}: {'`' + new.replace('`', '') + '`' if new != v else js_str(v)}")
        return "{{ " + ", ".join(props) + " }}"

    def attrs(self, n, in_svg):
        out = []
        for k, v in n.attrs:
            lk = k.lower()
            if lk.startswith("on"): self.dropped_handlers += 1; continue
            if lk == "style":
                if v: out.append(f"style={self.style_obj(v)}")
                continue
            name = ATTR_MAP.get(lk, k)
            if name is None: continue
            if in_svg and "-" in name and not name.startswith(("data-", "aria-")): name = camel(name)
            if n.tag in ("input", "textarea", "select") and lk == "value": name = "defaultValue"
            if n.tag == "input" and lk == "checked": name = "defaultChecked"
            if n.tag == "option" and lk == "selected": continue
            if lk in BOOL and (v is None or v == "" or v.lower() == lk):
                out.append(f"{name}={{true}}"); continue
            if v is None: v = ""
            if lk in ("src", "poster") or (lk == "href" and n.tag in ("image", "use")):
                ident = self.asset_ref(v)
                if ident: out.append(f"{name}={{{ident}}}"); continue
            if lk == "srcset":
                parts, changed = [], False
                for p in v.split(","):
                    bits = p.strip().split()
                    if not bits: continue
                    ident = self.asset_ref(bits[0])
                    if ident: parts.append("${%s}%s" % (ident, " " + " ".join(bits[1:]) if bits[1:] else "")); changed = True
                    else: parts.append(p.strip())
                if changed: out.append(f"{name}={{`{', '.join(parts)}`}}"); continue
            if any(c in v for c in '"{}&\\\n') : out.append(f"{name}={{{js_str(v)}}}")
            else: out.append(f'{name}="{v}"')
        return (" " + " ".join(out)) if out else ""

    def node(self, n, indent, in_svg=False, pre=False):
        pad = "  " * indent
        if n.tag is None:
            t = n.text
            if pre: return [pad + "{" + js_str(t) + "}"] if t else []
            if not t.strip(): return [pad + '{" "}'] if t else []
            t = re.sub(r"\s+", " ", t)
            if t != t.strip() or re.search(r"[{}<>&]", t): return [pad + "{" + js_str(t) + "}"]
            return [pad + t]
        tag = n.tag
        if tag in DROP_TAGS: return []
        if tag == "style":
            self.inline_styles.append("".join(c.text or "" for c in n.children)); return []
        svg = in_svg or tag == "svg"
        a = self.attrs(n, svg)
        if tag == "textarea":
            txt = "".join(c.text or "" for c in n.children)
            return [f"{pad}<textarea{a}{' defaultValue=' + '{' + js_str(txt) + '}' if txt else ''} />"]
        if tag in VOID or not n.children:
            return [f"{pad}<{tag}{a} />"]
        lines = [f"{pad}<{tag}{a}>"]
        for c in n.children: lines += self.node(c, indent + 1, svg, pre or tag == "pre")
        lines.append(f"{pad}</{tag}>")
        return lines

# ---------------------------------------------------------------- CSS scoping
def split_top(s, sep=","):
    out, depth, cur = [], 0, ""
    for ch in s:
        if ch in "([": depth += 1
        elif ch in ")]": depth -= 1
        if ch == sep and depth == 0: out.append(cur); cur = ""
        else: cur += ch
    out.append(cur)
    return out

def scope_selector(sel, scope):
    s = sel.strip()
    if not s: return s
    m = re.match(r"^(html|body|:root)\b(.*)$", s)
    if m:
        rest = m.group(2)
        rest = re.sub(r"^\s*(body|html)\b", "", rest)
        return scope + rest
    return f"{scope} {s}"

def scope_css(css, scope, url_fix):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    # @import: quoted URLs may contain ';' (Google Fonts), so match the quoted/parenthesised URL first.
    imp_re = re.compile(r"""@import\s+(?:url\(\s*)?(?:(['"])(.*?)\1|([^'"\s)]+))\s*\)?[^;]*;""", re.S)
    imports = [m.group(2) or m.group(3) for m in imp_re.finditer(css)]
    css = imp_re.sub("", css)
    css = re.sub(r"url\((['\"]?)([^'\")]+)\1\)", lambda m: f"url({url_fix(m.group(2)) or m.group(2)})", css)
    out, i, n = [], 0, len(css)
    def block_end(start):
        depth = 0
        for j in range(start, n):
            if css[j] == "{": depth += 1
            elif css[j] == "}":
                depth -= 1
                if depth == 0: return j
        return n - 1
    def walk(lo, hi):
        res, k = [], lo
        while k < hi:
            br = css.find("{", k, hi)
            if br == -1: break
            head = css[k:br].strip()
            end = block_end(br)
            body = css[br + 1:end]
            if head.startswith("@"):
                name = head.split()[0].lower()
                if name in ("@media", "@supports", "@container", "@layer", "@document"):
                    res.append(head + "{" + walk(br + 1, end) + "}")
                else:
                    res.append(head + "{" + body + "}")
            else:
                sels = [scope_selector(x, scope) for x in split_top(head)]
                res.append(", ".join(x for x in sels if x) + "{" + body + "}")
            k = end + 1
        return "\n".join(res)
    out = walk(0, n)
    return out, [u for u in imports if u.startswith("http")]

# ---------------------------------------------------------------- summary for tagging
CAT_HINTS = [("navbar", r"\b(navbar|site-nav|main-nav|nav-bar|topbar)\b"), ("hero", r"\b(hero|banner|masthead|intro|home)\b"), ("about", r"\babout\b"),
             ("services", r"\b(services?|offerings?|what-we-do)\b"), ("features", r"\b(features?|benefits?|why)\b"), ("stats", r"\b(stats?|counters?|numbers)\b"),
             ("portfolio", r"\b(portfolio|projects?|work|case)\b"), ("gallery", r"\b(gallery|photos?)\b"), ("process", r"\b(process|steps?|how)\b"),
             ("testimonials", r"\b(testimonials?|reviews?|clients?-say)\b"), ("team", r"\b(team|staff|doctors?|trainers?|chefs?)\b"),
             ("pricing", r"\b(pricing|plans?|packages?|prices?)\b"), ("faq", r"\b(faq|questions?)\b"), ("blog", r"\b(blog|news|articles?|posts?)\b"),
             ("menu", r"\b(menu|dishes)\b"), ("product", r"\b(products?|shop|collection)\b"), ("contact", r"\b(contact|booking|reservation|appointment|form)\b"),
             ("cta", r"\b(cta|call-to-action|subscribe|newsletter)\b"), ("logos", r"\b(logos?|partners?|brands?|clients?)\b"), ("footer", r"\bfooter\b")]

HEAD_WORDS = [("testimonials", r"\b(say|says|words|reviews?|testimonials?|loved by|love us|feedback|stories|kind words|appreciated|clients? think)\b"),
              ("pricing", r"\b(pricing|plans?|packages?|prices?|rates|membership|tiers?)\b"),
              ("faq", r"\b(faq|questions?|asked)\b"),
              ("contact", r"\b(contact|get in touch|reach us|book (a|an|your)|appointment|reservation|reserve|visit us|enquir|inquir)\w*"),
              ("team", r"\b(team|meet (the|our)|our people|experts|staff|crew|founders?|doctors|chefs|trainers)\b"),
              ("stats", r"\b(metrics|numbers|stats|statistics|results|impact|readouts|at a glance|in figures)\b"),
              ("process", r"\b(process|how it works|steps?|workflow|from .+ to|journey|approach)\b"),
              ("portfolio", r"\b(work|projects?|portfolio|case stud|deployments|recent|selected|showcase|our builds)\w*"),
              ("gallery", r"\b(gallery|moments|photos|inside)\b"),
              ("blog", r"\b(blog|journal|news|insights|articles|latest posts|stories from)\b"),
              ("logos", r"\b(trusted|partners|clients|brands|as seen|featured in)\b"),
              ("menu", r"\b(menu|dishes|our food|drinks|wine list)\b"),
              ("services", r"\b(services?|what we do|we offer|expertise|solutions|capabilities|specialt|treatments?|programs?|classes|offerings?|care for)\w*"),
              ("features", r"\b(features?|benefits?|why choose|why us|advantages|how we help|built for|everything you need)\b"),
              ("about", r"\b(about|our story|who we are|mission|philosophy|values|heritage|since \d{4})\b"),
              ("cta", r"\b(ready|get started|start (your|today|now)|join|try|free trial|download|subscribe|let.s talk|newsletter)\b")]

def all_classes(n):
    out = []
    for c in n.children:
        if c.tag:
            out += [attr(c, "id") or "", attr(c, "class") or ""] + all_classes(c)
    return out

def block_category(n):
    if n.tag in ("header", "nav"): return "navbar"
    if n.tag == "footer": return "footer"
    txt = re.sub(r"\s+", " ", text_of(n)).strip()
    if n.tag in ("button", "a") or (len(txt) < 25 and not find_all(n, "img")): return None  # utility bits (back-to-top, scrims)
    own = " ".join(filter(None, [attr(n, "id"), attr(n, "class")])).lower().replace("_", "-")
    for cat, rx in CAT_HINTS:
        if cat not in ("navbar", "footer") and re.search(rx, own): return cat
    if find_all(n, "h1"): return "hero"
    heads = " ".join(text_of(h) for tag in ("h2", "h3") for h in find_all(n, tag)[:1]).lower()
    for cat, rx in HEAD_WORDS:
        if re.search(rx, heads): return cat
    inner = " ".join(all_classes(n)).lower().replace("_", "-")
    if find_all(n, "blockquote") or re.search(r"\b(testimonial|quote|review)", inner): return "testimonials"
    if find_all(n, "form") or find_all(n, "input"): return "contact"
    if find_all(n, "details") or re.search(r"\b(faq|accordion)", inner): return "faq"
    if len(re.findall(r"[$€£]\s?\d+|/\s?(mo|month|yr|year)\b", txt)) >= 2: return "pricing"
    if len(re.findall(r"\b\d+(\.\d+)?\s?(%|\+|k\b|x\b)", txt)) >= 3 or re.search(r"\b(counter|stat|metric)", inner): return "stats"
    for cat, rx in CAT_HINTS:
        if cat not in ("navbar", "footer", "hero") and re.search(rx, inner): return cat
    if len(find_all(n, "img")) >= 6: return "gallery"
    if len(find_all(n, "h3")) >= 3: return "features"
    if len(txt) < 400 and (find_all(n, "a") or find_all(n, "button")): return "cta"
    return "about" if len(txt) > 120 else None

def text_of(n):
    if n.tag is None: return n.text
    if n.tag in ("script", "style"): return ""
    return " ".join(text_of(c) for c in n.children)

def top_blocks(body):
    blocks = [c for c in body.children if c.tag and c.tag not in DROP_TAGS and c.tag != "style"]
    # unwrap a single page wrapper (div#wrapper, main, etc.)
    while len(blocks) <= 2 and blocks:
        big = max(blocks, key=lambda b: len(text_of(b)))
        inner = [c for c in big.children if c.tag and c.tag not in DROP_TAGS]
        if len(inner) < 3: break
        blocks = [b for b in blocks if b is not big] + inner
    return blocks

def css_features(css):
    hexes = re.findall(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b", css)
    norm = [h.lower() if len(h) == 6 else "".join(c * 2 for c in h.lower()) for h in hexes]
    counts = {}
    for h in norm: counts[h] = counts.get(h, 0) + 1
    palette = [f"#{h}" for h, _ in sorted(counts.items(), key=lambda x: -x[1])[:6]]
    radii = [float(x) for x in re.findall(r"border-radius:\s*([0-9.]+)px", css)]
    return {
        "palette": palette,
        "radius_px": round(sum(radii) / len(radii)) if radii else 0,
        "gradients": len(re.findall(r"gradient\(", css)),
        "shadows": len(re.findall(r"box-shadow", css)),
        "keyframes": len(re.findall(r"@keyframes", css)),
        "transitions": len(re.findall(r"transition", css)),
        "uppercase": len(re.findall(r"text-transform:\s*uppercase", css)),
        "glass": len(re.findall(r"backdrop-filter", css)),
    }

def luminance(hexs):
    h = hexs.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def page_background(css):
    m = re.search(r"body\s*\{[^}]*background(?:-color)?:\s*(#[0-9a-fA-F]{3,6})", css)
    if not m:
        m = re.search(r"--(?:bg|background|body-bg|color-bg)[\w-]*:\s*(#[0-9a-fA-F]{3,6})", css)
    if not m: return None
    h = m.group(1).lstrip("#"); h = "".join(c * 2 for c in h) if len(h) == 3 else h
    return "dark" if luminance(h) < 0.35 else "light"

# ---------------------------------------------------------------- assets
def slugify(s, n=40):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:n].rstrip("-") or "item"

def compress(src, dest_dir, name):
    ext = os.path.splitext(src)[1].lower()
    if Image and ext in (".png", ".jpg", ".jpeg", ".webp"):
        try:
            im = Image.open(src)
            if im.mode in ("P", "LA"): im = im.convert("RGBA")
            if im.width > 1920: im = im.resize((1920, round(im.height * 1920 / im.width)))
            out = os.path.join(dest_dir, os.path.splitext(name)[0] + ".webp")
            im.save(out, "WEBP", quality=76, method=5)
            return os.path.basename(out)
        except Exception:
            pass
    shutil.copyfile(src, os.path.join(dest_dir, name))
    return name

# ---------------------------------------------------------------- main
def convert(tpl_dir, group, repo_url=None):
    name = os.path.basename(tpl_dir.rstrip("/"))
    index = os.path.join(tpl_dir, "index.html")
    raw = open(index, encoding="utf-8", errors="ignore").read()
    tb = TreeBuilder(); tb.feed(raw)
    root = tb.root
    head, body = find(root, "head") or root, find(root, "body") or root

    css_files = [attr(l, "href") for l in find_all(head, "link") + find_all(body, "link")
                 if "stylesheet" in (attr(l, "rel") or "") and attr(l, "href") and not attr(l, "href").startswith("http")]
    ext_links = [attr(l, "href") for l in find_all(head, "link") + find_all(body, "link")
                 if "stylesheet" in (attr(l, "rel") or "") and (attr(l, "href") or "").startswith("http")]
    js_files = [attr(s, "src") for s in find_all(root, "script") if attr(s, "src") and not attr(s, "src").startswith("http")]
    ext_js = [attr(s, "src") for s in find_all(root, "script") if (attr(s, "src") or "").startswith("http")]
    inline_js = [text_of(s) for s in find_all(root, "script") if not attr(s, "src") and (attr(s, "type") or "text/javascript") in ("text/javascript", "module", "")]

    content = hashlib.sha256()
    for p in [index] + [os.path.join(tpl_dir, f.lstrip("/")) for f in css_files + js_files]:
        if os.path.exists(p): content.update(open(p, "rb").read())
    hid = content.hexdigest()
    did = f"{slugify(re.sub(r'-html-template$', '', name), 32)}-{hid[:4]}"
    dest = os.path.join(DESIGNS, did)
    code = os.path.join(dest, "code"); assets = os.path.join(code, "assets")
    shutil.rmtree(dest, ignore_errors=True); os.makedirs(assets, exist_ok=True)

    # originals (text files) for the test-templates folder
    orig = os.path.join(ROOT, "test-templates", group, name)
    shutil.rmtree(orig, ignore_errors=True); os.makedirs(orig, exist_ok=True)
    for f in ["index.html", "LICENSE", "LICENSE.md", "README.md"] + css_files + js_files:
        p = os.path.join(tpl_dir, f.lstrip("/"))
        if os.path.exists(p):
            d = os.path.join(orig, f.lstrip("/")); os.makedirs(os.path.dirname(d), exist_ok=True); shutil.copyfile(p, d)

    imports, ident_of = [], {}
    def asset_from(url, base_dir):
        if not url or url.startswith(("http:", "https:", "data:", "#", "mailto:", "tel:", "//")): return None
        clean = url.split("?")[0].split("#")[0]
        if not clean.lower().endswith(MEDIA_EXT): return None
        p = os.path.normpath(os.path.join(tpl_dir, clean.lstrip("/")) if clean.startswith("/") else os.path.join(tpl_dir, base_dir, clean))
        if not os.path.exists(p): return None
        if p in ident_of: return ident_of[p]
        stem = slugify(os.path.splitext(os.path.basename(p))[0], 30) + os.path.splitext(p)[1].lower()
        while os.path.exists(os.path.join(assets, os.path.splitext(stem)[0] + ".webp")) or os.path.exists(os.path.join(assets, stem)):
            stem = f"x{len(ident_of)}-{stem}"
        out = compress(p, assets, stem)
        ident = f"a{len(ident_of)}"
        ident_of[p] = ident
        imports.append((ident, f"./assets/{out}", out))
        return ident

    # CSS
    scope = f".tpl-{did}"
    css_all, css_links = "", []
    for f in css_files:
        p = os.path.join(tpl_dir, f.lstrip("/"))
        if not os.path.exists(p): continue
        base = os.path.dirname(f.lstrip("/"))
        def fix(u, base=base):
            ident = asset_from(u, base)
            return f"./assets/{next(i[2] for i in imports if i[0] == ident)}" if ident else None
        scoped, links = scope_css(open(p, encoding="utf-8", errors="ignore").read(), scope, fix)
        css_all += f"/* {f} (scoped to {scope}) */\n" + scoped + "\n"; css_links += links

    conv = Converter(did, lambda u: asset_from(u, ""))
    for st in find_all(head, "style"): conv.inline_styles.append("".join(c.text or "" for c in st.children))
    blocks = top_blocks(body)
    jsx_lines = []
    for c in body.children: jsx_lines += conv.node(c, 3)
    for st in conv.inline_styles:
        scoped, links = scope_css(st, scope, lambda u: None); css_all += scoped + "\n"; css_links += links
    open(os.path.join(code, "template.css"), "w").write(css_all)

    js_text = ""
    for f in js_files:
        p = os.path.join(tpl_dir, f.lstrip("/"))
        if os.path.exists(p): js_text += f"\n/* {f} */\n" + open(p, encoding="utf-8", errors="ignore").read()
    for t in inline_js:
        if t.strip(): js_text += "\n/* inline */\n" + t
    open(os.path.join(code, "template.js"), "w").write(js_text)

    body_class = " ".join(filter(None, [f"tpl-{did}", attr(body, "class") or ""]))
    links = list(dict.fromkeys(ext_links + css_links))
    page = ["// Converted from the HTML template " + name + " by engine/tools/html_page.py. Edit text via `npm run site -- copy`.",
            'import "./template.css";', 'import templateScript from "./template.js?raw";',
            'import { useTemplateRuntime } from "@/lib/template-runtime";']
    page += [f'import {i} from "{p}";' for i, p, _ in imports]
    page += ["", f"const LINKS: string[] = {json.dumps(links)};", f"const SCRIPTS: string[] = {json.dumps(ext_js)};", "",
             "export default function Page() {", "  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);", "  return (",
             f'    <div ref={{ref}} className="{body_class}">'] + jsx_lines + ["    </div>", "  );", "}", ""]
    open(os.path.join(code, "Page.tsx"), "w").write("\n".join(page))
    open(os.path.join(dest, "index.tsx"), "w").write('export { default } from "./code/Page";\n')

    # summary + meta
    sections = [c for c in (block_category(b) for b in blocks) if c]
    seen = []
    for s in sections:
        if s not in seen: seen.append(s)
    heads = [re.sub(r"\s+", " ", text_of(h)).strip()[:90] for h in find_all(body, "h1") + find_all(body, "h2")][:6]
    ctas = [re.sub(r"\s+", " ", text_of(a)).strip()[:30] for a in find_all(body, "a") + find_all(body, "button")
            if re.search(r"btn|button|cta", (attr(a, "class") or "") + a.tag)][:6]
    fonts = re.findall(r"family=([^:&]+)", " ".join(links))
    feats = css_features(css_all)
    js_motion = bool(re.search(r"IntersectionObserver|animate|scroll|slider|carousel|swiper|counter|typed|parallax", js_text, re.I))
    meta = {
        "id": did, "name": re.sub(r"\s+", " ", name.replace("-html-template", "").replace("-", " ")).title(),
        "kind": "page", "status": "ok", "issues": [],
        "source": {"folder": name, "format": "html-page", "hash": hid, "original": f"test-templates/{group}/{name}",
                   "repo": repo_url, "group": group},
        "entry": "code/Page.tsx", "deps": [], "page_sections": seen,
        "summary": {"headings": heads, "ctas": list(dict.fromkeys(ctas))[:4], "texts": [], "colors": feats["palette"],
                    "dark": {"dark": True, "light": False}.get(page_background(css_all)), "fonts": [f.replace("+", " ") for f in fonts],
                    "images": len(imports), "motion": js_motion or feats["keyframes"] > 0, "lines": len(jsx_lines),
                    "css": feats, "sections": seen},
        "guess": {"category": "page", "confidence": 1},
        "tags": None, "added_at": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat().replace("+00:00", "Z"),
    }
    if conv.dropped_handlers: meta["issues"].append(f"{conv.dropped_handlers} inline on* handlers removed (template script still runs)")
    json.dump(meta, open(os.path.join(dest, "meta.json"), "w"), indent=2)
    json.dump({"name": name, "repo": repo_url, "design_id": did, "license": "see LICENSE (MIT per upstream README)",
               "note": "Original text files; images stay in the upstream repo at the recorded commit."},
              open(os.path.join(orig, "source.json"), "w"), indent=2)
    return did, meta

def main(argv):
    if not argv: print(__doc__); return 1
    src = os.path.abspath(argv[0]); group = "templates"; limit = None; only = None
    if "--group" in argv: group = argv[argv.index("--group") + 1]
    if "--limit" in argv: limit = int(argv[argv.index("--limit") + 1])
    if "--only" in argv: only = set(argv[argv.index("--only") + 1].split(","))
    names = sorted(d for d in os.listdir(src) if os.path.isfile(os.path.join(src, d, "index.html")))
    if only: names = [n for n in names if n in only]
    if limit: names = names[:limit]
    ok = 0
    for n in names:
        d = os.path.join(src, n)
        repo, sha = None, None
        try:
            repo = subprocess.run(["git", "-C", d, "remote", "get-url", "origin"], capture_output=True, text=True).stdout.strip() or None
            sha = subprocess.run(["git", "-C", d, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip() or None
        except Exception: pass
        try:
            did, meta = convert(d, group, repo)
            if sha:
                sp = os.path.join(ROOT, "test-templates", group, n, "source.json"); s = json.load(open(sp)); s["commit"] = sha; json.dump(s, open(sp, "w"), indent=2)
                mp = os.path.join(DESIGNS, did, "meta.json"); m = json.load(open(mp)); m["source"]["commit"] = sha; json.dump(m, open(mp, "w"), indent=2)
            ok += 1
            print(f"ok   {did:40s} sections={','.join(meta['page_sections'])} images={meta['summary']['images']}")
        except Exception as e:
            print(f"FAIL {n}: {type(e).__name__}: {e}")
    print(f"\nConverted {ok}/{len(names)} templates into page designs.")
    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
