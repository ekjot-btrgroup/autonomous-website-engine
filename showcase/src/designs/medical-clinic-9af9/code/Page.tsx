// Converted from the HTML template medical-clinic-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero.webp";
import a1 from "./assets/img-about.webp";
import a2 from "./assets/img-doctor-1.webp";
import a3 from "./assets/img-doctor-2.webp";
import a4 from "./assets/img-doctor-3.webp";
import a5 from "./assets/img-client-1.webp";
import a6 from "./assets/img-client-2.webp";
import a7 from "./assets/img-client-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Work+Sans:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-medical-clinic-9af9">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar__inner">
          {" "}
          <div className="topbar__left">
            {" "}
            <span className="topbar__item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {" +1 (555) 123-4567 "}
            </span>
            {" "}
            <span className="topbar__item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {" Mon–Sat: 8:00 AM – 7:00 PM "}
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar__right">
            {" "}
            <span className="topbar__item">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {" info@curahealth.com "}
            </span>
            {" "}
            <div className="topbar__social">
              {" "}
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
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
      {" "}
      <header className="site-header">
        {" "}
        <div className="container site-header__inner">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <div className="brand__mark">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="brand__name">
                {"CURA "}
                <span>
                  Health
                </span>
              </span>
              {" "}
              <div className="brand__tag">
                Whole-person care
              </div>
              {" "}
            </div>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav className="nav" role="navigation" aria-label="Main navigation">
            {" "}
            <ul className="nav-links">
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
                <a href="services.html" className="nav-link">
                  Services
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
            </ul>
            {" "}
            <a href="contact.html" className="nav__cta">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {" Book Appointment "}
            </a>
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
        <section className="hero">
          {" "}
          <div className="hero__bg">
            {" "}
            <img src={a0} alt="Modern medical clinic interior" />
            {" "}
          </div>
          {" "}
          <div className="container hero__inner">
            {" "}
            <div className="hero__copy">
              {" "}
              <div className="hero__badge">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {" Trusted Care Since 1998 "}
              </div>
              {" "}
              <h1 className="hero__title">
                {"Compassionate care for "}
                <em>
                  every stage
                </em>
                {" of life"}
              </h1>
              {" "}
              <p className="hero__lead">
                From routine check-ups to specialist consultations — warm, professional healthcare designed around you and your family.
              </p>
              {" "}
              <div className="hero__actions">
                {" "}
                <a href="contact.html" className="btn btn--light btn--lg">
                  {" Book an Appointment "}
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="about.html" className="btn btn--ghost btn--lg">
                  Meet Our Doctors
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero__points">
                {" "}
                <span className="hero__point">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {" 15,000+ Patients "}
                </span>
                {" "}
                <span className="hero__point">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {" 48+ Specialists "}
                </span>
                {" "}
                <span className="hero__point">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" 27 Years of Service "}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero__visual">
              {" "}
              <div className="hero__card">
                {" "}
                <h3 className="hero__card-title">
                  Book a Visit
                </h3>
                {" "}
                <p className="hero__card-sub">
                  Quick online booking — no phone call needed.
                </p>
                {" "}
                <form className="appt-form" data-form="">
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="hero-name">
                      Full Name
                    </label>
                    {" "}
                    <input type="text" id="hero-name" name="name" placeholder="Your name" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="hero-phone">
                      Phone
                    </label>
                    {" "}
                    <input type="tel" id="hero-phone" name="phone" placeholder="(555) 000-0000" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="hero-dept">
                      Department
                    </label>
                    {" "}
                    <select id="hero-dept" name="department">
                      {" "}
                      <option value="">
                        — Select —
                      </option>
                      {" "}
                      <option>
                        General Medicine
                      </option>
                      {" "}
                      <option>
                        Cardiology
                      </option>
                      {" "}
                      <option>
                        Pediatrics
                      </option>
                      {" "}
                      <option>
                        Neurology
                      </option>
                      {" "}
                      <option>
                        Orthopedics
                      </option>
                      {" "}
                      <option>
                        Women's Health
                      </option>
                      {" "}
                    </select>
                    {" "}
                  </div>
                  {" "}
                  <button type="submit" className="btn btn--wine" style={{ justifyContent: "center", width: "100%" }}>
                    Request Appointment
                  </button>
                  {" "}
                  <div className="form-msg" />
                  {" "}
                </form>
                {" "}
              </div>
              {" "}
              <div className="hero__float">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {" "}
                <div>
                  {" "}
                  <b>
                    Same-Day
                  </b>
                  {" "}
                  <span>
                    Appointments Available
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
        </section>
        {" "}
        {" "}
        <section className="ribbon">
          {" "}
          <div className="container">
            {" "}
            <div className="ribbon__grid">
              {" "}
              <div className="ribbon__item">
                {" "}
                <div className="ribbon__ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <b>
                    Board-Certified
                  </b>
                  {" "}
                  <span>
                    Licensed physicians
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="ribbon__item">
                {" "}
                <div className="ribbon__ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <b>
                    Minimal Wait Times
                  </b>
                  {" "}
                  <span>
                    Same-day booking
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="ribbon__item">
                {" "}
                <div className="ribbon__ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <b>
                    Modern Facilities
                  </b>
                  {" "}
                  <span>
                    Advanced diagnostics
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="ribbon__item">
                {" "}
                <div className="ribbon__ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <b>
                    Insurance Welcome
                  </b>
                  {" "}
                  <span>
                    Most plans accepted
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
        </section>
        {" "}
        {" "}
        <section className="section section--cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center">
              {" "}
              <span className="eyebrow">
                Our Departments
              </span>
              {" "}
              <h2 className="section-title">
                {"Comprehensive "}
                <em>
                  medical services
                </em>
                {" under one roof"}
              </h2>
              {" "}
              <p className="section-sub">
                From prevention to treatment — every department works together to give you seamless, whole-person care.
              </p>
              {" "}
            </div>
            {" "}
            <div className="svc-grid">
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Emergency Care
                </h3>
                {" "}
                <p>
                  Immediate attention for urgent medical needs — 24/7 emergency response team on standby.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Cardiology
                </h3>
                {" "}
                <p>
                  Heart health assessments, ECG, stress testing, and ongoing cardiac care management.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Pediatrics
                </h3>
                {" "}
                <p>
                  Gentle, specialised care for infants, children, and adolescents — wellness visits to vaccinations.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  {"Diagnostics & Lab"}
                </h3>
                {" "}
                <p>
                  On-site blood work, imaging, and pathology — fast results with in-house analysis.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Pharmacy
                </h3>
                {" "}
                <p>
                  Convenient on-site pharmacy for prescriptions, refills, and medication counselling.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="svc-card reveal">
                {" "}
                <div className="svc-ico">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3>
                  Women's Health
                </h3>
                {" "}
                <p>
                  Compassionate gynaecology, prenatal care, mammography, and wellness screenings.
                </p>
                {" "}
                <a href="services.html" className="svc-more">
                  {"Learn More "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
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
          <div className="container split">
            {" "}
            <div className="split__media reveal">
              {" "}
              <div className="split__photo">
                {" "}
                <img src={a1} alt="CURA Health medical team in consultation room" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="split__badge">
                {" "}
                <b>
                  27+
                </b>
                {" "}
                <span>
                  Years of dedicated
                  <br />
                  community care
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split__copy reveal">
              {" "}
              <span className="eyebrow">
                About CURA
              </span>
              {" "}
              <h3>
                {"Whole-person care that puts "}
                <em>
                  you first
                </em>
              </h3>
              {" "}
              <p>
                Founded in 1998, CURA Health has grown from a single family practice into a trusted multi-specialty clinic. Our philosophy is simple: treat every patient like family — with respect, compassion, and the highest standard of medical care.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li className="check-item">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" "}
                  <span>
                    <b>
                      Board-certified
                    </b>
                    {" physicians across 8 specialties"}
                  </span>
                  {" "}
                </li>
                {" "}
                <li className="check-item">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" "}
                  <span>
                    {"On-site "}
                    <b>
                      {"diagnostics & pharmacy"}
                    </b>
                    {" for same-day results"}
                  </span>
                  {" "}
                </li>
                {" "}
                <li className="check-item">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" "}
                  <span>
                    {"Flexible scheduling with "}
                    <b>
                      {"evening & weekend"}
                    </b>
                    {" hours"}
                  </span>
                  {" "}
                </li>
                {" "}
                <li className="check-item">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {" "}
                  <span>
                    {"Most "}
                    <b>
                      major insurance plans
                    </b>
                    {" accepted — we'll help you navigate"}
                  </span>
                  {" "}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--wine">
                {"Learn Our Story "}
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--rose">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center">
              {" "}
              <span className="eyebrow">
                Our Team
              </span>
              {" "}
              <h2 className="section-title">
                {"Meet your "}
                <em>
                  healthcare team
                </em>
              </h2>
              {" "}
              <p className="section-sub">
                Compassionate specialists dedicated to your well-being — every provider brings years of experience and a warm, collaborative approach.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-grid">
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-photo">
                  {" "}
                  <img src={a2} alt="Dr. Sarah Mitchell" loading="lazy" />
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-info">
                  {" "}
                  <h3>
                    Dr. Sarah Mitchell
                  </h3>
                  {" "}
                  <span className="team-role">
                    Internal Medicine
                  </span>
                  {" "}
                  <p>
                    15+ years in family and internal medicine, with a focus on preventive care and chronic disease management.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-photo">
                  {" "}
                  <img src={a3} alt="Dr. James Rivera" loading="lazy" />
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-info">
                  {" "}
                  <h3>
                    Dr. James Rivera
                  </h3>
                  {" "}
                  <span className="team-role">
                    Cardiology
                  </span>
                  {" "}
                  <p>
                    Board-certified cardiologist specialising in heart disease prevention, diagnostics, and rehabilitation.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="team-card reveal">
                {" "}
                <div className="team-photo">
                  {" "}
                  <img src={a4} alt="Dr. Aisha Patel" loading="lazy" />
                  {" "}
                  <div className="team-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="team-info">
                  {" "}
                  <h3>
                    Dr. Aisha Patel
                  </h3>
                  {" "}
                  <span className="team-role">
                    Pediatrics
                  </span>
                  {" "}
                  <p>
                    Dedicated paediatrician with a gentle approach, caring for children from infancy through adolescence.
                  </p>
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
            <div className="section-head section-head--center">
              {" "}
              <span className="eyebrow">
                Testimonials
              </span>
              {" "}
              <h2 className="section-title">
                {"What our "}
                <em>
                  patients
                </em>
                {" say"}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="tst-grid">
              {" "}
              <blockquote className="tst-card reveal">
                {" "}
                <div className="tst-quote">
                  "
                </div>
                {" "}
                <p>
                  I've never felt so well cared for. Dr. Mitchell took the time to listen to every concern and explained everything clearly. The whole team is warm and professional.
                </p>
                {" "}
                <div className="tst-person">
                  {" "}
                  <div className="tst-avatar">
                    <img src={a5} alt="Patient" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <b>
                      Linda Hartwell
                    </b>
                    {" "}
                    <span>
                      Patient since 2019
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="tst-stars">
                    ★★★★★
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="tst-card reveal">
                {" "}
                <div className="tst-quote">
                  "
                </div>
                {" "}
                <p>
                  After years of searching for a diagnosis, Dr. Rivera's team finally identified the root cause of my heart condition. I'm grateful every day for their expertise and persistence.
                </p>
                {" "}
                <div className="tst-person">
                  {" "}
                  <div className="tst-avatar">
                    <img src={a6} alt="Patient" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <b>
                      Michael Torres
                    </b>
                    {" "}
                    <span>
                      Patient since 2021
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="tst-stars">
                    ★★★★★
                  </div>
                  {" "}
                </div>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="tst-card reveal">
                {" "}
                <div className="tst-quote">
                  "
                </div>
                {" "}
                <p>
                  Taking my children to CURA is always a positive experience. Dr. Patel is wonderful with kids — my daughter actually looks forward to her check-ups! The on-site pharmacy is a huge plus.
                </p>
                {" "}
                <div className="tst-person">
                  {" "}
                  <div className="tst-avatar">
                    <img src={a7} alt="Patient" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <b>
                      Amara Obi
                    </b>
                    {" "}
                    <span>
                      Patient since 2020
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="tst-stars">
                    ★★★★★
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
        <section className="cta-section">
          {" "}
          <div className="container">
            {" "}
            <div className="cta-inner">
              {" "}
              <div>
                {" "}
                <h2>
                  Your health is our priority — book your visit today
                </h2>
                {" "}
                <p>
                  Same-day appointments available. Call us or book online — we're here when you need us.
                </p>
                {" "}
                <a href="tel:+15551234567" className="cta-phone">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" +1 (555) 123-4567 "}
                </a>
                {" "}
              </div>
              {" "}
              <div className="cta-actions">
                {" "}
                <a href="contact.html" className="btn btn--light btn--lg">
                  {"Book Appointment "}
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                {" "}
                <a href="services.html" className="btn btn--ghost btn--lg">
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
      </main>
      {" "}
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="brand">
                {" "}
                <div className="brand__mark">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <span className="brand__name">
                    {"CURA "}
                    <span>
                      Health
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <p>
                Whole-person care, close to home. From routine check-ups to specialist consultations — warm, professional healthcare for every stage of life.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
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
                    Our Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="blog.html">
                    Latest Blog
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact Us
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
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="services.html">
                    Emergency Care
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Cardiology
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Pediatrics
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Diagnostics
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Women's Health
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {" 742 Maple Avenue, Suite 200, Springfield, IL 62701 "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {" "}
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
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
                  <a href="mailto:info@curahealth.com">
                    info@curahealth.com
                  </a>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {" Mon–Sat 8:00 AM – 7:00 PM "}
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
          <div className="container footer-bottom__inner">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" CURA Health. All rights reserved."}
            </span>
            {" "}
            <span>
              {" "}
              <a href="index.html">
                Privacy Policy
              </a>
              {" · "}
              <a href="index.html">
                Terms of Use
              </a>
              {" "}
            </span>
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
