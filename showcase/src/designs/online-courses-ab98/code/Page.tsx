// Converted from the HTML template online-courses-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/cat-1.webp";
import a2 from "./assets/cat-2.webp";
import a3 from "./assets/cat-3.webp";
import a4 from "./assets/cat-4.webp";
import a5 from "./assets/cat-5.webp";
import a6 from "./assets/cat-6.webp";
import a7 from "./assets/cat-7.webp";
import a8 from "./assets/course-1.webp";
import a9 from "./assets/team-1.webp";
import a10 from "./assets/course-2.webp";
import a11 from "./assets/team-2.webp";
import a12 from "./assets/course-3.webp";
import a13 from "./assets/team-3.webp";
import a14 from "./assets/course-4.webp";
import a15 from "./assets/team-4.webp";
import a16 from "./assets/course-5.webp";
import a17 from "./assets/course-6.webp";
import a18 from "./assets/testimonial-1.webp";
import a19 from "./assets/testimonial-2.webp";
import a20 from "./assets/testimonial-3.webp";
import a21 from "./assets/testimonial-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-online-courses-ab98">
      {" "}
      {" "}
      <nav className="nav nav--hero">
        {" "}
        <div className="container nav__inner">
          {" "}
          <a href="index.html" className="nav__logo">
            {" "}
            <span className="nav__logo-icon">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="12" y1="6" x2="12" y2="12" />
                <line x1="9" y1="9" x2="15" y2="9" />
              </svg>
              {" "}
            </span>
            {" ECOURSES "}
          </a>
          {" "}
          <div className="nav__links">
            {" "}
            <a href="index.html" className="nav__link nav__link--active">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav__link">
              About
            </a>
            {" "}
            <a href="courses.html" className="nav__link">
              Courses
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
            <a href="courses.html" className="btn btn--primary btn--sm nav__cta">
              Browse Courses
            </a>
            {" "}
          </div>
          {" "}
          <button className="nav__burger" aria-label="Menu">
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
      <div className="nav__mobile">
        {" "}
        <a href="index.html">
          Home
        </a>
        {" "}
        <a href="about.html">
          About
        </a>
        {" "}
        <a href="courses.html">
          Courses
        </a>
        {" "}
        <a href="contact.html">
          Contact
        </a>
        {" "}
        <a href="courses.html" className="btn btn--primary">
          Browse Courses
        </a>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__pattern" />
        {" "}
        <div className="hero__grid" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero__content">
            {" "}
            <div className="hero__badge" data-reveal="">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              {" #1 Online Learning Platform "}
            </div>
            {" "}
            <h1 data-reveal="">
              {"Master New Skills "}
              <span>
                Online
              </span>
            </h1>
            {" "}
            <p className="hero__text" data-reveal="">
              Join over 50,000 learners worldwide. Access 500+ expert-led courses in design, development, business, and more — anytime, anywhere.
            </p>
            {" "}
            <div className="hero__actions" data-reveal="">
              {" "}
              <a href="courses.html" className="btn btn--secondary btn--lg">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {" Start Learning Today "}
              </a>
              {" "}
              <a href="about.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
                About Us
              </a>
              {" "}
            </div>
            {" "}
            <form className="hero__search" action="courses.html" method="get" data-reveal="">
              {" "}
              <input type="text" name="q" placeholder="What do you want to learn?" aria-label="Search courses" />
              {" "}
              <button type="submit" className="btn btn--primary">
                Search
              </button>
              {" "}
            </form>
            {" "}
            <div className="hero__stats" data-reveal="">
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="50000" data-suffix="+">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Active Learners
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="500" data-suffix="+">
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
                <span className="hero__stat-num" data-count="200" data-suffix="+">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Instructors
                </span>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <span className="hero__stat-num" data-count="98" data-suffix="%">
                  0
                </span>
                {" "}
                <span className="hero__stat-label">
                  Satisfaction
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
        <img src={a0} alt="" className="hero__img" aria-hidden="true" />
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" id="categories">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center" data-reveal="">
            {" "}
            <span className="section-subtitle">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              {" Browse Categories "}
            </span>
            {" "}
            <h2 className="section-title">
              Explore Our Top Categories
            </h2>
            {" "}
            <p className="section-desc">
              Find the perfect course from our wide range of professionally crafted learning paths across multiple disciplines.
            </p>
            {" "}
          </div>
          {" "}
          <div className="categories__grid">
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a1} alt="Design courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Design
                </span>
                {" "}
                <span className="category-card__count">
                  45 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a2} alt="Development courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Development
                </span>
                {" "}
                <span className="category-card__count">
                  82 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a3} alt="Business courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Business
                </span>
                {" "}
                <span className="category-card__count">
                  38 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a4} alt="Marketing courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Marketing
                </span>
                {" "}
                <span className="category-card__count">
                  29 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a5} alt="Photography courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Photography
                </span>
                {" "}
                <span className="category-card__count">
                  24 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a6} alt="Music courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Music
                </span>
                {" "}
                <span className="category-card__count">
                  18 Courses
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="courses.html" className="category-card" data-reveal="">
              {" "}
              <img src={a7} alt="Data Science courses" />
              {" "}
              <div className="category-card__overlay">
                {" "}
                <div className="category-card__icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  {" "}
                </div>
                {" "}
                <span className="category-card__name">
                  Data Science
                </span>
                {" "}
                <span className="category-card__count">
                  34 Courses
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
      <section className="section section--light" id="courses">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center" data-reveal="">
            {" "}
            <span className="section-subtitle">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              {" Popular Courses "}
            </span>
            {" "}
            <h2 className="section-title">
              Featured Courses
            </h2>
            {" "}
            <p className="section-desc">
              Handpicked courses chosen by our community of learners. Start building the skills that matter most.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a8} alt="UI/UX Design Masterclass" className="course-card__img" />
                {" "}
                <span className="badge badge--primary course-card__category">
                  Design
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  UI/UX Design Masterclass: From Beginner to Expert
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 24 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 2,847 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.9 "}
                    <span>
                      (312)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "72%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $199
                    </s>
                    {" $49"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a9} alt="Sarah Chen" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      Sarah Chen
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
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a10} alt="Full-Stack Web Development" className="course-card__img" />
                {" "}
                <span className="badge badge--primary course-card__category">
                  Development
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  {"Full-Stack Web Development with React & Node.js"}
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 42 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 5,231 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.8 "}
                    <span>
                      (489)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "85%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $299
                    </s>
                    {" $69"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a11} alt="James Miller" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      James Miller
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
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a12} alt="Digital Marketing Strategy" className="course-card__img" />
                {" "}
                <span className="badge badge--amber course-card__category">
                  Marketing
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  Digital Marketing Strategy: Complete Bootcamp
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 18 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 1,923 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.7 "}
                    <span>
                      (256)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "60%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $149
                    </s>
                    {" $39"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a13} alt="Emma Davis" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      Emma Davis
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
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a14} alt="Data Science with Python" className="course-card__img" />
                {" "}
                <span className="badge badge--primary course-card__category">
                  Data Science
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  Data Science with Python: Complete Guide
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 36 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 3,654 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.9 "}
                    <span>
                      (521)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "90%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $249
                    </s>
                    {" $59"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a15} alt="Alex Kim" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      Alex Kim
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
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a16} alt="Photography Fundamentals" className="course-card__img" />
                {" "}
                <span className="badge badge--amber course-card__category">
                  Photography
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  Photography Fundamentals: Capture Stunning Shots
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 14 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 1,247 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.6 "}
                    <span>
                      (178)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "45%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $99
                    </s>
                    {" $29"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a9} alt="Sarah Chen" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      Sarah Chen
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
            {" "}
            <div className="course-card" data-reveal="">
              {" "}
              <div className="course-card__img-wrap">
                {" "}
                <img src={a17} alt="Business Strategy" className="course-card__img" />
                {" "}
                <span className="badge badge--success course-card__category">
                  Business
                </span>
                {" "}
                <span className="badge--enroll">
                  Enroll Now
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card__body">
                {" "}
                <h4 className="course-card__title">
                  {"Business Strategy: Build & Scale Your Startup"}
                </h4>
                {" "}
                <div className="course-card__meta">
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {" 20 Hours "}
                  </span>
                  {" "}
                  <span className="course-card__meta-item">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {" 2,103 Students "}
                  </span>
                  {" "}
                  <span className="course-card__rating">
                    {" "}
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {" 4.8 "}
                    <span>
                      (294)
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="progress" style={{ marginBottom: "var(--sp-md)" }}>
                  <div className="progress__bar" style={{ width: "68%" }} />
                </div>
                {" "}
                <div className="course-card__footer">
                  {" "}
                  <span className="course-card__price">
                    <s>
                      $179
                    </s>
                    {" $44"}
                  </span>
                  {" "}
                  <div className="course-card__instructor">
                    {" "}
                    <img src={a11} alt="James Miller" className="course-card__avatar" />
                    {" "}
                    <span className="course-card__name">
                      James Miller
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
          <div className="text-center" style={{ marginTop: "var(--sp-2xl)" }} data-reveal="">
            {" "}
            <a href="courses.html" className="btn btn--primary btn--lg">
              View All Courses
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" id="features">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center" data-reveal="">
            {" "}
            <span className="section-subtitle">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {" Why ECOURSES "}
            </span>
            {" "}
            <h2 className="section-title">
              Why Students Choose Us
            </h2>
            {" "}
            <p className="section-desc">
              We provide the tools, mentorship, and community you need to transform your career through education.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-3">
            {" "}
            <div className="mission-card" data-reveal="">
              {" "}
              <div className="mission-card__icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Expert-Led Curriculum
              </h4>
              {" "}
              <p>
                Every course is crafted by industry professionals with real-world experience and proven teaching methods.
              </p>
              {" "}
            </div>
            {" "}
            <div className="mission-card" data-reveal="">
              {" "}
              <div className="mission-card__icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Learn at Your Pace
              </h4>
              {" "}
              <p>
                Access course materials 24/7 with lifetime access. Pause, rewind, and revisit lessons as many times as needed.
              </p>
              {" "}
            </div>
            {" "}
            <div className="mission-card" data-reveal="">
              {" "}
              <div className="mission-card__icon">
                {" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {" "}
              </div>
              {" "}
              <h4>
                Certified Completion
              </h4>
              {" "}
              <p>
                Earn industry-recognized certificates upon course completion. Boost your resume and LinkedIn profile.
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
      <section className="section section--light" id="instructors">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center" data-reveal="">
            {" "}
            <span className="section-subtitle">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              {" Meet Our Experts "}
            </span>
            {" "}
            <h2 className="section-title">
              World-Class Instructors
            </h2>
            {" "}
            <p className="section-desc">
              Learn from the best minds in the industry who are passionate about sharing their knowledge.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-4">
            {" "}
            <div className="team-card" data-reveal="">
              {" "}
              <div className="team-card__img-wrap">
                {" "}
                <img src={a9} alt="Sarah Chen" className="team-card__img" />
                {" "}
              </div>
              {" "}
              <h4 className="team-card__name">
                Sarah Chen
              </h4>
              {" "}
              <p className="team-card__role">
                UI/UX Design Lead
              </p>
              {" "}
              <div className="team-card__socials">
                {" "}
                <a href="#" className="team-card__social-link" aria-label="Twitter">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="LinkedIn">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-reveal="">
              {" "}
              <div className="team-card__img-wrap">
                {" "}
                <img src={a11} alt="James Miller" className="team-card__img" />
                {" "}
              </div>
              {" "}
              <h4 className="team-card__name">
                James Miller
              </h4>
              {" "}
              <p className="team-card__role">
                Senior Developer
              </p>
              {" "}
              <div className="team-card__socials">
                {" "}
                <a href="#" className="team-card__social-link" aria-label="Twitter">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="LinkedIn">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-reveal="">
              {" "}
              <div className="team-card__img-wrap">
                {" "}
                <img src={a13} alt="Emma Davis" className="team-card__img" />
                {" "}
              </div>
              {" "}
              <h4 className="team-card__name">
                Emma Davis
              </h4>
              {" "}
              <p className="team-card__role">
                Marketing Strategist
              </p>
              {" "}
              <div className="team-card__socials">
                {" "}
                <a href="#" className="team-card__social-link" aria-label="Twitter">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="LinkedIn">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card" data-reveal="">
              {" "}
              <div className="team-card__img-wrap">
                {" "}
                <img src={a15} alt="Alex Kim" className="team-card__img" />
                {" "}
              </div>
              {" "}
              <h4 className="team-card__name">
                Alex Kim
              </h4>
              {" "}
              <p className="team-card__role">
                Data Science Expert
              </p>
              {" "}
              <div className="team-card__socials">
                {" "}
                <a href="#" className="team-card__social-link" aria-label="Twitter">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="LinkedIn">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="team-card__social-link" aria-label="GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center" data-reveal="">
            {" "}
            <span className="section-subtitle">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {" Student Reviews "}
            </span>
            {" "}
            <h2 className="section-title">
              What Our Students Say
            </h2>
            {" "}
            <p className="section-desc">
              Hear from learners who have transformed their careers with ECOURSES.
            </p>
            {" "}
          </div>
          {" "}
          <div className="grid grid-2">
            {" "}
            <div className="testimonial-card" data-reveal="">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The UI/UX Design course completely changed my career trajectory. Sarah's teaching approach makes complex concepts easy to grasp. I landed my dream job within 3 months of completing the course!"
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a18} alt="Maria Rodriguez" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <p className="testimonial-card__name">
                    Maria Rodriguez
                  </p>
                  {" "}
                  <p className="testimonial-card__course">
                    UI/UX Design Masterclass
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card" data-reveal="">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                "As a career switcher, the Full-Stack Development course gave me everything I needed. The hands-on projects were incredibly valuable, and the community support kept me motivated throughout."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a19} alt="David Park" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <p className="testimonial-card__name">
                    David Park
                  </p>
                  {" "}
                  <p className="testimonial-card__course">
                    Full-Stack Web Development
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card" data-reveal="">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                "The Data Science course is a gem. Alex breaks down complex Python concepts into digestible modules. The certificate I earned helped me negotiate a 30% salary increase at my current company."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a20} alt="Rachel Thompson" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <p className="testimonial-card__name">
                    Rachel Thompson
                  </p>
                  {" "}
                  <p className="testimonial-card__course">
                    Data Science with Python
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card" data-reveal="">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                "I've tried many online platforms, but ECOURSES stands out for its quality and community. The Digital Marketing bootcamp gave me actionable strategies I implemented the very next day."
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <img src={a21} alt="Chris Anderson" className="testimonial-card__avatar" />
                {" "}
                <div>
                  {" "}
                  <p className="testimonial-card__name">
                    Chris Anderson
                  </p>
                  {" "}
                  <p className="testimonial-card__course">
                    Digital Marketing Strategy
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
      <section className="section section--light">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-row" data-reveal="">
            {" "}
            <div>
              {" "}
              <span className="stat-item__num" data-count="50000" data-suffix="+">
                0
              </span>
              {" "}
              <span className="stat-item__label">
                Active Students
              </span>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="stat-item__num" data-count="500" data-suffix="+">
                0
              </span>
              {" "}
              <span className="stat-item__label">
                Online Courses
              </span>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="stat-item__num" data-count="200" data-suffix="+">
                0
              </span>
              {" "}
              <span className="stat-item__label">
                Expert Instructors
              </span>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="stat-item__num" data-count="98" data-suffix="%">
                0
              </span>
              {" "}
              <span className="stat-item__label">
                Satisfaction Rate
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-section" data-reveal="">
            {" "}
            <h2>
              Ready to Start Your Learning Journey?
            </h2>
            {" "}
            <p>
              Join 50,000+ students who are already building their future. Enroll today and get access to all courses with our special launch offer.
            </p>
            {" "}
            <div className="flex-center gap-md" style={{ flexWrap: "wrap" }}>
              {" "}
              <a href="courses.html" className="btn btn--secondary btn--lg">
                Enroll Now — 70% Off
              </a>
              {" "}
              <a href="contact.html" className="btn btn--white btn--lg">
                Talk to an Advisor
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
              <a href="index.html" className="footer__logo">
                {" "}
                <span className="footer__logo-icon">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <line x1="12" y1="6" x2="12" y2="12" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                  </svg>
                  {" "}
                </span>
                {" ECOURSES "}
              </a>
              {" "}
              <p className="footer__text">
                Empowering learners worldwide with expert-led courses. Build skills, earn certificates, and advance your career — all in one place.
              </p>
              {" "}
              <div className="footer__socials">
                {" "}
                <a href="#" className="footer__social-link" aria-label="Twitter">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" className="footer__social-link" aria-label="GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5 className="footer__heading">
                Quick Links
              </h5>
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
                <a href="courses.html" className="footer__link">
                  Courses
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
              <h5 className="footer__heading">
                Categories
              </h5>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="courses.html" className="footer__link">
                  Design
                </a>
                {" "}
                <a href="courses.html" className="footer__link">
                  Development
                </a>
                {" "}
                <a href="courses.html" className="footer__link">
                  Business
                </a>
                {" "}
                <a href="courses.html" className="footer__link">
                  Marketing
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5 className="footer__heading">
                Newsletter
              </h5>
              {" "}
              <p className="footer__newsletter-text">
                Get the latest courses and learning tips delivered to your inbox.
              </p>
              {" "}
              <form className="footer__newsletter-form" data-form="">
                {" "}
                <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
                {" "}
                <button type="submit" className="btn btn--primary btn--sm">
                  Subscribe
                </button>
                {" "}
              </form>
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
              {" ECOURSES. All rights reserved."}
            </span>
            {" "}
            <span>
              Built with care for learners everywhere.
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
