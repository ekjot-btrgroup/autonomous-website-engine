// Converted from the HTML template seo-mastery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/logo.svg";
import a1 from "./assets/hero-bg.svg";
import a2 from "./assets/service-analytics.svg";
import a3 from "./assets/service-technical.svg";
import a4 from "./assets/service-keyword.svg";
import a5 from "./assets/service-onpage.svg";
import a6 from "./assets/service-offpage.svg";
import a7 from "./assets/result-1.svg";
import a8 from "./assets/result-2.svg";
import a9 from "./assets/result-3.svg";
import a10 from "./assets/cta-bg.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-seo-mastery-cc97">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <nav className="nav container">
          {" "}
          <a href="index.html" className="nav-logo">
            {" "}
            <img src={a0} alt="SEOMASTER Logo" />
            {" "}
          </a>
          {" "}
          <ul className="nav-menu">
            {" "}
            <li>
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
            {" "}
            <li>
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            {" "}
            <li>
              <a href="services.html" className="nav-link">
                Services
              </a>
            </li>
            {" "}
            <li>
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
            {" "}
            <li className="nav-cta">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Get Free Audit
              </a>
              {" "}
            </li>
            {" "}
          </ul>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation">
            {" "}
            <span />
            {" "}
            <span />
            {" "}
            <span />
            {" "}
          </button>
          {" "}
        </nav>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" style={{ backgroundImage: `url(${a1})` }}>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              Trusted by 500+ Businesses
            </div>
            {" "}
            <h1>
              Dominate Search.
              <br />
              <span className="text-gradient">
                Command Traffic.
              </span>
            </h1>
            {" "}
            <p>
              Transform your online presence with data-driven SEO strategies. We help businesses rank higher, attract more visitors, and convert clicks into customers.
            </p>
            {" "}
            <div className="hero-buttons">
              {" "}
              <a href="contact.html" className="btn btn-primary btn-large">
                Start Your Growth
              </a>
              {" "}
              <a href="services.html" className="btn btn-secondary btn-large">
                Our Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="stat-item">
                {" "}
                <div className="stat-number" data-target="500" data-suffix="+">
                  0
                </div>
                {" "}
                <div className="stat-label">
                  Clients Served
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <div className="stat-number" data-target="340" data-suffix="%">
                  0
                </div>
                {" "}
                <div className="stat-label">
                  Avg. Traffic Increase
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <div className="stat-number" data-target="95" data-suffix="%">
                  0
                </div>
                {" "}
                <div className="stat-label">
                  Client Retention
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
      <section className="features section" id="features">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title fade-in">
            {" "}
            <h2>
              {"Why Choose "}
              <span className="text-lime">
                SEOMASTER
              </span>
            </h2>
            {" "}
            <p>
              We combine cutting-edge technology with proven strategies to deliver measurable results for your business.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid">
            {" "}
            <div className="feature-card fade-in">
              {" "}
              <div className="feature-icon">
                {" "}
                <img src={a2} alt="Data-Driven" />
                {" "}
              </div>
              {" "}
              <h4>
                Data-Driven Approach
              </h4>
              {" "}
              <p>
                Every decision is backed by comprehensive analytics and real-time data to maximize your ROI.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card fade-in">
              {" "}
              <div className="feature-icon">
                {" "}
                <img src={a3} alt="Technical Excellence" />
                {" "}
              </div>
              {" "}
              <h4>
                Technical Excellence
              </h4>
              {" "}
              <p>
                Our team excels in technical SEO, ensuring your site performs flawlessly across all devices.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card fade-in">
              {" "}
              <div className="feature-icon">
                {" "}
                <img src={a4} alt="Proven Results" />
                {" "}
              </div>
              {" "}
              <h4>
                Proven Track Record
              </h4>
              {" "}
              <p>
                With over 500 successful projects, we know what it takes to dominate search rankings.
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
      <section className="section" id="services">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title fade-in">
            {" "}
            <h2>
              {"Our "}
              <span className="text-lime">
                Services
              </span>
            </h2>
            {" "}
            <p>
              Comprehensive SEO solutions tailored to your business needs and goals.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card fade-in">
              {" "}
              <div className="service-image">
                {" "}
                <img src={a4} alt="Keyword Research" />
                {" "}
              </div>
              {" "}
              <div className="service-content">
                {" "}
                <h4>
                  Keyword Research
                </h4>
                {" "}
                <p>
                  Discover high-value keywords that drive qualified traffic to your website.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-in">
              {" "}
              <div className="service-image">
                {" "}
                <img src={a5} alt="On-Page SEO" />
                {" "}
              </div>
              {" "}
              <div className="service-content">
                {" "}
                <h4>
                  On-Page SEO
                </h4>
                {" "}
                <p>
                  Optimize every element of your pages for maximum search visibility.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-in">
              {" "}
              <div className="service-image">
                {" "}
                <img src={a6} alt="Off-Page SEO" />
                {" "}
              </div>
              {" "}
              <div className="service-content">
                {" "}
                <h4>
                  Off-Page SEO
                </h4>
                {" "}
                <p>
                  Build authority and trust through strategic link building and outreach.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
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
      <section className="results section" id="results">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title fade-in">
            {" "}
            <h2>
              {"Proven "}
              <span className="text-lime">
                Results
              </span>
            </h2>
            {" "}
            <p>
              Real numbers from real clients. See the impact of our SEO strategies.
            </p>
            {" "}
          </div>
          {" "}
          <div className="results-grid">
            {" "}
            <div className="result-card fade-in">
              {" "}
              <img src={a7} alt="Traffic Increase" />
              {" "}
              <h4>
                340% Traffic Growth
              </h4>
              {" "}
              <p>
                Average organic traffic increase for our clients within 12 months.
              </p>
              {" "}
            </div>
            {" "}
            <div className="result-card fade-in">
              {" "}
              <img src={a8} alt="Rankings" />
              {" "}
              <h4>
                Top Rankings
              </h4>
              {" "}
              <p>
                92% of our clients achieve page 1 rankings for their target keywords.
              </p>
              {" "}
            </div>
            {" "}
            <div className="result-card fade-in">
              {" "}
              <img src={a9} alt="Revenue" />
              {" "}
              <h4>
                $2.4M Revenue
              </h4>
              {" "}
              <p>
                Average revenue generated through organic search for our clients.
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
      <section className="cta" style={{ backgroundImage: `url(${a10})` }}>
        {" "}
        <div className="cta-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content fade-in">
            {" "}
            <h2>
              Ready to Dominate Search?
            </h2>
            {" "}
            <p>
              Get a free SEO audit and discover how we can help you outrank your competition and drive more traffic to your website.
            </p>
            {" "}
            <a href="https://tally.so/r/q4q1L9" className="btn btn-primary btn-large" target="_blank" rel="noopener">
              Get Free SEO Audit
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
              <a href="index.html" className="nav-logo">
                {" "}
                <img src={a0} alt="SEOMASTER Logo" />
                {" "}
              </a>
              {" "}
              <p>
                Helping businesses dominate search results and command organic traffic since 2015.
              </p>
              {" "}
              <div className="social-links">
                {" "}
                <a href="#" className="social-link" aria-label="Twitter">
                  {" "}
                  <img src={a6} alt="Twitter" />
                  {" "}
                </a>
                {" "}
                <a href="#" className="social-link" aria-label="LinkedIn">
                  {" "}
                  <img src={a6} alt="LinkedIn" />
                  {" "}
                </a>
                {" "}
                <a href="#" className="social-link" aria-label="Facebook">
                  {" "}
                  <img src={a6} alt="Facebook" />
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-column">
              {" "}
              <h5>
                Services
              </h5>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="services.html">
                    Keyword Research
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    On-Page SEO
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Off-Page SEO
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Technical SEO
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Local SEO
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-column">
              {" "}
              <h5>
                Company
              </h5>
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
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Careers
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-column">
              {" "}
              <h5>
                Contact
              </h5>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="mailto:hello@seomaster.com">
                    hello@seomaster.com
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
                  123 SEO Street
                  <br />
                  Digital City, DC 12345
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
              © 2024 SEOMASTER. All rights reserved.
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
      {" "}
    </div>
  );
}
