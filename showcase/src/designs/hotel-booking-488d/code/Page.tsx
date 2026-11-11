// Converted from the HTML template hotel-booking-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about-1.webp";
import a3 from "./assets/room-1.webp";
import a4 from "./assets/room-2.webp";
import a5 from "./assets/room-3.webp";
import a6 from "./assets/video.webp";
import a7 from "./assets/testimonial-1.webp";
import a8 from "./assets/testimonial-2.webp";
import a9 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-hotel-booking-488d">
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
              ☀
            </span>
            {" Driftwood Bay, 14º 32' N — 61º 12' W"}
          </p>
          {" "}
          <p className="topbar-item topbar-mid">
            Open all year · Check-in from 2 pm
          </p>
          {" "}
          <p className="topbar-item topbar-end">
            {" "}
            <a href="tel:+18005550182">
              +1 (800) 555-0182
            </a>
            {" "}
            <a href="mailto:stay@sablecove.example">
              stay@sablecove.example
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
              Sable
              <span>
                Cove
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
            <a href="room.html" className="nav-link">
              Rooms
            </a>
            {" "}
            <a href="service.html" className="nav-link">
              Experiences
            </a>
            {" "}
            <a href="team.html" className="nav-link">
              Our People
            </a>
            {" "}
            <a href="testimonial.html" className="nav-link">
              Reviews
            </a>
            {" "}
            <a href="blog.html" className="nav-link">
              Journal
            </a>
            {" "}
            <a href="contact.html" className="nav-link">
              Contact
            </a>
            {" "}
            <a href="booking.html" className="nav-cta">
              Book a Stay
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
            <img src={a0} alt="" />
            {" "}
            <img src={a1} alt="" className="active" />
            {" "}
          </div>
          {" "}
          <div className="hero-shade" aria-hidden="true" />
          {" "}
          <div className="container hero-inner">
            {" "}
            <p className="hero-eyebrow">
              A boutique hideaway on Driftwood Bay
            </p>
            {" "}
            <h1 className="hero-title">
              {"Where the tide sets the rhythm "}
              <em>
                and the day follows.
              </em>
            </h1>
            {" "}
            <p className="hero-sub">
              Eighteen sea-view rooms, a beachfront terrace, a tidal-wellness spa — and not a single alarm clock.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="booking.html" className="btn btn-primary">
                Reserve your room
              </a>
              {" "}
              <a href="room.html" className="btn btn-ghost">
                Explore the rooms
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-meta">
              {" "}
              <span>
                <strong>
                  18
                </strong>
                {" sea-view rooms"}
              </span>
              {" "}
              <span>
                <strong>
                  2 min
                </strong>
                {" from the sand"}
              </span>
              {" "}
              <span>
                <strong>
                  4.9
                </strong>
                {" / 5 guest rating"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="checkin-wrap">
            {" "}
            <div className="container">
              {" "}
              <form className="checkin-bar" data-form="" noValidate={true}>
                {" "}
                <div className="checkin-field">
                  {" "}
                  <label htmlFor="ck-in">
                    Arrival
                  </label>
                  {" "}
                  <input id="ck-in" type="date" name="arrival" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="checkin-field">
                  {" "}
                  <label htmlFor="ck-out">
                    Departure
                  </label>
                  {" "}
                  <input id="ck-out" type="date" name="departure" required={true} />
                  {" "}
                </div>
                {" "}
                <div className="checkin-field">
                  {" "}
                  <label htmlFor="ck-guests">
                    Guests
                  </label>
                  {" "}
                  <select id="ck-guests" name="guests">
                    {" "}
                    <option value="1">
                      1 guest
                    </option>
                    {" "}
                    <option value="2">
                      2 guests
                    </option>
                    {" "}
                    <option value="3">
                      3 guests
                    </option>
                    {" "}
                    <option value="4">
                      4+ guests
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn-primary checkin-submit">
                  Check availability
                </button>
                {" "}
                <p className="form-msg form-ok">
                  Good news — those dates are open. Our team will confirm within the hour.
                </p>
                {" "}
                <p className="form-msg form-err">
                  Please choose your arrival and departure dates.
                </p>
                {" "}
              </form>
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
            <div className="usp-strip reveal">
              {" "}
              <div className="usp">
                {" "}
                <span className="usp-num">
                  01
                </span>
                {" "}
                <h3>
                  Beachfront terrace
                </h3>
                {" "}
                <p>
                  Sun loungers, cold towels and a bar that never closes before sunset.
                </p>
                {" "}
              </div>
              {" "}
              <div className="usp">
                {" "}
                <span className="usp-num">
                  02
                </span>
                {" "}
                <h3>
                  Tide kitchen
                </h3>
                {" "}
                <p>
                  Line-caught and garden-grown, on the table within hours of landing.
                </p>
                {" "}
              </div>
              {" "}
              <div className="usp">
                {" "}
                <span className="usp-num">
                  03
                </span>
                {" "}
                <h3>
                  {"Stay & surf"}
                </h3>
                {" "}
                <p>
                  Free boards, lessons at dawn and a reliable little point break out front.
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
        <section className="section section-cream">
          {" "}
          <div className="container split">
            {" "}
            <div className="split-media reveal">
              {" "}
              <img src={a2} alt="The Sable Cove lobby with woven rattan seating and sea-glass lamps" loading="lazy" />
              {" "}
              <span className="exp-badge">
                Est. 1987
              </span>
              {" "}
            </div>
            {" "}
            <div className="split-copy reveal">
              {" "}
              <p className="eyebrow">
                A family inn, grown slow
              </p>
              {" "}
              <h2 className="section-title">
                {"Forty years of hosting — "}
                <em>
                  still hand-written guest books.
                </em>
              </h2>
              {" "}
              <p>
                What began as a four-room guesthouse above a fisherman's shed is now a full boutique hotel — run by the same family, at the same unhurried pace. Nothing about Sable Cove is chain-standard, and we intend to keep it that way.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Refurbished in 2024 — original beams kept, comfort added
                </li>
                {" "}
                <li>
                  Rates include breakfast, beach bikes and the spa pool
                </li>
                {" "}
                <li>
                  Low-season weeks are quieter, cooler and kinder to the wallet
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn-outline">
                Read our story
              </a>
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
                {"Rooms & suites"}
              </p>
              {" "}
              <h2 className="section-title">
                Pick your view.
              </h2>
              {" "}
              <p className="section-sub">
                Every room faces the water. The only real question is how close you want to be.
              </p>
              {" "}
            </div>
            {" "}
            <div className="room-grid">
              {" "}
              <article className="room-card reveal">
                {" "}
                <div className="room-media">
                  {" "}
                  <img src={a3} alt="The Dune Room with a king bed, linen curtains and a sea-facing balcony" loading="lazy" />
                  {" "}
                  <span className="room-tag">
                    Most loved
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="room-body">
                  {" "}
                  <div className="room-head">
                    {" "}
                    <h3>
                      The Dune Room
                    </h3>
                    {" "}
                    <span className="room-price">
                      from $210
                      <span>
                        / night
                      </span>
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    King bed, balcony over the dunes, walk-in rain shower. Sleeps two.
                  </p>
                  {" "}
                  <div className="room-foot">
                    {" "}
                    <span className="room-fac">
                      28 m²
                    </span>
                    {" "}
                    <span className="room-fac">
                      Balcony
                    </span>
                    {" "}
                    <span className="room-fac">
                      Breakfast incl.
                    </span>
                    {" "}
                    <a href="booking.html" className="room-link">
                      Book →
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="room-card reveal">
                {" "}
                <div className="room-media">
                  {" "}
                  <img src={a4} alt="The Tide Suite with a freestanding bath and a wide sea-view window" loading="lazy" />
                  {" "}
                  <span className="room-tag">
                    Sea view
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="room-body">
                  {" "}
                  <div className="room-head">
                    {" "}
                    <h3>
                      The Tide Suite
                    </h3>
                    {" "}
                    <span className="room-price">
                      from $340
                      <span>
                        / night
                      </span>
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Separate living room, freestanding bath at the window, four-poster bed.
                  </p>
                  {" "}
                  <div className="room-foot">
                    {" "}
                    <span className="room-fac">
                      48 m²
                    </span>
                    {" "}
                    <span className="room-fac">
                      Sea bath
                    </span>
                    {" "}
                    <span className="room-fac">
                      Breakfast incl.
                    </span>
                    {" "}
                    <a href="booking.html" className="room-link">
                      Book →
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="room-card reveal">
                {" "}
                <div className="room-media">
                  {" "}
                  <img src={a5} alt="The Lighthouse House, a garden cottage with its own fire pit" loading="lazy" />
                  {" "}
                  <span className="room-tag">
                    Self-catered
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="room-body">
                  {" "}
                  <div className="room-head">
                    {" "}
                    <h3>
                      The Lighthouse House
                    </h3>
                    {" "}
                    <span className="room-price">
                      from $270
                      <span>
                        / night
                      </span>
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <p>
                    Our garden cottage — kitchenette, fire pit and a hammock under the palms.
                  </p>
                  {" "}
                  <div className="room-foot">
                    {" "}
                    <span className="room-fac">
                      38 m²
                    </span>
                    {" "}
                    <span className="room-fac">
                      Garden
                    </span>
                    {" "}
                    <span className="room-fac">
                      Kitchenette
                    </span>
                    {" "}
                    <a href="booking.html" className="room-link">
                      Book →
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-cta reveal">
              {" "}
              <a href="room.html" className="btn btn-outline">
                {"See all rooms & suites"}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-dark">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head light reveal">
              {" "}
              <p className="eyebrow">
                Experiences
              </p>
              {" "}
              <h2 className="section-title">
                {"Stay is the start — "}
                <em>
                  the bay is the rest.
                </em>
              </h2>
              {" "}
              <p className="section-sub">
                Guided, genuine and unhurried. Led by people who grew up on this water.
              </p>
              {" "}
            </div>
            {" "}
            <div className="exp-grid">
              {" "}
              <article className="exp-card reveal">
                {" "}
                <span className="exp-icon" aria-hidden="true">
                  🌊
                </span>
                {" "}
                <h3>
                  Dawn surf lesson
                </h3>
                {" "}
                <p>
                  Boards, wet suits and a patient local coach. Flat water most mornings — perfect for first-timers.
                </p>
                {" "}
              </article>
              {" "}
              <article className="exp-card reveal">
                {" "}
                <span className="exp-icon" aria-hidden="true">
                  🪿
                </span>
                {" "}
                <h3>
                  Kelp forest snorkel
                </h3>
                {" "}
                <p>
                  Mask, fins and a marine guide to the clear side of the bay. Turtles are frequent guests.
                </p>
                {" "}
              </article>
              {" "}
              <article className="exp-card reveal">
                {" "}
                <span className="exp-icon" aria-hidden="true">
                  🍤
                </span>
                {" "}
                <h3>
                  Kitchen table dinner
                </h3>
                {" "}
                <p>
                  Ten seats, one long table, whatever the catch was this morning. Book the night before.
                </p>
                {" "}
              </article>
              {" "}
              <article className="exp-card reveal">
                {" "}
                <span className="exp-icon" aria-hidden="true">
                  🧖
                </span>
                {" "}
                <h3>
                  Tidal wellness
                </h3>
                {" "}
                <p>
                  Salt-pool mornings, sunset yoga on the terrace, and massages timed to the tide.
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
        <section className="section">
          {" "}
          <div className="container split split-rev">
            {" "}
            <div className="split-media reveal">
              {" "}
              <img src={a6} alt="Guests toasting on the Sable Cove beachfront terrace at golden hour" loading="lazy" />
              {" "}
              <span className="play-btn" aria-hidden="true">
                ▶
              </span>
              {" "}
            </div>
            {" "}
            <div className="split-copy reveal">
              {" "}
              <p className="eyebrow">
                The hospitality band
              </p>
              {" "}
              <h2 className="section-title">
                {"A small crew, "}
                <em>
                  a very long memory.
                </em>
              </h2>
              {" "}
              <p>
                Most of our team have been here a decade or more. They know your name by the second morning, your coffee by the third, and the best table for tonight's sunset without being asked.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  24-hour front desk — night owls welcome
                </li>
                {" "}
                <li>
                  Complimentary airport pickup, twice daily
                </li>
                {" "}
                <li>
                  Laundry, bikes, boards and binoculars on loan
                </li>
                {" "}
              </ul>
              {" "}
              <a href="team.html" className="btn btn-outline">
                Meet the crew
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="section section-cream">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <p className="eyebrow">
                Guest book
              </p>
              {" "}
              <h2 className="section-title">
                {"They came for the view, "}
                <em>
                  stayed for the welcome.
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
                  <img src={a7} alt="" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      {"Maya & Jonah"}
                    </h3>
                    {" "}
                    <span className="tst-stars">
                      ★★★★★
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  "The staff remembered our names — and our order — by day two. We extended twice and still didn't want to leave."
                </p>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a8} alt="" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      Daniel Reyes
                    </h3>
                    {" "}
                    <span className="tst-stars">
                      ★★★★★
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  "The dawn surf lesson was worth the whole trip. Patient coaches, warm water, and coffee waiting when we came in."
                </p>
                {" "}
              </article>
              {" "}
              <article className="tst-card reveal">
                {" "}
                <div className="tst-head">
                  {" "}
                  <img src={a9} alt="" className="tst-avatar" loading="lazy" />
                  {" "}
                  <div>
                    {" "}
                    <h3>
                      The Okafor Family
                    </h3>
                    {" "}
                    <span className="tst-stars">
                      ★★★★★
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <p>
                  "Four kids, zero stress. The kitchen table dinner became the favourite memory of our whole holiday."
                </p>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="section-cta reveal">
              {" "}
              <a href="testimonial.html" className="btn btn-outline">
                Read more reviews
              </a>
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
                The Sable journal
              </p>
              {" "}
              <h2 className="section-title">
                Notes from the bay.
              </h2>
              {" "}
            </div>
            {" "}
            <div className="blog-grid">
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a1} alt="Low tide at Driftwood Bay, late afternoon" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Field note · April 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      When the tide goes out — a guide to low-water walks
                    </a>
                  </h3>
                  {" "}
                  <p>
                    The best time to see the bay is the hour nobody else is out.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-link">
                    Read the note →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a0} alt="The Sable Cove terrace at dusk, lanterns lit" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Kitchen diary · March 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      What the tide kitchen does with the morning catch
                    </a>
                  </h3>
                  {" "}
                  <p>
                    A short, honest recipe from the stove at Sable Cove.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-link">
                    Read the note →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <img src={a4} alt="The Tide Suite window seat overlooking the bay" loading="lazy" />
                {" "}
                <div className="post-body">
                  {" "}
                  <span className="post-meta">
                    Housekeeping · February 2026
                  </span>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Why every Sable room has a window seat
                    </a>
                  </h3>
                  {" "}
                  <p>
                    On the small decisions that make a room feel like a retreat.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-link">
                    Read the note →
                  </a>
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
        <section className="cta-section">
          {" "}
          <div className="container cta-inner reveal">
            {" "}
            <p className="eyebrow">
              The bay is waiting
            </p>
            {" "}
            <h2 className="cta-title">
              {"Two minutes from the sand, "}
              <em>
                a world from the usual.
              </em>
            </h2>
            {" "}
            <p className="cta-sub">
              Rooms are few and the season fills fast. Check our live availability, or write to us with a date in mind.
            </p>
            {" "}
            <div className="cta-actions">
              {" "}
              <a href="booking.html" className="btn btn-accent">
                Check availability
              </a>
              {" "}
              <a href="contact.html" className="btn btn-ghost-dark">
                Ask us anything
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
                Sable
                <span>
                  Cove
                </span>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              {"Boutique hotel & coastal kitchen on Driftwood Bay. Eighteen rooms, one very long welcome."}
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                IG
              </a>
              {" "}
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                FB
              </a>
              {" "}
              <a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="Tripadvisor">
                TA
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-col">
            {" "}
            <h3>
              Explore
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="about.html">
                  About Sable Cove
                </a>
              </li>
              {" "}
              <li>
                <a href="room.html">
                  {"Rooms & suites"}
                </a>
              </li>
              {" "}
              <li>
                <a href="service.html">
                  Experiences
                </a>
              </li>
              {" "}
              <li>
                <a href="team.html">
                  Our people
                </a>
              </li>
              {" "}
              <li>
                <a href="blog.html">
                  Journal
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
              Guests
            </h3>
            {" "}
            <ul className="footer-links">
              {" "}
              <li>
                <a href="booking.html">
                  Book a stay
                </a>
              </li>
              {" "}
              <li>
                <a href="testimonial.html">
                  Guest reviews
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  {"Contact & directions"}
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  Resort map
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
                1 Driftwood Bay Road, Sable, SB 1029
              </li>
              {" "}
              <li>
                <a href="tel:+18005550182">
                  +1 (800) 555-0182
                </a>
              </li>
              {" "}
              <li>
                <a href="mailto:stay@sablecove.example">
                  stay@sablecove.example
                </a>
              </li>
              {" "}
            </ul>
            {" "}
            <form className="newsletter" data-form="" noValidate={true}>
              {" "}
              <label htmlFor="nl-email" className="sr-only">
                Email for the tide letter
              </label>
              {" "}
              <input id="nl-email" type="email" name="email" placeholder="Get the tide letter" required={true} />
              {" "}
              <button type="submit" className="btn btn-primary btn-sm">
                Join
              </button>
              {" "}
              <p className="form-msg form-ok">
                Welcome to the tide letter — first one this Friday.
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
              {" Sable Cove Hotel. All rights reserved."}
            </p>
            {" "}
            <p>
              Designed with care on the coast.
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
