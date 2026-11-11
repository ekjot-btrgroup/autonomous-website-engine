// Converted from the HTML template documentation-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bootstrap-documentation-templa.webp";
import a1 from "./assets/pill.webp";
import a2 from "./assets/circle.webp";
import a3 from "./assets/rounded.webp";
import a4 from "./assets/thumbnail.webp";
import a5 from "./assets/responsive.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=IBM+Plex+Sans:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-documentation-7070">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="nav-logo">
              {" "}
              <span className="nav-logo-icon" aria-hidden="true">
                📘
              </span>
              {" DocuKit "}
            </a>
            {" "}
            <div className="docs-search">
              {" "}
              <svg className="docs-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              {" "}
              <input type="search" className="docs-search-input" placeholder="Search docs, components, API…" aria-label="Search the documentation" />
              {" "}
              <kbd className="docs-search-kbd">
                Ctrl K
              </kbd>
              {" "}
            </div>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="#getting-started" className="nav-link active">
                Overview
              </a>
              {" "}
              <a href="#components" className="nav-link">
                Components
              </a>
              {" "}
              <a href="#api" className="nav-link">
                API
              </a>
              {" "}
              <a href="#theming" className="nav-link">
                Theming
              </a>
              {" "}
              <a href="#api" className="nav-cta">
                Get Started
              </a>
              {" "}
            </div>
            {" "}
            <div className="docs-version">
              {" "}
              <select className="docs-version-select" aria-label="Documentation version">
                {" "}
                <option>
                  v2.4.0
                </option>
                {" "}
                <option>
                  v2.3.1
                </option>
                {" "}
                <option>
                  v2.2.0
                </option>
                {" "}
                <option>
                  v1.9.4
                </option>
                {" "}
              </select>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="page-hero">
        {" "}
        <div className="container page-hero-inner">
          {" "}
          <div>
            {" "}
            <nav className="crumbs" aria-label="Breadcrumb">
              {" "}
              <a href="index.html">
                Home
              </a>
              {" "}
              <span className="sep">
                /
              </span>
              {" "}
              <span>
                Documentation
              </span>
              {" "}
            </nav>
            {" "}
            <h1>
              DocuKit Documentation
            </h1>
            {" "}
            <p>
              A clean, framework-free documentation site and API reference. Everything you need to ship beautiful developer docs — no build step required.
            </p>
            {" "}
          </div>
          {" "}
          <div className="hero-badges">
            {" "}
            <span className="tag blue">
              v2.4.0
            </span>
            {" "}
            <span className="tag sky">
              MIT License
            </span>
            {" "}
            <span className="tag">
              12.4k ★
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <div className="docs-layout container has-toc">
        {" "}
        {" "}
        <button className="docs-sidebar-toggle" aria-expanded="false">
          {" "}
          <span>
            ☰
          </span>
          {" Table of Contents "}
        </button>
        {" "}
        <aside className="docs-sidebar" aria-label="Documentation sections">
          {" "}
          <nav className="docs-nav">
            {" "}
            <p className="docs-nav-label">
              Getting Started
            </p>
            {" "}
            <a href="#getting-started" className="docs-nav-link active">
              <span className="dot" />
              Introduction
            </a>
            {" "}
            <a href="#installation" className="docs-nav-link">
              <span className="dot" />
              Installation
            </a>
            {" "}
            <a href="#usage" className="docs-nav-link">
              <span className="dot" />
              Usage
            </a>
            {" "}
            <p className="docs-nav-label">
              Guide
            </p>
            {" "}
            <a href="#components" className="docs-nav-link">
              <span className="dot" />
              Components
            </a>
            {" "}
            <a href="#responsive" className="docs-nav-link">
              <span className="dot" />
              Responsive Grid
            </a>
            {" "}
            <a href="#theming" className="docs-nav-link">
              <span className="dot" />
              Theming
            </a>
            {" "}
            <p className="docs-nav-label">
              Reference
            </p>
            {" "}
            <a href="#api" className="docs-nav-link">
              <span className="dot" />
              API Reference
            </a>
            {" "}
            <a href="#accessibility" className="docs-nav-link">
              <span className="dot" />
              Accessibility
            </a>
            {" "}
            <div className="docs-nav-side">
              {" "}
              <a href="404.html" className="mini">
                📃 Changelog
              </a>
              {" "}
              <a href="404.html" className="mini">
                🎟 Examples
              </a>
              {" "}
              <a href="404.html" className="mini">
                ✉ Support
              </a>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
        </aside>
        {" "}
        {" "}
        <main className="docs-main" id="main">
          {" "}
          {" "}
          <section id="getting-started" className="docs-section">
            {" "}
            <span className="section-kicker">
              Getting Started
            </span>
            {" "}
            <h2>
              {"Introduction "}
              <a href="#getting-started" className="section-anchor" aria-label="Link to Introduction">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              DocuKit gives you a complete documentation site out of the box — a sticky sidebar, a content column, a mini table of contents, and beautifully styled code blocks. Built with semantic HTML5, CSS custom properties, and vanilla JavaScript.
            </p>
            {" "}
            <p>
              Every section is anchored, every code block is copy-ready, and the whole layout adapts from a large desktop monitor down to a phone. No frameworks, no dependencies, no build tools.
            </p>
            {" "}
            <ul className="feature-list">
              {" "}
              <li>
                <span className="fi">
                  ⚡
                </span>
                <div>
                  <strong>
                    Zero build step
                  </strong>
                  <span>
                    {"Open "}
                    <code className="inline-code">
                      index.html
                    </code>
                    {" and go."}
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="fi">
                  🌀
                </span>
                <div>
                  <strong>
                    Design tokens
                  </strong>
                  <span>
                    Colors, fonts and spacing as CSS variables.
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="fi">
                  ⚛
                </span>
                <div>
                  <strong>
                    Copy buttons
                  </strong>
                  <span>
                    One click copies any code snippet.
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="fi">
                  🔎
                </span>
                <div>
                  <strong>
                    Instant search
                  </strong>
                  <span>
                    Filters the sidebar as you type.
                  </span>
                </div>
              </li>
              {" "}
            </ul>
            {" "}
            <div className="screenshot-frame reveal">
              {" "}
              <img src={a0} alt="The DocuKit documentation template rendered in a browser with a sidebar, content column and code blocks" loading="lazy" width="800" height="500" />
              {" "}
              <p className="screenshot-caption">
                <span>
                  📷
                </span>
                {" DocuKit renders a full docs site with sidebar navigation, syntax-highlighted code and an API table."}
              </p>
              {" "}
            </div>
            {" "}
            <h3>
              Quick start
            </h3>
            {" "}
            <p>
              Clone the template, open it in your editor, and start writing. Here is the fastest way to get a local preview running:
            </p>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  terminal
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-com">
                    {"# clone the template"}
                  </span>
                  {"\n"}
                  <span className="tok-kw">
                    {"git"}
                  </span>
                  {" clone "}
                  <span className="tok-str">
                    {"https://github.com/uiuxlabz/docukit.git"}
                  </span>
                  {"\n"}
                  <span className="tok-kw">
                    {"cd"}
                  </span>
                  {" docukit\n\n"}
                  <span className="tok-com">
                    {"# serve it locally"}
                  </span>
                  {"\n"}
                  <span className="tok-kw">
                    {"npx"}
                  </span>
                  {" serve . "}
                  <span className="tok-num">
                    {"-l"}
                  </span>
                  {" "}
                  <span className="tok-num">
                    {"3000"}
                  </span>
                  {"\n"}
                  <span className="tok-com">
                    {"# open http://localhost:3000"}
                  </span>
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <div className="callout callout-info">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                ℹ
              </span>
              {" "}
              <div>
                <strong>
                  New to DocuKit?
                </strong>
                {" Start here — this page walks through installation, usage, components, theming and the API reference in order."}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="installation" className="docs-section">
            {" "}
            <span className="section-kicker">
              Getting Started
            </span>
            {" "}
            <h2>
              {"Installation "}
              <a href="#installation" className="section-anchor" aria-label="Link to Installation">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              {"Install DocuKit with your package manager of choice. Because it is framework-free, you only copy two files — "}
              <code className="inline-code">
                style.css
              </code>
              {" and "}
              <code className="inline-code">
                main.js
              </code>
              {" — into your project."}
            </p>
            {" "}
            <h3>
              npm
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  terminal
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-kw">
                    {"npm"}
                  </span>
                  {" install docukit"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              yarn
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  terminal
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-kw">
                    {"yarn"}
                  </span>
                  {" add docukit"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              pnpm
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  terminal
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-kw">
                    {"pnpm"}
                  </span>
                  {" add docukit"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              Scaffold a new docs site with the CLI
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  terminal
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-kw">
                    {"npx"}
                  </span>
                  {" docukit init "}
                  <span className="tok-str">
                    {"my-docs"}
                  </span>
                  {"\n"}
                  <span className="tok-kw">
                    {"cd"}
                  </span>
                  {" my-docs\n"}
                  <span className="tok-kw">
                    {"npx"}
                  </span>
                  {" docukit dev"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <div className="callout callout-tip">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                💡
              </span>
              {" "}
              <div>
                <strong>
                  Prefer a single file?
                </strong>
                {" Grab "}
                <code className="inline-code">
                  assets/css/style.css
                </code>
                {" and drop it in — the template works with a plain link tag and one script tag."}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="usage" className="docs-section">
            {" "}
            <span className="section-kicker">
              Getting Started
            </span>
            {" "}
            <h2>
              {"Usage "}
              <a href="#usage" className="section-anchor" aria-label="Link to Usage">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              Wire up the stylesheet and script, then write your sections. The sidebar, mini-TOC and search all activate from a few lines of markup.
            </p>
            {" "}
            <h3>
              Link the assets
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  index.html
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-tag">
                    {"<head>"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<link"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"rel"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"stylesheet\""}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"href"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"assets/css/style.css\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"</head>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"<body>"}
                  </span>
                  {"\n  "}
                  <span className="tok-com">
                    {"<!-- … docs layout … -->"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<script"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"src"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"assets/js/main.js\""}
                  </span>
                  <span className="tok-tag">
                    {"></script>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"</body>"}
                  </span>
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              Initialize the sidebar
            </h3>
            {" "}
            <p>
              {"Give each section an "}
              <code className="inline-code">
                id
              </code>
              , then link to it from the sidebar. DocuKit keeps the active link in sync as you scroll.
            </p>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  index.html
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-tag">
                    {"<aside"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"docs-sidebar\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<a"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"href"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"#installation\""}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"docs-nav-link\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"Installation"}
                  <span className="tok-tag">
                    {"</a>"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<a"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"href"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"#components\""}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"docs-nav-link\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"Components"}
                  <span className="tok-tag">
                    {"</a>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"</aside>"}
                  </span>
                  {"\n\n"}
                  <span className="tok-tag">
                    {"<main>"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<section"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"id"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"installation\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {" "}
                  <span className="tok-com">
                    {"<!-- … -->"}
                  </span>
                  {" "}
                  <span className="tok-tag">
                    {"</section>"}
                  </span>
                  {"\n  "}
                  <span className="tok-tag">
                    {"<section"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"id"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"components\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {" "}
                  <span className="tok-com">
                    {"<!-- … -->"}
                  </span>
                  {" "}
                  <span className="tok-tag">
                    {"</section>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"</main>"}
                  </span>
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              Configure options
            </h3>
            {" "}
            <p>
              {"Behavior is controlled through "}
              <code className="inline-code">
                data-*
              </code>
              {" attributes, so there is no config file to maintain."}
            </p>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  main.js
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-com">
                    {"// options passed via data attributes"}
                  </span>
                  {"\n"}
                  <span className="tok-kw">
                    {"const"}
                  </span>
                  {" "}
                  <span className="tok-fn">
                    {"docukit"}
                  </span>
                  {"({\n  sidebar: "}
                  <span className="tok-str">
                    {"'sticky'"}
                  </span>
                  {",   "}
                  <span className="tok-com">
                    {"// sticky | overlay | off"}
                  </span>
                  {"\n  search:  "}
                  <span className="tok-var">
                    {"true"}
                  </span>
                  {",         "}
                  <span className="tok-com">
                    {"// sidebar filter on keyup"}
                  </span>
                  {"\n  toc:     "}
                  <span className="tok-str">
                    {"'right'"}
                  </span>
                  {",     "}
                  <span className="tok-com">
                    {"// right mini table of contents"}
                  </span>
                  {"\n  smooth:  "}
                  <span className="tok-var">
                    {"true"}
                  </span>
                  {"          "}
                  <span className="tok-com">
                    {"// animated anchor scrolling"}
                  </span>
                  {"\n})"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <div className="callout callout-warn">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                ⚠
              </span>
              {" "}
              <div>
                <strong>
                  Anchor IDs must be unique.
                </strong>
                {" Duplicate "}
                <code className="inline-code">
                  id
                </code>
                {" values break sidebar highlighting and mini-TOC links."}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="components" className="docs-section">
            {" "}
            <span className="section-kicker">
              Guide
            </span>
            {" "}
            <h2>
              {"Components "}
              <a href="#components" className="section-anchor" aria-label="Link to Components">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              A small library of ready-made UI components. Each one ships as markup plus a few classes — copy the snippet, drop in your content, done.
            </p>
            {" "}
            <div className="component-grid">
              {" "}
              <article className="component-card reveal">
                {" "}
                <div className="component-card-media">
                  {" "}
                  <span className="component-card-tag">
                    Badge
                  </span>
                  {" "}
                  <img src={a1} alt="Pill-shaped badge component preview" loading="lazy" width="500" height="400" />
                  {" "}
                </div>
                {" "}
                <div className="component-card-body">
                  {" "}
                  <h3>
                    Pill Badge
                  </h3>
                  {" "}
                  <p>
                    A rounded pill label for statuses, counts and categories. Ships in blue, sky and neutral variants.
                  </p>
                  {" "}
                  <div className="component-card-meta">
                    {" "}
                    <div className="tags">
                      <span className="tag blue">
                        .tag
                      </span>
                      <span className="tag">
                        12 lines
                      </span>
                    </div>
                    {" "}
                    <span className="tag sky">
                      Stable
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="component-card reveal">
                {" "}
                <div className="component-card-media">
                  {" "}
                  <span className="component-card-tag">
                    Avatar
                  </span>
                  {" "}
                  <img src={a2} alt="Circular avatar component preview" loading="lazy" width="500" height="400" />
                  {" "}
                </div>
                {" "}
                <div className="component-card-body">
                  {" "}
                  <h3>
                    Circle Avatar
                  </h3>
                  {" "}
                  <p>
                    A circular avatar with status ring, initials fallback and a 24px to 96px size scale.
                  </p>
                  {" "}
                  <div className="component-card-meta">
                    {" "}
                    <div className="tags">
                      <span className="tag blue">
                        .avatar
                      </span>
                      <span className="tag">
                        18 lines
                      </span>
                    </div>
                    {" "}
                    <span className="tag sky">
                      Stable
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="component-card reveal">
                {" "}
                <div className="component-card-media">
                  {" "}
                  <span className="component-card-tag">
                    Surface
                  </span>
                  {" "}
                  <img src={a3} alt="Rounded card surface component preview" loading="lazy" width="500" height="400" />
                  {" "}
                </div>
                {" "}
                <div className="component-card-body">
                  {" "}
                  <h3>
                    Rounded Card
                  </h3>
                  {" "}
                  <p>
                    A soft-cornered surface for grouping content, with hover elevation and optional media header.
                  </p>
                  {" "}
                  <div className="component-card-meta">
                    {" "}
                    <div className="tags">
                      <span className="tag blue">
                        .card
                      </span>
                      <span className="tag">
                        22 lines
                      </span>
                    </div>
                    {" "}
                    <span className="tag sky">
                      Stable
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="component-card reveal">
                {" "}
                <div className="component-card-media">
                  {" "}
                  <span className="component-card-tag">
                    Media
                  </span>
                  {" "}
                  <img src={a4} alt="Thumbnail media component preview" loading="lazy" width="500" height="400" />
                  {" "}
                </div>
                {" "}
                <div className="component-card-body">
                  {" "}
                  <h3>
                    Thumbnail
                  </h3>
                  {" "}
                  <p>
                    A fixed-ratio image thumbnail with lazy loading, zoom-on-hover and a caption strip.
                  </p>
                  {" "}
                  <div className="component-card-meta">
                    {" "}
                    <div className="tags">
                      <span className="tag blue">
                        .thumb
                      </span>
                      <span className="tag">
                        14 lines
                      </span>
                    </div>
                    {" "}
                    <span className="tag sky">
                      Beta
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <h3>
              Example — Pill badge
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  index.html
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-tag">
                    {"<span"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"tag blue\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"New"}
                  <span className="tok-tag">
                    {"</span>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"<span"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"tag sky\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"v2.4.0"}
                  <span className="tok-tag">
                    {"</span>"}
                  </span>
                  {"\n"}
                  <span className="tok-tag">
                    {"<span"}
                  </span>
                  {" "}
                  <span className="tok-prop">
                    {"class"}
                  </span>
                  {"="}
                  <span className="tok-str">
                    {"\"tag\""}
                  </span>
                  <span className="tok-tag">
                    {">"}
                  </span>
                  {"14 components"}
                  <span className="tok-tag">
                    {"</span>"}
                  </span>
                </code>
              </pre>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="responsive" className="docs-section">
            {" "}
            <span className="section-kicker">
              Guide
            </span>
            {" "}
            <h2>
              {"Responsive Grid "}
              <a href="#responsive" className="section-anchor" aria-label="Link to Responsive Grid">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              The layout is fluid at every size. The sidebar sticks on desktop, collapses to an overlay drawer on tablet, and the whole page stacks on phones — all driven by two breakpoints.
            </p>
            {" "}
            <div className="responsive-preview reveal">
              {" "}
              <img src={a5} alt="DocuKit responsive grid showing the documentation layout at desktop, tablet and mobile breakpoints" loading="lazy" width="1200" height="400" />
              {" "}
            </div>
            {" "}
            <div className="breakpoint-grid">
              {" "}
              <div className="breakpoint">
                {" "}
                <span className="bp-icon" aria-hidden="true">
                  🖥
                </span>
                {" "}
                <h4>
                  Desktop
                </h4>
                {" "}
                <p className="bp-range">
                  {"> 1180px"}
                </p>
                {" "}
                <p>
                  Sticky sidebar, content column and a right-hand mini table of contents.
                </p>
                {" "}
              </div>
              {" "}
              <div className="breakpoint">
                {" "}
                <span className="bp-icon" aria-hidden="true">
                  📱
                </span>
                {" "}
                <h4>
                  Tablet
                </h4>
                {" "}
                <p className="bp-range">
                  721 – 980px
                </p>
                {" "}
                <p>
                  Sidebar collapses to an overlay drawer opened from the TOC button.
                </p>
                {" "}
              </div>
              {" "}
              <div className="breakpoint">
                {" "}
                <span className="bp-icon" aria-hidden="true">
                  📱
                </span>
                {" "}
                <h4>
                  Mobile
                </h4>
                {" "}
                <p className="bp-range">
                  ≤ 720px
                </p>
                {" "}
                <p>
                  Everything stacks to a single column; search wraps to its own row.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <h3>
              12-column grid demo
            </h3>
            {" "}
            <p>
              The template uses a 12-column mental grid. This demo shows common spans — resize the window to watch them reflow.
            </p>
            {" "}
            <div className="grid-demo" aria-hidden="true">
              {" "}
              <div className="cell" style={{ gridColumn: "span 12" }}>
                span 12 — full width
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 6" }}>
                span 6
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 6" }}>
                span 6
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 4" }}>
                span 4
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 4" }}>
                span 4
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 4" }}>
                span 4
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 3" }}>
                span 3
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 3" }}>
                span 3
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 3" }}>
                span 3
              </div>
              {" "}
              <div className="cell" style={{ gridColumn: "span 3" }}>
                span 3
              </div>
              {" "}
            </div>
            {" "}
            <div className="callout callout-tip">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                💡
              </span>
              {" "}
              <div>
                <strong>
                  Clamp() everywhere.
                </strong>
                {" Typography and spacing use "}
                <code className="inline-code">
                  clamp()
                </code>
                , so nothing jumps between breakpoints — it scales smoothly instead.
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="theming" className="docs-section">
            {" "}
            <span className="section-kicker">
              Guide
            </span>
            {" "}
            <h2>
              {"Theming "}
              <a href="#theming" className="section-anchor" aria-label="Link to Theming">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              {"Every color, font and spacing value is a CSS custom property. Override the tokens in "}
              <code className="inline-code">
                :root
              </code>
              {" and the whole template restyles itself — no class surgery."}
            </p>
            {" "}
            <div className="swatch-grid">
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#1E293B" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Slate
                  </span>
                  <span className="swatch-hex">
                    #1E293B
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#2563EB" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Blue
                  </span>
                  <span className="swatch-hex">
                    #2563EB
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#0EA5E9" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Sky
                  </span>
                  <span className="swatch-hex">
                    #0EA5E9
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#F8FAFC" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Light
                  </span>
                  <span className="swatch-hex">
                    #F8FAFC
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#FFFFFF" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    White
                  </span>
                  <span className="swatch-hex">
                    #FFFFFF
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#64748B" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Gray
                  </span>
                  <span className="swatch-hex">
                    #64748B
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#E2E8F0" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Line
                  </span>
                  <span className="swatch-hex">
                    #E2E8F0
                  </span>
                </div>
              </div>
              {" "}
              <div className="swatch">
                <div className="swatch-color" style={{ background: "#0F172A" }} />
                <div className="swatch-meta">
                  <span className="swatch-name">
                    Code
                  </span>
                  <span className="swatch-hex">
                    #0F172A
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <h3>
              Customize the palette
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  style.css
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-tag">
                    {":root"}
                  </span>
                  {" {\n  "}
                  <span className="tok-prop">
                    {"--slate"}
                  </span>
                  {": "}
                  <span className="tok-num">
                    {"#1E293B"}
                  </span>
                  {";\n  "}
                  <span className="tok-prop">
                    {"--blue"}
                  </span>
                  {":  "}
                  <span className="tok-num">
                    {"#2563EB"}
                  </span>
                  {";\n  "}
                  <span className="tok-prop">
                    {"--sky"}
                  </span>
                  {":   "}
                  <span className="tok-num">
                    {"#0EA5E9"}
                  </span>
                  {";\n  "}
                  <span className="tok-prop">
                    {"--gray"}
                  </span>
                  {":  "}
                  <span className="tok-num">
                    {"#64748B"}
                  </span>
                  {";\n  "}
                  <span className="tok-prop">
                    {"--code"}
                  </span>
                  {":  "}
                  <span className="tok-num">
                    {"#0F172A"}
                  </span>
                  {";\n  "}
                  <span className="tok-prop">
                    {"--font-heading"}
                  </span>
                  {": "}
                  <span className="tok-str">
                    {"'Sora'"}
                  </span>
                  {", sans-serif;\n  "}
                  <span className="tok-prop">
                    {"--font-body"}
                  </span>
                  {":    "}
                  <span className="tok-str">
                    {"'IBM Plex Sans'"}
                  </span>
                  {", sans-serif;\n}"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              Typography scale
            </h3>
            {" "}
            <p>
              {"Headings use "}
              <strong>
                Sora
              </strong>
              {" (600/700); body copy uses "}
              <strong>
                IBM Plex Sans
              </strong>
              {" (400/500). The scale is fluid, driven by "}
              <code className="inline-code">
                clamp()
              </code>
              .
            </p>
            {" "}
            <div className="typo-demo">
              {" "}
              <div className="sample">
                <span className="lbl">
                  h1 · clamp(1.6rem → 2.2rem)
                </span>
                <div style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: "700", fontFamily: "var(--font-heading)", color: "var(--slate)" }}>
                  Build better docs.
                </div>
              </div>
              {" "}
              <div className="sample">
                <span className="lbl">
                  h2 · clamp(1.4rem → 1.75rem)
                </span>
                <div style={{ fontSize: "clamp(1.4rem,2.4vw,1.75rem)", fontWeight: "700", fontFamily: "var(--font-heading)", color: "var(--slate)" }}>
                  A clean documentation site.
                </div>
              </div>
              {" "}
              <div className="sample">
                <span className="lbl">
                  body · 1rem / 1.7
                </span>
                <div style={{ color: "var(--slate-600)" }}>
                  Body copy in IBM Plex Sans stays readable on any screen.
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="api" className="docs-section">
            {" "}
            <span className="section-kicker">
              Reference
            </span>
            {" "}
            <h2>
              {"API Reference "}
              <a href="#api" className="section-anchor" aria-label="Link to API Reference">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              {"Every endpoint is available under "}
              <code className="inline-code">
                https://api.docukit.dev/v2
              </code>
              {". Authentication uses a bearer token in the "}
              <code className="inline-code">
                Authorization
              </code>
              {" header."}
            </p>
            {" "}
            <div className="table-wrap">
              {" "}
              <table className="docs-table">
                {" "}
                <thead>
                  {" "}
                  <tr>
                    {" "}
                    <th>
                      Method
                    </th>
                    {" "}
                    <th>
                      Endpoint
                    </th>
                    {" "}
                    <th>
                      Description
                    </th>
                    {" "}
                    <th>
                      Auth
                    </th>
                    {" "}
                  </tr>
                  {" "}
                </thead>
                {" "}
                <tbody>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-get">
                        GET
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /docs
                      </code>
                    </td>
                    {" "}
                    <td>
                      List all documentation sections
                    </td>
                    {" "}
                    <td className="lock">
                      <span className="yes">
                        ✓
                      </span>
                      {" optional"}
                    </td>
                    {" "}
                  </tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-get">
                        GET
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /docs/:slug
                      </code>
                    </td>
                    {" "}
                    <td>
                      Fetch a single section by slug
                    </td>
                    {" "}
                    <td className="lock">
                      <span className="yes">
                        ✓
                      </span>
                      {" optional"}
                    </td>
                    {" "}
                  </tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-post">
                        POST
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /docs
                      </code>
                    </td>
                    {" "}
                    <td>
                      Create a new documentation section
                    </td>
                    {" "}
                    <td className="lock">
                      🔒 required
                    </td>
                    {" "}
                  </tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-put">
                        PUT
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /docs/:slug
                      </code>
                    </td>
                    {" "}
                    <td>
                      Replace an existing section entirely
                    </td>
                    {" "}
                    <td className="lock">
                      🔒 required
                    </td>
                    {" "}
                  </tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-delete">
                        DELETE
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /docs/:slug
                      </code>
                    </td>
                    {" "}
                    <td>
                      Remove a section and its versions
                    </td>
                    {" "}
                    <td className="lock">
                      🔒 required
                    </td>
                    {" "}
                  </tr>
                  {" "}
                  <tr>
                    {" "}
                    <td>
                      <span className="method method-get">
                        GET
                      </span>
                    </td>
                    {" "}
                    <td>
                      <code className="endpoint">
                        /search?q=grid
                      </code>
                    </td>
                    {" "}
                    <td>
                      Full-text search across all docs
                    </td>
                    {" "}
                    <td className="lock">
                      <span className="yes">
                        ✓
                      </span>
                      {" optional"}
                    </td>
                    {" "}
                  </tr>
                  {" "}
                </tbody>
                {" "}
              </table>
              {" "}
            </div>
            {" "}
            <h3>
              Example request
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  curl
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-kw">
                    {"curl"}
                  </span>
                  {" "}
                  <span className="tok-str">
                    {"https://api.docukit.dev/v2/docs"}
                  </span>
                  {" \\\n  "}
                  <span className="tok-kw">
                    {"-H"}
                  </span>
                  {" "}
                  <span className="tok-str">
                    {"\"Authorization: Bearer <token>\""}
                  </span>
                  {" \\\n  "}
                  <span className="tok-kw">
                    {"-H"}
                  </span>
                  {" "}
                  <span className="tok-str">
                    {"\"Accept: application/json\""}
                  </span>
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <h3>
              Example response
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  200 OK · application/json
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  {"{\n  "}
                  <span className="tok-kw">
                    {"\"status\""}
                  </span>
                  {": "}
                  <span className="tok-str">
                    {"\"ok\""}
                  </span>
                  {",\n  "}
                  <span className="tok-kw">
                    {"\"data\""}
                  </span>
                  {": [\n    {\n      "}
                  <span className="tok-kw">
                    {"\"slug\""}
                  </span>
                  {": "}
                  <span className="tok-str">
                    {"\"installation\""}
                  </span>
                  {",\n      "}
                  <span className="tok-kw">
                    {"\"title\""}
                  </span>
                  {": "}
                  <span className="tok-str">
                    {"\"Installation\""}
                  </span>
                  {",\n      "}
                  <span className="tok-kw">
                    {"\"updated\""}
                  </span>
                  {": "}
                  <span className="tok-str">
                    {"\"2026-08-30\""}
                  </span>
                  {",\n      "}
                  <span className="tok-kw">
                    {"\"views\""}
                  </span>
                  {": "}
                  <span className="tok-num">
                    {"12403"}
                  </span>
                  {"\n    }\n  ],\n  "}
                  <span className="tok-kw">
                    {"\"pagination\""}
                  </span>
                  {": { "}
                  <span className="tok-kw">
                    {"\"page\""}
                  </span>
                  {": "}
                  <span className="tok-num">
                    {"1"}
                  </span>
                  {", "}
                  <span className="tok-kw">
                    {"\"limit\""}
                  </span>
                  {": "}
                  <span className="tok-num">
                    {"20"}
                  </span>
                  {" }\n}"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
            <div className="callout callout-warn">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                ⚠
              </span>
              {" "}
              <div>
                <strong>
                  Rate limits.
                </strong>
                {" Unauthenticated requests are limited to 60 per minute. Add an "}
                <code className="inline-code">
                  Authorization
                </code>
                {" header to raise this to 1,000."}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {" "}
          <section id="accessibility" className="docs-section">
            {" "}
            <span className="section-kicker">
              Reference
            </span>
            {" "}
            <h2>
              {"Accessibility "}
              <a href="#accessibility" className="section-anchor" aria-label="Link to Accessibility">
                #
              </a>
            </h2>
            {" "}
            <p className="lead">
              DocuKit is built to be usable by everyone. The markup is semantic, interactive elements are keyboard-friendly, and motion is optional.
            </p>
            {" "}
            <ul className="a11y-list">
              {" "}
              <li>
                <span className="ck">
                  ✓
                </span>
                <div>
                  <strong>
                    Semantic landmarks
                  </strong>
                  <span>
                    Header, nav, main, aside and footer map to the correct ARIA roles out of the box.
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="ck">
                  ✓
                </span>
                <div>
                  <strong>
                    Keyboard navigation
                  </strong>
                  <span>
                    Every interactive control — nav, TOC drawer, copy buttons, search — is reachable and operable with Tab.
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="ck">
                  ✓
                </span>
                <div>
                  <strong>
                    Visible focus states
                  </strong>
                  <span>
                    Focus rings are clearly styled so the active element is never lost.
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="ck">
                  ✓
                </span>
                <div>
                  <strong>
                    Reduced motion
                  </strong>
                  <span>
                    <code className="inline-code">
                      prefers-reduced-motion
                    </code>
                    {" disables reveal animations and smooth scrolling."}
                  </span>
                </div>
              </li>
              {" "}
              <li>
                <span className="ck">
                  ✓
                </span>
                <div>
                  <strong>
                    Color contrast
                  </strong>
                  <span>
                    The token palette meets WCAG AA contrast on both light and code-dark surfaces.
                  </span>
                </div>
              </li>
              {" "}
            </ul>
            {" "}
            <div className="callout callout-info">
              {" "}
              <span className="callout-icon" aria-hidden="true">
                ℹ
              </span>
              {" "}
              <div>
                <strong>
                  Goal: WCAG 2.1 AA.
                </strong>
                {" DocuKit targets level AA conformance and includes "}
                <code className="inline-code">
                  aria-label
                </code>
                {"s, "}
                <code className="inline-code">
                  aria-expanded
                </code>
                {" toggles and descriptive alt text on every image."}
              </div>
              {" "}
            </div>
            {" "}
            <h3>
              Motion-safe guard
            </h3>
            {" "}
            <div className="code-block">
              {" "}
              <div className="code-block-head">
                {" "}
                <span className="code-block-dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <span className="code-block-title">
                  style.css
                </span>
                {" "}
                <button className="code-block-copy" type="button">
                  Copy
                </button>
                {" "}
              </div>
              {" "}
              <pre>
                <code>
                  <span className="tok-tag">
                    {"@media"}
                  </span>
                  {" ("}
                  <span className="tok-prop">
                    {"prefers-reduced-motion"}
                  </span>
                  {": "}
                  <span className="tok-kw">
                    {"reduce"}
                  </span>
                  {") {\n  "}
                  <span className="tok-prop">
                    {"html"}
                  </span>
                  {" { "}
                  <span className="tok-prop">
                    {"scroll-behavior"}
                  </span>
                  {": "}
                  <span className="tok-kw">
                    {"auto"}
                  </span>
                  {"; }\n  "}
                  <span className="tok-prop">
                    {".reveal"}
                  </span>
                  {" { "}
                  <span className="tok-prop">
                    {"opacity"}
                  </span>
                  {": "}
                  <span className="tok-num">
                    {"1"}
                  </span>
                  {"; "}
                  <span className="tok-prop">
                    {"transform"}
                  </span>
                  {": "}
                  <span className="tok-kw">
                    {"none"}
                  </span>
                  {"; }\n}"}
                </code>
              </pre>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </main>
        {" "}
        {" "}
        <aside className="docs-toc" aria-label="On this page">
          {" "}
          <p className="docs-toc-title">
            On this page
          </p>
          {" "}
          <a href="#getting-started" className="docs-toc-link active">
            Introduction
          </a>
          {" "}
          <a href="#installation" className="docs-toc-link">
            Installation
          </a>
          {" "}
          <a href="#usage" className="docs-toc-link">
            Usage
          </a>
          {" "}
          <a href="#components" className="docs-toc-link">
            Components
          </a>
          {" "}
          <a href="#responsive" className="docs-toc-link">
            Responsive Grid
          </a>
          {" "}
          <a href="#theming" className="docs-toc-link">
            Theming
          </a>
          {" "}
          <a href="#api" className="docs-toc-link">
            API Reference
          </a>
          {" "}
          <a href="#accessibility" className="docs-toc-link">
            Accessibility
          </a>
          {" "}
        </aside>
        {" "}
      </div>
      {" "}
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="footer-logo">
                {" "}
                <span className="nav-logo-icon" aria-hidden="true">
                  📘
                </span>
                {" DocuKit "}
              </a>
              {" "}
              <p>
                A clean, framework-free documentation and API reference template. Ship beautiful developer docs with zero build tooling.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="404.html" aria-label="GitHub">
                  🔗
                </a>
                {" "}
                <a href="404.html" aria-label="X / Twitter">
                  𝔽
                </a>
                {" "}
                <a href="404.html" aria-label="Discord">
                  💬
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Product
              </h4>
              {" "}
              <a href="#getting-started">
                Overview
              </a>
              {" "}
              <a href="#installation">
                Installation
              </a>
              {" "}
              <a href="#usage">
                Usage
              </a>
              {" "}
              <a href="#theming">
                Theming
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Resources
              </h4>
              {" "}
              <a href="#components">
                Components
              </a>
              {" "}
              <a href="#responsive">
                Responsive Grid
              </a>
              {" "}
              <a href="#api">
                API Reference
              </a>
              {" "}
              <a href="#accessibility">
                Accessibility
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <a href="404.html">
                About
              </a>
              {" "}
              <a href="404.html">
                Changelog
              </a>
              {" "}
              <a href="404.html">
                Support
              </a>
              {" "}
              <a href="404.html">
                License
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" DocuKit. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Template by "}
              <a href="https://tally.so/r/q4q1L9">
                uiuxlabz
              </a>
              {" · Built with pure HTML, CSS & JS"}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
