// Converted from the HTML template personal-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/profile-pic.webp";
import a1 from "./assets/about-us.webp";
import a2 from "./assets/portfolio-1.webp";
import a3 from "./assets/portfolio-2.webp";
import a4 from "./assets/portfolio-3.webp";
import a5 from "./assets/portfolio-4.webp";
import a6 from "./assets/portfolio-5.webp";
import a7 from "./assets/portfolio-6.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-personal-portfolio-0c4f">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <div className="logo-icon">
              M
            </div>
            {" "}
            <span>
              MYFOLIO
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav-links">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="portfolio.html">
              Portfolio
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="btn btn-primary btn-sm nav-cta">
            Let's Talk
          </a>
          {" "}
          <div className="nav-toggle">
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
      <section className="hero" id="home">
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              {" "}
              <div className="hero-badge-dot">
                ✓
              </div>
              {" Available for freelance projects "}
            </div>
            {" "}
            <h1 className="hero-title">
              {" "}
              <span className="line">
                I Design
              </span>
              {" "}
              <span className="line">
                Experiences That
              </span>
              {" "}
              <span className="line">
                <span className="highlight text-gradient">
                  {"Inspire & Engage"}
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p className="hero-description">
              {" Multidisciplinary designer crafting bold digital products, brand identities, and visual systems that leave lasting impressions. Crafted with Purpose. "}
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="portfolio.html" className="btn btn-primary">
                {" "}
                <span>
                  View My Work
                </span>
                {" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="about.html" className="btn btn-outline">
                About Me
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div>
                {" "}
                <div className="hero-stat-number" data-count="8" data-suffix="+">
                  0+
                </div>
                {" "}
                <div className="hero-stat-label">
                  Years Experience
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero-stat-number" data-count="150" data-suffix="+">
                  0+
                </div>
                {" "}
                <div className="hero-stat-label">
                  Projects Delivered
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero-stat-number" data-count="95" data-suffix="%">
                  0%
                </div>
                {" "}
                <div className="hero-stat-label">
                  Client Satisfaction
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-image">
            {" "}
            <div className="hero-image-wrapper">
              {" "}
              <img src={a0} alt="MYFOLIO Designer Portrait" />
              {" "}
              <div className="hero-image-glow" />
              {" "}
            </div>
            {" "}
            <div className="hero-float-card hero-float-card--top">
              {" "}
              <div className="hero-float-card-icon hero-float-card-icon--purple">
                ★
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero-float-card-text">
                  Top Rated Designer
                </div>
                {" "}
                <div className="hero-float-card-sub">
                  5.0 average rating
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero-float-card hero-float-card--bottom">
              {" "}
              <div className="hero-float-card-icon hero-float-card-icon--pink">
                ❤
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero-float-card-text">
                  150+ Happy Clients
                </div>
                {" "}
                <div className="hero-float-card-sub">
                  Worldwide collaborations
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
      <section className="about-section section" id="about">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-image reveal-left">
              {" "}
              <img src={a1} alt="Designer at work in the studio" />
              {" "}
              <div className="about-exp-badge">
                {" "}
                <span className="number">
                  8+
                </span>
                {" "}
                <span className="label">
                  Years of Craft
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-content">
              {" "}
              <div className="section-label reveal">
                About Me
              </div>
              {" "}
              <h2 className="section-title reveal">
                {"Turning Visions Into "}
                <span className="text-gradient">
                  Digital Reality
                </span>
              </h2>
              {" "}
              <p className="about-text reveal">
                {" I'm a multidisciplinary designer with a passion for creating meaningful digital experiences. From brand identity to interactive web design, I bring ideas to life with meticulous attention to detail and a user-first mindset. "}
              </p>
              {" "}
              <p className="about-text reveal">
                {" My approach blends strategic thinking with creative execution. Every pixel, every interaction, every color choice is intentional and aligned with the project's goals. I believe great design is not just about aesthetics — it's about solving problems beautifully. "}
              </p>
              {" "}
              <div className="about-features reveal">
                {" "}
                <div className="about-feature">
                  {" "}
                  <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {" "}
                  <span>
                    Pixel-perfect design
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {" "}
                  <span>
                    Responsive development
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {" "}
                  <span>
                    Brand strategy
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {" "}
                  <span>
                    UI/UX consulting
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn-primary reveal">
                Learn More About Me
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
      <section className="portfolio-section section" id="portfolio">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-label reveal">
              Selected Work
            </div>
            {" "}
            <h2 className="section-title reveal">
              {"Featured "}
              <span className="text-gradient">
                Projects
              </span>
            </h2>
            {" "}
            <p className="section-subtitle reveal">
              A curated selection of my recent work spanning brand identity, web design, and digital product design.
            </p>
            {" "}
          </div>
          {" "}
          <div className="portfolio-grid stagger">
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a2} alt="Nova Brand Identity project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  Brand Identity
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  Nova Brand Identity
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Complete brand system for a tech startup including logo, color palette, and guidelines.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a3} alt="EcoTrack Dashboard project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  Web Design
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  EcoTrack Dashboard
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Sustainability tracking dashboard with real-time data visualization and reporting tools.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a4} alt="Bloom App Design project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  UI/UX Design
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  Bloom App Design
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Mindfulness and wellness mobile app with calming interface and intuitive navigation.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a5} alt="Artisan E-Commerce project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  E-Commerce
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  Artisan E-Commerce
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Premium handcrafted goods marketplace with rich product storytelling and seamless checkout.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a6} alt="Pulse Analytics project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  Product Design
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  Pulse Analytics
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Business intelligence platform with intuitive data exploration and custom report builder.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="portfolio-card">
              {" "}
              <div className="portfolio-card-image">
                {" "}
                <img src={a7} alt="Voxel Studio project" />
                {" "}
                <div className="portfolio-card-overlay">
                  {" "}
                  <a href="portfolio.html" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="portfolio-card-body">
                {" "}
                <div className="portfolio-card-category">
                  Motion Design
                </div>
                {" "}
                <h3 className="portfolio-card-title">
                  Voxel Studio
                </h3>
                {" "}
                <p className="portfolio-card-desc">
                  Creative studio website with 3D elements, micro-animations, and immersive scroll experience.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="text-center" style={{ marginTop: "var(--spacing-3xl)" }}>
            {" "}
            <a href="portfolio.html" className="btn btn-outline reveal">
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
      <section className="skills-section section" id="skills">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-label reveal">
              Expertise
            </div>
            {" "}
            <h2 className="section-title reveal">
              {"Skills & "}
              <span className="text-gradient">
                Capabilities
              </span>
            </h2>
            {" "}
            <p className="section-subtitle reveal">
              A comprehensive toolkit refined through years of hands-on experience across design disciplines.
            </p>
            {" "}
          </div>
          {" "}
          <div className="skills-grid stagger">
            {" "}
            <div className="skill-card">
              {" "}
              <div className="skill-card-icon">
                ✎
              </div>
              {" "}
              <h3 className="skill-card-title">
                UI/UX Design
              </h3>
              {" "}
              <p className="skill-card-desc">
                User-centered interfaces with intuitive navigation and delightful interactions.
              </p>
              {" "}
              <div className="skill-bar-container">
                {" "}
                <div className="skill-bar-label">
                  <span>
                    Proficiency
                  </span>
                  <span>
                    95%
                  </span>
                </div>
                {" "}
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-width="95%" />
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card">
              {" "}
              <div className="skill-card-icon">
                ★
              </div>
              {" "}
              <h3 className="skill-card-title">
                Brand Identity
              </h3>
              {" "}
              <p className="skill-card-desc">
                Memorable brand systems from logos to comprehensive style guides and voice.
              </p>
              {" "}
              <div className="skill-bar-container">
                {" "}
                <div className="skill-bar-label">
                  <span>
                    Proficiency
                  </span>
                  <span>
                    90%
                  </span>
                </div>
                {" "}
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-width="90%" />
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card">
              {" "}
              <div className="skill-card-icon">
                ⚙
              </div>
              {" "}
              <h3 className="skill-card-title">
                Web Development
              </h3>
              {" "}
              <p className="skill-card-desc">
                Clean, performant front-end code with modern HTML, CSS, and JavaScript.
              </p>
              {" "}
              <div className="skill-bar-container">
                {" "}
                <div className="skill-bar-label">
                  <span>
                    Proficiency
                  </span>
                  <span>
                    85%
                  </span>
                </div>
                {" "}
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-width="85%" />
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card">
              {" "}
              <div className="skill-card-icon">
                ⚛
              </div>
              {" "}
              <h3 className="skill-card-title">
                Motion Design
              </h3>
              {" "}
              <p className="skill-card-desc">
                Engaging animations and micro-interactions that bring interfaces to life.
              </p>
              {" "}
              <div className="skill-bar-container">
                {" "}
                <div className="skill-bar-label">
                  <span>
                    Proficiency
                  </span>
                  <span>
                    80%
                  </span>
                </div>
                {" "}
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-width="80%" />
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
      <section className="testimonials-section section" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-label reveal">
              Testimonials
            </div>
            {" "}
            <h2 className="section-title reveal">
              {"What Clients "}
              <span className="text-gradient">
                Say
              </span>
            </h2>
            {" "}
            <p className="section-subtitle reveal">
              Trusted by startups, agencies, and established brands worldwide.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-slider stagger">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" Exceptional design quality and an incredible eye for detail. The project was delivered ahead of schedule and exceeded all expectations. A true creative partner. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a8} alt="Sarah Mitchell" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-author-name">
                    Sarah Mitchell
                  </div>
                  {" "}
                  <div className="testimonial-author-role">
                    CEO, NovaTech
                  </div>
                  {" "}
                  <div className="testimonial-rating">
                    {" "}
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
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
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" The rebrand transformed our entire market presence. Customer engagement increased by 40% within the first month. Couldn't recommend more highly. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a9} alt="James Rodriguez" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-author-name">
                    James Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-author-role">
                    Founder, EcoTrack
                  </div>
                  {" "}
                  <div className="testimonial-rating">
                    {" "}
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
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
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" Professional, creative, and deeply committed to getting the details right. The app design received outstanding feedback from our beta users and investors alike. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a10} alt="Emily Chen" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-author-name">
                    Emily Chen
                  </div>
                  {" "}
                  <div className="testimonial-author-role">
                    CTO, Bloom Health
                  </div>
                  {" "}
                  <div className="testimonial-rating">
                    {" "}
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
                    </span>
                    <span>
                      ★
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
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="contact-cta-section" id="contact">
        {" "}
        <div className="container">
          {" "}
          <div className="contact-cta-card reveal">
            {" "}
            <h2 className="section-title">
              {"Let's Build Something "}
              <span className="text-gradient">
                Amazing Together
              </span>
            </h2>
            {" "}
            <p className="section-subtitle">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
            </p>
            {" "}
            <div style={{ display: "flex", gap: "var(--spacing-md)", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: "1" }}>
              {" "}
              <a href="contact.html" className="btn btn-primary btn-lg">
                {" Start a Project "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="portfolio.html" className="btn btn-outline btn-lg">
                See My Work
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo">
                {" "}
                <div className="logo-icon">
                  M
                </div>
                {" "}
                <span>
                  MYFOLIO
                </span>
                {" "}
              </a>
              {" "}
              <p className="footer-brand-desc">
                {" Multidisciplinary designer crafting bold digital products, brand identities, and visual systems. Crafted with Purpose. "}
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Dribbble">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Behance">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zM3 18h5c1.38 0 2.5-1.12 2.5-2.5S9.38 13 8 13H3v5zm11-7h5.5c-.17-1.72-1.49-3-3.25-3S12.67 9.28 12.5 11zM3 13h4.5c1.38 0 2.5-1.12 2.5-2.5S8.88 8 7.5 8H3v5zm13.5-3c-.17-1.72-1.49-3-3.25-3s-3.25 1.28-3.5 3h6.75zm1.5 2h6v1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5h-3c0 1.66 1.34 3 3 3s3-1.34 3-3V12z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4 className="footer-col-title">
                Navigation
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="index.html">
                    Home
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
                  <a href="portfolio.html">
                    Portfolio
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
            <div className="footer-col">
              {" "}
              <h4 className="footer-col-title">
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="portfolio.html">
                    UI/UX Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="portfolio.html">
                    Brand Identity
                  </a>
                </li>
                {" "}
                <li>
                  <a href="portfolio.html">
                    Web Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="portfolio.html">
                    Motion Design
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4 className="footer-col-title">
                Contact
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="mailto:hello@myfolio.design">
                    hello@myfolio.design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                {" "}
                <li>
                  <span style={{ color: "var(--color-dark-400)" }}>
                    San Francisco, CA
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
            <p className="footer-bottom-text">
              © 2026 MYFOLIO. All rights reserved.
            </p>
            {" "}
            <div className="footer-bottom-links">
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
      <button className="scroll-top" aria-label="Scroll to top">
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
