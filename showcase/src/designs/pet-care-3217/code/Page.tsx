// Converted from the HTML template pet-care-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about-1.webp";
import a3 from "./assets/price-1.webp";
import a4 from "./assets/price-2.webp";
import a5 from "./assets/price-3.webp";
import a6 from "./assets/team-1.webp";
import a7 from "./assets/team-2.webp";
import a8 from "./assets/team-3.webp";
import a9 from "./assets/team-4.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";
import a13 from "./assets/testimonial-4.webp";
import a14 from "./assets/blog-1.webp";
import a15 from "./assets/blog-2.webp";
import a16 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-pet-care-3217">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo-icon">
              🐾
            </span>
            {" PetLover "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav className="nav-links">
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
            <a href="booking.html" className="nav-link">
              Booking
            </a>
            {" "}
            <a href="blog.html" className="nav-link">
              Blog
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" id="home">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="Happy dog at pet care center" className="active" />
            {" "}
            <img src={a1} alt="Cat enjoying grooming session" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content reveal">
              {" "}
              <h1>
                {"Where Your Pets Feel Loved & Pampered"}
              </h1>
              {" "}
              <p>
                Professional grooming, cozy boarding, expert veterinary care, and refreshing spa treatments — all in one warm, trustworthy place. Your furry family members deserve the best.
              </p>
              {" "}
              <div className="hero-buttons">
                {" "}
                <a href="booking.html" className="btn btn-primary btn-lg">
                  Book Now
                </a>
                {" "}
                <a href="services.html" className="btn btn-outline btn-lg">
                  Our Services
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
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Why Choose Us
              </span>
              {" "}
              <h2 className="section-title">
                We Care Like Family
              </h2>
              {" "}
              <p className="section-desc">
                Every pet that walks through our doors is treated with the love, respect, and attention they deserve.
              </p>
              {" "}
            </div>
            {" "}
            <div className="features-grid stagger-children reveal">
              {" "}
              <div className="feature-card">
                {" "}
                <span className="feature-icon">
                  🛁
                </span>
                {" "}
                <h3>
                  Professional Grooming
                </h3>
                {" "}
                <p>
                  Expert grooming with gentle handling, from baths and trims to full styling sessions.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <span className="feature-icon">
                  🏠
                </span>
                {" "}
                <h3>
                  Luxury Boarding
                </h3>
                {" "}
                <p>
                  Cozy, climate-controlled suites with playtime, walks, and round-the-clock care.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <span className="feature-icon">
                  💉
                </span>
                {" "}
                <h3>
                  Veterinary Care
                </h3>
                {" "}
                <p>
                  On-site vet check-ups, vaccinations, and wellness plans to keep your pet healthy.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <span className="feature-icon">
                  🧖
                </span>
                {" "}
                <h3>
                  Pet Spa
                </h3>
                {" "}
                <p>
                  Relaxing spa treatments including aromatherapy, hydrotherapy, and paw massages.
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
        <section className="section" id="about">
          {" "}
          <div className="container">
            {" "}
            <div className="about-grid">
              {" "}
              <div className="about-media reveal-left">
                {" "}
                <img src={a2} alt="PetLover pet care center" style={{ aspectRatio: "3/2", objectFit: "cover", width: "100%", borderRadius: "var(--radius-md)" }} />
                {" "}
              </div>
              {" "}
              <div className="about-content reveal-right">
                {" "}
                <span className="section-label">
                  About PetLover
                </span>
                {" "}
                <h2 className="section-title">
                  A Loving Home Away From Home
                </h2>
                {" "}
                <p>
                  At PetLover, we believe every pet deserves a tail-wagging experience. Our team of certified groomers, experienced veterinarians, and passionate pet lovers work together to provide the highest standard of care.
                </p>
                {" "}
                <p>
                  From the moment you walk in, you'll feel the difference — a warm, welcoming atmosphere where your pet's happiness and well-being come first.
                </p>
                {" "}
                <div className="about-stats">
                  {" "}
                  <div className="about-stat">
                    {" "}
                    <span className="about-stat-number">
                      5K+
                    </span>
                    {" "}
                    <span className="about-stat-label">
                      Happy Pets
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="about-stat">
                    {" "}
                    <span className="about-stat-number">
                      12+
                    </span>
                    {" "}
                    <span className="about-stat-label">
                      Years Exp.
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="about-stat">
                    {" "}
                    <span className="about-stat-number">
                      4.9
                    </span>
                    {" "}
                    <span className="about-stat-label">
                      Rating
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="about.html" className="btn btn-primary" style={{ marginTop: "var(--space-md)" }}>
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
        {" "}
        <section className="section section-alt" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Our Services
              </span>
              {" "}
              <h2 className="section-title">
                Everything Your Pet Needs
              </h2>
              {" "}
              <p className="section-desc">
                From grooming to boarding, we offer a full range of premium pet care services under one roof.
              </p>
              {" "}
            </div>
            {" "}
            <div className="services-grid stagger-children reveal">
              {" "}
              <div className="service-card">
                {" "}
                <img src={a3} alt="Pet grooming service" className="service-card-img" loading="lazy" />
                {" "}
                <div className="service-card-body">
                  {" "}
                  <span className="service-card-icon">
                    🛁
                  </span>
                  {" "}
                  <h3>
                    Pet Grooming
                  </h3>
                  {" "}
                  <p>
                    Full-service grooming including bath, blow-dry, nail trim, ear cleaning, and breed-specific cuts.
                  </p>
                  {" "}
                  <a href="services.html" className="btn btn-ghost btn-sm">
                    Learn More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card">
                {" "}
                <img src={a4} alt="Dog boarding service" className="service-card-img" loading="lazy" />
                {" "}
                <div className="service-card-body">
                  {" "}
                  <span className="service-card-icon">
                    🏠
                  </span>
                  {" "}
                  <h3>
                    Dog Boarding
                  </h3>
                  {" "}
                  <p>
                    Comfortable overnight stays with supervised play, cozy bedding, and 24/7 caregiver attention.
                  </p>
                  {" "}
                  <a href="services.html" className="btn btn-ghost btn-sm">
                    Learn More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="service-card">
                {" "}
                <img src={a5} alt="Veterinary care" className="service-card-img" loading="lazy" />
                {" "}
                <div className="service-card-body">
                  {" "}
                  <span className="service-card-icon">
                    💉
                  </span>
                  {" "}
                  <h3>
                    Veterinary Care
                  </h3>
                  {" "}
                  <p>
                    Comprehensive health check-ups, vaccinations, dental care, and preventive medicine for your pet.
                  </p>
                  {" "}
                  <a href="services.html" className="btn btn-ghost btn-sm">
                    Learn More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="section-center" style={{ marginTop: "var(--space-lg)" }}>
              {" "}
              <a href="services.html" className="btn btn-primary">
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
        <section className="section" id="pricing">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Pricing Plans
              </span>
              {" "}
              <h2 className="section-title">
                Transparent, Affordable Care
              </h2>
              {" "}
              <p className="section-desc">
                Choose the plan that fits your pet's needs. No hidden fees, just premium care at fair prices.
              </p>
              {" "}
            </div>
            {" "}
            <div className="pricing-grid stagger-children reveal">
              {" "}
              <div className="pricing-card">
                {" "}
                <div className="pricing-card-header">
                  {" "}
                  <h3>
                    Basic Grooming
                  </h3>
                  {" "}
                  <p>
                    Perfect for a quick refresh
                  </p>
                  {" "}
                </div>
                {" "}
                <img src={a3} alt="Basic grooming package" className="pricing-img" loading="lazy" />
                {" "}
                <span className="pricing-amount">
                  {"$29 "}
                  <span>
                    / session
                  </span>
                </span>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    {"Bath & Blow-Dry"}
                  </li>
                  {" "}
                  <li>
                    Nail Trim
                  </li>
                  {" "}
                  <li>
                    Ear Cleaning
                  </li>
                  {" "}
                  <li>
                    Brush Out
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="pricing-card-footer">
                  {" "}
                  <a href="booking.html" className="btn btn-ghost">
                    Get Started
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="pricing-card featured">
                {" "}
                <span className="badge-popular">
                  Popular
                </span>
                {" "}
                <div className="pricing-card-header">
                  {" "}
                  <h3>
                    Full Spa Package
                  </h3>
                  {" "}
                  <p>
                    Our most loved service
                  </p>
                  {" "}
                </div>
                {" "}
                <img src={a4} alt="Spa package" className="pricing-img" loading="lazy" />
                {" "}
                <span className="pricing-amount">
                  {"$59 "}
                  <span>
                    / session
                  </span>
                </span>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    Everything in Basic
                  </li>
                  {" "}
                  <li>
                    Hydrotherapy Bath
                  </li>
                  {" "}
                  <li>
                    Aromatherapy
                  </li>
                  {" "}
                  <li>
                    Paw Massage
                  </li>
                  {" "}
                  <li>
                    Teeth Brushing
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="pricing-card-footer">
                  {" "}
                  <a href="booking.html" className="btn btn-primary">
                    Get Started
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="pricing-card">
                {" "}
                <div className="pricing-card-header">
                  {" "}
                  <h3>
                    VIP Boarding
                  </h3>
                  {" "}
                  <p>
                    Overnight luxury care
                  </p>
                  {" "}
                </div>
                {" "}
                <img src={a5} alt="VIP boarding package" className="pricing-img" loading="lazy" />
                {" "}
                <span className="pricing-amount">
                  {"$49 "}
                  <span>
                    / night
                  </span>
                </span>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    Luxury Suite
                  </li>
                  {" "}
                  <li>
                    Daily Playtime
                  </li>
                  {" "}
                  <li>
                    Gourmet Meals
                  </li>
                  {" "}
                  <li>
                    Webcam Access
                  </li>
                  {" "}
                  <li>
                    Evening Cuddles
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="pricing-card-footer">
                  {" "}
                  <a href="booking.html" className="btn btn-ghost">
                    Get Started
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
        <section className="section section-alt" id="team">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Our Team
              </span>
              {" "}
              <h2 className="section-title">
                Meet the PetLover Family
              </h2>
              {" "}
              <p className="section-desc">
                Passionate pet professionals dedicated to providing the best care for your furry friends.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-grid stagger-children reveal">
              {" "}
              <div className="team-card">
                {" "}
                <img src={a6} alt="Sarah Johnson - Lead Groomer" className="team-card-img" loading="lazy" />
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Sarah Johnson
                  </h3>
                  {" "}
                  <span className="team-role">
                    Lead Groomer
                  </span>
                  {" "}
                  <p>
                    10+ years of professional grooming experience
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card">
                {" "}
                <img src={a7} alt="Dr. Mark Rivera - Veterinarian" className="team-card-img" loading="lazy" />
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Dr. Mark Rivera
                  </h3>
                  {" "}
                  <span className="team-role">
                    Veterinarian
                  </span>
                  {" "}
                  <p>
                    DVM, specialized in small animal care
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card">
                {" "}
                <img src={a8} alt="Emily Chen - Pet Care Specialist" className="team-card-img" loading="lazy" />
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Emily Chen
                  </h3>
                  {" "}
                  <span className="team-role">
                    Pet Care Specialist
                  </span>
                  {" "}
                  <p>
                    {"Certified animal behaviorist & trainer"}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card">
                {" "}
                <img src={a9} alt="James Wilson - Boarding Manager" className="team-card-img" loading="lazy" />
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    James Wilson
                  </h3>
                  {" "}
                  <span className="team-role">
                    Boarding Manager
                  </span>
                  {" "}
                  <p>
                    Ensuring every stay is comfy and fun
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
        <section className="section" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Testimonials
              </span>
              {" "}
              <h2 className="section-title">
                What Pet Parents Say
              </h2>
              {" "}
              <p className="section-desc">
                Hear from the families who trust us with their beloved pets.
              </p>
              {" "}
            </div>
            {" "}
            <div className="testimonials-grid stagger-children reveal">
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-text">
                  PetLover is absolutely amazing! They took such wonderful care of my golden retriever, Max. The grooming was perfect and he came back so happy. I wouldn't trust anyone else!
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a10} alt="Amanda Roberts" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Amanda Roberts
                    </h4>
                    {" "}
                    <span>
                      Pet Parent
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-text">
                  The boarding service at PetLover is first-class. My cat Luna usually hates being away from home, but she absolutely loved her stay. The webcam access gave me such peace of mind.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a11} alt="David Park" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      David Park
                    </h4>
                    {" "}
                    <span>
                      Pet Parent
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-text">
                  Dr. Rivera is the best vet we've ever been to. He's so gentle with our anxious rescue dog and always explains everything clearly. The whole team is incredibly kind and professional.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a12} alt="Maria Gonzalez" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Maria Gonzalez
                    </h4>
                    {" "}
                    <span>
                      Pet Parent
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-text">
                  I've been bringing my two poodles to PetLover for over three years now. The spa package is incredible — they always come out looking like champions! Highly recommend to all dog owners.
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <img src={a13} alt="Tom Harrison" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Tom Harrison
                    </h4>
                    {" "}
                    <span>
                      Pet Parent
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
        <section className="section section-alt" id="blog">
          {" "}
          <div className="container">
            {" "}
            <div className="section-center">
              {" "}
              <span className="section-label">
                Our Blog
              </span>
              {" "}
              <h2 className="section-title">
                {"Tips & Stories for Pet Lovers"}
              </h2>
              {" "}
              <p className="section-desc">
                Expert advice, care guides, and heartwarming stories from the PetLover team.
              </p>
              {" "}
            </div>
            {" "}
            <div className="blog-grid stagger-children reveal">
              {" "}
              <div className="blog-card">
                {" "}
                <img src={a14} alt="Essential pet grooming tips" className="blog-card-img" loading="lazy" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <div className="blog-meta">
                    {" "}
                    <span>
                      📅 June 15, 2026
                    </span>
                    {" "}
                    <span>
                      📖 4 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      5 Essential Grooming Tips for a Happy, Healthy Pet
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Keep your furry friend looking and feeling their best with these simple yet effective grooming routines.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="btn btn-ghost btn-sm">
                    Read More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="blog-card">
                {" "}
                <img src={a15} alt="Dog boarding preparation" className="blog-card-img" loading="lazy" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <div className="blog-meta">
                    {" "}
                    <span>
                      📅 June 8, 2026
                    </span>
                    {" "}
                    <span>
                      📖 3 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      How to Prepare Your Dog for Their First Boarding Stay
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Make your dog's first boarding experience stress-free with these preparation tips from our caregivers.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="btn btn-ghost btn-sm">
                    Read More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="blog-card">
                {" "}
                <img src={a16} alt="Pet nutrition guide" className="blog-card-img" loading="lazy" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <div className="blog-meta">
                    {" "}
                    <span>
                      📅 May 28, 2026
                    </span>
                    {" "}
                    <span>
                      📖 5 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      {"A Complete Guide to Pet Nutrition & Healthy Eating"}
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Learn what makes a balanced diet for your pet and how proper nutrition impacts their overall well-being.
                  </p>
                  {" "}
                  <a href="blog-single.html" className="btn btn-ghost btn-sm">
                    Read More →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="section-center" style={{ marginTop: "var(--space-lg)" }}>
              {" "}
              <a href="blog.html" className="btn btn-primary">
                View All Posts
              </a>
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
            <h2 className="reveal">
              Ready to Give Your Pet the Best Care?
            </h2>
            {" "}
            <p>
              Book an appointment today and discover the PetLover difference. Your pet will thank you with wagging tails and purrs!
            </p>
            {" "}
            <a href="booking.html" className="btn btn-lg btn-outline">
              Book an Appointment
            </a>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
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
              <a href="index.html" className="logo">
                <span className="logo-icon">
                  🐾
                </span>
                {" PetLover"}
              </a>
              {" "}
              <p>
                Professional pet grooming, boarding, and veterinary care services. Your furry friends deserve the very best.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  📸
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  ▶️
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
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Our Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="pricing.html">
                    Pricing
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
                    Pet Grooming
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Dog Boarding
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Veterinary Care
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Pet Spa
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Dog Training
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
                Contact
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <span>
                    📍
                  </span>
                  {" 123 Pet Street, Paw City, PC 12345"}
                </li>
                {" "}
                <li>
                  <span>
                    📞
                  </span>
                  {" (555) 123-4567"}
                </li>
                {" "}
                <li>
                  <span>
                    ✉️
                  </span>
                  {" hello@petlover.com"}
                </li>
                {" "}
                <li>
                  <span>
                    🕐
                  </span>
                  {" Mon–Sat: 8:00 AM – 7:00 PM"}
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
              {" PetLover. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Template by "}
              <a href="https://uiuxlabz.com" target="_blank">
                uiuxlabz
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <button className="back-to-top" aria-label="Back to top">
          ↑
        </button>
        {" "}
      </footer>
      {" "}
      {" "}
    </div>
  );
}
