// Converted from the HTML template kids-daycare-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero-1.webp";
import a1 from "./assets/img-hero-2.webp";
import a2 from "./assets/img-hero-3.webp";
import a3 from "./assets/img-about-1.webp";
import a4 from "./assets/img-detail-1.webp";
import a5 from "./assets/img-activity-4.webp";
import a6 from "./assets/img-activity-5.webp";
import a7 from "./assets/img-teacher-1.webp";
import a8 from "./assets/img-teacher-2.webp";
import a9 from "./assets/img-teacher-3.webp";
import a10 from "./assets/img-teacher-4.webp";
import a11 from "./assets/img-activity-1.webp";
import a12 from "./assets/img-activity-2.webp";
import a13 from "./assets/img-activity-3.webp";
import a14 from "./assets/img-activity-6.webp";
import a15 from "./assets/img-parent-1.webp";
import a16 from "./assets/img-parent-2.webp";
import a17 from "./assets/img-parent-3.webp";
import a18 from "./assets/img-blog-1.webp";
import a19 from "./assets/img-blog-2.webp";
import a20 from "./assets/img-blog-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-kids-daycare-79f0">
      {" "}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {" "}
      <div className="topbar">
        {" "}
        <div className="container topbar-inner">
          {" "}
          <p className="topbar-item">
            <span className="topbar-icon">
              📖
            </span>
            {" Mon–Fri 7:30 AM – 6:00 PM"}
          </p>
          {" "}
          <p className="topbar-item topbar-mid">
            <span className="topbar-icon">
              📍
            </span>
            {" 123 Maple Street, Brooklyn, NY"}
          </p>
          {" "}
          <p className="topbar-item topbar-end">
            {" "}
            <a href="tel:+12125550780">
              +1 (212) 555-0780
            </a>
            {" "}
            <a href="mailto:hello@littlewonders.example">
              hello@littlewonders.example
            </a>
            {" "}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <header className="site-header" id="top">
        {" "}
        <div className="container nav-wrap">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <span className="brand-mark" aria-hidden="true" />
            {" "}
            <span className="brand-text">
              Little
              <span>
                Wonders
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
            ☰
          </button>
          {" "}
          <nav className="nav-links" id="site-nav" aria-label="Primary">
            {" "}
            <a href="index.html" className="nav-link">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav-link">
              About
            </a>
            {" "}
            <a href="classes.html" className="nav-link">
              Classes
            </a>
            {" "}
            <a href="teachers.html" className="nav-link">
              Teachers
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="nav-cta">
              Enroll Now
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main id="main">
        {" "}
        <section className="hero" id="hero">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
            <img src={a2} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" />
          {" "}
          <div className="container hero-copy">
            {" "}
            <p className="eyebrow">
              ★ Nurturing curiosity since 2012
            </p>
            {" "}
            <h1 className="hero-title">
              {"Where little minds "}
              <em>
                grow big dreams.
              </em>
            </h1>
            {" "}
            <p className="hero-sub">
              A warm, creative preschool for children aged 2–6. Play-based learning, certified teachers, and a home away from home.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Schedule a Visit
              </a>
              {" "}
              <a href="classes.html" className="btn btn-ghost-light">
                Our Programs
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-badge">
              {" "}
              <span className="hero-badge-num">
                12+
              </span>
              {" "}
              <span className="hero-badge-label">
                Years of
                <br />
                Excellence
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="ribbon reveal">
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🛡
                </span>
                <span className="ribbon-label">
                  {"Safe & Secure"}
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🎓
                </span>
                <span className="ribbon-label">
                  Certified Teachers
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🎨
                </span>
                <span className="ribbon-label">
                  Creative Learning
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🍽
                </span>
                <span className="ribbon-label">
                  Healthy Meals
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  👦
                </span>
                <span className="ribbon-label">
                  Small Classes
                </span>
              </div>
              {" "}
              <div className="ribbon-item">
                <span className="ribbon-icon" aria-hidden="true">
                  🌊
                </span>
                <span className="ribbon-label">
                  Outdoor Play
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-cream">
          {" "}
          <div className="container">
            {" "}
            <div className="split reveal">
              {" "}
              <div className="split-img">
                {" "}
                <img src={a3} alt="Children learning in a bright classroom" className="split-photo" />
                {" "}
                <div className="split-badge">
                  {" "}
                  <span className="split-badge-num">
                    500+
                  </span>
                  {" "}
                  <span className="split-badge-label">
                    Happy Children
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="split-copy">
                {" "}
                <p className="eyebrow">
                  About Little Wonders
                </p>
                {" "}
                <h2 className="section-title">
                  {"A place where every child "}
                  <em>
                    belongs and blooms.
                  </em>
                </h2>
                {" "}
                <p>
                  At Little Wonders, we believe childhood is a journey of discovery. Our play-based curriculum blends social-emotional learning with creative exploration, giving each child the foundation they need to thrive.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    Low student-to-teacher ratio (6:1)
                  </li>
                  {" "}
                  <li>
                    Montessori-inspired learning stations
                  </li>
                  {" "}
                  <li>
                    Daily outdoor play in our organic garden
                  </li>
                  {" "}
                  <li>
                    {"Spanish, music & movement programs"}
                  </li>
                  {" "}
                  <li>
                    Nutritious meals prepared on-site
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="about.html" className="btn btn-primary">
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Our Programs
              </p>
              {" "}
              <h2 className="section-title">
                {"Classes designed for every "}
                <em>
                  stage of wonder.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="class-grid">
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a0} alt="Drawing class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 2–3
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    Tiny Explorers
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"Sensory play, art & music for our youngest learners building confidence and curiosity."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Mon–Wed–Fri
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 8:30 AM – 12:00 PM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $320 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a1} alt="Language learning class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 3–4
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    Discovery Kids
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"Language, early math & nature exploration through hands-on projects and guided play."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Mon–Fri
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 8:30 AM – 2:30 PM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $480 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a2} alt="Science class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 4–5
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    Curious Minds
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"STEM foundations, literacy & creative arts preparing children for kindergarten and beyond."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Mon–Fri
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 8:30 AM – 3:00 PM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $560 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a4} alt="Music and movement class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 2–4
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    {"Music & Motion"}
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"Rhythm, dance & singing develop coordination, language and social confidence through joy."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Tue–Thu
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 9:00 AM – 11:00 AM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $180 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a5} alt="Art class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 3–5
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    Art Studio
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"Painting, clay, collage & mixed media — every child explores their creative voice through art."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Wed–Fri
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 10:00 AM – 12:00 PM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $200 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="class-card reveal">
                {" "}
                <div className="class-img-wrap">
                  {" "}
                  <img src={a6} alt="Outdoor nature class" className="class-img" />
                  {" "}
                  <span className="class-tag">
                    Ages 4–6
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="class-body">
                  {" "}
                  <h3 className="class-name">
                    Nature Explorers
                  </h3>
                  {" "}
                  <p className="class-desc">
                    {"Garden science, outdoor art & nature walks connecting children to the natural world."}
                  </p>
                  {" "}
                  <div className="class-meta">
                    {" "}
                    <span className="class-meta-item">
                      📅 Mon–Thu
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      ⏰ 1:00 PM – 3:30 PM
                    </span>
                    {" "}
                    <span className="class-meta-item">
                      💰 $220 / month
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <a href="classes.html" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-foot reveal">
              {" "}
              <p>
                {"Not sure which program fits? "}
                <a href="contact.html">
                  Schedule a free tour
                </a>
                {" and we'll help you decide."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-coral" id="enroll">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Enrollment
              </p>
              {" "}
              <h2 className="section-title">
                {"Reserve your child's spot "}
                <em>
                  today.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="form-wrap reveal">
              {" "}
              <form className="enroll-form" data-form="" noValidate={true}>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="ef-name">
                      Parent name
                    </label>
                    {" "}
                    <input id="ef-name" type="text" name="name" placeholder="Your full name" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="ef-email">
                      Email address
                    </label>
                    {" "}
                    <input id="ef-email" type="email" name="email" placeholder="you@example.com" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="ef-phone">
                      Phone number
                    </label>
                    {" "}
                    <input id="ef-phone" type="tel" name="phone" placeholder="(555) 123-4567" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-field">
                    {" "}
                    <label htmlFor="ef-child">
                      {"Child's name & age"}
                    </label>
                    {" "}
                    <input id="ef-child" type="text" name="child" placeholder="e.g. Emma, 3 years" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-field form-field-wide">
                    {" "}
                    <label htmlFor="ef-message">
                      Questions or preferences
                    </label>
                    {" "}
                    <textarea id="ef-message" name="message" rows="3" placeholder="Tell us about your child's needs..." />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn-primary">
                  Submit Enrollment Inquiry
                </button>
                {" "}
                <p className="form-msg form-ok">
                  ✓ Thanks! We'll be in touch within 24 hours to schedule your tour.
                </p>
                {" "}
                <p className="form-msg form-err">
                  ⚠ Please fill in all required fields.
                </p>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Our Teachers
              </p>
              {" "}
              <h2 className="section-title">
                {"Meet the people who make "}
                <em>
                  Little Wonders special.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="teacher-grid">
              {" "}
              <article className="teacher-card reveal">
                {" "}
                <div className="teacher-img-wrap">
                  {" "}
                  <img src={a7} alt="Ms. Julia Smith" className="teacher-img" />
                  {" "}
                  <div className="teacher-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      LI
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      X
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <h3 className="teacher-name">
                  Ms. Julia Smith
                </h3>
                {" "}
                <p className="teacher-role">
                  Lead Teacher, Tiny Explorers
                </p>
                {" "}
                <p className="teacher-bio">
                  {"M.Ed in Early Childhood, 9 years of experience. Certified in Montessori & Reggio Emilia."}
                </p>
                {" "}
              </article>
              {" "}
              <article className="teacher-card reveal">
                {" "}
                <div className="teacher-img-wrap">
                  {" "}
                  <img src={a8} alt="Ms. Amelia Ross" className="teacher-img" />
                  {" "}
                  <div className="teacher-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      LI
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      X
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <h3 className="teacher-name">
                  Ms. Amelia Ross
                </h3>
                {" "}
                <p className="teacher-role">
                  Lead Teacher, Discovery Kids
                </p>
                {" "}
                <p className="teacher-bio">
                  {"B.A. in Child Development, 7 years. Specializes in language acquisition & sensory play."}
                </p>
                {" "}
              </article>
              {" "}
              <article className="teacher-card reveal">
                {" "}
                <div className="teacher-img-wrap">
                  {" "}
                  <img src={a9} alt="Ms. Maria Chen" className="teacher-img" />
                  {" "}
                  <div className="teacher-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      LI
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      X
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <h3 className="teacher-name">
                  Ms. Maria Chen
                </h3>
                {" "}
                <p className="teacher-role">
                  Lead Teacher, Curious Minds
                </p>
                {" "}
                <p className="teacher-bio">
                  {"M.A. in Elementary Education, 11 years. STEM-certified & passionate about inquiry-based learning."}
                </p>
                {" "}
              </article>
              {" "}
              <article className="teacher-card reveal">
                {" "}
                <div className="teacher-img-wrap">
                  {" "}
                  <img src={a10} alt="Mr. David Park" className="teacher-img" />
                  {" "}
                  <div className="teacher-social">
                    {" "}
                    <a href="#" aria-label="LinkedIn">
                      LI
                    </a>
                    {" "}
                    <a href="#" aria-label="Twitter">
                      X
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <h3 className="teacher-name">
                  Mr. David Park
                </h3>
                {" "}
                <p className="teacher-role">
                  {"Music & Movement Specialist"}
                </p>
                {" "}
                <p className="teacher-bio">
                  {"B.Mus in Music Education, 6 years. Orff-Schulwerk certified & leads our garden program."}
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
        <section className="section section-cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Gallery
              </p>
              {" "}
              <h2 className="section-title">
                {"A look inside our "}
                <em>
                  daily wonder.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid">
              {" "}
              <a href="assets/img/img-activity-1.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a11} alt="Children painting in art class" />
              </a>
              {" "}
              <a href="assets/img/img-activity-2.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a12} alt="Kids building with blocks" />
              </a>
              {" "}
              <a href="assets/img/img-activity-3.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a13} alt="Outdoor playground fun" />
              </a>
              {" "}
              <a href="assets/img/img-activity-4.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a5} alt="Music and movement class" />
              </a>
              {" "}
              <a href="assets/img/img-activity-5.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a6} alt="Garden exploration" />
              </a>
              {" "}
              <a href="assets/img/img-activity-6.jpg" className="gallery-item reveal" aria-label="View full-size image">
                <img src={a14} alt="Story time in the reading nook" />
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Testimonials
              </p>
              {" "}
              <h2 className="section-title">
                {"What parents say about "}
                <em>
                  Little Wonders.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="tst-grid">
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "Little Wonders has been home for our daughter since she was 2. The teachers are incredible — they nurture not just her mind but her heart."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a15} alt="Sarah M." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      Sarah Mitchell
                    </strong>
                    {" "}
                    <span className="tst-role">
                      Parent of Emma, age 4
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "We transferred our son from another daycare and the difference was immediate. He runs to class every morning. The garden program is a highlight."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a16} alt="James R." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      James Rodriguez
                    </strong>
                    {" "}
                    <span className="tst-role">
                      Parent of Leo, age 3
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-stars" aria-label="5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="tst-quote">
                  "The bilingual program, the art studio, the organic meals — Little Wonders exceeds every expectation. Our twins have thrived here."
                </p>
                {" "}
                <div className="tst-author">
                  {" "}
                  <img src={a17} alt="Aisha K." className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <strong className="tst-name">
                      Aisha Kapoor
                    </strong>
                    {" "}
                    <span className="tst-role">
                      {"Parent of Maya & Ravi, age 5"}
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
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                From Our Blog
              </p>
              {" "}
              <h2 className="section-title">
                {"Ideas and inspiration for "}
                <em>
                  growing families.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a18} alt="Child playing with blocks" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Child Development
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    The Power of Play: Why Unstructured Time Matters
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    How free play builds executive function, social skills and creativity in preschool children.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a19} alt="Children eating healthy lunch" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Nutrition
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    Picky Eaters Welcome: Building Healthy Food Habits
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    Simple strategies to help your child try new foods and develop a positive relationship with meals.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="blog-card reveal">
                {" "}
                <img src={a20} alt="Teacher reading to children" className="blog-img" />
                {" "}
                <div className="blog-body">
                  {" "}
                  <span className="blog-tag">
                    Early Literacy
                  </span>
                  {" "}
                  <h3 className="blog-title">
                    Reading Readiness: When and How to Start
                  </h3>
                  {" "}
                  <p className="blog-excerpt">
                    A developmental guide to pre-literacy skills and how to make reading a joyful daily ritual.
                  </p>
                  {" "}
                  <a href="#" className="blog-link">
                    Read More
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
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow">
              Begin the journey
            </p>
            {" "}
            <h2 className="cta-title">
              {"Give your child the gift of "}
              <em>
                wonder.
              </em>
            </h2>
            {" "}
            <p className="cta-sub">
              Schedule a tour, meet our teachers, and see your child light up with curiosity.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Schedule a Visit
              </a>
              {" "}
              <a href="classes.html" className="btn btn-ghost-dark">
                Explore Programs
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
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-col">
            {" "}
            <a href="index.html" className="brand footer-brand">
              {" "}
              <span className="brand-mark" aria-hidden="true" />
              {" "}
              <span className="brand-text">
                Little
                <span>
                  Wonders
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              A warm, nurturing preschool and daycare serving families in Brooklyn since 2012. Licensed by the NYC Department of Health.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                FB
              </a>
              {" "}
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                X
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Programs
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="classes.html">
                  Tiny Explorers (ages 2–3)
                </a>
              </li>
              {" "}
              <li>
                <a href="classes.html">
                  Discovery Kids (ages 3–4)
                </a>
              </li>
              {" "}
              <li>
                <a href="classes.html">
                  Curious Minds (ages 4–5)
                </a>
              </li>
              {" "}
              <li>
                <a href="classes.html">
                  After-school enrichment
                </a>
              </li>
              {" "}
              <li>
                <a href="classes.html">
                  Summer camp
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Quick Links
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="about.html">
                  About us
                </a>
              </li>
              {" "}
              <li>
                <a href="teachers.html">
                  Our teachers
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Schedule a tour
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  {"Tuition & enrollment"}
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  Parent resources
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Find us
            </h3>
            {" "}
            <ul className="footer-links footer-contact">
              {" "}
              <li>
                123 Maple Street, Suite 2B
                <br />
                Brooklyn, NY 11201
              </li>
              {" "}
              <li>
                <a href="tel:+12125550780">
                  +1 (212) 555-0780
                </a>
              </li>
              {" "}
              <li>
                <a href="mailto:hello@littlewonders.example">
                  hello@littlewonders.example
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <form className="newsletter" data-form="" noValidate={true}>
              {" "}
              <label htmlFor="nl-email" className="sr-only">
                Email for updates
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder={"Get parenting tips & updates"} required={true} />
              {" "}
              <button type="submit" className="btn btn-primary btn-sm">
                Join
              </button>
              {" "}
              <p className="form-msg form-ok">
                Welcome to the Little Wonders family!
              </p>
              {" "}
              <p className="form-msg form-err">
                Please enter a valid email address.
              </p>
              {" "}
            </form>
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
              {" Little Wonders Preschool LLC. All rights reserved."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
