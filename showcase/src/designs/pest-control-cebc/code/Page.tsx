// Converted from the HTML template pest-control-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about-img.webp";
import a3 from "./assets/action.webp";
import a4 from "./assets/project-1.webp";
import a5 from "./assets/project-2.webp";
import a6 from "./assets/project-3.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";
import a10 from "./assets/blog-1.webp";
import a11 from "./assets/blog-2.webp";
import a12 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;700;800;900&family=Karla:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-pest-control-cebc">
      {" "}
      {" "}
      <header className="site-head">
        {" "}
        <div className="topbar">
          {" "}
          <div className="container">
            {" "}
            <div className="topbar-left">
              {" "}
              <span className="topbar-item">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 2.5v5.2c0 4.6-2.9 7.6-7 9.3-4.1-1.7-7-4.7-7-9.3V5.5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                {" EPA-Certified & Fully Insured "}
              </span>
              {" "}
              <span className="topbar-item">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12.5l2.6 2.6L16 9.5" />
                </svg>
                {" Same-Day Service Available "}
              </span>
              {" "}
            </div>
            {" "}
            <div className="topbar-right">
              {" "}
              <span className="topbar-item">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {" Mon–Sat 7:00 – 19:00 "}
              </span>
              {" "}
              <a href="tel:+15550142200" className="emg">
                24/7 Emergency Line
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <nav className="navbar">
          {" "}
          <div className="container">
            {" "}
            <a className="brand" href="index.html" aria-label="PestKit home">
              {" "}
              <span className="brand-mark">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l7.5 2.7v5.6c0 4.9-3.1 8.2-7.5 10-4.4-1.8-7.5-5.1-7.5-10V5.2z" />
                  <path d="M8.8 12l2.2 2.2 4.2-4.4" />
                </svg>
                {" "}
              </span>
              {" "}
              <span>
                PestKit
                <small>
                  Clean. Safe. Protected.
                </small>
              </span>
              {" "}
            </a>
            {" "}
            <ul className="nav-links">
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
                <a className="nav-link" href="price.html">
                  Pricing
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="project.html">
                  Projects
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
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <div className="nav-cta">
              {" "}
              <a className="nav-phone" href="tel:+15550142200">
                <span>
                  Emergency
                </span>
                <b>
                  (555) 014-2200
                </b>
              </a>
              {" "}
              <a className="btn small" href="contact.html">
                Book Now
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
            {" "}
          </div>
          {" "}
        </nav>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" id="top">
          {" "}
          <div className="hero-bg">
            {" "}
            <img className="active" src={a0} alt="PestKit technician inspecting a home for pests" />
            {" "}
            <img src={a1} alt="Professional pest control treatment in progress" />
            {" "}
          </div>
          {" "}
          <div className="hero-veil" />
          {" "}
          <div className="hero-rail">
            {" "}
            <div className="hero-stat">
              <b>
                15k+
              </b>
              <span>
                Homes Protected
              </span>
            </div>
            {" "}
            <div className="hero-stat">
              <b>
                99.8%
              </b>
              <span>
                Success Rate
              </span>
            </div>
            {" "}
            <div className="hero-stat">
              <b>
                24/7
              </b>
              <span>
                Emergency Call
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero-body">
              {" "}
              <span className="eyebrow on-dark">
                {"Licensed Pest Control & Extermination"}
              </span>
              {" "}
              <h1>
                A clean home.
                <br />
                Zero pests.
                <br />
                <span className="hl">
                  Total peace of mind.
                </span>
              </h1>
              {" "}
              <p className="lead">
                PestKit protects your family and property with certified, family-safe treatments. From a single ant trail to a full commercial termite program — we find the source, fix it fast, and keep it gone.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn" href="contact.html">
                  {" Book Free Inspection "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="btn btn-line" href="tel:+15550142200">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                  </svg>
                  {" (555) 014-2200 "}
                </a>
                {" "}
              </div>
              {" "}
              <ul className="hero-trust">
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12.5l2.6 2.6L16 9.5" />
                  </svg>
                  100% Satisfaction
                </li>
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 2.5v5.2c0 4.6-2.9 7.6-7 9.3-4.1-1.7-7-4.7-7-9.3V5.5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {"Safe for Kids & Pets"}
                </li>
                {" "}
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5z" />
                  </svg>
                  Same-Day Response
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="trust-strip" aria-hidden="true">
          {" "}
          <div className="trust-track">
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 2.5v5.2c0 4.6-2.9 7.6-7 9.3-4.1-1.7-7-4.7-7-9.3V5.5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              EPA-Certified Applications
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M17 6.5C17 4 15 3 12 3S7 4 7 6.5 9 10 12 10s5 1 5 3.5S15 17 12 17s-5-1-5-3.5" />
              </svg>
              Family-Safe Formulas
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5z" />
              </svg>
              Same-Day Service
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              24/7 Emergency
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 8H9a4 4 0 1 0 0 8h1" />
                <circle cx="16.5" cy="14" r="4.5" />
                <path d="M16.5 12v4" />
                <path d="M14.5 14h4" />
              </svg>
              Termite Warranty
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12v0" />
                <path d="M12 2a10 10 0 0 1 8.7 5 10 10 0 0 1-1.2 11.2A10 10 0 0 1 12 22" />
                <path d="M4.5 6.5A10 10 0 0 0 12 22" />
              </svg>
              {"Commercial & Industrial"}
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 11a8 8 0 0 0-16 0c0 5 4 9 8 9s8-4 8-9z" />
                <path d="M6 13c2 1.5 10 1.5 12 0" />
              </svg>
              Pet-Friendly Guarantee
            </span>
            {" "}
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 2.5v5.2c0 4.6-2.9 7.6-7 9.3-4.1-1.7-7-4.7-7-9.3V5.5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              EPA-Certified Applications
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M17 6.5C17 4 15 3 12 3S7 4 7 6.5 9 10 12 10s5 1 5 3.5S15 17 12 17s-5-1-5-3.5" />
              </svg>
              Family-Safe Formulas
            </span>
            {" "}
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5z" />
              </svg>
              Same-Day Service
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="sec">
          {" "}
          <div className="container split">
            {" "}
            <div className="media-frame reveal d-left">
              {" "}
              <img src={a2} alt="PestKit technician inspecting a kitchen for pest entry points" />
              {" "}
              <div className="badge-tag">
                <em>
                  15+
                </em>
                Years Protecting
                <br />
                Your Home
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal d-right">
              {" "}
              <span className="eyebrow">
                Why PestKit
              </span>
              {" "}
              <h2>
                We don't just spray.
                <br />
                We solve the source.
              </h2>
              {" "}
              <p className="lead">
                Band-aid treatments come back. PestKit finds how pests are getting in, seals the entry, and deploys a targeted plan — so the problem is gone, not just hidden.
              </p>
              {" "}
              <ul className="checklist">
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      Certified technicians
                    </b>
                    {" — every specialist is state-licensed and background-checked."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      Integrated Pest Management
                    </b>
                    {" — prevention-first, chemical-last approach."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      Re-service guarantee
                    </b>
                    {" — if pests return between visits, we do too. Free."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      Transparent pricing
                    </b>
                    {" — flat quotes up front. No surprise upcharges."}
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
              <div className="hero-actions" style={{ marginTop: "2rem" }}>
                {" "}
                <a className="btn btn-green" href="about.html">
                  More About Us
                </a>
                {" "}
                <a className="btn btn-ghost" href="contact.html">
                  Get a Quote
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
        <section className="sec sec-soft" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head center reveal">
              {" "}
              <span className="eyebrow">
                Our Services
              </span>
              {" "}
              <h2>
                Full-spectrum pest defense
              </h2>
              {" "}
              <p>
                One call covers every pest in the building — residential or commercial. Every program is scoped to your property and backed by our guarantee.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3 stagger">
              {" "}
              <article className="card service-card reveal" style={{ "--i": "0" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3c2 0 2.5 2 4 2s2-2 4-2 3 2 3 4c0 4-3 6-7 6s-7-2-7-6c0-2 1-4 3-4z" />
                    <path d="M12 15v3" />
                    <circle cx="12" cy="20" r="1.2" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Rodent Control
                </h3>
                {" "}
                <p>
                  Sealing, trapping and baiting programs that clear rats and mice from walls, attics and crawlspaces — and keep them out for good.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal" style={{ "--i": "1" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c4 0 7 2.5 7 6 0 5-4.5 7-7 7s-7-2-7-7c0-3.5 3-6 7-6z" />
                    <path d="M8 3c1.5-1 4-1 4 1" />
                    <path d="M17 7h3" />
                    <path d="M19 9.5h2" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Termite Treatment
                </h3>
                {" "}
                <p>
                  Subterranean and drywood programs with liquid barriers, bait systems and a transferable warranty that protects your biggest asset.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal" style={{ "--i": "2" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="9" r="4" />
                    <path d="M4.5 9h7" />
                    <circle cx="16" cy="15" r="4.5" />
                    <path d="M12.5 15h7" />
                    <path d="M8 13v2.5" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Bed Bug Removal
                </h3>
                {" "}
                <p>
                  Heat, steam and targeted chemistry that eliminate bed bugs at every life stage — bedrooms back to sleep-ready in days, not weeks.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal" style={{ "--i": "3" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3l4 6-4 6H5l4-6L5 3z" />
                    <path d="M15 3l4 6-4 6h-2l4-6-4-6z" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Cockroach Treatment
                </h3>
                {" "}
                <p>
                  Gel, growth regulators and harbor-age elimination that break the breeding cycle — even in restaurants and food facilities.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal" style={{ "--i": "4" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 9h16l-1.5 9a2 2 0 0 1-2 1.6h-9A2 2 0 0 1 5.5 18z" />
                    <path d="M8 9V7a4 4 0 0 1 8 0v2" />
                    <path d="M4 9H2.5" />
                    <path d="M20 9h1.5" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Mosquito Control
                </h3>
                {" "}
                <p>
                  Backyard barrier treatments and breeding-site management that cut mosquito pressure for months across your whole yard.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal" style={{ "--i": "5" }}>
                {" "}
                <span className="corner" />
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c-3.5 0-6 2-6 5 0 2 .8 3.5 2 4.5V14h8v-1.5c1.2-1 2-2.5 2-4.5 0-3-2.5-5-6-5z" />
                    <path d="M9.5 17h5" />
                    <path d="M10 20h4" />
                  </svg>
                </div>
                {" "}
                <h3>
                  {"Ant & Spider Control"}
                </h3>
                {" "}
                <p>
                  Colony-targeted ant programs and web-removal spider management that keep your interior and exterior pest-light all year.
                </p>
                {" "}
                <a className="more" href="service.html">
                  {"Learn more "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="sec-foot reveal">
              {" "}
              <a className="btn btn-dark" href="service.html">
                View All Services
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="sec sec-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head reveal">
              {" "}
              <span className="eyebrow on-dark">
                How It Works
              </span>
              {" "}
              <h2>
                Four steps to a pest-free space
              </h2>
              {" "}
              <p>
                A simple, disciplined process — the same one we've run on 15,000+ properties. No guesswork, no wasted visits.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-4 stagger">
              {" "}
              <article className="step-card reveal" style={{ "--i": "0" }}>
                {" "}
                <div className="step-no">
                  01
                </div>
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Inspect
                </h3>
                {" "}
                <p>
                  We map entry points, nests and pressure zones inside and out.
                </p>
                {" "}
              </article>
              {" "}
              <article className="step-card reveal" style={{ "--i": "1" }}>
                {" "}
                <div className="step-no">
                  02
                </div>
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 18l.9-5.4L4.2 8.7l5.4-.8z" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Plan
                </h3>
                {" "}
                <p>
                  You get a flat quote and a treatment plan before we touch anything.
                </p>
                {" "}
              </article>
              {" "}
              <article className="step-card reveal" style={{ "--i": "2" }}>
                {" "}
                <div className="step-no">
                  03
                </div>
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3v14a2 2 0 0 0 2 2h14" />
                    <path d="M5 10h14" />
                    <path d="M12 17V7" />
                    <path d="M12 10l-4-3" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Treat
                </h3>
                {" "}
                <p>
                  Certified techs apply family-safe treatments and seal the source.
                </p>
                {" "}
              </article>
              {" "}
              <article className="step-card reveal" style={{ "--i": "3" }}>
                {" "}
                <div className="step-no">
                  04
                </div>
                {" "}
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 2.5v5.2c0 4.6-2.9 7.6-7 9.3-4.1-1.7-7-4.7-7-9.3V5.5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                {" "}
                <h3>
                  Guarantee
                </h3>
                {" "}
                <p>
                  Ongoing monitoring and free call-backs if pests return between visits.
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
        <section className="sec">
          {" "}
          <div className="container split">
            {" "}
            <div className="reveal d-left">
              {" "}
              <span className="eyebrow">
                The PestKit Promise
              </span>
              {" "}
              <h2>
                Dispatched today.
                <br />
                Documented always.
              </h2>
              {" "}
              <p className="lead">
                Every visit is logged with photos, a treatment map and follow-up reminders — so you always know exactly what was done to protect your property.
              </p>
              {" "}
              <div className="grid grid-2" style={{ gap: "1rem", marginTop: "1.8rem" }}>
                {" "}
                <div className="contact-card">
                  {" "}
                  <div className="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v18" />
                      <path d="M17 6.5C17 4 15 3 12 3S7 4 7 6.5 9 10 12 10s5 1 5 3.5S15 17 12 17s-5-1-5-3.5" />
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <b>
                      {"Family & pet safe"}
                    </b>
                    <p>
                      Low-toxicity formulas that are safe once dry — verified by EPA label review.
                    </p>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact-card">
                  {" "}
                  <div className="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7l-5 5 5 5" />
                      <path d="M17 7l5 5-5 5" />
                      <path d="M13 4l-2 16" />
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <b>
                      Digital reports
                    </b>
                    <p>
                      Photo-documented visits and an inspection map on every job.
                    </p>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <ul className="checklist">
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      30-day re-service guarantee
                    </b>
                    {" included on every treatment."}
                  </span>
                </li>
                {" "}
                <li>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    <b>
                      Flexible scheduling
                    </b>
                    {" — evenings and weekends at no extra charge."}
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="media-frame reveal d-right">
              {" "}
              <img src={a3} alt="PestKit specialist applying a perimeter treatment with a backpack sprayer" />
              {" "}
              <div className="badge-tag">
                <em>
                  60 min
                </em>
                Average Same-Day
                <br />
                Arrival Window
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="sec sec-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="grid grid-4 stagger">
              {" "}
              <div className="stat reveal" style={{ "--i": "0" }}>
                <b>
                  15,000
                  <em>
                    +
                  </em>
                </b>
                <span>
                  Properties Protected
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--i": "1" }}>
                <b>
                  28
                </b>
                <span>
                  Certified Technicians
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--i": "2" }}>
                <b>
                  99.8
                  <em>
                    %
                  </em>
                </b>
                <span>
                  Resolution Rate
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--i": "3" }}>
                <b>
                  4.9
                  <em>
                    /5
                  </em>
                </b>
                <span>
                  Average Rating
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
        <section className="sec sec-soft" id="projects">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head reveal">
              {" "}
              <span className="eyebrow">
                Recent Work
              </span>
              {" "}
              <h2>
                Projects that hold up
              </h2>
              {" "}
              <p>
                From termite remediation on historic homes to full building programs for commercial campuses — here's the work we're proud of.
              </p>
              {" "}
              <div className="actions">
                <a className="btn btn-green" href="project.html">
                  All Projects
                </a>
              </div>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3 stagger">
              {" "}
              <a className="project-card reveal" style={{ "--i": "0" }} href="project.html">
                {" "}
                <img src={a4} alt="Residential termite barrier installation project" />
                {" "}
                <div className="ovl">
                  {" "}
                  <span className="arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  {" "}
                  <span className="tag">
                    Termite · Residential
                  </span>
                  {" "}
                  <h3>
                    Lakeshore Estate Barrier
                  </h3>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a className="project-card reveal" style={{ "--i": "1" }} href="project.html">
                {" "}
                <img src={a5} alt="Commercial kitchen cockroach elimination project" />
                {" "}
                <div className="ovl">
                  {" "}
                  <span className="arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  {" "}
                  <span className="tag">
                    Commercial · Food Service
                  </span>
                  {" "}
                  <h3>
                    Riverside Bistro Program
                  </h3>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a className="project-card reveal" style={{ "--i": "2" }} href="project.html">
                {" "}
                <img src={a6} alt="Bed bug heat treatment project for apartments" />
                {" "}
                <div className="ovl">
                  {" "}
                  <span className="arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  {" "}
                  <span className="tag">
                    Bed Bug · Multi-Family
                  </span>
                  {" "}
                  <h3>
                    Oakwood Apartments Heat
                  </h3>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="sec" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head center reveal">
              {" "}
              <span className="eyebrow">
                Client Stories
              </span>
              {" "}
              <h2>
                Trusted by thousands of neighbors
              </h2>
              {" "}
              <p>
                Real reviews from homeowners, property managers and business owners who stopped worrying about pests.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3 stagger">
              {" "}
              <article className="quote-card reveal" style={{ "--i": "0" }}>
                {" "}
                <span className="marks">
                  "
                </span>
                {" "}
                <div className="stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "They found a rat entry behind the water heater that two other companies missed. Sealed it, cleared it, and we haven't seen a single sign since."
                </blockquote>
                {" "}
                <div className="who">
                  {" "}
                  <img src={a7} alt="Portrait of Maria Torres" />
                  {" "}
                  <div>
                    <b>
                      Maria Torres
                    </b>
                    <span>
                      Homeowner · Maple District
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="quote-card reveal" style={{ "--i": "1" }}>
                {" "}
                <span className="marks">
                  "
                </span>
                {" "}
                <div className="stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "The commercial program for our kitchen is flawless. Clean, discreet visits before service hours and an inspector who actually explains everything."
                </blockquote>
                {" "}
                <div className="who">
                  {" "}
                  <img src={a8} alt="Portrait of Daniel Okafor" />
                  {" "}
                  <div>
                    <b>
                      Daniel Okafor
                    </b>
                    <span>
                      Owner · Riverside Bistro
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="quote-card reveal" style={{ "--i": "2" }}>
                {" "}
                <span className="marks">
                  "
                </span>
                {" "}
                <div className="stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "We manage 140 units and PestKit is the only vendor that shows up with a plan and a report. Our pest complaints dropped to near zero."
                </blockquote>
                {" "}
                <div className="who">
                  {" "}
                  <img src={a9} alt="Portrait of Hannah Lindqvist" />
                  {" "}
                  <div>
                    <b>
                      Hannah Lindqvist
                    </b>
                    <span>
                      Property Manager · Oakwood
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="sec-foot reveal">
              {" "}
              <a className="btn btn-dark" href="testimonial.html">
                Read All Reviews
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="sec sec-soft" id="blog">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head reveal">
              {" "}
              <span className="eyebrow">
                From the Field
              </span>
              {" "}
              <h2>
                Pest intelligence, plain English
              </h2>
              {" "}
              <p>
                Field notes from our technicians — what to watch for, how to prevent it, and when to call in the pros.
              </p>
              {" "}
              <div className="actions">
                <a className="btn btn-green" href="blog.html">
                  Visit the Blog
                </a>
              </div>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3 stagger">
              {" "}
              <article className="post-card reveal" style={{ "--i": "0" }}>
                {" "}
                <div className="post-thumb">
                  {" "}
                  <img src={a10} alt="Common entry points where rodents get into a house" />
                  {" "}
                  <span className="cat">
                    Prevention
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      May 12, 2026
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      7 hidden entry points rodents use — and how to seal them
                    </a>
                  </h3>
                  {" "}
                  <p>
                    A mouse can slip through a gap the width of a pencil. Here's the checklist our techs run on every home.
                  </p>
                  {" "}
                  <a className="more" href="blog.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal" style={{ "--i": "1" }}>
                {" "}
                <div className="post-thumb">
                  {" "}
                  <img src={a11} alt="Signs of termite activity on wood framing" />
                  {" "}
                  <span className="cat">
                    Termites
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      Apr 28, 2026
                    </span>
                    <span>
                      8 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Termite season checklist: 9 warning signs before it's too late
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Mud tubes, hollow-sounding wood, tiny wings on the sill. Catch the signal early and save the frame.
                  </p>
                  {" "}
                  <a className="more" href="blog.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal" style={{ "--i": "2" }}>
                {" "}
                <div className="post-thumb">
                  {" "}
                  <img src={a12} alt="Preparing a bedroom for a bed bug heat treatment" />
                  {" "}
                  <span className="cat">
                    Bed Bugs
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      Apr 09, 2026
                    </span>
                    <span>
                      5 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      How to prep a bedroom for heat treatment in 30 minutes
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Strip the bedding, bag the linens, pull furniture from the wall. A fast prep makes the treatment faster.
                  </p>
                  {" "}
                  <a className="more" href="blog.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
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
          <div className="container">
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow on-dark">
                Ready When You Are
              </span>
              {" "}
              <h2>
                Pests don't wait.
                <br />
                Neither do we.
              </h2>
              {" "}
              <p>
                Get a free, no-pressure inspection and a flat quote today. If we can't fix it, we'll say so before we charge a cent.
              </p>
              {" "}
            </div>
            {" "}
            <div className="cta-actions reveal">
              {" "}
              <a className="btn" href="contact.html">
                {" Book Free Inspection "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
                {" "}
              </a>
              {" "}
              <a className="cta-phone" href="tel:+15550142200">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                </svg>
                {" "}
                <span>
                  (555) 014-2200
                  <small>
                    Free consultation · 24/7
                  </small>
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
      <footer className="site-foot">
        {" "}
        <div className="container foot-grid">
          {" "}
          <div className="foot-about">
            {" "}
            <a className="brand" href="index.html" aria-label="PestKit home">
              {" "}
              <span className="brand-mark">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5l7.5 2.7v5.6c0 4.9-3.1 8.2-7.5 10-4.4-1.8-7.5-5.1-7.5-10V5.2z" />
                  <path d="M8.8 12l2.2 2.2 4.2-4.4" />
                </svg>
                {" "}
              </span>
              {" "}
              <span>
                PestKit
                <small>
                  Clean. Safe. Protected.
                </small>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              Certified, family-safe pest control and extermination for homes and businesses — backed by a re-service guarantee on every job.
            </p>
            {" "}
            <div className="socials">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3h6.4l4.4 5.9zm-1.1 16.1h1.7L7.7 4.8H5.9z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12s0-3.5-.5-5.1c-.3-1-1.1-1.8-2.1-2C17.8 4.4 12 4.4 12 4.4s-5.8 0-7.4.5c-1 .2-1.8 1-2.1 2C2 8.5 2 12 2 12s0 3.5.5 5.1c.3 1 1.1 1.8 2.1 2 1.6.5 7.4.5 7.4.5s5.8 0 7.4-.5c1-.2 1.8-1 2.1-2 .5-1.6.5-5.1.5-5.1zM10 15.5v-7l6 3.5z" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="foot-col">
            {" "}
            <h4>
              Explore
            </h4>
            {" "}
            <ul className="foot-links">
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
                <a href="price.html">
                  Pricing
                </a>
              </li>
              {" "}
              <li>
                <a href="project.html">
                  Projects
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
                <a href="blog.html">
                  Blog
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="foot-col">
            {" "}
            <h4>
              Services
            </h4>
            {" "}
            <ul className="foot-links">
              {" "}
              <li>
                <a href="service.html">
                  Rodent Control
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Termite Treatment
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Bed Bug Removal
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Cockroach Treatment
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Mosquito Control
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Ant & Spider Control"}
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="foot-col">
            {" "}
            <h4>
              Contact
            </h4>
            {" "}
            <ul className="foot-contact">
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  2480 Evergreen Parkway, Suite 9
                  <br />
                  Portland, OR 97214
                </span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                </svg>
                <span>
                  <a href="tel:+15550142200">
                    (555) 014-2200
                  </a>
                  <br />
                  <a href="tel:+15550142201">
                    (555) 014-2201
                  </a>
                </span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>
                  <a href="mailto:hello@pestkit.com">
                    hello@pestkit.com
                  </a>
                </span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>
                  Mon–Sat 7:00 – 19:00
                  <br />
                  24/7 Emergency Response
                </span>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="foot-bottom">
          {" "}
          <div className="container">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" PestKit. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Template by "}
              <a href="https://uiuxlabz.com" target="_blank" rel="noopener">
                uiuxlabz.com
              </a>
              {" · "}
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms of Service
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
