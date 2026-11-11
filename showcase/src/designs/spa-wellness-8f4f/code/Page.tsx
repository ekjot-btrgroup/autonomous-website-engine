// Converted from the HTML template spa-wellness-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/services-1.webp";
import a4 from "./assets/services-2.webp";
import a5 from "./assets/services-3.webp";
import a6 from "./assets/services-4.webp";
import a7 from "./assets/services-5.webp";
import a8 from "./assets/services-6.webp";
import a9 from "./assets/about-1.webp";
import a10 from "./assets/about-2.webp";
import a11 from "./assets/team-1.webp";
import a12 from "./assets/team-2.webp";
import a13 from "./assets/team-3.webp";
import a14 from "./assets/team-4.webp";
import a15 from "./assets/testimonial-bg.webp";
import a16 from "./assets/appointment-background.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@300;400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-spa-wellness-8f4f">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              {"Serenity "}
              <em>
                Spa
              </em>
            </a>
            {" "}
            <div className="nav-links">
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
                Treatments
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
          {" "}
          <img src={a0} alt="Serene spa treatment room" className="active" loading="eager" />
          {" "}
          <img src={a1} alt="Relaxing massage therapy" loading="lazy" />
          {" "}
          <img src={a2} alt="Peaceful spa lounge" loading="lazy" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="reveal">
            {" "}
            <span className="hero-badge">
              ✦ Open daily from 9am
            </span>
            {" "}
            <h1 className="hero-title">
              {"Find Your "}
              <em>
                Peace
              </em>
            </h1>
            {" "}
            <p className="hero-desc">
              A sanctuary of calm where expert treatments, natural botanicals, and quiet luxury restore your body and mind.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn--gold">
                Book a Treatment
              </a>
              {" "}
              <a href="services.html" className="btn btn--ghost">
                Explore Services
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
      <section className="section section--cream">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Treatments
            </span>
            {" "}
            <h2 className="section-title">
              Signature Experiences
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Time-honoured techniques meet pure botanical ingredients for treatments that nourish from the outside in.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a3} alt="Swedish massage" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Massage
                </span>
                {" "}
                <h3 className="service-card-title">
                  Swedish Massage
                </h3>
                {" "}
                <p className="service-card-desc">
                  Long, flowing strokes with warm botanical oil to ease tension and improve circulation.
                </p>
                {" "}
                <div className="service-card-price">
                  $95
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a4} alt="Deep tissue massage" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Massage
                </span>
                {" "}
                <h3 className="service-card-title">
                  Deep Tissue
                </h3>
                {" "}
                <p className="service-card-desc">
                  Targeted pressure on muscle knots and chronic tension for lasting relief.
                </p>
                {" "}
                <div className="service-card-price">
                  $120
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a5} alt="Organic facial" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Facial
                </span>
                {" "}
                <h3 className="service-card-title">
                  Organic Facial
                </h3>
                {" "}
                <p className="service-card-desc">
                  Customised botanical facial with steam, exfoliation, mask, and scalp massage.
                </p>
                {" "}
                <div className="service-card-price">
                  $110
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a6} alt="Hot stone massage" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Massage
                </span>
                {" "}
                <h3 className="service-card-title">
                  Hot Stone Therapy
                </h3>
                {" "}
                <p className="service-card-desc">
                  Warm basalt stones placed on key points to melt away deep muscle tension.
                </p>
                {" "}
                <div className="service-card-price">
                  $140
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a7} alt="Body scrub" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Body
                </span>
                {" "}
                <h3 className="service-card-title">
                  {"Body Scrub & Wrap"}
                </h3>
                {" "}
                <p className="service-card-desc">
                  Sea salt or sugar exfoliation followed by a nourishing botanical wrap.
                </p>
                {" "}
                <div className="service-card-price">
                  $130
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a8} alt="Couples massage" loading="lazy" />
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <span className="service-card-tag">
                  Couples
                </span>
                {" "}
                <h3 className="service-card-title">
                  Couples Retreat
                </h3>
                {" "}
                <p className="service-card-desc">
                  Side-by-side massage in a private suite with Champagne and chocolates.
                </p>
                {" "}
                <div className="service-card-price">
                  $260
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="split">
            {" "}
            <div className="split-imgs reveal">
              {" "}
              <div className="split-img-main">
                <img src={a9} alt="Peaceful spa sanctuary" loading="lazy" />
              </div>
              {" "}
              <div className="split-img-small">
                <img src={a10} alt="Botanical spa products" loading="lazy" />
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-body reveal">
              {" "}
              <span className="section-label">
                Our Philosophy
              </span>
              {" "}
              <h2 className="section-title">
                Where Nature Meets Nurture
              </h2>
              {" "}
              <p className="section-desc" style={{ marginBottom: "20px" }}>
                At SERENITY SPA, every treatment is rooted in the belief that true wellness comes from harmony between body, mind, and environment. Our therapists use only natural, organic products and time-honoured techniques.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  100% natural and organic product range
                </li>
                {" "}
                <li>
                  Certified holistic therapists
                </li>
                {" "}
                <li>
                  Private treatment suites with garden views
                </li>
                {" "}
                <li>
                  Personalised wellness consultations
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--forest">
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
      <section className="section section--forest">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-row reveal">
            {" "}
            <div>
              <div className="stat-num">
                15+
              </div>
              <div className="stat-label">
                Years of Care
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                25k
              </div>
              <div className="stat-label">
                Treatments Given
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                18
              </div>
              <div className="stat-label">
                Expert Therapists
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                4.9★
              </div>
              <div className="stat-label">
                Guest Rating
              </div>
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
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Team
            </span>
            {" "}
            <h2 className="section-title">
              Our Therapists
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Skilled hands, caring hearts — each therapist brings years of training and a passion for wellness.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a11} alt="Lead therapist" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Sofia Laurent
                </div>
                {" "}
                <div className="team-card-role">
                  Lead Therapist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a12} alt="Massage specialist" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Jade Okonkwo
                </div>
                {" "}
                <div className="team-card-role">
                  Massage Specialist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a13} alt="Facialist" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Yuki Tanaka
                </div>
                {" "}
                <div className="team-card-role">
                  Senior Facialist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a14} alt="Holistic therapist" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Lena Hart
                </div>
                {" "}
                <div className="team-card-role">
                  Holistic Therapist
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
      <div className="testimonials-wrap">
        {" "}
        <div className="testimonials-bg">
          <img src={a15} alt="Peaceful spa setting" loading="lazy" />
        </div>
        {" "}
        <div className="testimonials-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Testimonials
            </span>
            {" "}
            <h2 className="section-title" style={{ color: "var(--white)" }}>
              What Our Guests Say
            </h2>
            {" "}
            <p className="section-desc" style={{ color: "rgba(255,255,255,0.7)" }}>
              The kind words that remind us why we do what we do.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card-text">
                "The most peaceful few hours I've had in years. The hot stone massage was transformative — I floated out of there."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a11} alt="Guest" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Claire Bennett
                  </div>
                  <div className="testimonial-card-role">
                    Regular Guest
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card-text">
                "I booked the Couples Retreat for our anniversary and it was perfection. The private suite, the attention to detail — every moment was magical."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a12} alt="Guest" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    {"Marcus & Talia"}
                  </div>
                  <div className="testimonial-card-role">
                    Couples Retreat
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card-text">
                "The organic facial left my skin glowing for days. Yuki is incredibly skilled — she recommended a routine that has transformed my complexion."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a13} alt="Guest" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Priya Mehta
                  </div>
                  <div className="testimonial-card-role">
                    Facial Regular
                  </div>
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
      <div className="appointment-banner">
        {" "}
        <div className="appointment-bg">
          <img src={a16} alt="Serene spa treatment room" loading="lazy" />
        </div>
        {" "}
        <div className="appointment-overlay" />
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Ready to Escape?
          </h2>
          {" "}
          <p className="cta-desc">
            Book your treatment today and step into a world of calm.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--gold">
            Book an Appointment
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              <div className="footer-brand-logo">
                {"Serenity "}
                <em>
                  Spa
                </em>
              </div>
              <p className="footer-brand-desc">
                A luxury wellness sanctuary offering expert treatments, natural botanicals, and a space to simply breathe.
              </p>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Explore
              </h4>
              <div className="footer-links">
                <a href="about.html" className="footer-link">
                  About
                </a>
                <a href="services.html" className="footer-link">
                  Treatments
                </a>
                <a href="gallery.html" className="footer-link">
                  Gallery
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Visit
              </h4>
              <div className="footer-links">
                <a href="contact.html" className="footer-link">
                  Find Us
                </a>
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                <a href="contact.html" className="footer-link">
                  Book Now
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Hours
              </h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Mon–Sat: 9am–8pm
                </a>
                <a href="#" className="footer-link">
                  Sun: 10am–6pm
                </a>
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            <span>
              {"© "}
              <span data-year="" />
              {" SERENITY SPA. All rights reserved."}
            </span>
            <span>
              Find your peace ✦
            </span>
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
