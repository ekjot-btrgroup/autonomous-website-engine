// Converted from the HTML template ice-cream-shop-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/service-1.webp";
import a3 from "./assets/service-2.webp";
import a4 from "./assets/service-3.webp";
import a5 from "./assets/service-4.webp";
import a6 from "./assets/about.webp";
import a7 from "./assets/product-1.webp";
import a8 from "./assets/product-2.webp";
import a9 from "./assets/product-3.webp";
import a10 from "./assets/product-4.webp";
import a11 from "./assets/product-5.webp";
import a12 from "./assets/promotion.webp";
import a13 from "./assets/portfolio-1.webp";
import a14 from "./assets/portfolio-2.webp";
import a15 from "./assets/portfolio-3.webp";
import a16 from "./assets/portfolio-4.webp";
import a17 from "./assets/portfolio-5.webp";
import a18 from "./assets/portfolio-6.webp";
import a19 from "./assets/testimonial-1.webp";
import a20 from "./assets/testimonial-2.webp";
import a21 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-ice-cream-shop-3c5b">
      {" "}
      {" "}
      <header className="nav">
        {" "}
        <div className="container">
          {" "}
          <a className="brand" href="index.html" aria-label="iCREAM home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              🍨
            </span>
            {" i"}
            <em>
              CREAM
            </em>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav className="nav-links" aria-label="Primary">
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
              Flavors
            </a>
            {" "}
            <a className="nav-link" href="product.html">
              Menu
            </a>
            {" "}
            <a className="nav-link" href="gallery.html">
              Gallery
            </a>
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
            {" "}
            <a className="btn btn--raspberry nav-cta" href="product.html">
              Order a Scoop
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
        <section className="hero" aria-label="Welcome to iCREAM">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="iCREAM signature sundaes and scoops" className="active" />
            {" "}
            <img src={a1} alt="Handcrafted ice cream creations at iCREAM" />
            {" "}
          </div>
          {" "}
          <div className="hero-blobs" aria-hidden="true">
            {" "}
            <svg className="blob-scoop" viewBox="0 0 200 200" style={{ "--r": "-10deg" }}>
              <path fill="#ffc7dc" stroke="#4a2a2e" strokeWidth="6" d="M100 12c52 0 88 36 88 84 0 56-40 92-88 92S12 152 12 96C12 48 48 12 100 12z" />
              <circle cx="70" cy="70" r="10" fill="#fff" opacity=".55" />
              <circle cx="130" cy="88" r="7" fill="#fff" opacity=".4" />
            </svg>
            {" "}
            <svg className="blob-cone" viewBox="0 0 120 160" style={{ "--r": "6deg" }}>
              <path fill="#ffefc9" stroke="#4a2a2e" strokeWidth="6" d="M60 10 110 130l-50-20-50 20Z" />
              <path fill="#d94f7c" stroke="#4a2a2e" strokeWidth="6" d="M60 8c26 0 40 22 40 40 0 26-18 40-40 40S20 74 20 48C20 30 34 8 60 8z" />
            </svg>
            {" "}
            <svg className="blob-drip" viewBox="0 0 100 100" style={{ "--r": "4deg" }}>
              <path fill="#cff3e0" stroke="#4a2a2e" strokeWidth="5" d="M50 6c28 0 44 20 44 42 0 30-20 46-44 46S6 78 6 48C6 26 22 6 50 6z" />
              <circle cx="34" cy="30" r="6" fill="#fff" opacity=".5" />
            </svg>
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero__content">
              {" "}
              <span className="eyebrow">
                ✦ Small-Batch · Handcrafted · Daily
              </span>
              {" "}
              <h1 className="hero__title">
                {"Sweeten your day with a "}
                <em>
                  scoop
                </em>
                {" of joy"}
              </h1>
              {" "}
              <p className="hero__lead">
                From silky vanilla bean to tart raspberry sorbet, every iCREAM scoop is churned in-house from pasture-raised cream and seasonal fruit. No shortcuts, just pure happiness.
              </p>
              {" "}
              <div className="hero__actions">
                {" "}
                <a className="btn btn--raspberry" href="product.html">
                  Explore the Menu 🍦
                </a>
                {" "}
                <a className="btn btn--choco" href="about.html">
                  Our Story
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
        <section className="section reveal" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head">
              {" "}
              <span className="eyebrow">
                What We Do
              </span>
              {" "}
              <h2>
                Churned with care, served with a smile
              </h2>
              {" "}
              <p className="lead">
                Four little promises we keep in the back of every scoop, every single day.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-grid">
              {" "}
              <article className="card service-card">
                {" "}
                <div className="scoop">
                  <img src={a2} alt="Premium dairy from local farms" />
                </div>
                {" "}
                <span className="num">
                  01
                </span>
                {" "}
                <h3>
                  Premium Dairy
                </h3>
                {" "}
                <p>
                  Pasture-raised cream and fresh milk from family farms within 40 miles of the shop.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card service-card">
                {" "}
                <div className="scoop">
                  <img src={a3} alt="Honey and sweet toppings" />
                </div>
                {" "}
                <span className="num">
                  02
                </span>
                {" "}
                <h3>
                  Honest Sweetness
                </h3>
                {" "}
                <p>
                  Natural cane sugar and raw honey — never corn syrup, never artificial anything.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card service-card">
                {" "}
                <div className="scoop">
                  <img src={a4} alt="Seasonal fruit flavours" />
                </div>
                {" "}
                <span className="num">
                  03
                </span>
                {" "}
                <h3>
                  Seasonal Fruit
                </h3>
                {" "}
                <p>
                  Our fruit flavours follow the orchard calendar — strawberry in May, peach in August.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card service-card">
                {" "}
                <div className="scoop">
                  <img src={a5} alt="Handmade waffle cones" />
                </div>
                {" "}
                <span className="num">
                  04
                </span>
                {" "}
                <h3>
                  Handmade Cones
                </h3>
                {" "}
                <p>
                  Belgian waffle cones pressed to order, still warm when your scoop lands on top.
                </p>
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
        <svg className="ribbon" aria-hidden="true" preserveaspectratio="none" viewBox="0 0 1440 90">
          <path d="M0 0h1440v24c-240 44-480 44-720 44S240 68 0 24V0Z" fill="#fff1f5" />
          <path d="M0 10h1440v14c-240 44-480 44-720 44S240 68 0 24V10Z" fill="#fff" opacity=".6" />
        </svg>
        {" "}
        {" "}
        <section className="section section--milk reveal" id="about">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split__media">
                {" "}
                <div className="photo">
                  <img src={a6} alt="Inside the iCREAM parlour" loading="lazy" />
                </div>
                {" "}
                <div className="badge-float">
                  <b>
                    10+
                  </b>
                  {" Years of Sweetness"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split__content">
                {" "}
                <div className="sec-head sec-head--left">
                  {" "}
                  <span className="eyebrow">
                    Our Story
                  </span>
                  {" "}
                  <h2>
                    A little parlour with big dreams
                  </h2>
                  {" "}
                  <p className="lead">
                    iCREAM started in 2015 with a tiny churn, a vintage bicycle cart, and a stubborn belief that ice cream should taste like the moment it was made.
                  </p>
                  {" "}
                </div>
                {" "}
                <ul className="split__list">
                  {" "}
                  <li>
                    <span className="tick">
                      ✓
                    </span>
                    <div>
                      <b>
                        Farm-to-cone sourcing
                      </b>
                      <span>
                        We know every farm, every orchard and every beehive behind our ingredients.
                      </span>
                    </div>
                  </li>
                  {" "}
                  <li>
                    <span className="tick">
                      ✓
                    </span>
                    <div>
                      <b>
                        Small-batch every day
                      </b>
                      <span>
                        Each flavour is churned in 40-litre batches — when it's gone, it's gone until tomorrow.
                      </span>
                    </div>
                  </li>
                  {" "}
                  <li>
                    <span className="tick">
                      ✓
                    </span>
                    <div>
                      <b>
                        Community first
                      </b>
                      <span>
                        School visits, scoop-for-a-cause nights, and a loyalty card your grandma would love.
                      </span>
                    </div>
                  </li>
                  {" "}
                </ul>
                {" "}
                <a className="btn btn--raspberry" href="about.html">
                  Meet the Team
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
        <section className="section reveal" id="menu">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head">
              {" "}
              <span className="eyebrow">
                This Week's Scoops
              </span>
              {" "}
              <h2>
                Freshly churned favourites
              </h2>
              {" "}
              <p className="lead">
                A taste of the menu — all 24 rotating flavours live on the full menu page.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-grid">
              {" "}
              <article className="card menu-card">
                {" "}
                <div className="thumb">
                  <img src={a7} alt="Madagascar Vanilla Bean" loading="lazy" />
                </div>
                {" "}
                <div className="menu-card__body">
                  {" "}
                  <span className="tag">
                    Classic
                  </span>
                  {" "}
                  <div className="menu-card__row">
                    <h3>
                      Madagascar Vanilla Bean
                    </h3>
                    <span className="dots" aria-hidden="true" />
                    <span className="price">
                      $4.5
                    </span>
                  </div>
                  {" "}
                  <p>
                    Real vanilla seeds, 12-month-aged cream. The scoop that started it all.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card menu-card">
                {" "}
                <div className="thumb">
                  <img src={a8} alt="Belgian Chocolate" loading="lazy" />
                </div>
                {" "}
                <div className="menu-card__body">
                  {" "}
                  <span className="tag">
                    Rich
                  </span>
                  {" "}
                  <div className="menu-card__row">
                    <h3>
                      Belgian Chocolate
                    </h3>
                    <span className="dots" aria-hidden="true" />
                    <span className="price">
                      $4.8
                    </span>
                  </div>
                  {" "}
                  <p>
                    70% dark Belgian couverture folded into fudge-brownie ripple.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card menu-card">
                {" "}
                <div className="thumb">
                  <img src={a9} alt="Fresh Strawberry" loading="lazy" />
                </div>
                {" "}
                <div className="menu-card__body">
                  {" "}
                  <span className="tag">
                    Seasonal
                  </span>
                  {" "}
                  <div className="menu-card__row">
                    <h3>
                      Fresh Strawberry
                    </h3>
                    <span className="dots" aria-hidden="true" />
                    <span className="price">
                      $4.5
                    </span>
                  </div>
                  {" "}
                  <p>
                    Slow-roasted local strawberries swirled through sweet cream.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card menu-card">
                {" "}
                <div className="thumb">
                  <img src={a10} alt="Pistachio Gelato" loading="lazy" />
                </div>
                {" "}
                <div className="menu-card__body">
                  {" "}
                  <span className="tag">
                    Gelato
                  </span>
                  {" "}
                  <div className="menu-card__row">
                    <h3>
                      Sicilian Pistachio
                    </h3>
                    <span className="dots" aria-hidden="true" />
                    <span className="price">
                      $5.2
                    </span>
                  </div>
                  {" "}
                  <p>
                    Bronte pistachios stone-ground into a silky, nutty gelato.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card menu-card">
                {" "}
                <div className="thumb">
                  <img src={a11} alt="Mint Chocolate Chip" loading="lazy" />
                </div>
                {" "}
                <div className="menu-card__body">
                  {" "}
                  <span className="tag">
                    Refreshing
                  </span>
                  {" "}
                  <div className="menu-card__row">
                    <h3>
                      Mint Chocolate Chip
                    </h3>
                    <span className="dots" aria-hidden="true" />
                    <span className="price">
                      $4.5
                    </span>
                  </div>
                  {" "}
                  <p>
                    Fresh garden mint, shaved dark chocolate, zero artificial green.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card menu-card menu-card--cta">
                {" "}
                <div className="menu-card__body" style={{ textAlign: "center", padding: "1rem 0" }}>
                  {" "}
                  <h3>
                    …and 19 more flavours
                  </h3>
                  {" "}
                  <p>
                    {"Cones, cups, sundaes, shakes & cakes."}
                  </p>
                  {" "}
                  <a className="btn btn--raspberry" href="product.html">
                    See Full Menu
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
        <svg className="ribbon" aria-hidden="true" preserveaspectratio="none" viewBox="0 0 1440 90">
          <path d="M0 90V24c240-44 480-44 720-44s480 0 720 44v66H0Z" fill="#4a2a2e" />
        </svg>
        {" "}
        {" "}
        <section className="section section--choco reveal" id="promo" style={{ paddingTop: "0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="promo">
              {" "}
              <img src={a12} alt="iCREAM Sunday Sundae special" loading="lazy" />
              {" "}
              <div className="promo__content">
                {" "}
                <span className="eyebrow">
                  Summer Special
                </span>
                {" "}
                <h2>
                  Sunday Sundae $6.90
                </h2>
                {" "}
                <p>
                  Two scoops of your choice, warm brownie, caramelized banana, chantilly cream and a cherry on top. Every Sunday until the last batch melts.
                </p>
                {" "}
                <a className="btn btn--raspberry" href="contact.html">
                  Claim the Special
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
        <section className="section reveal" id="gallery">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head">
              {" "}
              <span className="eyebrow">
                From the Counter
              </span>
              {" "}
              <h2>
                Scoops worth a second look
              </h2>
              {" "}
              <p className="lead">
                A peek at the swirls, sprinkles and sugar art leaving our counter every single day.
              </p>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid">
              {" "}
              <figure className="gallery-card">
                <img src={a13} alt="Strawberry swirl sundae" loading="lazy" />
                <figcaption>
                  Berry Swirl Sundae
                </figcaption>
              </figure>
              {" "}
              <figure className="gallery-card">
                <img src={a14} alt="Chocolate dipped cone" loading="lazy" />
                <figcaption>
                  Choco-Dipped Cone
                </figcaption>
              </figure>
              {" "}
              <figure className="gallery-card">
                <img src={a15} alt="Banana split creation" loading="lazy" />
                <figcaption>
                  Classic Banana Split
                </figcaption>
              </figure>
              {" "}
              <figure className="gallery-card">
                <img src={a16} alt="Sorbet cups" loading="lazy" />
                <figcaption>
                  {"Mango & Passion Sorbet"}
                </figcaption>
              </figure>
              {" "}
              <figure className="gallery-card">
                <img src={a17} alt="Birthday party cake" loading="lazy" />
                <figcaption>
                  Birthday Scoop Cake
                </figcaption>
              </figure>
              {" "}
              <figure className="gallery-card">
                <img src={a18} alt="Waffle sundae tower" loading="lazy" />
                <figcaption>
                  The Waffle Tower
                </figcaption>
              </figure>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--milk reveal" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="sec-head">
              {" "}
              <span className="eyebrow">
                Sweet Words
              </span>
              {" "}
              <h2>
                {"Licked clean & loved"}
              </h2>
              {" "}
              <p className="lead">
                Rated 4.9 out of 5 by 2,300+ happy regulars.
              </p>
              {" "}
            </div>
            {" "}
            <div className="testi-grid">
              {" "}
              <article className="card testi-card">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote>
                  “The pistachio gelato is dangerously good. I drove across town three times last week. Worth every mile.”
                </blockquote>
                {" "}
                <div className="who">
                  <img src={a19} alt="Portrait of Maya" />
                  <div>
                    <b>
                      Maya Thompson
                    </b>
                    <span>
                      Regular since 2017
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testi-card">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote>
                  “We ordered the Sunday Sundae for the whole office. Forty people went silent at the first bite. Legendary.”
                </blockquote>
                {" "}
                <div className="who">
                  <img src={a20} alt="Portrait of Leo" />
                  <div>
                    <b>
                      Leo Chen
                    </b>
                    <span>
                      Office celebrations
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testi-card">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote>
                  “My kids think the shop is a magical place. Honestly? So do I. The waffle cones alone deserve a statue.”
                </blockquote>
                {" "}
                <div className="who">
                  <img src={a21} alt="Portrait of Sara" />
                  <div>
                    <b>
                      Sara Okafor
                    </b>
                    <span>
                      Family sunday ritual
                    </span>
                  </div>
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
        <section className="section reveal" id="stats" style={{ paddingTop: "0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="stats">
              {" "}
              <div className="card stat">
                <b>
                  40k+
                </b>
                <span>
                  Scoops per summer
                </span>
              </div>
              {" "}
              <div className="card stat">
                <b>
                  24
                </b>
                <span>
                  Rotating flavours
                </span>
              </div>
              {" "}
              <div className="card stat">
                <b>
                  4.9★
                </b>
                <span>
                  Average rating
                </span>
              </div>
              {" "}
              <div className="card stat">
                <b>
                  100%
                </b>
                <span>
                  Natural ingredients
                </span>
              </div>
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <a className="brand" href="index.html" aria-label="iCREAM home">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  🍨
                </span>
                {" i"}
                <em>
                  CREAM
                </em>
                {" "}
              </a>
              {" "}
              <p>
                {"Small-batch artisanal ice cream, churned daily from local dairy and seasonal fruit. Find us at the corner of Maple & Cherry Street — follow the smell of warm waffle cones."}
              </p>
              {" "}
              <div className="socials">
                {" "}
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  👍
                </a>
                {" "}
                <a href="#" aria-label="X / Twitter">
                  🐦
                </a>
                {" "}
                <a href="#" aria-label="TikTok">
                  🎵
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
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
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Our Flavors
                  </a>
                </li>
                {" "}
                <li>
                  <a href="gallery.html">
                    Gallery
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
                Menu
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="product.html">
                    Ice Cream Scoops
                  </a>
                </li>
                {" "}
                <li>
                  <a href="product.html">
                    Sundaes
                  </a>
                </li>
                {" "}
                <li>
                  <a href="product.html">
                    Gelato
                  </a>
                </li>
                {" "}
                <li>
                  <a href="product.html">
                    Sorbet
                  </a>
                </li>
                {" "}
                <li>
                  <a href="product.html">
                    Scoop Cakes
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
                Scoop Club
              </h4>
              {" "}
              <p>
                Join the newsletter for flavour drops, secret Sunday specials and birthday scoops.
              </p>
              {" "}
              <form className="newsletter" data-form="" noValidate={true}>
                {" "}
                <label className="visually-hidden" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }} htmlFor="nl-email">
                  Email address
                </label>
                {" "}
                <input type="email" id="nl-email" name="email" placeholder="you@example.com" required={true} />
                {" "}
                <button className="btn btn--raspberry" type="submit">
                  Join
                </button>
                {" "}
                <div className="form-ok">
                  Welcome to the Scoop Club! 🍨
                </div>
                {" "}
                <div className="form-err">
                  Please enter your email address.
                </div>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <p style={{ margin: "0" }}>
              {"© "}
              <span data-year="">
                2025
              </span>
              {" iCREAM — Artisanal Ice Cream & Dessert Shop. Made with "}
              <span className="heart">
                ♥
              </span>
              {" and way too much sugar."}
            </p>
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
