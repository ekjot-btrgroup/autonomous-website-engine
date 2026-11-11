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
            ◆ NOW BOOKING
          </span>
          {" "}
          <span>
            Taking on a select number of new homes
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
              F
            </span>
            FORM & FUNCTION
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
              Residential · Interiors · Styling
            </span>
            {" "}
            <h1>
              {"Designed around "}
              <span>
                the way you live
              </span>
            </h1>
            {" "}
            <p className="lead">
              A Bangalore studio creating warm, minimal homes where natural materials, careful planning and everyday function come together.
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
                Studio Details
              </span>
              <br />
              {" Founded: 2019 · Location: Bangalore, India"}
              <br />
              {" Founder: Ananya Mehra"}
              <br />
              {" Focus: Apartments · Villas · Independent homes "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-img reveal d1">
            {" "}
            <img src={a0} alt="Form & Function Studio residential interior" />
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
            Natural Oak
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#8B7355" }} />
            Walnut
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#2C5F8A" }} />
            Travertine
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#A08060" }} />
            Limewash
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#D8D0C4" }} />
            Linen
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#2D2D2D" }} />
            Handmade Ceramics
          </div>
          {" "}
          <div className="mat">
            <span className="swatch" style={{ background: "#B8C8D8" }} />
            Warm Lighting
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
            <span className="per" data-count="4">
              0
            </span>
            <span className="label">
              Featured projects
            </span>
          </div>
          {" "}
          <div className="cell reveal d1">
            <span className="per" data-count="6">
              0
            </span>
            <span className="label">
              Core services
            </span>
          </div>
          {" "}
          <div className="cell reveal d2">
            <span className="per" data-count="4">
              0
            </span>
            <span className="label">
              Process stages
            </span>
          </div>
          {" "}
          <div className="cell reveal d3">
            <span className="per" data-count="6">
              0
            </span>
            <span className="label">
              Core values
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
            Featured Projects
          </span>
          {" "}
          <h2>
            Recent homes
          </h2>
          {" "}
          <div className="projects-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="media">
                <img src={a1} alt="The Willow Residence" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Willow Residence
                </h3>
                {" "}
                <span className="location">
                  📍 Whitefield, Bangalore
                </span>
                {" "}
                <p>
                  A warm, understated 3 BHK apartment with natural oak finishes, soft neutral tones, custom furniture and an open-plan living area.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Apartment
                  </span>
                  <span>
                    3 BHK
                  </span>
                  <span>
                    1,850 sq ft
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
                <img src={a2} alt="Casa Verde" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Casa Verde
                </h3>
                {" "}
                <span className="location">
                  📍 Sarjapur Road, Bangalore
                </span>
                {" "}
                <p>
                  A nature-inspired 4 BHK villa combining natural stone, wooden textures, earthy colours and generous open spaces.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Villa
                  </span>
                  <span>
                    4 BHK
                  </span>
                  <span>
                    3,200 sq ft
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
                <img src={a3} alt="The Sunday Home" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Sunday Home
                </h3>
                {" "}
                <span className="location">
                  📍 Indiranagar, Bangalore
                </span>
                {" "}
                <p>
                  A compact 2 BHK designed around intelligent storage, soft lighting, multifunctional furniture and a calm neutral palette.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Apartment
                  </span>
                  <span>
                    2 BHK
                  </span>
                  <span>
                    1,250 sq ft
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
                <img src={a4} alt="The Aria Residence" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  The Aria Residence
                </h3>
                {" "}
                <span className="location">
                  📍 Jayanagar, Bangalore
                </span>
                {" "}
                <p>
                  An elegant 3 BHK with walnut cabinetry, marble surfaces, sculptural lighting and carefully layered textures.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Apartment
                  </span>
                  <span>
                    3 BHK
                  </span>
                  <span>
                    2,100 sq ft
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
              <img src={a5} alt="Form & Function Studio at work" />
            </div>
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Approach
              </span>
              {" "}
              <h2>
                Natural materials, thoughtful planning
              </h2>
              {" "}
              <p>
                Every project begins with the site — its light, its history, its material context. We don't impose style; we respond to place.
              </p>
              {" "}
              <p>
                Every decision serves a purpose. We favour warm textures, balanced proportions and layouts that work as well as they look, so homes feel timeless rather than trend-driven.
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
                Residential Interior Design
              </h3>
              {" "}
              <p>
                Complete interior design for apartments, villas and independent homes.
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
                Space Planning
              </h3>
              {" "}
              <p>
                Intelligent layouts that make the most of your space, improve movement and enhance usability.
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
                Kitchen & Wardrobe Design
              </h3>
              {" "}
              <p>
                Custom kitchens, wardrobes and storage tailored to how you live.
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
                Furniture & Material Selection
              </h3>
              {" "}
              <p>
                Carefully chosen furniture, lighting, finishes, fabrics and materials.
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
                Home Styling & Decoration
              </h3>
              {" "}
              <p>
                The final touches that bring personality and cohesion to your home.
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
                Renovation & Remodeling
              </h3>
              {" "}
              <p>
                Updating existing spaces with better layouts and contemporary finishes.
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
                Natural Oak
              </span>
              {" "}
              <span className="desc">
                Interiors + furniture
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d1">
              {" "}
              <div className="swatch" style={{ background: "#8B5E3C" }} />
              {" "}
              <span className="name">
                Walnut
              </span>
              {" "}
              <span className="desc">
                Cabinetry + panelling
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d2">
              {" "}
              <div className="swatch" style={{ background: "#C8A870" }} />
              {" "}
              <span className="name">
                Travertine
              </span>
              {" "}
              <span className="desc">
                Floors + surfaces
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal d3">
              {" "}
              <div className="swatch" style={{ background: "#E8E0D4" }} />
              {" "}
              <span className="name">
                Limewash
              </span>
              {" "}
              <span className="desc">
                Textured walls
              </span>
              {" "}
            </div>
            {" "}
            <div className="material-chip reveal">
              {" "}
              <div className="swatch" style={{ background: "#A8C0D0" }} />
              {" "}
              <span className="name">
                Handmade Ceramics
              </span>
              {" "}
              <span className="desc">
                Objects + details
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
            Why clients choose us
          </span>
          {" "}
          <h2>
            What to expect
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
                Personalised designs rather than repetitive templates, so your home reflects the people who live in it.
              </p>
              {" "}
              <span className="label">
                Personalised design
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
                Transparent project planning and communication, with dedicated coordination from concept to completion.
              </p>
              {" "}
              <span className="label">
                Clear communication
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
                Carefully sourced materials and skilled craftsmanship, with a strong focus on long-term usability.
              </p>
              {" "}
              <span className="label">
                Quality and craft
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
              Let's design a home around you
            </h2>
            {" "}
            <p>
              Tell us about your apartment, villa or renovation. We will help you shape a home that feels personal and works every day.
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
                FORM & FUNCTION
              </div>
              {" "}
              <p>
                Boutique residential interior design in Bangalore. Designed around the way you live.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <a href="service.html">
                Residential Design
              </a>
              <br />
              {" "}
              <a href="service.html">
                Space Planning
              </a>
              <br />
              {" "}
              <a href="service.html">
                Kitchens & Wardrobes
              </a>
              <br />
              {" "}
              <a href="service.html">
                Home Styling
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
                Process
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
                Studio
              </h4>
              {" "}
              <p>
                2nd Floor, 12th Main Road, Indiranagar
                <br />
                Bangalore, Karnataka 560038
              </p>
              {" "}
              <a href="mailto:hello@formandfunction.studio">
                hello@formandfunction.studio
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
              {" Form & Function Studio"}
            </span>
            {" "}
            <span>
              Designed around the way you live
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
