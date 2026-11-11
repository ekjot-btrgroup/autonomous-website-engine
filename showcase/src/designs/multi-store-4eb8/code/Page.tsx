// Converted from the HTML template multi-store-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero-men.webp";
import a1 from "./assets/img-hero-women.webp";
import a2 from "./assets/img-hero-kids.webp";
import a3 from "./assets/img-cat-1.webp";
import a4 from "./assets/img-cat-2.webp";
import a5 from "./assets/img-cat-3.webp";
import a6 from "./assets/img-cat-4.webp";
import a7 from "./assets/img-product-1.webp";
import a8 from "./assets/img-product-2.webp";
import a9 from "./assets/img-product-3.webp";
import a10 from "./assets/img-product-4.webp";
import a11 from "./assets/img-product-5.webp";
import a12 from "./assets/img-product-6.webp";
import a13 from "./assets/img-product-7.webp";
import a14 from "./assets/img-product-8.webp";
import a15 from "./assets/img-offer-summer.webp";
import a16 from "./assets/img-offer-winter.webp";
import a17 from "./assets/img-product-9.webp";
import a18 from "./assets/img-vendor-1.webp";
import a19 from "./assets/img-vendor-2.webp";
import a20 from "./assets/img-vendor-3.webp";
import a21 from "./assets/img-vendor-4.webp";
import a22 from "./assets/img-vendor-5.webp";
import a23 from "./assets/img-vendor-6.webp";
import a24 from "./assets/img-vendor-7.webp";
import a25 from "./assets/img-vendor-8.webp";
import a26 from "./assets/img-client-1.webp";
import a27 from "./assets/img-client-2.webp";
import a28 from "./assets/img-client-3.webp";
import a29 from "./assets/img-client-4.webp";
import a30 from "./assets/img-payments.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400;1,6..12,500&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-multi-store-4eb8">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container">
          {" "}
          <div className="topbar-left">
            {" "}
            <a href="mailto:hello@mercato.shop">
              hello@mercato.shop
            </a>
            {" "}
            <span className="sep">
              |
            </span>
            {" "}
            <span>
              +1 (555) 234-5678
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar-right">
            {" "}
            <a href="#">
              Sign In
            </a>
            {" "}
            <span className="sep">
              /
            </span>
            {" "}
            <a href="#">
              Register
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            Merc
            <span>
              ato
            </span>
          </a>
          {" "}
          <nav className="nav-links" id="navLinks">
            {" "}
            <a href="index.html" className="nav-link">
              Home
            </a>
            {" "}
            <a href="shop.html" className="nav-link">
              Shop
            </a>
            {" "}
            <a href="cart.html" className="nav-link">
              Cart
            </a>
            {" "}
            <a href="checkout.html" className="nav-link">
              Checkout
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header-actions">
            {" "}
            <a href="cart.html" className="cart-icon" aria-label="Shopping cart">
              {" 🛒"}
              <span className="cart-count">
                3
              </span>
              {" "}
            </a>
            {" "}
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
              {" "}
              <span className="bar" />
              {" "}
              <span className="bar" />
              {" "}
              <span className="bar" />
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
      <section className="hero" aria-label="Featured promotions">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Men's fashion collection" className="active" />
          {" "}
          <img src={a1} alt="Women's fashion collection" />
          {" "}
          <img src={a2} alt="Kids' fashion collection" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="hero-content">
          {" "}
          <div>
            {" "}
            <h1>
              Style That Speaks
              <br />
              for Itself
            </h1>
            {" "}
            <p>
              Discover curated collections from the world's most exciting brands — all in one place. Free shipping on your first order.
            </p>
            {" "}
            <a href="shop.html" className="btn btn-light">
              Shop Now
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="feature-strip reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="feature-grid">
            {" "}
            <div className="feature-item">
              {" "}
              <span className="ico">
                ✔
              </span>
              {" "}
              <h4>
                Quality Product
              </h4>
              {" "}
              <p>
                {"Premium materials & craftsmanship"}
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-item">
              {" "}
              <span className="ico">
                🚚
              </span>
              {" "}
              <h4>
                Free Shipping
              </h4>
              {" "}
              <p>
                On orders over $75
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-item">
              {" "}
              <span className="ico">
                ⇄
              </span>
              {" "}
              <h4>
                14-Day Return
              </h4>
              {" "}
              <p>
                No questions asked
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-item">
              {" "}
              <span className="ico">
                ☎
              </span>
              {" "}
              <h4>
                24/7 Support
              </h4>
              {" "}
              <p>
                We're here to help
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
      <section className="cat-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title">
            {" "}
            <span className="section-label">
              Browse
            </span>
            {" "}
            <h2>
              Shop by Category
            </h2>
            {" "}
          </div>
          {" "}
          <div className="cat-grid">
            {" "}
            <a href="shop.html" className="cat-card">
              {" "}
              <img src={a3} alt="Women's apparel category" />
              {" "}
              <div className="cat-body">
                {" "}
                <h3>
                  Women's
                </h3>
                {" "}
                <p>
                  128 Products
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card">
              {" "}
              <img src={a4} alt="Men's apparel category" />
              {" "}
              <div className="cat-body">
                {" "}
                <h3>
                  Men's
                </h3>
                {" "}
                <p>
                  96 Products
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card">
              {" "}
              <img src={a5} alt="Kids' fashion category" />
              {" "}
              <div className="cat-body">
                {" "}
                <h3>
                  Kids'
                </h3>
                {" "}
                <p>
                  72 Products
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="shop.html" className="cat-card">
              {" "}
              <img src={a6} alt="Accessories category" />
              {" "}
              <div className="cat-body">
                {" "}
                <h3>
                  Accessories
                </h3>
                {" "}
                <p>
                  54 Products
                </p>
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
      <section className="prod-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title">
            {" "}
            <span className="section-label">
              Featured
            </span>
            {" "}
            <h2>
              Trending Now
            </h2>
            {" "}
          </div>
          {" "}
          <div className="prod-grid">
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a7} alt="Merino Wool Knit Sweater" />
                {" "}
                <span className="prod-badge">
                  New
                </span>
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Merino Wool Knit
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $148
                  </span>
                  {" "}
                  <span className="old">
                    $195
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (42) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a8} alt="Tailored Linen Blazer" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Tailored Linen Blazer
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $225
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (87) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a9} alt="Silk-Blend Midi Dress" />
                {" "}
                <span className="prod-badge sold">
                  Sold Out
                </span>
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="shop.html" className="btn btn-outline btn-sm">
                    View Details
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Silk-Blend Midi Dress
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $189
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (34) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a10} alt="Classic Denim Jacket" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Classic Denim Jacket
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $132
                  </span>
                  {" "}
                  <span className="old">
                    $165
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (56) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a11} alt="Cashmere Turtleneck" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Cashmere Turtleneck
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $210
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (73) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a12} alt="Pleated Wide-Leg Trousers" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Pleated Wide-Leg Trousers
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $118
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (29) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a13} alt="Cotton Poplin Shirt" />
                {" "}
                <span className="prod-badge">
                  New
                </span>
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Cotton Poplin Shirt
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $86
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (61) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a14} alt="Leather Crossbody Bag" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Leather Crossbody Bag
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $265
                  </span>
                  {" "}
                  <span className="old">
                    $320
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (94) "}
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
      <section className="offer-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="offer-grid">
            {" "}
            <div className="offer-card">
              {" "}
              <img src={a15} alt="Summer sale promotion" />
              {" "}
              <div className="offer-overlay" />
              {" "}
              <div className="offer-body">
                {" "}
                <span className="offer-tag">
                  Up to 40% Off
                </span>
                {" "}
                <h3>
                  Summer Edit
                </h3>
                {" "}
                <p>
                  Lightweight linen, breezy cottons, and sun-ready essentials.
                </p>
                {" "}
                <a href="shop.html" className="btn btn-light btn-sm">
                  Shop Summer
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="offer-card">
              {" "}
              <img src={a16} alt="Winter collection promotion" />
              {" "}
              <div className="offer-overlay" />
              {" "}
              <div className="offer-body">
                {" "}
                <span className="offer-tag">
                  New Arrivals
                </span>
                {" "}
                <h3>
                  Winter Collection
                </h3>
                {" "}
                <p>
                  Cashmere, merino, and tailored layers for the season ahead.
                </p>
                {" "}
                <a href="shop.html" className="btn btn-light btn-sm">
                  Shop Winter
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
      <section className="prod-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title">
            {" "}
            <span className="section-label">
              Just In
            </span>
            {" "}
            <h2>
              New Arrivals
            </h2>
            {" "}
          </div>
          {" "}
          <div className="prod-grid">
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a17} alt="Wool-Blend Overcoat" />
                {" "}
                <span className="prod-badge">
                  New
                </span>
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Wool-Blend Overcoat
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $340
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" (18) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a7} alt="Merino Wool Knit Sweater" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Merino Wool Knit
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $148
                  </span>
                  {" "}
                  <span className="old">
                    $195
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (42) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a10} alt="Classic Denim Jacket" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Classic Denim Jacket
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $132
                  </span>
                  {" "}
                  <span className="old">
                    $165
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (56) "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="prod-card">
              {" "}
              <div className="prod-img">
                {" "}
                <img src={a12} alt="Pleated Wide-Leg Trousers" />
                {" "}
                <div className="prod-actions">
                  {" "}
                  <a href="cart.html" className="btn btn-primary btn-sm">
                    Add to Cart
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="prod-body">
                {" "}
                <a href="shop.html" className="prod-name">
                  Pleated Wide-Leg Trousers
                </a>
                {" "}
                <div className="prod-price">
                  {" "}
                  <span className="curr">
                    $118
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="prod-rating">
                  {" "}
                  <span className="stars">
                    ★★★★☆
                  </span>
                  {" (29) "}
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
      <section className="vendor-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="vendor-grid">
            {" "}
            <div className="vendor-item">
              <img src={a18} alt="Mosaico brand" />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a19} alt="Aether label" />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a20} alt={"North & Pine"} />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a21} alt="Studio Dusk" />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a22} alt="Casa Verde" />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a23} alt={"Loom & Thread"} />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a24} alt="Montage" />
            </div>
            {" "}
            <div className="vendor-item">
              <img src={a25} alt="Drift co." />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="tst-section reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title">
            {" "}
            <span className="section-label">
              Testimonials
            </span>
            {" "}
            <h2>
              What Our Shoppers Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="tst-grid">
            {" "}
            <div className="tst-card">
              {" "}
              <div className="tst-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "The quality exceeded my expectations. The linen blazer is beautifully tailored and the shipping was incredibly fast."
              </blockquote>
              {" "}
              <div className="tst-person">
                {" "}
                <img src={a26} alt="Sophia Chen" />
                {" "}
                <div>
                  {" "}
                  <div className="tst-name">
                    Sophia Chen
                  </div>
                  {" "}
                  <div className="tst-title">
                    Verified Buyer
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="tst-card">
              {" "}
              <div className="tst-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "Mercato has become my go-to for wardrobe staples. The curation is fantastic — I always find something I love."
              </blockquote>
              {" "}
              <div className="tst-person">
                {" "}
                <img src={a27} alt="James Okafor" />
                {" "}
                <div>
                  {" "}
                  <div className="tst-name">
                    James Okafor
                  </div>
                  {" "}
                  <div className="tst-title">
                    Verified Buyer
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="tst-card">
              {" "}
              <div className="tst-stars">
                ★★★★☆
              </div>
              {" "}
              <blockquote>
                "Great selection and easy returns. The customer service team helped me find the right size on my first order."
              </blockquote>
              {" "}
              <div className="tst-person">
                {" "}
                <img src={a28} alt="Elena Vasquez" />
                {" "}
                <div>
                  {" "}
                  <div className="tst-name">
                    Elena Vasquez
                  </div>
                  {" "}
                  <div className="tst-title">
                    Verified Buyer
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="tst-card">
              {" "}
              <div className="tst-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "The kids' section is wonderful. My daughter loves her new dress, and the fabric is so soft and durable."
              </blockquote>
              {" "}
              <div className="tst-person">
                {" "}
                <img src={a29} alt="Aisha Patel" />
                {" "}
                <div>
                  {" "}
                  <div className="tst-name">
                    Aisha Patel
                  </div>
                  {" "}
                  <div className="tst-title">
                    Verified Buyer
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
      <section className="newsletter reveal">
        {" "}
        <div className="container">
          {" "}
          <h2>
            Join the List
          </h2>
          {" "}
          <p>
            Be the first to hear about new arrivals, exclusive drops, and members-only sales.
          </p>
          {" "}
          <form className="newsletter-form" data-form="">
            {" "}
            <input type="email" name="email" placeholder="Enter your email" required={true} />
            {" "}
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
            {" "}
            <div className="form-msg form-ok">
              Thanks for subscribing!
            </div>
            {" "}
            <div className="form-msg form-err">
              Please enter a valid email.
            </div>
            {" "}
          </form>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-section reveal">
        {" "}
        <div className="container">
          {" "}
          <h2>
            Ready to Refresh Your Wardrobe?
          </h2>
          {" "}
          <p>
            Explore thousands of curated pieces from emerging and established designers — all with free shipping and easy returns.
          </p>
          {" "}
          <a href="shop.html" className="btn btn-light btn-lg">
            Start Shopping
          </a>
          {" "}
          <span className="cta-phone">
            Call us: +1 (555) 234-5678
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-col">
              {" "}
              <a href="index.html" className="logo" style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "12px", display: "inline-block" }}>
                Merc
                <span style={{ color: "var(--clr-accent)" }}>
                  ato
                </span>
              </a>
              {" "}
              <p>
                Mercato is a curated multi-brand marketplace connecting you with the best in contemporary fashion. We believe style should be effortless, sustainable, and accessible to everyone.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  ig
                </a>
                {" "}
                <a href="#" aria-label="Pinterest">
                  p
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  x
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h3>
                Quick Shop
              </h3>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="shop.html">
                    Women's
                  </a>
                </li>
                {" "}
                <li>
                  <a href="shop.html">
                    Men's
                  </a>
                </li>
                {" "}
                <li>
                  <a href="shop.html">
                    Kids'
                  </a>
                </li>
                {" "}
                <li>
                  <a href="shop.html">
                    Accessories
                  </a>
                </li>
                {" "}
                <li>
                  <a href="shop.html">
                    Sale
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h3>
                Customer Care
              </h3>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    {"Shipping & Returns"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Size Guide
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    FAQs
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h3>
                Get in Touch
              </h3>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <span className="ico">
                    📍
                  </span>
                  {" 123 Mercer Street, New York, NY 10012"}
                </li>
                {" "}
                <li>
                  <span className="ico">
                    ✉
                  </span>
                  {" hello@mercato.shop"}
                </li>
                {" "}
                <li>
                  <span className="ico">
                    ☎
                  </span>
                  {" +1 (555) 234-5678"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="footer-payments">
                {" "}
                <img src={a30} alt="Accepted payment methods" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Mercato. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Designed with care by "}
              <a href="#">
                Mercato Studio
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
