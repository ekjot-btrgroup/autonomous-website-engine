// Converted from the HTML template cafe-bakery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero.webp";
import a1 from "./assets/cake-1.webp";
import a2 from "./assets/cake-2.webp";
import a3 from "./assets/cake-3.webp";
import a4 from "./assets/offer.webp";
import a5 from "./assets/team-1.webp";
import a6 from "./assets/team-2.webp";
import a7 from "./assets/team-3.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-cafe-bakery-5328">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              {"Crumb "}
              <em>
                {"&"}
              </em>
              {" Co."}
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                Our Story
              </a>
              {" "}
              <a href="menu.html" className="nav-link">
                Menu
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
              <a href="contact.html" className="nav-link nav-cta">
                Order Online
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
          <div className="reveal">
            {" "}
            <span className="hero-badge">
              ✦ Freshly Baked Daily
            </span>
            {" "}
            <h1 className="hero-title">
              {"Where Every "}
              <em>
                Crumb
              </em>
              {" Tells a Story"}
            </h1>
            {" "}
            <p className="hero-desc">
              Handcrafted artisan cakes, flaky pastries, and specialty coffee made from scratch with love and the finest ingredients.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="menu.html" className="btn btn--caramel">
                Explore Our Menu
              </a>
              {" "}
              <a href="contact.html" className="btn btn--ghost">
                Order Online
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-visual reveal">
            {" "}
            <div className="hero-img-wrap">
              {" "}
              <img src={a0} alt="Artisan bakery counter with fresh pastries" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="hero-stamp">
              ✦
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--warm">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Featured Cakes
            </span>
            {" "}
            <h2 className="section-title">
              Our Signature Bakes
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              From classic layer cakes to daily specials, each creation is a celebration of flavour and craft.
            </p>
            {" "}
          </div>
          {" "}
          <div className="cakes-grid">
            {" "}
            <div className="cake-card reveal">
              {" "}
              <div className="cake-card-img">
                <img src={a1} alt="Chocolate ganache layer cake" loading="lazy" />
              </div>
              {" "}
              <div className="cake-card-body">
                {" "}
                <span className="cake-card-tag">
                  Best Seller
                </span>
                {" "}
                <h3 className="cake-card-title">
                  Midnight Chocolate
                </h3>
                {" "}
                <p className="cake-card-desc">
                  Rich dark chocolate ganache with a silky buttercream centre.
                </p>
                {" "}
                <div className="cake-card-price">
                  $48
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="cake-card reveal">
              {" "}
              <div className="cake-card-img">
                <img src={a2} alt="Vanilla berry celebration cake" loading="lazy" />
              </div>
              {" "}
              <div className="cake-card-body">
                {" "}
                <span className="cake-card-tag">
                  Seasonal
                </span>
                {" "}
                <h3 className="cake-card-title">
                  Summer Berry
                </h3>
                {" "}
                <p className="cake-card-desc">
                  Light vanilla sponge layered with fresh berries and cream.
                </p>
                {" "}
                <div className="cake-card-price">
                  $52
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="cake-card reveal">
              {" "}
              <div className="cake-card-img">
                <img src={a3} alt="Caramel pecan tart" loading="lazy" />
              </div>
              {" "}
              <div className="cake-card-body">
                {" "}
                <span className="cake-card-tag">
                  New
                </span>
                {" "}
                <h3 className="cake-card-title">
                  Caramel Pecan
                </h3>
                {" "}
                <p className="cake-card-desc">
                  Buttery pecan tart drizzled with house-made caramel.
                </p>
                {" "}
                <div className="cake-card-price">
                  $44
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="offer-banner reveal">
            {" "}
            <div className="offer-img">
              {" "}
              <img src={a4} alt="Pastry display case with croissants and danishes" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="offer-content">
              {" "}
              <span className="offer-tag">
                ✦ Limited Time
              </span>
              {" "}
              <h2 className="offer-title">
                Morning Basket — $18
              </h2>
              {" "}
              <p className="offer-desc">
                Pick any 3 pastries + a handcrafted coffee. The perfect start to your day, baked fresh from 7am daily.
              </p>
              {" "}
              <a href="contact.html" className="btn btn--caramel">
                Claim This Offer
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
      <section className="section section--warm">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Our Menu
            </span>
            {" "}
            <h2 className="section-title">
              Baked Fresh, Served Warm
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              Everything from flaky croissants to hearty sourdough — all made in-house daily.
            </p>
            {" "}
          </div>
          {" "}
          <div className="menu-grid">
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="menu-card-icon">
                🥐
              </div>
              {" "}
              <h3 className="menu-card-title">
                Croissants
              </h3>
              {" "}
              <p className="menu-card-desc">
                Flaky, golden, butter-layered French croissants.
              </p>
              {" "}
              <div className="menu-card-price">
                $4.50
              </div>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="menu-card-icon">
                🍞
              </div>
              {" "}
              <h3 className="menu-card-title">
                Sourdough
              </h3>
              {" "}
              <p className="menu-card-desc">
                72-hour fermented, crusty artisan loaf.
              </p>
              {" "}
              <div className="menu-card-price">
                $6.00
              </div>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="menu-card-icon">
                ☕
              </div>
              {" "}
              <h3 className="menu-card-title">
                Coffee
              </h3>
              {" "}
              <p className="menu-card-desc">
                Single-origin espresso, pour-over, and cold brew.
              </p>
              {" "}
              <div className="menu-card-price">
                $3.50
              </div>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="menu-card-icon">
                🍪
              </div>
              {" "}
              <h3 className="menu-card-title">
                Cookies
              </h3>
              {" "}
              <p className="menu-card-desc">
                Chunky, gooey, baked-to-order cookies.
              </p>
              {" "}
              <div className="menu-card-price">
                $2.50
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="text-center" style={{ marginTop: "40px" }}>
            <a href="menu.html" className="btn btn--caramel">
              View Full Menu
            </a>
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
            <div>
              <div className="stat-num">
                12+
              </div>
              <div className="stat-label">
                Years Baking
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                50K
              </div>
              <div className="stat-label">
                Happy Customers
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                150+
              </div>
              <div className="stat-label">
                Recipes
              </div>
            </div>
            {" "}
            <div>
              <div className="stat-num">
                4.9★
              </div>
              <div className="stat-label">
                Average Rating
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
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Meet the Team
            </span>
            {" "}
            <h2 className="section-title">
              Our Baking Artisans
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              The hands and hearts behind every loaf, tart, and cake that leaves our kitchen.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a5} alt="Head baker" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Elena Voss
                </div>
                {" "}
                <div className="team-card-role">
                  Head Baker
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a6} alt="Pastry chef" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Marco Silva
                </div>
                {" "}
                <div className="team-card-role">
                  Pastry Chef
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                <img src={a7} alt="Barista" loading="lazy" />
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <div className="team-card-name">
                  Aria Chen
                </div>
                {" "}
                <div className="team-card-role">
                  Head Barista
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
      <section className="section section--warm">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head mx-auto text-center reveal">
            {" "}
            <span className="section-label">
              Testimonials
            </span>
            {" "}
            <h2 className="section-title">
              What Our Guests Say
            </h2>
            {" "}
            <p className="section-desc mx-auto">
              The kind words from our community keep us baking every day.
            </p>
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
                "The croissants are the best I've had outside of Paris. Absolutely flaky and buttery perfection."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a8} alt="Sarah" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Sarah Mitchell
                  </div>
                  <div className="testimonial-card-role">
                    Regular Guest
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
                "We ordered a custom birthday cake and it was stunning — almost too beautiful to cut. Almost."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a9} alt="James" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    James Park
                  </div>
                  <div className="testimonial-card-role">
                    Birthday Customer
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
                "Their sourdough is on another level. I drive across town just to pick up a loaf on Saturday mornings."
              </p>
              {" "}
              <div className="testimonial-card-author">
                {" "}
                <div className="testimonial-card-avatar">
                  <img src={a10} alt="Liam" loading="lazy" />
                </div>
                {" "}
                <div>
                  <div className="testimonial-card-name">
                    Liam O'Brien
                  </div>
                  <div className="testimonial-card-role">
                    Sourdough Fan
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
      <div className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Ready to Order?
          </h2>
          {" "}
          <p className="cta-desc">
            Place an order for pickup or delivery, or book a table at our cafe.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
            Get in Touch
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              <div className="footer-brand-logo">
                {"Crumb "}
                <em>
                  {"&"}
                </em>
                {" Co."}
              </div>
              <p className="footer-brand-desc">
                Artisan bakery and cafe serving handcrafted pastries, cakes, and specialty coffee since 2013.
              </p>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Explore
              </h4>
              <div className="footer-links">
                <a href="about.html" className="footer-link">
                  Our Story
                </a>
                <a href="menu.html" className="footer-link">
                  Menu
                </a>
                <a href="services.html" className="footer-link">
                  Services
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Visit
              </h4>
              <div className="footer-links">
                <a href="contact.html" className="footer-link">
                  Find Us
                </a>
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                <a href="contact.html" className="footer-link">
                  Order Online
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
                  Mon–Fri: 7am–7pm
                </a>
                <a href="#" className="footer-link">
                  Sat–Sun: 8am–6pm
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
              {" CRUMB & CO. All rights reserved."}
            </span>
            <span>
              Baked with love ✦
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
