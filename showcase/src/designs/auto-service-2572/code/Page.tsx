// Converted from the HTML template auto-service-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-bg-1.webp";
import a1 from "./assets/service-1.webp";
import a2 from "./assets/service-2.webp";
import a3 from "./assets/service-3.webp";
import a4 from "./assets/about.webp";
import a5 from "./assets/team-1.webp";
import a6 from "./assets/team-2.webp";
import a7 from "./assets/team-3.webp";
import a8 from "./assets/team-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-auto-service-2572">
      {" "}
      {" "}
      <div className="topbar">
        {" "}
        <div className="topbar__inner">
          {" "}
          <div className="topbar__left">
            {" "}
            <span>
              Mon–Sat 7:00 AM – 6:00 PM
            </span>
            {" "}
            <span className="dot" />
            {" "}
            <span>
              123 Workshop Lane, Auto City
            </span>
            {" "}
          </div>
          {" "}
          <div className="topbar__right">
            {" "}
            <a href="tel:+18005551234">
              (800) 555-1234
            </a>
            {" "}
            <span className="dot" />
            {" "}
            <a href="mailto:info@carserv.com">
              info@carserv.com
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="header__inner">
          {" "}
          <a href="index.html" className="brand">
            {" "}
            <span className="brand__mark">
              C
              <span>
                S
              </span>
            </span>
            {" CAR SERV "}
          </a>
          {" "}
          <nav className="nav" data-nav="">
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="services.html">
              Services
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="header__cta header__cta--desktop">
            Book Now
          </a>
          {" "}
          <button className="burger" data-burger="" aria-label="Menu" aria-expanded="false">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero__grid">
          {" "}
          <div className="hero__copy reveal">
            {" "}
            <span className="eyebrow">
              Trusted Since 2009
            </span>
            {" "}
            <h1 className="display" style={{ marginTop: "14px" }}>
              {"Fast, honest "}
              <span>
                auto repair
              </span>
            </h1>
            {" "}
            <p className="lead" style={{ marginTop: "16px" }}>
              From routine oil changes to complex engine rebuilds, our certified technicians keep your vehicle running at its best. Transparent pricing, guaranteed workmanship.
            </p>
            {" "}
            <ul className="hero__bullets">
              {" "}
              <span>
                Certified Techs
              </span>
              {" "}
              <span>
                Same-Day Service
              </span>
              {" "}
              <span>
                OEM Parts
              </span>
              {" "}
              <span>
                24-Mo Warranty
              </span>
              {" "}
            </ul>
            {" "}
            <div className="hero__actions">
              {" "}
              <a href="services.html" className="btn btn--primary">
                View Services
              </a>
              {" "}
              <a href="contact.html" className="btn btn--ghost">
                Book Appointment
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero__media reveal">
            {" "}
            <img src={a0} alt="Auto repair garage" />
            {" "}
            <div className="hero__badge">
              {" "}
              <i>
                4.9
              </i>
              {" "}
              <div>
                {" "}
                <strong>
                  Top-Rated Garage
                </strong>
                {" "}
                <span>
                  2,400+ reviews
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
      <section className="section--tight">
        {" "}
        <div className="wrap">
          {" "}
          <div className="stats reveal">
            {" "}
            <div className="stats__item">
              {" "}
              <div className="stats__num">
                15
                <em>
                  +
                </em>
              </div>
              {" "}
              <div className="stats__label">
                Years Experience
              </div>
              {" "}
            </div>
            {" "}
            <div className="stats__item">
              {" "}
              <div className="stats__num">
                8K
                <em>
                  +
                </em>
              </div>
              {" "}
              <div className="stats__label">
                Jobs Completed
              </div>
              {" "}
            </div>
            {" "}
            <div className="stats__item">
              {" "}
              <div className="stats__num">
                4.9
                <em>
                  ★
                </em>
              </div>
              {" "}
              <div className="stats__label">
                Customer Rating
              </div>
              {" "}
            </div>
            {" "}
            <div className="stats__item">
              {" "}
              <div className="stats__num">
                Same
                <em>
                  -Day
                </em>
              </div>
              {" "}
              <div className="stats__label">
                Turnaround
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
      <section className="section section--wash">
        {" "}
        <div className="wrap">
          {" "}
          <span className="eyebrow">
            What We Do
          </span>
          {" "}
          <h2 className="display" style={{ marginTop: "8px" }}>
            Popular Services
          </h2>
          {" "}
          <div className="grid grid-3" style={{ marginTop: "28px" }}>
            {" "}
            <a href="services.html" className="card reveal">
              {" "}
              <div className="card__media">
                <img src={a1} alt="Engine diagnostics" />
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <div className="card__kicker">
                  Diagnostics
                </div>
                {" "}
                <h3 className="card__title">
                  Engine Diagnostics
                </h3>
                {" "}
                <p className="card__desc">
                  Advanced computer diagnostics to pinpoint issues fast and get you back on the road.
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="services.html" className="card reveal">
              {" "}
              <div className="card__media">
                <img src={a2} alt="Oil change service" />
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <div className="card__kicker">
                  Maintenance
                </div>
                {" "}
                <h3 className="card__title">
                  {"Oil & Filter Change"}
                </h3>
                {" "}
                <p className="card__desc">
                  Premium synthetic oils and OEM filters to keep your engine running smooth.
                </p>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href="services.html" className="card reveal">
              {" "}
              <div className="card__media">
                <img src={a3} alt="Brake repair" />
              </div>
              {" "}
              <div className="card__body">
                {" "}
                <div className="card__kicker">
                  Safety
                </div>
                {" "}
                <h3 className="card__title">
                  Brake Service
                </h3>
                {" "}
                <p className="card__desc">
                  Complete brake inspection, pad replacement, and rotor resurfacing for safe stops.
                </p>
                {" "}
              </div>
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
      <section className="section">
        {" "}
        <div className="wrap">
          {" "}
          <div className="band">
            {" "}
            <div className="band__media reveal">
              {" "}
              <img src={a4} alt="Our garage team" />
              {" "}
            </div>
            {" "}
            <div className="reveal">
              {" "}
              <span className="eyebrow">
                Why Choose Us
              </span>
              {" "}
              <h2 className="display" style={{ marginTop: "8px" }}>
                Built on trust,
                <br />
                driven by skill
              </h2>
              {" "}
              <p className="lead" style={{ marginTop: "14px" }}>
                We treat every vehicle like it's our own. With certified technicians, transparent estimates, and a commitment to quality, CAR SERV is the garage your car deserves.
              </p>
              {" "}
              <div style={{ marginTop: "22px", display: "grid", gap: "16px" }}>
                {" "}
                <div className="tick">
                  {" "}
                  <i>
                    ✓
                  </i>
                  {" "}
                  <div>
                    <strong>
                      Certified Technicians
                    </strong>
                    <p>
                      ASE-certified team with 15+ years of hands-on experience.
                    </p>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tick">
                  {" "}
                  <i>
                    ✓
                  </i>
                  {" "}
                  <div>
                    <strong>
                      Transparent Pricing
                    </strong>
                    <p>
                      No hidden fees. You approve every dollar before we start.
                    </p>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tick">
                  {" "}
                  <i>
                    ✓
                  </i>
                  {" "}
                  <div>
                    <strong>
                      24-Month Warranty
                    </strong>
                    <p>
                      {"Every repair backed by our comprehensive parts & labor guarantee."}
                    </p>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tick">
                  {" "}
                  <i>
                    ✓
                  </i>
                  {" "}
                  <div>
                    <strong>
                      Same-Day Service
                    </strong>
                    <p>
                      Most jobs done while you wait. Coffee's on us.
                    </p>
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
      <section className="section section--wash">
        {" "}
        <div className="wrap">
          {" "}
          <span className="eyebrow">
            Our Team
          </span>
          {" "}
          <h2 className="display" style={{ marginTop: "8px" }}>
            Meet the Mechanics
          </h2>
          {" "}
          <div className="grid grid-4" style={{ marginTop: "28px" }}>
            {" "}
            <div className="person reveal">
              {" "}
              <div className="person__media">
                <img src={a5} alt="Alex Rivera" />
              </div>
              {" "}
              <div className="person__name">
                Alex Rivera
              </div>
              {" "}
              <div className="person__role">
                Master Technician
              </div>
              {" "}
            </div>
            {" "}
            <div className="person reveal">
              {" "}
              <div className="person__media">
                <img src={a6} alt="Jordan Kim" />
              </div>
              {" "}
              <div className="person__name">
                Jordan Kim
              </div>
              {" "}
              <div className="person__role">
                Diagnostic Specialist
              </div>
              {" "}
            </div>
            {" "}
            <div className="person reveal">
              {" "}
              <div className="person__media">
                <img src={a7} alt="Sam Patel" />
              </div>
              {" "}
              <div className="person__name">
                Sam Patel
              </div>
              {" "}
              <div className="person__role">
                {"Brake & Suspension"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="person reveal">
              {" "}
              <div className="person__media">
                <img src={a8} alt="Morgan Lee" />
              </div>
              {" "}
              <div className="person__name">
                Morgan Lee
              </div>
              {" "}
              <div className="person__role">
                Electrical Systems
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
        <div className="wrap">
          {" "}
          <div className="quote reveal">
            {" "}
            <div>
              {" "}
              <blockquote>
                "Best garage I've ever been to. They explained everything clearly, finished the same day, and the price was exactly what they quoted. Highly recommend CAR SERV."
              </blockquote>
              {" "}
              <div className="quote__meta">
                {" "}
                <div className="quote__avatar">
                  <img src={a5} alt="Customer" />
                </div>
                {" "}
                <div>
                  {" "}
                  <strong>
                    Jamie Torres
                  </strong>
                  <br />
                  {" "}
                  <span className="stars">
                    ★★★★★
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "right" }}>
              {" "}
              <div className="stats__num">
                4.9
                <em>
                  ★
                </em>
              </div>
              {" "}
              <div className="stats__label">
                Average Rating
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
      <section className="section section--dark">
        {" "}
        <div className="wrap" style={{ textAlign: "center" }}>
          {" "}
          <h2 className="display" style={{ color: "#fff" }}>
            Ready to Get Moving?
          </h2>
          {" "}
          <p className="lead" style={{ marginTop: "12px", maxWidth: "520px", marginInline: "auto" }}>
            Schedule your appointment today and experience auto repair done right.
          </p>
          {" "}
          <div style={{ marginTop: "22px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            {" "}
            <a href="contact.html" className="btn btn--primary">
              Book Appointment
            </a>
            {" "}
            <a href="tel:+18005551234" className="btn btn--ghost" style={{ color: "#fff", borderColor: "#4A5560" }}>
              (800) 555-1234
            </a>
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
        <div className="wrap">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                CAR SERV
              </div>
              {" "}
              <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.6" }}>
                Trusted auto repair since 2009. Certified technicians, transparent pricing, guaranteed workmanship.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Quick Links
              </div>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="index.html">
                  Home
                </a>
                {" "}
                <a href="about.html">
                  About Us
                </a>
                {" "}
                <a href="services.html">
                  Services
                </a>
                {" "}
                <a href="contact.html">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Services
              </div>
              {" "}
              <div className="footer__links">
                {" "}
                <a href="services.html">
                  Engine Diagnostics
                </a>
                {" "}
                <a href="services.html">
                  {"Oil & Filter"}
                </a>
                {" "}
                <a href="services.html">
                  Brake Service
                </a>
                {" "}
                <a href="services.html">
                  Tire Rotation
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div className="footer__title">
                Contact
              </div>
              {" "}
              <div className="footer__links">
                {" "}
                <span>
                  123 Workshop Lane
                </span>
                {" "}
                <span>
                  Auto City, AC 90210
                </span>
                {" "}
                <a href="tel:+18005551234">
                  (800) 555-1234
                </a>
                {" "}
                <a href="mailto:info@carserv.com">
                  info@carserv.com
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" CAR SERV. All rights reserved."}
            </span>
            {" "}
            <span>
              Built with precision.
            </span>
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
