// Converted from the HTML template dry-cleaning-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-dry-cleaning-88e9">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <svg className="logo__icon hanger-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {" "}
              <path d="M20 4 L20 10" />
              {" "}
              <circle cx="20" cy="4" r="3" />
              {" "}
              <path d="M20 10 L4 30 L36 30 Z" />
              {" "}
            </svg>
            {" DRY"}
            <span>
              ME
            </span>
            {" "}
          </a>
          {" "}
          <nav>
            {" "}
            <ul className="nav__list">
              {" "}
              <li>
                <a href="index.html" className="nav__link">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html" className="nav__link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html" className="nav__link">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav__link">
                  Contact
                </a>
              </li>
              {" "}
              <li className="nav__cta">
                <a href="contact.html#pickup" className="btn btn--primary btn--sm">
                  Schedule Pickup
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <button className="burger" aria-label="Toggle menu" aria-expanded="false">
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
      </header>
      {" "}
      {" "}
      <section className="hero-carousel">
        {" "}
        <div className="hero-carousel__track">
          {" "}
          <div className="hero-carousel__slide hero-carousel__slide--active">
            {" "}
            <img src={a0} alt="Professional dry cleaning service with pressed garments" />
            {" "}
            <div className="hero-carousel__overlay" />
            {" "}
          </div>
          {" "}
          <div className="hero-carousel__slide">
            {" "}
            <img src={a1} alt="Fresh clean laundry neatly folded" />
            {" "}
            <div className="hero-carousel__overlay" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="hero-carousel__content">
            {" "}
            <span className="badge-fresh hero__badge">
              {"Fresh & Clean"}
            </span>
            {" "}
            <h1 className="hero__title">
              {"Premium Garment "}
              <span>
                Care
              </span>
              , Delivered
            </h1>
            {" "}
            <p className="hero__desc">
              We treat every piece like it's our own. Professional dry cleaning, expert stain removal, and garment care — all with free pickup and delivery.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="contact.html#pickup" className="btn btn--primary">
                Schedule Pickup
              </a>
              {" "}
              <a href="services.html" className="btn btn--outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                View Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  15K+
                </div>
                {" "}
                <div className="hero__stat-label">
                  Garments Cleaned
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  4.9
                </div>
                {" "}
                <div className="hero__stat-label">
                  Customer Rating
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  24h
                </div>
                {" "}
                <div className="hero__stat-label">
                  Turnaround
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
        <div className="hero-carousel__dots">
          {" "}
          <button className="hero-carousel__dot hero-carousel__dot--active" aria-label="Slide 1" />
          {" "}
          <button className="hero-carousel__dot" aria-label="Slide 2" />
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--light" id="features">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section__title" data-reveal="">
            What We Do Best
          </h2>
          {" "}
          <p className="section__subtitle" data-reveal="">
            Professional garment care tailored to your lifestyle. Every item handled with precision and care.
          </p>
          {" "}
          <div className="features-grid" data-reveal-stagger="">
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="feature-card__title">
                {"Wash & Press"}
              </h3>
              {" "}
              <p className="feature-card__desc">
                Crisp, professional pressing with eco-friendly detergents. Your shirts and blouses look boardroom-ready every time.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46 16 2 12 3.46 8 2 3.62 3.46a2 2 0 0 0-1.34 1.91v13.26a2 2 0 0 0 2.66 1.84L8 19l4-1.46L16 19l4.38-1.46a2 2 0 0 0 1.34-1.84V5.37a2 2 0 0 0-1.34-1.91z" />
                  <line x1="12" y1="2" x2="12" y2="17.54" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="feature-card__title">
                Delicate Care
              </h3>
              {" "}
              <p className="feature-card__desc">
                Silk, cashmere, lace, and wool handled by specialists. Gentle cleaning processes that preserve fabric integrity and color.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="feature-card__title">
                Stain Removal
              </h3>
              {" "}
              <p className="feature-card__desc">
                Stubborn stains, gone. Our advanced treatment process tackles wine, ink, grease, and set-in marks with precision.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h3 className="feature-card__title">
                Alterations
              </h3>
              {" "}
              <p className="feature-card__desc">
                Expert tailoring and alterations for the perfect fit. From hemming to resizing, we make your clothes work for you.
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
          <h2 className="section__title" data-reveal="">
            How It Works
          </h2>
          {" "}
          <p className="section__subtitle" data-reveal="">
            Four simple steps to fresh, clean garments — without leaving your door.
          </p>
          {" "}
          <div className="steps-grid" data-reveal-stagger="">
            {" "}
            <div className="step-card">
              {" "}
              <div className="step-card__number">
                1
              </div>
              {" "}
              <h4 className="step-card__title">
                Schedule
              </h4>
              {" "}
              <p className="step-card__desc">
                Book a pickup online or by phone. Pick a time that suits your routine.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card">
              {" "}
              <div className="step-card__number">
                2
              </div>
              {" "}
              <h4 className="step-card__title">
                Collect
              </h4>
              {" "}
              <p className="step-card__desc">
                We come to your door, inspect each item, and handle everything with care.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card">
              {" "}
              <div className="step-card__number">
                3
              </div>
              {" "}
              <h4 className="step-card__title">
                Clean
              </h4>
              {" "}
              <p className="step-card__desc">
                Expert cleaning in our state-of-the-art facility with eco-friendly processes.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step-card">
              {" "}
              <div className="step-card__number">
                4
              </div>
              {" "}
              <h4 className="step-card__title">
                Deliver
              </h4>
              {" "}
              <p className="step-card__desc">
                Fresh, pressed garments delivered back to your doorstep. Ready to wear.
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
      <section className="section section--cream">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section__title" data-reveal="">
            What Our Customers Say
          </h2>
          {" "}
          <p className="section__subtitle" data-reveal="">
            Trusted by thousands for premium garment care and hassle-free service.
          </p>
          {" "}
          <div className="grid-3" data-reveal-stagger="">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "DRYME completely transformed my wardrobe maintenance. My silk blouses come back looking brand new every single time. The pickup service is incredibly convenient."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  SA
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Anderson
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Regular Customer
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
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "They removed a red wine stain from my favorite suit that I thought was permanently ruined. Professional, fast, and the price was very fair for the quality."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  JM
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    James Mitchell
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Business Professional
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
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The alteration service is top-notch. They tailored my wedding dress perfectly and it fit like a dream. I recommend DRYME to everyone I know."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  LP
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Lisa Park
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Bride-to-be
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
          <h2 data-reveal="">
            Ready for Fresh, Clean Clothes?
          </h2>
          {" "}
          <p data-reveal="">
            Join thousands of happy customers who trust DRYME with their wardrobe. Your first pickup is on us.
          </p>
          {" "}
          <div className="cta-section__actions" data-reveal="">
            {" "}
            <a href="contact.html#pickup" className="btn btn--primary">
              Schedule Free Pickup
            </a>
            {" "}
            <a href="services.html" className="btn btn--white">
              Explore Services
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
            <div className="footer__brand">
              {" "}
              <a href="index.html" className="logo">
                {" "}
                <svg className="logo__icon hanger-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {" "}
                  <path d="M20 4 L20 10" />
                  {" "}
                  <circle cx="20" cy="4" r="3" />
                  {" "}
                  <path d="M20 10 L4 30 L36 30 Z" />
                  {" "}
                </svg>
                {" DRY"}
                <span>
                  ME
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Premium dry cleaning and laundry service. We pick up, clean, and deliver — so you can focus on what matters.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <ul className="footer__links">
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
            <div>
              {" "}
              <h4 className="footer__heading">
                Services
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="services.html">
                    Dry Cleaning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Wash & Press"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Delicate Care
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Alterations
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer__newsletter">
              {" "}
              <h4 className="footer__heading">
                Stay Fresh
              </h4>
              {" "}
              <p>
                Get tips on garment care and exclusive offers.
              </p>
              {" "}
              <form className="footer__newsletter-form">
                {" "}
                <input type="email" placeholder="your@email.com" aria-label="Email for newsletter" />
                {" "}
                <button type="submit" className="btn btn--primary btn--sm">
                  Join
                </button>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="" />
              {" DRYME. All rights reserved."}
            </p>
            {" "}
            <div className="footer__social">
              {" "}
              <a href="#" aria-label="Facebook">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
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
