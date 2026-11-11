// Converted from the HTML template driving-school-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/about-1.webp";
import a2 from "./assets/about-2.webp";
import a3 from "./assets/courses-1.webp";
import a4 from "./assets/courses-2.webp";
import a5 from "./assets/courses-3.webp";
import a6 from "./assets/team-1.webp";
import a7 from "./assets/team-2.webp";
import a8 from "./assets/team-3.webp";
import a9 from "./assets/team-4.webp";
import a10 from "./assets/testimonial-1.webp";
import a11 from "./assets/testimonial-2.webp";
import a12 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-driving-school-167a">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="container">
          {" "}
          <div className="topbar-left">
            {" "}
            <a href="tel:+1234567890">
              <i className="fa fa-phone" />
              {" +1 234 567 890"}
            </a>
            {" "}
            <a href="mailto:info@drivin.com">
              <i className="fa fa-envelope" />
              {" info@drivin.com"}
            </a>
            {" "}
          </div>
          {" "}
          <div className="topbar-right">
            {" "}
            <span>
              <i className="fa fa-clock" />
              {" Mon - Sat: 8:00 AM - 7:00 PM"}
            </span>
            {" "}
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            {" "}
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            {" "}
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
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
        <div className="container">
          {" "}
          <a href="index.html" className="nav-brand">
            <i className="fa fa-car-side" />
            {" DRIV"}
            <span>
              IN
            </span>
          </a>
          {" "}
          <button className="burger" aria-label="Toggle menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <div className="nav-links">
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
            <a href="contact.html#booking" className="btn btn-primary btn-sm">
              Book Lesson
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="nav-overlay" />
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Driving on open road" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container hero-content">
          {" "}
          <div className="hero-badge">
            <i className="fa fa-shield-halved" />
            {" Safety-First Training"}
          </div>
          {" "}
          <h1>
            {"Learn To Drive With "}
            <span>
              Confidence
            </span>
          </h1>
          {" "}
          <p>
            Professional driving lessons tailored to your pace. From first-time learners to license-ready drivers, we build road confidence that lasts a lifetime.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="contact.html#booking" className="btn btn-yellow btn-lg">
              {"Book Your Lesson "}
              <i className="fa fa-arrow-right" />
            </a>
            {" "}
            <a href="courses.html" className="btn btn-ghost btn-lg">
              View Courses
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero-road-line" />
        {" "}
      </section>
      {" "}
      {" "}
      <section className="stats-bar">
        {" "}
        <div className="container">
          {" "}
          <div className="stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <div className="stat-speedometer">
                {" "}
                <span className="stat-number" data-count="1500" data-suffix="+">
                  0+
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-label">
                Students Trained
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-1">
              {" "}
              <div className="stat-speedometer">
                {" "}
                <span className="stat-number" data-count="98" data-suffix="%">
                  0%
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-label">
                Pass Rate
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-2">
              {" "}
              <div className="stat-speedometer">
                {" "}
                <span className="stat-number" data-count="15" data-suffix="+">
                  0+
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal reveal-delay-3">
              {" "}
              <div className="stat-speedometer">
                {" "}
                <span className="stat-number" data-count="8" data-suffix="">
                  0
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat-label">
                Certified Instructors
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
      <section className="py-section">
        {" "}
        <div className="container">
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-images reveal">
              {" "}
              <img src={a1} alt="Student learning to drive" className="about-main-img" />
              {" "}
              <img src={a2} alt="Driving instructor with student" className="about-accent-img" />
              {" "}
            </div>
            {" "}
            <div className="about-text reveal reveal-delay-1">
              {" "}
              <div className="section-label">
                About Us
              </div>
              {" "}
              <h2 className="section-title">
                {"We Help You Pass the Test & Drive with Confidence"}
              </h2>
              {" "}
              <p>
                At DRIVIN, we believe everyone deserves the freedom that comes with being a skilled, confident driver. Our certified instructors bring patience, expertise, and a safety-first mindset to every lesson.
              </p>
              {" "}
              <p>
                From navigating busy intersections to mastering highway merging, we prepare you for every real-world driving scenario. Our structured curriculum adapts to your learning style and pace.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Fully Licensed & Insured"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Flexible Scheduling"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Modern Training Vehicles"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Progress Tracking"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn-primary">
                {"Learn More "}
                <i className="fa fa-arrow-right" />
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
      <div className="road-divider">
        <span className="road-icon">
          <i className="fa fa-road" />
        </span>
      </div>
      {" "}
      {" "}
      <section className="py-section" style={{ background: "var(--light)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <div className="section-label">
              Our Courses
            </div>
            {" "}
            <h2 className="section-title">
              Training Programs Built for You
            </h2>
            {" "}
            <p className="section-subtitle">
              Choose from our range of comprehensive driving courses designed to build your skills and confidence on the road.
            </p>
            {" "}
          </div>
          {" "}
          <div className="courses-grid">
            {" "}
            {" "}
            <div className="course-card reveal">
              {" "}
              <div className="course-card-img">
                {" "}
                <img src={a3} alt="Automatic car lessons" />
                {" "}
                <span className="course-price">
                  $299
                </span>
                {" "}
                <span className="course-level">
                  Beginner
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  Automatic Car Lessons
                </h4>
                {" "}
                <p>
                  Perfect for first-time learners. Master the basics of automatic transmission driving with hands-on practice in real traffic conditions.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" 4 Weeks"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" 20 Lessons"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="course-card reveal reveal-delay-1">
              {" "}
              <div className="course-card-img">
                {" "}
                <img src={a4} alt="Highway driving lessons" />
                {" "}
                <span className="course-price">
                  $399
                </span>
                {" "}
                <span className="course-level">
                  Intermediate
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  {"Highway & City Driving"}
                </h4>
                {" "}
                <p>
                  Take your skills to the next level. Learn highway merging, lane discipline, city navigation, and parallel parking with expert guidance.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" 6 Weeks"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" 30 Lessons"}
                  </span>
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
              <div className="course-card-img">
                {" "}
                <img src={a5} alt="International driving course" />
                {" "}
                <span className="course-price">
                  $549
                </span>
                {" "}
                <span className="course-level">
                  Advanced
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  Full License Package
                </h4>
                {" "}
                <p>
                  Our most comprehensive program. Everything from basics to test preparation, including defensive driving techniques and road confidence building.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" 10 Weeks"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" 50 Lessons"}
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
      <div className="road-divider">
        <span className="road-icon">
          <i className="fa fa-traffic-light" />
        </span>
      </div>
      {" "}
      {" "}
      <section className="py-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <div className="section-label">
              Our Instructors
            </div>
            {" "}
            <h2 className="section-title">
              Meet the Team Behind Your Success
            </h2>
            {" "}
            <p className="section-subtitle">
              Certified, experienced, and passionate about making you a confident driver.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card-img">
                {" "}
                <img src={a6} alt="Instructor James Wilson" />
                {" "}
                <div className="team-social">
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <h5>
                  James Wilson
                </h5>
                {" "}
                <span>
                  Senior Instructor
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-1">
              {" "}
              <div className="team-card-img">
                {" "}
                <img src={a7} alt="Instructor Sarah Chen" />
                {" "}
                <div className="team-social">
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <h5>
                  Sarah Chen
                </h5>
                {" "}
                <span>
                  Highway Specialist
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-2">
              {" "}
              <div className="team-card-img">
                {" "}
                <img src={a8} alt="Instructor Mike Rivera" />
                {" "}
                <div className="team-social">
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <h5>
                  Mike Rivera
                </h5>
                {" "}
                <span>
                  City Driving Expert
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-3">
              {" "}
              <div className="team-card-img">
                {" "}
                <img src={a9} alt="Instructor Emily Park" />
                {" "}
                <div className="team-social">
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  {" "}
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="team-card-body">
                {" "}
                <h5>
                  Emily Park
                </h5>
                {" "}
                <span>
                  Defensive Driving Coach
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
      <section className="py-section" style={{ background: "var(--light)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-4">
            {" "}
            <div className="section-label">
              Testimonials
            </div>
            {" "}
            <h2 className="section-title">
              What Our Students Say
            </h2>
            {" "}
            <p className="section-subtitle">
              Real stories from real learners who got their license with DRIVIN.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonial-carousel">
            {" "}
            <div className="testimonial-track">
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <img src={a10} alt="Alex Morgan" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    I was terrified of driving before joining DRIVIN. James was incredibly patient and helped me build confidence step by step. Passed my test on the first try!
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    Alex Morgan
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    License obtained, 2024
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <img src={a11} alt="Jessica Lee" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    {"The Highway & City course was exactly what I needed. I went from nervous to confidently navigating rush hour traffic. The structured approach really works."}
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    Jessica Lee
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    License obtained, 2025
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <div className="testimonial-card">
                  {" "}
                  <img src={a12} alt="David Nguyen" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    Best investment in myself. The instructors don't just teach you to pass the test -- they teach you to be a safe, confident driver for life. Highly recommend!
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    David Nguyen
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    License obtained, 2025
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="carousel-dots">
              {" "}
              <button className="carousel-dot active" aria-label="Slide 1" />
              {" "}
              <button className="carousel-dot" aria-label="Slide 2" />
              {" "}
              <button className="carousel-dot" aria-label="Slide 3" />
              {" "}
            </div>
            {" "}
            <div className="carousel-nav">
              {" "}
              <button className="btn btn-outline btn-sm carousel-prev" aria-label="Previous">
                <i className="fa fa-arrow-left" />
              </button>
              {" "}
              <button className="btn btn-outline btn-sm carousel-next" aria-label="Next">
                <i className="fa fa-arrow-right" />
              </button>
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
        <div className="container">
          {" "}
          <h2>
            Ready to Hit the Road?
          </h2>
          {" "}
          <p>
            Book your first lesson today and start your journey to becoming a confident, skilled driver.
          </p>
          {" "}
          <a href="contact.html#booking" className="btn btn-yellow btn-lg">
            {"Book Your Lesson "}
            <i className="fa fa-arrow-right" />
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
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand">
                <i className="fa fa-car-side" />
                {" DRIV"}
                <span>
                  IN
                </span>
              </div>
              {" "}
              <p>
                Professional driving lessons that build real-world confidence. Safety-first, patient instruction for learners at every level.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                {" "}
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                {" "}
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                {" "}
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html">
                  Home
                </a>
                {" "}
                <a href="about.html">
                  About Us
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
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Courses
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="courses.html">
                  Automatic Lessons
                </a>
                {" "}
                <a href="courses.html">
                  Highway Driving
                </a>
                {" "}
                <a href="courses.html">
                  Full License
                </a>
                {" "}
                <a href="courses.html">
                  Defensive Driving
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Contact Us
              </h4>
              {" "}
              <div className="footer-contact-item">
                {" "}
                <i className="fa fa-map-marker-alt" />
                {" "}
                <p>
                  123 Roadway Ave, Suite 100
                  <br />
                  New York, NY 10001
                </p>
                {" "}
              </div>
              {" "}
              <div className="footer-contact-item">
                {" "}
                <i className="fa fa-phone" />
                {" "}
                <p>
                  <a href="tel:+1234567890">
                    +1 234 567 890
                  </a>
                </p>
                {" "}
              </div>
              {" "}
              <div className="footer-contact-item">
                {" "}
                <i className="fa fa-envelope" />
                {" "}
                <p>
                  <a href="mailto:info@drivin.com">
                    info@drivin.com
                  </a>
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
        <div className="copyright">
          {" "}
          <div className="container">
            {" © "}
            <span data-year="" />
            {" DRIVIN Driving School. All rights reserved. "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fa fa-chevron-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
