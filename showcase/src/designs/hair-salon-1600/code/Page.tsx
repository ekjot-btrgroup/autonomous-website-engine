// Converted from the HTML template hair-salon-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bg.webp";
import a1 from "./assets/shampoo-1.webp";
import a2 from "./assets/shampoo-2.webp";
import a3 from "./assets/product-1.webp";
import a4 from "./assets/product-2.webp";
import a5 from "./assets/testimonial-1.webp";
import a6 from "./assets/testimonial-2.webp";
import a7 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-hair-salon-1600">
      {" "}
      {" "}
      <header className="header header--transparent">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="header__brand">
            {" "}
            <span className="header__logo">
              Studio77
            </span>
            {" "}
            <span className="header__tagline">
              Where Style Meets Artistry
            </span>
            {" "}
          </a>
          {" "}
          <nav className="header__nav nav">
            {" "}
            <ul className="nav__list">
              {" "}
              <li>
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="#products" className="nav__link">
                  Products
                </a>
              </li>
              {" "}
              <li>
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav__link">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <a href="contact.html" className="btn btn--primary btn--sm header__cta desktop-only">
              Book Now
            </a>
            {" "}
          </nav>
          {" "}
          <div className="burger" aria-label="Toggle navigation" role="button" tabIndex="0">
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <nav className="mobile-nav">
        {" "}
        <ul className="mobile-nav__list">
          {" "}
          <li>
            <a href="#services" className="mobile-nav__link">
              Services
            </a>
          </li>
          {" "}
          <li>
            <a href="#products" className="mobile-nav__link">
              Products
            </a>
          </li>
          {" "}
          <li>
            <a href="#about" className="mobile-nav__link">
              About
            </a>
          </li>
          {" "}
          <li>
            <a href="contact.html" className="mobile-nav__link">
              Contact
            </a>
          </li>
          {" "}
        </ul>
        {" "}
        <div className="mobile-nav__cta">
          {" "}
          <a href="contact.html" className="btn btn--primary">
            Book Now
          </a>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      <div className="mobile-nav__overlay" />
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <img src={a0} alt="STUDIO77 salon interior" className="hero__bg" />
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="container hero__content">
          {" "}
          <span className="hero__label">
            Premium Hair Salon
          </span>
          {" "}
          <h1 className="hero__title">
            {"Where Style Meets "}
            <em>
              Artistry
            </em>
          </h1>
          {" "}
          <p className="hero__subtitle">
            At STUDIO77, every visit is a transformation. Experience bespoke hair services crafted by master stylists who understand the language of luxury.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="contact.html" className="btn btn--primary btn--lg">
              Book Your Visit
            </a>
            {" "}
            <a href="#services" className="btn btn--outline btn--lg">
              Explore Services
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__scroll">
          {" "}
          <span>
            Scroll
          </span>
          {" "}
          <div className="hero__scroll-line" />
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section id="services" className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-label">
              What We Offer
            </span>
            {" "}
            <h2>
              Our Signature Services
            </h2>
            {" "}
            <p>
              From precision cuts to transformative color, every service is tailored to your unique style and vision.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal reveal--delay-1">
              {" "}
              <div className="service-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {" "}
                  <path d="M6 3v18" />
                  {" "}
                  <path d="M18 3v18" />
                  {" "}
                  <path d="M6 8c4-2 8 0 12-2" />
                  {" "}
                  <path d="M6 14c4-2 8 0 12-2" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="service-card__title">
                {"Cut & Style"}
              </h3>
              {" "}
              <p className="service-card__desc">
                Precision cuts and blow-dry styling by our senior artisans. Every cut is a conversation between vision and craft, designed to flatter your features.
              </p>
              {" "}
              <div className="service-card__price">
                {"From $85 "}
                <span>
                  / session
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal--delay-2">
              {" "}
              <div className="service-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {" "}
                  <circle cx="12" cy="12" r="10" />
                  {" "}
                  <path d="M12 2a10 10 0 0 0 0 20" />
                  {" "}
                  <path d="M8 12s1.5-4 4-4 4 4 4 4-1.5 4-4 4-4-4-4-4" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="service-card__title">
                Color
              </h3>
              {" "}
              <p className="service-card__desc">
                From subtle highlights to bold transformations, our color experts create dimension and depth using premium, hair-friendly formulas.
              </p>
              {" "}
              <div className="service-card__price">
                {"From $120 "}
                <span>
                  / session
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal--delay-3">
              {" "}
              <div className="service-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {" "}
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
                  {" "}
                  <path d="M12 6v6l4 2" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="service-card__title">
                Treatment
              </h3>
              {" "}
              <p className="service-card__desc">
                Restore, nourish, and rejuvenate your hair with our luxurious deep-conditioning and keratin treatments for lasting health and shine.
              </p>
              {" "}
              <div className="service-card__price">
                {"From $95 "}
                <span>
                  / session
                </span>
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
      <section id="products" className="section section--cream">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-label">
              Salon Essentials
            </span>
            {" "}
            <h2>
              Curated Products
            </h2>
            {" "}
            <p>
              Hand-selected professional products to maintain your look between visits. Only the finest formulas make it to our shelves.
            </p>
            {" "}
          </div>
          {" "}
          <div className="products-grid">
            {" "}
            <div className="product-card reveal reveal--delay-1" data-category="shampoo">
              {" "}
              <span className="product-card__badge">
                Bestseller
              </span>
              {" "}
              <div className="product-card__image-wrapper">
                {" "}
                <img src={a1} alt="Luxe Repair Shampoo" className="product-card__image" />
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Shampoo
                </span>
                {" "}
                <h4 className="product-card__name">
                  Luxe Repair Shampoo
                </h4>
                {" "}
                <p className="product-card__desc">
                  Deep nourishing formula for damaged hair, infused with argan oil and keratin.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <span className="product-card__price">
                    $42
                  </span>
                  {" "}
                  <button className="product-card__btn">
                    Add to Cart
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal reveal--delay-2" data-category="shampoo">
              {" "}
              <div className="product-card__image-wrapper">
                {" "}
                <img src={a2} alt="Volume Boost Shampoo" className="product-card__image" />
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Shampoo
                </span>
                {" "}
                <h4 className="product-card__name">
                  Volume Boost Shampoo
                </h4>
                {" "}
                <p className="product-card__desc">
                  Lightweight formula that adds body and bounce to fine, flat hair.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <span className="product-card__price">
                    $38
                  </span>
                  {" "}
                  <button className="product-card__btn">
                    Add to Cart
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal reveal--delay-3" data-category="product">
              {" "}
              <div className="product-card__image-wrapper">
                {" "}
                <img src={a3} alt="Silk Finish Serum" className="product-card__image" />
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Serum
                </span>
                {" "}
                <h4 className="product-card__name">
                  Silk Finish Serum
                </h4>
                {" "}
                <p className="product-card__desc">
                  Lightweight smoothing serum that eliminates frizz and adds mirror-like shine.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <span className="product-card__price">
                    $56
                  </span>
                  {" "}
                  <button className="product-card__btn">
                    Add to Cart
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal reveal--delay-4" data-category="product">
              {" "}
              <span className="product-card__badge">
                New
              </span>
              {" "}
              <div className="product-card__image-wrapper">
                {" "}
                <img src={a4} alt="Rose Gold Mask" className="product-card__image" />
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Treatment
                </span>
                {" "}
                <h4 className="product-card__name">
                  Rose Gold Mask
                </h4>
                {" "}
                <p className="product-card__desc">
                  Intensive weekly mask with rose extract and gold particles for radiant hair.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <span className="product-card__price">
                    $64
                  </span>
                  {" "}
                  <button className="product-card__btn">
                    Add to Cart
                  </button>
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-label">
              Client Stories
            </span>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
            <p>
              Real transformations. Real stories. Discover why our clients keep coming back to STUDIO77.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal reveal--delay-1">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "I have never felt so confident after leaving a salon. The team at STUDIO77 truly understands what luxury hair care means. Every detail is perfect."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a5} alt="Sophia M." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sophia M.
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Regular Client
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal reveal--delay-2">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "The color work is absolutely stunning. I came in with a Pinterest inspiration and left with something even better. STUDIO77 is pure artistry."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a6} alt="Elena R." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Elena R.
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Color Client
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal reveal--delay-3">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__quote">
                "From the warm welcome to the exquisite result, every moment felt special. STUDIO77 has set a new standard for what a hair salon should be."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a7} alt="Amara K." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Amara K.
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    New Client
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
      <section className="booking-cta">
        {" "}
        <div className="container">
          {" "}
          <div className="booking-cta__inner">
            {" "}
            <div className="booking-cta__content reveal reveal--left">
              {" "}
              <span className="section-label" style={{ color: "var(--rose-gold)", paddingLeft: "40px", position: "relative", display: "inline-block", marginBottom: "24px" }}>
                {" "}
                <span style={{ position: "absolute", left: "0", top: "50%", width: "30px", height: "1px", background: "var(--rose-gold)" }} />
                {" Reserve Your Time "}
              </span>
              {" "}
              <h2 className="booking-cta__title">
                {"Ready for Your "}
                <em>
                  Transformation?
                </em>
              </h2>
              {" "}
              <p className="booking-cta__text">
                Book your appointment today and experience the STUDIO77 difference. Our master stylists are ready to bring your vision to life.
              </p>
              {" "}
              <a href="contact.html" className="btn btn--primary btn--lg">
                Book Appointment
              </a>
              {" "}
            </div>
            {" "}
            <div className="booking-cta__form reveal reveal--right">
              {" "}
              <h3 className="booking-cta__form-title">
                Quick Booking
              </h3>
              {" "}
              <form data-form="booking" action="#" method="post">
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="booking-name">
                      Full Name
                    </label>
                    {" "}
                    <input type="text" id="booking-name" name="name" placeholder="Your name" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="booking-phone">
                      Phone
                    </label>
                    {" "}
                    <input type="tel" id="booking-phone" name="phone" placeholder="(555) 000-0000" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-group">
                  {" "}
                  <label htmlFor="booking-service">
                    Service
                  </label>
                  {" "}
                  <select id="booking-service" name="service" required={true}>
                    {" "}
                    <option value="" disabled={true}>
                      Select a service
                    </option>
                    {" "}
                    <option value="cut">
                      {"Cut & Style — from $85"}
                    </option>
                    {" "}
                    <option value="color">
                      Color — from $120
                    </option>
                    {" "}
                    <option value="treatment">
                      Treatment — from $95
                    </option>
                    {" "}
                    <option value="blowdry">
                      Blow Dry — from $55
                    </option>
                    {" "}
                    <option value="bridal">
                      Bridal Package — from $350
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="booking-date">
                      Preferred Date
                    </label>
                    {" "}
                    <input type="date" id="booking-date" name="date" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="booking-time">
                      Preferred Time
                    </label>
                    {" "}
                    <select id="booking-time" name="time" required={true}>
                      {" "}
                      <option value="" disabled={true}>
                        Select time
                      </option>
                      {" "}
                      <option value="09:00">
                        9:00 AM
                      </option>
                      {" "}
                      <option value="10:00">
                        10:00 AM
                      </option>
                      {" "}
                      <option value="11:00">
                        11:00 AM
                      </option>
                      {" "}
                      <option value="12:00">
                        12:00 PM
                      </option>
                      {" "}
                      <option value="13:00">
                        1:00 PM
                      </option>
                      {" "}
                      <option value="14:00">
                        2:00 PM
                      </option>
                      {" "}
                      <option value="15:00">
                        3:00 PM
                      </option>
                      {" "}
                      <option value="16:00">
                        4:00 PM
                      </option>
                      {" "}
                      <option value="17:00">
                        5:00 PM
                      </option>
                      {" "}
                    </select>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn--primary" style={{ width: "100%", marginTop: "8px" }}>
                  Confirm Booking
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
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand-name">
                Studio77
              </div>
              {" "}
              <p className="footer__brand-desc">
                Where Style Meets Artistry. Premium hair salon offering bespoke services in a refined atmosphere.
              </p>
              {" "}
              <div className="social-links">
                {" "}
                <a href="#" className="social-links__link" aria-label="Instagram">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="social-links__link" aria-label="Facebook">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="social-links__link" aria-label="Pinterest">
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12a4 4 0 1 1 8 0c0 4-3 8-6 8" />
                    <path d="M9 18l1.5-6" />
                  </svg>
                  {" "}
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
                <a href="#services" className="footer__link">
                  Services
                </a>
                {" "}
                <a href="#products" className="footer__link">
                  Products
                </a>
                {" "}
                <a href="about.html" className="footer__link">
                  About Us
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Services
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="#services" className="footer__link">
                  {"Cut & Style"}
                </a>
                {" "}
                <a href="#services" className="footer__link">
                  Color
                </a>
                {" "}
                <a href="#services" className="footer__link">
                  Treatment
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Book Now
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <span className="footer__link">
                  123 Style Avenue, Suite 77
                </span>
                {" "}
                <span className="footer__link">
                  New York, NY 10001
                </span>
                {" "}
                <a href="tel:+15551234567" className="footer__link">
                  (555) 123-4567
                </a>
                {" "}
                <a href="mailto:hello@studio77.com" className="footer__link">
                  hello@studio77.com
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
              © 2026 STUDIO77. All rights reserved.
            </span>
            {" "}
            <div className="footer__socials">
              {" "}
              <a href="#" className="footer__social-link" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="#" className="footer__social-link" aria-label="Facebook">
                FB
              </a>
              {" "}
              <a href="#" className="footer__social-link" aria-label="Pinterest">
                PI
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
    </div>
  );
}
