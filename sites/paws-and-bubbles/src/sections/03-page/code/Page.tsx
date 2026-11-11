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
              Paws & Bubbles
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
              ✦ Where pets get pampered
            </div>
            {" "}
            <h1 className="hero-title reveal">
              {"Fresh, Fluffy "}
              <em>
                & Happy
              </em>
              {" at Paws & Bubbles"}
            </h1>
            {" "}
            <p className="hero-desc reveal">
              Gentle dog and cat grooming with natural shampoos and certified groomers, in a calm, welcoming salon your pet will love.
            </p>
            {" "}
            <div className="hero-actions reveal">
              {" "}
              <a href="contact.html" className="btn btn--rose">
                Book a Groom
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
              <img src={a0} alt="Groomed poodle at Paws & Bubbles" />
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
                  Gentle Handling
                </strong>
                {"Certified groomers you can trust"}
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
              Grooming Tailored to Your Pet
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              From a quick bath to a full makeover, every service uses natural shampoos and a lot of patience.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a1} alt="Full groom" />
              </div>
              {" "}
              <h3 className="service-card-title">
                {"Full Groom"}
              </h3>
              {" "}
              <p className="service-card-desc">
                Bath, brush, breed-style haircut, nail trim and ear clean.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a2} alt="Bath and brush" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Bath & Brush
              </h3>
              {" "}
              <p className="service-card-desc">
                A warm bath with natural shampoo and a soft, thorough brush-out.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a3} alt="Nail trim" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Nail Trim
              </h3>
              {" "}
              <p className="service-card-desc">
                Quick, careful trims that keep paws comfortable.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a4} alt="De-shedding" />
              </div>
              {" "}
              <h3 className="service-card-title">
                {"De-shedding"}
              </h3>
              {" "}
              <p className="service-card-desc">
                Undercoat care that means less loose hair around your home.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a5} alt="Puppy's first groom" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Puppy's First Groom
              </h3>
              {" "}
              <p className="service-card-desc">
                A short, happy first visit that builds confidence for life.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
              </span>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-img">
                <img src={a6} alt="Cat grooming" />
              </div>
              {" "}
              <h3 className="service-card-title">
                Cat Grooming
              </h3>
              {" "}
              <p className="service-card-desc">
                Calm, quiet grooming for cats, with breaks whenever they need one.
              </p>
              {" "}
              <span className="service-card-price">
                Price on request
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
              <img src={a7} alt="Inside the Paws & Bubbles salon" />
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="section-label">
                About Us
              </div>
              {" "}
              <h2 className="split-title">
                A Happy Place for Every Pet
              </h2>
              {" "}
              <p className="split-text">
                At Paws & Bubbles, certified groomers take their time, handle every pet gently and use natural shampoos, so dogs and cats leave calm, clean and happy.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Certified, experienced groomers
                </li>
                {" "}
                <li>
                  Natural shampoos, kind to skin and coat
                </li>
                {" "}
                <li>
                  A calm, gentle space for nervous pets
                </li>
                {" "}
                <li>
                  Dogs and cats welcome
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
                    Happy Pets
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
                Years Grooming
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                8,000
              </div>
              <div className="stat-label">
                Happy Pets
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                30+
              </div>
              <div className="stat-label">
                Grooms
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                4.9★
              </div>
              <div className="stat-label">
                Pet Parent Rating
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
              The Groomers Behind the Fluff
            </h2>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a8} alt="Groomer" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Groomer name
                </div>
                {" "}
                <div className="team-card-role">
                  {"Lead Groomer"}
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
                <img src={a9} alt="Groomer" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Groomer name
                </div>
                {" "}
                <div className="team-card-role">
                  {"Cat Specialist"}
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
                <img src={a10} alt="Groomer" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Groomer name
                </div>
                {" "}
                <div className="team-card-role">
                  De-shedding Pro
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
                <img src={a11} alt="Groomer" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Groomer name
                </div>
                {" "}
                <div className="team-card-role">
                  {"Puppy Groom Expert"}
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
              What Pet Parents Say
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
                "Our nervous rescue came home relaxed and smelling amazing. You can tell they really take their time."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a12} alt="Pet parent" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Client name
                  </div>
                  <div className="testimonial-card-role">
                    Full groom
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
                "Finally a groomer my cat doesn't hate. Gentle, calm and her coat looks beautiful."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a13} alt="Pet parent" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Client name
                  </div>
                  <div className="testimonial-card-role">
                    Cat grooming
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
                "Our puppy's first groom was such a positive experience. She can't wait to go back!"
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a14} alt="Pet parent" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Client name
                  </div>
                  <div className="testimonial-card-role">
                    Puppy's first groom
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
            Your Pet's Pamper Day Starts Here
          </h2>
          {" "}
          <p className="cta-desc">
            Book a grooming appointment today. We'd love to meet your dog or cat.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
            Book a Groom
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
                Paws & Bubbles
                <span>
                  .
                </span>
              </div>
              <p className="footer-brand-desc">
                Gentle dog and cat grooming with natural shampoos and certified groomers.
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
                  Your address here
                </a>
                <a href="#" className="footer-link">
                  City, postcode
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
                  Opening hours here
                </a>
                <a href="#" className="footer-link">
                  
                </a>
                <a href="contact.html" className="footer-link">
                  Book a Groom
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
              {" Paws & Bubbles. All rights reserved."}
            </span>
            <span>
              Made with love for pets ✦
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
