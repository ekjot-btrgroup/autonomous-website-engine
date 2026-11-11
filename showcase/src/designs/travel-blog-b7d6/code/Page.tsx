// Converted from the HTML template travel-blog-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/about.webp";
import a1 from "./assets/blog-1.webp";
import a2 from "./assets/blog-2.webp";
import a3 from "./assets/blog-3.webp";
import a4 from "./assets/carousel-1.webp";
import a5 from "./assets/carousel-2.webp";
import a6 from "./assets/destination-1.webp";
import a7 from "./assets/destination-2.webp";
import a8 from "./assets/destination-3.webp";
import a9 from "./assets/destination-4.webp";
import a10 from "./assets/destination-5.webp";
import a11 from "./assets/destination-6.webp";
import a12 from "./assets/about-1.webp";
import a13 from "./assets/about-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800&family=Public+Sans:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-travel-blog-b7d6">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Roamlog
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a className="nav-link active" href="index.html">
                Home
              </a>
              {" "}
              <a className="nav-link" href="destinations.html">
                Destinations
              </a>
              {" "}
              <a className="nav-link" href="blog.html">
                Blog
              </a>
              {" "}
              <a className="nav-link" href="about.html">
                About
              </a>
              {" "}
              <a className="nav-link" href="contact.html">
                Contact
              </a>
              {" "}
              <a className="nav-link nav-cta" href="contact.html">
                Subscribe
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
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
        <section className="editorial-hero container">
          {" "}
          <div className="editorial-hero-content reveal">
            {" "}
            <span className="eyebrow">
              The Journal
            </span>
            {" "}
            <h1>
              Discover the World
              <br />
              <span className="accent">
                Between the Lines
              </span>
            </h1>
            {" "}
            <p className="lede">
              Stories from the road, captured in words and light. ROAMLOG is a travel journal for those who wander not to escape life, but to find it.
            </p>
            {" "}
            <div className="hero-meta">
              {" "}
              <div className="hero-meta-item">
                {" "}
                <span className="hero-meta-num">
                  50+
                </span>
                {" "}
                <span className="hero-meta-label">
                  Posts
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero-meta-item">
                {" "}
                <span className="hero-meta-num">
                  30
                </span>
                {" "}
                <span className="hero-meta-label">
                  Destinations
                </span>
                {" "}
              </div>
              {" "}
              <div className="hero-meta-item">
                {" "}
                <span className="hero-meta-num">
                  12K
                </span>
                {" "}
                <span className="hero-meta-label">
                  Readers
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="editorial-hero-figure reveal">
            {" "}
            <img src={a0} alt="Traveler gazing at a mountain landscape at sunset" />
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <h2 className="section-title">
                Featured Stories
              </h2>
              {" "}
              <p className="section-sub">
                Recent dispatches from the road, handpicked for the curious traveler.
              </p>
              {" "}
            </div>
            {" "}
            <div className="posts-grid">
              {" "}
              <article className="post-card reveal">
                {" "}
                <div className="post-card-media">
                  {" "}
                  <img src={a1} alt="Street market in Marrakech with colorful spices and textiles" loading="lazy" />
                  {" "}
                  <span className="post-card-tag">
                    Culture
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-card-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      Mar 12, 2026
                    </span>
                    {" "}
                    <span className="dot" />
                    {" "}
                    <span>
                      5 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      The Soul of Marrakech: A Walk Through the Medina
                    </a>
                  </h3>
                  {" "}
                  <p className="post-card-excerpt">
                    Lose yourself in the labyrinthine alleys of Marrakech, where every turn reveals a story etched in tile and spice.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-card-link">
                    Read story →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <div className="post-card-media">
                  {" "}
                  <img src={a2} alt="Misty mountain trail in the Swiss Alps with wildflowers" loading="lazy" />
                  {" "}
                  <span className="post-card-tag">
                    Adventure
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-card-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      Feb 28, 2026
                    </span>
                    {" "}
                    <span className="dot" />
                    {" "}
                    <span>
                      7 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Swiss Trails: Hiking the Alpine Pass Route
                    </a>
                  </h3>
                  {" "}
                  <p className="post-card-excerpt">
                    Seven days above the treeline, from the Eiger's shadow to the Matterhorn's gaze — an alpine traverse to remember.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-card-link">
                    Read story →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="post-card reveal">
                {" "}
                <div className="post-card-media">
                  {" "}
                  <img src={a3} alt="Traditional wooden fishing boats on a serene tropical beach in Southeast Asia" loading="lazy" />
                  {" "}
                  <span className="post-card-tag">
                    Coastal
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="post-card-body">
                  {" "}
                  <div className="post-meta">
                    {" "}
                    <span>
                      Jan 15, 2026
                    </span>
                    {" "}
                    <span className="dot" />
                    {" "}
                    <span>
                      6 min read
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3>
                    <a href="blog.html">
                      Vietnam's Hidden Coast: Beyond Ha Long Bay
                    </a>
                  </h3>
                  {" "}
                  <p className="post-card-excerpt">
                    From the limestone karsts of Lan Ha Bay to the sand dunes of Mui Ne, Vietnam's coastline is a tapestry of wonder.
                  </p>
                  {" "}
                  <a href="blog.html" className="post-card-link">
                    Read story →
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
        {" "}
        <section className="journey-band">
          {" "}
          <div className="hero-bg">
            {" "}
            <img src={a4} alt="Scenic mountain landscape with misty peaks" className="active" />
            {" "}
            <img src={a5} alt="Coastal cliffside view overlooking the ocean at golden hour" />
            {" "}
          </div>
          {" "}
          <div className="journey-content">
            {" "}
            <blockquote className="journey-quote">
              The world is a book, and those who do not travel read only one page.
            </blockquote>
            {" "}
            <cite className="journey-attr">
              Every journey begins with a single step
            </cite>
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
            <div className="section-head center">
              {" "}
              <h2 className="section-title">
                Explore Destinations
              </h2>
              {" "}
              <p className="section-sub">
                A curated guide to places that left a mark on our map and our hearts.
              </p>
              {" "}
            </div>
            {" "}
            <div className="destinations-grid">
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a6} alt="Santorini white-washed buildings with blue domes overlooking the Aegean Sea" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Santorini
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Greece
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a7} alt="Cherry blossoms in full bloom along a canal in Kyoto" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Kyoto
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Japan
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a8} alt="Machu Picchu ruins shrouded in morning mist in Peru" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Machu Picchu
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Peru
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a9} alt="Aurora borealis dancing over a snow-covered Nordic landscape" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Tromso
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Norway
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a10} alt="Vast Namib desert dunes meeting the Atlantic Ocean" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Namib Desert
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Namibia
                  </span>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a href="destinations.html" className="dest-card reveal">
                {" "}
                <img src={a11} alt="Traditional Balinese temple gate surrounded by tropical foliage" loading="lazy" />
                {" "}
                <div className="dest-card-overlay">
                  {" "}
                  <span className="dest-card-name">
                    Ubud
                  </span>
                  {" "}
                  <span className="dest-card-region">
                    Bali, Indonesia
                  </span>
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
        <section className="section section-alt">
          {" "}
          <div className="container">
            {" "}
            <div className="about-teaser">
              {" "}
              <div className="about-teaser-media reveal">
                {" "}
                <img src={a12} alt="Travel journal and compass on a wooden table overlooking a valley" loading="lazy" />
                {" "}
                <img src={a13} alt="Hands holding a map while exploring a cobblestone street" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="about-teaser-content reveal">
                {" "}
                <span className="eyebrow">
                  Our Ethos
                </span>
                {" "}
                <h2>
                  Roam Without Limits
                </h2>
                {" "}
                <p>
                  ROAMLOG was born from a simple belief: that the best stories are found between destinations, not just at them. Founded by a collective of writers, photographers, and lifelong wanderers, we document the world with curiosity and care.
                </p>
                {" "}
                <p>
                  Our approach is slow, intentional, and deeply human. We stay in local guesthouses, eat where the locals eat, and listen more than we speak. Every post is a love letter to a place.
                </p>
                {" "}
                <a href="about.html" className="btn btn-primary">
                  Read Our Story
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
        {" "}
        <section className="newsletter-band">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <h2 className="section-title">
                Stay Curious
              </h2>
              {" "}
              <p className="section-sub">
                Get new stories, destination guides, and travel tips delivered to your inbox every month. No spam, just wanderlust.
              </p>
              {" "}
            </div>
            {" "}
            <form className="newsletter-form" data-form="" noValidate={true}>
              {" "}
              <div className="newsletter-fields">
                {" "}
                <div className="form-group">
                  {" "}
                  <label htmlFor="nl-email" className="form-label sr-only">
                    Email address
                  </label>
                  {" "}
                  <input type="email" id="nl-email" className="form-input" placeholder="Enter your email" required={true} />
                  {" "}
                </div>
                {" "}
                <button type="submit" className="btn btn-light">
                  Subscribe
                </button>
                {" "}
              </div>
              {" "}
              <div className="form-ok" aria-live="polite" />
              {" "}
              <div className="form-err" aria-live="assertive" />
              {" "}
            </form>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="nav-logo">
                Roamlog
              </a>
              {" "}
              <p>
                A travel journal for the curious. We explore the world's hidden corners and share stories that inspire you to pack your bags.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-col-title">
                Explore
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="destinations.html">
                  Destinations
                </a>
                {" "}
                <a href="blog.html">
                  Blog
                </a>
                {" "}
                <a href="about.html">
                  About Us
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-col-title">
                Connect
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html">
                  Get in Touch
                </a>
                {" "}
                <a href="contact.html">
                  Subscribe
                </a>
                {" "}
                <a href="about.html">
                  Press Kit
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-col-title">
                Follow
              </h4>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Instagram">
                  IG
                </a>
                {" "}
                <a href="#" aria-label="Twitter / X">
                  X
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  YT
                </a>
                {" "}
                <a href="#" aria-label="Pinterest">
                  Pin
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
            <span>
              {"© "}
              <span data-year="" />
              {" ROAMLOG. All rights reserved."}
            </span>
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
