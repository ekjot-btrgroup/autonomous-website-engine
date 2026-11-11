// Converted from the HTML template car-electronics-repair-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/feature.webp";
import a1 from "./assets/service-1.webp";
import a2 from "./assets/service-2.webp";
import a3 from "./assets/service-3.webp";
import a4 from "./assets/service-4.webp";
import a5 from "./assets/service-5.webp";
import a6 from "./assets/service-6.webp";
import a7 from "./assets/about-1.webp";
import a8 from "./assets/about-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-car-electronics-repair-688d">
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="navbar__inner">
          {" "}
          <a href="index.html" className="navbar__logo">
            {" "}
            <span className="logo-icon">
              <i className="fas fa-car" />
            </span>
            {" CEPAIR "}
          </a>
          {" "}
          <div className="navbar__links">
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
          </div>
          {" "}
          <a href="contact.html" className="navbar__cta">
            Book Diagnostic
          </a>
          {" "}
          <button className="navbar__burger" aria-label="Toggle menu">
            {" "}
            <span />
            <span />
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
        <div className="hero__grid" />
        {" "}
        <div className="hero__scanline" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero__inner">
            {" "}
            <div className="hero__content">
              {" "}
              <div className="hero__badge reveal">
                {" "}
                <span className="dot" />
                {" System Online — Accepting Appointments "}
              </div>
              {" "}
              <h1 className="hero__title reveal">
                {" Car audio, diagnostics & "}
                <em>
                  smart upgrades
                </em>
                {" "}
              </h1>
              {" "}
              <p className="hero__desc fade-up">
                {" Precision electronics repair for modern vehicles. From blown speakers to full infotainment overhauls — we diagnose, repair, and upgrade with certified expertise. "}
              </p>
              {" "}
              <div className="hero__actions fade-up">
                {" "}
                <a href="services.html" className="btn btn--primary">
                  {" "}
                  <i className="fas fa-cog" />
                  {" View Services "}
                </a>
                {" "}
                <a href="contact.html" className="btn btn--outline">
                  {" "}
                  <i className="fas fa-phone" />
                  {" Free Consultation "}
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero__stats fade-up">
                {" "}
                <div className="hero__stat">
                  {" "}
                  <div className="hero__stat-num">
                    5,000+
                  </div>
                  {" "}
                  <div className="hero__stat-label">
                    Jobs Completed
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="hero__stat">
                  {" "}
                  <div className="hero__stat-num">
                    98%
                  </div>
                  {" "}
                  <div className="hero__stat-label">
                    Satisfaction Rate
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="hero__stat">
                  {" "}
                  <div className="hero__stat-num">
                    15+
                  </div>
                  {" "}
                  <div className="hero__stat-label">
                    Years Experience
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero__visual fade-up">
              {" "}
              <div className="hero__img-wrap">
                {" "}
                <img src={a0} alt="Car electronics diagnostic workstation" />
                {" "}
                <div className="hero__img-overlay" />
                {" "}
                <div className="hero__img-grid" />
                {" "}
              </div>
              {" "}
              <div className="hero__float hero__float--tl">
                {" "}
                <div className="hero__float-label">
                  Diagnostic Status
                </div>
                {" "}
                <div className="hero__float-val">
                  PASS
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero__float hero__float--br">
                {" "}
                <div className="hero__float-label">
                  System Health
                </div>
                {" "}
                <div className="hero__float-val">
                  98.2%
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="section__label reveal">
            // Services
          </div>
          {" "}
          <h2 className="section__title reveal">
            Complete Car Electronics Solutions
          </h2>
          {" "}
          <p className="section__sub fade-up">
            From audio system installs to full CAN-bus diagnostics — every service backed by certified technicians and OEM-grade parts.
          </p>
          {" "}
          <div className="services-grid stagger">
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a1} alt="Audio system installation" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
                <span className="service-card__tag">
                  Popular
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Audio System Install
                </h3>
                {" "}
                <p className="service-card__desc">
                  Full speaker, subwoofer, and amplifier installations with custom wiring harnesses and sound tuning.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a2} alt="Diagnostics and troubleshooting" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Electronic Diagnostics
                </h3>
                {" "}
                <p className="service-card__desc">
                  Advanced OBD-II and CAN-bus scanning to pinpoint electrical faults before they become costly failures.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a3} alt="Infotainment system upgrade" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Infotainment Upgrade
                </h3>
                {" "}
                <p className="service-card__desc">
                  Apple CarPlay, Android Auto, and touchscreen head unit upgrades with seamless factory integration.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a4} alt="Wiring harness repair" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  {"Wiring & Harness Repair"}
                </h3>
                {" "}
                <p className="service-card__desc">
                  Faulty wiring diagnosis, connector replacement, and custom harness fabrication for any vehicle make.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a5} alt="Camera and sensor installation" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  {"Camera & Sensors"}
                </h3>
                {" "}
                <p className="service-card__desc">
                  Reverse cameras, dash cams, parking sensors, and ADAS calibration with professional mounting.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card fade-up">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a6} alt="Security system installation" />
                {" "}
                <div className="service-card__overlay" />
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <h3 className="service-card__title">
                  Security Systems
                </h3>
                {" "}
                <p className="service-card__desc">
                  Immobilizers, GPS trackers, remote starters, and smart key programming for complete vehicle security.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {"View Details "}
                  <i className="fas fa-arrow-right" />
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="about-band reveal">
            {" "}
            <div className="about-band__images">
              {" "}
              <img src={a7} alt="Workshop interior" />
              {" "}
              <img src={a8} alt="Technician at work" />
              {" "}
            </div>
            {" "}
            <div className="about-band__content">
              {" "}
              <div className="section__label">
                // About CEPAIR
              </div>
              {" "}
              <h2 className="section__title">
                Trusted Car Electronics Experts
              </h2>
              {" "}
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: ".95rem" }}>
                {" With over 15 years in automotive electronics, our certified technicians combine factory-level diagnostics with hands-on craftsmanship to keep your vehicle's systems running flawlessly. "}
              </p>
              {" "}
              <div className="about-band__checks">
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" Certified Technicians"}
                </div>
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" Same-Day Repairs"}
                </div>
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" OEM-Grade Parts"}
                </div>
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" Free Diagnosis"}
                </div>
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" 24/7 Emergency Support"}
                </div>
                {" "}
                <div className="about-check">
                  <i className="fas fa-check" />
                  {" Warranty Included"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about-band__cta-box">
                {" "}
                <p style={{ color: "var(--text-secondary)", fontSize: ".9rem", margin: "0" }}>
                  {" "}
                  <strong style={{ color: "#fff" }}>
                    15+ years
                  </strong>
                  {" of proven diagnostics & repair solutions for all vehicle makes and models. "}
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="section__label reveal">
            // Process
          </div>
          {" "}
          <h2 className="section__title reveal">
            Our Diagnostic Workflow
          </h2>
          {" "}
          <p className="section__sub fade-up">
            A systematic 4-step approach that ensures accurate diagnosis and lasting repairs.
          </p>
          {" "}
          <div className="process-steps stagger">
            {" "}
            <div className="process-step fade-up">
              {" "}
              <div className="process-step__num">
                01
              </div>
              {" "}
              <h3 className="process-step__title">
                {"Intake & Scan"}
              </h3>
              {" "}
              <p className="process-step__desc">
                Full system scan with OBD-II and proprietary diagnostic tools to identify all fault codes.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step fade-up">
              {" "}
              <div className="process-step__num">
                02
              </div>
              {" "}
              <h3 className="process-step__title">
                Analysis Report
              </h3>
              {" "}
              <p className="process-step__desc">
                Detailed diagnostic report with root-cause analysis and transparent repair recommendations.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step fade-up">
              {" "}
              <div className="process-step__num">
                03
              </div>
              {" "}
              <h3 className="process-step__title">
                Precision Repair
              </h3>
              {" "}
              <p className="process-step__desc">
                Certified technicians perform repairs using OEM-grade parts and factory-spec procedures.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step fade-up">
              {" "}
              <div className="process-step__num">
                04
              </div>
              {" "}
              <h3 className="process-step__title">
                {"QA & Handoff"}
              </h3>
              {" "}
              <p className="process-step__desc">
                Multi-point quality check, system calibration, and a full walkthrough before vehicle release.
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section__label reveal">
            // Testimonials
          </div>
          {" "}
          <h2 className="section__title reveal">
            What Our Clients Say
          </h2>
          {" "}
          <p className="section__sub fade-up">
            Real feedback from vehicle owners who trust CEPAIR with their car electronics.
          </p>
          {" "}
          <div className="testimonials-grid stagger">
            {" "}
            <div className="testimonial fade-up">
              {" "}
              <div className="testimonial__stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              {" "}
              <p className="testimonial__text">
                "They diagnosed a parasitic drain that two other shops missed. My battery issue was resolved in under two hours. Incredible expertise."
              </p>
              {" "}
              <div className="testimonial__author">
                {" "}
                <div className="testimonial__avatar">
                  MK
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial__name">
                    Marcus K.
                  </div>
                  {" "}
                  <div className="testimonial__role">
                    BMW 5 Series Owner
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial fade-up">
              {" "}
              <div className="testimonial__stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              {" "}
              <p className="testimonial__text">
                "Full audio overhaul — new head unit, component speakers, and a sealed sub. The sound staging is perfect. Worth every penny."
              </p>
              {" "}
              <div className="testimonial__author">
                {" "}
                <div className="testimonial__avatar">
                  SR
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial__name">
                    Sarah R.
                  </div>
                  {" "}
                  <div className="testimonial__role">
                    Toyota Camry Owner
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial fade-up">
              {" "}
              <div className="testimonial__stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              {" "}
              <p className="testimonial__text">
                "Apple CarPlay install was seamless — looks factory. The team even helped me choose the right unit for my dashboard layout."
              </p>
              {" "}
              <div className="testimonial__author">
                {" "}
                <div className="testimonial__avatar">
                  DL
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial__name">
                    David L.
                  </div>
                  {" "}
                  <div className="testimonial__role">
                    Ford F-150 Owner
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
      <section className="contact-cta section--dark">
        {" "}
        <div className="contact-cta__grid" />
        {" "}
        <div className="container">
          {" "}
          <div className="contact-cta__inner">
            {" "}
            <div className="contact-cta__info">
              {" "}
              <div className="section__label reveal">
                // Contact
              </div>
              {" "}
              <h2 className="section__title reveal">
                Ready to Upgrade Your Ride?
              </h2>
              {" "}
              <p className="section__sub fade-up">
                Book a free diagnostic or get a quick quote for your next car electronics project.
              </p>
              {" "}
              <div className="contact-info-cards fade-up">
                {" "}
                <div className="contact-info-card">
                  {" "}
                  <div className="contact-info-card__icon">
                    <i className="fas fa-phone" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="contact-info-card__label">
                      Call Us
                    </div>
                    {" "}
                    <div className="contact-info-card__val">
                      +1 (555) 234-5678
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact-info-card">
                  {" "}
                  <div className="contact-info-card__icon">
                    <i className="fas fa-envelope" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="contact-info-card__label">
                      Email
                    </div>
                    {" "}
                    <div className="contact-info-card__val">
                      hello@cepair.com
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact-info-card">
                  {" "}
                  <div className="contact-info-card__icon">
                    <i className="fas fa-location-dot" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="contact-info-card__label">
                      Visit
                    </div>
                    {" "}
                    <div className="contact-info-card__val">
                      482 Electronics Blvd, Austin, TX
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
            <div className="fade-up">
              {" "}
              <form id="contact-form" className="contact-form">
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="name">
                      Full Name
                    </label>
                    {" "}
                    <input type="text" id="name" placeholder="John Doe" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="email">
                      Email
                    </label>
                    {" "}
                    <input type="email" id="email" placeholder="john@email.com" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="phone">
                      Phone
                    </label>
                    {" "}
                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="service">
                      Service Needed
                    </label>
                    {" "}
                    <select id="service">
                      {" "}
                      <option value="">
                        Select a service
                      </option>
                      {" "}
                      <option>
                        Audio System Install
                      </option>
                      {" "}
                      <option>
                        Electronic Diagnostics
                      </option>
                      {" "}
                      <option>
                        Infotainment Upgrade
                      </option>
                      {" "}
                      <option>
                        {"Wiring & Harness Repair"}
                      </option>
                      {" "}
                      <option>
                        {"Camera & Sensors"}
                      </option>
                      {" "}
                      <option>
                        Security Systems
                      </option>
                      {" "}
                    </select>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-group">
                  {" "}
                  <label htmlFor="message">
                    Message
                  </label>
                  {" "}
                  <textarea id="message" placeholder="Tell us about your vehicle and the issue..." />
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn--primary">
                  {" "}
                  <i className="fas fa-paper-plane" />
                  {" Send Message "}
                </button>
                {" "}
                <div className="form-success">
                  {" "}
                  <i className="fas fa-check-circle" />
                  {" Message sent! We'll get back to you within 24 hours. "}
                </div>
                {" "}
              </form>
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
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <a href="index.html" className="navbar__logo" style={{ marginBottom: "4px" }}>
                {" "}
                <span className="logo-icon">
                  <i className="fas fa-car" />
                </span>
                {" CEPAIR "}
              </a>
              {" "}
              <p className="footer__brand-desc">
                Expert car electronics repair, audio upgrades, and diagnostic services. Trusted by over 5,000 vehicle owners across Austin, TX.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="X / Twitter">
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
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__heading">
                Quick Links
              </div>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="about.html">
                  About Us
                </a>
                {" "}
                <a href="services.html">
                  Our Services
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
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
            <div>
              {" "}
              <div className="footer__heading">
                Services
              </div>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="services.html">
                  Audio Installation
                </a>
                {" "}
                <a href="services.html">
                  Diagnostics
                </a>
                {" "}
                <a href="services.html">
                  Infotainment
                </a>
                {" "}
                <a href="services.html">
                  Wiring Repair
                </a>
                {" "}
                <a href="services.html">
                  Security Systems
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__heading">
                Business Hours
              </div>
              {" "}
              <div className="footer__hours-row">
                <span>
                  Mon — Fri
                </span>
                <span className="footer__hours-val">
                  8:00 AM — 6:00 PM
                </span>
              </div>
              {" "}
              <div className="footer__hours-row">
                <span>
                  Saturday
                </span>
                <span className="footer__hours-val">
                  9:00 AM — 3:00 PM
                </span>
              </div>
              {" "}
              <div className="footer__hours-row">
                <span>
                  Sunday
                </span>
                <span className="footer__hours-val">
                  Closed
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              {"© "}
              <span id="current-year" />
              {" CEPAIR. All rights reserved."}
            </span>
            {" "}
            <span>
              Car Electronics Repair Specialists
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fas fa-chevron-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
