// Converted from the HTML template interior-design-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/feature.webp";
import a3 from "./assets/portfolio-1.webp";
import a4 from "./assets/portfolio-2.webp";
import a5 from "./assets/portfolio-3.webp";
import a6 from "./assets/portfolio-4.webp";
import a7 from "./assets/portfolio-5.webp";
import a8 from "./assets/portfolio-6.webp";
import a9 from "./assets/testimonial.webp";
import a10 from "./assets/user.webp";
import a11 from "./assets/testimonial-1.webp";
import a12 from "./assets/testimonial-2.webp";
import a13 from "./assets/team-1.webp";
import a14 from "./assets/team-2.webp";
import a15 from "./assets/team-3.webp";
import a16 from "./assets/team-4.webp";
import a17 from "./assets/blog-1.webp";
import a18 from "./assets/blog-2.webp";
import a19 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Marcellus&family=Outfit:wght@300;400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-interior-design-3673">
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <nav className="nav container" aria-label="Primary">
          {" "}
          <a href="index.html" className="brand" aria-label="iDESIGN home">
            <span className="brand__mark">
              i
            </span>
            DESIGN
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <div className="nav-links" id="site-nav">
            {" "}
            <a href="index.html" className="nav-link">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav-link">
              About
            </a>
            {" "}
            <a href="projects.html" className="nav-link">
              Projects
            </a>
            {" "}
            <a href="services.html" className="nav-link">
              Services
            </a>
            {" "}
            <a href="blog.html" className="nav-link">
              Journal
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="btn btn--solid nav-cta">
              Start a Project
            </a>
            {" "}
          </div>
          {" "}
        </nav>
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
          </div>
          {" "}
          <div className="container hero__inner">
            {" "}
            <span className="eyebrow hero__eyebrow reveal">
              {"Interior Design & Decoration Studio"}
            </span>
            {" "}
            <h1 className="hero__title reveal" style={{ "--reveal-delay": ".08s" }}>
              {"Refined spaces, crafted "}
              <em>
                around you
              </em>
              .
            </h1>
            {" "}
            <p className="hero__lead reveal" style={{ "--reveal-delay": ".16s" }}>
              iDESIGN is a sophisticated design studio shaping residential, commercial and hospitality interiors — balancing quiet luxury with the way you actually live and work.
            </p>
            {" "}
            <div className="hero__actions reveal" style={{ "--reveal-delay": ".24s" }}>
              {" "}
              <a href="projects.html" className="btn btn--solid">
                {"Explore Our Work "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="contact.html" className="btn btn--ghost-light">
                Book a Consultation
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__meta reveal" style={{ "--reveal-delay": ".32s" }}>
              {" "}
              <div className="hero__meta-item">
                <strong>
                  250
                  <sup>
                    +
                  </sup>
                </strong>
                <span>
                  Projects Delivered
                </span>
              </div>
              {" "}
              <div className="hero__meta-item">
                <strong>
                  15
                  <sup>
                    yrs
                  </sup>
                </strong>
                <span>
                  Of Studio Practice
                </span>
              </div>
              {" "}
              <div className="hero__meta-item">
                <strong>
                  38
                </strong>
                <span>
                  Design Awards
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
        <section className="section featured">
          {" "}
          <div className="container">
            {" "}
            <div className="featured__grid">
              {" "}
              <div className="featured__media reveal">
                {" "}
                <img src={a2} alt="The Willow Residence — a light-filled living room with layered natural materials" loading="lazy" />
                {" "}
                <span className="featured__badge">
                  Featured Project
                </span>
                {" "}
              </div>
              {" "}
              <div className="featured__content">
                {" "}
                <div className="section-head reveal">
                  {" "}
                  <span className="eyebrow">
                    Signature Work
                  </span>
                  {" "}
                  <h2 className="section-head__title">
                    The Willow Residence
                  </h2>
                  {" "}
                  <p className="section-head__lead">
                    A complete ground-up interior for a family home outside the city. We re-planned the open living floor, introduced a warm material palette of oak, limewash and stone, and dressed every room with bespoke joinery.
                  </p>
                  {" "}
                </div>
                {" "}
                <a href="projects.html" className="text-link reveal">
                  {" See the full project "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <div className="featured__facts reveal">
                  {" "}
                  <div className="featured__fact">
                    <strong>
                      1,900
                    </strong>
                    <span>
                      m² Interior
                    </span>
                  </div>
                  {" "}
                  <div className="featured__fact">
                    <strong>
                      9
                    </strong>
                    <span>
                      Months
                    </span>
                  </div>
                  {" "}
                  <div className="featured__fact">
                    <strong>
                      2025
                    </strong>
                    <span>
                      Completed
                    </span>
                  </div>
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
        <section className="section--tight section-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="stats">
              {" "}
              <div className="stat reveal">
                <span className="stat__num">
                  12
                </span>
                <span className="stat__label">
                  Design Disciplines
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".08s" }}>
                <span className="stat__num">
                  98
                  <sup>
                    %
                  </sup>
                </span>
                <span className="stat__label">
                  Client Retention
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".16s" }}>
                <span className="stat__num">
                  40
                </span>
                <span className="stat__label">
                  Countries Reached
                </span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".24s" }}>
                <span className="stat__num">
                  19
                </span>
                <span className="stat__label">
                  Studio Designers
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
        <section className="section" id="portfolio">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                Selected Work
              </span>
              {" "}
              <h2 className="section-head__title">
                A portfolio of quiet confidence
              </h2>
              {" "}
              <p className="section-head__lead">
                Every project is a considered response to place, light and the people who inhabit it. Explore a selection of recent interiors.
              </p>
              {" "}
            </div>
            {" "}
            <div className="portfolio-grid">
              {" "}
              <a href="projects.html" className="project-card reveal">
                {" "}
                <img src={a3} alt="Walnut apartment living room" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Residential
                  </span>
                  {" "}
                  <span className="project-card__title">
                    {"Walnut & Linen Flat"}
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
              <a href="projects.html" className="project-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <img src={a4} alt="Minimal loft interior" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Loft
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Harbor Loft
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
              <a href="projects.html" className="project-card project-card--wide reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <img src={a5} alt="Boutique hotel lobby" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Hospitality
                  </span>
                  {" "}
                  <span className="project-card__title">
                    The Meridian Hotel Lobby
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
              <a href="projects.html" className="project-card reveal">
                {" "}
                <img src={a6} alt="Workspace interior design" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Workspace
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Studio North Offices
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
              <a href="projects.html" className="project-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <img src={a7} alt="Dining room interior" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Residential
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Cedar Table Dining Room
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
              <a href="projects.html" className="project-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <img src={a8} alt="Bedroom suite interior" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Residential
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Morning Light Suite
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="project-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="text-center mt-8 reveal">
              {" "}
              <a href="projects.html" className="btn btn--outline">
                View All Projects
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                What We Do
              </span>
              {" "}
              <h2 className="section-head__title">
                Full-service interior design
              </h2>
              {" "}
              <p className="section-head__lead">
                From the first sketch to the final styling day, we carry your project through every discipline under one roof.
              </p>
              {" "}
            </div>
            {" "}
            <div className="services-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <span className="service-card__num">
                  01
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Residential Design
                </h3>
                {" "}
                <p className="service-card__text">
                  Homes that breathe — space planning, material palettes and joinery tailored to how your household truly lives.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <span className="service-card__num">
                  02
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="4" y="4" width="16" height="10" rx="1.5" />
                    <path d="M8 21l4-7 4 7M4 14h16" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Commercial & Workspace"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Offices and retail environments that express your brand while supporting focus, flow and well-being.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <span className="service-card__num">
                  03
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M12 3v2M12 13v2M3 9h2M19 9h2M5.6 5.6l1.4 1.4M17 7l1.4-1.4M5.6 12.4L7 11M17 11l1.4 1.4" />
                    <path d="M12 15l2.5 4h-5z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Lighting Design
                </h3>
                {" "}
                <p className="service-card__text">
                  Layered light plans that shift through the day — ambient, task and accent lighting engineered for atmosphere.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <span className="service-card__num">
                  04
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 20V10m5 10V4m5 16v-7m5 7V8" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Decoration & Styling"}
                </h3>
                {" "}
                <p className="service-card__text">
                  The finishing layer — art, textiles, objects and fragrance composed so a room feels complete and lived-in.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <span className="service-card__num">
                  05
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 17l4-6 4 3 4-7 6 10" />
                    <path d="M3 21h18" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Renovation & Remodel"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Sensitive transformations of existing spaces — structural re-plans, kitchens, bathrooms and extensions.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
                </a>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <span className="service-card__num">
                  06
                </span>
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Turnkey Delivery
                </h3>
                {" "}
                <p className="service-card__text">
                  One team, one contract — we manage procurement, contractors and installation for a truly finished space.
                </p>
                {" "}
                <a href="services.html" className="text-link mt-4">
                  Learn more
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
        <section className="section testimonials">
          {" "}
          <div className="testimonials__bg" aria-hidden="true">
            {" "}
            <img src={a9} alt="" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                Client Words
              </span>
              {" "}
              <h2 className="section-head__title">
                Trusted by people who live in our spaces
              </h2>
              {" "}
            </div>
            {" "}
            <div className="testimonials__grid">
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <span className="testimonial-card__quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <p className="testimonial-card__text">
                  iDESIGN rebuilt our entire ground floor and it now feels twice the size. They listened to how we live, not to a trend. Every detail — even the joinery gaps — was considered.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a10} alt="Portrait of Elena Marchetti" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Elena Marchetti
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      Homeowner · The Willow Residence
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <span className="testimonial-card__quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <p className="testimonial-card__text">
                  From concept renders to the final styling day, the process was calm and thoroughly organised. Our hotel lobby has become a destination in itself.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a11} alt="Portrait of Daniel Osei" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Daniel Osei
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      General Manager · The Meridian
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <span className="testimonial-card__quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <p className="testimonial-card__text">
                  Our office went from utilitarian to inspiring. Productivity is up, and clients comment on the space before the work. Worth every penny.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a12} alt="Portrait of Aiko Tanaka" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Aiko Tanaka
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      COO · Studio North
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
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
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                The Studio
              </span>
              {" "}
              <h2 className="section-head__title">
                The people behind the polish
              </h2>
              {" "}
            </div>
            {" "}
            <div className="team-grid">
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-card__media">
                  {" "}
                  <img src={a13} alt={"Isabelle Durand, Founder & Principal Designer"} loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Isabelle Durand on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Isabelle Durand on Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3 className="team-card__name">
                    Isabelle Durand
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    {"Founder & Principal"}
                  </span>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <div className="team-card__media">
                  {" "}
                  <img src={a14} alt="Marcus Lindqvist, Head of Architecture" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Marcus Lindqvist on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Marcus Lindqvist on Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3 className="team-card__name">
                    Marcus Lindqvist
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Head of Architecture
                  </span>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <div className="team-card__media">
                  {" "}
                  <img src={a15} alt="Sofia Almeida, Senior Interior Designer" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Sofia Almeida on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Sofia Almeida on Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3 className="team-card__name">
                    Sofia Almeida
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Senior Designer
                  </span>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal" style={{ "--reveal-delay": ".24s" }}>
                {" "}
                <div className="team-card__media">
                  {" "}
                  <img src={a16} alt="James Whitfield, Head of Projects" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="James Whitfield on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="James Whitfield on Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                        <circle cx="12" cy="12" r="4.2" />
                        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card__body">
                  {" "}
                  <h3 className="team-card__name">
                    James Whitfield
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Head of Projects
                  </span>
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
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                From the Journal
              </span>
              {" "}
              <h2 className="section-head__title">
                Notes on living well
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="blog-card reveal">
                {" "}
                <div className="blog-card__media">
                  {" "}
                  <img src={a17} alt="Interior detail with layered natural textures" loading="lazy" />
                  {" "}
                  <span className="blog-card__tag">
                    Materials
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <div className="blog-card__meta">
                    <span>
                      Aug 14, 2026
                    </span>
                    <span>
                      · 6 min read
                    </span>
                  </div>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="blog-single.html">
                      The Quiet Power of Layered Neutrals
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__excerpt">
                    Why the most memorable rooms rarely shout — a study in tones, textures and restraint that still feels warm.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="text-link blog-card__link">
                    Read article
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <div className="blog-card__media">
                  {" "}
                  <img src={a18} alt="Well-lit interior with elegant furniture" loading="lazy" />
                  {" "}
                  <span className="blog-card__tag">
                    Lighting
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <div className="blog-card__meta">
                    <span>
                      Jul 29, 2026
                    </span>
                    <span>
                      · 8 min read
                    </span>
                  </div>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="blog-single.html">
                      Designing Light, Not Lamps
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__excerpt">
                    A practical field guide to planning light in three layers so your interiors change beautifully from morning to night.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="text-link blog-card__link">
                    Read article
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <div className="blog-card__media">
                  {" "}
                  <img src={a19} alt="Refined room styled with natural materials" loading="lazy" />
                  {" "}
                  <span className="blog-card__tag">
                    Process
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <div className="blog-card__meta">
                    <span>
                      Jul 12, 2026
                    </span>
                    <span>
                      · 5 min read
                    </span>
                  </div>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="blog-single.html">
                      Five Questions to Ask Before a Renovation
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__excerpt">
                    Before you move a single wall, sit down with these questions — they will save you time, money and regret.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="text-link blog-card__link">
                    Read article
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
        <section className="section cta-band">
          {" "}
          <div className="container cta-band__inner">
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow" style={{ color: "var(--clr-brass-pale)" }}>
                Begin the Conversation
              </span>
              {" "}
              <h2 className="cta-band__title">
                Let's craft your next great space.
              </h2>
              {" "}
              <p className="cta-band__lead">
                Tell us about your project — a room, a home or an entire building. We'll reply within two working days with next steps.
              </p>
              {" "}
            </div>
            {" "}
            <div className="cta-band__actions reveal" style={{ "--reveal-delay": ".1s" }}>
              {" "}
              <a href="contact.html" className="btn btn--solid">
                Start a Project
              </a>
              {" "}
              <a href="about.html" className="btn btn--ghost-light">
                Meet the Studio
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
        <div className="container">
          {" "}
          <div className="footer-top">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="brand" aria-label="iDESIGN home">
                <span className="brand__mark">
                  i
                </span>
                DESIGN
              </a>
              {" "}
              <p>
                A sophisticated interior design and decoration studio crafting refined spaces for living, working and gathering.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="iDESIGN on Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="iDESIGN on Pinterest">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.1.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 1.9-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="iDESIGN on LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                  </svg>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <nav className="footer-col" aria-label="Footer navigation">
              {" "}
              <h3 className="footer-col__title">
                Studio
              </h3>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="projects.html">
                    Projects
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Journal
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
            </nav>
            {" "}
            <nav className="footer-col" aria-label="Services navigation">
              {" "}
              <h3 className="footer-col__title">
                Services
              </h3>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="services.html">
                    Residential Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Commercial Interiors
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Lighting Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Decoration & Styling"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Turnkey Delivery
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </nav>
            {" "}
            <div className="footer-col">
              {" "}
              <h3 className="footer-col__title">
                Visit the Studio
              </h3>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  14 Atelier Lane, Suite 2
                  <br />
                  New York, NY 10013
                </li>
                {" "}
                <li>
                  <a href="tel:+12125550148">
                    +1 (212) 555-0148
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:studio@idesign.example">
                    studio@idesign.example
                  </a>
                </li>
                {" "}
                <li>
                  Mon – Fri · 9:00 – 18:00
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
            <p className="mb-0">
              {"© "}
              <span data-year="">
                2026
              </span>
              {" iDESIGN Studio. All rights reserved."}
            </p>
            {" "}
            <p className="mb-0">
              {"Template by "}
              <a href="https://uiuxlabz.com" rel="noopener">
                uiuxlabz
              </a>
              {" · "}
              <a href="404.html">
                Legal
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
        {" "}
      </button>
      {" "}
    </div>
  );
}
