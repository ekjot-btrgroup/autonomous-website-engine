// Converted from the HTML template cleaning-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/feature.webp";
import a4 from "./assets/portfolio-1.webp";
import a5 from "./assets/portfolio-2.webp";
import a6 from "./assets/portfolio-3.webp";
import a7 from "./assets/about.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";
import a11 from "./assets/blog-1.webp";
import a12 from "./assets/blog-2.webp";
import a13 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-cleaning-15ff">
      {" "}
      {" "}
      <header className="header" id="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="logo" aria-label="PureLine home">
            {" "}
            <span className="logo__icon" aria-hidden="true">
              ✨
            </span>
            {" PureLine "}
          </a>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation menu" aria-controls="nav-links">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav aria-label="Primary navigation">
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
                <a className="nav-link" href="service.html">
                  Services
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
                <a className="nav-link" href="blog.html">
                  Blog
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
                <a className="nav-cta" href="contact.html">
                  Get a Free Quote
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
      <main>
        {" "}
        {" "}
        <section className="hero" aria-label="Welcome to PureLine">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="Team of professional cleaners at work in a bright home" className="active" />
            {" "}
            <img src={a1} alt="Cleaner polishing a modern office interior" />
            {" "}
            <img src={a2} alt="Freshly cleaned living space with sparkling surfaces" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero__content">
              {" "}
              <span className="hero__label">
                {"Residential & Commercial Cleaning"}
              </span>
              {" "}
              <h1 className="hero__title">
                A Spotless Home. A Healthier Space. PureLine.
              </h1>
              {" "}
              <p className="hero__desc">
                From weekly home cleans to full commercial contracts, our certified team delivers streak-free, germ-free results — with eco-friendly products and a 100% satisfaction promise.
              </p>
              {" "}
              <div className="hero__actions">
                {" "}
                <a href="contact.html" className="btn btn--primary">
                  Book Your Clean
                </a>
                {" "}
                <a href="service.html" className="btn btn--secondary">
                  Explore Services
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
        <section className="section" id="about">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="reveal">
                {" "}
                <span className="section__label">
                  About PureLine
                </span>
                {" "}
                <h2 className="section__title">
                  Cleaning Done Right — Every Time, Every Surface
                </h2>
                {" "}
                <p className="section__desc">
                  PureLine was founded on a simple belief: a clean space is a better place to live, work and breathe. For over a decade we have paired trusted, trained cleaners with a proven checklist system so nothing is ever missed.
                </p>
                {" "}
                <ul className="feature-list">
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Fully insured, background-checked cleaning professionals"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Non-toxic, family- and pet-safe cleaning products"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Flexible scheduling — daily, weekly, or one-off visits"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Satisfaction guarantee with free re-clean if needed"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="about.html" className="btn btn--solid mt-3">
                  Learn More About Us
                </a>
                {" "}
              </div>
              {" "}
              <div className="reveal">
                {" "}
                <img src={a3} alt="Bright, freshly cleaned living room with sunlight streaming in" className="split__img split__img--square" />
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
        <section className="section section--alt" aria-label="Company statistics">
          {" "}
          <div className="container">
            {" "}
            <div className="stats">
              {" "}
              <div className="stat reveal">
                {" "}
                <p className="stat__number">
                  12+
                </p>
                {" "}
                <p className="stat__label">
                  Years in Business
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <p className="stat__number">
                  3,500+
                </p>
                {" "}
                <p className="stat__label">
                  {"Homes & Offices Cleaned"}
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <p className="stat__number">
                  120+
                </p>
                {" "}
                <p className="stat__label">
                  Professional Cleaners
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <p className="stat__number">
                  98%
                </p>
                {" "}
                <p className="stat__label">
                  Client Retention Rate
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
        <section className="section" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="section__header reveal">
              {" "}
              <span className="section__label">
                Our Services
              </span>
              {" "}
              <h2 className="section__title">
                Sparkling Results, Tailored to You
              </h2>
              {" "}
              <p className="section__desc">
                A complete range of cleaning solutions for every room, surface and business — delivered by teams who treat your space like their own.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.5-4.5L12 9l5 5-7.5 7.5L3 21z" />
                    <path d="M14 4l2-2 4 4-2 2" />
                    <path d="M9 9L5 5" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Home Cleaning
                </h3>
                {" "}
                <p className="service-card__text">
                  Routine and one-off home cleans that keep every room dust-free, sanitised and shining.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20" />
                    <path d="M4 20V8l8-4 8 4v12" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Office & Commercial"}
                </h3>
                {" "}
                <p className="service-card__text">
                  After-hours or daytime contracts that keep workplaces presentable, hygienic and productive.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.5" />
                    <path d="M6 9h12M6 14h8M6 19h5" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Carpet & Upholstery"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Deep steam extraction that lifts stains, dust and odours from carpets, rugs and sofas.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l9-5 9 5" />
                    <path d="M5 10v9M19 10v9M9 10v9M15 10v9" />
                    <path d="M3 19h18" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Window Cleaning
                </h3>
                {" "}
                <p className="service-card__text">
                  Streak-free interior and exterior glass, frames and sills for a crystal-clear view.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4.4-1.5 7-5 7-10V5l-7-3-7 3v7c0 5 2.6 8.5 7 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  {"Deep & Spring Cleaning"}
                </h3>
                {" "}
                <p className="service-card__text">
                  Top-to-bottom seasonal scrubs that tackle grime, allergens and hard-to-reach spots.
                </p>
                {" "}
              </article>
              {" "}
              <article className="service-card reveal">
                {" "}
                <div className="service-card__icon" aria-hidden="true">
                  {" "}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l2-8 4-4 8 4-4 8-3-1-3 3-4-2z" />
                    <path d="M14 7l1-1" />
                    <path d="M16 9l2-2" />
                    <path d="M11 5l1-1" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Move-In / Move-Out
                </h3>
                {" "}
                <p className="service-card__text">
                  End-of-lease and pre-move cleans that meet landlord and agent standards — every time.
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
        <section className="section section--alt" id="projects">
          {" "}
          <div className="container">
            {" "}
            <div className="section__header reveal">
              {" "}
              <span className="section__label">
                Recent Work
              </span>
              {" "}
              <h2 className="section__title">
                {"Results You Can See & Trust"}
              </h2>
              {" "}
              <p className="section__desc">
                A glimpse of recent transformations across homes, offices and commercial spaces.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <figure className="portfolio-card reveal">
                {" "}
                <img src={a4} alt="Freshly cleaned family living room" className="portfolio-card__img" />
                {" "}
                <figcaption className="portfolio-card__overlay">
                  {" "}
                  <p className="portfolio-card__title">
                    Family Home Refresh
                  </p>
                  {" "}
                  <p className="portfolio-card__cat">
                    Residential · Deep Clean
                  </p>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="portfolio-card reveal">
                {" "}
                <img src={a5} alt="Clean and organised modern kitchen" className="portfolio-card__img" />
                {" "}
                <figcaption className="portfolio-card__overlay">
                  {" "}
                  <p className="portfolio-card__title">
                    Kitchen Restoration
                  </p>
                  {" "}
                  <p className="portfolio-card__cat">
                    Residential · Home Clean
                  </p>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="portfolio-card reveal">
                {" "}
                <img src={a6} alt="Polished open-plan office space" className="portfolio-card__img" />
                {" "}
                <figcaption className="portfolio-card__overlay">
                  {" "}
                  <p className="portfolio-card__title">
                    Corporate Office Polish
                  </p>
                  {" "}
                  <p className="portfolio-card__cat">
                    Commercial · Contract
                  </p>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
            </div>
            {" "}
            <div className="flex-center mt-4">
              {" "}
              <a href="project.html" className="btn btn--outline">
                View All Projects
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--fx" id="why">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="reveal">
                {" "}
                <img src={a7} alt="PureLine cleaner wearing branded uniform smiling in a tidy home" className="split__img split__img--square" />
                {" "}
              </div>
              {" "}
              <div className="reveal">
                {" "}
                <span className="section__label">
                  Why PureLine
                </span>
                {" "}
                <h2 className="section__title">
                  Trusted Cleaners, Transparent Pricing, Flawless Finishes
                </h2>
                {" "}
                <p className="section__desc">
                  We built PureLine around accountability. Every job follows a documented checklist, is supervised by a team lead, and is backed by our re-clean guarantee.
                </p>
                {" "}
                <ul className="feature-list">
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Fixed quotes before we start — no surprise add-ons"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" 24-hour online booking and instant confirmation"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Green-certified products safe for kids and pets"}
                  </li>
                  {" "}
                  <li className="feature-list__item">
                    <span className="feature-list__check">
                      ✓
                    </span>
                    {" Same-team consistency so your space feels familiar"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="contact.html" className="btn btn--solid mt-3">
                  Get Your Quote
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
        <section className="section" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="section__header reveal">
              {" "}
              <span className="section__label">
                Testimonials
              </span>
              {" "}
              <h2 className="section__title">
                What Our Clients Say
              </h2>
              {" "}
              <p className="section__desc">
                Real feedback from homeowners, landlords and business managers who rely on PureLine.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <p className="testimonial-card__text">
                  "PureLine transformed our apartment before we sold it. The buyers even complimented the condition. Worth every penny."
                </p>
                {" "}
                <footer className="testimonial-card__author">
                  {" "}
                  <img src={a8} alt="Portrait of Sarah Mitchell" className="testimonial-card__avatar" />
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Sarah Mitchell
                    </p>
                    {" "}
                    <p className="testimonial-card__role">
                      Homeowner
                    </p>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <p className="testimonial-card__text">
                  "Their team handles our offices every single week. Reliable, thorough, and our staff love coming into a spotless space."
                </p>
                {" "}
                <footer className="testimonial-card__author">
                  {" "}
                  <img src={a9} alt="Portrait of David Okafor" className="testimonial-card__avatar" />
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      David Okafor
                    </p>
                    {" "}
                    <p className="testimonial-card__role">
                      Operations Manager
                    </p>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="testimonial-card reveal">
                {" "}
                <p className="testimonial-card__text">
                  "I booked the deep spring clean and the carpets look brand new. Friendly team, great value, absolutely no hassle."
                </p>
                {" "}
                <footer className="testimonial-card__author">
                  {" "}
                  <img src={a10} alt="Portrait of Emily Rodriguez" className="testimonial-card__avatar" />
                  {" "}
                  <div>
                    {" "}
                    <p className="testimonial-card__name">
                      Emily Rodriguez
                    </p>
                    {" "}
                    <p className="testimonial-card__role">
                      Rental Property Owner
                    </p>
                    {" "}
                  </div>
                  {" "}
                </footer>
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
        <section className="section section--alt" id="blog">
          {" "}
          <div className="container">
            {" "}
            <div className="section__header reveal">
              {" "}
              <span className="section__label">
                From the Blog
              </span>
              {" "}
              <h2 className="section__title">
                {"Cleaning Tips & Industry Insights"}
              </h2>
              {" "}
              <p className="section__desc">
                Practical advice to keep your space fresh between professional visits.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid--3">
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a11} alt="Kitchen counter being wiped with a microfibre cloth" className="blog-card__img" />
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-card__meta">
                    <span>
                      Mar 12, 2026
                    </span>
                    <span>
                      4 min read
                    </span>
                  </p>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="single.html">
                      10 Everyday Habits That Keep Your Kitchen Spotless
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__text">
                    Small rituals make a huge difference. Here are ten quick habits that keep grime at bay between cleans.
                  </p>
                  {" "}
                  <a href="single.html" className="blog-card__link">
                    Read Article →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a12} alt="Neatly folded towels and a fresh bathroom" className="blog-card__img" />
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-card__meta">
                    <span>
                      Feb 28, 2026
                    </span>
                    <span>
                      5 min read
                    </span>
                  </p>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="single.html">
                      The Eco-Friendly Guide to a Chemical-Free Bathroom
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__text">
                    Bicarbonate, vinegar and a little patience — everything you need to clean your bathroom naturally.
                  </p>
                  {" "}
                  <a href="single.html" className="blog-card__link">
                    Read Article →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a13} alt="Bright office desk with clean surfaces and natural light" className="blog-card__img" />
                {" "}
                <div className="blog-card__body">
                  {" "}
                  <p className="blog-card__meta">
                    <span>
                      Feb 14, 2026
                    </span>
                    <span>
                      6 min read
                    </span>
                  </p>
                  {" "}
                  <h3 className="blog-card__title">
                    <a href="single.html">
                      How Often Should Your Office Be Professionally Cleaned?
                    </a>
                  </h3>
                  {" "}
                  <p className="blog-card__text">
                    The right cleaning schedule depends on traffic, layout and industry. Here is how to decide.
                  </p>
                  {" "}
                  <a href="single.html" className="blog-card__link">
                    Read Article →
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
        <section className="cta">
          {" "}
          <div className="container">
            {" "}
            <h2 className="cta__title">
              Ready for a Spotless Space?
            </h2>
            {" "}
            <p className="cta__desc">
              Get a free, no-obligation quote within 24 hours. Fast booking, fixed pricing, flawless results.
            </p>
            {" "}
            <div className="cta__actions">
              {" "}
              <a href="contact.html" className="btn btn--primary">
                Request a Quote
              </a>
              {" "}
              <a href="service.html" className="btn btn--secondary">
                See Full Services
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
              <a href="index.html" className="logo" aria-label="PureLine home">
                {" "}
                <span className="logo__icon" aria-hidden="true">
                  ✨
                </span>
                {" PureLine "}
              </a>
              {" "}
              <p>
                Professional residential and commercial cleaning built on trust, transparency and truly spotless results.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h3 className="footer__heading">
                Quick Links
              </h3>
              {" "}
              <ul className="footer__links">
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
                  <a href="service.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="project.html">
                    Projects
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h3 className="footer__heading">
                Services
              </h3>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="service.html">
                    Home Cleaning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Office Cleaning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Carpet Cleaning
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    Deep Cleaning
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h3 className="footer__heading">
                Get in Touch
              </h3>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon" aria-hidden="true">
                  📍
                </span>
                {" "}
                <span>
                  24 Harbour Lane, Riverside District, CA 90012
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon" aria-hidden="true">
                  📞
                </span>
                {" "}
                <a href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon" aria-hidden="true">
                  📧
                </span>
                {" "}
                <a href="mailto:hello@pureline.cleaning">
                  hello@pureline.cleaning
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
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" PureLine Cleaning Services. All rights reserved."}
            </p>
            {" "}
            <p>
              Made with care in the cleanest of hands.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
