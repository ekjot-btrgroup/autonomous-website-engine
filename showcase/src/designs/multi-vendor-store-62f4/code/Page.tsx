// Converted from the HTML template multi-vendor-store-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/product-1.webp";
import a1 from "./assets/product-2.webp";
import a2 from "./assets/product-3.webp";
import a3 from "./assets/product-4.webp";
import a4 from "./assets/offer-1.webp";
import a5 from "./assets/vendor-1.webp";
import a6 from "./assets/vendor-2.webp";
import a7 from "./assets/vendor-3.webp";
import a8 from "./assets/vendor-4.webp";
import a9 from "./assets/vendor-5.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-multi-vendor-store-62f4">
      {" "}
      <div className="header-top">
        {"🎉 "}
        <strong>
          Free shipping
        </strong>
        {" on orders over $50 — Shop now!"}
      </div>
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Vendor
              <span>
                Hive
              </span>
            </a>
            {" "}
            <div className="nav-search">
              <input type="text" placeholder="Search products, vendors, categories..." />
            </div>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link">
                Home
              </a>
              {" "}
              <a href="shop.html" className="nav-link">
                Shop
              </a>
              {" "}
              <a href="vendors.html" className="nav-link">
                Vendors
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="#" className="nav-link nav-cart">
                {"🛒 "}
                <span className="nav-cart-badge">
                  3
                </span>
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
          <div className="hero-content">
            {" "}
            <div className="hero-badge reveal">
              🐝 500+ vendors, 50k+ products
            </div>
            {" "}
            <h1 className="hero-title reveal">
              {"Shop from "}
              <span>
                Independent Sellers
              </span>
            </h1>
            {" "}
            <p className="hero-desc reveal">
              Discover unique products from hundreds of independent vendors. Quality goods, competitive prices, and the satisfaction of supporting small businesses.
            </p>
            {" "}
            <div className="hero-actions reveal">
              {" "}
              <a href="shop.html" className="btn btn--white">
                Browse Products →
              </a>
              {" "}
              <a href="vendors.html" className="btn btn--outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--white)" }}>
                Meet Our Vendors
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats reveal">
              {" "}
              <div>
                <div className="hero-stat-num">
                  50k+
                </div>
                <div className="hero-stat-label">
                  Products
                </div>
              </div>
              {" "}
              <div>
                <div className="hero-stat-num">
                  500+
                </div>
                <div className="hero-stat-label">
                  Vendors
                </div>
              </div>
              {" "}
              <div>
                <div className="hero-stat-num">
                  98%
                </div>
                <div className="hero-stat-label">
                  Satisfaction
                </div>
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <div className="section-label">
              Categories
            </div>
            {" "}
            <h2 className="section-title">
              Shop by Category
            </h2>
            {" "}
          </div>
          {" "}
          <div className="categories-grid" style={{ marginTop: "var(--space-2xl)" }}>
            {" "}
            <div className="category-card reveal">
              {" "}
              <div className="category-card-icon">
                👕
              </div>
              {" "}
              <div className="category-card-title">
                Fashion
              </div>
              {" "}
              <div className="category-card-count">
                8,200+ products
              </div>
              {" "}
            </div>
            {" "}
            <div className="category-card reveal">
              {" "}
              <div className="category-card-icon">
                📱
              </div>
              {" "}
              <div className="category-card-title">
                Electronics
              </div>
              {" "}
              <div className="category-card-count">
                5,400+ products
              </div>
              {" "}
            </div>
            {" "}
            <div className="category-card reveal">
              {" "}
              <div className="category-card-icon">
                🏠
              </div>
              {" "}
              <div className="category-card-title">
                {"Home & Living"}
              </div>
              {" "}
              <div className="category-card-count">
                6,800+ products
              </div>
              {" "}
            </div>
            {" "}
            <div className="category-card reveal">
              {" "}
              <div className="category-card-icon">
                🎨
              </div>
              {" "}
              <div className="category-card-title">
                {"Art & Crafts"}
              </div>
              {" "}
              <div className="category-card-count">
                3,200+ products
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
          <div className="text-center reveal">
            {" "}
            <div className="section-label">
              Featured Products
            </div>
            {" "}
            <h2 className="section-title">
              Trending Now
            </h2>
            {" "}
          </div>
          {" "}
          <div className="products-grid" style={{ marginTop: "var(--space-2xl)" }}>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card-img">
                <img src={a0} alt="Product" />
                <div className="product-card-badge">
                  -30%
                </div>
                <button className="product-card-wishlist" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <div className="product-card-vendor">
                  by CraftHouse
                </div>
                {" "}
                <h3 className="product-card-title">
                  Handmade Ceramic Mug Set
                </h3>
                {" "}
                <div className="product-card-rating">
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (124)"}
                </div>
                {" "}
                <div className="product-card-footer">
                  {" "}
                  <div className="product-card-price">
                    {"$34 "}
                    <span className="original">
                      $49
                    </span>
                  </div>
                  {" "}
                  <button className="product-card-cart" aria-label="Add to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card-img">
                <img src={a1} alt="Product" />
                <button className="product-card-wishlist" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <div className="product-card-vendor">
                  by TechNest
                </div>
                {" "}
                <h3 className="product-card-title">
                  Wireless Noise-Canceling Earbuds
                </h3>
                {" "}
                <div className="product-card-rating">
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (89)"}
                </div>
                {" "}
                <div className="product-card-footer">
                  {" "}
                  <div className="product-card-price">
                    $59
                  </div>
                  {" "}
                  <button className="product-card-cart" aria-label="Add to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card-img">
                <img src={a2} alt="Product" />
                <div className="product-card-badge">
                  New
                </div>
                <button className="product-card-wishlist" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <div className="product-card-vendor">
                  by GreenLeaf
                </div>
                {" "}
                <h3 className="product-card-title">
                  Organic Scented Candle Collection
                </h3>
                {" "}
                <div className="product-card-rating">
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (203)"}
                </div>
                {" "}
                <div className="product-card-footer">
                  {" "}
                  <div className="product-card-price">
                    $28
                  </div>
                  {" "}
                  <button className="product-card-cart" aria-label="Add to cart">
                    +
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="product-card reveal">
              {" "}
              <div className="product-card-img">
                <img src={a3} alt="Product" />
                <button className="product-card-wishlist" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
              {" "}
              <div className="product-card-body">
                {" "}
                <div className="product-card-vendor">
                  by UrbanCraft
                </div>
                {" "}
                <h3 className="product-card-title">
                  Minimalist Leather Wallet
                </h3>
                {" "}
                <div className="product-card-rating">
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (67)"}
                </div>
                {" "}
                <div className="product-card-footer">
                  {" "}
                  <div className="product-card-price">
                    $45
                  </div>
                  {" "}
                  <button className="product-card-cart" aria-label="Add to cart">
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
          <div className="deal-banner reveal">
            {" "}
            <div className="deal-banner-img">
              <img src={a4} alt="Deal of the week" />
            </div>
            {" "}
            <div className="deal-banner-content">
              {" "}
              <div className="deal-banner-label">
                🔥 Deal of the Week
              </div>
              {" "}
              <h3 className="deal-banner-title">
                Premium Wireless Speaker
              </h3>
              {" "}
              <div className="deal-banner-price">
                {"$79 "}
                <span className="original">
                  $149
                </span>
              </div>
              {" "}
              <a href="shop.html" className="btn btn--gold" style={{ alignSelf: "flex-start" }}>
                Shop This Deal →
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <div className="section-label">
              Our Vendors
            </div>
            {" "}
            <h2 className="section-title">
              Top Sellers
            </h2>
            {" "}
          </div>
          {" "}
          <div className="vendors-grid" style={{ marginTop: "var(--space-2xl)" }}>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <div className="vendor-card-img">
                <img src={a5} alt="CraftHouse" />
              </div>
              {" "}
              <div className="vendor-card-name">
                CraftHouse
              </div>
              {" "}
              <div className="vendor-card-products">
                120+ products
              </div>
              {" "}
              <div className="vendor-card-rating">
                ★★★★★ 4.9
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <div className="vendor-card-img">
                <img src={a6} alt="TechNest" />
              </div>
              {" "}
              <div className="vendor-card-name">
                TechNest
              </div>
              {" "}
              <div className="vendor-card-products">
                85+ products
              </div>
              {" "}
              <div className="vendor-card-rating">
                ★★★★★ 4.8
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <div className="vendor-card-img">
                <img src={a7} alt="GreenLeaf" />
              </div>
              {" "}
              <div className="vendor-card-name">
                GreenLeaf
              </div>
              {" "}
              <div className="vendor-card-products">
                200+ products
              </div>
              {" "}
              <div className="vendor-card-rating">
                ★★★★★ 4.9
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <div className="vendor-card-img">
                <img src={a8} alt="UrbanCraft" />
              </div>
              {" "}
              <div className="vendor-card-name">
                UrbanCraft
              </div>
              {" "}
              <div className="vendor-card-products">
                95+ products
              </div>
              {" "}
              <div className="vendor-card-rating">
                ★★★★☆ 4.7
              </div>
              {" "}
            </div>
            {" "}
            <div className="vendor-card reveal">
              {" "}
              <div className="vendor-card-img">
                <img src={a9} alt="PixelStudio" />
              </div>
              {" "}
              <div className="vendor-card-name">
                PixelStudio
              </div>
              {" "}
              <div className="vendor-card-products">
                60+ products
              </div>
              {" "}
              <div className="vendor-card-rating">
                ★★★★★ 4.8
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
          <div className="stats-row reveal">
            {" "}
            <div className="stat">
              <div className="stat-num">
                50k+
              </div>
              <div className="stat-label">
                Products
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                500+
              </div>
              <div className="stat-label">
                Vendors
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                120k+
              </div>
              <div className="stat-label">
                Orders
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                4.8
              </div>
              <div className="stat-label">
                Avg Rating
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            Sell on VendorHive
          </h2>
          {" "}
          <p className="cta-desc">
            Join 500+ vendors. Reach thousands of customers. Start selling today.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--white">
            Become a Vendor →
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              <div className="footer-brand-logo">
                Vendor
                <span>
                  Hive
                </span>
              </div>
              <p className="footer-brand-desc">
                Multi-vendor marketplace connecting buyers with independent sellers worldwide.
              </p>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Shop
              </h4>
              <div className="footer-links">
                <a href="shop.html" className="footer-link">
                  All Products
                </a>
                <a href="shop.html" className="footer-link">
                  Categories
                </a>
                <a href="shop.html" className="footer-link">
                  Deals
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Vendors
              </h4>
              <div className="footer-links">
                <a href="vendors.html" className="footer-link">
                  All Vendors
                </a>
                <a href="contact.html" className="footer-link">
                  Sell on VendorHive
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="footer-heading">
                Support
              </h4>
              <div className="footer-links">
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                <a href="#" className="footer-link">
                  Help Center
                </a>
                <a href="#" className="footer-link">
                  Returns
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
              {" VENDORHIVE. All rights reserved."}
            </span>
            <span>
              Shop small, think big 🐝
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
