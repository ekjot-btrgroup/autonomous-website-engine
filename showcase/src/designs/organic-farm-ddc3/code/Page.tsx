// Converted from the HTML template organic-farm-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/bg-product-1.webp";
import a4 from "./assets/bg-product-2.webp";
import a5 from "./assets/feature.webp";
import a6 from "./assets/product-1.webp";
import a7 from "./assets/product-2.webp";
import a8 from "./assets/fruit.webp";
import a9 from "./assets/vegetable.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/user.webp";
import a13 from "./assets/footer.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,500&family=Nunito+Sans:wght@400;600;700;800;900&family=Caveat:wght@500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-organic-farm-ddc3">
      {" "}
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="brand" aria-label="FarmFresh home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              🌿
            </span>
            {" "}
            <span className="brand-text">
              {" "}
              <span className="brand-name">
                Farm
                <em>
                  Fresh
                </em>
              </span>
              {" "}
              <span className="brand-tag">
                {"Organic Farm & Produce"}
              </span>
              {" "}
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
          {" "}
          <nav className="nav-links" aria-label="Main navigation">
            {" "}
            <a className="nav-link" href="index.html">
              Home
            </a>
            {" "}
            <a className="nav-link" href="about.html">
              About
            </a>
            {" "}
            <a className="nav-link" href="service.html">
              Services
            </a>
            {" "}
            <a className="nav-link" href="feature.html">
              Features
            </a>
            {" "}
            <a className="nav-link" href="product.html">
              Shop
            </a>
            {" "}
            <a className="nav-link" href="team.html">
              Team
            </a>
            {" "}
            <a className="nav-link" href="blog.html">
              Blog
            </a>
            {" "}
            <a className="nav-link" href="testimonial.html">
              Reviews
            </a>
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
            {" "}
            <a className="btn btn-primary btn-sm nav-cta" href="product.html">
              Order a Box
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg" aria-hidden="true">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" aria-hidden="true" />
          {" "}
          <div className="hero-pattern" aria-hidden="true" />
          {" "}
          <div className="container hero-inner">
            {" "}
            <span className="eyebrow reveal">
              Harvested at dawn · Delivered fresh
            </span>
            {" "}
            <h1 className="reveal">
              {"From sunlit fields to "}
              <span className="script">
                your table
              </span>
            </h1>
            {" "}
            <p className="reveal">
              Hand-picked organic vegetables, heirloom fruits and small-batch pantry goods, grown on our family farm with compost, care and a lot of good soil.
            </p>
            {" "}
            <div className="hero-actions reveal">
              {" "}
              <a href="product.html" className="btn btn-primary btn-lg">
                {"Shop the Harvest "}
                <span className="arrow">
                  →
                </span>
              </a>
              {" "}
              <a href="service.html" className="btn btn-light btn-lg">
                Our Farm Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta reveal">
              {" "}
              <div className="hero-stat">
                <strong>
                  120+
                </strong>
                <span>
                  Organic Crops
                </span>
              </div>
              {" "}
              <div className="hero-stat">
                <strong>
                  4,800
                </strong>
                <span>
                  Happy Families
                </span>
              </div>
              {" "}
              <div className="hero-stat">
                <strong>
                  0
                </strong>
                <span>
                  Sprays or Chemicals
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <span className="hero-scroll" aria-hidden="true">
            <span className="wheel" />
            Scroll
          </span>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="ticker" aria-hidden="true">
          {" "}
          <div className="ticker-track">
            {" "}
            <span>
              <i>
                100% Certified Organic
              </i>
              {" Fresh From the Farm "}
              <i>
                No Pesticides
              </i>
              {" Heirloom Varieties "}
              <i>
                Picked To Order
              </i>
              {" Family Owned Since 1987 "}
              <i>
                Carbon-Neutral Delivery
              </i>
              {" Seed to Shelf"}
            </span>
            {" "}
            <span>
              <i>
                100% Certified Organic
              </i>
              {" Fresh From the Farm "}
              <i>
                No Pesticides
              </i>
              {" Heirloom Varieties "}
              <i>
                Picked To Order
              </i>
              {" Family Owned Since 1987 "}
              <i>
                Carbon-Neutral Delivery
              </i>
              {" Seed to Shelf"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section">
          {" "}
          <div className="container split">
            {" "}
            <div className="split-media reveal reveal-left">
              {" "}
              <div className="frame">
                <img src={a2} alt="Farmer's hands holding a basket of freshly harvested organic vegetables" loading="lazy" />
              </div>
              {" "}
              <div className="split-badge">
                <strong>
                  38+
                </strong>
                <span>
                  Years of Farming
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-copy reveal reveal-right">
              {" "}
              <span className="eyebrow">
                Our Story
              </span>
              {" "}
              <h2>
                {"A family farm that grows food "}
                <span className="accent">
                  the honest way
                </span>
              </h2>
              {" "}
              <p className="lead">
                Three generations of the Whitfield family have tended these ten acres. We farm in tune with the seasons, feed our soil with home-made compost, and never, ever reach for a chemical shortcut.
              </p>
              {" "}
              <p>
                Every head of lettuce and every sun-warmed tomato leaves the field the same morning it is picked. What we cannot grow ourselves — good coffee, stone-milled flours, raw local honey — we source from neighbouring growers we know by name.
              </p>
              {" "}
              <ul className="split-list">
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Soil-fed with compost, cover crops & respect"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" No synthetic pesticides, herbicides or GMOs"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Picked to order and delivered within hours"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="split-sign">
                {" "}
                <div>
                  {" "}
                  <div className="sig">
                    Martha Whitfield
                  </div>
                  {" "}
                  <div className="role">
                    {"Founder & Head Grower"}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="about.html" className="btn btn-outline">
                  Read Our Story
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
        <section className="section" style={{ background: "var(--linen)" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow center">
                Why FarmFresh
              </span>
              {" "}
              <h2>
                {"Good food, grown on "}
                <span className="accent">
                  purpose
                </span>
              </h2>
              {" "}
              <p>
                From the way we tend the soil to the box on your porch, every step is deliberate.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-grid">
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-icon">
                  🌱
                </div>
                {" "}
                <h3>
                  Certified Organic
                </h3>
                {" "}
                <p>
                  Third-party certified year after year — no sprays, no synthetic anything, ever.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card tomato reveal">
                {" "}
                <div className="feature-icon">
                  🚜
                </div>
                {" "}
                <h3>
                  Picked to Order
                </h3>
                {" "}
                <p>
                  We harvest the morning you order, so your box is at its absolute peak.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card gold reveal">
                {" "}
                <div className="feature-icon">
                  🥬
                </div>
                {" "}
                <h3>
                  Heirloom Varieties
                </h3>
                {" "}
                <p>
                  Over 120 heritage crops chosen for flavour first, not shelf life.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-icon">
                  📦
                </div>
                {" "}
                <h3>
                  Zero-Waste Delivery
                </h3>
                {" "}
                <p>
                  Reusable crates and compostable wraps, delivered by our own quiet van.
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
        <section className="stats-band section">
          {" "}
          <div className="container">
            {" "}
            <div className="stats-grid reveal">
              {" "}
              <div className="stat-item">
                {" "}
                <svg className="stat-leaf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 3C12 3 5 7 4 15c3-4 8-6 14-6v4c0 1 .5 2 2 2s2-1 2-2c0-1-.5-2-2-2V3z" transform="rotate(15 12 12)" />
                </svg>
                {" "}
                <strong>
                  120+
                </strong>
                <span>
                  Crops Grown
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <svg className="stat-leaf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 3C12 3 5 7 4 15c3-4 8-6 14-6v4c0 1 .5 2 2 2s2-1 2-2c0-1-.5-2-2-2V3z" transform="rotate(15 12 12)" />
                </svg>
                {" "}
                <strong>
                  4,800+
                </strong>
                <span>
                  Families Served
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <svg className="stat-leaf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 3C12 3 5 7 4 15c3-4 8-6 14-6v4c0 1 .5 2 2 2s2-1 2-2c0-1-.5-2-2-2V3z" transform="rotate(15 12 12)" />
                </svg>
                {" "}
                <strong>
                  38
                </strong>
                <span>
                  Years Farming
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <svg className="stat-leaf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 3C12 3 5 7 4 15c3-4 8-6 14-6v4c0 1 .5 2 2 2s2-1 2-2c0-1-.5-2-2-2V3z" transform="rotate(15 12 12)" />
                </svg>
                {" "}
                <strong>
                  4.9★
                </strong>
                <span>
                  Average Rating
                </span>
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
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow center">
                What We Offer
              </span>
              {" "}
              <h2>
                {"Farm services, "}
                <span className="accent">
                  all season long
                </span>
              </h2>
              {" "}
              <p>
                Beyond the market stall — visit the farm, join a share, or have everything delivered.
              </p>
              {" "}
            </div>
            {" "}
            <div className="services-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-media">
                  {" "}
                  <span className="service-num">
                    01
                  </span>
                  {" "}
                  <img src={a3} alt="Weekly farm share produce crate" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Weekly Farm Shares
                  </h3>
                  {" "}
                  <p>
                    A CSA-style box of whatever is freshest in the field, every single week.
                  </p>
                  {" "}
                  <a className="service-link" href="product.html">
                    {"Explore shares "}
                    <span className="arrow">
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-media">
                  {" "}
                  <span className="service-num">
                    02
                  </span>
                  {" "}
                  <img src={a4} alt="Farm-to-door grocery delivery van" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Farm-To-Door Delivery
                  </h3>
                  {" "}
                  <p>
                    Order online by 5pm and your crates arrive on the porch by sunrise.
                  </p>
                  {" "}
                  <a className="service-link" href="service.html">
                    {"Delivery details "}
                    <span className="arrow">
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-media">
                  {" "}
                  <span className="service-num">
                    03
                  </span>
                  {" "}
                  <img src={a5} alt="U-pick field with rows of crops" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    U-Pick Weekends
                  </h3>
                  {" "}
                  <p>
                    Grab a basket and wander the fields — berries, tomatoes and sunflowers.
                  </p>
                  {" "}
                  <a className="service-link" href="service.html">
                    {"Visit the farm "}
                    <span className="arrow">
                      →
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" style={{ background: "var(--linen)" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow center">
                This Week's Harvest
              </span>
              {" "}
              <h2>
                {"Fresh out of the "}
                <span className="accent">
                  ground
                </span>
              </h2>
              {" "}
              <p>
                Picked this morning. Beautifully imperfect. Ready for your kitchen.
              </p>
              {" "}
            </div>
            {" "}
            <div className="product-grid">
              {" "}
              <article className="product-card reveal">
                {" "}
                <div className="product-thumb">
                  {" "}
                  <span className="product-tag leaf">
                    Organic
                  </span>
                  {" "}
                  <button className="product-wish" aria-label="Add to wishlist">
                    ♥
                  </button>
                  {" "}
                  <img src={a6} alt="Heirloom rainbow tomatoes" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <span className="product-cat">
                    Tomatoes
                  </span>
                  {" "}
                  <h3>
                    <a href="detail.html">
                      Heirloom Tomato Trio
                    </a>
                  </h3>
                  {" "}
                  <div className="product-meta">
                    {" "}
                    <span className="product-price">
                      $8.50
                    </span>
                    {" "}
                    <a href="detail.html" className="product-add" aria-label="View heirloom tomato trio">
                      +
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal">
                {" "}
                <div className="product-thumb">
                  {" "}
                  <span className="product-tag">
                    Limited
                  </span>
                  {" "}
                  <button className="product-wish" aria-label="Add to wishlist">
                    ♥
                  </button>
                  {" "}
                  <img src={a7} alt="Fresh leafy greens bunch" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <span className="product-cat">
                    Greens
                  </span>
                  {" "}
                  <h3>
                    <a href="detail.html">
                      Microgreen Garden Box
                    </a>
                  </h3>
                  {" "}
                  <div className="product-meta">
                    {" "}
                    <span className="product-price">
                      $6.25
                    </span>
                    {" "}
                    <a href="detail.html" className="product-add" aria-label="View microgreen box">
                      +
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal">
                {" "}
                <div className="product-thumb">
                  {" "}
                  <span className="product-tag leaf">
                    Organic
                  </span>
                  {" "}
                  <button className="product-wish" aria-label="Add to wishlist">
                    ♥
                  </button>
                  {" "}
                  <img src={a8} alt="Ripe seasonal fruits assortment" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <span className="product-cat">
                    Fruit
                  </span>
                  {" "}
                  <h3>
                    <a href="detail.html">
                      Seasonal Berry Mix
                    </a>
                  </h3>
                  {" "}
                  <div className="product-meta">
                    {" "}
                    <span className="product-price">
                      $9.75
                    </span>
                    {" "}
                    <a href="detail.html" className="product-add" aria-label="View seasonal berry mix">
                      +
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal">
                {" "}
                <div className="product-thumb">
                  {" "}
                  <span className="product-tag">
                    New
                  </span>
                  {" "}
                  <button className="product-wish" aria-label="Add to wishlist">
                    ♥
                  </button>
                  {" "}
                  <img src={a9} alt="Fresh farm vegetables assortment" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <span className="product-cat">
                    Vegetables
                  </span>
                  {" "}
                  <h3>
                    <a href="detail.html">
                      {"Root & Leaf Bundle"}
                    </a>
                  </h3>
                  {" "}
                  <div className="product-meta">
                    {" "}
                    <span className="product-price">
                      $12.00
                    </span>
                    {" "}
                    <a href="detail.html" className="product-add" aria-label="View root and leaf bundle">
                      +
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="center reveal" style={{ marginTop: "var(--sp-5)" }}>
              {" "}
              <a href="product.html" className="btn btn-green btn-lg">
                {"Browse the Full Harvest "}
                <span className="arrow">
                  →
                </span>
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
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow center">
                Kind Words
              </span>
              {" "}
              <h2>
                {"Loved by the "}
                <span className="accent">
                  whole neighbourhood
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="testi-grid">
              {" "}
              <blockquote className="quote-card reveal">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  "
                </span>
                {" "}
                <p>
                  The heirloom tomatoes tasted like the ones from my grandmother's garden. I have not eaten a tomato like that in twenty years.
                </p>
                {" "}
                <div className="quote-person">
                  {" "}
                  <img src={a10} alt="Portrait of customer Sarah Bennett" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Sarah Bennett
                    </strong>
                    <span>
                      Home Cook
                    </span>
                  </div>
                  {" "}
                  <span className="quote-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote-card reveal">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  "
                </span>
                {" "}
                <p>
                  Their weekly share changed how our family eats. The kids argue over who gets the first strawberry — every single week.
                </p>
                {" "}
                <div className="quote-person">
                  {" "}
                  <img src={a11} alt="Portrait of customer David Cho" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      David Cho
                    </strong>
                    <span>
                      CSA Member · 3 Years
                    </span>
                  </div>
                  {" "}
                  <span className="quote-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote-card reveal">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  "
                </span>
                {" "}
                <p>
                  Delivery is always on time, the crates are beautiful, and you can genuinely taste the difference. Worth every penny.
                </p>
                {" "}
                <div className="quote-person">
                  {" "}
                  <img src={a12} alt="Portrait of customer Priya Raman" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Priya Raman
                    </strong>
                    <span>
                      Weekly Subscriber
                    </span>
                  </div>
                  {" "}
                  <span className="quote-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" style={{ paddingTop: "0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="cta-band reveal">
              {" "}
              <h2>
                Join the harvest this season 🌻
              </h2>
              {" "}
              <p>
                Sign up for our Sunday letter — what's ripe in the field, recipes from our kitchen, and a first look at farm shares.
              </p>
              {" "}
              <form className="newsletter-form" data-form="" noValidate={true}>
                {" "}
                <input type="email" name="email" placeholder="Your best email address" aria-label="Email address" required={true} />
                {" "}
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
                {" "}
                <p className="form-ok">
                  🌿 Welcome to the farm! Your first letter arrives Sunday.
                </p>
                {" "}
                <p className="form-err">
                  Please enter your email address so we know where to send it.
                </p>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
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
              <a href="index.html" className="brand" aria-label="FarmFresh home">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  🌿
                </span>
                {" "}
                <span className="brand-text">
                  {" "}
                  <span className="brand-name">
                    Farm
                    <em>
                      Fresh
                    </em>
                  </span>
                  {" "}
                  <span className="brand-tag">
                    {"Organic Farm & Produce"}
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Family-owned organic farm growing honest, delicious food for our community since 1987. Seed to shelf, never any shortcuts.
              </p>
              {" "}
              <span className="footer-badge">
                {" "}
                <img src={a13} alt="Certified organic farm badge" loading="lazy" />
                {" Certified Organic · Est. 1987 "}
              </span>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Explore
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="about.html">
                    About the Farm
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Our Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="feature.html">
                    Why Choose Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Journal
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Shop
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="product.html">
                    Fresh Produce
                  </a>
                </li>
                {" "}
                <li>
                  <a href="product.html">
                    Farm Shares
                  </a>
                </li>
                {" "}
                <li>
                  <a href="detail.html">
                    Featured Product
                  </a>
                </li>
                {" "}
                <li>
                  <a href="team.html">
                    Meet the Team
                  </a>
                </li>
                {" "}
                <li>
                  <a href="testimonial.html">
                    Reviews
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Visit Us
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <span aria-hidden="true">
                    📍
                  </span>
                  {" 482 Meadow Lane, Green Valley, CA 95628"}
                </li>
                {" "}
                <li>
                  <span aria-hidden="true">
                    📞
                  </span>
                  {" "}
                  <a href="tel:+15550148200">
                    +1 (555) 014-8200
                  </a>
                </li>
                {" "}
                <li>
                  <span aria-hidden="true">
                    ✉️
                  </span>
                  {" "}
                  <a href="mailto:hello@farmfresh.demo">
                    hello@farmfresh.demo
                  </a>
                </li>
                {" "}
                <li>
                  <span aria-hidden="true">
                    🕖
                  </span>
                  {" Farm stand open Wed–Sun, 8am–6pm"}
                </li>
                {" "}
              </ul>
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
              {" FarmFresh Organic Farm. Grown with "}
              <span aria-hidden="true">
                💚
              </span>
              {" on the land."}
            </span>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Instagram">
                <span aria-hidden="true">
                  📷
                </span>
              </a>
              {" "}
              <a href="#" aria-label="Facebook">
                <span aria-hidden="true">
                  👍
                </span>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <span aria-hidden="true">
                  ▶
                </span>
              </a>
              {" "}
              <a href="#" aria-label="Pinterest">
                <span aria-hidden="true">
                  📌
                </span>
              </a>
              {" "}
            </div>
            {" "}
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
