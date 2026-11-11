// Converted from the HTML template creative-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-bg.svg";
import a1 from "./assets/work-01.svg";
import a2 from "./assets/work-02.svg";
import a3 from "./assets/work-03.svg";
import a4 from "./assets/work-04.svg";
import a5 from "./assets/work-05.svg";
import a6 from "./assets/work-06.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-creative-agency-d394">
      {" "}
      {" "}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="nav-inner">
          {" "}
          <a href="index.html" className="nav-logo" aria-label="PIGRA Home">
            PIGRA
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            {" "}
            <span />
            {" "}
            <span />
            {" "}
            <span />
            {" "}
          </button>
          {" "}
          <div className="nav-links">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero" id="home">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="" aria-hidden="true" />
          {" "}
          <div className="hero-overlay" />
          {" "}
        </div>
        {" "}
        <div className="hero-content">
          {" "}
          <div className="hero-badge reveal">
            {" "}
            <span className="hero-badge-dot" />
            {" Creative Agency "}
          </div>
          {" "}
          <h1 className="reveal">
            {" We Make Brands"}
            <br />
            {" "}
            <span className="gradient-text">
              Impossible to Ignore
            </span>
            {" "}
          </h1>
          {" "}
          <p className="hero-sub reveal">
            {" Bold strategy, fearless design, and digital experiences that cut through the noise. PIGRA turns vision into visceral impact. "}
          </p>
          {" "}
          <div className="hero-stats reveal">
            {" "}
            <div>
              {" "}
              <div className="hero-stat-number">
                120+
              </div>
              {" "}
              <div className="hero-stat-label">
                Projects Delivered
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero-stat-number">
                40+
              </div>
              {" "}
              <div className="hero-stat-label">
                Global Clients
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="hero-stat-number">
                98%
              </div>
              {" "}
              <div className="hero-stat-label">
                Client Satisfaction
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
      <section className="section" id="services">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              What We Do
            </div>
            {" "}
            <h2 className="section-title">
              Services That Move the Needle
            </h2>
            {" "}
            <p className="section-desc">
              From strategy to execution, we craft every touchpoint to make your brand impossible to forget.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid reveal-stagger">
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ◆
              </div>
              {" "}
              <h3>
                Brand Strategy
              </h3>
              {" "}
              <p>
                We uncover what makes you singular and build a brand architecture that commands attention in crowded markets.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ◊
              </div>
              {" "}
              <h3>
                Visual Identity
              </h3>
              {" "}
              <p>
                Logos, palettes, typography systems, and guidelines that give your brand a visual language people remember.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ◎
              </div>
              {" "}
              <h3>
                Digital Design
              </h3>
              {" "}
              <p>
                Websites, apps, and interfaces designed to convert. Every pixel is intentional, every interaction is crafted.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ✦
              </div>
              {" "}
              <h3>
                Creative Campaigns
              </h3>
              {" "}
              <p>
                Launches, social, content, and storytelling that sparks conversation and builds cultural relevance.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ★
              </div>
              {" "}
              <h3>
                {"Motion & Video"}
              </h3>
              {" "}
              <p>
                Animation, film, and motion graphics that bring your brand to life with cinematic energy.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card">
              {" "}
              <div className="service-icon">
                ♦
              </div>
              {" "}
              <h3>
                Digital Marketing
              </h3>
              {" "}
              <p>
                Data-driven campaigns that amplify reach, drive engagement, and deliver measurable business outcomes.
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
      <section className="section" id="work">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              Selected Work
            </div>
            {" "}
            <h2 className="section-title">
              Projects That Speak Volumes
            </h2>
            {" "}
            <p className="section-desc">
              A curated look at brands we've helped transform from forgettable to unforgettable.
            </p>
            {" "}
          </div>
          {" "}
          <div className="work-grid reveal-stagger">
            {" "}
            <div className="work-item">
              {" "}
              <img src={a1} alt="Lumina brand redesign project" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  Lumina Redesign
                </h3>
                {" "}
                <span>
                  Brand Identity
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-item">
              {" "}
              <img src={a2} alt="NovaTech digital platform" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  NovaTech Platform
                </h3>
                {" "}
                <span>
                  Web Design
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-item">
              {" "}
              <img src={a3} alt="Solstice marketing campaign" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  Solstice Campaign
                </h3>
                {" "}
                <span>
                  Creative Campaign
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-item">
              {" "}
              <img src={a4} alt="Meridian app design" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  Meridian App
                </h3>
                {" "}
                <span>
                  UI/UX Design
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-item">
              {" "}
              <img src={a5} alt="Vertex rebrand" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  Vertex Rebrand
                </h3>
                {" "}
                <span>
                  Brand Strategy
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="work-item">
              {" "}
              <img src={a6} alt="Zenith motion project" />
              {" "}
              <div className="work-overlay">
                {" "}
                <h3>
                  Zenith Motion
                </h3>
                {" "}
                <span>
                  Motion Design
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
      <section className="section" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header reveal">
            {" "}
            <div className="section-label">
              Client Love
            </div>
            {" "}
            <h2 className="section-title">
              Words From the Brands We've Built
            </h2>
            {" "}
            <p className="section-desc">
              Don't take our word for it. Hear from the founders and teams who trusted us with their vision.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-track reveal-stagger">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-quote">
                {" \"PIGRA didn't just redesign our brand — they redefined how the market sees us. Revenue doubled within six months of launch.\" "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  AK
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Aria Kim
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    CEO, Lumina
                  </div>
                  {" "}
                  <div className="testimonial-stars">
                    ★★★★★
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
              <div className="testimonial-quote">
                {" \"The team at PIGRA brings a rare combination of strategic thinking and raw creative talent. They are our secret weapon.\" "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  MR
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Marcus Reeves
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    Founder, NovaTech
                  </div>
                  {" "}
                  <div className="testimonial-stars">
                    ★★★★★
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
              <div className="testimonial-quote">
                {" \"Working with PIGRA felt like a true partnership. They challenged our assumptions and delivered something far beyond our brief.\" "}
              </div>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  SL
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-name">
                    Sofia Lin
                  </div>
                  {" "}
                  <div className="testimonial-role">
                    CMO, Solstice
                  </div>
                  {" "}
                  <div className="testimonial-stars">
                    ★★★★★
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-banner reveal-scale">
            {" "}
            <h2>
              {"Ready to Make Your Brand "}
              <span className="gradient-text">
                Impossible to Ignore
              </span>
              ?
            </h2>
            {" "}
            <p>
              Let's start a conversation about your next bold move.
            </p>
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
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="nav-logo">
                PIGRA
              </a>
              {" "}
              <p>
                Creative agency dedicated to making brands impossible to ignore. Strategy, design, and digital experiences with impact.
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Pages
              </h4>
              {" "}
              <a href="index.html">
                Home
              </a>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Services
              </h4>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Connect
              </h4>
              {" "}
              <a href="mailto:hello@pagra.agency">
                hello@pagra.agency
              </a>
              {" "}
              <a href="tel:+15551234567">
                +1 (555) 123-4567
              </a>
              {" "}
              <a href="#">
                Instagram
              </a>
              {" "}
              <a href="#">
                Dribbble
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" PIGRA. All rights reserved."}
            </span>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="#" aria-label="Instagram">
                ●
              </a>
              {" "}
              <a href="#" aria-label="Dribbble">
                ●
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                ●
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                ●
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
