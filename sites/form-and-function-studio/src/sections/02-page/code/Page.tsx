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
          <a className="brand" href="index.html" aria-label={"Form & Function Studio | Boutique Interior Design, Bangalore"}>
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
                Interior Design
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
                  Process
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonial.html">
                  Why Us
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
            Book a Consultation
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
            <img src={a0} alt="A warm living room with natural oak and neutral textures" className="active" />
            {" "}
            <img src={a1} alt="Designer reviewing material samples with a homeowner" />
            {" "}
            <img src={a2} alt="Built-in storage in a calm neutral interior" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <p className="eyebrow">
                {"Boutique Interior Design, Bangalore"}
              </p>
              {" "}
              <h1 className="hero-title">
                {"Homes designed "}
                <em>
                  around you
                </em>
                {" pieces"}
              </h1>
              {" "}
              <p className="hero-lede">
                Form & Function Studio designs thoughtful residential interiors in Bangalore, from the first space plan to the final styling, so your home looks good and works better every day.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn btn-primary" href="quote.html">
                  Book a Consultation
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
                  <strong>6</strong><span>Core services</span>
                </div>
                {" "}
                <div>
                  <strong>4</strong><span>Featured projects</span>
                </div>
                {" "}
                <div>
                  <strong>4</strong><span>Process stages</span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-stats">
                {" "}
                <div className="hero-stats-inner">
                  {" "}
                  <div className="stat">
                    <b>6</b><span>Core values</span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>
                      2019
                    </b>
                    <span>
                      Founded
                    </span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>
                      Bangalore
                    </b>
                    <span>
                      Based in
                    </span>
                  </div>
                  {" "}
                  <div className="stat">
                    <b>Homes</b><span>Residential only</span>
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
              {"Natural Oak & Walnut"}
            </span>
            {" "}
            <span>
              Space Planning
            </span>
            {" "}
            <span>
              Kitchens & Wardrobes
            </span>
            {" "}
            <span>
              Furniture & Materials
            </span>
            {" "}
            <span>
              Home Styling
            </span>
            {" "}
            <span>
              Renovation
            </span>
            {" "}
            <span>
              Warm Minimalism
            </span>
            {" "}
            <span>
              Timeless Design
            </span>
            {" "}
            <span>
              {"Natural Oak & Walnut"}
            </span>
            {" "}
            <span>
              Space Planning
            </span>
            {" "}
            <span>
              Kitchens & Wardrobes
            </span>
            {" "}
            <span>
              Furniture & Materials
            </span>
            {" "}
            <span>
              Home Styling
            </span>
            {" "}
            <span>
              Renovation
            </span>
            {" "}
            <span>
              Warm Minimalism
            </span>
            {" "}
            <span>
              Timeless Design
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
                    {"Why Form & Function"}
                  </p>
                  {" "}
                  <h2 className="section-title">
                    Designed for the home,
                    <br />
                    not for the trend cycle
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Every project starts with how you live. We plan the layout, choose the materials and finish the details so each decision serves a purpose.
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
                  Personalised Design
                </h3>
                {" "}
                <p>
                  Every home reflects the people living in it, never a repeated template.
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
                  Transparent Planning
                </h3>
                {" "}
                <p>
                  Clear scope, materials and timelines shared with you throughout.
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
                  Quality Craftsmanship
                </h3>
                {" "}
                <p>
                  Carefully sourced materials and skilled craftsmanship that last.
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
                  Dedicated Coordination
                </h3>
                {" "}
                <p>
                  One point of contact from concept to completion.
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
                  <img src={a3} alt="Natural textures and warm light in a finished living room" loading="lazy" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split-body reveal d-1">
                {" "}
                <p className="eyebrow">
                  {"The Form & Function Way"}
                </p>
                {" "}
                <h2 className="section-title">
                  Thoughtful work, done well
                </h2>
                {" "}
                <p className="lede">
                  Most projects begin with a conversation about your routine, your space and your budget. We design around that, then guide every step through to the final styling.
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
                        Discover together
                      </strong>
                      <p>
                        Concepts, mood boards and colour palettes to react to before we finalise.
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
                        Plan with clarity
                      </strong>
                      <p>
                        A clear scope, materials and budget shared at each stage.
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
                        Styled and complete
                      </strong>
                      <p>
                        We oversee installation and add the final layer of detail.
                      </p>
                    </div>
                    {" "}
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="counter-row"><div className="counter"><b>2019</b><span>Founded</span></div><div className="counter"><b>Bangalore</b><span>Based in</span></div><div className="counter"><b>4</b><span>Featured projects</span></div><div className="counter"><b>6</b><span>Core services</span></div></div><div style={{ marginTop: "1.8rem" }}>
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
                    What We Do
                  </p>
                  {" "}
                  <h2 className="section-title">
                    From space plans to styling
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Six services under one roof. If it makes your home work better and feel more like you, we can design it.
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
                  <img src={a4} alt="Complete residential interior in warm neutrals" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Design
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Residential Interior Design
                  </h3>
                  {" "}
                  <p>
                    Complete interior design for apartments, villas and independent homes, tailored to you.
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
                  <img src={a5} alt="Open-plan layout with clear circulation" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Planning
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Space Planning
                  </h3>
                  {" "}
                  <p>
                    Intelligent layouts that maximise space, improve movement and make everyday life easier.
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
                  <img src={a6} alt="Curated furniture and finishes in a calm interior" loading="lazy" />
                  {" "}
                  <span className="tag">
                    Selection
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-body">
                  {" "}
                  <h3>
                    Furniture & Material Selection
                  </h3>
                  {" "}
                  <p>
                    Furniture, lighting, finishes, fabrics and materials chosen to work together.
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
                    Featured Projects
                  </p>
                  {" "}
                  <h2 className="section-title">
                    Homes we are proud of
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                A selection of residential projects across Bangalore, each designed around the people who live there.
              </p>
              {" "}
            </div>
            {" "}
            <div className="portfolio-grid">
              {" "}
              <figure className="work reveal">
                {" "}
                <img src={a7} alt="Oak living room of The Willow Residence" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Whitefield · 3 BHK
                  </span>
                  <h3>
                    The Willow Residence
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-1">
                {" "}
                <img src={a8} alt="Stone and wood interior of Casa Verde" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Sarjapur Road · Villa
                  </span>
                  <h3>
                    Casa Verde
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-2">
                {" "}
                <img src={a9} alt="Compact home with smart storage, The Sunday Home" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Indiranagar · 2 BHK
                  </span>
                  <h3>
                    The Sunday Home
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal">
                {" "}
                <img src={a10} alt="Walnut cabinetry in The Aria Residence" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Jayanagar · 3 BHK
                  </span>
                  <h3>
                    The Aria Residence
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-1">
                {" "}
                <img src={a11} alt="Custom kitchen and wardrobe design" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Service · Storage
                  </span>
                  <h3>
                    Kitchen & Wardrobe Design
                  </h3>
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="work reveal d-2">
                {" "}
                <img src={a12} alt="Renovated interior with updated layout" loading="lazy" />
                {" "}
                <figcaption className="work-cap">
                  <span>
                    Service · Renovation
                  </span>
                  <h3>
                    {"Renovation & Remodeling"}
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
                    Our Process
                  </p>
                  {" "}
                  <h2 className="section-title">
                    From discovery to final styling
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                A calm, clear process so you always know what happens next.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-grid">
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  {"Discovery"}
                </h3>
                {" "}
                <p>
                  We learn about your lifestyle, requirements, preferences and budget.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-1">
                {" "}
                <h3>
                  {"Concept Development"}
                </h3>
                {" "}
                <p>
                  Mood boards, design concepts, colour palettes and initial layouts.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-2">
                {" "}
                <h3>
                  Design & Planning
                </h3>
                {" "}
                <p>
                  Finalised materials, furniture, lighting, technical drawings and specifications.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal d-3">
                {" "}
                <h3>
                  {"Execution"}
                </h3>
                {" "}
                <p>
                  We coordinate contractors, manage implementation and oversee the final installation.
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
                    Why Clients Choose Us
                  </p>
                  {" "}
                  <h2 className="section-title">
                    What to expect
                  </h2>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="lede">
                Our approach is built on clear communication and designs made for you.
              </p>
              {" "}
            </div>
            {" "}
            <div className="tm-grid">
              {" "}
              <figure className="quote-card reveal">
                {" "}
                <div className="stars" aria-label="Our commitment">
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
                  Personalised designs rather than repetitive templates, so your home reflects you.
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <img src={a13} alt="Form & Function Studio" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Our promise
                    </h3>
                    {" "}
                    <span>
                      Form & Function Studio
                    </span>
                    {" "}
                    <span className="project">
                      Personalised Design
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
                <div className="stars" aria-label="Our commitment">
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
                  Transparent planning and communication, with dedicated coordination from concept to completion.
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <img src={a14} alt="Form & Function Studio" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Our promise
                    </h3>
                    {" "}
                    <span>
                      Form & Function Studio
                    </span>
                    {" "}
                    <span className="project">
                      Clear Communication
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
              {"Let's design a home "}
              <em>
                you'll love
              </em>
            </h2>
            {" "}
            <p>
              Tell us about your space and what you need. We'll talk through your ideas, budget and timeline, with no obligation.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a className="btn btn-primary" href="quote.html">
                Book a Consultation
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
            <a className="brand" href="index.html" aria-label={"Form & Function Studio | Home"}>
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
                  Interior Design
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <p>
              A boutique residential interior design studio in Bangalore. Designed around the way you live.
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
                  Process
                </a>
              </li>
              {" "}
              <li>
                <a href="testimonial.html">
                  Why Us
                </a>
              </li>
              {" "}
              <li>
                <a href="quote.html">
                  Book a Consultation
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
                  Residential Interior Design
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Space Planning
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Kitchen & Wardrobe Design
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Furniture & Materials"}
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Home Styling
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Renovation & Remodeling"}
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
              The Studio
            </h4>
            {" "}
            <ul className="footer-contact">
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {" 2nd Floor, 12th Main Road, Indiranagar, Bangalore 560038"}
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {" "}
                <a href="tel:+919876543210">
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
                <a href="mailto:hello@formandfunction.studio">
                  hello@formandfunction.studio
                </a>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {" +91 98765 43210"}
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
              {" Form & Function Studio. All rights reserved."}
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
