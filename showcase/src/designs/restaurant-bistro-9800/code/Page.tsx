// Converted from the HTML template restaurant-bistro-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/logo-white.svg";
import a1 from "./assets/hero.svg";
import a2 from "./assets/food-1.svg";
import a3 from "./assets/food-2.svg";
import a4 from "./assets/food-3.svg";
import a5 from "./assets/interior-1.svg";
import a6 from "./assets/ambiance-1.svg";
import a7 from "./assets/ambiance-2.svg";
import a8 from "./assets/reservation.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-restaurant-bistro-9800">
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container navbar__inner">
          {" "}
          <a href="index.html" className="navbar__logo">
            {" "}
            <img src={a0} alt="RESTORAN" />
            {" "}
          </a>
          {" "}
          <div className="navbar__menu">
            {" "}
            <a href="index.html" className="navbar__link navbar__link--active">
              Home
            </a>
            {" "}
            <a href="menu.html" className="navbar__link">
              Menu
            </a>
            {" "}
            <a href="about.html" className="navbar__link">
              About
            </a>
            {" "}
            <a href="contact.html" className="navbar__link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="navbar__cta">
              <span className="btn btn--primary">
                Reserve a Table
              </span>
            </a>
            {" "}
          </div>
          {" "}
          <button className="navbar__toggle" aria-label="Toggle menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
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
          <img src={a1} alt="RESTORAN interior ambiance" />
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="hero__content">
          {" "}
          <span className="hero__badge">
            Est. 2019 — Fine Dining
          </span>
          {" "}
          <h1 className="hero__title">
            Where Every Meal
            <br />
            {"Tells a "}
            <span>
              Story
            </span>
          </h1>
          {" "}
          <p className="hero__subtitle">
            A culinary journey through locally sourced ingredients, time-honored techniques, and the art of plating. Experience dining reimagined.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="menu.html" className="btn btn--primary">
              Explore Our Menu
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline">
              Reserve a Table
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__scroll">
          {" Scroll "}
          <div className="hero__scroll-line" />
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
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              Signature Creations
            </span>
            {" "}
            <h2 className="section-header__title">
              Our Finest Dishes
            </h2>
            {" "}
            <div className="section-header__divider" />
            {" "}
            <p className="section-header__text">
              Each plate is a canvas, each flavor a chapter in our culinary narrative.
            </p>
            {" "}
          </div>
          {" "}
          <div className="dishes-grid">
            {" "}
            <div className="dish-card reveal reveal-delay-1">
              {" "}
              <div className="dish-card__image">
                {" "}
                <img src={a2} alt="Wagyu Beef Tenderloin" />
                {" "}
                <span className="dish-card__tag">
                  Chef's Pick
                </span>
                {" "}
              </div>
              {" "}
              <div className="dish-card__body">
                {" "}
                <h3 className="dish-card__name">
                  Wagyu Beef Tenderloin
                </h3>
                {" "}
                <p className="dish-card__desc">
                  A5 Japanese wagyu, truffle jus, roasted root vegetables, and a red wine reduction.
                </p>
                {" "}
                <div className="dish-card__footer">
                  {" "}
                  <span className="dish-card__price">
                    $68
                  </span>
                  {" "}
                  <a href="menu.html" className="dish-card__order">
                    View Details →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="dish-card reveal reveal-delay-2">
              {" "}
              <div className="dish-card__image">
                {" "}
                <img src={a3} alt="Pan-Seared Sea Bass" />
                {" "}
              </div>
              {" "}
              <div className="dish-card__body">
                {" "}
                <h3 className="dish-card__name">
                  Pan-Seared Sea Bass
                </h3>
                {" "}
                <p className="dish-card__desc">
                  Chilean sea bass, saffron risotto, blistered cherry tomatoes, and basil oil.
                </p>
                {" "}
                <div className="dish-card__footer">
                  {" "}
                  <span className="dish-card__price">
                    $52
                  </span>
                  {" "}
                  <a href="menu.html" className="dish-card__order">
                    View Details →
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="dish-card reveal reveal-delay-3">
              {" "}
              <div className="dish-card__image">
                {" "}
                <img src={a4} alt="Black Truffle Risotto" />
                {" "}
                <span className="dish-card__tag">
                  Seasonal
                </span>
                {" "}
              </div>
              {" "}
              <div className="dish-card__body">
                {" "}
                <h3 className="dish-card__name">
                  Black Truffle Risotto
                </h3>
                {" "}
                <p className="dish-card__desc">
                  Arborio rice, black winter truffle, aged parmesan, and a touch of mascarpone.
                </p>
                {" "}
                <div className="dish-card__footer">
                  {" "}
                  <span className="dish-card__price">
                    $44
                  </span>
                  {" "}
                  <a href="menu.html" className="dish-card__order">
                    View Details →
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
          <div style={{ textAlign: "center", marginTop: "50px" }} className="reveal">
            {" "}
            <a href="menu.html" className="btn btn--dark">
              View Full Menu
            </a>
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
          <div className="about-preview">
            {" "}
            <div className="about-preview__image reveal">
              {" "}
              <img src={a5} alt="RESTORAN elegant interior" />
              {" "}
            </div>
            {" "}
            <div className="about-preview__content reveal reveal-delay-1">
              {" "}
              <span className="about-preview__label">
                Our Story
              </span>
              {" "}
              <h2 className="about-preview__title">
                A Passion for
                <br />
                Extraordinary Flavor
              </h2>
              {" "}
              <p className="about-preview__text">
                Founded in 2019, RESTORAN was born from a simple belief: that food is more than sustenance. It is memory, connection, and art. Our team of culinary artisans sources the finest seasonal ingredients to craft dishes that linger long after the last bite.
              </p>
              {" "}
              <div className="about-preview__stats">
                {" "}
                <div>
                  {" "}
                  <div className="stat__number">
                    6+
                  </div>
                  {" "}
                  <div className="stat__label">
                    Years of Craft
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="stat__number">
                    15k
                  </div>
                  {" "}
                  <div className="stat__label">
                    Happy Guests
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="stat__number">
                    12
                  </div>
                  {" "}
                  <div className="stat__label">
                    Awards Won
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn--ghost">
                Learn More About Us
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              The Experience
            </span>
            {" "}
            <h2 className="section-header__title">
              An Atmosphere to Savor
            </h2>
            {" "}
            <div className="section-header__divider" />
            {" "}
            <p className="section-header__text">
              From candlelit evenings to sun-drenched brunches, every moment at RESTORAN is curated for comfort and delight.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="reveal">
            {" "}
            <img src={a6} alt="Evening ambiance" style={{ borderRadius: "12px", width: "100%", height: "300px", objectFit: "cover" }} />
            {" "}
            <img src={a7} alt="Candlelit dining" style={{ borderRadius: "12px", width: "100%", height: "300px", objectFit: "cover" }} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--burgundy">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-header__label">
              Guest Voices
            </span>
            {" "}
            <h2 className="section-header__title">
              What Our Guests Say
            </h2>
            {" "}
            <div className="section-header__divider" />
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal reveal-delay-1">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "An unforgettable evening. The wagyu was cooked to absolute perfection, and the staff made us feel like family. We will be back."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  E
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Elena Marchetti
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Food Critic, City Dining Guide
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal reveal-delay-2">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The truffle risotto was the best I have ever had outside of Italy. The ambiance is elegant without being pretentious. A true gem."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  J
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    James Whitfield
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Regular Guest
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal reveal-delay-3">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                "We celebrated our anniversary here and it was magical. Every detail, from the amuse-bouche to the dessert, was thoughtful and exquisite."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  S
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    {"Sarah & David Lin"}
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Anniversary Guests
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
      <section className="reservation-cta">
        {" "}
        <div className="reservation-cta__bg">
          {" "}
          <img src={a8} alt="Reservation background" />
          {" "}
        </div>
        {" "}
        <div className="reservation-cta__overlay" />
        {" "}
        <div className="container reservation-cta__content reveal">
          {" "}
          <h2 className="reservation-cta__title">
            Reserve Your Experience
          </h2>
          {" "}
          <p className="reservation-cta__text">
            Whether it is an intimate dinner for two or a celebration with friends, we will set the perfect table for you.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--primary">
            Book a Table
          </a>
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
            <div className="footer__brand">
              {" "}
              <div className="footer__logo">
                {" "}
                <img src={a0} alt="RESTORAN" />
                {" "}
              </div>
              {" "}
              <p className="footer__desc">
                Where every meal tells a story. A premium dining experience crafted with passion, locally sourced ingredients, and unwavering attention to detail.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  IG
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  FB
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  TW
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
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="menu.html">
                    Menu
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
                Hours
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="#">
                    Mon - Thu: 11am - 10pm
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Fri - Sat: 11am - 11pm
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Sunday: 10am - 9pm
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
                Get in Touch
              </h4>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span>
                  ●
                </span>
                {" "}
                <span>
                  742 Evergreen Terrace
                  <br />
                  New York, NY 10001
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span>
                  ●
                </span>
                {" "}
                <span>
                  (555) 123-4567
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span>
                  ●
                </span>
                {" "}
                <span>
                  hello@restoran.com
                </span>
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
              {"© "}
              <span className="footer-year">
                2026
              </span>
              {" RESTORAN. All rights reserved."}
            </span>
            {" "}
            <span>
              Crafted with care.
            </span>
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
