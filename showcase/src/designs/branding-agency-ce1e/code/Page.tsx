// Converted from the HTML template branding-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-bg.svg";
import a1 from "./assets/work-1.svg";
import a2 from "./assets/work-2.svg";
import a3 from "./assets/work-3.svg";
import a4 from "./assets/cta-bg.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-branding-agency-ce1e">
      {" "}
      {" "}
      <div className="mobile-overlay" />
      {" "}
      {" "}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo" aria-label="POSEIFY home">
            {" POSEIFY"}
            <span className="dot" />
            {" "}
          </a>
          {" "}
          <div className="nav-links">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
          </div>
          {" "}
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
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
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="" aria-hidden="true" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              {" "}
              <span className="pulse" />
              {" Branding Agency "}
            </div>
            {" "}
            <h1>
              {"We Build "}
              <span className="highlight">
                Brands
              </span>
              {" That Move People"}
            </h1>
            {" "}
            <p>
              Strategy-led branding that transforms how people see, feel, and connect with your business. From identity to digital, we craft every touchpoint.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="#" className="btn btn-primary btn-lg">
                {" Start Your Project "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#" className="btn btn-outline btn-lg">
                View Our Work
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="number" data-count="200" data-suffix="+">
                  0
                </div>
                {" "}
                <div className="label">
                  Projects Delivered
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="number" data-count="50" data-suffix="+">
                  0
                </div>
                {" "}
                <div className="label">
                  Global Clients
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="number" data-count="12" data-suffix=" yrs">
                  0
                </div>
                {" "}
                <div className="label">
                  Industry Experience
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
      <section className="section" id="services">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header fade-in">
            {" "}
            <div className="section-tag">
              What We Do
            </div>
            {" "}
            <h2>
              {"Crafting Brands From "}
              <span className="text-gradient">
                Strategy to Screen
              </span>
            </h2>
            {" "}
            <p>
              We offer end-to-end branding services that give your business a distinctive voice and a visual identity that resonates.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3 stagger-children">
            {" "}
            <div className="card service-card">
              {" "}
              <span className="service-number">
                01
              </span>
              {" "}
              <div className="card-icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Brand Strategy
              </h3>
              {" "}
              <p>
                We uncover what makes you different and build a brand strategy that positions you ahead of the competition.
              </p>
              {" "}
              <a href="#" className="link-arrow">
                {" Learn More "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="card service-card">
              {" "}
              <span className="service-number">
                02
              </span>
              {" "}
              <div className="card-icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Visual Identity
              </h3>
              {" "}
              <p>
                Logos, color systems, typography, and brand guidelines that create a cohesive visual language for your brand.
              </p>
              {" "}
              <a href="#" className="link-arrow">
                {" Learn More "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="card service-card">
              {" "}
              <span className="service-number">
                03
              </span>
              {" "}
              <div className="card-icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Digital Experience
              </h3>
              {" "}
              <p>
                Websites, apps, and digital products designed to convert visitors into loyal customers through compelling UX.
              </p>
              {" "}
              <a href="#" className="link-arrow">
                {" Learn More "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {" "}
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
      <section className="section" id="work" style={{ background: "#0a0f1e" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header fade-in">
            {" "}
            <div className="section-tag">
              Featured Work
            </div>
            {" "}
            <h2>
              {"Brands We've "}
              <span className="text-gradient">
                Brought to Life
              </span>
            </h2>
            {" "}
            <p>
              Every project is a partnership. Here are some brands we've helped shape, launch, and grow.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3 stagger-children">
            {" "}
            <div className="work-card">
              {" "}
              <img src={a1} alt="Meridian Labs brand identity project" />
              {" "}
              <div className="work-overlay">
                {" "}
                <span className="tag">
                  Brand Identity
                </span>
                {" "}
                <h3>
                  Meridian Labs
                </h3>
                {" "}
                <p>
                  {"Identity & Strategy"}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-card">
              {" "}
              <img src={a2} alt="Solaris campaign project" />
              {" "}
              <div className="work-overlay">
                {" "}
                <span className="tag">
                  Digital Campaign
                </span>
                {" "}
                <h3>
                  Solaris Energy
                </h3>
                {" "}
                <p>
                  {"Campaign & Digital"}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-card">
              {" "}
              <img src={a3} alt="Artisan Co packaging design" />
              {" "}
              <div className="work-overlay">
                {" "}
                <span className="tag">
                  Packaging
                </span>
                {" "}
                <h3>
                  {"Artisan & Co"}
                </h3>
                {" "}
                <p>
                  {"Packaging & Identity"}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "48px" }} className="fade-in">
            {" "}
            <a href="#" className="btn btn-outline">
              {" View All Projects "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
      <section className="section" id="process">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header fade-in">
            {" "}
            <div className="section-tag">
              Our Process
            </div>
            {" "}
            <h2>
              {"How We "}
              <span className="text-gradient">
                Build Brands
              </span>
            </h2>
            {" "}
            <p>
              A proven four-step approach that turns ideas into iconic brands.
            </p>
            {" "}
          </div>
          {" "}
          <div className="process-steps stagger-children">
            {" "}
            <div className="process-step">
              {" "}
              <div className="step-number">
                01
              </div>
              {" "}
              <h4>
                Discover
              </h4>
              {" "}
              <p>
                We dive deep into your business, market, and audience to uncover the insights that drive strategy.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="step-number">
                02
              </div>
              {" "}
              <h4>
                Define
              </h4>
              {" "}
              <p>
                We craft your brand strategy, positioning, and messaging framework that sets the foundation.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="step-number">
                03
              </div>
              {" "}
              <h4>
                Design
              </h4>
              {" "}
              <p>
                We bring your brand to life visually with identity systems, digital design, and collateral.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step">
              {" "}
              <div className="step-number">
                04
              </div>
              {" "}
              <h4>
                Deliver
              </h4>
              {" "}
              <p>
                We launch, measure, and iterate to ensure your brand performs and evolves with your business.
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
      <section className="section" style={{ background: "#0a0f1e" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header fade-in">
            {" "}
            <div className="section-tag">
              Testimonials
            </div>
            {" "}
            <h2>
              {"What Our Clients "}
              <span className="text-gradient">
                Say About Us
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3 stagger-children">
            {" "}
            <div className="card testimonial-card">
              {" "}
              <div className="quote">
                POSEIFY transformed our brand from forgettable to unforgettable. Their strategic approach delivered results we didn't think were possible.
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="avatar">
                  SC
                </div>
                {" "}
                <div className="info">
                  {" "}
                  <div className="name">
                    Sarah Chen
                  </div>
                  {" "}
                  <div className="role">
                    CEO, Meridian Labs
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card testimonial-card">
              {" "}
              <div className="quote">
                The team understood our vision from day one. The new identity has been a game-changer for our market positioning and customer perception.
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="avatar">
                  JR
                </div>
                {" "}
                <div className="info">
                  {" "}
                  <div className="name">
                    James Rivera
                  </div>
                  {" "}
                  <div className="role">
                    Founder, Solaris Energy
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card testimonial-card">
              {" "}
              <div className="quote">
                Professional, creative, and deeply strategic. POSEIFY doesn't just design -- they build brands that actually move people to action.
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="avatar">
                  AK
                </div>
                {" "}
                <div className="info">
                  {" "}
                  <div className="name">
                    Aisha Khan
                  </div>
                  {" "}
                  <div className="role">
                    {"Marketing Director, Artisan & Co"}
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
        <div className="cta-bg">
          {" "}
          <img src={a4} alt="" aria-hidden="true" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content fade-in">
            {" "}
            <h2>
              {"Ready to Build a Brand That "}
              <span className="text-gradient">
                Moves People
              </span>
              ?
            </h2>
            {" "}
            <p>
              Let's start a conversation about your brand. Whether you're launching, rebranding, or evolving, we're here to help.
            </p>
            {" "}
            <a href="#" className="btn btn-primary btn-lg">
              {" Get in Touch "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo">
                POSEIFY
                <span className="dot" />
              </a>
              {" "}
              <p>
                We are a branding agency dedicated to crafting brands that move people. Strategy, identity, digital, and campaigns.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
              <h4>
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    Brand Strategy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Visual Identity
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Digital Experience
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Campaign Design
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
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
                  <a href="#">
                    Our Work
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
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
              <h4>
                Get in Touch
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="mailto:hello@poseify.com">
                    hello@poseify.com
                  </a>
                </li>
                {" "}
                <li>
                  <a href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </li>
                {" "}
                <li>
                  New York, NY
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
            <p>
              © 2026 POSEIFY. All rights reserved.
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
    </div>
  );
}
