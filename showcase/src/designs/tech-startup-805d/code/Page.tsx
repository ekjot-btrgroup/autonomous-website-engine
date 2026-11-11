// Converted from the HTML template tech-startup-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/team-1.webp";
import a1 from "./assets/team-2.webp";
import a2 from "./assets/team-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-tech-startup-805d">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo-icon">
              L
            </span>
            {" LABSKY "}
          </a>
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="active">
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
          </nav>
          {" "}
          <div className="header-actions">
            {" "}
            <a href="contact.html" className="btn btn-primary btn-sm nav-cta">
              Get Started
            </a>
            {" "}
            <button className="burger" aria-label="Toggle navigation">
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
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <nav className="mobile-nav">
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
        <a href="contact.html" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Get Started
        </a>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-grid" />
        {" "}
        <div className="hero-particles">
          {" "}
          <div className="hero-particle" style={{ left: "15%", top: "25%" }} />
          {" "}
          <div className="hero-particle" />
          {" "}
          <div className="hero-particle" />
          {" "}
          <div className="hero-particle" />
          {" "}
          <div className="hero-particle" />
          {" "}
          <div className="hero-particle" />
          {" "}
        </div>
        {" "}
        <div className="container hero-content">
          {" "}
          <div className="badge hero-badge">
            Trusted by 500+ teams worldwide
          </div>
          {" "}
          <h1>
            {" "}
            <span className="highlight">
              Code.
            </span>
            {" Cloud. Scale. "}
          </h1>
          {" "}
          <p className="hero-subtitle">
            {" Build, deploy, and scale your applications with confidence. LABSKY provides the cloud infrastructure and tools modern development teams need. "}
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="contact.html" className="btn btn-primary btn-lg">
              Start Free Trial
            </a>
            {" "}
            <a href="services.html" className="btn btn-outline btn-lg">
              Explore Services
            </a>
            {" "}
          </div>
          {" "}
          <div className="hero-stats">
            {" "}
            <div className="hero-stat">
              {" "}
              <span className="hero-stat-value" data-count="500">
                0
              </span>
              {" "}
              <span className="hero-stat-label">
                Active Teams
              </span>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <span className="hero-stat-value" data-count="99">
                0
              </span>
              {" "}
              <span className="hero-stat-label">
                Uptime SLA
              </span>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <span className="hero-stat-value" data-count="10">
                0
              </span>
              {" "}
              <span className="hero-stat-label">
                Data Centers
              </span>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <span className="hero-stat-value" data-count="24">
                0
              </span>
              {" "}
              <span className="hero-stat-label">
                Hour Support
              </span>
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
      <section className="section" id="features">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge">
              Features
            </span>
            {" "}
            <h2>
              {"Everything you need to "}
              <span className="text-gradient">
                ship faster
              </span>
            </h2>
            {" "}
            <p>
              From local development to global production, LABSKY gives your team the tools and infrastructure to move quickly and reliably.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid stagger-children">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon blue">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Cloud IDE
              </h3>
              {" "}
              <p>
                Full-featured development environments in your browser. No setup required, instant workspace provisioning for every team member.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon violet">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Cloud Deploy
              </h3>
              {" "}
              <p>
                Push to deploy with zero-downtime releases. Automatic rollbacks, preview environments, and branch-based workflows built in.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon gradient">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Edge Functions
              </h3>
              {" "}
              <p>
                Run serverless functions at the edge for lightning-fast response times. Deploy globally with a single command.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon blue">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Secure by Default
              </h3>
              {" "}
              <p>
                SOC 2 certified, end-to-end encryption, automatic certificate management, and role-based access controls out of the box.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon violet">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Observability
              </h3>
              {" "}
              <p>
                Real-time metrics, distributed tracing, and intelligent alerting. Know exactly what is happening across your entire stack.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon gradient">
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3>
                Auto-Scaling
              </h3>
              {" "}
              <p>
                Scales from zero to millions of requests automatically. Pay only for what you use with intelligent resource management.
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
      <section className="section section-light" id="pricing">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge badge-violet">
              Pricing
            </span>
            {" "}
            <h2>
              {"Plans that "}
              <span className="text-gradient">
                scale with you
              </span>
            </h2>
            {" "}
            <p>
              Start free and upgrade as your team grows. No hidden fees, no surprises. Cancel anytime.
            </p>
            {" "}
          </div>
          {" "}
          <div className="pricing-grid stagger-children">
            {" "}
            {" "}
            <div className="pricing-card reveal">
              {" "}
              <h3>
                Starter
              </h3>
              {" "}
              <p>
                For individuals and small projects
              </p>
              {" "}
              <div className="pricing-amount">
                {" "}
                <span className="pricing-currency">
                  $
                </span>
                <span className="pricing-value">
                  0
                </span>
                <span className="pricing-period">
                  /mo
                </span>
                {" "}
              </div>
              {" "}
              <ul className="pricing-features">
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 3 Projects"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 1 GB Storage"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 100 GB Bandwidth"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Community Support"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Basic Analytics"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn-outline-dark">
                Get Started Free
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="pricing-card featured reveal">
              {" "}
              <span className="pricing-badge">
                Most Popular
              </span>
              {" "}
              <h3>
                Pro
              </h3>
              {" "}
              <p>
                For growing teams and businesses
              </p>
              {" "}
              <div className="pricing-amount">
                {" "}
                <span className="pricing-currency">
                  $
                </span>
                <span className="pricing-value">
                  49
                </span>
                <span className="pricing-period">
                  /mo
                </span>
                {" "}
              </div>
              {" "}
              <ul className="pricing-features">
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Unlimited Projects"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 50 GB Storage"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 1 TB Bandwidth"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Priority Support"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Advanced Analytics"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Custom Domains"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Team Collaboration"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Start Pro Trial
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="pricing-card reveal">
              {" "}
              <h3>
                Enterprise
              </h3>
              {" "}
              <p>
                For large organizations
              </p>
              {" "}
              <div className="pricing-amount">
                {" "}
                <span className="pricing-currency">
                  $
                </span>
                <span className="pricing-value">
                  199
                </span>
                <span className="pricing-period">
                  /mo
                </span>
                {" "}
              </div>
              {" "}
              <ul className="pricing-features">
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Everything in Pro"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 500 GB Storage"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Unlimited Bandwidth"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" 24/7 Dedicated Support"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" SSO & SAML"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" SLA Guarantee"}
                </li>
                {" "}
                <li>
                  <span className="pricing-check">
                    ✓
                  </span>
                  {" Custom Integrations"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn-outline-dark">
                Contact Sales
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
      <section className="section" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge">
              Testimonials
            </span>
            {" "}
            <h2>
              {"Loved by "}
              <span className="text-gradient">
                developers
              </span>
              {" worldwide"}
            </h2>
            {" "}
            <p>
              See what teams are saying about building with LABSKY.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid stagger-children">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "LABSKY completely transformed how our team ships code. Deployment went from hours to minutes. The auto-scaling saved us thousands during our product launch."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a0} alt="Sarah Chen" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Sarah Chen
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    CTO, NovaTech
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
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "The observability tools are incredible. We went from flying blind in production to having full visibility into every request in under a day. Game changer."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a1} alt="Marcus Rodriguez" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Marcus Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    Lead DevOps, Streamline
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
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "We migrated our entire infrastructure to LABSKY in two weeks. The support team was phenomenal, and the performance improvements were immediate and significant."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a2} alt="Emily Park" className="testimonial-avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Emily Park
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    VP Engineering, Dataflow
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
          <div className="cta-section reveal-scale">
            {" "}
            <div className="cta-content">
              {" "}
              <h2>
                Ready to scale your next big idea?
              </h2>
              {" "}
              <p>
                Join 500+ teams already building with LABSKY. Start your free trial today.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="contact.html" className="btn btn-primary btn-lg">
                  Get Started Free
                </a>
                {" "}
                <a href="services.html" className="btn btn-outline btn-lg">
                  Learn More
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
                <span className="logo-icon">
                  L
                </span>
                {" LABSKY "}
              </a>
              {" "}
              <p>
                Modern cloud infrastructure for ambitious development teams. Build, deploy, and scale with confidence.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  X
                </a>
                {" "}
                <a href="#" aria-label="GitHub">
                  GH
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
                {" "}
                <a href="#" aria-label="Discord">
                  DC
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Product
              </h4>
              {" "}
              <a href="services.html">
                Cloud IDE
              </a>
              {" "}
              <a href="services.html">
                Cloud Deploy
              </a>
              {" "}
              <a href="services.html">
                Edge Functions
              </a>
              {" "}
              <a href="services.html">
                Observability
              </a>
              {" "}
              <a href="#">
                Changelog
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <a href="about.html">
                About Us
              </a>
              {" "}
              <a href="about.html">
                Team
              </a>
              {" "}
              <a href="#">
                Careers
              </a>
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" "}
              <a href="#">
                Blog
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Resources
              </h4>
              {" "}
              <a href="#">
                Documentation
              </a>
              {" "}
              <a href="#">
                API Reference
              </a>
              {" "}
              <a href="#">
                Status Page
              </a>
              {" "}
              <a href="#">
                Community
              </a>
              {" "}
              <a href="#">
                Support
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="" />
              {" LABSKY. All rights reserved."}
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
              <a href="#">
                Cookie Policy
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
