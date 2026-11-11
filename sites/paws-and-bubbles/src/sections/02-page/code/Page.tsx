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
          <a className="brand" href="index.html" aria-label="Paws & Bubbles home">
            <span className="brand-mark">
              🦷
            </span>
            <span>
              PAWS
              <em>
                &BUBBLES
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
              Book a groom
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
              Dogs & cats welcome
            </span>
            {" "}
            <h1 className="h1">
              {"Grooming that "}
              <em>
                makes
              </em>
              {" tails wag"}
            </h1>
            {" "}
            <p className="hero-lead">
              Gentle hands and natural shampoos in a calm, bright salon. Baths, full grooms, nail trims and de-shedding for dogs and cats, from their very first visit.
            </p>
            {" "}
            <div className="hero-ctas">
              {" "}
              <a className="btn btn--teal" href="contact.html#booking">
                Book a groom →
              </a>
              {" "}
              <a className="btn btn--ghost" href="services.html">
                Explore services
              </a>
              {" "}
            </div>
            {" "}
            <div className="trust-row">
              {" "}
              <span>
                Gentle handling, every visit
              </span>
              {" "}
              <span>
                Dogs & cats
              </span>
              {" "}
              <span>
                Natural shampoos
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-media reveal">
            {" "}
            <img src={a0} alt="Happy dog at the grooming salon" />
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
                  Today · Full groom
                </span>
                {" "}
              </div>
              {" "}
              <div className="appt-main">
                {" "}
                <div className="appt-when">
                  {" "}
                  <strong>
                    Today
                  </strong>
                  {" "}
                  <span>
                    {"Bath, brush & nail trim"}
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
                    Calm
                  </b>
                  {" check-in · We go at your pet's pace"}
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
                Services
              </span>
              {" "}
              <h2 className="h2" style={{ margin: "10px 0 6px", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                Six services, one gentle routine
              </h2>
              {" "}
              <p className="muted" style={{ maxWidth: "60ch" }}>
                From a quick freshen-up to a full makeover, each service is calm, careful and finished with love.
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
              <img src={a1} alt="Full groom" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ✦
                  </span>
                  <h3>
                    Full Groom
                  </h3>
                </div>
                <p>
                  Bath, brush, breed-style haircut, nail trim and ear clean.
                </p>
                <div className="price">
                  <b>
                    Price on request
                  </b>
                  <a href="services.html#cosmetic">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a2} alt="Bath and brush" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ◈
                  </span>
                  <h3>
                    Bath & Brush
                  </h3>
                </div>
                <p>
                  Natural shampoo, gentle blow-dry and a thorough brush-out.
                </p>
                <div className="price">
                  <b>
                    Price on request
                  </b>
                  <a href="services.html#implants">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a3} alt="Nail trim" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ⬡
                  </span>
                  <h3>
                    {"Nail Trim"}
                  </h3>
                </div>
                <p>
                  Quick, careful nail trims that keep paws comfortable.
                </p>
                <div className="price">
                  <b>
                    Price on request
                  </b>
                  <a href="services.html#bridges">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a4} alt="De-shedding" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ☀
                  </span>
                  <h3>
                    De-shedding
                  </h3>
                </div>
                <p>
                  Undercoat care that cuts down on loose hair at home.
                </p>
                <div className="price">
                  <b>
                    Price on request
                  </b>
                  <a href="services.html#whitening">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a5} alt="Puppy's first groom" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ♡
                  </span>
                  <h3>
                    Puppy's First Groom
                  </h3>
                </div>
                <p>
                  A short, happy first visit to build confidence for life.
                </p>
                <div className="price">
                  <b>
                    Price on request
                  </b>
                  <a href="services.html#preventive">
                    Details →
                  </a>
                </div>
              </div>
            </article>
            {" "}
            <article className="service card reveal">
              <img src={a6} alt="Cat grooming" />
              <div className="service-body">
                <div className="service-top">
                  <span className="ico">
                    ◎
                  </span>
                  <h3>
                    Cat Grooming
                  </h3>
                </div>
                <p>
                  Calm, quiet grooming for cats, with breaks whenever they need one.
                </p>
                <div className="price">
                  <b>
                    Price on request
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
              Why Paws & Bubbles
            </span>
            {" "}
            <h2 className="h2" style={{ margin: "10px 0 8px", fontSize: "clamp(1.6rem,3vw,2.15rem)" }}>
              Gentle where it counts, fun where it matters
            </h2>
            {" "}
            <p className="lead">
              A calm salon, natural products and certified groomers who never rush your pet.
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
                    Certified groomers
                  </b>
                  <br />
                  <span className="muted">
                    Trained, experienced groomers who know how to keep pets calm.
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
                    Natural shampoos
                  </b>
                  <br />
                  <span className="muted">
                    Kind to skin and coat, with no harsh chemicals.
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
                    Gentle handling
                  </b>
                  <br />
                  <span className="muted">
                    Breaks on request, slow introductions and lots of praise.
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="reassure-media reveal">
            <img src={a6} alt="Groomer with a happy dog" />
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
                Our groomers
              </span>
              <h2 className="h2" style={{ margin: "10px 0 6px" }}>
                Groomers you can trust
              </h2>
              <p className="muted">
                A small, caring team that gets to know every pet by name.
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
              <img src={a7} alt="Groomer name" />
              <div className="person-body">
                <h3>
                  Groomer name
                </h3>
                <p>
                  Lead Groomer
                </p>
                <div className="meta">
                  <span>
                    Full grooms
                  </span>
                  <span>
                    Certified
                  </span>
                </div>
              </div>
            </article>
            {" "}
            <article className="person card reveal">
              <img src={a8} alt="Groomer portrait" />
              <div className="person-body">
                <h3>
                  Groomer name
                </h3>
                <p>
                  {"Cat Specialist"}
                </p>
                <div className="meta">
                  <span>
                    Cats
                  </span>
                  <span>
                    Certified
                  </span>
                </div>
              </div>
            </article>
            {" "}
            <article className="person card reveal">
              <img src={a9} alt="Groomer portrait" />
              <div className="person-body">
                <h3>
                  Groomer name
                </h3>
                <p>
                  Puppy Groom Expert
                </p>
                <div className="meta">
                  <span>
                    Puppies
                  </span>
                  <span>
                    Certified
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
            Pet parent stories
          </span>
          {" "}
          <h2 className="h2" style={{ margin: "10px 0 14px" }}>
            Happy pets, gentle grooms
          </h2>
          {" "}
          <div className="testi-grid">
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a10} alt="" />
                <div>
                  <b>
                    Pet parent
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “Our nervous rescue came home relaxed and smelling amazing. You can tell they take their time.”
              </p>
              <small className="muted">
                Full groom
              </small>
            </figure>
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a11} alt="" />
                <div>
                  <b>
                    Pet parent
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “Finally a groomer my cat doesn't hate. Gentle, calm and her coat looks beautiful.”
              </p>
              <small className="muted">
                Cat grooming
              </small>
            </figure>
            {" "}
            <figure className="quote card reveal">
              <div className="quote-head">
                <img className="avatar" src={a7} alt="" />
                <div>
                  <b>
                    Pet parent
                  </b>
                  <div className="stars">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="muted">
                “Our puppy's first groom was such a positive experience. She can't wait to go back!”
              </p>
              <small className="muted">
                Puppy's first groom
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
                  Book a groom — we'll save a spot
                </h2>
                {" "}
                <p style={{ opacity: ".92" }}>
                  Pick a time, tell us about your pet, and we'll confirm your appointment.
                </p>
                {" "}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                  {" "}
                  <span className="logo-pill">
                    Dogs & cats
                  </span>
                  <span className="logo-pill">
                    Natural shampoos
                  </span>
                  <span className="logo-pill">
                    Certified groomers
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
                      Your name
                    </span>
                    <input name="name" placeholder="Your name" required={true} />
                  </label>
                  {" "}
                  <label className="field">
                    <span>
                      Email
                    </span>
                    <input name="email" type="email" placeholder="you@email.com" required={true} />
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
                      Service
                    </span>
                    <select name="treatment">
                      <option>
                        {"Full groom"}
                      </option>
                      <option>
                        Bath & brush
                      </option>
                      <option>
                        Nail trim
                      </option>
                      <option>
                        Puppy's first groom
                      </option>
                    </select>
                  </label>
                  {" "}
                </div>
                {" "}
                <label className="field">
                  <span>
                    Tell us about your pet
                  </span>
                  <textarea name="message" rows="3" placeholder="Breed, age, anything we should know" />
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
                  We'll confirm your appointment by email.
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
                  PAWS
                  <em>
                    &BUBBLES
                  </em>
                </span>
              </div>
              <p className="muted">
                {"Gentle dog and cat grooming with natural shampoos and certified groomers."}
              </p>
            </div>
            {" "}
            <div>
              <h4>
                Visit
              </h4>
              <p className="muted">
                Your address here
                <br />
                Opening hours here
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
              {" Paws & Bubbles. All rights reserved."}
            </span>
            <span>
              Made with love for pets.
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
