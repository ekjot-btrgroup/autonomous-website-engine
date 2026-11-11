// Converted from the HTML template mosque-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero.webp";
import a1 from "./assets/about-1.webp";
import a2 from "./assets/sermon-1.webp";
import a3 from "./assets/sermon-2.webp";
import a4 from "./assets/sermon-3.webp";
import a5 from "./assets/events-1.webp";
import a6 from "./assets/events-2.webp";
import a7 from "./assets/events-3.webp";
import a8 from "./assets/about-child.webp";
import a9 from "./assets/blog-mini-1.webp";
import a10 from "./assets/blog-1.webp";
import a11 from "./assets/blog-mini-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-mosque-0142">
      {" "}
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html" aria-label="The Beacon Mosque — Home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              <span>
                ◆
              </span>
            </span>
            {" The Beacon "}
          </a>
          {" "}
          <nav className="nav" aria-label="Primary navigation">
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
              {" "}
              <span className="nav-toggle-bar" />
              {" "}
              <span className="nav-toggle-bar" />
              {" "}
              <span className="nav-toggle-bar" />
              {" "}
            </button>
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
                <a className="nav-link" href="sermons.html">
                  Sermons
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
                <a className="nav-link" href="activities.html">
                  Activities
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="blog.html">
                  Blog
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
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <a className="btn btn-gold btn-donate" href="contact.html#donate">
            Donate
          </a>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" aria-label="Welcome">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="The Beacon Mosque with illuminated minarets at dusk" className="active" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container hero-content">
          {" "}
          <span className="kicker">
            Welcome to The Beacon Mosque
          </span>
          {" "}
          <h1>
            {"A Place of Peace, Learning & Community"}
          </h1>
          {" "}
          <p>
            Open hearts, open doors. Join us for daily prayers, inspiring sermons, and programmes that bring our community together in faith and fellowship.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="about.html" className="btn btn-gold">
              Discover Our Mosque
            </a>
            {" "}
            <a href="contact.html" className="btn btn-outline">
              Get in Touch
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="prayer-strip" aria-label="Daily prayer times">
        {" "}
        <div className="container">
          {" "}
          <div className="prayer-strip-inner">
            {" "}
            <div className="prayer-item">
              {" "}
              <div className="prayer-icon" aria-hidden="true">
                ☾
              </div>
              {" "}
              <div className="prayer-name">
                Fajr
              </div>
              {" "}
              <div className="prayer-time">
                5:42 AM
              </div>
              {" "}
            </div>
            {" "}
            <div className="prayer-item">
              {" "}
              <div className="prayer-icon" aria-hidden="true">
                ☀
              </div>
              {" "}
              <div className="prayer-name">
                Dhuhr
              </div>
              {" "}
              <div className="prayer-time">
                1:15 PM
              </div>
              {" "}
            </div>
            {" "}
            <div className="prayer-item">
              {" "}
              <div className="prayer-icon" aria-hidden="true">
                ☁
              </div>
              {" "}
              <div className="prayer-name">
                Asr
              </div>
              {" "}
              <div className="prayer-time">
                4:48 PM
              </div>
              {" "}
            </div>
            {" "}
            <div className="prayer-item">
              {" "}
              <div className="prayer-icon" aria-hidden="true">
                ☼
              </div>
              {" "}
              <div className="prayer-name">
                Maghrib
              </div>
              {" "}
              <div className="prayer-time">
                7:02 PM
              </div>
              {" "}
            </div>
            {" "}
            <div className="prayer-item">
              {" "}
              <div className="prayer-icon" aria-hidden="true">
                ✦
              </div>
              {" "}
              <div className="prayer-name">
                Isha
              </div>
              {" "}
              <div className="prayer-time">
                8:30 PM
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
      <section className="section section-light" aria-labelledby="about-heading">
        {" "}
        <div className="container">
          {" "}
          <div className="grid-2">
            {" "}
            <div className="about-intro-img reveal">
              {" "}
              <div className="dome-frame">
                {" "}
                <img src={a1} alt="Ornate archway inside The Beacon Mosque" loading="lazy" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <span className="kicker">
                Our Mosque
              </span>
              {" "}
              <h2 id="about-heading">
                A Beacon of Faith Since 1985
              </h2>
              {" "}
              <div className="star-divider" aria-hidden="true">
                <span className="star8" />
              </div>
              {" "}
              <p>
                For nearly four decades, The Beacon Mosque has stood as a spiritual home for the Muslim community, offering a welcoming space for prayer, education, and connection. Our doors are open to all, regardless of background or level of experience.
              </p>
              {" "}
              <p>
                From daily congregational prayers to weekend classes, from interfaith dialogues to community iftars — we are a living, breathing community centre rooted in the timeless values of Islam.
              </p>
              {" "}
              <a href="about.html" className="btn btn-emerald">
                Learn Our Story
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
      <section className="section section-dark" aria-label="Our community in numbers">
        {" "}
        <div className="container">
          {" "}
          <div className="about-stats">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                38
              </div>
              {" "}
              <div className="stat-label">
                Years Serving
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                4,200+
              </div>
              {" "}
              <div className="stat-label">
                Community Members
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                340
              </div>
              {" "}
              <div className="stat-label">
                Youth Enrolled
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-number">
                120+
              </div>
              {" "}
              <div className="stat-label">
                Annual Events
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
      <section className="section section-cream" aria-labelledby="sermons-heading">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="kicker">
              Friday Sermons
            </span>
            {" "}
            <h2 id="sermons-heading">
              Recent Khutbahs
            </h2>
            {" "}
            <div className="star-divider" aria-hidden="true">
              <span className="star8" />
            </div>
            {" "}
            <p>
              Listen to recent Friday sermons delivered by our imams and guest scholars, covering faith, family, and contemporary life.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-3">
            {" "}
            <article className="card sermon-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a2} alt="Imam delivering Friday sermon at the minbar" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 15 Aug 2026
                  </span>
                  {" "}
                  <span>
                    👤 Imam Dawud
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  Patience in Times of Trial
                </h3>
                {" "}
                <p>
                  Reflections on the Qur'anic stories of Prophet Ayyub and the enduring value of sabr in modern life.
                </p>
                {" "}
                <a href="sermons.html" className="card-link">
                  Listen to Sermon →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card sermon-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a3} alt="Scholar speaking at the mosque pulpit" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 8 Aug 2026
                  </span>
                  {" "}
                  <span>
                    👤 Dr. Aisha Rahman
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  The Mercy of the Prophet
                </h3>
                {" "}
                <p>
                  Exploring the profound compassion of Prophet Muhammad (PBUH) and how we can embody mercy in our daily interactions.
                </p>
                {" "}
                <a href="sermons.html" className="card-link">
                  Listen to Sermon →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card sermon-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a4} alt="Quranic calligraphy and prayer beads" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 1 Aug 2026
                  </span>
                  {" "}
                  <span>
                    👤 Imam Dawud
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  Quran and the Modern Heart
                </h3>
                {" "}
                <p>
                  How the timeless guidance of the Quran speaks directly to the challenges and questions of our time.
                </p>
                {" "}
                <a href="sermons.html" className="card-link">
                  Listen to Sermon →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--space-md)" }}>
            <a href="sermons.html" className="btn btn-outline-gold">
              View All Sermons
            </a>
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section-light" aria-labelledby="events-heading">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="kicker">
              Upcoming Events
            </span>
            {" "}
            <h2 id="events-heading">
              Join Us
            </h2>
            {" "}
            <div className="star-divider" aria-hidden="true">
              <span className="star8" />
            </div>
            {" "}
            <p>
              From community iftars to educational workshops, there is always something happening at The Beacon Mosque.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-3">
            {" "}
            <article className="card event-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a5} alt="Community gathering at the mosque" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 5 Sep 2026
                  </span>
                  {" "}
                  <span>
                    🕒 6:30 PM
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  Community Iftar Dinner
                </h3>
                {" "}
                <p>
                  Join us for a blessed evening of food, fellowship, and prayer. All are welcome to break bread together.
                </p>
                {" "}
                <a href="events.html" className="card-link">
                  Event Details →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card event-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a6} alt="Islamic study circle" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 12 Sep 2026
                  </span>
                  {" "}
                  <span>
                    🕒 10:00 AM
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  Seerah Studies Weekend
                </h3>
                {" "}
                <p>
                  A two-day intensive on the life of the Prophet (PBUH) with guest scholar Shaykh Omar Hassan.
                </p>
                {" "}
                <a href="events.html" className="card-link">
                  Event Details →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card event-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a7} alt="Youth group activity at the mosque" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  {" "}
                  <span>
                    📅 19 Sep 2026
                  </span>
                  {" "}
                  <span>
                    🕒 2:00 PM
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  Youth Open Mic Night
                </h3>
                {" "}
                <p>
                  Our talented youth share nasheeds, poetry, and spoken word. Families and friends warmly invited.
                </p>
                {" "}
                <a href="events.html" className="card-link">
                  Event Details →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--space-md)" }}>
            <a href="events.html" className="btn btn-outline-gold">
              View All Events
            </a>
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section-cream" aria-labelledby="activities-heading">
        {" "}
        <div className="container">
          {" "}
          <div className="grid-2">
            {" "}
            <div className="reveal">
              {" "}
              <span className="kicker">
                {"Children & Youth"}
              </span>
              {" "}
              <h2 id="activities-heading">
                Nurturing the Next Generation
              </h2>
              {" "}
              <div className="star-divider" aria-hidden="true">
                <span className="star8" />
              </div>
              {" "}
              <p>
                Our children's and youth programmes combine Islamic education with creative fun, building confidence, character, and a lifelong love of faith.
              </p>
              {" "}
              <p>
                From weekly Qur'an classes and Arabic story-time to sports tournaments and leadership camps, every activity is designed to inspire young hearts and minds.
              </p>
              {" "}
              <a href="activities.html" className="btn btn-emerald">
                Explore Activities
              </a>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="dome-frame" style={{ maxWidth: "320px", margin: "0 auto" }}>
                {" "}
                <img src={a8} alt="Children participating in a mosque activity" loading="lazy" />
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
      <section className="section section-light" aria-labelledby="blog-heading">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="kicker">
              From the Blog
            </span>
            {" "}
            <h2 id="blog-heading">
              {"Reflections & Insights"}
            </h2>
            {" "}
            <div className="star-divider" aria-hidden="true">
              <span className="star8" />
            </div>
            {" "}
            <p>
              Thoughtful articles on faith, community life, and spirituality from our imams and guest contributors.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid-3">
            {" "}
            <article className="card blog-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a9} alt="Open Quran with decorative bookmark" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  <span>
                    📅 28 Aug 2026
                  </span>
                </div>
                {" "}
                <h3>
                  Finding Stillness in a Noisy World
                </h3>
                {" "}
                <p>
                  Practical tips for incorporating daily dhikr and mindfulness into a busy schedule.
                </p>
                {" "}
                <a href="blog.html" className="card-link">
                  Read More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card blog-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a10} alt="Community iftar table at the mosque" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  <span>
                    📅 22 Aug 2026
                  </span>
                </div>
                {" "}
                <h3>
                  The Blessing of Community Iftars
                </h3>
                {" "}
                <p>
                  Why sharing a meal together strengthens our bonds and multiplies our blessings.
                </p>
                {" "}
                <a href="blog.html" className="card-link">
                  Read More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card blog-card reveal">
              {" "}
              <div className="card-img">
                {" "}
                <img src={a11} alt="Islamic geometric pattern" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="card-meta">
                  <span>
                    📅 15 Aug 2026
                  </span>
                </div>
                {" "}
                <h3>
                  Geometry of the Divine
                </h3>
                {" "}
                <p>
                  Exploring the spiritual symbolism behind Islamic geometric art and architecture.
                </p>
                {" "}
                <a href="blog.html" className="card-link">
                  Read More →
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "var(--space-md)" }}>
            <a href="blog.html" className="btn btn-outline-gold">
              Read All Articles
            </a>
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-banner reveal" aria-labelledby="cta-heading">
        {" "}
        <div className="container">
          {" "}
          <h2 id="cta-heading">
            Be Part of Our Community
          </h2>
          {" "}
          <p>
            Whether you are a lifelong Muslim or just curious about Islam, you are welcome at The Beacon Mosque. Come visit, ask questions, and find your place.
          </p>
          {" "}
          <a href="contact.html" className="btn btn-gold">
            Plan Your Visit
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-col footer-about">
            {" "}
            <a className="brand" href="index.html" aria-label="The Beacon Mosque — Home">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                <span>
                  ◆
                </span>
              </span>
              {" The Beacon "}
            </a>
            {" "}
            <p>
              For nearly four decades, The Beacon Mosque has been a spiritual home — a place of prayer, learning, and community. Everyone is welcome.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 22v-8h2.5l.5-3H13V9.5c0-.9.3-1.5 1.6-1.5H16V5.2C15.7 5.2 14.7 5 13.6 5 11.2 5 9.5 6.5 9.5 9v2H7v3h2.5v8z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 2c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.2.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.2 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.2-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.7-.2-1.8-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.4a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 8.9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm6.9-9.1a1.3 1.3 0 1 1-2.5 0 1.3 1.3 0 0 1 2.5 0z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="X (Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.9 7.9L23.2 22h-6.4l-5-6.6L6 22H2.9l7.4-8.5L1.6 2h6.6l4.5 6 5.2-6zm-1.1 18h1.8L7.5 3.9H5.6z" />
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
                <a href="about.html">
                  About Us
                </a>
              </li>
              {" "}
              <li>
                <a href="sermons.html">
                  Sermons
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
                <a href="activities.html">
                  Activities
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
                  Our Team
                </a>
              </li>
              {" "}
              <li>
                <a href="testimonials.html">
                  Testimonials
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
              Prayer Times
            </h3>
            {" "}
            <div className="footer-prayer-item">
              {" "}
              <span className="footer-prayer-name">
                Fajr
              </span>
              {" "}
              <span className="footer-prayer-time">
                5:42 AM
              </span>
              {" "}
            </div>
            {" "}
            <div className="footer-prayer-item">
              {" "}
              <span className="footer-prayer-name">
                Dhuhr
              </span>
              {" "}
              <span className="footer-prayer-time">
                1:15 PM
              </span>
              {" "}
            </div>
            {" "}
            <div className="footer-prayer-item">
              {" "}
              <span className="footer-prayer-name">
                Asr
              </span>
              {" "}
              <span className="footer-prayer-time">
                4:48 PM
              </span>
              {" "}
            </div>
            {" "}
            <div className="footer-prayer-item">
              {" "}
              <span className="footer-prayer-name">
                Maghrib
              </span>
              {" "}
              <span className="footer-prayer-time">
                7:02 PM
              </span>
              {" "}
            </div>
            {" "}
            <div className="footer-prayer-item">
              {" "}
              <span className="footer-prayer-name">
                Isha
              </span>
              {" "}
              <span className="footer-prayer-time">
                8:30 PM
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Newsletter
            </h3>
            {" "}
            <p>
              Stay connected with our weekly newsletter featuring sermons, events, and community news.
            </p>
            {" "}
            <form className="newsletter-form" data-form="" noValidate={true}>
              {" "}
              <input type="email" name="email" placeholder="Your email address" required={true} aria-label="Email address" />
              {" "}
              <button className="btn btn-gold" type="submit">
                Subscribe
              </button>
              {" "}
              <p className="form-ok">
                Thank you for subscribing. You will receive our next edition.
              </p>
              {" "}
              <p className="form-err">
                Please enter a valid email address.
              </p>
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
              {" The Beacon Mosque. All rights reserved."}
            </p>
            {" "}
            <p>
              Built with care as a free HTML template.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <a className="back-to-top" href="#top" aria-label="Back to top">
        ↑
      </a>
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
    </div>
  );
}
