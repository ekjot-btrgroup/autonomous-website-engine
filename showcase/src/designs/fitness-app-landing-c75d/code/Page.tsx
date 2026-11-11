// Converted from the HTML template fitness-app-landing-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/header-bg.webp";
import a1 from "./assets/app-store.webp";
import a2 from "./assets/google-play.webp";
import a3 from "./assets/mobile.webp";
import a4 from "./assets/fitness.webp";
import a5 from "./assets/about.webp";
import a6 from "./assets/subscribe-bg.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-fitness-app-landing-c75d">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav aria-label="Primary navigation">
            {" "}
            <a href="index.html" className="nav-logo" aria-label="PulseFit home">
              {" "}
              <span className="logo-mark">
                ⚡
              </span>
              Pulse
              <em>
                Fit
              </em>
              {" "}
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="#workouts" className="nav-link">
                Workouts
              </a>
              {" "}
              <a href="#about" className="nav-link">
                About
              </a>
              {" "}
              <a href="#download" className="nav-link">
                Download
              </a>
              {" "}
              <a href="#download" className="btn btn--primary btn--sm nav-cta">
                Start Free
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
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
        <section className="hero" id="top">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a0} alt="Athlete training with PulseFit workout app" />
            {" "}
          </div>
          {" "}
          <div className="hero-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <div className="hero-copy">
                {" "}
                <p className="hero-kicker">
                  Train Smarter · Every Day
                </p>
                {" "}
                <h1 className="hero-title">
                  {"Push Your "}
                  <span>
                    Limits
                  </span>
                  <br />
                  {"Build Your "}
                  <span className="lime">
                    Best Body
                  </span>
                </h1>
                {" "}
                <p className="hero-sub">
                  {" PulseFit pairs expert-designed workout plans with real-time tracking, so every rep, set, and step moves you closer to your goal. Download and start training in minutes. "}
                </p>
                {" "}
                <div className="hero-actions">
                  {" "}
                  <a href="#download" className="btn btn--primary btn--lg">
                    Download the App
                  </a>
                  {" "}
                  <a href="#about" className="btn btn--outline btn--lg">
                    Why PulseFit
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="hero-badges">
                  {" "}
                  <a href="#download" className="store-badge" aria-label="Download on the App Store">
                    {" "}
                    <img src={a1} alt="Download on the App Store" />
                    {" "}
                  </a>
                  {" "}
                  <a href="#download" className="store-badge" aria-label="Get it on Google Play">
                    {" "}
                    <img src={a2} alt="Get it on Google Play" />
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="hero-stats">
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <strong>
                      2M
                      <em>
                        +
                      </em>
                    </strong>
                    {" "}
                    <span>
                      Active Users
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <strong>
                      500
                      <em>
                        +
                      </em>
                    </strong>
                    {" "}
                    <span>
                      Workouts
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-stat">
                    {" "}
                    <strong>
                      4.9
                      <em>
                        ★
                      </em>
                    </strong>
                    {" "}
                    <span>
                      App Rating
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-mockup reveal">
                {" "}
                <span className="hero-pulse hero-pulse--top">
                  🏆 New Personal Best
                </span>
                {" "}
                <img className="phone" src={a3} alt="PulseFit app running on a smartphone" />
                {" "}
                <span className="hero-pulse hero-pulse--bottom">
                  🔥 480 Cal Burned
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
        <section className="section section--deep" id="workouts">
          {" "}
          <div className="container">
            {" "}
            <div className="features-grid">
              {" "}
              <div className="features-visual reveal">
                {" "}
                <img src={a4} alt="Woman doing an intense strength workout" loading="lazy" />
                {" "}
                <span className="visual-tag">
                  {"Plan · "}
                  <em>
                    Train
                  </em>
                  {" · Progress"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="features-content">
                {" "}
                <div className="section-head">
                  {" "}
                  <p className="section-kicker">
                    Everything You Need
                  </p>
                  {" "}
                  <h2 className="section-title">
                    {"One App. "}
                    <span>
                      Total
                    </span>
                    {" Transformation"}
                  </h2>
                  {" "}
                  <p className="section-lead">
                    {" From beginner to beast — PulseFit builds your training around you, then tracks every milestone so you never guess what comes next. "}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="features-list">
                  {" "}
                  <div className="feature-card">
                    {" "}
                    <div className="feature-card__icon">
                      {" "}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 1 1-9-9" />
                        <path d="M21 3v6h-6" />
                      </svg>
                      {" "}
                    </div>
                    {" "}
                    <h4>
                      Smart Plans
                    </h4>
                    {" "}
                    <p>
                      Adaptive programs that evolve with your strength and schedule.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="feature-card">
                    {" "}
                    <div className="feature-card__icon">
                      {" "}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V10" />
                        <path d="M18 20V4" />
                        <path d="M6 20v-4" />
                      </svg>
                      {" "}
                    </div>
                    {" "}
                    <h4>
                      Live Tracking
                    </h4>
                    {" "}
                    <p>
                      Reps, sets, calories, and heart rate — captured in real time.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="feature-card">
                    {" "}
                    <div className="feature-card__icon">
                      {" "}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {" "}
                    </div>
                    {" "}
                    <h4>
                      Expert Coaches
                    </h4>
                    {" "}
                    <p>
                      Guidance from certified trainers, right inside your pocket.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="feature-card">
                    {" "}
                    <div className="feature-card__icon">
                      {" "}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M7 14l4-4 3 3 5-6" />
                      </svg>
                      {" "}
                    </div>
                    {" "}
                    <h4>
                      Real Progress
                    </h4>
                    {" "}
                    <p>
                      Weekly insights and streaks that keep you accountable.
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
        <section className="section section--alt" id="about">
          {" "}
          <div className="container">
            {" "}
            <div className="about-grid">
              {" "}
              <div className="about-image reveal">
                {" "}
                <img src={a5} alt="Confident athlete ready for a workout" loading="lazy" />
                {" "}
                <span className="about-frame" aria-hidden="true" />
                {" "}
              </div>
              {" "}
              <div className="about-content reveal">
                {" "}
                <p className="section-kicker">
                  Why PulseFit
                </p>
                {" "}
                <h2 className="section-title">
                  Your Coach. Your Plan.
                  <br />
                  <span>
                    Your Results.
                  </span>
                </h2>
                {" "}
                <p>
                  {" We believe every body deserves a plan built around it. PulseFit combines science-backed training methods with the motivation you need to show up — and the data to prove it's working. "}
                </p>
                {" "}
                <ul className="about-points">
                  {" "}
                  <li>
                    {" "}
                    <span className="point-icon">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {" "}
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <strong>
                        Personalized Training
                      </strong>
                      {" "}
                      <p>
                        Plans tailored to your goals, fitness level, and available equipment.
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <span className="point-icon">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {" "}
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <strong>
                        Train Anywhere
                      </strong>
                      {" "}
                      <p>
                        Home, gym, or on the road — every workout adapts to your space.
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </li>
                  {" "}
                  <li>
                    {" "}
                    <span className="point-icon">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {" "}
                    </span>
                    {" "}
                    <div>
                      {" "}
                      <strong>
                        Built-In Community
                      </strong>
                      {" "}
                      <p>
                        Challenge friends, share streaks, and celebrate every milestone.
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="about-meta">
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      120
                      <em>
                        K
                      </em>
                    </strong>
                    {" "}
                    <span>
                      Workouts / Day
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      94
                      <em>
                        %
                      </em>
                    </strong>
                    {" "}
                    <span>
                      Hit Their Goal
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
        <section className="section subscribe" id="download">
          {" "}
          <div className="subscribe-bg">
            {" "}
            <img src={a6} alt="" aria-hidden="true" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="subscribe-overlay" />
          {" "}
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <p className="section-kicker">
                Get Started Today
              </p>
              {" "}
              <h2 className="section-title">
                {"Ready to "}
                <span className="lime">
                  Train
                </span>
                ?
              </h2>
              {" "}
              <p className="section-lead">
                {" Drop your email for a free 7-day Premium trial plus weekly workout tips straight to your inbox. No spam — just gains. "}
              </p>
              {" "}
            </div>
            {" "}
            <form className="form" data-form="" noValidate={true}>
              {" "}
              <div className="form-row">
                {" "}
                <div className="form-group">
                  {" "}
                  <label className="form-label visually-hidden" htmlFor="subscribe-email">
                    Email address
                  </label>
                  {" "}
                  <input className="form-input" id="subscribe-email" type="email" name="email" placeholder="Enter your email address" autoComplete="email" required={true} />
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn--primary btn--lg">
                  Claim Free Trial
                </button>
                {" "}
              </div>
              {" "}
              <p className="form-ok" role="status">
                You're in! Check your inbox to activate your free trial. 💪
              </p>
              {" "}
              <p className="form-err" role="alert">
                Please enter your email address to continue.
              </p>
              {" "}
            </form>
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
            <div className="footer-col">
              {" "}
              <a href="index.html" className="nav-logo footer-logo" aria-label="PulseFit home">
                {" "}
                <span className="logo-mark">
                  ⚡
                </span>
                Pulse
                <em>
                  Fit
                </em>
                {" "}
              </a>
              {" "}
              <p className="footer-about">
                {" The workout & training app that adapts to you. Train smarter, track everything, and build the strongest version of yourself. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h5>
                Explore
              </h5>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#workouts">
                    Workouts
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#about">
                    About
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
            <div className="footer-col">
              {" "}
              <h5>
                Get the App
              </h5>
              {" "}
              <div className="footer-badges">
                {" "}
                <a href="#download" className="store-badge" aria-label="Download on the App Store">
                  {" "}
                  <img src={a1} alt="Download on the App Store" loading="lazy" />
                  {" "}
                </a>
                {" "}
                <a href="#download" className="store-badge" aria-label="Get it on Google Play">
                  {" "}
                  <img src={a2} alt="Get it on Google Play" loading="lazy" />
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="" />
              {" PulseFit. All rights reserved."}
            </p>
            {" "}
            <p>
              {"Made with "}
              <span aria-hidden="true">
                💛
              </span>
              {" by "}
              <a href="https://tally.so/r/q4q1L9" rel="noopener" target="_blank">
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
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
