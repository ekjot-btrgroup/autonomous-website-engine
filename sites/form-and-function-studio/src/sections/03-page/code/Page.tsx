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
          <a href="index.html" className="brand" aria-label="Form & Function Studio home">
            <span className="brand__mark">
              Form &
            </span>
            Function
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
              Process
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
              {"Boutique Interior Design Studio, Bangalore"}
            </span>
            {" "}
            <h1 className="hero__title reveal" style={{ "--reveal-delay": ".08s" }}>
              {"Thoughtful spaces, designed "}
              <em>
                around you
              </em>
              .
            </h1>
            {" "}
            <p className="hero__lead reveal" style={{ "--reveal-delay": ".16s" }}>
              Form & Function Studio designs residential interiors in Bangalore, balancing warm minimalism with the way you actually live.
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
                <strong>4</strong><span>Featured Projects</span>
              </div>
              {" "}
              <div className="hero__meta-item">
                <strong>2019</strong><span>Studio Founded</span>
              </div>
              {" "}
              <div className="hero__meta-item">
                <strong>6</strong><span>Core Services</span>
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
                <img src={a2} alt="The Willow Residence, a light-filled living room with natural oak and soft neutrals" loading="lazy" />
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
                    A warm, understated 3 BHK apartment in Whitefield. Natural oak finishes, soft neutral tones, custom furniture and an open-plan living area.
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
                    <strong>1,850</strong><span>sq ft Interior</span>
                  </div>
                  {" "}
                  <div className="featured__fact">
                    <strong>3</strong><span>BHK</span>
                  </div>
                  {" "}
                  <div className="featured__fact">
                    <strong>Whitefield</strong><span>Location</span>
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
                <span className="stat__num">6</span><span className="stat__label">Services</span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".08s" }}>
                <span className="stat__num">4</span><span className="stat__label">Process Stages</span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".16s" }}>
                <span className="stat__num">6</span><span className="stat__label">Core Values</span>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".24s" }}>
                <span className="stat__num">2019</span><span className="stat__label">Studio Founded</span>
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
                Featured Projects
              </span>
              {" "}
              <h2 className="section-head__title">
                Homes that feel like their owners
              </h2>
              {" "}
              <p className="section-head__lead">
                Every project is a considered response to space, light and the people who live there. Explore recent residential interiors.
              </p>
              {" "}
            </div>
            {" "}
            <div className="portfolio-grid">
              {" "}
              <a href="projects.html" className="project-card reveal">
                {" "}
                <img src={a3} alt="Oak living room in a Whitefield apartment" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Apartment
                  </span>
                  {" "}
                  <span className="project-card__title">
                    {"The Willow Residence"}
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
                <img src={a4} alt="Stone and timber villa interior" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Villa
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Casa Verde
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
                <img src={a5} alt="Compact Scandinavian home with smart storage" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Apartment
                  </span>
                  {" "}
                  <span className="project-card__title">
                    The Sunday Home
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
                <img src={a6} alt="Walnut cabinetry and marble surfaces" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Apartment
                  </span>
                  {" "}
                  <span className="project-card__title">
                    The Aria Residence
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
                <img src={a7} alt="Custom kitchen and wardrobe design" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Service
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Kitchen & Wardrobe Design
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
                <img src={a8} alt="Renovated interior with improved layout" className="project-card__media" loading="lazy" />
                {" "}
                <span className="project-card__shade" />
                {" "}
                <span className="project-card__body">
                  {" "}
                  <span className="project-card__cat">
                    Service
                  </span>
                  {" "}
                  <span className="project-card__title">
                    Renovation & Remodeling
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
                Full-service residential design
              </h2>
              {" "}
              <p className="section-head__lead">
                From the first space plan to the final styling, we guide your home through every stage.
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
                  Residential Interior Design
                </h3>
                {" "}
                <p className="service-card__text">
                  Complete interiors for apartments, villas and independent homes, shaped around how you live.
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
                  {"Space Planning"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Layouts that maximise space, improve movement and enhance usability.
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
                  Kitchen & Wardrobe Design
                </h3>
                {" "}
                <p className="service-card__text">
                  Custom kitchens, wardrobes and storage tailored to your requirements.
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
                  {"Furniture & Material Selection"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Furniture, lighting, finishes, fabrics and materials chosen to work together.
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
                  {"Home Styling & Decoration"}
                </h3>
                {" "}
                <p className="service-card__text">
                  The final touches that bring personality and cohesion to your home.
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
                  Renovation & Remodeling
                </h3>
                {" "}
                <p className="service-card__text">
                  Structural improvements, updated layouts and contemporary finishes for existing spaces.
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
                Why Clients Choose Us
              </span>
              {" "}
              <h2 className="section-head__title">
                What working with us is like
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
                  Personalised designs rather than repetitive templates, so every home reflects the people living in it.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="Our commitment">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a10} alt="Form & Function Studio" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Our promise
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      Personalised Design
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
                  Transparent project planning and communication, with dedicated coordination from concept to completion.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="Our commitment">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a11} alt="Form & Function Studio" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Our promise
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      Clear Communication
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
                  Carefully sourced materials, skilled craftsmanship and a strong focus on long-term usability.
                </p>
                {" "}
                <div className="testimonial-card__stars" aria-label="Our commitment">
                  ★★★★★
                </div>
                {" "}
                <footer className="testimonial-card__foot">
                  {" "}
                  <div className="testimonial-card__avatar">
                    <img src={a12} alt="Form & Function Studio" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Our promise
                    </p>
                    {" "}
                    <span className="testimonial-card__role">
                      Quality and Craft
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
                Led by a designer, built around you
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
                  <img src={a13} alt={"Ananya Mehra, Founder & Principal Designer"} loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Ananya Mehra on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Ananya Mehra on Instagram">
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
                    Ananya Mehra
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
                  <img src={a14} alt="Design Team" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Design Team on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Design Team on Instagram">
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
                    Design Team
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Concept & Planning
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
                  <img src={a15} alt="Project Coordination" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Project Coordination on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Project Coordination on Instagram">
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
                    Project Coordination
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Concept to Completion
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
                  <img src={a16} alt="Material Sourcing" loading="lazy" />
                  {" "}
                  <div className="team-card__social">
                    {" "}
                    <a href="#" aria-label="Material Sourcing on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.7c0-2.07-.04-4.73-2.88-4.73-2.89 0-3.33 2.26-3.33 4.59V24H8V8z" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Material Sourcing on Instagram">
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
                    Material Sourcing
                  </h3>
                  {" "}
                  <span className="team-card__role">
                    Quality & Craftsmanship
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
                Design Notes
              </span>
              {" "}
              <h2 className="section-head__title">
                Ideas for living well
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
                  <img src={a17} alt="Natural textures layered in a warm interior" loading="lazy" />
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
                      Coming soon
                    </span>
                    <span>
                      · Design note
                    </span>
                  </div>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="blog-single.html">
                      Natural Materials That Age Well
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__excerpt">
                    Why oak, walnut, travertine and limewash bring warmth and last longer than trends.
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
                  <img src={a18} alt="Warm ambient lighting in a calm living room" loading="lazy" />
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
                      Coming soon
                    </span>
                    <span>
                      · Design note
                    </span>
                  </div>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="blog-single.html">
                      Warm Light, Layered
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__excerpt">
                    How ambient, task and accent lighting change the mood of a room from morning to night.
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
                  <img src={a19} alt="A refined room styled with natural materials" loading="lazy" />
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
                      Coming soon
                    </span>
                    <span>
                      · Design note
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
                Let's design a home around you.
              </h2>
              {" "}
              <p className="cta-band__lead">
                Tell us about your home and what you need. We will get back to you with next steps.
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
              <a href="index.html" className="brand" aria-label="Form & Function Studio home">
                <span className="brand__mark">
                  Form &
                </span>
                Function
              </a>
              {" "}
              <p>
                A boutique residential interior design studio in Bangalore. Designed around the way you live.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Form & Function Studio on Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Form & Function Studio on Pinterest">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.1.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 1.9-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Form & Function Studio on LinkedIn">
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
                    Process
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
                    Residential Interior Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Space Planning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Kitchen & Wardrobe Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Furniture & Materials"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Home Styling & Renovation
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
                  2nd Floor, 12th Main Road
                  <br />
                  Indiranagar, Bangalore 560038
                </li>
                {" "}
                <li>
                  <a href="tel:+919876543210">
                    +1 (212) 555-0148
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:hello@formandfunction.studio">
                    hello@formandfunction.studio
                  </a>
                </li>
                {" "}
                <li>
                  +91 98765 43210
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
              {" Form & Function Studio. All rights reserved."}
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
