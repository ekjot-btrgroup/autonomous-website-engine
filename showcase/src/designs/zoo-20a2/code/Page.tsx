// Converted from the HTML template zoo-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bg-2.webp";
import a1 from "./assets/bg-1.webp";
import a2 from "./assets/about.webp";
import a3 from "./assets/animal-lg-1.webp";
import a4 from "./assets/animal-lg-2.webp";
import a5 from "./assets/animal-lg-3.webp";
import a6 from "./assets/icon-1.webp";
import a7 from "./assets/icon-2.webp";
import a8 from "./assets/icon-3.webp";
import a9 from "./assets/icon-4.webp";
import a10 from "./assets/icon-5.webp";
import a11 from "./assets/icon-6.webp";
import a12 from "./assets/animal-md-1.webp";
import a13 from "./assets/animal-md-2.webp";
import a14 from "./assets/animal-md-3.webp";
import a15 from "./assets/testimonial-1.webp";
import a16 from "./assets/testimonial-2.webp";
import a17 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Outfit:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-zoo-20a2">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <nav className="nav container" aria-label="Primary navigation">
          {" "}
          <a className="brand" href="index.html" aria-label="Zoofari home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              🦁
            </span>
            {" Zoo"}
            <em>
              fari
            </em>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <ul className="nav-links" id="site-nav">
            {" "}
            <li>
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="animal.html">
                Animals
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="visiting.html">
                Visit
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="membership.html">
                Membership
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="service.html">
                Services
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="testimonial.html">
                Reviews
              </a>
            </li>
            {" "}
            <li className="nav-cta">
              <a className="btn btn--primary btn--arrow" href="visiting.html">
                Book Tickets
              </a>
            </li>
            {" "}
          </ul>
          {" "}
        </nav>
        {" "}
      </header>
      {" "}
      <main>
        {" "}
        {" "}
        <section className="hero" aria-label="Welcome to Zoofari">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a1} alt="Golden savanna at Zoofari wildlife park" className="active" />
            {" "}
            <img src={a0} alt="Lush forest trail inside Zoofari park" />
            {" "}
          </div>
          {" "}
          <div className="hero-inner">
            {" "}
            <span className="hero-eyebrow reveal">
              🌿 Open daily · 9:00 AM – 6:00 PM
            </span>
            {" "}
            <h1 className="hero-title reveal" data-delay="1">
              {"Step Into a World of "}
              <em className="serif-italic">
                Wild Wonder
              </em>
            </h1>
            {" "}
            <p className="hero-sub reveal" data-delay="2">
              Zoofari is a modern wildlife park where 120+ species roam natural, immersive habitats — and every visit becomes an adventure worth roaring about.
            </p>
            {" "}
            <div className="hero-actions reveal" data-delay="3">
              {" "}
              <a className="btn btn--primary btn--arrow" href="visiting.html">
                Plan Your Visit
              </a>
              {" "}
              <a className="btn btn--light" href="animal.html">
                Meet the Animals
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="container hero-strip" aria-label="Park highlights at a glance">
          {" "}
          <div className="strip-card reveal">
            {" "}
            <div className="strip-item">
              {" "}
              <span className="strip-icon" aria-hidden="true">
                🕘
              </span>
              {" "}
              <div>
                {" "}
                <span className="strip-label">
                  Opening Hours
                </span>
                {" "}
                <div className="strip-value">
                  9 AM – 6 PM
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="strip-item">
              {" "}
              <span className="strip-icon" aria-hidden="true">
                🐾
              </span>
              {" "}
              <div>
                {" "}
                <span className="strip-label">
                  {"Species & Exhibits"}
                </span>
                {" "}
                <div className="strip-value">
                  120+ Animals
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="strip-item">
              {" "}
              <span className="strip-icon" aria-hidden="true">
                🎟️
              </span>
              {" "}
              <div>
                {" "}
                <span className="strip-label">
                  Day Pass
                </span>
                {" "}
                <div className="strip-value">
                  From $24
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="strip-item">
              {" "}
              <span className="strip-icon" aria-hidden="true">
                🚌
              </span>
              {" "}
              <div>
                {" "}
                <span className="strip-label">
                  Guided Tours
                </span>
                {" "}
                <div className="strip-value">
                  Every Hour
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
          <div className="container split">
            {" "}
            <div className="split-media reveal">
              {" "}
              <div className="frame">
                {" "}
                <img src={a2} alt="Zoofari park ranger with a friendly animal" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="media-stamp">
                {" "}
                <b>
                  30+
                </b>
                {" "}
                <span>
                  Years of Care
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-body reveal" data-delay="1">
              {" "}
              <span className="eyebrow">
                Welcome to Zoofari
              </span>
              {" "}
              <h2>
                {"Conservation, Connection & "}
                <em className="serif-italic">
                  Curiosity
                </em>
              </h2>
              {" "}
              <p>
                Nestled in rolling green hills, Zoofari is more than a zoo — it's a sanctuary built around the idea that when people connect with wildlife, they protect it. Wander open savanna plains, step into misty rainforests, and watch the world's most remarkable animals thrive.
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Natural, immersive habitats designed around animal wellbeing
                </li>
                {" "}
                <li>
                  Daily keeper talks, feeding sessions and safari-style tours
                </li>
                {" "}
                <li>
                  Hands-on education programs for schools and families
                </li>
                {" "}
                <li>
                  Global conservation partnerships protecting wild places
                </li>
                {" "}
              </ul>
              {" "}
              <a className="btn btn--dark btn--arrow" href="about.html">
                Our Story
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section band">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow">
                Meet the Residents
              </span>
              {" "}
              <h2 className="section-title">
                {"Stars of the "}
                <em className="serif-italic">
                  Savanna
                </em>
              </h2>
              {" "}
              <p className="section-lead">
                A glimpse of the incredible species waiting for you around every bend of the trail.
              </p>
              {" "}
            </div>
            {" "}
            <div className="species-grid">
              {" "}
              <article className="species-card reveal">
                {" "}
                <div className="species-media">
                  {" "}
                  <img src={a3} alt="Majestic lion resting in the grass" loading="lazy" />
                  {" "}
                  <span className="species-tag">
                    Big Cats
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="species-body">
                  {" "}
                  <h3>
                    African Lion
                  </h3>
                  {" "}
                  <div className="species-sci">
                    Panthera leo
                  </div>
                  {" "}
                  <p className="species-desc">
                    The undisputed king of the savanna — meet our pride during the daily 11 AM feeding.
                  </p>
                  {" "}
                  <div className="species-meta">
                    {" "}
                    <span>
                      📍 Savanna Plains
                    </span>
                    {" "}
                    <span>
                      🕚 Keeper Talk 11 AM
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="species-card reveal" data-delay="1">
                {" "}
                <div className="species-media">
                  {" "}
                  <img src={a4} alt="Gentle elephant wandering the park" loading="lazy" />
                  {" "}
                  <span className="species-tag">
                    Giants
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="species-body">
                  {" "}
                  <h3>
                    African Elephant
                  </h3>
                  {" "}
                  <div className="species-sci">
                    Loxodonta africana
                  </div>
                  {" "}
                  <p className="species-desc">
                    Watch our gentle giants splash, forage and connect in the largest habitat on site.
                  </p>
                  {" "}
                  <div className="species-meta">
                    {" "}
                    <span>
                      📍 Elephant Valley
                    </span>
                    {" "}
                    <span>
                      🕚 Bath Time 2 PM
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="species-card reveal" data-delay="2">
                {" "}
                <div className="species-media">
                  {" "}
                  <img src={a5} alt="Tall giraffe reaching for acacia leaves" loading="lazy" />
                  {" "}
                  <span className="species-tag">
                    Skyline
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="species-body">
                  {" "}
                  <h3>
                    Reticulated Giraffe
                  </h3>
                  {" "}
                  <div className="species-sci">
                    Giraffa reticulata
                  </div>
                  {" "}
                  <p className="species-desc">
                    Tower over the treeline and feed a giraffe face-to-face on our elevated platform.
                  </p>
                  {" "}
                  <div className="species-meta">
                    {" "}
                    <span>
                      📍 Giraffe Lookout
                    </span>
                    {" "}
                    <span>
                      🕚 Feed 1 PM
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "center", marginTop: "var(--space-5)" }} className="reveal">
              {" "}
              <a className="btn btn--dark btn--arrow" href="animal.html">
                Explore All Animals
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
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow">
                Why Zoofari
              </span>
              {" "}
              <h2 className="section-title">
                {"An Adventure For "}
                <em className="serif-italic">
                  Everyone
                </em>
              </h2>
              {" "}
              <p className="section-lead">
                From dawn safaris to twilight lantern walks — every corner of the park is made for discovery.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-grid">
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-icon">
                  <img src={a6} alt="Safari tour icon" />
                </div>
                {" "}
                <h3>
                  Safari Tours
                </h3>
                {" "}
                <p>
                  Hop aboard our open-air safari trucks for a guided ride across the plains with expert rangers.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal" data-delay="1">
                {" "}
                <div className="feature-icon">
                  <img src={a7} alt="Education program icon" />
                </div>
                {" "}
                <h3>
                  Education Programs
                </h3>
                {" "}
                <p>
                  Hands-on classrooms, conservation labs and ranger camps that bring wildlife science to life.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal" data-delay="2">
                {" "}
                <div className="feature-icon">
                  <img src={a8} alt="Family fun icon" />
                </div>
                {" "}
                <h3>
                  Family Zones
                </h3>
                {" "}
                <p>
                  Playgrounds, splash pads and meet-the-critters corners designed for little explorers.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal">
                {" "}
                <div className="feature-icon">
                  <img src={a9} alt="Birthday party icon" />
                </div>
                {" "}
                <h3>
                  Wild Birthday Parties
                </h3>
                {" "}
                <p>
                  Celebrate with private pavilions, animal encounters and a day pass for every guest.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal" data-delay="1">
                {" "}
                <div className="feature-icon">
                  <img src={a10} alt="Cafeteria icon" />
                </div>
                {" "}
                <h3>
                  Savanna Cafés
                </h3>
                {" "}
                <p>
                  Fresh, locally-sourced bites with sweeping views over the elephant and giraffe habitats.
                </p>
                {" "}
              </div>
              {" "}
              <div className="feature-card reveal" data-delay="2">
                {" "}
                <div className="feature-icon">
                  <img src={a11} alt="Night safari icon" />
                </div>
                {" "}
                <h3>
                  Twilight Safaris
                </h3>
                {" "}
                <p>
                  After the gates close, watch the park come alive under the stars on a special night tour.
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
        <section className="section band--dark">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="eyebrow">
                Habitat Diaries
              </span>
              {" "}
              <h2 className="section-title">
                {"Life Inside The "}
                <em className="serif-italic">
                  Enclosure
                </em>
              </h2>
              {" "}
              <p className="section-lead">
                Peek behind the scenes at how our keepers care for the world's most amazing creatures.
              </p>
              {" "}
            </div>
            {" "}
            <div className="media-grid">
              {" "}
              <article className="media-card reveal">
                {" "}
                <div className="media-frame">
                  <img src={a12} alt="Keeper caring for a young animal" loading="lazy" />
                </div>
                {" "}
                <div className="media-body">
                  {" "}
                  <h3>
                    Keeper for a Day
                  </h3>
                  {" "}
                  <p>
                    Shadow our rangers and prepare enrichment, feeds and habitats alongside the pros.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="media-card reveal" data-delay="1">
                {" "}
                <div className="media-frame">
                  <img src={a13} alt="Young visitor meeting wildlife" loading="lazy" />
                </div>
                {" "}
                <div className="media-body">
                  {" "}
                  <h3>
                    Little Explorers Club
                  </h3>
                  {" "}
                  <p>
                    Junior rangers earn badges as they complete animal missions across the park.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="media-card reveal" data-delay="2">
                {" "}
                <div className="media-frame">
                  <img src={a14} alt="Team of animals in their habitat" loading="lazy" />
                </div>
                {" "}
                <div className="media-body">
                  {" "}
                  <h3>
                    Conservation in Action
                  </h3>
                  {" "}
                  <p>
                    From rescue releases to breeding programs, see how your visit protects wild animals.
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
        <section className="section stats" aria-label="Zoofari by the numbers">
          {" "}
          <div className="container stats-grid">
            {" "}
            <div className="stat-item reveal">
              {" "}
              <b>
                120+
              </b>
              {" "}
              <span>
                Animal Species
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal" data-delay="1">
              {" "}
              <b>
                18
              </b>
              {" "}
              <span>
                Natural Habitats
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal" data-delay="2">
              {" "}
              <b>
                400K
              </b>
              {" "}
              <span>
                Visitors Yearly
              </span>
              {" "}
            </div>
            {" "}
            <div className="stat-item reveal" data-delay="3">
              {" "}
              <b>
                60+
              </b>
              {" "}
              <span>
                Conservation Projects
              </span>
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
          <div className="container">
            {" "}
            <div className="section-head section-head--center reveal">
              {" "}
              <span className="eyebrow">
                Guest Stories
              </span>
              {" "}
              <h2 className="section-title">
                {"Roars of "}
                <em className="serif-italic">
                  Approval
                </em>
              </h2>
              {" "}
              <p className="section-lead">
                Thousands of families visit every year. Here's what they say when they get home.
              </p>
              {" "}
            </div>
            {" "}
            <div className="quote-grid">
              {" "}
              <figure className="quote-card reveal">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <div className="quote-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote className="quote-text">
                  The giraffe feeding platform was the highlight of our year. Staff were so knowledgeable and the animals clearly loved, cared for.
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <span className="quote-avatar">
                    <img src={a15} alt="Portrait of Sarah Mitchell" loading="lazy" />
                  </span>
                  {" "}
                  <span>
                    <b>
                      Sarah Mitchell
                    </b>
                    <small>
                      Family Visit · Summer
                    </small>
                  </span>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="quote-card reveal" data-delay="1">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <div className="quote-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote className="quote-text">
                  Beautifully designed habitats and the twilight safari is unforgettable. You can tell the animals come first here.
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <span className="quote-avatar">
                    <img src={a16} alt="Portrait of David Okafor" loading="lazy" />
                  </span>
                  {" "}
                  <span>
                    <b>
                      David Okafor
                    </b>
                    <small>
                      Twilight Safari · Spring
                    </small>
                  </span>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
              <figure className="quote-card reveal" data-delay="2">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <div className="quote-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {" "}
                <blockquote className="quote-text">
                  Our daughter's birthday here was flawless — the ranger-led animal encounter made her entire school jealous.
                </blockquote>
                {" "}
                <figcaption className="quote-author">
                  {" "}
                  <span className="quote-avatar">
                    <img src={a17} alt="Portrait of Emily Chen" loading="lazy" />
                  </span>
                  {" "}
                  <span>
                    <b>
                      Emily Chen
                    </b>
                    <small>
                      Birthday Party · Autumn
                    </small>
                  </span>
                  {" "}
                </figcaption>
                {" "}
              </figure>
              {" "}
            </div>
            {" "}
            <div style={{ textAlign: "center", marginTop: "var(--space-5)" }} className="reveal">
              {" "}
              <a className="btn btn--ghost btn--arrow" href="testimonial.html">
                Read More Reviews
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
          <div className="container">
            {" "}
            <div className="cta-band reveal">
              {" "}
              <h2>
                Your Wildest Day Out Starts Here
              </h2>
              {" "}
              <p>
                Book your tickets online, grab a free park map, and start your adventure before you even arrive.
              </p>
              {" "}
              <div className="cta-actions">
                {" "}
                <a className="btn btn--primary btn--arrow" href="visiting.html">
                  Buy Day Passes
                </a>
                {" "}
                <a className="btn btn--light" href="membership.html">
                  Become a Member
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
      </main>
      {" "}
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <a className="brand" href="index.html">
                {" "}
                <span className="brand-mark" aria-hidden="true">
                  🦁
                </span>
                {" Zoo"}
                <em>
                  fari
                </em>
                {" "}
              </a>
              {" "}
              <p className="footer-blurb">
                A modern wildlife park where nature meets wonder. Explore, learn and protect the wild — one unforgettable visit at a time.
              </p>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Explore
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="animal.html">
                    Our Animals
                  </a>
                </li>
                {" "}
                <li>
                  <a href="visiting.html">
                    Plan Your Visit
                  </a>
                </li>
                {" "}
                <li>
                  <a href="testimonial.html">
                    Guest Reviews
                  </a>
                </li>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Visit
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="visiting.html">
                    Opening Hours
                  </a>
                </li>
                {" "}
                <li>
                  <a href="visiting.html">
                    {"Tickets & Passes"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="membership.html">
                    Membership
                  </a>
                </li>
                {" "}
                <li>
                  <a href="service.html">
                    {"Services & Tours"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="visiting.html#faq">
                    FAQ
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Wild Updates
              </h4>
              {" "}
              <p className="footer-blurb" style={{ marginBottom: "0.8rem" }}>
                Join the herd — seasonal news, keeper stories and members-only offers.
              </p>
              {" "}
              <form className="footer-newsletter" data-form="" noValidate={true}>
                {" "}
                <label className="visually-hidden" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }} htmlFor="newsletter-email">
                  Email address
                </label>
                {" "}
                <input type="email" id="newsletter-email" name="email" placeholder="you@example.com" required={true} />
                {" "}
                <button type="submit" className="btn btn--primary">
                  Join
                </button>
                {" "}
                <p className="form-ok" role="status">
                  Welcome to the herd! Check your inbox. 🦒
                </p>
                {" "}
                <p className="form-err" role="alert">
                  Please enter your email address.
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
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Zoofari Wildlife Park. All rights reserved."}
            </p>
            {" "}
            <div className="footer-social">
              {" "}
              <a href="https://uiuxlabz.com" aria-label="Instagram" target="_blank" rel="noopener">
                IG
              </a>
              {" "}
              <a href="https://uiuxlabz.com" aria-label="Facebook" target="_blank" rel="noopener">
                FB
              </a>
              {" "}
              <a href="https://uiuxlabz.com" aria-label="YouTube" target="_blank" rel="noopener">
                YT
              </a>
              {" "}
              <a href="https://uiuxlabz.com" aria-label="Twitter" target="_blank" rel="noopener">
                TW
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
      <button className="back-to-top" aria-label="Back to top">
        ↑
      </button>
      {" "}
      {" "}
    </div>
  );
}
