// Converted from the HTML template app-landing-page-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header-bg.webp";
import a1 from "./assets/screenshot-1.webp";
import a2 from "./assets/screenshot-2.webp";
import a3 from "./assets/screenshot-3.webp";
import a4 from "./assets/screenshot-4.webp";
import a5 from "./assets/screenshot-5.webp";
import a6 from "./assets/app-landing-page.webp";
import a7 from "./assets/feature.webp";
import a8 from "./assets/testimonial-1.webp";
import a9 from "./assets/testimonial-2.webp";
import a10 from "./assets/testimonial-3.webp";
import a11 from "./assets/testimonial-4.webp";
import a12 from "./assets/app-1.webp";
import a13 from "./assets/app-2.webp";
import a14 from "./assets/logo.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-app-landing-page-256b">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              VitalApp
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="#features" className="nav-link">
                Features
              </a>
              {" "}
              <a href="#why" className="nav-link">
                Why VitalApp
              </a>
              {" "}
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
              {" "}
              <a href="#download" className="nav-link nav-cta">
                Get the App
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              {" "}
              <span />
              <span />
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
      {" "}
      <section className="hero" id="home">
        {" "}
        <div className="container">
          {" "}
          <div className="hero-grid">
            {" "}
            {" "}
            <div className="hero-content">
              {" "}
              <div className="hero-eyebrow">
                Your daily health companion
              </div>
              {" "}
              <h1>
                {" Take charge of your "}
                <span className="text-gradient">
                  {"health & fitness"}
                </span>
                {", every day "}
              </h1>
              {" "}
              <p className="hero-lead">
                {" VitalApp combines personalised workouts, smart meal tracking and real-time insights — so you can reach your goals faster and keep them for life. "}
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a href="#download" className="btn btn-primary">
                  Start Free Today
                </a>
                {" "}
                <a href="#features" className="btn btn-outline">
                  {" "}
                  <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" aria-hidden="true">
                    <path d="M66 38L20 10a4 4 0 00-6 3v54a4 4 0 006 3l46-28a4 4 0 000-7z" />
                  </svg>
                  {" Watch Demo "}
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-badges">
                {" "}
                <span className="hero-badges-label">
                  Coming soon on
                </span>
                {" "}
                <div className="badge-row">
                  {" "}
                  <a href="#" className="badge" aria-label="Download on the App Store">
                    {" "}
                    <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    {" "}
                    <div>
                      {" "}
                      <small>
                        Download on the
                      </small>
                      {" "}
                      <strong>
                        App Store
                      </strong>
                      {" "}
                    </div>
                    {" "}
                  </a>
                  {" "}
                  <a href="#" className="badge" aria-label="Get it on Google Play">
                    {" "}
                    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    {" "}
                    <div>
                      {" "}
                      <small>
                        Get it on
                      </small>
                      {" "}
                      <strong>
                        Google Play
                      </strong>
                      {" "}
                    </div>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-rating">
                {" "}
                <div className="hero-rating-stars" aria-label="4.9 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p>
                  {" "}
                  <strong>
                    4.9
                  </strong>
                  {" average rating · "}
                  <strong>
                    50K+
                  </strong>
                  {" active users "}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="hero-mockup-wrap">
              {" "}
              <div className="hero-mockup">
                {" "}
                <img src={a1} alt="VitalApp workout dashboard on phone screen" loading="eager" />
                {" "}
              </div>
              {" "}
              {" "}
              <div className="float-chip float-chip--1">
                {" "}
                <div className="float-chip-icon" style={{ background: "#EDE9FE", color: "#7C3AED" }}>
                  🔥
                </div>
                {" "}
                <div>
                  {" "}
                  <strong>
                    2,450
                  </strong>
                  {" "}
                  <span>
                    kcal burned today
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="float-chip float-chip--2">
                {" "}
                <div className="float-chip-icon" style={{ background: "#CCFBF1", color: "#0D9488" }}>
                  👣
                </div>
                {" "}
                <div>
                  {" "}
                  <strong>
                    12,340
                  </strong>
                  {" "}
                  <span>
                    steps taken
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="float-chip float-chip--3">
                {" "}
                <div className="float-chip-icon" style={{ background: "#FEF3C7", color: "#D97706" }}>
                  🏆
                </div>
                {" "}
                <div>
                  {" "}
                  <strong>
                    Day 27
                  </strong>
                  {" "}
                  <span>
                    streak active
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
          <div className="hero-stats">
            {" "}
            <div className="hero-stat">
              {" "}
              <h3>
                50
                <span>
                  K+
                </span>
              </h3>
              {" "}
              <p>
                Active users
              </p>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <h3>
                4.9
                <span>
                  ★
                </span>
              </h3>
              {" "}
              <p>
                Average rating
              </p>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <h3>
                120
                <span>
                  M+
                </span>
              </h3>
              {" "}
              <p>
                Calories tracked
              </p>
              {" "}
            </div>
            {" "}
            <div className="hero-stat">
              {" "}
              <h3>
                15
                <span>
                  min
                </span>
              </h3>
              {" "}
              <p>
                Avg. daily workout
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
      <section className="section section--light" id="features">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div className="section-eyebrow">
              App Features
            </div>
            {" "}
            <h2 className="section-title">
              Everything you need to feel your best
            </h2>
            {" "}
            <p className="section-sub">
              {" From adaptive workouts to smart nutrition logging — VitalApp is your complete wellness toolkit. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid">
            {" "}
            {" "}
            <div className="feature-card feature-card--wide reveal">
              {" "}
              <div>
                {" "}
                <div className="feature-icon-badge">
                  🏋️
                </div>
                {" "}
                <h3>
                  Personalised Workouts
                </h3>
                {" "}
                <p>
                  {" Adaptive training plans that adjust to your level, schedule and progress — from quick 15-minute HIIT sessions to full strength routines. AI-powered form feedback keeps you moving safely. "}
                </p>
                {" "}
                <span className="feature-tag">
                  Learn more →
                </span>
                {" "}
              </div>
              {" "}
              <img src={a1} alt="VitalApp personalised workout screen" className="features-icon" loading="lazy" />
              {" "}
            </div>
            {" "}
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon-badge">
                🥗
              </div>
              {" "}
              <img src={a2} alt="VitalApp meal tracking screen" className="features-icon features-icon--sm" loading="lazy" />
              {" "}
              <h3>
                Smart Meal Tracking
              </h3>
              {" "}
              <p>
                {" Log meals with a photo, scan barcodes, or search our database. Automatic macro breakdown with personalised calorie goals. "}
              </p>
              {" "}
              <span className="feature-tag">
                Track meals →
              </span>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon-badge">
                📊
              </div>
              {" "}
              <img src={a3} alt="VitalApp progress analytics chart" className="features-icon features-icon--sm" loading="lazy" />
              {" "}
              <h3>
                {"Progress & Analytics"}
              </h3>
              {" "}
              <p>
                {" Beautiful charts that show your weight, body fat, step count and nutrient trends. Celebrate every milestone with streak badges. "}
              </p>
              {" "}
              <span className="feature-tag">
                View insights →
              </span>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon-badge">
                💧
              </div>
              {" "}
              <img src={a4} alt="VitalApp hydration reminder screen" className="features-icon features-icon--sm" loading="lazy" />
              {" "}
              <h3>
                {"Hydration & Habit Reminders"}
              </h3>
              {" "}
              <p>
                {" Smart nudges for water, movement breaks and mindfulness — timed to your daily routine so you stay on track effortlessly. "}
              </p>
              {" "}
              <span className="feature-tag">
                Build habits →
              </span>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon-badge">
                😴
              </div>
              {" "}
              <img src={a5} alt="VitalApp sleep and recovery insights" className="features-icon features-icon--sm" loading="lazy" />
              {" "}
              <h3>
                {"Sleep & Recovery Insights"}
              </h3>
              {" "}
              <p>
                {" Understand your sleep patterns, HRV and recovery score. Get personalised recommendations for optimal rest and performance. "}
              </p>
              {" "}
              <span className="feature-tag">
                Improve sleep →
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
      <section className="section section--white" id="why">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div className="section-eyebrow section-eyebrow--teal">
              Why Choose Us
            </div>
            {" "}
            <h2 className="section-title">
              One app. Your entire wellbeing.
            </h2>
            {" "}
            <p className="section-sub">
              {" VitalApp brings together every dimension of health into a single, beautiful experience. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="why-grid">
            {" "}
            <div className="why-visual">
              {" "}
              <div className="why-dashboard">
                {" "}
                <img src={a6} alt="VitalApp dashboard on a tablet" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="why-phone">
                {" "}
                <img src={a7} alt="VitalApp feature details on phone" loading="lazy" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="why-head">
                {" "}
                <h3 style={{ fontSize: "1.45rem", marginBottom: "12px" }}>
                  {" Built by health experts, designed for real life "}
                </h3>
                {" "}
                <p className="section-sub" style={{ fontSize: "0.98rem", maxWidth: "480px" }}>
                  {" Every feature is grounded in sports science and nutrition research, wrapped in an interface you will actually enjoy using. "}
                </p>
                {" "}
              </div>
              {" "}
              <div className="why-list">
                {" "}
                <div className="why-item">
                  {" "}
                  <div className="why-item-icon">
                    🎯
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      AI-powered personalisation
                    </h3>
                    {" "}
                    <p>
                      Your plan adapts as you progress — no two users get the same experience.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="why-item">
                  {" "}
                  <div className="why-item-icon">
                    🔗
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      {"Wearable & app sync"}
                    </h3>
                    {" "}
                    <p>
                      Connect Apple Watch, Fitbit, Garmin, Apple Health and Google Fit for seamless data.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="why-item">
                  {" "}
                  <div className="why-item-icon">
                    🤝
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Community challenges
                    </h3>
                    {" "}
                    <p>
                      Join group goals, share achievements and stay motivated together.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="why-item">
                  {" "}
                  <div className="why-item-icon">
                    🔒
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Privacy-first design
                    </h3>
                    {" "}
                    <p>
                      Your health data stays yours. End-to-end encryption and GDPR compliant.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a href="#download" className="btn btn-primary">
                Get Started Free
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
      <section className="section section--light" id="testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head">
            {" "}
            <div className="section-eyebrow">
              Testimonials
            </div>
            {" "}
            <h2 className="section-title">
              Loved by thousands
            </h2>
            {" "}
            <p className="section-sub">
              {" Hear from real users who transformed their health with VitalApp. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                {" “VitalApp completely changed how I approach my fitness. The personalised workouts fit perfectly into my busy schedule, and the meal tracking is so easy I actually stick with it.” "}
              </blockquote>
              {" "}
              <div className="testimonial-person">
                {" "}
                <img src={a8} alt="Sarah Martinez" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Sarah Martinez
                  </strong>
                  {" "}
                  <span>
                    Yoga instructor
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                {" “Training for my first marathon felt overwhelming until I found VitalApp. The adaptive plans and recovery insights kept me injury-free and ready on race day.” "}
              </blockquote>
              {" "}
              <div className="testimonial-person">
                {" "}
                <img src={a9} alt="James Kim" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    James Kim
                  </strong>
                  {" "}
                  <span>
                    Marathon runner
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                {" “After having my baby, I struggled to find time for myself. VitalApp's quick 15-minute workouts and gentle habit reminders helped me rebuild my routine.” "}
              </blockquote>
              {" "}
              <div className="testimonial-person">
                {" "}
                <img src={a10} alt="Priya Rathore" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    Priya Rathore
                  </strong>
                  {" "}
                  <span>
                    New mom
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                {" “The analytics alone are worth it. I can see exactly how my sleep, nutrition and training correlate. It is like having a personal coach in my pocket.” "}
              </blockquote>
              {" "}
              <div className="testimonial-person">
                {" "}
                <img src={a11} alt="David Lowe" loading="lazy" />
                {" "}
                <div>
                  {" "}
                  <strong>
                    David Lowe
                  </strong>
                  {" "}
                  <span>
                    Software engineer
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
      <section className="section download" id="download">
        {" "}
        <div className="container">
          {" "}
          <div className="download-grid">
            {" "}
            {" "}
            <div className="download-phones" style={{ justifyContent: "flex-end" }}>
              {" "}
              <div className="download-phone" style={{ transform: "rotate(-4deg) translateY(10px)" }}>
                {" "}
                <img src={a12} alt="VitalApp on phone screen" loading="lazy" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="download-content">
              {" "}
              <div className="download-eyebrow">
                Get Started Today
              </div>
              {" "}
              <h2>
                Start your 14-day free trial
              </h2>
              {" "}
              <p>
                {" Join over 50,000 people who have transformed their health. No credit card required. Cancel anytime. "}
              </p>
              {" "}
              <div className="badge-row">
                {" "}
                <a href="#" className="badge" aria-label="Download on the App Store">
                  {" "}
                  <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  {" "}
                  <div>
                    {" "}
                    <small>
                      Download on the
                    </small>
                    {" "}
                    <strong>
                      App Store
                    </strong>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <a href="#" className="badge" aria-label="Get it on Google Play">
                  {" "}
                  <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  {" "}
                  <div>
                    {" "}
                    <small>
                      Get it on
                    </small>
                    {" "}
                    <strong>
                      Google Play
                    </strong>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <form className="newsletter" data-form="" noValidate={true}>
                {" "}
                <p className="newsletter-title">
                  {"Want tips & updates?"}
                </p>
                {" "}
                <p className="newsletter-sub">
                  Get our weekly wellness newsletter straight to your inbox.
                </p>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="form-group">
                    {" "}
                    <input type="email" className="form-input" placeholder="Enter your email" required={true} aria-label="Email address" />
                    {" "}
                  </div>
                  {" "}
                  <button type="submit" className="btn btn-light" style={{ padding: "13px 22px" }}>
                    Subscribe
                  </button>
                  {" "}
                </div>
                {" "}
                <div className="form-ok">
                  Thanks! You're subscribed.
                </div>
                {" "}
                <div className="form-err">
                  Please enter a valid email address.
                </div>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="download-phones" style={{ justifyContent: "flex-start" }}>
              {" "}
              <div className="download-phone" style={{ transform: "rotate(4deg) translateY(10px)" }}>
                {" "}
                <img src={a13} alt="VitalApp on phone screen" loading="lazy" />
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            {" "}
            <div className="footer-brand">
              {" "}
              <img src={a14} alt="VitalApp logo" className="footer-logo-img" loading="lazy" />
              {" "}
              <p>
                {" Your all-in-one mobile fitness & diet companion. Move more. Eat better. Live vital. "}
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Instagram">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-47.2 224.5c-7.8 19.6-23.1 34.9-42.7 42.7-29.5 11.7-99.5 9-132.6 9s-103.1 2.7-132.6-9c-19.6-7.8-34.9-23.1-42.7-42.7-11.7-29.5-9-99.5-9-132.6s-2.7-103.1 9-132.6c7.8-19.6 23.1-34.9 42.7-42.7 29.5-11.7 99.5-9 132.6-9s103.1-2.7 132.6 9c19.6 7.8 34.9 23.1 42.7 42.7 11.7 29.5 9 99.5 9 132.6s2.7 103.1-9 132.6z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="Twitter / X">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C458.8 64 288 64 288 64S117.2 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C14.8 166.4 14.8 256 14.8 256s0 89.6 11.5 131.9c6.3 23.7 24.9 42.3 48.6 48.6C117.2 448 288 448 288 448s170.8 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6 11.5-42.3 11.5-131.9 11.5-131.9s0-89.6-11.5-131.9zM232.3 337.6V174.4l142.7 81.6-142.7 81.6z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4>
                Explore
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#features">
                    Features
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#why">
                    Why VitalApp
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#testimonials">
                    Testimonials
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#download">
                    Download
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="#">
                    About
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
                    Careers
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Press Kit
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            {" "}
            <div>
              {" "}
              <h4>
                Contact
              </h4>
              {" "}
              <div className="contact-info">
                {" "}
                <div className="contact-item">
                  {" "}
                  <div className="contact-item-icon">
                    ✉
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <span className="contact-item-label">
                      Email
                    </span>
                    {" "}
                    <span className="contact-item-text">
                      hello@vitalapp.com
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact-item">
                  {" "}
                  <div className="contact-item-icon">
                    📍
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <span className="contact-item-label">
                      Location
                    </span>
                    {" "}
                    <span className="contact-item-text">
                      San Francisco, CA
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="contact-item">
                  {" "}
                  <div className="contact-item-icon">
                    🕐
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <span className="contact-item-label">
                      Support hours
                    </span>
                    {" "}
                    <span className="contact-item-text">
                      Mon–Fri, 9am–6pm PT
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
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" VitalApp. All rights reserved."}
            </span>
            {" "}
            <span>
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" · "}
              <a href="#">
                Terms of Service
              </a>
              {" "}
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
        ↑
      </button>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
