// Converted from the HTML template weight-loss-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/free-weight-loss-landing-page.webp";
import a1 from "./assets/header.webp";
import a2 from "./assets/doctor-say-1.webp";
import a3 from "./assets/doctor-say-2.webp";
import a4 from "./assets/doctor-say-3.webp";
import a5 from "./assets/product.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-weight-loss-d5a0">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="brand" aria-label="SlimShift home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                {" "}
                <path d="M23 6c-7 0-12 4.5-12 11.5C11 22 14 26 18 26c6.5 0 11-6 11-12C29 10 27 6 23 6Z" />
                {" "}
                <path d="M6 13c2.5 0 4 1.5 4 4 0-3.5-1.5-6-4-7Z" opacity=".85" />
                {" "}
              </svg>
              {" "}
            </span>
            {" "}
            <span className="brand-name">
              Slim
              <span>
                Shift
              </span>
            </span>
            {" "}
          </a>
          {" "}
          <nav className="nav" aria-label="Primary">
            {" "}
            <button className="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
            <ul className="nav-links" id="nav-links">
              {" "}
              <li>
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="#program">
                  Program
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="#how">
                  How It Works
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="#results">
                  Results
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="#stories">
                  Stories
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <a href="#contact" className="btn btn--accent header-cta">
            Start Free
          </a>
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
          <div className="container hero-inner">
            {" "}
            <div className="hero-copy reveal">
              {" "}
              <p className="eyebrow">
                <span className="eyebrow-star" aria-hidden="true">
                  ★
                </span>
                {" Rated 4.9/5 by 40,000+ members"}
              </p>
              {" "}
              <h1>
                Lose the weight.
                <br />
                <em>
                  Keep the energy.
                </em>
              </h1>
              {" "}
              <p className="lede">
                SlimShift pairs evidence-based nutrition with daily habit coaching — so you drop pounds for good, without crash diets, shakes, or guilt.
              </p>
              {" "}
              <div className="hero-cta">
                {" "}
                <a href="#pricing" className="btn btn--primary">
                  Start Your Shift
                </a>
                {" "}
                <a href="#how" className="btn btn--ghost">
                  See How It Works
                </a>
                {" "}
              </div>
              {" "}
              <ul className="hero-stats">
                {" "}
                <li>
                  <strong>
                    1.8 lb
                  </strong>
                  <span>
                    avg. lost per week
                  </span>
                </li>
                {" "}
                <li>
                  <strong>
                    92%
                  </strong>
                  <span>
                    keep it off at 12 months
                  </span>
                </li>
                {" "}
                <li>
                  <strong>
                    40k+
                  </strong>
                  <span>
                    members transformed
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
              <p className="hero-note">
                {" "}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {" "}
                  <path d="M12 3l2.7 5.5L21 9.3l-4.4 4.3 1 6.1L12 16.9 6.4 19.7l1-6.1L3 9.3l6.3-.8L12 3Z" />
                  {" "}
                </svg>
                {" Backed by 14+ years of clinical research. No crash diets, no pills, no guilt. "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="hero-visual reveal">
              {" "}
              <div className="hero-bg" aria-hidden="true">
                {" "}
                <img className="active" src={a0} alt="" />
                {" "}
                <img src={a1} alt="" />
                {" "}
              </div>
              {" "}
              <div className="hero-chip hero-chip--a">
                {" "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m13 2-8.5 11.5H11L9.5 22 19 9.5h-6.5L13 2Z" />
                </svg>
                {" avg −1.8 lb / week "}
              </div>
              {" "}
              <div className="hero-chip hero-chip--b">
                {" "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {" 92% keep it off "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="marquee" aria-hidden="true">
          {" "}
          <div className="marquee-track">
            {" "}
            <span>
              No Crash Diets
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Science-Backed Plans
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Daily Coach Check-ins
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Whole-Food Nutrition
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Sustainable Habits
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Lifelong Energy
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              No Crash Diets
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Science-Backed Plans
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Daily Coach Check-ins
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Whole-Food Nutrition
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Sustainable Habits
            </span>
            <span>
              ✦
            </span>
            {" "}
            <span>
              Lifelong Energy
            </span>
            <span>
              ✦
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section program" id="program">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                The SlimShift Program
              </p>
              {" "}
              <h2>
                Everything your body needs
                <br />
                to change for good
              </h2>
              {" "}
              <p className="section-sub">
                Six interlocking pillars, tuned to your body and your life. No two plans look alike — because no two bodies do.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7h16M4 12h10M4 17h7" />
                    <circle cx="18" cy="17" r="3" />
                    <path d="m17 17 1.5 1.5L20.5 16" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Personal Meal Blueprint
                </h3>
                {" "}
                <p>
                  A flexible eating plan built around your tastes, budget, and schedule. Nothing is banned — everything is balanced.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2Z" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Smart Movement
                </h3>
                {" "}
                <p>
                  Short, effective sessions of 15–30 minutes that fit real life — burning fat while protecting the muscle that keeps your metabolism humming.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Daily Habit Coaching
                </h3>
                {" "}
                <p>
                  Micro-habits and gentle nudges that quietly rewire your routines — one day, one small win at a time.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 3 3 5-6" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Weekly Check-ins
                </h3>
                {" "}
                <p>
                  Regular reviews with your coach keep your plan tuned as your body responds — not a static PDF, but a living system.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21C7 17 3 13.5 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-9 12Z" />
                    <path d="M9 10h.01M15 10h.01" />
                    <path d="M9.5 13.5c.8.8 1.7 1.2 2.5 1.2s1.7-.4 2.5-1.2" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  {"Sleep & Stress Recovery"}
                </h3>
                {" "}
                <p>
                  Learn the recovery levers that quiet cravings and calm the hunger hormones working against you.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="card-icon" aria-hidden="true">
                  {" "}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M15.5 3.13A4 4 0 0 1 15.5 11" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <h3>
                  Judgment-Free Community
                </h3>
                {" "}
                <p>
                  A supportive circle of people on the same journey, with live group sessions and real humans cheering you on.
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
        {" "}
        <section className="section how" id="how">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                How It Works
              </p>
              {" "}
              <h2>
                Three shifts. One new you.
              </h2>
              {" "}
              <p className="section-sub">
                From first assessment to lifelong routine in three simple moves — each one coach-guided and fully your own.
              </p>
              {" "}
            </div>
            {" "}
            <ol className="steps">
              {" "}
              <li className="step reveal">
                {" "}
                <span className="step-num" aria-hidden="true">
                  01
                </span>
                {" "}
                <h3>
                  Discover
                </h3>
                {" "}
                <p>
                  A 5-minute assessment maps your habits, goals, schedule, and metabolism profile. That’s the whole onboarding.
                </p>
                {" "}
              </li>
              {" "}
              <li className="step reveal">
                {" "}
                <span className="step-num" aria-hidden="true">
                  02
                </span>
                {" "}
                <h3>
                  Shift
                </h3>
                {" "}
                <p>
                  You get your blueprint — meals, movement, and micro-habits — launched on day one with your coach by your side.
                </p>
                {" "}
              </li>
              {" "}
              <li className="step reveal">
                {" "}
                <span className="step-num" aria-hidden="true">
                  03
                </span>
                {" "}
                <h3>
                  Thrive
                </h3>
                {" "}
                <p>
                  Coaching and community keep you consistent until the change stops being a plan and simply becomes who you are.
                </p>
                {" "}
              </li>
              {" "}
            </ol>
            {" "}
            <div className="how-cta reveal">
              {" "}
              <a href="#pricing" className="btn btn--primary">
                Find Your Plan
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section results" id="results">
          {" "}
          <div className="container results-inner">
            {" "}
            <div className="results-copy reveal">
              {" "}
              <p className="kicker">
                Real, Measurable Results
              </p>
              {" "}
              <h2>
                The numbers don’t lie.
                <br />
                Neither do our members.
              </h2>
              {" "}
              <p className="section-sub">
                We report the average across all active members at 12 weeks — not marketing math, just outcomes.
              </p>
              {" "}
              <ul className="checklist">
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Energy comes back within the first two weeks "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Cravings drop as your routine stabilizes "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Sleep deepens and morning mood lifts "}
                </li>
                {" "}
                <li>
                  {" "}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Confidence shows up long before the scale does "}
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="stats-band reveal">
              {" "}
              <div className="stat">
                {" "}
                <span className="stat-num" data-count="14.2" data-decimals="1">
                  0
                </span>
                {" "}
                <span className="stat-unit">
                  lb
                </span>
                {" "}
                <p>
                  average weight lost in 12 weeks
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="stat-num" data-count="92" data-decimals="0">
                  0
                </span>
                {" "}
                <span className="stat-unit">
                  %
                </span>
                {" "}
                <p>
                  keep the weight off at 12 months
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="stat-num" data-count="3.1" data-decimals="1">
                  0
                </span>
                {" "}
                <span className="stat-unit">
                  ×
                </span>
                {" "}
                <p>
                  more consistent with a coach guiding you
                </p>
                {" "}
              </div>
              {" "}
              <div className="stat">
                {" "}
                <span className="stat-num" data-count="4.9" data-decimals="1">
                  0
                </span>
                {" "}
                <span className="stat-unit">
                  /5
                </span>
                {" "}
                <p>
                  average member rating across reviews
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
        <section className="section stories" id="stories">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                Success Stories
              </p>
              {" "}
              <h2>
                Real people. Real shifts.
              </h2>
              {" "}
              <p className="section-sub">
                Every story below is from a verified member. We’ve only changed the names.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <blockquote className="quote reveal">
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p>
                  “I stopped counting every calorie and started eating like a normal person again. Eighteen pounds down and my energy is genuinely back.”
                </p>
                {" "}
                <footer>
                  {" "}
                  <img src={a2} alt="Portrait of Dana" width="64" height="64" />
                  {" "}
                  <div>
                    {" "}
                    <cite>
                      Dana M.
                    </cite>
                    {" "}
                    <span>
                      Lost 18 lb in 11 weeks
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote reveal">
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p>
                  “The 15-minute workouts fit between meetings, so I actually did them. Three months in, I’m 22 lb lighter and my knees finally agree.”
                </p>
                {" "}
                <footer>
                  {" "}
                  <img src={a3} alt="Portrait of Marcus" width="64" height="64" />
                  {" "}
                  <div>
                    {" "}
                    <cite>
                      Marcus T.
                    </cite>
                    {" "}
                    <span>
                      Lost 22 lb in 12 weeks
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
              <blockquote className="quote reveal">
                {" "}
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <p>
                  “It’s the first plan that didn’t feel like punishment. My cravings dropped within two weeks — I actually look forward to dinner now.”
                </p>
                {" "}
                <footer>
                  {" "}
                  <img src={a4} alt="Portrait of Priya" width="64" height="64" />
                  {" "}
                  <div>
                    {" "}
                    <cite>
                      Priya K.
                    </cite>
                    {" "}
                    <span>
                      Lost 14 lb in 9 weeks
                    </span>
                    {" "}
                  </div>
                  {" "}
                </footer>
                {" "}
              </blockquote>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section pricing" id="pricing">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="kicker">
                Simple Pricing
              </p>
              {" "}
              <h2>
                Invest in your health.
                <br />
                No hidden fees.
              </h2>
              {" "}
              <p className="section-sub">
                Cancel anytime. Every plan comes with a 30-day happiness guarantee — love your plan or get a full refund.
              </p>
              {" "}
            </div>
            {" "}
            <div className="pricing-grid">
              {" "}
              <article className="plan reveal">
                {" "}
                <h3 className="plan-name">
                  Starter
                </h3>
                {" "}
                <p className="plan-price">
                  <sup>
                    $
                  </sup>
                  19
                  <span>
                    /mo
                  </span>
                </p>
                {" "}
                <p className="plan-desc">
                  Self-guided foundations for a lighter routine.
                </p>
                {" "}
                <ul className="plan-list">
                  {" "}
                  <li>
                    Standard meal blueprint library
                  </li>
                  {" "}
                  <li>
                    15-minute workout library
                  </li>
                  {" "}
                  <li>
                    Community access
                  </li>
                  {" "}
                  <li>
                    Weekly habit emails
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="#contact" className="btn btn--ghost btn--block">
                  Get Started
                </a>
                {" "}
              </article>
              {" "}
              <article className="plan plan--featured reveal">
                {" "}
                <span className="plan-badge">
                  Most Popular
                </span>
                {" "}
                <h3 className="plan-name">
                  Shift
                </h3>
                {" "}
                <p className="plan-price">
                  <sup>
                    $
                  </sup>
                  39
                  <span>
                    /mo
                  </span>
                </p>
                {" "}
                <p className="plan-desc">
                  Your personal plan, tuned every single week.
                </p>
                {" "}
                <ul className="plan-list">
                  {" "}
                  <li>
                    Everything in Starter
                  </li>
                  {" "}
                  <li>
                    Personal meal blueprint
                  </li>
                  {" "}
                  <li>
                    Weekly coach check-in
                  </li>
                  {" "}
                  <li>
                    {"Progress & habit tracking"}
                  </li>
                  {" "}
                  <li>
                    {"Sleep & stress support tools"}
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="#contact" className="btn btn--primary btn--block">
                  Start Your Shift
                </a>
                {" "}
              </article>
              {" "}
              <article className="plan reveal">
                {" "}
                <h3 className="plan-name">
                  1:1 Premium
                </h3>
                {" "}
                <p className="plan-price">
                  <sup>
                    $
                  </sup>
                  89
                  <span>
                    /mo
                  </span>
                </p>
                {" "}
                <p className="plan-desc">
                  A dedicated coach in your corner, every step.
                </p>
                {" "}
                <ul className="plan-list">
                  {" "}
                  <li>
                    Everything in Shift
                  </li>
                  {" "}
                  <li>
                    Weekly 1:1 video coaching
                  </li>
                  {" "}
                  <li>
                    Custom recovery protocol
                  </li>
                  {" "}
                  <li>
                    Priority messaging support
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="#contact" className="btn btn--ghost btn--block">
                  Go Premium
                </a>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="cta-band reveal">
              {" "}
              <img className="cta-art" src={a5} alt="SlimShift program at a glance" loading="lazy" width="453" height="326" />
              {" "}
              <div className="cta-copy">
                {" "}
                <p className="kicker kicker--dark">
                  30-Day Happiness Guarantee
                </p>
                {" "}
                <h2>
                  Ready to feel lighter in 30 days?
                </h2>
                {" "}
                <p>
                  Book a free consultation. We’ll map your starting point, set a realistic target, and answer every question — no strings attached.
                </p>
                {" "}
                <div className="hero-cta">
                  {" "}
                  <a href="#contact" className="btn btn--light">
                    Book Free Consultation
                  </a>
                  {" "}
                  <a href="#program" className="btn btn--ghost btn--ghost-light">
                    Explore the Program
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
        <section className="section contact" id="contact">
          {" "}
          <div className="container contact-inner">
            {" "}
            <div className="contact-copy reveal">
              {" "}
              <p className="kicker">
                Talk to a Coach
              </p>
              {" "}
              <h2>
                Your first consultation is free.
              </h2>
              {" "}
              <p className="section-sub">
                Tell us where you are and where you want to be. A real coach replies within 24 hours — no bots, no pressure.
              </p>
              {" "}
              <ul className="contact-list">
                {" "}
                <li>
                  {" "}
                  <span className="contact-ico" aria-hidden="true">
                    {" "}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="3" />
                      <path d="m3 6 9 7 9-7" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Email us
                    </strong>
                    <span>
                      hello@slimshift.com
                    </span>
                  </div>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="contact-ico" aria-hidden="true">
                    {" "}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Call us
                    </strong>
                    <span>
                      +1 (800) 555-0173
                    </span>
                  </div>
                  {" "}
                </li>
                {" "}
                <li>
                  {" "}
                  <span className="contact-ico" aria-hidden="true">
                    {" "}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <div>
                    <strong>
                      Hours
                    </strong>
                    <span>
                      Mon–Fri, 8am–8pm ET
                    </span>
                  </div>
                  {" "}
                </li>
                {" "}
              </ul>
              {" "}
              <div className="socials" aria-label="Social links">
                {" "}
                <a href="#top" className="social" aria-label="Instagram">
                  {" "}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#top" className="social" aria-label="Facebook">
                  {" "}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="#top" className="social" aria-label="YouTube">
                  {" "}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.1 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22.9 12a29 29 0 0 0-.4-4.8Z" />
                    <path d="m9.8 15 5.4-3-5.4-3v6Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <form className="contact-form reveal" data-form="" noValidate={true}>
              {" "}
              <div className="field">
                {" "}
                <label htmlFor="cf-name">
                  Full name
                </label>
                {" "}
                <input type="text" id="cf-name" name="name" placeholder="Jordan Lee" autoComplete="name" required={true} />
                {" "}
              </div>
              {" "}
              <div className="field">
                {" "}
                <label htmlFor="cf-email">
                  Email address
                </label>
                {" "}
                <input type="email" id="cf-email" name="email" placeholder="you@example.com" autoComplete="email" required={true} />
                {" "}
              </div>
              {" "}
              <div className="field">
                {" "}
                <label htmlFor="cf-goal">
                  Your goal
                </label>
                {" "}
                <select id="cf-goal" name="goal" required={true}>
                  {" "}
                  <option value="" disabled={true}>
                    Choose a goal…
                  </option>
                  {" "}
                  <option value="lose-10-20">
                    Lose 10–20 lb
                  </option>
                  {" "}
                  <option value="lose-20-40">
                    Lose 20–40 lb
                  </option>
                  {" "}
                  <option value="lose-40-plus">
                    Lose 40+ lb
                  </option>
                  {" "}
                  <option value="maintain">
                    {"Maintain & get healthier"}
                  </option>
                  {" "}
                  <option value="unsure">
                    Not sure yet
                  </option>
                  {" "}
                </select>
                {" "}
              </div>
              {" "}
              <div className="field">
                {" "}
                <label htmlFor="cf-msg">
                  Anything we should know?
                </label>
                {" "}
                <textarea id="cf-msg" name="message" rows="4" placeholder="Allergies, injuries, schedule quirks — it all helps." />
                {" "}
              </div>
              {" "}
              <button type="submit" className="btn btn--primary btn--block">
                Send My Free Consultation
              </button>
              {" "}
              <p className="form-ok" role="status">
                {" "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {" Thanks! Your consultation request is in — expect a reply within 24 hours. "}
              </p>
              {" "}
              <p className="form-err" role="alert">
                {" "}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6M12 17h.01" />
                </svg>
                {" Please fill in all required fields before sending. "}
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
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-brand">
            {" "}
            <a href="index.html" className="brand brand--footer" aria-label="SlimShift home">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                {" "}
                <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  {" "}
                  <path d="M23 6c-7 0-12 4.5-12 11.5C11 22 14 26 18 26c6.5 0 11-6 11-12C29 10 27 6 23 6Z" />
                  {" "}
                  <path d="M6 13c2.5 0 4 1.5 4 4 0-3.5-1.5-6-4-7Z" opacity=".85" />
                  {" "}
                </svg>
                {" "}
              </span>
              {" "}
              <span className="brand-name">
                Slim
                <span>
                  Shift
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              Evidence-based weight loss and healthy lifestyle coaching — built to fit your real life, designed to last.
            </p>
            {" "}
            <div className="socials socials--footer" aria-label="Social links">
              {" "}
              <a href="#top" className="social" aria-label="Instagram">
                {" "}
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#top" className="social" aria-label="Facebook">
                {" "}
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                </svg>
                {" "}
              </a>
              {" "}
              <a href="#top" className="social" aria-label="YouTube">
                {" "}
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.1 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22.9 12a29 29 0 0 0-.4-4.8Z" />
                  <path d="m9.8 15 5.4-3-5.4-3v6Z" />
                </svg>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <nav className="footer-col" aria-label="Program">
            {" "}
            <h4>
              Program
            </h4>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="#program">
                  The Method
                </a>
              </li>
              {" "}
              <li>
                <a href="#how">
                  How It Works
                </a>
              </li>
              {" "}
              <li>
                <a href="#results">
                  Results
                </a>
              </li>
              {" "}
              <li>
                <a href="#pricing">
                  Pricing
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <nav className="footer-col" aria-label="Company">
            {" "}
            <h4>
              Company
            </h4>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="#stories">
                  Success Stories
                </a>
              </li>
              {" "}
              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>
              {" "}
              <li>
                <a href="#top">
                  Careers
                </a>
              </li>
              {" "}
              <li>
                <a href="#top">
                  Press
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
          <nav className="footer-col" aria-label="Support">
            {" "}
            <h4>
              Support
            </h4>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="#contact">
                  FAQ
                </a>
              </li>
              {" "}
              <li>
                <a href="#contact">
                  Terms
                </a>
              </li>
              {" "}
              <li>
                <a href="#contact">
                  Privacy
                </a>
              </li>
              {" "}
              <li>
                <a href="#contact">
                  Refunds
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
        <div className="footer-bottom">
          {" "}
          <div className="container footer-bottom-inner">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" SlimShift. All rights reserved."}
            </p>
            {" "}
            <p className="footer-made">
              Made with care for healthier days ahead 🍃
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" type="button" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
