// Converted from the HTML template financial-consulting-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header.webp";
import a1 from "./assets/carousel-1.webp";
import a2 from "./assets/carousel-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-financial-consulting-3f64">
      {" "}
      {" "}
      <div className="top-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="top-bar-left">
            {" "}
            <a href="mailto:hello@finanza.com">
              <i className="fas fa-envelope" />
              {" hello@finanza.com"}
            </a>
            {" "}
            <a href="tel:+18005551234">
              <i className="fas fa-phone" />
              {" +1 (800) 555-1234"}
            </a>
            {" "}
          </div>
          {" "}
          <div className="top-bar-right">
            {" "}
            <span>
              <i className="fas fa-clock" />
              {" Mon - Fri: 8:00 AM - 6:00 PM"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="nav-brand">
            {" "}
            <span className="brand-icon">
              <i className="fas fa-chart-line" />
            </span>
            {" FINANZA "}
          </a>
          {" "}
          <div className="nav-links">
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
            <a href="contact.html" className="nav-cta">
              Get a Consultation
            </a>
            {" "}
          </div>
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
        <div className="nav-overlay" />
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Financial consulting office" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content reveal">
            {" "}
            <div className="hero-badge">
              {" "}
              <span className="badge-dot" />
              {" Trusted by 2,500+ Businesses "}
            </div>
            {" "}
            <h1>
              {"Strategic Financial Guidance for "}
              <span>
                Growth
              </span>
            </h1>
            {" "}
            <p>
              We partner with businesses and individuals to navigate complex financial landscapes, optimize tax positions, and build lasting wealth.
            </p>
            {" "}
            <div className="hero-btns">
              {" "}
              <a href="contact.html" className="btn-primary-custom">
                {" Schedule a Call "}
                <i className="fas fa-arrow-right" />
                {" "}
              </a>
              {" "}
              <a href="services.html" className="btn-outline-custom">
                {" Our Services "}
                <i className="fas fa-chevron-right" />
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="trusted-badge reveal">
          {" "}
          <div className="shield-icon">
            <i className="fas fa-shield-halved" />
          </div>
          {" "}
          <div>
            {" "}
            <strong>
              {"Certified & Licensed"}
            </strong>
            {" "}
            <small>
              CPA Accredited Since 2003
            </small>
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
          <div className="section-header reveal">
            {" "}
            <span className="section-tag">
              <i className="fas fa-briefcase" />
              {" What We Do"}
            </span>
            {" "}
            <h2>
              Comprehensive Financial Solutions
            </h2>
            {" "}
            <p>
              From tax optimization to wealth management, we deliver tailored strategies that drive measurable results.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="card-accent" />
              {" "}
              <div className="card-icon">
                <i className="fas fa-file-invoice-dollar" />
              </div>
              {" "}
              <h3>
                Tax Planning
              </h3>
              {" "}
              <p>
                Minimize your tax burden with proactive planning strategies. We identify every legitimate deduction and credit to keep more of your earnings.
              </p>
              {" "}
              <a href="services.html#tax" className="card-link">
                {"Learn More "}
                <i className="fas fa-arrow-right" />
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="card-accent" />
              {" "}
              <div className="card-icon">
                <i className="fas fa-magnifying-glass-chart" />
              </div>
              {" "}
              <h3>
                {"Audit & Assurance"}
              </h3>
              {" "}
              <p>
                Independent, thorough audits that strengthen stakeholder confidence. We ensure financial integrity and regulatory compliance at every level.
              </p>
              {" "}
              <a href="services.html#audit" className="card-link">
                {"Learn More "}
                <i className="fas fa-arrow-right" />
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="card-accent" />
              {" "}
              <div className="card-icon">
                <i className="fas fa-people-group" />
              </div>
              {" "}
              <h3>
                Business Advisory
              </h3>
              {" "}
              <p>
                {"Strategic counsel for growth, restructuring, and M&A transactions. We help leaders make decisions backed by rigorous financial analysis."}
              </p>
              {" "}
              <a href="services.html#advisory" className="card-link">
                {"Learn More "}
                <i className="fas fa-arrow-right" />
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="card-accent" />
              {" "}
              <div className="card-icon">
                <i className="fas fa-piggy-bank" />
              </div>
              {" "}
              <h3>
                Wealth Management
              </h3>
              {" "}
              <p>
                Personalized investment strategies and estate planning designed to protect and grow your assets across generations.
              </p>
              {" "}
              <a href="services.html#wealth" className="card-link">
                {"Learn More "}
                <i className="fas fa-arrow-right" />
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
      <section className="stats-section">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number" data-count="2500" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-label">
                Clients Served
              </div>
              {" "}
              <div className="stat-divider" />
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number" data-count="21" data-suffix=" Years">
                0
              </div>
              {" "}
              <div className="stat-label">
                Industry Experience
              </div>
              {" "}
              <div className="stat-divider" />
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number" data-count="98" data-suffix="%">
                0
              </div>
              {" "}
              <div className="stat-label">
                Client Retention
              </div>
              {" "}
              <div className="stat-divider" />
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number" data-prefix="$" data-count="2" data-suffix="B+">
                0
              </div>
              {" "}
              <div className="stat-label">
                Assets Under Advisory
              </div>
              {" "}
              <div className="stat-divider" />
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
            <span className="section-tag">
              <i className="fas fa-quote-left" />
              {" Testimonials"}
            </span>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
            <p>
              Real feedback from businesses and individuals who trust FINANZA with their financial future.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="quote-icon">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <p>
                "FINANZA transformed our tax strategy completely. We saved over $180,000 in the first year alone. Their proactive approach and deep expertise are unmatched."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  <img src={a1} alt="Sarah Mitchell" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <strong>
                    Sarah Mitchell
                  </strong>
                  {" "}
                  <span>
                    {"CEO, Mitchell & Co."}
                  </span>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    {" "}
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
              <div className="quote-icon">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <p>
                "The audit team was meticulous and professional. They identified discrepancies we missed and helped us achieve full compliance in under 60 days."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  <img src={a2} alt="James Carter" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <strong>
                    James Carter
                  </strong>
                  {" "}
                  <span>
                    CFO, Carter Industries
                  </span>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    {" "}
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
              <div className="quote-icon">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <p>
                "Their wealth management team built a portfolio that outperformed our benchmarks by 12%. We finally feel confident about our retirement trajectory."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  <img src={a0} alt="Lisa Nguyen" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <strong>
                    Lisa Nguyen
                  </strong>
                  {" "}
                  <span>
                    Partner, Nguyen Law Group
                  </span>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
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
      <section className="cta-banner">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-text">
            {" "}
            <h2>
              Ready to Take Control of Your Finances?
            </h2>
            {" "}
            <p>
              Book a free 30-minute consultation and discover how FINANZA can accelerate your financial goals.
            </p>
            {" "}
          </div>
          {" "}
          <a href="contact.html" className="btn-primary-custom btn-red">
            {" Get Free Consultation "}
            <i className="fas fa-arrow-right" />
            {" "}
          </a>
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
              <div className="footer-brand">
                {" "}
                <span className="brand-dot" />
                {" FINANZA "}
              </div>
              {" "}
              <p>
                Delivering expert financial consulting since 2003. We help businesses and individuals navigate tax, audit, advisory, and wealth management with clarity and confidence.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-x-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html">
                  Home
                </a>
                {" "}
                <a href="about.html">
                  About Us
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
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html#tax">
                  Tax Planning
                </a>
                {" "}
                <a href="services.html#audit">
                  {"Audit & Assurance"}
                </a>
                {" "}
                <a href="services.html#advisory">
                  Business Advisory
                </a>
                {" "}
                <a href="services.html#wealth">
                  Wealth Management
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-newsletter">
              {" "}
              <h4>
                Stay Informed
              </h4>
              {" "}
              <p>
                Get quarterly insights on tax policy changes and financial strategies delivered to your inbox.
              </p>
              {" "}
              <form className="footer-newsletter-form">
                {" "}
                <input type="email" placeholder="Your email address" required={true} />
                {" "}
                <button type="submit">
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
              <span data-year="" />
              {" FINANZA. All rights reserved."}
            </p>
            {" "}
            <p>
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms of Service
              </a>
              {" "}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fas fa-chevron-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
