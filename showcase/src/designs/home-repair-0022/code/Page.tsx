// Converted from the HTML template home-repair-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/service-1.webp";
import a3 from "./assets/service-2.webp";
import a4 from "./assets/service-3.webp";
import a5 from "./assets/about.webp";
import a6 from "./assets/fact-1.webp";
import a7 from "./assets/fact-2.webp";
import a8 from "./assets/fact-3.webp";
import a9 from "./assets/fact-4.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow:wght@600;700;800;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-home-repair-0022">
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <div className="topbar-info">
            {" "}
            <span>
              {" "}
              <svg viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              {" 2144 Industry Ave, Riverside, CA 92501 "}
            </span>
            {" "}
            <span>
              {" "}
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {" +1 (555) 218-4000 "}
            </span>
            {" "}
            <span>
              {" "}
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 8L4 7v12h16V7l-8 5zm0-2 8-5H4l8 5z" />
              </svg>
              {" Mon–Sat, 8 AM – 7 PM · 24/7 Emergency "}
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar-socials">
            {" "}
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M13 22v-8h2.7l.4-3.2H13V8.7c0-.9.3-1.6 1.7-1.6h1.5V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H7.3V14H10v8h3z" />
              </svg>
            </a>
            {" "}
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M17.5 3h3l-6.7 7.7L22 21h-6.2l-4.8-6.3L5.4 21h-3l7.2-8.2L2 3h6.4l4.4 5.8L17.5 3zm-1.1 16h1.7L7.6 4.7H5.8L16.4 19z" />
              </svg>
            </a>
            {" "}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm6.3-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
              </svg>
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
          <a href="index.html" className="logo" aria-label="FixHaven home">
            {" "}
            <span className="logo-icon">
              F
            </span>
            {" Fix"}
            <em>
              Haven
            </em>
            {" "}
          </a>
          {" "}
          <nav className="nav-links" aria-label="Primary">
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
            <a href="team.html" className="nav-link">
              Team
            </a>
            {" "}
            <a href="testimonial.html" className="nav-link">
              Reviews
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="appointment.html" className="nav-link nav-cta">
              <span className="btn btn-primary btn-sm">
                Book a Visit
              </span>
            </a>
            {" "}
          </nav>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-label="Toggle menu">
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
      <main id="main">
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="FixHaven technician repairing a kitchen cabinet" className="active" />
            {" "}
            <img src={a1} alt="Renovated interior after a FixHaven remodel" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <span className="hero-tag">
                {"Home Repair & Renovation · Est. 2009"}
              </span>
              {" "}
              <h1>
                {"Every Repair, "}
                <em>
                  Done Right
                </em>
                {" the First Time"}
              </h1>
              {" "}
              <p>
                From a dripping tap to a full kitchen remodel, FixHaven sends licensed, background-checked pros who show up on time, quote in writing, and back every job with a 5-year warranty.
              </p>
              {" "}
              <div className="hero-cta">
                {" "}
                <a href="appointment.html" className="btn btn-primary btn-lg">
                  Book a Visit
                </a>
                {" "}
                <a href="service.html" className="btn btn-outline-light btn-lg">
                  Explore Services
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-strip">
            {" "}
            <div className="container hero-strip-inner">
              {" "}
              <div className="hero-strip-item">
                <strong>
                  17 Years
                </strong>
                <span>
                  In Business
                </span>
              </div>
              {" "}
              <div className="hero-strip-item">
                <strong>
                  12,400+
                </strong>
                <span>
                  Jobs Completed
                </span>
              </div>
              {" "}
              <div className="hero-strip-item">
                <strong>
                  4.9/5
                </strong>
                <span>
                  Average Rating
                </span>
              </div>
              {" "}
              <div className="hero-strip-item">
                <strong>
                  24/7
                </strong>
                <span>
                  Emergency Dispatch
                </span>
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
            <div className="stats-grid">
              {" "}
              <div className="stat-card reveal">
                <div className="stat-num">
                  17
                </div>
                <div className="stat-label">
                  Years of Experience
                </div>
              </div>
              {" "}
              <div className="stat-card reveal">
                <div className="stat-num">
                  12,400+
                </div>
                <div className="stat-label">
                  Jobs Completed
                </div>
              </div>
              {" "}
              <div className="stat-card reveal">
                <div className="stat-num">
                  38
                </div>
                <div className="stat-label">
                  Certified Pros
                </div>
              </div>
              {" "}
              <div className="stat-card reveal">
                <div className="stat-num">
                  5 Yr
                </div>
                <div className="stat-label">
                  Workmanship Warranty
                </div>
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
            <div className="section-heading reveal">
              {" "}
              <span className="section-label">
                What We Fix
              </span>
              {" "}
              <h2>
                One Crew for Every Room in the House
              </h2>
              {" "}
              <p>
                Six licensed trades under one roof, one warranty, one point of contact. Stop juggling contractors — fix it once with FixHaven.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-img">
                  {" "}
                  <img src={a2} alt="Plumbing repair under a kitchen sink" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Plumbing
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Plumbing & Drainage"}
                  </h3>
                  {" "}
                  <p>
                    Leaks, clogs, water heaters and full repipes. Tidy work, honest diagnostics, and a written guarantee on every joint.
                  </p>
                  {" "}
                  <a className="service-link" href="appointment.html">
                    {"Book This Service "}
                    <span>
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-img">
                  {" "}
                  <img src={a3} alt="Electrician testing a breaker panel" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Electrical
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Electrical & Safety"}
                  </h3>
                  {" "}
                  <p>
                    Panel upgrades, rewiring, lighting and EV chargers — installed to code by licensed electricians and fully inspected.
                  </p>
                  {" "}
                  <a className="service-link" href="appointment.html">
                    {"Book This Service "}
                    <span>
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-img">
                  {" "}
                  <img src={a4} alt="Carpenter measuring timber for a built-in" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Carpentry
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Carpentry & Joinery"}
                  </h3>
                  {" "}
                  <p>
                    Custom shelving, built-ins, doors and trim. Measured twice, cut once, finished to a standard you can run your hand over.
                  </p>
                  {" "}
                  <a className="service-link" href="appointment.html">
                    {"Book This Service "}
                    <span>
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="text-center mt-3 reveal">
              {" "}
              <a href="service.html" className="btn btn-secondary">
                View All Six Services
              </a>
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
            <div className="about-grid">
              {" "}
              <div className="about-image reveal-left">
                {" "}
                <div className="frame">
                  <img src={a5} alt="FixHaven team at a job site" loading="lazy" />
                </div>
                {" "}
                <div className="about-experience">
                  <strong>
                    17+
                  </strong>
                  <span>
                    Years Serving Riverside
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="about-content reveal-right">
                {" "}
                <span className="section-label">
                  The FixHaven Way
                </span>
                {" "}
                <h2>
                  A Crew That Treats Your Home Like Their Own
                </h2>
                {" "}
                <p>
                  We started as two plumbers and a pickup truck. Today we are 38 certified pros across six trades — but the promise is the same: show up on time, quote in writing, and leave the place cleaner than we found it.
                </p>
                {" "}
                <div className="about-features">
                  {" "}
                  <div className="about-feature">
                    <span className="about-feature-icon">
                      ✓
                    </span>
                    {" Licensed & insured in California"}
                  </div>
                  {" "}
                  <div className="about-feature">
                    <span className="about-feature-icon">
                      ✓
                    </span>
                    {" Fixed written quotes, no surprises"}
                  </div>
                  {" "}
                  <div className="about-feature">
                    <span className="about-feature-icon">
                      ✓
                    </span>
                    {" Background-checked technicians"}
                  </div>
                  {" "}
                  <div className="about-feature">
                    <span className="about-feature-icon">
                      ✓
                    </span>
                    {" 5-year workmanship warranty"}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="about.html" className="btn btn-primary">
                  More About FixHaven
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
        <section className="section section-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="section-heading reveal">
              {" "}
              <span className="section-label">
                Why Homeowners Choose Us
              </span>
              {" "}
              <h2>
                The Repair Experience We're Known For
              </h2>
              {" "}
            </div>
            {" "}
            <div className="feature-grid">
              {" "}
              <div className="feature-item reveal">
                {" "}
                <div className="feature-icon">
                  ⏱
                </div>
                {" "}
                <h3>
                  On-Time, Every Time
                </h3>
                {" "}
                <p>
                  A two-hour arrival window confirmed by text, with live tracking — so you never wait around all day for a visit.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-item reveal">
                {" "}
                <div className="feature-icon">
                  📋
                </div>
                {" "}
                <h3>
                  Quotes Before Work
                </h3>
                {" "}
                <p>
                  You approve a fixed, itemised quote before we lift a tool. If we find more, we stop and call you first. Always.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-item reveal">
                {" "}
                <div className="feature-icon">
                  🛡
                </div>
                {" "}
                <h3>
                  5-Year Warranty
                </h3>
                {" "}
                <p>
                  Every repair we finish is covered by a written 5-year workmanship warranty. If it isn't right, we come back free.
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
            <div className="section-heading reveal">
              {" "}
              <span className="section-label">
                Recent Work
              </span>
              {" "}
              <h2>
                Fresh from Our Job Sites
              </h2>
              {" "}
              <p>
                Before-and-after moments from recent kitchens, bathrooms and whole-home remodels across Riverside County.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-4">
              {" "}
              <figure className="reveal">
                <img src={a6} alt="Newly tiled bathroom shower" loading="lazy" />
              </figure>
              {" "}
              <figure className="reveal">
                <img src={a7} alt="Refinished hardwood kitchen floor" loading="lazy" />
              </figure>
              {" "}
              <figure className="reveal">
                <img src={a8} alt="Modern kitchen remodel with island" loading="lazy" />
              </figure>
              {" "}
              <figure className="reveal">
                <img src={a9} alt="Exterior repaint and siding repair" loading="lazy" />
              </figure>
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
            <div className="section-heading reveal">
              {" "}
              <span className="section-label">
                Happy Neighbors
              </span>
              {" "}
              <h2>
                What Our Clients Say
              </h2>
              {" "}
            </div>
            {" "}
            <div className="grid-2">
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
                  FixHaven replumbed our entire bungalow in three days — same price as the quote, floors covered, and the crew explained every step. The warranty sealed it for us.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a10} alt="Portrait of Dana Whitaker" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Dana Whitaker
                    </strong>
                    <span>
                      Whole-Home Repipe · Riverside
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
                  They found a slow leak two other companies had missed and fixed it the same visit. Honest, tidy and genuinely friendly. Our go-to for everything now.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a11} alt="Portrait of Marcus Chen" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Marcus Chen
                    </strong>
                    <span>
                      Emergency Plumbing · Corona
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="text-center mt-3 reveal">
              {" "}
              <a href="testimonial.html" className="btn btn-outline">
                Read More Reviews
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cta-section">
          {" "}
          <div className="container">
            {" "}
            <h2>
              Broken Something? We'll Make It Right.
            </h2>
            {" "}
            <p>
              Book a visit online in under a minute, or call our 24/7 emergency line. Most jobs get a fixed quote the same day.
            </p>
            {" "}
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              {" "}
              <a href="appointment.html" className="btn btn-primary btn-lg">
                Book a Visit
              </a>
              {" "}
              <a href="contact.html" className="btn btn-outline-light btn-lg">
                Call +1 (555) 218-4000
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo" aria-label="FixHaven home">
                {" "}
                <span className="logo-icon">
                  F
                </span>
                {" Fix"}
                <em>
                  Haven
                </em>
                {" "}
              </a>
              {" "}
              <p>
                Licensed home repair and renovation crew serving Riverside County since 2009. Six trades, one warranty, and a promise to do right by your home.
              </p>
              {" "}
              <div className="footer-newsletter">
                {" "}
                <p>
                  Get seasonal maintenance reminders and a free home-care checklist.
                </p>
                {" "}
                <form className="footer-newsletter-form" data-form="" noValidate={true}>
                  {" "}
                  <input type="email" placeholder="Your email address" aria-label="Email address" required={true} />
                  {" "}
                  <button className="btn btn-primary btn-sm" type="submit">
                    Join
                  </button>
                  {" "}
                  <p className="form-ok">
                    Thanks — you're on the list!
                  </p>
                  {" "}
                  <p className="form-err">
                    Please enter your email.
                  </p>
                  {" "}
                </form>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
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
                  <a href="team.html">
                    Our Team
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
                  <a href="appointment.html">
                    Book a Visit
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
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="service.html">
                    Plumbing
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Electrical
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Carpentry
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Tiling & Painting"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    HVAC Care
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Whole-Home Remodel
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
                Contact
              </h4>
              {" "}
              <p>
                <span>
                  📍
                </span>
                <span>
                  <strong>
                    Workshop
                  </strong>
                  <br />
                  2144 Industry Ave, Riverside, CA 92501
                </span>
              </p>
              {" "}
              <p>
                <span>
                  📞
                </span>
                <span>
                  <strong>
                    Phone
                  </strong>
                  <br />
                  +1 (555) 218-4000 · 24/7
                </span>
              </p>
              {" "}
              <p>
                <span>
                  ✉️
                </span>
                <span>
                  <strong>
                    Email
                  </strong>
                  <br />
                  hello@fixhaven.com
                </span>
              </p>
              {" "}
              <p>
                <span>
                  🕗
                </span>
                <span>
                  <strong>
                    Hours
                  </strong>
                  <br />
                  Mon–Sat, 8 AM – 7 PM
                </span>
              </p>
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
              {" FixHaven Home Repair & Renovation. All rights reserved."}
            </p>
            {" "}
            <div className="footer-bottom-links">
              {" "}
              <a href="contact.html">
                Privacy
              </a>
              {" "}
              <a href="contact.html">
                Terms
              </a>
              {" "}
              <a href="contact.html">
                Sitemap
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
        <svg viewBox="0 0 24 24">
          <path d="m18 15-6-6-6 6" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
