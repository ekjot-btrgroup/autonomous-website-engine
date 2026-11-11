// Converted from the HTML template nature-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/about-1.webp";
import a4 from "./assets/causes-1.webp";
import a5 from "./assets/causes-2.webp";
import a6 from "./assets/causes-3.webp";
import a7 from "./assets/causes-4.webp";
import a8 from "./assets/events-1.webp";
import a9 from "./assets/events-2.webp";
import a10 from "./assets/events-3.webp";
import a11 from "./assets/volunteers-bg.webp";
import a12 from "./assets/gallery-1.webp";
import a13 from "./assets/gallery-2.webp";
import a14 from "./assets/gallery-3.webp";
import a15 from "./assets/gallery-4.webp";
import a16 from "./assets/service-1.webp";
import a17 from "./assets/gallery-footer-1.webp";
import a18 from "./assets/gallery-footer-2.webp";
import a19 from "./assets/gallery-footer-3.webp";
import a20 from "./assets/gallery-footer-4.webp";
import a21 from "./assets/gallery-footer-5.webp";
import a22 from "./assets/gallery-footer-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-nature-fc3b">
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html" aria-label="Wildrealm Trust — home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              {" "}
            </span>
            {" Wildrealm"}
            <em>
              Trust
            </em>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav aria-label="Primary navigation">
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
                <a className="nav-link" href="causes.html">
                  Causes
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="events.html">
                  Events
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="gallery.html">
                  Gallery
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="volunteer.html">
                  Volunteer
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
          <a className="btn btn-accent header-cta" href="donation.html">
            Donate now
          </a>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        <section className="hero" aria-label="Welcome to Wildrealm Trust">
          {" "}
          <div className="hero-bg" aria-hidden="true">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
            <img src={a2} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" aria-hidden="true" />
          {" "}
          <div className="container hero-content">
            {" "}
            <span className="hero-badge">
              🌍 A registered conservation charity
            </span>
            {" "}
            <h1 className="display-1">
              Rooted in hope.
              <br />
              {"Growing "}
              <span className="highlight">
                wild
              </span>
              {" again."}
            </h1>
            {" "}
            <p className="lead">
              Wildrealm Trust restores forests, shields wildlife and brings a growing community of volunteers, donors and dreamers together — because the wild deserves a second chance.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a className="btn btn-accent btn-lg" href="donation.html">
                {"Donate now "}
                <span className="arrow">
                  →
                </span>
              </a>
              {" "}
              <a className="btn btn-ghost btn-lg" href="volunteer.html">
                Become a volunteer
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <a className="hero-scroll" href="#intro" aria-label="Scroll to content">
            {" "}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
            {" "}
          </a>
          {" "}
        </section>
        {" "}
        <section className="feature-strip" aria-label="Our impact at a glance">
          {" "}
          <div className="container feature-grid">
            {" "}
            <div className="feature-cell reveal">
              {" "}
              <span className="fi" aria-hidden="true">
                🌳
              </span>
              {" "}
              <div>
                <b>
                  1.2M+ trees planted
                </b>
                <span>
                  since we started in 2011
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-cell reveal" style={{ "--reveal-delay": ".08s" }}>
              {" "}
              <span className="fi" aria-hidden="true">
                🦉
              </span>
              {" "}
              <div>
                <b>
                  34 protected reserves
                </b>
                <span>
                  across three bioregions
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-cell reveal" style={{ "--reveal-delay": ".16s" }}>
              {" "}
              <span className="fi" aria-hidden="true">
                🙌
              </span>
              {" "}
              <div>
                <b>
                  8,400+ volunteers
                </b>
                <span>
                  planting, patrolling, restoring
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature-cell reveal" style={{ "--reveal-delay": ".24s" }}>
              {" "}
              <span className="fi" aria-hidden="true">
                💧
              </span>
              {" "}
              <div>
                <b>
                  2,600 ha restored
                </b>
                <span>
                  {"of forest, riverbank & wetland"}
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section" id="intro">
          {" "}
          <div className="container split">
            {" "}
            <div className="media-frame reveal reveal-left">
              {" "}
              <img className="frame-img" src={a3} alt="Volunteers planting native seedlings on a restored hillside" />
              {" "}
              <div className="float-chip" aria-hidden="true">
                {" "}
                <span className="fi">
                  🌱
                </span>
                {" "}
                <div>
                  <b>
                    14 years
                  </b>
                  <span>
                    of growing wild
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal reveal-right">
              {" "}
              <span className="eyebrow">
                Who we are
              </span>
              {" "}
              <h2>
                Small team. Big roots. A growing wild community.
              </h2>
              {" "}
              <p className="lead">
                We started with one shovel, three friends and a hillside that had lost everything. Today Wildrealm is a nationwide conservation charity — still shovels first, still community first.
              </p>
              {" "}
              <p>
                Everything we do is grounded in local partnerships: landowners, schools, indigenous communities and scientists working shoulder to shoulder to bring ecosystems back to life.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Science-led planting that restores native diversity
                </li>
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Wildlife corridors reconnecting fragmented habitats
                </li>
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Every dollar tracked, every tree geotagged
                </li>
                {" "}
              </ul>
              {" "}
              <a className="btn btn-primary" href="about.html">
                {"Our story "}
                <span className="arrow">
                  →
                </span>
              </a>
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
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Our impact
              </span>
              {" "}
              <h2>
                Hope you can measure
              </h2>
              {" "}
              <p className="lead">
                Real numbers from real ground. Here is the difference your support is making, season after season.
              </p>
              {" "}
            </div>
            {" "}
            <div className="stats-grid">
              {" "}
              <div className="stat reveal">
                <span className="stat-num">
                  1.2
                  <span className="suffix">
                    M
                  </span>
                </span>
                <div className="stat-label">
                  Trees planted
                </div>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".1s" }}>
                <span className="stat-num">
                  2,600
                  <span className="suffix">
                    ha
                  </span>
                </span>
                <div className="stat-label">
                  Land restored
                </div>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".2s" }}>
                <span className="stat-num">
                  184
                  <span className="suffix">
                    +
                  </span>
                </span>
                <div className="stat-label">
                  Species protected
                </div>
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".3s" }}>
                <span className="stat-num">
                  8.4
                  <span className="suffix">
                    K
                  </span>
                </span>
                <div className="stat-label">
                  Volunteers strong
                </div>
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
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Current causes
              </span>
              {" "}
              <h2>
                Where your kindness goes
              </h2>
              {" "}
              <p className="lead">
                Four urgent missions, one shared goal: wild places that work for every living thing.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-4">
              {" "}
              <article className="card cause-card reveal">
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a4} alt="Reforestation workers planting trees in a cleared forest" />
                  {" "}
                  <span className="cause-tag">
                    Reforestation
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="cause-body">
                  {" "}
                  <h3>
                    Rekindle the Canopy
                  </h3>
                  {" "}
                  <p>
                    Restoring 500 hectares of native woodland around the Mistwater range.
                  </p>
                  {" "}
                  <div className="progress" role="img" aria-label="72 percent funded">
                    <i style={{ width: "72%" }} />
                  </div>
                  {" "}
                  <div className="cause-meta">
                    <span>
                      $54,200 raised
                    </span>
                    <span>
                      Goal $75,000
                    </span>
                  </div>
                  {" "}
                  <a className="btn btn-primary btn-block" href="donation.html">
                    Support this cause
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card cause-card reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a5} alt="Wildlife ranger monitoring an endangered animal" />
                  {" "}
                  <span className="cause-tag">
                    Wildlife
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="cause-body">
                  {" "}
                  <h3>
                    Guard the Wild Herd
                  </h3>
                  {" "}
                  <p>
                    Night patrols, camera traps and vet care for the last wild deer herds.
                  </p>
                  {" "}
                  <div className="progress" role="img" aria-label="58 percent funded">
                    <i style={{ width: "58%" }} />
                  </div>
                  {" "}
                  <div className="cause-meta">
                    <span>
                      $31,800 raised
                    </span>
                    <span>
                      Goal $55,000
                    </span>
                  </div>
                  {" "}
                  <a className="btn btn-primary btn-block" href="donation.html">
                    Support this cause
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card cause-card reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a6} alt="Volunteers restoring a wetland and riverbank" />
                  {" "}
                  <span className="cause-tag">
                    Wetlands
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="cause-body">
                  {" "}
                  <h3>
                    Heal the Blue Veins
                  </h3>
                  {" "}
                  <p>
                    Rebuilding 40 km of riverbank and wetland to clean our waterways.
                  </p>
                  {" "}
                  <div className="progress" role="img" aria-label="86 percent funded">
                    <i style={{ width: "86%" }} />
                  </div>
                  {" "}
                  <div className="cause-meta">
                    <span>
                      $63,900 raised
                    </span>
                    <span>
                      Goal $74,000
                    </span>
                  </div>
                  {" "}
                  <a className="btn btn-primary btn-block" href="donation.html">
                    Support this cause
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card cause-card reveal" style={{ "--reveal-delay": ".3s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a7} alt="Community garden and native seed nursery volunteers" />
                  {" "}
                  <span className="cause-tag">
                    Community
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="cause-body">
                  {" "}
                  <h3>
                    Root School Gardens
                  </h3>
                  {" "}
                  <p>
                    Seeding 60 school and neighbourhood gardens with native plants.
                  </p>
                  {" "}
                  <div className="progress" role="img" aria-label="41 percent funded">
                    <i style={{ width: "41%" }} />
                  </div>
                  {" "}
                  <div className="cause-meta">
                    <span>
                      $18,400 raised
                    </span>
                    <span>
                      Goal $45,000
                    </span>
                  </div>
                  {" "}
                  <a className="btn btn-primary btn-block" href="donation.html">
                    Support this cause
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <p className="reveal" style={{ textAlign: "center", marginTop: "2.4rem", marginBottom: "0" }}>
              {" "}
              <a className="btn btn-outline" href="causes.html">
                {"Explore all causes "}
                <span className="arrow">
                  →
                </span>
              </a>
              {" "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <div className="ticker" aria-hidden="true">
          {" "}
          <div className="ticker-track">
            {" "}
            <span>
              Restore
            </span>
            <span>
              Reforest
            </span>
            <span>
              Protect
            </span>
            <span>
              Volunteer
            </span>
            <span>
              Donate
            </span>
            <span>
              Grow wild
            </span>
            {" "}
            <span>
              Restore
            </span>
            <span>
              Reforest
            </span>
            <span>
              Protect
            </span>
            <span>
              Volunteer
            </span>
            <span>
              Donate
            </span>
            <span>
              Grow wild
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Upcoming events
              </span>
              {" "}
              <h2>
                Come get your hands dirty
              </h2>
              {" "}
              <p className="lead">
                Planting days, nature walks and river clean-ups — the wild is more fun with friends.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card event-card reveal">
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a8} alt="Community tree planting day in the woods" />
                  {" "}
                  <div className="event-date">
                    <b>
                      14
                    </b>
                    <span>
                      Sep
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="event-body">
                  {" "}
                  <h3>
                    Mistwater Mega-Plant
                  </h3>
                  {" "}
                  <div className="event-meta">
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Mistwater Range
                    </span>
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      9:00 am
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Plant 6,000 native saplings and help beat our one-day record.
                  </p>
                  {" "}
                  <a className="btn btn-outline" href="events.html">
                    Join event
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card event-card reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a9} alt="Guided wildlife watching walk" />
                  {" "}
                  <div className="event-date">
                    <b>
                      22
                    </b>
                    <span>
                      Sep
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="event-body">
                  {" "}
                  <h3>
                    Dawn Chorus Walk
                  </h3>
                  {" "}
                  <div className="event-meta">
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Elderpine Reserve
                    </span>
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      5:30 am
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    A gentle morning trek with our ornithologist to hear the reserve wake up.
                  </p>
                  {" "}
                  <a className="btn btn-outline" href="events.html">
                    Join event
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card event-card reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a10} alt="Volunteers cleaning a riverbank" />
                  {" "}
                  <div className="event-date">
                    <b>
                      05
                    </b>
                    <span>
                      Oct
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="event-body">
                  {" "}
                  <h3>
                    Riverbank Revival
                  </h3>
                  {" "}
                  <div className="event-meta">
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Fernwood Creek
                    </span>
                    {" "}
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      8:00 am
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Clean-up plus native re-planting along two kilometres of creek.
                  </p>
                  {" "}
                  <a className="btn btn-outline" href="events.html">
                    Join event
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <p className="reveal" style={{ textAlign: "center", marginTop: "2.4rem", marginBottom: "0" }}>
              {" "}
              <a className="btn btn-outline" href="events.html">
                {"See full calendar "}
                <span className="arrow">
                  →
                </span>
              </a>
              {" "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="volunteer-band" aria-label="Volunteer call to action">
          {" "}
          <div className="volunteer-band-bg" role="img" aria-label="Volunteers working together in the field">
            {" "}
            <img src={a11} alt="" />
            {" "}
          </div>
          {" "}
          <div className="volunteer-overlay" aria-hidden="true" />
          {" "}
          <div className="container volunteer-band-inner">
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow on-dark">
                Volunteer with us
              </span>
              {" "}
              <h2>
                Every pair of hands counts.
              </h2>
              {" "}
              <p>
                Join 8,400+ volunteers planting trees, monitoring wildlife and restoring rivers. No experience needed — just bring your boots and your heart.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn btn-accent btn-lg" href="volunteer.html">
                  {"Sign me up "}
                  <span className="arrow">
                    →
                  </span>
                </a>
                {" "}
                <a className="btn btn-ghost btn-lg" href="contact.html">
                  Ask a question
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
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Field gallery
              </span>
              {" "}
              <h2>
                Moments from the wild
              </h2>
              {" "}
              <p className="lead">
                A glimpse of the green, the muddy boots and the small victories in between.
              </p>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid reveal">
              {" "}
              <a className="gallery-item g-tall" href="gallery.html" data-caption="Old-growth canopy, Elderpine Reserve">
                {" "}
                <img src={a12} alt="Tall old-growth trees reaching up into the canopy" />
                {" "}
              </a>
              {" "}
              <a className="gallery-item" href="gallery.html" data-caption="Spring planting day">
                {" "}
                <img src={a13} alt="Young native tree on a restored hillside" />
                {" "}
              </a>
              {" "}
              <a className="gallery-item" href="gallery.html" data-caption="Riverkeeper patrol">
                {" "}
                <img src={a14} alt="River flowing through restored wetland" />
                {" "}
              </a>
              {" "}
              <a className="gallery-item" href="gallery.html" data-caption="Winged visitors return">
                {" "}
                <img src={a15} alt="Bird perching in native scrubland" />
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <p className="reveal" style={{ textAlign: "center", marginTop: "2rem", marginBottom: "0" }}>
              {" "}
              <a className="btn btn-outline" href="gallery.html">
                {"Open the full gallery "}
                <span className="arrow">
                  →
                </span>
              </a>
              {" "}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-deep">
          {" "}
          <div className="container">
            {" "}
            <div className="split reversed">
              {" "}
              <div className="reveal reveal-right">
                {" "}
                <span className="eyebrow on-dark">
                  How it works
                </span>
                {" "}
                <h2>
                  Three simple ways to grow something wild
                </h2>
                {" "}
                <p className="lead" style={{ color: "rgba(255,255,255,.85)" }}>
                  You don't have to be a scientist to save a forest. Pick the door that fits you.
                </p>
                {" "}
                <div className="grid-3" style={{ "--gap": "0", marginTop: "2rem" }}>
                  {" "}
                  <div className="service-card reveal">
                    {" "}
                    <div className="service-icon" aria-hidden="true">
                      💚
                    </div>
                    {" "}
                    <h3>
                      1 · Give
                    </h3>
                    {" "}
                    <p>
                      A monthly gift plants trees, funds patrols and pays for science. From $5 a month.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="service-card reveal" style={{ "--reveal-delay": ".12s" }}>
                    {" "}
                    <div className="service-icon" aria-hidden="true">
                      🌱
                    </div>
                    {" "}
                    <h3>
                      2 · Grow
                    </h3>
                    {" "}
                    <p>
                      Volunteer on planting days, or start a garden program in your neighbourhood.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="service-card reveal" style={{ "--reveal-delay": ".24s" }}>
                    {" "}
                    <div className="service-icon" aria-hidden="true">
                      🦋
                    </div>
                    {" "}
                    <h3>
                      3 · Restore
                    </h3>
                    {" "}
                    <p>
                      Follow your trees from the app — watch habitats come back, season by season.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="media-frame reveal reveal-left">
                {" "}
                <img className="frame-img" src={a16} alt="Native seedlings growing in a woodland restoration nursery" />
                {" "}
                <div className="float-chip" aria-hidden="true">
                  {" "}
                  <span className="fi">
                    🦜
                  </span>
                  {" "}
                  <div>
                    <b>
                      184+
                    </b>
                    <span>
                      species returning
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-banner reveal">
              {" "}
              <span className="eyebrow on-dark">
                Make it a legacy
              </span>
              {" "}
              <h2>
                Give today. The forest remembers.
              </h2>
              {" "}
              <p>
                Your donation plants real trees, in real soil, monitored until they stand on their own. Every gift of $10 plants and cares for a sapling for its first three years.
              </p>
              {" "}
              <div className="btn-actions">
                {" "}
                <a className="btn btn-accent btn-lg" href="donation.html">
                  {"Donate now "}
                  <span className="arrow">
                    →
                  </span>
                </a>
                {" "}
                <a className="btn btn-ghost btn-lg" href="causes.html">
                  Pick a cause
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
      </main>
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="footer-top">
          {" "}
          <div className="container footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a className="brand" href="index.html" aria-label="Wildrealm Trust — home">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  {" "}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                  {" "}
                </span>
                {" Wildrealm"}
                <em>
                  Trust
                </em>
                {" "}
              </a>
              {" "}
              <p>
                An independent conservation charity rooted in community. We plant trees, protect wildlife and restore the wild places we all depend on.
              </p>
              {" "}
              <form className="newsletter-form" data-form="" noValidate={true}>
                {" "}
                <label className="visually-hidden" htmlFor="nl-email">
                  Email address
                </label>
                {" "}
                <input id="nl-email" type="email" name="email" placeholder="you@example.com" required={true} />
                {" "}
                <button className="btn btn-accent" type="submit">
                  Join
                </button>
                {" "}
                <div className="form-ok" role="status">
                  🌱 You're on the list — welcome to the wild letter!
                </div>
                {" "}
                <div className="form-err" role="alert">
                  Please enter your email to subscribe.
                </div>
                {" "}
              </form>
              {" "}
              <p className="newsletter-note">
                One short email a month. 12,000+ nature lovers already read it.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-7h2.4l.36-2.8H13.5V9.4c0-.81.22-1.36 1.38-1.36h1.48V5.55c-.26-.03-1.13-.11-2.15-.11-2.13 0-3.59 1.3-3.59 3.69v2.07H8.2V14h2.42v7h2.88Z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.53 3h3.03l-6.62 7.57L21.7 21h-6.1l-4.78-6.25L5.36 21H2.32l7.08-8.1L2.3 3h6.25l4.32 5.71L17.53 3Zm-1.06 16.16h1.68L7.64 4.74H5.83l10.64 14.42Z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 12s0-3.5-.45-5.17a2.74 2.74 0 0 0-1.93-1.94C18.94 4.44 12 4.44 12 4.44s-6.94 0-8.62.45A2.74 2.74 0 0 0 1.45 6.83C1 8.5 1 12 1 12s0 3.5.45 5.17a2.74 2.74 0 0 0 1.93 1.94c1.68.45 8.62.45 8.62.45s6.94 0 8.62-.45a2.74 2.74 0 0 0 1.93-1.94C23 15.5 23 12 23 12Zm-13 3.5v-7l6 3.5-6 3.5Z" />
                  </svg>
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
                    About us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="causes.html">
                    Our causes
                  </a>
                </li>
                {" "}
                <li>
                  <a href="events.html">
                    Events
                  </a>
                </li>
                {" "}
                <li>
                  <a href="gallery.html">
                    Gallery
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
                Get involved
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="volunteer.html">
                    Volunteer
                  </a>
                </li>
                {" "}
                <li>
                  <a href="donation.html">
                    Donate
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="about.html#values">
                    Our values
                  </a>
                </li>
                {" "}
                <li>
                  <a href="events.html#calendar">
                    Event calendar
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col footer-contact">
              {" "}
              <h4>
                Reach us
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <span className="ico" aria-hidden="true">
                    📍
                  </span>
                  <span>
                    12 Fernwood Lane, Green Valley, GV 4052
                  </span>
                </li>
                {" "}
                <li>
                  <span className="ico" aria-hidden="true">
                    📞
                  </span>
                  <a href="tel:+15550102384">
                    +1 (555) 010-2384
                  </a>
                </li>
                {" "}
                <li>
                  <span className="ico" aria-hidden="true">
                    ✉️
                  </span>
                  <a href="mailto:hello@wildrealmtrust.org">
                    hello@wildrealmtrust.org
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
              <div className="footer-gallery" aria-label="Recent highlights">
                {" "}
                <a href="gallery.html">
                  <img src={a17} alt="Forest restoration highlight" />
                </a>
                {" "}
                <a href="gallery.html">
                  <img src={a18} alt="Wildlife highlight" />
                </a>
                {" "}
                <a href="gallery.html">
                  <img src={a19} alt="Volunteers planting trees" />
                </a>
                {" "}
                <a href="gallery.html">
                  <img src={a20} alt="River clean-up highlight" />
                </a>
                {" "}
                <a href="gallery.html">
                  <img src={a21} alt="Native seedling nursery" />
                </a>
                {" "}
                <a href="gallery.html">
                  <img src={a22} alt="Community event" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
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
              {" Wildrealm Trust. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Made with "}
              <span className="heart" aria-hidden="true">
                ♥
              </span>
              {" for a wilder planet · "}
              <a href="contact.html">
                Say hello
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <a href="#" className="back-to-top" aria-label="Back to top">
        {" "}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
        {" "}
      </a>
      {" "}
      {" "}
    </div>
  );
}
