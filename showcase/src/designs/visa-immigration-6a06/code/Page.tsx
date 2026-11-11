// Converted from the HTML template visa-immigration-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/breadcrumb.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/brand-logo.webp";
import a3 from "./assets/carousel-1.webp";
import a4 from "./assets/service-1.webp";
import a5 from "./assets/service-2.webp";
import a6 from "./assets/service-3.webp";
import a7 from "./assets/service-4.webp";
import a8 from "./assets/about-2.webp";
import a9 from "./assets/about-3.webp";
import a10 from "./assets/office-1.webp";
import a11 from "./assets/office-2.webp";
import a12 from "./assets/office-3.webp";
import a13 from "./assets/office-4.webp";
import a14 from "./assets/testimonial-1.webp";
import a15 from "./assets/testimonial-2.webp";
import a16 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-visa-immigration-6a06">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container site-header__bar">
          {" "}
          <a className="brand" href="index.html" aria-label="Travisa — home">
            {" "}
            <img className="brand__mark" src={a2} alt="Travisa logo" width="44" height="44" />
            {" "}
            <span className="brand__name">
              Travisa
              <span>
                .
              </span>
              <span className="brand__tagline">
                {"Visa & Immigration"}
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" aria-label="Primary">
            {" "}
            <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation">
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
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="offices.html">
                  Offices
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonials.html">
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
              <li>
                <a className="btn btn--gold nav-cta" href="contact.html">
                  Book a Consultation
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        {" "}
        <section className="hero" aria-label="Intro">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a3} alt="Passport and boarding pass on an airport counter" className="active" />
            {" "}
            <img src={a1} alt="Traveller walking through a sunlit airport terminal" />
            {" "}
          </div>
          {" "}
          <div className="container hero__inner">
            {" "}
            <p className="eyebrow">
              Your journey, cleared for takeoff
            </p>
            {" "}
            <h1>
              {"Visas, made "}
              <em>
                simple
              </em>
              {". Dreams, made "}
              <span className="gold">
                possible.
              </span>
            </h1>
            {" "}
            <p className="hero__copy">
              From your first consultation to the stamp in your passport, Travisa walks every step of the visa and immigration journey with you — accurately, transparently, and on time.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a className="btn btn--gold" href="contact.html">
                {"Start Your Application "}
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </a>
              {" "}
              <a className="btn btn--ghost" href="services.html">
                Explore Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div className="hero__stat">
                <strong>
                  180K+
                </strong>
                <span>
                  Visas processed
                </span>
              </div>
              {" "}
              <div className="hero__stat">
                <strong>
                  98.6%
                </strong>
                <span>
                  Success rate
                </span>
              </div>
              {" "}
              <div className="hero__stat">
                <strong>
                  120+
                </strong>
                <span>
                  Destinations covered
                </span>
              </div>
              {" "}
              <div className="hero__stat">
                <strong>
                  24
                </strong>
                <span>
                  Global offices
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <a className="hero__scroll" href="#quick-links">
            Scroll
          </a>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="info-strip" id="quick-links" aria-label="Why choose Travisa">
          {" "}
          <div className="container info-strip__grid">
            {" "}
            <div className="info-strip__item reveal">
              {" "}
              <span className="info-strip__icon" aria-hidden="true">
                📋
              </span>
              {" "}
              <div>
                {" "}
                <h3>
                  Document Review
                </h3>
                {" "}
                <p>
                  Every file checked against the latest embassy requirements.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="info-strip__item reveal">
              {" "}
              <span className="info-strip__icon" aria-hidden="true">
                🗓️
              </span>
              {" "}
              <div>
                {" "}
                <h3>
                  Appointment Booking
                </h3>
                {" "}
                <p>
                  Priority slots at embassies and visa application centres.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="info-strip__item reveal">
              {" "}
              <span className="info-strip__icon" aria-hidden="true">
                🛡️
              </span>
              {" "}
              <div>
                {" "}
                <h3>
                  Application Tracking
                </h3>
                {" "}
                <p>
                  Real-time updates from submission to decision.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="info-strip__item reveal">
              {" "}
              <span className="info-strip__icon" aria-hidden="true">
                💬
              </span>
              {" "}
              <div>
                {" "}
                <h3>
                  Interview Coaching
                </h3>
                {" "}
                <p>
                  One-to-one preparation so you walk in confident.
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
        <section className="section" id="services" aria-labelledby="services-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section__head section__head--center reveal">
              {" "}
              <p className="eyebrow eyebrow--center">
                What we do
              </p>
              {" "}
              <h2 id="services-title">
                Every visa journey, expertly handled
              </h2>
              {" "}
              <p>
                One dedicated consultant, one clear plan, and one complete application — for every route we serve.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--4 stagger">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__media">
                  {" "}
                  <img src={a4} alt="Tourist visa documents and map" loading="lazy" />
                  {" "}
                  <span className="service-card__icon" aria-hidden="true">
                    ✈️
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card__body">
                  {" "}
                  <h3>
                    {"Tourist & Visitor Visas"}
                  </h3>
                  {" "}
                  <p>
                    Short-stay and Schengen visas with meticulous document preparation and embassy booking.
                  </p>
                  {" "}
                  <a className="service-card__link" href="services.html">
                    {"Learn more "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__media">
                  {" "}
                  <img src={a5} alt="Student holding a university campus map" loading="lazy" />
                  {" "}
                  <span className="service-card__icon" aria-hidden="true">
                    🎓
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card__body">
                  {" "}
                  <h3>
                    Student Visas
                  </h3>
                  {" "}
                  <p>
                    Admission support and student visa applications for universities across 30+ countries.
                  </p>
                  {" "}
                  <a className="service-card__link" href="services.html">
                    {"Learn more "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__media">
                  {" "}
                  <img src={a6} alt="Professional discussing a work permit application" loading="lazy" />
                  {" "}
                  <span className="service-card__icon" aria-hidden="true">
                    💼
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card__body">
                  {" "}
                  <h3>
                    Work Permits
                  </h3>
                  {" "}
                  <p>
                    Employer sponsorship and skilled-worker visas, prepared to the highest standard.
                  </p>
                  {" "}
                  <a className="service-card__link" href="services.html">
                    {"Learn more "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__media">
                  {" "}
                  <img src={a7} alt="Family reviewing permanent residence paperwork" loading="lazy" />
                  {" "}
                  <span className="service-card__icon" aria-hidden="true">
                    🏠
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card__body">
                  {" "}
                  <h3>
                    {"PR & Citizenship"}
                  </h3>
                  {" "}
                  <p>
                    Permanent residence, family sponsorship and citizenship applications handled end to end.
                  </p>
                  {" "}
                  <a className="service-card__link" href="services.html">
                    {"Learn more "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
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
        <section className="section section--soft" id="about" aria-labelledby="about-title">
          {" "}
          <div className="container split">
            {" "}
            <div className="split__media split__media--stack reveal">
              {" "}
              <img className="img-a" src={a8} alt="Travisa consultant helping a client prepare documents" loading="lazy" />
              {" "}
              <img className="img-b" src={a9} alt="Client reviewing an approved visa" loading="lazy" />
              {" "}
              <div className="split__badge">
                {" "}
                <strong>
                  22
                </strong>
                {" "}
                <span>
                  years guiding journeys worldwide
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split__copy reveal">
              {" "}
              <p className="eyebrow">
                About Travisa
              </p>
              {" "}
              <h2 id="about-title">
                A partner you can trust with your move
              </h2>
              {" "}
              <p className="lead">
                Immigration is personal. Since 2004, we've treated every application like our own — because behind every file is a family, a student, or a future.
              </p>
              {" "}
              <ul className="feature-list">
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  {" Licensed and accredited immigration consultants"}
                </li>
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  {" Transparent fixed fees — no surprises, ever"}
                </li>
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  {" A named consultant who answers your calls"}
                </li>
                {" "}
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  {" In 120+ languages through our global team"}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="split__actions">
                {" "}
                <a className="btn btn--sky" href="about.html">
                  {"Our Story "}
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                {" "}
                <a className="btn btn--line" href="testimonials.html">
                  Read Reviews
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
        <section className="section" id="process" aria-labelledby="process-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section__head section__head--center reveal">
              {" "}
              <p className="eyebrow eyebrow--center">
                How it works
              </p>
              {" "}
              <h2 id="process-title">
                Four steps to your stamp
              </h2>
              {" "}
              <p>
                No guesswork. Our proven process keeps you informed and in control from day one.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--4 stagger process">
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  Consultation
                </h3>
                {" "}
                <p>
                  We assess your profile and map the best route to your goal.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  Documentation
                </h3>
                {" "}
                <p>
                  We compile, translate and review every required document.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  Submission
                </h3>
                {" "}
                <p>
                  We book appointments and submit a complete, polished application.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step reveal">
                {" "}
                <h3>
                  Approval
                </h3>
                {" "}
                <p>
                  We track your case and guide you through the final interview.
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
        <section className="section counters" aria-label="Travisa in numbers">
          {" "}
          <div className="container counters__grid stagger">
            {" "}
            <div className="reveal">
              {" "}
              <div className="counter__num">
                180K+
              </div>
              {" "}
              <div className="counter__label">
                Applications filed
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="counter__num">
                98.6%
              </div>
              {" "}
              <div className="counter__label">
                Approval rate
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="counter__num">
                120+
              </div>
              {" "}
              <div className="counter__label">
                Countries served
              </div>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="counter__num">
                4.9★
              </div>
              {" "}
              <div className="counter__label">
                Client rating
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" id="offices" aria-labelledby="offices-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section__head section__head--center reveal">
              {" "}
              <p className="eyebrow eyebrow--center">
                Global reach
              </p>
              {" "}
              <h2 id="offices-title">
                Near you, wherever you're headed
              </h2>
              {" "}
              <p>
                Twenty-four offices on four continents — and a network that follows the sun.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--4 stagger">
              {" "}
              <article className="office-card reveal">
                {" "}
                <img src={a10} alt="Travisa office in London" loading="lazy" />
                {" "}
                <div className="office-card__body">
                  {" "}
                  <span className="office-card__flag" aria-hidden="true">
                    🇬🇧
                  </span>
                  {" "}
                  <h3>
                    London
                  </h3>
                  {" "}
                  <p>
                    United Kingdom
                  </p>
                  {" "}
                  <div className="office-card__meta">
                    📍 Mayfair District
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="office-card reveal">
                {" "}
                <img src={a11} alt="Travisa office in New York" loading="lazy" />
                {" "}
                <div className="office-card__body">
                  {" "}
                  <span className="office-card__flag" aria-hidden="true">
                    🇺🇸
                  </span>
                  {" "}
                  <h3>
                    New York
                  </h3>
                  {" "}
                  <p>
                    United States
                  </p>
                  {" "}
                  <div className="office-card__meta">
                    📍 Manhattan
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="office-card reveal">
                {" "}
                <img src={a12} alt="Travisa office in Toronto" loading="lazy" />
                {" "}
                <div className="office-card__body">
                  {" "}
                  <span className="office-card__flag" aria-hidden="true">
                    🇨🇦
                  </span>
                  {" "}
                  <h3>
                    Toronto
                  </h3>
                  {" "}
                  <p>
                    Canada
                  </p>
                  {" "}
                  <div className="office-card__meta">
                    📍 Bay Street
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="office-card reveal">
                {" "}
                <img src={a13} alt="Travisa office in Sydney" loading="lazy" />
                {" "}
                <div className="office-card__body">
                  {" "}
                  <span className="office-card__flag" aria-hidden="true">
                    🇦🇺
                  </span>
                  {" "}
                  <h3>
                    Sydney
                  </h3>
                  {" "}
                  <p>
                    Australia
                  </p>
                  {" "}
                  <div className="office-card__meta">
                    📍 Circular Quay
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="center reveal" style={{ marginTop: "var(--space-7)" }}>
              {" "}
              <a className="btn btn--line" href="offices.html">
                {"View All Offices "}
                <span className="btn__arrow" aria-hidden="true">
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
        <section className="section section--soft" id="testimonials" aria-labelledby="testimonials-title">
          {" "}
          <div className="container">
            {" "}
            <div className="section__head section__head--center reveal">
              {" "}
              <p className="eyebrow eyebrow--center">
                Client stories
              </p>
              {" "}
              <h2 id="testimonials-title">
                Approved. Relieved. Grateful.
              </h2>
              {" "}
              <p>
                Real words from real travellers and migrants we've helped cross borders.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3 stagger">
              {" "}
              <article className="testimonial reveal">
                {" "}
                <div className="testimonial__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial__quote">
                  My student visa was refused twice before Travisa. They rebuilt the file in two weeks and I got my UK visa in nine days. Worth every cent.
                </p>
                {" "}
                <div className="testimonial__person">
                  {" "}
                  <img className="testimonial__avatar" src={a14} alt="Portrait of Aisha Rahman" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Aisha Rahman
                    </h4>
                    {" "}
                    <span>
                      Student Visa · United Kingdom
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial reveal">
                {" "}
                <div className="testimonial__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial__quote">
                  Moving our whole family to Canada felt impossible until we met our consultant, Daniel. He answered every anxious call and our PR landed in seven months.
                </p>
                {" "}
                <div className="testimonial__person">
                  {" "}
                  <img className="testimonial__avatar" src={a15} alt="Portrait of Carlos Mendes" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Carlos Mendes
                    </h4>
                    {" "}
                    <span>
                      Permanent Residence · Canada
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="testimonial reveal">
                {" "}
                <div className="testimonial__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial__quote">
                  Transparent fees, honest advice and flawless paperwork. Travisa is the only agency I recommend to colleagues relocating for work.
                </p>
                {" "}
                <div className="testimonial__person">
                  {" "}
                  <img className="testimonial__avatar" src={a16} alt="Portrait of Priya Nair" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h4>
                      Priya Nair
                    </h4>
                    {" "}
                    <span>
                      Work Permit · Germany
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
            <div className="center reveal" style={{ marginTop: "var(--space-7)" }}>
              {" "}
              <a className="btn btn--line" href="testimonials.html">
                {"More Success Stories "}
                <span className="btn__arrow" aria-hidden="true">
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
        <section className="section" aria-label="Book a consultation">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-banner reveal">
              {" "}
              <div>
                {" "}
                <p className="eyebrow eyebrow--light">
                  Ready when you are
                </p>
                {" "}
                <h2>
                  Your destination isn't a question mark. Let's make it a stamp.
                </h2>
                {" "}
                <p>
                  Talk to a licensed consultant today — the first 20-minute consultation is on us.
                </p>
                {" "}
              </div>
              {" "}
              <div className="cta-banner__actions">
                {" "}
                <div className="cta-banner__phone">
                  {" "}
                  <span>
                    Speak to an advisor
                  </span>
                  {" "}
                  <a href="tel:+18005550123">
                    +1 (800) 555-0123
                  </a>
                  {" "}
                </div>
                {" "}
                <a className="btn btn--gold" href="contact.html">
                  {"Book a Free Consultation "}
                  <span className="btn__arrow" aria-hidden="true">
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
      </main>
      {" "}
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container site-footer__top">
          {" "}
          <div>
            {" "}
            <a className="brand" href="index.html" aria-label="Travisa — home">
              {" "}
              <img className="brand__mark" src={a2} alt="Travisa logo" width="44" height="44" />
              {" "}
              <span className="brand__name">
                Travisa
                <span>
                  .
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p className="site-footer__about">
              A trusted visa and immigration consultancy helping people travel and migrate with confidence — since 2004.
            </p>
            {" "}
            <div className="site-footer__social">
              {" "}
              <a href="#" aria-label="Travisa on Facebook">
                f
              </a>
              {" "}
              <a href="#" aria-label="Travisa on X (Twitter)">
                𝕏
              </a>
              {" "}
              <a href="#" aria-label="Travisa on Instagram">
                ◎
              </a>
              {" "}
              <a href="#" aria-label="Travisa on LinkedIn">
                in
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <nav aria-label="Footer — explore">
            {" "}
            <h3>
              Explore
            </h3>
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
                <a href="offices.html">
                  Global Offices
                </a>
              </li>
              {" "}
              <li>
                <a href="testimonials.html">
                  Client Reviews
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <nav aria-label="Footer — services">
            {" "}
            <h3>
              Services
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="services.html">
                  Tourist Visas
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Student Visas
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Work Permits
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  {"PR & Citizenship"}
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html">
                  Interview Coaching
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <div className="site-footer__news">
            {" "}
            <h3>
              Get in Touch
            </h3>
            {" "}
            <p>
              Questions about your visa? Send us a line and an advisor will reply within one business day.
            </p>
            {" "}
            <a className="btn btn--gold" href="contact.html">
              {"Contact Us "}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="container site-footer__bottom">
          {" "}
          <p>
            {"© "}
            <span data-year="">
              2026
            </span>
            {" Travisa. All rights reserved."}
          </p>
          {" "}
          <p>
            {"Visa & immigration consultancy · "}
            <a href="index.html">
              Privacy
            </a>
            {" · "}
            <a href="index.html">
              Terms
            </a>
          </p>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" type="button" aria-label="Back to top">
        ↑
      </button>
      {" "}
    </div>
  );
}
