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
              {" hello@yourdomain.com"}
            </a>
            {" "}
          </div>
          {" "}
          <div className="topbar-right">
            {" "}
            <span>
              <i className="fa fa-clock" />
              {" Opening hours here"}
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
            {" Paws &"}
            <span>
               Bubbles
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
              Services
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
            <a href="contact.html#booking" className="btn btn-primary btn-sm">
              Book a Groom
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
          <img src={a0} alt="Happy dog after grooming" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container hero-content">
          {" "}
          <div className="hero-badge">
            <i className="fa fa-shield-halved" />
            {" Gentle, Certified Groomers"}
          </div>
          {" "}
          <h1>
            {"Fresh, Fluffy & "}
            <span>
              Happy
            </span>
          </h1>
          {" "}
          <p>
            Dog and cat grooming with gentle hands and natural shampoos. From a puppy's first groom to a full makeover, every pet leaves calm, clean and loved.
          </p>
          {" "}
          <div className="hero-actions">
            {" "}
            <a href="contact.html#booking" className="btn btn-yellow btn-lg">
              {"Book a Groom "}
              <i className="fa fa-arrow-right" />
            </a>
            {" "}
            <a href="courses.html" className="btn btn-ghost btn-lg">
              View Services
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
                Happy Pets
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
                Calm Visits
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
                Years Grooming
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
                Certified Groomers
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
              <img src={a1} alt="Dog being groomed" className="about-main-img" />
              {" "}
              <img src={a2} alt="Groomer with a happy dog" className="about-accent-img" />
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
                {"Grooming That Feels Like a Day at the Spa"}
              </h2>
              {" "}
              <p>
                At Paws & Bubbles, we treat every dog and cat like family. Our certified groomers take things slowly, with gentle handling and natural shampoos that are kind to skin and coat.
              </p>
              {" "}
              <p>
                Whether it's a quick bath and brush or a full groom, we explain what we'll do, keep your pet comfortable, and send them home looking and feeling their best.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Certified Groomers"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Gentle Handling"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Natural Shampoos"}
                </li>
                {" "}
                <li>
                  <i className="fa fa-check-circle" />
                  {" Dogs & Cats Welcome"}
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn-primary">
                {"Meet Us "}
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
              Our Services
            </div>
            {" "}
            <h2 className="section-title">
              Grooming Made for Your Pet
            </h2>
            {" "}
            <p className="section-subtitle">
              Choose the care your pet needs, from a fresh bath to a full style.
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
                <img src={a3} alt="Dog bath" />
                {" "}
                <span className="course-price">
                  On request
                </span>
                {" "}
                <span className="course-level">
                  Fresh
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  Bath & Brush
                </h4>
                {" "}
                <p>
                  A warm bath with natural shampoo, a gentle blow-dry and a thorough brush-out for a soft, clean coat.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" Dogs & cats"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" Natural shampoo"}
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
                <img src={a4} alt="Dog haircut" />
                {" "}
                <span className="course-price">
                  On request
                </span>
                {" "}
                <span className="course-level">
                  Full makeover
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  {"Full Groom"}
                </h4>
                {" "}
                <p>
                  Bath, brush, breed-style haircut, nail trim and ear clean, all done calmly and carefully.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" Dogs & cats"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" Nails included"}
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
                <img src={a5} alt="Cat being brushed" />
                {" "}
                <span className="course-price">
                  On request
                </span>
                {" "}
                <span className="course-level">
                  Gentle start
                </span>
                {" "}
              </div>
              {" "}
              <div className="course-card-body">
                {" "}
                <h4>
                  Puppy's First Groom
                </h4>
                {" "}
                <p>
                  A short, positive first visit that helps puppies get used to bathing, brushing and the sound of the dryer.
                </p>
                {" "}
                <div className="course-meta">
                  {" "}
                  <span>
                    <i className="fa fa-clock" />
                    {" First visit"}
                  </span>
                  {" "}
                  <span>
                    <i className="fa fa-car" />
                    {" Extra patience"}
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
              Our Groomers
            </div>
            {" "}
            <h2 className="section-title">
              Meet the Team Who'll Pamper Your Pet
            </h2>
            {" "}
            <p className="section-subtitle">
              Certified, patient and genuinely in love with animals.
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
                <img src={a6} alt="Groomer" />
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
                  Groomer name
                </h5>
                {" "}
                <span>
                  Lead Groomer
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
                <img src={a7} alt="Groomer" />
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
                  Groomer name
                </h5>
                {" "}
                <span>
                  Cat Specialist
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
                <img src={a8} alt="Groomer" />
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
                  Groomer name
                </h5>
                {" "}
                <span>
                  De-shedding Pro
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
                <img src={a9} alt="Groomer" />
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
                  Groomer name
                </h5>
                {" "}
                <span>
                  Puppy Groom Expert
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
              What Pet Parents Say
            </h2>
            {" "}
            <p className="section-subtitle">
              Kind words from families who trust us with their pets.
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
                  <img src={a10} alt="Pet parent" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    Our nervous rescue came home relaxed and smelling amazing. You can tell they really take their time.
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    Client name
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    Full groom
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
                  <img src={a11} alt="Pet parent" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    {"Finally a groomer my cat doesn't hate. Gentle, calm and the coat looks beautiful."}
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    Client name
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    Bath & brush
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
                  <img src={a12} alt="Pet parent" className="testimonial-avatar" />
                  {" "}
                  <p className="testimonial-quote">
                    Our puppy's first groom was such a positive experience. She can't wait to go back!
                  </p>
                  {" "}
                  <h5 className="testimonial-name">
                    Client name
                  </h5>
                  {" "}
                  <p className="testimonial-role">
                    Puppy's first groom
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
            Ready for a Fresh, Fluffy Pet?
          </h2>
          {" "}
          <p>
            Book a grooming appointment today and let us pamper your dog or cat.
          </p>
          {" "}
          <a href="contact.html#booking" className="btn btn-yellow btn-lg">
            {"Book a Groom "}
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
                {" Paws &"}
                <span>
                   Bubbles
                </span>
              </div>
              {" "}
              <p>
                Gentle dog and cat grooming with natural shampoos and certified groomers.
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
                  Services
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
                Services
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="courses.html">
                  Bath & Brush
                </a>
                {" "}
                <a href="courses.html">
                  Full Groom
                </a>
                {" "}
                <a href="courses.html">
                  Nail Trim
                </a>
                {" "}
                <a href="courses.html">
                  De-shedding
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
                  Your address here
                  <br />
                  City, postcode
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
                    hello@yourdomain.com
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
            {" Paws & Bubbles. All rights reserved. "}
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
