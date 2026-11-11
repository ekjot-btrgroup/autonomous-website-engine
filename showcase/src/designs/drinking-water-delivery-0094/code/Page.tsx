// Converted from the HTML template drinking-water-delivery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/water.webp";
import a1 from "./assets/about.webp";
import a2 from "./assets/product-1.webp";
import a3 from "./assets/product-2.webp";
import a4 from "./assets/product-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-drinking-water-delivery-0094">
      {" "}
      {" "}
      <div className="microbar">
        {" "}
        <div className="container">
          {" "}
          <span className="dot" />
          {" "}
          <span className="route">
            {"Source → Spring → Bottle → You — "}
            <b>
              Batch #0428
            </b>
            {" — pH 7.4 · TDS 120 mg/L · Carbon-filtered"}
          </span>
          {" "}
          <span className="spacer" />
          {" "}
          <a href="contact.html">
            Request a tasting →
          </a>
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
          <a href="index.html" className="mark">
            {" "}
            <span className="glyph">
              💧
            </span>
            {" RIVULE"}
            <span>
              m
            </span>
            {"T "}
          </a>
          {" "}
          <nav id="mainnav">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              Our Source
            </a>
            {" "}
            <a href="service.html">
              Plans
            </a>
            {" "}
            <a href="product.html">
              Catalogue
            </a>
            {" "}
            <a href="blog.html">
              Journal
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Start Delivery
          </a>
          {" "}
          <button className="burger" id="burger" aria-label="Menu">
            ☰
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero-ledger">
        {" "}
        <div className="container">
          {" "}
          <div className="hero-text">
            {" "}
            <span className="eyebrow">
              Single-origin spring water
            </span>
            {" "}
            <h1>
              Pure water,
              <br />
              <em>
                poured daily
              </em>
            </h1>
            {" "}
            <p className="lead">
              RIVULET sources from one spring, one aquifer, one mountain. Every bottle traces back to the exact source coordinates — and every delivery follows the shortest route to your door.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="product.html" className="btn-primary">
                Browse Catalogue →
              </a>
              {" "}
              <a href="about.html" className="btn-ghost">
                Meet the Spring
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta">
              {" "}
              <span>
                {"Source: "}
                <b>
                  Llanwrtyd Wells
                </b>
              </span>
              {" "}
              <span>
                {"Altitude: "}
                <b>
                  420 m
                </b>
              </span>
              {" "}
              <span>
                {"Batch: "}
                <b>
                  #0428
                </b>
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="vessel">
            {" "}
            <div className="vessel-card">
              {" "}
              <div className="vessel-media">
                {" "}
                <img src={a0} alt="RIVULET spring water bottle" />
                {" "}
              </div>
              {" "}
              <div className="label">
                {" "}
                <span className="kicker">
                  Featured Bottle
                </span>
                {" "}
                <h3>
                  The Daily — 750 ml
                </h3>
                {" "}
                <p>
                  Still spring water in a resealable glass bottle. Mineral-forward, zero treatment, capsealed at the source.
                </p>
                {" "}
                <div className="price-row">
                  {" "}
                  <span className="price">
                    {"£2.40 "}
                    <small>
                      per bottle
                    </small>
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <span className="bead">
                7.4
              </span>
              {" "}
            </div>
            {" "}
            <span className="marginal m1">
              <b>
                TDS
              </b>
              120 mg/L
              <br />
              Mineral-rich
            </span>
            {" "}
            <span className="marginal m2">
              <b>
                pH
              </b>
              7.4
              <br />
              Balanced
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="proof">
        {" "}
        <div className="container">
          {" "}
          <div className="cell reveal">
            {" "}
            <span className="n" data-count="420" data-suffix=" m">
              0
            </span>
            {" "}
            <span className="l">
              Source altitude
              <br />
              (metres above sea level)
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell reveal d1">
            {" "}
            <span className="n" data-count="120" data-suffix=" mg/L">
              0
            </span>
            {" "}
            <span className="l">
              Total dissolved
              <br />
              minerals (TDS)
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell reveal d2">
            {" "}
            <span className="n" data-count="7.4">
              0
            </span>
            {" "}
            <span className="l">
              Natural pH
              <br />
              at the spring
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell reveal d3">
            {" "}
            <span className="n" data-count="24" data-suffix="h">
              0
            </span>
            {" "}
            <span className="l">
              Bottle-to-door
              <br />
              delivery window
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--paper">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div>
              {" "}
              <span className="kicker">
                The Source
              </span>
              {" "}
              <h2>
                One spring. One aquifer. One mountain.
              </h2>
              {" "}
              <p>
                RIVULET draws from a single protected spring in the Cambrian Mountains — naturally filtered through 400 million years of rock, bottled without treatment or manipulation.
              </p>
              {" "}
            </div>
            {" "}
            <a href="about.html" className="link">
              Full source story →
            </a>
            {" "}
          </div>
          {" "}
          <div className="source">
            {" "}
            <div className="frame reveal">
              {" "}
              <img src={a1} alt="RIVULET spring source in the Cambrian Mountains" />
              {" "}
              <span className="caption">
                📍 Llanwrtyd Wells · 52.0667° N, 3.6333° W
              </span>
              {" "}
            </div>
            {" "}
            <ul>
              {" "}
              <li className="reveal">
                {" "}
                <i>
                  01
                </i>
                {" "}
                <div>
                  <b>
                    Protected Aquifer
                  </b>
                  <span>
                    Spring-fed from a single geological formation — no surface runoff, no contamination risk.
                  </span>
                </div>
                {" "}
              </li>
              {" "}
              <li className="reveal d1">
                {" "}
                <i>
                  02
                </i>
                {" "}
                <div>
                  <b>
                    Zero Treatment
                  </b>
                  <span>
                    No reverse osmosis, no ozonation, no chemical adjustment. Straight from source to bottle.
                  </span>
                </div>
                {" "}
              </li>
              {" "}
              <li className="reveal d2">
                {" "}
                <i>
                  03
                </i>
                {" "}
                <div>
                  <b>
                    Mineral-Rich
                  </b>
                  <span>
                    120 mg/L total dissolved solids — calcium, magnesium, bicarbonate in natural balance.
                  </span>
                </div>
                {" "}
              </li>
              {" "}
              <li className="reveal d3">
                {" "}
                <i>
                  04
                </i>
                {" "}
                <div>
                  <b>
                    Sealed at Source
                  </b>
                  <span>
                    Capped within 200 metres of the spring. No repackaging, no transit contamination.
                  </span>
                </div>
                {" "}
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Catalogue
              </span>
              {" "}
              <h2>
                The tasting sheet
              </h2>
              {" "}
              <p>
                Every RIVULET bottle ships with its mineral profile printed on the label — tasting notes, source data, and batch information.
              </p>
              {" "}
            </div>
            {" "}
            <a href="product.html" className="link">
              View all bottles →
            </a>
            {" "}
          </div>
          {" "}
          <div className="tasting-head">
            {" "}
            <div className="pill-tabs">
              {" "}
              <button className="active">
                All
              </button>
              {" "}
              <button>
                Still
              </button>
              {" "}
              <button>
                Sparkling
              </button>
              {" "}
              <button>
                Jug
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="catalog">
            {" "}
            <div className="bottle reveal">
              {" "}
              <div className="media">
                {" "}
                <img src={a2} alt="The Daily 750ml" />
                {" "}
                <span className="tag tag--spring">
                  Best Seller
                </span>
                {" "}
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Daily — 750 ml
                </h3>
                {" "}
                <div className="notes">
                  <span>
                    Still
                  </span>
                  <span>
                    Glass
                  </span>
                  <span>
                    7.4 pH
                  </span>
                </div>
                {" "}
                <p className="desc">
                  Everyday spring water. Mineral-forward with a clean, rounded finish.
                </p>
                {" "}
                <div className="foot">
                  {" "}
                  <span className="price">
                    £2.40
                  </span>
                  {" "}
                  <button className="btn-mini">
                    Add to Plan
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="bottle reveal d1">
              {" "}
              <div className="media">
                {" "}
                <img src={a3} alt="The Sparkling 750ml" />
                {" "}
                <span className="tag tag--glacier">
                  New
                </span>
                {" "}
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Sparkling — 750 ml
                </h3>
                {" "}
                <div className="notes">
                  <span>
                    Sparkling
                  </span>
                  <span>
                    Glass
                  </span>
                  <span>
                    5.2 pH
                  </span>
                </div>
                {" "}
                <p className="desc">
                  Naturally carbonated at source. Fine, persistent bubbles with a crisp finish.
                </p>
                {" "}
                <div className="foot">
                  {" "}
                  <span className="price">
                    £2.80
                  </span>
                  {" "}
                  <button className="btn-mini">
                    Add to Plan
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="bottle reveal d2">
              {" "}
              <div className="media">
                {" "}
                <img src={a4} alt="The Jug 2L" />
                {" "}
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Jug — 2 L
                </h3>
                {" "}
                <div className="notes">
                  <span>
                    Still
                  </span>
                  <span>
                    Recycled PET
                  </span>
                  <span>
                    7.4 pH
                  </span>
                </div>
                {" "}
                <p className="desc">
                  Family-size format. Same spring, same batch — just more of it.
                </p>
                {" "}
                <div className="foot">
                  {" "}
                  <span className="price">
                    £3.60
                  </span>
                  {" "}
                  <button className="btn-mini">
                    Add to Plan
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--wash">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Delivery Plans
              </span>
              {" "}
              <h2>
                Choose your cadence
              </h2>
              {" "}
              <p>
                Weekly, fortnightly, or monthly — skip or pause anytime. The first delivery includes a free tasting set.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="plans">
            {" "}
            <div className="plan reveal">
              {" "}
              <h3>
                Weekly
              </h3>
              {" "}
              <span className="price">
                {"£9.60 "}
                <span className="per">
                  / week
                </span>
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  4 × 750 ml bottles
                </li>
                {" "}
                <li>
                  Free glass carafe on sign-up
                </li>
                {" "}
                <li>
                  Skip or pause anytime
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn-primary btn-wide">
                Start Weekly
              </a>
              {" "}
            </div>
            {" "}
            <div className="plan plan--featured reveal d1">
              {" "}
              <h3>
                Fortnightly
              </h3>
              {" "}
              <span className="price">
                {"£14.40 "}
                <span className="per">
                  / 2 weeks
                </span>
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  6 × 750 ml bottles
                </li>
                {" "}
                <li>
                  Free tasting set (still + sparkling)
                </li>
                {" "}
                <li>
                  Skip or pause anytime
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn-primary btn-wide">
                Start Fortnightly
              </a>
              {" "}
            </div>
            {" "}
            <div className="plan reveal d2">
              {" "}
              <h3>
                Monthly
              </h3>
              {" "}
              <span className="price">
                {"£24.00 "}
                <span className="per">
                  / month
                </span>
              </span>
              {" "}
              <ul>
                {" "}
                <li>
                  10 × 750 ml bottles
                </li>
                {" "}
                <li>
                  Free ceramic coaster set
                </li>
                {" "}
                <li>
                  Skip or pause anytime
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn-primary btn-wide">
                Start Monthly
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="cadence reveal">
            {" "}
            <div className="step">
              <span className="ic">
                ①
              </span>
              <b>
                Choose a plan
              </b>
              <span>
                Pick your bottle count
              </span>
            </div>
            {" "}
            <div className="step">
              <span className="ic">
                ②
              </span>
              <b>
                We bottle
              </b>
              <span>
                Fresh from the spring
              </span>
            </div>
            {" "}
            <div className="step">
              <span className="ic">
                ③
              </span>
              <b>
                We deliver
              </b>
              <span>
                To your door, on schedule
              </span>
            </div>
            {" "}
            <div className="step">
              <span className="ic">
                ④
              </span>
              <b>
                You enjoy
              </b>
              <span>
                Track your batch online
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
      <section className="section section--paper">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div>
              {" "}
              <span className="kicker">
                What People Say
              </span>
              {" "}
              <h2>
                Tasting notes from our subscribers
              </h2>
              {" "}
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
                "You can taste the difference when water hasn't been messed with. My kids won't drink anything else now."
              </p>
              {" "}
              <div className="who">
                {" "}
                <div>
                  <b>
                    Sarah M.
                  </b>
                  <span>
                    Weekly subscriber, London
                  </span>
                </div>
                {" "}
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
                "The batch tracking is a lovely touch — feels like you're part of the source. Beautiful branding too."
              </p>
              {" "}
              <div className="who">
                {" "}
                <div>
                  <b>
                    James T.
                  </b>
                  <span>
                    Fortnightly subscriber, Bristol
                  </span>
                </div>
                {" "}
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
                "Switched from a big brand six months ago. The mineral profile on the label is what sold me — transparency matters."
              </p>
              {" "}
              <div className="who">
                {" "}
                <div>
                  <b>
                    Olivia K.
                  </b>
                  <span>
                    Monthly subscriber, Cardiff
                  </span>
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
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Questions
              </span>
              {" "}
              <h2>
                Common questions
              </h2>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="faq">
            {" "}
            <div className="faq-item">
              {" "}
              <button className="faq-q" aria-expanded="false">
                Is the water treated or filtered?
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                No. RIVULET water is drawn directly from a protected spring and sealed at source. No reverse osmosis, no ozonation, no chemical adjustment of any kind.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item">
              {" "}
              <button className="faq-q" aria-expanded="false">
                How does the subscription work?
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Choose a delivery cadence (weekly, fortnightly, or monthly). Your first delivery includes a free tasting set. You can skip a delivery or pause your plan at any time from your account.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item">
              {" "}
              <button className="faq-q" aria-expanded="false">
                Where do you deliver?
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                We currently deliver across mainland UK. Enter your postcode on the contact page to check availability. Free delivery on all plans — no minimum order.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item">
              {" "}
              <button className="faq-q" aria-expanded="false">
                What's in the mineral profile?
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Each batch is independently lab-tested. Typical readings: pH 7.4, TDS 120 mg/L, Calcium 42 mg/L, Magnesium 8 mg/L, Bicarbonate 310 mg/L. Full results are printed on every bottle label.
              </div>
              {" "}
            </div>
            {" "}
            <div className="faq-item">
              {" "}
              <button className="faq-q" aria-expanded="false">
                Can I return the glass bottles?
                <span>
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                Yes. Leave empty bottles out on your next delivery day and we'll collect them for cleaning and refill. Each bottle is reused up to 50 times before recycling.
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
      <section className="cta-band">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="kicker" style={{ color: "var(--glacier)" }}>
              Start Today
            </span>
            {" "}
            <h2>
              Your first delivery
              <br />
              is one click away
            </h2>
            {" "}
            <p>
              Join 2,400+ subscribers who drink from the source. Free tasting set with every first order.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="product.html" className="btn-primary">
              Browse Catalogue →
            </a>
            {" "}
            <a href="contact.html" className="btn-ghost">
              Talk to Us
            </a>
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
            <div>
              {" "}
              <div className="brand">
                RIVULE
                <span>
                  m
                </span>
                T
              </div>
              {" "}
              <p>
                Spring water delivered from source to door. Single-origin, zero treatment, fully traceable.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Pages
              </h4>
              {" "}
              <a href="index.html">
                Home
              </a>
              <br />
              {" "}
              <a href="about.html">
                Our Source
              </a>
              <br />
              {" "}
              <a href="service.html">
                Plans
              </a>
              <br />
              {" "}
              <a href="product.html">
                Catalogue
              </a>
              <br />
              {" "}
              <a href="blog.html">
                Journal
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Source Data
              </h4>
              {" "}
              <a href="about.html">
                Mineral Profile
              </a>
              <br />
              {" "}
              <a href="about.html">
                Lab Reports
              </a>
              <br />
              {" "}
              <a href="about.html">
                Spring Coordinates
              </a>
              <br />
              {" "}
              <a href="about.html">
                Batch History
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <a href="about.html">
                About
              </a>
              <br />
              {" "}
              <a href="blog.html">
                Journal
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Wholesale
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Press
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="base">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" RIVULET Spring Water Ltd"}
            </span>
            {" "}
            <span>
              Source: Llanwrtyd Wells · 52.0667° N, 3.6333° W
            </span>
            {" "}
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
