// Converted from the HTML template fruitables-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/banner-fruits.webp";
import a1 from "./assets/hero-img.webp";
import a2 from "./assets/fruite-item-1.webp";
import a3 from "./assets/vegetable-item-1.webp";
import a4 from "./assets/fruite-item-2.webp";
import a5 from "./assets/vegetable-item-2.webp";
import a6 from "./assets/fruite-item-3.webp";
import a7 from "./assets/vegetable-item-3.webp";
import a8 from "./assets/avatar.webp";
import a9 from "./assets/testimonial-1.webp";
import a10 from "./assets/payment.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500&family=Outfit:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-fruitables-3332">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="header__brand">
            {" "}
            <span className="header__brand-icon">
              🥬
            </span>
            {" FARMFRESH "}
          </a>
          {" "}
          <nav className="header__nav" role="navigation" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="shop.html">
              Shop
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header__actions">
            {" "}
            <a href="shop.html" className="header__cart" aria-label="Shopping cart">
              {" 🛒 "}
              <span className="header__cart-count" data-cart-count="">
                0
              </span>
              {" "}
            </a>
            {" "}
            <button className="header__burger" aria-label="Toggle menu" aria-expanded="false">
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
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__inner container">
          {" "}
          <div className="hero__content reveal">
            {" "}
            <div className="hero__badge">
              {" "}
              <span className="hero__badge-dot" />
              {" 100% Organic Produce "}
            </div>
            {" "}
            <h1 className="hero__title">
              {" Farm Fresh,"}
              <br />
              <em>
                Delivered
              </em>
              {" "}
            </h1>
            {" "}
            <p className="hero__subtitle">
              {" From our family farms to your table. Handpicked fruits, crisp vegetables, and organic goodness — harvested at peak ripeness and delivered within 24 hours. "}
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="shop.html" className="btn btn--primary btn--lg">
                Shop Now
              </a>
              {" "}
              <a href="about.html" className="btn btn--outline btn--lg">
                Our Story
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  500+
                </div>
                {" "}
                <div className="hero__stat-label">
                  Organic Products
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  50+
                </div>
                {" "}
                <div className="hero__stat-label">
                  Local Farms
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="hero__stat-number">
                  10K+
                </div>
                {" "}
                <div className="hero__stat-label">
                  Happy Families
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__image reveal-right">
            {" "}
            <div className="hero__image-decoration" />
            {" "}
            <img src={a1} alt="Fresh organic produce from local farms" loading="eager" width="520" height="400" />
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
          <div className="section-label reveal">
            Browse by Category
          </div>
          {" "}
          <h2 className="section-title reveal">
            Explore Our Fresh Selection
          </h2>
          {" "}
          <p className="section-desc reveal mb-8">
            {" From orchard-fresh fruits to garden-picked vegetables, find everything you need for a healthier lifestyle. "}
          </p>
          {" "}
          <div className="categories__grid reveal-stagger">
            {" "}
            <a href="shop.html" className="category-card">
              {" "}
              <div className="category-card__icon">
                🍎
              </div>
              {" "}
              <h3 className="category-card__title">
                Fresh Fruits
              </h3>
              {" "}
              <p className="category-card__count">
                120+ varieties available
              </p>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="category-card">
              {" "}
              <div className="category-card__icon">
                🥕
              </div>
              {" "}
              <h3 className="category-card__title">
                Vegetables
              </h3>
              {" "}
              <p className="category-card__count">
                85+ varieties available
              </p>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="category-card">
              {" "}
              <div className="category-card__icon">
                🌿
              </div>
              {" "}
              <h3 className="category-card__title">
                Organic Goods
              </h3>
              {" "}
              <p className="category-card__count">
                200+ certified organic
              </p>
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
      <section className="section section--alt">
        {" "}
        <div className="container">
          {" "}
          <div className="section-label reveal">
            Featured Products
          </div>
          {" "}
          <h2 className="section-title reveal">
            Handpicked for You
          </h2>
          {" "}
          <p className="section-desc reveal mb-8">
            {" Our bestsellers, chosen by thousands of families who trust FARMFRESH for quality and freshness. "}
          </p>
          {" "}
          <div className="products__grid reveal-stagger">
            {" "}
            {" "}
            <div className="product-card" data-category="fruits">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a2} alt="Fresh Strawberries" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--organic">
                  Organic
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Fruits
                </div>
                {" "}
                <h3 className="product-card__title">
                  Fresh Strawberries
                </h3>
                {" "}
                <p className="product-card__desc">
                  Sweet, juicy strawberries picked at peak ripeness from local organic farms.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    $4.99
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Fresh Strawberries to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card" data-category="vegetables">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a3} alt="Organic Broccoli" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--organic">
                  Organic
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Vegetables
                </div>
                {" "}
                <h3 className="product-card__title">
                  Organic Broccoli
                </h3>
                {" "}
                <p className="product-card__desc">
                  Crisp, green broccoli heads grown without pesticides in rich soil.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    $3.49
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Organic Broccoli to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card" data-category="fruits">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a4} alt="Golden Mangoes" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--new">
                  New
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Fruits
                </div>
                {" "}
                <h3 className="product-card__title">
                  Golden Mangoes
                </h3>
                {" "}
                <p className="product-card__desc">
                  Tropical mangoes with rich, velty flesh and an intoxicating sweetness.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    $6.99
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Golden Mangoes to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card" data-category="vegetables">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a5} alt="Heritage Tomatoes" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--sale">
                  Sale
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Vegetables
                </div>
                {" "}
                <h3 className="product-card__title">
                  Heritage Tomatoes
                </h3>
                {" "}
                <p className="product-card__desc">
                  Heirloom varieties bursting with complex, vine-ripened flavor.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    {"$5.49 "}
                    <span className="product-card__price-old">
                      $7.99
                    </span>
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Heritage Tomatoes to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card" data-category="fruits">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a6} alt="Fuji Apples" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--organic">
                  Organic
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Fruits
                </div>
                {" "}
                <h3 className="product-card__title">
                  Fuji Apples
                </h3>
                {" "}
                <p className="product-card__desc">
                  Crisp, honey-sweet Fuji apples from our partner orchards.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    $3.99
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Fuji Apples to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card" data-category="organic">
              {" "}
              <div className="product-card__image">
                {" "}
                <img src={a7} alt="Mixed Greens Bundle" loading="lazy" width="400" height="300" />
                {" "}
                <span className="product-card__badge product-card__badge--organic">
                  Organic
                </span>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__category">
                  Organic
                </div>
                {" "}
                <h3 className="product-card__title">
                  Mixed Greens Bundle
                </h3>
                {" "}
                <p className="product-card__desc">
                  A curated mix of arugula, spinach, and baby kale for your salads.
                </p>
                {" "}
                <div className="product-card__footer">
                  {" "}
                  <div className="product-card__price">
                    $5.99
                  </div>
                  {" "}
                  <button className="product-card__add" data-add="" aria-label="Add Mixed Greens Bundle to cart">
                    +
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
          <div className="text-center mt-8 reveal">
            {" "}
            <a href="shop.html" className="btn btn--outline btn--lg">
              View All Products
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
          <div className="about-story">
            {" "}
            <div className="about-story__image reveal-left">
              {" "}
              <img src={a0} alt="Our family farm" loading="lazy" width="600" height="450" />
              {" "}
            </div>
            {" "}
            <div className="about-story__text reveal-right">
              {" "}
              <div className="section-label">
                Our Story
              </div>
              {" "}
              <h2 className="section-title">
                From Frustration to Freshness
              </h2>
              {" "}
              <p>
                {" It started with a simple frustration: why is it so hard to find truly fresh, organic produce in the city? We were tired of wilted greens, flavorless tomatoes, and produce that traveled thousands of miles before reaching our plates. "}
              </p>
              {" "}
              <p>
                {" So we built FARMFRESH — a direct connection between local organic farmers and your kitchen. No middlemen, no warehouses, no week-old produce. Just honest food, grown with care, delivered with pride. "}
              </p>
              {" "}
              <div className="mt-6">
                {" "}
                <a href="about.html" className="btn btn--primary">
                  Read Our Full Story
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
      <section className="section section--warm">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter__inner reveal-scale" style={{ background: "linear-gradient(135deg, #92400e 0%, #78350f 100%)" }}>
            {" "}
            <div className="newsletter__content">
              {" "}
              <h2 className="newsletter__title">
                Freshness Guaranteed
              </h2>
              {" "}
              <p className="newsletter__desc">
                Every item is backed by our 100% freshness promise. Not happy? We'll replace it, no questions asked.
              </p>
              {" "}
            </div>
            {" "}
            <div className="newsletter__form">
              {" "}
              <a href="shop.html" className="btn btn--white btn--lg">
                Start Shopping
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
      <section className="section section--alt">
        {" "}
        <div className="container">
          {" "}
          <div className="section-label reveal">
            What Families Say
          </div>
          {" "}
          <h2 className="section-title reveal">
            Trusted by 10,000+ Households
          </h2>
          {" "}
          <p className="section-desc reveal mb-8">
            {" Real stories from families who have made FARMFRESH part of their weekly routine. "}
          </p>
          {" "}
          <div className="testimonials__grid reveal-stagger">
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                {" \"The strawberries taste like they were just picked from the garden. My kids won't eat store-bought fruit anymore — they ask for FARMFRESH every week.\" "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a8} alt="Sarah M." loading="lazy" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah M.
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Mother of Three
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                {" \"As a chef, ingredient quality is everything. FARMFRESH delivers produce that makes my dishes sing. The heritage tomatoes are absolutely incredible.\" "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a9} alt="Chef Marcus" loading="lazy" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Chef Marcus
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Restaurant Owner
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-card__text">
                {" \"I love knowing exactly where my food comes from. The farm profiles on FARMFRESH make me feel connected to the people who grow my food. It's transparent and real.\" "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {" "}
                  <img src={a8} alt="Emma T." loading="lazy" width="48" height="48" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Emma T.
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Health Enthusiast
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter__inner reveal-scale">
            {" "}
            <div className="newsletter__content">
              {" "}
              <h2 className="newsletter__title">
                Stay Fresh with Us
              </h2>
              {" "}
              <p className="newsletter__desc">
                {" Get seasonal recipes, farm updates, and exclusive weekly deals delivered to your inbox. "}
              </p>
              {" "}
            </div>
            {" "}
            <form className="newsletter__form" data-form="">
              {" "}
              <input type="email" className="newsletter__input" placeholder="Your email address" required={true} aria-label="Email address for newsletter" />
              {" "}
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
              {" "}
              <span className="form-ok">
                Welcome to the FARMFRESH family! Check your inbox.
              </span>
              {" "}
              <span className="form-err">
                Please enter a valid email address.
              </span>
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                {" "}
                <span className="footer__brand-icon">
                  🥬
                </span>
                {" FARMFRESH "}
              </div>
              {" "}
              <p className="footer__desc">
                {" Connecting local organic farms with your table. Fresh, honest food delivered daily. "}
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Facebook">
                  ★
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  ☆
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  ★
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="index.html">
                  Home
                </a>
                {" "}
                <a href="shop.html">
                  Shop
                </a>
                {" "}
                <a href="about.html">
                  About Us
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Categories
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="shop.html">
                  Fresh Fruits
                </a>
                {" "}
                <a href="shop.html">
                  Vegetables
                </a>
                {" "}
                <a href="shop.html">
                  Organic Goods
                </a>
                {" "}
                <a href="shop.html">
                  Seasonal Picks
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Newsletter
              </h4>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "var(--dark-400)", marginBottom: "var(--space-3)" }}>
                {" Subscribe for weekly farm updates and exclusive deals. "}
              </p>
              {" "}
              <form className="footer__newsletter-input" data-form="">
                {" "}
                <input type="email" placeholder="Your email" required={true} aria-label="Footer newsletter email" />
                {" "}
                <button type="submit">
                  Go
                </button>
                {" "}
                <span className="form-ok" style={{ fontSize: "12px", padding: "4px 8px", marginTop: "4px" }}>
                  Subscribed!
                </span>
                {" "}
                <span className="form-err" style={{ fontSize: "12px", padding: "4px 8px", marginTop: "4px" }}>
                  Enter valid email.
                </span>
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
              <span data-year="">
                2026
              </span>
              {" FARMFRESH. All rights reserved."}
            </p>
            {" "}
            <div className="footer__payments">
              {" "}
              <img src={a10} alt="Accepted payment methods" loading="lazy" height="28" />
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
