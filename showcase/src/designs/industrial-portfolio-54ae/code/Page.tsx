// Converted from the HTML template industrial-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/project-1.webp";
import a2 from "./assets/project-2.webp";
import a3 from "./assets/project-3.webp";
import a4 from "./assets/project-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-industrial-portfolio-54ae">
      {" "}
      {" "}
      <header className="header" id="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <span className="logo__icon">
              {" "}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <rect width="36" height="36" rx="6" fill="#00e5ff" />
                {" "}
                <path d="M18 8a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM11.5 16h13v2.5h-13zm0 5h13v2.5h-13z" fill="#0a0f1a" />
                {" "}
              </svg>
              {" "}
            </span>
            {" INDUSTRO "}
          </a>
          {" "}
          <nav className="nav" id="nav" role="navigation" aria-label="Main navigation">
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
                <a href="about.html" className="nav__link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="services.html" className="nav__link">
                  Services
                </a>
              </li>
              {" "}
              <li>
                <a href="projects.html" className="nav__link">
                  Projects
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
          </nav>
          {" "}
          <a href="contact.html" className="btn btn--primary btn--sm header__cta">
            Get a Quote
          </a>
          {" "}
          <button className="burger" id="burger" aria-label="Toggle navigation menu" aria-expanded="false">
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
      <main>
        {" "}
        {" "}
        <section className="hero" id="hero">
          {" "}
          <div className="hero__bg">
            {" "}
            <img src={a0} alt="INDUSTRO industrial engineering hero" loading="eager" />
            {" "}
          </div>
          {" "}
          <div className="hero__overlay" />
          {" "}
          <div className="container hero__content">
            {" "}
            <span className="hero__tag">
              {" Trusted Since 1987 "}
            </span>
            {" "}
            <h1 className="hero__title">
              {" Precision Engineering,"}
              <br />
              <span className="accent">
                Global Reach
              </span>
              {" "}
            </h1>
            {" "}
            <p className="hero__desc">
              {" Delivering world-class industrial solutions with uncompromising quality. From concept to commissioning, we engineer success across 40+ countries. "}
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="projects.html" className="btn btn--primary btn--lg">
                {" Explore Projects "}
                <span className="btn-arrow">
                  →
                </span>
                {" "}
              </a>
              {" "}
              <a href="services.html" className="btn btn--outline btn--lg">
                {" Our Services "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__scroll">
            {" "}
            <span>
              Scroll
            </span>
            {" "}
            <span className="hero__scroll-line" />
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--dark" id="stats">
          {" "}
          <div className="container">
            {" "}
            <div className="stats__grid stagger-children">
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat__number" data-count="35">
                  35+
                </span>
                {" "}
                <span className="stat__label">
                  Years of Experience
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat__number" data-count="500">
                  500+
                </span>
                {" "}
                <span className="stat__label">
                  Projects Completed
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat__number" data-count="40">
                  40+
                </span>
                {" "}
                <span className="stat__label">
                  Countries Served
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat__number" data-count="98">
                  98%
                </span>
                {" "}
                <span className="stat__label">
                  Client Satisfaction
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
        <section className="section section--dark" id="services">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header reveal">
              {" "}
              <span className="section-label">
                What We Do
              </span>
              {" "}
              <h2 className="section-title">
                Engineering Excellence Across Sectors
              </h2>
              {" "}
              <p className="section-subtitle">
                {" Comprehensive industrial solutions built on decades of expertise and cutting-edge technology. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="services-grid stagger-children">
              {" "}
              {" "}
              <div className="service-card reveal">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="24" y1="8" x2="24" y2="40" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="8" y1="24" x2="40" y2="24" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="8" y1="8" x2="24" y2="24" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="40" y1="8" x2="24" y2="24" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Structural Engineering
                </h3>
                {" "}
                <p className="service-card__text">
                  {" Advanced structural analysis and design for industrial facilities, ensuring integrity, safety, and compliance with international standards. "}
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="service-card reveal">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <circle cx="24" cy="24" r="16" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <circle cx="24" cy="24" r="6" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="24" y1="8" x2="24" y2="18" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="24" y1="30" x2="24" y2="40" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="8" y1="24" x2="18" y2="24" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="30" y1="24" x2="40" y2="24" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Mechanical Design
                </h3>
                {" "}
                <p className="service-card__text">
                  {" Precision mechanical systems engineered for peak performance, from heavy machinery to intricate automation components. "}
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="service-card reveal">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <circle cx="14" cy="14" r="4" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <circle cx="34" cy="14" r="4" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <circle cx="14" cy="34" r="4" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <circle cx="34" cy="34" r="4" stroke="#00e5ff" strokeWidth="2" />
                    {" "}
                    <line x1="18" y1="14" x2="30" y2="14" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="18" y1="34" x2="30" y2="34" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="14" y1="18" x2="14" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="34" y1="18" x2="34" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="18" y1="18" x2="30" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                    <line x1="30" y1="18" x2="18" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
                    {" "}
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Process Automation
                </h3>
                {" "}
                <p className="service-card__text">
                  {" Intelligent automation solutions that streamline operations, reduce downtime, and maximize throughput across complex production lines. "}
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="service-card reveal">
                {" "}
                <div className="service-card__icon">
                  {" "}
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path d="M24 6L38 12v12c0 8.8-5.6 16.4-14 20-8.4-3.6-14-11.2-14-20V12L24 6z" stroke="#00e5ff" strokeWidth="2" strokeLinejoin="round" />
                    {" "}
                    <polyline points="17,24 22,29 31,19" stroke="#00e5ff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    {" "}
                  </svg>
                  {" "}
                </div>
                {" "}
                <h3 className="service-card__title">
                  Quality Assurance
                </h3>
                {" "}
                <p className="service-card__text">
                  {" Rigorous testing and quality control protocols ensuring every deliverable meets the highest industry standards and certifications. "}
                </p>
                {" "}
                <a href="services.html" className="service-card__link">
                  Learn More →
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
        <section className="section section--darker" id="projects">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header reveal">
              {" "}
              <span className="section-label">
                Our Portfolio
              </span>
              {" "}
              <h2 className="section-title">
                Featured Projects
              </h2>
              {" "}
              <p className="section-subtitle">
                {" A showcase of our most impactful engineering achievements. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="projects-grid stagger-children">
              {" "}
              {" "}
              <div className="project-card reveal">
                {" "}
                <div className="project-card__image">
                  {" "}
                  <img src={a1} alt="Power Plant Extension project by INDUSTRO" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project-card__overlay">
                  {" "}
                  <span className="project-card__category">
                    Energy
                  </span>
                  {" "}
                  <h3 className="project-card__title">
                    Power Plant Extension
                  </h3>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="project-card reveal">
                {" "}
                <div className="project-card__image">
                  {" "}
                  <img src={a2} alt="Marine Dock Facility project by INDUSTRO" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project-card__overlay">
                  {" "}
                  <span className="project-card__category">
                    Infrastructure
                  </span>
                  {" "}
                  <h3 className="project-card__title">
                    Marine Dock Facility
                  </h3>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="project-card reveal">
                {" "}
                <div className="project-card__image">
                  {" "}
                  <img src={a3} alt="Manufacturing Line project by INDUSTRO" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project-card__overlay">
                  {" "}
                  <span className="project-card__category">
                    Manufacturing
                  </span>
                  {" "}
                  <h3 className="project-card__title">
                    Manufacturing Line
                  </h3>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="project-card reveal">
                {" "}
                <div className="project-card__image">
                  {" "}
                  <img src={a4} alt="Refinery Upgrade project by INDUSTRO" loading="lazy" />
                  {" "}
                </div>
                {" "}
                <div className="project-card__overlay">
                  {" "}
                  <span className="project-card__category">
                    {"Oil & Gas"}
                  </span>
                  {" "}
                  <h3 className="project-card__title">
                    Refinery Upgrade
                  </h3>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="section-footer reveal">
              {" "}
              <a href="projects.html" className="btn btn--primary">
                {" View All Projects "}
                <span className="btn-arrow">
                  →
                </span>
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
        <section className="section section--dark" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <div className="section-header reveal">
              {" "}
              <span className="section-label">
                Client Voices
              </span>
              {" "}
              <h2 className="section-title">
                What Our Partners Say
              </h2>
              {" "}
            </div>
            {" "}
            <div className="testimonials-slider stagger-children">
              {" "}
              {" "}
              <div className="testimonial-card reveal">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                </div>
                {" "}
                <blockquote className="testimonial-card__quote">
                  “
                </blockquote>
                {" "}
                <p className="testimonial-card__text">
                  {" INDUSTRO has been an incredibly reliable partner for our infrastructure projects. Their commitment to timelines and quality is unmatched in the industry. Every milestone was delivered exactly as promised. "}
                </p>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <div className="testimonial-card__avatar">
                    JM
                  </div>
                  {" "}
                  <div className="testimonial-card__info">
                    {" "}
                    <span className="testimonial-card__name">
                      James Mitchell
                    </span>
                    {" "}
                    <span className="testimonial-card__role">
                      CEO, Apex Industries
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="testimonial-card reveal">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                </div>
                {" "}
                <blockquote className="testimonial-card__quote">
                  “
                </blockquote>
                {" "}
                <p className="testimonial-card__text">
                  {" The engineering quality and attention to detail INDUSTRO brings to every project is extraordinary. Their team transformed our facility into a model of operational efficiency. We saw a 40% improvement in throughput within the first quarter. "}
                </p>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <div className="testimonial-card__avatar">
                    SC
                  </div>
                  {" "}
                  <div className="testimonial-card__info">
                    {" "}
                    <span className="testimonial-card__name">
                      Sarah Chen
                    </span>
                    {" "}
                    <span className="testimonial-card__role">
                      Director, GlobalTech
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div className="testimonial-card reveal">
                {" "}
                <div className="testimonial-card__stars">
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                  <span className="star">
                    ★
                  </span>
                  {" "}
                </div>
                {" "}
                <blockquote className="testimonial-card__quote">
                  “
                </blockquote>
                {" "}
                <p className="testimonial-card__text">
                  {" Working with INDUSTRO has pushed the boundaries of what we thought possible in our automation systems. Their innovative approach and deep technical expertise have given us a genuine competitive advantage in the market. "}
                </p>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <div className="testimonial-card__avatar">
                    RA
                  </div>
                  {" "}
                  <div className="testimonial-card__info">
                    {" "}
                    <span className="testimonial-card__name">
                      Robert Andersen
                    </span>
                    {" "}
                    <span className="testimonial-card__role">
                      VP Engineering, Nordic Corp
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
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="cta-banner" id="cta">
          {" "}
          <div className="cta-banner__bg" />
          {" "}
          <div className="cta-banner__pattern" />
          {" "}
          <div className="container cta-banner__content reveal">
            {" "}
            <h2 className="cta-banner__title">
              Ready to Start Your Next Project?
            </h2>
            {" "}
            <p className="cta-banner__text">
              {" Let’s discuss how INDUSTRO can bring engineering precision to your next venture. "}
            </p>
            {" "}
            <div className="cta-banner__actions">
              {" "}
              <a href="contact.html" className="btn btn--white btn--lg">
                {" Start a Project "}
                <span className="btn-arrow">
                  →
                </span>
                {" "}
              </a>
              {" "}
              <a href="contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "white", color: "white" }}>
                {" Contact Us "}
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
      <footer className="footer" id="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            {" "}
            <div className="footer__brand">
              {" "}
              <a href="index.html" className="logo">
                {" "}
                <span className="logo__icon">
                  {" "}
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect width="36" height="36" rx="6" fill="#00e5ff" />
                    {" "}
                    <path d="M18 8a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM11.5 16h13v2.5h-13zm0 5h13v2.5h-13z" fill="#0a0f1a" />
                    {" "}
                  </svg>
                  {" "}
                </span>
                {" INDUSTRO "}
              </a>
              {" "}
              <p className="footer__desc">
                {" Delivering world-class industrial solutions with uncompromising quality since 1987. Engineering success across 40+ countries worldwide. "}
              </p>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="index.html" className="footer__link">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="about.html" className="footer__link">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html" className="footer__link">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a href="projects.html" className="footer__link">
                    Projects
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html" className="footer__link">
                    Contact
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Services
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="services.html" className="footer__link">
                    Structural Engineering
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html" className="footer__link">
                    Mechanical Design
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html" className="footer__link">
                    Process Automation
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html" className="footer__link">
                    Quality Assurance
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact Info
              </h4>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon">
                  📍
                </span>
                {" "}
                <span>
                  1200 Industrial Park Ave
                  <br />
                  Houston, TX 77001
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon">
                  📞
                </span>
                {" "}
                <span>
                  +1 (713) 555-0187
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <span className="footer__contact-icon">
                  ✉️
                </span>
                {" "}
                <span>
                  info@industro.com
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="footer__social">
            {" "}
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              in
            </a>
            {" "}
            <a href="#" className="footer__social-link" aria-label="Twitter">
              X
            </a>
            {" "}
            <a href="#" className="footer__social-link" aria-label="Facebook">
              f
            </a>
            {" "}
            <a href="#" className="footer__social-link" aria-label="YouTube">
              ▶
            </a>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="footer__bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="" />
              {" INDUSTRO. All rights reserved."}
            </p>
            {" "}
            <p>
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms of Service
              </a>
              {" · "}
              <a href="#">
                Cookie Policy
              </a>
              {" "}
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
