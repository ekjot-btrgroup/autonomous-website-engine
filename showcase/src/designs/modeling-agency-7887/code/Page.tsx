// Converted from the HTML template modeling-agency-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/poseify.webp";
import a3 from "./assets/team-1.webp";
import a4 from "./assets/team-2.webp";
import a5 from "./assets/team-3.webp";
import a6 from "./assets/team-4.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/footer-bg.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-modeling-agency-7887">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="container header-inner">
          {" "}
          <a className="brand" href="index.html">
            <span className="brand-dot" />
            Poseify
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>
          {" "}
          <nav className="nav-links" aria-label="Primary">
            {" "}
            <a className="nav-link" href="index.html">
              Home
            </a>
            {" "}
            <a className="nav-link" href="about.html">
              Studio
            </a>
            {" "}
            <a className="nav-link" href="service.html">
              Services
            </a>
            {" "}
            <a className="nav-link" href="team.html">
              Roster
            </a>
            {" "}
            <a className="nav-link" href="testimonial.html">
              Voices
            </a>
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
            {" "}
            <a className="nav-link nav-cta" href="contact.html">
              Book now
            </a>
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
          <div className="hero-shade" />
          {" "}
          <div className="hero-inner">
            {" "}
            <p className="hero-kicker reveal">
              No. 01 — Spring / Summer Editorial
            </p>
            {" "}
            <h1 className="hero-title reveal">
              POSE
              <span className="outline-acid">
                IFY
              </span>
            </h1>
            {" "}
            <p className="hero-sub reveal rd-1">
              {"Model & Talent Agency — Milan · Paris · New York"}
            </p>
            {" "}
            <div className="hero-cta reveal rd-2">
              {" "}
              <a className="btn btn-acid" href="team.html">
                {"Meet the roster "}
                <span className="arr">
                  →
                </span>
              </a>
              {" "}
              <a className="btn btn-ghost" href="contact.html">
                Book a model
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta reveal rd-3">
              {" "}
              <span>
                <b>
                  120+
                </b>
                {" models"}
              </span>
              {" "}
              <span>
                <b>
                  40
                </b>
                {" cities"}
              </span>
              {" "}
              <span>
                <b>
                  320
                </b>
                {" campaigns"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <span className="hero-rail" aria-hidden="true">
            {"Model & Talent — Est. 2019"}
          </span>
          {" "}
          <span className="hero-scroll" aria-hidden="true">
            Scroll
          </span>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="ticker" aria-hidden="true">
          {" "}
          <div className="ticker-track">
            {" "}
            <span>
              {"Runway Casting "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Editorial "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Beauty "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Menswear "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"E-Commerce "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Talent Management "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Runway Casting "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Editorial "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Beauty "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Menswear "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"E-Commerce "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
            <span>
              {"Talent Management "}
              <span className="star">
                ★
              </span>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section" id="studio">
          {" "}
          <span className="wm" aria-hidden="true">
            POSÉ
          </span>
          {" "}
          <div className="container">
            {" "}
            <div className="split split-2">
              {" "}
              <div className="figure figure-tall reveal">
                {" "}
                <img src={a2} alt="Poseify editorial campaign portrait" />
                {" "}
                <span className="fig-cap">
                  Editorial Division
                </span>
                {" "}
              </div>
              {" "}
              <div className="prose reveal rd-1">
                {" "}
                <p className="label">
                  Studio — Est. 2019
                </p>
                {" "}
                <h2 className="big-type section-title" style={{ fontSize: "var(--fs-h2)", margin: "1rem 0 1.6rem" }}>
                  Not just models.
                  <br />
                  {"The "}
                  <span className="outline">
                    look
                  </span>
                  {" behind the look."}
                </h2>
                {" "}
                <p className="lead">
                  {"Poseify is an independent model & talent agency built on a single obsession — the frame. We cast, curate and manage faces that stop the scroll and hold the room."}
                </p>
                {" "}
                <p className="dropcap">
                  From Milan to Paris to New York, our bookers work inside fashion week madness, on-set chaos and the quiet discipline of beauty campaigns. Every face we represent is scouted, mentored and moved with intent — no volume for volume's sake.
                </p>
                {" "}
                <p>
                  We think of the agency less as a directory and more as a studio: image-makers, casting directors and stylists bring us a brief; we bring them a face the world won't forget.
                </p>
                {" "}
                <p style={{ marginTop: "2rem" }}>
                  <a className="btn btn-ghost" href="about.html">
                    {"Inside the studio "}
                    <span className="arr">
                      →
                    </span>
                  </a>
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
        <section className="section" id="services" style={{ paddingTop: "0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <div>
                {" "}
                <p className="label">
                  What we do
                </p>
                {" "}
                <h2 className="big-type section-title">
                  {"Four ways to "}
                  <span className="accent">
                    own
                  </span>
                  {" the frame."}
                </h2>
                {" "}
              </div>
              {" "}
              <a className="section-link" href="service.html">
                {"All services "}
                <span className="arr">
                  →
                </span>
              </a>
              {" "}
            </div>
            {" "}
            <div className="num-list">
              {" "}
              <a className="num-item reveal" href="service.html">
                {" "}
                <span className="no">
                  01
                </span>
                {" "}
                <div>
                  {" "}
                  <h3>
                    {"Runway & Show Casting"}
                  </h3>
                  {" "}
                  <p>
                    End-to-end casting for fashion weeks, brand presentations and designer showcases — from brief to fitting to the final walk.
                  </p>
                  {" "}
                  <div className="tag">
                    <em>
                      Fashion week
                    </em>
                    <em>
                      Showrooms
                    </em>
                    <em>
                      Fittings
                    </em>
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="go">
                  →
                </span>
                {" "}
              </a>
              {" "}
              <a className="num-item reveal" href="service.html">
                {" "}
                <span className="no">
                  02
                </span>
                {" "}
                <div>
                  {" "}
                  <h3>
                    {"Editorial & Campaign"}
                  </h3>
                  {" "}
                  <p>
                    Models for magazine stories, lookbooks and full-scale campaigns, matched to the art direction by our casting directors.
                  </p>
                  {" "}
                  <div className="tag">
                    <em>
                      Magazines
                    </em>
                    <em>
                      Lookbooks
                    </em>
                    <em>
                      Campaigns
                    </em>
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="go">
                  →
                </span>
                {" "}
              </a>
              {" "}
              <a className="num-item reveal" href="service.html">
                {" "}
                <span className="no">
                  03
                </span>
                {" "}
                <div>
                  {" "}
                  <h3>
                    {"Commercial & Digital"}
                  </h3>
                  {" "}
                  <p>
                    E-commerce, film, motion and social-first talent — faces built for conversion as much as for the cover.
                  </p>
                  {" "}
                  <div className="tag">
                    <em>
                      E-commerce
                    </em>
                    <em>
                      Film
                    </em>
                    <em>
                      Social
                    </em>
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="go">
                  →
                </span>
                {" "}
              </a>
              {" "}
              <a className="num-item reveal" href="service.html">
                {" "}
                <span className="no">
                  04
                </span>
                {" "}
                <div>
                  {" "}
                  <h3>
                    Talent Management
                  </h3>
                  {" "}
                  <p>
                    Career development, bookings, contracts and global movement — long-term representation for serious careers.
                  </p>
                  {" "}
                  <div className="tag">
                    <em>
                      Development
                    </em>
                    <em>
                      Contracts
                    </em>
                    <em>
                      Movement
                    </em>
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="go">
                  →
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="break">
          {" "}
          <div className="container">
            {" "}
            <h2 className="big-type reveal" style={{ fontSize: "clamp(2.8rem, 9vw, 7.5rem)" }}>
              <span className="visa">
                STRUT.
              </span>
              <br />
              STARE.
              <br />
              <span className="accent">
                OWN THE ROOM.
              </span>
            </h2>
            {" "}
            <p className="reveal rd-1" style={{ color: "var(--bone-dim)", maxWidth: "44ch", marginTop: "1.6rem", fontSize: "var(--fs-lead)" }}>
              Every face on our board is trained to hit the mark, hold the beat and walk away knowing they were watched.
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" id="roster">
          {" "}
          <span className="wm" aria-hidden="true" style={{ right: "-2rem", top: "2rem" }}>
            BOARD
          </span>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <div>
                {" "}
                <p className="label">
                  The board
                </p>
                {" "}
                <h2 className="big-type section-title">
                  {"Faces on "}
                  <span className="outline">
                    rotation
                  </span>
                  .
                </h2>
                {" "}
              </div>
              {" "}
              <a className="section-link" href="team.html">
                {"Full roster "}
                <span className="arr">
                  →
                </span>
              </a>
              {" "}
            </div>
            {" "}
            <div className="roster">
              {" "}
              <article className="model-card reveal">
                {" "}
                <div className="m-wrap">
                  <img src={a3} alt="Model Amara Voss" />
                  <span className="m-no">
                    01
                  </span>
                </div>
                {" "}
                <div className="m-hover">
                  <p>
                    {"Editorial & beauty, currently in Paris. Available worldwide."}
                  </p>
                  <a href="team.html">
                    View profile →
                  </a>
                </div>
                {" "}
                <div className="m-body">
                  {" "}
                  <h3>
                    Amara Voss
                  </h3>
                  {" "}
                  <p className="m-meta">
                    Runway · Editorial · 180 cm
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="model-card reveal rd-1">
                {" "}
                <div className="m-wrap">
                  <img src={a4} alt="Model Noor Adeyemi" />
                  <span className="m-no">
                    02
                  </span>
                </div>
                {" "}
                <div className="m-hover">
                  <p>
                    Haute couture favourite with a signature editorial gaze.
                  </p>
                  <a href="team.html">
                    View profile →
                  </a>
                </div>
                {" "}
                <div className="m-body">
                  {" "}
                  <h3>
                    Noor Adeyemi
                  </h3>
                  {" "}
                  <p className="m-meta">
                    Haute Couture · 179 cm
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="model-card reveal rd-2">
                {" "}
                <div className="m-wrap">
                  <img src={a5} alt="Model Luca Mare" />
                  <span className="m-no">
                    03
                  </span>
                </div>
                {" "}
                <div className="m-hover">
                  <p>
                    Menswear lead for SS — Milan, Paris and beyond.
                  </p>
                  <a href="team.html">
                    View profile →
                  </a>
                </div>
                {" "}
                <div className="m-body">
                  {" "}
                  <h3>
                    Luca Mare
                  </h3>
                  {" "}
                  <p className="m-meta">
                    Menswear · Runway · 187 cm
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="model-card reveal rd-3">
                {" "}
                <div className="m-wrap">
                  <img src={a6} alt="Model Yara Osei" />
                  <span className="m-no">
                    04
                  </span>
                </div>
                {" "}
                <div className="m-hover">
                  <p>
                    Beauty and commercial favourite across three continents.
                  </p>
                  <a href="team.html">
                    View profile →
                  </a>
                </div>
                {" "}
                <div className="m-body">
                  {" "}
                  <h3>
                    Yara Osei
                  </h3>
                  {" "}
                  <p className="m-meta">
                    Beauty · Commercial · 176 cm
                  </p>
                  {" "}
                </div>
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
        <section className="section" style={{ padding: "clamp(2rem,4vw,3rem) 0" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="stats reveal">
              {" "}
              <div className="stat">
                <b>
                  120
                  <sup>
                    +
                  </sup>
                </b>
                <span>
                  Models on board
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  40
                  <sup>
                    +
                  </sup>
                </b>
                <span>
                  Cities covered
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  320
                  <sup>
                    +
                  </sup>
                </b>
                <span>
                  Campaigns booked
                </span>
              </div>
              {" "}
              <div className="stat">
                <b>
                  98
                  <sup>
                    %
                  </sup>
                </b>
                <span>
                  Repeat bookings
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" style={{ paddingTop: "clamp(2.5rem,5vw,4rem)" }}>
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <div>
                {" "}
                <p className="label">
                  Word on the street
                </p>
                {" "}
                <h2 className="big-type section-title">
                  {"They said "}
                  <span className="accent">
                    yes
                  </span>
                  {" to us."}
                </h2>
                {" "}
              </div>
              {" "}
              <a className="section-link" href="testimonial.html">
                {"All voices "}
                <span className="arr">
                  →
                </span>
              </a>
              {" "}
            </div>
            {" "}
            <div className="testi">
              {" "}
              <div className="testi-card reveal" style={{ gridColumn: "1 / -1" }}>
                {" "}
                <span className="qmark">
                  “
                </span>
                {" "}
                <blockquote>
                  Poseify didn't send us a book of faces — they sent us the face. The cast turned an entire collection into a moment. We haven't looked at another agency since.
                </blockquote>
                {" "}
                <div className="testi-who">
                  {" "}
                  <img src={a7} alt="Camille Duret" />
                  {" "}
                  <div>
                    <b>
                      Camille Duret
                    </b>
                    <span>
                      Casting Director — Paris Fashion Week
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <p className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
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
        <section className="section" style={{ paddingTop: "0" }}>
          {" "}
          <div className="container">
            {" "}
            <p className="label reveal" style={{ marginBottom: "1.6rem" }}>
              {"Trusted by houses & studios"}
            </p>
            {" "}
            <div className="logos reveal">
              {" "}
              <span>
                Maison Noire
              </span>
              <span>
                Vera Atelier
              </span>
              <span>
                RIVIERA
              </span>
              <span>
                MODE.NYC
              </span>
              <span>
                Studio Meridian
              </span>
              <span>
                HAUTE 9
              </span>
              <span>
                Orbis Beauty
              </span>
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
      <footer className="site-footer">
        {" "}
        <div className="footer-band" style={{ backgroundImage: `url(${a8})` }}>
          {" "}
          <div className="container">
            {" "}
            <p className="label">
              Start a campaign
            </p>
            {" "}
            <h2 className="footer-title big-type">
              Let's put your name in lights.
            </h2>
            {" "}
            <a className="btn btn-acid" href="contact.html">
              {"Book a consultation "}
              <span className="arr">
                →
              </span>
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-col footer-about">
            {" "}
            <a className="brand" href="index.html">
              <span className="brand-dot" />
              Poseify
            </a>
            {" "}
            <p style={{ marginTop: "1rem" }}>
              {"An international model & talent agency for runway, editorial, commercial and beauty. Milan · Paris · New York."}
            </p>
            {" "}
            <form className="mini-form" data-form="" noValidate={true}>
              {" "}
              <label className="visually-hidden" htmlFor="nl-email">
                Email address
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder="Your email" required={true} />
              {" "}
              <button className="btn btn-acid" type="submit">
                Join
              </button>
              {" "}
              <p className="form-ok">
                Welcome to the front row.
              </p>
              {" "}
              <p className="form-err">
                Please enter your email.
              </p>
              {" "}
            </form>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Explore
            </h3>
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="about.html">
              Studio
            </a>
            {" "}
            <a href="service.html">
              Services
            </a>
            {" "}
            <a href="team.html">
              Roster
            </a>
            {" "}
            <a href="testimonial.html">
              Voices
            </a>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Services
            </h3>
            {" "}
            <a href="service.html">
              Runway Casting
            </a>
            {" "}
            <a href="service.html">
              Editorial
            </a>
            {" "}
            <a href="service.html">
              Commercial
            </a>
            {" "}
            <a href="service.html">
              Talent Management
            </a>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Contact
            </h3>
            {" "}
            <p>
              Via della Spiga 24
              <br />
              20121 Milano, Italy
            </p>
            {" "}
            <a href="mailto:hello@poseify.agency">
              hello@poseify.agency
            </a>
            {" "}
            <a href="tel:+390288001240">
              +39 02 8800 1240
            </a>
            {" "}
            <div className="socials">
              {" "}
              <a href="#" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="#" aria-label="TikTok">
                TT
              </a>
              {" "}
              <a href="#" aria-label="Pinterest">
                PT
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="container footer-bottom">
          {" "}
          <p>
            {"© "}
            <span data-year="">
              2025
            </span>
            {" Poseify Model & Talent Agency. All rights reserved."}
          </p>
          {" "}
          <p>
            Milan · Paris · New York
          </p>
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
