// Converted from the HTML template express-delivery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/about-1.webp";
import a2 from "./assets/testimonial-1.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-express-delivery-0b48">
      {" "}
      {" "}
      <header className="sitehead">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="mark">
            {" "}
            <span className="glyph">
              ⚡
            </span>
            {" FAST"}
            <span>
              ER
            </span>
            {" "}
          </a>
          {" "}
          <nav id="mainnav">
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
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Get a Quote
          </a>
          {" "}
          <button className="burger" aria-label="Toggle navigation" aria-expanded="false">
            ☰
          </button>
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
          <img src={a0} alt="Fast delivery courier in action" loading="eager" />
          {" "}
        </div>
        {" "}
        <div className="fast-badge">
          {" "}
          <span className="bolt">
            ⚡
          </span>
          {" Fast Delivery "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-eyebrow">
              {" "}
              <span className="speed-icon">
                ⚡
              </span>
              {" Speed You Can Trust "}
            </div>
            {" "}
            <h1>
              {"Delivering at the "}
              <em>
                Speed of Now
              </em>
            </h1>
            {" "}
            <p className="lead">
              From local rush to international freight, FASTER moves your packages with precision tracking, real-time updates, and guaranteed delivery windows.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="services.html" className="btn-primary">
                Explore Services →
              </a>
              {" "}
              <a href="contact.html" className="btn-ghost">
                Contact Us
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-track-bar">
              {" "}
              <input type="text" placeholder="Enter tracking number..." />
              {" "}
              <button type="button">
                Track Now
              </button>
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
      <section className="stats-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <h3 data-count="50">
                0
              </h3>
              {" "}
              <p>
                Countries Served
              </p>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <h3 data-count="2">
                0
              </h3>
              {" "}
              <p>
                Million+ Deliveries
              </p>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <h3 data-count="99">
                0
              </h3>
              {" "}
              <p>
                % On-Time Rate
              </p>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <h3 data-count="24">
                0
              </h3>
              {" "}
              <p>
                Hour Support
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
      <section className="py-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <p className="section-label">
              What We Offer
            </p>
            {" "}
            <h2 className="section-title">
              Delivery Solutions for Every Need
            </h2>
            {" "}
            <p className="section-subtitle">
              Whether it's across town or across the globe, we have a service designed to match your timeline and budget.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-icon">
                ⚡
              </div>
              {" "}
              <h3>
                Express Delivery
              </h3>
              {" "}
              <p>
                Same-day and next-day delivery for urgent shipments. Guaranteed windows with real-time GPS tracking and instant notifications.
              </p>
              {" "}
              <a href="services.html" className="card-link">
                Learn More →
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-icon">
                📦
              </div>
              {" "}
              <h3>
                Standard Shipping
              </h3>
              {" "}
              <p>
                Cost-effective ground and air shipping for everyday parcels. Reliable 2-5 business day delivery with full tracking visibility.
              </p>
              {" "}
              <a href="services.html" className="card-link">
                Learn More →
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-icon">
                🌎
              </div>
              {" "}
              <h3>
                International Freight
              </h3>
              {" "}
              <p>
                Seamless cross-border logistics with customs clearance, freight consolidation, and door-to-door tracking across 50+ countries.
              </p>
              {" "}
              <a href="services.html" className="card-link">
                Learn More →
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
      <section className="py-section" style={{ background: "var(--light)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="about-row">
            {" "}
            <div className="about-img-wrap reveal">
              {" "}
              <img src={a1} alt="FASTER delivery team loading packages" />
              {" "}
              <div className="about-img-badge">
                Delivering Since 2012
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-text">
              {" "}
              <p className="section-label">
                Why FASTER
              </p>
              {" "}
              <h2 className="section-title">
                Speed Meets Reliability
              </h2>
              {" "}
              <p>
                Founded in 2012, FASTER started with a single van and a bold promise: deliver faster than anyone else. Today, we operate a fleet of 500+ vehicles and a global network spanning 50 countries.
              </p>
              {" "}
              <p>
                Our technology-driven approach combines real-time route optimization with human care, ensuring every package arrives on time and intact.
              </p>
              {" "}
              <ul className="about-features">
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Real-time GPS Tracking"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Insured Shipments"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" 24/7 Customer Support"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Eco-Friendly Fleet"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn-primary">
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
      <section className="py-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <p className="section-label">
              How It Works
            </p>
            {" "}
            <h2 className="section-title">
              Three Steps to Faster Delivery
            </h2>
            {" "}
            <p className="section-subtitle">
              No complex portals. No hidden fees. Just straightforward shipping from pickup to doorstep.
            </p>
            {" "}
          </div>
          {" "}
          <div className="steps-grid">
            {" "}
            <div className="step-item reveal">
              {" "}
              <div className="step-num">
                1
              </div>
              {" "}
              <h3>
                Book Your Pickup
              </h3>
              {" "}
              <p>
                Enter your shipment details online or via our app. Choose express, standard, or international — we handle the rest.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-item reveal">
              {" "}
              <div className="step-num">
                2
              </div>
              {" "}
              <h3>
                {"We Collect & Ship"}
              </h3>
              {" "}
              <p>
                Our driver arrives at your door, scans the package, and it enters our optimized logistics network instantly.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-item reveal">
              {" "}
              <div className="step-num">
                3
              </div>
              {" "}
              <h3>
                {"Track & Receive"}
              </h3>
              {" "}
              <p>
                Follow your package in real time with GPS updates. Get notified at every milestone until it's delivered.
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
      <section className="py-section" style={{ background: "var(--light)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <p className="section-label">
              Client Stories
            </p>
            {" "}
            <h2 className="section-title">
              Trusted by Thousands
            </h2>
            {" "}
          </div>
          {" "}
          <div className="testimonials-wrap reveal">
            {" "}
            <div className="testimonial-track">
              {" "}
              {" "}
              <div className="testimonial-slide">
                {" "}
                <img src={a2} alt="Sarah Mitchell" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-body">
                  {" "}
                  <blockquote>
                    FASTER changed the way our e-commerce business handles fulfillment. Their express service cut our delivery times in half, and customer complaints dropped to nearly zero.
                  </blockquote>
                  {" "}
                  <p className="testimonial-name">
                    Sarah Mitchell
                  </p>
                  {" "}
                  <p className="testimonial-role">
                    Head of Operations, Bloom Commerce
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="testimonial-slide">
                {" "}
                <img src={a2} alt="James Carter" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-body">
                  {" "}
                  <blockquote>
                    We ship medical supplies across 12 countries. FASTER's international freight team handles customs and logistics seamlessly — we haven't missed a deadline in three years.
                  </blockquote>
                  {" "}
                  <p className="testimonial-name">
                    James Carter
                  </p>
                  {" "}
                  <p className="testimonial-role">
                    Supply Chain Director, MedFlow Inc.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="testimonial-slide">
                {" "}
                <img src={a2} alt="Lina Park" className="testimonial-avatar" />
                {" "}
                <div className="testimonial-body">
                  {" "}
                  <blockquote>
                    Their tracking transparency is unmatched. I can see exactly where every shipment is at any moment. That level of control gives us and our clients real peace of mind.
                  </blockquote>
                  {" "}
                  <p className="testimonial-name">
                    Lina Park
                  </p>
                  {" "}
                  <p className="testimonial-role">
                    Logistics Manager, Urban Goods Co.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="carousel-controls">
              {" "}
              <button className="carousel-btn prev" aria-label="Previous testimonial">
                ←
              </button>
              {" "}
              <button className="carousel-dot active" aria-label="Slide 1" />
              {" "}
              <button className="carousel-dot" aria-label="Slide 2" />
              {" "}
              <button className="carousel-dot" aria-label="Slide 3" />
              {" "}
              <button className="carousel-btn next" aria-label="Next testimonial">
                →
              </button>
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
      <section className="cta-section py-section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content">
            {" "}
            <h2>
              Ready to Ship Smarter?
            </h2>
            {" "}
            <p>
              Join over 10,000 businesses that trust FASTER for reliable, lightning-fast deliveries worldwide.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="contact.html" className="btn-primary">
                Get a Free Quote →
              </a>
              {" "}
              <a href="services.html" className="btn-ghost">
                View All Services
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
              <a href="index.html" className="mark">
                {" "}
                <span className="glyph">
                  ⚡
                </span>
                {" FAST"}
                <span>
                  ER
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Moving packages across 50+ countries with speed, transparency, and care. Your delivery partner for the fast lane.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  ℒ
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  ☉
                </a>
                {" "}
              </div>
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
                    Express Delivery
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Standard Shipping
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    International Freight
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col footer-contact">
              {" "}
              <h4>
                Contact Us
              </h4>
              {" "}
              <p>
                <span className="icon">
                  📍
                </span>
                {" 1200 Logistics Ave, Suite 400, Austin, TX 78701"}
              </p>
              {" "}
              <p>
                <span className="icon">
                  📞
                </span>
                {" +1 (512) 555-0199"}
              </p>
              {" "}
              <p>
                <span className="icon">
                  ✉
                </span>
                {" hello@fasterdelivers.com"}
              </p>
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
              {" FASTER Express Delivery. All rights reserved."}
            </p>
            {" "}
            <p>
              Designed with ⚡ for speed.
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
