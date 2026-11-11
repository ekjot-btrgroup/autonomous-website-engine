// Converted from the HTML template gym-fitness-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header-1.webp";
import a1 from "./assets/services-img.webp";
import a2 from "./assets/work-1.webp";
import a3 from "./assets/work-2.webp";
import a4 from "./assets/work-3.webp";
import a5 from "./assets/team-1.webp";
import a6 from "./assets/team-2.webp";
import a7 from "./assets/team-3.webp";
import a8 from "./assets/team-4.webp";
import a9 from "./assets/testimonial-1.webp";
import a10 from "./assets/testimonial-2.webp";
import a11 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-gym-fitness-693f">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14h3v4H4zM7 12h2v8H7zM25 14h3v4h-3zM23 12h2v8h-2zM9 15h14v2H9zM10 13h2v6h-2zM20 13h2v6h-2z" />
            </svg>
            {" Fit"}
            <span>
              Core
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" id="mainNav">
            {" "}
            <a href="index.html" className="nav__link active">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav__link">
              About
            </a>
            {" "}
            <a href="classes.html" className="nav__link">
              Classes
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
            <div className="nav__cta">
              {" "}
              <a href="contact.html#register" className="btn btn--primary">
                Join Now
              </a>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          <div className="burger" aria-label="Toggle navigation" role="button" tabIndex="0">
            {" "}
            <span />
            <span />
            <span />
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
        <div className="hero__bg">
          {" "}
          <img src={a0} alt="Gym interior with modern equipment" />
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="hero__content">
          {" "}
          <div className="hero__tag">
            {" "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {" #1 Fitness Center in Town "}
          </div>
          {" "}
          <h1 className="hero__title">
            Push Your Limits.
            <br />
            <span>
              Break Every Record.
            </span>
          </h1>
          {" "}
          <p className="hero__text">
            Elite training facilities, world-class coaches, and a community that drives you forward. Your transformation starts at FITCORE.
          </p>
          {" "}
          <div className="hero__actions">
            {" "}
            <a href="contact.html#register" className="btn btn--primary btn--lg">
              {" "}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              {" Start Your Journey "}
            </a>
            {" "}
            <a href="classes.html" className="btn btn--outline btn--lg">
              View Classes
            </a>
            {" "}
          </div>
          {" "}
          <div className="hero__stats">
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="15" data-suffix="+">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="5000" data-suffix="+">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Happy Members
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero__stat-num" data-count="50" data-suffix="+">
                0
              </div>
              {" "}
              <div className="hero__stat-label">
                Expert Trainers
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="features">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Modern Equipment
              </h4>
              {" "}
              <p>
                State-of-the-art machines and free weights from the world's top fitness brands.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Expert Trainers
              </h4>
              {" "}
              <p>
                Certified professionals dedicated to helping you reach your peak performance.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Group Classes
              </h4>
              {" "}
              <p>
                High-energy sessions from HIIT to yoga, designed for every fitness level.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-card__icon">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Nutrition Plans
              </h4>
              {" "}
              <p>
                Personalized meal plans crafted by certified nutritionists to fuel your goals.
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
      <section className="section section--dark">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-split__image reveal-left">
              {" "}
              <img src={a1} alt="FITCORE gym interior with members training" />
              {" "}
              <div className="about-split__badge">
                {" 15+ "}
                <small>
                  Years
                </small>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-split__content reveal-right">
              {" "}
              <span className="label">
                About FITCORE
              </span>
              {" "}
              <h2>
                We Help You Become the Best Version of Yourself
              </h2>
              {" "}
              <p>
                FITCORE isn't just a gym -- it's a movement. Founded in 2011, we've built a community where ambition meets action. Our 20,000 sq ft facility is equipped with everything you need to transform your body and mind.
              </p>
              {" "}
              <ul className="about-list">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" 24/7 access with keycard entry "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Free fitness assessment on signup "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Locker rooms with sauna & steam "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Complimentary parking for all members "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--primary">
                Learn More About Us
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
      <section className="section section--light">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="label">
              Our Classes
            </span>
            {" "}
            <h2>
              Featured Training Programs
            </h2>
            {" "}
            <p>
              From high-intensity interval training to restorative yoga, find the class that fits your goals.
            </p>
            {" "}
          </div>
          {" "}
          <div className="schedule-grid">
            {" "}
            <div className="class-card reveal">
              {" "}
              <div className="class-card__image">
                {" "}
                <img src={a2} alt="HIIT training session" />
                {" "}
                <span className="class-card__tag">
                  Popular
                </span>
                {" "}
              </div>
              {" "}
              <div className="class-card__body">
                {" "}
                <div className="class-card__time">
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" Mon / Wed / Fri · 6:00 AM "}
                </div>
                {" "}
                <h4>
                  HIIT Burn
                </h4>
                {" "}
                <p>
                  Explosive intervals that torch calories and build endurance in just 45 minutes.
                </p>
                {" "}
                <div className="class-card__meta">
                  {" "}
                  <span>
                    Coach: Marcus
                  </span>
                  {" "}
                  <span>
                    45 min
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="class-card reveal">
              {" "}
              <div className="class-card__image">
                {" "}
                <img src={a3} alt="Strength training class" />
                {" "}
                <span className="class-card__tag">
                  New
                </span>
                {" "}
              </div>
              {" "}
              <div className="class-card__body">
                {" "}
                <div className="class-card__time">
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" Tue / Thu · 7:00 AM "}
                </div>
                {" "}
                <h4>
                  Power Lift
                </h4>
                {" "}
                <p>
                  Compound movements and progressive overload for serious strength gains.
                </p>
                {" "}
                <div className="class-card__meta">
                  {" "}
                  <span>
                    Coach: Elena
                  </span>
                  {" "}
                  <span>
                    60 min
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="class-card reveal">
              {" "}
              <div className="class-card__image">
                {" "}
                <img src={a4} alt="Yoga class in progress" />
                {" "}
              </div>
              {" "}
              <div className="class-card__body">
                {" "}
                <div className="class-card__time">
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" Mon / Wed / Fri · 5:30 PM "}
                </div>
                {" "}
                <h4>
                  Yoga Flow
                </h4>
                {" "}
                <p>
                  Vinyasa-style sequences that improve flexibility, balance, and mental clarity.
                </p>
                {" "}
                <div className="class-card__meta">
                  {" "}
                  <span>
                    Coach: Aria
                  </span>
                  {" "}
                  <span>
                    50 min
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
          <div style={{ textAlign: "center", marginTop: "var(--space-lg)" }} className="reveal">
            {" "}
            <a href="classes.html" className="btn btn--dark">
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="label">
              Our Team
            </span>
            {" "}
            <h2>
              Meet the Trainers
            </h2>
            {" "}
            <p>
              Certified professionals who live and breathe fitness, committed to your success.
            </p>
            {" "}
          </div>
          {" "}
          <div className="trainers-grid">
            {" "}
            <div className="trainer-card reveal">
              {" "}
              <div className="trainer-card__image">
                {" "}
                <img src={a5} alt="Coach Marcus" />
                {" "}
              </div>
              {" "}
              <div className="trainer-card__info">
                {" "}
                <h4>
                  Marcus Rivera
                </h4>
                {" "}
                <div className="trainer-card__role">
                  Head Coach / HIIT
                </div>
                {" "}
                <p>
                  12 years of experience in functional training and athletic performance.
                </p>
                {" "}
                <div className="trainer-card__socials">
                  {" "}
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0012 7.53v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="trainer-card reveal">
              {" "}
              <div className="trainer-card__image">
                {" "}
                <img src={a6} alt="Coach Elena" />
                {" "}
              </div>
              {" "}
              <div className="trainer-card__info">
                {" "}
                <h4>
                  Elena Kowalski
                </h4>
                {" "}
                <div className="trainer-card__role">
                  Strength / Conditioning
                </div>
                {" "}
                <p>
                  Former competitive powerlifter with a passion for building raw strength.
                </p>
                {" "}
                <div className="trainer-card__socials">
                  {" "}
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0012 7.53v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="trainer-card reveal">
              {" "}
              <div className="trainer-card__image">
                {" "}
                <img src={a7} alt="Coach Aria" />
                {" "}
              </div>
              {" "}
              <div className="trainer-card__info">
                {" "}
                <h4>
                  Aria Chen
                </h4>
                {" "}
                <div className="trainer-card__role">
                  Yoga / Mobility
                </div>
                {" "}
                <p>
                  Certified yoga instructor focusing on recovery and mindful movement.
                </p>
                {" "}
                <div className="trainer-card__socials">
                  {" "}
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0012 7.53v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="trainer-card reveal">
              {" "}
              <div className="trainer-card__image">
                {" "}
                <img src={a8} alt="Coach Jake" />
                {" "}
              </div>
              {" "}
              <div className="trainer-card__info">
                {" "}
                <h4>
                  Jake Thompson
                </h4>
                {" "}
                <div className="trainer-card__role">
                  Boxing / Cardio
                </div>
                {" "}
                <p>
                  Professional boxing coach bringing fight-club intensity to every session.
                </p>
                {" "}
                <div className="trainer-card__socials">
                  {" "}
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0012 7.53v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--light">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="label">
              Membership
            </span>
            {" "}
            <h2>
              Choose Your Plan
            </h2>
            {" "}
            <p>
              Flexible memberships that match your commitment level. No hidden fees, cancel anytime.
            </p>
            {" "}
          </div>
          {" "}
          <div className="pricing-grid">
            {" "}
            <div className="price-card reveal">
              {" "}
              <h3>
                Starter
              </h3>
              {" "}
              <div className="price-card__amount">
                $29
                <small>
                  /mo
                </small>
              </div>
              {" "}
              <div className="price-card__period">
                Billed monthly
              </div>
              {" "}
              <ul className="price-card__features">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Full gym floor access "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Locker room & showers "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" 2 group classes/week "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Free WiFi "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html#register" className="btn btn--ghost" style={{ width: "100%" }}>
                Get Started
              </a>
              {" "}
            </div>
            {" "}
            <div className="price-card price-card--featured reveal">
              {" "}
              <div className="price-card__popular">
                Most Popular
              </div>
              {" "}
              <h3>
                Pro
              </h3>
              {" "}
              <div className="price-card__amount">
                $59
                <small>
                  /mo
                </small>
              </div>
              {" "}
              <div className="price-card__period">
                Billed monthly
              </div>
              {" "}
              <ul className="price-card__features">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Everything in Starter "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Unlimited group classes "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" 1 PT session/month "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Sauna & steam access "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Nutrition consultation "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html#register" className="btn btn--primary" style={{ width: "100%" }}>
                Join Now
              </a>
              {" "}
            </div>
            {" "}
            <div className="price-card reveal">
              {" "}
              <h3>
                Elite
              </h3>
              {" "}
              <div className="price-card__amount">
                $99
                <small>
                  /mo
                </small>
              </div>
              {" "}
              <div className="price-card__period">
                Billed monthly
              </div>
              {" "}
              <ul className="price-card__features">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Everything in Pro "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" 4 PT sessions/month "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Custom meal plan "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Priority class booking "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" Guest passes (2/month) "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="contact.html#register" className="btn btn--ghost" style={{ width: "100%" }}>
                Go Elite
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="label">
              Testimonials
            </span>
            {" "}
            <h2>
              What Our Members Say
            </h2>
            {" "}
            <p>
              Real stories from real people who transformed their lives at FITCORE.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__quote">
                FITCORE changed my life. I lost 35 pounds in 6 months and gained confidence I never knew I had. The trainers here genuinely care about your progress.
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a9} alt="Sarah M." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Mitchell
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Member since 2022
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__quote">
                The Power Lift class is incredible. Elena pushes you to your limits while keeping form perfect. Best investment I've ever made in myself.
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a10} alt="David K." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    David Kim
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Member since 2023
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__quote">
                I've been to gyms all over the city. Nothing compares to FITCORE. The energy, the equipment, the community -- it's the complete package.
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a11} alt="Lisa R." className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Lisa Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Member since 2021
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="cta-banner">
        {" "}
        <div className="container" style={{ position: "relative", zIndex: "2" }}>
          {" "}
          <h2 className="reveal">
            Ready to Transform?
          </h2>
          {" "}
          <p className="reveal">
            Join thousands of members who've already started their fitness journey. Your first week is on us.
          </p>
          {" "}
          <a href="contact.html#register" className="btn btn--outline btn--lg reveal">
            {" Claim Your Free Trial "}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            {" "}
          </a>
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
              <a href="index.html" className="footer__brand">
                {" "}
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14h3v4H4zM7 12h2v8H7zM25 14h3v4h-3zM23 12h2v8h-2zM9 15h14v2H9zM10 13h2v6h-2zM20 13h2v6h-2z" />
                </svg>
                {" Fit"}
                <span>
                  Core
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Premium fitness facilities and expert coaching to help you become the strongest version of yourself. Open 24/7, 365 days a year.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
              </h4>
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
                  <a href="classes.html">
                    Classes
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
                Classes
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="classes.html">
                    HIIT Burn
                  </a>
                </li>
                {" "}
                <li>
                  <a href="classes.html">
                    Power Lift
                  </a>
                </li>
                {" "}
                <li>
                  <a href="classes.html">
                    Yoga Flow
                  </a>
                </li>
                {" "}
                <li>
                  <a href="classes.html">
                    Boxing
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
                Contact Info
              </h4>
              {" "}
              <ul className="footer__contact">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" 123 Fitness Avenue, Downtown, NY 10001 "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {" +1 (555) 123-4567 "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {" info@fitcore.com "}
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
              {" FITCORE. All rights reserved."}
            </p>
            {" "}
            <div className="footer__socials">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0012 7.53v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
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
      <a href="contact.html#register" className="pulse-badge" aria-label="Join Now">
        Join
        <br />
        Now
      </a>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
