// Converted from the HTML template job-portal-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/img-hero-1.webp";
import a1 from "./assets/img-hero-2.webp";
import a2 from "./assets/img-logo-1.webp";
import a3 from "./assets/img-logo-2.webp";
import a4 from "./assets/img-logo-3.webp";
import a5 from "./assets/img-logo-4.webp";
import a6 from "./assets/img-logo-5.webp";
import a7 from "./assets/img-about-1.webp";
import a8 from "./assets/img-avatar-1.webp";
import a9 from "./assets/img-avatar-2.webp";
import a10 from "./assets/img-avatar-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-job-portal-6ced">
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
              ✈
            </span>
            {" 24,000+ jobs posted this month"}
          </p>
          {" "}
          <p className="topbar-item topbar-mid">
            Companies hiring now · Verified listings only
          </p>
          {" "}
          <p className="topbar-item topbar-end">
            {" "}
            <a href="tel:+12125550197">
              +1 (212) 555-0197
            </a>
            {" "}
            <a href="mailto:hello@joborbit.example">
              hello@joborbit.example
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
              Job
              <span>
                Orbit
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
            <a href="category.html" className="nav-link">
              Categories
            </a>
            {" "}
            <a href="job-list.html" className="nav-link">
              Job List
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="job-list.html" className="nav-cta">
              Post a Job
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
        <section className="hero">
          {" "}
          <div className="hero-bg" aria-hidden="true">
            {" "}
            <img src={a0} alt="" className="active" />
            {" "}
            <img src={a1} alt="" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" aria-hidden="true" />
          {" "}
          <div className="container hero-inner">
            {" "}
            <div className="hero-copy">
              {" "}
              <p className="hero-eyebrow">
                ★ Trusted by 4,200 companies
              </p>
              {" "}
              <h1>
                {"Find the job that "}
                <em>
                  fits your orbit.
                </em>
              </h1>
              {" "}
              <p className="hero-sub">
                From first interview to dream role — JobOrbit matches talented people with companies that actually need them. No noise, no spam, just real openings.
              </p>
              {" "}
            </div>
            {" "}
            <div className="search-card">
              {" "}
              <div className="search-tabs" role="tablist">
                {" "}
                <button className="tab-btn active" data-tab="job" role="tab" aria-selected="true">
                  Find a Job
                </button>
                {" "}
                <button className="tab-btn" data-tab="talent" role="tab" aria-selected="false">
                  Find a Talent
                </button>
                {" "}
              </div>
              {" "}
              <form className="search-form" data-form="" noValidate={true}>
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="s-keyword" className="sr-only">
                    Job title or keyword
                  </label>
                  {" "}
                  <input id="s-keyword" type="text" name="keyword" placeholder="Job title, keyword or company" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="s-cat" className="sr-only">
                    Category
                  </label>
                  {" "}
                  <select id="s-cat" name="category">
                    {" "}
                    <option value="">
                      All categories
                    </option>
                    {" "}
                    <option>
                      Marketing
                    </option>
                    {" "}
                    <option>
                      Engineering
                    </option>
                    {" "}
                    <option>
                      Design
                    </option>
                    {" "}
                    <option>
                      Finance
                    </option>
                    {" "}
                    <option>
                      Sales
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <div className="search-field">
                  {" "}
                  <label htmlFor="s-loc" className="sr-only">
                    Location
                  </label>
                  {" "}
                  <select id="s-loc" name="location">
                    {" "}
                    <option value="">
                      Any location
                    </option>
                    {" "}
                    <option>
                      New York
                    </option>
                    {" "}
                    <option>
                      San Francisco
                    </option>
                    {" "}
                    <option>
                      London
                    </option>
                    {" "}
                    <option>
                      Remote
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn-primary search-btn">
                  Search
                </button>
                {" "}
                <p className="form-msg form-ok">
                  Searching — we will match you shortly.
                </p>
                {" "}
                <p className="form-msg form-err">
                  Please enter a keyword to search.
                </p>
                {" "}
              </form>
              {" "}
              <p className="search-note">
                {"Popular: "}
                <a href="job-list.html">
                  Product Designer
                </a>
                {" · "}
                <a href="job-list.html">
                  Data Analyst
                </a>
                {" · "}
                <a href="job-list.html">
                  Remote
                </a>
              </p>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                {" "}
                <span className="hero-stat-num">
                  24K
                </span>
                {" "}
                <span className="hero-stat-label">
                  Live jobs
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <span className="hero-stat-num">
                  4.2K
                </span>
                {" "}
                <span className="hero-stat-label">
                  Hiring companies
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <span className="hero-stat-num">
                  180K
                </span>
                {" "}
                <span className="hero-stat-label">
                  Monthly candidates
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Explore by category
              </p>
              {" "}
              <h2 className="section-title">
                {"Browse the fields "}
                <em>
                  worth your time.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="cat-ribbon reveal" role="list">
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  📣
                </span>
                Marketing
                <small>
                  2,340
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  💻
                </span>
                Engineering
                <small>
                  4,105
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  🎨
                </span>
                {"Design & Creative"}
                <small>
                  1,876
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  📊
                </span>
                Finance
                <small>
                  1,254
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  🤝
                </span>
                Human Resources
                <small>
                  892
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  🚀
                </span>
                Business Development
                <small>
                  1,433
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  🧑‍🏫
                </span>
                Education
                <small>
                  764
                </small>
              </a>
              {" "}
              <a href="job-list.html" className="cat-chip">
                <span className="cat-ico">
                  ⚙️
                </span>
                Operations
                <small>
                  987
                </small>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-mist">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                How it works
              </p>
              {" "}
              <h2 className="section-title">
                {"From search to offer "}
                <em>
                  in three moves.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="step-grid">
              {" "}
              <div className="step-card reveal">
                {" "}
                <span className="step-num">
                  01
                </span>
                {" "}
                <span className="step-ico" aria-hidden="true">
                  🔎
                </span>
                {" "}
                <h3>
                  Search smart
                </h3>
                {" "}
                <p>
                  Filter by role, category and location. Your results are ranked by relevance, not by who paid the most.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step-card reveal">
                {" "}
                <span className="step-num">
                  02
                </span>
                {" "}
                <span className="step-ico" aria-hidden="true">
                  ⚡
                </span>
                {" "}
                <h3>
                  Apply in minutes
                </h3>
                {" "}
                <p>
                  One profile, one click. Send your application with your stored resume — no re-typing for every role.
                </p>
                {" "}
              </div>
              {" "}
              <div className="step-card reveal">
                {" "}
                <span className="step-num">
                  03
                </span>
                {" "}
                <span className="step-ico" aria-hidden="true">
                  🚀
                </span>
                {" "}
                <h3>
                  Launch your career
                </h3>
                {" "}
                <p>
                  Track applications, compare offers and negotiate with confidence. Your next chapter starts here.
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Featured jobs
              </p>
              {" "}
              <h2 className="section-title">
                {"Hand-picked roles, "}
                <em>
                  right now.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="job-grid">
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a2} alt="Northline logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Northline · New York, NY
                  </p>
                  {" "}
                  <h3 className="job-title">
                    Senior Software Engineer
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-full">
                      Full Time
                    </span>
                    {" "}
                    <span className="job-tag tag-remote">
                      Hybrid
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $140K – $180K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a3} alt="Falcon Goods logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Falcon Goods · Remote
                  </p>
                  {" "}
                  <h3 className="job-title">
                    Product Designer
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-full">
                      Full Time
                    </span>
                    {" "}
                    <span className="job-tag tag-remote">
                      Remote
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $110K – $145K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a4} alt="Brightpath logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Brightpath · San Francisco, CA
                  </p>
                  {" "}
                  <h3 className="job-title">
                    Data Analyst
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-part">
                      Part Time
                    </span>
                    {" "}
                    <span className="job-tag tag-on">
                      On-site
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $85K – $105K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a5} alt="Meridian Health logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Meridian Health · Boston, MA
                  </p>
                  {" "}
                  <h3 className="job-title">
                    Marketing Manager
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-full">
                      Full Time
                    </span>
                    {" "}
                    <span className="job-tag tag-on">
                      On-site
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $95K – $120K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a6} alt="Summit Labs logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Summit Labs · Austin, TX
                  </p>
                  {" "}
                  <h3 className="job-title">
                    DevOps Engineer
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-full">
                      Full Time
                    </span>
                    {" "}
                    <span className="job-tag tag-remote">
                      Remote
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $130K – $165K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="job-card reveal">
                {" "}
                <img src={a3} alt="Falcon Goods logo" className="job-logo" />
                {" "}
                <div className="job-body">
                  {" "}
                  <p className="job-meta">
                    Falcon Goods · Remote
                  </p>
                  {" "}
                  <h3 className="job-title">
                    Growth Marketing Lead
                  </h3>
                  {" "}
                  <div className="job-tags">
                    {" "}
                    <span className="job-tag tag-part">
                      Contract
                    </span>
                    {" "}
                    <span className="job-tag tag-remote">
                      Remote
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="job-side">
                  {" "}
                  <span className="job-salary">
                    $90K – $115K
                  </span>
                  {" "}
                  <a href="job-list.html" className="btn btn-primary btn-sm">
                    Apply now
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <p className="section-cta reveal">
              <a href="job-list.html" className="btn btn-ghost-ink">
                Browse all 24,000+ jobs
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-ink">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-copy reveal">
                {" "}
                <p className="eyebrow eyebrow-light">
                  For companies
                </p>
                {" "}
                <h2 className="section-title title-light">
                  {"Hire the person, "}
                  <em>
                    not the profile.
                  </em>
                </h2>
                {" "}
                <p className="split-lead">
                  Post a role in under five minutes and reach 180,000 qualified candidates a month. Our matching engine surfaces the people most likely to thrive in your team — no agencies, no recruiters in the middle.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li className="check-item">
                    Free job posts for your first three roles
                  </li>
                  {" "}
                  <li className="check-item">
                    Applicant tracking built in
                  </li>
                  {" "}
                  <li className="check-item">
                    Verified-company badges on every listing
                  </li>
                  {" "}
                </ul>
                {" "}
                <a href="job-list.html" className="btn btn-primary">
                  Post a Job
                </a>
                {" "}
              </div>
              {" "}
              <div className="split-media reveal">
                {" "}
                <img src={a7} alt="Team working together in a bright office" loading="lazy" />
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
                Success stories
              </p>
              {" "}
              <h2 className="section-title">
                {"People who found "}
                <em>
                  their orbit.
                </em>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="tst-grid">
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a8} alt="Portrait of Maya Rodriguez" className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Maya Rodriguez
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Frontend Engineer · Brightpath
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  “I applied to eleven roles on a Sunday and had three interviews by Thursday. JobOrbit’s matching was eerily good — every role genuinely fit what I wanted.”
                </p>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a9} alt="Portrait of Daniel Osei" className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Daniel Osei
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Data Analyst · Meridian Health
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  “After six months of recruiter dead-ends, I found my current role here in a week. The salary transparency meant no awkward negotiations.”
                </p>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a10} alt="Portrait of Sofia Lindqvist" className="tst-avatar" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Sofia Lindqvist
                    </h3>
                    {" "}
                    <p className="tst-role">
                      Product Designer · Falcon Goods
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  “As a hiring manager I’ve posted five roles on JobOrbit. The quality of applicants is consistently higher than any other board we use.”
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
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow eyebrow-light">
              Get started today
            </p>
            {" "}
            <h2 className="cta-title">
              {"Your next role is "}
              <em>
                one search away.
              </em>
            </h2>
            {" "}
            <p className="cta-sub">
              Create a free profile, upload your resume and start applying in minutes. Companies are hiring right now.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="job-list.html" className="btn btn-primary">
                Search jobs
              </a>
              {" "}
              <a href="contact.html" className="btn btn-ghost-light">
                Talk to us
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
                Job
                <span>
                  Orbit
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              The modern job portal connecting talented people with companies that need them. Verified listings, transparent salaries, zero spam.
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                LI
              </a>
              {" "}
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                X
              </a>
              {" "}
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                YT
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              For candidates
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="job-list.html">
                  Browse jobs
                </a>
              </li>
              {" "}
              <li>
                <a href="category.html">
                  Browse by category
                </a>
              </li>
              {" "}
              <li>
                <a href="job-list.html">
                  Remote jobs
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  Career tips
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Profile help
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
              For employers
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="job-list.html">
                  Post a job
                </a>
              </li>
              {" "}
              <li>
                <a href="job-list.html">
                  Search candidates
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  Pricing
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  Success stories
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Advertise with us
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
                248 Hudson Street, 8th Floor
                <br />
                New York, NY 10013
              </li>
              {" "}
              <li>
                <a href="tel:+12125550197">
                  +1 (212) 555-0197
                </a>
              </li>
              {" "}
              <li>
                <a href="mailto:hello@joborbit.example">
                  hello@joborbit.example
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <form className="newsletter" data-form="" noValidate={true}>
              {" "}
              <label htmlFor="nl-email" className="sr-only">
                Email for job alerts
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder="Get weekly job alerts" required={true} />
              {" "}
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
              {" "}
              <p className="form-msg form-ok">
                You are subscribed — first digest this Friday.
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
              {" JobOrbit Careers Inc. All rights reserved."}
            </p>
            {" "}
            <p>
              Listings are provided by employers and are verified before publication.
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
