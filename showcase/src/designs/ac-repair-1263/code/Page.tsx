// Converted from the HTML template ac-repair-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/feature.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-ac-repair-1263">
      {" "}
      <div className="topbar">
        {" "}
        <div className="container">
          {" "}
          <span className="badge">
            <span className="dot pulse-dot" />
            READY TODAY
          </span>
          {" "}
          <span>
            Same-day service · 24/7 comfort line
          </span>
          {" "}
          <span className="spacer" />
          {" "}
          <a href="tel:+14155550134">
            +1 (415) 555-0134
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            Zeph
            <em>
              yr
            </em>
          </a>
          {" "}
          <nav id="mainnav">
            {" "}
            <a href="index.html" aria-current="page">
              Home
            </a>
            {" "}
            <a href="service.html">
              Services
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Book a Visit
          </a>
          {" "}
          <button className="burger" id="burger" aria-label="Menu" aria-expanded="false">
            ☰
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" id="hero">
        {" "}
        <div className="container">
          {" "}
          <div className="hero-words">
            {" "}
            <span className="hero-eyebrow">
              ✦ Comfort, on your terms
            </span>
            {" "}
            <h1>
              Cool air,
              <br />
              calmly delivered.
            </h1>
            {" "}
            <p className="lead">
              {" Premium air conditioning & climate care for your home or office. Diagnostics-first service, honest pricing, and a cool breeze that follows you home. "}
            </p>
            {" "}
            {" "}
            <div className="temp-zone">
              {" "}
              <div className="temp-label">
                {" "}
                <span id="tempreadout" role="status" aria-live="polite" aria-valuenow="74" className="temp-readout">
                  74
                  <sup>
                    °F
                  </sup>
                </span>
                {" "}
                <span className="temp-mode temp-mode--comf" id="tempmode">
                  Comfortable
                </span>
                {" "}
              </div>
              {" "}
              <input type="range" id="tempthermo" className="temp-slider" min="60" max="90" step="1" defaultValue="74" aria-label="Set your ideal temperature" />
              {" "}
              <div className="temp-scale">
                <span>
                  60°
                </span>
                <span>
                  75°
                </span>
                <span>
                  90°
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn--ice">
                Schedule Service →
              </a>
              {" "}
              <a href="service.html" className="btn btn--outline">
                Explore Services
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-visual">
            {" "}
            <div className="hero-chips">
              {" "}
              <span className="chip chip--cool">
                <em>
                  2h
                </em>
                {" avg. response"}
              </span>
              {" "}
              <span className="chip chip--comf">
                <em>
                  18°
                </em>
                {" cooler, fast"}
              </span>
              {" "}
              <span className="chip chip--warm">
                <em>
                  24/7
                </em>
                {" comfort line"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="hero-img-wrap">
              {" "}
              <img className="hero-img float" src={a0} alt="Modern air conditioning unit in a bright living space" />
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
      <section className="stats">
        {" "}
        <div className="container">
          {" "}
          <div className="stat-cell reveal">
            {" "}
            <div className="stat-num">
              <span data-count="18">
                0
              </span>
              <small>
                yr
              </small>
            </div>
            {" "}
            <div className="stat-label">
              Of calm, reliable service
            </div>
            {" "}
          </div>
          {" "}
          <div className="stat-cell reveal d1">
            {" "}
            <div className="stat-num">
              <span data-count="12000">
                0
              </span>
              <small>
                +
              </small>
            </div>
            {" "}
            <div className="stat-label">
              Systems kept comfortable
            </div>
            {" "}
          </div>
          {" "}
          <div className="stat-cell reveal d2">
            {" "}
            <div className="stat-num">
              <span data-count="4.9">
                0
              </span>
              <small>
                ★
              </small>
            </div>
            {" "}
            <div className="stat-label">
              Average client rating
            </div>
            {" "}
          </div>
          {" "}
          <div className="stat-cell reveal d3">
            {" "}
            <div className="stat-num">
              <span data-count="2">
                0
              </span>
              <small>
                h
              </small>
            </div>
            {" "}
            <div className="stat-label">
              Average response time
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--frost">
        {" "}
        <div className="container">
          {" "}
          <span className="section-label">
            What we do
          </span>
          {" "}
          <h2 className="section-title">
            Care for every corner
            <br />
            of your climate
          </h2>
          {" "}
          <p className="section-desc">
            {" From a single window unit to a full multi-zone system — calm, careful, and never rushed. "}
          </p>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                ❄
              </div>
              {" "}
              <h3>
                AC Repair
              </h3>
              {" "}
              <p>
                Same-day diagnostics and repair for every make and model. Most fixes finished on the first visit.
              </p>
              {" "}
              <span className="tag">
                Same-day
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                ☀
              </div>
              {" "}
              <h3>
                {"Heating & Furnaces"}
              </h3>
              {" "}
              <p>
                Quiet, efficient warmth for the coldest months — annual tune-ups and full replacements.
              </p>
              {" "}
              <span className="tag">
                Tune-ups
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                ◎
              </div>
              {" "}
              <h3>
                New Installations
              </h3>
              {" "}
              <p>
                Systems sized to your actual space and installed with care, from ductless to central.
              </p>
              {" "}
              <span className="tag">
                10-yr warranty
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                ✦
              </div>
              {" "}
              <h3>
                Maintenance Plans
              </h3>
              {" "}
              <p>
                Two gentle tune-ups a year that cut energy bills and prevent surprises.
              </p>
              {" "}
              <span className="tag">
                Save 18%
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                ◍
              </div>
              {" "}
              <h3>
                Indoor Air Quality
              </h3>
              {" "}
              <p>
                Purifiers, humidifiers, and ventilation that help you breathe easier, sleep deeper.
              </p>
              {" "}
              <span className="tag">
                Pure air
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                ✕
              </div>
              {" "}
              <h3>
                Emergency Service
              </h3>
              {" "}
              <p>
                AC failure in a heatwave? We answer day and night — average response of just two hours.
              </p>
              {" "}
              <span className="tag">
                24/7
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
      <section className="section section--glass">
        {" "}
        <div className="container">
          {" "}
          <span className="section-label">
            How it works
          </span>
          {" "}
          <h2 className="section-title text-center" style={{ textAlign: "center" }}>
            Effortless, from call to cool
          </h2>
          {" "}
          <p className="section-desc text-center" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            {" Three gentle steps — no pressure, no surprises. "}
          </p>
          {" "}
          <div className="steps-grid">
            {" "}
            <div className="step-card reveal">
              {" "}
              <span className="icon">
                ☎
              </span>
              {" "}
              <h3>
                Tell us what's wrong
              </h3>
              {" "}
              <p>
                Call or book online. We listen first, then schedule a time that suits you — often the same day.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card reveal d1">
              {" "}
              <span className="icon">
                🔍
              </span>
              {" "}
              <h3>
                We diagnose with care
              </h3>
              {" "}
              <p>
                A thorough, written check of your system — temperatures, airflow, pressures. No guesswork, ever.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card reveal d2">
              {" "}
              <span className="icon">
                ❄
              </span>
              {" "}
              <h3>
                You breathe easy
              </h3>
              {" "}
              <p>
                Transparent quote, tidy work, and a system that runs quietly for years to come.
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="feature-split">
            {" "}
            <div className="frame reveal">
              {" "}
              <img src={a1} alt="ZEPHYR technician checking an air conditioning system" />
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="section-label">
                Our promise
              </span>
              {" "}
              <h2 className="section-title">
                Measure first.
                <br />
                {"Fix second. "}
                <em style={{ color: "var(--ice-600)", fontStyle: "normal" }}>
                  Always.
                </em>
              </h2>
              {" "}
              <p className="section-desc">
                {" Most problems start long before they're felt. Our technicians arrive with thermal cameras and digital gauges — not guesswork — and explain everything in plain language before any work begins. "}
              </p>
              {" "}
              <ul>
                {" "}
                <li className="reveal">
                  <span className="ic">
                    ✓
                  </span>
                  <div>
                    <b>
                      Written diagnostics
                    </b>
                    <span>
                      Every visit ends with a clear, itemized report.
                    </span>
                  </div>
                </li>
                {" "}
                <li className="reveal d1">
                  <span className="ic">
                    ✓
                  </span>
                  <div>
                    <b>
                      Upfront pricing
                    </b>
                    <span>
                      Approved before work starts. No surprise invoices.
                    </span>
                  </div>
                </li>
                {" "}
                <li className="reveal d2">
                  <span className="ic">
                    ✓
                  </span>
                  <div>
                    <b>
                      {"Certified & insured"}
                    </b>
                    <span>
                      EPA-certified technicians, fully bonded.
                    </span>
                  </div>
                </li>
                {" "}
              </ul>
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
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <span className="section-label">
            Simple pricing
          </span>
          {" "}
          <h2 className="section-title text-center" style={{ textAlign: "center" }}>
            Plans that breathe easy
          </h2>
          {" "}
          <p className="section-desc text-center" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            {" Transparent packages — pick the one that fits your home and season. "}
          </p>
          {" "}
          <div className="pricing-grid">
            {" "}
            <div className="plan reveal">
              {" "}
              <h3>
                Breeze
              </h3>
              {" "}
              <div className="price">
                $89
                <small>
                  /visit
                </small>
              </div>
              {" "}
              <span className="per">
                One-time service call
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  Full system diagnostic
                </li>
                {" "}
                <li>
                  {"Filter & coil inspection"}
                </li>
                {" "}
                <li>
                  Refrigerant check
                </li>
                {" "}
                <li>
                  Written report
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--outline btn--wide">
                Book a Visit
              </a>
              {" "}
            </div>
            {" "}
            <div className="plan plan--featured reveal d1">
              {" "}
              <span className="plan-badge">
                Most loved
              </span>
              {" "}
              <h3>
                Balance
              </h3>
              {" "}
              <div className="price">
                $19
                <small>
                  /mo
                </small>
              </div>
              {" "}
              <span className="per">
                Seasonal care plan
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  2 tune-ups per year
                </li>
                {" "}
                <li>
                  Priority same-day booking
                </li>
                {" "}
                <li>
                  15% off any repair
                </li>
                {" "}
                <li>
                  Extended system warranty
                </li>
                {" "}
                <li>
                  Annual air-quality check
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--ice btn--wide">
                Join the Plan
              </a>
              {" "}
            </div>
            {" "}
            <div className="plan reveal d2">
              {" "}
              <h3>
                Sanctuary
              </h3>
              {" "}
              <div className="price">
                $29
                <small>
                  /mo
                </small>
              </div>
              {" "}
              <span className="per">
                Full climate coverage
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  Everything in Balance
                </li>
                {" "}
                <li>
                  24/7 emergency response
                </li>
                {" "}
                <li>
                  No overtime charges
                </li>
                {" "}
                <li>
                  Whole-home air quality
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--outline btn--wide">
                Go All In
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
      <section className="section section--frost">
        {" "}
        <div className="container">
          {" "}
          <span className="section-label">
            Kind words
          </span>
          {" "}
          <h2 className="section-title text-center" style={{ textAlign: "center" }}>
            Comfort, appreciated
          </h2>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "They found the issue in ten minutes, quoted before starting, and had us cool again that same afternoon. Calm, kind, professional."
              </p>
              {" "}
              <div className="who">
                <span className="avatar">
                  J
                </span>
                <div>
                  <b>
                    Jordan M.
                  </b>
                  <br />
                  <span>
                    Homeowner, Mission District
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal d1">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "Our whole office signed up for the Balance plan. The tune-ups are on time every season and the energy bill dropped noticeably."
              </p>
              {" "}
              <div className="who">
                <span className="avatar">
                  S
                </span>
                <div>
                  <b>
                    Priya S.
                  </b>
                  <br />
                  <span>
                    Office Manager, SoMa
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal d2">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "Emergency call at 9pm on a Saturday — they arrived in under two hours and didn't charge overtime. I tell everyone about them."
              </p>
              {" "}
              <div className="who">
                <span className="avatar">
                  D
                </span>
                <div>
                  <b>
                    Daniel R.
                  </b>
                  <br />
                  <span>
                    Rental Owner, Noe Valley
                  </span>
                </div>
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <span className="section-label">
            Good to know
          </span>
          {" "}
          <h2 className="section-title text-center" style={{ textAlign: "center" }}>
            Questions, answered
          </h2>
          {" "}
          <div className="faq">
            {" "}
            <div className="faq-item reveal">
              {" "}
              <button className="faq-q" aria-expanded="false">
                {"How fast can you get here? "}
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                For most calls we arrive the same day. Emergency service runs 24/7 with an average response time of about two hours.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item reveal d1">
              {" "}
              <button className="faq-q" aria-expanded="false">
                {"Will I get a written quote before work starts? "}
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Always. We diagnose, explain your options in plain language, and confirm a fixed price with you before any work begins — no surprises on the invoice.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item reveal d2">
              {" "}
              <button className="faq-q" aria-expanded="false">
                {"Do you service all brands? "}
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Yes — Carrier, Trane, Lennox, Mitsubishi, Daikin, Rheem, and most others. Our technicians are manufacturer-trained on the major systems.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item reveal d3">
              {" "}
              <button className="faq-q" aria-expanded="false">
                {"Is there a maintenance plan right for a small home? "}
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Absolutely. The Balance plan is designed for single homes and small offices: two tune-ups a year, priority booking, and 15% off repairs.
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
      <section className="cta-band">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="section-label">
              Get started
            </span>
            {" "}
            <h2>
              Ready for cooler,
              <br />
              calmer days?
            </h2>
            {" "}
            <p>
              Same-week appointments. Honest pricing. Comfort delivered calmly.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="contact.html" className="btn btn--ice">
              Book a Visit →
            </a>
            {" "}
            <a href="tel:+14155550134" className="btn btn--outline">
              +1 (415) 555-0134
            </a>
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
              <div className="brand">
                Zeph
                <em>
                  yr
                </em>
              </div>
              {" "}
              <p>
                {"Premium air conditioning & climate care, delivered calmly since 2008."}
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <a href="service.html">
                AC Repair
              </a>
              <br />
              {" "}
              <a href="service.html">
                Heating
              </a>
              <br />
              {" "}
              <a href="service.html">
                Installation
              </a>
              <br />
              {" "}
              <a href="service.html">
                Maintenance
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <a href="about.html">
                About
              </a>
              <br />
              {" "}
              <a href="about.html">
                Our Promise
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Comfort Line
              </h4>
              {" "}
              <a href="tel:+14155550134">
                +1 (415) 555-0134
              </a>
              <br />
              {" "}
              <span style={{ fontSize: ".8rem", color: "rgba(255,255,255,.5)" }}>
                24/7 — no overtime charges
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="base">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" ZEPHYR Climate Care"}
            </span>
            {" "}
            <span>
              Lic #CL-20084712 · Fully insured
            </span>
            {" "}
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
