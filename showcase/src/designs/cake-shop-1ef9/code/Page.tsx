// Converted from the HTML template cake-shop-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero.webp";
import a1 from "./assets/offer.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/cake-1.webp";
import a4 from "./assets/cake-2.webp";
import a5 from "./assets/cake-3.webp";
import a6 from "./assets/service.webp";
import a7 from "./assets/bg.webp";
import a8 from "./assets/team-1.webp";
import a9 from "./assets/team-2.webp";
import a10 from "./assets/team-3.webp";
import a11 from "./assets/testimonial-1.webp";
import a12 from "./assets/testimonial-2.webp";
import a13 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,800&family=DM+Sans:wght@400;500;700;800&family=Caveat:wght@600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-cake-shop-1ef9">
      {" "}
      {" "}
      <div className="ribbon">
        {" "}
        <div className="container">
          {" "}
          <span>
            <i className="dot" />
            {" Baked this morning · Collection & delivery"}
          </span>
          {" "}
          <span style={{ opacity: ".5" }}>
            —
          </span>
          {" "}
          <span>
            Open daily 08:00–19:00
          </span>
          {" "}
          <div className="right">
            {" "}
            <a href="tel:+10000000000">
              +1 (000) 000-0000
            </a>
            {" "}
            <span style={{ opacity: ".5" }}>
              ·
            </span>
            {" "}
            <a href="contact.html">
              Order now →
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="sitehead">
        {" "}
        <div className="container">
          {" "}
          <a className="mark" href="index.html">
            {" "}
            <span className="badge">
              ◍
            </span>
            {" "}
            <span>
              {"SUCRÉ "}
              <small>
                patisserie · since 2012
              </small>
            </span>
            {" "}
          </a>
          {" "}
          <nav className="navlinks" id="nav">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              Our Story
            </a>
            {" "}
            <a href="menu.html">
              Menu
            </a>
            {" "}
            <a href="services.html">
              Services
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="head-cta">
            {" "}
            <a className="btn btn--ghost btn--sm" href="menu.html">
              View menu
            </a>
            {" "}
            <a className="btn btn--rasp btn--sm" href="contact.html">
              {"Order "}
              <span data-cart-count="" style={{ background: "#fff", color: "var(--raspberry)", borderRadius: "999px", padding: ".1rem .4rem", fontSize: ".7rem", marginLeft: ".15rem" }}>
                0
              </span>
            </a>
            {" "}
          </div>
          {" "}
          <button className="burger" aria-label="Menu" aria-expanded="false">
            ☰
          </button>
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
          <div className="reveal">
            {" "}
            <span className="eyebrow">
              Super crispy · super soft · super fresh
            </span>
            {" "}
            <h1>
              {"The best "}
              <em>
                cake
              </em>
              {" in town — baked this morning."}
            </h1>
            {" "}
            <p className="sub">
              Hand-made celebration cakes, morning pastries and butter-soft sponges from a small kitchen that still weighs everything by hand.
            </p>
            {" "}
            <div className="actions">
              {" "}
              <a className="btn btn--rasp" href="menu.html">
                Order a cake
              </a>
              {" "}
              <a className="btn btn--ghost" href="about.html">
                Meet the bakers
              </a>
              {" "}
            </div>
            {" "}
            <div className="meta-row">
              {" "}
              <span>
                {"★ 4.9 "}
                <b>
                  Google
                </b>
                {" · 2,400+ reviews"}
              </span>
              {" "}
              <span>
                ✦ Same-day collection
              </span>
              {" "}
              <span>
                ✦ Delivery by cargo bike
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="counter float reveal d1">
            {" "}
            <span className="price-tag">
              from £24
            </span>
            {" "}
            <img src={a0} alt="Celebration cake" loading="lazy" />
            {" "}
            <div className="foot">
              <span>
                Today's celebration cake
              </span>
              <span>
                → menu
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" style={{ paddingBottom: "0" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="offer reveal">
            {" "}
            <div className="copy">
              {" "}
              <div className="kicker" style={{ color: "var(--butter)" }}>
                Limited bake
              </div>
              {" "}
              <h2>
                {"Weekend box — "}
                <em>
                  6 pastries, £22
                </em>
              </h2>
              {" "}
              <p style={{ color: "#E8D9C0", marginTop: ".5rem" }}>
                A mixed box of whatever came out best this morning. Croissants, choux, fruit tarts — no repeats, no disappointments. Collect Saturday or Sunday before noon.
              </p>
              {" "}
              <div style={{ marginTop: "1rem", display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
                {" "}
                <a className="btn btn--rasp" href="contact.html">
                  Reserve a box
                </a>
                {" "}
                <span style={{ fontFamily: "var(--font-hand)", fontSize: "1.05rem", color: "#E8D9C0", alignSelf: "center" }}>
                  Only 40 boxes per weekend
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="media">
              {" "}
              <span className="sticker">
                Weekend only
              </span>
              {" "}
              <img src={a1} alt="Weekend pastry box" loading="lazy" />
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
          <div className="about">
            {" "}
            <div className="frame reveal">
              {" "}
              <img src={a2} alt="Baker at work" loading="lazy" />
              {" "}
              <div className="note">
                Weighed by hand ✦
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal d1">
              {" "}
              <div className="kicker">
                Why SUCRÉ
              </div>
              {" "}
              <h2>
                Butter, patience,
                <br />
                and a kitchen that smells right.
              </h2>
              {" "}
              <p style={{ color: "var(--cocoa-soft)", marginTop: ".6rem" }}>
                No mixes, no shortcuts. We bake in small batches, decorate to order, and write the customer's name in chocolate — not fondant, unless you ask nicely.
              </p>
              {" "}
              <div className="checks">
                {" "}
                <div className="check">
                  <i>
                    ✓
                  </i>
                  <div>
                    <b>
                      Small batches, daily
                    </b>
                    <br />
                    <span>
                      Baked this morning, sold today. What doesn't sell, we give to the night shelter.
                    </span>
                  </div>
                </div>
                {" "}
                <div className="check">
                  <i>
                    ✓
                  </i>
                  <div>
                    <b>
                      Made to order
                    </b>
                    <br />
                    <span>
                      Celebration cakes built around your date, not a warehouse slot.
                    </span>
                  </div>
                </div>
                {" "}
                <div className="check">
                  <i>
                    ✓
                  </i>
                  <div>
                    <b>
                      Real ingredients
                    </b>
                    <br />
                    <span>
                      French butter, Valrhona chocolate, seasonal fruit — the list is short on purpose.
                    </span>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <a className="btn btn--cocoa" href="about.html">
                Our story
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
      <section className="section section--cream">
        {" "}
        <div className="container">
          {" "}
          <div className="head reveal">
            {" "}
            <div>
              {" "}
              <div className="kicker">
                Menu
              </div>
              {" "}
              <h2>
                Pick a flavour. We'll do the rest.
              </h2>
              {" "}
              <div className="underline" />
              {" "}
            </div>
            {" "}
            <a className="btn btn--ghost btn--sm" href="menu.html">
              Full menu →
            </a>
            {" "}
          </div>
          {" "}
          <div className="menu-board reveal">
            {" "}
            <div className="top">
              {" "}
              <h3>
                Counter today
              </h3>
              {" "}
              <span className="pill">
                Baked this morning
              </span>
              {" "}
            </div>
            {" "}
            <div className="menu-grid">
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a3} alt="Cake" loading="lazy" />
                {" "}
                <h4>
                  Vanilla cloud
                </h4>
                {" "}
                <p>
                  Madagascan vanilla, whipped cream, fresh berries.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    £28
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
                </div>
                {" "}
              </div>
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a4} alt="Cake" loading="lazy" />
                {" "}
                <h4>
                  Chocolate torte
                </h4>
                {" "}
                <p>
                  Valrhona 70%, salted caramel, cocoa crumb.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    £32
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
                </div>
                {" "}
              </div>
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a5} alt="Cake" loading="lazy" />
                {" "}
                <h4>
                  Strawberry shortcake
                </h4>
                {" "}
                <p>
                  Soft sponge, Chantilly, Kent strawberries.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    £30
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
                </div>
                {" "}
              </div>
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a6} alt="Service" loading="lazy" />
                {" "}
                <h4>
                  Lemon tart
                </h4>
                {" "}
                <p>
                  Sharp curd, Swiss meringue, butter pastry.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    £6.50
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
                </div>
                {" "}
              </div>
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a7} alt="Background" loading="lazy" />
                {" "}
                <h4>
                  Pastry box (6)
                </h4>
                {" "}
                <p>
                  Morning selection — croissants, choux, tarts.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    £22
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
                </div>
                {" "}
              </div>
              {" "}
              <div className="menu-item">
                {" "}
                <img src={a0} alt="Celebration" loading="lazy" />
                {" "}
                <h4>
                  Celebration cake
                </h4>
                {" "}
                <p>
                  Built to order — tell us the date, we handle the rest.
                </p>
                {" "}
                <div className="buy">
                  <span className="price">
                    from £45
                  </span>
                  <button className="mini-btn" data-add="">
                    Add
                  </button>
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
          <div className="head reveal">
            {" "}
            <div>
              <div className="kicker">
                Services
              </div>
              <h2>
                More than a shop counter.
              </h2>
            </div>
            {" "}
            <a className="btn btn--ghost btn--sm" href="services.html">
              All services →
            </a>
            {" "}
          </div>
          {" "}
          <div className="trio">
            {" "}
            <article className="card reveal">
              {" "}
              <img src={a6} alt="Wedding cakes" loading="lazy" />
              {" "}
              <div className="body">
                <h3>
                  {"Weddings & events"}
                </h3>
                <p>
                  Three-tier to ten-tier — tasting, design and delivery to the venue, assembled on site.
                </p>
                <a className="link" href="services.html">
                  Plan yours →
                </a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="card reveal d1">
              {" "}
              <img src={a2} alt="Workshop" loading="lazy" />
              {" "}
              <div className="body">
                <h3>
                  Workshops
                </h3>
                <p>
                  Saturday mornings: pipe, fill, glaze. Take home what you make — and the recipe.
                </p>
                <a className="link" href="services.html">
                  See dates →
                </a>
              </div>
              {" "}
            </article>
            {" "}
            <article className="card reveal d2">
              {" "}
              <img src={a7} alt="Corporate" loading="lazy" />
              {" "}
              <div className="body">
                <h3>
                  Corporate
                </h3>
                <p>
                  Branded boxes, office Fridays, client gifts — packed and delivered by cargo bike.
                </p>
                <a className="link" href="services.html">
                  For teams →
                </a>
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
      <section className="section section--sugar">
        {" "}
        <div className="container">
          {" "}
          <div className="head reveal">
            {" "}
            <div>
              <div className="kicker">
                Master bakers
              </div>
              <h2>
                The hands behind the counter.
              </h2>
            </div>
            {" "}
            <a className="btn btn--ghost btn--sm" href="about.html">
              Meet all →
            </a>
            {" "}
          </div>
          {" "}
          <div className="team">
            {" "}
            <div className="person reveal">
              <img src={a8} alt="Baker" loading="lazy" />
              <div className="meta">
                <h4>
                  Full Name
                </h4>
                <div className="role">
                  Head patissier
                </div>
                <div className="line" />
              </div>
            </div>
            {" "}
            <div className="person reveal d1">
              <img src={a9} alt="Baker" loading="lazy" />
              <div className="meta">
                <h4>
                  Full Name
                </h4>
                <div className="role">
                  Cake designer
                </div>
                <div className="line" />
              </div>
            </div>
            {" "}
            <div className="person reveal d2">
              <img src={a10} alt="Baker" loading="lazy" />
              <div className="meta">
                <h4>
                  Full Name
                </h4>
                <div className="role">
                  Pastry chef
                </div>
                <div className="line" />
              </div>
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
          <div className="head reveal">
            {" "}
            <div>
              <div className="kicker">
                Love notes
              </div>
              <h2>
                Sugar mail.
              </h2>
            </div>
            {" "}
          </div>
          {" "}
          <div className="quotes">
            {" "}
            <div className="quote reveal">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                “Ordered a birthday cake at 5pm, collected at 10am. It looked like a magazine cover and tasted better.”
              </p>
              {" "}
              <div className="who">
                <img src={a11} alt="" loading="lazy" />
                <div>
                  <b>
                    Client Name
                  </b>
                  <br />
                  <span>
                    — via Google
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="quote reveal d1">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                “The weekend box is dangerous. We buy one every Saturday and pretend it's for the kids.”
              </p>
              {" "}
              <div className="who">
                <img src={a12} alt="" loading="lazy" />
                <div>
                  <b>
                    Client Name
                  </b>
                  <br />
                  <span>
                    — via Instagram
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="quote reveal d2">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                “They did our wedding cake — three tiers, not a crack, survived a van ride across town.”
              </p>
              {" "}
              <div className="who">
                <img src={a13} alt="" loading="lazy" />
                <div>
                  <b>
                    Client Name
                  </b>
                  <br />
                  <span>
                    — wedding, June 2025
                  </span>
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
      {" "}
      <section className="section" style={{ background: "var(--butter)", borderBlock: "2px solid var(--cocoa)" }}>
        {" "}
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap", justifyContent: "space-between" }}>
          {" "}
          <div className="reveal">
            {" "}
            <div style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem", color: "var(--cocoa)" }}>
              Have a date in mind?
            </div>
            {" "}
            <h2>
              Tell us the date — we'll bake around it.
            </h2>
            {" "}
          </div>
          {" "}
          <a className="btn btn--cocoa reveal d1" href="contact.html">
            Order a cake
          </a>
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
          <div>
            {" "}
            <div className="brand">
              {"SUCRÉ "}
              <em>
                ·
              </em>
            </div>
            {" "}
            <p>
              Patisserie since 2012. Celebration cakes, morning pastries and butter-soft sponges — baked this morning, sold today.
            </p>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <h4>
              Shop
            </h4>
            {" "}
            <ul>
              <li>
                <a href="menu.html">
                  {"Menu & pricing"}
                </a>
              </li>
              <li>
                <a href="services.html">
                  Services
                </a>
              </li>
              <li>
                <a href="contact.html">
                  Order
                </a>
              </li>
              <li>
                <a href="about.html">
                  Our story
                </a>
              </li>
            </ul>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <h4>
              Visit
            </h4>
            {" "}
            <ul>
              <li>
                14 Sugar Lane, London SE1 9LF
              </li>
              <li>
                Daily 08:00–19:00
              </li>
              <li>
                <a href="mailto:hello@sucre.example">
                  hello@sucre.example
                </a>
              </li>
            </ul>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <h4>
              Follow
            </h4>
            {" "}
            <ul>
              <li>
                <a href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  TikTok — behind the counter
                </a>
              </li>
              <li>
                <a href="#">
                  Careers — we're hiring
                </a>
              </li>
            </ul>
            {" "}
          </div>
          {" "}
          <div className="base">
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" SUCRÉ Patisserie"}
            </span>
            <span>
              Baked this morning · Sold today
            </span>
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
