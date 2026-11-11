// Converted from the HTML template e-commerce-shop-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/slider-1.webp";
import a1 from "./assets/slider-2.webp";
import a2 from "./assets/slider-3.webp";
import a3 from "./assets/category-1.webp";
import a4 from "./assets/category-2.webp";
import a5 from "./assets/category-3.webp";
import a6 from "./assets/category-4.webp";
import a7 from "./assets/product-1.webp";
import a8 from "./assets/product-2.webp";
import a9 from "./assets/product-3.webp";
import a10 from "./assets/product-4.webp";
import a11 from "./assets/product-5.webp";
import a12 from "./assets/product-6.webp";
import a13 from "./assets/product-7.webp";
import a14 from "./assets/product-8.webp";
import a15 from "./assets/product-9.webp";
import a16 from "./assets/brand-1.webp";
import a17 from "./assets/brand-2.webp";
import a18 from "./assets/brand-3.webp";
import a19 from "./assets/brand-4.webp";
import a20 from "./assets/brand-5.webp";
import a21 from "./assets/brand-6.webp";
import a22 from "./assets/payment-method.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;900&family=Inter:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-e-commerce-shop-2296">
      {" "}
      {" "}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="container nav__inner">
          {" "}
          <a href="index.html" className="nav__brand" aria-label="ESHOP home">
            {" "}
            <span className="nav__brand-icon">
              🛒
            </span>
            {" E"}
            <span>
              SHOP
            </span>
            {" "}
          </a>
          {" "}
          <div className="nav__links">
            {" "}
            <a href="index.html" className="nav__link active">
              Home
            </a>
            {" "}
            <a href="products.html" className="nav__link">
              Shop
            </a>
            {" "}
            <a href="about.html" className="nav__link">
              About
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
          </div>
          {" "}
          <div className="nav__actions">
            {" "}
            <button className="nav__cart" aria-label="Shopping cart">
              {" 🛒 "}
              <span className="nav__cart-count" data-cart-count="">
                0
              </span>
              {" "}
            </button>
            {" "}
            <button className="nav__burger" aria-label="Toggle menu" aria-expanded="false">
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
        {" "}
        <div className="nav__mobile" role="menu">
          {" "}
          <a href="index.html" className="nav__link active" role="menuitem">
            Home
          </a>
          {" "}
          <a href="products.html" className="nav__link" role="menuitem">
            Shop
          </a>
          {" "}
          <a href="about.html" className="nav__link" role="menuitem">
            About
          </a>
          {" "}
          <a href="contact.html" className="nav__link" role="menuitem">
            Contact
          </a>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero" aria-label="Featured showcase">
        {" "}
        <div className="hero__slider">
          {" "}
          <div className="hero__slide active">
            {" "}
            <img src={a0} alt="New arrivals collection showcase" />
            {" "}
          </div>
          {" "}
          <div className="hero__slide">
            {" "}
            <img src={a1} alt="Summer sale collection" />
            {" "}
          </div>
          {" "}
          <div className="hero__slide">
            {" "}
            <img src={a2} alt="Premium lifestyle products" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="container hero__content">
          {" "}
          <span className="hero__badge">
            ★ New Season Drop
          </span>
          {" "}
          <h1 className="hero__title">
            {"Discover What's "}
            <em>
              Trending
            </em>
            {" Now"}
          </h1>
          {" "}
          <p className="hero__desc">
            Curated products, unbeatable prices, and lightning-fast delivery. Upgrade your lifestyle with ESHOP's handpicked collection.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="products.html" className="btn btn--primary btn--lg">
              Browse Collection
            </a>
            {" "}
            <a href="#categories" className="btn btn--white btn--lg">
              Shop by Category
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__dots" role="tablist" aria-label="Slider controls">
          {" "}
          <button className="hero__dot active" role="tab" aria-label="Slide 1" />
          {" "}
          <button className="hero__dot" role="tab" aria-label="Slide 2" />
          {" "}
          <button className="hero__dot" role="tab" aria-label="Slide 3" />
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section id="categories" className="categories" aria-label="Shop by category">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-label">
              ● Browse
            </span>
            {" "}
            <h2 className="section-title">
              Shop by Category
            </h2>
            {" "}
            <p className="section-subtitle">
              Find exactly what you need across our curated departments
            </p>
            {" "}
          </div>
          {" "}
          <div className="categories__grid">
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-1">
              {" "}
              <img src={a3} alt="Fashion collection" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <span className="category-card__name">
                  Fashion
                </span>
                {" "}
                <span className="category-card__count">
                  128 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-2">
              {" "}
              <img src={a4} alt="Electronics collection" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <span className="category-card__name">
                  Electronics
                </span>
                {" "}
                <span className="category-card__count">
                  96 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-3">
              {" "}
              <img src={a5} alt={"Home & Living collection"} />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <span className="category-card__name">
                  {"Home & Living"}
                </span>
                {" "}
                <span className="category-card__count">
                  74 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-4">
              {" "}
              <img src={a6} alt="Accessories collection" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <span className="category-card__name">
                  Accessories
                </span>
                {" "}
                <span className="category-card__count">
                  215 Products
                </span>
                {" "}
              </div>
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
      <section className="products" aria-label="Featured products">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="section-label">
              ● Featured
            </span>
            {" "}
            <h2 className="section-title">
              Best Sellers This Week
            </h2>
            {" "}
            <p className="section-subtitle">
              Handpicked products our customers can't stop buying
            </p>
            {" "}
          </div>
          {" "}
          <div className="products__filters reveal" role="tablist" aria-label="Product categories">
            {" "}
            <button className="products__filter active" data-filter="all" role="tab" aria-selected="true">
              All
            </button>
            {" "}
            <button className="products__filter" data-filter="fashion" role="tab" aria-selected="false">
              Fashion
            </button>
            {" "}
            <button className="products__filter" data-filter="electronics" role="tab" aria-selected="false">
              Electronics
            </button>
            {" "}
            <button className="products__filter" data-filter="accessories" role="tab" aria-selected="false">
              Accessories
            </button>
            {" "}
          </div>
          {" "}
          <div className="products__grid">
            {" "}
            {" "}
            <article className="product-card reveal" data-category="fashion">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a7} alt="Premium cotton hoodie" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--sale">
                    -30%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Premium Cotton Hoodie" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Fashion
                </span>
                {" "}
                <h3 className="product-card__name">
                  Premium Cotton Hoodie
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★★
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (42)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $59.99
                  </span>
                  {" "}
                  <span className="product-card__price-original">
                    $85.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="electronics">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a8} alt="Wireless noise-cancelling headphones" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--new">
                    New
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Wireless Headphones" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Electronics
                </span>
                {" "}
                <h3 className="product-card__name">
                  Wireless Noise-Cancelling Headphones
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★☆
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (87)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $129.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="accessories">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a9} alt="Leather crossbody bag" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--hot">
                    Hot
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Leather Crossbody Bag" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Accessories
                </span>
                {" "}
                <h3 className="product-card__name">
                  Leather Crossbody Bag
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★★
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (63)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $79.95
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="fashion">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a10} alt="Slim-fit denim jeans" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--sale">
                    -25%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Slim-Fit Denim Jeans" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Fashion
                </span>
                {" "}
                <h3 className="product-card__name">
                  Slim-Fit Denim Jeans
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★☆
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (35)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $44.99
                  </span>
                  {" "}
                  <span className="product-card__price-original">
                    $59.99
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="electronics">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a11} alt="Smart fitness tracker" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--new">
                    New
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Smart Fitness Tracker" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Electronics
                </span>
                {" "}
                <h3 className="product-card__name">
                  Smart Fitness Tracker
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★★
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (128)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $99.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="accessories">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a12} alt="Minimalist wristwatch" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--sale">
                    -15%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Minimalist Wristwatch" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Accessories
                </span>
                {" "}
                <h3 className="product-card__name">
                  Minimalist Wristwatch
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★★
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (56)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $119.00
                  </span>
                  {" "}
                  <span className="product-card__price-original">
                    $140.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="fashion">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a13} alt="Classic wool overcoat" loading="lazy" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Classic Wool Overcoat" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Fashion
                </span>
                {" "}
                <h3 className="product-card__name">
                  Classic Wool Overcoat
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★☆
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (29)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $189.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="electronics">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a14} alt="Portable bluetooth speaker" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--hot">
                    Hot
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Bluetooth Speaker" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Electronics
                </span>
                {" "}
                <h3 className="product-card__name">
                  Portable Bluetooth Speaker
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★★
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (201)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $69.95
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="product-card reveal" data-category="accessories">
              {" "}
              <div className="product-card__img-wrap">
                {" "}
                <img src={a15} alt="Canvas weekend duffel" loading="lazy" />
                {" "}
                <div className="product-card__tag">
                  {" "}
                  <span className="tag tag--sale">
                    -20%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button className="product-card__action-btn" data-add="Canvas Weekend Duffel" aria-label="Add to cart">
                    🛒
                  </button>
                  {" "}
                  <button className="product-card__action-btn" aria-label="Add to wishlist">
                    ♡
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__info">
                {" "}
                <span className="product-card__category">
                  Accessories
                </span>
                {" "}
                <h3 className="product-card__name">
                  Canvas Weekend Duffel
                </h3>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <span className="product-card__stars">
                    ★★★★☆
                  </span>
                  {" "}
                  <span className="product-card__rating-count">
                    (44)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $95.00
                  </span>
                  {" "}
                  <span className="product-card__price-original">
                    $119.00
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--sp-2xl)" }} className="reveal">
            {" "}
            <a href="products.html" className="btn btn--primary btn--lg">
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
      <section className="brands" aria-label="Trusted brands">
        {" "}
        <div className="container">
          {" "}
          <div className="brands__track reveal">
            {" "}
            <div className="brands__item">
              <img src={a16} alt="Brand partner 1" />
            </div>
            {" "}
            <div className="brands__item">
              <img src={a17} alt="Brand partner 2" />
            </div>
            {" "}
            <div className="brands__item">
              <img src={a18} alt="Brand partner 3" />
            </div>
            {" "}
            <div className="brands__item">
              <img src={a19} alt="Brand partner 4" />
            </div>
            {" "}
            <div className="brands__item">
              <img src={a20} alt="Brand partner 5" />
            </div>
            {" "}
            <div className="brands__item">
              <img src={a21} alt="Brand partner 6" />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="features" aria-label="Why shop with us">
        {" "}
        <div className="container">
          {" "}
          <div className="features__grid">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                🚚
              </div>
              {" "}
              <h3 className="feature-card__title">
                Free Shipping
              </h3>
              {" "}
              <p className="feature-card__desc">
                Free delivery on all orders over $50. No hidden fees, no surprises.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-1">
              {" "}
              <div className="feature-card__icon">
                🔒
              </div>
              {" "}
              <h3 className="feature-card__title">
                Secure Payment
              </h3>
              {" "}
              <p className="feature-card__desc">
                256-bit SSL encryption. Your payment details are always safe with us.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-2">
              {" "}
              <div className="feature-card__icon">
                🔄
              </div>
              {" "}
              <h3 className="feature-card__title">
                Easy Returns
              </h3>
              {" "}
              <p className="feature-card__desc">
                30-day hassle-free returns. Not satisfied? Send it back, no questions asked.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-3">
              {" "}
              <div className="feature-card__icon">
                💬
              </div>
              {" "}
              <h3 className="feature-card__title">
                24/7 Support
              </h3>
              {" "}
              <p className="feature-card__desc">
                Friendly customer support around the clock via chat, email, or phone.
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
      <section className="newsletter" aria-label="Newsletter signup">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter__inner reveal">
            {" "}
            <div className="newsletter__text">
              {" "}
              <h2 className="newsletter__title">
                Stay in the Loop
              </h2>
              {" "}
              <p className="newsletter__desc">
                Get exclusive deals, new arrivals, and insider-only discounts delivered to your inbox.
              </p>
              {" "}
            </div>
            {" "}
            <form className="newsletter__form">
              {" "}
              <input type="email" className="newsletter__input" placeholder="Enter your email" required={true} aria-label="Email address" />
              {" "}
              <button type="submit" className="btn btn--primary">
                Subscribe
              </button>
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
      <footer className="footer" role="contentinfo">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <div className="footer__brand-name">
                E
                <span>
                  SHOP
                </span>
              </div>
              {" "}
              <p className="footer__brand-desc">
                Your destination for curated products, fresh deals, and a shopping experience designed around you.
              </p>
              {" "}
              <div className="footer__socials">
                {" "}
                <a href="#" className="footer__social" aria-label="Instagram">
                  ☉
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" className="footer__social" aria-label="Pinterest">
                  𝐉
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Shop
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="products.html" className="footer__link">
                  All Products
                </a>
                {" "}
                <a href="products.html" className="footer__link">
                  New Arrivals
                </a>
                {" "}
                <a href="products.html" className="footer__link">
                  Best Sellers
                </a>
                {" "}
                <a href="products.html" className="footer__link">
                  Sale
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Company
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="about.html" className="footer__link">
                  About Us
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Contact
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Careers
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Press
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Support
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="#" className="footer__link">
                  Help Center
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Shipping Info
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Returns
                </a>
                {" "}
                <a href="#" className="footer__link">
                  Privacy Policy
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
              {"© "}
              <span data-year="" />
              {" ESHOP. All rights reserved."}
            </span>
            {" "}
            <div className="footer__payments">
              {" "}
              <img src={a22} alt="Accepted payment methods" />
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
      <div className="cart-toast" aria-live="polite">
        {" "}
        <span className="cart-toast__icon">
          ✓
        </span>
        {" "}
        <span className="cart-toast__name">
          Product
        </span>
        {" added to cart "}
      </div>
      {" "}
      {" "}
      <button className="scroll-top" aria-label="Scroll to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
