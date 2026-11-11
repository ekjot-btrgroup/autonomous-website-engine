// Converted from the HTML template welding-services-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/service-1.webp";
import a4 from "./assets/service-2.webp";
import a5 from "./assets/service-3.webp";
import a6 from "./assets/service-4.webp";
import a7 from "./assets/service-5.webp";
import a8 from "./assets/service-6.webp";
import a9 from "./assets/service-7.webp";
import a10 from "./assets/service-8.webp";
import a11 from "./assets/about.webp";
import a12 from "./assets/team-1.webp";
import a13 from "./assets/team-2.webp";
import a14 from "./assets/team-3.webp";
import a15 from "./assets/team-4.webp";
import a16 from "./assets/testimonial-1.webp";
import a17 from "./assets/testimonial-2.webp";
import a18 from "./assets/testimonial-3.webp";
import a19 from "./assets/testimonial-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-welding-services-c91b">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Iron
              <span>
                Arc
              </span>
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                About
              </a>
              {" "}
              <a href="services.html" className="nav-link">
                Services
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Get a Quote
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img className="active" src={a0} alt="Welder working on structural steel beams in an industrial workshop" />
          {" "}
          <img src={a1} alt="Close-up of bright welding sparks on a metal joint" />
          {" "}
          <img src={a2} alt="Finished steel structure framework at a fabrication yard" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-accent" />
          {" "}
          <h1 className="hero-title">
            {"Precision Welding & "}
            <span>
              Metal Fabrication
            </span>
          </h1>
          {" "}
          <p className="hero-desc">
            From heavy structural steel to delicate aluminum work — IRONARC delivers certified welds, on-time fabrication, and a lifetime of built-to-last metal.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="services.html" className="btn btn--primary">
              Explore Services
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline">
              Get a Free Quote
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="stats-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="reveal">
              {" "}
              <div className="stat-number">
                25+
              </div>
              {" "}
              <div className="stat-label">
                Years of Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="stat-number">
                50K+
              </div>
              {" "}
              <div className="stat-label">
                Tons of Metal Welded
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="stat-number">
                3,200+
              </div>
              {" "}
              <div className="stat-label">
                Projects Completed
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="stat-number">
                85+
              </div>
              {" "}
              <div className="stat-label">
                Certified Welders
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
          <div className="section-header">
            {" "}
            <span className="section-tag reveal">
              What We Do
            </span>
            {" "}
            <h2 className="section-title reveal">
              Our Welding Services
            </h2>
            {" "}
            <p className="section-sub reveal">
              Eight core disciplines, one standard of quality. Every joint is inspected, every project is delivered on schedule, and every weld is guaranteed.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a3} alt="Structural steel beams being fabricated" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Structural Steel Fabrication
                </h3>
                {" "}
                <p className="service-card-desc">
                  Precision fabrication of beams, columns, and trusses for commercial and industrial buildings.
                </p>
                {" "}
                <span className="service-card-price">
                  From $850
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a4} alt="Custom metal fabrication work on a workbench" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Custom Metal Fabrication
                </h3>
                {" "}
                <p className="service-card-desc">
                  Bespoke metal components and assemblies built to your exact drawings and tolerances.
                </p>
                {" "}
                <span className="service-card-price">
                  From $1,200
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a5} alt="Pipe welding on an industrial pipeline" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  {"Pipe Welding & Fitting"}
                </h3>
                {" "}
                <p className="service-card-desc">
                  Certified pipe welding for high-pressure systems, process piping, and industrial lines.
                </p>
                {" "}
                <span className="service-card-price">
                  From $650
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a6} alt="TIG welding aluminum with precision" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Aluminum Welding (TIG)
                </h3>
                {" "}
                <p className="service-card-desc">
                  Clean, crack-free TIG welding of aluminum alloys for marine, automotive, and aerospace work.
                </p>
                {" "}
                <span className="service-card-price">
                  From $950
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a7} alt="Repair welding on heavy machinery" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Industrial Repair Welding
                </h3>
                {" "}
                <p className="service-card-desc">
                  Heavy-duty repairs for machinery, equipment, and structural components that extend service life.
                </p>
                {" "}
                <span className="service-card-price">
                  From $450
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a8} alt="Stainless steel fabrication for food-grade equipment" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Stainless Steel Fabrication
                </h3>
                {" "}
                <p className="service-card-desc">
                  Sanitary-grade stainless work for food processing, medical, and architectural projects.
                </p>
                {" "}
                <span className="service-card-price">
                  From $1,100
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a9} alt="Mobile welder performing on-site welding at a jobsite" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  On-Site Welding Services
                </h3>
                {" "}
                <p className="service-card-desc">
                  Fully equipped mobile units for emergency repairs, field installations, and maintenance.
                </p>
                {" "}
                <span className="service-card-price">
                  From $750
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <img className="service-card-img" src={a10} alt="Decorative metal railing and architectural metalwork" loading="lazy" />
              {" "}
              <div className="service-card-body">
                {" "}
                <h3 className="service-card-title">
                  Architectural Metalwork
                </h3>
                {" "}
                <p className="service-card-desc">
                  Custom railings, gates, staircases, and ornamental features designed to impress and endure.
                </p>
                {" "}
                <span className="service-card-price">
                  From $1,400
                </span>
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-split-img reveal">
              {" "}
              <img src={a11} alt="IRONARC welder inspecting a steel weld seam" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about-split-text reveal">
              {" "}
              <span className="section-tag">
                Built to Last
              </span>
              {" "}
              <h2 className="section-title section-title--light">
                25 Years of Strong Metal
              </h2>
              {" "}
              <p className="section-sub section-sub--light">
                IRONARC was founded on a simple idea: a weld should outlive the structure it holds together. Today we run a 40,000 sq ft fabrication facility backed by certified welders, licensed engineers, and a zero-compromise inspection program.
              </p>
              {" "}
              <ul className="about-checkList">
                {" "}
                <li>
                  {"AWS D1.1 & D1.6 certified welding procedures"}
                </li>
                {" "}
                <li>
                  In-house engineering, CAD detailing, and CNC cutting
                </li>
                {" "}
                <li>
                  MIG, TIG, Stick, and Flux-Cored processes under one roof
                </li>
                {" "}
                <li>
                  3-year workmanship warranty on every fabrication
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--primary">
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <span className="section-tag reveal">
              How It Works
            </span>
            {" "}
            <h2 className="section-title reveal">
              From Drawing to Delivery
            </h2>
            {" "}
            <p className="section-sub reveal">
              A transparent, four-step process that keeps you informed from the first sketch to the final inspection report.
            </p>
            {" "}
          </div>
          {" "}
          <div className="process-steps">
            {" "}
            <div className="process-step reveal">
              {" "}
              <span className="process-step-icon">
                💬
              </span>
              {" "}
              <h3>
                Consultation
              </h3>
              {" "}
              <p>
                We walk through your project, materials, loads, and timeline to scope the work and lock in a firm quote.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <span className="process-step-icon">
                📐
              </span>
              {" "}
              <h3>
                {"Design & Planning"}
              </h3>
              {" "}
              <p>
                Our engineers produce detailed shop drawings, material takeoffs, and welding procedure specs.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <span className="process-step-icon">
                ⚙️
              </span>
              {" "}
              <h3>
                Fabrication
              </h3>
              {" "}
              <p>
                Certified welders build your project with controlled heat input and full traceability on every joint.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <span className="process-step-icon">
                🚚
              </span>
              {" "}
              <h3>
                {"Delivery & Install"}
              </h3>
              {" "}
              <p>
                We deliver, lift, and install on-site with final inspection reports and as-built documentation.
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
      <section className="section section--muted">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <span className="section-tag reveal">
              The Crew
            </span>
            {" "}
            <h2 className="section-title reveal">
              Meet the Welders
            </h2>
            {" "}
            <p className="section-sub reveal">
              AWS-certified craftsmen and engineers who treat every bead like it carries their name — because it does.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <article className="team-card reveal">
              {" "}
              <img className="team-card-img" src={a12} alt="Mark Torres, Lead Welder and Fabricator" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h3 className="team-card-name">
                  Mark Torres
                </h3>
                {" "}
                <div className="team-card-role">
                  {"Lead Welder & Fabricator"}
                </div>
                {" "}
                <p className="team-card-bio">
                  15 years under the hood, AWS D1.1 certified. Mark runs the structural line and signs off on every critical weld.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal">
              {" "}
              <img className="team-card-img" src={a13} alt="Elena Vasquez, Senior Engineer and Designer" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h3 className="team-card-name">
                  Elena Vasquez
                </h3>
                {" "}
                <div className="team-card-role">
                  {"Senior Engineer & Designer"}
                </div>
                {" "}
                <p className="team-card-bio">
                  A structural engineer who turns rough sketches into precise shop drawings and code-compliant assemblies.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal">
              {" "}
              <img className="team-card-img" src={a14} alt="David Chen, Master TIG Welder" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h3 className="team-card-name">
                  David Chen
                </h3>
                {" "}
                <div className="team-card-role">
                  Master TIG Welder
                </div>
                {" "}
                <p className="team-card-bio">
                  The go-to for aluminum and stainless. David's TIG work is the reason aerospace shops keep calling back.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal">
              {" "}
              <img className="team-card-img" src={a15} alt="Sarah Okafor, Project Manager and QA Lead" loading="lazy" />
              {" "}
              <div className="team-card-body">
                {" "}
                <h3 className="team-card-name">
                  Sarah Okafor
                </h3>
                {" "}
                <div className="team-card-role">
                  {"Project Manager & QA"}
                </div>
                {" "}
                <p className="team-card-bio">
                  Sarah keeps every job on schedule and every inspection report honest — nothing ships without her sign-off.
                </p>
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <span className="section-tag reveal">
              Word on the Shop Floor
            </span>
            {" "}
            <h2 className="section-title reveal">
              What Clients Say
            </h2>
            {" "}
            <p className="section-sub reveal">
              Contractors, plant managers, and architects who trust IRONARC with their most demanding metal.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <article className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "IRONARC fabricated the structural steel for our new distribution center and beat the schedule by two weeks. Zero rework — the inspection went through on the first pass."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img className="testimonial-avatar" src={a16} alt="Portrait of Thomas R." loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Thomas R.
                  </div>
                  {" "}
                  <div className="testimonial-company">
                    Construction Manager, Turner Build
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "Their TIG work on our aluminum hulls is flawless. Clean beads, no porosity, and they always meet our tolerance specs. They're our only outside weld shop now."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img className="testimonial-avatar" src={a17} alt="Portrait of Laura M." loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Laura M.
                  </div>
                  {" "}
                  <div className="testimonial-company">
                    Owner, Great Lakes Marine
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "When our stamping press frame cracked mid-production, IRONARC's mobile unit had us running again in 36 hours. Saved us a week of downtime."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img className="testimonial-avatar" src={a18} alt="Portrait of James K." loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    James K.
                  </div>
                  {" "}
                  <div className="testimonial-company">
                    Plant Manager, Midwest Steel
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testimonial-text">
                "The architectural staircase they built for our lobby is a showpiece. Beautiful welds, honest pricing, and they installed it without a scratch on the marble."
              </p>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img className="testimonial-avatar" src={a19} alt="Portrait of Priya S." loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Priya S.
                  </div>
                  {" "}
                  <div className="testimonial-company">
                    Architect, Studio Dwell
                  </div>
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
      <section className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-banner-title">
            Got a Project in the Works?
          </h2>
          {" "}
          <p className="cta-banner-desc">
            Send us your drawings or describe your job — we'll respond with a free, no-obligation quote within 24 hours.
          </p>
          {" "}
          <a href="contact.html" className="btn btn--primary">
            Get a Free Quote
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand">
                Iron
                <span>
                  Arc
                </span>
              </div>
              {" "}
              <p className="footer-desc">
                Certified welding and metal fabrication for industry, construction, and design — built to outlast the structure it holds together.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Explore
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html">
                  Home
                </a>
                {" "}
                <a href="about.html">
                  About
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
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html">
                  Structural Steel
                </a>
                {" "}
                <a href="services.html">
                  Custom Fabrication
                </a>
                {" "}
                <a href="services.html">
                  Pipe Welding
                </a>
                {" "}
                <a href="services.html">
                  On-Site Welding
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Contact
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html">
                  4820 Forge Street, Ironville
                </a>
                {" "}
                <a href="contact.html">
                  (555) 935-IRON
                </a>
                {" "}
                <a href="contact.html">
                  hello@ironarc.com
                </a>
                {" "}
                <a href="contact.html">
                  Mon–Sat: 7am–6pm
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" IRONARC. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Welded to last "}
              <code>
                ⚡
              </code>
            </span>
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
