// Converted from the HTML template project-management-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/logo.svg";
import a1 from "./assets/hero-illustration.svg";
import a2 from "./assets/feature-tracking.svg";
import a3 from "./assets/service-planning.svg";
import a4 from "./assets/service-execution.svg";
import a5 from "./assets/service-delivery.svg";
import a6 from "./assets/feature-collaboration.svg";
import a7 from "./assets/feature-analytics.svg";
import a8 from "./assets/feature-reporting.svg";
import a9 from "./assets/testimonial-1.svg";
import a10 from "./assets/testimonial-2.svg";
import a11 from "./assets/testimonial-3.svg";
import a12 from "./assets/cta-bg.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-project-management-1f62">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <img src={a0} alt="PROMAN Logo" />
            {" "}
          </a>
          {" "}
          <nav className="nav" id="mainNav">
            {" "}
            <a href="index.html" className="nav-link active">
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
            <a href="features.html" className="nav-link">
              Features
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="nav-cta">
              Get Started
            </a>
            {" "}
          </nav>
          {" "}
          <button className="menu-toggle" id="menuToggle" aria-label="Toggle menu">
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
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a1} alt="Project Management Background" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              Trusted by 500+ companies worldwide
            </div>
            {" "}
            <h1>
              {"Projects Delivered. "}
              <span className="text-gradient">
                On Time. On Budget.
              </span>
            </h1>
            {" "}
            <p>
              Streamline your workflow, collaborate with your team, and deliver projects that exceed expectations. PROMAN makes project management effortless.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary btn-lg">
                Start Free Trial
              </a>
              {" "}
              <a href="services.html" className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                View Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number">
                  500+
                </div>
                {" "}
                <div className="hero-stat-label">
                  Projects Completed
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number">
                  98%
                </div>
                {" "}
                <div className="hero-stat-label">
                  On-Time Delivery
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number">
                  150+
                </div>
                {" "}
                <div className="hero-stat-label">
                  Happy Clients
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
        <div className="hero-visual">
          {" "}
          <img src={a2} alt="Project Dashboard" />
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
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            {" "}
            <span className="feature-tag">
              Our Services
            </span>
            {" "}
            <h2>
              End-to-End Project Management
            </h2>
            {" "}
            <p style={{ maxWidth: "600px", margin: "var(--space-4) auto 0" }}>
              From initial planning to final delivery, we handle every aspect of your project with precision and care.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <div className="card fade-in">
              {" "}
              <div className="card-icon">
                {" "}
                <img src={a3} alt="Planning" />
                {" "}
              </div>
              {" "}
              <h3>
                Strategic Planning
              </h3>
              {" "}
              <p>
                Define clear objectives, milestones, and deliverables with our proven planning methodology.
              </p>
              {" "}
              <a href="services.html" className="card-link">
                Learn More →
              </a>
              {" "}
            </div>
            {" "}
            <div className="card fade-in">
              {" "}
              <div className="card-icon">
                {" "}
                <img src={a4} alt="Execution" />
                {" "}
              </div>
              {" "}
              <h3>
                Seamless Execution
              </h3>
              {" "}
              <p>
                Agile workflows and real-time tracking ensure your project stays on track and within budget.
              </p>
              {" "}
              <a href="services.html" className="card-link">
                Learn More →
              </a>
              {" "}
            </div>
            {" "}
            <div className="card fade-in">
              {" "}
              <div className="card-icon">
                {" "}
                <img src={a5} alt="Delivery" />
                {" "}
              </div>
              {" "}
              <h3>
                On-Time Delivery
              </h3>
              {" "}
              <p>
                We guarantee timely completion with quality assurance at every stage of the project lifecycle.
              </p>
              {" "}
              <a href="services.html" className="card-link">
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
      {" "}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        {" "}
        <div className="container">
          {" "}
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            {" "}
            <span className="feature-tag">
              Features
            </span>
            {" "}
            <h2>
              Powerful Tools for Modern Teams
            </h2>
            {" "}
            <p style={{ maxWidth: "600px", margin: "var(--space-4) auto 0" }}>
              Everything you need to manage projects efficiently, from task tracking to team collaboration.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-2" style={{ gap: "var(--space-12)" }}>
            {" "}
            <div className="flex gap-8 fade-in" style={{ gap: "var(--space-8)" }}>
              {" "}
              <img src={a2} alt="Task Tracking" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", width: "200px", flexShrink: "0" }} />
              {" "}
              <div>
                {" "}
                <h3>
                  Real-Time Tracking
                </h3>
                {" "}
                <p>
                  Monitor project progress with live dashboards and automated status updates.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex gap-8 fade-in" style={{ gap: "var(--space-8)" }}>
              {" "}
              <img src={a6} alt="Collaboration" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", width: "200px", flexShrink: "0" }} />
              {" "}
              <div>
                {" "}
                <h3>
                  Team Collaboration
                </h3>
                {" "}
                <p>
                  Bring your team together with shared workspaces and real-time communication.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex gap-8 fade-in" style={{ gap: "var(--space-8)" }}>
              {" "}
              <img src={a7} alt="Analytics" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", width: "200px", flexShrink: "0" }} />
              {" "}
              <div>
                {" "}
                <h3>
                  Advanced Analytics
                </h3>
                {" "}
                <p>
                  Data-driven insights to optimize your project performance and resource allocation.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex gap-8 fade-in" style={{ gap: "var(--space-8)" }}>
              {" "}
              <img src={a8} alt="Reporting" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", width: "200px", flexShrink: "0" }} />
              {" "}
              <div>
                {" "}
                <h3>
                  Custom Reporting
                </h3>
                {" "}
                <p>
                  Generate comprehensive reports tailored to your stakeholders' needs.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--space-12)" }}>
            {" "}
            <a href="features.html" className="btn btn-primary">
              Explore All Features
            </a>
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
        <div className="container">
          {" "}
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            {" "}
            <span className="feature-tag">
              Testimonials
            </span>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <div className="testimonial-card fade-in">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "PROMAN transformed how we handle projects. We've delivered 30% more projects this year while staying under budget."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a9} alt="David Park" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-author-info">
                  {" "}
                  <h4>
                    David Park
                  </h4>
                  {" "}
                  <p>
                    CTO, TechFlow Inc.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card fade-in">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "The real-time tracking and collaboration features have been game-changers for our distributed team."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a10} alt="Maria Santos" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-author-info">
                  {" "}
                  <h4>
                    Maria Santos
                  </h4>
                  {" "}
                  <p>
                    Director, GlobalBuild Co.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card fade-in">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "We reduced project delays by 85% in the first quarter. PROMAN's analytics are incredibly powerful."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a11} alt="James Liu" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-author-info">
                  {" "}
                  <h4>
                    James Liu
                  </h4>
                  {" "}
                  <p>
                    PMO Lead, Apex Solutions
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-section">
        {" "}
        <div className="cta-bg">
          {" "}
          <img src={a12} alt="Background" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content">
            {" "}
            <h2>
              Ready to Transform Your Project Management?
            </h2>
            {" "}
            <p>
              Join 500+ companies that deliver projects on time and on budget with PROMAN.
            </p>
            {" "}
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
              {" "}
              <a href="contact.html" className="btn btn-primary btn-lg">
                Start Free Trial
              </a>
              {" "}
              <a href="services.html" className="btn btn-white btn-lg">
                View Pricing
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
                <img src={a0} alt="PROMAN Logo" style={{ height: "36px" }} />
                {" "}
              </a>
              {" "}
              <p>
                Professional project management solutions for teams that deliver. On time. On budget. Every time.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
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
                  <a href="services.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="features.html">
                    Features
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
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="services.html">
                    Strategic Planning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Execution
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Delivery
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Consulting
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Support
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="contact.html">
                    Help Center
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Documentation
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    API Reference
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Status
                  </a>
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
              © 2026 PROMAN. All rights reserved.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                X
              </a>
              {" "}
              <a href="#" aria-label="GitHub">
                GH
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
