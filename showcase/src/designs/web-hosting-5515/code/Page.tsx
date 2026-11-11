// Converted from the HTML template web-hosting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bg-bottom-hero.webp";
import a1 from "./assets/bg-line.webp";
import a2 from "./assets/bg-round-2.webp";
import a3 from "./assets/bg-square.webp";
import a4 from "./assets/hero.webp";
import a5 from "./assets/bg-domain.webp";
import a6 from "./assets/about.webp";
import a7 from "./assets/bg-round.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";
import a11 from "./assets/testimonial-4.webp";
import a12 from "./assets/bg-bottom-footer.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-web-hosting-5515">
      {" "}
      {" "}
      <header className="site-header" id="site-header">
        {" "}
        <div className="container nav-wrap">
          {" "}
          <a href="index.html" className="brand" aria-label="GreenHost home">
            {" "}
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {" "}
              <path d="M16 3C16 9 11 12 6 14C4.5 14.6 4 15.5 4 16.5C4 19 6 21 8.5 21C9.5 21 10.4 20.7 11.2 20.2C12 23 14 25 17 25.5C17 28.5 18.5 30 21 30C22 30 22.8 29.5 23.2 28.8C25 29.5 27 28.5 28 27L31 24L26 22C26 21 25.4 20 24.4 19.6C25 18.2 25.6 17 26 16C27 13 29 9.5 29 9.5C29 9.5 24 8 21 8C17.5 8 16 5 16 3Z" fill="url(#gh-leaf)" />
              {" "}
              <circle cx="22.5" cy="22.5" r="3.5" fill="#a3e635" />
              {" "}
              <defs>
                {" "}
                <lineargradient id="gh-leaf" x1="4" y1="3" x2="31" y2="30" gradientunits="userSpaceOnUse">
                  {" "}
                  <stop stopColor="#34c76b" />
                  {" "}
                  <stop offset="1" stopColor="#1a6e40" />
                  {" "}
                </lineargradient>
                {" "}
              </defs>
              {" "}
            </svg>
            {" "}
            <span className="brand-name">
              Green
              <span>
                Host
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" aria-label="Primary navigation">
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle menu">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav-links" id="nav-menu">
              {" "}
              <li>
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="hosting.html">
                  Hosting
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="domain.html">
                  Domains
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="comparison.html">
                  Compare
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="team.html">
                  Team
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonial.html">
                  Reviews
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <a href="hosting.html" className="btn btn--lime btn--sm nav-cta">
            Get Started
          </a>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" id="home">
          {" "}
          <div className="hero__bg">
            {" "}
            <img src={a0} className="active" alt="" style={{ inset: "auto 0 0 0", width: "100%", opacity: ".18" }} />
            {" "}
            <img src={a1} alt="" style={{ top: "8%", right: "4%", width: "130px", opacity: ".12" }} />
            {" "}
          </div>
          {" "}
          <img src={a2} className="hero__shape hero__shape--1" alt="" />
          {" "}
          <img src={a3} className="hero__shape hero__shape--2" alt="" />
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__text reveal">
              {" "}
              <span className="badge badge--lime">
                🌱 100% Carbon-Neutral Hosting
              </span>
              {" "}
              <h1 className="hero__title">
                Green hosting,
                <br />
                <span>
                  rooted in the cloud.
                </span>
              </h1>
              {" "}
              <p className="hero__sub">
                Every GreenHost plan runs on 100% renewable energy. Fast, secure, eco-friendly web hosting that helps your website grow — without growing your carbon footprint.
              </p>
              {" "}
              <div className="hero__actions">
                {" "}
                <a href="hosting.html" className="btn btn--lime btn--lg">
                  View Hosting Plans
                </a>
                {" "}
                <a href="domain.html" className="btn btn--outline btn--lg">
                  Search a Domain
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero__trust">
                {" "}
                <span className="hero__trust-stat">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" 99.9% Uptime "}
                </span>
                {" "}
                <span className="hero__trust-stat">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Free SSL Included "}
                </span>
                {" "}
                <span className="hero__trust-stat">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" 24/7 Support "}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero__visual reveal-right">
              {" "}
              <div className="hero__visual-card">
                {" "}
                <img src={a4} alt="GreenHost eco-friendly server dashboard illustration" />
                {" "}
              </div>
              {" "}
              <div className="hero__visual-chip hero__visual-chip--uptime">
                {" "}
                <span>
                  ⚡
                </span>
                {" 99.9% Uptime "}
              </div>
              {" "}
              <div className="hero__visual-chip hero__visual-chip--green">
                {" "}
                <span>
                  🌿
                </span>
                {" 3.2x Green Energy "}
              </div>
              {" "}
              <div className="hero__visual-chip hero__visual-chip--speed">
                {" "}
                <span>
                  🚀
                </span>
                {" LiteSpeed SSD "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="ticker reveal" aria-label="GreenHost in numbers">
          {" "}
          <div className="container ticker__grid">
            {" "}
            <div className="ticker__item">
              {" "}
              <div className="ticker__num">
                24,800+
              </div>
              {" "}
              <div className="ticker__label">
                Websites Hosted
              </div>
              {" "}
            </div>
            {" "}
            <div className="ticker__item">
              {" "}
              <div className="ticker__num">
                99.9%
              </div>
              {" "}
              <div className="ticker__label">
                Uptime Guarantee
              </div>
              {" "}
            </div>
            {" "}
            <div className="ticker__item">
              {" "}
              <div className="ticker__num">
                41,200
              </div>
              {" "}
              <div className="ticker__label">
                Trees Planted
              </div>
              {" "}
            </div>
            {" "}
            <div className="ticker__item">
              {" "}
              <div className="ticker__num">
                100%
              </div>
              {" "}
              <div className="ticker__label">
                Renewable Energy
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="domain-search reveal">
          {" "}
          <div className="domain-search__bg">
            {" "}
            <img src={a5} alt="" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="domain-search__box">
              {" "}
              <h2>
                Find your perfect domain name
              </h2>
              {" "}
              <p>
                Plant your website on the right domain. Free privacy protection on every registration.
              </p>
              {" "}
              <form className="domain-search__form" data-form="">
                {" "}
                <input type="text" name="domain" placeholder="your-green-idea.com" aria-label="Search a domain" required={true} />
                {" "}
                <button type="submit" className="btn btn--lime">
                  Search
                </button>
                {" "}
                <span className="form-ok">
                  Domain search request received — our team will reach out shortly.
                </span>
                {" "}
                <span className="form-err">
                  Please enter a domain name to search.
                </span>
                {" "}
              </form>
              {" "}
              <div className="domain-search__prices">
                {" "}
                <span>
                  {".com "}
                  <strong>
                    $9.99
                  </strong>
                </span>
                {" "}
                <span>
                  {".net "}
                  <strong>
                    $9.99
                  </strong>
                </span>
                {" "}
                <span>
                  {".org "}
                  <strong>
                    $9.99
                  </strong>
                </span>
                {" "}
                <span>
                  {".io "}
                  <strong>
                    $29.99
                  </strong>
                </span>
                {" "}
                <span>
                  {".co "}
                  <strong>
                    $24.99
                  </strong>
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
        <section className="features section reveal">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header">
              {" "}
              <span className="section-header__label">
                Why GreenHost
              </span>
              {" "}
              <h2>
                Everything your site needs to thrive
              </h2>
              {" "}
              <p>
                Premium performance, sustainable power, and support that actually supports you.
              </p>
              {" "}
            </div>
            {" "}
            <div className="features__grid">
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16" />
                    <path d="M5 18h14a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
                    <path d="M12 10V2" />
                    <path d="M9 5h6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Renewable-Powered Servers
                </h3>
                {" "}
                <p>
                  Our data centers run on solar and wind energy, backed by green certificates — 3.2x the renewable energy we consume.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Blazing SSD Speed
                </h3>
                {" "}
                <p>
                  LiteSpeed servers with NVMe storage deliver pages 10x faster, keeping visitors engaged and SEO rankings high.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Free SSL & Security"}
                </h3>
                {" "}
                <p>
                  Every plan includes free SSL certificates, daily malware scans, DDoS protection and automatic backups.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  99.9% Uptime Guarantee
                </h3>
                {" "}
                <p>
                  Redundant infrastructure and proactive monitoring keep your site online around the clock, backed by SLA.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  24/7 Expert Support
                </h3>
                {" "}
                <p>
                  Real humans, ready around the clock. Average first response in under 10 minutes via chat, phone or email.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card">
                {" "}
                <div className="feature-card__icon">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  One-Click Apps
                </h3>
                {" "}
                <p>
                  Install WordPress, WooCommerce, Joomla and 100+ apps in one click from our easy control panel.
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
        {" "}
        <section className="plans section reveal">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header">
              {" "}
              <span className="section-header__label">
                Hosting Plans
              </span>
              {" "}
              <h2>
                Plans that grow with you
              </h2>
              {" "}
              <p>
                Simple pricing, transparent terms, zero hidden fees. Every plan is green-powered.
              </p>
              {" "}
            </div>
            {" "}
            <div className="plans__grid">
              {" "}
              <article className="plan-card">
                {" "}
                <div className="plan-card__name">
                  Seed
                </div>
                {" "}
                <p className="plan-card__desc">
                  Perfect for personal sites and portfolios.
                </p>
                {" "}
                <div className="plan-card__price">
                  {" "}
                  <span className="currency">
                    $
                  </span>
                  <span className="amount">
                    2.49
                  </span>
                  {" "}
                  <span className="period">
                    / month
                  </span>
                  {" "}
                </div>
                {" "}
                <ul className="plan-card__features">
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 10 GB NVMe Storage"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 1 Website"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Free SSL Certificate"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 100 GB Bandwidth"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="hosting.html" className="btn btn--outline-forest" style={{ width: "100%", justifyContent: "center" }}>
                  Choose Seed
                </a>
                {" "}
              </article>
              {" "}
              <article className="plan-card plan-card--popular">
                {" "}
                <span className="badge badge--green plan-card__badge">
                  Most Popular
                </span>
                {" "}
                <div className="plan-card__name">
                  Sprout
                </div>
                {" "}
                <p className="plan-card__desc">
                  Great for growing businesses and blogs.
                </p>
                {" "}
                <div className="plan-card__price">
                  {" "}
                  <span className="currency">
                    $
                  </span>
                  <span className="amount">
                    4.99
                  </span>
                  {" "}
                  <span className="period">
                    / month
                  </span>
                  {" "}
                </div>
                {" "}
                <ul className="plan-card__features">
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 50 GB NVMe Storage"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Unlimited Websites"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Free SSL + CDN"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Daily Backups"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="hosting.html" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                  Choose Sprout
                </a>
                {" "}
              </article>
              {" "}
              <article className="plan-card">
                {" "}
                <div className="plan-card__name">
                  Canopy
                </div>
                {" "}
                <p className="plan-card__desc">
                  Heavy traffic, e-commerce and agencies.
                </p>
                {" "}
                <div className="plan-card__price">
                  {" "}
                  <span className="currency">
                    $
                  </span>
                  <span className="amount">
                    9.99
                  </span>
                  {" "}
                  <span className="period">
                    / month
                  </span>
                  {" "}
                </div>
                {" "}
                <ul className="plan-card__features">
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 200 GB NVMe Storage"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Unlimited Websites"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Free Domain + SSL"}
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Priority Support"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="hosting.html" className="btn btn--outline-forest" style={{ width: "100%", justifyContent: "center" }}>
                  Choose Canopy
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
        <section className="about-teaser section reveal">
          {" "}
          <div className="container about-teaser__grid">
            {" "}
            <div className="about-teaser__image reveal-left">
              {" "}
              <img src={a6} alt="GreenHost sustainable data center concept" />
              {" "}
              <img src={a7} className="deco-shape deco-shape--1" alt="" />
              {" "}
              <img src={a3} className="deco-shape deco-shape--2" alt="" />
              {" "}
            </div>
            {" "}
            <div className="reveal-right">
              {" "}
              <div className="section-header section-header--left">
                {" "}
                <span className="section-header__label">
                  About GreenHost
                </span>
                {" "}
                <h2>
                  Web hosting that gives back to the planet
                </h2>
                {" "}
                <p>
                  We started GreenHost with a simple belief: the internet shouldn't cost the earth. Today we power thousands of websites on 100% renewable energy — and every plan plants trees.
                </p>
                {" "}
              </div>
              {" "}
              <ul className="about-teaser__list">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Every kWh of hosting offset with renewable energy certificates. "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" One tree planted for every new customer and renewal. "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" E-waste-free, high-efficiency data centers rated LEED Gold. "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--primary">
                Learn More About Us
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="steps section reveal">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header">
              {" "}
              <span className="section-header__label">
                How It Works
              </span>
              {" "}
              <h2>
                Online in three easy steps
              </h2>
              {" "}
              <p>
                From idea to live website in minutes — no technical skills required.
              </p>
              {" "}
            </div>
            {" "}
            <div className="steps__grid">
              {" "}
              <article className="step-card">
                {" "}
                <div className="step-card__num">
                  01
                </div>
                {" "}
                <h3>
                  {"Pick your domain & plan"}
                </h3>
                {" "}
                <p>
                  Search for your perfect domain and choose the plan that fits your goals.
                </p>
                {" "}
              </article>
              {" "}
              <article className="step-card">
                {" "}
                <div className="step-card__num">
                  02
                </div>
                {" "}
                <h3>
                  Launch in one click
                </h3>
                {" "}
                <p>
                  Install WordPress or any of 100+ apps instantly from our control panel.
                </p>
                {" "}
              </article>
              {" "}
              <article className="step-card">
                {" "}
                <div className="step-card__num">
                  03
                </div>
                {" "}
                <h3>
                  {"Grow & go green"}
                </h3>
                {" "}
                <p>
                  Watch your site thrive on renewable power while we plant trees for you.
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
        {" "}
        <section className="testimonials section reveal">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header">
              {" "}
              <span className="section-header__label">
                Testimonials
              </span>
              {" "}
              <h2>
                Loved by green-minded makers
              </h2>
              {" "}
              <p>
                Thousands of founders and developers host with GreenHost. Here's why they stay.
              </p>
              {" "}
            </div>
            {" "}
            <div className="testimonials__grid">
              {" "}
              <article className="testimonial-card">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  Migrating to GreenHost cut our page load times in half — and it feels amazing knowing our traffic runs on clean energy.
                </blockquote>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a8} alt="Portrait of Maya Chen" width="44" height="44" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Maya Chen
                    </strong>
                    {" "}
                    <span>
                      Founder, Bloom Studio
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  Support is genuinely fast and human. They helped us scale for a product launch without a single hiccup.
                </blockquote>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a9} alt="Portrait of Omar Al-Rashid" width="44" height="44" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Omar Al-Rashid
                    </strong>
                    {" "}
                    <span>
                      CTO, Leafly Commerce
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  We host our entire agency portfolio with GreenHost. Rock-solid uptime, transparent pricing, and a real mission.
                </blockquote>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a10} alt="Portrait of Sofia Marino" width="44" height="44" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Sofia Marino
                    </strong>
                    {" "}
                    <span>
                      Director, Verdant Agency
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  The green angle drew me in, but the speed and the one-click WordPress install are why I've stayed for years.
                </blockquote>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a11} alt="Portrait of Daniel Okafor" width="44" height="44" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Daniel Okafor
                    </strong>
                    {" "}
                    <span>
                      Developer, TerraByte Apps
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
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="cta-banner reveal">
          {" "}
          <div className="container">
            {" "}
            <h2>
              Ready to grow with GreenHost?
            </h2>
            {" "}
            <p>
              Join thousands of websites powered by clean energy. Set up in minutes — make a difference for decades.
            </p>
            {" "}
            <div className="cta-banner__actions">
              {" "}
              <a href="hosting.html" className="btn btn--lime btn--lg">
                Start Hosting Today
              </a>
              {" "}
              <a href="contact.html" className="btn btn--outline btn--lg">
                Talk to Us
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
        <img src={a12} className="site-footer__bg" alt="" />
        {" "}
        <div className="site-footer__top">
          {" "}
          <div className="container site-footer__grid">
            {" "}
            <div>
              {" "}
              <div className="site-footer__brand">
                Green
                <span>
                  Host
                </span>
              </div>
              {" "}
              <p className="site-footer__desc">
                Carbon-neutral web hosting powered by 100% renewable energy. Fast, secure and sustainable hosting for websites that care about the planet.
              </p>
              {" "}
              <div className="site-footer__social">
                {" "}
                <a href="#" aria-label="Twitter">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2h3.7l-8.1 9.3L24 22h-7.5l-5.9-7.7L4 22H.3l8.7-9.9L0 2h7.7l5.3 7 5.9-7zm-1.3 18h2L6.3 4H4.1l13.5 16z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8h4.6v14.6H.2V8zm7.6 0h4.4v2h.1c.6-1.2 2.2-2.4 4.5-2.4 4.8 0 5.7 3.2 5.7 7.3v7.7h-4.6v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6v6.9H7.8V8z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm8.3-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <ul className="site-footer__links">
                {" "}
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="team.html">
                    Our Team
                  </a>
                </li>
                {" "}
                <li>
                  <a href="testimonial.html">
                    Testimonials
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
              <ul className="site-footer__links">
                {" "}
                <li>
                  <a href="hosting.html">
                    Shared Hosting
                  </a>
                </li>
                {" "}
                <li>
                  <a href="hosting.html">
                    VPS Hosting
                  </a>
                </li>
                {" "}
                <li>
                  <a href="hosting.html">
                    Dedicated Servers
                  </a>
                </li>
                {" "}
                <li>
                  <a href="domain.html">
                    Domain Registration
                  </a>
                </li>
                {" "}
                <li>
                  <a href="comparison.html">
                    Plan Comparison
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="site-footer__newsletter">
              {" "}
              <h4>
                Stay Green
              </h4>
              {" "}
              <p>
                Monthly eco-hosting tips and exclusive offers. No spam, ever.
              </p>
              {" "}
              <form className="site-footer__form" data-form="">
                {" "}
                <input type="email" name="email" placeholder="your@email.com" aria-label="Email address" required={true} />
                {" "}
                <button type="submit" className="btn btn--lime btn--sm">
                  Subscribe
                </button>
                {" "}
                <span className="form-ok">
                  You're on the list — welcome to the green side!
                </span>
                {" "}
                <span className="form-err">
                  Please enter a valid email address.
                </span>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="site-footer__bottom">
          {" "}
          <div className="container">
            {" © "}
            <span data-year="" />
            {" GreenHost. Hosted on 100% renewable energy. 🌍 "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
