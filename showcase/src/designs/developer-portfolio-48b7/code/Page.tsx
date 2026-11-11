// Converted from the HTML template developer-portfolio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/portfolio-1.webp";
import a1 from "./assets/portfolio-2.webp";
import a2 from "./assets/portfolio-3.webp";
import a3 from "./assets/portfolio-4.webp";
import a4 from "./assets/testimonial-1.webp";
import a5 from "./assets/testimonial-2.webp";
import a6 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-developer-portfolio-48b7 scanlines">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="logo">
            <span>
              {"{"}
            </span>
            {" DarkCV "}
            <span>
              {"}"}
            </span>
          </a>
          {" "}
          <nav className="nav-links" id="navLinks">
            {" "}
            <a href="index.html" className="active">
              home
            </a>
            {" "}
            <a href="about.html">
              about
            </a>
            {" "}
            <a href="projects.html">
              projects
            </a>
            {" "}
            <a href="contact.html">
              contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="burger" id="burger" aria-label="Toggle navigation" role="button" tabIndex="0">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" id="hero">
        {" "}
        <div className="container">
          {" "}
          <div className="hero-grid">
            {" "}
            <div className="hero-content">
              {" "}
              <span className="hero-label">
                // full-stack developer
              </span>
              {" "}
              <h1 className="hero-name">
                {" Hi, I'm "}
                <span className="highlight">
                  John Doe
                </span>
                {" "}
              </h1>
              {" "}
              <div className="typing-wrapper" id="typingTarget" />
              {" "}
              <p className="hero-subtitle">
                Crafting performant web experiences with clean code and a developer-first mindset.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="projects.html" className="btn btn-primary">
                  view_projects()
                </a>
                {" "}
                <a href="contact.html" className="btn btn-outline">
                  get_in_touch()
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="terminal-window reveal">
              {" "}
              <div className="terminal-bar">
                {" "}
                <span className="terminal-dot red" />
                {" "}
                <span className="terminal-dot yellow" />
                {" "}
                <span className="terminal-dot green" />
                {" "}
                <span>
                  {"john@darkcv ~ "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="terminal-body">
                {" "}
                <div className="terminal-line">
                  <span className="prompt">
                    $
                  </span>
                  {" "}
                  <span className="cmd">
                    whoami
                  </span>
                </div>
                {" "}
                <div className="terminal-line" style={{ color: "var(--text-primary)" }}>
                  John Doe — Full-Stack Developer
                </div>
                {" "}
                <div className="terminal-line">
                  <span className="prompt">
                    $
                  </span>
                  {" "}
                  <span className="cmd">
                    cat skills.txt
                  </span>
                </div>
                {" "}
                <div className="terminal-line" style={{ color: "var(--text-primary)" }}>
                  JavaScript, React, Node.js, Python, Go
                </div>
                {" "}
                <div className="terminal-line">
                  <span className="prompt">
                    $
                  </span>
                  {" "}
                  <span className="cmd">
                    echo $STATUS
                  </span>
                </div>
                {" "}
                <div className="terminal-line" style={{ color: "var(--accent)" }}>
                  {"Open to opportunities "}
                  <span className="cursor" />
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
          <h2 className="section-title reveal">
            about_me
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // who am I and what do I do?
          </p>
          {" "}
          <div className="about-grid">
            {" "}
            <div className="about-text reveal">
              {" "}
              <p>
                I'm a full-stack developer with over 10 years of experience building web applications, APIs, and developer tools. I specialize in creating performant, accessible, and maintainable software that scales.
              </p>
              {" "}
              <p>
                My approach combines deep technical expertise with a keen eye for design. I believe great software is invisible — it just works, beautifully. When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring new technologies.
              </p>
              {" "}
            </div>
            {" "}
            <div className="about-meta reveal">
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  name:
                </span>
                <span className="value">
                  John Doe
                </span>
              </div>
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  degree:
                </span>
                <span className="value">
                  M.S. Computer Science
                </span>
              </div>
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  experience:
                </span>
                <span className="value">
                  10+ Years
                </span>
              </div>
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  phone:
                </span>
                <span className="value">
                  +1 234 567 890
                </span>
              </div>
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  email:
                </span>
                <span className="value">
                  john@darkcv.dev
                </span>
              </div>
              {" "}
              <div className="about-meta-item">
                <span className="label">
                  freelance:
                </span>
                <span className="value">
                  Available
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="stats-row">
            {" "}
            <div className="stat-card reveal">
              {" "}
              <div className="stat-number" data-target="10">
                0
              </div>
              {" "}
              <div className="stat-label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-card reveal">
              {" "}
              <div className="stat-number" data-target="100">
                0
              </div>
              {" "}
              <div className="stat-label">
                Happy Clients
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat-card reveal">
              {" "}
              <div className="stat-number" data-target="200">
                0
              </div>
              {" "}
              <div className="stat-label">
                Projects Done
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
      <section className="section" id="skills" style={{ background: "var(--bg-secondary)" }}>
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            skills
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // my technical arsenal
          </p>
          {" "}
          <div className="skills-grid">
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  JavaScript / TypeScript
                </span>
                {" "}
                <span className="skill-percent">
                  95%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="95" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  React
                </span>
                {" "}
                <span className="skill-tag">
                  Node.js
                </span>
                {" "}
                <span className="skill-tag">
                  Next.js
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  Python
                </span>
                {" "}
                <span className="skill-percent">
                  90%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="90" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  Django
                </span>
                {" "}
                <span className="skill-tag">
                  FastAPI
                </span>
                {" "}
                <span className="skill-tag">
                  ML/AI
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  Go
                </span>
                {" "}
                <span className="skill-percent">
                  80%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="80" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  Gin
                </span>
                {" "}
                <span className="skill-tag">
                  gRPC
                </span>
                {" "}
                <span className="skill-tag">
                  Microservices
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  DevOps / Cloud
                </span>
                {" "}
                <span className="skill-percent">
                  85%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="85" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  AWS
                </span>
                {" "}
                <span className="skill-tag">
                  Docker
                </span>
                {" "}
                <span className="skill-tag">
                  K8s
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  Databases
                </span>
                {" "}
                <span className="skill-percent">
                  88%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="88" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  PostgreSQL
                </span>
                {" "}
                <span className="skill-tag">
                  MongoDB
                </span>
                {" "}
                <span className="skill-tag">
                  Redis
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="skill-card reveal">
              {" "}
              <div className="skill-card-header">
                {" "}
                <span className="skill-name">
                  Frontend / UI
                </span>
                {" "}
                <span className="skill-percent">
                  92%
                </span>
                {" "}
              </div>
              {" "}
              <div className="skill-bar">
                <div className="skill-bar-fill" data-width="92" />
              </div>
              {" "}
              <div className="skill-tags">
                {" "}
                <span className="skill-tag">
                  HTML/CSS
                </span>
                {" "}
                <span className="skill-tag">
                  Tailwind
                </span>
                {" "}
                <span className="skill-tag">
                  A11y
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
      <section className="section" id="projects">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            projects
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // selected work
          </p>
          {" "}
          <div className="projects-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="project-thumb">
                {" "}
                <img src={a0} alt="Nexus Platform screenshot" loading="lazy" />
                {" "}
                <div className="project-overlay">
                  {" "}
                  <div className="code-snippet">
                    {"const nexus = new Platform({"}
                    <br />
                    {" ai: true,"}
                    <br />
                    {" scale: 'global'"}
                    <br />
                    {"});"}
                  </div>
                  {" "}
                  <div className="links">
                    {" "}
                    <a href="#">
                      <i className="fas fa-external-link-alt" />
                      {" Live"}
                    </a>
                    {" "}
                    <a href="#">
                      <i className="fab fa-github" />
                      {" Code"}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project-info">
                {" "}
                <h3>
                  Nexus Platform
                </h3>
                {" "}
                <p>
                  AI-powered analytics dashboard with real-time data streaming and predictive insights.
                </p>
                {" "}
                <div className="project-tags">
                  {" "}
                  <span>
                    React
                  </span>
                  <span>
                    Node.js
                  </span>
                  <span>
                    TensorFlow
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="project-thumb">
                {" "}
                <img src={a1} alt="Vault API screenshot" loading="lazy" />
                {" "}
                <div className="project-overlay">
                  {" "}
                  <div className="code-snippet">
                    {"func main() {"}
                    <br />
                    {" api := vault.New()"}
                    <br />
                    {" api.Listen(\":8080\")"}
                    <br />
                    {"}"}
                  </div>
                  {" "}
                  <div className="links">
                    {" "}
                    <a href="#">
                      <i className="fas fa-external-link-alt" />
                      {" Live"}
                    </a>
                    {" "}
                    <a href="#">
                      <i className="fab fa-github" />
                      {" Code"}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project-info">
                {" "}
                <h3>
                  Vault API
                </h3>
                {" "}
                <p>
                  High-performance REST API gateway handling 10M+ daily requests with sub-10ms latency.
                </p>
                {" "}
                <div className="project-tags">
                  {" "}
                  <span>
                    Go
                  </span>
                  <span>
                    gRPC
                  </span>
                  <span>
                    Redis
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="project-thumb">
                {" "}
                <img src={a2} alt="Pulse UI screenshot" loading="lazy" />
                {" "}
                <div className="project-overlay">
                  {" "}
                  <div className="code-snippet">
                    @Component
                    <br />
                    {"export class PulseUI {"}
                    <br />
                    {" theme: 'dark'"}
                    <br />
                    {"}"}
                  </div>
                  {" "}
                  <div className="links">
                    {" "}
                    <a href="#">
                      <i className="fas fa-external-link-alt" />
                      {" Live"}
                    </a>
                    {" "}
                    <a href="#">
                      <i className="fab fa-github" />
                      {" Code"}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project-info">
                {" "}
                <h3>
                  Pulse UI Kit
                </h3>
                {" "}
                <p>
                  Open-source component library with 50+ accessible, themeable React components.
                </p>
                {" "}
                <div className="project-tags">
                  {" "}
                  <span>
                    React
                  </span>
                  <span>
                    TypeScript
                  </span>
                  <span>
                    Storybook
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="project-thumb">
                {" "}
                <img src={a3} alt="Forge CLI screenshot" loading="lazy" />
                {" "}
                <div className="project-overlay">
                  {" "}
                  <div className="code-snippet">
                    $ forge init my-app
                    <br />
                    $ forge deploy --prod
                    <br />
                    ✓ Deployed to prod
                  </div>
                  {" "}
                  <div className="links">
                    {" "}
                    <a href="#">
                      <i className="fas fa-external-link-alt" />
                      {" Live"}
                    </a>
                    {" "}
                    <a href="#">
                      <i className="fab fa-github" />
                      {" Code"}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="project-info">
                {" "}
                <h3>
                  Forge CLI
                </h3>
                {" "}
                <p>
                  Developer CLI tool for scaffolding, testing, and deploying full-stack applications.
                </p>
                {" "}
                <div className="project-tags">
                  {" "}
                  <span>
                    Python
                  </span>
                  <span>
                    Click
                  </span>
                  <span>
                    Docker
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
      <section className="section" id="experience" style={{ background: "var(--bg-secondary)" }}>
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            experience
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // where I've worked
          </p>
          {" "}
          <div className="timeline">
            {" "}
            <div className="timeline-item reveal">
              {" "}
              <div className="timeline-date">
                2022 — Present
              </div>
              {" "}
              <h3>
                Senior Full-Stack Engineer
              </h3>
              {" "}
              <div className="company">
                TechCorp Inc.
              </div>
              {" "}
              <p>
                Leading development of a cloud-native SaaS platform serving 500K+ users. Architected microservices migration reducing infrastructure costs by 40%. Mentoring a team of 6 engineers.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline-item reveal">
              {" "}
              <div className="timeline-date">
                2019 — 2022
              </div>
              {" "}
              <h3>
                Full-Stack Developer
              </h3>
              {" "}
              <div className="company">
                InnovateLabs
              </div>
              {" "}
              <p>
                Built and shipped 15+ production features for the core product. Implemented real-time data pipeline processing 2M events/day. Introduced CI/CD practices cutting deploy time by 60%.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline-item reveal">
              {" "}
              <div className="timeline-date">
                2016 — 2019
              </div>
              {" "}
              <h3>
                Frontend Developer
              </h3>
              {" "}
              <div className="company">
                StartupXYZ
              </div>
              {" "}
              <p>
                Developed the company's main web application from prototype to production. Improved Core Web Vitals scores to 95+ across all pages. Built design system adopted by 3 product teams.
              </p>
              {" "}
            </div>
            {" "}
            <div className="timeline-item reveal">
              {" "}
              <div className="timeline-date">
                2014 — 2016
              </div>
              {" "}
              <h3>
                Junior Developer
              </h3>
              {" "}
              <div className="company">
                WebAgency Co.
              </div>
              {" "}
              <p>
                Delivered 20+ client websites and web applications. Gained deep expertise in responsive design, cross-browser compatibility, and performance optimization.
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
      <section className="section" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            testimonials
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // what people say about me
          </p>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="quote-icon">
                "
              </div>
              {" "}
              <blockquote>
                John delivered exceptional work on our platform. His technical expertise and attention to detail resulted in a 40% improvement in page load times. Truly a world-class developer.
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a4} alt="Sarah Chen portrait" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="name">
                    Sarah Chen
                  </div>
                  {" "}
                  <div className="role">
                    CTO, TechCorp Inc.
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="quote-icon">
                "
              </div>
              {" "}
              <blockquote>
                Working with John was a game-changer. He doesn't just write code — he understands the business problem and crafts elegant solutions. Our project came in ahead of schedule.
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a5} alt="Marcus Rivera portrait" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="name">
                    Marcus Rivera
                  </div>
                  {" "}
                  <div className="role">
                    Product Lead, InnovateLabs
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="quote-icon">
                "
              </div>
              {" "}
              <blockquote>
                John's ability to bridge frontend and backend seamlessly is rare. He built our entire design system and API layer. I'd hire him again in a heartbeat.
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <img src={a6} alt="Emily Nakamura portrait" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <div className="name">
                    Emily Nakamura
                  </div>
                  {" "}
                  <div className="role">
                    Founder, StartupXYZ
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
      <section className="section" id="contact" style={{ background: "var(--bg-secondary)" }}>
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            contact
          </h2>
          {" "}
          <p className="section-subtitle reveal">
            // let's build something together
          </p>
          {" "}
          <div className="contact-grid">
            {" "}
            <div className="contact-info reveal">
              {" "}
              <div className="contact-item">
                {" "}
                <div className="contact-icon">
                  <i className="fas fa-terminal" />
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="label">
                    Location
                  </div>
                  {" "}
                  <div className="value">
                    San Francisco, CA
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="contact-item">
                {" "}
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="label">
                    Email
                  </div>
                  {" "}
                  <div className="value">
                    john@darkcv.dev
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="contact-item">
                {" "}
                <div className="contact-icon">
                  <i className="fas fa-code-branch" />
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="label">
                    GitHub
                  </div>
                  {" "}
                  <div className="value">
                    github.com/johndoe
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="contact-item">
                {" "}
                <div className="contact-icon">
                  <i className="fab fa-linkedin-in" />
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="label">
                    LinkedIn
                  </div>
                  {" "}
                  <div className="value">
                    linkedin.com/in/johndoe
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <form className="contact-form reveal" id="contactForm">
              {" "}
              <div className="form-group">
                {" "}
                <label>
                  <span className="prompt-char">
                    $
                  </span>
                  {" name"}
                </label>
                {" "}
                <input type="text" className="form-input" name="name" placeholder="John Doe" required={true} />
                {" "}
              </div>
              {" "}
              <div className="form-group">
                {" "}
                <label>
                  <span className="prompt-char">
                    $
                  </span>
                  {" email"}
                </label>
                {" "}
                <input type="email" className="form-input" name="email" placeholder="john@example.com" required={true} />
                {" "}
              </div>
              {" "}
              <div className="form-group">
                {" "}
                <label>
                  <span className="prompt-char">
                    $
                  </span>
                  {" subject"}
                </label>
                {" "}
                <input type="text" className="form-input" name="subject" placeholder="Project inquiry" />
                {" "}
              </div>
              {" "}
              <div className="form-group">
                {" "}
                <label>
                  <span className="prompt-char">
                    $
                  </span>
                  {" message"}
                </label>
                {" "}
                <textarea className="form-input" name="message" placeholder="Tell me about your project..." required={true} />
                {" "}
              </div>
              {" "}
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                send_message()
              </button>
              {" "}
              <div className="form-status" id="formStatus" />
              {" "}
            </form>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-socials">
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
            <a href="#" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
            {" "}
          </div>
          {" "}
          <div className="footer-links">
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
          <p className="footer-copy">
            {"© "}
            <span id="year" />
            {" DarkCV. Built with terminal-grade precision."}
          </p>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <a href="#hero" className="back-to-top" aria-label="Back to top">
        <i className="fas fa-arrow-up" />
      </a>
      {" "}
      {" "}
    </div>
  );
}
