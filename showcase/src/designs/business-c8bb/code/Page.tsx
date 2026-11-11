// Converted from the HTML template business-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/slider-1.webp";
import a1 from "./assets/slider-2.webp";
import a2 from "./assets/slider-3.webp";
import a3 from "./assets/client-1.webp";
import a4 from "./assets/client-2.webp";
import a5 from "./assets/client-3.webp";
import a6 from "./assets/client-4.webp";
import a7 from "./assets/client-5.webp";
import a8 from "./assets/client-6.webp";
import a9 from "./assets/client-7.webp";
import a10 from "./assets/client-8.webp";
import a11 from "./assets/about.webp";
import a12 from "./assets/testimonial-1.webp";
import a13 from "./assets/testimonial-2.webp";
import a14 from "./assets/testimonial-3.webp";
import a15 from "./assets/banner.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-business-c8bb">
      {" "}
      {" "}
      <header className="site-header" role="banner">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <span className="mark">
              N
            </span>
            {" "}
            <span>
              {"Northbridge "}
              <small>
                Consulting
              </small>
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" role="navigation" aria-label="Main navigation">
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav-links" id="nav-links">
              {" "}
              <li>
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html" className="nav-link">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="portfolio.html" className="nav-link">
                  Portfolio
                </a>
              </li>
              {" "}
              <li>
                <a href="price.html" className="nav-link">
                  Pricing
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <a href="contact.html" className="btn btn-brass header-cta">
              Book a Call
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main role="main">
        {" "}
        {" "}
        <section className="hero" aria-label="Hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
            <img src={a2} alt="" />
            {" "}
          </div>
          {" "}
          <div className="container hero-inner">
            {" "}
            <div className="eyebrow">
              Since 2012
            </div>
            {" "}
            <h1>
              {"Where "}
              <em>
                Strategy
              </em>
              {" Meets Execution"}
            </h1>
            {" "}
            <p className="lead">
              Northbridge partners with ambitious enterprises to clarify direction, accelerate growth, and build lasting competitive advantage. No fluff, just results.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="service.html" className="btn btn-brass">
                Explore Our Services
              </a>
              {" "}
              <a href="contact.html" className="btn btn-outline">
                Get in Touch
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div>
                <strong>
                  240+
                </strong>
                <span>
                  Clients
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  98%
                </strong>
                <span>
                  Retention
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  $2.1B
                </strong>
                <span>
                  Value Created
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section-paper reveal" aria-label="Our clients">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head center reveal">
              {" "}
              <p className="eyebrow">
                Trusted Partners
              </p>
              {" "}
              <p>
                Leading organisations that rely on Northbridge for strategic counsel.
              </p>
              {" "}
            </div>
            {" "}
            <div className="logo-strip reveal">
              {" "}
              <img src={a3} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a4} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a5} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a6} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a7} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a8} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a9} alt="Client logo" loading="lazy" />
              {" "}
              <img src={a10} alt="Client logo" loading="lazy" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section reveal" aria-label="Services overview">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head reveal">
              {" "}
              <p className="eyebrow">
                What We Do
              </p>
              {" "}
              <h2>
                {"End-to-end advisory that "}
                <em>
                  moves the needle
                </em>
              </h2>
              {" "}
              <p>
                From market entry to operational transformation, our teams bring rigour, experience, and a relentless focus on outcomes.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  ⛅
                </div>
                {" "}
                <h3>
                  Corporate Strategy
                </h3>
                {" "}
                <p>
                  {"Portfolio audits, growth roadmaps, and M&A advisory to sharpen your competitive edge."}
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  ⚙
                </div>
                {" "}
                <h3>
                  {"Operations & Transformation"}
                </h3>
                {" "}
                <p>
                  Lean process improvement, digital enablement, and supply-chain optimisation at scale.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  📊
                </div>
                {" "}
                <h3>
                  {"Data & Analytics"}
                </h3>
                {" "}
                <p>
                  Actionable intelligence frameworks, KPI architecture, and predictive modelling.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  🌐
                </div>
                {" "}
                <h3>
                  Market Expansion
                </h3>
                {" "}
                <p>
                  Go-to-market strategies, competitive landscaping, and cross-border entry support.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  👥
                </div>
                {" "}
                <h3>
                  {"Leadership & Talent"}
                </h3>
                {" "}
                <p>
                  Executive coaching, organisational design, and culture transformation.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-icon">
                  💳
                </div>
                {" "}
                <h3>
                  Financial Advisory
                </h3>
                {" "}
                <p>
                  Capital structuring, risk management, and valuation services for complex decisions.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  Learn More
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
        <section className="section section-navy reveal" aria-label="Key metrics">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head center reveal">
              {" "}
              <h2>
                {"Measured in "}
                <em>
                  impact
                </em>
              </h2>
              {" "}
              <p>
                The numbers behind two decades of advisory excellence.
              </p>
              {" "}
            </div>
            {" "}
            <div className="stats-band reveal">
              {" "}
              <div className="stat">
                <b>
                  240+
                </b>
                <span>
                  Corporate Clients
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  98%
                </b>
                <span>
                  Client Retention
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  $2.1B
                </b>
                <span>
                  Client Value Created
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  14
                </b>
                <span>
                  Global Offices
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section reveal" aria-label="About Northbridge">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-media reveal">
                {" "}
                <img src={a11} alt="Northbridge team in a strategy session" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="reveal">
                {" "}
                <p className="eyebrow">
                  About Us
                </p>
                {" "}
                <h2>
                  {"Built by "}
                  <em>
                    practitioners
                  </em>
                  , not consultants
                </h2>
                {" "}
                <p>
                  {"Northbridge was founded by former C-suite executives who saw the gap between high-level strategy and ground-level execution. Every engagement is led by someone who has run a P&L, managed a turnaround, or scaled a business."}
                </p>
                {" "}
                <ul className="checklist">
                  {" "}
                  <li>
                    Founded 2012, headquartered in London
                  </li>
                  {" "}
                  <li>
                    Team of 60+ senior advisors across four continents
                  </li>
                  {" "}
                  <li>
                    Average partner tenure: 14 years of industry experience
                  </li>
                  {" "}
                  <li>
                    Over 240 engagements delivered across 19 sectors
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="about.html" className="btn btn-navy mt-2">
                  Our Story
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
        <section className="section section-paper reveal" aria-label="Testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head center reveal">
              {" "}
              <p className="eyebrow">
                Client Voices
              </p>
              {" "}
              <h2>
                {"What our partners "}
                <em>
                  say
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="testi reveal">
              {" "}
              <blockquote className="testi-card">
                {" "}
                <p>
                  Northbridge's strategic review reshaped our entire approach to market expansion. Within 18 months we had entered three new territories — a result that exceeded our own projections.
                </p>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a12} alt="" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <b>
                      Elena Voss
                    </b>
                    {" "}
                    <span>
                      CEO, Voss Industries
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testi-card">
                {" "}
                <p>
                  The operational transformation programme Northbridge designed cut our time-to-market by 40% while improving quality metrics across the board. Their team integrated seamlessly with ours.
                </p>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a13} alt="" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <b>
                      James Koranteng
                    </b>
                    {" "}
                    <span>
                      COO, Meridian Group
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testi-card">
                {" "}
                <p>
                  What sets Northbridge apart is their willingness to be measured on outcomes. They don't just advise — they own the results alongside you. A rare partnership model.
                </p>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a14} alt="" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <b>
                      Sarah Chen
                    </b>
                    {" "}
                    <span>
                      Founder, Pulse Health
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section reveal" aria-label="Call to action">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-band">
              {" "}
              <img src={a15} alt="" loading="lazy" aria-hidden="true" />
              {" "}
              <div className="cta-flex">
                {" "}
                <div>
                  {" "}
                  <h2>
                    {"Ready to move "}
                    <em>
                      faster
                    </em>
                    ?
                  </h2>
                  {" "}
                  <p>
                    Book a complimentary strategic briefing. No pitch, no obligation — just a candid conversation about where you are and where you want to be.
                  </p>
                  {" "}
                </div>
                {" "}
                <a href="contact.html" className="btn btn-brass">
                  Schedule a Call
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
      </main>
      {" "}
      {" "}
      <footer className="site-footer" role="contentinfo">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-about">
              {" "}
              <a href="index.html" className="brand">
                {" "}
                <span className="mark">
                  N
                </span>
                {" "}
                <span>
                  {"Northbridge "}
                  <small>
                    Consulting
                  </small>
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Northbridge Consulting is a strategic advisory firm that partners with leaders to drive growth, transformation, and lasting value. Strategy without theatre.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
              </h4>
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
                  <a href="service.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="portfolio.html">
                    Portfolio
                  </a>
                </li>
                {" "}
                <li>
                  <a href="price.html">
                    Pricing
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
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="service.html">
                    Corporate Strategy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Operations
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Data & Analytics"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Market Expansion
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Financial Advisory
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Newsletter
              </h4>
              {" "}
              <p>
                Receive our monthly insight on strategy, leadership, and market trends.
              </p>
              {" "}
              <form className="field">
                {" "}
                <label htmlFor="nl-email" className="sr-only">
                  Your email
                </label>
                {" "}
                <input type="email" id="nl-email" placeholder="your@email.com" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.15)", color: "var(--white)" }} />
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Northbridge Consulting. All rights reserved."}
            </span>
            {" "}
            <div className="socials">
              {" "}
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
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
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
