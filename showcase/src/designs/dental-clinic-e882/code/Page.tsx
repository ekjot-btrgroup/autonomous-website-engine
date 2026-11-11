// Converted from the HTML template dental-clinic-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/service-1.webp";
import a2 from "./assets/service-2.webp";
import a3 from "./assets/service-3.webp";
import a4 from "./assets/service-4.webp";
import a5 from "./assets/carousel-2.webp";
import a6 from "./assets/about.webp";
import a7 from "./assets/team-1.webp";
import a8 from "./assets/team-2.webp";
import a9 from "./assets/team-3.webp";
import a10 from "./assets/team-4.webp";
import a11 from "./assets/team-5.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-dental-clinic-e882">
      {" "}
      <header className="site-header">
        {" "}
        <div className="wrap header-inner">
          {" "}
          <a className="brand" href="index.html" aria-label="DENTCARE home">
            <span className="brand-mark">
              🦷
            </span>
            <span>
              DENT
              <em>
                CARE
              </em>
            </span>
          </a>
          {" "}
          <nav className="nav" data-nav="" aria-label="Primary">
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="services.html">
              Services
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <div className="header-actions">
            {" "}
            <a className="btn btn--teal" href="contact.html#booking">
              Book visit
            </a>
            {" "}
            <button className="burger" data-burger="" aria-label="Open menu" aria-expanded="false">
              <span />
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <section className="hero">
        {" "}
        <div className="wrap hero-grid">
          {" "}
          <div className="hero-copy reveal">
            {" "}
            <span className="eyebrow">
              Trusted by 12,400+ smiles
            </span>
            {" "}
            <h1 className="h1">
              {"Care that "}
              <em>
                makes
              </em>
              {" you smile"}
            </h1>
            {" "}
            <p className="hero-lead">
              Clinical precision with a warm chair-side manner. Preventive, cosmetic and implant dentistry in a calm, bright clinic — from your first check-up to a confident smile.
            </p>
            {" "}
            <div className="hero-ctas">
              {" "}
              <a className="btn btn--teal" href="contact.html#booking">
                Book an appointment →
              </a>
              {" "}
              <a className="btn btn--ghost" href="services.html">
                Explore treatments
              </a>
              {" "}
            </div>
            {" "}
            <div className="trust-row">
              {" "}
              <span>
                ★ 4.9 · 1,800 reviews
              </span>
              {" "}
              <span>
                Same-week appointments
              </span>
              {" "}
              <span>
                Sterilization grade A+
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-media reveal">
            {" "}
            <img src={a0} alt="Bright dental clinic and smiling patient" />
            {" "}
            <div className="appt-card card" aria-label="Next available appointment">
              {" "}
              <div className="appt-top">
                {" "}
                <span className="pulse">
                  <i />
                  {" Next available"}
                </span>
                {" "}
                <span className="muted" style={{ fontSize: ".86rem" }}>
                  Today · 14:30 · Hygienist
                </span>
                {" "}
              </div>
              {" "}
              <div className="appt-main">
                {" "}
                <div className="appt-when">
                  {" "}
                  <strong>
                    Today, 2:30 PM
                  </strong>
                  {" "}
                  <span>
                    {"45 min · Check & clean — Room 2"}
                  </span>
                  {" "}
                </div>
                {" "}
                <a className="btn btn--ghost" href="contact.html#booking">
                  Reserve
                </a>
                {" "}
              </div>
              {" "}
              <div className="mini-stat">
                <span>
                  🛡️
                </span>
                {" "}
                <span>
                  <b>
                    Zero-wait
                  </b>
                  {" check-in · Insurance verified at booking"}
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
      <section className="section section--white">
        {" "}
        <div className="wrap">
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "end", flexWrap: "wrap", marginBottom: "16px" }}>
            {" "}
            <div>
              {" "}
              <span className="eyebrow">
                Treatments
              </span>
              {" "}
              <h2 className="h2" style={{ margin: "10px 0 6px", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                Six treatments, one care pathway
              </h2>
              {" "}
              <p className="muted" style={{ maxWidth: "60ch" }}>
                From prevention to restoration — each card is a clear clinical offer with what to expect and typical timing.
              </p>
              {" "}
            </div>
            {" "}
            <a className="btn btn--ghost" href="services.html">
              View all services
            </a>
            {" "}
          </div>
          {" "}
          <div className="grid-3">
            {" "}
            <article className="service card reveal">
              <img src={a1} alt="Cosmetic dentistry" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ✦
                  </span>
                  <h3>
                    Cosmetic Dentistry
                  </h3>
                </div>
                <p>
                  Veneers, bonding and contouring for a natural, photo-ready smile.
                </p>
                <div className="price">
                  <b>
                    From $320
                  </b>
                  <a href="services.html#cosmetic">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a2} alt="Dental implants" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ◈
                  </span>
                  <h3>
                    Dental Implants
                  </h3>
                </div>
                <p>
                  Titanium implants with guided surgery and same-day temporaries.
                </p>
                <div className="price">
                  <b>
                    From $1,450
                  </b>
                  <a href="services.html#implants">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a3} alt="Dental bridges" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ⬡
                  </span>
                  <h3>
                    {"Bridges & Crowns"}
                  </h3>
                </div>
                <p>
                  Ceramic bridges and crowns milled in-house — precise shade match.
                </p>
                <div className="price">
                  <b>
                    From $480
                  </b>
                  <a href="services.html#bridges">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a4} alt="Teeth whitening" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ☀
                  </span>
                  <h3>
                    Whitening
                  </h3>
                </div>
                <p>
                  In-chair and at-home whitening with sensitivity-safe protocols.
                </p>
                <div className="price">
                  <b>
                    From $189
                  </b>
                  <a href="services.html#whitening">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a5} alt="Preventive care" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ♡
                  </span>
                  <h3>
                    Preventive Care
                  </h3>
                </div>
                <p>
                  Check, clean and digital X-rays — the quiet habit behind lasting smiles.
                </p>
                <div className="price">
                  <b>
                    From $95
                  </b>
                  <a href="services.html#preventive">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a6} alt="Orthodontics" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ◎
                  </span>
                  <h3>
                    Clear Aligners
                  </h3>
                </div>
                <p>
                  Discreet alignment with 3D-planned trays and monthly refinements.
                </p>
                <div className="price">
                  <b>
                    From $2,200
                  </b>
                  <a href="services.html#aligners">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--sky">
        {" "}
        <div className="wrap reassure">
          {" "}
          <div className="reveal">
            {" "}
            <span className="eyebrow">
              Why DENTCARE
            </span>
            {" "}
            <h2 className="h2" style={{ margin: "10px 0 8px", fontSize: "clamp(1.6rem,3vw,2.15rem)" }}>
              Sterile where it counts, warm where it matters
            </h2>
            {" "}
            <p className="lead">
              A calm clinic, clear pricing and clinicians who explain every step before they begin.
            </p>
            {" "}
            <div className="checks">
              {" "}
              <div className="check">
                <i>
                  ✓
                </i>
                <div>
                  <b>
                    Grade-A sterilization
                  </b>
                  <br />
                  <span className="muted">
                    Autoclave-tracked instruments and single-use barriers, logged per visit.
                  </span>
                </div>
              </div>
              {" "}
              <div className="check">
                <i>
                  ◐
                </i>
                <div>
                  <b>
                    Transparent fees
                  </b>
                  <br />
                  <span className="muted">
                    Written estimate before treatment — no surprises at checkout.
                  </span>
                </div>
              </div>
              {" "}
              <div className="check">
                <i>
                  ♡
                </i>
                <div>
                  <b>
                    Comfort-first care
                  </b>
                  <br />
                  <span className="muted">
                    Numbing options, breaks on request, and a team trained to calm nerves.
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="reassure-media reveal">
            <img src={a6} alt="Dentist consulting with patient" />
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--white">
        {" "}
        <div className="wrap">
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "end", flexWrap: "wrap", marginBottom: "16px" }}>
            {" "}
            <div>
              <span className="eyebrow">
                Our dentists
              </span>
              <h2 className="h2" style={{ margin: "10px 0 6px" }}>
                Clinicians you can trust
              </h2>
              <p className="muted">
                Small team, long relationships — each dentist leads a care pathway.
              </p>
            </div>
            {" "}
            <a className="btn btn--ghost" href="about.html#team">
              Meet the team
            </a>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <article className="person card reveal">
              <img src={a7} alt="Dr. John Doe" />
              <div className="person-body">
                <h3>
                  Dr. Lina Park
                </h3>
                <p>
                  Lead Implant Surgeon
                </p>
                <div className="meta">
                  <span>
                    Implants
                  </span>
                  <span>
                    12 yrs
                  </span>
                </div>
              </div>
            </article>
            {" "}
            <article className="person card reveal">
              <img src={a8} alt="Dentist portrait" />
              <div className="person-body">
                <h3>
                  Dr. Marco Rivas
                </h3>
                <p>
                  {"Cosmetic & Restorative"}
                </p>
                <div className="meta">
                  <span>
                    Veneers
                  </span>
                  <span>
                    9 yrs
                  </span>
                </div>
              </div>
            </article>
            {" "}
            <article className="person card reveal">
              <img src={a9} alt="Dentist portrait" />
              <div className="person-body">
                <h3>
                  Dr. Aisha Khan
                </h3>
                <p>
                  Orthodontics
                </p>
                <div className="meta">
                  <span>
                    Aligners
                  </span>
                  <span>
                    8 yrs
                  </span>
                </div>
              </div>
            </article>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--sky">
        {" "}
        <div className="wrap">
          {" "}
          <span className="eyebrow">
            Patient stories
          </span>
          {" "}
          <h2 className="h2" style={{ margin: "10px 0 14px" }}>
            Real smiles, gentle journey
          </h2>
          {" "}
          <div className="testi-grid">
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a10} alt="" />
                <div>
                  <b>
                    Sara M.
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “Whitening without the sting. They timed everything and checked in constantly. My smile feels like me — just brighter.”
              </p>
              <small className="muted">
                Whitening · 2 visits
              </small>
            </figure>
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a11} alt="" />
                <div>
                  <b>
                    Daniel K.
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “Implant from scan to crown was seamless. Clear estimate, no pressure, and I was eating normally the next day.”
              </p>
              <small className="muted">
                Implant · 3 months
              </small>
            </figure>
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a7} alt="" />
                <div>
                  <b>
                    Priya S.
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “My aligners fit perfectly. Monthly checks were quick and the app reminders kept me on track.”
              </p>
              <small className="muted">
                Clear aligners · 7 months
              </small>
            </figure>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--white">
        {" "}
        <div className="wrap">
          {" "}
          <div className="booking reveal">
            {" "}
            <div className="booking-grid">
              {" "}
              <div>
                {" "}
                <h2 className="h2">
                  Book your visit — we hold the chair
                </h2>
                {" "}
                <p style={{ opacity: ".92" }}>
                  Choose a time, tell us what brings you in, and we confirm within hours. Insurance checked at booking.
                </p>
                {" "}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                  {" "}
                  <span className="logo-pill">
                    Same-week slots
                  </span>
                  <span className="logo-pill">
                    HSA/FSA accepted
                  </span>
                  <span className="logo-pill">
                    0% financing
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <form className="form" data-form="" noValidate={true}>
                {" "}
                <div className="form-row">
                  {" "}
                  <label className="field">
                    <span>
                      Full name
                    </span>
                    <input name="name" placeholder="Ava Morgan" required={true} />
                  </label>
                  {" "}
                  <label className="field">
                    <span>
                      Email
                    </span>
                    <input name="email" type="email" placeholder="ava@email.com" required={true} />
                  </label>
                  {" "}
                </div>
                {" "}
                <div className="form-row">
                  {" "}
                  <label className="field">
                    <span>
                      Preferred date
                    </span>
                    <input name="date" type="date" required={true} />
                  </label>
                  {" "}
                  <label className="field">
                    <span>
                      Treatment
                    </span>
                    <select name="treatment">
                      <option>
                        {"Check & clean"}
                      </option>
                      <option>
                        Whitening
                      </option>
                      <option>
                        Implant consult
                      </option>
                      <option>
                        Aligners
                      </option>
                    </select>
                  </label>
                  {" "}
                </div>
                {" "}
                <label className="field">
                  <span>
                    Anything we should know?
                  </span>
                  <textarea name="message" rows="3" placeholder="Sensitivity, insurance, or questions" />
                </label>
                {" "}
                <button className="btn btn--teal" type="submit" style={{ width: "100%" }}>
                  Request appointment
                </button>
                {" "}
                <div className="form-ok" role="status" />
                {" "}
                <div className="form-err" role="alert" />
                {" "}
                <p className="muted" style={{ fontSize: ".84rem", margin: "8px 0 0" }}>
                  By booking you agree to our privacy and cancellation policy.
                </p>
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
      <footer className="footer">
        {" "}
        <div className="wrap">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              <div className="brand" style={{ marginBottom: "8px" }}>
                <span className="brand-mark">
                  🦷
                </span>
                <span>
                  DENT
                  <em>
                    CARE
                  </em>
                </span>
              </div>
              <p className="muted">
                {"Bright, calm dentistry on 5th & Alder. Preventive, cosmetic and implant care with clear pricing."}
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Visit
              </h4>
              <p className="muted">
                123 Smile Street, New York, NY 10001
                <br />
                Mon–Sat 8am–7pm · Sun closed
                <br />
                <a href="tel:+10123456789">
                  +01 234 567 89
                </a>
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Explore
              </h4>
              <p>
                <a href="services.html">
                  Services
                </a>
                <br />
                <a href="about.html">
                  About
                </a>
                <br />
                <a href="contact.html">
                  {"Contact & booking"}
                </a>
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Newsletter
              </h4>
              <form data-form="" noValidate={true} style={{ display: "flex", gap: "8px" }}>
                <input name="email" type="email" placeholder="Your email" required={true} style={{ flex: "1", border: "1px solid var(--line)", borderRadius: "999px", padding: "10px 14px" }} />
                <button className="btn btn--dark" type="submit">
                  Join
                </button>
              </form>
              <div className="form-ok" />
              <div className="form-err" />
            </div>
            {" "}
          </div>
          {" "}
          <div className="copy">
            <span>
              {"© "}
              <span data-year="" />
              {" DENTCARE. All rights reserved."}
            </span>
            <span>
              Crafted for confident smiles.
            </span>
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
