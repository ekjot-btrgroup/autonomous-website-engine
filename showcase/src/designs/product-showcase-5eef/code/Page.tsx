// Converted from the HTML template product-showcase-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header-bg.webp";
import a1 from "./assets/play.webp";
import a2 from "./assets/product-main.webp";
import a3 from "./assets/product-features.webp";
import a4 from "./assets/poster.webp";
import a5 from "./assets/play-60.webp";
import a6 from "./assets/play-hover-60.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";
import a10 from "./assets/testimonial-4.webp";
import a11 from "./assets/newsletter.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-product-showcase-5eef">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav>
            {" "}
            <a href="index.html" className="nav-logo" aria-label="Craftly home">
              Craft
              <span>
                ly
              </span>
            </a>
            {" "}
            <ul className="nav-links" id="navLinks">
              {" "}
              <li>
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>
              {" "}
              <li>
                <a href="#video" className="nav-link">
                  Demo
                </a>
              </li>
              {" "}
              <li>
                <a href="#testimonials" className="nav-link">
                  Testimonials
                </a>
              </li>
              {" "}
              <li>
                <a href="#newsletter" className="nav-link">
                  Updates
                </a>
              </li>
              {" "}
              <li>
                <a href="#newsletter" className="nav-link nav-cta">
                  Get Started
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
              {" "}
              <span />
              {" "}
              <span />
              {" "}
              <span />
              {" "}
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="page-hero" id="home">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="Craftly product launch background" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <div className="hero-text">
                {" "}
                <span className="hero-badge">
                  <span className="hero-badge-dot" />
                  {" Now in Beta"}
                </span>
                {" "}
                <h1 className="hero-title">
                  {"Craft digital products people "}
                  <span>
                    love to buy
                  </span>
                </h1>
                {" "}
                <p>
                  From templates to courses, Craftly gives you everything you need to showcase, market and sell your digital creations — all from one beautifully simple dashboard.
                </p>
                {" "}
                <div className="hero-cta">
                  {" "}
                  <a href="#newsletter" className="btn btn-primary">
                    Get Started
                  </a>
                  {" "}
                  <a href="#video" className="btn btn-secondary">
                    {" "}
                    <span className="icon">
                      <img src={a1} alt="Play icon" />
                    </span>
                    {" Watch Demo "}
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="hero-stats">
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <h3>
                      12k+
                    </h3>
                    {" "}
                    <p>
                      Creators onboard
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <h3>
                      2.4M
                    </h3>
                    {" "}
                    <p>
                      Products sold
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <h3>
                      4.9/5
                    </h3>
                    {" "}
                    <p>
                      Average rating
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-visual">
                {" "}
                <div className="hero-mockup">
                  {" "}
                  <img src={a2} alt="Craftly product showcase mockup" />
                  {" "}
                  <div className="hero-mockup-float">
                    {" "}
                    <span className="hero-mockup-float-icon">
                      ✓
                    </span>
                    {" "}
                    <p>
                      New sale!
                      <br />
                      <small>
                        Digital pack sold · $49
                      </small>
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
        <section className="section" id="features">
          {" "}
          <div className="container">
            {" "}
            <h2 className="section-title reveal">
              Everything you need to succeed
            </h2>
            {" "}
            <p className="section-subtitle reveal">
              Craftly combines design, marketing and payments into one focused workflow, so you can spend less time on setup and more time creating.
            </p>
            {" "}
            <div className="features-grid">
              {" "}
              <div className="features-image reveal">
                {" "}
                <img src={a3} alt="Craftly feature dashboard overview" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="features-list">
                {" "}
                <div className="feature-item reveal">
                  {" "}
                  <div className="feature-icon feature-icon-indigo">
                    🎨
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Pixel-perfect product pages
                    </h3>
                    {" "}
                    <p>
                      Launch beautiful, conversion-focused pages in minutes with smart templates, custom branding and mobile-first layouts.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="feature-item reveal reveal-delay-1">
                  {" "}
                  <div className="feature-icon feature-icon-coral">
                    📈
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Built-in growth analytics
                    </h3>
                    {" "}
                    <p>
                      Track views, conversions and revenue in real time. Know exactly what your audience loves — and sell more of it.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="feature-item reveal reveal-delay-2">
                  {" "}
                  <div className="feature-icon feature-icon-mint">
                    💳
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Payments that just work
                    </h3>
                    {" "}
                    <p>
                      Accept payments in over 135 countries with instant payouts, automatic tax handling and secure global checkout.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="feature-item reveal reveal-delay-3">
                  {" "}
                  <div className="feature-icon feature-icon-dark">
                    🚀
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Marketing on autopilot
                    </h3>
                    {" "}
                    <p>
                      Build email lists, send campaigns and create referral links — all connected, so every launch performs better than the last.
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
            <div className="features-cards">
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-card-icon feature-icon-indigo">
                  ⚡
                </div>
                {" "}
                <h3>
                  Instant launch
                </h3>
                {" "}
                <p>
                  Go from idea to a live storefront in minutes. No code, no waiting, no headaches.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal reveal-delay-1">
                {" "}
                <div className="feature-card-icon feature-icon-mint">
                  🔒
                </div>
                {" "}
                <h3>
                  Enterprise-grade security
                </h3>
                {" "}
                <p>
                  Your work and your customers' data are protected with bank-level encryption.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal reveal-delay-2">
                {" "}
                <div className="feature-card-icon feature-icon-coral">
                  🌍
                </div>
                {" "}
                <h3>
                  Global reach
                </h3>
                {" "}
                <p>
                  Sell to customers everywhere with localized checkout and multi-currency pricing.
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
        <section className="section video-section" id="video">
          {" "}
          <div className="video-bg">
            {" "}
            <img src={a4} alt="" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="video-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="video-content">
              {" "}
              <button className="video-play-btn" data-video-open="" aria-label="Play product demo video">
                {" "}
                <span className="video-play-ring" />
                {" "}
                <img src={a5} alt="" className="video-play-icon" />
                {" "}
                <img src={a6} alt="Play" className="video-play-icon video-play-hover" />
                {" "}
              </button>
              {" "}
              <h2 className="section-title reveal">
                See Craftly in action
              </h2>
              {" "}
              <p className="section-subtitle reveal">
                A 90-second tour of how creators design, launch and sell with Craftly — from blank canvas to first sale.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section-alt" id="testimonials">
          {" "}
          <div className="container">
            {" "}
            <h2 className="section-title reveal">
              Loved by creators worldwide
            </h2>
            {" "}
            <p className="section-subtitle reveal">
              Join thousands of makers, designers and educators who grow their digital business with Craftly.
            </p>
            {" "}
            <div className="testimonials-grid">
              {" "}
              <div className="testimonial-card reveal">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "Craftly replaced four different tools for me. I launched my design pack in one afternoon and it made more in a week than my old store did in a month."
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a7} alt="Sofia Ramos" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Sofia Ramos
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      UI Designer
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card reveal reveal-delay-1">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "The analytics alone are worth it. I finally understand which products resonate, and my conversion rate has nearly doubled since switching."
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a8} alt="James Carter" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      James Carter
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Course Creator
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card reveal reveal-delay-2">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "Setup took me under ten minutes, and the pages look like they were designed by a professional studio. My customers keep complimenting them."
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a9} alt="Amina Diallo" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Amina Diallo
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      Digital Artist
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="testimonial-card reveal reveal-delay-3">
                {" "}
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p className="testimonial-text">
                  "Payouts arrive on time, support replies in minutes, and the referral program brought me a whole new audience. It just works."
                </p>
                {" "}
                <div className="testimonial-author">
                  {" "}
                  <div className="testimonial-avatar">
                    <img src={a10} alt="Liam O'Brien" loading="lazy" />
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <div className="testimonial-name">
                      Liam O'Brien
                    </div>
                    {" "}
                    <div className="testimonial-role">
                      E-book Author
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
        <section className="section" id="newsletter">
          {" "}
          <div className="container">
            {" "}
            <div className="newsletter-section">
              {" "}
              <div className="newsletter-grid">
                {" "}
                <div className="newsletter-text">
                  {" "}
                  <h2 className="section-title reveal">
                    Stay in the loop
                  </h2>
                  {" "}
                  <p className="section-subtitle reveal">
                    Get product updates, creator tips and exclusive early access — straight to your inbox. No spam, ever.
                  </p>
                  {" "}
                  <form className="newsletter-form" data-form="" noValidate={true}>
                    {" "}
                    <div className="newsletter-form-row">
                      {" "}
                      <label className="sr-only" htmlFor="newsletter-email">
                        Email address
                      </label>
                      {" "}
                      <input className="form-input" id="newsletter-email" type="email" name="email" placeholder="Enter your email" required={true} />
                      {" "}
                      <button className="btn btn-white" type="submit">
                        Subscribe
                      </button>
                      {" "}
                    </div>
                    {" "}
                    <p className="form-ok" role="status">
                      Thanks! Please check your inbox to confirm. ✨
                    </p>
                    {" "}
                    <p className="form-err" role="alert">
                      Please enter a valid email address.
                    </p>
                    {" "}
                  </form>
                  {" "}
                </div>
                {" "}
                <div className="newsletter-image reveal reveal-delay-1">
                  {" "}
                  <img src={a11} alt="Craftly newsletter illustration" loading="lazy" />
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
      </main>
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
                Craft
                <span>
                  ly
                </span>
              </a>
              {" "}
              <p>
                The all-in-one platform to design, market and sell your digital products. Launch something great today.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Twitter">
                  <span>
                    𝕏
                  </span>
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  ▶
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Product
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#features">
                    Features
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#video">
                    Demo
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#newsletter">
                    Pricing
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#newsletter">
                    Changelog
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Resources
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    Creator guides
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Help center
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    API docs
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Community
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="#">
                    About
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Careers
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Contact
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Craftly. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Designed by "}
              <a href="https://uiuxlabz.com">
                uiuxlabz
              </a>
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
        ↑
      </button>
      {" "}
      {" "}
      <div className="video-modal" role="dialog" aria-modal="true" aria-label="Product demo video">
        {" "}
        <div className="video-modal-content">
          {" "}
          <button className="video-modal-close" aria-label="Close video">
            ×
          </button>
          {" "}
          <div className="video-modal-placeholder">
            Your product demo video plays here 🎬
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
    </div>
  );
}
