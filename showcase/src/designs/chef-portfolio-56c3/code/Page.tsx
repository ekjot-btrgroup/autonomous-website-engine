// Converted from the HTML template chef-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-1.webp";
import a1 from "./assets/menu-1.webp";
import a2 from "./assets/menu-3.webp";
import a3 from "./assets/menu-5.webp";
import a4 from "./assets/menu-2.webp";
import a5 from "./assets/menu-4.webp";
import a6 from "./assets/menu-6.webp";
import a7 from "./assets/team-1.webp";
import a8 from "./assets/testimonial-1.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-chef-portfolio-56c3">
      {" "}
      <header className="site-header">
        {" "}
        <div className="wrap header-inner">
          {" "}
          <a className="brand" href="index.html">
            {"Chefer "}
            <em>
              atelier
            </em>
          </a>
          {" "}
          <nav className="nav" id="siteNav">
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="about.html">
              Atelier
            </a>
            {" "}
            <a href="menu.html">
              Tasting
            </a>
            {" "}
            <a href="contact.html">
              Reserve
            </a>
            {" "}
          </nav>
          {" "}
          <a className="btn-reserve" href="contact.html">
            Reserve a table
          </a>
          {" "}
          <button className="burger" aria-label="Menu" aria-expanded="false">
            <span />
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-grid">
          {" "}
          <div className="hero-media plate-reveal">
            {" "}
            <img src={a0} alt="Signature dish" />
            {" "}
            <div className="hero-overlay">
              {" "}
              <div className="smallcaps">
                Plate 01 — Tonight
              </div>
              {" "}
              <h2>
                Coal, citrus, sea herbs
              </h2>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-copy reveal">
            {" "}
            <div className="smallcaps eyebrow">
              Taste · Memory · Place
            </div>
            {" "}
            <h1>
              <strong>
                Taste
              </strong>
              {" "}
              <em>
                is
              </em>
              {" memory"}
              <br />
              given form.
            </h1>
            {" "}
            <p className="lead">
              A small tasting kitchen. Eight seats. Ingredients walked to the door the same morning they are cooked. We write a new menu when the market tells us to.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a className="btn-primary" href="menu.html">
                View tasting menu
              </a>
              {" "}
              <a className="btn-ghost" href="about.html">
                Meet the chef
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta">
              {" "}
              <div>
                <strong>
                  8
                </strong>
                <span>
                  Seats per service
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  5
                </strong>
                <span>
                  Courses, seasonal
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  6pm
                </strong>
                <span>
                  Doors, Wed–Sat
                </span>
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
      <section className="section section-cream">
        {" "}
        <div className="wrap">
          {" "}
          <div className="reveal">
            {" "}
            <div className="smallcaps kicker">
              Tonight at the pass
            </div>
            {" "}
            <h2 className="section-title">
              {"Three "}
              <em>
                plates
              </em>
              {" from this week."}
            </h2>
            {" "}
            <p className="section-sub">
              What came through the door, what the fire wanted, what the plate needed.
            </p>
            {" "}
          </div>
          {" "}
          <div className="masonry reveal">
            {" "}
            <figure>
              <img src={a1} alt="Plate" />
              <figcaption>
                <strong>
                  Beetroot, sheep's curd
                </strong>
                <span>
                  Garden · Early spring
                </span>
              </figcaption>
            </figure>
            {" "}
            <figure>
              <img src={a2} alt="Plate" />
              <figcaption>
                <strong>
                  Line fish, coastal herbs
                </strong>
                <span>
                  Day boat · Alder
                </span>
              </figcaption>
            </figure>
            {" "}
            <figure>
              <img src={a3} alt="Plate" />
              <figcaption>
                <strong>
                  Pear, brown butter
                </strong>
                <span>
                  Orchard · Ending
                </span>
              </figcaption>
            </figure>
            {" "}
            <figure>
              <img src={a4} alt="Plate" />
              <figcaption>
                <strong>
                  Hearth bread, cultured butter
                </strong>
                <span>
                  Milled today
                </span>
              </figcaption>
            </figure>
            {" "}
            <figure>
              <img src={a5} alt="Plate" />
              <figcaption>
                <strong>
                  Mushroom, pine
                </strong>
                <span>
                  Woodland walk
                </span>
              </figcaption>
            </figure>
            {" "}
            <figure>
              <img src={a6} alt="Plate" />
              <figcaption>
                <strong>
                  Chocolate, sea salt
                </strong>
                <span>
                  Small, dark
                </span>
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
      <section className="section section-dark">
        {" "}
        <div className="wrap chef-grid reveal">
          {" "}
          <div className="chef-portrait plate-reveal">
            {" "}
            <img src={a7} alt="Chef portrait" />
            {" "}
            <div className="chef-badge">
              <img src={a8} alt="" />
              <div>
                <strong style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem" }}>
                  {"Chef & Founder"}
                </strong>
                <br />
                <span style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", opacity: ".6" }}>
                  At the stove since 2007
                </span>
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <div className="smallcaps" style={{ color: "var(--copper-2)" }}>
              The kitchen
            </div>
            {" "}
            <h2 className="section-title" style={{ color: "var(--cream)" }}>
              {"One room, "}
              <em>
                one table
              </em>
              ,
              <br />
              no shortcuts.
            </h2>
            {" "}
            <p className="quote">
              "We cook what we can carry. If it doesn't arrive before noon, it doesn't go on the plate that night."
            </p>
            {" "}
            <ul className="bullets">
              {" "}
              <li>
                <i>
                  —
                </i>
                <span>
                  <strong>
                    Market first:
                  </strong>
                  {" the menu is written after the walk, not before."}
                </span>
              </li>
              {" "}
              <li>
                <i>
                  —
                </i>
                <span>
                  <strong>
                    {"Fire & time:"}
                  </strong>
                  {" coal, embers, slow hands — not tricks."}
                </span>
              </li>
              {" "}
              <li>
                <i>
                  —
                </i>
                <span>
                  <strong>
                    Eight seats:
                  </strong>
                  {" so we remember every name at the table."}
                </span>
              </li>
              {" "}
            </ul>
            {" "}
            <div style={{ marginTop: "18px" }}>
              <a className="btn-primary" href="about.html">
                The atelier story
              </a>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section-cream">
        {" "}
        <div className="wrap reveal">
          {" "}
          <div className="smallcaps kicker">
            {"Press & notes"}
          </div>
          {" "}
          <h2 className="section-title">
            {"What was "}
            <em>
              said
            </em>
            .
          </h2>
          {" "}
          <div className="press">
            {" "}
            <blockquote>
              <p>
                "A room that tastes like it listens."
              </p>
              <cite>
                — Food Quarterly
              </cite>
            </blockquote>
            {" "}
            <blockquote>
              <p>
                "The most honest plate in the city right now."
              </p>
              <cite>
                — Weekend Review
              </cite>
            </blockquote>
            {" "}
            <blockquote>
              <p>
                "Eight seats, zero pretence, all memory."
              </p>
              <cite>
                — Dining Notes
              </cite>
            </blockquote>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="wrap">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              <div className="brand" style={{ fontSize: "1.1rem" }}>
                {"Chefer "}
                <em>
                  atelier
                </em>
              </div>
              <p style={{ marginTop: "8px", color: "rgba(255,248,240,.55)" }}>
                Eight seats. Seasonal tasting. Cooked that day.
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Visit
              </h4>
              <p style={{ fontSize: ".9rem", color: "rgba(255,248,240,.6)" }}>
                14 Market Row
                <br />
                London — Wed to Sat, 6pm
                <br />
                <a href="mailto:hello@chefer.example">
                  hello@chefer.example
                </a>
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Table
              </h4>
              <p style={{ fontSize: ".9rem", color: "rgba(255,248,240,.6)" }}>
                <a href="menu.html">
                  Tasting menu
                </a>
                <br />
                <a href="contact.html">
                  Reserve
                </a>
                <br />
                <a href="about.html">
                  Atelier
                </a>
              </p>
            </div>
            {" "}
          </div>
          {" "}
          <div className="copy">
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Chefer Atelier"}
            </span>
            <span>
              Taste, memory, place.
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
