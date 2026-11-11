// Converted from the HTML template dental-practice-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/team-1.webp";
import a4 from "./assets/team-2.webp";
import a5 from "./assets/team-3.webp";
import a6 from "./assets/team-4.webp";
import a7 from "./assets/team-5.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-dental-practice-e12b">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              {"Apex "}
              <em>
                Dental
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
                Services
              </a>
              {" "}
              <a href="team.html" className="nav-link">
                Team
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Book Appointment
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
          <img src={a0} alt="Modern dental clinic" className="active" loading="eager" />
          {" "}
          <img src={a1} alt="Smiling patient at the dentist" loading="lazy" />
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
              ★ Rated 4.9 by 1,200+ patients
            </span>
            {" "}
            <h1 className="hero-title">
              {"Healthy Smiles, "}
              <em>
                Built with Care
              </em>
            </h1>
            {" "}
            <p className="hero-desc">
              Gentle, modern dentistry for the whole family — from routine check-ups to complete smile makeovers.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn--coral">
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
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--sky">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Our Services
            </span>
            {" "}
            <h2 className="section-title">
              Complete Care Under One Roof
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Every treatment delivered with precision, comfort, and a gentle touch.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-icon">
                🦷
              </div>
              {" "}
              <h3 className="service-card-title">
                General Dentistry
              </h3>
              {" "}
              <p className="service-card-desc">
                Check-ups, cleanings, fillings, and preventive care for the whole family.
              </p>
              {" "}
              <a href="services.html" className="service-card-cta">
                Learn more →
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-icon">
                ✨
              </div>
              {" "}
              <h3 className="service-card-title">
                Cosmetic Dentistry
              </h3>
              {" "}
              <p className="service-card-desc">
                Veneers, whitening, and smile makeovers that look completely natural.
              </p>
              {" "}
              <a href="services.html" className="service-card-cta">
                Learn more →
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-icon">
                🔧
              </div>
              {" "}
              <h3 className="service-card-title">
                {"Implants & Restorations"}
              </h3>
              {" "}
              <p className="service-card-desc">
                Dental implants, crowns, and bridges to restore function and confidence.
              </p>
              {" "}
              <a href="services.html" className="service-card-cta">
                Learn more →
              </a>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-icon">
                🚨
              </div>
              {" "}
              <h3 className="service-card-title">
                Emergency Care
              </h3>
              {" "}
              <p className="service-card-desc">
                Same-day appointments for toothaches, chipped teeth, and urgent issues.
              </p>
              {" "}
              <a href="services.html" className="service-card-cta">
                Learn more →
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
          <div className="split">
            {" "}
            <div className="split-img reveal">
              {" "}
              <img src={a2} alt="Friendly dentist and patient" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="split-body reveal">
              {" "}
              <span className="section-label">
                Why Choose Us
              </span>
              {" "}
              <h2 className="section-title">
                Dentistry You Can Actually Feel Good About
              </h2>
              {" "}
              <p className="section-desc" style={{ marginBottom: "20px" }}>
                For over 20 years we've helped families in the area keep their smiles healthy — with honest advice, transparent pricing, and zero judgement.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Gentle, anxiety-free treatment for every age
                </li>
                {" "}
                <li>
                  Digital x-rays and same-day crowns
                </li>
                {" "}
                <li>
                  Transparent pricing with flexible payment plans
                </li>
                {" "}
                <li>
                  Evening and Saturday appointments
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--navy">
                Our Story
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
      <section className="section section--navy">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-row reveal">
            {" "}
            <div>
              <div className="stat-num">
                20+
              </div>
              <div className="stat-label">
                Years Experience
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                12k
              </div>
              <div className="stat-label">
                Happy Patients
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                8
              </div>
              <div className="stat-label">
                Specialists
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                98%
              </div>
              <div className="stat-label">
                Would Recommend
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
              Meet the Team
            </span>
            {" "}
            <h2 className="section-title">
              Your Smile's Care Team
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Board-certified dentists and specialists who treat every patient like family.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a3} alt="Dr. Marcus Hale" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Dr. Marcus Hale
                </div>
                {" "}
                <div className="team-card-role">
                  Lead Dentist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a4} alt="Dr. Priya Nair" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Dr. Priya Nair
                </div>
                {" "}
                <div className="team-card-role">
                  Orthodontist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a5} alt="Dr. Sam Carter" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Dr. Sam Carter
                </div>
                {" "}
                <div className="team-card-role">
                  Oral Surgeon
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a6} alt="Dr. Lena Kim" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Dr. Lena Kim
                </div>
                {" "}
                <div className="team-card-role">
                  Cosmetic Dentist
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a7} alt="Dr. Omar Fayez" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Dr. Omar Fayez
                </div>
                {" "}
                <div className="team-card-role">
                  Pediatric Dentist
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
      <section className="section section--sky">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Testimonials
            </span>
            {" "}
            <h2 className="section-title">
              Stories From Our Patients
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Real words from real smiles we've had the pleasure of caring for.
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
                "I was terrified of dentists for years. The team here changed that completely — I actually look forward to my check-ups now."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a4} alt="Rachel" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Rachel Adams
                  </div>
                  <div className="testimonial-card-role">
                    Patient for 6 years
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
                "Got my implant done here and the whole process was painless. The follow-up care has been outstanding."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a3} alt="David" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    David Osei
                  </div>
                  <div className="testimonial-card-role">
                    Implant patient
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
                "They're amazing with kids. My daughter asks to come to the dentist now — I never thought I'd hear those words."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a5} alt="Maya" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Maya Roberts
                  </div>
                  <div className="testimonial-card-role">
                    Parent of two
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
      <div className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Ready for a Healthier Smile?
          </h2>
          {" "}
          <p className="cta-desc">
            Book your appointment today — new patients welcome.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
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
                {"Apex "}
                <em>
                  Dental
                </em>
              </div>
              <p className="footer-brand-desc">
                A modern dental practice providing gentle, comprehensive care for the whole family.
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
                  Services
                </a>
                <a href="team.html" className="footer-link">
                  Team
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
                  Book Appointment
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
                  Mon–Fri: 8am–6pm
                </a>
                <a href="#" className="footer-link">
                  Sat: 9am–2pm
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
              {" APEX DENTAL. All rights reserved."}
            </span>
            <span>
              Gentle care ✦
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
