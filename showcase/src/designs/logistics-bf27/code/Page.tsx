// Converted from the HTML template logistics-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/about.webp";
import a2 from "./assets/service-1.webp";
import a3 from "./assets/service-2.webp";
import a4 from "./assets/service-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-logistics-bf27">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <div className="logo-icon">
              <i className="fas fa-truck-fast" />
            </div>
            {" "}
            <div className="logo-text">
              LOGIST
              <span>
                I
              </span>
              CA
            </div>
            {" "}
          </a>
          {" "}
          <nav className="nav">
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
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header-right">
            {" "}
            <div className="header-phone">
              {" "}
              <i className="fas fa-headset" />
              {" "}
              <span>
                +1 (800) 555-LOGI
              </span>
              {" "}
            </div>
            {" "}
            <a href="contact.html" className="btn btn-primary btn-sm">
              Get Quote
            </a>
            {" "}
            <div className="burger">
              {" "}
              <span />
              {" "}
              <span />
              {" "}
              <span />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="nav-overlay" />
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Logistics freight operations" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-label">
              {" "}
              <i className="fas fa-globe" />
              {" Global Supply Chain Solutions "}
            </div>
            {" "}
            <h1 className="hero-title">
              {"Moving the World, "}
              <span>
                On Time.
              </span>
            </h1>
            {" "}
            <p className="hero-text">
              {" From origin to destination, we deliver reliability. End-to-end freight forwarding, warehousing, and logistics services trusted by over 2,000 companies worldwide. "}
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary btn-lg">
                {" "}
                <i className="fas fa-arrow-right" />
                {" Request a Quote "}
              </a>
              {" "}
              <a href="services.html" className="btn btn-outline btn-lg">
                {" "}
                <i className="fas fa-play" />
                {" Our Services "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number" data-count="350" data-suffix="+">
                  0
                </div>
                {" "}
                <div className="hero-stat-label">
                  Destinations Covered
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number" data-count="2000" data-suffix="+">
                  0
                </div>
                {" "}
                <div className="hero-stat-label">
                  Companies Served
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <div className="hero-stat-number" data-count="99" data-suffix="%">
                  0
                </div>
                {" "}
                <div className="hero-stat-label">
                  On-Time Delivery
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
          <div className="split">
            {" "}
            <div className="split-image reveal-left">
              {" "}
              <img src={a1} alt="LOGISTICA warehouse operations" />
              {" "}
              <div className="split-image-badge">
                {" "}
                <i className="fas fa-award" />
                {" 25+ Years of Excellence "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-content reveal-right">
              {" "}
              <div className="section-label">
                About LOGISTICA
              </div>
              {" "}
              <h2>
                Trusted Logistics Partner Since 1999
              </h2>
              {" "}
              <p>
                {" We started with a single truck and a promise: deliver on time, every time. Today, LOGISTICA operates a global network spanning 60+ countries with integrated freight, warehousing, and customs solutions that keep the world moving. "}
              </p>
              {" "}
              <div className="feature-list">
                {" "}
                <div className="feature-item">
                  {" "}
                  <div className="feature-icon">
                    <i className="fas fa-earth-americas" />
                  </div>
                  {" "}
                  <div className="feature-text">
                    {" "}
                    <h4>
                      Global Network
                    </h4>
                    {" "}
                    <p>
                      Operations across 60+ countries with strategic partnerships in every major trade lane.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="feature-item">
                  {" "}
                  <div className="feature-icon">
                    <i className="fas fa-clock" />
                  </div>
                  {" "}
                  <div className="feature-text">
                    {" "}
                    <h4>
                      Guaranteed Transit Times
                    </h4>
                    {" "}
                    <p>
                      Precision scheduling with real-time tracking and proactive delay notifications.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn-primary">
                {" Learn More About Us "}
                <i className="fas fa-arrow-right" />
                {" "}
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
      <section className="section bg-gray">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              Our Services
            </div>
            {" "}
            <h2 className="section-title">
              Comprehensive Logistics Solutions
            </h2>
            {" "}
            <p className="section-subtitle">
              {" From air freight to warehousing, we provide integrated supply chain services tailored to your business needs. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3 stagger">
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a2} alt="Air freight services" />
                {" "}
                <div className="service-card-number">
                  01
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Air Freight
                </h3>
                {" "}
                <p>
                  Fast, reliable air cargo solutions with direct flights to major global hubs. Priority handling for time-sensitive shipments.
                </p>
                {" "}
                <a href="services.html" className="btn-arrow">
                  {" Learn More "}
                  <i className="fas fa-arrow-right" />
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a3} alt="Ocean freight services" />
                {" "}
                <div className="service-card-number">
                  02
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Ocean Freight
                </h3>
                {" "}
                <p>
                  Full container load and less-than-container load options with competitive rates and reliable schedules.
                </p>
                {" "}
                <a href="services.html" className="btn-arrow">
                  {" Learn More "}
                  <i className="fas fa-arrow-right" />
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a4} alt="Road freight services" />
                {" "}
                <div className="service-card-number">
                  03
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Road Freight
                </h3>
                {" "}
                <p>
                  Extensive overland network with full truckload and partial load options across domestic and cross-border routes.
                </p>
                {" "}
                <a href="services.html" className="btn-arrow">
                  {" Learn More "}
                  <i className="fas fa-arrow-right" />
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
      <section className="section tracking-section">
        {" "}
        <div className="container">
          {" "}
          <div className="split">
            {" "}
            <div className="split-content reveal-left">
              {" "}
              <div className="section-label">
                Real-Time Visibility
              </div>
              {" "}
              <h2>
                Track Your Shipment Every Step of the Way
              </h2>
              {" "}
              <p>
                {" Our advanced tracking platform gives you complete visibility into your supply chain. Monitor your cargo in real-time, receive proactive alerts, and access detailed analytics from anywhere in the world. "}
              </p>
              {" "}
              <div className="feature-list">
                {" "}
                <div className="feature-item">
                  {" "}
                  <div className="feature-icon">
                    <i className="fas fa-satellite-dish" />
                  </div>
                  {" "}
                  <div className="feature-text">
                    {" "}
                    <h4>
                      GPS-Enabled Tracking
                    </h4>
                    {" "}
                    <p>
                      Precise location updates every 30 minutes for all in-transit shipments.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="feature-item">
                  {" "}
                  <div className="feature-icon">
                    <i className="fas fa-bell" />
                  </div>
                  {" "}
                  <div className="feature-text">
                    {" "}
                    <h4>
                      Instant Notifications
                    </h4>
                    {" "}
                    <p>
                      Email and SMS alerts for key milestones and any transit disruptions.
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
            <div className="reveal-right">
              {" "}
              <div className="tracking-box">
                {" "}
                <h4 style={{ marginBottom: "0.5rem", fontFamily: "var(--font-heading)" }}>
                  Quick Track
                </h4>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "var(--gray-500)", marginBottom: "1.5rem" }}>
                  Enter your tracking number to get real-time status updates.
                </p>
                {" "}
                <form data-form="tracking">
                  {" "}
                  <div className="tracking-form">
                    {" "}
                    <input type="text" className="tracking-input" name="tracking-number" placeholder="Enter tracking number (e.g. LG-2024-001234)" required={true} />
                    {" "}
                    <button type="submit" className="btn btn-primary">
                      {" "}
                      <i className="fas fa-search" />
                      {" Track "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </form>
                {" "}
                <div className="tracking-result">
                  {" "}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    {" "}
                    <div>
                      {" "}
                      <strong style={{ color: "var(--dark)" }}>
                        {"Shipment: "}
                        <span className="tracking-id">
                          LG-2024-001234
                        </span>
                      </strong>
                      {" "}
                      <p style={{ margin: "0", fontSize: "0.875rem", color: "var(--gray-500)" }}>
                        Estimated delivery: Aug 15, 2026
                      </p>
                      {" "}
                    </div>
                    {" "}
                    <span style={{ background: "var(--orange)", color: "white", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" }}>
                      IN TRANSIT
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="tracking-steps">
                    {" "}
                    <div className="tracking-step completed">
                      {" "}
                      <div className="tracking-step-dot">
                        <i className="fas fa-check" />
                      </div>
                      {" "}
                      <div className="tracking-step-label">
                        Picked Up
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="tracking-step completed">
                      {" "}
                      <div className="tracking-step-dot">
                        <i className="fas fa-check" />
                      </div>
                      {" "}
                      <div className="tracking-step-label">
                        In Customs
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="tracking-step active">
                      {" "}
                      <div className="tracking-step-dot">
                        <i className="fas fa-truck" />
                      </div>
                      {" "}
                      <div className="tracking-step-label">
                        In Transit
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="tracking-step">
                      {" "}
                      <div className="tracking-step-dot">
                        <i className="fas fa-box" />
                      </div>
                      {" "}
                      <div className="tracking-step-label">
                        Delivered
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
          <div className="stats-grid stagger">
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="350" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-label">
                Destinations
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="25" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="15000" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-label">
                Shipments / Year
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item">
              {" "}
              <div className="stat-number" data-count="99" data-suffix="%">
                0
              </div>
              {" "}
              <div className="stat-label">
                On-Time Rate
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
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              Testimonials
            </div>
            {" "}
            <h2 className="section-title">
              What Our Clients Say
            </h2>
            {" "}
            <p className="section-subtitle">
              {" Trusted by leading businesses worldwide for reliable logistics solutions. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3 stagger">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" LOGISTICA transformed our supply chain. Their air freight service reduced our transit times by 40% and the real-time tracking gives us complete peace of mind. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  JM
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h5>
                    James Mitchell
                  </h5>
                  {" "}
                  <p>
                    Supply Chain Director, TechFlow Inc.
                  </p>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
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
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" We have been using LOGISTICA for our ocean freight needs for over 5 years. Their reliability and competitive rates have made them an invaluable partner for our global operations. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  SR
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h5>
                    Sarah Rodriguez
                  </h5>
                  {" "}
                  <p>
                    Operations Manager, GlobalTrade Co.
                  </p>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
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
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                “
              </div>
              {" "}
              <p className="testimonial-text">
                {" The customs clearance team at LOGISTICA is exceptional. They handle all documentation seamlessly and have saved us countless hours of administrative work. "}
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  DK
                </div>
                {" "}
                <div className="testimonial-info">
                  {" "}
                  <h5>
                    David Kim
                  </h5>
                  {" "}
                  <p>
                    CEO, Pacific Rim Exports
                  </p>
                  {" "}
                  <div className="testimonial-stars">
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star" />
                    {" "}
                    <i className="fas fa-star-half-alt" />
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
      <section className="cta-section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content reveal">
            {" "}
            <h2>
              Ready to Streamline Your Supply Chain?
            </h2>
            {" "}
            <p>
              {" Get a free consultation and custom quote within 24 hours. Let LOGISTICA handle your logistics so you can focus on growing your business. "}
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="contact.html" className="btn btn-dark btn-lg">
                {" "}
                <i className="fas fa-envelope" />
                {" Get Free Quote "}
              </a>
              {" "}
              <a href="tel:+18005555644" className="btn btn-outline btn-lg">
                {" "}
                <i className="fas fa-phone" />
                {" Call +1 (800) 555-LOGI "}
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
            <div className="footer-about">
              {" "}
              <a href="index.html" className="logo" style={{ marginBottom: "1rem" }}>
                {" "}
                <div className="logo-icon">
                  <i className="fas fa-truck-fast" />
                </div>
                {" "}
                <div className="logo-text" style={{ color: "white" }}>
                  LOGIST
                  <span>
                    I
                  </span>
                  CA
                </div>
                {" "}
              </a>
              {" "}
              <p>
                {" Moving the world, on time. Comprehensive logistics and supply chain solutions for businesses that demand reliability and performance. "}
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
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
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html">
                  Air Freight
                </a>
                {" "}
                <a href="services.html">
                  Ocean Freight
                </a>
                {" "}
                <a href="services.html">
                  Road Freight
                </a>
                {" "}
                <a href="services.html">
                  Warehousing
                </a>
                {" "}
                <a href="services.html">
                  Customs Clearance
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="about.html">
                  About Us
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
                {" "}
                <a href="services.html">
                  Services
                </a>
                {" "}
                <a href="#">
                  Careers
                </a>
                {" "}
                <a href="#">
                  News
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
              <div className="footer-links">
                {" "}
                <a href="#">
                  <i className="fas fa-map-marker-alt" style={{ marginRight: "8px", color: "var(--orange)" }} />
                  {" 1200 Logistics Way, New York, NY 10001"}
                </a>
                {" "}
                <a href="tel:+18005555644">
                  <i className="fas fa-phone" style={{ marginRight: "8px", color: "var(--orange)" }} />
                  {" +1 (800) 555-LOGI"}
                </a>
                {" "}
                <a href="mailto:info@logistica.com">
                  <i className="fas fa-envelope" style={{ marginRight: "8px", color: "var(--orange)" }} />
                  {" info@logistica.com"}
                </a>
                {" "}
              </div>
              {" "}
              <div className="footer-newsletter-input" style={{ marginTop: "1.5rem" }}>
                {" "}
                <form className="newsletter-form" style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                  {" "}
                  <input type="email" placeholder="Your email" required={true} />
                  {" "}
                  <button type="submit" className="btn btn-primary btn-sm">
                    Subscribe
                  </button>
                  {" "}
                </form>
                {" "}
              </div>
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
              {" LOGISTICA. All rights reserved."}
            </p>
            {" "}
            <p>
              Designed for global supply chain excellence.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <a href="#" className="back-to-top" aria-label="Back to top">
        {" "}
        <i className="fas fa-chevron-up" />
        {" "}
      </a>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
