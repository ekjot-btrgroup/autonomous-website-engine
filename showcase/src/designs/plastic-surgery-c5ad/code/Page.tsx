// Converted from the HTML template plastic-surgery-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/testimonial-1.webp";
import a1 from "./assets/testimonial-2.webp";
import a2 from "./assets/testimonial-3.webp";
import a3 from "./assets/hero.webp";
import a4 from "./assets/about.webp";
import a5 from "./assets/service-1.webp";
import a6 from "./assets/icon-1.webp";
import a7 from "./assets/service-2.webp";
import a8 from "./assets/icon-2.webp";
import a9 from "./assets/service-3.webp";
import a10 from "./assets/icon-3.webp";
import a11 from "./assets/service-4.webp";
import a12 from "./assets/icon-4.webp";
import a13 from "./assets/service-5.webp";
import a14 from "./assets/icon-5.webp";
import a15 from "./assets/service-6.webp";
import a16 from "./assets/icon-6.webp";
import a17 from "./assets/icon-7.webp";
import a18 from "./assets/icon-8.webp";
import a19 from "./assets/icon-9.webp";
import a20 from "./assets/icon-10.webp";
import a21 from "./assets/team-1.webp";
import a22 from "./assets/team-2.webp";
import a23 from "./assets/team-3.webp";
import a24 from "./assets/team-4.webp";
import a25 from "./assets/instagram-1.webp";
import a26 from "./assets/instagram-2.webp";
import a27 from "./assets/instagram-3.webp";
import a28 from "./assets/instagram-4.webp";
import a29 from "./assets/instagram-5.webp";
import a30 from "./assets/instagram-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400;1,6..72,500&family=Manrope:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-plastic-surgery-c5ad">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="topbar">
          {" "}
          <div className="container topbar-inner">
            {" "}
            <span className="topbar-item">
              Mon – Sat · 9:00 – 19:00
            </span>
            {" "}
            <span className="topbar-item">
              +1 (212) 555-0184
            </span>
            {" "}
            <span className="topbar-item topbar-link">
              <a href="appointment.html">
                Patient Portal
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <nav className="navbar">
          {" "}
          <div className="container nav-inner">
            {" "}
            <a className="brand" href="index.html" aria-label="Plasery home">
              {" "}
              <span className="brand-mark">
                P
              </span>
              {" "}
              <span>
                Plasery
              </span>
              {" "}
            </a>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav-links">
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
                  Treatments
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
                  Stories
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
              <li className="nav-cta">
                <a className="btn btn--primary btn--sm" href="appointment.html">
                  Book Consultation
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </nav>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="container hero-inner">
          {" "}
          <div className="hero-content reveal">
            {" "}
            <span className="hero-eyebrow">
              {"Aesthetic & Plastic Surgery Clinic"}
            </span>
            {" "}
            <h1 className="hero-title">
              {"Beauty, in its most "}
              <span className="serif-accent">
                natural
              </span>
              {" form."}
            </h1>
            {" "}
            <p className="hero-sub">
              Plasery blends surgical precision with gentle artistry — a calm, private clinic where every treatment is designed to refine, never to change who you are.
            </p>
            {" "}
            <div className="hero-cta">
              {" "}
              <a className="btn btn--primary btn--lg" href="appointment.html">
                Book a Consultation
              </a>
              {" "}
              <a className="btn btn--ghost btn--lg" href="service.html">
                Explore Treatments
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-trust">
              {" "}
              <div className="trust-avatars">
                {" "}
                <img src={a0} alt="Patient review" />
                {" "}
                <img src={a1} alt="Patient review" />
                {" "}
                <img src={a2} alt="Patient review" />
                {" "}
              </div>
              {" "}
              <span className="trust-text">
                <strong>
                  2,400+
                </strong>
                {" patients cared for"}
                <br />
                <strong>
                  4.9★
                </strong>
                {" average clinic rating"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-visual reveal reveal-delay-1">
            {" "}
            <div className="hero-frame">
              {" "}
              <img src={a3} alt="Serene modern aesthetic clinic interior" width="1920" height="1080" />
              {" "}
            </div>
            {" "}
            <div className="hero-float float-card--1">
              {" "}
              <span className="dot" />
              {" "}
              <span>
                Next available · Thu 09:30
              </span>
              {" "}
            </div>
            {" "}
            <div className="hero-float float-card--2">
              {" "}
              <span className="num">
                97%
              </span>
              {" "}
              <span>
                patient satisfaction
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
      <div className="marquee" aria-hidden="true">
        {" "}
        <div className="marquee-track">
          {" "}
          <div className="marquee-item">
            {" "}
            <span>
              Rhinoplasty
            </span>
            <span>
              ✦
            </span>
            <span>
              Injectable Harmony
            </span>
            <span>
              ✦
            </span>
            <span>
              Body Contouring
            </span>
            <span>
              ✦
            </span>
            <span>
              Skin Rejuvenation
            </span>
            <span>
              ✦
            </span>
            <span>
              Breast Aesthetics
            </span>
            <span>
              ✦
            </span>
            <span>
              Facial Balance
            </span>
            <span>
              ✦
            </span>
            <span>
              Laser Resurfacing
            </span>
            <span>
              ✦
            </span>
            <span>
              Mommy Makeover
            </span>
            {" "}
          </div>
          {" "}
          <div className="marquee-item">
            {" "}
            <span>
              Rhinoplasty
            </span>
            <span>
              ✦
            </span>
            <span>
              Injectable Harmony
            </span>
            <span>
              ✦
            </span>
            <span>
              Body Contouring
            </span>
            <span>
              ✦
            </span>
            <span>
              Skin Rejuvenation
            </span>
            <span>
              ✦
            </span>
            <span>
              Breast Aesthetics
            </span>
            <span>
              ✦
            </span>
            <span>
              Facial Balance
            </span>
            <span>
              ✦
            </span>
            <span>
              Laser Resurfacing
            </span>
            <span>
              ✦
            </span>
            <span>
              Mommy Makeover
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container split">
          {" "}
          <div className="split-image reveal">
            {" "}
            <div className="arch-frame">
              {" "}
              <img src={a4} alt="The Plasery care team in a bright consultation room" width="700" height="700" />
              {" "}
            </div>
            {" "}
            <div className="badge-float">
              {" "}
              <div className="num">
                15+
              </div>
              {" "}
              <div className="label">
                Years of care
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="split-content reveal reveal-delay-1">
            {" "}
            <span className="eyebrow">
              Welcome to Plasery
            </span>
            {" "}
            <h2 className="section-title">
              {"A quieter kind of "}
              <span className="serif-accent">
                excellence
              </span>
              {" in aesthetic medicine"}
            </h2>
            {" "}
            <p className="lead">
              We believe great results are never loud. Our surgeons, anaesthetists and skin specialists work as one team — advising honestly, planning meticulously and sculpting with restraint.
            </p>
            {" "}
            <p style={{ fontSize: "var(--fs-small)", color: "var(--ink-soft)", marginBottom: "1.2rem" }}>
              Every journey begins with a private consultation, a thorough medical review and a plan built around your anatomy, your lifestyle and the look you recognise as you.
            </p>
            {" "}
            <a className="btn btn--primary" href="about.html">
              Discover Our Story
            </a>
            {" "}
            <div className="stat-row">
              {" "}
              <div className="stat-item">
                {" "}
                <div className="num" data-count="2400">
                  0
                </div>
                {" "}
                <div className="label">
                  Procedures completed
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <div className="num" data-count="12">
                  0
                </div>
                {" "}
                <div className="label">
                  Board-certified doctors
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat-item">
                {" "}
                <div className="num">
                  <span data-count="97">
                    0
                  </span>
                  %
                </div>
                {" "}
                <div className="label">
                  Recommend us
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
      <section className="section section--tint">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              What we do
            </span>
            {" "}
            <h2 className="section-title">
              Treatments, refined
            </h2>
            {" "}
            <p className="section-sub">
              From subtle injectables to complete surgical transformation — each pathway is evidence-led and beautifully considered.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-img">
                <img src={a5} alt="Facial plastic surgery" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a6} alt="" />
                {" "}
                <h3>
                  Facial Plastic Surgery
                </h3>
                {" "}
                <p>
                  Facelift, blepharoplasty and facial balancing designed to lift gently and age gracefully — never mask-like.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore facial "}
                  <span>
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal reveal-delay-1">
              {" "}
              <div className="service-img">
                <img src={a7} alt="Breast aesthetics" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a8} alt="" />
                {" "}
                <h3>
                  Breast Aesthetics
                </h3>
                {" "}
                <p>
                  Augmentation, lift and reconstruction with a natural silhouette as the first and final goal.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore breast "}
                  <span>
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal reveal-delay-2">
              {" "}
              <div className="service-img">
                <img src={a9} alt="Body contouring" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a10} alt="" />
                {" "}
                <h3>
                  Body Contouring
                </h3>
                {" "}
                <p>
                  Liposculpture, abdominoplasty and mommy makeovers that restore proportion and confidence.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore body "}
                  <span>
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-img">
                <img src={a11} alt="Injectable treatments" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a12} alt="" />
                {" "}
                <h3>
                  Injectable Artistry
                </h3>
                {" "}
                <p>
                  Dermal fillers, wrinkle relaxers and lip enhancement with millimetre-level precision.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore injectables "}
                  <span>
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal reveal-delay-1">
              {" "}
              <div className="service-img">
                <img src={a13} alt="Skin and laser rejuvenation" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a14} alt="" />
                {" "}
                <h3>
                  {"Skin & Laser"}
                </h3>
                {" "}
                <p>
                  Fractional resurfacing, peels and medical-grade skincare for tone, texture and luminosity.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore skin "}
                  <span>
                    →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal reveal-delay-2">
              {" "}
              <div className="service-img">
                <img src={a15} alt="Rhinoplasty and facial harmony" width="550" height="350" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <img className="service-icon" src={a16} alt="" />
                {" "}
                <h3>
                  {"Rhinoplasty & Harmony"}
                </h3>
                {" "}
                <p>
                  Facial proportion analysis and nasal refinement that reads as simply, elegantly you.
                </p>
                {" "}
                <a className="service-link" href="service.html">
                  {"Explore harmony "}
                  <span>
                    →
                  </span>
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              Why Plasery
            </span>
            {" "}
            <h2 className="section-title">
              Care you can rest into
            </h2>
            {" "}
            <p className="section-sub">
              The details that make a clinic feel safe are, for us, the whole point.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-4" style={{ marginTop: "1rem" }}>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <img src={a17} alt="" />
              {" "}
              <h3>
                Board-Certified
              </h3>
              {" "}
              <p>
                Every surgeon is double board-certified with 15+ years of operating experience.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-1">
              {" "}
              <img src={a18} alt="" />
              {" "}
              <h3>
                Private Suites
              </h3>
              {" "}
              <p>
                Discreet recovery suites, dedicated nursing and zero shared waiting spaces.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-2">
              {" "}
              <img src={a19} alt="" />
              {" "}
              <h3>
                24/7 Aftercare
              </h3>
              {" "}
              <p>
                A dedicated care line with a nurse on call around the clock, every day.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-3">
              {" "}
              <img src={a20} alt="" />
              {" "}
              <h3>
                Transparent Plans
              </h3>
              {" "}
              <p>
                Clear pricing, flexible payment plans and honest guidance at every step.
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
      <section className="section section--tint">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              Your journey
            </span>
            {" "}
            <h2 className="section-title">
              A calm path, from first question to final reveal
            </h2>
            {" "}
          </div>
          {" "}
          <div className="steps" style={{ marginTop: "2.5rem" }}>
            {" "}
            <div className="step reveal">
              {" "}
              <div className="step-num">
                01
              </div>
              {" "}
              <h3>
                Private Consultation
              </h3>
              {" "}
              <p>
                An unhurried hour with your surgeon — anatomy, expectations and honest options.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step reveal reveal-delay-1">
              {" "}
              <div className="step-num">
                02
              </div>
              {" "}
              <h3>
                Personal Plan
              </h3>
              {" "}
              <p>
                A bespoke treatment plan with 3D imaging, timelines and fully transparent pricing.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step reveal reveal-delay-2">
              {" "}
              <div className="step-num">
                03
              </div>
              {" "}
              <h3>
                Gentle Procedure
              </h3>
              {" "}
              <p>
                Advanced techniques and attentive anaesthesia in our fully accredited theatre.
              </p>
              {" "}
            </div>
            {" "}
            <div className="step reveal reveal-delay-3">
              {" "}
              <div className="step-num">
                04
              </div>
              {" "}
              <h3>
                {"Recovery & Reveal"}
              </h3>
              {" "}
              <p>
                24/7 aftercare, private suites and follow-up reviews until you love what you see.
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              Patient stories
            </span>
            {" "}
            <h2 className="section-title">
              Heard in our own words
            </h2>
            {" "}
          </div>
          {" "}
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {" "}
            <blockquote className="testi-card reveal">
              {" "}
              <div className="testi-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-text">
                “From the first consultation I never felt rushed or sold to. The result is so natural that friends simply say I look rested.”
              </p>
              {" "}
              <div className="testi-author">
                {" "}
                <img src={a0} alt="Claire M." />
                {" "}
                <div>
                  <div className="name">
                    Claire M.
                  </div>
                  <div className="role">
                    Rhinoplasty
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </blockquote>
            {" "}
            <blockquote className="testi-card reveal reveal-delay-1">
              {" "}
              <div className="testi-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-text">
                “The private suite and the 24/7 care line made all the difference. I felt looked after long after I went home.”
              </p>
              {" "}
              <div className="testi-author">
                {" "}
                <img src={a1} alt="Nadia R." />
                {" "}
                <div>
                  <div className="name">
                    Nadia R.
                  </div>
                  <div className="role">
                    Mommy Makeover
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </blockquote>
            {" "}
            <blockquote className="testi-card reveal reveal-delay-2">
              {" "}
              <div className="testi-stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-text">
                “Subtle, careful, artistic. My injectable results look like me — just a softer, more rested version.”
              </p>
              {" "}
              <div className="testi-author">
                {" "}
                <img src={a2} alt="Yasmin K." />
                {" "}
                <div>
                  <div className="name">
                    Yasmin K.
                  </div>
                  <div className="role">
                    Injectable Harmony
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </blockquote>
            {" "}
          </div>
          {" "}
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            {" "}
            <a className="btn btn--ghost" href="testimonial.html">
              Read More Stories
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--tint">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              The team
            </span>
            {" "}
            <h2 className="section-title">
              Hands you can trust
            </h2>
            {" "}
            <p className="section-sub">
              Surgeons, anaesthetists and skin specialists — one calm, skilled team.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-4" style={{ marginTop: "1rem" }}>
            {" "}
            <div className="team-card reveal">
              {" "}
              <img className="avatar" src={a21} alt="Dr. Amelia Hart" width="500" height="500" />
              {" "}
              <h3>
                Dr. Amelia Hart
              </h3>
              {" "}
              <div className="role">
                Chief Plastic Surgeon
              </div>
              {" "}
              <p className="bio">
                20 years of facial artistry, FACS-certified.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-1">
              {" "}
              <img className="avatar" src={a22} alt="Dr. Lucas Bennett" width="500" height="500" />
              {" "}
              <h3>
                Dr. Lucas Bennett
              </h3>
              {" "}
              <div className="role">
                {"Body & Reconstructive"}
              </div>
              {" "}
              <p className="bio">
                Precision contouring and reconstruction.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-2">
              {" "}
              <img className="avatar" src={a23} alt="Dr. Maya Rahman" width="500" height="500" />
              {" "}
              <h3>
                Dr. Maya Rahman
              </h3>
              {" "}
              <div className="role">
                {"Skin & Laser Medicine"}
              </div>
              {" "}
              <p className="bio">
                Medical dermatology and laser science.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-3">
              {" "}
              <img className="avatar" src={a24} alt="Dr. Noah Castellano" width="500" height="500" />
              {" "}
              <h3>
                Dr. Noah Castellano
              </h3>
              {" "}
              <div className="role">
                {"Anaesthesia & Recovery"}
              </div>
              {" "}
              <p className="bio">
                Calm, attentive perioperative care.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            {" "}
            <a className="btn btn--primary" href="team.html">
              Meet the Full Team
            </a>
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
          <div className="text-center reveal">
            {" "}
            <span className="eyebrow">
              From the clinic
            </span>
            {" "}
            <h2 className="section-title">
              Life at Plasery
            </h2>
            {" "}
            <p className="section-sub">
              Follow our daily rhythm on Instagram for results, education and behind-the-scenes calm.
            </p>
            {" "}
          </div>
          {" "}
          <div className="gallery-grid reveal" style={{ marginTop: "1rem" }}>
            {" "}
            <img src={a25} alt="Clinic detail 1" loading="lazy" />
            {" "}
            <img src={a26} alt="Clinic detail 2" loading="lazy" />
            {" "}
            <img src={a27} alt="Clinic detail 3" loading="lazy" />
            {" "}
            <img src={a28} alt="Clinic detail 4" loading="lazy" />
            {" "}
            <img src={a29} alt="Clinic detail 5" loading="lazy" />
            {" "}
            <img src={a30} alt="Clinic detail 6" loading="lazy" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--plum cta-band">
        {" "}
        <div className="container reveal">
          {" "}
          <span className="eyebrow">
            Begin today
          </span>
          {" "}
          <h2>
            Let's talk about your best self
          </h2>
          {" "}
          <p>
            Book a private, no-pressure consultation. We'll listen first — advice comes second.
          </p>
          {" "}
          <a className="btn btn--light btn--lg" href="appointment.html">
            Reserve Your Consultation
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
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <h3>
                Plasery
              </h3>
              {" "}
              <p>
                {"A serene plastic surgery & aesthetic clinic where medical excellence meets gentle artistry — beauty, in its most natural form."}
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Instagram">
                  IG
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  FB
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  YT
                </a>
                {" "}
                <a href="#" aria-label="TikTok">
                  TT
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Explore
              </h4>
              {" "}
              <ul>
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
                  <a href="team.html">
                    Our Team
                  </a>
                </li>
                {" "}
                <li>
                  <a href="testimonial.html">
                    Patient Stories
                  </a>
                </li>
                {" "}
                <li>
                  <a href="appointment.html">
                    Book Online
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
                Treatments
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="service.html">
                    Facial Surgery
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Breast Aesthetics
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Body Contouring
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Injectables
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Skin & Laser"}
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-newsletter">
              {" "}
              <h4>
                Stay in touch
              </h4>
              {" "}
              <p>
                Occasional letters on recovery, science and offers. No noise, ever.
              </p>
              {" "}
              <form data-form="" noValidate={true}>
                {" "}
                <div className="form-group">
                  {" "}
                  <label className="sr-only" htmlFor="nl-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                    Email address
                  </label>
                  {" "}
                  <input type="email" id="nl-email" name="email" placeholder="Your email address" required={true} />
                  {" "}
                  <button className="btn btn--primary" type="submit">
                    Subscribe
                  </button>
                  {" "}
                </div>
                {" "}
                <p className="form-ok">
                  Thank you — welcome to the list.
                </p>
                {" "}
                <p className="form-err">
                  Please enter a valid email address.
                </p>
                {" "}
              </form>
              {" "}
              <div className="footer-contact">
                {" "}
                <strong>
                  Plasery Clinic
                </strong>
                <br />
                {" 12 Meridian Avenue, Suite 400"}
                <br />
                {" New York, NY 10012"}
                <br />
                {" "}
                <a href="tel:+12125550184">
                  +1 (212) 555-0184
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
            <p>
              {"© "}
              <span data-year="">
                2025
              </span>
              {" Plasery Aesthetic Clinic. All rights reserved."}
            </p>
            {" "}
            <div className="footer-bottom-links">
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" "}
              <a href="#">
                Terms of Care
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
        </div>
        {" "}
      </footer>
      {" "}
      <a href="#" className="back-to-top" aria-label="Back to top">
        ↑
      </a>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
