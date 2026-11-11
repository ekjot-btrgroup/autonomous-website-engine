// Converted from the HTML template construction-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/about-bg.webp";
import a4 from "./assets/about-1.webp";
import a5 from "./assets/about-2.webp";
import a6 from "./assets/about-3.webp";
import a7 from "./assets/service-1.webp";
import a8 from "./assets/service-2.webp";
import a9 from "./assets/service-3.webp";
import a10 from "./assets/service-4.webp";
import a11 from "./assets/blog-1.webp";
import a12 from "./assets/blog-2.webp";
import a13 from "./assets/blog-3.webp";
import a14 from "./assets/blog-4.webp";
import a15 from "./assets/footer-img.webp";
import a16 from "./assets/about.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-construction-portfolio-ea5a">
      {" "}
      {" "}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {" "}
        <a href="index.html" className="nav__logo">
          {" "}
          <span className="nav__logo-icon" aria-hidden="true">
            C
          </span>
          {" CONSTRA "}
        </a>
        {" "}
        <div className="nav__links">
          {" "}
          <a href="index.html" className="nav__link active">
            Home
          </a>
          {" "}
          <a href="about.html" className="nav__link">
            About
          </a>
          {" "}
          <a href="services.html" className="nav__link">
            Services
          </a>
          {" "}
          <a href="contact.html" className="nav__link">
            Contact
          </a>
          {" "}
          <a href="contact.html" className="nav__cta">
            Get a Quote
          </a>
          {" "}
        </div>
        {" "}
        <button className="nav__hamburger" aria-label="Toggle menu" aria-expanded="false">
          {" "}
          <span />
          <span />
          <span />
          {" "}
        </button>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero" aria-label="Hero">
        {" "}
        <div className="hero__sidebar">
          {" "}
          <span className="hero__sidebar-text">
            Est. 2008
          </span>
          {" "}
          <div className="hero__sidebar-line" />
          {" "}
          <span className="hero__sidebar-text">
            Build Better
          </span>
          {" "}
        </div>
        {" "}
        <div className="hero__slides">
          {" "}
          <div className="hero__slide active">
            {" "}
            <img src={a0} alt="Modern construction project showcase" />
            {" "}
            <div className="hero__overlay" />
            {" "}
          </div>
          {" "}
          <div className="hero__slide">
            {" "}
            <img src={a1} alt="Architectural steel framework" />
            {" "}
            <div className="hero__overlay" />
            {" "}
          </div>
          {" "}
          <div className="hero__slide">
            {" "}
            <img src={a2} alt="Completed building exterior" />
            {" "}
            <div className="hero__overlay" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__content">
          {" "}
          <p className="hero__tag">
            {"Construction & Development"}
          </p>
          {" "}
          <h1 className="hero__title">
            We Build Structures That Stand the Test of Time
          </h1>
          {" "}
          <p className="hero__desc">
            From foundation to finish, CONSTRA delivers precision-crafted construction with an unwavering commitment to quality, safety, and architectural integrity.
          </p>
          {" "}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {" "}
            <a href="contact.html" className="btn-primary">
              Start Your Project
            </a>
            {" "}
            <a href="about.html" className="btn-outline">
              Our Story
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__stats">
          {" "}
          <div className="hero__stat">
            {" "}
            <div className="hero__stat-number font-mono">
              240+
            </div>
            {" "}
            <div className="hero__stat-label">
              Projects Delivered
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__stat">
            {" "}
            <div className="hero__stat-number font-mono">
              16
            </div>
            {" "}
            <div className="hero__stat-label">
              Years of Excellence
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__stat">
            {" "}
            <div className="hero__stat-number font-mono">
              98%
            </div>
            {" "}
            <div className="hero__stat-label">
              Client Satisfaction
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__dots" role="tablist" aria-label="Carousel navigation">
          {" "}
          <button className="hero__dot active" role="tab" aria-label="Slide 1" />
          {" "}
          <button className="hero__dot" role="tab" aria-label="Slide 2" />
          {" "}
          <button className="hero__dot" role="tab" aria-label="Slide 3" />
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
          <div className="counter-grid reveal">
            {" "}
            <div>
              {" "}
              <div className="counter__number" data-count="240" data-suffix="+">
                0
              </div>
              {" "}
              <div className="counter__label">
                Projects Completed
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="counter__number" data-count="16" data-suffix="">
                0
              </div>
              {" "}
              <div className="counter__label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="counter__number" data-count="85" data-suffix="+">
                0
              </div>
              {" "}
              <div className="counter__label">
                Team Members
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="counter__number" data-count="12" data-suffix="">
                0
              </div>
              {" "}
              <div className="counter__label">
                Industry Awards
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
      <section className="section" style={{ background: "var(--white)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            {" "}
            <p className="about__label">
              Our Journey
            </p>
            {" "}
            <h2 className="about__heading">
              Milestones That Define Us
            </h2>
            {" "}
            <p className="about__desc" style={{ maxWidth: "560px", margin: "0 auto" }}>
              Every great structure begins with a vision. Here is the path we have traveled to become one of the region's most trusted construction firms.
            </p>
            {" "}
          </div>
          {" "}
          <div className="timeline" style={{ position: "relative" }}>
            {" "}
            <div className="timeline__parallax-bg" style={{ backgroundImage: `url(${a3})` }} />
            {" "}
            <div className="timeline__item reveal">
              {" "}
              <div className="timeline__dot" />
              {" "}
              <div className="timeline__year">
                2008
              </div>
              {" "}
              <h3 className="timeline__title">
                Foundation Established
              </h3>
              {" "}
              <p className="timeline__desc">
                CONSTRA was founded with a clear mission: to bring uncompromising quality to commercial and residential construction. Starting with a small team of 5, we laid the groundwork for everything that followed.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline__item reveal">
              {" "}
              <div className="timeline__dot" />
              {" "}
              <div className="timeline__year">
                2012
              </div>
              {" "}
              <h3 className="timeline__title">
                First Major Commercial Project
              </h3>
              {" "}
              <p className="timeline__desc">
                Secured our first $10M+ contract for a mixed-use development, proving our capacity to deliver complex projects on time and within budget.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline__item reveal">
              {" "}
              <div className="timeline__dot" />
              {" "}
              <div className="timeline__year">
                2016
              </div>
              {" "}
              <h3 className="timeline__title">
                Sustainability Commitment
              </h3>
              {" "}
              <p className="timeline__desc">
                Adopted green building practices and achieved LEED certification on three consecutive projects, setting a new standard for environmentally responsible construction.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline__item reveal">
              {" "}
              <div className="timeline__dot" />
              {" "}
              <div className="timeline__year">
                2020
              </div>
              {" "}
              <h3 className="timeline__title">
                National Expansion
              </h3>
              {" "}
              <p className="timeline__desc">
                Expanded operations to three additional states, growing our team to 85+ professionals and diversifying into infrastructure and public works.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline__item reveal">
              {" "}
              <div className="timeline__dot" />
              {" "}
              <div className="timeline__year">
                2024
              </div>
              {" "}
              <h3 className="timeline__title">
                240+ Projects Milestone
              </h3>
              {" "}
              <p className="timeline__desc">
                Surpassed 240 completed projects with a combined value exceeding $500M, earning recognition as a top-tier construction partner nationwide.
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "60px", alignItems: "center" }}>
            {" "}
            <div className="about-mosaic reveal">
              {" "}
              <div className="about-mosaic__main">
                {" "}
                <img src={a4} alt="Construction team at work on site" />
                {" "}
              </div>
              {" "}
              <div className="about-mosaic__side">
                {" "}
                <img src={a5} alt="Finished building detail" />
                {" "}
              </div>
              {" "}
              <div className="about-mosaic__side">
                {" "}
                <img src={a6} alt="Blueprint and planning session" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about__text reveal reveal-delay-2">
              {" "}
              <p className="about__label">
                About CONSTRA
              </p>
              {" "}
              <h2 className="about__heading">
                Crafting Spaces Where Life Happens
              </h2>
              {" "}
              <p className="about__desc">
                We are not just builders. We are architects of experience, blending structural precision with human-centered design to create spaces that inspire, endure, and serve.
              </p>
              {" "}
              <p className="about__desc">
                With 16 years of proven expertise, our team approaches every project as a unique challenge, deploying cutting-edge techniques while honoring the timeless principles of craftsmanship.
              </p>
              {" "}
              <a href="about.html" className="btn-primary" style={{ marginTop: "12px" }}>
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
      <section className="section" style={{ background: "var(--white)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            {" "}
            <p className="about__label">
              What We Do
            </p>
            {" "}
            <h2 className="about__heading">
              Construction Services
            </h2>
            {" "}
            <p className="about__desc" style={{ maxWidth: "560px", margin: "0 auto" }}>
              From groundbreaking to ribbon-cutting, we offer end-to-end construction solutions tailored to your vision and budget.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a7} alt="Commercial construction project" />
                {" "}
                <div className="service-card__number">
                  01
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Commercial Construction
                </h3>
                {" "}
                <p className="service-card__desc">
                  Full-service commercial builds from office towers to retail complexes. We manage every phase including permitting, procurement, and commissioning.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Explore Service →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-1">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a8} alt="Residential construction project" />
                {" "}
                <div className="service-card__number">
                  02
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Residential Development
                </h3>
                {" "}
                <p className="service-card__desc">
                  Custom homes, multi-family dwellings, and luxury estates built with attention to every detail. Your dream, our craft.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Explore Service →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-2">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a9} alt="Renovation and remodeling" />
                {" "}
                <div className="service-card__number">
                  03
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  {"Renovation & Remodeling"}
                </h3>
                {" "}
                <p className="service-card__desc">
                  Breathing new life into existing structures with modern upgrades, seismic retrofitting, and aesthetic transformations that respect the original design.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Explore Service →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-3">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a10} alt="Project management and planning" />
                {" "}
                <div className="service-card__number">
                  04
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Project Management
                </h3>
                {" "}
                <p className="service-card__desc">
                  Expert oversight from concept through completion. Our certified project managers ensure timelines are met, budgets are respected, and quality never wavers.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Explore Service →
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
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            {" "}
            <p className="about__label">
              Latest Insights
            </p>
            {" "}
            <h2 className="about__heading">
              From the Field
            </h2>
            {" "}
            <p className="about__desc" style={{ maxWidth: "560px", margin: "0 auto" }}>
              Industry perspectives, project highlights, and construction knowledge from our experienced team.
            </p>
            {" "}
          </div>
          {" "}
          <div className="blog-grid">
            {" "}
            <div className="blog-card reveal">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a11} alt="Modern construction techniques" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__date">
                  Jan 15, 2025
                </div>
                {" "}
                <h3 className="blog-card__title">
                  The Future of Modular Construction
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  How prefab methods are reshaping the speed and cost efficiency of large-scale builds.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="blog-card reveal reveal-delay-1">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a12} alt="Sustainable building materials" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__date">
                  Feb 08, 2025
                </div>
                {" "}
                <h3 className="blog-card__title">
                  Sustainable Materials in 2025
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  A deep dive into the eco-friendly materials redefining green construction standards.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="blog-card reveal reveal-delay-2">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a13} alt="Construction site safety" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__date">
                  Mar 22, 2025
                </div>
                {" "}
                <h3 className="blog-card__title">
                  Job Site Safety Protocols
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  Why zero-incident culture is not just a goal but a non-negotiable standard on every CONSTRA site.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="blog-card reveal reveal-delay-3">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a14} alt="Architectural design trends" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__date">
                  Apr 10, 2025
                </div>
                {" "}
                <h3 className="blog-card__title">
                  Design-Build vs. Traditional
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  Comparing delivery methods to find the right approach for your next construction project.
                </p>
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
      <section className="cta-banner">
        {" "}
        <div className="cta-banner__bg">
          {" "}
          <img src={a15} alt="Construction site panorama" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="cta-banner__content reveal">
            {" "}
            <h2 className="cta-banner__title">
              Ready to Start Your Next Project?
            </h2>
            {" "}
            <p className="cta-banner__desc">
              From vision to reality, CONSTRA is your trusted partner in construction. Let us bring your blueprint to life.
            </p>
            {" "}
            <a href="contact.html" className="btn-primary">
              Get a Free Quote
            </a>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            {" "}
            <div className="reveal">
              {" "}
              <p className="about__label">
                Get in Touch
              </p>
              {" "}
              <h2 className="about__heading">
                Let's Build Something Together
              </h2>
              {" "}
              <p className="about__desc">
                Have a project in mind? We would love to hear about it. Reach out for a free consultation and estimate.
              </p>
              {" "}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                {" "}
                <div className="contact__info-item" style={{ marginBottom: "0" }}>
                  {" "}
                  <div className="contact__info-icon" aria-hidden="true">
                    ☏
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="contact__info-label">
                      Phone
                    </div>
                    {" "}
                    <div className="contact__info-value">
                      +1 (555) 234-5678
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact__info-item" style={{ marginBottom: "0" }}>
                  {" "}
                  <div className="contact__info-icon" aria-hidden="true">
                    ✉
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="contact__info-label">
                      Email
                    </div>
                    {" "}
                    <div className="contact__info-value">
                      hello@constra.build
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
            <div className="reveal reveal-delay-2" style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              {" "}
              <img src={a16} alt="CONSTRA team at project site" style={{ width: "100%", height: "360px", objectFit: "cover" }} />
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                {" "}
                <span className="nav__logo-icon" aria-hidden="true">
                  C
                </span>
                {" CONSTRA "}
              </div>
              {" "}
              <p className="footer__desc">
                Precision-crafted construction with an unwavering commitment to quality, safety, and architectural integrity. Building the future, one project at a time.
              </p>
              {" "}
              <div className="footer__socials">
                {" "}
                <a href="#" className="footer__social" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="Twitter">
                  t
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="Instagram">
                  ig
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="LinkedIn">
                  in
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <a href="index.html" className="footer__link">
                Home
              </a>
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
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Services
              </h4>
              {" "}
              <a href="services.html" className="footer__link">
                Commercial Build
              </a>
              {" "}
              <a href="services.html" className="footer__link">
                Residential Dev
              </a>
              {" "}
              <a href="services.html" className="footer__link">
                Renovations
              </a>
              {" "}
              <a href="services.html" className="footer__link">
                Project Mgmt
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact Info
              </h4>
              {" "}
              <p className="footer__desc" style={{ marginBottom: "12px" }}>
                1200 Builders Avenue
                <br />
                Suite 400, Portland, OR 97201
              </p>
              {" "}
              <p className="footer__desc" style={{ marginBottom: "12px" }}>
                +1 (555) 234-5678
                <br />
                hello@constra.build
              </p>
              {" "}
              <p className="footer__desc">
                Mon - Fri: 8:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 2:00 PM
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              © 2025 CONSTRA Construction. All rights reserved.
            </span>
            {" "}
            <span>
              Crafted with precision.
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
