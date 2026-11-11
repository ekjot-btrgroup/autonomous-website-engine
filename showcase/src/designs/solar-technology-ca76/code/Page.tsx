// Converted from the HTML template solar-technology-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/img-600x400-1.webp";
import a2 from "./assets/img-600x400-2.webp";
import a3 from "./assets/img-600x400-3.webp";
import a4 from "./assets/img-600x400-4.webp";
import a5 from "./assets/about.webp";
import a6 from "./assets/carousel-2.webp";
import a7 from "./assets/carousel-3.webp";
import a8 from "./assets/gallery-1.webp";
import a9 from "./assets/gallery-2.webp";
import a10 from "./assets/gallery-3.webp";
import a11 from "./assets/gallery-4.webp";
import a12 from "./assets/gallery-5.webp";
import a13 from "./assets/gallery-6.webp";
import a14 from "./assets/img-600x400-5.webp";
import a15 from "./assets/img-600x400-6.webp";
import a16 from "./assets/team-1.webp";
import a17 from "./assets/team-2.webp";
import a18 from "./assets/team-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-solar-technology-ca76">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo-icon">
              ☼
            </span>
            {" SOLARTEC "}
          </a>
          {" "}
          <nav className="main-nav" aria-label="Main navigation">
            {" "}
            <ul>
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
              <a href="contact.html" className="btn btn-primary">
                Get a Quote
              </a>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          <button className="burger" aria-label="Toggle navigation" aria-expanded="false">
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
      <div className="nav-overlay" aria-hidden="true" />
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Solar panel installation at sunset" width="1920" height="1080" />
          {" "}
        </div>
        {" "}
        <div className="container hero-content">
          {" "}
          <div className="hero-badge">
            ☼ Leading Solar Innovation Since 2012
          </div>
          {" "}
          <h1>
            {"Innovating Solar, "}
            <span>
              Empowering Futures
            </span>
          </h1>
          {" "}
          <p>
            We design, install, and maintain cutting-edge solar energy systems that reduce your carbon footprint while delivering long-term savings.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="contact.html" className="btn btn-primary">
              Start Your Project
            </a>
            {" "}
            <a href="services.html" className="btn btn-outline">
              Our Services
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="stats">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid reveal">
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="500">
                0
              </div>
              {" "}
              <div className="stat-label">
                Projects Completed
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="150">
                0
              </div>
              {" "}
              <div className="stat-label">
                MW Installed
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="98">
                0
              </div>
              {" "}
              <div className="stat-label">
                % Client Satisfaction
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
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
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="services">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title reveal">
            {" "}
            <span className="label">
              What We Do
            </span>
            {" "}
            <h2>
              Comprehensive Solar Solutions
            </h2>
            {" "}
            <p>
              From residential rooftops to large-scale commercial installations, we deliver end-to-end solar energy systems tailored to your needs.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid reveal-stagger">
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-img">
                {" "}
                <img src={a1} alt="Residential solar panel installation" width="600" height="400" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-icon">
                  ☼
                </div>
                {" "}
                <h3>
                  Residential Solar
                </h3>
                {" "}
                <p>
                  Custom home solar systems designed to maximize energy production and minimize your electricity bills.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-img">
                {" "}
                <img src={a2} alt="Commercial solar farm" width="600" height="400" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-icon">
                  ⚙
                </div>
                {" "}
                <h3>
                  Commercial Solar
                </h3>
                {" "}
                <p>
                  Scalable solar solutions for businesses looking to reduce operational costs and meet sustainability goals.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-img">
                {" "}
                <img src={a3} alt="Solar battery storage system" width="600" height="400" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-icon">
                  ⚡
                </div>
                {" "}
                <h3>
                  Energy Storage
                </h3>
                {" "}
                <p>
                  Advanced battery storage systems that keep your power available around the clock, even on cloudy days.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-img">
                {" "}
                <img src={a4} alt="Solar maintenance inspection" width="600" height="400" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-icon">
                  ⚒
                </div>
                {" "}
                <h3>
                  {"Maintenance & Repair"}
                </h3>
                {" "}
                <p>
                  Keep your solar investment performing at its best with our expert maintenance and monitoring services.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
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
      <section className="about-preview">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-img reveal">
              {" "}
              <img src={a5} alt="SOLARTEC team installing solar panels" width="600" height="450" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about-text reveal">
              {" "}
              <span className="label">
                About SOLARTEC
              </span>
              {" "}
              <h2>
                Pioneering Solar Energy Since 2012
              </h2>
              {" "}
              <p>
                SOLARTEC is a leading solar technology company dedicated to making clean, renewable energy accessible to everyone. With over a decade of experience, we have helped hundreds of families and businesses transition to solar power.
              </p>
              {" "}
              <p>
                Our team of certified engineers and installers combines technical expertise with a deep commitment to sustainability, ensuring every project delivers maximum value.
              </p>
              {" "}
              <div className="about-features">
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    ✓
                  </div>
                  {" "}
                  <span>
                    Certified Installers
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    ✓
                  </div>
                  {" "}
                  <span>
                    25-Year Warranty
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    ✓
                  </div>
                  {" "}
                  <span>
                    Free Consultation
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    ✓
                  </div>
                  {" "}
                  <span>
                    Financing Options
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "var(--sp-xl)" }}>
                {" "}
                <a href="about.html" className="btn btn-dark">
                  Read Our Story
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
      <section className="gallery">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title reveal">
            {" "}
            <span className="label">
              Our Work
            </span>
            {" "}
            <h2>
              Featured Installations
            </h2>
            {" "}
            <p>
              Browse our portfolio of successful solar projects across residential and commercial properties.
            </p>
            {" "}
          </div>
          {" "}
          <div className="carousel-wrapper reveal">
            {" "}
            <div className="carousel-track" data-carousel="">
              {" "}
              <div className="carousel-slide">
                {" "}
                <img src={a0} alt="Solar installation project 1" width="1200" height="500" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="carousel-slide">
                {" "}
                <img src={a6} alt="Solar installation project 2" width="1200" height="500" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="carousel-slide">
                {" "}
                <img src={a7} alt="Solar installation project 3" width="1200" height="500" loading="lazy" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <button className="carousel-btn prev" aria-label="Previous slide">
              ←
            </button>
            {" "}
            <button className="carousel-btn next" aria-label="Next slide">
              →
            </button>
            {" "}
          </div>
          {" "}
          <div className="carousel-dots" data-carousel-dots="">
            {" "}
            <button className="carousel-dot active" aria-label="Go to slide 1" />
            {" "}
            <button className="carousel-dot" aria-label="Go to slide 2" />
            {" "}
            <button className="carousel-dot" aria-label="Go to slide 3" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="gallery" style={{ paddingTop: "0" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="gallery-grid reveal-stagger">
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a8} alt="Solar panel project gallery 1" width="400" height="300" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a9} alt="Solar panel project gallery 2" width="400" height="300" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a10} alt="Solar panel project gallery 3" width="400" height="300" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a11} alt="Solar panel project gallery 4" width="400" height="300" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a12} alt="Solar panel project gallery 5" width="400" height="300" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a13} alt="Solar panel project gallery 6" width="400" height="300" loading="lazy" />
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
      <section className="partners">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title dark reveal">
            {" "}
            <span className="label">
              Trusted Partners
            </span>
            {" "}
            <h2>
              Industry-Leading Brands
            </h2>
            {" "}
            <p>
              We work with the best manufacturers to deliver reliable, high-performance solar equipment.
            </p>
            {" "}
          </div>
          {" "}
          <div className="partners-grid reveal-stagger">
            {" "}
            <img src={a14} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
            <img src={a15} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
            <img src={a1} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
            <img src={a2} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
            <img src={a3} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
            <img src={a4} alt="Partner brand" className="partner-logo" loading="lazy" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title reveal">
            {" "}
            <span className="label">
              Testimonials
            </span>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="testimonial-slider reveal" data-testimonial-slider="">
            {" "}
            <div className="testimonial-slide active">
              {" "}
              <div className="testimonial-quote">
                {" SOLARTEC transformed our home with a beautiful solar installation. Our energy bills dropped by 75% in the first month. The team was professional, punctual, and incredibly knowledgeable. "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a16} alt="Sarah Mitchell" className="testimonial-avatar" width="56" height="56" loading="lazy" />
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h4>
                    Sarah Mitchell
                  </h4>
                  {" "}
                  <span>
                    Homeowner, Portland
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-slide">
              {" "}
              <div className="testimonial-quote">
                {" As a business owner, switching to solar was the best decision we made. SOLARTEC handled everything from permits to installation. Our ROI exceeded all projections within 18 months. "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a17} alt="James Rodriguez" className="testimonial-avatar" width="56" height="56" loading="lazy" />
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h4>
                    James Rodriguez
                  </h4>
                  {" "}
                  <span>
                    CEO, GreenTech Solutions
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-slide">
              {" "}
              <div className="testimonial-quote">
                {" The maintenance team at SOLARTEC is outstanding. They keep our panels running at peak efficiency year-round. Their monitoring system gives us complete peace of mind. "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a18} alt="Emily Chen" className="testimonial-avatar" width="56" height="56" loading="lazy" />
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h4>
                    Emily Chen
                  </h4>
                  {" "}
                  <span>
                    Facility Manager, Meridian Corp
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
          <div className="carousel-dots" data-testimonial-dots="">
            {" "}
            <button className="carousel-dot active" aria-label="Show testimonial 1" />
            {" "}
            <button className="carousel-dot" aria-label="Show testimonial 2" />
            {" "}
            <button className="carousel-dot" aria-label="Show testimonial 3" />
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
          <h2 className="reveal">
            Ready to Go Solar?
          </h2>
          {" "}
          <p className="reveal">
            Get a free consultation and discover how much you can save with solar energy. No commitment required.
          </p>
          {" "}
          <a href="contact.html" className="btn btn-dark reveal">
            Get Your Free Quote →
          </a>
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
              <a href="index.html" className="logo">
                {" "}
                <span className="logo-icon">
                  ☼
                </span>
                {" SOLARTEC "}
              </a>
              {" "}
              <p>
                Innovating solar technology to power a sustainable future. Trusted by over 500 customers across the region.
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Quick Links
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
              </ul>
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
                  <a href="services.html">
                    Residential Solar
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Commercial Solar
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Energy Storage
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Maintenance
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
                Contact Info
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:info@solartec.com">
                    info@solartec.com
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    123 Solar Avenue, Portland, OR
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
              {"© "}
              <span data-year="">
                2026
              </span>
              {" SOLARTEC. All rights reserved."}
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
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
