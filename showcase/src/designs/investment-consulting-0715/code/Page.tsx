// Converted from the HTML template investment-consulting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero-1.webp";
import a1 from "./assets/img-hero-2.webp";
import a2 from "./assets/img-hero-3.webp";
import a3 from "./assets/img-case-1.webp";
import a4 from "./assets/img-case-2.webp";
import a5 from "./assets/img-case-3.webp";
import a6 from "./assets/img-person-1.webp";
import a7 from "./assets/img-person-2.webp";
import a8 from "./assets/img-person-3.webp";
import a9 from "./assets/img-service-1.webp";
import a10 from "./assets/img-service-2.webp";
import a11 from "./assets/img-service-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-investment-consulting-0715">
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <p className="topbar-item">
            <span className="topbar-icon">
              🕊
            </span>
            {" Private clients since 1998"}
          </p>
          {" "}
          <p className="topbar-item topbar-mid">
            Registered Investment Advisor · SEC
          </p>
          {" "}
          <p className="topbar-item topbar-end">
            {" "}
            <a href="tel:+12125550198">
              +1 (212) 555-0198
            </a>
            {" "}
            <a href="mailto:advice@calderandash.example">
              advice@calderandash.example
            </a>
            {" "}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container nav-wrap">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <span className="brand-mark" aria-hidden="true" />
            {" "}
            <span className="brand-text">
              Calder
              <span>
                {"&Ash"}
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
            ☰
          </button>
          {" "}
          <nav className="nav-links" id="site-nav" aria-label="Primary">
            {" "}
            <a href="index.html" className="nav-link">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav-link">
              About
            </a>
            {" "}
            <a href="service.html" className="nav-link">
              Services
            </a>
            {" "}
            <a href="portfolio.html" className="nav-link">
              Portfolio
            </a>
            {" "}
            <a href="team.html" className="nav-link">
              Advisors
            </a>
            {" "}
            <a href="insights.html" className="nav-link">
              Insights
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="nav-cta">
              Book a Consultation
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
          <div className="hero-bg" aria-hidden="true">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
            <img src={a2} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" />
          {" "}
          <div className="container hero-inner">
            {" "}
            <div className="hero-copy">
              {" "}
              <p className="hero-eyebrow">
                Private investment advisory
              </p>
              {" "}
              <h1>
                {"Wealth, managed with "}
                <em>
                  patience and precision.
                </em>
              </h1>
              {" "}
              <p className="hero-sub">
                Discretionary portfolio management and family office guidance for principals, founders and their families — one calm conversation at a time.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="contact.html" className="btn btn-primary">
                  Book a consultation
                </a>
                {" "}
                <a href="portfolio.html" className="btn btn-ghost-light">
                  View our track record
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="snapshot-card reveal">
              {" "}
              <div className="snap-head">
                {" "}
                <p className="snap-label">
                  {"Model portfolio — Growth & Income"}
                </p>
                {" "}
                <p className="snap-meta">
                  As of 31 August 2026
                </p>
                {" "}
              </div>
              {" "}
              <div className="snap-alloc">
                {" "}
                <div className="alloc-row">
                  {" "}
                  <span className="alloc-label">
                    Equities
                  </span>
                  {" "}
                  <div className="alloc-track">
                    <span className="alloc-fill" style={{ "--alloc": "42%" }} />
                  </div>
                  {" "}
                  <span className="alloc-val">
                    42%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="alloc-row">
                  {" "}
                  <span className="alloc-label">
                    Fixed income
                  </span>
                  {" "}
                  <div className="alloc-track">
                    <span className="alloc-fill fill-gold" style={{ "--alloc": "28%" }} />
                  </div>
                  {" "}
                  <span className="alloc-val">
                    28%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="alloc-row">
                  {" "}
                  <span className="alloc-label">
                    Alternatives
                  </span>
                  {" "}
                  <div className="alloc-track">
                    <span className="alloc-fill fill-mist" style={{ "--alloc": "18%" }} />
                  </div>
                  {" "}
                  <span className="alloc-val">
                    18%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="alloc-row">
                  {" "}
                  <span className="alloc-label">
                    Cash
                  </span>
                  {" "}
                  <div className="alloc-track">
                    <span className="alloc-fill fill-line" style={{ "--alloc": "12%" }} />
                  </div>
                  {" "}
                  <span className="alloc-val">
                    12%
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="snap-foot">
                {" "}
                <div className="snap-stat">
                  {" "}
                  <span className="snap-num">
                    7.9%
                  </span>
                  {" "}
                  <span className="snap-desc">
                    Net annualized · 10 yr
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="snap-stat">
                  {" "}
                  <span className="snap-num">
                    0.42%
                  </span>
                  {" "}
                  <span className="snap-desc">
                    All-in management fee
                  </span>
                  {" "}
                </div>
                {" "}
                <a href="portfolio.html" className="btn btn-ghost-dark btn-sm">
                  Review allocation
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="ticker-strip">
          {" "}
          <div className="container ticker-inner">
            {" "}
            <p className="ticker-label">
              Discipline
            </p>
            {" "}
            <p className="ticker-item">
              Long horizons
            </p>
            {" "}
            <p className="ticker-item">
              Low costs
            </p>
            {" "}
            <p className="ticker-item">
              No conflicts
            </p>
            {" "}
            <p className="ticker-item">
              Fiduciary duty
            </p>
            {" "}
            <p className="ticker-item">
              Tax-aware
            </p>
            {" "}
            <p className="ticker-item">
              Charitable
            </p>
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
                What we do
              </p>
              {" "}
              <h2 className="section-title">
                {"One firm, "}
                <em>
                  every decision.
                </em>
              </h2>
              {" "}
              <p className="section-sub">
                Investment management and financial planning under one roof, so your money is never a puzzle with missing pieces.
              </p>
              {" "}
            </div>
            {" "}
            <div className="strategy-grid">
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  📈
                </span>
                {" "}
                <h3>
                  Discretionary portfolio management
                </h3>
                {" "}
                <p>
                  We manage your assets directly — rebalancing, tax-loss harvesting and currency hedging handled quietly in the background.
                </p>
                {" "}
              </article>
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  🪙
                </span>
                {" "}
                <h3>
                  {"Wealth & estate planning"}
                </h3>
                {" "}
                <p>
                  Succession plans, trusts and charitable structures that keep your family's story — and your capital — moving forward.
                </p>
                {" "}
              </article>
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  🏢
                </span>
                {" "}
                <h3>
                  Family office services
                </h3>
                {" "}
                <p>
                  Bill pay, reporting, entity management and a single point of contact for the hundred small things a family office does.
                </p>
                {" "}
              </article>
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  ⚖️
                </span>
                {" "}
                <h3>
                  Tax-aware investing
                </h3>
                {" "}
                <p>
                  Portfolios built around your tax situation — not generic models. Harvest losses, defer gains, keep more of what compounds.
                </p>
                {" "}
              </article>
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  🎯
                </span>
                {" "}
                <h3>
                  Private market access
                </h3>
                {" "}
                <p>
                  Qualified clients can participate in vetted private equity, real assets and venture funds through our manager platform.
                </p>
                {" "}
              </article>
              {" "}
              <article className="strategy-card reveal">
                {" "}
                <span className="strategy-icon" aria-hidden="true">
                  🛟
                </span>
                {" "}
                <h3>
                  {"Exit & liquidity planning"}
                </h3>
                {" "}
                <p>
                  For founders selling a business: proceed analysis, concentrated-stock wind-down and the plan for what comes after.
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
        <section className="section section-pine">
          {" "}
          <div className="container">
            {" "}
            <div className="stat-band">
              {" "}
              <div className="stat-item reveal">
                {" "}
                <span className="stat-num">
                  $4.2B
                </span>
                {" "}
                <span className="stat-label">
                  Assets under advisement
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item reveal">
                {" "}
                <span className="stat-num">
                  7.9%
                </span>
                {" "}
                <span className="stat-label">
                  Net annualized return
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item reveal">
                {" "}
                <span className="stat-num">
                  27
                </span>
                {" "}
                <span className="stat-label">
                  Years in practice
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item reveal">
                {" "}
                <span className="stat-num">
                  380
                </span>
                {" "}
                <span className="stat-label">
                  Households served
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
        <section className="section section-sand">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                How we work
              </p>
              {" "}
              <h2 className="section-title">
                {"A calm process, "}
                <em>
                  followed every time.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="method-grid">
              {" "}
              <div className="method-step reveal">
                {" "}
                <span className="method-num">
                  01
                </span>
                {" "}
                <h3>
                  Listen
                </h3>
                {" "}
                <p>
                  Two or three conversations about your goals, constraints and the life you're trying to fund. No jargon, no pressure.
                </p>
                {" "}
              </div>
              {" "}
              <div className="method-step reveal">
                {" "}
                <span className="method-num">
                  02
                </span>
                {" "}
                <h3>
                  Design
                </h3>
                {" "}
                <p>
                  We build a written investment policy and asset allocation specific to you — then walk through it line by line.
                </p>
                {" "}
              </div>
              {" "}
              <div className="method-step reveal">
                {" "}
                <span className="method-num">
                  03
                </span>
                {" "}
                <h3>
                  Manage
                </h3>
                {" "}
                <p>
                  We run the portfolio day to day, rebalancing and harvesting taxes. You get one clean report each quarter.
                </p>
                {" "}
              </div>
              {" "}
              <div className="method-step reveal">
                {" "}
                <span className="method-num">
                  04
                </span>
                {" "}
                <h3>
                  Review
                </h3>
                {" "}
                <p>
                  Every six months we sit down — market, allocation, life changes. The plan bends before it ever breaks.
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Selected engagements
              </p>
              {" "}
              <h2 className="section-title">
                {"How we've helped "}
                <em>
                  families and founders.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="case-grid">
              {" "}
              <article className="case-card reveal">
                {" "}
                <img src={a3} alt="Portfolio review meeting" loading="lazy" />
                {" "}
                <div className="case-body">
                  {" "}
                  <span className="case-tag">
                    Manufacturing founder
                  </span>
                  {" "}
                  <h3>
                    Exit of a $140M machinery business
                  </h3>
                  {" "}
                  <p>
                    Designed a five-year concentrated-stock wind-down that delivered liquidity while deferring $8M in capital gains.
                  </p>
                  {" "}
                  <p className="case-result">
                    <span>
                      Net gains deferred
                    </span>
                    {" "}
                    <strong>
                      $8.1M
                    </strong>
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="case-card reveal">
                {" "}
                <img src={a4} alt="Family office meeting" loading="lazy" />
                {" "}
                <div className="case-body">
                  {" "}
                  <span className="case-tag">
                    Three-generation family
                  </span>
                  {" "}
                  <h3>
                    Family office for a real-estate dynasty
                  </h3>
                  {" "}
                  <p>
                    Consolidated 14 accounts, 3 trusts and 2 companies into one dashboard — and one accountable investment team.
                  </p>
                  {" "}
                  <p className="case-result">
                    <span>
                      Accounts consolidated
                    </span>
                    {" "}
                    <strong>
                      14 → 1
                    </strong>
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="case-card reveal">
                {" "}
                <img src={a5} alt="Philanthropy planning" loading="lazy" />
                {" "}
                <div className="case-body">
                  {" "}
                  <span className="case-tag">
                    Physician couple
                  </span>
                  {" "}
                  <h3>
                    A practice, a pension and a dream
                  </h3>
                  {" "}
                  <p>
                    Built a tax-efficient withdrawal strategy that funds a planned retirement at 55 — and a foundation that outlives them.
                  </p>
                  {" "}
                  <p className="case-result">
                    <span>
                      Real return target
                    </span>
                    {" "}
                    <strong>
                      5.2% net
                    </strong>
                  </p>
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
        <section className="section section-sand">
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
                {"What our clients "}
                <em>
                  tell us.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="tst-grid">
              {" "}
              <div className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a6} alt="Margaret Ellison" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Margaret Ellison
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Founder, Ellison Manufacturing
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  {"\"When we sold the company, everyone had advice. Calder & Ash were the only ones who asked about our grandchildren before they talked about beta.\""}
                </p>
                {" "}
              </div>
              {" "}
              <div className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a7} alt="David Chen" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      David Chen, M.D.
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Partner, Riverside Medical Group
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  "I used to check my accounts every morning. Now I check once a quarter, because the report is genuinely readable and the plan actually works."
                </p>
                {" "}
              </div>
              {" "}
              <div className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a8} alt="Nadia Okafor" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Nadia Okafor
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Principal, Okafor Family Office
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  "Three generations in, they still answer every question as if it were the first. That consistency is why we've stayed for twenty years."
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                From the journal
              </p>
              {" "}
              <h2 className="section-title">
                {"Recent "}
                <em>
                  insights.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a9} alt="Quarterly market outlook" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Market outlook · August 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="insights.html">
                      The quarter in one chart: why patience is still the strategy
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Our capital markets team on growth, rates and the two things that actually moved portfolios this quarter.
                  </p>
                  {" "}
                  <a href="insights.html" className="post-link">
                    Read the note →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a10} alt="Estate planning checklist" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Planning · July 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="insights.html">
                      The estate checklist we give every new client
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Seven documents, four conversations and one weekend — the practical first steps of getting your house in order.
                  </p>
                  {" "}
                  <a href="insights.html" className="post-link">
                    Read the note →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a11} alt="Founder exit planning" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Founders · June 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="insights.html">
                      Before you sell: the liquidity plan no one mentions at closing
                    </a>
                  </h3>
                  {" "}
                  <p>
                    What happens in the five years after a business sale, and why most founders underestimate it.
                  </p>
                  {" "}
                  <a href="insights.html" className="post-link">
                    Read the note →
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
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow">
              Begin the conversation
            </p>
            {" "}
            <h2 className="cta-title">
              {"Your money, "}
              <em>
                finally uncomplicated.
              </em>
            </h2>
            {" "}
            <p className="cta-sub">
              A complimentary consultation. No fees, no forecasts disguised as guarantees — just an honest look at where you stand.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Book a consultation
              </a>
              {" "}
              <a href="about.html" className="btn btn-ghost-dark">
                Meet the firm
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-col">
            {" "}
            <a href="index.html" className="brand footer-brand">
              {" "}
              <span className="brand-mark" aria-hidden="true" />
              {" "}
              <span className="brand-text">
                Calder
                <span>
                  {"&Ash"}
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              A boutique private investment advisory serving families and founders since 1998. Registered with the SEC as an investment adviser.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                LI
              </a>
              {" "}
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                X
              </a>
              {" "}
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                YT
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Advice
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="service.html">
                  Portfolio management
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Wealth planning
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Family office
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Exit planning
                </a>
              </li>
              {" "}
              <li>
                <a href="portfolio.html">
                  Track record
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              The firm
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="about.html">
                  {"About Calder & Ash"}
                </a>
              </li>
              {" "}
              <li>
                <a href="team.html">
                  Our advisors
                </a>
              </li>
              {" "}
              <li>
                <a href="insights.html">
                  Insights
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  {"Contact & directions"}
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  Disclosures
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Find us
            </h3>
            {" "}
            <ul className="footer-links footer-contact">
              {" "}
              <li>
                One Maiden Lane, 41st Floor
                <br />
                New York, NY 10038
              </li>
              {" "}
              <li>
                <a href="tel:+12125550198">
                  +1 (212) 555-0198
                </a>
              </li>
              {" "}
              <li>
                <a href="mailto:advice@calderandash.example">
                  advice@calderandash.example
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <form className="newsletter" data-form="" noValidate={true}>
              {" "}
              <label htmlFor="nl-email" className="sr-only">
                Email for our quarterly letter
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder="Get the quarterly letter" required={true} />
              {" "}
              <button type="submit" className="btn btn-primary btn-sm">
                Join
              </button>
              {" "}
              <p className="form-msg form-ok">
                Welcome — first letter lands this quarter.
              </p>
              {" "}
              <p className="form-msg form-err">
                Please enter a valid email address.
              </p>
              {" "}
            </form>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="footer-bottom">
          {" "}
          <div className="container">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Calder & Ash Wealth Advisors LLC. All rights reserved."}
            </p>
            {" "}
            <p>
              Past performance is not a guarantee of future results.
            </p>
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
