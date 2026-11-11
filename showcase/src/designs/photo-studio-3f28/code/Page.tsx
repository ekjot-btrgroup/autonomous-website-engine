// Converted from the HTML template photo-studio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-1.webp";
import a1 from "./assets/hero-2.webp";
import a2 from "./assets/about-1.webp";
import a3 from "./assets/project-1.webp";
import a4 from "./assets/project-2.webp";
import a5 from "./assets/project-3.webp";
import a6 from "./assets/service-1.webp";
import a7 from "./assets/service-2.webp";
import a8 from "./assets/service-3.webp";
import a9 from "./assets/testimonial-1.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-photo-studio-3f28">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="brand" aria-label="Photozone Studio — home">
            Photozone
            <em>
              Studio
            </em>
          </a>
          {" "}
          <nav aria-label="Primary">
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
                <a className="nav-link" href="feature.html">
                  Features
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="project.html">
                  Projects
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
          <div className="header__cta">
            <a className="btn" href="contact.html">
              Book a shoot
            </a>
          </div>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
            <span />
            <span />
            <span />
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" aria-label="Intro">
          {" "}
          <div className="hero-bg">
            {" "}
            <img className="active" src={a0} alt="Portrait of a subject lit in warm studio light" />
            {" "}
            <img src={a1} alt="Editorial photograph composed in a dark gallery setting" />
            {" "}
          </div>
          {" "}
          <div className="hero__content">
            {" "}
            <p className="hero__kicker">
              Photography Studio — Est. 2013
            </p>
            {" "}
            <h1 className="hero__title">
              {"We frame the moments that "}
              <em>
                outlast us
              </em>
            </h1>
            {" "}
            <p className="hero__lede">
              Photozone is a studio built on light, patience and craft — from intimate portraits to full-scale commercial campaigns, every frame is composed to be kept.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a className="btn" href="project.html">
                {"Explore our work "}
                <span className="arw">
                  →
                </span>
              </a>
              {" "}
              <a className="btn btn--ghost" href="contact.html">
                Book a session
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__meta">
              {" "}
              <div>
                <strong>
                  12+
                </strong>
                <span>
                  Years in the darkroom
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  480+
                </strong>
                <span>
                  Stories shot
                </span>
              </div>
              {" "}
              <div>
                <strong>
                  4.9
                </strong>
                <span>
                  Average client rating
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__scroll" aria-hidden="true">
            Scroll
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="ticker" aria-hidden="true">
          {" "}
          <div className="ticker__track">
            {" "}
            <span>
              Portraits
            </span>
            <span>
              Weddings
            </span>
            <span>
              Commercial
            </span>
            <span>
              Editorial
            </span>
            <span>
              Events
            </span>
            <span>
              Fashion
            </span>
            <span>
              Fine Art
            </span>
            <span>
              Brand Stories
            </span>
            {" "}
            <span>
              Portraits
            </span>
            <span>
              Weddings
            </span>
            <span>
              Commercial
            </span>
            <span>
              Editorial
            </span>
            <span>
              Events
            </span>
            <span>
              Fashion
            </span>
            <span>
              Fine Art
            </span>
            <span>
              Brand Stories
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section" id="studio">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split__media reveal reveal--left">
                {" "}
                <figure className="img-frame grain">
                  {" "}
                  <img src={a2} alt="A photographer composing a shot on set in the studio" />
                  {" "}
                </figure>
                {" "}
              </div>
              {" "}
              <div className="split__body reveal reveal--right">
                {" "}
                <p className="eyebrow">
                  The Studio
                </p>
                {" "}
                <h2>
                  Photography as a quiet act of attention
                </h2>
                {" "}
                <p className="lead">
                  We believe a photograph should hold its ground long after the day it was taken.
                </p>
                {" "}
                <p>
                  Founded in 2013, Photozone grew from a single rented darkroom into a full-service studio. We still develop every selection by hand, still insist on natural light when we can find it, and still treat each frame as a one-off — because it is.
                </p>
                {" "}
                <p>
                  Our photographers work slowly, listen first and never over-shoot. The result is a body of work that feels less like a service and more like a collaboration with a trusted eye.
                </p>
                {" "}
                <a className="link-arrow" href="about.html">
                  {"More about the studio "}
                  <span className="arw">
                    →
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
        <section className="section section--alt" id="featured">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <p className="eyebrow">
                Selected Works
              </p>
              {" "}
              <h2>
                Frames that found their way out of the archive
              </h2>
              {" "}
              <p>
                A few projects we keep returning to — portraits, campaigns and quiet corners of the world.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <a className="project-card reveal" style={{ "--i": "0" }} href="project.html">
                {" "}
                <div className="project-card__media grain">
                  {" "}
                  <img src={a3} alt="Studio portrait series, warm amber lighting" />
                  {" "}
                  <span className="project-card__hover">
                    <span>
                      Portrait
                    </span>
                    <strong>
                      Amber Hours
                    </strong>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="project-card__caption">
                  <h3>
                    Amber Hours
                  </h3>
                  <span>
                    Portrait · 2025
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="project-card reveal" style={{ "--i": "1" }} href="project.html">
                {" "}
                <div className="project-card__media grain">
                  {" "}
                  <img src={a4} alt="Editorial fashion photograph against a dark backdrop" />
                  {" "}
                  <span className="project-card__hover">
                    <span>
                      Editorial
                    </span>
                    <strong>
                      Nightshift
                    </strong>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="project-card__caption">
                  <h3>
                    Nightshift
                  </h3>
                  <span>
                    Editorial · 2025
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="project-card reveal" style={{ "--i": "2" }} href="project.html">
                {" "}
                <div className="project-card__media grain">
                  {" "}
                  <img src={a5} alt="Documentary photograph from an evening event" />
                  {" "}
                  <span className="project-card__hover">
                    <span>
                      Events
                    </span>
                    <strong>
                      After Dark
                    </strong>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="project-card__caption">
                  <h3>
                    After Dark
                  </h3>
                  <span>
                    Events · 2024
                  </span>
                </div>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "center", marginTop: "var(--sp-5)" }} className="reveal">
              {" "}
              <a className="btn btn--ghost" href="project.html">
                {"View the full portfolio "}
                <span className="arw">
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
        {" "}
        <section className="section" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                What We Do
              </p>
              {" "}
              <h2>
                One studio, every kind of light
              </h2>
              {" "}
              <p>
                From a single portrait sitting to a week-long production, we shape light to fit the story you are telling.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="service reveal" style={{ "--i": "0" }}>
                {" "}
                <div className="service__media grain">
                  {" "}
                  <span className="service__num">
                    01
                  </span>
                  {" "}
                  <img src={a6} alt="Portrait photography session in studio light" />
                  {" "}
                </div>
                {" "}
                <div className="service__body">
                  {" "}
                  <span className="tag">
                    Portraits
                  </span>
                  {" "}
                  <h3>
                    Portrait Photography
                  </h3>
                  {" "}
                  <p>
                    Headshots, personal portraits and family sittings directed with care in our studio or on location.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service reveal" style={{ "--i": "1" }}>
                {" "}
                <div className="service__media grain">
                  {" "}
                  <span className="service__num">
                    02
                  </span>
                  {" "}
                  <img src={a7} alt="Wedding photograph captured during a ceremony" />
                  {" "}
                </div>
                {" "}
                <div className="service__body">
                  {" "}
                  <span className="tag">
                    Weddings
                  </span>
                  {" "}
                  <h3>
                    {"Weddings & Events"}
                  </h3>
                  {" "}
                  <p>
                    Full-day coverage that stays out of the way — candid, unobtrusive and beautifully graded.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service reveal" style={{ "--i": "2" }}>
                {" "}
                <div className="service__media grain">
                  {" "}
                  <span className="service__num">
                    03
                  </span>
                  {" "}
                  <img src={a8} alt="Commercial product photograph in a dark setting" />
                  {" "}
                </div>
                {" "}
                <div className="service__body">
                  {" "}
                  <span className="tag">
                    Commercial
                  </span>
                  {" "}
                  <h3>
                    {"Commercial & Editorial"}
                  </h3>
                  {" "}
                  <p>
                    Campaigns, product and editorial commissions delivered on brief, on budget and on time.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="reveal" style={{ marginTop: "var(--sp-5)" }}>
              {" "}
              <a className="link-arrow" href="service.html">
                {"See all services "}
                <span className="arw">
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
        {" "}
        <section className="section section--tight">
          {" "}
          <div className="container">
            {" "}
            <div className="stats reveal">
              {" "}
              <div className="stat">
                <strong>
                  480+
                </strong>
                <span>
                  Projects delivered
                </span>
              </div>
              {" "}
              <div className="stat">
                <strong>
                  12
                </strong>
                <span>
                  Years of practice
                </span>
              </div>
              {" "}
              <div className="stat">
                <strong>
                  96%
                </strong>
                <span>
                  Clients who return
                </span>
              </div>
              {" "}
              <div className="stat">
                <strong>
                  30+
                </strong>
                <span>
                  {"Exhibitions & features"}
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--alt" id="reviews">
          {" "}
          <div className="container">
            {" "}
            <div className="quote-feature reveal">
              {" "}
              <p className="eyebrow" style={{ justifyContent: "center" }}>
                Client Words
              </p>
              {" "}
              <blockquote>
                “Photozone made us feel like the only people in the room. The photographs didn’t just capture our wedding — they captured how it felt to be there.”
              </blockquote>
              {" "}
              <div className="quote__who" style={{ justifyContent: "center", marginTop: "2rem" }}>
                {" "}
                <img src={a9} alt="Portrait of a Photozone client" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    {"Maya & Daniel"}
                  </strong>
                  {" "}
                  <span>
                    Wedding · 2025
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "2.2rem" }}>
                <a className="link-arrow" href="testimonial.html">
                  {"Read more stories "}
                  <span className="arw">
                    →
                  </span>
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
        <section className="cta-band">
          {" "}
          <div className="container reveal">
            {" "}
            <p className="eyebrow">
              Your Turn Behind the Lens
            </p>
            {" "}
            <h2>
              Let’s make a frame worth keeping
            </h2>
            {" "}
            <p>
              Tell us about the moment you want to hold onto — we’ll handle the light, the composition and the patience.
            </p>
            {" "}
            <div className="cta-band__actions">
              {" "}
              <a className="btn" href="contact.html">
                {"Book a session "}
                <span className="arw">
                  →
                </span>
              </a>
              {" "}
              <a className="btn btn--ghost" href="project.html">
                Browse the portfolio
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
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <a href="index.html" className="brand">
                Photozone
                <em>
                  Studio
                </em>
              </a>
              {" "}
              <p>
                A professional photography studio crafting portraits, weddings and editorial imagery in warm, considered light since 2013.
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
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
                    About the studio
                  </a>
                </li>
                {" "}
                <li>
                  <a href="feature.html">
                    Features
                  </a>
                </li>
                {" "}
                <li>
                  <a href="project.html">
                    Portfolio
                  </a>
                </li>
                {" "}
                <li>
                  <a href="team.html">
                    The team
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="service.html">
                    Portraits
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Weddings & events"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Commercial
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Editorial
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Book a session
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Follow
              </h4>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Instagram">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Behance">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 7h5.5a2.8 2.8 0 0 1 0 5.6H3zM3 12.6h6a3 3 0 0 1 0 6H3z" />
                    <path d="M15 8.5h5M16.5 15.5a2.6 2.6 0 0 0 2.6-2.6h-5.6" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Pinterest">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 6.5c-3 0-4.7 1.9-4.7 3.9 0 1.2.6 2.3 1.5 2.7.2.1.3 0 .3-.2l.2-.8c0-.2 0-.3-.1-.4a2.2 2.2 0 0 1-.5-1.5c0-1.6 1.2-3 3.1-3 1.7 0 2.9 1.1 2.9 2.7 0 2-.9 3.7-2.3 3.7-.8 0-1.3-.6-1.1-1.4.2-.9.6-1.9.6-2.6 0-.6-.3-1.1-1-1.1-.8 0-1.4.8-1.4 1.9 0 .7.2 1.2.2 1.2l-1 4.2c-.2.9 0 2 .1 2.8 0 .2.2.2.3.1.7-.9.9-2 1.2-3l.8-2.9c.4.7 1.5 1.3 2.7 1.3 3.5 0 5.6-3.2 5.6-6.8C18.3 8.6 15.8 6.5 12 6.5z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Photozone Studio. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Crafted in the darkroom · "}
              <a href="contact.html">
                Get in touch
              </a>
              {" · "}
              <a href="404.html">
                404
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
