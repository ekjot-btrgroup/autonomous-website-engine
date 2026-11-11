// Converted from the HTML template startup-launch-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/user.webp";
import a3 from "./assets/testimonial-1.webp";
import a4 from "./assets/testimonial-2.webp";
import a5 from "./assets/vendor-1.webp";
import a6 from "./assets/vendor-2.webp";
import a7 from "./assets/vendor-3.webp";
import a8 from "./assets/vendor-4.webp";
import a9 from "./assets/vendor-5.webp";
import a10 from "./assets/vendor-6.webp";
import a11 from "./assets/vendor-7.webp";
import a12 from "./assets/vendor-8.webp";
import a13 from "./assets/vendor-9.webp";
import a14 from "./assets/feature.webp";
import a15 from "./assets/team-1.webp";
import a16 from "./assets/team-2.webp";
import a17 from "./assets/team-3.webp";
import a18 from "./assets/testimonial-3.webp";
import a19 from "./assets/testimonial-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-startup-launch-2bc5">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              <span className="logo-mark">
                ⚡
              </span>
              IGNITE
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                About
              </a>
              {" "}
              <a href="services.html" className="nav-link">
                Services
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Get Started
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img className="active" src={a0} alt="Startup team planning a product launch around a table" />
          {" "}
          <img src={a1} alt="Growth analytics dashboard tracking a live product launch" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container hero-content">
          {" "}
          <span className="hero-tag">
            <span className="pulse" />
            Launch season is open
          </span>
          {" "}
          <h1 className="hero-title">
            Launch your product.
            <br />
            <span className="grad-text">
              Ignite your growth.
            </span>
          </h1>
          {" "}
          <p className="hero-sub">
            The all-in-one platform that helps startups ship faster, validate with real users, and scale with confidence — from first commit to full-scale launch.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="contact.html" className="btn btn--primary">
              Start Free Trial
            </a>
            {" "}
            <a href="services.html" className="btn btn--ghost">
              Explore Services
            </a>
            {" "}
          </div>
          {" "}
          <div className="hero-trust">
            {" "}
            <div className="avatars">
              {" "}
              <img src={a2} alt="Founder smiling" loading="lazy" />
              {" "}
              <img src={a3} alt="Startup founder portrait" loading="lazy" />
              {" "}
              <img src={a4} alt="Product manager portrait" loading="lazy" />
              {" "}
            </div>
            {" "}
            <span>
              <strong>
                2,000+ startups
              </strong>
              {" launched with IGNITE"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="logo-strip reveal">
        {" "}
        <div className="container">
          {" "}
          <p className="logo-strip-label">
            Trusted by teams at
          </p>
          {" "}
          <div className="logo-strip-grid">
            {" "}
            <a href="#">
              <img src={a5} alt="VentureOne company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a6} alt="Northbeam company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a7} alt="Cloudline company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a8} alt="Stacklab company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a9} alt="Foundry HQ company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a10} alt="Pixeldash company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a11} alt="Launchpad company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a12} alt="Scaleup company logo" loading="lazy" />
            </a>
            {" "}
            <a href="#">
              <img src={a13} alt="Brightpath company logo" loading="lazy" />
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--tint">
        {" "}
        <div className="container">
          {" "}
          <div className="feature-split">
            {" "}
            <div className="feature-media reveal">
              {" "}
              <img src={a14} alt="IGNITE launch dashboard showing campaign analytics" loading="lazy" />
              {" "}
              <div className="feature-badge">
                {" "}
                <span className="fb-icon">
                  🚀
                </span>
                {" "}
                <div>
                  <strong>
                    3.2×
                  </strong>
                  <span>
                    faster time-to-market
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-copy">
              {" "}
              <span className="section-eyebrow">
                Why IGNITE
              </span>
              {" "}
              <h2 className="section-title">
                Everything you need to go from idea to launch
              </h2>
              {" "}
              <p className="section-sub">
                Stop juggling spreadsheets, docs, and a dozen tools. IGNITE unifies your entire launch workflow so your team can move at startup speed.
              </p>
              {" "}
              <ul className="feature-list">
                {" "}
                <li className="feature-item reveal">
                  {" "}
                  <span className="feature-check">
                    ✓
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Ship in days, not months
                    </strong>
                    <p>
                      Pre-built launch playbooks and templates collapse your timeline from six months to six weeks.
                    </p>
                  </div>
                  {" "}
                </li>
                {" "}
                <li className="feature-item reveal">
                  {" "}
                  <span className="feature-check">
                    ✓
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Validate with real users
                    </strong>
                    <p>
                      Spin up beta cohorts, collect structured feedback, and prove demand before you invest.
                    </p>
                  </div>
                  {" "}
                </li>
                {" "}
                <li className="feature-item reveal">
                  {" "}
                  <span className="feature-check">
                    ✓
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Iterate with data
                    </strong>
                    <p>
                      Live dashboards surface what resonates — so every release is smarter than the last.
                    </p>
                  </div>
                  {" "}
                </li>
                {" "}
                <li className="feature-item reveal">
                  {" "}
                  <span className="feature-check">
                    ✓
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Scale without limits
                    </strong>
                    <p>
                      From your first hundred users to your first hundred thousand, the platform grows with you.
                    </p>
                  </div>
                  {" "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--outline" style={{ marginTop: "32px" }}>
                Learn Our Story
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
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="section-eyebrow">
              What we do
            </span>
            {" "}
            <h2 className="section-title">
              Launch services that cover every base
            </h2>
            {" "}
            <p className="section-sub">
              Six specialised service lines, one coordinated launch team. Pick a single service or run a full end-to-end engagement.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                🚀
              </div>
              {" "}
              <h3>
                Launch Strategy
              </h3>
              {" "}
              <p>
                Market analysis, positioning, and a sequenced go-to-market roadmap built around your category — not guesswork.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
              </a>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                🎨
              </div>
              {" "}
              <h3>
                Product Design
              </h3>
              {" "}
              <p>
                Research-driven UX and pixel-perfect interfaces that make your product feel premium from the very first screen.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
              </a>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                ⚙️
              </div>
              {" "}
              <h3>
                Development
              </h3>
              {" "}
              <p>
                Scalable architecture and clean engineering that ships fast now and stays maintainable as you grow.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
              </a>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                📈
              </div>
              {" "}
              <h3>
                Growth Marketing
              </h3>
              {" "}
              <p>
                Acquisition channels, lifecycle campaigns, and conversion experiments that compound your user base.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
              </a>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                🔍
              </div>
              {" "}
              <h3>
                {"Analytics & Insights"}
              </h3>
              {" "}
              <p>
                Instrumentation and reporting that turn raw product events into clear, confident decisions.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
              </a>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-icon">
                🛠️
              </div>
              {" "}
              <h3>
                Launch Operations
              </h3>
              {" "}
              <p>
                Launch-day coordination — comms, stakeholder alignment, and go/no-go checks that keep release day calm.
              </p>
              {" "}
              <a href="services.html" className="service-link">
                Learn more →
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
      {" "}
      <section className="section stats-band">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat reveal">
              {" "}
              <div className="stat-number">
                2,000+
              </div>
              {" "}
              <div className="stat-label">
                Startups launched
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal">
              {" "}
              <div className="stat-number">
                4.9/5
              </div>
              {" "}
              <div className="stat-label">
                Average client rating
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal">
              {" "}
              <div className="stat-number">
                3.2×
              </div>
              {" "}
              <div className="stat-label">
                Faster time-to-market
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal">
              {" "}
              <div className="stat-number">
                120+
              </div>
              {" "}
              <div className="stat-label">
                Countries served
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
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="section-eyebrow">
              The team
            </span>
            {" "}
            <h2 className="section-title">
              Operators who have launched before
            </h2>
            {" "}
            <p className="section-sub">
              Founders, engineers, and marketers who have shipped products at every stage — from garage to global.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <article className="team-card reveal">
              {" "}
              <div className="team-photo">
                {" "}
                <img src={a15} alt="Maya Chen, co-founder and CEO of IGNITE" loading="lazy" />
                {" "}
                <span className="team-role-tag">
                  {"CEO & Co-founder"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  Maya Chen
                </h3>
                {" "}
                <div className="team-role">
                  {"CEO & Co-founder"}
                </div>
                {" "}
                <p className="team-bio">
                  Three-time founder with two exits. Maya built IGNITE after watching too many great products die in the gap between "built" and "launched."
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal">
              {" "}
              <div className="team-photo">
                {" "}
                <img src={a16} alt="David Okafor, chief technology officer of IGNITE" loading="lazy" />
                {" "}
                <span className="team-role-tag">
                  CTO
                </span>
                {" "}
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  David Okafor
                </h3>
                {" "}
                <div className="team-role">
                  Chief Technology Officer
                </div>
                {" "}
                <p className="team-bio">
                  Former infrastructure lead at a Fortune 500 scale-up. David obsesses over systems that stay fast and stable when traffic spikes on launch day.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal">
              {" "}
              <div className="team-photo">
                {" "}
                <img src={a17} alt="Sofia Ramirez, head of product design at IGNITE" loading="lazy" />
                {" "}
                <span className="team-role-tag">
                  Design Lead
                </span>
                {" "}
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  Sofia Ramirez
                </h3>
                {" "}
                <div className="team-role">
                  Head of Product Design
                </div>
                {" "}
                <p className="team-bio">
                  Sofia leads a design practice that treats launch as a craft — turning complex products into interfaces users understand in seconds, not minutes.
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
      {" "}
      <section className="section section--tint">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="section-eyebrow">
              Wall of love
            </span>
            {" "}
            <h2 className="section-title">
              Founders on what changed
            </h2>
            {" "}
            <p className="section-sub">
              Real words from teams who went from roadmap to revenue with IGNITE by their side.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <article className="testimonial-card reveal">
              {" "}
              <span className="quote-mark">
                "
              </span>
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                We were stuck in a six-month launch loop. IGNITE compressed our go-to-market into eight weeks and we closed our seed round on the back of the launch momentum.
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a3} alt="Portrait of Jonas Weber" loading="lazy" />
                {" "}
                <div>
                  <strong>
                    Jonas Weber
                  </strong>
                  <span>
                    CEO, Loopform
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
                "
              </span>
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                The beta cohort feature alone was worth it. We validated with 400 real users before spending a dollar on paid acquisition — our CAC is half of what we budgeted.
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a4} alt="Portrait of Amara Diallo" loading="lazy" />
                {" "}
                <div>
                  <strong>
                    Amara Diallo
                  </strong>
                  <span>
                    Founder, Kindred Health
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
                "
              </span>
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                Launch day used to mean all-nighters and panic. With IGNITE's ops playbook, our launch was the calmest day of the quarter — and the most successful one, too.
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a18} alt="Portrait of Leo Martins" loading="lazy" />
                {" "}
                <div>
                  <strong>
                    Leo Martins
                  </strong>
                  <span>
                    COO, Fieldnote
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
                "
              </span>
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                The analytics told us things our intuition got wrong. We pivoted our positioning three weeks before launch based on real data — and it doubled our conversion rate.
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a19} alt="Portrait of Priya Nair" loading="lazy" />
                {" "}
                <div>
                  <strong>
                    Priya Nair
                  </strong>
                  <span>
                    VP Product, Strive
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
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-banner reveal">
            {" "}
            <h2 className="cta-title">
              Ready to ignite your next launch?
            </h2>
            {" "}
            <p className="cta-desc">
              Join 2,000+ startups who trust IGNITE to turn ambitious ideas into shipped, scaled products.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="contact.html" className="btn btn--white">
                Start Free Trial
              </a>
              {" "}
              <a href="services.html" className="btn btn--ghost">
                See Pricing
              </a>
              {" "}
            </div>
            {" "}
            <p className="cta-note">
              No credit card required · Cancel anytime · Set up in minutes
            </p>
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
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand">
                <span className="logo-mark">
                  ⚡
                </span>
                IGNITE
              </div>
              {" "}
              <p className="footer-desc">
                The product-launch platform for modern startups. We help ambitious teams ship faster, validate smarter, and grow further.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Company
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                {" "}
                <a href="about.html" className="footer-link">
                  Our Team
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html" className="footer-link">
                  Launch Strategy
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Product Design
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Growth Marketing
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Pricing
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Resources
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="#" className="footer-link">
                  Launch Playbooks
                </a>
                {" "}
                <a href="#" className="footer-link">
                  Help Center
                </a>
                {" "}
                <a href="#" className="footer-link">
                  API Docs
                </a>
                {" "}
                <a href="#" className="footer-link">
                  Changelog
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" IGNITE. All rights reserved."}
            </span>
            {" "}
            <span>
              Built for startups ⚡
            </span>
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
