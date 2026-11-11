// Converted from the HTML template news-portal-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/logo.webp";
import a1 from "./assets/top-news-1.webp";
import a2 from "./assets/top-news-2.webp";
import a3 from "./assets/top-news-3.webp";
import a4 from "./assets/top-news-4.webp";
import a5 from "./assets/top-news-5.webp";
import a6 from "./assets/cat-news-1.webp";
import a7 from "./assets/cat-news-2.webp";
import a8 from "./assets/cat-news-3.webp";
import a9 from "./assets/cat-news-4.webp";
import a10 from "./assets/cat-news-5.webp";
import a11 from "./assets/cat-news-6.webp";
import a12 from "./assets/cat-news-7.webp";
import a13 from "./assets/cat-news-8.webp";
import a14 from "./assets/cat-news-9.webp";
import a15 from "./assets/popular-news.webp";
import a16 from "./assets/latest-news.webp";
import a17 from "./assets/adds-1.webp";
import a18 from "./assets/adds-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Roboto:wght@300;400;500;700;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-news-portal-ebbd">
      {" "}
      {" "}
      <div className="ticker" aria-label="Breaking news ticker">
        {" "}
        <div className="ticker__label">
          Breaking
        </div>
        {" "}
        <div className="ticker__track">
          {" "}
          <span className="ticker__item">
            Global markets surge as trade agreement signed between major economies
          </span>
          {" "}
          <span className="ticker__item">
            New climate summit announces historic carbon reduction targets for 2030
          </span>
          {" "}
          <span className="ticker__item">
            Space agency confirms discovery of water on distant exoplanet
          </span>
          {" "}
          <span className="ticker__item">
            Tech giants face unprecedented regulatory overhaul in European Union
          </span>
          {" "}
          <span className="ticker__item">
            Global markets surge as trade agreement signed between major economies
          </span>
          {" "}
          <span className="ticker__item">
            New climate summit announces historic carbon reduction targets for 2030
          </span>
          {" "}
          <span className="ticker__item">
            Space agency confirms discovery of water on distant exoplanet
          </span>
          {" "}
          <span className="ticker__item">
            Tech giants face unprecedented regulatory overhaul in European Union
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          {" "}
          <div className="header__top">
            {" "}
            <span className="header__date" />
            {" "}
            <div className="header__top-right">
              {" "}
              <a href="contact.html" className="text-blue fw-bold" style={{ fontSize: "var(--fs-xs)" }}>
                Contact
              </a>
              {" "}
              <span>
                |
              </span>
              {" "}
              <a href="#" className="text-blue fw-bold" style={{ fontSize: "var(--fs-xs)" }}>
                Subscribe
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="header__main">
            {" "}
            <a href="index.html" className="header__logo">
              {" "}
              <img src={a0} alt="NEWSROOM logo" className="header__logo-img" />
              {" "}
              <div>
                {" "}
                <span className="header__logo-text">
                  NEWSROOM
                </span>
                {" "}
                <span className="header__logo-tagline">
                  Truth in Every Headline
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <div className="header__search">
              {" "}
              <span className="header__search-icon">
                🔍
              </span>
              {" "}
              <input type="search" placeholder="Search articles..." aria-label="Search articles" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <nav className="nav" aria-label="Main navigation">
          {" "}
          <div className="container">
            {" "}
            <button className="burger" aria-label="Toggle menu" aria-expanded="false">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav__list">
              {" "}
              <li>
                <a href="index.html" className="nav__link active" aria-current="page">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  Politics
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  Technology
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  World
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  Business
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  Culture
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html" className="nav__link">
                  Opinion
                </a>
              </li>
              {" "}
              <span className="nav__spacer" />
              {" "}
              <li>
                <a href="contact.html" className="nav__cta">
                  Contact Us
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
      <section className="hero reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="hero__grid">
            {" "}
            {" "}
            <div className="hero__featured">
              {" "}
              <img src={a1} alt="Global climate summit" className="hero__featured-img" />
              {" "}
              <div className="hero__featured-overlay">
                {" "}
                <div className="hero__featured-meta">
                  {" "}
                  <span className="label label--red">
                    Exclusive
                  </span>
                  {" "}
                  <span className="label label--ghost">
                    World
                  </span>
                  {" "}
                </div>
                {" "}
                <h1 className="hero__featured-title">
                  World Leaders Unite Behind Ambitious Climate Framework at Geneva Summit
                </h1>
                {" "}
                <p className="hero__featured-excerpt">
                  In a historic accord, representatives from 194 nations have agreed to binding emission reduction targets, marking the most significant environmental commitment since the Paris Agreement.
                </p>
                {" "}
                <a href="article.html" className="hero__featured-link">
                  Read Full Story →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <aside className="hero__sidebar">
              {" "}
              <h2 className="hero__sidebar-title">
                Top Stories
              </h2>
              {" "}
              <a href="article.html" className="hero__side-item">
                {" "}
                <img src={a2} alt="" className="hero__side-img" />
                {" "}
                <div className="hero__side-body">
                  {" "}
                  <span className="hero__side-cat">
                    Technology
                  </span>
                  {" "}
                  <h3 className="hero__side-title">
                    Quantum Computing Breakthrough Could Revolutionize Drug Discovery
                  </h3>
                  {" "}
                  <span className="hero__side-time">
                    2 hours ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="article.html" className="hero__side-item">
                {" "}
                <img src={a3} alt="" className="hero__side-img" />
                {" "}
                <div className="hero__side-body">
                  {" "}
                  <span className="hero__side-cat">
                    Business
                  </span>
                  {" "}
                  <h3 className="hero__side-title">
                    Central Banks Signal Shift in Monetary Policy Amid Inflation Concerns
                  </h3>
                  {" "}
                  <span className="hero__side-time">
                    3 hours ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="article.html" className="hero__side-item">
                {" "}
                <img src={a4} alt="" className="hero__side-img" />
                {" "}
                <div className="hero__side-body">
                  {" "}
                  <span className="hero__side-cat">
                    Politics
                  </span>
                  {" "}
                  <h3 className="hero__side-title">
                    Senate Passes Landmark Infrastructure Bill After Months of Debate
                  </h3>
                  {" "}
                  <span className="hero__side-time">
                    5 hours ago
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="article.html" className="hero__side-item">
                {" "}
                <img src={a5} alt="" className="hero__side-img" />
                {" "}
                <div className="hero__side-body">
                  {" "}
                  <span className="hero__side-cat">
                    Culture
                  </span>
                  {" "}
                  <h3 className="hero__side-title">
                    International Film Festival Announces Revolutionary Digital Category
                  </h3>
                  {" "}
                  <span className="hero__side-time">
                    6 hours ago
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
      <section className="categories">
        {" "}
        <div className="container">
          {" "}
          <div className="section-heading reveal">
            {" "}
            <h2>
              Latest News
            </h2>
            {" "}
          </div>
          {" "}
          <div className="cat-row">
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a6} alt="Space exploration" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Science
                </span>
                {" "}
                <h3 className="card__title">
                  NASA's Artemis Program Reaches New Milestone With Lunar Orbit Insertion
                </h3>
                {" "}
                <p className="card__excerpt">
                  The spacecraft successfully entered lunar orbit, bringing humanity one step closer to establishing a permanent presence on the Moon.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Elena Vasquez
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    12 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a7} alt="Financial markets" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Business
                </span>
                {" "}
                <h3 className="card__title">
                  Global Supply Chains Adapt as New Trade Routes Emerge in Southeast Asia
                </h3>
                {" "}
                <p className="card__excerpt">
                  Economic analysts predict a fundamental shift in global logistics patterns as new maritime corridors open unprecedented opportunities.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Marcus Chen
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    8 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a8} alt="AI technology" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Technology
                </span>
                {" "}
                <h3 className="card__title">
                  Artificial Intelligence Transforms Healthcare Diagnostics With Unprecedented Accuracy
                </h3>
                {" "}
                <p className="card__excerpt">
                  New AI systems are achieving diagnostic accuracy rates surpassing human specialists in early disease detection studies.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Sarah Mitchell
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    10 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="section-heading reveal">
            {" "}
            <h2>
              Editor's Picks
            </h2>
            {" "}
          </div>
          {" "}
          <div className="cat-row">
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a9} alt="Urban development" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  World
                </span>
                {" "}
                <h3 className="card__title">
                  How Smart Cities Are Redefining Urban Living Across Three Continents
                </h3>
                {" "}
                <p className="card__excerpt">
                  From Copenhagen to Singapore, pioneering cities demonstrate how technology and design can create more livable, sustainable urban environments.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    James Wright
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    15 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a10} alt="Education reform" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Politics
                </span>
                {" "}
                <h3 className="card__title">
                  Education Reform Bill Sparks National Debate Over Future of Public Schools
                </h3>
                {" "}
                <p className="card__excerpt">
                  The proposed legislation would fundamentally alter funding models and curriculum standards, drawing fierce reactions from both sides of the aisle.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Linda Park
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    9 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a11} alt="Renewable energy" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Science
                </span>
                {" "}
                <h3 className="card__title">
                  Breakthrough in Solar Cell Efficiency Promises Cheaper Clean Energy Worldwide
                </h3>
                {" "}
                <p className="card__excerpt">
                  Researchers have achieved a record 47% efficiency in perovskite-silicon tandem cells, potentially cutting solar energy costs by half.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Dr. Aisha Patel
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    7 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="section-heading reveal">
            {" "}
            <h2>
              {"Opinion & Analysis"}
            </h2>
            {" "}
          </div>
          {" "}
          <div className="cat-row">
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a12} alt="Global diplomacy" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Opinion
                </span>
                {" "}
                <h3 className="card__title">
                  The New Diplomacy: Why Traditional Alliances Need a 21st Century Overhaul
                </h3>
                {" "}
                <p className="card__excerpt">
                  As geopolitical dynamics shift, established diplomatic frameworks must evolve to address emerging global challenges effectively.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Prof. Richard Hale
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    11 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a13} alt="Digital privacy" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Technology
                </span>
                {" "}
                <h3 className="card__title">
                  Privacy in the Age of AI: Balancing Innovation With Individual Rights
                </h3>
                {" "}
                <p className="card__excerpt">
                  As artificial intelligence becomes ubiquitous, the tension between technological progress and personal privacy reaches a critical inflection point.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Nina Torres
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    13 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <img src={a14} alt="Cultural heritage" className="card__img" />
              {" "}
              <div className="card__body">
                {" "}
                <span className="card__cat">
                  Culture
                </span>
                {" "}
                <h3 className="card__title">
                  Preserving Cultural Heritage in a Digital World: Museums Embrace Virtual Reality
                </h3>
                {" "}
                <p className="card__excerpt">
                  Leading institutions worldwide are using immersive technology to democratize access to irreplaceable cultural artifacts and experiences.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <span>
                    Maria Santos
                  </span>
                  {" "}
                  <span className="card__meta-sep" />
                  {" "}
                  <span>
                    6 min read
                  </span>
                  {" "}
                </div>
                {" "}
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
      <section className="trending">
        {" "}
        <div className="container">
          {" "}
          <div className="trending__grid">
            {" "}
            <div>
              {" "}
              <h2 className="trending__title reveal">
                Trending Now
              </h2>
              {" "}
              <div className="trending__list">
                {" "}
                <a href="article.html" className="trending__item reveal">
                  {" "}
                  <span className="trending__num">
                    01
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="trending__item-title">
                      Renewable Energy Investments Hit Record $500 Billion Globally
                    </h3>
                    {" "}
                    <span className="trending__item-meta">
                      Business · 14 min ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="article.html" className="trending__item reveal">
                  {" "}
                  <span className="trending__num">
                    02
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="trending__item-title">
                      Cybersecurity Experts Warn of Sophisticated New Threat Vector
                    </h3>
                    {" "}
                    <span className="trending__item-meta">
                      Technology · 28 min ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="article.html" className="trending__item reveal">
                  {" "}
                  <span className="trending__num">
                    03
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="trending__item-title">
                      International Space Station Receives Major Upgrade for Deep Space Research
                    </h3>
                    {" "}
                    <span className="trending__item-meta">
                      Science · 45 min ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="article.html" className="trending__item reveal">
                  {" "}
                  <span className="trending__num">
                    04
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="trending__item-title">
                      Election Reform Commission Proposes Ranked Choice Voting Nationwide
                    </h3>
                    {" "}
                    <span className="trending__item-meta">
                      Politics · 1 hour ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="article.html" className="trending__item reveal">
                  {" "}
                  <span className="trending__num">
                    05
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="trending__item-title">
                      Olympic Committee Announces Three New Sports for 2032 Games
                    </h3>
                    {" "}
                    <span className="trending__item-meta">
                      Culture · 2 hours ago
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
            {" "}
            <aside>
              {" "}
              <div className="sidebar-widget reveal">
                {" "}
                <h3 className="sidebar-widget__title">
                  Most Popular
                </h3>
                {" "}
                <div className="popular-item">
                  {" "}
                  <img src={a15} alt="" className="popular-item__img" />
                  {" "}
                  <div>
                    {" "}
                    <h4 className="popular-item__title">
                      Climate Scientists Discover New Carbon Capture Method With 300% Efficiency Gain
                    </h4>
                    {" "}
                    <span className="popular-item__time">
                      3 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="popular-item">
                  {" "}
                  <img src={a16} alt="" className="popular-item__img" />
                  {" "}
                  <div>
                    {" "}
                    <h4 className="popular-item__title">
                      Global Food Security Report Reveals Alarming Trends in Agriculture
                    </h4>
                    {" "}
                    <span className="popular-item__time">
                      5 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="popular-item">
                  {" "}
                  <img src={a17} alt="" className="popular-item__img" />
                  {" "}
                  <div>
                    {" "}
                    <h4 className="popular-item__title">
                      Autonomous Vehicles Reach New Milestone in Urban Testing Environments
                    </h4>
                    {" "}
                    <span className="popular-item__time">
                      7 hours ago
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="popular-item">
                  {" "}
                  <img src={a18} alt="" className="popular-item__img" />
                  {" "}
                  <div>
                    {" "}
                    <h4 className="popular-item__title">
                      Ocean Conservation Efforts Yield Unexpected Marine Biodiversity Recovery
                    </h4>
                    {" "}
                    <span className="popular-item__time">
                      9 hours ago
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
      <section className="newsletter reveal">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter__inner">
            {" "}
            <div className="newsletter__icon">
              ✉
            </div>
            {" "}
            <h2 className="newsletter__title">
              Stay Informed
            </h2>
            {" "}
            <p className="newsletter__text">
              Get the day's most important stories delivered to your inbox every morning. No spam, just journalism that matters.
            </p>
            {" "}
            <form className="newsletter__form" data-form="">
              {" "}
              <input type="email" className="newsletter__input" placeholder="Your email address" required={true} aria-label="Email address" />
              {" "}
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
              {" "}
            </form>
            {" "}
            <div className="form-ok" style={{ marginTop: "1rem" }}>
              Welcome to NEWSROOM. Check your inbox for confirmation.
            </div>
            {" "}
            <div className="form-err" style={{ marginTop: "1rem" }}>
              Please enter a valid email address.
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
            <div>
              {" "}
              <h3 className="footer__brand-title">
                NEWSROOM
              </h3>
              {" "}
              <p className="footer__brand-text">
                Delivering accurate, unbiased journalism to readers worldwide. Our commitment to truth and accountability drives every story we publish.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Sections
              </h4>
              {" "}
              <a href="category.html" className="footer__link">
                Politics
              </a>
              {" "}
              <a href="category.html" className="footer__link">
                Technology
              </a>
              {" "}
              <a href="category.html" className="footer__link">
                World
              </a>
              {" "}
              <a href="category.html" className="footer__link">
                Business
              </a>
              {" "}
              <a href="category.html" className="footer__link">
                Culture
              </a>
              {" "}
              <a href="category.html" className="footer__link">
                Science
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Company
              </h4>
              {" "}
              <a href="#" className="footer__link">
                About Us
              </a>
              {" "}
              <a href="#" className="footer__link">
                Careers
              </a>
              {" "}
              <a href="#" className="footer__link">
                Ethics Policy
              </a>
              {" "}
              <a href="#" className="footer__link">
                Corrections
              </a>
              {" "}
              <a href="contact.html" className="footer__link">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Legal
              </h4>
              {" "}
              <a href="#" className="footer__link">
                Terms of Service
              </a>
              {" "}
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
              {" "}
              <a href="#" className="footer__link">
                Cookie Policy
              </a>
              {" "}
              <a href="#" className="footer__link">
                Accessibility
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" NEWSROOM. All rights reserved."}
            </span>
            {" "}
            <div className="footer__social">
              {" "}
              <a href="#" aria-label="Twitter">
                X
              </a>
              {" "}
              <a href="#" aria-label="Facebook">
                f
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                in
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                YT
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
      {" "}
    </div>
  );
}
