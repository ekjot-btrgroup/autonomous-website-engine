// Converted from the HTML template beauty-salon-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-slider-1.webp";
import a1 from "./assets/haircut.webp";
import a2 from "./assets/skin-care.webp";
import a3 from "./assets/makeup.webp";
import a4 from "./assets/manicure.webp";
import a5 from "./assets/massage.webp";
import a6 from "./assets/pedicure.webp";
import a7 from "./assets/about.webp";
import a8 from "./assets/team-1.webp";
import a9 from "./assets/team-2.webp";
import a10 from "./assets/team-3.webp";
import a11 from "./assets/team-4.webp";
import a12 from "./assets/testimonial-1.webp";
import a13 from "./assets/testimonial-2.webp";
import a14 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-beauty-salon-0dbd">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Lumière
              <span>
                .
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
              <a href="pricing.html" className="nav-link">
                Pricing
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
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge reveal">
              ✦ Where beauty meets serenity
            </div>
            {" "}
            <h1 className="hero-title reveal">
              {"Reveal Your "}
              <em>
                Radiance
              </em>
              {" with LUMIÈRE"}
            </h1>
            {" "}
            <p className="hero-desc reveal">
              A luxury beauty studio offering expert hair, skincare, makeup, and body treatments — crafted around you in a calm, welcoming space.
            </p>
            {" "}
            <div className="hero-actions reveal">
              {" "}
              <a href="contact.html" className="btn btn--rose">
                Book an Appointment
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
          <div className="hero-visual reveal">
            {" "}
            <div className="hero-img-wrap">
              <img src={a0} alt="Beauty treatment at Lumière" />
            </div>
            {" "}
            <div className="hero-card">
              {" "}
              <div className="hero-card-num">
                12+
              </div>
              {" "}
              <div className="hero-card-label">
                <strong>
                  Years of Expertise
                </strong>
                {"Stylists & therapists you trust"}
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
          <div className="text-center section-head mx-auto reveal">
            {" "}
            <div className="section-label">
              Our Services
            </div>
            {" "}
            <h2 className="section-title">
              Treatments Tailored to You
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              From precision haircuts to indulgent facials — every service is delivered with premium products and personal care.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a1} alt="Hair styling" />
              </div>
              {" "}
              <h3 className="service-card-title">
                {"Hair & Styling"}
              </h3>
              {" "}
              <p className="service-card-desc">
                Precision cuts, balayage, colour, and blowouts shaped to suit your face and lifestyle.
              </p>
              {" "}
              <span className="service-card-price">
                from $45
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a2} alt="Skin care" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Skin Care
              </h3>
              {" "}
              <p className="service-card-desc">
                Deep-cleansing facials, peels, and hydration rituals for a luminous complexion.
              </p>
              {" "}
              <span className="service-card-price">
                from $70
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a3} alt="Makeup" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Bridal Makeup
              </h3>
              {" "}
              <p className="service-card-desc">
                Editorial and bridal looks that photograph beautifully from every angle.
              </p>
              {" "}
              <span className="service-card-price">
                from $90
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a4} alt="Manicure" />
              </div>
              {" "}
              <h3 className="service-card-title">
                {"Manicure & Nails"}
              </h3>
              {" "}
              <p className="service-card-desc">
                Gel polish, nail art, and spa manicures with long-lasting, flawless finish.
              </p>
              {" "}
              <span className="service-card-price">
                from $35
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a5} alt="Massage" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Body Massage
              </h3>
              {" "}
              <p className="service-card-desc">
                Relaxing and therapeutic massage to melt away stress and tension.
              </p>
              {" "}
              <span className="service-card-price">
                from $60
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a6} alt="Pedicure" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Pedicure Spa
              </h3>
              {" "}
              <p className="service-card-desc">
                Revitalising foot care with warm scrubs, masks, and perfect polish.
              </p>
              {" "}
              <span className="service-card-price">
                from $40
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
      <section className="section section--blush">
        {" "}
        <div className="container">
          {" "}
          <div className="split">
            {" "}
            <div className="split-img reveal">
              <img src={a7} alt="Inside the Lumière salon" />
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="section-label">
                About Us
              </div>
              {" "}
              <h2 className="split-title">
                A Sanctuary for Your Everyday Glow
              </h2>
              {" "}
              <p className="split-text">
                Since 2012, LUMIÈRE has welcomed clients into a warm studio where skilled stylists and therapists listen first, then craft results you'll love.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Certified stylists and licensed beauty therapists
                </li>
                {" "}
                <li>
                  Premium, cruelty-free products from trusted brands
                </li>
                {" "}
                <li>
                  A calm, private space designed for your comfort
                </li>
                {" "}
                <li>
                  Personalised consultations on every visit
                </li>
                {" "}
              </ul>
              {" "}
              <div className="experience-row">
                {" "}
                <div>
                  <div className="experience-num">
                    12+
                  </div>
                  <div className="experience-label">
                    Years
                  </div>
                </div>
                {" "}
                <div>
                  <div className="experience-num">
                    8k
                  </div>
                  <div className="experience-label">
                    Happy Clients
                  </div>
                </div>
                {" "}
                <div>
                  <div className="experience-num">
                    4.9
                  </div>
                  <div className="experience-label">
                    Avg Rating
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "34px" }}>
                <a href="about.html" className="btn btn--rose">
                  Our Story
                </a>
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
          <div className="stats-row reveal">
            {" "}
            <div className="stat">
              <div className="stat-num">
                12+
              </div>
              <div className="stat-label">
                Years in Beauty
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                8,000
              </div>
              <div className="stat-label">
                Happy Clients
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                30+
              </div>
              <div className="stat-label">
                Treatments
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                4.9★
              </div>
              <div className="stat-label">
                Client Rating
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
          <div className="text-center section-head mx-auto reveal">
            {" "}
            <div className="section-label">
              Our Team
            </div>
            {" "}
            <h2 className="section-title">
              The Artists Behind the Glow
            </h2>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a8} alt="Team member" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Ava Laurent
                </div>
                {" "}
                <div className="team-card-role">
                  {"Founder & Master Stylist"}
                </div>
                {" "}
                <div className="team-card-social">
                  <a href="#">
                    𝕏
                  </a>
                  <a href="#">
                    ig
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a9} alt="Team member" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Mia Chen
                </div>
                {" "}
                <div className="team-card-role">
                  {"Skin & Facial Therapist"}
                </div>
                {" "}
                <div className="team-card-social">
                  <a href="#">
                    𝕏
                  </a>
                  <a href="#">
                    ig
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a10} alt="Team member" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Sofia Reyes
                </div>
                {" "}
                <div className="team-card-role">
                  Bridal Makeup Artist
                </div>
                {" "}
                <div className="team-card-social">
                  <a href="#">
                    𝕏
                  </a>
                  <a href="#">
                    ig
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a11} alt="Team member" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Elena Park
                </div>
                {" "}
                <div className="team-card-role">
                  {"Nail & Wellness Expert"}
                </div>
                {" "}
                <div className="team-card-social">
                  <a href="#">
                    𝕏
                  </a>
                  <a href="#">
                    ig
                  </a>
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
      <section className="section section--blush">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center section-head mx-auto reveal">
            {" "}
            <div className="section-label">
              Testimonials
            </div>
            {" "}
            <h2 className="section-title">
              What Our Clients Say
            </h2>
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
                "LUMIÈRE is my happy place. The balayage Ava did was flawless, and the whole team makes you feel so cared for."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a12} alt="Client" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Isabella Moreno
                  </div>
                  <div className="testimonial-card-role">
                    Regular Client
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
                "They did my bridal makeup and I've never felt more beautiful. It photographed perfectly all day and night."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a13} alt="Client" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Chloe Bennett
                  </div>
                  <div className="testimonial-card-role">
                    Bride
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
                "The best facials in the city. My skin has never looked better — the therapists are true experts."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a14} alt="Client" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Amara Okafor
                  </div>
                  <div className="testimonial-card-role">
                    Skincare Devotee
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
      </section>
      {" "}
      <section className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Your Glow Starts Here
          </h2>
          {" "}
          <p className="cta-desc">
            Book your appointment today — we'd love to take care of you.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
            Book an Appointment
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
              <div className="footer-brand-logo">
                Lumière
                <span>
                  .
                </span>
              </div>
              <p className="footer-brand-desc">
                A luxury beauty salon for hair, skin, and body — where every visit feels like self-care.
              </p>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Explore
              </h4>
              <div className="footer-links">
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                <a href="services.html" className="footer-link">
                  Services
                </a>
                <a href="pricing.html" className="footer-link">
                  Pricing
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Visit Us
              </h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  128 Rosewood Avenue
                </a>
                <a href="#" className="footer-link">
                  Brooklyn, NY 11201
                </a>
                <a href="contact.html" className="footer-link">
                  Get Directions
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
                  Mon–Sat: 9am – 7pm
                </a>
                <a href="#" className="footer-link">
                  Sunday: 10am – 5pm
                </a>
                <a href="contact.html" className="footer-link">
                  Book Now
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
              {" LUMIÈRE Beauty Salon. All rights reserved."}
            </span>
            <span>
              Crafted with care in Brooklyn ✦
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
