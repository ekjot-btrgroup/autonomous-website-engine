// Converted from the HTML template design-studio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/logo.svg";
import a1 from "./assets/hero-bg.svg";
import a2 from "./assets/work-1.svg";
import a3 from "./assets/work-2.svg";
import a4 from "./assets/work-3.svg";
import a5 from "./assets/service-1.svg";
import a6 from "./assets/service-2.svg";
import a7 from "./assets/service-3.svg";
import a8 from "./assets/service-4.svg";
import a9 from "./assets/process-1.svg";
import a10 from "./assets/process-2.svg";
import a11 from "./assets/process-3.svg";
import a12 from "./assets/process-4.svg";
import a13 from "./assets/team-1.svg";
import a14 from "./assets/team-2.svg";
import a15 from "./assets/team-3.svg";
import a16 from "./assets/cta-bg.svg";
import a17 from "./assets/logo-white.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-design-studio-6394">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="header__logo">
            {" "}
            <img src={a0} alt="PLASERY logo" width="180" height="40" />
            {" "}
          </a>
          {" "}
          <nav className="header__nav" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="header__nav-link active">
              Home
            </a>
            {" "}
            <a href="about.html" className="header__nav-link">
              About
            </a>
            {" "}
            <a href="services.html" className="header__nav-link">
              Services
            </a>
            {" "}
            <a href="portfolio.html" className="header__nav-link">
              Portfolio
            </a>
            {" "}
            <a href="blog.html" className="header__nav-link">
              Blog
            </a>
            {" "}
            <a href="contact.html" className="header__cta">
              Start a Project
            </a>
            {" "}
          </nav>
          {" "}
          <button className="header__toggle" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span />
            {" "}
            <span />
            {" "}
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {" "}
        <a href="index.html">
          Home
        </a>
        {" "}
        <a href="about.html">
          About
        </a>
        {" "}
        <a href="services.html">
          Services
        </a>
        {" "}
        <a href="portfolio.html">
          Portfolio
        </a>
        {" "}
        <a href="blog.html">
          Blog
        </a>
        {" "}
        <a href="contact.html">
          Contact
        </a>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__bg">
          {" "}
          <img src={a1} alt="" width="1440" height="800" />
          {" "}
        </div>
        {" "}
        <div className="container hero__content">
          {" "}
          <span className="hero__label">
            Design Studio
          </span>
          {" "}
          <h1>
            {"Design That "}
            <span>
              Shapes
            </span>
            {" Perception"}
          </h1>
          {" "}
          <p>
            We craft brand identities, digital experiences, and visual systems that transform how people see, feel, and interact with your business.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="portfolio.html" className="btn btn--primary btn--lg">
              View Our Work
            </a>
            {" "}
            <a href="contact.html" className="btn btn--secondary btn--lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--gray-300)" }}>
              Get in Touch
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__scroll">
          {" "}
          <span>
            Scroll
          </span>
          {" "}
          <span>
            ↓
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section--sm bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-bar reveal">
            {" "}
            <div className="stat">
              {" "}
              <div className="stat__number">
                <span data-year="150">
                  0
                </span>
                +
              </div>
              {" "}
              <div className="stat__label">
                Projects Delivered
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat">
              {" "}
              <div className="stat__number">
                <span data-year="8">
                  0
                </span>
              </div>
              {" "}
              <div className="stat__label">
                Years of Craft
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat">
              {" "}
              <div className="stat__number">
                <span data-year="45">
                  0
                </span>
                +
              </div>
              {" "}
              <div className="stat__label">
                Happy Clients
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat">
              {" "}
              <div className="stat__number">
                <span data-year="12">
                  0
                </span>
              </div>
              {" "}
              <div className="stat__label">
                Awards Won
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
      <section className="section bg-cream">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              Selected Work
            </span>
            {" "}
            <h2>
              Crafting Visual Stories
            </h2>
            {" "}
            <p>
              Every project is a partnership. We listen, strategize, and design solutions that resonate with your audience and elevate your brand.
            </p>
            {" "}
          </div>
          {" "}
          <div className="work-grid stagger-children">
            {" "}
            <a href="portfolio.html" className="work-card">
              {" "}
              <div className="work-card__image">
                {" "}
                <img src={a2} alt="Lumina Brand Identity project" width="600" height="400" />
                {" "}
                <div className="work-card__overlay">
                  {" "}
                  <span className="work-card__overlay-text">
                    View Project →
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="work-card__body">
                {" "}
                <span className="work-card__category">
                  Brand Identity
                </span>
                {" "}
                <h3 className="work-card__title">
                  Lumina Brand Identity
                </h3>
                {" "}
                <p className="work-card__desc">
                  A complete visual identity system for a sustainable technology company.
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="portfolio.html" className="work-card">
              {" "}
              <div className="work-card__image">
                {" "}
                <img src={a3} alt="Horizon Web Experience project" width="600" height="400" />
                {" "}
                <div className="work-card__overlay">
                  {" "}
                  <span className="work-card__overlay-text">
                    View Project →
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="work-card__body">
                {" "}
                <span className="work-card__category">
                  Web Design
                </span>
                {" "}
                <h3 className="work-card__title">
                  Horizon Web Experience
                </h3>
                {" "}
                <p className="work-card__desc">
                  An immersive digital presence for a boutique architecture firm.
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="portfolio.html" className="work-card">
              {" "}
              <div className="work-card__image">
                {" "}
                <img src={a4} alt="Pulse App Interface project" width="600" height="400" />
                {" "}
                <div className="work-card__overlay">
                  {" "}
                  <span className="work-card__overlay-text">
                    View Project →
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="work-card__body">
                {" "}
                <span className="work-card__category">
                  App Design
                </span>
                {" "}
                <h3 className="work-card__title">
                  Pulse App Interface
                </h3>
                {" "}
                <p className="work-card__desc">
                  A health tracking app designed around clarity, calm, and daily habits.
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          <div className="text-center mt-3 reveal">
            {" "}
            <a href="portfolio.html" className="btn btn--secondary">
              See All Projects →
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              What We Do
            </span>
            {" "}
            <h2>
              Design Services
            </h2>
            {" "}
            <p>
              We turn complexity into clarity through strategic design that drives real business outcomes.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid stagger-children">
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__icon">
                {" "}
                <img src={a5} alt="Brand Strategy icon" width="64" height="64" />
                {" "}
              </div>
              {" "}
              <h3>
                Brand Strategy
              </h3>
              {" "}
              <p>
                We uncover what makes you unique and translate that into a cohesive identity that speaks to your ideal audience.
              </p>
              {" "}
              <a href="services.html" className="service-card__link">
                Learn More
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__icon">
                {" "}
                <img src={a6} alt="Digital Design icon" width="64" height="64" />
                {" "}
              </div>
              {" "}
              <h3>
                Digital Design
              </h3>
              {" "}
              <p>
                Web and app interfaces built on solid UX principles, designed to convert visitors into loyal customers.
              </p>
              {" "}
              <a href="services.html" className="service-card__link">
                Learn More
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__icon">
                {" "}
                <img src={a7} alt="Visual Identity icon" width="64" height="64" />
                {" "}
              </div>
              {" "}
              <h3>
                Visual Identity
              </h3>
              {" "}
              <p>
                Logos, typography, color systems, and brand guidelines that give your business a distinctive visual voice.
              </p>
              {" "}
              <a href="services.html" className="service-card__link">
                Learn More
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__icon">
                {" "}
                <img src={a8} alt="Creative Direction icon" width="64" height="64" />
                {" "}
              </div>
              {" "}
              <h3>
                Creative Direction
              </h3>
              {" "}
              <p>
                Big-picture visual strategy that aligns every touchpoint with your brand vision and business goals.
              </p>
              {" "}
              <a href="services.html" className="service-card__link">
                Learn More
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
      <section className="section bg-cream">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              Our Process
            </span>
            {" "}
            <h2>
              From Vision to Visual
            </h2>
            {" "}
            <p>
              A proven approach that turns ideas into impactful design, every time.
            </p>
            {" "}
          </div>
          {" "}
          <div className="process-grid reveal">
            {" "}
            <div className="process-step">
              {" "}
              <div className="process-step__number">
                {" "}
                <img src={a9} alt="Step 1" width="120" height="120" />
                {" "}
              </div>
              {" "}
              <h4>
                Discover
              </h4>
              {" "}
              <p>
                We learn your story, audience, and goals through deep research and conversation.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="process-step__number">
                {" "}
                <img src={a10} alt="Step 2" width="120" height="120" />
                {" "}
              </div>
              {" "}
              <h4>
                Define
              </h4>
              {" "}
              <p>
                We shape a clear creative direction and strategic framework for the project.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="process-step__number">
                {" "}
                <img src={a11} alt="Step 3" width="120" height="120" />
                {" "}
              </div>
              {" "}
              <h4>
                Design
              </h4>
              {" "}
              <p>
                We craft and refine visual solutions that bring your brand to life.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="process-step__number">
                {" "}
                <img src={a12} alt="Step 4" width="120" height="120" />
                {" "}
              </div>
              {" "}
              <h4>
                Deliver
              </h4>
              {" "}
              <p>
                We hand off production-ready assets with guidelines for consistent use.
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
      <section className="section bg-white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              Client Stories
            </span>
            {" "}
            <h2>
              What People Say
            </h2>
            {" "}
            <p>
              Trusted by founders, marketing teams, and creative directors who demand design excellence.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid stagger-children">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars" aria-label="5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "PLASERY transformed our brand from forgettable to unforgettable. Their strategic approach meant every design decision had purpose behind it."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a13} alt="Sarah Chen" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Chen
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    CEO, Lumina Tech
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
              <div className="testimonial-card__stars" aria-label="5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "Working with PLASERY felt like gaining an extension of our own team. They understood our vision instantly and delivered beyond expectations."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a14} alt="Marcus Rivera" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Marcus Rivera
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Founder, Horizon Studio
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
              <div className="testimonial-card__stars" aria-label="5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The rebrand increased our customer recognition by 40%. PLASERY doesn't just make things look good -- they make design work hard."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a15} alt="Emily Park" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Emily Park
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Marketing Dir., Vortex
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
      <section className="cta-section">
        {" "}
        <div className="cta-section__bg">
          {" "}
          <img src={a16} alt="" width="1440" height="400" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <h2 className="reveal">
            Ready to Shape Your Brand?
          </h2>
          {" "}
          <p className="reveal">
            Let's start a conversation about how design can transform your business perception and drive real results.
          </p>
          {" "}
          <div className="reveal">
            {" "}
            <a href="contact.html" className="btn btn--white btn--lg">
              Start a Project →
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
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <a href="index.html">
                {" "}
                <img src={a17} alt="PLASERY" width="180" height="40" />
                {" "}
              </a>
              {" "}
              <p>
                Design studio crafting brand identities and digital experiences that shape perception and drive growth.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5>
                Pages
              </h5>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    About Us
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
                  <a href="portfolio.html">
                    Portfolio
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
            <div>
              {" "}
              <h5>
                Services
              </h5>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="services.html">
                    Brand Strategy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Visual Identity
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Digital Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Creative Direction
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5>
                Connect
              </h5>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:hello@plasery.com">
                    hello@plasery.com
                  </a>
                </li>
                {" "}
                <li>
                  <a href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <p>
              © 2026 PLASERY. All rights reserved.
            </p>
            {" "}
            <div className="footer__socials">
              {" "}
              <a href="#" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="#" aria-label="Dribbble">
                Dr
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                Li
              </a>
              {" "}
              <a href="#" aria-label="Behance">
                Be
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
