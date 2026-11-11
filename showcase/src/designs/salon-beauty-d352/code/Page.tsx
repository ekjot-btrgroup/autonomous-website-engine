// Converted from the HTML template salon-beauty-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-bg.svg";
import a1 from "./assets/about-salon.svg";
import a2 from "./assets/service-hair.svg";
import a3 from "./assets/service-skin.svg";
import a4 from "./assets/service-makeup.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-salon-beauty-d352">
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="nav-brand">
            {" "}
            <span className="nav-brand-text">
              SALONE
            </span>
            {" "}
          </a>
          {" "}
          <div className="nav-links">
            {" "}
            <a href="index.html" className="nav-link active">
              Home
            </a>
            {" "}
            <a href="services.html" className="nav-link">
              Services
            </a>
            {" "}
            <a href="gallery.html" className="nav-link">
              Gallery
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="nav-link nav-cta">
              Book Now
            </a>
            {" "}
          </div>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu">
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
          <img src={a0} alt="SALONE Beauty Salon ambiance" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="hero-pattern" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-label">
              Premium Beauty Experience
            </div>
            {" "}
            <h1 className="hero-title">
              {"Where Beauty Meets "}
              <span>
                Artistry
              </span>
            </h1>
            {" "}
            <p className="hero-desc">
              Indulge in a world of luxury beauty treatments crafted by our expert stylists and artists. At SALONE, every visit is a journey to your most radiant self.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Book Appointment
              </a>
              {" "}
              <a href="services.html" className="btn btn-secondary" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                Explore Services
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero-scroll">
          {" "}
          <span>
            Scroll
          </span>
          {" "}
          <div className="hero-scroll-line" />
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="about" id="about">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-image reveal">
              {" "}
              <img src={a1} alt="SALONE salon interior" />
              {" "}
              <div className="about-image-accent" />
              {" "}
              <div className="about-experience">
                {" "}
                <div className="about-experience-number">
                  12+
                </div>
                {" "}
                <div className="about-experience-text">
                  Years of Excellence
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-content">
              {" "}
              <div className="section-label reveal">
                Our Story
              </div>
              {" "}
              <h2 className="section-title reveal reveal-delay-1">
                {"A Sanctuary of Beauty & Elegance"}
              </h2>
              {" "}
              <p className="about-text reveal reveal-delay-2">
                {" Founded with a passion for transforming the way people experience beauty, SALONE has become a destination for those who appreciate the finer things. Our philosophy blends timeless techniques with modern innovation to create looks that are uniquely you. "}
              </p>
              {" "}
              <p className="about-text reveal reveal-delay-2">
                {" From the moment you step through our doors, you are enveloped in an atmosphere of warmth, sophistication, and care. Every detail, from our curated product selection to our signature treatments, is designed to elevate your experience. "}
              </p>
              {" "}
              <div className="about-features reveal reveal-delay-3">
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Award-Winning Stylists
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Premium Products Only
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Personalized Consultations
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Relaxing Atmosphere
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="services.html" className="btn btn-primary reveal reveal-delay-4">
                Discover Our Services
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
      <section className="services" id="services">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-label reveal">
              What We Offer
            </div>
            {" "}
            <h2 className="section-title reveal reveal-delay-1">
              Our Signature Services
            </h2>
            {" "}
            <p className="section-subtitle reveal reveal-delay-2">
              Each service is a carefully curated experience, designed to bring out your natural beauty and leave you feeling焕然一新.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a2} alt="Hair styling services" />
                {" "}
                <div className="service-card-overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-number">
                  01
                </div>
                {" "}
                <h3 className="service-card-title">
                  Hair Styling
                </h3>
                {" "}
                <p className="service-card-text">
                  From precision cuts to stunning color transformations, our master stylists create looks that perfectly complement your style.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-1">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a3} alt="Skincare treatments" />
                {" "}
                <div className="service-card-overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-number">
                  02
                </div>
                {" "}
                <h3 className="service-card-title">
                  Skincare
                </h3>
                {" "}
                <p className="service-card-text">
                  Rejuvenating facials, advanced treatments, and personalized regimens that restore your skin's natural radiance and glow.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-2">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a4} alt="Makeup artistry" />
                {" "}
                <div className="service-card-overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <div className="service-card-number">
                  03
                </div>
                {" "}
                <h3 className="service-card-title">
                  Makeup Artistry
                </h3>
                {" "}
                <p className="service-card-text">
                  Whether it's a special occasion or everyday elegance, our makeup artists craft looks that enhance your natural beauty.
                </p>
                {" "}
                <a href="services.html" className="service-card-link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal">
            {" "}
            <a href="services.html" className="btn btn-gold">
              View All Services
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="testimonials" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-label reveal">
              Client Love
            </div>
            {" "}
            <h2 className="section-title reveal reveal-delay-1">
              What Our Clients Say
            </h2>
            {" "}
            <p className="section-subtitle reveal reveal-delay-2">
              Real experiences from real people who have entrusted us with their beauty journey.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonial-slider reveal">
            {" "}
            <div className="testimonial-track">
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <div className="testimonial-quote">
                    “
                  </div>
                  {" "}
                  <p className="testimonial-text">
                    SALONE transformed my look entirely. The attention to detail and the personalized consultation made me feel truly special. I walked out feeling like a completely new person.
                  </p>
                  {" "}
                  <div className="testimonial-author">
                    {" "}
                    <div className="testimonial-avatar">
                      S
                    </div>
                    {" "}
                    <div className="testimonial-name">
                      Sophia Chen
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Regular Client
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <div className="testimonial-quote">
                    “
                  </div>
                  {" "}
                  <p className="testimonial-text">
                    The bridal package was absolutely perfect. Every detail was taken care of, and my hair and makeup were flawless throughout the entire day. Truly a dream experience.
                  </p>
                  {" "}
                  <div className="testimonial-author">
                    {" "}
                    <div className="testimonial-avatar">
                      E
                    </div>
                    {" "}
                    <div className="testimonial-name">
                      Emma Rodriguez
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Bridal Client
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <div className="testimonial-quote">
                    “
                  </div>
                  {" "}
                  <p className="testimonial-text">
                    I've been to many salons, but none compare to SALONE. The ambiance, the skill, and the genuine care from every team member makes every visit something I truly look forward to.
                  </p>
                  {" "}
                  <div className="testimonial-author">
                    {" "}
                    <div className="testimonial-avatar">
                      A
                    </div>
                    {" "}
                    <div className="testimonial-name">
                      Aisha Patel
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      VIP Member
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
            <div className="testimonial-dots">
              {" "}
              <button className="testimonial-dot active" data-index="0" aria-label="Slide 1" />
              {" "}
              <button className="testimonial-dot" data-index="1" aria-label="Slide 2" />
              {" "}
              <button className="testimonial-dot" data-index="2" aria-label="Slide 3" />
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
          <div className="cta-inner reveal">
            {" "}
            <h2 className="cta-title">
              Ready to Experience the SALONE Difference?
            </h2>
            {" "}
            <p className="cta-text">
              Book your consultation today and discover what makes us the most sought-after beauty destination in the city.
            </p>
            {" "}
            <a href="contact.html" className="btn btn-white">
              Schedule Your Visit
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
            <div>
              {" "}
              <div className="footer-brand-text">
                SALONE
              </div>
              {" "}
              <p className="footer-brand-desc">
                Where beauty meets artistry. A premium beauty destination dedicated to enhancing your natural elegance through expert care and timeless technique.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer-heading">
                Quick Links
              </div>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html" className="footer-link">
                  Home
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Services
                </a>
                {" "}
                <a href="gallery.html" className="footer-link">
                  Gallery
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
              <div className="footer-heading">
                Services
              </div>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html" className="footer-link">
                  Hair Styling
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Skincare
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Makeup
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Nail Art
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Bridal
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer-heading">
                Working Hours
              </div>
              {" "}
              <div className="footer-hours-item">
                {" "}
                <span className="footer-hours-day">
                  Mon - Fri
                </span>
                {" "}
                <span className="footer-hours-time">
                  9:00 AM - 8:00 PM
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer-hours-item">
                {" "}
                <span className="footer-hours-day">
                  Saturday
                </span>
                {" "}
                <span className="footer-hours-time">
                  9:00 AM - 6:00 PM
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer-hours-item">
                {" "}
                <span className="footer-hours-day">
                  Sunday
                </span>
                {" "}
                <span className="footer-hours-time">
                  10:00 AM - 5:00 PM
                </span>
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
              © 2024 SALONE. All rights reserved.
            </span>
            {" "}
            <div className="footer-bottom-links">
              {" "}
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              {" "}
              <a href="#" className="footer-bottom-link">
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
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
