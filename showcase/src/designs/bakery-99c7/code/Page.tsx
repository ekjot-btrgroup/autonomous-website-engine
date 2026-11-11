// Converted from the HTML template bakery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-2.webp";
import a1 from "./assets/carousel-1.webp";
import a2 from "./assets/product-1.webp";
import a3 from "./assets/product-2.webp";
import a4 from "./assets/product-3.webp";
import a5 from "./assets/about-1.webp";
import a6 from "./assets/about-2.webp";
import a7 from "./assets/owl-video-play.webp";
import a8 from "./assets/service-1.webp";
import a9 from "./assets/service-2.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";
import a13 from "./assets/testimonial-4.webp";
import a14 from "./assets/team-1.webp";
import a15 from "./assets/team-2.webp";
import a16 from "./assets/team-3.webp";
import a17 from "./assets/team-4.webp";
import a18 from "./assets/bakery-website-template.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&family=Playfair+Display:wght@600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-bakery-99c7">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              {"🥐 Brioche "}
              <span>
                {"& Co."}
              </span>
            </a>
            {" "}
            <ul className="nav-links">
              {" "}
              <li>
                <a href="index.html" className="nav-link active">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html" className="nav-link">
                  Our Story
                </a>
              </li>
              {" "}
              <li>
                <a href="products.html" className="nav-link">
                  Bakes
                </a>
              </li>
              {" "}
              <li>
                <a href="blog.html" className="nav-link">
                  Journal
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-cta">
                  Order Now
                </a>
              </li>
              {" "}
            </ul>
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
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a1} alt="Artisan bakery display" className="active" />
          {" "}
          <img src={a0} alt="Freshly baked bread and pastries" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        {" "}
        <div className="hero-float hero-float--1" aria-hidden="true">
          {" "}
          <div className="swirl" />
          {" "}
          <span className="crumb" />
          {" "}
          <span className="crumb" />
          {" "}
          <span className="crumb" />
          {" "}
        </div>
        {" "}
        <div className="hero-float hero-float--2" aria-hidden="true">
          {" "}
          <div className="swirl" />
          {" "}
          <span className="crumb" />
          {" "}
          <span className="crumb" />
          {" "}
        </div>
        {" "}
        <div className="hero-content">
          {" "}
          <span className="hero-kicker">
            Artisan Bakery · Est. 2016
          </span>
          {" "}
          <h1>
            Baked fresh,
            <br />
            every single morning.
          </h1>
          {" "}
          <p>
            Flaky croissants, crusty sourdough, and handcrafted pastries — made with love from our oven to your table.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="products.html" className="btn btn-light">
              Browse Our Bakes
            </a>
            {" "}
            <a href="about.html" className="btn btn-outline-light">
              Our Story
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero-scroll" aria-hidden="true" />
        {" "}
      </section>
      {" "}
      {" "}
      <div className="hero-bunting" aria-hidden="true">
        {" "}
        <svg viewBox="0 0 1440 40" preserveaspectratio="none">
          {" "}
          <path d="M0,0 Q60,40 120,20 Q180,0 240,20 Q300,40 360,20 Q420,0 480,20 Q540,40 600,20 Q660,0 720,20 Q780,40 840,20 Q900,0 960,20 Q1020,40 1080,20 Q1140,0 1200,20 Q1260,40 1320,20 Q1380,0 1440,20 L1440,40 L0,40 Z" fill="#FFF8F0" />
          {" "}
        </svg>
        {" "}
      </div>
      {" "}
      {" "}
      <div className="marquee" aria-hidden="true">
        {" "}
        <div className="marquee-track">
          {" "}
          <span>
            Sourdough Baguette
          </span>
          {" "}
          <span>
            Butter Croissant
          </span>
          {" "}
          <span>
            Cinnamon Swirl
          </span>
          {" "}
          <span>
            Olive Focaccia
          </span>
          {" "}
          <span>
            Chocolate Pain
          </span>
          {" "}
          <span>
            Rye Boule
          </span>
          {" "}
          <span>
            Almond Biscotti
          </span>
          {" "}
          <span>
            Brioche Loaf
          </span>
          {" "}
          <span>
            Sourdough Baguette
          </span>
          {" "}
          <span>
            Butter Croissant
          </span>
          {" "}
          <span>
            Cinnamon Swirl
          </span>
          {" "}
          <span>
            Olive Focaccia
          </span>
          {" "}
          <span>
            Chocolate Pain
          </span>
          {" "}
          <span>
            Rye Boule
          </span>
          {" "}
          <span>
            Almond Biscotti
          </span>
          {" "}
          <span>
            Brioche Loaf
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <p className="section-kicker reveal">
            From the Oven
          </p>
          {" "}
          <h2 className="section-title reveal">
            This week’s favourites
          </h2>
          {" "}
          <p className="section-sub reveal">
            Our bakers start each morning before sunrise, crafting every batch by hand with time-honoured techniques and the finest ingredients.
          </p>
          {" "}
          <div className="product-grid">
            {" "}
            <article className="product-card reveal">
              {" "}
              <div className="product-card-image">
                {" "}
                <img src={a2} alt="Butter Croissant" loading="lazy" />
                {" "}
                <span className="product-card-tag">
                  Best seller
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <h3>
                  Butter Croissant
                </h3>
                {" "}
                <p>
                  27 layers of French butter, laminated to golden perfection.
                </p>
                {" "}
                <span className="price">
                  €4.50
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="product-card reveal">
              {" "}
              <div className="product-card-image">
                {" "}
                <img src={a3} alt="Sourdough Boule" loading="lazy" />
                {" "}
                <span className="product-card-tag">
                  New
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <h3>
                  Sourdough Boule
                </h3>
                {" "}
                <p>
                  72-hour fermented, stone-baked, with a deep caramelised crust.
                </p>
                {" "}
                <span className="price">
                  €6.90
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="product-card reveal">
              {" "}
              <div className="product-card-image">
                {" "}
                <img src={a4} alt="Chocolate Pain" loading="lazy" />
                {" "}
                <span className="product-card-tag">
                  Seasonal
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <h3>
                  Chocolate Pain
                </h3>
                {" "}
                <p>
                  Dark Valrhona batons wrapped in flaky butter dough.
                </p>
                {" "}
                <span className="price">
                  €5.20
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "36px" }} className="reveal">
            {" "}
            <a href="products.html" className="btn btn-outline">
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
      <section className="section section-alt">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-collage reveal">
              {" "}
              <figure>
                {" "}
                <img src={a5} alt="Our bakery counter" loading="lazy" />
                {" "}
              </figure>
              {" "}
              <figure>
                {" "}
                <img src={a6} alt="Baking in progress" loading="lazy" />
                {" "}
                <a href="about.html" className="about-play">
                  {" "}
                  <img src={a7} alt="Play" aria-hidden="true" />
                  {" "}
                  <span>
                    Our Story
                  </span>
                  {" "}
                </a>
                {" "}
              </figure>
              {" "}
              <div className="stamp">
                Fresh
                <br />
                Daily
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-text reveal">
              {" "}
              <p className="section-kicker">
                Our Craft
              </p>
              {" "}
              <h2 className="section-title">
                {"Where tradition meets "}
                <span>
                  the neighbourhood
                </span>
              </h2>
              {" "}
              <p>
                {"What started as a single oven in a tiny corner shop has grown into a warm gathering place where the smell of fresh bread pulls people in from the street. Every loaf, pastry, and cake at Brioche & Co. is made from scratch — no mixes, no shortcuts, just honest ingredients and hands that care."}
              </p>
              {" "}
              <ul className="about-features">
                {" "}
                <li>
                  Organic stone-ground flours from local mills
                </li>
                {" "}
                <li>
                  {"French AOP butter & Belgian chocolate"}
                </li>
                {" "}
                <li>
                  Zero artificial preservatives or additives
                </li>
                {" "}
              </ul>
              {" "}
              <div className="about-signature">
                {" “Baking is our way of welcoming you home.” "}
                <small>
                  {"— Elena Marchetti, Founder & Head Baker"}
                </small>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {" "}
                <a href="about.html" className="btn btn-primary">
                  Meet the Team
                </a>
                {" "}
                <a href="contact.html" className="btn btn-outline">
                  Visit Us
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <p className="section-kicker reveal">
            We Also Offer
          </p>
          {" "}
          <h2 className="section-title reveal">
            {"Services & "}
            <span>
              custom orders
            </span>
          </h2>
          {" "}
          <p className="section-sub reveal">
            From bespoke celebration cakes to wholesale deliveries, we bring the same care to every order.
          </p>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a8} alt="Custom celebration cakes" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Custom Celebration Cakes
                </h3>
                {" "}
                <p>
                  Wedding tiers, birthday showstoppers, and corporate cakes designed around your vision. Tastings available by appointment.
                </p>
                {" "}
                <a href="products.html#pricing" className="btn btn-sm btn-sage" style={{ marginTop: "10px" }}>
                  View Pricing
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a9} alt="Wholesale and events" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  {"Wholesale & Events"}
                </h3>
                {" "}
                <p>
                  Supplying cafés, hotels, and events with fresh bread, pastries, and dessert platters. Weekly or daily delivery options.
                </p>
                {" "}
                <a href="contact.html" className="btn btn-sm btn-sage" style={{ marginTop: "10px" }}>
                  Get a Quote
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
      <section className="section section-alt">
        {" "}
        <div className="container">
          {" "}
          <p className="section-kicker reveal">
            What People Say
          </p>
          {" "}
          <h2 className="section-title reveal">
            {"Loved by our "}
            <span>
              community
            </span>
          </h2>
          {" "}
          <p className="section-sub reveal">
            The kindest words come from our regulars — and we treasure every single one.
          </p>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <img className="testimonial-card-avatar" src={a10} alt="Portrait of Sarah" loading="lazy" />
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                “The best croissant I’ve had outside of Paris. Flaky, buttery, and still warm when I bought it.”
              </blockquote>
              {" "}
              <cite>
                {"Sarah Mitchell "}
                <small>
                  Regular Customer
                </small>
              </cite>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <img className="testimonial-card-avatar" src={a11} alt="Portrait of James" loading="lazy" />
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                “We ordered a three-tier wedding cake and it was absolutely stunning. Every guest asked for the bakery’s name.”
              </blockquote>
              {" "}
              <cite>
                {"James & Rina Chen "}
                <small>
                  Wedding Clients
                </small>
              </cite>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <img className="testimonial-card-avatar" src={a12} alt="Portrait of Amara" loading="lazy" />
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                {"“Our café has been sourcing bread from Brioche & Co. for two years. Reliable, delicious, always fresh.”"}
              </blockquote>
              {" "}
              <cite>
                {"Amara Diallo "}
                <small>
                  Café Owner
                </small>
              </cite>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <img className="testimonial-card-avatar" src={a13} alt="Portrait of Marcus" loading="lazy" />
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                “The sourdough starter class was a revelation. Elena is a gifted teacher and the bread was incredible.”
              </blockquote>
              {" "}
              <cite>
                {"Marcus Webb "}
                <small>
                  Workshop Attendee
                </small>
              </cite>
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
          <p className="section-kicker reveal">
            Meet the Bakers
          </p>
          {" "}
          <h2 className="section-title reveal">
            {"The hands behind "}
            <span>
              the hearth
            </span>
          </h2>
          {" "}
          <p className="section-sub reveal">
            A small, passionate team that lives and breathes the art of baking.
          </p>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-image">
                {" "}
                <img src={a14} alt="Elena Marchetti" loading="lazy" />
                {" "}
                <div className="team-overlay">
                  <span>
                    Since 2016
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <h4>
                Elena Marchetti
              </h4>
              {" "}
              <p>
                {"Founder & Head Baker"}
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-image">
                {" "}
                <img src={a15} alt="Liam Okafor" loading="lazy" />
                {" "}
                <div className="team-overlay">
                  <span>
                    Pastry Specialist
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <h4>
                Liam Okafor
              </h4>
              {" "}
              <p>
                Pastry Chef
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-image">
                {" "}
                <img src={a16} alt="Sofia Reyes" loading="lazy" />
                {" "}
                <div className="team-overlay">
                  <span>
                    Bread Division
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <h4>
                Sofia Reyes
              </h4>
              {" "}
              <p>
                Master Baker
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-image">
                {" "}
                <img src={a17} alt="Tom Keller" loading="lazy" />
                {" "}
                <div className="team-overlay">
                  <span>
                    Customer Favourite
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <h4>
                Tom Keller
              </h4>
              {" "}
              <p>
                Front of House
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
      <section className="section section-alt">
        {" "}
        <div className="container">
          {" "}
          <p className="section-kicker reveal">
            From the Journal
          </p>
          {" "}
          <h2 className="section-title reveal">
            {"Baking stories, "}
            <span>
              {"recipes & more"}
            </span>
          </h2>
          {" "}
          <p className="section-sub reveal">
            Tips from our kitchen, seasonal recipes, and a peek behind the bakery door.
          </p>
          {" "}
          <div className="blog-grid">
            {" "}
            <article className="blog-card reveal">
              {" "}
              <div className="blog-card-image">
                {" "}
                <img src={a18} alt="Sourdough starter on a wooden table" loading="lazy" />
                {" "}
                <span className="blog-card-tag">
                  Recipe
                </span>
                {" "}
              </div>
              {" "}
              <div className="blog-card-body">
                {" "}
                <p className="blog-card-meta">
                  Aug 15, 2026 · 4 min read
                </p>
                {" "}
                <h3>
                  How to Start Your Own Sourdough Starter
                </h3>
                {" "}
                <p>
                  Everything you need to know to cultivate a thriving starter from scratch — just flour, water, and patience.
                </p>
                {" "}
                <a href="blog.html" className="read-more">
                  Read Post
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card reveal">
              {" "}
              <div className="blog-card-image">
                {" "}
                <div className="blog-art blog-art--sourdough">
                  {" "}
                  <div className="loaf" />
                  {" "}
                </div>
                {" "}
                <span className="blog-card-tag">
                  Technique
                </span>
                {" "}
              </div>
              {" "}
              <div className="blog-card-body">
                {" "}
                <p className="blog-card-meta">
                  Jul 28, 2026 · 6 min read
                </p>
                {" "}
                <h3>
                  The Art of the Perfect Sourdough at Home
                </h3>
                {" "}
                <p>
                  Our master baker Sofia shares her top tips for achieving that bakery-quality crust and open crumb in your own kitchen.
                </p>
                {" "}
                <a href="blog.html" className="read-more">
                  Read Post
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card reveal">
              {" "}
              <div className="blog-card-image">
                {" "}
                <div className="blog-art blog-art--kids">
                  {" "}
                  <div className="cookie" />
                  {" "}
                  <div className="cookie" />
                  {" "}
                  <div className="cookie" />
                  {" "}
                </div>
                {" "}
                <span className="blog-card-tag">
                  Family
                </span>
                {" "}
              </div>
              {" "}
              <div className="blog-card-body">
                {" "}
                <p className="blog-card-meta">
                  Jul 10, 2026 · 3 min read
                </p>
                {" "}
                <h3>
                  Baking with Kids: Three Easy Recipes
                </h3>
                {" "}
                <p>
                  Simple, no-fuss bakes that turn little hands into proud pastry chefs — and the mess is half the fun.
                </p>
                {" "}
                <a href="blog.html" className="read-more">
                  Read Post
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "36px" }} className="reveal">
            {" "}
            <a href="blog.html" className="btn btn-outline">
              All Posts
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="newsletter">
        {" "}
        <div className="newsletter-content">
          {" "}
          <h2 className="reveal">
            Join the Brioche Club
          </h2>
          {" "}
          <p className="reveal">
            Be the first to know about our weekly specials, new recipes, and bake-at-home tips. No spam — just the good stuff.
          </p>
          {" "}
          <form className="newsletter-form" data-form="" noValidate={true}>
            {" "}
            <input type="email" placeholder="Enter your email" required={true} aria-label="Email address" />
            {" "}
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
            {" "}
            <div className="form-ok">
              Thanks! You’re on the list.
            </div>
            {" "}
            <div className="form-err">
              Please enter a valid email address.
            </div>
            {" "}
          </form>
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
              <a href="index.html" className="nav-logo">
                {"🥐 Brioche "}
                <span>
                  {"& Co."}
                </span>
              </a>
              {" "}
              <p>
                Artisan bakery and pastry shop in the heart of the neighbourhood. Handcrafted daily with love, butter, and a little bit of magic.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Instagram">
                  IG
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  FB
                </a>
                {" "}
                <a href="#" aria-label="Pinterest">
                  PT
                </a>
                {" "}
                <a href="#" aria-label="TikTok">
                  TT
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
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    Our Story
                  </a>
                </li>
                {" "}
                <li>
                  <a href="products.html">
                    {"Menu & Pricing"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Journal
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Order Online
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
                Opening Hours
              </h4>
              {" "}
              <ul className="footer-hours">
                {" "}
                <li>
                  <span>
                    Mon – Fri
                  </span>
                  {" "}
                  <span>
                    7:00 AM – 6:00 PM
                  </span>
                </li>
                {" "}
                <li>
                  <span>
                    Saturday
                  </span>
                  {" "}
                  <span>
                    8:00 AM – 5:00 PM
                  </span>
                </li>
                {" "}
                <li>
                  <span>
                    Sunday
                  </span>
                  {" "}
                  <span>
                    8:00 AM – 2:00 PM
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-newsletter">
              {" "}
              <h4>
                Stay in Touch
              </h4>
              {" "}
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
                Get weekly updates and secret recipes.
              </p>
              {" "}
              <form className="newsletter-form" noValidate={true}>
                {" "}
                <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
                {" "}
                <button type="submit" className="btn btn-primary btn-sm">
                  Join
                </button>
                {" "}
              </form>
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
              {" Brioche & Co. All rights reserved. Crafted with "}
              <span style={{ color: "var(--coral)" }}>
                ♥
              </span>
              {" by "}
              <a href="https://uiuxlabz.github.io" target="_blank" rel="noopener">
                uiuxlabz
              </a>
              .
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
