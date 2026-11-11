// Converted from the HTML template barber-shop-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero.webp";
import a1 from "./assets/service-1.webp";
import a2 from "./assets/service-2.webp";
import a3 from "./assets/service-3.webp";
import a4 from "./assets/portfolio-1.webp";
import a5 from "./assets/portfolio-2.webp";
import a6 from "./assets/portfolio-3.webp";
import a7 from "./assets/portfolio-4.webp";
import a8 from "./assets/portfolio-5.webp";
import a9 from "./assets/portfolio-6.webp";
import a10 from "./assets/testimonial-bg.webp";
import a11 from "./assets/testimonial-1.webp";
import a12 from "./assets/testimonial-2.webp";
import a13 from "./assets/testimonial-3.webp";
import a14 from "./assets/team-1.webp";
import a15 from "./assets/team-2.webp";
import a16 from "./assets/team-3.webp";
import a17 from "./assets/team-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Lato:wght@300;400;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-barber-shop-8a6d">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="nav-logo" aria-label={"Razor & Tonic — home"}>
            {" "}
            <svg className="nav-logo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              {" "}
              <path d="M6 34L34 6c2-2 5-2 6 0 2 1 2 4 0 6L12 42c-2 2-5 2-6 0-2-1-2-4 0-6z" fill="#C73E3E" />
              {" "}
              <path d="M30 12l6 6M24 18l6 6M18 24l6 6" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
              {" "}
              <path d="M40 8l4-2-2 4z" fill="#C9A44C" />
              {" "}
            </svg>
            {" Razor & Tonic "}
          </a>
          {" "}
          <nav>
            {" "}
            <ul className="nav-links">
              {" "}
              <li>
                <a href="index.html" className="nav-link active">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="pricing.html" className="nav-link">
                  Pricing
                </a>
              </li>
              {" "}
              <li>
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="btn btn-primary nav-cta">
                  Book a Cut
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation menu">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" id="home">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt={"Interior of the Razor & Tonic barbershop"} />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-text">
              {" "}
              <span className="hero-eyebrow">
                Est. 1958 · Traditional Barbershop
              </span>
              {" "}
              <h1 className="hero-title">
                Classic Cuts.
                <br />
                <span>
                  Timeless Craft.
                </span>
              </h1>
              {" "}
              <p className="hero-tagline">
                {"Razor & Tonic"}
              </p>
              {" "}
              <p className="hero-desc">
                Where the ritual of the old barbershop lives on — precision fades, straight-razor shaves and hot-towel luxury, served with a cold tonic on the side.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="contact.html" className="btn btn-primary">
                  Book Your Cut
                </a>
                {" "}
                <a href="services.html" className="btn btn-outline-light">
                  Explore Services
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-badge-row">
                {" "}
                <div className="hero-badge">
                  {" "}
                  <span className="hero-badge-num">
                    30+
                  </span>
                  {" "}
                  <span className="hero-badge-label">
                    Years of Craft
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="hero-badge">
                  {" "}
                  <span className="hero-badge-num">
                    12k
                  </span>
                  {" "}
                  <span className="hero-badge-label">
                    Happy Clients
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="hero-badge">
                  {" "}
                  <span className="hero-badge-num">
                    4.9
                  </span>
                  {" "}
                  <span className="hero-badge-label">
                    Google Rating
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="hero-pole" aria-hidden="true">
              {" "}
              <div className="hero-pole-cap hero-pole-cap--top" />
              {" "}
              <div className="hero-pole-inner" />
              {" "}
              <div className="hero-pole-cap hero-pole-cap--bottom" />
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
              <span className="section-tag">
                What We Do
              </span>
              {" "}
              <h2 className="section-title">
                Signature Services
              </h2>
              {" "}
              <p className="section-sub">
                Three pillars of the classic barber trade — honed for decades, performed with pride.
              </p>
              {" "}
            </div>
            {" "}
            <div className="services-grid">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a1} alt="Precision classic haircut in progress" loading="lazy" />
                  {" "}
                  <span className="service-card-icon">
                    ✂
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Classic Haircut
                  </h3>
                  {" "}
                  <p>
                    A consultation-first cut built on your bone structure and lifestyle — scissor work, razor-neat edges and a finish that holds its shape for weeks.
                  </p>
                  {" "}
                  <span className="service-card-price">
                    from $38
                  </span>
                  {" "}
                  <a href="pricing.html" className="service-card-link">
                    See Pricing →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a2} alt="Hot towel straight razor shave" loading="lazy" />
                  {" "}
                  <span className="service-card-icon">
                    ✦
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Hot Towel Shave
                  </h3>
                  {" "}
                  <p>
                    The full ritual — warm towels, pre-shave oil, a lethal straight razor and a cold towel finish. The closest shave your face will ever meet.
                  </p>
                  {" "}
                  <span className="service-card-price">
                    from $42
                  </span>
                  {" "}
                  <a href="pricing.html" className="service-card-link">
                    See Pricing →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a3} alt="Beard sculpting and trim" loading="lazy" />
                  {" "}
                  <span className="service-card-icon">
                    ✧
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Beard Sculpting
                  </h3>
                  {" "}
                  <p>
                    Line work, shape and conditioning for the modern gentleman's beard — scissor, clipper and straight-razor detailing for a clean, intentional finish.
                  </p>
                  {" "}
                  <span className="service-card-price">
                    from $30
                  </span>
                  {" "}
                  <a href="pricing.html" className="service-card-link">
                    See Pricing →
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
        <section className="section section--alt" id="portfolio">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="section-tag">
                The Work
              </span>
              {" "}
              <h2 className="section-title">
                {"Recent Fades & Finishes"}
              </h2>
              {" "}
              <p className="section-sub">
                A few frames from the chair — every cut documented, every client walked to the mirror.
              </p>
              {" "}
            </div>
            {" "}
            <div className="portfolio-grid">
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a4} alt="Slick pompadour haircut result" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    The Pompadour
                  </h3>
                  <span>
                    Classic Cut
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a5} alt="Skin fade with textured top" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    Skin Fade
                  </h3>
                  <span>
                    {"Fade & Taper"}
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a6} alt="Clean straight razor shave" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    Razor Finish
                  </h3>
                  <span>
                    Hot Towel Shave
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a7} alt="Sculpted beard with sharp lines" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    Beard Sculpt
                  </h3>
                  <span>
                    Beard Work
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a8} alt="Bold fringe with clipper work" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    The Modern Fringe
                  </h3>
                  <span>
                    Textured Cut
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <a className="portfolio-item reveal" href="blog.html">
                {" "}
                <img src={a9} alt="Sharp low taper with side part" loading="lazy" />
                {" "}
                <div className="portfolio-overlay">
                  <h3>
                    Executive Taper
                  </h3>
                  <span>
                    Business Cut
                  </span>
                </div>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section testimonials" id="testimonials">
          {" "}
          <img className="testimonials-bg" src={a10} alt="" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="section-tag">
                Word of Mouth
              </span>
              {" "}
              <h2 className="section-title">
                What the Chair Regulars Say
              </h2>
              {" "}
              <p className="section-sub">
                Walk in a stranger, walk out a regular — that's been the promise for sixty years.
              </p>
              {" "}
            </div>
            {" "}
            <div className="testimonials-grid">
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "Best hot-towel shave I've ever had, and I've had a few. The barber didn't rush a single pass. You leave feeling ten years lighter."
                </p>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a11} alt="Portrait of Daniel Mercer" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Daniel Mercer
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Regular since 2016
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "They treat a haircut like a craft, not a transaction. Same barber for five years, same perfect fade every single time."
                </p>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a12} alt="Portrait of Marcus Hale" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Marcus Hale
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Client since 2019
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "Booked online at the last minute, was in the chair in ten minutes. The beard sculpt alone is worth the trip across town."
                </p>
                {" "}
                <div className="testimonial-person">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a13} alt="Portrait of James Okafor" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      James Okafor
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      First-time client
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" id="team">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="section-tag">
                The Chairmen
              </span>
              {" "}
              <h2 className="section-title">
                Meet the Barbers
              </h2>
              {" "}
              <p className="section-sub">
                Four masters, four chairs, one standard — if it leaves this shop, it's right.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-grid">
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-card-photo">
                  {" "}
                  <img src={a14} alt="Vince Colombo — Master Barber" loading="lazy" />
                  {" "}
                  <div className="team-card-social">
                    {" "}
                    <a href="#" aria-label="Vince on Instagram">
                      ◎
                    </a>
                    {" "}
                    <a href="#" aria-label="Vince on Facebook">
                      ⓕ
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Vince Colombo
                  </h3>
                  {" "}
                  <div className="team-role">
                    Master Barber
                  </div>
                  {" "}
                  <p className="team-bio">
                    32 years behind the chair. A legend of the pompadour and the closest razor finish in town.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-card-photo">
                  {" "}
                  <img src={a15} alt="Theo Berg — Head Barber" loading="lazy" />
                  {" "}
                  <div className="team-card-social">
                    {" "}
                    <a href="#" aria-label="Theo on Instagram">
                      ◎
                    </a>
                    {" "}
                    <a href="#" aria-label="Theo on Facebook">
                      ⓕ
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Theo Berg
                  </h3>
                  {" "}
                  <div className="team-role">
                    Head Barber
                  </div>
                  {" "}
                  <p className="team-bio">
                    Precision fades and razor-line beards. If it needs to be sharp, Theo is on it.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-card-photo">
                  {" "}
                  <img src={a16} alt={"Rosa Lindqvist — Barber & Stylist"} loading="lazy" />
                  {" "}
                  <div className="team-card-social">
                    {" "}
                    <a href="#" aria-label="Rosa on Instagram">
                      ◎
                    </a>
                    {" "}
                    <a href="#" aria-label="Rosa on Facebook">
                      ⓕ
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Rosa Lindqvist
                  </h3>
                  {" "}
                  <div className="team-role">
                    {"Barber & Stylist"}
                  </div>
                  {" "}
                  <p className="team-bio">
                    Texture, scissor work and the modern gentleman's cut. The style whisperer of the shop.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-card-photo">
                  {" "}
                  <img src={a17} alt="Eli Kazemi — Shave Specialist" loading="lazy" />
                  {" "}
                  <div className="team-card-social">
                    {" "}
                    <a href="#" aria-label="Eli on Instagram">
                      ◎
                    </a>
                    {" "}
                    <a href="#" aria-label="Eli on Facebook">
                      ⓕ
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-card-body">
                  {" "}
                  <h3>
                    Eli Kazemi
                  </h3>
                  {" "}
                  <div className="team-role">
                    Shave Specialist
                  </div>
                  {" "}
                  <p className="team-bio">
                    The straight razor is his instrument. Hot-towel shaves raised to a meditative art form.
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
        {" "}
        <section className="cta-band">
          {" "}
          <div className="container reveal">
            {" "}
            <h2>
              Ready for the Chair?
            </h2>
            {" "}
            <p>
              Walk-ins welcome, but the good time slots go fast. Book online in under a minute.
            </p>
            {" "}
            <a href="contact.html" className="btn btn-gold">
              Book Your Cut Now
            </a>
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
          <div className="footer-grid">
            {" "}
            <div className="footer-about">
              {" "}
              <a href="index.html" className="nav-logo" aria-label={"Razor & Tonic — home"}>
                {" "}
                <svg className="nav-logo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  {" "}
                  <path d="M6 34L34 6c2-2 5-2 6 0 2 1 2 4 0 6L12 42c-2 2-5 2-6 0-2-1-2-4 0-6z" fill="#C73E3E" />
                  {" "}
                  <path d="M30 12l6 6M24 18l6 6M18 24l6 6" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
                  {" "}
                  <path d="M40 8l4-2-2 4z" fill="#C9A44C" />
                  {" "}
                </svg>
                {" Razor & Tonic "}
              </a>
              {" "}
              <p>
                A classic men's barbershop keeping the old trade alive — precision cuts, straight-razor shaves and a cold tonic at the end of every appointment.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label={"Razor & Tonic on Instagram"}>
                  ◎
                </a>
                {" "}
                <a href="#" aria-label={"Razor & Tonic on Facebook"}>
                  ⓕ
                </a>
                {" "}
                <a href="#" aria-label={"Razor & Tonic on X"}>
                  𝕏
                </a>
                {" "}
                <a href="#" aria-label={"Razor & Tonic on YouTube"}>
                  ▶
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
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
                  <a href="services.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="pricing.html">
                    Pricing
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Blog
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
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="services.html">
                    Classic Haircut
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Hot Towel Shave
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Beard Sculpting
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Skin Fade
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Kids' Cut
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Find Us
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <span className="fc-icon">
                    ⌖
                  </span>
                  {" 214 Main Street, Old Town District"}
                </li>
                {" "}
                <li>
                  <span className="fc-icon">
                    ✆
                  </span>
                  {" "}
                  <a href="tel:+15550182084">
                    (555) 018-2084
                  </a>
                </li>
                {" "}
                <li>
                  <span className="fc-icon">
                    ✉
                  </span>
                  {" "}
                  <a href="mailto:hello@razorandtonic.com">
                    hello@razorandtonic.com
                  </a>
                </li>
                {" "}
                <li>
                  <span className="fc-icon">
                    ◷
                  </span>
                  {" Tue – Sat · 9:00 AM – 7:00 PM"}
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
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Razor & Tonic. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Template by "}
              <a href="https://uiuxlabz.com" target="_blank" rel="noopener">
                uiuxlabz
              </a>
            </p>
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
