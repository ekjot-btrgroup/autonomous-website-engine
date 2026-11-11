// Converted from the HTML template travel-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/blog-1.webp";
import a4 from "./assets/blog-2.webp";
import a5 from "./assets/blog-3.webp";
import a6 from "./assets/about-img.webp";
import a7 from "./assets/about-img-1.webp";
import a8 from "./assets/subscribe-img.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Karla:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-travel-agency-c600">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              <span className="logo-mark">
                ✈️
              </span>
              Trip
              <span className="logo-accent">
                Craft
              </span>
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
                Tours
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
      <main>
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img className="active" src={a0} alt="Santorini cliffside village glowing at golden hour" />
            {" "}
            <img src={a1} alt="Lush Bali rice terraces under morning light" />
            {" "}
            <img src={a2} alt="Overwater villas on a turquoise Maldivian lagoon" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-wrapper">
              {" "}
              <div className="hero-content">
                {" "}
                <span className="hero-badge">
                  ✈ Explore the World
                </span>
                {" "}
                <h1 className="hero-title">
                  {"Your Next "}
                  <span className="accent">
                    Adventure
                  </span>
                  {" Starts Here"}
                </h1>
                {" "}
                <p className="hero-sub">
                  Hand-crafted itineraries, expert local guides and 40+ dream destinations — all wrapped in one seamless journey, planned around you.
                </p>
                {" "}
                <div className="hero-actions">
                  {" "}
                  <a href="services.html" className="btn btn--amber">
                    Explore Tours
                  </a>
                  {" "}
                  <a href="about.html" className="btn btn--outline">
                    Our Story
                  </a>
                  {" "}
                  <span className="hero-scroll">
                    Scroll to discover
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-booking">
                {" "}
                <h2 className="booking-title">
                  Plan Your Trip
                </h2>
                {" "}
                <p className="booking-sub">
                  Tell us where you want to go — our experts will do the rest.
                </p>
                {" "}
                <form className="booking-form" data-form="" noValidate={true}>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label className="form-label" htmlFor="bk-from">
                      From
                    </label>
                    {" "}
                    <input className="form-input" type="text" id="bk-from" name="from" placeholder="City or airport" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label className="form-label" htmlFor="bk-to">
                      Destination
                    </label>
                    {" "}
                    <select className="form-select" id="bk-to" name="to" required={true}>
                      {" "}
                      <option value="">
                        Select destination
                      </option>
                      {" "}
                      <option>
                        Bali, Indonesia
                      </option>
                      {" "}
                      <option>
                        Santorini, Greece
                      </option>
                      {" "}
                      <option>
                        Paris, France
                      </option>
                      {" "}
                      <option>
                        Tokyo, Japan
                      </option>
                      {" "}
                      <option>
                        Marrakech, Morocco
                      </option>
                      {" "}
                      <option>
                        Maldives
                      </option>
                      {" "}
                      <option>
                        Swiss Alps
                      </option>
                      {" "}
                    </select>
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label className="form-label" htmlFor="bk-depart">
                      Departure Date
                    </label>
                    {" "}
                    <input className="form-input" type="date" id="bk-depart" name="depart" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label className="form-label" htmlFor="bk-travelers">
                      Travelers
                    </label>
                    {" "}
                    <select className="form-select" id="bk-travelers" name="travelers" required={true}>
                      {" "}
                      <option value="">
                        Select
                      </option>
                      {" "}
                      <option>
                        1 traveler
                      </option>
                      {" "}
                      <option>
                        2 travelers
                      </option>
                      {" "}
                      <option>
                        3 travelers
                      </option>
                      {" "}
                      <option>
                        4+ travelers
                      </option>
                      {" "}
                    </select>
                    {" "}
                  </div>
                  {" "}
                  <div className="booking-full form-ok">
                    Thanks! A travel expert will reach out within 24 hours.
                  </div>
                  {" "}
                  <div className="booking-full form-err">
                    Please fill in all required fields.
                  </div>
                  {" "}
                  <button className="btn btn--primary" type="submit">
                    Search Trips
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
        </section>
        {" "}
        <section className="section section--white">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header reveal">
              {" "}
              <span className="section-eyebrow">
                Featured Journeys
              </span>
              {" "}
              <h2 className="section-title">
                Popular Tours This Season
              </h2>
              {" "}
              <p className="section-sub">
                Our most-loved itineraries — tried, tested and refined by thousands of travelers. Prices per person, all inclusive of stays, guides and highlights.
              </p>
              {" "}
            </div>
            {" "}
            <div className="tours-grid">
              {" "}
              <article className="tour-card reveal">
                {" "}
                <div className="tour-media">
                  {" "}
                  <img src={a3} alt="Bali temple gate framed by tropical greenery" loading="lazy" />
                  {" "}
                  <span className="tour-flag">
                    Best Seller
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="tour-body">
                  {" "}
                  <div className="tour-meta">
                    {" "}
                    <span>
                      ⏱ 8 days
                    </span>
                    {" "}
                    <span>
                      📍 Bali, Indonesia
                    </span>
                    {" "}
                    <span className="tour-rating">
                      ★ 4.9
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3 className="tour-title">
                    Bali Island Escape
                  </h3>
                  {" "}
                  <p className="tour-desc">
                    Temples, rice terraces and hidden waterfalls — eight days exploring the island of the gods with a local guide.
                  </p>
                  {" "}
                  <div className="tour-foot">
                    {" "}
                    <div className="tour-price">
                      $1,290
                      <small>
                        per person
                      </small>
                    </div>
                    {" "}
                    <a href="services.html" className="btn btn--primary btn--sm">
                      View Tour
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tour-card reveal reveal-delay-1">
                {" "}
                <div className="tour-media">
                  {" "}
                  <img src={a4} alt="Whitewashed Santorini buildings over the Aegean Sea" loading="lazy" />
                  {" "}
                  <span className="tour-flag">
                    Romantic
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="tour-body">
                  {" "}
                  <div className="tour-meta">
                    {" "}
                    <span>
                      ⏱ 6 days
                    </span>
                    {" "}
                    <span>
                      📍 Santorini, Greece
                    </span>
                    {" "}
                    <span className="tour-rating">
                      ★ 4.8
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3 className="tour-title">
                    Santorini Sunset Escape
                  </h3>
                  {" "}
                  <p className="tour-desc">
                    Caldera views, cave suites and the famous Oia sunset — a slow-paced island romance with private transfers.
                  </p>
                  {" "}
                  <div className="tour-foot">
                    {" "}
                    <div className="tour-price">
                      $1,450
                      <small>
                        per person
                      </small>
                    </div>
                    {" "}
                    <a href="services.html" className="btn btn--primary btn--sm">
                      View Tour
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tour-card reveal reveal-delay-2">
                {" "}
                <div className="tour-media">
                  {" "}
                  <img src={a5} alt="Parisian streets with the Eiffel Tower in the distance" loading="lazy" />
                  {" "}
                  <span className="tour-flag">
                    Cultural
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="tour-body">
                  {" "}
                  <div className="tour-meta">
                    {" "}
                    <span>
                      ⏱ 5 days
                    </span>
                    {" "}
                    <span>
                      📍 Paris, France
                    </span>
                    {" "}
                    <span className="tour-rating">
                      ★ 4.7
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3 className="tour-title">
                    {"Paris Lights & Landmarks"}
                  </h3>
                  {" "}
                  <p className="tour-desc">
                    Skip-the-line museums, Seine cruises and café terraces — the City of Light, curated down to the last croissant.
                  </p>
                  {" "}
                  <div className="tour-foot">
                    {" "}
                    <div className="tour-price">
                      $1,180
                      <small>
                        per person
                      </small>
                    </div>
                    {" "}
                    <a href="services.html" className="btn btn--primary btn--sm">
                      View Tour
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
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
            <div className="section-header reveal">
              {" "}
              <span className="section-eyebrow">
                Why TripCraft
              </span>
              {" "}
              <h2 className="section-title">
                Travel, Done Right
              </h2>
              {" "}
              <p className="section-sub">
                We obsess over the details so you can focus on the memories. Here's what makes a TripCraft journey different.
              </p>
              {" "}
            </div>
            {" "}
            <div className="features-grid">
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-icon">
                  🧭
                </div>
                {" "}
                <h3 className="feature-title">
                  Expert Local Guides
                </h3>
                {" "}
                <p className="feature-text">
                  Every tour is led by vetted locals who know the hidden corners guidebooks miss.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal reveal-delay-1">
                {" "}
                <div className="feature-icon">
                  🛟
                </div>
                {" "}
                <h3 className="feature-title">
                  24/7 On-Trip Support
                </h3>
                {" "}
                <p className="feature-text">
                  A real human, one tap away, anywhere in the world — before, during and after your trip.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal reveal-delay-2">
                {" "}
                <div className="feature-icon">
                  💰
                </div>
                {" "}
                <h3 className="feature-title">
                  Best Price Promise
                </h3>
                {" "}
                <p className="feature-text">
                  Found a better price elsewhere? We'll match it and add a little extra on top.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal reveal-delay-3">
                {" "}
                <div className="feature-icon">
                  👥
                </div>
                {" "}
                <h3 className="feature-title">
                  Small Groups Only
                </h3>
                {" "}
                <p className="feature-text">
                  We cap every departure at 14 travelers — intimate, flexible and never rushed.
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
        <section className="section section--white">
          {" "}
          <div className="container">
            {" "}
            <div className="about-split">
              {" "}
              <div className="about-media reveal">
                {" "}
                <div className="about-media-badge">
                  14+
                  <small>
                    Years crafting trips
                  </small>
                </div>
                {" "}
                <img className="about-media-main" src={a6} alt="Traveler standing before a scenic mountain view" loading="lazy" />
                {" "}
                <div className="about-media-float">
                  {" "}
                  <img src={a7} alt="Guide leading a small group through a coastal town" loading="lazy" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about-copy reveal">
                {" "}
                <span className="section-eyebrow">
                  Who We Are
                </span>
                {" "}
                <h2 className="section-title">
                  Crafted by Travelers, For Travelers
                </h2>
                {" "}
                <p className="section-sub">
                  TripCraft began in 2011 with two backpacks and a simple belief: travel should feel personal. Today our team of 60+ travel designers has sent 120,000 travelers across five continents — and we still hand-build every single itinerary.
                </p>
                {" "}
                <div className="about-points">
                  {" "}
                  <div className="about-point">
                    {" "}
                    <span className="about-point-icon">
                      🗺
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Custom itineraries
                      </strong>
                      <p>
                        Every trip shaped around your pace, budget and dreams.
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="about-point">
                    {" "}
                    <span className="about-point-icon">
                      🤝
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Local partnerships
                      </strong>
                      <p>
                        Family-run stays and guides who call each place home.
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="about-point">
                    {" "}
                    <span className="about-point-icon">
                      🌱
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Sustainable travel
                      </strong>
                      <p>
                        Carbon-offset flights and community-first experiences.
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="about-point">
                    {" "}
                    <span className="about-point-icon">
                      🛡
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Flexible booking
                      </strong>
                      <p>
                        Free date changes up to 30 days before departure.
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="about.html" className="btn btn--primary">
                  More About Us
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
            <div className="section-header reveal">
              {" "}
              <span className="section-eyebrow">
                Where To Next?
              </span>
              {" "}
              <h2 className="section-title">
                Destinations We Love
              </h2>
              {" "}
              <p className="section-sub">
                Swipe through a few of our favorite corners of the planet — each one ready to be turned into your story.
              </p>
              {" "}
            </div>
            {" "}
            <div className="destinations-strip">
              {" "}
              <div className="destination-card reveal">
                {" "}
                <div className="destination-flag">
                  🇫🇷
                </div>
                {" "}
                <div className="destination-name">
                  Paris
                </div>
                {" "}
                <div className="destination-count">
                  12 tours
                </div>
                {" "}
              </div>
              {" "}
              <div className="destination-card reveal reveal-delay-1">
                {" "}
                <div className="destination-flag">
                  🇮🇩
                </div>
                {" "}
                <div className="destination-name">
                  Bali
                </div>
                {" "}
                <div className="destination-count">
                  9 tours
                </div>
                {" "}
              </div>
              {" "}
              <div className="destination-card reveal reveal-delay-2">
                {" "}
                <div className="destination-flag">
                  🇬🇷
                </div>
                {" "}
                <div className="destination-name">
                  Santorini
                </div>
                {" "}
                <div className="destination-count">
                  7 tours
                </div>
                {" "}
              </div>
              {" "}
              <div className="destination-card reveal reveal-delay-1">
                {" "}
                <div className="destination-flag">
                  🇯🇵
                </div>
                {" "}
                <div className="destination-name">
                  Tokyo
                </div>
                {" "}
                <div className="destination-count">
                  11 tours
                </div>
                {" "}
              </div>
              {" "}
              <div className="destination-card reveal">
                {" "}
                <div className="destination-flag">
                  🇲🇦
                </div>
                {" "}
                <div className="destination-name">
                  Marrakech
                </div>
                {" "}
                <div className="destination-count">
                  6 tours
                </div>
                {" "}
              </div>
              {" "}
              <div className="destination-card reveal reveal-delay-2">
                {" "}
                <div className="destination-flag">
                  🇲🇻
                </div>
                {" "}
                <div className="destination-name">
                  Maldives
                </div>
                {" "}
                <div className="destination-count">
                  5 tours
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
        <section className="section section--white">
          {" "}
          <div className="container">
            {" "}
            <div className="testimonial reveal">
              {" "}
              <p className="testimonial-quote">
                TripCraft turned our honeymoon into the trip of a lifetime. Every transfer, every hidden café, every sunset was perfectly planned — yet it never felt scripted.
              </p>
              {" "}
              <div className="testimonial-avatar">
                EM
              </div>
              {" "}
              <div className="testimonial-name">
                {"Elena & Marco"}
              </div>
              {" "}
              <div className="testimonial-role">
                Santorini Sunset Escape, June 2025
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="newsletter">
          {" "}
          <div className="newsletter-bg">
            {" "}
            <img src={a8} alt="Palm-lined tropical beach with crystal-clear water" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="newsletter-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="newsletter-content reveal">
              {" "}
              <span className="section-eyebrow">
                {"Deals & Inspiration"}
              </span>
              {" "}
              <h2 className="section-title">
                Never Miss a Fare
              </h2>
              {" "}
              <p className="section-sub">
                Join 40,000+ travelers receiving monthly destination guides, insider tips and members-only discounts — straight to your inbox.
              </p>
              {" "}
              <form className="newsletter-form" data-form="" noValidate={true}>
                {" "}
                <div className="newsletter-row">
                  {" "}
                  <input className="form-input" type="email" id="nl-email" name="email" placeholder="Your email address" aria-label="Email address" required={true} />
                  {" "}
                  <button className="btn btn--amber" type="submit">
                    Subscribe
                  </button>
                  {" "}
                </div>
                {" "}
                <div className="form-ok">
                  You're in! Check your inbox for this month's deals.
                </div>
                {" "}
                <div className="form-err">
                  Please enter a valid email address to subscribe.
                </div>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-logo">
                <span className="logo-mark">
                  ✈️
                </span>
                Trip
                <span className="logo-accent">
                  Craft
                </span>
              </div>
              {" "}
              <p className="footer-brand-desc">
                A travel agency crafting journeys, not just bookings. Hand-built itineraries, expert guides and 40+ destinations across five continents.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Explore
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Tour Packages
                </a>
                {" "}
                <a href="blog.html" className="footer-link">
                  Travel Blog
                </a>
                {" "}
                <a href="index.html" className="footer-link">
                  Home
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Plan
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Book Now
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Add-ons
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Popular Tours
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Reach Us
              </h4>
              {" "}
              <div className="footer-contact">
                {" "}
                <span>
                  📍 42 Wanderlust Avenue, Portland, OR
                </span>
                {" "}
                <span>
                  📞 +1 (555) 012-3456
                </span>
                {" "}
                <span>
                  ✉️ hello@tripcraft.travel
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
              {"© "}
              <span data-year="" />
              {" TRIPCRAFT. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Travel is the only thing you buy that makes you richer "}
              <span className="footer-heart">
                ✦
              </span>
            </span>
            {" "}
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
