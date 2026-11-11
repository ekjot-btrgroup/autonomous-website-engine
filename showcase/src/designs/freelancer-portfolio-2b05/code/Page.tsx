// Converted from the HTML template freelancer-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/contact.webp";
import a1 from "./assets/hero.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/portfolio-1.webp";
import a4 from "./assets/portfolio-2.webp";
import a5 from "./assets/portfolio-3.webp";
import a6 from "./assets/portfolio-4.webp";
import a7 from "./assets/portfolio-5.webp";
import a8 from "./assets/portfolio-6.webp";
import a9 from "./assets/team-1.webp";
import a10 from "./assets/team-2.webp";
import a11 from "./assets/team-3.webp";
import a12 from "./assets/team-4.webp";
import a13 from "./assets/testimonial-1.webp";
import a14 from "./assets/testimonial-2.webp";
import a15 from "./assets/testimonial-3.webp";
import a16 from "./assets/blog-1.webp";
import a17 from "./assets/blog-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700;800&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-freelancer-portfolio-2b05">
      {" "}
      {" "}
      <div className="preloader" aria-hidden="true">
        {" "}
        <div className="preloader__spinner" />
        {" "}
      </div>
      {" "}
      {" "}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="container navbar__inner">
          {" "}
          <a href="index.html" className="navbar__logo">
            Dev
            <span>
              Folio
            </span>
          </a>
          {" "}
          <div className="navbar__links">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="projects.html">
              Projects
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </div>
          {" "}
          <div className="navbar__cta">
            {" "}
            <a href="contact.html" className="btn btn--primary">
              Let's Talk
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
      <div className="mobile-nav" role="navigation" aria-label="Mobile navigation">
        {" "}
        <a href="index.html">
          Home
        </a>
        {" "}
        <a href="about.html">
          About
        </a>
        {" "}
        <a href="projects.html">
          Projects
        </a>
        {" "}
        <a href="contact.html">
          Contact
        </a>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="hero" id="home">
        {" "}
        <div className="container">
          {" "}
          <div className="hero__grid">
            {" "}
            <div className="hero__text">
              {" "}
              <p style={{ fontFamily: "var(--font-display)", fontWeight: "600", color: "var(--color-indigo)", marginBottom: "8px" }}>
                Hello, I'm
              </p>
              {" "}
              <h1>
                {"I build things people "}
                <em>
                  love to use
                </em>
              </h1>
              {" "}
              <p>
                {"A freelance developer & designer crafting thoughtful digital experiences. I turn ideas into clean, performant products that people genuinely enjoy."}
              </p>
              {" "}
              <div className="hero__btns">
                {" "}
                <a href="projects.html" className="btn btn--primary">
                  View My Work
                </a>
                {" "}
                <a href="contact.html" className="btn btn--outline">
                  Get In Touch
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero__img">
              {" "}
              <img src={a1} alt="Illustration of a developer at work" />
              {" "}
              <div className="hero__badges">
                {" "}
                <div className="skill-badge skill-badge--1">
                  <i className="fab fa-react" />
                  {" React"}
                </div>
                {" "}
                <div className="skill-badge skill-badge--2">
                  <i className="fab fa-js-square" />
                  {" JavaScript"}
                </div>
                {" "}
                <div className="skill-badge skill-badge--3">
                  <i className="fab fa-node-js" />
                  {" Node.js"}
                </div>
                {" "}
                <div className="skill-badge skill-badge--4">
                  <i className="fab fa-python" />
                  {" Python"}
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
      <section className="section" id="about">
        {" "}
        <div className="container">
          {" "}
          <div className="about__grid">
            {" "}
            <div className="about__img reveal">
              {" "}
              <img src={a2} alt="Portrait of the freelancer at work" />
              {" "}
            </div>
            {" "}
            <div className="about__text reveal reveal-delay-1">
              {" "}
              <div className="section-header text-left">
                {" "}
                <p>
                  About Me
                </p>
                {" "}
                <h2>
                  {"8+ Years of Crafting "}
                  <em>
                    Digital Experiences
                  </em>
                </h2>
                {" "}
              </div>
              {" "}
              <p>
                I'm a multidisciplinary freelancer who loves the intersection of design and code. From early-stage startups to established brands, I help teams ship products that are fast, accessible, and beautiful.
              </p>
              {" "}
              <p>
                When I'm not at the keyboard, you'll find me hiking trails, brewing pour-over coffee, or sketching UI concepts in my notebook.
              </p>
              {" "}
              <div className="skills">
                {" "}
                <div className="skill">
                  {" "}
                  <div className="skill__header">
                    <span>
                      UI/UX Design
                    </span>
                    <span>
                      92%
                    </span>
                  </div>
                  {" "}
                  <div className="skill__bar">
                    <div className="skill__fill" data-width="92%" />
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="skill">
                  {" "}
                  <div className="skill__header">
                    <span>
                      Frontend Development
                    </span>
                    <span>
                      95%
                    </span>
                  </div>
                  {" "}
                  <div className="skill__bar">
                    <div className="skill__fill" data-width="95%" />
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="skill">
                  {" "}
                  <div className="skill__header">
                    <span>
                      {"Backend & APIs"}
                    </span>
                    <span>
                      85%
                    </span>
                  </div>
                  {" "}
                  <div className="skill__bar">
                    <div className="skill__fill" data-width="85%" />
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="skill">
                  {" "}
                  <div className="skill__header">
                    <span>
                      {"Motion & Interaction"}
                    </span>
                    <span>
                      88%
                    </span>
                  </div>
                  {" "}
                  <div className="skill__bar">
                    <div className="skill__fill" data-width="88%" />
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="about.html" className="btn btn--primary" style={{ marginTop: "28px" }}>
                Learn More About Me
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
      <section className="section section--gray" id="projects">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header text-center reveal">
            {" "}
            <p>
              Portfolio
            </p>
            {" "}
            <h2>
              {"Selected "}
              <em>
                Projects
              </em>
            </h2>
            {" "}
          </div>
          {" "}
          <div className="projects__filter reveal">
            {" "}
            <button className="active" data-filter="all">
              All
            </button>
            {" "}
            <button data-filter="web">
              Web Design
            </button>
            {" "}
            <button data-filter="app">
              App Design
            </button>
            {" "}
            <button data-filter="brand">
              Branding
            </button>
            {" "}
          </div>
          {" "}
          <div className="projects__grid">
            {" "}
            <div className="project-card reveal" data-tags="web">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a3} alt="eCommerce platform redesign" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  E-Commerce Platform
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    Web Design
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    Shopify
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-1" data-tags="app">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a4} alt="Product landing page design" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  SaaS Landing Page
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    Web Design
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    Branding
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-2" data-tags="brand">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a5} alt="Brand identity system" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  Brand Identity System
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    Branding
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    Identity
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal" data-tags="web">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a6} alt="Dashboard application" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  Analytics Dashboard
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    Web App
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    UI/UX
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-1" data-tags="app">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a7} alt="Mobile social app" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  Social Fitness App
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    App Design
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    Mobile
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal reveal-delay-2" data-tags="brand web">
              {" "}
              <div className="project-card__img">
                {" "}
                <img src={a8} alt="Corporate website redesign" />
                {" "}
              </div>
              {" "}
              <div className="project-card__overlay">
                {" "}
                <h3>
                  Corporate Website
                </h3>
                {" "}
                <div className="project-card__tags">
                  {" "}
                  <span className="project-card__tag">
                    Web Design
                  </span>
                  {" "}
                  <span className="project-card__tag">
                    WordPress
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
          <div className="text-center" style={{ marginTop: "48px" }}>
            {" "}
            <a href="projects.html" className="btn btn--outline">
              View All Projects
            </a>
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
          <div className="section-header text-center reveal">
            {" "}
            <p>
              What I Do
            </p>
            {" "}
            <h2>
              {"Services & "}
              <em>
                Expertise
              </em>
            </h2>
            {" "}
          </div>
          {" "}
          <div className="services__grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card__icon">
                <i className="fas fa-palette" />
              </div>
              {" "}
              <h3>
                UI/UX Design
              </h3>
              {" "}
              <p>
                User-centered interfaces that are beautiful, intuitive, and conversion-focused. From wireframes to polished Figma prototypes.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-1">
              {" "}
              <div className="service-card__icon">
                <i className="fas fa-code" />
              </div>
              {" "}
              <h3>
                Web Development
              </h3>
              {" "}
              <p>
                Clean, performant websites and web apps built with modern technologies. Responsive, accessible, and SEO-friendly.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal reveal-delay-2">
              {" "}
              <div className="service-card__icon">
                <i className="fas fa-mobile-alt" />
              </div>
              {" "}
              <h3>
                Mobile Apps
              </h3>
              {" "}
              <p>
                Cross-platform mobile experiences using React Native and Flutter. Smooth animations, native feel, one codebase.
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
      <section className="section section--cream" id="team">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header text-center reveal">
            {" "}
            <p>
              The Team
            </p>
            {" "}
            <h2>
              {"People I "}
              <em>
                Collaborate
              </em>
              {" With"}
            </h2>
            {" "}
          </div>
          {" "}
          <div className="team__grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a9} alt="Mollie Ross" />
                {" "}
              </div>
              {" "}
              <h3>
                Mollie Ross
              </h3>
              {" "}
              <h4>
                UI Designer
              </h4>
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
            <div className="team-card reveal reveal-delay-1">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a10} alt="Dylan Adams" />
                {" "}
              </div>
              {" "}
              <h3>
                Dylan Adams
              </h3>
              {" "}
              <h4>
                Full-Stack Developer
              </h4>
              {" "}
              <div className="team-card__social">
                {" "}
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-2">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a11} alt="Jennifer Page" />
                {" "}
              </div>
              {" "}
              <h3>
                Jennifer Page
              </h3>
              {" "}
              <h4>
                Brand Strategist
              </h4>
              {" "}
              <div className="team-card__social">
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                {" "}
                <a href="#" aria-label="Behance">
                  <i className="fab fa-behance" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal reveal-delay-3">
              {" "}
              <div className="team-card__img">
                {" "}
                <img src={a12} alt="Josh Dunn" />
                {" "}
              </div>
              {" "}
              <h3>
                Josh Dunn
              </h3>
              {" "}
              <h4>
                Mobile Developer
              </h4>
              {" "}
              <div className="team-card__social">
                {" "}
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
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
      <section className="section testimonials" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header text-center">
            {" "}
            <p>
              Testimonials
            </p>
            {" "}
            <h2>
              What Clients Say
            </h2>
            {" "}
          </div>
          {" "}
          <div className="testimonial-carousel">
            {" "}
            <div className="testimonial-track">
              {" "}
              <div className="testimonial-slide">
                {" "}
                <p className="testimonial-slide__quote">
                  "Working with DevFolio was a game-changer. They took our vague idea and turned it into a stunning, high-performing product. Communication was seamless, and the results exceeded expectations."
                </p>
                {" "}
                <div className="testimonial-slide__author">
                  {" "}
                  <div className="testimonial-slide__avatar">
                    {" "}
                    <img src={a13} alt="Sarah Mitchell" />
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-slide__name">
                      Sarah Mitchell
                    </div>
                    {" "}
                    <div className="testimonial-slide__role">
                      CEO, BrightPath Studios
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <p className="testimonial-slide__quote">
                  "The attention to detail is incredible. Every pixel, every interaction, every animation — it all feels intentional. Our conversion rate jumped 40% after the redesign."
                </p>
                {" "}
                <div className="testimonial-slide__author">
                  {" "}
                  <div className="testimonial-slide__avatar">
                    {" "}
                    <img src={a14} alt="Marcus Chen" />
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-slide__name">
                      Marcus Chen
                    </div>
                    {" "}
                    <div className="testimonial-slide__role">
                      Founder, NomadTrack
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-slide">
                {" "}
                <p className="testimonial-slide__quote">
                  "Not only is the work beautiful, but the code is clean and maintainable. Our dev team was impressed. That's rare for a designer-developer combo. Highly recommend."
                </p>
                {" "}
                <div className="testimonial-slide__author">
                  {" "}
                  <div className="testimonial-slide__avatar">
                    {" "}
                    <img src={a15} alt="Elena Vasquez" />
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-slide__name">
                      Elena Vasquez
                    </div>
                    {" "}
                    <div className="testimonial-slide__role">
                      CTO, Waveform Audio
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
            <div className="testimonial-nav">
              {" "}
              <button className="active" aria-label="Testimonial 1" />
              {" "}
              <button aria-label="Testimonial 2" />
              {" "}
              <button aria-label="Testimonial 3" />
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
      <section className="section" id="blog">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header text-center reveal">
            {" "}
            <p>
              From the Blog
            </p>
            {" "}
            <h2>
              {"Latest "}
              <em>
                Articles
              </em>
            </h2>
            {" "}
          </div>
          {" "}
          <div className="blog__grid">
            {" "}
            <div className="blog-card reveal">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a16} alt="Design systems blog post" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__meta">
                  {" "}
                  <span>
                    <i className="far fa-calendar-alt" />
                    {" Aug 12, 2026"}
                  </span>
                  {" "}
                  <span>
                    <i className="far fa-folder" />
                    {" Design Systems"}
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  <a href="#">
                    Building Design Systems That Scale
                  </a>
                </h3>
                {" "}
                <p>
                  Why your team needs a design system, and how to build one that actually gets used — not just documented and ignored.
                </p>
                {" "}
                <a href="#" className="btn btn--outline" style={{ padding: "10px 20px", fontSize: ".8125rem" }}>
                  {"Read More "}
                  <i className="fas fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="blog-card reveal reveal-delay-1">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a17} alt="Web performance blog post" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <div className="blog-card__meta">
                  {" "}
                  <span>
                    <i className="far fa-calendar-alt" />
                    {" Jul 28, 2026"}
                  </span>
                  {" "}
                  <span>
                    <i className="far fa-folder" />
                    {" Performance"}
                  </span>
                  {" "}
                </div>
                {" "}
                <h3>
                  <a href="#">
                    The Real Cost of Slow Websites
                  </a>
                </h3>
                {" "}
                <p>
                  Every 100ms of latency costs you conversions. Here's a practical guide to making your site blazing fast without rewriting everything.
                </p>
                {" "}
                <a href="#" className="btn btn--outline" style={{ padding: "10px 20px", fontSize: ".8125rem" }}>
                  {"Read More "}
                  <i className="fas fa-arrow-right" />
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
      <section className="contact" id="contact">
        {" "}
        <div className="container">
          {" "}
          <div className="contact__inner">
            {" "}
            <div className="contact__info">
              {" "}
              <h2>
                {"Let's Build Something "}
                <em style={{ color: "var(--color-amber)", fontStyle: "normal" }}>
                  Together
                </em>
              </h2>
              {" "}
              <p>
                Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
              </p>
              {" "}
              <div className="contact__detail">
                {" "}
                <i className="fas fa-envelope" />
                {" "}
                <span>
                  hello@devfolio.com
                </span>
                {" "}
              </div>
              {" "}
              <div className="contact__detail">
                {" "}
                <i className="fas fa-phone" />
                {" "}
                <span>
                  +1 (555) 123-4567
                </span>
                {" "}
              </div>
              {" "}
              <div className="contact__detail">
                {" "}
                <i className="fas fa-map-marker-alt" />
                {" "}
                <span>
                  San Francisco, CA
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="contact__form">
              {" "}
              <h3>
                Send a Message
              </h3>
              {" "}
              <form>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="name">
                      Your Name
                    </label>
                    {" "}
                    <input type="text" id="name" placeholder="Jane Doe" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="form-group">
                    {" "}
                    <label htmlFor="email">
                      Your Email
                    </label>
                    {" "}
                    <input type="email" id="email" placeholder="jane@example.com" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-group">
                  {" "}
                  <label htmlFor="subject">
                    Subject
                  </label>
                  {" "}
                  <input type="text" id="subject" placeholder="Project inquiry" />
                  {" "}
                </div>
                {" "}
                <div className="form-group">
                  {" "}
                  <label htmlFor="message">
                    Message
                  </label>
                  {" "}
                  <textarea id="message" rows="5" placeholder="Tell me about your project..." required={true} />
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                  {"Send Message "}
                  <i className="fas fa-paper-plane" />
                </button>
                {" "}
              </form>
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
              <h3>
                Dev
                <span>
                  Folio
                </span>
              </h3>
              {" "}
              <p>
                Crafting thoughtful digital experiences for clients who care about quality, performance, and people.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github" />
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
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Quick Links
              </h4>
              {" "}
              <a href="index.html">
                Home
              </a>
              {" "}
              <a href="about.html">
                About
              </a>
              {" "}
              <a href="projects.html">
                Projects
              </a>
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <a href="#services">
                UI/UX Design
              </a>
              {" "}
              <a href="#services">
                Web Development
              </a>
              {" "}
              <a href="#services">
                Mobile Apps
              </a>
              {" "}
              <a href="#services">
                Brand Strategy
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer__col">
              {" "}
              <h4>
                Contact
              </h4>
              {" "}
              <a href="mailto:hello@devfolio.com">
                hello@devfolio.com
              </a>
              {" "}
              <a href="tel:+15551234567">
                +1 (555) 123-4567
              </a>
              {" "}
              <a href="#">
                San Francisco, CA
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <p>
              {"© "}
              <span className="year">
                2026
              </span>
              {" DevFolio. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Designed with "}
              <i className="fas fa-heart" style={{ color: "var(--color-amber)" }} />
              {" for freelancers everywhere."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fas fa-chevron-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
