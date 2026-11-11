// Converted from the HTML template water-park-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/feature-1.webp";
import a3 from "./assets/feature-2.webp";
import a4 from "./assets/feature-3.webp";
import a5 from "./assets/about.webp";
import a6 from "./assets/blog-1.webp";
import a7 from "./assets/blog-2.webp";
import a8 from "./assets/blog-3.webp";
import a9 from "./assets/team-1.webp";
import a10 from "./assets/team-2.webp";
import a11 from "./assets/team-3.webp";
import a12 from "./assets/payment.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-water-park-1db8">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              SPLASH
              <span className="logo-wave">
                WAVE
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
              <a href="features.html" className="nav-link">
                Attractions
              </a>
              {" "}
              <a href="blog.html" className="nav-link">
                Blog
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Buy Tickets
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
          <img className="active" src={a0} alt="Families splashing in the wave pool at SPLASHWAVE" />
          {" "}
          <img src={a1} alt="Twisting water slides above the main pool at SPLASHWAVE" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <span className="hero-badge reveal">
              🌊 Now Open — All Summer Long
            </span>
            {" "}
            <h1 className="hero-title reveal reveal--1">
              {"Make a Splash at "}
              <em>
                SPLASHWAVE
              </em>
            </h1>
            {" "}
            <p className="hero-sub reveal reveal--2">
              Twelve acres of slides, waves, and sunshine. From the 60-foot Kraken Drop to a lazy river made for floating, there's a wave with your name on it.
            </p>
            {" "}
            <div className="hero-actions reveal reveal--2">
              {" "}
              <a href="contact.html" className="btn btn--sun btn--lg">
                Buy Tickets
              </a>
              {" "}
              <a href="features.html" className="btn btn--outline btn--lg">
                Explore Attractions
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-badges reveal reveal--3">
              {" "}
              <span className="hero-chip">
                <b>
                  24
                </b>
                {" Slides & Rides"}
              </span>
              {" "}
              <span className="hero-chip">
                <b>
                  90+
                </b>
                {" Certified Lifeguards"}
              </span>
              {" "}
              <span className="hero-chip">
                <b>
                  2M+
                </b>
                {" Annual Guests"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero-wave" aria-hidden="true">
          {" "}
          <svg viewBox="0 0 1440 100" preserveaspectratio="none">
            <path d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,45 L1440,100 L0,100 Z" />
          </svg>
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
            <span className="eyebrow">
              🏄 Signature Attractions
            </span>
            {" "}
            <h2 className="section-title">
              {"Rides Worth the "}
              <em>
                Scream
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Every attraction is staffed by certified lifeguards and designed with the whole family in mind.
            </p>
            {" "}
          </div>
          {" "}
          <div className="attractions-grid">
            {" "}
            <article className="attraction-card reveal">
              {" "}
              <div className="attraction-media">
                {" "}
                <img src={a2} alt="Guests dropping down the tall Kraken Drop slide" loading="lazy" />
                {" "}
                <span className="tag-chip tag-chip--coral">
                  48 in +
                </span>
                {" "}
              </div>
              {" "}
              <div className="attraction-body">
                {" "}
                <h3>
                  The Kraken Drop
                </h3>
                {" "}
                <div className="attraction-meta">
                  <span>
                    60-ft free fall
                  </span>
                  <span>
                    Extreme thrill
                  </span>
                </div>
                {" "}
                <p>
                  A heart-pumping near-vertical drop that launches you through a dark, twisting tunnel before a splash landing.
                </p>
                {" "}
                <a href="features.html" className="attraction-link">
                  Ride details →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="attraction-card reveal reveal--1">
              {" "}
              <div className="attraction-media">
                {" "}
                <img src={a3} alt="Guests floating down the calm Lazy Lagoon River" loading="lazy" />
                {" "}
                <span className="tag-chip tag-chip--aqua">
                  All ages
                </span>
                {" "}
              </div>
              {" "}
              <div className="attraction-body">
                {" "}
                <h3>
                  Lazy Lagoon River
                </h3>
                {" "}
                <div className="attraction-meta">
                  <span>
                    1,200-ft loop
                  </span>
                  <span>
                    Tube included
                  </span>
                </div>
                {" "}
                <p>
                  Drift along our slow, sparkling river past waterfalls, mist bridges, and a tropical grotto. Zero effort required.
                </p>
                {" "}
                <a href="features.html" className="attraction-link">
                  Ride details →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="attraction-card reveal reveal--2">
              {" "}
              <div className="attraction-media">
                {" "}
                <img src={a4} alt="Toddlers playing in the zero-depth Splash Cove splash pad" loading="lazy" />
                {" "}
                <span className="tag-chip tag-chip--sun">
                  Under 54 in
                </span>
                {" "}
              </div>
              {" "}
              <div className="attraction-body">
                {" "}
                <h3>
                  Splash Cove Kids Zone
                </h3>
                {" "}
                <div className="attraction-meta">
                  <span>
                    Zero-depth entry
                  </span>
                  <span>
                    Shaded play
                  </span>
                </div>
                {" "}
                <p>
                  A sunny, zero-depth splash pad with mini slides, tipping buckets, and water cannons sized just right for little explorers.
                </p>
                {" "}
                <a href="features.html" className="attraction-link">
                  Ride details →
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="about-band">
            {" "}
            <div className="about-media reveal">
              {" "}
              <img src={a5} alt="Aerial view of the SPLASHWAVE pools and green park grounds" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about-copy reveal reveal--1">
              {" "}
              <span className="eyebrow">
                🎡 About the Park
              </span>
              {" "}
              <h2>
                {"Where Every Wave Ends in a "}
                <em>
                  Smile
                </em>
              </h2>
              {" "}
              <p>
                SPLASHWAVE opened its gates in 2014 with a simple promise: give families a safe, sparkling place to spend a perfect summer day. Today we're twelve acres of slides, waves, and sunshine — and we still test every ride every morning.
              </p>
              {" "}
              <ul className="about-points">
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Daily water-quality testing and lifejackets on every deck"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Certified lifeguards watching every pool and slide"}
                </li>
                {" "}
                <li>
                  <span className="check">
                    ✓
                  </span>
                  {" Clean, shaded cabanas and family rest areas"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--aqua">
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
      <section className="section section--deep">
        {" "}
        <div className="band-wave" aria-hidden="true">
          {" "}
          <svg viewBox="0 0 1440 100" preserveaspectratio="none">
            <path d="M0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,45 L1440,0 L0,0 Z" />
          </svg>
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-icon">
                🎢
              </div>
              {" "}
              <div className="stat-num">
                24
              </div>
              {" "}
              <div className="stat-label">
                {"Slides & Rides"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal--1">
              {" "}
              <div className="stat-icon">
                🛟
              </div>
              {" "}
              <div className="stat-num">
                90+
              </div>
              {" "}
              <div className="stat-label">
                Certified Lifeguards
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal--2">
              {" "}
              <div className="stat-icon">
                👨‍👩‍👧‍👦
              </div>
              {" "}
              <div className="stat-num">
                2M+
              </div>
              {" "}
              <div className="stat-label">
                Guests Each Season
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal--3">
              {" "}
              <div className="stat-icon">
                🌴
              </div>
              {" "}
              <div className="stat-num">
                12
              </div>
              {" "}
              <div className="stat-label">
                Acres of Fun
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              {"🎟️ Tickets & Passes"}
            </span>
            {" "}
            <h2 className="section-title">
              {"Pick Your "}
              <em>
                Pass
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Kids 3 and under ride free. Group rates are available for parties of 15 or more.
            </p>
            {" "}
          </div>
          {" "}
          <div className="tickets-grid">
            {" "}
            <article className="ticket-card reveal">
              {" "}
              <h3 className="ticket-name">
                Day Pass
              </h3>
              {" "}
              <div className="ticket-price">
                $29
                <small>
                  {" / day"}
                </small>
              </div>
              {" "}
              <p className="ticket-desc">
                One full day of slides, pools, and sunshine.
              </p>
              {" "}
              <ul className="ticket-features">
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" All slides & pools included"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" Locker included"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" 10% off food & drinks"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--sun">
                Buy Day Pass
              </a>
              {" "}
            </article>
            {" "}
            <article className="ticket-card ticket-card--featured reveal reveal--1">
              {" "}
              <span className="ticket-flag">
                ⭐ Most Popular
              </span>
              {" "}
              <h3 className="ticket-name">
                Family Pass
              </h3>
              {" "}
              <div className="ticket-price">
                $89
                <small>
                  {" / family"}
                </small>
              </div>
              {" "}
              <p className="ticket-desc">
                2 adults + up to 3 kids, all day long.
              </p>
              {" "}
              <ul className="ticket-features">
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" 2 adults + 3 kids admission"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" Priority lane access on top slides"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" Free parking & 15% off food"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--white">
                Buy Family Pass
              </a>
              {" "}
            </article>
            {" "}
            <article className="ticket-card reveal reveal--2">
              {" "}
              <h3 className="ticket-name">
                Season Pass
              </h3>
              {" "}
              <div className="ticket-price">
                $149
                <small>
                  {" / season"}
                </small>
              </div>
              {" "}
              <p className="ticket-desc">
                Unlimited waves from May through September.
              </p>
              {" "}
              <ul className="ticket-features">
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" Unlimited visits all season"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" 4 free guest passes"}
                </li>
                {" "}
                <li>
                  <span className="tick">
                    ✓
                  </span>
                  {" 20% off food & merch"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html" className="btn btn--coral">
                Buy Season Pass
              </a>
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
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              📰 Park News
            </span>
            {" "}
            <h2 className="section-title">
              {"Fresh from the "}
              <em>
                Waterfront
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Planning tips, safety stories, and behind-the-scenes notes from the crew.
            </p>
            {" "}
          </div>
          {" "}
          <div className="blog-grid">
            {" "}
            <article className="blog-card reveal">
              {" "}
              <div className="blog-media">
                <img src={a6} alt="A family enjoying a sunny day at the water park" loading="lazy" />
              </div>
              {" "}
              <div className="blog-body">
                {" "}
                <div className="blog-meta">
                  <span>
                    Jun 12, 2026
                  </span>
                  <span className="dot">
                    •
                  </span>
                  <span>
                    5 min read
                  </span>
                </div>
                {" "}
                <h3>
                  7 Tips for a Perfect Family Day at the Water Park
                </h3>
                {" "}
                <p>
                  Arrive early, book a cabana, and pack the right gear — our guest team's playbook for a zero-stress visit.
                </p>
                {" "}
                <a href="blog.html" className="blog-link">
                  Read more →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card reveal reveal--1">
              {" "}
              <div className="blog-media">
                <img src={a7} alt="A lifeguard keeping watch from a tall chair" loading="lazy" />
              </div>
              {" "}
              <div className="blog-body">
                {" "}
                <div className="blog-meta">
                  <span>
                    Jun 28, 2026
                  </span>
                  <span className="dot">
                    •
                  </span>
                  <span>
                    4 min read
                  </span>
                </div>
                {" "}
                <h3>
                  Safety First: How Our Lifeguards Keep You Covered
                </h3>
                {" "}
                <p>
                  Meet the training, the drills, and the daily checks that make SPLASHWAVE one of the safest parks around.
                </p>
                {" "}
                <a href="blog.html" className="blog-link">
                  Read more →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card reveal reveal--2">
              {" "}
              <div className="blog-media">
                <img src={a8} alt="A beach bag packed with sunscreen, towels and water bottles" loading="lazy" />
              </div>
              {" "}
              <div className="blog-body">
                {" "}
                <div className="blog-meta">
                  <span>
                    Jul 09, 2026
                  </span>
                  <span className="dot">
                    •
                  </span>
                  <span>
                    3 min read
                  </span>
                </div>
                {" "}
                <h3>
                  Beat the Heat: What to Pack for Your Visit
                </h3>
                {" "}
                <p>
                  From rash guards to refillable bottles, the ten things we recommend every guest brings through the gates.
                </p>
                {" "}
                <a href="blog.html" className="blog-link">
                  Read more →
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              🛟 The Crew
            </span>
            {" "}
            <h2 className="section-title">
              {"The People Behind the "}
              <em>
                Waves
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Trained, tested, and always smiling — meet a few of the crew keeping the park safe and sunny.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <article className="team-card reveal">
              {" "}
              <div className="team-media">
                <img src={a9} alt="Maya Torres, Head Lifeguard at SPLASHWAVE" loading="lazy" />
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  Maya Torres
                </h3>
                {" "}
                <div className="team-role">
                  Head Lifeguard
                </div>
                {" "}
                <p>
                  Ten summers on the deck and counting. Maya leads our lifeguard team and loves watching first-timers conquer the big slides.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal reveal--1">
              {" "}
              <div className="team-media">
                <img src={a10} alt="Diego Ramos, Slide Operations Lead at SPLASHWAVE" loading="lazy" />
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  Diego Ramos
                </h3>
                {" "}
                <div className="team-role">
                  Slide Operations Lead
                </div>
                {" "}
                <p>
                  Diego inspects every slide before the gates open. If it isn't perfect, it doesn't spin — that's his rule.
                </p>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="team-card reveal reveal--2">
              {" "}
              <div className="team-media">
                <img src={a11} alt="Priya Nair, Guest Experience Manager at SPLASHWAVE" loading="lazy" />
              </div>
              {" "}
              <div className="team-body">
                {" "}
                <h3>
                  Priya Nair
                </h3>
                {" "}
                <div className="team-role">
                  Guest Experience Manager
                </div>
                {" "}
                <p>
                  From lost flip-flops to birthday parties, Priya makes sure every family leaves with a story worth telling.
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
          <div className="newsletter-card reveal">
            {" "}
            <span className="eyebrow">
              💌 Wave Letters
            </span>
            {" "}
            <h2 className="section-title">
              {"Get the Good "}
              <em>
                News
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Season openings, flash ticket deals, and new-ride reveals — straight to your inbox. No spam, just splash.
            </p>
            {" "}
            <form className="form newsletter-form" data-form="" noValidate={true}>
              {" "}
              <div className="form-group" style={{ flex: "1" }}>
                {" "}
                <label className="form-label" htmlFor="news-email" style={{ position: "absolute", left: "-9999px" }}>
                  Email address
                </label>
                {" "}
                <input className="form-input" type="email" id="news-email" name="email" placeholder="you@example.com" required={true} />
                {" "}
              </div>
              {" "}
              <button className="btn btn--coral" type="submit">
                Subscribe
              </button>
              {" "}
              <div className="form-ok">
                You're on the list! Watch your inbox for the next wave of news. 🌊
              </div>
              {" "}
              <div className="form-err">
                Please enter a valid email to subscribe.
              </div>
              {" "}
            </form>
            {" "}
          </div>
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
              <div className="footer-brand-logo">
                SPLASH
                <span className="logo-wave">
                  WAVE
                </span>
              </div>
              {" "}
              <p className="footer-brand-desc">
                A family water park built on sunshine, safe water, and really, really big slides. Twelve acres of fun since 2014.
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
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                {" "}
                <a href="features.html" className="footer-link">
                  Attractions
                </a>
                {" "}
                <a href="blog.html" className="footer-link">
                  Park News
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
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
                Plan Your Visit
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html" className="footer-link">
                  Buy Tickets
                </a>
                {" "}
                <a href="features.html" className="footer-link">
                  Ride Height Guide
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Group Bookings
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Hours
              </h4>
              {" "}
              <div className="footer-hours">
                {" "}
                <span>
                  <b>
                    Mon – Fri
                  </b>
                  {" 9:00am – 6:00pm"}
                </span>
                {" "}
                <span>
                  <b>
                    Sat – Sun
                  </b>
                  {" 8:00am – 8:00pm"}
                </span>
                {" "}
                <span>
                  <b>
                    Peak Season
                  </b>
                  {" May – September"}
                </span>
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
              {" SPLASHWAVE Water Park. All rights reserved."}
            </span>
            {" "}
            <span className="footer-payments">
              <span>
                We accept
              </span>
              <img src={a12} alt="Accepted payment methods: Visa, Mastercard, Amex, PayPal" loading="lazy" />
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
