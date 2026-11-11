// Converted from the HTML template electrical-services-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/banner-img.webp";
import a1 from "./assets/about-1.webp";
import a2 from "./assets/commercial-1.webp";
import a3 from "./assets/residential-1.webp";
import a4 from "./assets/industrial-1.webp";
import a5 from "./assets/commercial-2.webp";
import a6 from "./assets/residential-2.webp";
import a7 from "./assets/industrial-2.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-electrical-services-bf81">
      {" "}
      {" "}
      <header className="header header--transparent">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo__bolt">
              {" "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
              </svg>
              {" "}
            </span>
            {" Electra "}
          </a>
          {" "}
          <nav className="nav-links">
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
          <a href="contact.html" className="btn btn--yellow nav-cta">
            Get a Quote
          </a>
          {" "}
          <button className="burger" aria-label="Menu">
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
      <div className="mobile-nav">
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
        <a href="contact.html" className="btn btn--yellow">
          Get a Quote
        </a>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__bg">
          {" "}
          <img src={a0} alt="Electrical contractor at work" />
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="hero__circuit" />
        {" "}
        <div className="hero__bolt">
          ⚡
        </div>
        {" "}
        <div className="container hero__content">
          {" "}
          <div className="hero__badge">
            {" "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
            </svg>
            {" Licensed & Insured Electrical Experts "}
          </div>
          {" "}
          <h1 className="hero__title">
            {"Powering Your World With "}
            <span>
              {"Precision & Safety"}
            </span>
          </h1>
          {" "}
          <p className="hero__desc">
            From residential rewiring to industrial power systems, Electra delivers reliable, code-compliant electrical solutions backed by 25+ years of proven expertise.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="services.html" className="btn btn--yellow">
              {" "}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
              </svg>
              {" Our Services "}
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline">
              Request Estimate
            </a>
            {" "}
          </div>
          {" "}
          <div className="hero__stats">
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="25">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="2400">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Projects Completed
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="100">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Licensed Electricians
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
      <section className="section circuit-bg">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="reveal-left">
              {" "}
              <span className="section-label">
                About Electra
              </span>
              {" "}
              <h2 className="section-title">
                Trusted Electrical Solutions Since 1998
              </h2>
              {" "}
              <p className="section-desc mb-lg">
                We combine cutting-edge technology with time-tested craftsmanship to deliver electrical systems that are safe, efficient, and built to last. Our team of licensed electricians handles everything from simple repairs to complex industrial installations.
              </p>
              {" "}
              <div className="about-features">
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Emergency Service
                    </h4>
                    {" "}
                    <p>
                      24/7 rapid response for urgent electrical issues
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      {"Licensed & Insured"}
                    </h4>
                    {" "}
                    <p>
                      Full compliance with national electrical codes
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      On-Time Delivery
                    </h4>
                    {" "}
                    <p>
                      We respect your schedule and deadlines
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Quality Guarantee
                    </h4>
                    {" "}
                    <p>
                      Workmanship warranty on every project
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn--primary">
                Learn More About Us
              </a>
              {" "}
            </div>
            {" "}
            <div className="about-img reveal-right">
              {" "}
              <img src={a1} alt="Electra electrical team at work" />
              {" "}
              <div className="about-img__badge">
                {" "}
                <strong>
                  25+
                </strong>
                {" Years of Excellence "}
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
      <section className="section section--light">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-xl reveal">
            {" "}
            <span className="section-label">
              What We Do
            </span>
            {" "}
            <h2 className="section-title">
              Comprehensive Electrical Services
            </h2>
            {" "}
            <p className="section-desc centered">
              From initial consultation to final inspection, we deliver end-to-end electrical solutions tailored to your specific needs and budget.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid reveal-stagger">
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a2} alt="Commercial electrical services" />
                {" "}
                <span className="service-card__tag">
                  Commercial
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Commercial Wiring
                </h3>
                {" "}
                <p>
                  Complete electrical fit-outs for offices, retail spaces, and commercial buildings with code-compliant installations.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a3} alt="Residential electrical services" />
                {" "}
                <span className="service-card__tag">
                  Residential
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Home Electrical
                </h3>
                {" "}
                <p>
                  Panel upgrades, rewiring, lighting design, and whole-home surge protection for modern living.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a4} alt="Industrial electrical services" />
                {" "}
                <span className="service-card__tag">
                  Industrial
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Industrial Power
                </h3>
                {" "}
                <p>
                  High-voltage installations, motor controls, PLC systems, and preventive maintenance for facilities.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a5} alt="Emergency electrical services" />
                {" "}
                <span className="service-card__tag">
                  Emergency
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon" style={{ background: "rgba(255,179,0,0.12)", color: "var(--yellow)" }}>
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Emergency Repairs
                </h3>
                {" "}
                <p>
                  Round-the-clock emergency response for power outages, electrical faults, and safety hazards.
                </p>
                {" "}
                <a href="contact.html" className="service-card__link">
                  {" Call Now "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a6} alt="Lighting installation services" />
                {" "}
                <span className="service-card__tag">
                  Lighting
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Lighting Design
                </h3>
                {" "}
                <p>
                  LED retrofits, landscape lighting, smart controls, and energy-efficient lighting solutions.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card__img">
                {" "}
                <img src={a7} alt="Solar panel installation" />
                {" "}
                <span className="service-card__tag">
                  Solar
                </span>
                {" "}
              </div>
              {" "}
              <div className="service-card__body">
                {" "}
                <div className="service-card__icon" style={{ background: "rgba(46,125,50,0.1)", color: "#2E7D32" }}>
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Solar Installation
                </h3>
                {" "}
                <p>
                  Grid-tied and off-grid solar panel systems with battery storage and monitoring integration.
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  {" Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-xl reveal">
            {" "}
            <span className="section-label">
              Our Work
            </span>
            {" "}
            <h2 className="section-title">
              Featured Projects
            </h2>
            {" "}
            <p className="section-desc centered">
              Browse our portfolio of completed electrical projects across residential, commercial, and industrial sectors.
            </p>
            {" "}
          </div>
          {" "}
          <div className="gallery-grid reveal-stagger">
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a2} alt="Commercial office wiring project" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Commercial
                </span>
                {" "}
                <h4>
                  Downtown Office Complex
                </h4>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a3} alt="Residential electrical upgrade" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Residential
                </span>
                {" "}
                <h4>
                  Luxury Home Rewiring
                </h4>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a4} alt="Industrial power installation" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Industrial
                </span>
                {" "}
                <h4>
                  Manufacturing Plant Upgrade
                </h4>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a5} alt="Emergency generator installation" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Emergency
                </span>
                {" "}
                <h4>
                  Backup Generator System
                </h4>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a6} alt="LED lighting installation" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Lighting
                </span>
                {" "}
                <h4>
                  Smart Home Lighting
                </h4>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item">
              {" "}
              <img src={a7} alt="Solar panel farm installation" />
              {" "}
              <div className="gallery-item__overlay">
                {" "}
                <span>
                  Solar
                </span>
                {" "}
                <h4>
                  Commercial Solar Array
                </h4>
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
      <section className="section section--dark circuit-bg">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-xl reveal">
            {" "}
            <span className="section-label" style={{ color: "var(--yellow)" }}>
              Testimonials
            </span>
            {" "}
            <h2 className="section-title">
              What Our Clients Say
            </h2>
            {" "}
            <p className="section-desc centered" style={{ color: "rgba(255,255,255,0.5)" }}>
              Hundreds of satisfied clients trust Electra for their electrical needs. Here is what they have to say.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-track reveal-stagger">
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__quote">
                “
              </div>
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
              </div>
              {" "}
              <p>
                “Electra rewired our entire 3-story office building in just two weeks. Their team was professional, clean, and completed the work ahead of schedule. Highly recommended for any commercial project.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a8} alt="Sarah Mitchell" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Mitchell
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Facility Manager, TechCorp
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__quote">
                “
              </div>
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
              </div>
              {" "}
              <p>
                “We had a critical power failure at our manufacturing facility on a Friday night. Electra's emergency team arrived within 30 minutes and had us back online before the weekend. Exceptional service.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a9} alt="James Rodriguez" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    James Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Operations Director, AutoMax
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__quote">
                “
              </div>
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {" "}
              </div>
              {" "}
              <p>
                “The solar installation by Electra has cut our energy bills by 60%. Their team handled everything from permits to final inspection. The whole process was seamless and transparent.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a10} alt="Maria Chen" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Maria Chen
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Homeowner
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
          <div className="cta-banner reveal">
            {" "}
            <div className="cta-banner__circuit" />
            {" "}
            <div>
              {" "}
              <h2>
                Ready to Power Up Your Next Project?
              </h2>
              {" "}
              <p>
                Get a free consultation and detailed estimate from our licensed electrical team.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <a href="contact.html" className="btn btn--yellow">
                {" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                </svg>
                {" Get Free Quote "}
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo" style={{ marginBottom: "0.5rem" }}>
                {" "}
                <span className="logo__bolt">
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                  </svg>
                  {" "}
                </span>
                {" Electra "}
              </a>
              {" "}
              <p>
                Delivering safe, reliable, and innovative electrical solutions for over 25 years. Licensed, insured, and committed to excellence.
              </p>
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
                <a href="services.html">
                  Commercial Wiring
                </a>
                {" "}
                <a href="services.html">
                  Residential Electrical
                </a>
                {" "}
                <a href="services.html">
                  Industrial Power
                </a>
                {" "}
                <a href="services.html">
                  Lighting Design
                </a>
                {" "}
                <a href="services.html">
                  Solar Installation
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Contact Info
              </h4>
              {" "}
              <div className="footer-contact">
                {" "}
                <a href="#">
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" 4827 Industrial Blvd, Austin, TX 78745 "}
                </a>
                {" "}
                <a href="tel:+15125550198">
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" (512) 555-0198 "}
                </a>
                {" "}
                <a href="mailto:info@electra.com">
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {" info@electra.com "}
                </a>
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
              {"© "}
              <span data-year="" />
              {" Electra Electrical Services. All rights reserved."}
            </span>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Facebook">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
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
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
