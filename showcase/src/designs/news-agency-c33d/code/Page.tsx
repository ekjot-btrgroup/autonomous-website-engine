// Converted from the HTML template news-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/banner-img.webp";
import a1 from "./assets/news-1.webp";
import a2 from "./assets/news-2.webp";
import a3 from "./assets/news-3.webp";
import a4 from "./assets/news-4.webp";
import a5 from "./assets/banner-2.webp";
import a6 from "./assets/features-technology.webp";
import a7 from "./assets/features-sports-1.webp";
import a8 from "./assets/features-fashion.webp";
import a9 from "./assets/features-life-style.webp";
import a10 from "./assets/news-5.webp";
import a11 from "./assets/news-6.webp";
import a12 from "./assets/news-7.webp";
import a13 from "./assets/news-8.webp";
import a14 from "./assets/lifestyle-1.webp";
import a15 from "./assets/newsletter-1.webp";
import a16 from "./assets/features-background.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Serif:wght@400;700;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-news-agency-c33d">
      {" "}
      {" "}
      <div className="ticker" role="marquee" aria-label="Breaking news ticker">
        {" "}
        <div className="ticker__label">
          Breaking
        </div>
        {" "}
        <div className="ticker__track">
          {" "}
          <span className="ticker__item">
            UN General Assembly convenes emergency session on climate relief funding
          </span>
          {" "}
          <span className="ticker__item">
            Global markets rally as central banks signal rate stability through Q4
          </span>
          {" "}
          <span className="ticker__item">
            Major cybersecurity breach impacts financial institutions across three continents
          </span>
          {" "}
          <span className="ticker__item">
            Space agency confirms water ice deposits on lunar south pole
          </span>
          {" "}
          <span className="ticker__item">
            International summit addresses AI governance framework proposals
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="header__brand">
            {" "}
            <div className="header__logo">
              News
              <span>
                ers
              </span>
            </div>
            {" "}
            <div className="header__tagline">
              The World, Unfiltered
            </div>
            {" "}
          </a>
          {" "}
          <nav className="header__nav" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="header__nav-link">
              Home
            </a>
            {" "}
            <a href="about.html" className="header__nav-link">
              About
            </a>
            {" "}
            <a href="services.html" className="header__nav-link">
              Services
            </a>
            {" "}
            <a href="contact.html" className="header__nav-link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header__cta">
            {" "}
            <a href="contact.html" className="btn btn--primary btn--sm">
              Get a Quote
            </a>
            {" "}
          </div>
          {" "}
          <button className="header__toggle" aria-label="Toggle navigation" aria-expanded="false">
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
      {" "}
      <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
        {" "}
        <a href="index.html" className="mobile-nav__link">
          Home
        </a>
        {" "}
        <a href="about.html" className="mobile-nav__link">
          About
        </a>
        {" "}
        <a href="services.html" className="mobile-nav__link">
          Services
        </a>
        {" "}
        <a href="contact.html" className="mobile-nav__link">
          Contact
        </a>
        {" "}
        <div className="mobile-nav__cta">
          {" "}
          <a href="contact.html" className="btn btn--primary">
            Get a Quote
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="container">
          {" "}
          <div className="hero__grid">
            {" "}
            <div className="hero__lead reveal-scale">
              {" "}
              <img src={a0} alt="Lead story - Global summit on cybersecurity" loading="eager" />
              {" "}
              <div className="hero__lead-overlay" />
              {" "}
              <div className="hero__lead-content">
                {" "}
                <span className="hero__lead-badge">
                  Exclusive
                </span>
                {" "}
                <h1 className="hero__lead-title">
                  Inside the Race to Secure Global Digital Infrastructure
                </h1>
                {" "}
                <p className="hero__lead-excerpt">
                  An unprecedented coalition of 47 nations has agreed to a binding treaty on cybersecurity standards, marking the most significant digital governance milestone in a decade.
                </p>
                {" "}
                <div className="hero__lead-meta">
                  {" "}
                  <span className="author">
                    By Sarah Mitchell
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                  <span>
                    8 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <aside className="hero__sidebar">
              {" "}
              <a href="#" className="hero__sidebar-item reveal-right">
                {" "}
                <img src={a1} alt="Climate conference" />
                {" "}
                <div className="hero__sidebar-item-text">
                  {" "}
                  <h3>
                    Climate Conference Yields Historic Carbon Agreement
                  </h3>
                  {" "}
                  <span>
                    12 min ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="#" className="hero__sidebar-item reveal-right">
                {" "}
                <img src={a2} alt="Tech merger" />
                {" "}
                <div className="hero__sidebar-item-text">
                  {" "}
                  <h3>
                    Two Tech Giants Announce $80B Merger Amid Antitrust Scrutiny
                  </h3>
                  {" "}
                  <span>
                    34 min ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="#" className="hero__sidebar-item reveal-right">
                {" "}
                <img src={a3} alt="Space exploration" />
                {" "}
                <div className="hero__sidebar-item-text">
                  {" "}
                  <h3>
                    Private Space Firm Achieves First Reusable Orbital Vehicle
                  </h3>
                  {" "}
                  <span>
                    1 hour ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="#" className="hero__sidebar-item reveal-right">
                {" "}
                <img src={a4} alt="Global markets" />
                {" "}
                <div className="hero__sidebar-item-text">
                  {" "}
                  <h3>
                    Asian Markets Surge on New Trade Agreement Framework
                  </h3>
                  {" "}
                  <span>
                    2 hours ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
            </aside>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--alt">
        {" "}
        <div className="container">
          {" "}
          <div className="wire-feed__header reveal">
            {" "}
            <div>
              {" "}
              <div className="section-label">
                Latest Dispatches
              </div>
              {" "}
              <h2 className="section-title">
                Wire Feed
              </h2>
              {" "}
            </div>
            {" "}
            <a href="#" className="btn btn--outline btn--sm">
              View All Stories
            </a>
            {" "}
          </div>
          {" "}
          <div className="wire-feed__grid">
            {" "}
            <article className="wire-card wire-card--featured reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a5} alt="International diplomacy summit" />
                {" "}
                <span className="wire-card__category">
                  World
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  Diplomatic Breakthrough: Peace Talks Resume After 18-Month Hiatus
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  Negotiators from both sides have returned to the table in Geneva, with international mediators expressing cautious optimism about the latest round of discussions that could reshape the regional power balance.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    James Ortega
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="wire-card reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a6} alt="AI regulation" />
                {" "}
                <span className="wire-card__category">
                  Technology
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  EU Passes Landmark AI Transparency Act
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  New legislation requires all AI systems to disclose training data sources and algorithmic decision-making processes.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    Lena Brandt
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="wire-card reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a7} alt="Olympic preparations" />
                {" "}
                <span className="wire-card__category">
                  Sports
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  Olympic Committee Unveils Sustainable Venue Designs for 2032
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  All competition venues will be powered entirely by renewable energy, setting a new standard for international sporting events.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    Carlos Vega
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="wire-card reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a8} alt="Fashion industry" />
                {" "}
                <span className="wire-card__category">
                  Lifestyle
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  Sustainable Fashion Movement Reaches Tipping Point
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  Major retailers commit to full supply chain transparency by 2028 as consumer demand for ethical fashion surges.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    Priya Sharma
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="wire-card reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a9} alt="Health research" />
                {" "}
                <span className="wire-card__category">
                  Health
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  Global Life Expectancy Rises for First Time Since 2019
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  New WHO data shows a 2.3-year increase in average life expectancy, driven by vaccine access and healthcare investment.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    Dr. Amina Osei
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="wire-card reveal">
              {" "}
              <div className="wire-card__img">
                {" "}
                <img src={a10} alt="Energy sector" />
                {" "}
                <span className="wire-card__category">
                  Economy
                </span>
                {" "}
              </div>
              {" "}
              <div className="wire-card__body">
                {" "}
                <h3 className="wire-card__title">
                  Renewable Energy Investments Surpass Fossil Fuels for Third Year
                </h3>
                {" "}
                <p className="wire-card__excerpt">
                  Clean energy funding reaches $1.2 trillion globally, accelerating the transition in emerging markets.
                </p>
                {" "}
                <div className="wire-card__meta">
                  {" "}
                  <span className="author">
                    Michael Torres
                  </span>
                  {" "}
                  <time dateTime="2026-08-30">
                    Aug 30, 2026
                  </time>
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
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="category-section">
            {" "}
            <div>
              {" "}
              <div className="section-label reveal">
                World News
              </div>
              {" "}
              <h2 className="section-title reveal" style={{ marginBottom: "var(--sp-xl)" }}>
                Global Coverage
              </h2>
              {" "}
              <div className="category-section__main">
                {" "}
                <a href="#" className="category-card reveal-left">
                  {" "}
                  <div className="category-card__img">
                    {" "}
                    <img src={a11} alt="Diplomacy" />
                    {" "}
                  </div>
                  {" "}
                  <div className="category-card__body">
                    {" "}
                    <h3 className="category-card__title">
                      Diplomatic Tensions Rise Over Arctic Resource Claims
                    </h3>
                    {" "}
                    <span className="category-card__meta">
                      3 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="#" className="category-card reveal-left">
                  {" "}
                  <div className="category-card__img">
                    {" "}
                    <img src={a12} alt="Economy" />
                    {" "}
                  </div>
                  {" "}
                  <div className="category-card__body">
                    {" "}
                    <h3 className="category-card__title">
                      Central Banks Coordinate on Digital Currency Standards
                    </h3>
                    {" "}
                    <span className="category-card__meta">
                      5 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="#" className="category-card reveal-left">
                  {" "}
                  <div className="category-card__img">
                    {" "}
                    <img src={a13} alt="Environment" />
                    {" "}
                  </div>
                  {" "}
                  <div className="category-card__body">
                    {" "}
                    <h3 className="category-card__title">
                      Amazon Reforestation Initiative Shows Measurable Impact
                    </h3>
                    {" "}
                    <span className="category-card__meta">
                      6 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="#" className="category-card reveal-left">
                  {" "}
                  <div className="category-card__img">
                    {" "}
                    <img src={a14} alt="Culture" />
                    {" "}
                  </div>
                  {" "}
                  <div className="category-card__body">
                    {" "}
                    <h3 className="category-card__title">
                      Cultural Heritage Sites Receive UN Protection Upgrade
                    </h3>
                    {" "}
                    <span className="category-card__meta">
                      8 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <aside>
              {" "}
              <div className="sidebar-ad reveal-right">
                {" "}
                <img src={a15} alt="NEWSERS Weekly Digest" style={{ width: "100%", maxWidth: "200px" }} />
                {" "}
                <h4>
                  NEWSERS Weekly Digest
                </h4>
                {" "}
                <p>
                  Get the week's most important stories delivered to your inbox every Sunday.
                </p>
                {" "}
                <a href="contact.html" className="btn btn--primary btn--sm">
                  Subscribe Now
                </a>
                {" "}
              </div>
              {" "}
              <div className="sidebar-trending reveal-right" style={{ marginTop: "var(--sp-lg)" }}>
                {" "}
                <h3>
                  Trending Now
                </h3>
                {" "}
                <div className="trending-item">
                  {" "}
                  <span className="trending-item__num">
                    01
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <div className="trending-item__title">
                      Quantum Computing Breakthrough Promises Faster Drug Discovery
                    </div>
                    {" "}
                    <span className="trending-item__meta">
                      14.2k reads
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="trending-item">
                  {" "}
                  <span className="trending-item__num">
                    02
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <div className="trending-item__title">
                      Ocean Cleanup Project Removes 100,000 Tons of Plastic
                    </div>
                    {" "}
                    <span className="trending-item__meta">
                      11.8k reads
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="trending-item">
                  {" "}
                  <span className="trending-item__num">
                    03
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <div className="trending-item__title">
                      Urban Farming Initiative Transforms Former Industrial Zones
                    </div>
                    {" "}
                    <span className="trending-item__meta">
                      9.5k reads
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="trending-item">
                  {" "}
                  <span className="trending-item__num">
                    04
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <div className="trending-item__title">
                      Satellite Network Improves Disaster Response Time by 60%
                    </div>
                    {" "}
                    <span className="trending-item__meta">
                      8.1k reads
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </aside>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--alt">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter reveal-scale">
            {" "}
            <div className="newsletter__grid">
              {" "}
              <div className="newsletter__img">
                {" "}
                <img src={a16} alt="Global newsroom" />
                {" "}
              </div>
              {" "}
              <div className="newsletter__content">
                {" "}
                <div className="section-label">
                  Stay Informed
                </div>
                {" "}
                <h2 className="section-title">
                  The World, Unfiltered
                </h2>
                {" "}
                <p>
                  Subscribe to the NEWSERS daily briefing. No spin, no bias — just the stories that matter, delivered straight to your inbox at 6 AM.
                </p>
                {" "}
                <form className="newsletter__form" data-form="">
                  {" "}
                  <input type="email" placeholder="your@email.com" required={true} aria-label="Email address" />
                  {" "}
                  <button type="submit" className="btn btn--primary">
                    Subscribe
                  </button>
                  {" "}
                </form>
                {" "}
                <p className="newsletter__note">
                  Join 240,000+ readers. Unsubscribe anytime. We respect your inbox.
                </p>
                {" "}
                <div className="form-ok">
                  Welcome aboard! Check your inbox for a confirmation.
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <div className="header__logo">
                News
                <span>
                  ers
                </span>
              </div>
              {" "}
              <p>
                Independent journalism since 2012. Delivering unfiltered reporting from bureaus across six continents.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Twitter">
                  X
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  YT
                </a>
                {" "}
                <a href="#" aria-label="RSS">
                  RSS
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Sections
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    World
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Technology
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Economy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Sports
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Lifestyle
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Health
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
                Company
              </h4>
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
                  <a href="services.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Careers
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Ethics Policy
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
                Legal
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    Terms of Service
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Cookie Settings
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Accessibility
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Press Releases
                  </a>
                </li>
                {" "}
              </ul>
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
              {" NEWSERS Agency. All rights reserved."}
            </span>
            {" "}
            <span>
              Designed for the independent press.
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
    </div>
  );
}
