// Converted from the HTML template architecture-studio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/project-1.webp";
import a2 from "./assets/project-2.webp";
import a3 from "./assets/project-3.webp";
import a4 from "./assets/project-4.webp";
import a5 from "./assets/about-1.webp";
import a6 from "./assets/icon-1.webp";
import a7 from "./assets/icon-2.webp";
import a8 from "./assets/icon-3.webp";
import a9 from "./assets/icon-4.webp";
import a10 from "./assets/icon-5.webp";
import a11 from "./assets/icon-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-architecture-studio-7f70">
      {" "}
      {" "}
      <div className="blueprint-bar">
        {" "}
        <div className="container">
          {" "}
          <span className="live">
            ◆ STUDIO ACTIVE
          </span>
          {" "}
          <span>
            Currently accepting projects for Q1 2027
          </span>
          {" "}
          <span className="spacer" />
          {" "}
          <a href="contact.html">
            Book a consultation →
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
            <span className="glyph">
              V
            </span>
            VOSSEN
          </a>
          {" "}
          <nav id="mainnav">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="project.html">
              Projects
            </a>
            {" "}
            <a href="service.html">
              Services
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
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Start a Project
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
      <section className="hero-elevation">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="eyebrow">
              Architecture · Interiors · Master Planning
            </span>
            {" "}
            <h1>
              {"Spaces that "}
              <span>
                endure
              </span>
            </h1>
            {" "}
            <p className="lead">
              We design buildings and interiors rooted in material honesty, spatial precision, and the belief that good architecture should feel inevitable — not imposed.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="project.html" className="btn-primary">
                View Projects →
              </a>
              {" "}
              <a href="contact.html" className="btn-ghost">
                Book Consultation
              </a>
              {" "}
            </div>
            {" "}
            <div className="spec-box reveal">
              {" "}
              <span className="spec-label">
                Studio Specifications
              </span>
              <br />
              {" Founded: 2012 · Location: Copenhagen + Berlin"}
              <br />
              {" Team: 28 architects & designers"}
              <br />
              {" Focus: Residential · Cultural · Commercial "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-img reveal d1">
            {" "}
            <img src={a0} alt="VOSSEN architectural project" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <div className="material-strip">
        {" "}
        <div className="container">
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#C4B5A0" }} />
            Concrete
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#8B7355" }} />
            Corten Steel
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#2C5F8A" }} />
            Blueprint Blue
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#A08060" }} />
            Oak
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#D8D0C4" }} />
            Limestone
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#2D2D2D" }} />
            Graphite
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#B8C8D8" }} />
            Glass
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="readouts">
        {" "}
        <div className="container">
          {" "}
          <div className="cell reveal">
            <span className="per" data-count="14">
              0
            </span>
            <span className="label">
              Years of practice
            </span>
          </div>
          {" "}
          <div className="cell reveal d1">
            <span className="per" data-count="86">
              0
            </span>
            <span className="label">
              Projects completed
            </span>
          </div>
          {" "}
          <div className="cell reveal d2">
            <span className="per" data-count="28">
              0
            </span>
            <span className="label">
              Team members
            </span>
          </div>
          {" "}
          <div className="cell reveal d3">
            <span className="per" data-count="12">
              0
            </span>
            <span className="label">
              Design awards
            </span>
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
          <span className="kicker">
            Selected Work
          </span>
          {" "}
          <h2>
            Recent projects
          </h2>
          {" "}
          <div className="projects-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="media">
                <img src={a1} alt="Nordic Cultural Centre" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Nordic Cultural Centre
                </h3>
                {" "}
                <span className="location">
                  📍 Copenhagen, Denmark
                </span>
                {" "}
                <p>
                  A 4,200m² cultural venue balancing public openness with intimate gallery spaces. Cross-laminated timber structure with integrated geothermal systems.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Cultural
                  </span>
                  <span>
                    CLT Structure
                  </span>
                  <span>
                    4,200m²
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal d1">
              {" "}
              <div className="media">
                <img src={a2} alt="Bremerhof Residential" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Bremerhof Residential
                </h3>
                {" "}
                <span className="location">
                  📍 Berlin, Germany
                </span>
                {" "}
                <p>
                  12-unit housing courtyard with shared gardens and private terraces. Raw concrete frames with oak infill panels and floor-to-ceiling glazing.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Residential
                  </span>
                  <span>
                    12 Units
                  </span>
                  <span>
                    Courtyard
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal d2">
              {" "}
              <div className="media">
                <img src={a3} alt="Fjord House" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Fjord House
                </h3>
                {" "}
                <span className="location">
                  📍 Geiranger, Norway
                </span>
                {" "}
                <p>
                  Private residence cantilevered over a fjord. Weathering steel envelope, triple-height living space, and panoramic glazing oriented toward the water.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Residential
                  </span>
                  <span>
                    Cantilever
                  </span>
                  <span>
                    280m²
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal d3">
              {" "}
              <div className="media">
                <img src={a4} alt="Werkstatt Office" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Werkstatt Office
                </h3>
                {" "}
                <span className="location">
                  📍 Munich, Germany
                </span>
                {" "}
                <p>
                  Adaptive reuse of a 1920s workshop into co-working space. Preserved steel trusses, polished concrete floors, and new mezzanine levels in timber.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Commercial
                  </span>
                  <span>
                    Adaptive Reuse
                  </span>
                  <span>
                    1,800m²
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {" "}
            <a href="project.html" className="link">
              View all projects →
            </a>
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
          <div className="feature">
            {" "}
            <div className="frame reveal">
              <img src={a5} alt="VOSSEN studio" />
            </div>
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Approach
              </span>
              {" "}
              <h2>
                Material honesty, spatial precision
              </h2>
              {" "}
              <p>
                Every project begins with the site — its light, its history, its material context. We don't impose style; we respond to place.
              </p>
              {" "}
              <p>
                Our buildings use materials as they are: concrete left raw, steel allowed to weather, timber oiled and exposed. Structure is not hidden — it's celebrated.
              </p>
              {" "}
              <a href="about.html" className="link">
                Read our philosophy →
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Disciplines
          </span>
          {" "}
          <h2>
            What we do
          </h2>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                <img src={a6} alt="" />
              </div>
              {" "}
              <h3>
                Architecture
              </h3>
              {" "}
              <p>
                From concept to completion — residential, cultural, and commercial buildings designed for durability and delight.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                <img src={a7} alt="" />
              </div>
              {" "}
              <h3>
                Interior Design
              </h3>
              {" "}
              <p>
                Spatial planning, material selection, and bespoke furniture. Interiors that feel inevitable — not decorated.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                <img src={a8} alt="" />
              </div>
              {" "}
              <h3>
                Master Planning
              </h3>
              {" "}
              <p>
                District-scale visioning, urban design frameworks, and long-term development strategies for communities.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                <img src={a9} alt="" />
              </div>
              {" "}
              <h3>
                Sustainability
              </h3>
              {" "}
              <p>
                Passive design, material lifecycle analysis, and certified green building — because good architecture must be responsible.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                <img src={a10} alt="" />
              </div>
              {" "}
              <h3>
                Adaptive Reuse
              </h3>
              {" "}
              <p>
                Transforming existing structures — industrial heritage, underused buildings — into vibrant new spaces with minimal demolition.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                <img src={a11} alt="" />
              </div>
              {" "}
              <h3>
                Visualization
              </h3>
              {" "}
              <p>
                Photorealistic renders, physical models, and walkthrough animations. We communicate design intent clearly.
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
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Material Language
          </span>
          {" "}
          <h2>
            Our palette
          </h2>
          {" "}
          <div className="material-grid">
            {" "}
            <div className="material-chip reveal">
              {" "}
              <div className="swatch" style={{ background: "#B0A898" }} />
              {" "}
              <span className="name">
                Board-Formed Concrete
              </span>
              {" "}
              <span className="desc">
                Structural + finish
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d1">
              {" "}
              <div className="swatch" style={{ background: "#8B5E3C" }} />
              {" "}
              <span className="name">
                Weathering Steel
              </span>
              {" "}
              <span className="desc">
                Facade + sculpture
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d2">
              {" "}
              <div className="swatch" style={{ background: "#C8A870" }} />
              {" "}
              <span className="name">
                White Oak
              </span>
              {" "}
              <span className="desc">
                Interior + furniture
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d3">
              {" "}
              <div className="swatch" style={{ background: "#E8E0D4" }} />
              {" "}
              <span className="name">
                Jura Limestone
              </span>
              {" "}
              <span className="desc">
                Paving + walls
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal">
              {" "}
              <div className="swatch" style={{ background: "#A8C0D0" }} />
              {" "}
              <span className="name">
                Low-Iron Glass
              </span>
              {" "}
              <span className="desc">
                Glazing + screens
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
          <span className="kicker">
            Client Voices
          </span>
          {" "}
          <h2>
            In their words
          </h2>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial reveal">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "VOSSEN understood that our cultural centre needed to be both monumental and intimate. They delivered a building that makes every visitor feel welcome."
              </p>
              {" "}
              <span className="label">
                — Director, Nordic Cultural Foundation
              </span>
              {" "}
            </div>
            {" "}
            <div className="testimonial reveal d1">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "The courtyard scheme gave us 12 distinct homes that all share a sense of community. Every unit has its own garden — rare in urban housing."
              </p>
              {" "}
              <span className="label">
                — Developer, Bremerhof GmbH
              </span>
              {" "}
            </div>
            {" "}
            <div className="testimonial reveal d2">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "They turned a derelict workshop into the most sought-after co-working space in Munich. The steel trusses are the hero — and they knew it."
              </p>
              {" "}
              <span className="label">
                — Founder, Werkstatt Berlin
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
      <section className="cta-band">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="kicker">
              Start a Conversation
            </span>
            {" "}
            <h2>
              Let's design something that lasts
            </h2>
            {" "}
            <p>
              Whether it's a single room or a city block — we design for durability, delight, and the long term.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="contact.html" className="btn-primary">
              Book Consultation →
            </a>
            {" "}
            <a href="project.html" className="btn-ghost">
              View Projects
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
                VOSSEN
              </div>
              {" "}
              <p>
                Architecture, interiors, and master planning — designed for durability and delight.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Disciplines
              </h4>
              {" "}
              <a href="service.html">
                Architecture
              </a>
              <br />
              {" "}
              <a href="service.html">
                Interiors
              </a>
              <br />
              {" "}
              <a href="service.html">
                Master Planning
              </a>
              <br />
              {" "}
              <a href="service.html">
                Sustainability
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Studio
              </h4>
              {" "}
              <a href="about.html">
                About
              </a>
              <br />
              {" "}
              <a href="about.html">
                Philosophy
              </a>
              <br />
              {" "}
              <a href="about.html">
                Careers
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
                Offices
              </h4>
              {" "}
              <p>
                Copenhagen, Denmark
                <br />
                Berlin, Germany
              </p>
              {" "}
              <a href="mailto:studio@vossen.eu">
                studio@vossen.eu
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
              {" VOSSEN Studio"}
            </span>
            {" "}
            <span>
              Designed for durability
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
