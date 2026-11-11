// Converted from the HTML template digital-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/project-1.webp";
import a1 from "./assets/project-2.webp";
import a2 from "./assets/project-3.webp";
import a3 from "./assets/project-4.webp";
import a4 from "./assets/project-5.webp";
import a5 from "./assets/project-6.webp";
import a6 from "./assets/project-7.webp";
import a7 from "./assets/project-8.webp";
import a8 from "./assets/project-9.webp";
import a9 from "./assets/project-10.webp";
import a10 from "./assets/about.webp";
import a11 from "./assets/feature.webp";
import a12 from "./assets/carousel-1.webp";
import a13 from "./assets/carousel-2.webp";
import a14 from "./assets/carousel-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap"];
const SCRIPTS: string[] = ["https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-digital-agency-a8c9">
      {" "}
      {" "}
      <nav className="site-nav" id="siteNav">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="nav-logo">
            {" "}
            <span className="logo-icon">
              <i data-lucide="hexagon" />
            </span>
            {" DGcom "}
          </a>
          {" "}
          <ul className="nav-links">
            {" "}
            <li>
              <a href="index.html" className="active">
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
              <a href="services.html">
                Services
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
          <div className="nav-cta">
            {" "}
            <a href="contact.html" className="btn btn-outline btn-sm">
              Let's Talk
            </a>
            {" "}
          </div>
          {" "}
          <button className="burger" id="burger" aria-label="Toggle menu">
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
      <div className="mobile-menu" id="mobileMenu">
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
        <a href="contact.html">
          Contact
        </a>
        {" "}
        <a href="contact.html" className="btn btn-primary" style={{ marginTop: "16px" }}>
          Let's Talk
        </a>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg" />
        {" "}
        <div className="hero-grid" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              {" "}
              <span className="dot" />
              {" Digital Agency — Web Design Studio "}
            </div>
            {" "}
            <h1>
              {"We build "}
              <em>
                digital experiences
              </em>
            </h1>
            {" "}
            <p className="hero-desc">
              Strategy, design, and engineering — fused into products that move brands forward. We partner with ambitious companies to craft websites, apps, and identities that convert.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                {" Start a Project "}
                <i data-lucide="arrow-right" style={{ width: "18px", height: "18px" }} />
                {" "}
              </a>
              {" "}
              <a href="about.html" className="btn btn-outline">
                Our Story
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-visual">
            {" "}
            <div className="floating-card card-1">
              {" "}
              <img src={a0} alt="Project showcase" />
              {" "}
            </div>
            {" "}
            <div className="floating-card card-2">
              {" "}
              <img src={a1} alt="Project showcase" />
              {" "}
            </div>
            {" "}
            <div className="floating-card card-3">
              {" "}
              <img src={a2} alt="Project showcase" />
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
      <section className="stats-section">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number" data-count="150">
                0
              </div>
              {" "}
              <div className="stat-label">
                Projects Shipped
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-1">
              {" "}
              <div className="stat-number" data-count="40">
                0
              </div>
              {" "}
              <div className="stat-label">
                Happy Clients
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-2">
              {" "}
              <div className="stat-number" data-count="12">
                0
              </div>
              {" "}
              <div className="stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-3">
              {" "}
              <div className="stat-number" data-count="25">
                0
              </div>
              {" "}
              <div className="stat-label">
                Team Members
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
      <section className="projects-section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              // Our Work
            </div>
            {" "}
            <h2 className="section-title">
              {"Projects that "}
              <span className="gradient-text">
                speak volumes
              </span>
            </h2>
            {" "}
            <p className="section-subtitle">
              A curated selection of brand identities, web platforms, and digital products we've brought to life.
            </p>
            {" "}
          </div>
          {" "}
          <div className="project-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <img src={a0} alt="E-Commerce Platform" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  E-Commerce Platform
                </h4>
                {" "}
                <span>
                  UI/UX · Web Dev
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-1">
              {" "}
              <img src={a1} alt="Brand Identity System" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Brand Identity System
                </h4>
                {" "}
                <span>
                  Branding · Design
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-2">
              {" "}
              <img src={a2} alt="SaaS Dashboard" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  SaaS Dashboard
                </h4>
                {" "}
                <span>
                  Product · UI/UX
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-3">
              {" "}
              <img src={a3} alt="Mobile App Design" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Mobile App Design
                </h4>
                {" "}
                <span>
                  Mobile · UI/UX
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-4">
              {" "}
              <img src={a4} alt="Corporate Website" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Corporate Website
                </h4>
                {" "}
                <span>
                  Web Design · Dev
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-1">
              {" "}
              <img src={a5} alt="Social Media Campaign" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Social Media Campaign
                </h4>
                {" "}
                <span>
                  Marketing · Design
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-2">
              {" "}
              <img src={a6} alt="Startup Landing Page" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Startup Landing Page
                </h4>
                {" "}
                <span>
                  Web Design · Dev
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-3">
              {" "}
              <img src={a7} alt="Portfolio Platform" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Portfolio Platform
                </h4>
                {" "}
                <span>
                  UI/UX · Web Dev
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-4">
              {" "}
              <img src={a8} alt="Analytics Dashboard" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Analytics Dashboard
                </h4>
                {" "}
                <span>
                  Product · UI/UX
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-5">
              {" "}
              <img src={a9} alt="Creative Campaign" loading="lazy" />
              {" "}
              <div className="overlay">
                {" "}
                <h4>
                  Creative Campaign
                </h4>
                {" "}
                <span>
                  Branding · Marketing
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
      <section className="about-band">
        {" "}
        <div className="container">
          {" "}
          <div className="about-image reveal">
            {" "}
            <img src={a10} alt="DGcom team at work" />
            {" "}
          </div>
          {" "}
          <div className="about-content reveal reveal-delay-2">
            {" "}
            <div className="section-label">
              // Who We Are
            </div>
            {" "}
            <h2 className="section-title">
              A studio obsessed with craft
            </h2>
            {" "}
            <p>
              We are a collective of designers, engineers, and strategists who believe great digital products are born at the intersection of aesthetics and function. Since 2013, we've partnered with startups, scale-ups, and enterprises to turn ambition into screen.
            </p>
            {" "}
            <p>
              Every pixel, every line of code, every user flow — crafted with intention. We don't do templates. We build experiences that move people.
            </p>
            {" "}
            <div className="about-stats">
              {" "}
              <div className="about-stat">
                {" "}
                <h3>
                  150+
                </h3>
                {" "}
                <p>
                  Projects Delivered
                </p>
                {" "}
              </div>
              {" "}
              <div className="about-stat">
                {" "}
                <h3>
                  98%
                </h3>
                {" "}
                <p>
                  Client Retention
                </p>
                {" "}
              </div>
              {" "}
              <div className="about-stat">
                {" "}
                <h3>
                  12+
                </h3>
                {" "}
                <p>
                  Years of Craft
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ marginTop: "32px" }}>
              {" "}
              <a href="about.html" className="btn btn-primary">
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
      <section className="services-section">
        {" "}
        <div className="container">
          {" "}
          <div className="services-layout">
            {" "}
            <div className="services-list">
              {" "}
              <div className="section-label reveal">
                // What We Do
              </div>
              {" "}
              <h2 className="section-title reveal reveal-delay-1">
                {"Services built for "}
                <span className="gradient-text">
                  growth
                </span>
              </h2>
              {" "}
              <div className="service-item reveal reveal-delay-1">
                {" "}
                <div className="service-icon">
                  <i data-lucide="layout" style={{ width: "22px", height: "22px", color: "#fff" }} />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    {"Web Design & Development"}
                  </h4>
                  {" "}
                  <p>
                    Custom websites that look stunning and perform flawlessly — from landing pages to full-scale platforms.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-item reveal reveal-delay-2">
                {" "}
                <div className="service-icon">
                  <i data-lucide="smartphone" style={{ width: "22px", height: "22px", color: "#fff" }} />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    Mobile App Design
                  </h4>
                  {" "}
                  <p>
                    Native and cross-platform mobile experiences designed with precision and user empathy at the core.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-item reveal reveal-delay-3">
                {" "}
                <div className="service-icon">
                  <i data-lucide="palette" style={{ width: "22px", height: "22px", color: "#fff" }} />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    {"Brand Identity & Strategy"}
                  </h4>
                  {" "}
                  <p>
                    Logos, visual systems, and brand guidelines that make your company unforgettable.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-item reveal reveal-delay-4">
                {" "}
                <div className="service-icon">
                  <i data-lucide="trending-up" style={{ width: "22px", height: "22px", color: "#fff" }} />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    {"Digital Marketing & SEO"}
                  </h4>
                  {" "}
                  <p>
                    Data-driven campaigns that increase visibility, traffic, and conversions across every channel.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="services-image reveal reveal-delay-2">
              {" "}
              <img src={a11} alt="Our design process" />
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
      <section className="testimonials-section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              // Testimonials
            </div>
            {" "}
            <h2 className="section-title">
              {"What our "}
              <span className="gradient-text">
                clients say
              </span>
            </h2>
            {" "}
            <p className="section-subtitle">
              Real feedback from the companies we've partnered with.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="testimonials-track" id="testimonialTrack">
          {" "}
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a12} alt="Sarah Chen" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Sarah Chen
                </div>
                {" "}
                <div className="testimonial-role">
                  CEO, TechVenture
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "DGcom completely transformed our online presence. The design is not just beautiful — it converts. Our leads increased by 200% within three months."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a13} alt="Marcus Rivera" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Marcus Rivera
                </div>
                {" "}
                <div className="testimonial-role">
                  Founder, NovaCraft
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "Working with DGcom felt like having an in-house team. They understood our vision and executed it better than we imagined. Truly exceptional work."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a14} alt="Aisha Patel" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Aisha Patel
                </div>
                {" "}
                <div className="testimonial-role">
                  Marketing Director, Elevate
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "The team at DGcom brought a level of creativity and technical skill that we hadn't seen before. Our brand has never looked stronger."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a10} alt="James Okafor" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  James Okafor
                </div>
                {" "}
                <div className="testimonial-role">
                  CTO, PulseSync
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "From strategy to execution, DGcom delivered a product that exceeded every benchmark. They don't just build websites — they build experiences."
            </blockquote>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a12} alt="Sarah Chen" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Sarah Chen
                </div>
                {" "}
                <div className="testimonial-role">
                  CEO, TechVenture
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "DGcom completely transformed our online presence. The design is not just beautiful — it converts. Our leads increased by 200% within three months."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a13} alt="Marcus Rivera" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Marcus Rivera
                </div>
                {" "}
                <div className="testimonial-role">
                  Founder, NovaCraft
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "Working with DGcom felt like having an in-house team. They understood our vision and executed it better than we imagined. Truly exceptional work."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a14} alt="Aisha Patel" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  Aisha Patel
                </div>
                {" "}
                <div className="testimonial-role">
                  Marketing Director, Elevate
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "The team at DGcom brought a level of creativity and technical skill that we hadn't seen before. Our brand has never looked stronger."
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="testimonial-card">
            {" "}
            <div className="testimonial-header">
              {" "}
              <img className="testimonial-avatar" src={a10} alt="James Okafor" />
              {" "}
              <div>
                {" "}
                <div className="testimonial-name">
                  James Okafor
                </div>
                {" "}
                <div className="testimonial-role">
                  CTO, PulseSync
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-stars">
              ★★★★★
            </div>
            {" "}
            <blockquote>
              "From strategy to execution, DGcom delivered a product that exceeded every benchmark. They don't just build websites — they build experiences."
            </blockquote>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="contact-cta">
        {" "}
        <div className="container">
          {" "}
          <div className="reveal">
            {" "}
            <div className="section-label">
              // Get In Touch
            </div>
            {" "}
            <h2 className="section-title">
              {"Ready to build something "}
              <span className="gradient-text">
                extraordinary
              </span>
              ?
            </h2>
            {" "}
            <p className="section-subtitle">
              Let's turn your vision into a digital experience that users love and businesses thrive on.
            </p>
            {" "}
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              {" "}
              <a href="contact.html" className="btn btn-primary">
                {" Start a Project "}
                <i data-lucide="arrow-right" style={{ width: "18px", height: "18px" }} />
                {" "}
              </a>
              {" "}
              <a href="https://tally.so/r/q4q1L9" className="btn btn-outline" target="_blank" rel="noopener">
                Book a Call
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
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="nav-logo" style={{ marginBottom: "4px" }}>
                {" "}
                <span className="logo-icon">
                  <i data-lucide="hexagon" />
                </span>
                {" DGcom "}
              </a>
              {" "}
              <p>
                Crafting bold digital experiences for brands that refuse to blend in. Strategy, design, and engineering — all under one roof.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  <i data-lucide="twitter" style={{ width: "18px", height: "18px" }} />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i data-lucide="linkedin" style={{ width: "18px", height: "18px" }} />
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <i data-lucide="instagram" style={{ width: "18px", height: "18px" }} />
                </a>
                {" "}
                <a href="#" aria-label="Dribbble">
                  <i data-lucide="dribbble" style={{ width: "18px", height: "18px" }} />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h5>
                Pages
              </h5>
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
                  <a href="services.html">
                    Services
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
              <h5>
                Services
              </h5>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="services.html">
                    Web Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    App Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Branding
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"SEO & Marketing"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col footer-newsletter">
              {" "}
              <h5>
                Stay in the Loop
              </h5>
              {" "}
              <p>
                Insights, case studies, and the occasional hot take — delivered monthly.
              </p>
              {" "}
              <form className="newsletter-form">
                {" "}
                <input type="email" placeholder="your@email.com" aria-label="Email address" />
                {" "}
                <button type="submit" className="btn btn-primary btn-sm">
                  Subscribe
                </button>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              {"© "}
              <span id="year" />
              {" DGcom. All rights reserved."}
            </p>
            {" "}
            <p>
              Crafted with intent.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        {" "}
        <i data-lucide="chevron-up" style={{ width: "20px", height: "20px" }} />
        {" "}
      </button>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
