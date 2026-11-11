// Converted from the HTML template car-rental-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/banner-1.webp";
import a1 from "./assets/car-1.webp";
import a2 from "./assets/car-2.webp";
import a3 from "./assets/car-3.webp";
import a4 from "./assets/car-4.webp";
import a5 from "./assets/about-img.webp";
import a6 from "./assets/about-img-1.webp";
import a7 from "./assets/team-1.webp";
import a8 from "./assets/team-2.webp";
import a9 from "./assets/team-3.webp";
import a10 from "./assets/team-4.webp";
import a11 from "./assets/testimonial-1.webp";
import a12 from "./assets/testimonial-2.webp";
import a13 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-car-rental-0f0f">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container">
          {" "}
          <div className="topbar__inner">
            {" "}
            <div className="topbar__links">
              {" "}
              <a href="#">
                <i className="fas fa-map-marker-alt" />
                {" Find a Location"}
              </a>
              {" "}
              <a href="tel:+1234567890">
                <i className="fas fa-phone-alt" />
                {" +1 (234) 567-890"}
              </a>
              {" "}
              <a href="mailto:info@cental.com">
                <i className="fas fa-envelope" />
                {" info@cental.com"}
              </a>
              {" "}
            </div>
            {" "}
            <div className="topbar__social">
              {" "}
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-linkedin-in" />
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
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container">
          {" "}
          <div className="navbar__inner">
            {" "}
            <a href="index.html" className="navbar__brand">
              {" "}
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <rect width="36" height="36" rx="8" fill="#00C2A8" />
                {" "}
                <path d="M8 22L12 14H24L28 22H8Z" fill="#0F2340" />
                {" "}
                <circle cx="13" cy="23" r="3" fill="#0F2340" stroke="#00C2A8" strokeWidth="1" />
                {" "}
                <circle cx="23" cy="23" r="3" fill="#0F2340" stroke="#00C2A8" strokeWidth="1" />
                {" "}
                <rect x="11" y="16" width="14" height="4" rx="1" fill="#0F2340" opacity="0.3" />
                {" "}
              </svg>
              {" "}
              <span>
                Cental
                <span className="brand-dot">
                  .
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <div className="navbar__nav">
              {" "}
              <a href="index.html" className="navbar__link active">
                Home
              </a>
              {" "}
              <a href="about.html" className="navbar__link">
                About
              </a>
              {" "}
              <a href="services.html" className="navbar__link">
                Services
              </a>
              {" "}
              <a href="contact.html" className="navbar__link">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <a href="#booking" className="btn btn--primary btn--sm navbar__cta">
              {" "}
              <i className="fas fa-calendar-check" />
              {" Book Now "}
            </a>
            {" "}
            <button className="navbar__toggle" aria-label="Menu">
              {" "}
              <span />
              {" "}
              <span />
              {" "}
              <span />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__bg">
          {" "}
          <img src={a0} alt="Cental Car Rental" />
          {" "}
        </div>
        {" "}
        <div className="hero__content container">
          {" "}
          <div className="hero__text" data-animate="fade-left">
            {" "}
            <div className="hero__subtitle">
              Premium Car Rental
            </div>
            {" "}
            <h1 className="hero__title">
              {"Drive the car of your "}
              <span>
                dreams
              </span>
            </h1>
            {" "}
            <p className="hero__desc">
              Experience the freedom of the open road with Cental's premium fleet. From city compact to luxury SUV, find the perfect ride for every journey.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="#fleet" className="btn btn--primary btn--lg">
                {" "}
                <i className="fas fa-car" />
                {" Explore Fleet "}
              </a>
              {" "}
              <a href="#how-it-works" className="btn btn--outline btn--lg">
                {" "}
                <i className="fas fa-play-circle" />
                {" How It Works "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="booking-widget" id="booking" data-animate="road-sweep">
            {" "}
            <div className="booking-widget__title">
              {" "}
              <i className="fas fa-car-side" />
              {" Find Your Perfect Ride "}
            </div>
            {" "}
            <div className="booking-widget__form">
              {" "}
              <div className="booking-field">
                {" "}
                <label htmlFor="pick-location">
                  Pick-up Location
                </label>
                {" "}
                <div className="field-input">
                  {" "}
                  <i className="fas fa-map-marker-alt" />
                  {" "}
                  <select id="pick-location">
                    {" "}
                    <option value="">
                      Select location
                    </option>
                    {" "}
                    <option>
                      Downtown Office
                    </option>
                    {" "}
                    <option>
                      Airport Terminal
                    </option>
                    {" "}
                    <option>
                      Train Station
                    </option>
                    {" "}
                    <option>
                      City Center
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="booking-field">
                {" "}
                <label htmlFor="return-location">
                  Return Location
                </label>
                {" "}
                <div className="field-input">
                  {" "}
                  <i className="fas fa-map-marker-alt" />
                  {" "}
                  <select id="return-location">
                    {" "}
                    <option value="">
                      Select location
                    </option>
                    {" "}
                    <option>
                      Downtown Office
                    </option>
                    {" "}
                    <option>
                      Airport Terminal
                    </option>
                    {" "}
                    <option>
                      Train Station
                    </option>
                    {" "}
                    <option>
                      City Center
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="booking-field">
                {" "}
                <label htmlFor="pick-date">
                  Pick-up Date
                </label>
                {" "}
                <div className="field-input">
                  {" "}
                  <i className="fas fa-calendar-alt" />
                  {" "}
                  <input type="date" id="pick-date" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn--primary" type="button">
                {" "}
                <i className="fas fa-search" />
                {" Search Cars "}
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
      <section className="section" id="fleet">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header" data-animate="">
            {" "}
            <div className="section__badge">
              <i className="fas fa-car" />
              {" Our Fleet"}
            </div>
            {" "}
            <h2>
              Choose Your Perfect Ride
            </h2>
            {" "}
            <p>
              From compact city cars to powerful SUVs, our fleet is designed to match every driving need and style preference.
            </p>
            {" "}
          </div>
          {" "}
          <div className="fleet-grid stagger-children">
            {" "}
            {" "}
            <div className="car-card" data-animate="road-sweep">
              {" "}
              <div className="car-card__img">
                {" "}
                <img src={a1} alt="Toyota Camry" />
                {" "}
                <span className="car-card__badge">
                  Popular
                </span>
                {" "}
                <div className="car-card__price">
                  {" "}
                  <span className="amount">
                    $45
                  </span>
                  {" "}
                  <span className="period">
                    /day
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="car-card__body">
                {" "}
                <h4 className="car-card__name">
                  Toyota Camry
                </h4>
                {" "}
                <div className="car-card__type">
                  Sedan / Automatic
                </div>
                {" "}
                <div className="car-card__specs">
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-users" />
                    {" 5 Seats"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-suitcase" />
                    {" 2 Bags"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-gas-pump" />
                    {" Hybrid"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="car-card" data-animate="road-sweep">
              {" "}
              <div className="car-card__img">
                {" "}
                <img src={a2} alt="Honda CR-V" />
                {" "}
                <span className="car-card__badge">
                  SUV
                </span>
                {" "}
                <div className="car-card__price">
                  {" "}
                  <span className="amount">
                    $65
                  </span>
                  {" "}
                  <span className="period">
                    /day
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="car-card__body">
                {" "}
                <h4 className="car-card__name">
                  Honda CR-V
                </h4>
                {" "}
                <div className="car-card__type">
                  SUV / Automatic
                </div>
                {" "}
                <div className="car-card__specs">
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-users" />
                    {" 5 Seats"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-suitcase" />
                    {" 3 Bags"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-gas-pump" />
                    {" Gasoline"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="car-card" data-animate="road-sweep">
              {" "}
              <div className="car-card__img">
                {" "}
                <img src={a3} alt="BMW 3 Series" />
                {" "}
                <span className="car-card__badge">
                  Premium
                </span>
                {" "}
                <div className="car-card__price">
                  {" "}
                  <span className="amount">
                    $95
                  </span>
                  {" "}
                  <span className="period">
                    /day
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="car-card__body">
                {" "}
                <h4 className="car-card__name">
                  BMW 3 Series
                </h4>
                {" "}
                <div className="car-card__type">
                  Luxury Sedan / Auto
                </div>
                {" "}
                <div className="car-card__specs">
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-users" />
                    {" 5 Seats"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-suitcase" />
                    {" 2 Bags"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-gas-pump" />
                    {" Diesel"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="car-card" data-animate="road-sweep">
              {" "}
              <div className="car-card__img">
                {" "}
                <img src={a4} alt="Ford Mustang" />
                {" "}
                <span className="car-card__badge">
                  Sports
                </span>
                {" "}
                <div className="car-card__price">
                  {" "}
                  <span className="amount">
                    $120
                  </span>
                  {" "}
                  <span className="period">
                    /day
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="car-card__body">
                {" "}
                <h4 className="car-card__name">
                  Ford Mustang
                </h4>
                {" "}
                <div className="car-card__type">
                  Coupe / Manual
                </div>
                {" "}
                <div className="car-card__specs">
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-users" />
                    {" 4 Seats"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-suitcase" />
                    {" 2 Bags"}
                  </span>
                  {" "}
                  <span className="car-card__spec">
                    <i className="fas fa-gas-pump" />
                    {" Gasoline"}
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
          <div className="text-center mt-3" data-animate="">
            {" "}
            <a href="services.html" className="btn btn--ghost">
              {" View All Vehicles "}
              <i className="fas fa-arrow-right" />
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--off-white" id="how-it-works">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header" data-animate="">
            {" "}
            <div className="section__badge">
              <i className="fas fa-road" />
              {" How It Works"}
            </div>
            {" "}
            <h2>
              Rent a Car in 3 Simple Steps
            </h2>
            {" "}
            <p>
              We have simplified the car rental process so you can get on the road faster and with complete peace of mind.
            </p>
            {" "}
          </div>
          {" "}
          <div className="steps-grid stagger-children">
            {" "}
            <div className="step-card" data-animate="road-sweep">
              {" "}
              <div className="step-card__number">
                01
              </div>
              {" "}
              <h3 className="step-card__title">
                Choose Your Car
              </h3>
              {" "}
              <p className="step-card__desc">
                Browse our curated fleet and select the vehicle that matches your style, comfort, and budget needs.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card" data-animate="road-sweep">
              {" "}
              <div className="step-card__number">
                02
              </div>
              {" "}
              <h3 className="step-card__title">
                {"Book & Confirm"}
              </h3>
              {" "}
              <p className="step-card__desc">
                Pick your dates, select add-ons, and confirm your reservation instantly with our seamless booking system.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card" data-animate="road-sweep">
              {" "}
              <div className="step-card__number">
                03
              </div>
              {" "}
              <h3 className="step-card__title">
                Hit the Road
              </h3>
              {" "}
              <p className="step-card__desc">
                Pick up your car at your chosen location, grab the keys, and start your journey with confidence.
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
            <div className="about__images" data-animate="fade-left">
              {" "}
              <img src={a5} alt="Cental Team" className="img-main" />
              {" "}
              <img src={a6} alt="Car Rental Office" className="img-accent" />
              {" "}
            </div>
            {" "}
            <div className="about__content" data-animate="fade-right">
              {" "}
              <div className="section__badge">
                <i className="fas fa-info-circle" />
                {" About Cental"}
              </div>
              {" "}
              <h2>
                {"We Provide the Best "}
                <span className="text-teal">
                  Car Rental
                </span>
                {" Experience"}
              </h2>
              {" "}
              <p>
                With over 15 years of experience in the car rental industry, Cental has built a reputation for reliability, quality, and customer-first service. Our fleet is meticulously maintained, and our team is dedicated to making every rental seamless.
              </p>
              {" "}
              <div className="about-features">
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    <i className="fas fa-shield-alt" />
                  </div>
                  {" "}
                  <div className="about-feature__text">
                    {" "}
                    <h4>
                      Fully Insured
                    </h4>
                    {" "}
                    <p>
                      Comprehensive coverage for complete peace of mind on every trip.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    <i className="fas fa-clock" />
                  </div>
                  {" "}
                  <div className="about-feature__text">
                    {" "}
                    <h4>
                      24/7 Support
                    </h4>
                    {" "}
                    <p>
                      Round-the-clock roadside assistance and customer support.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    <i className="fas fa-tools" />
                  </div>
                  {" "}
                  <div className="about-feature__text">
                    {" "}
                    <h4>
                      Well Maintained
                    </h4>
                    {" "}
                    <p>
                      Regular servicing and safety checks on every vehicle.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about-feature">
                  {" "}
                  <div className="about-feature__icon">
                    <i className="fas fa-hand-holding-usd" />
                  </div>
                  {" "}
                  <div className="about-feature__text">
                    {" "}
                    <h4>
                      Best Prices
                    </h4>
                    {" "}
                    <p>
                      Competitive rates with no hidden fees or surprises.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about__stats">
                {" "}
                <div className="about__stat">
                  {" "}
                  <div className="about__stat-num" data-count="15" data-suffix="+">
                    0
                  </div>
                  {" "}
                  <div className="about__stat-label">
                    Years Experience
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about__stat">
                  {" "}
                  <div className="about__stat-num" data-count="200" data-suffix="+">
                    0
                  </div>
                  {" "}
                  <div className="about__stat-label">
                    Vehicles
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about__stat">
                  {" "}
                  <div className="about__stat-num" data-count="15000" data-suffix="+">
                    0
                  </div>
                  {" "}
                  <div className="about__stat-label">
                    Happy Customers
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
      <section className="section section--navy">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header" data-animate="">
            {" "}
            <div className="section__badge">
              <i className="fas fa-star" />
              {" Why Choose Us"}
            </div>
            {" "}
            <h2>
              The Cental Difference
            </h2>
            {" "}
            <p>
              We go above and beyond to ensure your car rental experience is nothing short of exceptional.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid stagger-children">
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-map-marked-alt" />
              </div>
              {" "}
              <h4>
                Flexible Locations
              </h4>
              {" "}
              <p>
                Pick up and drop off at any of our strategically located branches across the city, airport, or train station.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-broom" />
              </div>
              {" "}
              <h4>
                {"Clean & Sanitized"}
              </h4>
              {" "}
              <p>
                Every vehicle undergoes a thorough 50-point cleaning and sanitization process before each rental.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-file-contract" />
              </div>
              {" "}
              <h4>
                Transparent Pricing
              </h4>
              {" "}
              <p>
                No hidden charges. What you see is what you pay. Simple, honest pricing for every rental.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-headset" />
              </div>
              {" "}
              <h4>
                24/7 Roadside Help
              </h4>
              {" "}
              <p>
                Flat tire? Dead battery? Our roadside assistance team is just a phone call away, anytime.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-mobile-alt" />
              </div>
              {" "}
              <h4>
                Easy Digital Booking
              </h4>
              {" "}
              <p>
                Book, modify, or cancel your reservation from anywhere using our intuitive online platform.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card" data-animate="road-sweep">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-undo" />
              </div>
              {" "}
              <h4>
                Free Cancellation
              </h4>
              {" "}
              <p>
                Plans changed? Cancel up to 24 hours before pickup with no cancellation fee whatsoever.
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
      <section className="section section--navy" style={{ paddingTop: "0" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="stats-bar stagger-children">
            {" "}
            <div className="stat-item" data-animate="road-sweep">
              {" "}
              <div className="stat-item__icon">
                <i className="fas fa-car" />
              </div>
              {" "}
              <div className="stat-item__num" data-count="200" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-item__label">
                Vehicles Available
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item" data-animate="road-sweep">
              {" "}
              <div className="stat-item__icon">
                <i className="fas fa-users" />
              </div>
              {" "}
              <div className="stat-item__num" data-count="15000" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-item__label">
                Happy Customers
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item" data-animate="road-sweep">
              {" "}
              <div className="stat-item__icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              {" "}
              <div className="stat-item__num" data-count="12">
                0
              </div>
              {" "}
              <div className="stat-item__label">
                Rental Locations
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item" data-animate="road-sweep">
              {" "}
              <div className="stat-item__icon">
                <i className="fas fa-award" />
              </div>
              {" "}
              <div className="stat-item__num" data-count="35" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat-item__label">
                Industry Awards
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
      <section className="section" id="team">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header" data-animate="">
            {" "}
            <div className="section__badge">
              <i className="fas fa-users" />
              {" Our Team"}
            </div>
            {" "}
            <h2>
              Meet the People Behind Cental
            </h2>
            {" "}
            <p>
              Our experienced team is passionate about delivering the best car rental experience to every customer.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid stagger-children">
            {" "}
            <div className="team-card" data-animate="road-sweep">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a7} alt="James Wilson" />
                {" "}
                <div className="team-card__overlay">
                  {" "}
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__body">
                {" "}
                <h4 className="team-card__name">
                  James Wilson
                </h4>
                {" "}
                <div className="team-card__role">
                  {"CEO & Founder"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-animate="road-sweep">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a8} alt="Sarah Mitchell" />
                {" "}
                <div className="team-card__overlay">
                  {" "}
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__body">
                {" "}
                <h4 className="team-card__name">
                  Sarah Mitchell
                </h4>
                {" "}
                <div className="team-card__role">
                  Operations Director
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-animate="road-sweep">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a9} alt="Michael Chen" />
                {" "}
                <div className="team-card__overlay">
                  {" "}
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__body">
                {" "}
                <h4 className="team-card__name">
                  Michael Chen
                </h4>
                {" "}
                <div className="team-card__role">
                  Fleet Manager
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-animate="road-sweep">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a10} alt="Emily Davis" />
                {" "}
                <div className="team-card__overlay">
                  {" "}
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__body">
                {" "}
                <h4 className="team-card__name">
                  Emily Davis
                </h4>
                {" "}
                <div className="team-card__role">
                  Customer Experience
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
      <section className="section section--off-white" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header" data-animate="">
            {" "}
            <div className="section__badge">
              <i className="fas fa-quote-left" />
              {" Testimonials"}
            </div>
            {" "}
            <h2>
              What Our Customers Say
            </h2>
            {" "}
            <p>
              Real stories from real customers who have experienced the Cental difference firsthand.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid stagger-children">
            {" "}
            <div className="testimonial-card" data-animate="road-sweep">
              {" "}
              <div className="testimonial-card__quote">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <div className="testimonial-card__stars">
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
              <p className="testimonial-card__text">
                "Absolutely seamless experience from start to finish. The car was immaculate, the booking was effortless, and the staff went above and beyond. Cental has earned a customer for life."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a11} alt="Robert Johnson" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Robert Johnson
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Business Traveler
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card" data-animate="road-sweep">
              {" "}
              <div className="testimonial-card__quote">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <div className="testimonial-card__stars">
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
              <p className="testimonial-card__text">
                "We used Cental for our family vacation and it was perfect. The SUV was spacious, clean, and the kids loved it. The airport pickup made everything so convenient."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a12} alt="Maria Garcia" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Maria Garcia
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Family Vacationer
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card" data-animate="road-sweep">
              {" "}
              <div className="testimonial-card__quote">
                <i className="fas fa-quote-left" />
              </div>
              {" "}
              <div className="testimonial-card__stars">
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
              <p className="testimonial-card__text">
                "The best rates I found online, and the car quality exceeded my expectations. I appreciate the transparent pricing with absolutely no hidden fees. Highly recommended!"
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a13} alt="David Kim" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    David Kim
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Frequent Renter
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
      <section className="cta">
        {" "}
        <div className="container">
          {" "}
          <div className="cta__inner" data-animate="">
            {" "}
            <h2>
              Ready to Hit the Road?
            </h2>
            {" "}
            <p>
              Book your next ride with Cental and experience the difference. Flexible options, premium vehicles, and unbeatable service await you.
            </p>
            {" "}
            <div className="cta__actions">
              {" "}
              <a href="#booking" className="btn btn--primary btn--lg">
                {" "}
                <i className="fas fa-calendar-check" />
                {" Book Your Car "}
              </a>
              {" "}
              <a href="contact.html" className="btn btn--outline btn--lg">
                {" "}
                <i className="fas fa-phone" />
                {" Contact Us "}
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
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <a href="index.html" className="navbar__brand" style={{ marginBottom: "1rem", display: "inline-flex" }}>
                {" "}
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                  {" "}
                  <rect width="36" height="36" rx="8" fill="#00C2A8" />
                  {" "}
                  <path d="M8 22L12 14H24L28 22H8Z" fill="#0F2340" />
                  {" "}
                  <circle cx="13" cy="23" r="3" fill="#0F2340" stroke="#00C2A8" strokeWidth="1" />
                  {" "}
                  <circle cx="23" cy="23" r="3" fill="#0F2340" stroke="#00C2A8" strokeWidth="1" />
                  {" "}
                </svg>
                {" "}
                <span style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "1.4rem" }}>
                  Cental
                  <span style={{ color: "#00C2A8" }}>
                    .
                  </span>
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Premium car rental service dedicated to providing you with the best vehicles and the most seamless rental experience across the city.
              </p>
              {" "}
              <div className="footer__newsletter">
                {" "}
                <input type="email" placeholder="Enter your email" />
                {" "}
                <button className="btn btn--primary btn--sm">
                  Subscribe
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Quick Links
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    <i className="fas fa-angle-right" />
                    {" About Us"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    <i className="fas fa-angle-right" />
                    {" Our Fleet"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    <i className="fas fa-angle-right" />
                    {" Services"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    <i className="fas fa-angle-right" />
                    {" Contact"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    <i className="fas fa-angle-right" />
                    {" Terms & Conditions"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Business Hours
              </h4>
              {" "}
              <dl className="footer__hours">
                {" "}
                <dt>
                  Monday - Friday
                </dt>
                {" "}
                <dd>
                  09:00 AM - 07:00 PM
                </dd>
                {" "}
                <dt>
                  Saturday
                </dt>
                {" "}
                <dd>
                  10:00 AM - 05:00 PM
                </dd>
                {" "}
                <dt>
                  Sunday
                </dt>
                {" "}
                <dd>
                  Closed
                </dd>
                {" "}
              </dl>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Contact Info
              </h4>
              {" "}
              <div className="footer__contact">
                {" "}
                <a href="#">
                  <i className="fas fa-map-marker-alt" />
                  {" 123 Rental Avenue, New York, USA"}
                </a>
                {" "}
                <a href="mailto:info@cental.com">
                  <i className="fas fa-envelope" />
                  {" info@cental.com"}
                </a>
                {" "}
                <a href="tel:+1234567890">
                  <i className="fas fa-phone" />
                  {" +1 (234) 567-890"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              © 2024 Cental. All rights reserved.
            </span>
            {" "}
            <div className="footer__social">
              {" "}
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-linkedin-in" />
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
        <i className="fas fa-arrow-up" />
        {" "}
      </button>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
