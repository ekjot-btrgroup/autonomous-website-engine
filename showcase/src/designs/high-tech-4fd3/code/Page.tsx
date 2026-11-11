// Converted from the HTML template high-tech-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about-1.webp";
import a3 from "./assets/blog-1.webp";
import a4 from "./assets/blog-2.webp";
import a5 from "./assets/blog-3.webp";
import a6 from "./assets/admin.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-high-tech-4fd3">
      {" "}
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <span className="topbar-note">
            ⚡ Enterprise-grade IT, minus the enterprise price tag
          </span>
          {" "}
          <div className="topbar-contact">
            {" "}
            <a href="tel:+12025550189">
              +1 (202) 555-0189
            </a>
            {" "}
            <span className="sep">
              ·
            </span>
            {" "}
            <a href="mailto:hello@forgestack.example">
              hello@forgestack.example
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo" aria-label="ForgeStack home">
            {" "}
            <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true">
              <rect width="32" height="32" rx="7" fill="#0b1220" />
              <path d="M7 8h7v4H7zm11 0h7v4h-7zM7 14h7v4H7zm11 0h7v4h-7zM7 20h7v4H7zm11 0h7v4h-7z" fill="#b6ff3c" />
            </svg>
            {" "}
            <span className="logo-name">
              Forge
              <em>
                Stack
              </em>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav className="nav-links" id="nav-links" aria-label="Primary">
            {" "}
            <a className="nav-link" href="index.html">
              Home
            </a>
            {" "}
            <a className="nav-link" href="about.html">
              About
            </a>
            {" "}
            <a className="nav-link" href="service.html">
              Services
            </a>
            {" "}
            <a className="nav-link" href="project.html">
              Projects
            </a>
            {" "}
            <a className="nav-link" href="blog.html">
              Blog
            </a>
            {" "}
            <a className="nav-link" href="testimonial.html">
              Reviews
            </a>
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="btn btn-accent btn-sm btn-cta">
              Get a Quote
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="grid-overlay" aria-hidden="true" />
          {" "}
          <div className="container hero-inner">
            {" "}
            <div className="hero-copy">
              {" "}
              <p className="hero-tag">
                <span className="tag-dot" />
                Managed IT · Cloud · Security
              </p>
              {" "}
              <h1>
                {"Infrastructure that "}
                <em>
                  never
                </em>
                {" sleeps."}
              </h1>
              {" "}
              <p className="hero-sub">
                ForgeStack runs the networks, clouds and security for 120+ growing businesses — so your team ships, and the operations just work.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="contact.html" className="btn btn-accent btn-lg">
                  Start a Project
                </a>
                {" "}
                <a href="service.html" className="btn btn-ghost btn-lg">
                  View Services
                </a>
                {" "}
              </div>
              {" "}
              <ul className="hero-badges">
                {" "}
                <li>
                  SOC 2 Type II
                </li>
                {" "}
                <li>
                  ISO 27001
                </li>
                {" "}
                <li>
                  AWS · Azure · GCP Partner
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="hero-panel reveal">
              {" "}
              <div className="term">
                {" "}
                <div className="term-bar">
                  {" "}
                  <span className="dot r" />
                  <span className="dot y" />
                  <span className="dot g" />
                  {" "}
                  <span className="term-title">
                    forge@stack — ~/deploy
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="term-body">
                  {" "}
                  <p className="term-line">
                    <span className="t-prompt">
                      $
                    </span>
                    {" forge deploy --stack production"}
                  </p>
                  {" "}
                  <p className="term-line ok">
                    <span className="t-ok">
                      ✓
                    </span>
                    {" build 4.2.1 passed "}
                    <span className="t-dim">
                      (12s)
                    </span>
                  </p>
                  {" "}
                  <p className="term-line ok">
                    <span className="t-ok">
                      ✓
                    </span>
                    {" 24/26 services healthy"}
                  </p>
                  {" "}
                  <p className="term-line ok">
                    <span className="t-ok">
                      ✓
                    </span>
                    {" zero-downtime cutover complete"}
                  </p>
                  {" "}
                  <p className="term-line ok">
                    <span className="t-ok">
                      ✓
                    </span>
                    {" monitoring armed · 99.99% uptime"}
                  </p>
                  {" "}
                  <p className="term-line">
                    <span className="t-prompt">
                      $
                    </span>
                    {" "}
                    <span className="t-cursor" />
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="term-note">
                {" "}
                <span className="note-ping" />
                {" Live status · last check 12s ago "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="stack-strip" aria-label="Certifications and partners">
          {" "}
          <div className="container stack-inner">
            {" "}
            <span className="stack-label">
              Trusted stack
            </span>
            {" "}
            <span className="stack-badge">
              SOC 2
            </span>
            {" "}
            <span className="stack-badge">
              ISO 27001
            </span>
            {" "}
            <span className="stack-badge">
              AWS
            </span>
            {" "}
            <span className="stack-badge">
              Azure
            </span>
            {" "}
            <span className="stack-badge">
              Kubernetes
            </span>
            {" "}
            <span className="stack-badge">
              Terraform
            </span>
            {" "}
            <span className="stack-badge">
              NIST
            </span>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                What we run
              </p>
              {" "}
              <h2 className="section-title">
                Six systems, one accountable partner.
              </h2>
              {" "}
              <p className="section-sub">
                Every engagement starts with an audit and ends with us on the hook for the outcome.
              </p>
              {" "}
            </div>
            {" "}
            <div className="sys-grid">
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 01 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="7" rx="1.5" />
                    <rect x="3" y="13" width="18" height="7" rx="1.5" />
                    <path d="M8 7.5h.01M8 16.5h.01" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Cloud Infrastructure
                </h3>
                {" "}
                <p>
                  Architecture, migration and cost governance across AWS, Azure and GCP — including the DevOps pipelines that keep it honest.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore cloud →
                </a>
                {" "}
              </article>
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 02 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
                    <path d="M9.5 12l1.8 1.8L15 10" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Cybersecurity
                </h3>
                {" "}
                <p>
                  24/7 SOC monitoring, penetration testing and compliance readiness for SOC 2, ISO 27001 and HIPAA.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore security →
                </a>
                {" "}
              </article>
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 03 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                    <path d="M3 4l2-2M21 4l-2-2M3 20l2 2M21 20l-2 2" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Managed IT Support
                </h3>
                {" "}
                <p>
                  24/7 helpdesk, endpoint management and proactive monitoring. Mean time to respond: under nine minutes.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore support →
                </a>
                {" "}
              </article>
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 04 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4l-5 8 5 8h8l5-8-5-8z" />
                    <path d="M12 8v4l2 2" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Software Development
                </h3>
                {" "}
                <p>
                  Custom web apps, API integrations and internal tools — built in-house, documented, and handed over with tests.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore dev →
                </a>
                {" "}
              </article>
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 05 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M7 15l4-4 3 3 5-6" />
                  </svg>
                </span>
                {" "}
                <h3>
                  {"Data & Analytics"}
                </h3>
                {" "}
                <p>
                  Warehousing, pipelines and dashboards that turn scattered records into decisions your leadership actually trusts.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore data →
                </a>
                {" "}
              </article>
              {" "}
              <article className="sys-card reveal">
                {" "}
                <span className="sys-index">
                  [ 06 ]
                </span>
                {" "}
                <span className="sys-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                    <circle cx="7" cy="6" r="1" />
                    <circle cx="7" cy="12" r="1" />
                    <circle cx="7" cy="18" r="1" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Network Solutions
                </h3>
                {" "}
                <p>
                  SD-WAN, structured cabling, VoIP and secure remote access — designed for teams that can't afford downtime.
                </p>
                {" "}
                <a className="sys-link" href="service.html">
                  Explore network →
                </a>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head light reveal">
              {" "}
              <p className="eyebrow">
                By the numbers
              </p>
              {" "}
              <h2 className="section-title">
                Uptime is our love language.
              </h2>
              {" "}
            </div>
            {" "}
            <div className="stat-band">
              {" "}
              <div className="stat-card reveal">
                <strong>
                  99.99%
                </strong>
                <span>
                  Average uptime SLA
                </span>
              </div>
              {" "}
              <div className="stat-card reveal">
                <strong>
                  120+
                </strong>
                <span>
                  Businesses managed
                </span>
              </div>
              {" "}
              <div className="stat-card reveal">
                <strong>
                  9 min
                </strong>
                <span>
                  Median response time
                </span>
              </div>
              {" "}
              <div className="stat-card reveal">
                <strong>
                  24/7
                </strong>
                <span>
                  Human on-call, always
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-media reveal">
                {" "}
                <img src={a2} alt="ForgeStack engineers reviewing infrastructure" className="img-main" />
                {" "}
                <div className="console-panel">
                  {" "}
                  <div className="console-head">
                    <span className="dot g" />
                    <span className="console-title">
                      forge · monitor
                    </span>
                  </div>
                  {" "}
                  <p className="console-line">
                    <span className="t-ok">
                      ●
                    </span>
                    {" edge-01 "}
                    <span className="t-dim">
                      latency 11ms
                    </span>
                  </p>
                  {" "}
                  <p className="console-line">
                    <span className="t-ok">
                      ●
                    </span>
                    {" db-primary "}
                    <span className="t-dim">
                      replica sync ✓
                    </span>
                  </p>
                  {" "}
                  <p className="console-line warn">
                    <span className="t-warn">
                      ▲
                    </span>
                    {" auto-scaled to 6 nodes"}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split-copy reveal">
                {" "}
                <p className="eyebrow">
                  Why ForgeStack
                </p>
                {" "}
                <h2 className="section-title">
                  Your systems, run by engineers who care about the logs.
                </h2>
                {" "}
                <p>
                  Most managed IT stops at "the printer is fixed." We run your whole stack — cloud, security, endpoints, data — with the same rigour we'd demand for our own production. If we manage it, we own the outcome.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    Named engineers, not an anonymous ticket queue
                  </li>
                  {" "}
                  <li>
                    Every change versioned and reviewed
                  </li>
                  {" "}
                  <li>
                    Transparent monthly ops reports, no surprises
                  </li>
                  {" "}
                  <li>
                    Fixed-fee pricing — no surprise billable hours
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="split-actions">
                  {" "}
                  <a href="about.html" className="btn btn-primary">
                    More About Us
                  </a>
                  {" "}
                  <a href="contact.html" className="btn btn-link">
                    Talk to an engineer →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                The pipeline
              </p>
              {" "}
              <h2 className="section-title">
                From audit to always-on.
              </h2>
              {" "}
              <p className="section-sub">
                A proven four-stage delivery pipeline. Most projects are production-ready in under 45 days.
              </p>
              {" "}
            </div>
            {" "}
            <div className="pipe">
              {" "}
              <div className="pipe-track" aria-hidden="true" />
              {" "}
              <div className="pipe-step reveal">
                {" "}
                <span className="pipe-num">
                  01
                </span>
                {" "}
                <h3>
                  Audit
                </h3>
                {" "}
                <p>
                  We map your stack, risks and spend — and hand you the findings, whether or not you hire us.
                </p>
                {" "}
              </div>
              {" "}
              <div className="pipe-step reveal">
                {" "}
                <span className="pipe-num">
                  02
                </span>
                {" "}
                <h3>
                  Design
                </h3>
                {" "}
                <p>
                  Architecture, security baseline and a fixed-price plan you approve before we build anything.
                </p>
                {" "}
              </div>
              {" "}
              <div className="pipe-step reveal">
                {" "}
                <span className="pipe-num">
                  03
                </span>
                {" "}
                <h3>
                  Deploy
                </h3>
                {" "}
                <p>
                  Phased migration with rollback at every step. You keep working the whole time.
                </p>
                {" "}
              </div>
              {" "}
              <div className="pipe-step reveal">
                {" "}
                <span className="pipe-num">
                  04
                </span>
                {" "}
                <h3>
                  Manage
                </h3>
                {" "}
                <p>
                  24/7 monitoring, proactive fixes and monthly reviews. Uptime is now someone's job — ours.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Selected work
              </p>
              {" "}
              <h2 className="section-title">
                Proof, in production.
              </h2>
              {" "}
              <p className="section-sub">
                A few engagements that show what "accountable" looks like.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="post-card reveal">
                {" "}
                <a href="project.html">
                  <img src={a3} alt="Healthcare compliance infrastructure" loading="lazy" />
                </a>
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Case study · Healthcare
                  </span>
                  {" "}
                  <h3>
                    <a href="project.html">
                      HIPAA-ready cloud for a 40-clinic network
                    </a>
                  </h3>
                  {" "}
                  <a className="sys-link" href="project.html">
                    Read the case →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <a href="project.html">
                  <img src={a4} alt="E-commerce platform migration" loading="lazy" />
                </a>
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Case study · Retail
                  </span>
                  {" "}
                  <h3>
                    <a href="project.html">
                      Zero-downtime migration of a $30M storefront
                    </a>
                  </h3>
                  {" "}
                  <a className="sys-link" href="project.html">
                    Read the case →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <a href="project.html">
                  <img src={a5} alt="Managed security operations centre" loading="lazy" />
                </a>
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Case study · Fintech
                  </span>
                  {" "}
                  <h3>
                    <a href="project.html">
                      24/7 SOC that cut breaches to zero
                    </a>
                  </h3>
                  {" "}
                  <a className="sys-link" href="project.html">
                    Read the case →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Client voices
              </p>
              {" "}
              <h2 className="section-title">
                Ops teams stop calling us.
              </h2>
              {" "}
              <p className="section-sub">
                That's the compliment. Here's what they say first.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="testimonial-card reveal">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  We moved from three MSPs to ForgeStack and our incident count dropped by 80% in one quarter. They answer the phone at 3am — a real engineer, not a script.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <span className="avatar mono-av">
                    AL
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Ava Lindqvist
                    </strong>
                    <span>
                      CTO, Northwind Health
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card reveal">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  The audit alone was worth the engagement — they found a data exposure our previous vendor had missed for two years. Fixing it paid for everything twice over.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a6} alt="Portrait of Marcus Reid" className="avatar" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Marcus Reid
                    </strong>
                    <span>
                      {"COO, Calder & Co."}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card reveal">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  Their fixed-fee model means no drama at month-end. Our IT budget went from unpredictable to flat, and the uptime got better. That's just… better.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <span className="avatar mono-av av-2">
                    JW
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Jenna Whitfield
                    </strong>
                    <span>
                      Founder, Mercator Labs
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow">
              Ready when you are
            </p>
            {" "}
            <h2>
              {"Let's make your infrastructure "}
              <em>
                boring
              </em>
              .
            </h2>
            {" "}
            <p>
              The good kind of boring — the kind where nothing breaks, nobody panics, and you just work. Start with a free, no-strings systems audit.
            </p>
            {" "}
            <a href="contact.html" className="btn btn-accent btn-lg">
              Book a Free Audit
            </a>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo logo-light" aria-label="ForgeStack home">
                {" "}
                <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
                  <rect width="32" height="32" rx="7" fill="#0b1220" />
                  <path d="M7 8h7v4H7zm11 0h7v4h-7zM7 14h7v4H7zm11 0h7v4h-7zM7 20h7v4H7zm11 0h7v4h-7z" fill="#b6ff3c" />
                </svg>
                {" "}
                <span className="logo-name">
                  Forge
                  <em>
                    Stack
                  </em>
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Managed IT, cloud and security for businesses that can't afford downtime. Built by engineers, run with ownership — since 2011.
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="project.html">
                    Projects
                  </a>
                </li>
                {" "}
                <li>
                  <a href="testimonial.html">
                    Reviews
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Blog
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="service.html">
                    Cloud Infrastructure
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Cybersecurity
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Managed IT Support
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Software Development
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Network Solutions
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col footer-contact">
              {" "}
              <h4>
                Get in Touch
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="tel:+12025550189">
                    +1 (202) 555-0189
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:hello@forgestack.example">
                    hello@forgestack.example
                  </a>
                </li>
                {" "}
                <li>
                  1810 K Street NW
                  <br />
                  Washington, DC 20006
                </li>
                {" "}
                <li>
                  24/7 on-call · every day
                </li>
                {" "}
              </ul>
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
              {" ForgeStack Solutions. All rights reserved."}
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.3 8.2h4.4V22H.3zM8.4 8.2h4.2v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V22h-4.4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V22H8.4z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.5 3h3l-6.6 7.6L21.8 21h-6.1l-4.8-6.3L5.4 21h-3l7.1-8.1L2.2 3h6.3l4.3 5.7zm-1 16.2h1.7L7.6 4.7H5.8z" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
