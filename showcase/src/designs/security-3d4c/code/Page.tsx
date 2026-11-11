// Converted from the HTML template security-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/service-1.webp";
import a4 from "./assets/service-2.webp";
import a5 from "./assets/service-3.webp";
import a6 from "./assets/feature.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";
import a10 from "./assets/testimonial-4.webp";
import a11 from "./assets/blog-1.webp";
import a12 from "./assets/blog-2.webp";
import a13 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-security-3d4c">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <div className="topbar-group">
            {" "}
            <span className="topbar-item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" />
              </svg>
              {" Monitored around the clock "}
            </span>
            {" "}
            <span className="topbar-item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {" "}
              <a href="tel:+18005550199">
                24/7 Hotline: +1 800 555 0199
              </a>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar-group topbar-right">
            {" "}
            <span className="topbar-item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {" Mon – Sun: Always on duty "}
            </span>
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
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo" aria-label="IronWatch Security home">
            {" "}
            <span className="logo-mark">
              {" "}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                <path fill="#0B1220" d="m8 11 2.6 2.6L16 9l1.4 1.4-6.8 6.8L6.6 12.4 8 11z" />
              </svg>
              {" "}
            </span>
            {" "}
            <span className="logo-name">
              Iron
              <em>
                Watch
              </em>
              <span className="logo-sub">
                Security Services
              </span>
            </span>
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
              <a href="service.html" className="nav-link">
                Services
              </a>
            </li>
            {" "}
            <li>
              <a href="guard.html" className="nav-link">
                Guards
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
              <a href="contact.html" className="nav-link nav-cta">
                Get a Quote
              </a>
            </li>
            {" "}
          </ul>
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
          <div className="hero-bg">
            {" "}
            <img className="active" src={a0} alt="IronWatch security guard on duty in uniform" />
            {" "}
            <img src={a1} alt="Trained IronWatch officers patrolling a facility" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" />
          {" "}
          <div className="hero-stripes" aria-hidden="true" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <span className="hero-eyebrow">
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                {" Licensed & Insured Manned Guarding "}
              </span>
              {" "}
              <h1>
                {"Vigilance that never "}
                <span className="hl">
                  sleeps
                </span>
                , protection that never yields.
              </h1>
              {" "}
              <p>
                IronWatch places disciplined, background-checked officers at your door — backed by live supervision, rapid response and a culture of absolute accountability.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="service.html" className="btn btn--accent btn--lg">
                  {"Explore Services "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="contact.html" className="btn btn--ghost btn--lg">
                  Request a Free Assessment
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <ul className="hero-meta">
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {" "}
                <span>
                  <strong>
                    480+
                  </strong>
                  <small>
                    Vetted officers
                  </small>
                </span>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                {" "}
                <span>
                  <strong>
                    25 yrs
                  </strong>
                  <small>
                    In the field
                  </small>
                </span>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {" "}
                <span>
                  <strong>
                    24/7
                  </strong>
                  <small>
                    Live supervision
                  </small>
                </span>
                {" "}
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section--tight" style={{ background: "var(--ink-800)" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="strip reveal">
              {" "}
              <div className="strip-cell">
                {" "}
                <span className="tile-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h4>
                  Disciplined Officers
                </h4>
                {" "}
                <p>
                  Every guard completes state-certified training, rigorous screening and regular in-service drills before earning an IronWatch assignment.
                </p>
                {" "}
              </div>
              {" "}
              <div className="strip-cell">
                {" "}
                <span className="tile-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h20M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
                    <path d="M9 7h6M9 11h6M9 15h4" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h4>
                  Modern Equipment
                </h4>
                {" "}
                <p>
                  From verified patrol systems to two-way radios and incident cameras — our officers carry the tools modern protection demands.
                </p>
                {" "}
              </div>
              {" "}
              <div className="strip-cell">
                {" "}
                <span className="tile-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h4>
                  Rapid Response
                </h4>
                {" "}
                <p>
                  A live operations desk monitors every site and dispatches backup the moment an alert is raised — day or night.
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
        <section className="section">
          {" "}
          <div className="container split">
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow">
                Who We Are
              </span>
              {" "}
              <h2>
                A security partner built on discipline, not drama
              </h2>
              {" "}
              <p className="lead">
                IronWatch exists for one reason: to put dependable, highly trained people between risk and everything you value. Since our founding, we have protected offices, industrial sites, homes and live events across the region — quietly, and without compromise.
              </p>
              {" "}
              <p>
                Our model pairs vetted officers with transparent reporting. Site logs, shift checklists and direct lines of escalation mean you always know who is on duty, what was patrolled, and exactly how your premises were secured.
              </p>
              {" "}
              <ul style={{ listStyle: "none", margin: "0 0 28px" }}>
                {" "}
                <li style={{ position: "relative", paddingLeft: "30px", marginBottom: "10px", fontWeight: "600", color: "var(--ink-800)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "2px", top: "7px", width: "12px", height: "12px", background: "var(--accent)", clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)" }} />
                  {" State-certified, insured and licensed guards "}
                </li>
                {" "}
                <li style={{ position: "relative", paddingLeft: "30px", marginBottom: "10px", fontWeight: "600", color: "var(--ink-800)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "2px", top: "7px", width: "12px", height: "12px", background: "var(--accent)", clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)" }} />
                  {" Live operations desk supervising every post "}
                </li>
                {" "}
                <li style={{ position: "relative", paddingLeft: "30px", marginBottom: "10px", fontWeight: "600", color: "var(--ink-800)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "2px", top: "7px", width: "12px", height: "12px", background: "var(--accent)", clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)" }} />
                  {" Transparent shift reports and incident logs "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--ink">
                More About IronWatch
              </a>
              {" "}
            </div>
            {" "}
            <figure className="reveal reveal--d1" style={{ margin: "0" }}>
              {" "}
              <img src={a2} alt="Professional IronWatch security officer standing at attention" style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)" }} />
              {" "}
            </figure>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section--tight" style={{ background: "var(--ink-900)" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="stats reveal">
              {" "}
              <div className="stat">
                {" "}
                <span className="num">
                  480
                  <span>
                    +
                  </span>
                </span>
                {" "}
                <span className="label">
                  Trained Guards
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="num">
                  2,300
                  <span>
                    +
                  </span>
                </span>
                {" "}
                <span className="label">
                  Happy Clients
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="num">
                  12k
                  <span>
                    +
                  </span>
                </span>
                {" "}
                <span className="label">
                  Sites Secured
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="num">
                  25
                </span>
                {" "}
                <span className="label">
                  Years Experience
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
        <section className="section section--soft">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                Core Services
              </span>
              {" "}
              <h2>
                Guarding services for every perimeter
              </h2>
              {" "}
              <p>
                From the front desk to the factory floor, our officers secure the places where your business actually happens.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <article className="svc reveal">
                {" "}
                <div className="svc-media">
                  {" "}
                  <img src={a3} alt="Officer securing a corporate office entrance" />
                  {" "}
                  <span className="svc-tag">
                    Offices
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="svc-body">
                  {" "}
                  <h3>
                    Office Security
                  </h3>
                  {" "}
                  <p>
                    Front-of-house presence, visitor control and after-hours protection that keeps your workplace professional and safe.
                  </p>
                  {" "}
                  <a href="service.html" className="svc-link">
                    {"View Service "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="svc reveal reveal--d1">
                {" "}
                <div className="svc-media">
                  {" "}
                  <img src={a4} alt="Guard protecting a residential property" />
                  {" "}
                  <span className="svc-tag">
                    Residential
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="svc-body">
                  {" "}
                  <h3>
                    Home Security
                  </h3>
                  {" "}
                  <p>
                    Gated-entry officers, mobile patrols and family-focused protection for estates, communities and private residences.
                  </p>
                  {" "}
                  <a href="service.html" className="svc-link">
                    {"View Service "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="svc reveal reveal--d2">
                {" "}
                <div className="svc-media">
                  {" "}
                  <img src={a5} alt="Security officer at an industrial facility gate" />
                  {" "}
                  <span className="svc-tag">
                    Industrial
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="svc-body">
                  {" "}
                  <h3>
                    Industrial Security
                  </h3>
                  {" "}
                  <p>
                    Plant-perimeter guarding, access control and asset protection engineered for warehouses, factories and yards.
                  </p>
                  {" "}
                  <a href="service.html" className="svc-link">
                    {"View Service "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "center", marginTop: "44px" }} className="reveal">
              {" "}
              <a href="service.html" className="btn btn--accent btn--lg">
                All Security Services
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
          <div className="container grid grid--feature">
            {" "}
            <figure className="reveal" style={{ margin: "0", position: "relative" }}>
              {" "}
              <img src={a6} alt="IronWatch control centre monitoring multiple sites" style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)" }} />
              {" "}
              <span style={{ position: "absolute", left: "-16px", bottom: "-16px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 20px", background: "var(--accent)", color: "var(--ink-950)", borderRadius: "12px", fontFamily: "var(--font-display)", fontWeight: "800", fontSize: "1.1rem", letterSpacing: "0.04em", boxShadow: "var(--shadow-accent)" }}>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                {" LICENSED & BONDED "}
              </span>
              {" "}
            </figure>
            {" "}
            <div className="reveal reveal--d1">
              {" "}
              <span className="eyebrow">
                Why IronWatch
              </span>
              {" "}
              <h2>
                Why teams choose us as their last line of defense
              </h2>
              {" "}
              <p className="lead">
                Security is not about looking the part. It is about showing up right, documenting everything, and staying calm when it matters.
              </p>
              {" "}
              <div className="grid grid--2" style={{ gap: "18px", marginTop: "28px" }}>
                {" "}
                <div className="tile">
                  {" "}
                  <span className="tile-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Vetted Personnel
                    </h4>
                    {" "}
                    <p>
                      Criminal-history checks, reference verification and psychometric screening on every hire.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tile">
                  {" "}
                  <span className="tile-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      24/7 Operations Desk
                    </h4>
                    {" "}
                    <p>
                      A live centre that supervises every post and dispatches backup in minutes.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tile">
                  {" "}
                  <span className="tile-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      {"Certified & Insured"}
                    </h4>
                    {" "}
                    <p>
                      Fully licensed, bonded and insured — protection you can present to any stakeholder.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tile">
                  {" "}
                  <span className="tile-icon">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Transparent Reports
                    </h4>
                    {" "}
                    <p>
                      Digital shift logs, incident reports and pat-down checklists you can audit anytime.
                    </p>
                    {" "}
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
        <section className="cta-band">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-inner reveal">
              {" "}
              <div>
                {" "}
                <span className="eyebrow">
                  Get Protected
                </span>
                {" "}
                <h2>
                  Ready to secure your premises?
                </h2>
                {" "}
                <p>
                  Tell us about your site and we will deliver a tailored guarding plan with transparent pricing within 48 hours.
                </p>
                {" "}
                <a className="cta-phone" href="tel:+18005550199">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" +1 800 555 0199 "}
                </a>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <a href="contact.html" className="btn btn--accent btn--lg">
                  {"Book a Consultation "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
        </section>
        {" "}
        {" "}
        <section className="section section--snow">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                Client Voices
              </span>
              {" "}
              <h2>
                What our clients say about us
              </h2>
              {" "}
              <p>
                Facility managers, business owners and community leaders trust IronWatch with their people and property.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--4">
              {" "}
              <blockquote className="quote reveal">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  IronWatch officers have been at our corporate campus for three years. Zero incidents, flawless reporting, total peace of mind for the board.
                </p>
                {" "}
                <div className="quote-foot">
                  {" "}
                  <img className="quote-ava" src={a7} alt="Portrait of corporate facilities director" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Elena Marsh
                    </strong>
                    {" "}
                    <small>
                      Facilities Director
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote reveal reveal--d1">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  The rapid response desk is real. When our alarm tripped at 2am, an IronWatch team was on site in under fifteen minutes.
                </p>
                {" "}
                <div className="quote-foot">
                  {" "}
                  <img className="quote-ava" src={a8} alt="Portrait of warehouse operations manager" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Marcus Reed
                    </strong>
                    {" "}
                    <small>
                      Warehouse Manager
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote reveal reveal--d2">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  Professional from the very first meeting. Their guards are courteous, disciplined and genuinely pleasant with our residents.
                </p>
                {" "}
                <div className="quote-foot">
                  {" "}
                  <img className="quote-ava" src={a9} alt="Portrait of residential community manager" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Priya Nair
                    </strong>
                    {" "}
                    <small>
                      Community Manager
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote reveal reveal--d3">
                {" "}
                <span className="quote-mark">
                  “
                </span>
                {" "}
                <p>
                  We run high-value events all year. IronWatch scales up seamlessly — the same standard, whether we need two guards or two hundred.
                </p>
                {" "}
                <div className="quote-foot">
                  {" "}
                  <img className="quote-ava" src={a10} alt="Portrait of event production director" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Daniel Okafor
                    </strong>
                    {" "}
                    <small>
                      Event Producer
                    </small>
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow eyebrow--center">
                From The Blog
              </span>
              {" "}
              <h2>
                Field notes on security
              </h2>
              {" "}
              <p>
                Practical guidance from our officers and operations desk — on keeping people, property and data safe.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <article className="post reveal">
                {" "}
                <div className="post-media">
                  {" "}
                  <img src={a11} alt="Security guard reviewing an access log at a reception desk" />
                  {" "}
                  <span className="post-cat">
                    Operations
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {" IronWatch Desk"}
                    </span>
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {" Jun 12, 2026"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="single.html">
                      Five signs your facility needs a live guarding presence
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Cameras record. Guards respond. Here is how to tell when passive surveillance alone is quietly leaving your site exposed.
                  </p>
                  {" "}
                  <a href="single.html" className="svc-link">
                    {"Read Article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post reveal reveal--d1">
                {" "}
                <div className="post-media">
                  {" "}
                  <img src={a12} alt="Security officers coordinating on two-way radios" />
                  {" "}
                  <span className="post-cat">
                    Training
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {" IronWatch Desk"}
                    </span>
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {" May 28, 2026"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="single.html">
                      What a security guard should do in the first 60 seconds
                    </a>
                  </h3>
                  {" "}
                  <p>
                    The opening minute of any incident defines the outcome. Our officers drill a response protocol worth stealing.
                  </p>
                  {" "}
                  <a href="single.html" className="svc-link">
                    {"Read Article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post reveal reveal--d2">
                {" "}
                <div className="post-media">
                  {" "}
                  <img src={a13} alt="IronWatch guard patrolling an industrial perimeter at dusk" />
                  {" "}
                  <span className="post-cat">
                    Guidance
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {" IronWatch Desk"}
                    </span>
                    {" "}
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {" May 09, 2026"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="single.html">
                      Visitor management: the quiet backbone of site security
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Most breaches walk through the front door politely. A disciplined visitor protocol stops them before they start.
                  </p>
                  {" "}
                  <a href="single.html" className="svc-link">
                    {"Read Article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {" "}
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
      </main>
      {" "}
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-top">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo" aria-label="IronWatch Security home">
                {" "}
                <span className="logo-mark">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path fill="#0B1220" d="m8 11 2.6 2.6L16 9l1.4 1.4-6.8 6.8L6.6 12.4 8 11z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span className="logo-name">
                  Iron
                  <em>
                    Watch
                  </em>
                  <span className="logo-sub">
                    Security Services
                  </span>
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Disciplined, licensed and insured security officers for offices, industry, homes and events. Vigilance that never sleeps.
              </p>
              {" "}
              <div className="socials">
                {" "}
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="X / Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
                Company
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="index.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="about.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="guard.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Our Guards
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Blog
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
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Office Security
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Industrial Security
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Event Security
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Mobile Patrol
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Private Security
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
                Get In Touch
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" "}
                  <span>
                    1281 Patrol Drive,
                    <br />
                    Suite 300, Houston, TX
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" "}
                  <a href="tel:+18005550199">
                    +1 800 555 0199
                  </a>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {" "}
                  <a href="mailto:ops@ironwatch.com">
                    ops@ironwatch.com
                  </a>
                  {" "}
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="footer-bottom">
          {" "}
          <div className="container">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" IronWatch Security. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Licensed & Insured "}
              <span className="shield-dot">
                ◆
              </span>
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" · "}
              <a href="service.html">
                Services
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
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
