// Converted from the HTML template painting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero.webp";
import a1 from "./assets/call-to-action.webp";
import a2 from "./assets/quote.webp";
import a3 from "./assets/about-1.webp";
import a4 from "./assets/about-2.webp";
import a5 from "./assets/team-1.webp";
import a6 from "./assets/team-2.webp";
import a7 from "./assets/team-3.webp";
import a8 from "./assets/user.webp";
import a9 from "./assets/testimonial-1.webp";
import a10 from "./assets/testimonial-2.webp";
import a11 from "./assets/blog-1.webp";
import a12 from "./assets/blog-2.webp";
import a13 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-painting-0a24">
      {" "}
      <a className="skip-link" href="#main" style={{ position: "absolute", left: "-9999px" }}>
        Skip to content
      </a>
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="brand" aria-label="TrueColor — home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="10" height="6" rx="1" />
                <path d="M13 6h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v1" />
                <path d="M14 20v-1a2 2 0 0 1 2-2" />
                <circle cx="14" cy="20" r="1.5" />
              </svg>
              {" "}
            </span>
            {" True"}
            <span>
              <em>
                Color
              </em>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-links">
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
                Reviews
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
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="detail.html">
                Detail
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
          <div className="header-cta-wrap">
            {" "}
            <a href="contact.html" className="btn btn--solid header-cta">
              Get a Free Quote
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
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
          <div className="container hero-inner">
            {" "}
            <p className="kicker kicker--light">
              {"Painting & Decorating Studio"}
            </p>
            {" "}
            <h1>
              {"We bring your walls to life with "}
              <span className="stroke-word">
                true colour
                <svg viewBox="0 0 220 24" preserveaspectratio="none" aria-hidden="true">
                  <path d="M4 18 C 60 8, 140 22, 216 12" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            {" "}
            <p>
              From crisp interiors to weather-proof exteriors, TrueColor delivers flawless, long-lasting paint finishes — planned precisely, prepped thoroughly and painted perfectly.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="service.html" className="btn btn--solid">
                {"Explore Services "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              {" "}
              <a href="contact.html" className="btn btn--ghost-light">
                Book a Free Quote
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta">
              {" "}
              <div>
                <strong>
                  18+
                </strong>
                <span>
                  Years Painting
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  2,400
                </strong>
                <span>
                  Projects Finished
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  98%
                </strong>
                <span>
                  Happy Clients
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
        <div className="swatch-strip" aria-hidden="true">
          {" "}
          <span className="sw-1" />
          <span className="sw-2" />
          <span className="sw-3" />
          <span className="sw-4" />
          <span className="sw-5" />
          <span className="sw-6" />
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section section--paper">
          {" "}
          <div className="container grid-2 align-center" style={{ alignItems: "center" }}>
            {" "}
            <div className="media-frame media-frame--offset reveal">
              {" "}
              <img src={a3} alt="Painter applying a flawless coat of paint with a roller" loading="lazy" />
              {" "}
              <div className="float-chip">
                {" "}
                <span className="float-chip__num">
                  18+
                </span>
                {" "}
                <span className="float-chip__label">
                  Years of precision painting craft
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal reveal-delay-1">
              {" "}
              <p className="kicker">
                Why TrueColor
              </p>
              {" "}
              <h2>
                Painting is science. Our finish is art.
              </h2>
              {" "}
              <p className="lead">
                Every project starts with the same obsession: understanding your space, your light and your life before a single drop of paint is mixed.
              </p>
              {" "}
              <p>
                We use colour-matched premium paints, dust-sealed prep zones and two-coat perfection as standard. The result is a finish that looks right the first time — and stays right for years.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Precision colour matching to any swatch or photo
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Dust-sealed prep, protected floors and furniture
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Premium low-VOC paints built to last
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  10-year workmanship guarantee on every job
                </li>
                {" "}
              </ul>
              {" "}
              <div className="hero-actions" style={{ marginTop: "1.8rem" }}>
                {" "}
                <a href="about.html" className="btn btn--teal">
                  {"More About Us "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
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
        <section className="section section--cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <p className="kicker">
                What We Do
              </p>
              {" "}
              <h2>
                Services crafted around your space
              </h2>
              {" "}
              <p>
                Three core specialties, one uncompromising standard of finish — each backed by careful preparation and premium materials.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card service-card reveal">
                {" "}
                <span className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                    <path d="M9 9h6" />
                    <path d="M9 13h6" />
                    <path d="M9 17h4" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Interior Painting
                </h3>
                {" "}
                <p>
                  Living rooms, bedrooms, kitchens and cabinetry — flawless matte, eggshell and satin finishes that transform how your home feels.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  {"Learn more "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card service-card--teal reveal reveal-delay-1">
                {" "}
                <span className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 4 6v6c0 4.5 3.5 7.5 8 9 4.5-1.5 8-4.5 8-9V6l-8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Exterior Coating
                </h3>
                {" "}
                <p>
                  Weather-proof masonry, siding and trim work that protects your home while giving it serious street appeal.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  {"Learn more "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card service-card--gold reveal reveal-delay-2">
                {" "}
                <span className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V8l3-4h8l3 4v13" />
                    <path d="M9 5v4" />
                    <path d="M15 5v4" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Commercial Decoration
                </h3>
                {" "}
                <p>
                  Offices, retail and hospitality — scheduled around your business, finished on deadline, with minimal disruption.
                </p>
                {" "}
                <a href="service.html" className="card-link">
                  {"Learn more "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
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
        <section className="section section--paper">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <p className="kicker">
                How It Works
              </p>
              {" "}
              <h2>
                A simple process, a perfect finish
              </h2>
              {" "}
              <p>
                Four clear steps from first call to final clean-up. You'll always know what happens next.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process">
              {" "}
              <div className="process-step reveal">
                {" "}
                <span className="step-dot" aria-hidden="true" />
                {" "}
                <h3>
                  {"Consult & Measure"}
                </h3>
                {" "}
                <p>
                  We visit your space, listen to your vision and take precise measurements.
                </p>
                {" "}
              </div>
              {" "}
              <div className="process-step reveal reveal-delay-1">
                {" "}
                <span className="step-dot" aria-hidden="true" />
                {" "}
                <h3>
                  {"Colour & Quote"}
                </h3>
                {" "}
                <p>
                  We prep samples, match your colours and give you a fixed, transparent quote.
                </p>
                {" "}
              </div>
              {" "}
              <div className="process-step reveal reveal-delay-2">
                {" "}
                <span className="step-dot" aria-hidden="true" />
                {" "}
                <h3>
                  {"Prep & Paint"}
                </h3>
                {" "}
                <p>
                  Dust-sealed zones, protected surfaces and two perfect coats applied.
                </p>
                {" "}
              </div>
              {" "}
              <div className="process-step reveal reveal-delay-3">
                {" "}
                <span className="step-dot" aria-hidden="true" />
                {" "}
                <h3>
                  {"Walkthrough & Guarantee"}
                </h3>
                {" "}
                <p>
                  We walk every wall with you and hand over a 10-year guarantee.
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
        <section className="stats-band" aria-label="Company statistics">
          {" "}
          <div className="container stats-band__inner">
            {" "}
            <div className="stat reveal">
              <strong>
                2,400+
              </strong>
              <span>
                Projects Delivered
              </span>
            </div>
            {" "}
            <div className="stat reveal reveal-delay-1">
              <strong>
                18 yrs
              </strong>
              <span>
                In Business
              </span>
            </div>
            {" "}
            <div className="stat reveal reveal-delay-2">
              <strong>
                98%
              </strong>
              <span>
                Client Satisfaction
              </span>
            </div>
            {" "}
            <div className="stat reveal reveal-delay-3">
              <strong>
                10 yrs
              </strong>
              <span>
                Workmanship Warranty
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--cream">
          {" "}
          <div className="container grid-2" style={{ alignItems: "center" }}>
            {" "}
            <div className="reveal">
              {" "}
              <p className="kicker kicker--teal">
                The TrueColor Difference
              </p>
              {" "}
              <h2>
                Meticulous prep is why our paint never quits
              </h2>
              {" "}
              <p className="lead">
                Anyone can roll paint on a wall. Great paint jobs are won in the hours before — sanding, filling, masking and priming.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Moisture and adhesion testing before every exterior job
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Primer on bare surfaces — never skipped, never optional
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Two full coats with consistent dry times between them
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Deep clean and paint-stack removal after the last coat
                </li>
                {" "}
              </ul>
              {" "}
              <div className="hero-actions" style={{ marginTop: "1.8rem" }}>
                {" "}
                <a href="service.html" className="btn btn--solid">
                  {"View All Services "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="media-frame reveal reveal-delay-1">
              {" "}
              <img src={a4} alt="Painter carefully cutting in a crisp edge between two colours" loading="lazy" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="quote-banner">
          {" "}
          <img src={a2} alt="" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <p className="quote-mark" aria-hidden="true">
              “
            </p>
            {" "}
            <blockquote>
              We don't just paint walls. We hand over rooms that feel finished — and stay finished.
            </blockquote>
            {" "}
            <cite>
              {"— Marcus Bell, Founder & Master Painter"}
            </cite>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--paper">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                Meet The Crew
              </p>
              {" "}
              <h2>
                The hands behind the finish
              </h2>
              {" "}
              <p>
                Master painters, colour consultants and project leads who treat every surface like a canvas.
              </p>
              {" "}
              <div className="hero-actions" style={{ marginTop: "1.2rem" }}>
                {" "}
                <a href="team.html" className="btn btn--teal">
                  {"Meet Everyone "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card team-card reveal">
                {" "}
                <div className="team-card__img">
                  <img src={a5} alt="Marcus Bell, Founder and Master Painter" loading="lazy" />
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3>
                    Marcus Bell
                  </h3>
                  {" "}
                  <span className="team-role">
                    {"Founder & Master Painter"}
                  </span>
                  {" "}
                  <p>
                    Twenty years of paint under his brush and a running list of colour formulas in his head.
                  </p>
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="Marcus on X">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Marcus on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card team-card reveal reveal-delay-1">
                {" "}
                <div className="team-card__img">
                  <img src={a6} alt="Elena Vasquez, Head Colour Consultant" loading="lazy" />
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3>
                    Elena Vasquez
                  </h3>
                  {" "}
                  <span className="team-role">
                    Head Colour Consultant
                  </span>
                  {" "}
                  <p>
                    Turns tricky rooms into confident palettes with a colour-eye most people only dream of.
                  </p>
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="Elena on X">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Elena on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card team-card reveal reveal-delay-2">
                {" "}
                <div className="team-card__img">
                  <img src={a7} alt="David Okafor, Commercial Projects Lead" loading="lazy" />
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3>
                    David Okafor
                  </h3>
                  {" "}
                  <span className="team-role">
                    Commercial Projects Lead
                  </span>
                  {" "}
                  <p>
                    Keeps multi-room jobs on schedule, on budget and totally stress-free for clients.
                  </p>
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="David on X">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="David on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    </a>
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
        <section className="section section--cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <p className="kicker">
                Client Love
              </p>
              {" "}
              <h2>
                Rooms we've transformed, people we've delighted
              </h2>
              {" "}
              <p>
                Real reviews from homeowners and business owners who trusted us with their walls.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card testimonial-card reveal">
                {" "}
                <p className="stars" aria-label="Rated 5 out of 5">
                  ★★★★★
                </p>
                {" "}
                <blockquote>
                  The crew was on time every single day and the colour match was unreal. Our living room finally feels like a magazine spread.
                </blockquote>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <img src={a8} alt="Portrait of Sarah Mitchell" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Sarah Mitchell
                    </strong>
                    <span>
                      Homeowner · Maple District
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testimonial-card testimonial-card--coral reveal reveal-delay-1">
                {" "}
                <p className="stars" aria-label="Rated 5 out of 5">
                  ★★★★★
                </p>
                {" "}
                <blockquote>
                  They painted our entire café over a weekend and reopened Monday morning spotless. Zero complaints from a single customer.
                </blockquote>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <img src={a9} alt="Portrait of Tom Ashworth" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Tom Ashworth
                    </strong>
                    <span>
                      Owner · Ashworth Café
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testimonial-card testimonial-card--gold reveal reveal-delay-2">
                {" "}
                <p className="stars" aria-label="Rated 5 out of 5">
                  ★★★★★
                </p>
                {" "}
                <blockquote>
                  Three years later the exterior still looks like the day they finished. The prep work is clearly where they spend their time.
                </blockquote>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <img src={a10} alt="Portrait of Priya Raman" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Priya Raman
                    </strong>
                    <span>
                      Homeowner · Willow Creek
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
              {" "}
              <a href="testimonial.html" className="btn btn--ghost">
                {"Read All Reviews "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--paper">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                From The Journal
              </p>
              {" "}
              <h2>
                Colour advice worth saving
              </h2>
              {" "}
              <p>
                Practical guides on choosing palettes, prepping walls and getting a finish that lasts.
              </p>
              {" "}
              <div className="hero-actions" style={{ marginTop: "1.2rem" }}>
                {" "}
                <a href="blog.html" className="btn btn--solid">
                  {"Visit The Blog "}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card blog-card reveal">
                {" "}
                <div className="blog-card__img">
                  <img src={a11} alt="A freshly painted interior wall in a soft neutral tone" loading="lazy" />
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-meta">
                    <span className="tag tag--teal">
                      Colour Theory
                    </span>
                    <span className="date">
                      Jun 12, 2026
                    </span>
                  </p>
                  {" "}
                  <h3>
                    How to pick a wall colour that never feels wrong
                  </h3>
                  {" "}
                  <p>
                    A simple three-step framework for choosing palettes that work in any light — north-facing rooms included.
                  </p>
                  {" "}
                  <a href="detail.html" className="card-link">
                    {"Read article "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card blog-card reveal reveal-delay-1">
                {" "}
                <div className="blog-card__img">
                  <img src={a12} alt="Painter prepping a wall with sanding before painting" loading="lazy" />
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-meta">
                    <span className="tag tag--gold">
                      {"Prep & Care"}
                    </span>
                    <span className="date">
                      May 28, 2026
                    </span>
                  </p>
                  {" "}
                  <h3>
                    Why 90% of a great paint job happens before the paint
                  </h3>
                  {" "}
                  <p>
                    The prep steps pros never skip — and the shortcuts that guarantee an early repaint.
                  </p>
                  {" "}
                  <a href="detail.html" className="card-link">
                    {"Read article "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card blog-card reveal reveal-delay-2">
                {" "}
                <div className="blog-card__img">
                  <img src={a13} alt="Bold accent wall in a contemporary living space" loading="lazy" />
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-meta">
                    <span className="tag tag--teal">
                      Trends
                    </span>
                    <span className="date">
                      May 09, 2026
                    </span>
                  </p>
                  {" "}
                  <h3>
                    The boldest accent wall colours of the season
                  </h3>
                  {" "}
                  <p>
                    From deep forest to burnt terracotta — the statement shades our consultants are recommending right now.
                  </p>
                  {" "}
                  <a href="detail.html" className="card-link">
                    {"Read article "}
                    <span className="arrow" aria-hidden="true">
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
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="cta-band">
          {" "}
          <img src={a1} alt="" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <div>
              {" "}
              <p className="kicker kicker--light">
                Ready When You Are
              </p>
              {" "}
              <h2>
                Let's give your walls a colour they deserve
              </h2>
              {" "}
              <p>
                Free quotes, fixed prices and a finish guaranteed for ten years. Tell us about your space today.
              </p>
              {" "}
            </div>
            {" "}
            <a href="contact.html" className="btn btn--light">
              {"Get My Free Quote "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-main">
            {" "}
            <div className="footer-about">
              {" "}
              <a href="index.html" className="footer-brand" aria-label="TrueColor — home">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="10" height="6" rx="1" />
                    <path d="M13 6h5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v1" />
                    <path d="M14 20v-1a2 2 0 0 1 2-2" />
                    <circle cx="14" cy="20" r="1.5" />
                  </svg>
                  {" "}
                </span>
                {" True"}
                <em>
                  Color
                </em>
                {" "}
              </a>
              {" "}
              <p>
                TrueColor is a professional painting and decorating studio. Precision colour matching, meticulous prep and a finish guaranteed for ten years.
              </p>
              {" "}
              <ul className="footer-social">
                {" "}
                <li>
                  <a href="#" aria-label="TrueColor on X">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                    </svg>
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#" aria-label="TrueColor on Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#" aria-label="TrueColor on LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#" aria-label="TrueColor on Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
                    </svg>
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
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
                  <a href="service.html">
                    Our Services
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
                  <a href="blog.html">
                    {"Blog & Guides"}
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
              <h3>
                Services
              </h3>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="service.html">
                    Interior Painting
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Exterior Coating
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Commercial Decoration
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Colour Consultation
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Wallpaper & Finishes"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Fence & Deck Staining"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h3>
                Get In Touch
              </h3>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <a href="mailto:hello@truecolor.studio">
                    hello@truecolor.studio
                  </a>
                </li>
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    248 Pine Street, Suite 4
                    <br />
                    Maple District, CA 94043
                  </span>
                </li>
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>
                    Mon–Sat, 8:00 AM – 6:00 PM
                  </span>
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
              {" TrueColor Painting & Decorating. All rights reserved."}
            </p>
            {" "}
            <p>
              <a href="contact.html">
                Privacy Policy
              </a>
              {" · "}
              <a href="contact.html">
                Terms of Service
              </a>
              {" · "}
              <a href="contact.html">
                Sitemap
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
