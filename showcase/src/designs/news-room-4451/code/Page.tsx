// Converted from the HTML template news-room-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/news-700x435-1.webp";
import a1 from "./assets/user.webp";
import a2 from "./assets/news-300x300-1.webp";
import a3 from "./assets/news-300x300-2.webp";
import a4 from "./assets/news-300x300-3.webp";
import a5 from "./assets/news-500x280-1.webp";
import a6 from "./assets/news-500x280-2.webp";
import a7 from "./assets/news-80x80-1.webp";
import a8 from "./assets/news-500x280-3.webp";
import a9 from "./assets/news-80x80-2.webp";
import a10 from "./assets/news-100x100-1.webp";
import a11 from "./assets/news-80x80-3.webp";
import a12 from "./assets/news-100x100-2.webp";
import a13 from "./assets/news-80x80-4.webp";
import a14 from "./assets/news-100x100-3.webp";
import a15 from "./assets/news-100x100-4.webp";
import a16 from "./assets/news-100x100-5.webp";
import a17 from "./assets/ads-700x70.webp";
import a18 from "./assets/cat-500x80-1.webp";
import a19 from "./assets/cat-500x80-2.webp";
import a20 from "./assets/cat-500x80-3.webp";
import a21 from "./assets/cat-500x80-4.webp";
import a22 from "./assets/news-500x280-4.webp";
import a23 from "./assets/news-500x280-5.webp";
import a24 from "./assets/news-500x280-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Nunito:wght@300;400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-news-room-4451">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <div className="header__top">
            {" "}
            <div className="header__breaking">
              {" "}
              <span className="header__breaking-label">
                Breaking
              </span>
              {" "}
              <span className="header__breaking-ticker">
                Global leaders convene for emergency climate summit as record temperatures reshape policy agendas worldwide
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {" "}
              <a href="#">
                Advertise
              </a>
              {" "}
              <a href="#">
                Subscribe
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="header__main">
            {" "}
            <a href="index.html" className="header__brand">
              {" "}
              <div className="header__logo">
                News
                <span>
                  Room
                </span>
              </div>
              {" "}
              <div className="header__tagline">
                Breaking Barriers, Breaking News
              </div>
              {" "}
            </a>
            {" "}
            <nav className="nav" aria-label="Main navigation">
              {" "}
              <ul className="nav__list">
                {" "}
                <li>
                  <a href="index.html" className="nav__link active">
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
                  <a href="contact.html" className="nav__link">
                    Contact
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
              <div className="nav__search" role="search" aria-label="Search">
                🔍 Search
              </div>
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
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="container">
          {" "}
          <div className="hero__grid">
            {" "}
            <a href="article.html" className="hero__main">
              {" "}
              <img src={a0} alt="Global Climate Summit" className="hero__main-img" />
              {" "}
              <div className="hero__main-overlay">
                {" "}
                <span className="tag tag--red hero__main-tag">
                  World
                </span>
                {" "}
                <h1 className="hero__main-title">
                  Breaking Barriers, Breaking News
                </h1>
                {" "}
                <p className="hero__main-excerpt">
                  In an era of unprecedented change, our investigative team brings you the stories that shape tomorrow. From climate policy to tech revolutions, we report without borders.
                </p>
                {" "}
                <div className="hero__main-meta">
                  {" "}
                  <img src={a1} alt="Sarah Mitchell" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Sarah Mitchell
                    </strong>
                    {" "}
                    <div>
                      Aug 30, 2026 · 8 min read
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <div className="hero__sidebar">
              {" "}
              <a href="article.html" className="hero__sidebar-item">
                {" "}
                <img src={a2} alt="Tech Innovation" className="hero__sidebar-img" />
                {" "}
                <div className="hero__sidebar-overlay">
                  {" "}
                  <span className="tag tag--red hero__sidebar-tag">
                    Technology
                  </span>
                  {" "}
                  <h3 className="hero__sidebar-title">
                    AI Regulation Framework Takes Shape in European Parliament
                  </h3>
                  {" "}
                  <div className="hero__sidebar-meta">
                    Aug 30, 2026
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="article.html" className="hero__sidebar-item">
                {" "}
                <img src={a3} alt="Business Markets" className="hero__sidebar-img" />
                {" "}
                <div className="hero__sidebar-overlay">
                  {" "}
                  <span className="tag tag--red hero__sidebar-tag">
                    Business
                  </span>
                  {" "}
                  <h3 className="hero__sidebar-title">
                    Markets Rally as Central Banks Signal Rate Cuts Ahead
                  </h3>
                  {" "}
                  <div className="hero__sidebar-meta">
                    Aug 29, 2026
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="article.html" className="hero__sidebar-item">
                {" "}
                <img src={a4} alt="Culture News" className="hero__sidebar-img" />
                {" "}
                <div className="hero__sidebar-overlay">
                  {" "}
                  <span className="tag tag--red hero__sidebar-tag">
                    Culture
                  </span>
                  {" "}
                  <h3 className="hero__sidebar-title">
                    Venice Film Festival Opens with Groundbreaking Documentary on Migration
                  </h3>
                  {" "}
                  <div className="hero__sidebar-meta">
                    Aug 28, 2026
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
      </section>
      {" "}
      {" "}
      <section className="pt-section pb-section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-header__left">
              {" "}
              <div className="section-header__accent" />
              {" "}
              <h2 className="section-header__title">
                Featured Stories
              </h2>
              {" "}
            </div>
            {" "}
            <a href="category.html" className="section-header__link">
              View All
            </a>
            {" "}
          </div>
          {" "}
          <div className="featured-grid stagger">
            {" "}
            {" "}
            <article className="card card--featured reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a5} alt="Global Health Initiative" />
                {" "}
                <span className="tag tag--red">
                  Health
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  WHO Launches Ambitious Global Health Initiative Targeting Pandemic Preparedness by 2030
                </h3>
                {" "}
                <p className="card__excerpt">
                  The World Health Organization unveiled a sweeping $12 billion plan to strengthen pandemic response systems across 194 member states, focusing on early warning networks and vaccine equity.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a1} alt="James Porter" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      James Porter
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 29, 2026
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="card reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a6} alt="Space Exploration" />
                {" "}
                <span className="tag tag--red">
                  Science
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Mars Colony Blueprint Unveiled by International Space Consortium
                </h3>
                {" "}
                <p className="card__excerpt">
                  A coalition of space agencies revealed detailed plans for the first permanent human settlement on Mars, targeting a crewed mission within the next decade.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a7} alt="Elena Vasquez" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      Elena Vasquez
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 28, 2026
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a8} alt="Economic Reform" />
                {" "}
                <span className="tag tag--red">
                  Economy
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Digital Currency Adoption Surges as 50 Nations Launch Central Bank Tokens
                </h3>
                {" "}
                <p className="card__excerpt">
                  The global financial landscape transforms as half the world's central banks go live with digital currencies, reshaping cross-border payments.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a9} alt="David Chen" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      David Chen
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 27, 2026
                  </span>
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
      <section className="pt-section pb-section bg-cream">
        {" "}
        <div className="container">
          {" "}
          <div className="layout-with-sidebar">
            {" "}
            {" "}
            <div>
              {" "}
              <div className="section-header reveal">
                {" "}
                <div className="section-header__left">
                  {" "}
                  <div className="section-header__accent" />
                  {" "}
                  <h2 className="section-header__title">
                    Latest News
                  </h2>
                  {" "}
                </div>
                {" "}
                <a href="category.html" className="section-header__link">
                  View All
                </a>
                {" "}
              </div>
              {" "}
              <div className="stagger">
                {" "}
                <article className="card card--compact reveal">
                  {" "}
                  <div className="card__image">
                    {" "}
                    <img src={a10} alt="Political Reform" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <span className="tag tag--outline" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                      Politics
                    </span>
                    {" "}
                    <h3 className="card__title">
                      Senate Passes Historic Bipartisan Infrastructure Renewal Act
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      A landmark $2.1 trillion infrastructure package cleared its final legislative hurdle, promising to modernize bridges, broadband, and clean energy systems across rural America.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__meta-left">
                        {" "}
                        <img src={a11} alt="Maria Santos" className="card__meta-avatar" />
                        {" "}
                        <span className="card__meta-author">
                          Maria Santos
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span>
                        Aug 30, 2026
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
                <article className="card card--compact reveal">
                  {" "}
                  <div className="card__image">
                    {" "}
                    <img src={a12} alt="Education" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <span className="tag tag--outline" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                      Education
                    </span>
                    {" "}
                    <h3 className="card__title">
                      Universal Pre-K Enrollment Reaches Record High Across Major Cities
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      New federal funding drives early childhood education access to unprecedented levels, with 92% enrollment in participating districts.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__meta-left">
                        {" "}
                        <img src={a13} alt="Tom Bradley" className="card__meta-avatar" />
                        {" "}
                        <span className="card__meta-author">
                          Tom Bradley
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span>
                        Aug 29, 2026
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
                <article className="card card--compact reveal">
                  {" "}
                  <div className="card__image">
                    {" "}
                    <img src={a14} alt="Environment" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <span className="tag tag--outline" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                      Environment
                    </span>
                    {" "}
                    <h3 className="card__title">
                      Amazon Reforestation Project Surpasses One Billion Trees Planted
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      The multinational reforestation initiative reached its ambitious target five years ahead of schedule, restoring critical habitat corridors.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__meta-left">
                        {" "}
                        <img src={a1} alt="Ana Rodriguez" className="card__meta-avatar" />
                        {" "}
                        <span className="card__meta-author">
                          Ana Rodriguez
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span>
                        Aug 28, 2026
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
                <article className="card card--compact reveal">
                  {" "}
                  <div className="card__image">
                    {" "}
                    <img src={a15} alt="Sports" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <span className="tag tag--outline" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                      Sports
                    </span>
                    {" "}
                    <h3 className="card__title">
                      Olympic Committee Announces Five New Sports for 2032 Brisbane Games
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      Esports, breakdancing additions, and three new aquatic disciplines join the Olympic program in the most diverse Games lineup ever.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__meta-left">
                        {" "}
                        <img src={a7} alt="Kevin Park" className="card__meta-avatar" />
                        {" "}
                        <span className="card__meta-author">
                          Kevin Park
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span>
                        Aug 27, 2026
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
                <article className="card card--compact reveal">
                  {" "}
                  <div className="card__image">
                    {" "}
                    <img src={a16} alt="Healthcare" />
                    {" "}
                  </div>
                  {" "}
                  <div className="card__body">
                    {" "}
                    <span className="tag tag--outline" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                      Health
                    </span>
                    {" "}
                    <h3 className="card__title">
                      Gene Therapy Breakthrough Offers Hope for Rare Childhood Diseases
                    </h3>
                    {" "}
                    <p className="card__excerpt">
                      Clinical trials show 94% efficacy in treating previously incurable genetic conditions, with FDA fast-track approval expected by year end.
                    </p>
                    {" "}
                    <div className="card__meta">
                      {" "}
                      <div className="card__meta-left">
                        {" "}
                        <img src={a9} alt="Lisa Wang" className="card__meta-avatar" />
                        {" "}
                        <span className="card__meta-author">
                          Lisa Wang
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <span>
                        Aug 26, 2026
                      </span>
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
            {" "}
            <aside className="sidebar">
              {" "}
              {" "}
              <div className="sidebar__block reveal-right">
                {" "}
                <h3 className="sidebar__title">
                  Trending Now
                </h3>
                {" "}
                <div className="trending-list">
                  {" "}
                  <div className="trending-list__item">
                    {" "}
                    <span className="trending-list__number">
                      01
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-list__title">
                        Quantum Computing Milestone: First Error-Corrected Processor Achieves 99.9% Accuracy
                      </a>
                      {" "}
                      <div className="trending-list__meta">
                        Technology · 12 min ago
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-list__item">
                    {" "}
                    <span className="trending-list__number">
                      02
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-list__title">
                        Housing Market Correction Brings Relief to First-Time Buyers in Major Metros
                      </a>
                      {" "}
                      <div className="trending-list__meta">
                        Business · 45 min ago
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-list__item">
                    {" "}
                    <span className="trending-list__number">
                      03
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-list__title">
                        Diplomatic Breakthrough: Middle East Peace Framework Signed by 8 Nations
                      </a>
                      {" "}
                      <div className="trending-list__meta">
                        World · 1 hr ago
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-list__item">
                    {" "}
                    <span className="trending-list__number">
                      04
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-list__title">
                        Record-Breaking Heatwave Prompts Emergency Declarations Across Southern Europe
                      </a>
                      {" "}
                      <div className="trending-list__meta">
                        Environment · 2 hrs ago
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="trending-list__item">
                    {" "}
                    <span className="trending-list__number">
                      05
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <a href="article.html" className="trending-list__title">
                        Autonomous Vehicle Fleet Completes First Coast-to-Coast无人配送
                      </a>
                      {" "}
                      <div className="trending-list__meta">
                        Technology · 3 hrs ago
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
              {" "}
              <div className="sidebar__block reveal-right">
                {" "}
                <h3 className="sidebar__title">
                  Popular Topics
                </h3>
                {" "}
                <div className="tags-cloud">
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Climate
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    AI
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Elections
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Space
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Economy
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Health
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Education
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Startups
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Film
                  </a>
                  {" "}
                  <a href="category.html" className="tag tag--cream">
                    Sports
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="sidebar__block reveal-right">
                {" "}
                <img src={a17} alt="Advertisement" style={{ width: "100%", borderRadius: "8px" }} />
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
      <section className="pt-section pb-section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-header__left">
              {" "}
              <div className="section-header__accent" />
              {" "}
              <h2 className="section-header__title">
                Explore Categories
              </h2>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="category-strip stagger">
            {" "}
            <a href="category.html" className="category-strip__item reveal">
              {" "}
              <img src={a18} alt="World News" />
              {" "}
              <div className="category-strip__overlay">
                {" "}
                <span className="category-strip__label">
                  World
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="category.html" className="category-strip__item reveal">
              {" "}
              <img src={a19} alt="Technology" />
              {" "}
              <div className="category-strip__overlay">
                {" "}
                <span className="category-strip__label">
                  Technology
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="category.html" className="category-strip__item reveal">
              {" "}
              <img src={a20} alt="Business" />
              {" "}
              <div className="category-strip__overlay">
                {" "}
                <span className="category-strip__label">
                  Business
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="category.html" className="category-strip__item reveal">
              {" "}
              <img src={a21} alt="Culture" />
              {" "}
              <div className="category-strip__overlay">
                {" "}
                <span className="category-strip__label">
                  Culture
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
      <section className="pt-section pb-section bg-cream">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-header__left">
              {" "}
              <div className="section-header__accent" />
              {" "}
              <h2 className="section-header__title">
                Editor's Picks
              </h2>
              {" "}
            </div>
            {" "}
            <a href="category.html" className="section-header__link">
              View All
            </a>
            {" "}
          </div>
          {" "}
          <div className="category-grid stagger">
            {" "}
            <article className="card reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a22} alt="Cybersecurity" />
                {" "}
                <span className="tag tag--red">
                  Security
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Major Cybersecurity Overhaul Mandated for Critical Infrastructure
                </h3>
                {" "}
                <p className="card__excerpt">
                  New regulations require all critical infrastructure operators to implement zero-trust architecture within 18 months following a wave of sophisticated attacks.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a11} alt="Rachel Kim" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      Rachel Kim
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 25, 2026
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a23} alt="Renewable Energy" />
                {" "}
                <span className="tag tag--red">
                  Energy
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Offshore Wind Farms Break Records as Capacity Doubles in Two Years
                </h3>
                {" "}
                <p className="card__excerpt">
                  Renewable energy milestones continue to fall as global offshore wind capacity reaches 120 GW, enough to power 90 million homes.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a1} alt="Marcus Johnson" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      Marcus Johnson
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 24, 2026
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="card reveal">
              {" "}
              <div className="card__image">
                {" "}
                <img src={a24} alt="Social Impact" />
                {" "}
                <span className="tag tag--red">
                  Society
                </span>
                {" "}
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <h3 className="card__title">
                  Global Literacy Rate Hits 95% for First Time in Human History
                </h3>
                {" "}
                <p className="card__excerpt">
                  A decade of focused investment in education technology and teacher training has pushed worldwide literacy to unprecedented levels, UNICEF reports.
                </p>
                {" "}
                <div className="card__meta">
                  {" "}
                  <div className="card__meta-left">
                    {" "}
                    <img src={a13} alt="Priya Sharma" className="card__meta-avatar" />
                    {" "}
                    <span className="card__meta-author">
                      Priya Sharma
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span>
                    Aug 23, 2026
                  </span>
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
      <section className="newsletter">
        {" "}
        <div className="container">
          {" "}
          <div className="newsletter__inner reveal-scale">
            {" "}
            <div className="newsletter__icon">
              ✉
            </div>
            {" "}
            <h2 className="newsletter__title">
              Stay Informed
            </h2>
            {" "}
            <p className="newsletter__desc">
              Get the day's most important stories delivered to your inbox every morning. No spam, just journalism that matters.
            </p>
            {" "}
            <form className="newsletter__form" data-form="newsletter">
              {" "}
              <input type="email" className="newsletter__input" placeholder="Enter your email address" required={true} aria-label="Email address" />
              {" "}
              <button type="submit" className="btn btn--primary">
                Subscribe
              </button>
              {" "}
            </form>
            {" "}
            <div className="form-ok" style={{ marginTop: "1rem" }}>
              Welcome aboard! Check your inbox to confirm your subscription.
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
          <div className="footer__main">
            {" "}
            <div>
              {" "}
              <div className="footer__brand-logo">
                News
                <span>
                  Room
                </span>
              </div>
              {" "}
              <p className="footer__brand-desc">
                Independent journalism committed to truth, transparency, and the public interest. Founded on the belief that informed citizens build stronger democracies.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  ◉
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  ▶
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Sections
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="category.html">
                  World
                </a>
                {" "}
                <a href="category.html">
                  Politics
                </a>
                {" "}
                <a href="category.html">
                  Technology
                </a>
                {" "}
                <a href="category.html">
                  Business
                </a>
                {" "}
                <a href="category.html">
                  Science
                </a>
                {" "}
                <a href="category.html">
                  Health
                </a>
                {" "}
                <a href="category.html">
                  Culture
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Company
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="#">
                  About Us
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
                {" "}
                <a href="#">
                  Careers
                </a>
                {" "}
                <a href="#">
                  Advertise
                </a>
                {" "}
                <a href="#">
                  Ethics Policy
                </a>
                {" "}
                <a href="#">
                  Corrections
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__col-title">
                Legal
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="#">
                  Terms of Service
                </a>
                {" "}
                <a href="#">
                  Privacy Policy
                </a>
                {" "}
                <a href="#">
                  Cookie Policy
                </a>
                {" "}
                <a href="#">
                  Accessibility
                </a>
                {" "}
                <a href="#">
                  RSS Feeds
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
              <span data-year="" />
              {" NEWSROOM. All rights reserved."}
            </span>
            {" "}
            <span>
              Designed for independent journalism.
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
