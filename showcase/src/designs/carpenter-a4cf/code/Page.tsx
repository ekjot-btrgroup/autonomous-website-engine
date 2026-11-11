// Converted from the HTML template carpenter-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/feature.webp";
import a4 from "./assets/service-1.webp";
import a5 from "./assets/service-2.webp";
import a6 from "./assets/service-3.webp";
import a7 from "./assets/portfolio-1.webp";
import a8 from "./assets/portfolio-2.webp";
import a9 from "./assets/portfolio-3.webp";
import a10 from "./assets/portfolio-4.webp";
import a11 from "./assets/portfolio-5.webp";
import a12 from "./assets/portfolio-6.webp";
import a13 from "./assets/testimonial-1.webp";
import a14 from "./assets/testimonial-2.webp";
import a15 from "./assets/footer.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-carpenter-a4cf">
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html" aria-label={"Craft & Grain — Bespoke Carpentry & Custom Furniture Workshop"}>
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v6H9v12H3z" />
              </svg>
              {" "}
            </span>
            {" "}
            <span>
              {" "}
              <span className="brand-word">
                {"Craft "}
                <span className="amp">
                  {"&"}
                </span>
                {" Grain"}
              </span>
              {" "}
              <span className="brand-tag">
                Bespoke Woodwork
              </span>
              {" "}
            </span>
            {" "}
          </a>
          {" "}
          <nav className="site-nav" aria-label="Primary navigation">
            {" "}
            <ul className="nav-links" id="nav-links">
              {" "}
              <li>
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="service.html">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="team.html">
                  Team
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonial.html">
                  Reviews
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <a className="btn btn-primary header-cta" href="quote.html">
            Get a Free Quote
          </a>
          {" "}
          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="A hand-built walnut kitchen finished with oil and wax" className="active" />
            {" "}
            <img src={a1} alt="Craftsman shaping a solid-oak table top in the workshop" />
            {" "}
            <img src={a2} alt="Finished bespoke shelving with dovetailed joints" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <p className="eyebrow">
                {"Bespoke Carpentry & Custom Furniture"}
              </p>
              {" "}
              <h1 className="hero-title">
                {"Timber, turned into "}
                <em>
                  heirloom
                </em>
                {" pieces"}
              </h1>
              {" "}
              <p className="hero-lede">
                A small workshop in Oakwood making kitchens, joinery and furniture the slow way — solid wood, hand-finished joints, and nothing that can't be repaired in a hundred years.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn btn-primary" href="quote.html">
                  Get a Free Quote
                </a>
                {" "}
                <a className="btn btn-outline" href="index.html#work">
                  See Our Work
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-meta">
                {" "}
                <div>
                  <strong>
                    18+
                  </strong>
                  <span>
                    Years in the Trade
                  </span>
                </div>
                {" "}
                <div>
                  <strong>
                    2,400+
                  </strong>
                  <span>
                    Projects Completed
                  </span>
                </div>
                {" "}
                <div>
                  <strong>
                    100%
                  </strong>
                  <span>
                    Solid Timber
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stats">
                {" "}
                <div className="hero-stats-inner">
                  {" "}
                  <div className="stat">
                    <b>
                      98%
                    </b>
                    <span>
                      {"Repeat & Referral"}
                    </span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>
                      25 yrs
                    </b>
                    <span>
                      Guarantee
                    </span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>
                      12 mo
                    </b>
                    <span>
                      Fitting Warranty
                    </span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>
                      6 mo
                    </b>
                    <span>
                      Avg. Waitlist
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
          <div className="scroll-cue" aria-hidden="true" />
          {" "}
        </section>
        {" "}
        <div className="ticker" aria-hidden="true">
          {" "}
          <div className="ticker-track">
            {" "}
            <span>
              {"Solid Oak & Walnut"}
            </span>
            {" "}
            <span>
              Hand-Cut Dovetails
            </span>
            {" "}
            <span>
              Bespoke Kitchens
            </span>
            {" "}
            <span>
              Built-In Joinery
            </span>
            {" "}
            <span>
              Custom Furniture
            </span>
            {" "}
            <span>
              Hardwood Flooring
            </span>
            {" "}
            <span>
              Workshop-Made
            </span>
            {" "}
            <span>
              Built to Last
            </span>
            {" "}
            <span>
              {"Solid Oak & Walnut"}
            </span>
            {" "}
            <span>
              Hand-Cut Dovetails
            </span>
            {" "}
            <span>
              Bespoke Kitchens
            </span>
            {" "}
            <span>
              Built-In Joinery
            </span>
            {" "}
            <span>
              Custom Furniture
            </span>
            {" "}
            <span>
              Hardwood Flooring
            </span>
            {" "}
            <span>
              Workshop-Made
            </span>
            {" "}
            <span>
              Built to Last
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head">
              {" "}
              <div className="rail">
                {" "}
                <span className="num">
                  01
                </span>
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    {"Why Craft & Grain"}
                  </p>
                  {" "}
                  <h2 className="section-title">
                    Made in the workshop,
                    <br />
                    not on an assembly line
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Every piece we make is drawn, cut and finished in our own workshop. That means honest timber, visible joinery and a maker who stands behind their work — literally.
              </p>
              {" "}
            </div>
            {" "}
            <div className="plank-grid">
              {" "}
              <article className="plank reveal">
                {" "}
                <span className="num">
                  01
                </span>
                {" "}
                <span className="plank-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v6H9v12H3z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Honest Timber
                </h3>
                {" "}
                <p>
                  FSC-certified solid oak, walnut, ash and maple. No veneers, no MDF where a board will do.
                </p>
                {" "}
              </article>
              {" "}
              <article className="plank reveal d-1">
                {" "}
                <span className="num">
                  02
                </span>
                {" "}
                <span className="plank-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                {" "}
                <h3>
                  Hand-Cut Joinery
                </h3>
                {" "}
                <p>
                  Dovetails, mortise-and-tenon and drawbore pins — joints that hold without a single screw.
                </p>
                {" "}
              </article>
              {" "}
              <article className="plank reveal d-2">
                {" "}
                <span className="num">
                  03
                </span>
                {" "}
                <span className="plank-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </span>
                {" "}
                <h3>
                  On Time, Every Time
                </h3>
                {" "}
                <p>
                  A realistic schedule and a fixed quote. We start when we say we will and finish when we promised.
                </p>
                {" "}
              </article>
              {" "}
              <article className="plank reveal d-3">
                {" "}
                <span className="num">
                  04
                </span>
                {" "}
                <span className="plank-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                {" "}
                <h3>
                  25-Year Guarantee
                </h3>
                {" "}
                <p>
                  Joinery and structure guaranteed for a quarter century. Built once, built to stay.
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
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-media reveal">
                {" "}
                <div className="img-frame lg">
                  {" "}
                  <img src={a3} alt="Craftsman sanding a live-edge oak table top by hand" loading="lazy" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split-body reveal d-1">
                {" "}
                <p className="eyebrow">
                  {"The Craft & Grain Way"}
                </p>
                {" "}
                <h2 className="section-title">
                  Slow work, done well
                </h2>
                {" "}
                <p className="lede">
                  Most of our jobs start with a conversation over coffee and a tape measure. We sketch, price honestly, then build the piece in our workshop before it ever reaches your home.
                </p>
                {" "}
                <ul className="split-list">
                  {" "}
                  <li>
                    {" "}
                    <span className="tick">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Design together
                      </strong>
                      <p>
                        Drawings and 3D mock-ups you can touch before we commit a single board.
                      </p>
                    </div>
                    {" "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <span className="tick">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Fixed, transparent quotes
                      </strong>
                      <p>
                        One price, itemised by material and labour. No surprises, no extras.
                      </p>
                    </div>
                    {" "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <span className="tick">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" "}
                    <div>
                      <strong>
                        Installed and finished
                      </strong>
                      <p>
                        We deliver, fit, oil and wax — and leave the sawdust swept.
                      </p>
                    </div>
                    {" "}
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="counter-row">
                  {" "}
                  <div className="counter">
                    <b>
                      2,400+
                    </b>
                    <span>
                      Pieces delivered
                    </span>
                  </div>
                  {" "}
                  <div className="counter">
                    <b>
                      18 yrs
                    </b>
                    <span>
                      Master craftsmen
                    </span>
                  </div>
                  {" "}
                  <div className="counter">
                    <b>
                      100%
                    </b>
                    <span>
                      Solid timber builds
                    </span>
                  </div>
                  {" "}
                  <div className="counter">
                    <b>
                      0
                    </b>
                    <span>
                      Sub-contractors
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ marginTop: "1.8rem" }}>
                  <a className="btn btn-dark" href="about.html">
                    {"More About Us "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
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
            <div className="section-head">
              {" "}
              <div className="rail">
                {" "}
                <span className="num">
                  02
                </span>
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    What We Make
                  </p>
                  {" "}
                  <h2 className="section-title">
                    From kitchens to keepsakes
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Six trades under one roof. If it's made of wood and you can picture it, we can probably build it.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-media">
                  {" "}
                  <img src={a4} alt="Bespoke fitted kitchen in solid oak" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Kitchens
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Bespoke Kitchens
                  </h3>
                  {" "}
                  <p>
                    Fitted kitchens cut to your room, your storage and your cooking — in oak, walnut or painted hardwood.
                  </p>
                  {" "}
                  <a className="service-link" href="service.html">
                    {"Explore "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal d-1">
                {" "}
                <div className="service-media">
                  {" "}
                  <img src={a5} alt="Custom built-in shelving unit" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Joinery
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Built-In Joinery
                  </h3>
                  {" "}
                  <p>
                    Wardrobes, alcove units, media walls and window seats that fit like they grew there — because they were built for there.
                  </p>
                  {" "}
                  <a className="service-link" href="service.html">
                    {"Explore "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal d-2">
                {" "}
                <div className="service-media">
                  {" "}
                  <img src={a6} alt="Hand-crafted solid wood dining table" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Furniture
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Custom Furniture
                  </h3>
                  {" "}
                  <p>
                    Dining tables, beds, desks and heirlooms — designed with you, built by hand, finished to be passed down.
                  </p>
                  {" "}
                  <a className="service-link" href="service.html">
                    {"Explore "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
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
        <section className="section section-alt" id="work">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head">
              {" "}
              <div className="rail">
                {" "}
                <span className="num">
                  03
                </span>
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    Recent Projects
                  </p>
                  {" "}
                  <h2 className="section-title">
                    Work we're proud to sign
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                A few recent pieces from the bench. Every one built in our workshop, photographed in the room it was made for.
              </p>
              {" "}
            </div>
            {" "}
            <div className="portfolio-grid">
              {" "}
              <figure className="work reveal">
                {" "}
                <img src={a7} alt="Walnut shaker-style kitchen" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Kitchen · Walnut
                  </span>
                  <h3>
                    Shaker-Meets-Scandi Kitchen
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-1">
                {" "}
                <img src={a8} alt="Oak alcove shelving with dovetails" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Joinery · Oak
                  </span>
                  <h3>
                    Alcove Library Shelving
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-2">
                {" "}
                <img src={a9} alt="Live-edge oak dining table" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Furniture · Oak
                  </span>
                  <h3>
                    Live-Edge Dining Table
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal">
                {" "}
                <img src={a10} alt="Walk-in wardrobe in painted hardwood" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Joinery · Painted
                  </span>
                  <h3>
                    Walk-In Wardrobe
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-1">
                {" "}
                <img src={a11} alt="Solid maple four-poster bed" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Furniture · Maple
                  </span>
                  <h3>
                    Four-Poster Bed
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-2">
                {" "}
                <img src={a12} alt="Ash media wall with hidden storage" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Joinery · Ash
                  </span>
                  <h3>
                    {"Media Wall & Storage"}
                  </h3>
                </figcaption>
                {" "}
              </figure>
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
            <div className="section-head">
              {" "}
              <div className="rail">
                {" "}
                <span className="num">
                  04
                </span>
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    How It Works
                  </p>
                  {" "}
                  <h2 className="section-title">
                    From first sketch to final wax
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                A calm, predictable process — so you always know what happens next and what it costs.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-grid">
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  {"Consult & Sketch"}
                </h3>
                {" "}
                <p>
                  We visit, measure and listen. You leave with a rough sketch and a feel for what's possible.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-1">
                {" "}
                <h3>
                  {"Design & Quote"}
                </h3>
                {" "}
                <p>
                  Drawings, timber samples and a fixed, itemised quote within two weeks.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-2">
                {" "}
                <h3>
                  Build in Workshop
                </h3>
                {" "}
                <p>
                  Your piece takes shape on the bench. We share progress photos at every stage.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-3">
                {" "}
                <h3>
                  {"Deliver & Finish"}
                </h3>
                {" "}
                <p>
                  Fitted, oiled, waxed and polished. Then we stand behind it for 25 years.
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
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head">
              {" "}
              <div className="rail">
                {" "}
                <span className="num">
                  05
                </span>
                {" "}
                <div>
                  {" "}
                  <p className="eyebrow">
                    Kind Words
                  </p>
                  {" "}
                  <h2 className="section-title">
                    What our clients say
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Most of our work still comes from word of mouth. Here's what people say after living with it.
              </p>
              {" "}
            </div>
            {" "}
            <div className="tm-grid">
              {" "}
              <figure className="quote-card reveal">
                {" "}
                <div className="stars" aria-label="Rated 5 out of 5">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                </div>
                {" "}
                <blockquote>
                  "They rebuilt our kitchen and it genuinely changed how our family cooks and eats together. The dovetails are so clean I show guests the joints."
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <img src={a13} alt="Portrait of Rachel Mendez" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Rachel Mendez
                    </h3>
                    {" "}
                    <span>
                      Homeowner, Oakwood Hills
                    </span>
                    {" "}
                    <span className="project">
                      Bespoke Kitchen
                    </span>
                    {" "}
                  </div>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="quote-card reveal d-1">
                {" "}
                <div className="stars" aria-label="Rated 5 out of 5">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                </div>
                {" "}
                <blockquote>
                  "A solid-oak dining table, made for our exact room, at a price that beat three cabinet companies. Five years in, it still looks like the day they delivered it."
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <img src={a14} alt="Portrait of Daniel Osei" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Daniel Osei
                    </h3>
                    {" "}
                    <span>
                      Homeowner, Riverside
                    </span>
                    {" "}
                    <span className="project">
                      Custom Dining Table
                    </span>
                    {" "}
                  </div>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cta-band">
          {" "}
          <div className="bg">
            <img src={a15} alt="" aria-hidden="true" />
          </div>
          {" "}
          <div className="container">
            {" "}
            <p className="eyebrow">
              Ready When You Are
            </p>
            {" "}
            <h2>
              {"Let's make something "}
              <em>
                worth keeping
              </em>
            </h2>
            {" "}
            <p>
              Tell us about your space and the piece you're picturing. We'll come back with sketches, timber ideas and a fixed quote — no obligation, no hard sell.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a className="btn btn-primary" href="quote.html">
                Get a Free Quote
              </a>
              {" "}
              <a className="btn btn-outline" href="contact.html">
                Talk to Us First
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
          <div className="footer-brand">
            {" "}
            <a className="brand" href="index.html" aria-label={"Craft & Grain — Home"}>
              {" "}
              <span className="brand-mark" aria-hidden="true">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18v6H9v12H3z" />
                </svg>
                {" "}
              </span>
              {" "}
              <span>
                {" "}
                <span className="brand-word">
                  {"Craft "}
                  <span className="amp">
                    {"&"}
                  </span>
                  {" Grain"}
                </span>
                {" "}
                <span className="brand-tag">
                  Bespoke Woodwork
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <p>
              A family-run carpentry workshop in Oakwood, CA. Kitchens, joinery and furniture in solid timber — designed together, built by hand, guaranteed for 25 years.
            </p>
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
                  About Us
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="team.html">
                  Our Team
                </a>
              </li>
              {" "}
              <li>
                <a href="testimonial.html">
                  Reviews
                </a>
              </li>
              {" "}
              <li>
                <a href="quote.html">
                  Get a Quote
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
          <div className="footer-col">
            {" "}
            <h4>
              Services
            </h4>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="service.html">
                  Bespoke Kitchens
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Built-In Joinery
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Custom Furniture
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Doors & Stairs"}
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Hardwood Flooring
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Repairs & Restoration"}
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
              The Workshop
            </h4>
            {" "}
            <ul className="footer-contact">
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {" 214 Timber Lane, Oakwood, CA 94501"}
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {" "}
                <a href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {" "}
                <a href="mailto:hello@craftandgrain.com">
                  hello@craftandgrain.com
                </a>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {" Mon–Sat · 8 AM – 6 PM"}
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
          <div className="container footer-bottom-inner">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Craft & Grain Workshop. All rights reserved."}
            </p>
            {" "}
            <p>
              <a href="contact.html">
                Privacy
              </a>
              {" · "}
              <a href="contact.html">
                Terms
              </a>
              {" · "}
              <a href="contact.html">
                Sitemap
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" type="button" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
