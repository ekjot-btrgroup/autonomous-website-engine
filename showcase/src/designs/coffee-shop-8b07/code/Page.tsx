// Converted from the HTML template coffee-shop-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero-1.webp";
import a1 from "./assets/img-hero-2.webp";
import a2 from "./assets/img-about-1.webp";
import a3 from "./assets/img-service-1.webp";
import a4 from "./assets/img-service-2.webp";
import a5 from "./assets/img-service-3.webp";
import a6 from "./assets/img-service-4.webp";
import a7 from "./assets/img-menu-1.webp";
import a8 from "./assets/img-menu-2.webp";
import a9 from "./assets/img-menu-3.webp";
import a10 from "./assets/img-testimonial-1.webp";
import a11 from "./assets/img-testimonial-2.webp";
import a12 from "./assets/img-testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Raleway:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-coffee-shop-8b07">
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <p className="topbar-item">
            <span className="topbar-icon">
              📍
            </span>
            {" Via dell'Olio 24, Florence"}
          </p>
          {" "}
          <p className="topbar-item topbar-mid">
            <span className="topbar-icon">
              🕐
            </span>
            {" Mon–Sat 7:00 AM – 10:00 PM"}
          </p>
          {" "}
          <p className="topbar-item topbar-end">
            {" "}
            <a href="tel:+39055286009">
              +39 055 286 009
            </a>
            {" "}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container nav-wrap">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <span className="brand-mark" aria-hidden="true" />
            {" "}
            <span className="brand-text">
              {"Café "}
              <span>
                Alto
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
            ☰
          </button>
          {" "}
          <nav className="nav-links" id="site-nav" aria-label="Primary">
            {" "}
            <a href="index.html" className="nav-link">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav-link">
              About
            </a>
            {" "}
            <a href="menu.html" className="nav-link">
              Menu
            </a>
            {" "}
            <a href="reservation.html" className="nav-link">
              Reservations
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="menu.html" className="nav-cta">
              Order Online
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        <section className="hero" id="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" />
          {" "}
          <div className="container hero-copy">
            {" "}
            <p className="eyebrow">
              Florence since 1988
            </p>
            {" "}
            <h1 className="hero-title">
              {"Hand-roasted, "}
              <em>
                heart-served.
              </em>
            </h1>
            {" "}
            <p className="hero-sub">
              Every cup tells a story. Single-origin beans roasted in small batches, poured with care in the heart of Tuscany.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="menu.html" className="btn btn-primary">
                Explore Our Menu
              </a>
              {" "}
              <a href="reservation.html" className="btn btn-ghost-light">
                Reserve a Table
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-badge">
              {" "}
              <span className="hero-badge-num">
                36+
              </span>
              {" "}
              <span className="hero-badge-label">
                Years of
                <br />
                Artisanship
              </span>
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
            <div className="ribbon reveal">
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🫘
                </span>
                <span className="ribbon-label">
                  Single Origin
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🔥
                </span>
                <span className="ribbon-label">
                  Small Batch Roasted
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  ☕
                </span>
                <span className="ribbon-label">
                  Artisan Espresso
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🥐
                </span>
                <span className="ribbon-label">
                  Fresh Pastries
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🍷
                </span>
                <span className="ribbon-label">
                  {"Wine & Aperitivo"}
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🎵
                </span>
                <span className="ribbon-label">
                  Live Jazz Nights
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-latte">
          {" "}
          <div className="container">
            {" "}
            <div className="split reveal">
              {" "}
              <div className="split-img">
                {" "}
                <img src={a2} alt="Barista pouring latte art" className="split-photo" />
                {" "}
                <div className="split-badge">
                  {" "}
                  <span className="split-badge-num">
                    6k+
                  </span>
                  {" "}
                  <span className="split-badge-label">
                    Cups Daily
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split-copy">
                {" "}
                <p className="eyebrow">
                  Our story
                </p>
                {" "}
                <h2 className="section-title">
                  {"An Italian tradition since "}
                  <em>
                    1988.
                  </em>
                </h2>
                {" "}
                <p>
                  In a small roastery tucked behind Florence's Cathedral, the Rossi family has been roasting coffee for three generations. We source green beans directly from farms in Ethiopia, Colombia, and Brazil, and roast every batch to precise temperature curves that unlock each origin's best character.
                </p>
                {" "}
                <p>
                  Our café on Via dell'Olio is where this craft meets community — a warm, wood-panelled space where the espresso machine hums from seven in the morning until late evening.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    Direct trade sourcing from 12 family farms
                  </li>
                  {" "}
                  <li>
                    Small-batch drum roasting, never more than 30 kg
                  </li>
                  {" "}
                  <li>
                    Seasonal single-origin and rotating blends
                  </li>
                  {" "}
                  <li>
                    In-house pastry kitchen with traditional recipes
                  </li>
                  {" "}
                  <li>
                    Weekly cupping sessions open to guests
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="about.html" className="btn btn-primary">
                  Discover Our Craft
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                What we offer
              </p>
              {" "}
              <h2 className="section-title">
                {"More than a cup of "}
                <em>
                  coffee.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="service-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <img src={a3} alt="Espresso shot" className="service-img" />
                {" "}
                <h3 className="service-name">
                  Artisan Coffee
                </h3>
                {" "}
                <p className="service-desc">
                  Espresso, pour-over, French press, and cold brew — made from our own small-batch roasts.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <img src={a4} alt="Pastries on display" className="service-img" />
                {" "}
                <h3 className="service-name">
                  Fresh Pastry
                </h3>
                {" "}
                <p className="service-desc">
                  Croissants, biscotti, torta della nonna — baked daily by our pastry team.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <img src={a5} alt="Coffee beans selection" className="service-img" />
                {" "}
                <h3 className="service-name">
                  Coffee Subscription
                </h3>
                {" "}
                <p className="service-desc">
                  Fresh-roasted beans delivered to your door. Choose your origin, roast level, and grind.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <img src={a6} alt="Coffee tasting event" className="service-img" />
                {" "}
                <h3 className="service-name">
                  Cupping Events
                </h3>
                {" "}
                <p className="service-desc">
                  Join us for guided tastings every Saturday. Learn to taste coffee the way professionals do.
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
        <section className="section section-cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Signature selections
              </p>
              {" "}
              <h2 className="section-title">
                {"Our most loved "}
                <em>
                  drinks.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="menu-grid">
              {" "}
              <article className="menu-card reveal">
                {" "}
                <div className="menu-img-wrap">
                  {" "}
                  <img src={a7} alt="Classic Espresso" className="menu-img" />
                  {" "}
                  <span className="menu-tag">
                    Classic
                  </span>
                  {" "}
                  <span className="menu-price">
                    €3
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="menu-body">
                  {" "}
                  <h3 className="menu-name">
                    Espresso Toscano
                  </h3>
                  {" "}
                  <p className="menu-desc">
                    Our house blend — dark chocolate, dried cherry, and a velvety crema. The soul of Italian coffee.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="menu-card reveal">
                {" "}
                <div className="menu-img-wrap">
                  {" "}
                  <img src={a8} alt="Cappuccino" className="menu-img" />
                  {" "}
                  <span className="menu-tag">
                    Popular
                  </span>
                  {" "}
                  <span className="menu-price">
                    €4.5
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="menu-body">
                  {" "}
                  <h3 className="menu-name">
                    Cappuccino Classico
                  </h3>
                  {" "}
                  <p className="menu-desc">
                    Double ristretto topped with silky microfoam. Served with a tiny biscotto on the side.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="menu-card reveal">
                {" "}
                <div className="menu-img-wrap">
                  {" "}
                  <img src={a9} alt="Pour-over coffee" className="menu-img" />
                  {" "}
                  <span className="menu-tag">
                    Seasonal
                  </span>
                  {" "}
                  <span className="menu-price">
                    €5.5
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="menu-body">
                  {" "}
                  <h3 className="menu-name">
                    Pour-Over Reserve
                  </h3>
                  {" "}
                  <p className="menu-desc">
                    Our current single-origin star — brewed to order on the V60. Ask your barista for today's origin.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-foot reveal">
              {" "}
              <p>
                {"View our full menu with prices and tasting notes. "}
                <a href="menu.html">
                  See the complete selection →
                </a>
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-espresso" id="reserve">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head on-dark reveal">
              {" "}
              <p className="eyebrow">
                Book a table
              </p>
              {" "}
              <h2 className="section-title">
                {"Reserve your "}
                <em>
                  experience.
                </em>
              </h2>
              {" "}
              <p>
                Whether it's an intimate dinner, a morning meeting, or an afternoon with friends — we'll save the best table.
              </p>
              {" "}
            </div>
            {" "}
            <div className="form-wrap reveal">
              {" "}
              <form className="reserve-form" data-form="" noValidate={true}>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-name">
                    Your name
                  </label>
                  {" "}
                  <input id="rf-name" type="text" name="name" placeholder="Full name" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-email">
                    Email
                  </label>
                  {" "}
                  <input id="rf-email" type="email" name="email" placeholder="you@example.com" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-date">
                    Date
                  </label>
                  {" "}
                  <input id="rf-date" type="date" name="date" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-time">
                    Time
                  </label>
                  {" "}
                  <input id="rf-time" type="time" name="time" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-guests">
                    Guests
                  </label>
                  {" "}
                  <select id="rf-guests" name="guests" required={true}>
                    {" "}
                    <option value="">
                      Select
                    </option>
                    {" "}
                    <option value="1">
                      1 person
                    </option>
                    {" "}
                    <option value="2">
                      2 persons
                    </option>
                    {" "}
                    <option value="3">
                      3 persons
                    </option>
                    {" "}
                    <option value="4">
                      4 persons
                    </option>
                    {" "}
                    <option value="5">
                      5 persons
                    </option>
                    {" "}
                    <option value="6">
                      6+ persons
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <div className="form-field">
                  {" "}
                  <label htmlFor="rf-phone">
                    Phone
                  </label>
                  {" "}
                  <input id="rf-phone" type="tel" name="phone" placeholder="+39 3XX XXXXXXX" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="form-field form-field-wide">
                  {" "}
                  <label htmlFor="rf-note">
                    Special requests
                  </label>
                  {" "}
                  <textarea id="rf-note" name="note" rows="3" placeholder="Allergies, dietary needs, celebrations..." />
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn-primary">
                  Confirm Reservation
                </button>
                {" "}
                <p className="form-msg form-ok">
                  ✓ Grazie! We'll confirm your reservation within 2 hours.
                </p>
                {" "}
                <p className="form-msg form-err">
                  ⚠ Please fill in all required fields.
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Testimonials
              </p>
              {" "}
              <h2 className="section-title">
                {"What our guests "}
                <em>
                  say.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="tst-grid">
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "The espresso Toscano is simply life-changing. I've travelled Italy extensively and nothing compares to the depth and care at Café Alto."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a10} alt="Elena M." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      Elena Marchetti
                    </strong>
                    {" "}
                    <span className="tst-role">
                      Coffee writer, Milan
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "The cupping session was extraordinary. I learned more about coffee in two hours than in years of just drinking it. A must-do in Florence."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a11} alt="James K." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      James Kim
                    </strong>
                    {" "}
                    <span className="tst-role">
                      Travel journalist, New York
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "The perfect spot for an afternoon Aperitivo. The staff welcomed us like family, and the coffee subscription is now a highlight of our month."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a12} alt="Sophie L." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      Sophie Laurent
                    </strong>
                    {" "}
                    <span className="tst-role">
                      Regular guest, Florence
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
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-latte">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                From our journal
              </p>
              {" "}
              <h2 className="section-title">
                {"Coffee stories & "}
                <em>
                  craft.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a3} alt="Coffee cherry harvest" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Sourcing
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    A Visit to Yirgacheffe
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    Our latest sourcing trip to Ethiopia — meeting the farmers behind this season's washed lot.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a4} alt="Pastry preparation" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Pastry
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    The Perfect Biscotto
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    Our pastry chef shares the secret to cantuccini that pair perfectly with a Vin Santo.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a5} alt="Pour-over brewing" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Brewing
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    Pour-Over at Home
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    A beginner's guide to V60 technique from our head barista, Luca.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
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
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow">
              Visit us
            </p>
            {" "}
            <h2 className="cta-title">
              {"Taste the difference "}
              <em>
                craft makes.
              </em>
            </h2>
            {" "}
            <p className="cta-sub">
              Whether you're in Florence or we ship to your home — experience coffee the way it was meant to taste.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="reservation.html" className="btn btn-primary">
                Reserve a Table
              </a>
              {" "}
              <a href="menu.html" className="btn btn-ghost-light">
                Shop Our Beans
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-col">
            {" "}
            <a href="index.html" className="brand footer-brand">
              {" "}
              <span className="brand-mark" aria-hidden="true" />
              {" "}
              <span className="brand-text">
                {"Café "}
                <span>
                  Alto
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              An artisanal coffee house in the heart of Florence, Italy. Family-roasted since 1988. Direct trade. Small batch. Every cup served with warmth.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                FB
              </a>
              {" "}
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                X
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Menu
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="menu.html">
                  {"Coffee & Espresso"}
                </a>
              </li>
              {" "}
              <li>
                <a href="menu.html">
                  {"Pastries & Desserts"}
                </a>
              </li>
              {" "}
              <li>
                <a href="menu.html">
                  {"Wine & Aperitivo"}
                </a>
              </li>
              {" "}
              <li>
                <a href="menu.html">
                  Seasonal Specials
                </a>
              </li>
              {" "}
              <li>
                <a href="menu.html">
                  Coffee Subscription
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
              Quick Links
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="about.html">
                  Our Story
                </a>
              </li>
              {" "}
              <li>
                <a href="reservation.html">
                  Reservations
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  Cupping Events
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Catering Inquiry
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  Careers
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
              Contact
            </h3>
            {" "}
            <ul className="footer-links footer-contact">
              {" "}
              <li>
                Via dell'Olio 24
                <br />
                50123 Florence, Italy
              </li>
              {" "}
              <li>
                <a href="tel:+39055286009">
                  +39 055 286 009
                </a>
              </li>
              {" "}
              <li>
                <a href="mailto:hello@cafealto.example">
                  hello@cafealto.example
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <form className="newsletter" data-form="" noValidate={true}>
              {" "}
              <label htmlFor="nl-email" className="sr-only">
                Email for coffee updates
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder={"Get coffee notes & offers"} required={true} />
              {" "}
              <button type="submit" className="btn btn-primary btn-sm">
                Join
              </button>
              {" "}
              <p className="form-msg form-ok">
                Benvenuto! You're on our list.
              </p>
              {" "}
              <p className="form-msg form-err">
                Please enter a valid email address.
              </p>
              {" "}
            </form>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="footer-bottom">
          {" "}
          <div className="container">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Café Alto. All rights reserved."}
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
