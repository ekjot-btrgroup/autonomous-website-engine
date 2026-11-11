// Converted from the HTML template kids-education-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header.webp";
import a1 from "./assets/class-1.webp";
import a2 from "./assets/class-2.webp";
import a3 from "./assets/class-3.webp";
import a4 from "./assets/portfolio-1.webp";
import a5 from "./assets/about-1.webp";
import a6 from "./assets/about-2.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-kids-education-fefd">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container header__inner">
          {" "}
          <a href="index.html" className="header__logo">
            {" "}
            <span className="header__logo-icon">
              🎨
            </span>
            {" KID"}
            <span>
              KINDER
            </span>
            {" "}
          </a>
          {" "}
          <nav className="header__nav" aria-label="Main navigation">
            {" "}
            <ul className="header__nav-list">
              {" "}
              <li>
                <a href="index.html" className="header__nav-link active">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html" className="header__nav-link">
                  About
                </a>
              </li>
              {" "}
              <li>
                <a href="programs.html" className="header__nav-link">
                  Programs
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html" className="header__nav-link">
                  Contact
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <a href="contact.html" className="btn btn--primary btn--sm header__cta">
              Enroll Now
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
      <div className="nav-overlay" />
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="container hero__inner">
          {" "}
          <div className="hero__content reveal">
            {" "}
            <div className="hero__badge">
              🌟 Welcome to KIDKINDER
            </div>
            {" "}
            <h1 className="hero__title">
              {" Where "}
              <span className="highlight highlight--yellow">
                Learning
              </span>
              {" Meets "}
              <span className="highlight highlight--pink">
                Play
              </span>
              {" "}
            </h1>
            {" "}
            <p className="hero__desc">
              {" Nurturing young minds through creative exploration, hands-on activities, and a joyful learning environment designed for every child's growth. "}
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="contact.html" className="btn btn--primary btn--lg">
                Enroll Your Child
              </a>
              {" "}
              <a href="programs.html" className="btn btn--outline btn--lg">
                Explore Programs
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-number" data-year="">
                  200+
                </span>
                {" "}
                <span className="hero__stat-label">
                  Happy Students
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-number">
                  15+
                </span>
                {" "}
                <span className="hero__stat-label">
                  Expert Teachers
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-number">
                  10+
                </span>
                {" "}
                <span className="hero__stat-label">
                  Programs
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__visual reveal reveal--right reveal-delay-2">
            {" "}
            <div className="hero__image-wrapper">
              {" "}
              <img src={a0} alt="Happy children learning and playing at KIDKINDER preschool" loading="eager" />
              {" "}
            </div>
            {" "}
            <div className="hero__float hero__float--1">
              🎨
            </div>
            {" "}
            <div className="hero__float hero__float--2">
              📚
            </div>
            {" "}
            <div className="hero__float hero__float--3">
              🎵
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section programs">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge badge--purple">
              Our Programs
            </span>
            {" "}
            <h2>
              Fun Learning Programs for Every Age
            </h2>
            {" "}
            <p>
              Age-appropriate programs designed to spark curiosity and build foundational skills through play-based learning.
            </p>
            {" "}
          </div>
          {" "}
          <div className="programs__grid">
            {" "}
            {" "}
            <div className="program-card reveal reveal-delay-1">
              {" "}
              <img src={a1} alt="Tiny Explorers toddler program" className="program-card__image" loading="lazy" />
              {" "}
              <div className="program-card__body">
                {" "}
                <span className="badge badge--purple program-card__age">
                  Ages 2-3
                </span>
                {" "}
                <h3 className="program-card__title">
                  Tiny Explorers
                </h3>
                {" "}
                <p className="program-card__desc">
                  Sensory-rich experiences and gentle introduction to structured play for our youngest learners.
                </p>
                {" "}
                <div className="program-card__meta">
                  {" "}
                  <span className="program-card__schedule">
                    <strong>
                      Schedule:
                    </strong>
                    {" Mon-Fri, 9AM-12PM"}
                  </span>
                  {" "}
                  <a href="contact.html" className="btn btn--sm btn--outline">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="program-card reveal reveal-delay-2">
              {" "}
              <img src={a2} alt="Creative Kids preschool program" className="program-card__image" loading="lazy" />
              {" "}
              <div className="program-card__body">
                {" "}
                <span className="badge badge--yellow program-card__age">
                  Ages 3-4
                </span>
                {" "}
                <h3 className="program-card__title">
                  Creative Kids
                </h3>
                {" "}
                <p className="program-card__desc">
                  Art, music, and storytelling combine to build creativity and early literacy skills.
                </p>
                {" "}
                <div className="program-card__meta">
                  {" "}
                  <span className="program-card__schedule">
                    <strong>
                      Schedule:
                    </strong>
                    {" Mon-Fri, 9AM-2PM"}
                  </span>
                  {" "}
                  <a href="contact.html" className="btn btn--sm btn--outline">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="program-card reveal reveal-delay-3">
              {" "}
              <img src={a3} alt="Bright Minds kindergarten program" className="program-card__image" loading="lazy" />
              {" "}
              <div className="program-card__body">
                {" "}
                <span className="badge badge--pink program-card__age">
                  Ages 4-5
                </span>
                {" "}
                <h3 className="program-card__title">
                  Bright Minds
                </h3>
                {" "}
                <p className="program-card__desc">
                  Pre-kindergarten curriculum focusing on early math, reading, and social skills development.
                </p>
                {" "}
                <div className="program-card__meta">
                  {" "}
                  <span className="program-card__schedule">
                    <strong>
                      Schedule:
                    </strong>
                    {" Mon-Fri, 8:30AM-3PM"}
                  </span>
                  {" "}
                  <a href="contact.html" className="btn btn--sm btn--outline">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="program-card reveal reveal-delay-4">
              {" "}
              <img src={a4} alt="Super Stars after-school program" className="program-card__image" loading="lazy" />
              {" "}
              <div className="program-card__body">
                {" "}
                <span className="badge badge--purple program-card__age">
                  Ages 5-7
                </span>
                {" "}
                <h3 className="program-card__title">
                  Super Stars
                </h3>
                {" "}
                <p className="program-card__desc">
                  After-school enrichment with STEM activities, sports, and creative workshops.
                </p>
                {" "}
                <div className="program-card__meta">
                  {" "}
                  <span className="program-card__schedule">
                    <strong>
                      Schedule:
                    </strong>
                    {" Mon-Fri, 3PM-5:30PM"}
                  </span>
                  {" "}
                  <a href="contact.html" className="btn btn--sm btn--outline">
                    Learn More
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
      <section className="section about">
        {" "}
        <div className="container about__inner">
          {" "}
          <div className="about__images reveal reveal--left">
            {" "}
            <div className="about__img">
              {" "}
              <img src={a5} alt="Children playing together at KIDKINDER" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about__img">
              {" "}
              <img src={a6} alt="Teacher helping a young student" loading="lazy" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="about__content reveal reveal--right">
            {" "}
            <span className="badge badge--yellow">
              About KIDKINDER
            </span>
            {" "}
            <h2>
              {"A Place Where Children "}
              <span className="text-purple">
                Thrive
              </span>
            </h2>
            {" "}
            <p>
              {" At KIDKINDER, we believe every child is unique and deserves a learning environment that nurtures their individual talents. Our experienced educators create a warm, safe space where curiosity is encouraged and creativity flourishes. "}
            </p>
            {" "}
            <p>
              {" Founded with the mission to make early education joyful and meaningful, we combine play-based learning with research-backed curricula to prepare children for a lifetime of learning. "}
            </p>
            {" "}
            <div className="about__features">
              {" "}
              <div className="about__feature">
                {" "}
                <div className="about__feature-icon about__feature-icon--purple">
                  🎓
                </div>
                {" "}
                <div className="about__feature-text">
                  {" "}
                  <h5>
                    Certified Teachers
                  </h5>
                  {" "}
                  <p>
                    Qualified, passionate educators
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about__feature">
                {" "}
                <div className="about__feature-icon about__feature-icon--yellow">
                  🏠
                </div>
                {" "}
                <div className="about__feature-text">
                  {" "}
                  <h5>
                    Safe Environment
                  </h5>
                  {" "}
                  <p>
                    Secure, nurturing spaces
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about__feature">
                {" "}
                <div className="about__feature-icon about__feature-icon--pink">
                  🎨
                </div>
                {" "}
                <div className="about__feature-text">
                  {" "}
                  <h5>
                    Creative Curriculum
                  </h5>
                  {" "}
                  <p>
                    Play-based, engaging lessons
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="about__feature">
                {" "}
                <div className="about__feature-icon about__feature-icon--purple">
                  👨‍👩‍👧
                </div>
                {" "}
                <div className="about__feature-text">
                  {" "}
                  <h5>
                    Small Class Sizes
                  </h5>
                  {" "}
                  <p>
                    Personal attention for each child
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <a href="about.html" className="btn btn--primary mt-6">
              Learn More About Us
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section features">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge badge--yellow">
              Why Choose Us
            </span>
            {" "}
            <h2>
              What Makes KIDKINDER Special
            </h2>
            {" "}
            <p>
              We go beyond traditional education to create an enriching experience for every child.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features__grid">
            {" "}
            <div className="feature-card reveal reveal-delay-1">
              {" "}
              <div className="feature-card__icon">
                🧠
              </div>
              {" "}
              <h4 className="feature-card__title">
                Play-Based Learning
              </h4>
              {" "}
              <p className="feature-card__desc">
                Children learn best through play. Our curriculum integrates fun activities with educational goals.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-2">
              {" "}
              <div className="feature-card__icon">
                🌱
              </div>
              {" "}
              <h4 className="feature-card__title">
                Holistic Development
              </h4>
              {" "}
              <p className="feature-card__desc">
                We focus on cognitive, social, emotional, and physical development for well-rounded growth.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-3">
              {" "}
              <div className="feature-card__icon">
                👨‍🏫
              </div>
              {" "}
              <h4 className="feature-card__title">
                Dedicated Staff
              </h4>
              {" "}
              <p className="feature-card__desc">
                Our certified teachers are passionate about early childhood education and your child's success.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal reveal-delay-4">
              {" "}
              <div className="feature-card__icon">
                🤝
              </div>
              {" "}
              <h4 className="feature-card__title">
                Parent Partnership
              </h4>
              {" "}
              <p className="feature-card__desc">
                We maintain open communication with families to ensure consistent support at home and school.
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
      <section className="section testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <span className="badge badge--pink">
              Testimonials
            </span>
            {" "}
            <h2>
              What Parents Say About Us
            </h2>
            {" "}
            <p>
              Don't just take our word for it — hear from the families who trust KIDKINDER with their children.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials__grid">
            {" "}
            {" "}
            <div className="testimonial-card reveal reveal-delay-1">
              {" "}
              <div className="testimonial-card__stars">
                ⭐⭐⭐⭐⭐
              </div>
              {" "}
              <p className="testimonial-card__quote">
                {" KIDKINDER has been a wonderful experience for our daughter. She comes home every day excited about what she learned. The teachers are incredible! "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a7} alt="Sarah Johnson" className="testimonial-card__avatar" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Sarah Johnson
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Parent of Emma, Age 4
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card reveal reveal-delay-2">
              {" "}
              <div className="testimonial-card__stars">
                ⭐⭐⭐⭐⭐
              </div>
              {" "}
              <p className="testimonial-card__quote">
                {" The creative programs here are outstanding. My son has grown so much in confidence and loves the art and music activities. Highly recommend! "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a8} alt="Michael Chen" className="testimonial-card__avatar" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Michael Chen
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Parent of Liam, Age 3
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="testimonial-card reveal reveal-delay-3">
              {" "}
              <div className="testimonial-card__stars">
                ⭐⭐⭐⭐⭐
              </div>
              {" "}
              <p className="testimonial-card__quote">
                {" As a working parent, knowing my child is in a safe, loving environment means everything. The staff truly cares about every student's wellbeing. "}
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a9} alt="Emily Rodriguez" className="testimonial-card__avatar" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Emily Rodriguez
                  </div>
                  {" "}
                  <div className="testimonial-card__role">
                    Parent of Sofia, Age 5
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
      <section className="section cta">
        {" "}
        <div className="container">
          {" "}
          <div className="reveal">
            {" "}
            <h2>
              Ready to Start Your Child's Journey?
            </h2>
            {" "}
            <p>
              Spaces are limited. Give your child the gift of a joyful, enriching education at KIDKINDER.
            </p>
            {" "}
            <div className="cta__actions">
              {" "}
              <a href="contact.html" className="btn btn--secondary btn--lg">
                Enroll Today
              </a>
              {" "}
              <a href="programs.html" className="btn btn--white btn--lg">
                View Programs
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div className="footer__brand">
              {" "}
              <div className="footer__logo">
                🎨 KID
                <span>
                  KINDER
                </span>
              </div>
              {" "}
              <p className="footer__desc">
                Where learning meets play. Nurturing young minds through creative, play-based education since 2015.
              </p>
              {" "}
              <div className="footer__socials">
                {" "}
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  📷
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="YouTube">
                  ▶
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Quick Links
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="index.html" className="footer__link">
                  Home
                </a>
                {" "}
                <a href="about.html" className="footer__link">
                  About Us
                </a>
                {" "}
                <a href="programs.html" className="footer__link">
                  Programs
                </a>
                {" "}
                <a href="contact.html" className="footer__link">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Programs
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="programs.html" className="footer__link">
                  Tiny Explorers
                </a>
                {" "}
                <a href="programs.html" className="footer__link">
                  Creative Kids
                </a>
                {" "}
                <a href="programs.html" className="footer__link">
                  Bright Minds
                </a>
                {" "}
                <a href="programs.html" className="footer__link">
                  Super Stars
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact Info
              </h4>
              {" "}
              <div className="footer__links">
                {" "}
                <span className="footer__link">
                  123 Learning Lane
                </span>
                {" "}
                <span className="footer__link">
                  Sunshine City, SC 12345
                </span>
                {" "}
                <a href="tel:+15551234567" className="footer__link">
                  (555) 123-4567
                </a>
                {" "}
                <a href="mailto:hello@kidkinder.com" className="footer__link">
                  hello@kidkinder.com
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
            <p className="footer__copy">
              {"© "}
              <span data-year="" />
              {" KIDKINDER. All rights reserved."}
            </p>
            {" "}
            <div className="footer__bottom-links">
              {" "}
              <a href="#" className="footer__bottom-link">
                Privacy Policy
              </a>
              {" "}
              <a href="#" className="footer__bottom-link">
                Terms of Service
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
