// Converted from the HTML template digital-store-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/slider-1.webp";
import a1 from "./assets/slider-2.webp";
import a2 from "./assets/slider-3.webp";
import a3 from "./assets/brand-1.webp";
import a4 from "./assets/brand-2.webp";
import a5 from "./assets/brand-3.webp";
import a6 from "./assets/brand-4.webp";
import a7 from "./assets/brand-5.webp";
import a8 from "./assets/brand-6.webp";
import a9 from "./assets/category-1.webp";
import a10 from "./assets/category-2.webp";
import a11 from "./assets/category-3.webp";
import a12 from "./assets/category-4.webp";
import a13 from "./assets/category-5.webp";
import a14 from "./assets/category-6.webp";
import a15 from "./assets/category-7.webp";
import a16 from "./assets/category-8.webp";
import a17 from "./assets/product-1.webp";
import a18 from "./assets/product-2.webp";
import a19 from "./assets/product-3.webp";
import a20 from "./assets/product-4.webp";
import a21 from "./assets/product-5.webp";
import a22 from "./assets/product-6.webp";
import a23 from "./assets/product-7.webp";
import a24 from "./assets/product-8.webp";
import a25 from "./assets/product-9.webp";
import a26 from "./assets/product-10.webp";
import a27 from "./assets/review-1.webp";
import a28 from "./assets/review-2.webp";
import a29 from "./assets/review-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-digital-store-cf2c">
      {" "}
      {" "}
      <div className="top-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="top-bar-left">
            {" "}
            <a href="mailto:hello@estore.com">
              <i className="fa fa-envelope" />
              {" hello@estore.com"}
            </a>
            {" "}
            <a href="tel:+18001234567">
              <i className="fa fa-phone" />
              {" 1-800-123-4567"}
            </a>
            {" "}
          </div>
          {" "}
          <div className="top-bar-right">
            {" "}
            <a href="#">
              Free shipping on orders over $50
            </a>
            {" "}
            <a href="#">
              Track Order
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="header-nav">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <div className="logo-icon">
              E
            </div>
            {" "}
            <div className="logo-text">
              ESTORE
            </div>
            {" "}
          </a>
          {" "}
          <nav className="nav-links" id="navLinks">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="products.html">
              Products
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="nav-actions">
            {" "}
            <button className="cart-btn" aria-label="Shopping cart">
              {" "}
              <i className="fa fa-shopping-bag" />
              {" Cart "}
              <span className="cart-count" data-cart-count="">
                0
              </span>
              {" "}
            </button>
            {" "}
            <div className="burger" id="burger" aria-label="Toggle navigation">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </div>
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
        <div className="container">
          {" "}
          <div className="hero-inner">
            {" "}
            <div className="hero-content">
              {" "}
              <div className="hero-badge">
                New Collection 2026
              </div>
              {" "}
              <h1>
                {"Discover the "}
                <span>
                  Future
                </span>
                {" of Digital Shopping"}
              </h1>
              {" "}
              <p>
                Explore premium electronics, exclusive bundles, and everyday essentials — all at unbeatable prices with lightning-fast delivery.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="products.html" className="btn btn-primary btn-lg">
                  <i className="fa fa-shopping-bag" />
                  {" Shop Now"}
                </a>
                {" "}
                <a href="about.html" className="btn btn-outline btn-lg">
                  Learn More
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-stats">
                {" "}
                <div className="hero-stat">
                  {" "}
                  <h3>
                    10K+
                  </h3>
                  {" "}
                  <p>
                    Happy Customers
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="hero-stat">
                  {" "}
                  <h3>
                    500+
                  </h3>
                  {" "}
                  <p>
                    Premium Products
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="hero-stat">
                  {" "}
                  <h3>
                    99%
                  </h3>
                  {" "}
                  <p>
                    Satisfaction Rate
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero-slider">
              {" "}
              <div className="hero-slide active">
                {" "}
                <img src={a0} alt="Featured collection showcasing the latest tech products" />
                {" "}
                <div className="hero-slide-overlay">
                  {" "}
                  <h3>
                    Latest Tech Gadgets
                  </h3>
                  {" "}
                  <p>
                    Explore our curated selection of top-rated electronics
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-slide">
                {" "}
                <img src={a1} alt="Exclusive deals on premium digital devices" />
                {" "}
                <div className="hero-slide-overlay">
                  {" "}
                  <h3>
                    Exclusive Deals
                  </h3>
                  {" "}
                  <p>
                    Save up to 40% on select premium items
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-slide">
                {" "}
                <img src={a2} alt="Premium lifestyle products at ESTORE" />
                {" "}
                <div className="hero-slide-overlay">
                  {" "}
                  <h3>
                    Premium Lifestyle
                  </h3>
                  {" "}
                  <p>
                    Quality products for the modern consumer
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-dots">
                {" "}
                <button className="active" aria-label="Go to slide 1" />
                {" "}
                <button aria-label="Go to slide 2" />
                {" "}
                <button aria-label="Go to slide 3" />
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
      <section className="brands">
        {" "}
        <div className="container">
          {" "}
          <div className="brands-grid">
            {" "}
            <img src={a3} alt="Partner brand logo" />
            {" "}
            <img src={a4} alt="Partner brand logo" />
            {" "}
            <img src={a5} alt="Partner brand logo" />
            {" "}
            <img src={a6} alt="Partner brand logo" />
            {" "}
            <img src={a7} alt="Partner brand logo" />
            {" "}
            <img src={a8} alt="Partner brand logo" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="features-strip">
        {" "}
        <div className="container">
          {" "}
          <div className="features-grid">
            {" "}
            <div className="feature-card reveal reveal-delay-1">
              {" "}
              <div className="feature-icon">
                <i className="fa fa-truck-fast" />
              </div>
              {" "}
              <div>
                {" "}
                <h4>
                  Free Shipping
                </h4>
                {" "}
                <p>
                  {"Fast & free delivery on all orders over $50"}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-2">
              {" "}
              <div className="feature-icon">
                <i className="fa fa-shield-halved" />
              </div>
              {" "}
              <div>
                {" "}
                <h4>
                  Secure Payment
                </h4>
                {" "}
                <p>
                  100% secure checkout with encrypted data
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-3">
              {" "}
              <div className="feature-icon">
                <i className="fa fa-rotate-left" />
              </div>
              {" "}
              <div>
                {" "}
                <h4>
                  Easy Returns
                </h4>
                {" "}
                <p>
                  30-day hassle-free return policy on all items
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-4">
              {" "}
              <div className="feature-icon">
                <i className="fa fa-headset" />
              </div>
              {" "}
              <div>
                {" "}
                <h4>
                  24/7 Support
                </h4>
                {" "}
                <p>
                  Expert help whenever you need it, day or night
                </p>
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
          <div className="section-header">
            {" "}
            <h2>
              Shop by Category
            </h2>
            {" "}
            <p>
              Browse our curated collections to find exactly what you need
            </p>
            {" "}
          </div>
          {" "}
          <div className="categories-grid">
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-1">
              {" "}
              <img src={a9} alt="Smartphones category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Smartphones
                </h4>
                {" "}
                <span>
                  128 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-2">
              {" "}
              <img src={a10} alt="Laptops category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Laptops
                </h4>
                {" "}
                <span>
                  86 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-3">
              {" "}
              <img src={a11} alt="Audio category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Audio
                </h4>
                {" "}
                <span>
                  64 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-4">
              {" "}
              <img src={a12} alt="Wearables category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Wearables
                </h4>
                {" "}
                <span>
                  52 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-1">
              {" "}
              <img src={a13} alt="Gaming category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Gaming
                </h4>
                {" "}
                <span>
                  95 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-2">
              {" "}
              <img src={a14} alt={"Home & Living category"} />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  {"Home & Living"}
                </h4>
                {" "}
                <span>
                  73 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-3">
              {" "}
              <img src={a15} alt="Accessories category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Accessories
                </h4>
                {" "}
                <span>
                  110 Products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="products.html" className="category-card reveal reveal-delay-4">
              {" "}
              <img src={a16} alt="Cameras category" />
              {" "}
              <div className="category-card-overlay">
                {" "}
                <h4>
                  Cameras
                </h4>
                {" "}
                <span>
                  38 Products
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
      <section className="section" style={{ background: "var(--white)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <h2>
              Featured Products
            </h2>
            {" "}
            <p>
              Handpicked favorites from our latest arrivals
            </p>
            {" "}
          </div>
          {" "}
          <div className="products-grid">
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-1">
              {" "}
              <div className="product-badge">
                <span className="badge badge-new">
                  New
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a17} alt="Wireless Noise-Canceling Headphones" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Audio
                </div>
                {" "}
                <h3 className="product-name">
                  Wireless Noise-Canceling Headphones
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-stroke" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (214)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $299.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-2">
              {" "}
              <div className="product-badge">
                <span className="badge badge-sale">
                  -25%
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a18} alt="Ultra-Slim Laptop Pro 15" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Laptops
                </div>
                {" "}
                <h3 className="product-name">
                  Ultra-Slim Laptop Pro 15
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (189)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    {"$1,199.99 "}
                    <span className="old-price">
                      $1,599.99
                    </span>
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-3">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a19} alt="Smart Fitness Tracker X" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Wearables
                </div>
                {" "}
                <h3 className="product-name">
                  Smart Fitness Tracker X
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (342)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $149.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-4">
              {" "}
              <div className="product-badge">
                <span className="badge badge-new">
                  New
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a20} alt="Portable Bluetooth Speaker" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Audio
                </div>
                {" "}
                <h3 className="product-name">
                  Portable Bluetooth Speaker
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (156)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $79.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-1">
              {" "}
              <div className="product-badge">
                <span className="badge badge-sale">
                  -15%
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a21} alt="4K Ultra HD Action Camera" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Cameras
                </div>
                {" "}
                <h3 className="product-name">
                  4K Ultra HD Action Camera
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (278)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    {"$339.99 "}
                    <span className="old-price">
                      $399.99
                    </span>
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-2">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a22} alt="Ergonomic Wireless Mouse" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Accessories
                </div>
                {" "}
                <h3 className="product-name">
                  Ergonomic Wireless Mouse
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-stroke" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (124)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $49.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-3">
              {" "}
              <div className="product-badge">
                <span className="badge badge-new">
                  New
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a23} alt="Gaming Console Pro" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Gaming
                </div>
                {" "}
                <h3 className="product-name">
                  Gaming Console Pro
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (412)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $499.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-4">
              {" "}
              <div className="product-badge">
                <span className="badge badge-sale">
                  -30%
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a24} alt="Smart Home Hub Mini" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Home
                </div>
                {" "}
                <h3 className="product-name">
                  Smart Home Hub Mini
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-stroke" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (98)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    {"$69.99 "}
                    <span className="old-price">
                      $99.99
                    </span>
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-1">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a25} alt="USB-C Fast Charging Cable" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Accessories
                </div>
                {" "}
                <h3 className="product-name">
                  USB-C Fast Charging Cable
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (567)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    $19.99
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="product-card reveal reveal-delay-2">
              {" "}
              <div className="product-badge">
                <span className="badge badge-sale">
                  -20%
                </span>
              </div>
              {" "}
              <div className="product-img">
                {" "}
                <img src={a26} alt="Wireless Ergonomic Keyboard" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Add to wishlist">
                    <i className="fa fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="fa fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-info">
                {" "}
                <div className="product-category">
                  Accessories
                </div>
                {" "}
                <h3 className="product-name">
                  Wireless Ergonomic Keyboard
                </h3>
                {" "}
                <div className="product-rating">
                  {" "}
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  {" "}
                  <span className="rating-count">
                    (193)
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-price-row">
                  {" "}
                  <span className="product-price">
                    {"$89.99 "}
                    <span className="old-price">
                      $112.49
                    </span>
                  </span>
                  {" "}
                  <button className="product-add-btn" data-add="">
                    <i className="fa fa-cart-plus" />
                    {" Add"}
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
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            {" "}
            <a href="products.html" className="btn btn-outline btn-lg">
              {"View All Products "}
              <i className="fa fa-arrow-right" />
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-banner">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-inner">
            {" "}
            <div>
              {" "}
              <h2>
                Summer Sale — Up to 40% Off
              </h2>
              {" "}
              <p>
                Limited time offer on our most popular products. Don't miss out!
              </p>
              {" "}
            </div>
            {" "}
            <a href="products.html" className="btn btn-white btn-lg">
              {"Shop the Sale "}
              <i className="fa fa-arrow-right" />
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
          <div className="section-header">
            {" "}
            <h2>
              What Customers Say
            </h2>
            {" "}
            <p>
              Real reviews from real customers who love shopping with us
            </p>
            {" "}
          </div>
          {" "}
          <div className="reviews-grid">
            {" "}
            <div className="review-card reveal reveal-delay-1">
              {" "}
              <div className="review-header">
                {" "}
                <img src={a27} alt="Sarah Johnson" className="review-avatar" />
                {" "}
                <div className="review-meta">
                  {" "}
                  <h4>
                    Sarah Johnson
                  </h4>
                  {" "}
                  <p>
                    Verified Buyer
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              {" "}
              <p>
                "Absolutely blown away by the quality and speed of delivery. The headphones I ordered exceeded all my expectations. ESTORE has a customer for life!"
              </p>
              {" "}
            </div>
            {" "}
            <div className="review-card reveal reveal-delay-2">
              {" "}
              <div className="review-header">
                {" "}
                <img src={a28} alt="Mark Thompson" className="review-avatar" />
                {" "}
                <div className="review-meta">
                  {" "}
                  <h4>
                    Mark Thompson
                  </h4>
                  {" "}
                  <p>
                    Verified Buyer
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              {" "}
              <p>
                "Best online shopping experience I've had. The product selection is amazing, prices are competitive, and their support team is incredibly responsive."
              </p>
              {" "}
            </div>
            {" "}
            <div className="review-card reveal reveal-delay-3">
              {" "}
              <div className="review-header">
                {" "}
                <img src={a29} alt="Emily Rodriguez" className="review-avatar" />
                {" "}
                <div className="review-meta">
                  {" "}
                  <h4>
                    Emily Rodriguez
                  </h4>
                  {" "}
                  <p>
                    Verified Buyer
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-stroke" />
              </div>
              {" "}
              <p>
                "I've been shopping here for months and the consistency in quality and service never disappoints. The easy return policy gives me total confidence to try new products."
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
      <section className="newsletter">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter-inner">
            {" "}
            <div>
              {" "}
              <h2>
                Stay in the Loop
              </h2>
              {" "}
              <p>
                Subscribe to our newsletter for exclusive deals, new arrivals, and insider tips.
              </p>
              {" "}
            </div>
            {" "}
            <form className="newsletter-form" data-form="">
              {" "}
              <input type="email" placeholder="Enter your email address" required={true} />
              {" "}
              <button type="submit">
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo">
                {" "}
                <div className="logo-icon">
                  E
                </div>
                {" "}
                <div className="logo-text">
                  ESTORE
                </div>
                {" "}
              </a>
              {" "}
              <p>
                Your one-stop digital store for premium electronics and everyday essentials. Quality products, unbeatable prices, exceptional service.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube" />
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
                  <a href="products.html">
                    Products
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
              <h4>
                Support
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    Help Center
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Shipping Info
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
                    FAQs
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-contact">
              {" "}
              <h4>
                Get in Touch
              </h4>
              {" "}
              <p>
                <i className="fa fa-location-dot" />
                {" 123 Commerce St, Tech City, CA 90210"}
              </p>
              {" "}
              <p>
                <i className="fa fa-phone" />
                {" 1-800-123-4567"}
              </p>
              {" "}
              <p>
                <i className="fa fa-envelope" />
                {" hello@estore.com"}
              </p>
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
              {" ESTORE. All rights reserved."}
            </p>
            {" "}
            <p>
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms of Service
              </a>
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
        <i className="fa fa-arrow-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
