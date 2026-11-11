// Converted from the HTML template online-store-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/vendor-1.webp";
import a2 from "./assets/vendor-2.webp";
import a3 from "./assets/vendor-3.webp";
import a4 from "./assets/vendor-4.webp";
import a5 from "./assets/cat-1.webp";
import a6 from "./assets/cat-2.webp";
import a7 from "./assets/cat-3.webp";
import a8 from "./assets/cat-4.webp";
import a9 from "./assets/cat-5.webp";
import a10 from "./assets/cat-6.webp";
import a11 from "./assets/product-1.webp";
import a12 from "./assets/product-2.webp";
import a13 from "./assets/product-3.webp";
import a14 from "./assets/product-4.webp";
import a15 from "./assets/product-5.webp";
import a16 from "./assets/product-6.webp";
import a17 from "./assets/product-7.webp";
import a18 from "./assets/product-8.webp";
import a19 from "./assets/offer-1.webp";
import a20 from "./assets/offer-2.webp";
import a21 from "./assets/vendor-5.webp";
import a22 from "./assets/vendor-6.webp";
import a23 from "./assets/vendor-7.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-online-store-e8d2">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container">
          {" "}
          <div className="topbar-inner">
            {" "}
            <div className="topbar-links">
              {" "}
              <a href="#">
                <i className="fas fa-leaf" />
                {" Fresh Picks Daily"}
              </a>
              {" "}
              <span>
                |
              </span>
              {" "}
              <a href="#">
                Sell on ESHOPPER
              </a>
              {" "}
              <span>
                |
              </span>
              {" "}
              <a href="#">
                {"Help & Support"}
              </a>
              {" "}
            </div>
            {" "}
            <div className="topbar-social">
              {" "}
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              {" "}
              <a href="#">
                <i className="fab fa-youtube" />
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
      {" "}
      <header className="header" id="header">
        {" "}
        <div className="container">
          {" "}
          <div className="header-inner">
            {" "}
            <a href="index.html" className="logo">
              {" "}
              <span className="logo-leaf">
                <i className="fas fa-leaf" />
              </span>
              {" ESHOPPER "}
            </a>
            {" "}
            <div className="search-bar">
              {" "}
              <i className="fas fa-search search-icon" />
              {" "}
              <input type="text" placeholder="Search products, vendors, categories..." />
              {" "}
            </div>
            {" "}
            <div className="header-actions">
              {" "}
              <button className="header-action-btn" aria-label="Wishlist">
                {" "}
                <i className="far fa-heart" />
                {" "}
                <span className="count">
                  3
                </span>
                {" "}
              </button>
              {" "}
              <button className="header-action-btn" aria-label="Cart" data-add="">
                {" "}
                <i className="fas fa-shopping-bag" />
                {" "}
                <span className="count">
                  0
                </span>
                {" "}
              </button>
              {" "}
              <button className="header-action-btn" aria-label="Account">
                {" "}
                <i className="far fa-user" />
                {" "}
              </button>
              {" "}
              <button className="burger" id="burger" aria-label="Toggle menu">
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
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <nav className="navbar" id="navbar">
        {" "}
        <div className="container">
          {" "}
          <div className="navbar-inner">
            {" "}
            <div className="categories-dropdown" id="categoriesDropdown">
              {" "}
              <button className="categories-trigger" id="catTrigger">
                {" "}
                <i className="fas fa-bars" />
                {" All Categories "}
                <i className="fas fa-chevron-down" style={{ fontSize: "0.7rem" }} />
                {" "}
              </button>
              {" "}
              <div className="categories-menu" id="catMenu">
                {" "}
                <a href="shop.html">
                  <i className="fas fa-tshirt" />
                  {" Fashion & Apparel "}
                  <span className="cat-count">
                    1,240
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-laptop" />
                  {" Electronics "}
                  <span className="cat-count">
                    856
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-couch" />
                  {" Home & Living "}
                  <span className="cat-count">
                    634
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-spa" />
                  {" Beauty & Wellness "}
                  <span className="cat-count">
                    423
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-dumbbell" />
                  {" Sports & Outdoors "}
                  <span className="cat-count">
                    312
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-baby" />
                  {" Kids & Baby "}
                  <span className="cat-count">
                    289
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-utensils" />
                  {" Food & Grocery "}
                  <span className="cat-count">
                    567
                  </span>
                </a>
                {" "}
                <a href="shop.html">
                  <i className="fas fa-book" />
                  {" Books & Stationery "}
                  <span className="cat-count">
                    198
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="nav-links" id="navLinks">
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
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      <div className="nav-overlay" id="navOverlay" />
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Marketplace hero" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-grid">
              {" "}
              <div className="hero-text reveal">
                {" "}
                <h1>
                  {"Discover "}
                  <span>
                    Trusted Vendors
                  </span>
                  {" & Unique Products"}
                </h1>
                {" "}
                <p>
                  Shop from hundreds of verified vendors offering curated collections. Quality guaranteed, delivered to your doorstep.
                </p>
                {" "}
                <div className="hero-buttons">
                  {" "}
                  <a href="shop.html" className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-bag" />
                    {" Explore Shop"}
                  </a>
                  {" "}
                  <a href="about.html" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}>
                    <i className="fas fa-play-circle" />
                    {" Meet Our Vendors"}
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="hero-stats">
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <div className="num">
                      2,400+
                    </div>
                    {" "}
                    <div className="label">
                      Products
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <div className="num">
                      180+
                    </div>
                    {" "}
                    <div className="label">
                      Vendors
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <div className="num">
                      98%
                    </div>
                    {" "}
                    <div className="label">
                      Satisfaction
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-vendors reveal">
                {" "}
                <div className="hero-vendor-card">
                  {" "}
                  <img src={a1} alt="Vendor" className="hero-vendor-img" />
                  {" "}
                  <div className="hero-vendor-info">
                    {" "}
                    <h4>
                      Green Leaf Co.
                    </h4>
                    {" "}
                    <p>
                      {"Organic & Sustainable"}
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="hero-vendor-card">
                  {" "}
                  <img src={a2} alt="Vendor" className="hero-vendor-img" />
                  {" "}
                  <div className="hero-vendor-info">
                    {" "}
                    <h4>
                      Urban Thread
                    </h4>
                    {" "}
                    <p>
                      Modern Fashion
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="hero-vendor-card">
                  {" "}
                  <img src={a3} alt="Vendor" className="hero-vendor-img" />
                  {" "}
                  <div className="hero-vendor-info">
                    {" "}
                    <h4>
                      TechNest
                    </h4>
                    {" "}
                    <p>
                      Premium Electronics
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="hero-vendor-card">
                  {" "}
                  <img src={a4} alt="Vendor" className="hero-vendor-img" />
                  {" "}
                  <div className="hero-vendor-info">
                    {" "}
                    <h4>
                      Artisan Home
                    </h4>
                    {" "}
                    <p>
                      Handcrafted Decor
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
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="features-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="features-grid reveal">
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-icon">
                <i className="fas fa-shield-alt" />
              </div>
              {" "}
              <div>
                {" "}
                <h5>
                  Verified Vendors
                </h5>
                {" "}
                <p>
                  Every seller is vetted
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-icon">
                <i className="fas fa-truck" />
              </div>
              {" "}
              <div>
                {" "}
                <h5>
                  Free Shipping
                </h5>
                {" "}
                <p>
                  On orders over $50
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-icon">
                <i className="fas fa-undo" />
              </div>
              {" "}
              <div>
                {" "}
                <h5>
                  Easy Returns
                </h5>
                {" "}
                <p>
                  30-day return policy
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-card">
              {" "}
              <div className="feature-icon">
                <i className="fas fa-headset" />
              </div>
              {" "}
              <div>
                {" "}
                <h5>
                  24/7 Support
                </h5>
                {" "}
                <p>
                  Dedicated help center
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
      <section className="categories">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Browse Categories
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            Find exactly what you need from our curated collection of categories
          </p>
          {" "}
          <div className="categories-grid">
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a5} alt="Fashion" />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  {"Fashion & Apparel"}
                </h3>
                {" "}
                <span>
                  1,240 products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a6} alt="Electronics" />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  Electronics
                </h3>
                {" "}
                <span>
                  856 products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a7} alt={"Home & Living"} />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  {"Home & Living"}
                </h3>
                {" "}
                <span>
                  634 products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a8} alt="Beauty" />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  {"Beauty & Wellness"}
                </h3>
                {" "}
                <span>
                  423 products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a9} alt="Sports" />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  {"Sports & Outdoors"}
                </h3>
                {" "}
                <span>
                  312 products
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card reveal">
              {" "}
              <img src={a10} alt="Kids" />
              {" "}
              <div className="cat-card-overlay">
                {" "}
                <h3>
                  {"Kids & Baby"}
                </h3>
                {" "}
                <span>
                  289 products
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
      <section className="products">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Trending Products
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            Hand-picked favorites from our top vendors this week
          </p>
          {" "}
          <div className="product-grid">
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a11} alt="Stylish Summer Dress" />
                {" "}
                <div className="product-badges">
                  <span className="badge badge-green">
                    New
                  </span>
                </div>
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Urban Thread"}
                </div>
                {" "}
                <h4>
                  Stylish Summer Dress
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (128)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $89.00
                  </span>
                  <span className="original">
                    $129.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a12} alt="Premium Cotton Blazer" />
                {" "}
                <div className="product-badges">
                  <span className="badge badge-amber">
                    -20%
                  </span>
                </div>
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Green Leaf Co."}
                </div>
                {" "}
                <h4>
                  Premium Cotton Blazer
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  {" "}
                  <span>
                    (87)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $156.00
                  </span>
                  <span className="original">
                    $195.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a13} alt="Designer Leather Handbag" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Artisan Home"}
                </div>
                {" "}
                <h4>
                  Designer Leather Handbag
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  {" "}
                  <span>
                    (214)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $245.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a14} alt="Wireless Noise-Cancelling Headphones" />
                {" "}
                <div className="product-badges">
                  <span className="badge badge-green">
                    Best Seller
                  </span>
                </div>
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" TechNest"}
                </div>
                {" "}
                <h4>
                  Wireless NC Headphones
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (342)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $199.00
                  </span>
                  <span className="original">
                    $279.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a15} alt="Organic Cotton T-Shirt" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Green Leaf Co."}
                </div>
                {" "}
                <h4>
                  Organic Cotton T-Shirt
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  {" "}
                  <span>
                    (96)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $34.00
                  </span>
                  <span className="original">
                    $45.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a16} alt="Handcrafted Ceramic Vase" />
                {" "}
                <div className="product-badges">
                  <span className="badge badge-amber">
                    -15%
                  </span>
                </div>
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Artisan Home"}
                </div>
                {" "}
                <h4>
                  Handcrafted Ceramic Vase
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  {" "}
                  <span>
                    (58)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $68.00
                  </span>
                  <span className="original">
                    $80.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a17} alt="Smart Fitness Watch" />
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" TechNest"}
                </div>
                {" "}
                <h4>
                  Smart Fitness Watch
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  {" "}
                  <span>
                    (189)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $329.00
                  </span>
                  <span className="original">
                    $399.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-img">
                {" "}
                <img src={a18} alt="Minimalist Desk Lamp" />
                {" "}
                <div className="product-badges">
                  <span className="badge badge-green">
                    New
                  </span>
                </div>
                {" "}
                <div className="product-actions">
                  {" "}
                  <button className="product-action-btn" aria-label="Wishlist">
                    <i className="far fa-heart" />
                  </button>
                  {" "}
                  <button className="product-action-btn" aria-label="Quick view">
                    <i className="far fa-eye" />
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-body">
                {" "}
                <div className="product-vendor">
                  <span className="badge badge-verified">
                    Verified
                  </span>
                  {" Artisan Home"}
                </div>
                {" "}
                <h4>
                  Minimalist Desk Lamp
                </h4>
                {" "}
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  {" "}
                  <span>
                    (72)
                  </span>
                </div>
                {" "}
                <div className="product-price">
                  <span className="current">
                    $79.00
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="product-footer">
                {" "}
                <button className="btn btn-primary btn-sm" data-add="">
                  <i className="fas fa-shopping-bag" />
                  {" Add to Cart"}
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
      </section>
      {" "}
      {" "}
      <section className="offers">
        {" "}
        <div className="container">
          {" "}
          <div className="offers-grid">
            {" "}
            <div className="offer-card dark reveal">
              {" "}
              <img src={a19} alt="Spring Collection" />
              {" "}
              <div className="offer-content">
                {" "}
                <span className="offer-tag">
                  Limited Time
                </span>
                {" "}
                <h3>
                  Spring Collection
                </h3>
                {" "}
                <p>
                  Up to 30% off seasonal favorites from top vendors
                </p>
                {" "}
                <a href="shop.html" className="btn btn-primary">
                  {"Shop Now "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="offer-card green reveal">
              {" "}
              <img src={a20} alt="New Arrivals" />
              {" "}
              <div className="offer-content">
                {" "}
                <span className="offer-tag">
                  Just Dropped
                </span>
                {" "}
                <h3>
                  New Arrivals Weekly
                </h3>
                {" "}
                <p>
                  Fresh styles and products added every week
                </p>
                {" "}
                <a href="shop.html" className="btn btn-primary">
                  {"Explore "}
                  <i className="fas fa-arrow-right" />
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
      <section className="vendors">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Featured Vendors
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            Meet the trusted sellers behind our curated marketplace
          </p>
          {" "}
          <div className="vendors-grid">
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <img src={a1} alt="Green Leaf Co." className="vendor-img" />
              {" "}
              <h4>
                Green Leaf Co.
              </h4>
              {" "}
              <div className="vendor-location">
                <i className="fas fa-map-marker-alt" />
                {" Portland, OR"}
              </div>
              {" "}
              <div className="vendor-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                {" "}
                <span>
                  4.8 (234)
                </span>
              </div>
              {" "}
              <span className="badge badge-verified">
                Verified Vendor
              </span>
              {" "}
              <div className="vendor-products-count" style={{ marginTop: "0.5rem" }}>
                142 Products
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <img src={a2} alt="Urban Thread" className="vendor-img" />
              {" "}
              <h4>
                Urban Thread
              </h4>
              {" "}
              <div className="vendor-location">
                <i className="fas fa-map-marker-alt" />
                {" Brooklyn, NY"}
              </div>
              {" "}
              <div className="vendor-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                {" "}
                <span>
                  4.9 (512)
                </span>
              </div>
              {" "}
              <span className="badge badge-verified">
                Verified Vendor
              </span>
              {" "}
              <div className="vendor-products-count" style={{ marginTop: "0.5rem" }}>
                267 Products
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <img src={a3} alt="TechNest" className="vendor-img" />
              {" "}
              <h4>
                TechNest
              </h4>
              {" "}
              <div className="vendor-location">
                <i className="fas fa-map-marker-alt" />
                {" San Francisco, CA"}
              </div>
              {" "}
              <div className="vendor-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                {" "}
                <span>
                  4.6 (189)
                </span>
              </div>
              {" "}
              <span className="badge badge-verified">
                Verified Vendor
              </span>
              {" "}
              <div className="vendor-products-count" style={{ marginTop: "0.5rem" }}>
                98 Products
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <img src={a4} alt="Artisan Home" className="vendor-img" />
              {" "}
              <h4>
                Artisan Home
              </h4>
              {" "}
              <div className="vendor-location">
                <i className="fas fa-map-marker-alt" />
                {" Austin, TX"}
              </div>
              {" "}
              <div className="vendor-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                {" "}
                <span>
                  4.7 (321)
                </span>
              </div>
              {" "}
              <span className="badge badge-verified">
                Verified Vendor
              </span>
              {" "}
              <div className="vendor-products-count" style={{ marginTop: "0.5rem" }}>
                183 Products
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
      <section className="testimonials">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            What Our Customers Say
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            Real reviews from real shoppers who trust our vendors
          </p>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              {" "}
              <p>
                "The vendor verification process gives me confidence. Every product I've received has been exactly as described. The quality is consistently excellent."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a21} alt="Sarah M." />
                {" "}
                <div>
                  {" "}
                  <h5>
                    Sarah M.
                  </h5>
                  {" "}
                  <span>
                    Verified Buyer
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              {" "}
              <p>
                "I love the variety on ESHOPPER. Found unique handmade items I couldn't find anywhere else. The vendors are responsive and shipping is always fast."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a22} alt="James K." />
                {" "}
                <div>
                  {" "}
                  <h5>
                    James K.
                  </h5>
                  {" "}
                  <span>
                    Repeat Customer
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              {" "}
              <p>
                "The compare feature is a game changer. Being able to check products side by side before buying has saved me so much time. Highly recommend!"
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a23} alt="Lisa R." />
                {" "}
                <div>
                  {" "}
                  <h5>
                    Lisa R.
                  </h5>
                  {" "}
                  <span>
                    Power Shopper
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="newsletter">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter-inner reveal">
            {" "}
            <h2>
              Stay in the Loop
            </h2>
            {" "}
            <p>
              Get the latest product drops, vendor spotlights, and exclusive deals delivered to your inbox.
            </p>
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
                <span className="logo-leaf">
                  <i className="fas fa-leaf" />
                </span>
                {" ESHOPPER "}
              </a>
              {" "}
              <p>
                Your trusted online marketplace connecting you with verified vendors and curated products. Quality guaranteed.
              </p>
              {" "}
              <div className="footer-contact">
                {" "}
                <p>
                  <i className="fas fa-map-marker-alt" />
                  {" 123 Market Street, New York, USA"}
                </p>
                {" "}
                <p>
                  <i className="fas fa-envelope" />
                  {" hello@eshopper.com"}
                </p>
                {" "}
                <p>
                  <i className="fas fa-phone-alt" />
                  {" +1 (555) 123-4567"}
                </p>
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
              <div className="footer-links">
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
                <a href="#">
                  Become a Vendor
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Customer Care
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="#">
                  My Account
                </a>
                {" "}
                <a href="#">
                  Order Tracking
                </a>
                {" "}
                <a href="#">
                  {"Returns & Refunds"}
                </a>
                {" "}
                <a href="#">
                  FAQs
                </a>
                {" "}
                <a href="#">
                  Privacy Policy
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Newsletter
              </h4>
              {" "}
              <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
                Subscribe for deals and new vendor announcements.
              </p>
              {" "}
              <form className="footer-newsletter-form" data-form="">
                {" "}
                <input type="email" placeholder="Your email" required={true} />
                {" "}
                <button type="submit">
                  <i className="fas fa-paper-plane" />
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
              {" ESHOPPER. All rights reserved."}
            </p>
            {" "}
            <div className="footer-payments">
              {" "}
              <span>
                VISA
              </span>
              {" "}
              <span>
                MC
              </span>
              {" "}
              <span>
                AMEX
              </span>
              {" "}
              <span>
                PayPal
              </span>
              {" "}
              <span>
                Apple Pay
              </span>
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
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <i className="fas fa-chevron-up" />
      </button>
      {" "}
      {" "}
      <div className="toast" id="toast">
        <span className="toast-icon">
          <i className="fas fa-check-circle" />
        </span>
        {" Added to cart!"}
      </div>
      {" "}
      {" "}
    </div>
  );
}
