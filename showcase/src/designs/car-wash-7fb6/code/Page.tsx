// Converted from the HTML template car-wash-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/page-header.webp";
import a1 from "./assets/carousel-1.webp";
import a2 from "./assets/carousel-2.webp";
import a3 from "./assets/carousel-3.webp";
import a4 from "./assets/car-wash-website-template.webp";
import a5 from "./assets/single.webp";
import a6 from "./assets/about.webp";
import a7 from "./assets/team-1.webp";
import a8 from "./assets/team-2.webp";
import a9 from "./assets/team-3.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";
import a13 from "./assets/testimonial-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Karla:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-car-wash-7fb6">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="nav-logo">
            Aqua
            <span>
              Shine
            </span>
          </a>
          {" "}
          <nav>
            {" "}
            <ul className="nav-links">
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
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-cta">
                  Book Now
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" id="home">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a1} alt="Car wash service" className="active" />
          {" "}
          <img src={a2} alt="Auto detailing interior" />
          {" "}
          <img src={a3} alt="Professional car care" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container" style={{ position: "relative", zIndex: "2", width: "100%" }}>
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              ✦ Premium Car Care
            </div>
            {" "}
            <h1>
              {"Your Car Deserves the "}
              <span style={{ color: "var(--cyan)" }}>
                AquaShine
              </span>
              {" Treatment"}
            </h1>
            {" "}
            <p>
              Expert hand wash, ceramic coating, interior detailing, and paint protection. We bring the showroom shine to your driveway.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="services.html" className="btn btn-primary">
                Our Services
              </a>
              {" "}
              <a href="contact.html" className="btn btn-outline">
                Get a Quote
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div className="hero-book">
          {" "}
          <div className="container">
            {" "}
            <span className="hero-book-label">
              📅 Quick Book
            </span>
            {" "}
            <form className="hero-book-form" data-form="" noValidate={true}>
              {" "}
              <input type="text" className="hero-book-input" placeholder="Your Name" aria-label="Your name" required={true} />
              {" "}
              <input type="text" className="hero-book-input" placeholder="Car Model" aria-label="Car model" required={true} />
              {" "}
              <button type="submit" className="btn btn-sky">
                Book a Wash
              </button>
              {" "}
              <span className="form-ok">
                ✅ Request received — we'll call you shortly!
              </span>
              {" "}
            </form>
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
          <h2 className="section-title reveal">
            Our Premium Services
          </h2>
          {" "}
          <p className="section-sub reveal">
            From a quick hand wash to a full ceramic coating — every service is backed by our 100% satisfaction guarantee.
          </p>
          {" "}
          <div className="services-grid">
            {" "}
            <article className="service-card reveal">
              {" "}
              <img src={a4} alt="Exterior hand wash service" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Exterior Hand Wash
                </h3>
                {" "}
                <p>
                  Two-bucket method, pH-neutral shampoo, microfiber drying — a gentle yet thorough clean that protects your paint.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img src={a5} alt="Interior detailing service" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Interior Detailing
                </h3>
                {" "}
                <p>
                  Deep vacuum, steam cleaning, leather conditioning, and odor removal. Every surface restored to like-new condition.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img src={a6} alt="Ceramic coating service" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Ceramic Coating
                </h3>
                {" "}
                <p>
                  Nano-ceramic protection that repels water, UV rays, and dirt. Your car stays cleaner longer with a brilliant gloss.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
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
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                12,500+
              </div>
              {" "}
              <div className="stat-label">
                Cars Washed
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                8+
              </div>
              {" "}
              <div className="stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                24
              </div>
              {" "}
              <div className="stat-label">
                Team Members
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                4.9
              </div>
              {" "}
              <div className="stat-label">
                Average Rating
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
      <section className="section" id="about">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-split-image reveal">
              {" "}
              <img src={a6} alt="AquaShine team at work" />
              {" "}
              <img src={a4} alt="Detailed car finish" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about-split-text reveal">
              {" "}
              <h2>
                Why AquaShine?
              </h2>
              {" "}
              <p>
                We started AquaShine with a simple mission: give every car owner the showroom-quality finish they deserve. What began as a single-bay operation is now a trusted name in auto care.
              </p>
              {" "}
              <p>
                Every vehicle that rolls through our doors gets the same meticulous attention — from economy hatchbacks to exotic supercars.
              </p>
              {" "}
              <ul className="about-features">
                {" "}
                <li>
                  Eco-friendly products
                </li>
                {" "}
                <li>
                  Certified detailers
                </li>
                {" "}
                <li>
                  100% satisfaction
                </li>
                {" "}
                <li>
                  Same-day service
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn-outline-dark">
                Our Story →
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
      <section className="section" style={{ background: "var(--gray)" }}>
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Meet the Team
          </h2>
          {" "}
          <p className="section-sub reveal">
            Our certified detailers bring years of experience and a passion for perfection.
          </p>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <img src={a7} alt="Marcus Rivera" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h4>
                  Marcus Rivera
                </h4>
                {" "}
                <span>
                  {"Founder & Lead Detailer"}
                </span>
                {" "}
                <p>
                  15 years in auto detailing. Ceramic coating specialist.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <img src={a8} alt="Sofia Chen" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h4>
                  Sofia Chen
                </h4>
                {" "}
                <span>
                  Interior Specialist
                </span>
                {" "}
                <p>
                  Leather restoration and deep cleaning expert.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <img src={a9} alt="James Okafor" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h4>
                  James Okafor
                </h4>
                {" "}
                <span>
                  Paint Correction Expert
                </span>
                {" "}
                <p>
                  Master of paint polishing and nano-coating.
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
      <section className="section testimonials">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            What Our Customers Say
          </h2>
          {" "}
          <p className="section-sub reveal">
            Real feedback from real clients. We let our results speak for themselves.
          </p>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "My car looks better than the day I drove it off the lot. The ceramic coating is incredible."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a10} alt="Sarah Mitchell" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Sarah Mitchell
                  </strong>
                  {" "}
                  <span>
                    BMW X5 Owner
                  </span>
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
              <blockquote>
                "Fast, professional, and the attention to detail is unmatched. AquaShine has a customer for life."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a11} alt="David Park" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    David Park
                  </strong>
                  {" "}
                  <span>
                    Tesla Model 3 Owner
                  </span>
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
              <blockquote>
                "Brought my vintage Mustang in for paint correction. The results are absolutely stunning."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a12} alt="Lisa Thompson" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Lisa Thompson
                  </strong>
                  {" "}
                  <span>
                    Mustang GT Owner
                  </span>
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
              <blockquote>
                "Interior detailing was next-level. They got stains out that I thought were permanent."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a13} alt="Michael Torres" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Michael Torres
                  </strong>
                  {" "}
                  <span>
                    SUV Owner
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
              <h3>
                Aqua
                <span>
                  Shine
                </span>
              </h3>
              {" "}
              <p>
                Premium car wash and detailing services. We bring the showroom shine to you.
              </p>
              {" "}
              <div className="footer-socials">
                {" "}
                <a href="#" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  in
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  X
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  YT
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
              <ul className="footer-links">
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
                  <a href="blog.html">
                    Blog
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
                    Hand Wash
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Interior Detail
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Ceramic Coating
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Paint Correction
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
                Contact Info
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="#">
                    📍 123 Detail Drive, CA
                  </a>
                </li>
                {" "}
                <li>
                  <a href="tel:+18005551234">
                    📞 (800) 555-1234
                  </a>
                </li>
                {" "}
                <li>
                  <a href="mailto:hello@aquashine.com">
                    ✉️ hello@aquashine.com
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    🕐 Mon–Sat: 8AM–6PM
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
              <span data-year="" />
              {" AquaShine. All rights reserved. Crafted with care."}
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
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
