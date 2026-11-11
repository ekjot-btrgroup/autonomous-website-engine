// Converted from the HTML template real-estate-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/property-1.webp";
import a2 from "./assets/property-2.webp";
import a3 from "./assets/property-3.webp";
import a4 from "./assets/about.webp";
import a5 from "./assets/testimonial-1.webp";
import a6 from "./assets/testimonial-2.webp";
import a7 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..1000;1,14..32,100..1000&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-real-estate-35df">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="header__logo">
            {" "}
            <div className="header__logo-icon">
              M
            </div>
            {" "}
            <div className="header__logo-text">
              MAKA
              <span>
                A
              </span>
              N
            </div>
            {" "}
          </a>
          {" "}
          <nav className="nav" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="nav__link active">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav__link">
              About
            </a>
            {" "}
            <a href="listings.html" className="nav__link">
              Listings
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header__actions">
            {" "}
            <a href="tel:+18005551234" className="btn btn--ghost btn--sm">
              +1 800 555 1234
            </a>
            {" "}
            <a href="contact.html" className="btn btn--primary btn--sm">
              Get Started
            </a>
            {" "}
          </div>
          {" "}
          <button className="burger" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
        {" "}
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {" "}
          <a href="index.html" className="mobile-nav__link active">
            Home
          </a>
          {" "}
          <a href="about.html" className="mobile-nav__link">
            About
          </a>
          {" "}
          <a href="listings.html" className="mobile-nav__link">
            Listings
          </a>
          {" "}
          <a href="contact.html" className="mobile-nav__link">
            Contact
          </a>
          {" "}
          <div className="mobile-nav__actions">
            {" "}
            <a href="tel:+18005551234" className="btn btn--ghost">
              +1 800 555 1234
            </a>
            {" "}
            <a href="contact.html" className="btn btn--primary">
              Get Started
            </a>
            {" "}
          </div>
          {" "}
        </nav>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="container hero__grid">
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__tag">
              {" "}
              <span className="hero__tag-dot" />
              {" Trusted by 12,000+ homeowners "}
            </div>
            {" "}
            <h1>
              {"Find Your "}
              <span className="highlight">
                Dream Home
              </span>
            </h1>
            {" "}
            <p className="hero__desc">
              Discover exceptional properties in the most sought-after neighborhoods. From modern apartments to luxury villas, we match you with the perfect place to call home.
            </p>
            {" "}
            <div className="hero__stats">
              {" "}
              <div>
                {" "}
                <div className="hero__stat-num counter" data-count="2500">
                  0
                </div>
                {" "}
                <div className="hero__stat-label">
                  Properties Sold
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-num">
                  <span data-count="98">
                    0
                  </span>
                  <span>
                    %
                  </span>
                </div>
                {" "}
                <div className="hero__stat-label">
                  Client Satisfaction
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-num counter" data-count="45">
                  0
                </div>
                {" "}
                <div className="hero__stat-label">
                  Neighborhoods
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__visual">
            {" "}
            <div className="hero__image-wrapper">
              {" "}
              <img src={a0} alt="Beautiful modern home exterior" loading="eager" />
              {" "}
              <div className="hero__image-badge">
                {" "}
                <div className="hero__image-badge-icon">
                  🏠
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="hero__image-badge-text">
                    New Listing
                  </div>
                  {" "}
                  <div className="hero__image-badge-sub">
                    Greenwood Heights
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero__tags">
              {" "}
              <div className="hero__tag-float">
                <em>
                  Downtown
                </em>
                {" — 120 listings"}
              </div>
              {" "}
              <div className="hero__tag-float">
                <em>
                  Greenwood
                </em>
                {" — 85 listings"}
              </div>
              {" "}
              <div className="hero__tag-float">
                <em>
                  Riverside
                </em>
                {" — 64 listings"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div className="search-panel reveal">
          {" "}
          <div className="search-panel__inner">
            {" "}
            <form>
              {" "}
              <div className="search-panel__row">
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="search-location">
                    Location
                  </label>
                  {" "}
                  <input type="text" id="search-location" name="location" placeholder="City, neighborhood, or ZIP" />
                  {" "}
                </div>
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="search-type">
                    Property Type
                  </label>
                  {" "}
                  <select id="search-type" name="type">
                    {" "}
                    <option value="">
                      All Types
                    </option>
                    {" "}
                    <option value="apartment">
                      Apartment
                    </option>
                    {" "}
                    <option value="house">
                      House
                    </option>
                    {" "}
                    <option value="villa">
                      Villa
                    </option>
                    {" "}
                    <option value="condo">
                      Condominium
                    </option>
                    {" "}
                    <option value="penthouse">
                      Penthouse
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="search-price">
                    Max Price
                  </label>
                  {" "}
                  <select id="search-price" name="price">
                    {" "}
                    <option value="">
                      Any Price
                    </option>
                    {" "}
                    <option value="250000">
                      Up to $250,000
                    </option>
                    {" "}
                    <option value="500000">
                      Up to $500,000
                    </option>
                    {" "}
                    <option value="750000">
                      Up to $750,000
                    </option>
                    {" "}
                    <option value="1000000">
                      Up to $1,000,000
                    </option>
                    {" "}
                    <option value="2000000">
                      $1,000,000+
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn--primary btn--lg">
                  Search
                </button>
                {" "}
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
      {" "}
      <section className="section section--lg" style={{ paddingTop: "calc(var(--space-24) + 60px)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-header__label">
              Featured Properties
            </div>
            {" "}
            <h2>
              Handpicked Homes for You
            </h2>
            {" "}
            <p>
              Explore our curated selection of premium properties across the city's most desirable locations.
            </p>
            {" "}
          </div>
          {" "}
          <div className="property-grid stagger">
            {" "}
            {" "}
            <div className="property-card reveal" data-category="house">
              {" "}
              <div className="property-card__image">
                {" "}
                <img src={a1} alt="Modern villa with pool" loading="lazy" />
                {" "}
                <span className="property-card__badge property-card__badge--sale">
                  For Sale
                </span>
                {" "}
                <button className="property-card__favorite" aria-label="Save property">
                  ♡
                </button>
                {" "}
              </div>
              {" "}
              <div className="property-card__body">
                {" "}
                <div className="property-card__neighborhood">
                  📍 Greenwood Heights
                </div>
                {" "}
                <h3 className="property-card__title">
                  Modern Villa with Private Pool
                </h3>
                {" "}
                <div className="property-card__location">
                  📍 24 Maple Avenue, Greenwood
                </div>
                {" "}
                <div className="property-card__features">
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🛌
                    </span>
                    {" 4 Beds"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🚿
                    </span>
                    {" 3 Baths"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      📏
                    </span>
                    {" 3,200 sqft"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="property-card__footer">
                {" "}
                <div className="property-card__price">
                  $875,000
                </div>
                {" "}
                <a href="listings.html" className="property-card__cta">
                  View Details →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="property-card reveal" data-category="apartment">
              {" "}
              <div className="property-card__image">
                {" "}
                <img src={a2} alt="Luxury downtown apartment" loading="lazy" />
                {" "}
                <span className="property-card__badge property-card__badge--new">
                  New
                </span>
                {" "}
                <button className="property-card__favorite" aria-label="Save property">
                  ♡
                </button>
                {" "}
              </div>
              {" "}
              <div className="property-card__body">
                {" "}
                <div className="property-card__neighborhood">
                  📍 Downtown Core
                </div>
                {" "}
                <h3 className="property-card__title">
                  Luxury Downtown Apartment
                </h3>
                {" "}
                <div className="property-card__location">
                  📍 102 Central Blvd, Unit 15A
                </div>
                {" "}
                <div className="property-card__features">
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🛌
                    </span>
                    {" 2 Beds"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🚿
                    </span>
                    {" 2 Baths"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      📏
                    </span>
                    {" 1,400 sqft"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="property-card__footer">
                {" "}
                <div className="property-card__price">
                  $520,000
                </div>
                {" "}
                <a href="listings.html" className="property-card__cta">
                  View Details →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="property-card reveal" data-category="villa">
              {" "}
              <div className="property-card__image">
                {" "}
                <img src={a3} alt="Waterfront estate" loading="lazy" />
                {" "}
                <span className="property-card__badge property-card__badge--sale">
                  For Sale
                </span>
                {" "}
                <button className="property-card__favorite" aria-label="Save property">
                  ♡
                </button>
                {" "}
              </div>
              {" "}
              <div className="property-card__body">
                {" "}
                <div className="property-card__neighborhood">
                  📍 Riverside
                </div>
                {" "}
                <h3 className="property-card__title">
                  Waterfront Estate with Dock
                </h3>
                {" "}
                <div className="property-card__location">
                  📍 8 Lakeshore Drive, Riverside
                </div>
                {" "}
                <div className="property-card__features">
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🛌
                    </span>
                    {" 5 Beds"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      🚿
                    </span>
                    {" 4 Baths"}
                  </div>
                  {" "}
                  <div className="property-card__feature">
                    <span className="property-card__feature-icon">
                      📏
                    </span>
                    {" 5,100 sqft"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="property-card__footer">
                {" "}
                <div className="property-card__price">
                  $1,350,000
                </div>
                {" "}
                <a href="listings.html" className="property-card__cta">
                  View Details →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--space-10)" }} className="reveal">
            {" "}
            <a href="listings.html" className="btn btn--outline btn--lg">
              View All Properties →
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section about">
        {" "}
        <div className="container">
          {" "}
          <div className="about__grid">
            {" "}
            <div className="about__images reveal-left">
              {" "}
              <div className="about__image-main">
                {" "}
                <img src={a4} alt="MAKAAN office team" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="about__image-accent">
                {" "}
                <div className="about__image-accent-num">
                  <span data-count="15">
                    0
                  </span>
                  +
                </div>
                {" "}
                <div className="about__image-accent-text">
                  Years Experience
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about__content reveal-right">
              {" "}
              <div className="about__label">
                About MAKAAN
              </div>
              {" "}
              <h2 className="about__title">
                Your Trusted Partner in Real Estate
              </h2>
              {" "}
              <p className="about__desc">
                With over 15 years of experience in the real estate market, MAKAAN has helped thousands of families find their perfect home. Our deep local knowledge, personalized service, and commitment to integrity set us apart.
              </p>
              {" "}
              <div className="about__features">
                {" "}
                <div className="about__feature">
                  {" "}
                  <div className="about__feature-icon">
                    🏆
                  </div>
                  {" "}
                  <div className="about__feature-text">
                    Award-Winning Agency
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about__feature">
                  {" "}
                  <div className="about__feature-icon">
                    🔍
                  </div>
                  {" "}
                  <div className="about__feature-text">
                    Market Analysis
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about__feature">
                  {" "}
                  <div className="about__feature-icon">
                    🤝
                  </div>
                  {" "}
                  <div className="about__feature-text">
                    Trusted Negotiators
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="about__feature">
                  {" "}
                  <div className="about__feature-icon">
                    📞
                  </div>
                  {" "}
                  <div className="about__feature-text">
                    24/7 Support
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn--primary">
                Learn More About Us →
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
      <section className="section testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-header__label">
              Client Stories
            </div>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
            <p>
              Real experiences from real homeowners who found their dream properties with MAKAAN.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonial-grid stagger">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "MAKAAN made our home buying experience seamless. Their knowledge of the Greenwood area was invaluable, and they found us a property that exceeded our expectations."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a5} alt="Sarah Mitchell" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Mitchell
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Homeowner, Greenwood
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "From the first consultation to closing day, the MAKAAN team was professional, responsive, and genuinely invested in finding us the right home. Could not recommend them more."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a6} alt="James Rodriguez" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    James Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    First-Time Buyer
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "We sold our property above asking price in just 12 days. MAKAAN's staging advice and marketing strategy were outstanding. They truly know the market."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a7} alt="Emily Chen" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Emily Chen
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Seller, Downtown
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
      <section className="section cta-section">
        {" "}
        <div className="container cta__inner reveal">
          {" "}
          <h2 className="cta__title">
            Ready to Find Your Dream Home?
          </h2>
          {" "}
          <p className="cta__desc">
            Let our expert agents guide you through every step of your property journey. Your perfect home is just a conversation away.
          </p>
          {" "}
          <div className="cta__buttons">
            {" "}
            <a href="listings.html" className="btn btn--white btn--lg">
              Browse Properties →
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Schedule a Consultation
            </a>
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
              <a href="index.html" className="header__logo" style={{ marginBottom: "var(--space-2)" }}>
                {" "}
                <div className="header__logo-icon">
                  M
                </div>
                {" "}
                <div className="header__logo-text" style={{ color: "#fff" }}>
                  MAKA
                  <span>
                    A
                  </span>
                  N
                </div>
                {" "}
              </a>
              {" "}
              <p className="footer__brand-desc">
                Helping families find their dream homes since 2009. Expert guidance, local knowledge, and a commitment to making your property journey seamless.
              </p>
              {" "}
              <div className="footer__socials">
                {" "}
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  X
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  ig
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  in
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="about.html" className="footer__link">
                  About Us
                </a>
                {" "}
                <a href="listings.html" className="footer__link">
                  Property Listings
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Contact
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Market Reports
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Blog
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Properties
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="#" className="footer__link">
                  Houses for Sale
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Apartments
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Luxury Villas
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Commercial
                </a>
                {" "}
                <a href="#" className="footer__link">
                  New Developments
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Stay Updated
              </h4>
              {" "}
              <p style={{ fontSize: "var(--fs-sm)", marginBottom: "var(--space-4)", color: "var(--clr-gray-500)" }}>
                Get the latest listings and market insights delivered to your inbox.
              </p>
              {" "}
              <div className="footer__newsletter">
                {" "}
                <form className="footer__newsletter-form">
                  {" "}
                  <input type="email" className="footer__newsletter-input" placeholder="Your email address" aria-label="Email for newsletter" />
                  {" "}
                  <button type="submit" className="footer__newsletter-btn">
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
          <div className="footer__bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" MAKAAN. All rights reserved."}
            </p>
            {" "}
            <div className="footer__bottom-links">
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" "}
              <a href="#">
                Terms of Service
              </a>
              {" "}
              <a href="#">
                Cookie Policy
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
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
