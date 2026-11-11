// Converted from the HTML template cctv-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/feature.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-cctv-46b4">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container">
          {" "}
          <a className="brand" href="index.html" aria-label="Vigilant — home">
            {" "}
            <span className="brand__mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5" />
              </svg>
              {" "}
            </span>
            {" "}
            <span className="brand__text">
              {" "}
              <span className="brand__name">
                Vigil
                <span>
                  ant
                </span>
              </span>
              {" "}
              <span className="brand__tag">
                {"CCTV & Monitoring"}
              </span>
              {" "}
            </span>
            {" "}
          </a>
          {" "}
          <nav aria-label="Primary">
            {" "}
            <ul className="nav-links" id="nav-links">
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
                <a className="nav-link" href="service.html">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonial.html">
                  Testimonials
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
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
              <li className="nav-cta">
                <a className="btn btn--signal" href="quote.html">
                  Get a Quote
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
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
        <section className="hero" aria-label="Introduction">
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
          <div className="grid-backdrop" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero__inner">
              {" "}
              <p className="hero__kicker">
                {"Surveillance Command & Control"}
              </p>
              {" "}
              <h1>
                {"Every corner covered. "}
                <em>
                  Every threat seen.
                </em>
              </h1>
              {" "}
              <p className="hero__text">
                Vigilant designs, installs and monitors commercial-grade CCTV systems that keep your property on screen and your peace of mind intact — with 24/7 eyes and a response team that never blinks.
              </p>
              {" "}
              <div className="hero__actions">
                {" "}
                <a className="btn btn--signal btn--lg" href="quote.html">
                  Request a Site Survey
                </a>
                {" "}
                <a className="btn btn--ghost-dark btn--lg" href="service.html">
                  Explore Services
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero__status">
                {" "}
                <span className="hero__status-item">
                  <span className="dot" aria-hidden="true" />
                  <strong>
                    MONITORING
                  </strong>
                  {" LIVE"}
                </span>
                {" "}
                <span className="hero__status-item">
                  {"CAMERAS "}
                  <strong>
                    1,284
                  </strong>
                </span>
                {" "}
                <span className="hero__status-item">
                  {"AVG RESPONSE "}
                  <strong>
                    6m 40s
                  </strong>
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <a className="hero__scroll" href="#stats" aria-label="Scroll to statistics">
            Scroll
          </a>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="stat-strip" id="stats" aria-label="Company statistics">
          {" "}
          <div className="container">
            {" "}
            <div className="stat-grid">
              {" "}
              <div className="stat reveal">
                {" "}
                <p className="stat__value">
                  <span className="mono">
                    12+
                  </span>
                </p>
                {" "}
                <p className="stat__label">
                  Years in the field
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <p className="stat__value">
                  <span className="mono">
                    1,800
                  </span>
                </p>
                {" "}
                <p className="stat__label">
                  Systems installed
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <p className="stat__value">
                  <span className="mono">
                    24/7
                  </span>
                </p>
                {" "}
                <p className="stat__label">
                  Monitoring coverage
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".24s" }}>
                {" "}
                <p className="stat__value">
                  <span className="mono">
                    99.7%
                  </span>
                </p>
                {" "}
                <p className="stat__label">
                  Alarm verification rate
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
        {" "}
        <section className="section" aria-labelledby="services-heading">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="data-chip">
                Service Modules
              </span>
              {" "}
              <h2 id="services-heading">
                One provider for your entire security layer
              </h2>
              {" "}
              <p>
                From a single doorbell camera to a multi-site command centre — design, supply, install, monitor and maintain under one contract.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-grid">
              {" "}
              <article className="feature-card reveal">
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="13" rx="2" />
                    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    <path d="M2 12h20" />
                    <path d="M6 12v3M10 12v3M14 12v3M18 12v3" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  HD CCTV Installation
                </h3>
                {" "}
                <p>
                  Discreet 2K and 4K cameras, positioned for maximum coverage and zero blind spots — installed to IP68 standard, inside and out.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                    <path d="M12 4V2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  24/7 Alarm Monitoring
                </h3>
                {" "}
                <p>
                  Real-time event verification by certified operators who can tell a genuine threat from a stray cat — before any alarm is dispatched.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" />
                    <path d="M12 9v3l2 2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Remote Viewing Apps
                </h3>
                {" "}
                <p>
                  Secure, encrypted live feeds on any phone or tablet. Check your site from anywhere on earth with a three-second connect.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal">
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Smart Access Control
                </h3>
                {" "}
                <p>
                  Keypads, intercoms and biometric entry that log every entry event to your audit trail — and lock down remotely in seconds.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 11H5l1-5h12l1 5z" />
                    <path d="M19 11v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6" />
                    <path d="M9 15h6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Storage & Backups"}
                </h3>
                {" "}
                <p>
                  Local NVR, edge storage and encrypted cloud archive with configurable retention — your footage survives the camera.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <div className="feature-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Maintenance Contracts
                </h3>
                {" "}
                <p>
                  Quarterly lens cleaning, firmware updates and health checks. We keep uptime in the 99% band — that's the job.
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
        <section className="section section--dark" aria-labelledby="monitor-heading">
          {" "}
          <div className="grid-backdrop" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <div className="split split--flip">
              {" "}
              <div className="split__media reveal">
                {" "}
                <img src={a3} alt="Technician reviewing camera feeds on a monitoring wall" />
                {" "}
                <div className="split__badge">
                  {" "}
                  <span className="dot" aria-hidden="true" />
                  {" "}
                  <span>
                    {" "}
                    <span className="mono">
                      LIVE FEED — SITE B // WAREHOUSE
                    </span>
                    {" "}
                    <strong>
                      Operator-verified, 6-second review loop
                    </strong>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split__content reveal">
                {" "}
                <span className="data-chip">
                  Why Vigilant
                </span>
                {" "}
                <h2 id="monitor-heading">
                  Technology you can trust, humans who answer
                </h2>
                {" "}
                <p className="lede">
                  Most alarm systems only phone home after the fact. Ours watch constantly — and the moment something doesn't fit the pattern, a certified operator is looking at your live feed, not a log file.
                </p>
                {" "}
                <ul className="split__points">
                  {" "}
                  <li className="split__point">
                    {" "}
                    <span className="tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <span>
                      {" "}
                      <strong>
                        Human verification on every event
                      </strong>
                      {" "}
                      <p>
                        Two-factor visual check before police or keyholder dispatch — fewer false alarms, faster real ones.
                      </p>
                      {" "}
                    </span>
                    {" "}
                  </li>
                  {" "}
                  <li className="split__point">
                    {" "}
                    <span className="tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <span>
                      {" "}
                      <strong>
                        End-to-end design, one team
                      </strong>
                      {" "}
                      <p>
                        Survey, cabling, configuration and training — a single accountable partner from first site visit to go-live.
                      </p>
                      {" "}
                    </span>
                    {" "}
                  </li>
                  {" "}
                  <li className="split__point">
                    {" "}
                    <span className="tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <span>
                      {" "}
                      <strong>
                        Encrypted end to end
                      </strong>
                      {" "}
                      <p>
                        AES-256 storage, TLS on every stream, and local-only recording you fully own. Your footage stays yours.
                      </p>
                      {" "}
                    </span>
                    {" "}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a className="btn btn--signal" href="about.html">
                  Read Our Story
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
        <section className="section" aria-labelledby="process-heading">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="data-chip">
                Deployment Protocol
              </span>
              {" "}
              <h2 id="process-heading">
                From survey to secure in four steps
              </h2>
              {" "}
              <p>
                A disciplined, documented process that gets your system live fast — and right the first time.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-grid">
              {" "}
              <article className="process-step reveal">
                {" "}
                <p className="process-step__num">
                  Step
                </p>
                {" "}
                <h3>
                  Site Survey
                </h3>
                {" "}
                <p>
                  A technician maps every entry point, blind corner and lighting condition, then models camera coverage on your actual floor plan.
                </p>
                {" "}
              </article>
              {" "}
              <article className="process-step reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <p className="process-step__num">
                  Step
                </p>
                {" "}
                <h3>
                  {"Design & Quote"}
                </h3>
                {" "}
                <p>
                  You get a fixed-price proposal: camera positions, cabling routes, storage plan and a draw-down of exactly what each feeds you.
                </p>
                {" "}
              </article>
              {" "}
              <article className="process-step reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <p className="process-step__num">
                  Step
                </p>
                {" "}
                <h3>
                  {"Install & Tune"}
                </h3>
                {" "}
                <p>
                  Clean, covered cabling, precision angles and a full test in every light condition. We leave the site spotless and the picture perfect.
                </p>
                {" "}
              </article>
              {" "}
              <article className="process-step reveal" style={{ "--reveal-delay": ".24s" }}>
                {" "}
                <p className="process-step__num">
                  Step
                </p>
                {" "}
                <h3>
                  {"Monitor & Maintain"}
                </h3>
                {" "}
                <p>
                  Your feeds connect to our command centre, your apps go live, and scheduled maintenance keeps everything sharp for years.
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
        <section className="cta-band" aria-labelledby="cta-heading">
          {" "}
          <div className="grid-backdrop" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <span className="data-chip reveal">
              Free Site Survey
            </span>
            {" "}
            <h2 id="cta-heading" className="reveal">
              See what a professional survey finds
            </h2>
            {" "}
            <p className="reveal" style={{ "--reveal-delay": ".1s" }}>
              Book a no-obligation walkthrough. You'll get a coverage map, a security score for your property, and a fixed price — whether or not you buy.
            </p>
            {" "}
            <div className="cta-band__actions reveal" style={{ "--reveal-delay": ".2s" }}>
              {" "}
              <a className="btn btn--signal btn--lg" href="quote.html">
                Get My Quote
              </a>
              {" "}
              <a className="btn btn--ghost-dark btn--lg" href="contact.html">
                Talk to Us
              </a>
              {" "}
            </div>
            {" "}
            <p className="cta-band__tel">
              {"Prefer to speak now? "}
              <a href="tel:+15550193847">
                +1 (555) 019-3847
              </a>
            </p>
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
        <div className="container">
          {" "}
          <div className="site-footer__main">
            {" "}
            <div>
              {" "}
              <a className="brand" href="index.html" aria-label="Vigilant — home">
                {" "}
                <span className="brand__mark" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <circle cx="12" cy="12" r="3.5" />
                    <path d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span className="brand__text">
                  {" "}
                  <span className="brand__name">
                    Vigil
                    <span>
                      ant
                    </span>
                  </span>
                  {" "}
                  <span className="brand__tag">
                    {"CCTV & Monitoring"}
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Command-grade CCTV design, installation and 24/7 monitoring for homes, retail, logistics and industry.
              </p>
              {" "}
              <p className="footer-status mt-2">
                <span className="dot" aria-hidden="true" />
                All monitoring stations operational
              </p>
              {" "}
            </div>
            {" "}
            <nav aria-label="Footer pages">
              {" "}
              <h4>
                Company
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
              </ul>
              {" "}
            </nav>
            {" "}
            <nav aria-label="Footer support">
              {" "}
              <h4>
                Support
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="quote.html">
                    Request a Quote
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Maintenance Plans
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Report an Alarm
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </nav>
            {" "}
            <div>
              {" "}
              <h4>
                Head Office
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" "}
                  <span>
                    2247 Perimeter Drive, Suite 400
                    <br />
                    Industrial District, CA 90210
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                  </svg>
                  {" "}
                  <a href="tel:+15550193847">
                    +1 (555) 019-3847
                  </a>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  {" "}
                  <a href="mailto:guard@vigilant.example">
                    guard@vigilant.example
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
          <div className="site-footer__bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Vigilant Security Systems. All rights reserved."}
            </p>
            {" "}
            <ul className="footer-meta">
              {" "}
              <li>
                <a href="service.html">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Privacy
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  Sitemap
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
