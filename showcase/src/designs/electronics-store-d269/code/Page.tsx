// Converted from the HTML template electronics-store-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/product-1.webp";
import a2 from "./assets/product-2.webp";
import a3 from "./assets/product-3.webp";
import a4 from "./assets/product-4.webp";
import a5 from "./assets/product-5.webp";
import a6 from "./assets/product-6.webp";
import a7 from "./assets/product-7.webp";
import a8 from "./assets/product-8.webp";
import a9 from "./assets/product-banner.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-electronics-store-d269">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo__icon">
              <i className="fas fa-microchip" />
            </span>
            {" ELECTRO "}
          </a>
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav__link active">
              Home
            </a>
            {" "}
            <a href="products.html" className="nav__link">
              Products
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
          </nav>
          {" "}
          <div className="header__actions">
            {" "}
            <button className="btn-icon" aria-label="Search">
              <i className="fas fa-search" />
            </button>
            {" "}
            <button className="btn-icon" aria-label="Wishlist">
              <i className="fas fa-heart" />
            </button>
            {" "}
            <button className="btn-icon" aria-label="Cart">
              {" "}
              <i className="fas fa-shopping-cart" />
              {" "}
              <span className="badge cart-badge">
                0
              </span>
              {" "}
            </button>
            {" "}
            <button className="burger" aria-label="Menu">
              {" "}
              <span />
              <span />
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
      <section className="hero circuit-bg">
        {" "}
        <div className="hero__grid-lines" />
        {" "}
        <div className="hero__glow" />
        {" "}
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative", zIndex: "2" }}>
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__badge">
              {" "}
              <span className="dot" />
              {" New Season Collection "}
            </div>
            {" "}
            <h1 className="hero__title">
              Next-Gen Tech
              <br />
              <span>
                Delivered.
              </span>
            </h1>
            {" "}
            <p className="hero__desc">
              Explore premium electronics engineered for performance. From flagship smartphones to studio-grade audio — gear that powers your world.
            </p>
            {" "}
            <div className="hero__buttons">
              {" "}
              <a href="products.html" className="btn btn--primary btn--lg">
                {"Shop Now "}
                <i className="fas fa-arrow-right" />
              </a>
              {" "}
              <a href="about.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,.25)", color: "#fff" }}>
                Learn More
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__image">
            {" "}
            <img src={a0} alt="Featured tech product" width="500" height="400" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" style={{ padding: "2rem 0" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="features">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-truck-fast" />
              </div>
              {" "}
              <div>
                {" "}
                <div className="feature-card__title">
                  Free Shipping
                </div>
                {" "}
                <div className="feature-card__desc">
                  {"On orders over $99. Fast & reliable delivery."}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-shield-halved" />
              </div>
              {" "}
              <div>
                {" "}
                <div className="feature-card__title">
                  2-Year Warranty
                </div>
                {" "}
                <div className="feature-card__desc">
                  All products covered with extended warranty.
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-rotate-left" />
              </div>
              {" "}
              <div>
                {" "}
                <div className="feature-card__title">
                  30-Day Returns
                </div>
                {" "}
                <div className="feature-card__desc">
                  Hassle-free returns within 30 days.
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                <i className="fas fa-headset" />
              </div>
              {" "}
              <div>
                {" "}
                <div className="feature-card__title">
                  24/7 Support
                </div>
                {" "}
                <div className="feature-card__desc">
                  Expert tech support whenever you need it.
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
      <section className="section section--gray">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header reveal">
            {" "}
            <div className="section__tag">
              Browse
            </div>
            {" "}
            <h2 className="section__title">
              Shop by Category
            </h2>
            {" "}
            <p className="section__subtitle">
              Find exactly what you need across our curated tech categories.
            </p>
            {" "}
          </div>
          {" "}
          <div className="categories">
            {" "}
            <a href="products.html" className="category-card reveal">
              {" "}
              <div className="category-card__icon">
                <i className="fas fa-laptop" />
              </div>
              {" "}
              <div className="category-card__name">
                Laptops
              </div>
              {" "}
              <div className="category-card__count">
                24 Products
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal">
              {" "}
              <div className="category-card__icon">
                <i className="fas fa-mobile-screen-button" />
              </div>
              {" "}
              <div className="category-card__name">
                Smartphones
              </div>
              {" "}
              <div className="category-card__count">
                18 Products
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal">
              {" "}
              <div className="category-card__icon">
                <i className="fas fa-headphones" />
              </div>
              {" "}
              <div className="category-card__name">
                Audio
              </div>
              {" "}
              <div className="category-card__count">
                32 Products
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal">
              {" "}
              <div className="category-card__icon">
                <i className="fas fa-gamepad" />
              </div>
              {" "}
              <div className="category-card__name">
                Gaming
              </div>
              {" "}
              <div className="category-card__count">
                15 Products
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal">
              {" "}
              <div className="category-card__icon">
                <i className="fas fa-camera" />
              </div>
              {" "}
              <div className="category-card__name">
                Cameras
              </div>
              {" "}
              <div className="category-card__count">
                12 Products
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header reveal">
            {" "}
            <div className="section__tag">
              Featured
            </div>
            {" "}
            <h2 className="section__title">
              Trending Products
            </h2>
            {" "}
            <p className="section__subtitle">
              Hand-picked tech that's making waves right now.
            </p>
            {" "}
          </div>
          {" "}
          <div className="products-grid">
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <span className="badge-new">
                  New
                </span>
                {" "}
                <img src={a1} alt="Wireless Noise-Cancelling Headphones" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Wireless Headphones" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  AudioTech
                </div>
                {" "}
                <div className="product-card__name">
                  Wireless Noise-Cancelling Headphones
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (128)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $299
                  </span>
                  {" "}
                  <span className="product-card__price-old">
                    $399
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <img src={a2} alt="Ultra-Slim Laptop Pro" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Ultra-Slim Laptop" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  TechNova
                </div>
                {" "}
                <div className="product-card__name">
                  Ultra-Slim Laptop Pro 14"
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  {" "}
                  <span>
                    (96)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $1,299
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <span className="badge-new">
                  New
                </span>
                {" "}
                <img src={a3} alt="Smart Fitness Watch" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Smart Watch" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  GearFit
                </div>
                {" "}
                <div className="product-card__name">
                  Smart Fitness Watch Series 8
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  {" "}
                  <span>
                    (214)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $249
                  </span>
                  {" "}
                  <span className="product-card__price-old">
                    $329
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <span className="badge-sale">
                  -20%
                </span>
                {" "}
                <img src={a4} alt="4K Drone Camera" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="4K Drone" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  SkyVision
                </div>
                {" "}
                <div className="product-card__name">
                  4K Drone Camera Pro
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  {" "}
                  <span>
                    (67)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $599
                  </span>
                  {" "}
                  <span className="product-card__price-old">
                    $749
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <img src={a5} alt="Bluetooth Speaker" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Bluetooth Speaker" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  SoundWave
                </div>
                {" "}
                <div className="product-card__name">
                  Portable Bluetooth Speaker 360
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (183)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $79
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <span className="badge-new">
                  New
                </span>
                {" "}
                <img src={a6} alt="Mechanical Keyboard" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Mechanical Keyboard" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  KeyForge
                </div>
                {" "}
                <div className="product-card__name">
                  RGB Mechanical Keyboard TKL
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  {" "}
                  <span>
                    (52)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $149
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <img src={a7} alt="Smartphone 5G" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Smartphone 5G" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  PixelMax
                </div>
                {" "}
                <div className="product-card__name">
                  Smartphone Ultra 5G 256GB
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  {" "}
                  <span>
                    (341)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $899
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card__img">
                {" "}
                <img src={a8} alt="Gaming Mouse" loading="lazy" width="200" height="200" />
                {" "}
                <div className="product-card__actions">
                  {" "}
                  <button data-add="Gaming Mouse" aria-label="Add to cart">
                    <i className="fas fa-cart-plus" />
                  </button>
                  {" "}
                  <button aria-label="Add to wishlist">
                    <i className="fas fa-heart" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-card__body">
                {" "}
                <div className="product-card__brand">
                  Precision
                </div>
                {" "}
                <div className="product-card__name">
                  Pro Gaming Mouse 20K DPI
                </div>
                {" "}
                <div className="product-card__rating">
                  {" "}
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (97)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-card__price">
                  {" "}
                  <span className="product-card__price-current">
                    $89
                  </span>
                  {" "}
                  <span className="product-card__price-old">
                    $119
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
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            {" "}
            <a href="products.html" className="btn btn--outline">
              {"View All Products "}
              <i className="fas fa-arrow-right" />
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
          <div className="promo reveal">
            {" "}
            <div className="promo__glow" />
            {" "}
            <div className="promo__content">
              {" "}
              <div className="section__tag" style={{ color: "#22D3EE" }}>
                Limited Time
              </div>
              {" "}
              <h2 className="promo__title">
                Up to 40% Off
                <br />
                Premium Audio Gear
              </h2>
              {" "}
              <p className="promo__desc">
                Studio-quality headphones, speakers, and earbuds at unprecedented prices. Ends this weekend.
              </p>
              {" "}
              <a href="products.html" className="btn btn--cyan btn--lg">
                {"Shop the Sale "}
                <i className="fas fa-arrow-right" />
              </a>
              {" "}
            </div>
            {" "}
            <div className="promo__image">
              {" "}
              <img src={a9} alt="Premium audio sale" width="360" height="280" />
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
      <section className="section section--gray">
        {" "}
        <div className="container">
          {" "}
          <div className="section__header section__header--center reveal">
            {" "}
            <div className="section__tag">
              Trusted Brands
            </div>
            {" "}
            <h2 className="section__title">
              Authorized Retailer
            </h2>
            {" "}
          </div>
          {" "}
          <div className="brands-row reveal">
            {" "}
            <span className="brand-logo">
              NVIDIA
            </span>
            {" "}
            <span className="brand-logo">
              SONY
            </span>
            {" "}
            <span className="brand-logo">
              SAMSUNG
            </span>
            {" "}
            <span className="brand-logo">
              APPLE
            </span>
            {" "}
            <span className="brand-logo">
              BOSE
            </span>
            {" "}
            <span className="brand-logo">
              RAZER
            </span>
            {" "}
            <span className="brand-logo">
              LG
            </span>
            {" "}
            <span className="brand-logo">
              DELL
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section circuit-bg">
        {" "}
        <div className="container" style={{ position: "relative", zIndex: "2" }}>
          {" "}
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            {" "}
            <div className="section__tag" style={{ justifyContent: "center" }}>
              Stay Connected
            </div>
            {" "}
            <h2 className="section__title" style={{ marginBottom: ".5rem" }}>
              Get Tech Deals First
            </h2>
            {" "}
            <p className="section__subtitle" style={{ margin: "0 auto 1.5rem" }}>
              Subscribe for exclusive offers, new arrivals, and insider tech reviews.
            </p>
            {" "}
            <div className="newsletter" style={{ margin: "0 auto" }}>
              {" "}
              <input type="email" placeholder="Enter your email address" aria-label="Email address" />
              {" "}
              <button className="btn btn--primary">
                Subscribe
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                {" "}
                <span className="logo__icon" style={{ width: "28px", height: "28px", fontSize: ".7rem" }}>
                  <i className="fas fa-microchip" />
                </span>
                {" ELECTRO "}
              </div>
              {" "}
              <p className="footer__desc">
                Your trusted destination for premium electronics and cutting-edge tech. Authorized retailer with worldwide shipping.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-x-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__heading">
                Quick Links
              </div>
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
                  <a href="products.html">
                    Products
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
              <div className="footer__heading">
                Categories
              </div>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="products.html">
                    Laptops
                  </a>
                </li>
                {" "}
                <li>
                  <a href="products.html">
                    Smartphones
                  </a>
                </li>
                {" "}
                <li>
                  <a href="products.html">
                    Audio
                  </a>
                </li>
                {" "}
                <li>
                  <a href="products.html">
                    Gaming
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__heading">
                Support
              </div>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="#">
                    FAQ
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Shipping Policy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Returns
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Warranty
                  </a>
                </li>
                {" "}
              </ul>
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
              {" ELECTRO. All rights reserved."}
            </span>
            {" "}
            <span>
              Designed with precision.
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <div id="toast" className="toast" />
      {" "}
      {" "}
    </div>
  );
}
