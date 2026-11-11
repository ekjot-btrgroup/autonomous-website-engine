// Converted from the HTML template consulting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/blog-1.webp";
import a2 from "./assets/blog-2.webp";
import a3 from "./assets/blog-3.webp";
import a4 from "./assets/team-1.webp";
import a5 from "./assets/team-2.webp";
import a6 from "./assets/team-3.webp";
import a7 from "./assets/carousel-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-consulting-89d8">
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a className="brand" href="index.html">
            <span className="brand__mark">
              C
            </span>
            {" CONSULT"}
          </a>
          {" "}
          <nav className="nav" data-nav="" aria-label="Primary">
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="services.html">
              Services
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a className="btn btn--primary" href="contact.html" style={{ padding: "10px 16px" }}>
            Start a diagnostic
          </a>
          {" "}
          <button className="burger" data-burger="" aria-label="Open menu" aria-expanded="false">
            <span />
          </button>
          {" "}
        </div>
        {" "}
        <div className="mobile" data-mobile="">
          {" "}
          <a href="index.html">
            Home
          </a>
          {" "}
          <a href="about.html">
            About
          </a>
          {" "}
          <a href="services.html">
            Services
          </a>
          {" "}
          <a href="contact.html">
            Contact
          </a>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <section className="hero">
        {" "}
        <div className="container hero__grid">
          {" "}
          <div className="hero__copy reveal">
            {" "}
            <div className="eyebrow">
              Advisory for operators
            </div>
            {" "}
            <h1 className="display">
              {"Strategy that "}
              <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
                ships
              </em>
              .
            </h1>
            {" "}
            <p className="lead">
              We help leadership teams turn ambiguity into executable plans — with clear choices, clean economics, and a path to ship in weeks, not quarters.
            </p>
            {" "}
            <div className="kpis">
              {" "}
              <div className="kpi">
                {" "}
                <div className="kpi__num count" data-count="48" data-suffix="%">
                  48%
                </div>
                {" "}
                <div className="kpi__label">
                  Avg. margin lift
                </div>
                {" "}
                <div className="kpi__sub">
                  Across 32 engagements
                </div>
                {" "}
              </div>
              {" "}
              <div className="kpi">
                {" "}
                <div className="kpi__num count" data-count="6" data-suffix=" wk">
                  6 wk
                </div>
                {" "}
                <div className="kpi__label">
                  To first ship
                </div>
                {" "}
                <div className="kpi__sub">
                  Median time to value
                </div>
                {" "}
              </div>
              {" "}
              <div className="kpi">
                {" "}
                <div className="kpi__num count" data-count="92" data-suffix="%">
                  92%
                </div>
                {" "}
                <div className="kpi__label">
                  Retention
                </div>
                {" "}
                <div className="kpi__sub">
                  Clients year over year
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="row">
              {" "}
              <a className="btn btn--primary" href="contact.html">
                Book a working session
              </a>
              {" "}
              <a className="btn btn--ghost" href="services.html">
                Explore services
              </a>
              {" "}
            </div>
            {" "}
            <p className="small" style={{ marginTop: "10px" }}>
              {"No pitch deck. We start with your P&L and your constraints."}
            </p>
            {" "}
          </div>
          {" "}
          <div className="hero__media reveal" style={{ transitionDelay: ".08s" }}>
            {" "}
            <img src={a0} alt="Boardroom team collaborating" loading="eager" />
            {" "}
            <div className="hero__badge">
              {" "}
              <div>
                {" "}
                <strong>
                  Operator-led advisory
                </strong>
                {" "}
                <div className="small">
                  {"Partners who have run P&Ls, not just advised them."}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tick">
                ✓
              </span>
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
          <div className="row" style={{ justifyContent: "space-between", alignItems: "end", marginBottom: "18px" }}>
            {" "}
            <div>
              {" "}
              <div className="eyebrow">
                Services
              </div>
              {" "}
              <h2 className="display" style={{ marginTop: "6px" }}>
                Advisory that compounds
              </h2>
              {" "}
            </div>
            {" "}
            <a className="link" href="services.html">
              View all services →
            </a>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <article className="card service-card reveal">
              {" "}
              <div className="service-card__icon">
                ◈
              </div>
              {" "}
              <h3>
                {"Growth & Go-to-Market"}
              </h3>
              {" "}
              <p>
                Sharpen ICP, pricing, and channels. Build a repeatable engine with clear unit economics.
              </p>
              {" "}
              <ul>
                <li>
                  {"ICP & segmentation"}
                </li>
                <li>
                  {"Pricing & packaging"}
                </li>
                <li>
                  {"Channel & pipeline design"}
                </li>
              </ul>
              {" "}
              <p style={{ marginTop: "14px" }}>
                <a className="link" href="services.html">
                  Learn more →
                </a>
              </p>
              {" "}
            </article>
            {" "}
            <article className="card service-card reveal" style={{ transitionDelay: ".06s" }}>
              {" "}
              <div className="service-card__icon">
                ⬡
              </div>
              {" "}
              <h3>
                {"Operations & Margin"}
              </h3>
              {" "}
              <p>
                Map cost-to-serve, fix throughput, and lift margin without breaking delivery.
              </p>
              {" "}
              <ul>
                <li>
                  {"Cost & capacity diagnostics"}
                </li>
                <li>
                  {"Process & tooling redesign"}
                </li>
                <li>
                  {"OKR & cadence"}
                </li>
              </ul>
              {" "}
              <p style={{ marginTop: "14px" }}>
                <a className="link" href="services.html">
                  Learn more →
                </a>
              </p>
              {" "}
            </article>
            {" "}
            <article className="card service-card reveal" style={{ transitionDelay: ".12s" }}>
              {" "}
              <div className="service-card__icon">
                ◎
              </div>
              {" "}
              <h3>
                {"Organization & Talent"}
              </h3>
              {" "}
              <p>
                Design the team you need for the strategy you chose — roles, incentives, and hiring plan.
              </p>
              {" "}
              <ul>
                <li>
                  {"Org & role design"}
                </li>
                <li>
                  {"Incentives & governance"}
                </li>
                <li>
                  {"Talent & succession"}
                </li>
              </ul>
              {" "}
              <p style={{ marginTop: "14px" }}>
                <a className="link" href="services.html">
                  Learn more →
                </a>
              </p>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--tight">
        {" "}
        <div className="container">
          {" "}
          <div className="approach reveal">
            {" "}
            <div className="approach__head">
              {" "}
              <div className="eyebrow">
                Approach
              </div>
              {" "}
              <h2 className="display" style={{ color: "#fff", marginTop: "6px" }}>
                Diagnose → Design → Deliver
              </h2>
              {" "}
              <p style={{ color: "#CBD5E1", maxWidth: "60ch", marginTop: "8px" }}>
                A tight loop that moves from evidence to choices to shipped outcomes. No theatre — just working sessions and weekly proof.
              </p>
              {" "}
            </div>
            {" "}
            <div className="approach__grid">
              {" "}
              <div className="step">
                {" "}
                <div className="step__num">
                  <span className="count" data-count="1">
                    1
                  </span>
                  {" "}
                  <small>
                    Diagnose
                  </small>
                </div>
                {" "}
                <h3>
                  Evidence over opinion
                </h3>
                {" "}
                <p>
                  We audit economics, pipeline, and delivery to find the one constraint that matters. Interviews, data, and a candid readout.
                </p>
                {" "}
                <div className="step__bar" />
                {" "}
              </div>
              {" "}
              <div className="step">
                {" "}
                <div className="step__num">
                  <span className="count" data-count="2">
                    2
                  </span>
                  {" "}
                  <small>
                    Design
                  </small>
                </div>
                {" "}
                <h3>
                  Choices, not decks
                </h3>
                {" "}
                <p>
                  We co-design options with trade-offs priced. You choose. We turn the choice into a 90-day plan with owners and metrics.
                </p>
                {" "}
                <div className="step__bar" style={{ width: "62%" }} />
                {" "}
              </div>
              {" "}
              <div className="step">
                {" "}
                <div className="step__num">
                  <span className="count" data-count="3">
                    3
                  </span>
                  {" "}
                  <small>
                    Deliver
                  </small>
                </div>
                {" "}
                <h3>
                  Ship weekly
                </h3>
                {" "}
                <p>
                  We embed to ship: pipeline sprints, ops fixes, and governance that holds. Proof every Friday — demo, metrics, decisions.
                </p>
                {" "}
                <div className="step__bar" style={{ width: "78%" }} />
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
          <div className="row" style={{ justifyContent: "space-between", alignItems: "end", marginBottom: "18px" }}>
            {" "}
            <div>
              {" "}
              <div className="eyebrow">
                Case snapshots
              </div>
              {" "}
              <h2 className="display" style={{ marginTop: "6px" }}>
                Selected outcomes
              </h2>
              {" "}
            </div>
            {" "}
            <a className="link" href="about.html">
              How we work →
            </a>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <article className="card case reveal">
              {" "}
              <div className="case__img">
                <img src={a1} alt="Strategy workshop" loading="lazy" />
              </div>
              {" "}
              <div className="case__body">
                {" "}
                <div className="case__meta">
                  <span className="pill">
                    SaaS
                  </span>
                  <span className="pill pill--ink">
                    GTM
                  </span>
                </div>
                {" "}
                <h3>
                  From stalled pipeline to predictable growth
                </h3>
                {" "}
                <p>
                  Rebuilt ICP and pricing; added channel playbooks. Pipeline coverage 1.1× → 3.4× in 11 weeks.
                </p>
                {" "}
                <div className="case__foot">
                  <span>
                    11 weeks
                  </span>
                  <span>
                    +214% coverage
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card case reveal" style={{ transitionDelay: ".06s" }}>
              {" "}
              <div className="case__img">
                <img src={a2} alt="Operations review" loading="lazy" />
              </div>
              {" "}
              <div className="case__body">
                {" "}
                <div className="case__meta">
                  <span className="pill">
                    Services
                  </span>
                  <span className="pill">
                    Ops
                  </span>
                </div>
                {" "}
                <h3>
                  Margin without layoffs
                </h3>
                {" "}
                <p>
                  Cost-to-serve mapping and delivery redesign. Gross margin +9 pts while CSAT held at 4.7.
                </p>
                {" "}
                <div className="case__foot">
                  <span>
                    8 weeks
                  </span>
                  <span>
                    +9 pts margin
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card case reveal" style={{ transitionDelay: ".12s" }}>
              {" "}
              <div className="case__img">
                <img src={a3} alt="Leadership alignment" loading="lazy" />
              </div>
              {" "}
              <div className="case__body">
                {" "}
                <div className="case__meta">
                  <span className="pill">
                    Leadership
                  </span>
                  <span className="pill">
                    Org
                  </span>
                </div>
                {" "}
                <h3>
                  One plan the exec team actually uses
                </h3>
                {" "}
                <p>
                  RACI, cadence, and incentives aligned. Decision latency cut by half; attrition down 18%.
                </p>
                {" "}
                <div className="case__foot">
                  <span>
                    6 weeks
                  </span>
                  <span>
                    −48% latency
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
      <section className="section section--tight">
        {" "}
        <div className="container">
          {" "}
          <div className="row" style={{ justifyContent: "space-between", alignItems: "end", marginBottom: "18px" }}>
            {" "}
            <div>
              {" "}
              <div className="eyebrow">
                Advisors
              </div>
              {" "}
              <h2 className="display" style={{ marginTop: "6px" }}>
                Partners who have run the work
              </h2>
              {" "}
            </div>
            {" "}
            <a className="link" href="about.html">
              Meet the team →
            </a>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <article className="card person reveal">
              {" "}
              <div className="person__img">
                <img src={a4} alt="Partner portrait — Elena Marsh" loading="lazy" />
              </div>
              {" "}
              <h3>
                Elena Marsh
              </h3>
              <div className="person__role">
                Managing Partner — Growth
              </div>
              {" "}
              <p>
                Ex-COO, B2B SaaS. Led two turnarounds and a $240M exit. Obsessed with pipeline math.
              </p>
              {" "}
              <div className="person__links">
                <span className="chip">
                  GTM
                </span>
                <span className="chip">
                  Pricing
                </span>
              </div>
              {" "}
            </article>
            {" "}
            <article className="card person reveal" style={{ transitionDelay: ".06s" }}>
              {" "}
              <div className="person__img">
                <img src={a5} alt="Partner portrait — David Okafor" loading="lazy" />
              </div>
              {" "}
              <h3>
                David Okafor
              </h3>
              <div className="person__role">
                Partner — Operations
              </div>
              {" "}
              <p>
                Industrial engineer. Built ops systems that scaled from 30 to 400 without breaking SLA.
              </p>
              {" "}
              <div className="person__links">
                <span className="chip">
                  Throughput
                </span>
                <span className="chip">
                  Margin
                </span>
              </div>
              {" "}
            </article>
            {" "}
            <article className="card person reveal" style={{ transitionDelay: ".12s" }}>
              {" "}
              <div className="person__img">
                <img src={a6} alt="Partner portrait — Sara Hana" loading="lazy" />
              </div>
              {" "}
              <h3>
                Sara Hana
              </h3>
              <div className="person__role">
                Partner — Organization
              </div>
              {" "}
              <p>
                Former CHRO. Designs roles and incentives that make strategy stick.
              </p>
              {" "}
              <div className="person__links">
                <span className="chip">
                  Org design
                </span>
                <span className="chip">
                  Talent
                </span>
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
          <div className="row" style={{ justifyContent: "space-between", alignItems: "end", marginBottom: "18px" }}>
            {" "}
            <div>
              {" "}
              <div className="eyebrow">
                Insights
              </div>
              {" "}
              <h2 className="display" style={{ marginTop: "6px" }}>
                Writing from the work
              </h2>
              {" "}
            </div>
            {" "}
            <a className="link" href="about.html">
              All insights →
            </a>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <article className="card post reveal">
              {" "}
              <div className="post__img">
                <img src={a7} alt="Office workspace" loading="lazy" />
              </div>
              {" "}
              <div className="pill" style={{ alignSelf: "start" }}>
                Playbook
              </div>
              {" "}
              <h3>
                The 6-week diagnostic that actually changes decisions
              </h3>
              {" "}
              <p>
                What to measure first, how to read it, and the one-page readout that forces a choice.
              </p>
              {" "}
              <a className="link" href="services.html">
                Read →
              </a>
              {" "}
            </article>
            {" "}
            <article className="card post reveal" style={{ transitionDelay: ".06s" }}>
              {" "}
              <div className="post__img">
                <img src={a1} alt="Working session" loading="lazy" />
              </div>
              {" "}
              <div className="pill" style={{ alignSelf: "start" }}>
                Pricing
              </div>
              {" "}
              <h3>
                Pricing is a strategy question, not a spreadsheet
              </h3>
              {" "}
              <p>
                Three tests we run before touching price — and the packaging move that lifted NRR 12%.
              </p>
              {" "}
              <a className="link" href="services.html">
                Read →
              </a>
              {" "}
            </article>
            {" "}
            <article className="card post reveal" style={{ transitionDelay: ".12s" }}>
              {" "}
              <div className="post__img">
                <img src={a2} alt="Team alignment" loading="lazy" />
              </div>
              {" "}
              <div className="pill" style={{ alignSelf: "start" }}>
                Operating cadence
              </div>
              {" "}
              <h3>
                Why your OKRs feel like theater
              </h3>
              {" "}
              <p>
                The cadence we install on week one — and the three metrics that replace 30.
              </p>
              {" "}
              <a className="link" href="services.html">
                Read →
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
      <section className="section section--tight">
        {" "}
        <div className="container">
          {" "}
          <div className="cta reveal">
            {" "}
            <div style={{ display: "flex", gap: "18px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
              {" "}
              <div style={{ minWidth: "280px", flex: "1" }}>
                {" "}
                <h2 className="display" style={{ fontSize: "clamp(26px,3.5vw,38px)" }}>
                  Bring your hardest constraint
                </h2>
                {" "}
                <p style={{ marginTop: "8px", maxWidth: "56ch" }}>
                  A 45-minute working session — no slides. We map the constraint, price the options, and leave you with a next step you can ship.
                </p>
                {" "}
              </div>
              {" "}
              <div className="row" style={{ flexShrink: "0" }}>
                {" "}
                <a className="btn btn--ghost" href="contact.html">
                  Book a session
                </a>
                {" "}
                <a className="btn btn--dark" href="services.html">
                  See how we work
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                <i>
                  C
                </i>
                {" CONSULT"}
              </div>
              {" "}
              <p className="small" style={{ marginTop: "10px", color: "#94A3B8" }}>
                Operator-led advisory. We diagnose, design, and deliver — with proof every week.
              </p>
              {" "}
              <p className="small" style={{ marginTop: "10px" }}>
                <a href="contact.html">
                  hello@consult.example
                </a>
                {" · +1 (555) 014-2200"}
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Company
              </div>
              {" "}
              <ul className="footer__list">
                <li>
                  <a href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a href="services.html">
                    Services
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Services
              </div>
              {" "}
              <ul className="footer__list">
                <li>
                  <a href="services.html">
                    {"Growth & GTM"}
                  </a>
                </li>
                <li>
                  <a href="services.html">
                    Operations
                  </a>
                </li>
                <li>
                  <a href="services.html">
                    Organization
                  </a>
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Working session
              </div>
              {" "}
              <p className="small" style={{ color: "#CBD5E1" }}>
                {"45 minutes, no deck. Bring your P&L and the constraint you feel most."}
              </p>
              {" "}
              <p style={{ marginTop: "10px" }}>
                <a className="btn btn--primary" href="contact.html" style={{ padding: "10px 16px" }}>
                  Book now
                </a>
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="copy">
            <span>
              {"© "}
              <span data-year="" />
              {" CONSULT. All rights reserved."}
            </span>
            <span>
              Crafted for operators.
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
    </div>
  );
}
