// Converted from the HTML template hvac-services-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/service-1.webp";
import a2 from "./assets/service-2.webp";
import a3 from "./assets/service-3.webp";
import a4 from "./assets/about-1.webp";
import a5 from "./assets/service-4.webp";
import a6 from "./assets/service-5.webp";
import a7 from "./assets/service-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-hvac-services-9ee2">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Climate
              <span>
                Control
              </span>
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link">
                Home
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                About
              </a>
              {" "}
              <a href="services.html" className="nav-link">
                Services
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Get a Quote
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          <img src={a0} alt="HVAC systems" />
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-label reveal">
              ❄️ Certified HVAC Technicians
            </div>
            {" "}
            <h1 className="hero-title reveal">
              {"Your Comfort, "}
              <span>
                Our Priority
              </span>
            </h1>
            {" "}
            <p className="hero-desc reveal">
              Expert HVAC installation, repair, and maintenance. Available 24/7 for emergency service. Keeping your home and business comfortable year-round.
            </p>
            {" "}
            <div className="hero-actions reveal">
              {" "}
              <a href="contact.html" className="btn btn--blue">
                Schedule Service
              </a>
              {" "}
              <a href="services.html" className="btn btn--outline">
                Our Services ↓
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-badge reveal">
              📞 24/7 Emergency: +1 (555) 000-COOL
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section" id="services">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <div className="section-label">
              What We Do
            </div>
            {" "}
            <h2 className="section-title">
              Complete HVAC Solutions
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              From installation to emergency repair — we handle all your heating, cooling, and ventilation needs.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid" style={{ marginTop: "var(--space-3xl)" }}>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a1} alt="AC installation" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  🔧
                </div>
                {" "}
                <h3 className="feature-card-title">
                  AC Installation
                </h3>
                {" "}
                <p className="feature-card-desc">
                  Professional installation of central air, ductless mini-splits, and commercial HVAC systems. Free estimates.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a2} alt="AC repair" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  ⚡
                </div>
                {" "}
                <h3 className="feature-card-title">
                  Emergency Repair
                </h3>
                {" "}
                <p className="feature-card-desc">
                  24/7 emergency HVAC repair. Our technicians arrive within 60 minutes to diagnose and fix the problem.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a3} alt="Maintenance" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  🛡️
                </div>
                {" "}
                <h3 className="feature-card-title">
                  Preventive Maintenance
                </h3>
                {" "}
                <p className="feature-card-desc">
                  Annual maintenance plans that extend system life, improve efficiency, and prevent costly breakdowns.
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-img reveal">
              <img src={a4} alt="Our team" />
            </div>
            {" "}
            <div className="about-text reveal">
              {" "}
              <div className="section-label">
                About Us
              </div>
              {" "}
              <h2 className="section-title">
                {"Trusted Since "}
                <span style={{ color: "var(--blue)" }}>
                  2005
                </span>
              </h2>
              {" "}
              <p>
                CLIMATECONTROL has been serving homes and businesses for over 18 years. Our certified technicians handle everything from simple repairs to complete system overhauls.
              </p>
              {" "}
              <p>
                We're licensed, insured, and committed to 100% customer satisfaction. Every job comes with our satisfaction guarantee.
              </p>
              {" "}
              <a href="about.html" className="btn btn--blue" style={{ marginTop: "var(--space-lg)" }}>
                Learn More →
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-row reveal">
            {" "}
            <div className="stat">
              <div className="stat-num">
                18+
              </div>
              <div className="stat-label">
                Years Experience
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                15k+
              </div>
              <div className="stat-label">
                Jobs Completed
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                60min
              </div>
              <div className="stat-label">
                Response Time
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                98%
              </div>
              <div className="stat-label">
                Satisfaction Rate
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--blue">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <div className="section-label" style={{ color: "var(--white)" }}>
              Why Choose Us
            </div>
            {" "}
            <h2 className="section-title">
              The CLIMATECONTROL Difference
            </h2>
            {" "}
          </div>
          {" "}
          <div className="features-grid" style={{ marginTop: "var(--space-3xl)" }}>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a5} alt="Certified" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  ✅
                </div>
                {" "}
                <h3 className="feature-card-title">
                  Certified Technicians
                </h3>
                {" "}
                <p className="feature-card-desc">
                  Every technician is NATE-certified, background-checked, and continuously trained on the latest HVAC technology.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a6} alt="Transparent pricing" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  💰
                </div>
                {" "}
                <h3 className="feature-card-title">
                  Transparent Pricing
                </h3>
                {" "}
                <p className="feature-card-desc">
                  Upfront pricing with no hidden fees. You approve the cost before we start any work. Financing available.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card-img">
                <img src={a7} alt="Guarantee" />
              </div>
              {" "}
              <div className="feature-card-body">
                {" "}
                <div className="feature-card-icon">
                  🏆
                </div>
                {" "}
                <h3 className="feature-card-title">
                  Satisfaction Guaranteed
                </h3>
                {" "}
                <p className="feature-card-desc">
                  If you're not happy, we'll make it right. Our work is backed by a 100% satisfaction guarantee on every job.
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
      <section className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Need HVAC Service Today?
          </h2>
          {" "}
          <p className="cta-desc">
            Call now for 24/7 emergency service or schedule a free consultation online.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
            Schedule Service →
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand-logo">
                Climate
                <span>
                  Control
                </span>
              </div>
              {" "}
              <p className="footer-brand-desc">
                Expert HVAC installation, repair, and maintenance. Keeping your space comfortable year-round.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html" className="footer-link">
                  All Services
                </a>
                {" "}
                <a href="services.html#ac-install" className="footer-link">
                  AC Installation
                </a>
                {" "}
                <a href="services.html#ac-repair" className="footer-link">
                  AC Repair
                </a>
                {" "}
                <a href="services.html#maintenance" className="footer-link">
                  Maintenance
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Company
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Legal
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                {" "}
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" CLIMATECONTROL. All rights reserved."}
            </span>
            {" "}
            <span>
              Comfort you can count on ❄️
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
