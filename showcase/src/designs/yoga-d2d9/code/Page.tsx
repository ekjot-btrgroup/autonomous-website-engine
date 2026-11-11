// Converted from the HTML template yoga-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/discount-bg.webp";
import a1 from "./assets/hero.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/single.webp";
import a4 from "./assets/class-1.webp";
import a5 from "./assets/class-2.webp";
import a6 from "./assets/class-3.webp";
import a7 from "./assets/class-4.webp";
import a8 from "./assets/class-5.webp";
import a9 from "./assets/class-6.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";
import a13 from "./assets/testimonial-4.webp";
import a14 from "./assets/blog-1.webp";
import a15 from "./assets/blog-2.webp";
import a16 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-yoga-d2d9">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="header-inner">
          {" "}
          <a href="index.html" className="logo" aria-label="Sattva Studio home">
            {" "}
            <span className="logo-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 2c1.8 3 3 5.2 3 7.4 0 1.9-1.2 3.4-3 3.4s-3-1.5-3-3.4C9 7.2 10.2 5 12 2Z" />
                <path d="M6 9c.5 1.8.7 3.2.7 4.6 0 2.8-2 4.6-4.4 4.4 1-2.5 1.6-4.6 1.6-6.3 0-1-.2-2-.8-3L6 9Z" />
                <path d="M18 9l2.9-.3c-.6 1-.8 2-.8 3 0 1.7.6 3.8 1.6 6.3-2.4.2-4.4-1.6-4.4-4.4 0-1.4.2-2.8.7-4.6Z" />
                <path d="M12 12.8c1.4 1.6 3.1 2.9 5 4 .6 2 .6 3.9.1 5.8h-5.1c1.9-.9 3.4-1.9 4.7-3.2C14.6 18 13.2 17.4 12 17.4s-2.6.6-4.7 2c1.3 1.3 2.8 2.3 4.7 3.2H6.9c-.5-1.9-.5-3.8.1-5.8 1.9-1.1 3.6-2.4 5-4Z" />
              </svg>
              {" "}
            </span>
            {" Sattva "}
          </a>
          {" "}
          <nav aria-label="Primary">
            {" "}
            <button className="nav-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-links">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav-links" id="nav-links">
              {" "}
              <li>
                <a href="index.html" className="nav-link">
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
                <a href="class.html" className="nav-link">
                  Classes
                </a>
              </li>
              {" "}
              <li>
                <a href="price.html" className="nav-link">
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
                <a href="team.html" className="nav-link">
                  Team
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="btn btn-primary btn-sm nav-cta">
            Book a Class
          </a>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-bg" aria-hidden="true">
            {" "}
            <img src={a1} alt="" className="active" />
            {" "}
            <img src={a2} alt="" />
            {" "}
            <img src={a3} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" aria-hidden="true" />
          {" "}
          <div className="container hero-content">
            {" "}
            <p className="kicker">
              Breathe · Flow · Restore
            </p>
            {" "}
            <h1>
              Find your center on the mat and beyond.
            </h1>
            {" "}
            <p>
              Sattva is a studio built on stillness. Daily classes in Hatha, Vinyasa and Yin, guided by teachers who treat your breath as the compass and your body as the home.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="class.html" className="btn btn-primary">
                Explore Classes
              </a>
              {" "}
              <a href="contact.html" className="btn btn-ghost">
                Book a Free Trial
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                <h3>
                  12+
                </h3>
                <p>
                  Years of practice
                </p>
              </div>
              {" "}
              <div className="hero-stat">
                <h3>
                  40+
                </h3>
                <p>
                  Classes every week
                </p>
              </div>
              {" "}
              <div className="hero-stat">
                <h3>
                  900+
                </h3>
                <p>
                  {"Students & members"}
                </p>
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
          <div className="container split-grid reveal">
            {" "}
            <div className="split-image">
              {" "}
              <img src={a2} alt="A yogi in seated meditation pose at Sattva studio" />
              {" "}
            </div>
            {" "}
            <div className="split-text">
              {" "}
              <p className="kicker">
                Welcome to Sattva
              </p>
              {" "}
              <h2>
                Yoga as a daily homecoming
              </h2>
              {" "}
              <p>
                Sattva means harmony — the quiet place inside where body, mind and breath meet. We built this studio as a soft landing for everyone, from first-timers to lifelong practitioners.
              </p>
              {" "}
              <p>
                Expect small classes, hands-on guidance and a room that smells like cedar and tea. No pressure to be flexible. No pace but your own.
              </p>
              {" "}
              <a href="about.html" className="btn btn-moss">
                Our Story
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-title reveal">
              {" "}
              <p className="kicker">
                What we practice
              </p>
              {" "}
              <h2>
                A practice for every layer of you
              </h2>
              {" "}
            </div>
            {" "}
            <div className="features-grid">
              {" "}
              <article className="feature-card reveal">
                {" "}
                <div className="feature-icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 3c.9 1.9 1.5 3.5 1.5 5a2 2 0 0 1-3 0c0-1.5.6-3.1 1.5-5Z" />
                    <path d="M9 21c1-2.4 1.8-4.6 1.8-6.4 0-2.1-1.4-3.4-3.3-3.4C4.8 11.2 3.5 12.8 3.5 15c0 2 1.2 3.9 3 5.5L9 21Z" />
                    <path d="M15 21c-1-2.4-1.8-4.6-1.8-6.4 0-2.1 1.4-3.4 3.3-3.4 1.7 0 3 1.6 3 3.8 0 2-1.2 3.9-3 5.5L15 21Z" />
                    <path d="M12 14.5c1.8 1.7 3.7 2.9 5.6 3.4M12 14.5c-1.8 1.7-3.7 2.9-5.6 3.4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Heal the Body
                </h3>
                {" "}
                <p>
                  Releases tension held in shoulders, hips and spine through mindful alignment and steady breath.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal reveal-delay-1">
                {" "}
                <div className="feature-icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Refresh the Mind
                </h3>
                {" "}
                <p>
                  Pranayama and guided stillness that calm the nervous system and quiet the inner chatter.
                </p>
                {" "}
              </article>
              {" "}
              <article className="feature-card reveal reveal-delay-2">
                {" "}
                <div className="feature-icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c.9 1.9 1.5 3.5 1.5 5a2 2 0 0 1-3 0c0-1.5.6-3.1 1.5-5Z" />
                    <path d="M8.2 21c1.1-2.4 2-4.4 2-6 0-1.8-1.3-2.7-2.9-2.7C5.6 12.3 4.5 13.6 4.5 15.4 4.5 17.2 5.6 19.2 7 21h1.2Z" />
                    <path d="M15.8 21c-1.1-2.4-2-4.4-2-6 0-1.8 1.3-2.7 2.9-2.7 1.7 0 2.8 1.3 2.8 3.1 0 1.8-1.1 3.8-2.5 5.6h-1.2Z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Soften the Heart
                </h3>
                {" "}
                <p>
                  Restorative holds and heart-openers that let you land fully, at the pace your body asks for.
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
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-title reveal">
              {" "}
              <p className="kicker">
                This week at Sattva
              </p>
              {" "}
              <h2>
                Classes we love to teach
              </h2>
              {" "}
            </div>
            {" "}
            <div className="class-grid">
              {" "}
              <article className="class-card reveal">
                {" "}
                <img src={a4} alt="Hatha Foundations class in progress at Sattva" />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    Hatha Foundations
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Mon · Wed · Fri
                    </span>
                    <span>
                      8:00 – 9:00
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Slow, grounding alignment for beginners and anyone returning to the mat.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal reveal-delay-1">
                {" "}
                <img src={a5} alt="Vinyasa Flow class in progress at Sattva" />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    Vinyasa Flow
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Tue · Thu · Sat
                    </span>
                    <span>
                      9:15 – 10:15
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Linking breath to movement in a warm, fluid sequence that builds heat and ease.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal reveal-delay-2">
                {" "}
                <img src={a6} alt="Iyengar Alignment class with props at Sattva" />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    Iyengar Alignment
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Mon · Fri
                    </span>
                    <span>
                      17:30 – 18:45
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Precision work with blocks and straps, so every pose serves your unique body.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <img src={a7} alt="Kundalini Awakening class at Sattva" />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    Kundalini Awakening
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Wed · Sat
                    </span>
                    <span>
                      11:00 – 12:15
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Energy, mantra and breathwork to wake up your inner spark and lift the spirit.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal reveal-delay-1">
                {" "}
                <img src={a8} alt="Restorative Yin class at Sattva" />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    Restorative Yin
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Thu · Sun
                    </span>
                    <span>
                      19:00 – 20:00
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Long, quiet holds with blankets and bolsters — the deepest pause of your week.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal reveal-delay-2">
                {" "}
                <img src={a9} alt={"Prenatal & Postnatal yoga class at Sattva"} />
                {" "}
                <div className="class-card-body">
                  {" "}
                  <h3>
                    {"Prenatal & Postnatal"}
                  </h3>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span>
                      Tue · Thu
                    </span>
                    <span>
                      10:30 – 11:30
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Gentle, supported practice for every trimester and the early months after.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-title reveal" style={{ marginTop: "3rem", marginBottom: "0" }}>
              {" "}
              <a href="class.html" className="btn btn-moss">
                View Full Schedule
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="discount-banner reveal">
          {" "}
          <div className="container">
            {" "}
            <p className="kicker" style={{ color: "var(--clay-light)" }}>
              New students
            </p>
            {" "}
            <h2>
              Your first month, 30% off
            </h2>
            {" "}
            <p>
              Come as you are. Every new member gets a discounted first month, a free mat and a private alignment session with a teacher.
            </p>
            {" "}
            <a href="contact.html" className="btn btn-primary">
              Claim the Offer
            </a>
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
            <div className="section-title reveal">
              {" "}
              <p className="kicker">
                Memberships
              </p>
              {" "}
              <h2>
                Simple plans, steady practice
              </h2>
              {" "}
            </div>
            {" "}
            <div className="pricing-grid">
              {" "}
              <article className="pricing-card reveal">
                {" "}
                <h3>
                  Foundation
                </h3>
                {" "}
                <div className="pricing-price">
                  {"$49 "}
                  <small>
                    / month
                  </small>
                </div>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    4 classes every month
                  </li>
                  {" "}
                  <li>
                    All class styles included
                  </li>
                  {" "}
                  <li>
                    Access to the member lounge
                  </li>
                  {" "}
                  <li>
                    Community meditations
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="contact.html" className="btn btn-ghost">
                  Choose Foundation
                </a>
                {" "}
              </article>
              {" "}
              <article className="pricing-card featured reveal reveal-delay-1">
                {" "}
                <span className="pricing-badge">
                  Most loved
                </span>
                {" "}
                <h3>
                  Flow
                </h3>
                {" "}
                <div className="pricing-price">
                  {"$89 "}
                  <small>
                    / month
                  </small>
                </div>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    Unlimited group classes
                  </li>
                  {" "}
                  <li>
                    All class styles included
                  </li>
                  {" "}
                  <li>
                    Bring a friend each month
                  </li>
                  {" "}
                  <li>
                    {"10% off workshops & retreats"}
                  </li>
                  {" "}
                  <li>
                    Free rental props
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="contact.html" className="btn btn-primary">
                  Choose Flow
                </a>
                {" "}
              </article>
              {" "}
              <article className="pricing-card reveal reveal-delay-2">
                {" "}
                <h3>
                  Sanctuary
                </h3>
                {" "}
                <div className="pricing-price">
                  {"$139 "}
                  <small>
                    / month
                  </small>
                </div>
                {" "}
                <ul className="pricing-features">
                  {" "}
                  <li>
                    Everything in Flow
                  </li>
                  {" "}
                  <li>
                    2 private sessions monthly
                  </li>
                  {" "}
                  <li>
                    Quarterly 1:1 alignment review
                  </li>
                  {" "}
                  <li>
                    Priority retreat booking
                  </li>
                  {" "}
                  <li>
                    Guest pass for a loved one
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="contact.html" className="btn btn-ghost">
                  Choose Sanctuary
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
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-title reveal">
              {" "}
              <p className="kicker">
                Kind words
              </p>
              {" "}
              <h2>
                What our students say
              </h2>
              {" "}
            </div>
            {" "}
            <div className="testimonials-grid">
              {" "}
              <article className="testimonial-card reveal">
                {" "}
                <div className="testimonial-top">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a10} alt="Portrait of Amara Singh" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Amara Singh
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Member since 2023
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="testimonial-text">
                  "I walked in stiff from a desk job and left three weeks later sleeping through the night for the first time in years. Sattva changed how I hold my whole day."
                </p>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card reveal reveal-delay-1">
                {" "}
                <div className="testimonial-top">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a11} alt="Portrait of Jonas Keller" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Jonas Keller
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Vinyasa regular
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="testimonial-text">
                  "The teachers remember your name, your injuries and your progress. It's the opposite of a big anonymous studio — it's a home."
                </p>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card reveal reveal-delay-2">
                {" "}
                <div className="testimonial-top">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a12} alt="Portrait of Priya Desai" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Priya Desai
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Prenatal student
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="testimonial-text">
                  "I practiced through both trimesters here. The prenatal class held me, literally and emotionally, through the whole journey."
                </p>
                {" "}
              </article>
              {" "}
              <article className="testimonial-card reveal reveal-delay-3">
                {" "}
                <div className="testimonial-top">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a13} alt="Portrait of Leo Fontaine" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Leo Fontaine
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Weekend retreats
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="testimonial-text">
                  "The weekend retreat at the lodge was pure magic — mornings by the creek, breathwork at sunset. I've been back three times."
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
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-title reveal">
              {" "}
              <p className="kicker">
                From the journal
              </p>
              {" "}
              <h2>
                {"Notes on breath & practice"}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a14} alt="Sunrise yoga pose on the studio deck" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <p className="blog-cat">
                    Practice
                  </p>
                  {" "}
                  <h3>
                    <a href="single.html">
                      Five Morning Poses to Wake Up Your Spine
                    </a>
                  </h3>
                  {" "}
                  <p>
                    A gentle five-minute sequence to greet the day with a soft back and an open chest.
                  </p>
                  {" "}
                  <div className="blog-meta">
                    <span>
                      8 min read
                    </span>
                    <span>
                      May 12, 2026
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal reveal-delay-1">
                {" "}
                <img src={a15} alt="Hands in meditation mudra by a window" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <p className="blog-cat">
                    Breath
                  </p>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Why Breath Comes Before Movement
                    </a>
                  </h3>
                  {" "}
                  <p>
                    The simplest skill in yoga is also the one that rewires everything else — starting with the exhale.
                  </p>
                  {" "}
                  <div className="blog-meta">
                    <span>
                      5 min read
                    </span>
                    <span>
                      Apr 28, 2026
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal reveal-delay-2">
                {" "}
                <img src={a16} alt="Still life of a yoga mat, journal and tea" />
                {" "}
                <div className="blog-card-body">
                  {" "}
                  <p className="blog-cat">
                    Slow Practice
                  </p>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Yin vs. Yang: Finding Your Practice Pace
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Not every season calls for the same effort. Here is how to listen for what today needs.
                  </p>
                  {" "}
                  <div className="blog-meta">
                    <span>
                      6 min read
                    </span>
                    <span>
                      Apr 15, 2026
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-title reveal" style={{ marginTop: "3rem", marginBottom: "0" }}>
              {" "}
              <a href="blog.html" className="btn btn-ghost">
                Read the Journal
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
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo" aria-label="Sattva Studio home">
                {" "}
                <span className="logo-mark" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M12 2c1.8 3 3 5.2 3 7.4 0 1.9-1.2 3.4-3 3.4s-3-1.5-3-3.4C9 7.2 10.2 5 12 2Z" />
                    <path d="M6 9c.5 1.8.7 3.2.7 4.6 0 2.8-2 4.6-4.4 4.4 1-2.5 1.6-4.6 1.6-6.3 0-1-.2-2-.8-3L6 9Z" />
                    <path d="M18 9l2.9-.3c-.6 1-.8 2-.8 3 0 1.7.6 3.8 1.6 6.3-2.4.2-4.4-1.6-4.4-4.4 0-1.4.2-2.8.7-4.6Z" />
                    <path d="M12 12.8c1.4 1.6 3.1 2.9 5 4 .6 2 .6 3.9.1 5.8h-5.1c1.9-.9 3.4-1.9 4.7-3.2C14.6 18 13.2 17.4 12 17.4s-2.6.6-4.7 2c1.3 1.3 2.8 2.3 4.7 3.2H6.9c-.5-1.9-.5-3.8.1-5.8 1.9-1.1 3.6-2.4 5-4Z" />
                  </svg>
                  {" "}
                </span>
                {" Sattva "}
              </a>
              {" "}
              <p>
                A quiet studio for yoga, breath and retreats — built in the valley, practiced one breath at a time.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Sattva on Instagram">
                  Ig
                </a>
                {" "}
                <a href="#" aria-label="Sattva on Facebook">
                  Fb
                </a>
                {" "}
                <a href="#" aria-label="Sattva on YouTube">
                  Yt
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
                    About
                  </a>
                </li>
                {" "}
                <li>
                  <a href="class.html">
                    Classes
                  </a>
                </li>
                {" "}
                <li>
                  <a href="price.html">
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
                  <a href="team.html">
                    Team
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
                Studio
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Book a Class
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Private Sessions
                  </a>
                </li>
                {" "}
                <li>
                  <a href="class.html">
                    Retreats
                  </a>
                </li>
                {" "}
                <li>
                  <a href="team.html">
                    Our Teachers
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
                Visit
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  12 Cedar Lane
                </li>
                {" "}
                <li>
                  Maplewood Valley, CA
                </li>
                {" "}
                <li>
                  Mon – Sun, 6:00 – 20:30
                </li>
                {" "}
                <li>
                  hello@sattvastudio.co
                </li>
                {" "}
                <li>
                  +1 (555) 019-2847
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
              {" Sattva Studio. Breathe in, breathe out."}
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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
