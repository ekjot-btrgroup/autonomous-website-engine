// Converted from the HTML template dance-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/counter-bg.webp";
import a1 from "./assets/breadcrumb.webp";
import a2 from "./assets/carousel-1.webp";
import a3 from "./assets/about-2.webp";
import a4 from "./assets/class-1.webp";
import a5 from "./assets/class-2.webp";
import a6 from "./assets/class-3.webp";
import a7 from "./assets/service-1.webp";
import a8 from "./assets/service-2.webp";
import a9 from "./assets/service-3.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-dance-e7c6">
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html" aria-label="Verve Dance Studio — Home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              <em>
                V
              </em>
            </span>
            {" "}
            <span>
              Verve
              <em className="brand-dot">
                .
              </em>
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
                  Classes
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
          <a className="btn btn--primary header-cta" href="contact.html">
            <span>
              Book a Class
            </span>
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
      <main>
        {" "}
        {" "}
        <section className="hero" aria-label="Welcome to Verve Dance Studio">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a2} alt="" className="active" />
            {" "}
            <img src={a0} alt="" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="container hero-content">
            {" "}
            <span className="hero-eyebrow reveal">
              Est. 2012 · San Diego, CA
            </span>
            {" "}
            <h1 className="display display--xl hero-title reveal" style={{ "--reveal-delay": ".05s" }}>
              {" Find your "}
              <span className="grad-text">
                rhythm
              </span>
              {", own the floor "}
            </h1>
            {" "}
            <p className="hero-sub reveal" style={{ "--reveal-delay": ".1s" }}>
              {" Ballet, hip-hop, contemporary and salsa under one roof. Verve is a dance school built for beginners, dreamers and competitors alike — come as you are, leave moving better. "}
            </p>
            {" "}
            <div className="hero-actions reveal" style={{ "--reveal-delay": ".15s" }}>
              {" "}
              <a className="btn btn--primary btn--lg" href="contact.html">
                <span>
                  Book Your First Class
                </span>
              </a>
              {" "}
              <a className="btn btn--ghost btn--lg" href="#classes">
                <span>
                  Explore Classes
                </span>
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta reveal" style={{ "--reveal-delay": ".2s" }}>
              {" "}
              <div>
                <strong>
                  12+
                </strong>
                <span>
                  Years of Dance
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  30+
                </strong>
                <span>
                  Weekly Classes
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  2400+
                </strong>
                <span>
                  Happy Students
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  4.9★
                </strong>
                <span>
                  Student Rating
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <span className="hero-scroll" aria-hidden="true">
            Scroll
          </span>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="marquee" aria-hidden="true">
          {" "}
          <div className="marquee-track">
            {" "}
            <span>
              Ballet
            </span>
            <span>
              Hip-Hop
            </span>
            <span>
              Contemporary
            </span>
            {" "}
            <span>
              Salsa
            </span>
            <span>
              Jazz Funk
            </span>
            <span>
              {"Kids & Teens"}
            </span>
            {" "}
            <span>
              Private Lessons
            </span>
            <span>
              Open Floor
            </span>
            {" "}
            <span>
              Ballet
            </span>
            <span>
              Hip-Hop
            </span>
            <span>
              Contemporary
            </span>
            {" "}
            <span>
              Salsa
            </span>
            <span>
              Jazz Funk
            </span>
            <span>
              {"Kids & Teens"}
            </span>
            {" "}
            <span>
              Private Lessons
            </span>
            <span>
              Open Floor
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section" aria-labelledby="about-title">
          {" "}
          <div className="container split">
            {" "}
            <div className="split-media reveal">
              {" "}
              <img src={a3} alt="Dancers rehearsing a routine at Verve Dance Studio" loading="lazy" />
              {" "}
              <span className="tag-badge">
                Move.
                <br />
                Breathe.
                <br />
                Own it.
              </span>
              {" "}
            </div>
            {" "}
            <div className="split-copy">
              {" "}
              <span className="eyebrow reveal">
                The Studio
              </span>
              {" "}
              <h2 className="display display--lg section-title reveal" id="about-title" style={{ "--reveal-delay": ".05s" }}>
                {" Every body has "}
                <em>
                  rhythm
                </em>
                {". We give it a stage. "}
              </h2>
              {" "}
              <p className="lead reveal" style={{ "--reveal-delay": ".1s" }}>
                {" Verve started in 2012 with one sprung floor, a boombox and a stubborn belief that dance is for everyone. A decade later we run more than thirty classes a week — from first arabesque to battle finals — without losing the warmth of a small studio. "}
              </p>
              {" "}
              <ul className="reveal" style={{ "--reveal-delay": ".15s" }}>
                {" "}
                <li>
                  Small classes capped at 18 students
                </li>
                {" "}
                <li>
                  Certified instructors with professional stage careers
                </li>
                {" "}
                <li>
                  Two sprung studios, mirrors, barres and a mat zone
                </li>
                {" "}
                <li>
                  Beginner to pre-professional tracks in every style
                </li>
                {" "}
              </ul>
              {" "}
              <div className="hero-actions reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <a className="btn btn--primary" href="about.html">
                  <span>
                    Our Story
                  </span>
                </a>
                {" "}
                <a className="btn btn--ghost" href="team.html">
                  <span>
                    Meet the Team
                  </span>
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
        <section className="section section--alt" id="classes" aria-labelledby="classes-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow">
                Signature Classes
              </span>
              {" "}
              <h2 className="display display--lg section-title" id="classes-title">
                {" Pick your "}
                <em>
                  move
                </em>
                {" "}
              </h2>
              {" "}
              <p className="lead">
                Four signature styles, one home. Every class mixes technical drills with pure joy — because form is nothing without feeling.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-cards">
              {" "}
              <article className="card reveal">
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a4} alt="Ballet students at the barre" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      All Levels
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    Ballet
                  </h3>
                  {" "}
                  <p className="card-text">
                    Foundation, poise and musicality. From first position to pirouettes in a class that honours tradition with modern energy.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 60–90 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a5} alt="Hip-hop dancers mid-move in the studio" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      Beginner +
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    Hip-Hop
                  </h3>
                  {" "}
                  <p className="card-text">
                    Grooves, isolations and combos set to the latest tracks. Learn the vocabulary of the culture with crew energy.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 75 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a6} alt="Contemporary dancer in a flowing movement" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      Intermediate
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    Contemporary
                  </h3>
                  {" "}
                  <p className="card-text">
                    Lyrical, grounded and expressive. Blend ballet technique with release work and improvisation in this emotional style.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 75 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card reveal" style={{ "--reveal-delay": ".24s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a7} alt="Couple dancing salsa with vibrant energy" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      Couples Welcome
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    Salsa
                  </h3>
                  {" "}
                  <p className="card-text">
                    Spins, shines and sizzling partner work. Salsa Nights turn beginners into confident dancers in weeks.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 90 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card reveal" style={{ "--reveal-delay": ".32s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a8} alt="Jazz funk dancers striking a sharp pose" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      High Energy
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    Jazz Funk
                  </h3>
                  {" "}
                  <p className="card-text">
                    Sharp, sassy and impossible to stand still to. Build stamina and style in a class that feels like a music video.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 60 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card reveal" style={{ "--reveal-delay": ".4s" }}>
                {" "}
                <div className="card-media">
                  {" "}
                  <img src={a9} alt="Young dancers stretching in a kids class" loading="lazy" />
                  {" "}
                  <span className="card-tag">
                    <span>
                      Ages 5–17
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="card-body">
                  {" "}
                  <h3 className="card-title">
                    {"Kids & Teens"}
                  </h3>
                  {" "}
                  <p className="card-text">
                    Playful foundations for little movers, and performance tracks for teens chasing the spotlight. Confidence comes standard.
                  </p>
                  {" "}
                  <div className="card-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {" 45–60 min"}
                    </span>
                    {" "}
                    <a className="card-link" href="service.html">
                      {"Details "}
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ marginTop: "2.6rem", textAlign: "center" }}>
              {" "}
              <a className="btn btn--lime btn--lg" href="service.html">
                <span>
                  View Full Schedule
                </span>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="stats" aria-label="Studio statistics">
          {" "}
          <div className="container">
            {" "}
            <div className="stats-grid">
              {" "}
              <div className="stat reveal">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                {" "}
                <span className="stat-num">
                  12+
                </span>
                {" "}
                <span className="stat-label">
                  Years of Dance
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".08s" }}>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {" "}
                <span className="stat-num">
                  2400+
                </span>
                {" "}
                <span className="stat-label">
                  Happy Students
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".16s" }}>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {" "}
                <span className="stat-num">
                  30+
                </span>
                {" "}
                <span className="stat-label">
                  Weekly Classes
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal" style={{ "--reveal-delay": ".24s" }}>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <span className="stat-num">
                  4.9★
                </span>
                {" "}
                <span className="stat-label">
                  Student Rating
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
        <section className="section" aria-labelledby="why-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow">
                Why Verve
              </span>
              {" "}
              <h2 className="display display--lg section-title" id="why-title">
                {" A studio built on "}
                <em>
                  feeling
                </em>
                {" "}
              </h2>
              {" "}
              <p className="lead">
                Technique gets you in the door. What keeps you here is the culture — coaches who know your name, floors that forgive, and a community that cheers at your first and your fiftieth class.
              </p>
              {" "}
            </div>
            {" "}
            <div className="steps">
              {" "}
              <div className="step reveal">
                {" "}
                <span className="step-num">
                  01
                </span>
                {" "}
                <h3>
                  Joy First
                </h3>
                {" "}
                <p>
                  Every class ends with a smile. We push you, never past the point where dancing stops feeling like dancing.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <span className="step-num">
                  02
                </span>
                {" "}
                <h3>
                  Precision Built
                </h3>
                {" "}
                <p>
                  Certified instructors break every step into digestible drills, so progress is steady, visible and celebrated.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <span className="step-num">
                  03
                </span>
                {" "}
                <h3>
                  Real Community
                </h3>
                {" "}
                <p>
                  Recitals, crew battles and salsa socials — Verve is where your dance family waits for you.
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
        <section className="section section--alt" aria-labelledby="reviews-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow">
                Loved by Students
              </span>
              {" "}
              <h2 className="display display--lg section-title" id="reviews-title">
                {" Don't take our "}
                <em>
                  word
                </em>
                {" for it "}
              </h2>
              {" "}
              <p className="lead" style={{ marginInline: "auto" }}>
                Real reviews from the people who sweat, stretch and spin with us.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-cards">
              {" "}
              <article className="testi-card reveal">
                {" "}
                <div className="stars" aria-label="Rated 5 out of 5">
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "I walked in with two left feet and a lot of nerves. Six months later I performed in the spring recital. Verve changed how I hold myself."
                </blockquote>
                {" "}
                <div className="testi-author">
                  {" "}
                  <img src={a10} alt="Portrait of Danielle Kim" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Danielle Kim
                    </strong>
                    <span>
                      Ballet Foundations
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testi-card reveal" style={{ "--reveal-delay": ".1s" }}>
                {" "}
                <div className="stars" aria-label="Rated 5 out of 5">
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "The hip-hop crew here is unreal. Coach Marcus pushes us hard but the culture is pure support. I've never improved this fast."
                </blockquote>
                {" "}
                <div className="testi-author">
                  {" "}
                  <img src={a11} alt="Portrait of James Okafor" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      James Okafor
                    </strong>
                    <span>
                      Hip-Hop Crew
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testi-card reveal" style={{ "--reveal-delay": ".2s" }}>
                {" "}
                <div className="stars" aria-label="Rated 5 out of 5">
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <blockquote>
                  "Salsa Nights is the highlight of my week. Andres makes partner work painless and fun. My partner and I finally stopped apologising to each other's feet."
                </blockquote>
                {" "}
                <div className="testi-author">
                  {" "}
                  <img src={a12} alt="Portrait of Priya Sharma" loading="lazy" />
                  {" "}
                  <div>
                    <strong>
                      Priya Sharma
                    </strong>
                    <span>
                      Salsa Nights
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ marginTop: "2.6rem", textAlign: "center" }}>
              {" "}
              <a className="btn btn--ghost btn--lg" href="testimonial.html">
                <span>
                  Read All Reviews
                </span>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="cta-band" aria-labelledby="cta-title">
          {" "}
          <div className="container cta-inner">
            {" "}
            <div className="reveal">
              {" "}
              <h2 className="display display--lg" id="cta-title">
                Your first class is on us
              </h2>
              {" "}
              <p className="cta-sub">
                Try any class free, no strings attached. Just bring water and a heartbeat.
              </p>
              {" "}
            </div>
            {" "}
            <a className="btn btn--lime btn--lg reveal" style={{ "--reveal-delay": ".1s" }} href="contact.html">
              <span>
                Book a Free Trial
              </span>
            </a>
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
          <div className="footer-about">
            {" "}
            <a className="brand" href="index.html" aria-label="Verve Dance Studio — Home">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                <em>
                  V
                </em>
              </span>
              {" "}
              <span>
                Verve
                <em className="brand-dot">
                  .
                </em>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              A movement-first dance school in San Diego. Ballet, hip-hop, contemporary and salsa for every body — taught with joy and precision since 2012.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Explore
            </h3>
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
                <a href="service.html">
                  {"Classes & Schedule"}
                </a>
              </li>
              {" "}
              <li>
                <a href="gallery.html">
                  Gallery
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
            <h3>
              Classes
            </h3>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="service.html">
                  Ballet
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Hip-Hop
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Contemporary
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Salsa
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Jazz Funk
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  {"Kids & Teens"}
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col footer-news">
            {" "}
            <h3>
              Stay in Step
            </h3>
            {" "}
            <p>
              Class drops, recital dates and the occasional discount. No spam, just the beat.
            </p>
            {" "}
            <form className="news-form" action="#" method="post" noValidate={true}>
              {" "}
              <label className="sr-only" htmlFor="news-email">
                Email address
              </label>
              {" "}
              <input id="news-email" type="email" placeholder="you@example.com" required={true} />
              {" "}
              <button type="submit">
                Join
              </button>
              {" "}
            </form>
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
              {" Verve Dance Studio. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Made with "}
              <span style={{ color: "var(--pink)" }}>
                ♥
              </span>
              {" on a sprung floor · San Diego, CA"}
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
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
