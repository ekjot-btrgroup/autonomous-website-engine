// Converted from the HTML template physical-therapy-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/team-1.webp";
import a3 from "./assets/team-2.webp";
import a4 from "./assets/team-3.webp";
import a5 from "./assets/about-1.webp";
import a6 from "./assets/about-2.webp";
import a7 from "./assets/service-1.webp";
import a8 from "./assets/service-2.webp";
import a9 from "./assets/service-3.webp";
import a10 from "./assets/service-4.webp";
import a11 from "./assets/service-5.webp";
import a12 from "./assets/service-6.webp";
import a13 from "./assets/video-img.webp";
import a14 from "./assets/blog-1.webp";
import a15 from "./assets/blog-2.webp";
import a16 from "./assets/blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@400;700;800;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-physical-therapy-8283">
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {" "}
      <header className="site-header">
        {" "}
        <div className="header-top">
          {" "}
          <div className="container header-top-inner">
            {" "}
            <div className="header-contact">
              {" "}
              <a href="tel:+15551234567">
                {" "}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {" (555) 123-4567 "}
              </a>
              {" "}
              <a className="header-address" href="mailto:hello@terapiaclinic.com">
                {" "}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {" hello@terapiaclinic.com "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="header-hours">
              {" "}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {" Mon – Sat: 7:00 AM – 7:00 PM "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="header-main">
          {" "}
          <div className="container header-main-inner">
            {" "}
            <a className="brand" href="index.html" aria-label="Terapia — home">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                {" "}
                <svg viewBox="0 0 40 40" fill="none">
                  {" "}
                  <path d="M7 21.5h7l3-8 4 13 2.5-6.5 1.5 1.5h8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {" "}
                  <circle cx="32.5" cy="12.5" r="2.6" fill="#EA9A4E" />
                  {" "}
                </svg>
                {" "}
              </span>
              {" "}
              <span className="brand-name">
                Terapia
                <small>
                  {"Physical Therapy & Rehab"}
                </small>
              </span>
              {" "}
            </a>
            {" "}
            <nav className="nav" aria-label="Primary">
              {" "}
              <button className="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle menu">
                {" "}
                <span />
                <span />
                <span />
                {" "}
              </button>
              {" "}
              <ul className="nav-links">
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
                  <a className="nav-link" href="team.html">
                    Team
                  </a>
                </li>
                {" "}
                <li>
                  <a className="nav-link" href="testimonials.html">
                    Stories
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
                <li className="nav-cta">
                  <a className="btn btn-primary btn-sm" href="appointment.html">
                    Book Appointment
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </nav>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        {" "}
        <section className="hero" id="home">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero-inner">
              {" "}
              <span className="hero-badge">
                🩺 Caring, evidence-based physical therapy
              </span>
              {" "}
              <h1>
                {"Move freely. "}
                <em>
                  Heal deeply.
                </em>
                {" Live fully."}
              </h1>
              {" "}
              <p className="lede">
                At Terapia, every recovery plan begins with listening. Our physical therapists build a personal path to less pain, restored strength and confidence that lasts — in person or online.
              </p>
              {" "}
              <div className="hero-cta">
                {" "}
                <a className="btn btn-apricot" href="appointment.html">
                  {"Book Your First Assessment "}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="btn btn-ghost-light" href="services.html">
                  Explore Services
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-note">
                {" "}
                <span className="avatar-row" aria-hidden="true">
                  {" "}
                  <img src={a2} alt="" />
                  {" "}
                  <img src={a3} alt="" />
                  {" "}
                  <img src={a4} alt="" />
                  {" "}
                </span>
                {" "}
                <span>
                  Trusted by 2,000+ patients · 4.9/5 rated clinic
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <a className="hero-scroll" href="#stats" aria-label="Scroll to explore">
            Scroll
          </a>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="stats-strip" id="stats">
          {" "}
          <div className="container">
            {" "}
            <div className="stats-strip-inner">
              {" "}
              <div className="stat reveal">
                <b>
                  14
                  <sup>
                    +
                  </sup>
                </b>
                <span>
                  Years of Care
                </span>
              </div>
              {" "}
              <div className="stat reveal d1">
                <b>
                  2,000
                  <sup>
                    +
                  </sup>
                </b>
                <span>
                  Patients Treated
                </span>
              </div>
              {" "}
              <div className="stat reveal d2">
                <b>
                  92
                  <sup>
                    %
                  </sup>
                </b>
                <span>
                  Recovery Success
                </span>
              </div>
              {" "}
              <div className="stat reveal d3">
                <b>
                  8
                </b>
                <span>
                  Specialist Services
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" id="why">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Why Terapia
              </span>
              {" "}
              <h2>
                {"A clinic that treats the person, "}
                <span className="text-gradient">
                  not just the injury
                </span>
              </h2>
              {" "}
              <p>
                We blend hands-on manual therapy, guided exercise and honest education — so your recovery sticks long after your last visit.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-4">
              {" "}
              <article className="card feature-card reveal">
                {" "}
                <span className="feature-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6.6 5.5 5.5 0 0 1 21.5 12C19 16.4 12 21 12 21z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Personal Care
                </h3>
                {" "}
                <p>
                  One therapist, one plan, one hour with you. No conveyor-belt sessions, ever.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card feature-card reveal d1">
                {" "}
                <span className="feature-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Proven Methods
                </h3>
                {" "}
                <p>
                  Every protocol is rooted in current research and adapted to how your body responds.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card feature-card reveal d2">
                {" "}
                <span className="feature-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 12h3l2.5-6 4 12 3-8 1.5 2H22" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Visible Progress
                </h3>
                {" "}
                <p>
                  Measurable goals, clear milestones and honest check-ins at every stage of recovery.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card feature-card reveal d3">
                {" "}
                <span className="feature-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 14.5a4 4 0 0 0 7 0" />
                    <path d="M9 9.5h.01M15 9.5h.01" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Care That Cares
                </h3>
                {" "}
                <p>
                  A warm, judgement-free space where every question is welcome and every goal respected.
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
        <section className="section section-soft">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-media media-frame reveal">
                {" "}
                <img src={a5} alt="Physical therapist guiding a patient through a stretching exercise" />
                {" "}
                <span className="exp-badge">
                  <b>
                    14
                  </b>
                  <span>
                    Years of care
                  </span>
                </span>
                {" "}
                <img className="img-float" src={a6} alt="Close-up of hands-on manual therapy treatment" />
                {" "}
              </div>
              {" "}
              <div className="reveal d1">
                {" "}
                <span className="eyebrow">
                  About Terapia
                </span>
                {" "}
                <h2>
                  Recovery is a partnership — let's build yours
                </h2>
                {" "}
                <p className="lede">
                  Founded by physiotherapists who were tired of rushed appointments, Terapia is built on a simple belief: you recover best when you understand your body and trust the person guiding you.
                </p>
                {" "}
                <ul className="checklist">
                  {" "}
                  <li>
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 60-minute initial assessments with a licensed therapist "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Home exercise programs you'll actually enjoy doing "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" Direct billing & transparent pricing, no surprises "}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a className="btn btn-primary" href="about.html">
                  {"Our Story "}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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
        <section className="section" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Our Services
              </span>
              {" "}
              <h2>
                Specialist care for every stage of recovery
              </h2>
              {" "}
              <p>
                From first twinge to full comeback — eight focused programs led by senior physiotherapists.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="card service-card reveal">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a7} alt="Therapist performing hands-on manual therapy on a patient's shoulder" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 2 8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Manual Therapy
                  </h3>
                  {" "}
                  <p>
                    Skilled hands-on techniques to release tension, restore mobility and ease pain at its source.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal d1">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a8} alt="Patient performing a guided exercise with therapist supervision" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 9h12l-1.5 12h-9z" />
                      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Sports Rehabilitation
                  </h3>
                  {" "}
                  <p>
                    Return to play stronger than before with sport-specific training and injury-prevention coaching.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal d2">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a9} alt="Rehabilitation exercise for lower limb recovery" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 12h4l2-6 3 12 2.5-9L15 12h6" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    Post-Surgery Rehab
                  </h3>
                  {" "}
                  <p>
                    Structured, safe recovery after joint replacement, ligament repair or spinal surgery.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a10} alt="Therapist working on a patient's back and spine" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3v18M7 7h10M5 12h14M8 17h8" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Spine & Back Care"}
                  </h3>
                  {" "}
                  <p>
                    Targeted relief for neck and back pain — from desk-posture strain to chronic conditions.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal d1">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a11} alt="Balance and coordination training with a therapy ball" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Vestibular & Balance"}
                  </h3>
                  {" "}
                  <p>
                    Dizziness, vertigo and balance programs that rebuild your confidence on solid ground.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card service-card reveal d2">
                {" "}
                <div className="service-card-media">
                  {" "}
                  <img src={a12} alt="Hand therapy and fine motor rehabilitation" />
                  {" "}
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 13V6a2 2 0 1 1 4 0v3" />
                      <path d="M12 9V5a2 2 0 1 1 4 0v4" />
                      <path d="M16 9V7a2 2 0 1 1 4 0v5.5C20 18 16.5 21 12.5 21c-2.5 0-4.5-1-6-2.5L4 16" />
                    </svg>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="service-card-body">
                  {" "}
                  <h3>
                    {"Hand & Wrist Therapy"}
                  </h3>
                  {" "}
                  <p>
                    Focused care for repetitive strain, carpal tunnel and post-fracture hand recovery.
                  </p>
                  {" "}
                  <a className="link-arrow" href="appointment.html">
                    {"Book a session "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
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
            <div className="section-head center" style={{ marginBottom: "0", marginTop: "2.8rem" }}>
              {" "}
              <a className="btn btn-outline" href="services.html">
                {"View All 8 Services "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
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
        <section className="section section-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="video-block reveal">
              {" "}
              <img src={a13} alt="Inside the Terapia rehabilitation studio" />
              {" "}
              <div className="video-content">
                {" "}
                <button className="play-btn" type="button" aria-label="Play clinic tour video">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z" />
                  </svg>
                  {" "}
                </button>
                {" "}
                <h2>
                  Step inside the Terapia studio
                </h2>
                {" "}
                <p>
                  See the space, the team and the technology behind 2,000+ recoveries.
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
        <section className="section" id="stories">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                Patient Stories
              </span>
              {" "}
              <h2>
                Recoveries our patients love to tell
              </h2>
              {" "}
              <p>
                Real words from people who walked in hurting — and walked out stronger.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="card testi-card reveal">
                {" "}
                <span className="stars" aria-label="5 out of 5 stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <blockquote>
                  After two years of back pain, I can finally play with my kids again. Terapia gave me my life back — I'll never stop recommending them.
                </blockquote>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a2} alt="" />
                  {" "}
                  <div>
                    <b>
                      Daniel Reed
                    </b>
                    <span>
                      Back Pain Recovery
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testi-card reveal d1">
                {" "}
                <span className="stars" aria-label="5 out of 5 stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <blockquote>
                  As a marathon runner, I was terrified a knee injury would end my season. Their sports rehab had me back on the start line in 10 weeks.
                </blockquote>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a3} alt="" />
                  {" "}
                  <div>
                    <b>
                      Mia Castellano
                    </b>
                    <span>
                      Sports Rehab
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card testi-card reveal d2">
                {" "}
                <span className="stars" aria-label="5 out of 5 stars">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <blockquote>
                  My father's post-surgery recovery was handled with so much patience and expertise. The team checked in weekly and adjusted everything.
                </blockquote>
                {" "}
                <div className="testi-person">
                  {" "}
                  <img src={a4} alt="" />
                  {" "}
                  <div>
                    <b>
                      James Okafor
                    </b>
                    <span>
                      Post-Surgery Rehab
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-head center" style={{ marginBottom: "0", marginTop: "2.8rem" }}>
              {" "}
              <a className="btn btn-primary" href="testimonials.html">
                {"Read More Stories "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
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
        <section className="section section-soft" id="blog">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center reveal">
              {" "}
              <span className="eyebrow">
                From the Blog
              </span>
              {" "}
              <h2>
                Learn to move better, every week
              </h2>
              {" "}
              <p>
                Practical guides from our therapists on pain, posture, strength and staying active for life.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid grid-3">
              {" "}
              <article className="card post-card reveal">
                {" "}
                <div className="post-media">
                  {" "}
                  <span className="post-tag">
                    Recovery
                  </span>
                  {" "}
                  <img src={a14} alt="Patient working through a guided stretching routine" />
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      Aug 18, 2026
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      7 Daily Stretches for Desk Workers Who Sit Too Much
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Simple 5-minute mobility resets that undo a day of sitting — no gym required.
                  </p>
                  {" "}
                  <a className="link-arrow" href="blog-single.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card post-card reveal d1">
                {" "}
                <div className="post-media">
                  {" "}
                  <span className="post-tag">
                    Pain Relief
                  </span>
                  {" "}
                  <img src={a15} alt="Therapist explaining a recovery exercise to a patient" />
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      Aug 4, 2026
                    </span>
                    <span>
                      8 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      Why Rest Isn't Always the Best Medicine for Back Pain
                    </a>
                  </h3>
                  {" "}
                  <p>
                    The science of "movement is medicine" — and how to know when to push, and when to pause.
                  </p>
                  {" "}
                  <a className="link-arrow" href="blog-single.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="card post-card reveal d2">
                {" "}
                <div className="post-media">
                  {" "}
                  <span className="post-tag">
                    Strength
                  </span>
                  {" "}
                  <img src={a16} alt="Strength training exercise guided by a physiotherapist" />
                  {" "}
                </div>
                {" "}
                <div className="post-body">
                  {" "}
                  <div className="post-meta">
                    <span>
                      Jul 21, 2026
                    </span>
                    <span>
                      5 min read
                    </span>
                  </div>
                  {" "}
                  <h3>
                    <a href="blog-single.html">
                      How Much Strength Do You Really Need After 50?
                    </a>
                  </h3>
                  {" "}
                  <p>
                    Evidence-backed benchmarks for staying independent, active and injury-free as you age.
                  </p>
                  {" "}
                  <a className="link-arrow" href="blog-single.html">
                    {"Read article "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
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
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-band reveal">
              {" "}
              <div>
                {" "}
                <h2>
                  Ready to move without pain?
                </h2>
                {" "}
                <p>
                  Book your 60-minute first assessment. We'll listen, assess and build your recovery plan — before you leave the room.
                </p>
                {" "}
              </div>
              {" "}
              <div className="cta-band-actions">
                {" "}
                <a className="btn btn-apricot" href="appointment.html">
                  Book an Appointment
                </a>
                {" "}
                <a className="btn btn-ghost-light" href="tel:+15551234567">
                  Call (555) 123-4567
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
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-top footer">
            {" "}
            <div className="footer-brand">
              {" "}
              <a className="brand" href="index.html">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 40 40" fill="none">
                    {" "}
                    <path d="M7 21.5h7l3-8 4 13 2.5-6.5 1.5 1.5h8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {" "}
                    <circle cx="32.5" cy="12.5" r="2.6" fill="#EA9A4E" />
                    {" "}
                  </svg>
                  {" "}
                </span>
                {" "}
                <span className="brand-name">
                  Terapia
                  <small>
                    {"Physical Therapy & Rehab"}
                  </small>
                </span>
                {" "}
              </a>
              {" "}
              <p>
                {"A caring physical therapy & rehabilitation clinic helping you heal, restore and move freely — in person and online."}
              </p>
              {" "}
              <div className="social-row">
                {" "}
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23 8.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4.6 12 4.6 12 4.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 10 .8 11.9v1.7C.8 15.5 1 17.3 1 17.3s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.6 0 7.7-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7zM9.8 15.3V8.9l6.1 3.2z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.9h3.1V21H3.4zM12.9 8.9h-3v12h3.1v-6.3c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3v6.2H20v-7.5c0-3-1.7-4.7-4.1-4.7-1.8 0-2.6 1-3 1.8z" />
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
                Quick Links
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
                  <a href="team.html">
                    Our Team
                  </a>
                </li>
                {" "}
                <li>
                  <a href="appointment.html">
                    Book Appointment
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
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
                  <a href="services.html">
                    Manual Therapy
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Sports Rehabilitation
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Post-Surgery Rehab
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Spine & Back Care"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Vestibular & Balance"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    {"Hand & Wrist Therapy"}
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
                Contact
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" "}
                  <span>
                    128 Wellness Avenue, Suite 210
                    <br />
                    Portland, OR 97205
                  </span>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" "}
                  <a href="tel:+15551234567">
                    (555) 123-4567
                  </a>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {" "}
                  <a href="mailto:hello@terapiaclinic.com">
                    hello@terapiaclinic.com
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
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Terapia Clinic. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Made with "}
              <span className="heart">
                ♥
              </span>
              {" for recovery · "}
              <a href="#">
                Back to top ↑
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" type="button" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6" />
        </svg>
        {" "}
      </button>
      {" "}
    </div>
  );
}
