// Converted from the HTML template news-magazine-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-main.webp";
import a1 from "./assets/hero-side-1.webp";
import a2 from "./assets/hero-side-2.webp";
import a3 from "./assets/hero-side-3.webp";
import a4 from "./assets/world-1.webp";
import a5 from "./assets/author-avatar.webp";
import a6 from "./assets/world-2.webp";
import a7 from "./assets/world-3.webp";
import a8 from "./assets/tech-1.webp";
import a9 from "./assets/tech-2.webp";
import a10 from "./assets/tech-3.webp";
import a11 from "./assets/lifestyle-1.webp";
import a12 from "./assets/lifestyle-2.webp";
import a13 from "./assets/lifestyle-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-news-magazine-a926">
      {" "}
      {" "}
      <div className="top-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="top-bar__date">
            {" "}
            <span id="current-date" />
            {" "}
          </div>
          {" "}
          <div className="top-bar__links">
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
            <a href="#">
              Advertise
            </a>
            {" "}
            <a href="#">
              Login
            </a>
            {" "}
          </div>
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
          <a href="index.html" className="logo">
            {" "}
            <span className="logo__name">
              NEWS
              <span>
                MAG
              </span>
            </span>
            {" "}
            <span className="logo__tagline">
              Stories That Matter.
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" role="navigation" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="nav__link active">
              Home
            </a>
            {" "}
            <a href="category.html" className="nav__link">
              World
            </a>
            {" "}
            <a href="category.html" className="nav__link">
              Tech
            </a>
            {" "}
            <a href="category.html" className="nav__link">
              Lifestyle
            </a>
            {" "}
            <a href="category.html" className="nav__link">
              Opinion
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <button className="burger" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
            <span className="burger__line" />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <div className="ticker" role="marquee" aria-label="Breaking news">
        {" "}
        <div className="container">
          {" "}
          <span className="ticker__label">
            Breaking
          </span>
          {" "}
          <div className="ticker__content">
            {" "}
            <div className="ticker__track">
              {" "}
              <span className="ticker__item">
                Global climate summit reaches historic agreement on carbon emissions targets
              </span>
              {" "}
              <span className="ticker__item">
                Tech stocks surge as AI sector reports record quarterly earnings
              </span>
              {" "}
              <span className="ticker__item">
                International space station welcomes new research module
              </span>
              {" "}
              <span className="ticker__item">
                Central banks signal potential policy shifts in upcoming sessions
              </span>
              {" "}
              <span className="ticker__item">
                Major breakthrough in quantum computing announced by research team
              </span>
              {" "}
              {" "}
              <span className="ticker__item">
                Global climate summit reaches historic agreement on carbon emissions targets
              </span>
              {" "}
              <span className="ticker__item">
                Tech stocks surge as AI sector reports record quarterly earnings
              </span>
              {" "}
              <span className="ticker__item">
                International space station welcomes new research module
              </span>
              {" "}
              <span className="ticker__item">
                Central banks signal potential policy shifts in upcoming sessions
              </span>
              {" "}
              <span className="ticker__item">
                Major breakthrough in quantum computing announced by research team
              </span>
              {" "}
            </div>
            {" "}
          </div>
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
          {" "}
          <a href="article.html" className="hero__main reveal">
            {" "}
            <img src={a0} alt="Global leaders convene for climate summit" className="hero__image" />
            {" "}
            <div className="hero__overlay">
              {" "}
              <span className="badge badge--red">
                Featured
              </span>
              {" "}
              <h2>
                Global Leaders Convene for Historic Climate Summit as Urgency Grows
              </h2>
              {" "}
              <p>
                World leaders gathered in Geneva this week to address the escalating climate crisis, marking the most significant environmental conference in over a decade.
              </p>
              {" "}
              <div className="meta">
                {" "}
                <span>
                  By Sarah Mitchell
                </span>
                {" "}
                <span>
                  |
                </span>
                {" "}
                <span>
                  August 28, 2026
                </span>
                {" "}
                <span>
                  |
                </span>
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
          {" "}
          <div className="hero__sidebar">
            {" "}
            <a href="article.html" className="hero-card reveal reveal-delay-1">
              {" "}
              <img src={a1} alt="AI regulation debate" className="hero-card__image" />
              {" "}
              <div className="hero-card__content">
                {" "}
                <span className="badge badge--dark" style={{ alignSelf: "flex-start" }}>
                  Tech
                </span>
                {" "}
                <h3 className="hero-card__title">
                  EU Passes Landmark AI Regulation Framework, Sets Global Precedent
                </h3>
                {" "}
                <span className="hero-card__meta">
                  12 min read
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="hero-card reveal reveal-delay-2">
              {" "}
              <img src={a2} alt="Economic outlook" className="hero-card__image" />
              {" "}
              <div className="hero-card__content">
                {" "}
                <span className="badge badge--dark" style={{ alignSelf: "flex-start" }}>
                  Economy
                </span>
                {" "}
                <h3 className="hero-card__title">
                  Markets Rally as Central Banks Signal Rate Stabilization
                </h3>
                {" "}
                <span className="hero-card__meta">
                  6 min read
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="hero-card reveal reveal-delay-3">
              {" "}
              <img src={a3} alt="Space exploration" className="hero-card__image" />
              {" "}
              <div className="hero-card__content">
                {" "}
                <span className="badge badge--dark" style={{ alignSelf: "flex-start" }}>
                  Science
                </span>
                {" "}
                <h3 className="hero-card__title">
                  New Mars Mission Reveals Evidence of Ancient Microbial Life
                </h3>
                {" "}
                <span className="hero-card__meta">
                  10 min read
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
      </section>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="category-row">
            {" "}
            <div className="sidebar">
              {" "}
              <div className="sidebar-widget reveal">
                {" "}
                <h3 className="sidebar-widget__title">
                  Trending Now
                </h3>
                {" "}
                <div className="trending-list">
                  {" "}
                  <div className="trending-item">
                    {" "}
                    <span className="trending-item__number">
                      01
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-item__title">
                        The Future of Remote Work: How Companies Are Adapting to New Norms
                      </a>
                      {" "}
                      <span className="trending-item__meta">
                        5 min read
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-item">
                    {" "}
                    <span className="trending-item__number">
                      02
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-item__title">
                        Cryptocurrency Markets Show Signs of Maturation Amid Regulatory Clarity
                      </a>
                      {" "}
                      <span className="trending-item__meta">
                        7 min read
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-item">
                    {" "}
                    <span className="trending-item__number">
                      03
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-item__title">
                        Ocean Conservation Efforts Gain Momentum as New Marine Parks Announced
                      </a>
                      {" "}
                      <span className="trending-item__meta">
                        4 min read
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-item">
                    {" "}
                    <span className="trending-item__number">
                      04
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-item__title">
                        Breakthrough in Renewable Energy Storage Promises Grid Independence
                      </a>
                      {" "}
                      <span className="trending-item__meta">
                        6 min read
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-item">
                    {" "}
                    <span className="trending-item__number">
                      05
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-item__title">
                        Global Education Reform: Countries Unite for Digital Literacy Initiative
                      </a>
                      {" "}
                      <span className="trending-item__meta">
                        8 min read
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="sidebar-widget reveal">
                {" "}
                <h3 className="sidebar-widget__title">
                  Categories
                </h3>
                {" "}
                <nav className="sidebar-nav">
                  {" "}
                  <a href="category.html" className="sidebar-nav__link active">
                    {" World "}
                    <span className="sidebar-nav__count">
                      24
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a href="category.html" className="sidebar-nav__link">
                    {" Technology "}
                    <span className="sidebar-nav__count">
                      18
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a href="category.html" className="sidebar-nav__link">
                    {" Lifestyle "}
                    <span className="sidebar-nav__count">
                      15
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a href="category.html" className="sidebar-nav__link">
                    {" Business "}
                    <span className="sidebar-nav__count">
                      21
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a href="category.html" className="sidebar-nav__link">
                    {" Science "}
                    <span className="sidebar-nav__count">
                      12
                    </span>
                    {" "}
                  </a>
                  {" "}
                  <a href="category.html" className="sidebar-nav__link">
                    {" Opinion "}
                    <span className="sidebar-nav__count">
                      9
                    </span>
                    {" "}
                  </a>
                  {" "}
                </nav>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h2 className="section-title reveal">
                World
              </h2>
              {" "}
              <div className="category-articles stagger-children">
                {" "}
                <a href="article.html" className="card reveal">
                  {" "}
                  <div className="card__image-wrapper">
                    {" "}
                    <img src={a4} alt="Diplomatic summit" className="card__image" />
                    {" "}
                    <span className="card__badge">
                      <span className="badge badge--red">
                        Exclusive
                      </span>
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <h3 className="card__title">
                      Diplomatic Tensions Rise as Trade Negotiations Stall Between Major Economies
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      Negotiators from the world's largest economies failed to reach an agreement on key trade provisions, raising concerns about potential retaliatory measures.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__author">
                        {" "}
                        <img src={a5} alt="Author avatar" className="card__author-avatar" />
                        {" "}
                        <span>
                          James Cooper
                        </span>
                        {" "}
                      </div>
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
                <a href="article.html" className="card reveal reveal-delay-1">
                  {" "}
                  <div className="card__image-wrapper">
                    {" "}
                    <img src={a6} alt="Humanitarian aid" className="card__image" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <h3 className="card__title">
                      International Aid Organizations Scale Up Response to Humanitarian Crisis
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      Major relief efforts are underway as organizations mobilize resources to address the growing humanitarian needs in affected regions.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__author">
                        {" "}
                        <span>
                          Elena Rodriguez
                        </span>
                        {" "}
                      </div>
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
                <a href="article.html" className="card reveal reveal-delay-2">
                  {" "}
                  <div className="card__image-wrapper">
                    {" "}
                    <img src={a7} alt="Peace negotiations" className="card__image" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <h3 className="card__title">
                      Peace Talks Resume as Ceasefire Holds in Long-Running Regional Conflict
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      After months of stalled negotiations, parties have returned to the table with renewed optimism following an extended ceasefire agreement.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__author">
                        {" "}
                        <span>
                          Marcus Chen
                        </span>
                        {" "}
                      </div>
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
      <section className="section section--gray">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Technology
          </h2>
          {" "}
          <div className="articles-grid stagger-children">
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a8} alt="AI development" className="card__image" />
                {" "}
                <span className="card__badge">
                  <span className="badge badge--red">
                    Analysis
                  </span>
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  The Race to Build Artificial General Intelligence: Who's Leading?
                </h3>
                {" "}
                <p className="card__excerpt">
                  As major tech companies pour billions into AGI research, the competition intensifies with significant implications for humanity's future.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Dr. Alex Park
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    14 min read
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="article.html" className="card reveal reveal-delay-1">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a9} alt="Cybersecurity" className="card__image" />
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Cybersecurity in 2026: New Threats Demand Innovative Defense Strategies
                </h3>
                {" "}
                <p className="card__excerpt">
                  With cyber attacks becoming more sophisticated, organizations are turning to AI-powered defense systems to protect critical infrastructure.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Rachel Kim
                    </span>
                    {" "}
                  </div>
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
            <a href="article.html" className="card reveal reveal-delay-2">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a10} alt="Space technology" className="card__image" />
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Space Tourism Takes Off: Commercial Flights to Orbit Now Accessible
                </h3>
                {" "}
                <p className="card__excerpt">
                  The space tourism industry reaches a new milestone as ticket prices drop and flight frequency increases, opening the cosmos to civilians.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Tom Bradley
                    </span>
                    {" "}
                  </div>
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Lifestyle
          </h2>
          {" "}
          <div className="articles-grid stagger-children">
            {" "}
            <a href="article.html" className="card reveal">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a11} alt="Sustainable living" className="card__image" />
                {" "}
                <span className="card__badge">
                  <span className="badge badge--red">
                    Wellness
                  </span>
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  The Rise of Slow Living: How Minimalism Is Reshaping Modern Life
                </h3>
                {" "}
                <p className="card__excerpt">
                  More people are choosing to step back from the hustle, embracing intentional living and finding fulfillment in simplicity.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Lisa Fernandez
                    </span>
                    {" "}
                  </div>
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
            <a href="article.html" className="card reveal reveal-delay-1">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a12} alt="Culinary trends" className="card__image" />
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Farm-to-Table Evolution: The New Generation of Sustainable Dining
                </h3>
                {" "}
                <p className="card__excerpt">
                  A new wave of restaurants is redefining sustainable cuisine, combining local sourcing with innovative culinary techniques.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Marco Rossi
                    </span>
                    {" "}
                  </div>
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
            <a href="article.html" className="card reveal reveal-delay-2">
              {" "}
              <div className="card__image-wrapper">
                {" "}
                <img src={a13} alt="Travel destinations" className="card__image" />
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Hidden Gems: Underrated Travel Destinations for the Discerning Explorer
                </h3>
                {" "}
                <p className="card__excerpt">
                  Beyond the popular tourist trails lie extraordinary destinations waiting to be discovered, offering authentic cultural experiences.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__author">
                    {" "}
                    <span>
                      Nadia Okafor
                    </span>
                    {" "}
                  </div>
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
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="newsletter">
        {" "}
        <div className="container">
          {" "}
          <h2 className="newsletter__title reveal">
            Stay Informed
          </h2>
          {" "}
          <p className="newsletter__subtitle reveal reveal-delay-1">
            Get the day's top stories delivered to your inbox every morning. No spam, just quality journalism.
          </p>
          {" "}
          <form className="newsletter__form reveal reveal-delay-2" data-form="newsletter">
            {" "}
            <input type="email" className="newsletter__input" placeholder="Enter your email address" required={true} aria-label="Email address" />
            {" "}
            <button type="submit" className="newsletter__btn">
              Subscribe
            </button>
            {" "}
          </form>
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
              <div className="logo__name">
                NEWS
                <span>
                  MAG
                </span>
              </div>
              {" "}
              <p>
                Delivering accurate, unbiased news and in-depth analysis to readers worldwide. Our commitment to truth and transparency drives every story we publish.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Facebook">
                  FB
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  TW
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  IG
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  LI
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__title">
                Sections
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="category.html">
                    World
                  </a>
                </li>
                {" "}
                <li>
                  <a href="category.html">
                    Technology
                  </a>
                </li>
                {" "}
                <li>
                  <a href="category.html">
                    Lifestyle
                  </a>
                </li>
                {" "}
                <li>
                  <a href="category.html">
                    Business
                  </a>
                </li>
                {" "}
                <li>
                  <a href="category.html">
                    Science
                  </a>
                </li>
                {" "}
                <li>
                  <a href="category.html">
                    Opinion
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__title">
                Company
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="#">
                    About Us
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
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Advertise
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Press Room
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
            <div>
              {" "}
              <h4 className="footer__title">
                Legal
              </h4>
              {" "}
              <ul className="footer__links">
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
                    Cookie Policy
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
                    Corrections
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
            <p>
              {"© "}
              <span data-year="" />
              {" NEWSMAG. All rights reserved. Stories That Matter."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
