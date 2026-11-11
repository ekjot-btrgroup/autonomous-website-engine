// Converted from the HTML template free-folio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/portfolio-1.webp";
import a1 from "./assets/portfolio-2.webp";
import a2 from "./assets/portfolio-3.webp";
import a3 from "./assets/portfolio-4.webp";
import a4 from "./assets/portfolio-5.webp";
import a5 from "./assets/portfolio-6.webp";
import a6 from "./assets/profile.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-free-folio-1997">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="header__brand">
            Folio
            <span>
              Frame
            </span>
          </a>
          {" "}
          <nav className="header__nav">
            {" "}
            <ul className="header__links">
              {" "}
              <li>
                <a href="index.html" className="active">
                  Work
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  About
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
                <a href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <a href="contact.html" className="btn btn--primary btn--sm header__cta">
              Let's Talk
            </a>
            {" "}
          </nav>
          {" "}
          <div className="burger" role="button" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span />
            {" "}
            <span />
            {" "}
            <span />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__content reveal">
          {" "}
          <span className="hero__label">
            Creative Portfolio
          </span>
          {" "}
          <h1 className="hero__title">
            {"Design. "}
            <span>
              Build.
            </span>
            {" Inspire."}
          </h1>
          {" "}
          <p className="hero__subtitle">
            We craft digital experiences that captivate audiences and elevate brands. From concept to launch, every pixel tells a story.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="#portfolio" className="btn btn--primary">
              View Our Work
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline">
              Get In Touch
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__scroll">
          Scroll
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section id="portfolio" className="section-darker">
        {" "}
        <div className="container">
          {" "}
          <div className="reveal">
            {" "}
            <span className="section-subtitle mb-md" style={{ display: "block" }}>
              Selected Work
            </span>
            {" "}
            <h2 className="section-title mb-xl">
              Featured Projects
            </h2>
            {" "}
          </div>
          {" "}
          <div className="portfolio-grid reveal-stagger">
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a0} alt="Nexus Dashboard — SaaS interface design" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  Web Design
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Nexus Dashboard
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a1} alt="Velvet Lounge — Brand identity" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  Brand Identity
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Velvet Lounge
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a2} alt="Pulse App — Mobile UI/UX" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  UI/UX
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Pulse App
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a3} alt="Arcline Studio — E-commerce design" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  Web Design
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Arcline Studio
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a4} alt="Meridian Co — Brand system" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  Brand Identity
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Meridian Co
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-item">
              {" "}
              <img src={a5} alt="Zenith Platform — Full-stack product" className="portfolio-item__img" loading="lazy" />
              {" "}
              <div className="portfolio-item__overlay">
                {" "}
                <span className="portfolio-item__category">
                  UI/UX
                </span>
                {" "}
                <h3 className="portfolio-item__title">
                  Zenith Platform
                </h3>
                {" "}
                <a href="projects.html" className="portfolio-item__link">
                  View Project
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="text-center mt-2xl reveal">
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
      <section className="section-dark">
        {" "}
        <div className="container">
          {" "}
          <div className="about-intro">
            {" "}
            <div className="about-intro__image reveal">
              {" "}
              <img src={a6} alt="FOLIOFRAME team member portrait" />
              {" "}
            </div>
            {" "}
            <div className="about-intro__content reveal">
              {" "}
              <span className="text-gold" style={{ fontFamily: "var(--ff-display)", fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "var(--ls-wider)", display: "block", marginBottom: "var(--sp-sm)" }}>
                Who We Are
              </span>
              {" "}
              <h2 className="section-title">
                Creative Studio With Purpose
              </h2>
              {" "}
              <p>
                We are a design-driven studio focused on creating memorable digital experiences. With over a decade of combined experience, our team brings strategy, aesthetics, and technology together to build products people love.
              </p>
              {" "}
              <p>
                From early-stage startups to established enterprises, we partner closely with our clients to understand their vision and translate it into design that performs.
              </p>
              {" "}
              <div className="skills-grid">
                {" "}
                <span className="skill-tag">
                  UI Design
                </span>
                {" "}
                <span className="skill-tag">
                  Branding
                </span>
                {" "}
                <span className="skill-tag">
                  Web Dev
                </span>
                {" "}
                <span className="skill-tag">
                  Strategy
                </span>
                {" "}
                <span className="skill-tag">
                  Motion
                </span>
                {" "}
                <span className="skill-tag">
                  UX Research
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
      <section className="section-darker">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="text-gold mb-md" style={{ display: "block", fontFamily: "var(--ff-display)", fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "var(--ls-wider)" }}>
              What We Do
            </span>
            {" "}
            <h2 className="section-title mb-xl">
              Our Services
            </h2>
            {" "}
          </div>
          {" "}
          <div className="services-grid reveal-stagger">
            {" "}
            <div className="card">
              {" "}
              <div className="card__icon">
                {" "}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="card__title">
                Web Design
              </h3>
              {" "}
              <p className="card__text">
                Custom websites that blend striking visuals with seamless functionality. We design responsive, performance-optimized sites that convert visitors into loyal customers.
              </p>
              {" "}
            </div>
            {" "}
            <div className="card">
              {" "}
              <div className="card__icon">
                {" "}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="card__title">
                Brand Identity
              </h3>
              {" "}
              <p className="card__text">
                Complete brand systems from logo to language. We create cohesive visual identities that communicate your values and set you apart from the competition.
              </p>
              {" "}
            </div>
            {" "}
            <div className="card">
              {" "}
              <div className="card__icon">
                {" "}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="card__title">
                UI/UX Design
              </h3>
              {" "}
              <p className="card__text">
                User-centered interfaces grounded in research and testing. We design intuitive experiences that delight users and drive measurable business outcomes.
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
      <section className="section-darker">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="text-gold mb-md" style={{ display: "block", fontFamily: "var(--ff-display)", fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "var(--ls-wider)" }}>
              Testimonials
            </span>
            {" "}
            <h2 className="section-title mb-xl">
              What Clients Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid reveal-stagger">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "FOLIOFRAME transformed our online presence completely. The attention to detail and creative vision exceeded every expectation. Our conversion rate jumped 40% within the first month."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a7} alt="Sarah Chen portrait" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Chen
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    CEO, Nexus Labs
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "Working with the FOLIOFRAME team was an absolute pleasure. They understood our brand instantly and delivered a design system that our entire company now uses daily."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a8} alt="Marcus Rivera portrait" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Marcus Rivera
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Founder, Meridian Co
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "The best design investment we've made. FOLIOFRAME doesn't just make things look good — they build experiences that actually work. Professional, fast, and incredibly talented."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a9} alt="Aisha Patel portrait" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Aisha Patel
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Director, Zenith Platform
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-section section-dark">
        {" "}
        <div className="container">
          {" "}
          <div className="reveal">
            {" "}
            <span className="text-gold mb-md" style={{ display: "block", fontFamily: "var(--ff-display)", fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "var(--ls-wider)" }}>
              Start A Project
            </span>
            {" "}
            <h2 className="section-title mb-lg">
              Ready to Elevate Your Brand?
            </h2>
            {" "}
            <p className="section-subtitle mb-xl mx-auto">
              Let's collaborate and create something extraordinary together. Every great project starts with a conversation.
            </p>
            {" "}
            <a href="contact.html" className="btn btn--primary btn--lg">
              Get In Touch
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__top">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                Folio
                <span>
                  Frame
                </span>
              </div>
              {" "}
              <p className="footer__desc">
                A creative portfolio studio crafting digital experiences that captivate, convert, and inspire. Design. Build. Inspire.
              </p>
              {" "}
              <div className="social-links mt-lg">
                {" "}
                <a href="#" className="social-link" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" className="social-link" aria-label="Dribbble">
                  ⚪
                </a>
                {" "}
                <a href="#" className="social-link" aria-label="GitHub">
                  ◈
                </a>
                {" "}
                <a href="#" className="social-link" aria-label="LinkedIn">
                  ⤴
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Navigation
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="index.html">
                  Work
                </a>
                {" "}
                <a href="about.html">
                  About
                </a>
                {" "}
                <a href="projects.html">
                  Projects
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Services
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="about.html">
                  Web Design
                </a>
                {" "}
                <a href="about.html">
                  Brand Identity
                </a>
                {" "}
                <a href="about.html">
                  UI/UX Design
                </a>
                {" "}
                <a href="about.html">
                  Strategy
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Connect
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="mailto:hello@folioframe.studio">
                  hello@folioframe.studio
                </a>
                {" "}
                <a href="tel:+14155550192">
                  +1 (415) 555-0192
                </a>
                {" "}
                <a href="contact.html">
                  San Francisco, CA
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <p className="footer__copy">
              {"© "}
              <span data-year="" />
              {" "}
              <span>
                FolioFrame
              </span>
              . All rights reserved.
            </p>
            {" "}
            <div className="footer__links" style={{ display: "flex", gap: "var(--sp-lg)" }}>
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" "}
              <a href="#">
                Terms of Service
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
      {" "}
    </div>
  );
}
