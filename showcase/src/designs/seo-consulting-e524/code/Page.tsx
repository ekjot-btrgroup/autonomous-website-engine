// Converted from the HTML template seo-consulting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-header-bg.webp";
import a1 from "./assets/about.webp";
import a2 from "./assets/project-1.webp";
import a3 from "./assets/project-2.webp";
import a4 from "./assets/project-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-seo-consulting-e524">
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="navbar__logo">
            {" "}
            <span className="navbar__logo-icon">
              S
            </span>
            {" SEOCOM "}
          </a>
          {" "}
          <div className="navbar__links">
            {" "}
            <a href="index.html" className="navbar__link active">
              Home
            </a>
            {" "}
            <a href="about.html" className="navbar__link">
              About
            </a>
            {" "}
            <a href="services.html" className="navbar__link">
              Services
            </a>
            {" "}
            <a href="contact.html" className="navbar__link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="btn btn--primary navbar__cta">
              Get Free Audit
            </a>
            {" "}
          </div>
          {" "}
          <button className="navbar__toggle" aria-label="Toggle menu" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__bg">
          {" "}
          <img src={a0} alt="SEO analytics dashboard" />
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__badge">
              ▲ #1 SEO Agency
            </div>
            {" "}
            <h1 className="hero__title">
              Rank Higher.
              <br />
              <span>
                Grow Faster.
              </span>
            </h1>
            {" "}
            <p className="hero__desc">
              We build SEO strategies that move the needle. Technical audits, content marketing, and link building — all backed by data, not guesswork.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="contact.html" className="btn btn--primary btn--lg">
                Get Free SEO Audit
              </a>
              {" "}
              <a href="services.html" className="btn btn--outline btn--lg">
                Our Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="500" data-suffix="+">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Projects Delivered
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="98" data-suffix="%">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Client Retention
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="12" data-suffix="x">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Average ROI
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header centered reveal">
            {" "}
            <span className="section-header__label">
              What We Do
            </span>
            {" "}
            <h2 className="section-header__title">
              SEO Services That Drive Results
            </h2>
            {" "}
            <p className="section-header__desc">
              From technical audits to full-scale content strategies, we handle every layer of search optimization so you can focus on running your business.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                ⚙
              </div>
              {" "}
              <h3 className="service-card__title">
                Technical SEO
              </h3>
              {" "}
              <p className="service-card__desc">
                Site architecture, crawlability, Core Web Vitals, and structured data — we make sure search engines can find and rank every page.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                ✎
              </div>
              {" "}
              <h3 className="service-card__title">
                Content Strategy
              </h3>
              {" "}
              <p className="service-card__desc">
                Keyword research, topic clustering, and content optimization that attracts qualified traffic and converts visitors into customers.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                🔗
              </div>
              {" "}
              <h3 className="service-card__title">
                Link Building
              </h3>
              {" "}
              <p className="service-card__desc">
                White-hat outreach, digital PR, and authority building that earns high-quality backlinks and strengthens your domain.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                📈
              </div>
              {" "}
              <h3 className="service-card__title">
                {"Analytics & Reporting"}
              </h3>
              {" "}
              <p className="service-card__desc">
                Custom dashboards, conversion tracking, and transparent monthly reports so you always know what's working.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                🌐
              </div>
              {" "}
              <h3 className="service-card__title">
                Local SEO
              </h3>
              {" "}
              <p className="service-card__desc">
                Google Business Profile optimization, local citations, and review management to dominate your local market.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                🚀
              </div>
              {" "}
              <h3 className="service-card__title">
                E-commerce SEO
              </h3>
              {" "}
              <p className="service-card__desc">
                Product page optimization, category architecture, and schema markup that drive organic revenue at scale.
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
      <section className="section section--gray">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-image reveal">
              {" "}
              <img src={a1} alt="SEOCOM team analyzing SEO data" />
              {" "}
            </div>
            {" "}
            <div className="about-content reveal">
              {" "}
              <span className="section-header__label">
                About SEOCOM
              </span>
              {" "}
              <h2 className="about-content__title">
                We Eat, Sleep, and Breathe SEO
              </h2>
              {" "}
              <p className="about-content__text">
                Founded by a team of former Google engineers and seasoned marketers, SEOCOM has spent over a decade helping businesses transform their organic search presence.
              </p>
              {" "}
              <p className="about-content__text">
                We don't believe in one-size-fits-all packages. Every strategy we build is rooted in data, tailored to your market, and designed to deliver measurable growth.
              </p>
              {" "}
              <div className="about-features">
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    ✓
                  </div>
                  {" "}
                  <span className="about-feature__text">
                    Data-Driven Strategies
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    ✓
                  </div>
                  {" "}
                  <span className="about-feature__text">
                    Transparent Reporting
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    ✓
                  </div>
                  {" "}
                  <span className="about-feature__text">
                    Dedicated Account Managers
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    ✓
                  </div>
                  {" "}
                  <span className="about-feature__text">
                    No Long-Term Contracts
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "32px" }}>
                {" "}
                <a href="about.html" className="btn btn--primary">
                  Learn More About Us
                </a>
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header centered reveal">
            {" "}
            <span className="section-header__label">
              Case Studies
            </span>
            {" "}
            <h2 className="section-header__title">
              Real Results, Real Businesses
            </h2>
            {" "}
            <p className="section-header__desc">
              See how we've helped companies across industries achieve first-page rankings and sustainable organic growth.
            </p>
            {" "}
          </div>
          {" "}
          <div className="projects-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <img src={a2} alt="E-commerce SEO case study" />
              {" "}
              <div className="project-card__overlay">
                {" "}
                <span className="project-card__tag">
                  E-commerce
                </span>
                {" "}
                <h3 className="project-card__title">
                  320% Organic Traffic Growth
                </h3>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal">
              {" "}
              <img src={a3} alt="SaaS SEO case study" />
              {" "}
              <div className="project-card__overlay">
                {" "}
                <span className="project-card__tag">
                  SaaS
                </span>
                {" "}
                <h3 className="project-card__title">
                  Page 1 Rankings in 90 Days
                </h3>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal">
              {" "}
              <img src={a4} alt="Local business SEO case study" />
              {" "}
              <div className="project-card__overlay">
                {" "}
                <span className="project-card__tag">
                  Local Business
                </span>
                {" "}
                <h3 className="project-card__title">
                  4x Lead Generation
                </h3>
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
      <section className="section section--gray">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header centered reveal">
            {" "}
            <span className="section-header__label">
              Testimonials
            </span>
            {" "}
            <h2 className="section-header__title">
              What Our Clients Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "SEOCOM transformed our online presence. Organic traffic is up 280% and our cost-per-lead dropped by half. Best investment we've made."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  JR
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    James Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    CEO, TechFlow Solutions
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "Their technical audit uncovered issues we'd missed for years. Within 3 months we went from page 3 to position 2 for our main keyword."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  SK
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Kim
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Marketing Director, GreenLeaf
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The team at SEOCOM doesn't just deliver reports — they deliver insights. Our revenue from organic search has tripled in 12 months."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  MP
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Michael Patel
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Founder, Nexus Digital
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-banner reveal">
            {" "}
            <div>
              {" "}
              <h2 className="cta-banner__title">
                Ready to Dominate Search?
              </h2>
              {" "}
              <p className="cta-banner__desc">
                Get a free, comprehensive SEO audit and discover exactly what's holding your site back from ranking higher.
              </p>
              {" "}
            </div>
            {" "}
            <a href="contact.html" className="btn btn--white btn--lg">
              Claim Your Free Audit
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
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer__logo">
                {" "}
                <span className="navbar__logo-icon">
                  S
                </span>
                {" SEOCOM "}
              </div>
              {" "}
              <p className="footer__desc">
                Data-driven SEO consulting that helps businesses rank higher, earn more traffic, and grow faster through organic search.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  in
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  X
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  f
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
                <a href="services.html" className="footer__link">
                  Technical SEO
                </a>
                {" "}
                <a href="services.html" className="footer__link">
                  Content Strategy
                </a>
                {" "}
                <a href="services.html" className="footer__link">
                  Link Building
                </a>
                {" "}
                <a href="services.html" className="footer__link">
                  Local SEO
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Company
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="about.html" className="footer__link">
                  About Us
                </a>
                {" "}
                <a href="services.html" className="footer__link">
                  Services
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Contact
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Careers
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <span className="footer__link">
                  hello@seocom.io
                </span>
                {" "}
                <span className="footer__link">
                  +1 (555) 234-5678
                </span>
                {" "}
                <span className="footer__link">
                  San Francisco, CA
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              © 2026 SEOCOM. All rights reserved.
            </span>
            {" "}
            <span>
              Rank Higher. Grow Faster.
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
