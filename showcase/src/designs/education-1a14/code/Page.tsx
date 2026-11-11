// Converted from the HTML template education-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header.webp";
import a1 from "./assets/courses-1.webp";
import a2 from "./assets/courses-2.webp";
import a3 from "./assets/courses-3.webp";
import a4 from "./assets/feature.webp";
import a5 from "./assets/team-1.webp";
import a6 from "./assets/team-2.webp";
import a7 from "./assets/team-3.webp";
import a8 from "./assets/team-4.webp";
import a9 from "./assets/testimonial-1.webp";
import a10 from "./assets/testimonial-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-education-1a14">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar__inner">
          {" "}
          <div className="topbar__info">
            {" "}
            <span>
              <i className="fas fa-phone-alt" />
              {" +1 (555) 234-5678"}
            </span>
            {" "}
            <span>
              <i className="fas fa-envelope" />
              {" hello@edukate.com"}
            </span>
            {" "}
            <span>
              <i className="fas fa-clock" />
              {" Mon – Fri: 8:00 AM – 6:00 PM"}
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar__social">
            {" "}
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            {" "}
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            {" "}
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            {" "}
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <nav className="navbar">
        {" "}
        <div className="container navbar__inner">
          {" "}
          <a href="index.html" className="navbar__brand">
            {" "}
            <div className="navbar__logo-icon">
              <i className="fas fa-graduation-cap" />
            </div>
            {" "}
            <div className="navbar__brand-text">
              Edu
              <span>
                Kate
              </span>
            </div>
            {" "}
          </a>
          {" "}
          <div className="navbar__links">
            {" "}
            <a href="index.html" className="navbar__link active">
              Home
            </a>
            {" "}
            <a href="about.html" className="navbar__link">
              About
            </a>
            {" "}
            <a href="courses.html" className="navbar__link">
              Courses
            </a>
            {" "}
            <a href="contact.html" className="navbar__link">
              Contact
            </a>
            {" "}
            <a href="courses.html" className="btn btn--primary btn--sm navbar__cta">
              Enroll Now
            </a>
            {" "}
          </div>
          {" "}
          <button className="navbar__burger" aria-label="Toggle navigation">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__bg">
          {" "}
          <img src={a0} alt="Students collaborating in a modern classroom" />
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="hero__cap-deco">
          {" "}
          <svg viewBox="0 0 200 200" fill="white">
            <path d="M100 0 L200 60 L100 120 L0 60Z M100 140 L100 200 M30 80 L30 140 C30 170 170 170 170 140 L170 80" />
          </svg>
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__badge">
              {" "}
              <i className="fas fa-award" />
              {" Ranked #1 Online Learning Platform "}
            </div>
            {" "}
            <h1 className="hero__title">
              {"Shape Your "}
              <span>
                Future
              </span>
              {" With World-Class Education"}
            </h1>
            {" "}
            <p className="hero__desc">
              Unlock your potential with expert-led courses designed to inspire, challenge, and prepare you for the careers of tomorrow.
            </p>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="courses.html" className="btn btn--primary btn--lg">
                Browse Courses
              </a>
              {" "}
              <a href="about.html" className="btn btn--outline-white btn--lg">
                Learn More
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero__stats">
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="12500">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Students Enrolled
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="85">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Expert Courses
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="97">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  % Success Rate
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
      <section className="section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title text-center reveal">
            {" "}
            <span className="section-title__label">
              Our Programs
            </span>
            {" "}
            <h2>
              Explore Popular Courses
            </h2>
            {" "}
            <p>
              Choose from dozens of expert-led programs designed to advance your career and sharpen your skills.
            </p>
            {" "}
          </div>
          {" "}
          <div className="courses-grid">
            {" "}
            {" "}
            <div className="course-card reveal reveal-delay-1">
              {" "}
              <div className="course-card__img">
                {" "}
                <span className="course-card__badge">
                  Popular
                </span>
                {" "}
                <img src={a1} alt="Web Development bootcamp session" />
                {" "}
                <div className="course-card__progress">
                  <div className="course-card__progress-fill" style={{ width: "65%" }} />
                </div>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <span className="course-card__category">
                  Development
                </span>
                {" "}
                <h3 className="course-card__title">
                  Full-Stack Web Development
                </h3>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span>
                    <i className="fas fa-user" />
                    {" 1,240 Students"}
                  </span>
                  {" "}
                  <span>
                    <i className="fas fa-clock" />
                    {" 12 Weeks"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    {"$299 "}
                    <small>
                      $499
                    </small>
                  </span>
                  {" "}
                  <a href="courses.html" className="btn btn--primary btn--sm">
                    Enroll
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="course-card reveal reveal-delay-2">
              {" "}
              <div className="course-card__img">
                {" "}
                <span className="course-card__badge">
                  New
                </span>
                {" "}
                <img src={a2} alt="Data science workshop with laptop screens" />
                {" "}
                <div className="course-card__progress">
                  <div className="course-card__progress-fill" style={{ width: "40%" }} />
                </div>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <span className="course-card__category">
                  Data Science
                </span>
                {" "}
                <h3 className="course-card__title">
                  {"Data Analytics & Machine Learning"}
                </h3>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span>
                    <i className="fas fa-user" />
                    {" 890 Students"}
                  </span>
                  {" "}
                  <span>
                    <i className="fas fa-clock" />
                    {" 10 Weeks"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    {"$349 "}
                    <small>
                      $549
                    </small>
                  </span>
                  {" "}
                  <a href="courses.html" className="btn btn--primary btn--sm">
                    Enroll
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="course-card reveal reveal-delay-3">
              {" "}
              <div className="course-card__img">
                {" "}
                <span className="course-card__badge">
                  Hot
                </span>
                {" "}
                <img src={a3} alt="UI/UX design tools on a large monitor" />
                {" "}
                <div className="course-card__progress">
                  <div className="course-card__progress-fill" style={{ width: "82%" }} />
                </div>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <span className="course-card__category">
                  Design
                </span>
                {" "}
                <h3 className="course-card__title">
                  UI/UX Design Masterclass
                </h3>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span>
                    <i className="fas fa-user" />
                    {" 1,560 Students"}
                  </span>
                  {" "}
                  <span>
                    <i className="fas fa-clock" />
                    {" 8 Weeks"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    {"$249 "}
                    <small>
                      $449
                    </small>
                  </span>
                  {" "}
                  <a href="courses.html" className="btn btn--primary btn--sm">
                    Enroll
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
      <section className="features-section section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="features-grid">
            {" "}
            <div className="reveal">
              {" "}
              <div className="section-title">
                {" "}
                <span className="section-title__label">
                  Why Choose Us
                </span>
                {" "}
                <h2>
                  Education That Makes a Difference
                </h2>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <div className="feature-card__icon feature-card__icon--blue">
                  <i className="fas fa-chalkboard-teacher" />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    Expert Instructors
                  </h4>
                  {" "}
                  <p>
                    Learn from industry professionals with real-world experience and a passion for teaching.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <div className="feature-card__icon feature-card__icon--red">
                  <i className="fas fa-laptop-code" />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    Hands-On Projects
                  </h4>
                  {" "}
                  <p>
                    Build a portfolio of real projects that demonstrate your skills to future employers.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <div className="feature-card__icon feature-card__icon--dark">
                  <i className="fas fa-certificate" />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    Accredited Certificates
                  </h4>
                  {" "}
                  <p>
                    Earn recognized certificates that validate your expertise and boost your resume.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="feature-card">
                {" "}
                <div className="feature-card__icon feature-card__icon--blue">
                  <i className="fas fa-users" />
                </div>
                {" "}
                <div>
                  {" "}
                  <h4>
                    Community Support
                  </h4>
                  {" "}
                  <p>
                    Join a global network of learners, mentors, and alumni who support each other.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="features-img reveal">
              {" "}
              <img src={a4} alt="Students working together on a group project" />
              {" "}
              <div className="progress-deco">
                {" "}
                <div className="progress-deco__header">
                  {" "}
                  <span>
                    Course Completion
                  </span>
                  {" "}
                  <span>
                    78%
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress-deco__bar">
                  {" "}
                  <div className="progress-deco__fill" />
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
      <section className="section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-row reveal">
            {" "}
            <div className="stat-box">
              {" "}
              <span className="stat-box__num" data-count="12500">
                0
              </span>
              {" "}
              <span className="stat-box__label">
                Students
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-box">
              {" "}
              <span className="stat-box__num" data-count="85">
                0
              </span>
              {" "}
              <span className="stat-box__label">
                Courses
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-box">
              {" "}
              <span className="stat-box__num" data-count="42">
                0
              </span>
              {" "}
              <span className="stat-box__label">
                Instructors
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-box">
              {" "}
              <span className="stat-box__num" data-count="97">
                0
              </span>
              {" "}
              <span className="stat-box__label">
                % Satisfaction
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
      <section className="features-section section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="section-title text-center reveal">
            {" "}
            <span className="section-title__label">
              Our Team
            </span>
            {" "}
            <h2>
              Meet the Instructors
            </h2>
            {" "}
            <p>
              Passionate educators committed to shaping the next generation of professionals.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal reveal-delay-1">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a5} alt="Dr. Sarah Mitchell, Lead Instructor" />
                {" "}
                <div className="team-card__progress">
                  {" "}
                  <div className="team-card__progress-bar">
                    <div className="team-card__progress-fill" style={{ width: "92%" }} />
                  </div>
                  {" "}
                  <span>
                    92%
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__info">
                {" "}
                <h4 className="team-card__name">
                  Dr. Sarah Mitchell
                </h4>
                {" "}
                <span className="team-card__role">
                  Lead Instructor
                </span>
                {" "}
                <div className="team-card__social">
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                  <a href="#" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-2">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a6} alt="Prof. James Carter, Senior Instructor" />
                {" "}
                <div className="team-card__progress">
                  {" "}
                  <div className="team-card__progress-bar">
                    <div className="team-card__progress-fill" style={{ width: "88%" }} />
                  </div>
                  {" "}
                  <span>
                    88%
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__info">
                {" "}
                <h4 className="team-card__name">
                  Prof. James Carter
                </h4>
                {" "}
                <span className="team-card__role">
                  Senior Instructor
                </span>
                {" "}
                <div className="team-card__social">
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                  <a href="#" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-3">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a7} alt="Emily Rodriguez, Design Instructor" />
                {" "}
                <div className="team-card__progress">
                  {" "}
                  <div className="team-card__progress-bar">
                    <div className="team-card__progress-fill" style={{ width: "95%" }} />
                  </div>
                  {" "}
                  <span>
                    95%
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__info">
                {" "}
                <h4 className="team-card__name">
                  Emily Rodriguez
                </h4>
                {" "}
                <span className="team-card__role">
                  Design Instructor
                </span>
                {" "}
                <div className="team-card__social">
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                  <a href="#" aria-label="Dribbble">
                    <i className="fab fa-dribbble" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-4">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a8} alt="David Kim, Data Science Instructor" />
                {" "}
                <div className="team-card__progress">
                  {" "}
                  <div className="team-card__progress-bar">
                    <div className="team-card__progress-fill" style={{ width: "90%" }} />
                  </div>
                  {" "}
                  <span>
                    90%
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card__info">
                {" "}
                <h4 className="team-card__name">
                  David Kim
                </h4>
                {" "}
                <span className="team-card__role">
                  Data Science Instructor
                </span>
                {" "}
                <div className="team-card__social">
                  {" "}
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  {" "}
                  <a href="#" aria-label="GitHub">
                    <i className="fab fa-github" />
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
      <section className="testimonials-section section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="testimonials-layout">
            {" "}
            <div className="reveal">
              {" "}
              <div className="section-title">
                {" "}
                <span className="section-title__label">
                  Testimonials
                </span>
                {" "}
                <h2>
                  What Our Students Say
                </h2>
                {" "}
              </div>
              {" "}
              <p style={{ color: "var(--gray-500)", marginBottom: "var(--gap-lg)" }}>
                Hear from students who transformed their careers through our programs.
              </p>
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-card__quote">
                  "EDUKATE completely changed my career trajectory. The full-stack bootcamp gave me the confidence and skills to land my dream job within three months of graduating."
                </p>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a9} alt="Alex Turner" className="testimonial-card__avatar" />
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-card__name">
                      Alex Turner
                    </div>
                    {" "}
                    <div className="testimonial-card__course">
                      Full-Stack Web Development
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card">
                {" "}
                <p className="testimonial-card__quote">
                  "The data analytics course was rigorous, practical, and taught by people who actually work in the field. I walked away with a portfolio that opened doors."
                </p>
                {" "}
                <div className="testimonial-card__author">
                  {" "}
                  <img src={a10} alt="Maya Patel" className="testimonial-card__avatar" />
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-card__name">
                      Maya Patel
                    </div>
                    {" "}
                    <div className="testimonial-card__course">
                      {"Data Analytics & Machine Learning"}
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section-py">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-banner reveal">
            {" "}
            <h2>
              Ready to Start Your Learning Journey?
            </h2>
            {" "}
            <p>
              Join thousands of students who are building the skills for tomorrow's most in-demand careers.
            </p>
            {" "}
            <a href="courses.html" className="btn btn--lg" style={{ background: "var(--white)", color: "var(--blue)", borderColor: "var(--white)" }}>
              Enroll Today
            </a>
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
          <div className="footer__top">
            {" "}
            <div>
              {" "}
              <a href="index.html" className="footer__brand">
                {" "}
                <div className="footer__brand-icon">
                  <i className="fas fa-graduation-cap" />
                </div>
                {" "}
                <div className="footer__brand-name">
                  Edu
                  <span>
                    Kate
                  </span>
                </div>
                {" "}
              </a>
              {" "}
              <p className="footer__desc">
                Empowering learners worldwide with expert-led courses, hands-on projects, and accredited certifications.
              </p>
              {" "}
              <div className="footer__newsletter">
                {" "}
                <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
                {" "}
                <button type="button">
                  Subscribe
                </button>
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
                <a href="index.html">
                  <i className="fas fa-chevron-right" />
                  {" Home"}
                </a>
                {" "}
                <a href="about.html">
                  <i className="fas fa-chevron-right" />
                  {" About Us"}
                </a>
                {" "}
                <a href="courses.html">
                  <i className="fas fa-chevron-right" />
                  {" Courses"}
                </a>
                {" "}
                <a href="contact.html">
                  <i className="fas fa-chevron-right" />
                  {" Contact"}
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
                <a href="courses.html">
                  <i className="fas fa-chevron-right" />
                  {" Web Development"}
                </a>
                {" "}
                <a href="courses.html">
                  <i className="fas fa-chevron-right" />
                  {" Data Science"}
                </a>
                {" "}
                <a href="courses.html">
                  <i className="fas fa-chevron-right" />
                  {" UI/UX Design"}
                </a>
                {" "}
                <a href="courses.html">
                  <i className="fas fa-chevron-right" />
                  {" Digital Marketing"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Contact Us
              </h4>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <i className="fas fa-map-marker-alt" />
                {" "}
                <span>
                  123 Learning Avenue, Education City, EC 45678
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <i className="fas fa-phone-alt" />
                {" "}
                <span>
                  +1 (555) 234-5678
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__contact-item">
                {" "}
                <i className="fas fa-envelope" />
                {" "}
                <span>
                  hello@edukate.com
                </span>
                {" "}
              </div>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
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
              {" EduKate. All rights reserved."}
            </span>
            {" "}
            <span>
              {"Designed with "}
              <i className="fas fa-heart" style={{ color: "var(--red)" }} />
              {" for Education"}
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
        <i className="fas fa-arrow-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
