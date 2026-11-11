// Converted from the HTML template insurance-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-client-1.webp";
import a1 from "./assets/img-hero.webp";
import a2 from "./assets/img-hero-illustration.webp";
import a3 from "./assets/img-about-1.webp";
import a4 from "./assets/img-client-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-insurance-b123">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <div className="topbar-left">
            {" "}
            <span className="topbar-item">
              {" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
              </svg>
              {" "}
              <a href="tel:+12125550180">
                +1 (212) 555-0180
              </a>
              {" "}
            </span>
            {" "}
            <span className="topbar-item">
              {" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
              {" "}
              <a href="mailto:hello@assureshield.com">
                hello@assureshield.com
              </a>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar-right">
            {" "}
            <div className="topbar-socials">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24">
                  <path d="M17.5 3h3l-6.6 7.6L21.8 21h-6.1l-4.8-6.2L5.4 21h-3l7-8.1L2.4 3h6.3l4.3 5.7L17.5 3Zm-1 16h1.7L7.7 4.8H5.9L16.5 19Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8.8v11H3.2v-11h3.3ZM4.9 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 13.4v6.4h-3.3v-5.7c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v5.9h-3.3V8.8h3.3v1.5c.4-.7 1.2-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.8-7.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM17.5 3.4h-11A3.6 3.6 0 0 0 2.9 7v10a3.6 3.6 0 0 0 3.6 3.6h11A3.6 3.6 0 0 0 21.1 17V7a3.6 3.6 0 0 0-3.6-3.6Zm2 13.6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10Z" />
                </svg>
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
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24">
                <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
              </svg>
              {" "}
            </span>
            {" "}
            <span className="brand-text">
              {" "}
              <span className="brand-name">
                AssureShield
              </span>
              {" "}
              <span className="brand-tag">
                {"Insurance & Protection"}
              </span>
              {" "}
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav-links" aria-label="Primary">
            {" "}
            <a className="nav-link" href="index.html">
              Home
            </a>
            {" "}
            <a className="nav-link" href="about.html">
              About
            </a>
            {" "}
            <a className="nav-link" href="services.html">
              Services
            </a>
            {" "}
            <a className="nav-link" href="blog.html">
              Blog
            </a>
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="nav-cta">
            {" "}
            <a className="btn btn--gold" href="contact.html">
              Get a Free Quote
            </a>
            {" "}
          </div>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero">
          {" "}
          <div className="container hero-grid">
            {" "}
            <div className="hero-copy">
              {" "}
              <span className="hero-badge">
                Trusted Since 1999
              </span>
              {" "}
              <h1 className="hero-title">
                Protecting What Matters Most
                <span>
                  With Plans That Fit Your Life
                </span>
              </h1>
              {" "}
              <p className="hero-lead">
                From your family's health to the home you've built, AssureShield pairs you with a dedicated agent who finds the right coverage — at a price that makes sense.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn btn--gold" href="contact.html">
                  {" Get a Free Quote "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="btn btn--ghost" href="services.html">
                  Explore Coverage
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-points">
                {" "}
                <span className="hero-point">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Z" />
                  </svg>
                  {" 24/7 claims support"}
                </span>
                {" "}
                <span className="hero-point">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Z" />
                  </svg>
                  {" 30-day money-back guarantee"}
                </span>
                {" "}
                <span className="hero-point">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Z" />
                  </svg>
                  {" A-rated financial strength"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero-visual">
              {" "}
              <img src={a2} alt="A family reviewing their protection plan with an AssureShield agent" width="500" height="400" />
              {" "}
              <div className="hero-card-2">
                ✓ Claim approved in 48h
              </div>
              {" "}
              <div className="hero-card">
                {" "}
                <span className="hero-card-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Z" />
                  </svg>
                </span>
                {" "}
                <span>
                  {" "}
                  <strong>
                    99.2%
                  </strong>
                  {" "}
                  <span>
                    claims settled fairly
                  </span>
                  {" "}
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
        {" "}
        <section className="stats-band">
          {" "}
          <div className="container stats-grid">
            {" "}
            <div className="stat reveal">
              {" "}
              <div className="stat-num" data-count="129">
                129+
              </div>
              {" "}
              <div className="stat-label">
                Insurance Policies
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal reveal-delay-1">
              {" "}
              <div className="stat-num">
                99+
              </div>
              {" "}
              <div className="stat-label">
                Awards Won
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal reveal-delay-2">
              {" "}
              <div className="stat-num">
                556+
              </div>
              {" "}
              <div className="stat-label">
                Skilled Agents
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat reveal reveal-delay-3">
              {" "}
              <div className="stat-num">
                967+
              </div>
              {" "}
              <div className="stat-label">
                Team Members
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
              <span className="eyebrow eyebrow--center">
                Our Coverage
              </span>
              {" "}
              <h2 className="section-title">
                {"Insurance Built Around "}
                <em>
                  Your Life
                </em>
              </h2>
              {" "}
              <p className="section-sub">
                Every plan is tailored by a licensed agent who knows your situation — never a one-size-fits-all policy.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <span className="service-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Life Insurance
                </h3>
                {" "}
                <p>
                  Secure your family's future with term, whole and universal life plans that grow with every milestone.
                </p>
                {" "}
                <a className="service-more" href="services.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal reveal-delay-1">
                {" "}
                <span className="service-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6.6 5.5 5.5 0 0 1 21.5 12c-2.5 4.4-9.5 9-9.5 9Zm0-3.3c2-1.6 6.5-4.9 6.5-7.9a3.3 3.3 0 0 0-6.5-1.3A3.3 3.3 0 0 0 5.5 9.8c0 3 4.5 6.3 6.5 7.9Z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Health Insurance
                </h3>
                {" "}
                <p>
                  Comprehensive medical coverage with nationwide networks, preventive care and predictable premiums.
                </p>
                {" "}
                <a className="service-more" href="services.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal reveal-delay-2">
                {" "}
                <span className="service-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 11h14a1 1 0 0 1 1 1v4h-1v1a2 2 0 1 1-4 0v-1H9v1a2 2 0 1 1-4 0v-1H4v-4a1 1 0 0 1 1-1Zm1-1A5 5 0 0 1 16 6a4 4 0 0 1 0 8H7l-1-4Zm1.3-2.2L9.5 10h4.5a2.8 2.8 0 0 0 .5-5.5A3.5 3.5 0 0 0 8.2 7.8Z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Car Insurance
                </h3>
                {" "}
                <p>
                  Liability, collision and comprehensive options with roadside assistance and rapid accident response.
                </p>
                {" "}
                <a className="service-more" href="services.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal reveal-delay-3">
                {" "}
                <span className="service-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 21V9l8-6 8 6v12h-6v-6h-4v6H4Zm3 0h2v-3H7v3Zm0-5h2v-3H7v3Zm4 0h2v-3h-2v3Zm4 0h2v-3h-2v3Zm0 5h2v-3h-2v3Z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Home Insurance
                </h3>
                {" "}
                <p>
                  Protect your home and belongings against fire, theft, weather and liability — with flexible deductibles.
                </p>
                {" "}
                <a className="service-more" href="services.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
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
        <section className="section section--tint">
          {" "}
          <div className="container split">
            {" "}
            <div className="split-photo reveal">
              {" "}
              <img src={a3} alt="AssureShield advisors supporting members in the office" width="500" height="250" />
              {" "}
              <div className="split-badge">
                {" "}
                <strong>
                  25+
                </strong>
                {" "}
                <span>
                  Years of Trust
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-copy reveal reveal-delay-1">
              {" "}
              <span className="eyebrow">
                Why AssureShield
              </span>
              {" "}
              <h2>
                {"A Partner You Can Count On, "}
                <em>
                  Through Every Chapter
                </em>
              </h2>
              {" "}
              <p>
                For over two decades, AssureShield has protected families, drivers, homeowners and businesses across the country. We measure success not in policies sold, but in claims paid and peace of mind delivered.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li className="check-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
                  </svg>
                  {" Dedicated agent for every member"}
                </li>
                {" "}
                <li className="check-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
                  </svg>
                  {" Transparent pricing, no hidden fees"}
                </li>
                {" "}
                <li className="check-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
                  </svg>
                  {" Fast, fair claims process"}
                </li>
                {" "}
                <li className="check-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Zm-2.4 12.5 5-5.2-1.3-1.3-3.7 3.9-1.9-1.9L6.4 11l3.2 3.5Z" />
                  </svg>
                  {" Rated A (Excellent) by industry analysts"}
                </li>
                {" "}
              </ul>
              {" "}
              <a className="btn btn--outline" href="about.html">
                Discover Our Story
              </a>
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
            <div className="tst-wrap reveal">
              {" "}
              <blockquote className="tst-quote">
                "After a sudden medical emergency, AssureShield's team handled everything — the hospital was paid in days and I never felt alone. This is what an insurer should feel like."
              </blockquote>
              {" "}
              <div className="tst-avatar">
                {" "}
                <img src={a4} alt="Portrait of Sarah Mitchell" width="58" height="58" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Sarah Mitchell
                  </strong>
                  {" "}
                  <span>
                    Health Member since 2018
                  </span>
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
        {" "}
        <section className="section cta-section">
          {" "}
          <div className="container cta-inner">
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow" style={{ color: "var(--clr-gold-bright)" }}>
                Free, No-Obligation Quote
              </span>
              {" "}
              <h2>
                {"Get Protected Today — "}
                <em>
                  In Under Five Minutes
                </em>
              </h2>
              {" "}
              <p>
                Answer a few quick questions and a licensed AssureShield agent will build a plan around your budget. No pressure, no obligation.
              </p>
              {" "}
            </div>
            {" "}
            <div className="cta-actions reveal reveal-delay-1">
              {" "}
              <a className="btn btn--gold" href="contact.html">
                Request a Quote
              </a>
              {" "}
              <a className="cta-phone" href="tel:+12125550180">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                </svg>
                {" "}
                <span>
                  <small>
                    Call us free
                  </small>
                  +1 (212) 555-0180
                </span>
                {" "}
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
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-brand">
            {" "}
            <a className="brand" href="index.html">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 20 5.5v5.2c0 4.8-3 7.6-8 9.3-5-1.7-8-4.5-8-9.3V5.5L12 2Z" />
                </svg>
                {" "}
              </span>
              {" "}
              <span className="brand-text">
                {" "}
                <span className="brand-name">
                  AssureShield
                </span>
                {" "}
                <span className="brand-tag">
                  {"Insurance & Protection"}
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <p>
              Independent, member-first insurance since 1999. Life, health, car and home coverage backed by a local team and a national promise.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24">
                  <path d="M17.5 3h3l-6.6 7.6L21.8 21h-6.1l-4.8-6.2L5.4 21h-3l7-8.1L2.4 3h6.3l4.3 5.7L17.5 3Zm-1 16h1.7L7.7 4.8H5.9L16.5 19Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8.8v11H3.2v-11h3.3ZM4.9 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 13.4v6.4h-3.3v-5.7c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v5.9h-3.3V8.8h3.3v1.5c.4-.7 1.2-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.8-7.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM17.5 3.4h-11A3.6 3.6 0 0 0 2.9 7v10a3.6 3.6 0 0 0 3.6 3.6h11A3.6 3.6 0 0 0 21.1 17V7a3.6 3.6 0 0 0-3.6-3.6Zm2 13.6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10Z" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Quick Links
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="index.html">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  About Us
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Our Services
                </a>
              </li>
              {" "}
              <li>
                <a href="blog.html">
                  Insurance Blog
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Contact
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
              Coverage
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="services.html">
                  Life Insurance
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Health Insurance
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Car Insurance
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Home Insurance
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Get a Quote
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
              Get In Touch
            </h3>
            {" "}
            <ul className="footer-contact">
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
                </svg>
                {" "}
                <span>
                  220 Meridian Avenue, Suite 400
                  <br />
                  New York, NY 10001
                </span>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                </svg>
                {" "}
                <a href="tel:+12125550180">
                  +1 (212) 555-0180
                </a>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
                {" "}
                <a href="mailto:hello@assureshield.com">
                  hello@assureshield.com
                </a>
                {" "}
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
          <div className="container footer-bottom-inner">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" AssureShield Insurance. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Licensed & rated A (Excellent) · "}
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
