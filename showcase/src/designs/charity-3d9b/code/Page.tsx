// Converted from the HTML template charity-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bg.webp";
import a1 from "./assets/donation-1.webp";
import a2 from "./assets/donation-2.webp";
import a3 from "./assets/donation-3.webp";
import a4 from "./assets/about.webp";
import a5 from "./assets/gallery-1.webp";
import a6 from "./assets/gallery-2.webp";
import a7 from "./assets/gallery-3.webp";
import a8 from "./assets/gallery-4.webp";
import a9 from "./assets/gallery-5.webp";
import a10 from "./assets/gallery-6.webp";
import a11 from "./assets/testimonial-1.webp";
import a12 from "./assets/team-1.webp";
import a13 from "./assets/team-2.webp";
import a14 from "./assets/team-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-charity-3d9b">
      {" "}
      {" "}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="container nav__inner">
          {" "}
          <a href="index.html" className="nav__logo" aria-label="Charitize home">
            {" "}
            <span className="nav__logo-icon">
              C
            </span>
            {" Charitize "}
          </a>
          {" "}
          <div className="nav__links" role="menubar">
            {" "}
            <a href="index.html" className="nav__link nav__link--active" role="menuitem">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav__link" role="menuitem">
              About
            </a>
            {" "}
            <a href="events.html" className="nav__link" role="menuitem">
              Events
            </a>
            {" "}
            <a href="contact.html" className="nav__link" role="menuitem">
              Contact
            </a>
            {" "}
            <a href="#donate" className="nav__cta" role="menuitem">
              Donate Now
            </a>
            {" "}
          </div>
          {" "}
          <button className="nav__toggle" aria-label="Toggle menu" aria-expanded="false">
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
      <section className="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: `linear-gradient(135deg, rgba(13,27,20,0.82) 0%, rgba(13,27,20,0.55) 100%), url(${a0}) center/cover no-repeat` }}>
        {" "}
        <div className="container" style={{ width: "100%", paddingTop: "120px", paddingBottom: "80px" }}>
          {" "}
          <div className="hero__content" style={{ maxWidth: "700px" }}>
            {" "}
            <span className="label rise" style={{ color: "var(--sage-light)", display: "block", marginBottom: "var(--space-md)" }}>
              Grassroots Impact Since 2012
            </span>
            {" "}
            <h1 className="rise rise--delay-1" style={{ color: "var(--white)", marginBottom: "var(--space-lg)" }}>
              {"Every Hand Shapes "}
              <span style={{ color: "var(--terracotta-light)" }}>
                Tomorrow
              </span>
            </h1>
            {" "}
            <p className="rise rise--delay-2" style={{ color: "rgba(253,248,240,0.75)", fontSize: "var(--text-lg)", maxWidth: "540px", marginBottom: "var(--space-2xl)", lineHeight: "1.7" }}>
              {" We believe change starts with one act of care. From clean water wells to school classrooms, your generosity builds futures that last. "}
            </p>
            {" "}
            {" "}
            <div className="rise rise--delay-3" style={{ maxWidth: "500px", marginBottom: "var(--space-2xl)" }}>
              {" "}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-sm)" }}>
                {" "}
                <span className="mono" style={{ color: "var(--cream)", fontSize: "var(--text-sm)" }}>
                  Annual Campaign Goal
                </span>
                {" "}
                <span className="mono" style={{ color: "var(--terracotta-light)", fontSize: "var(--text-sm)" }}>
                  $742,500 / $1,000,000
                </span>
                {" "}
              </div>
              {" "}
              <div className="progress" style={{ "--progress": "74%" }}>
                {" "}
                <div className="progress__track" />
                {" "}
              </div>
              {" "}
              <p style={{ color: "rgba(253,248,240,0.5)", fontSize: "var(--text-xs)", marginTop: "var(--space-xs)", fontFamily: "var(--font-mono)" }}>
                74% reached — 1,240 donors strong
              </p>
              {" "}
            </div>
            {" "}
            <div className="rise rise--delay-4" style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              {" "}
              <a href="#donate" className="btn btn--primary btn--large">
                Make a Donation
              </a>
              {" "}
              <a href="about.html" className="btn btn--white btn--large">
                Our Mission
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className="rise rise--delay-5" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)", marginTop: "var(--space-3xl)", maxWidth: "600px" }}>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", textAlign: "center" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700", color: "var(--terracotta-light)", lineHeight: "1" }} data-count="12500" data-suffix="+">
                0
              </div>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-xs)", color: "rgba(253,248,240,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>
                Lives Changed
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", textAlign: "center" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700", color: "var(--terracotta-light)", lineHeight: "1" }} data-count="340" data-suffix="+">
                0
              </div>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-xs)", color: "rgba(253,248,240,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>
                Projects Active
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", textAlign: "center" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700", color: "var(--terracotta-light)", lineHeight: "1" }} data-count="28" data-suffix="">
                0
              </div>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-xs)", color: "rgba(253,248,240,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>
                Countries Reached
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
      <section className="section" style={{ background: "var(--white)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header rise" style={{ textAlign: "center" }}>
            {" "}
            <span className="label">
              Measurable Change
            </span>
            {" "}
            <h2>
              {"Impact That "}
              <span className="accent-text">
                Speaks
              </span>
            </h2>
            {" "}
            <div className="divider divider--center" />
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)" }}>
            {" "}
            <div className="stat rise rise--delay-1">
              {" "}
              <div className="stat__number" data-count="847" data-suffix="">
                0
              </div>
              {" "}
              <div className="stat__label">
                Wells Built
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat rise rise--delay-2">
              {" "}
              <div className="stat__number" data-count="15600" data-suffix="">
                0
              </div>
              {" "}
              <div className="stat__label">
                Students Supported
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat rise rise--delay-3">
              {" "}
              <div className="stat__number" data-count="92" data-suffix="%">
                0
              </div>
              {" "}
              <div className="stat__label">
                Funds to Programs
              </div>
              {" "}
            </div>
            {" "}
            <div className="stat rise rise--delay-4">
              {" "}
              <div className="stat__number" data-count="4300" data-suffix="+">
                0
              </div>
              {" "}
              <div className="stat__label">
                Volunteers Active
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
      <section className="section" style={{ background: "var(--cream)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header rise">
            {" "}
            <span className="label">
              What We Do
            </span>
            {" "}
            <h2>
              {"Causes We "}
              <span className="accent-text">
                Champion
              </span>
            </h2>
            {" "}
            <div className="divider" />
            {" "}
            <p className="section-intro">
              Each initiative addresses a root need, not just a symptom. We invest in systems that outlast any single project.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)" }}>
            {" "}
            <div className="cause-card stagger">
              {" "}
              <img src={a1} alt="Clean water project" className="cause-card__image" loading="lazy" />
              {" "}
              <div className="cause-card__overlay">
                {" "}
                <span className="cause-card__tag">
                  Water
                </span>
                {" "}
                <h3 className="cause-card__title">
                  Clean Water Access
                </h3>
                {" "}
                <p className="cause-card__text">
                  Over 847 wells bring safe drinking water to communities that have waited generations.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="cause-card stagger">
              {" "}
              <img src={a2} alt="Education initiative" className="cause-card__image" loading="lazy" />
              {" "}
              <div className="cause-card__overlay">
                {" "}
                <span className="cause-card__tag">
                  Education
                </span>
                {" "}
                <h3 className="cause-card__title">
                  Education for All
                </h3>
                {" "}
                <p className="cause-card__text">
                  Schools, scholarships, and mentorship programs empowering 15,600+ students worldwide.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="cause-card stagger">
              {" "}
              <img src={a3} alt="Community empowerment" className="cause-card__image" loading="lazy" />
              {" "}
              <div className="cause-card__overlay">
                {" "}
                <span className="cause-card__tag">
                  Community
                </span>
                {" "}
                <h3 className="cause-card__title">
                  Community Resilience
                </h3>
                {" "}
                <p className="cause-card__text">
                  Micro-loans, vocational training, and cooperative programs building self-sustaining futures.
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
      </section>
      {" "}
      {" "}
      <section className="section" style={{ background: "var(--forest)", color: "var(--text-on-dark)", position: "relative", overflow: "hidden" }}>
        {" "}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(122,158,126,0.08)", pointerEvents: "none" }} />
        {" "}
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3xl)", alignItems: "center" }}>
          {" "}
          <div className="rise">
            {" "}
            <span className="label" style={{ color: "var(--sage-light)" }}>
              Our Story
            </span>
            {" "}
            <h2 style={{ color: "var(--cream)", margin: "var(--space-md) 0" }}>
              From One Village, a Movement
            </h2>
            {" "}
            <div className="divider" />
            {" "}
            <p style={{ color: "rgba(253,248,240,0.7)", lineHeight: "1.8", marginTop: "var(--space-lg)" }}>
              {" In 2012, a small team of educators and engineers traveled to rural East Africa. They didn't arrive with grand plans — they arrived with tools, patience, and a willingness to listen. That first well changed a village. That village inspired a movement. "}
            </p>
            {" "}
            <p style={{ color: "rgba(253,248,240,0.7)", lineHeight: "1.8", marginTop: "var(--space-md)" }}>
              {" Today, Charitize operates across 28 countries with a network of local leaders who know their communities best. We don't impose solutions — we partner with the people who live them. "}
            </p>
            {" "}
            <a href="about.html" className="btn btn--primary" style={{ marginTop: "var(--space-xl)" }}>
              Read Our Full Story
            </a>
            {" "}
          </div>
          {" "}
          <div className="rise rise--delay-2" style={{ position: "relative" }}>
            {" "}
            <img src={a4} alt="Charitize volunteers building a well" style={{ borderRadius: "var(--radius-xl)", width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
            {" "}
            <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "var(--terracotta)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg) var(--space-xl)", boxShadow: "var(--shadow-warm)" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700", color: "var(--white)", lineHeight: "1" }}>
                13+
              </div>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Years Active
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
      <section className="section" style={{ background: "var(--cream)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header rise">
            {" "}
            <span className="label">
              Get Involved
            </span>
            {" "}
            <h2>
              {"Upcoming "}
              <span className="accent-text">
                Events
              </span>
            </h2>
            {" "}
            <div className="divider" />
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
            {" "}
            <div className="event-card rise rise--delay-1">
              {" "}
              <div className="event-card__date">
                {" "}
                <span className="event-card__date-day">
                  14
                </span>
                {" "}
                <span className="event-card__date-month">
                  Sep
                </span>
                {" "}
              </div>
              {" "}
              <div className="event-card__info">
                {" "}
                <h4>
                  Community Clean Water Walk
                </h4>
                {" "}
                <p>
                  A 5K walkathon raising funds for well construction in drought-affected regions of East Africa.
                </p>
                {" "}
                <div className="event-card__meta">
                  {" "}
                  <span>
                    9:00 AM
                  </span>
                  {" "}
                  <span>
                    Riverside Park, NYC
                  </span>
                  {" "}
                  <span>
                    Open to all
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="event-card rise rise--delay-2">
              {" "}
              <div className="event-card__date">
                {" "}
                <span className="event-card__date-day">
                  28
                </span>
                {" "}
                <span className="event-card__date-month">
                  Sep
                </span>
                {" "}
              </div>
              {" "}
              <div className="event-card__info">
                {" "}
                <h4>
                  School Supply Drive
                </h4>
                {" "}
                <p>
                  Collecting books, uniforms, and learning materials for 12 schools across three countries.
                </p>
                {" "}
                <div className="event-card__meta">
                  {" "}
                  <span>
                    10:00 AM
                  </span>
                  {" "}
                  <span>
                    Community Center, Brooklyn
                  </span>
                  {" "}
                  <span>
                    Donations welcome
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="event-card rise rise--delay-3">
              {" "}
              <div className="event-card__date">
                {" "}
                <span className="event-card__date-day">
                  05
                </span>
                {" "}
                <span className="event-card__date-month">
                  Oct
                </span>
                {" "}
              </div>
              {" "}
              <div className="event-card__info">
                {" "}
                <h4>
                  Annual Impact Gala
                </h4>
                {" "}
                <p>
                  An evening celebrating our volunteers, sharing impact stories, and announcing 2027 goals.
                </p>
                {" "}
                <div className="event-card__meta">
                  {" "}
                  <span>
                    6:30 PM
                  </span>
                  {" "}
                  <span>
                    The Grand Hall, Manhattan
                  </span>
                  {" "}
                  <span>
                    Ticketed event
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
          <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
            {" "}
            <a href="events.html" className="btn btn--secondary">
              View All Events
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" style={{ background: "var(--white)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header rise" style={{ textAlign: "center" }}>
            {" "}
            <span className="label">
              Moments of Change
            </span>
            {" "}
            <h2>
              {"Our Work in "}
              <span className="accent-text">
                Action
              </span>
            </h2>
            {" "}
            <div className="divider divider--center" />
            {" "}
          </div>
          {" "}
          <div className="gallery-grid">
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a5} alt="Volunteers planting trees" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a6} alt="Children in classroom" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a7} alt="Water well construction" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a8} alt="Community gathering" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a9} alt="Medical outreach" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item stagger">
              {" "}
              <img src={a10} alt="School supplies delivery" loading="lazy" />
              {" "}
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">
                  ▶
                </span>
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
      <section className="section--compact" style={{ background: "var(--cream)" }}>
        {" "}
        <div className="container container--narrow">
          {" "}
          <div className="testimonial rise">
            {" "}
            <p className="testimonial__quote">
              {" Charitize didn't just build a well in our village — they taught us how to maintain it, how to plan for it, and how to teach the next generation. That is what real partnership looks like. "}
            </p>
            {" "}
            <div className="testimonial__author">
              {" "}
              <img src={a11} alt="Amara Okafor" className="testimonial__avatar" loading="lazy" />
              {" "}
              <div>
                {" "}
                <div className="testimonial__name">
                  Amara Okafor
                </div>
                {" "}
                <div className="testimonial__title">
                  Community Leader, Lagos
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
      <section className="section" style={{ background: "var(--cream)" }}>
        {" "}
        <div className="container">
          {" "}
          <div className="section-header rise" style={{ textAlign: "center" }}>
            {" "}
            <span className="label">
              Our People
            </span>
            {" "}
            <h2>
              {"Meet the "}
              <span className="accent-text">
                Team
              </span>
            </h2>
            {" "}
            <div className="divider divider--center" />
            {" "}
            <p className="section-intro" style={{ margin: "0 auto" }}>
              Dedicated individuals who believe that systemic change is possible — and who show up every day to prove it.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-2xl)", textAlign: "center" }}>
            {" "}
            <div className="team-card rise rise--delay-1">
              {" "}
              <img src={a12} alt="Elena Vasquez" className="team-card__avatar" loading="lazy" />
              {" "}
              <div className="team-card__name">
                Elena Vasquez
              </div>
              {" "}
              <div className="team-card__role">
                Executive Director
              </div>
              {" "}
              <p className="team-card__bio">
                15 years in international development. Believes every community has the answers — they just need the resources.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card rise rise--delay-2">
              {" "}
              <img src={a13} alt="James Okonkwo" className="team-card__avatar" loading="lazy" />
              {" "}
              <div className="team-card__name">
                James Okonkwo
              </div>
              {" "}
              <div className="team-card__role">
                Head of Programs
              </div>
              {" "}
              <p className="team-card__bio">
                Former engineer turned impact strategist. Designs programs that communities can run independently within 3 years.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card rise rise--delay-3">
              {" "}
              <img src={a14} alt="Priya Sharma" className="team-card__avatar" loading="lazy" />
              {" "}
              <div className="team-card__name">
                Priya Sharma
              </div>
              {" "}
              <div className="team-card__role">
                Director of Partnerships
              </div>
              {" "}
              <p className="team-card__bio">
                Builds bridges between corporations, governments, and grassroots organizations for maximum collaborative impact.
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
      <section id="donate" className="section" style={{ background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)", color: "var(--white)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {" "}
        <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        {" "}
        <div style={{ position: "absolute", bottom: "-80px", right: "-40px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        {" "}
        <div className="container container--narrow" style={{ position: "relative", zIndex: "1" }}>
          {" "}
          <div className="rise">
            {" "}
            <span className="label" style={{ color: "rgba(255,255,255,0.6)" }}>
              Make a Difference Today
            </span>
            {" "}
            <h2 style={{ color: "var(--white)", margin: "var(--space-md) 0" }}>
              Your Gift Writes the Next Chapter
            </h2>
            {" "}
            <div className="divider divider--center" style={{ background: "var(--cream)" }} />
            {" "}
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "var(--text-lg)", maxWidth: "520px", margin: "var(--space-lg) auto var(--space-2xl)", lineHeight: "1.7" }}>
              {" 92 cents of every dollar goes directly to programs. No bloated admin fees. No vague promises — just measurable, lasting change you can trace. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="rise rise--delay-2" style={{ display: "flex", gap: "var(--space-lg)", justifyContent: "center", flexWrap: "wrap", marginBottom: "var(--space-2xl)" }}>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-lg)", padding: "var(--space-xl) var(--space-2xl)", cursor: "pointer", transition: "all 0.3s ease", minWidth: "140px" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700" }}>
                $25
              </div>
              {" "}
              <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
                Supplies one student
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-lg)", padding: "var(--space-xl) var(--space-2xl)", cursor: "pointer", transition: "all 0.3s ease", minWidth: "140px" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700" }}>
                $75
              </div>
              {" "}
              <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
                Provides clean water for 10 families
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-lg)", padding: "var(--space-xl) var(--space-2xl)", cursor: "pointer", transition: "all 0.3s ease", minWidth: "140px" }}>
              {" "}
              <div className="mono" style={{ fontSize: "var(--text-2xl)", fontWeight: "700" }}>
                $250
              </div>
              {" "}
              <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
                Funds a vocational training seat
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="rise rise--delay-3">
            {" "}
            <a href="#" className="btn btn--white btn--large">
              Donate Now
            </a>
            {" "}
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "var(--text-xs)", marginTop: "var(--space-md)", fontFamily: "var(--font-mono)" }}>
              Tax-deductible • Secure payment • 501(c)(3) registered
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
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                {" "}
                <span className="nav__logo-icon" style={{ width: "28px", height: "28px", fontSize: "0.85rem" }}>
                  C
                </span>
                {" Charitize "}
              </div>
              {" "}
              <p className="footer__desc">
                A grassroots charity dedicated to clean water, education, and community resilience. Every dollar works. Every hand matters.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5>
                Navigate
              </h5>
              {" "}
              <a href="index.html" className="footer__link">
                Home
              </a>
              {" "}
              <a href="about.html" className="footer__link">
                About
              </a>
              {" "}
              <a href="events.html" className="footer__link">
                Events
              </a>
              {" "}
              <a href="contact.html" className="footer__link">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5>
                Causes
              </h5>
              {" "}
              <a href="#" className="footer__link">
                Clean Water
              </a>
              {" "}
              <a href="#" className="footer__link">
                Education
              </a>
              {" "}
              <a href="#" className="footer__link">
                Community
              </a>
              {" "}
              <a href="#" className="footer__link">
                Volunteer
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h5>
                Stay Connected
              </h5>
              {" "}
              <p className="footer__desc">
                Impact updates, event invitations, and stories from the field. No spam, ever.
              </p>
              {" "}
              <div className="footer__newsletter">
                {" "}
                <form className="footer__newsletter-form">
                  {" "}
                  <input type="email" className="footer__newsletter-input" placeholder="Your email address" aria-label="Email for newsletter" />
                  {" "}
                  <button type="submit" className="footer__newsletter-btn">
                    Subscribe
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
          <div className="footer__bottom">
            {" "}
            <span className="footer__copy">
              © 2026 Charitize. All rights reserved.
            </span>
            {" "}
            <div className="footer__social">
              {" "}
              <a href="#" aria-label="Facebook">
                f
              </a>
              {" "}
              <a href="#" aria-label="Twitter">
                X
              </a>
              {" "}
              <a href="#" aria-label="Instagram">
                ☉
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                ▶
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
