// Converted from the HTML template tourist-guide-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bg-hero.webp";
import a1 from "./assets/destination-1.webp";
import a2 from "./assets/destination-2.webp";
import a3 from "./assets/destination-3.webp";
import a4 from "./assets/destination-4.webp";
import a5 from "./assets/about.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Figtree:wght@300..900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-tourist-guide-da5e">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              Voyage
              <em>
                ur
              </em>
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="destinations.html" className="nav-link">
                Destinations
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                About
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Plan a Trip
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="Scenic travel destination with dramatic coastline and mountains" className="active" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="hero-content">
          {" "}
          <h1 className="hero-title reveal">
            Discover Your Next Adventure
          </h1>
          {" "}
          <p className="hero-sub reveal">
            From hidden beaches to mountain peaks — curated journeys for the curious traveler.
          </p>
          {" "}
          <div className="hero-search-inner reveal">
            {" "}
            <select aria-label="Destination type">
              {" "}
              <option value="">
                Any Destination
              </option>
              {" "}
              <option>
                Beach Escapes
              </option>
              {" "}
              <option>
                Mountain Retreats
              </option>
              {" "}
              <option>
                City Adventures
              </option>
              {" "}
              <option>
                Jungle Treks
              </option>
              {" "}
            </select>
            {" "}
            <select aria-label="Travel month">
              {" "}
              <option value="">
                Any Month
              </option>
              {" "}
              <option>
                January
              </option>
              <option>
                February
              </option>
              <option>
                March
              </option>
              {" "}
              <option>
                April
              </option>
              <option>
                May
              </option>
              <option>
                June
              </option>
              {" "}
              <option>
                July
              </option>
              <option>
                August
              </option>
              <option>
                September
              </option>
              {" "}
              <option>
                October
              </option>
              <option>
                November
              </option>
              <option>
                December
              </option>
              {" "}
            </select>
            {" "}
            <select aria-label="Number of travelers">
              {" "}
              <option>
                1 Traveler
              </option>
              {" "}
              <option>
                2 Travelers
              </option>
              {" "}
              <option>
                3 Travelers
              </option>
              {" "}
              <option>
                4+ Travelers
              </option>
              {" "}
            </select>
            {" "}
            <a href="destinations.html" className="btn btn--primary">
              Explore Destinations
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
          <h2 className="section-title reveal">
            Featured Destinations
          </h2>
          {" "}
          <p className="section-sub reveal">
            Handpicked escapes for every kind of traveler
          </p>
          {" "}
          <div className="featured-grid">
            {" "}
            <div className="dest-card reveal">
              {" "}
              <img src={a1} alt="Coastal Serenity — panoramic ocean view with golden shoreline" loading="lazy" />
              {" "}
              <div className="dest-card-overlay" />
              {" "}
              <div className="dest-card-body">
                {" "}
                <span className="dest-card-tag">
                  Beach
                </span>
                {" "}
                <h3>
                  Coastal Serenity
                </h3>
                {" "}
                <p>
                  Golden shores and turquoise waters
                </p>
                {" "}
                <span className="dest-card-link">
                  Explore →
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="dest-card reveal">
              {" "}
              <img src={a2} alt="Mountain Escape — alpine peaks and dense pine forest" loading="lazy" />
              {" "}
              <div className="dest-card-overlay" />
              {" "}
              <div className="dest-card-body">
                {" "}
                <span className="dest-card-tag">
                  Mountains
                </span>
                {" "}
                <h3>
                  Mountain Escape
                </h3>
                {" "}
                <p>
                  Summit trails and crisp alpine air
                </p>
                {" "}
                <span className="dest-card-link">
                  Explore →
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="dest-card reveal">
              {" "}
              <img src={a3} alt="Urban Explorer — vibrant city skyline at dusk" loading="lazy" />
              {" "}
              <div className="dest-card-overlay" />
              {" "}
              <div className="dest-card-body">
                {" "}
                <span className="dest-card-tag">
                  City
                </span>
                {" "}
                <h3>
                  Urban Explorer
                </h3>
                {" "}
                <p>
                  Culture, cuisine, and city lights
                </p>
                {" "}
                <span className="dest-card-link">
                  Explore →
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="dest-card reveal">
              {" "}
              <img src={a4} alt="Jungle Retreat — lush green rainforest canopy" loading="lazy" />
              {" "}
              <div className="dest-card-overlay" />
              {" "}
              <div className="dest-card-body">
                {" "}
                <span className="dest-card-tag">
                  Jungle
                </span>
                {" "}
                <h3>
                  Jungle Retreat
                </h3>
                {" "}
                <p>
                  Untamed nature and hidden waterfalls
                </p>
                {" "}
                <span className="dest-card-link">
                  Explore →
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
      <section className="section section--sand">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Why Voyageur?
          </h2>
          {" "}
          <p className="section-sub reveal">
            We go beyond the guidebook to create meaningful travel experiences
          </p>
          {" "}
          <div className="features-grid">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <span className="feature-icon">
                🎯
              </span>
              {" "}
              <h3>
                Curated Experiences
              </h3>
              {" "}
              <p>
                Every destination is handpicked by our team of seasoned travelers and local experts.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <span className="feature-icon">
                🧑‍🤝‍🧑
              </span>
              {" "}
              <h3>
                Expert Local Guides
              </h3>
              {" "}
              <p>
                Our network of local guides ensures authentic experiences you won't find in any guidebook.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <span className="feature-icon">
                🌱
              </span>
              {" "}
              <h3>
                Sustainable Travel
              </h3>
              {" "}
              <p>
                We partner with eco-conscious accommodations and tour operators to minimize our footprint.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <span className="feature-icon">
                🛡️
              </span>
              {" "}
              <h3>
                24/7 Support
              </h3>
              {" "}
              <p>
                Round-the-clock assistance ensures peace of mind wherever your journey takes you.
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-split-image reveal">
              {" "}
              <img src={a5} alt="Traveler exploring a scenic mountain viewpoint" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="about-split-content reveal">
              {" "}
              <h2 className="section-title">
                Our Story
              </h2>
              {" "}
              <p>
                Founded by a group of passionate travelers, Voyageur was born from the belief that travel should be transformative. We set out to build a platform that connects curious explorers with the world's most remarkable destinations — from hidden coastal gems to majestic mountain retreats.
              </p>
              {" "}
              <p>
                Every trip we curate is crafted with care, backed by local knowledge, and designed to create lasting memories. Whether you're seeking solitude in nature or the pulse of a vibrant city, we're here to guide you every step of the way.
              </p>
              {" "}
              <a href="about.html" className="btn btn--teal">
                Learn Our Story
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
      <section className="tips-band">
        {" "}
        <div className="container">
          {" "}
          <h2 className="section-title reveal">
            Travel Smart
          </h2>
          {" "}
          <p className="section-sub reveal">
            Insider tips to make every journey smoother
          </p>
          {" "}
          <div className="tips-grid">
            {" "}
            <div className="tip-card reveal">
              {" "}
              <span className="tip-number">
                01
              </span>
              {" "}
              <h3>
                Pack Light, Pack Right
              </h3>
              {" "}
              <p>
                Stick to a carry-on with versatile layers. A good pair of walking shoes and a waterproof jacket cover most situations.
              </p>
              {" "}
            </div>
            {" "}
            <div className="tip-card reveal">
              {" "}
              <span className="tip-number">
                02
              </span>
              {" "}
              <h3>
                Embrace Local Time
              </h3>
              {" "}
              <p>
                Adjust to the local rhythm on day one — eat when locals eat, rest when they rest. You'll experience more and feel less jet-lagged.
              </p>
              {" "}
            </div>
            {" "}
            <div className="tip-card reveal">
              {" "}
              <span className="tip-number">
                03
              </span>
              {" "}
              <h3>
                Go Beyond the Map
              </h3>
              {" "}
              <p>
                The best experiences often lie off the beaten path. Ask locals for recommendations and leave room for spontaneous detours.
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
      <section className="cta-banner">
        {" "}
        <div className="container reveal">
          {" "}
          <h2>
            Ready to Explore?
          </h2>
          {" "}
          <p>
            Your next adventure is just a click away. Browse our curated destinations and start planning your dream trip.
          </p>
          {" "}
          <a href="destinations.html" className="btn btn--white">
            View All Destinations
          </a>
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
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand-logo">
                Voyage
                <em>
                  ur
                </em>
              </div>
              {" "}
              <p className="footer-brand-desc">
                A curated travel guide for the modern explorer. Discover remarkable destinations, plan unforgettable journeys, and travel with confidence.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Explore
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="destinations.html" className="footer-link">
                  Destinations
                </a>
                {" "}
                <a href="about.html" className="footer-link">
                  About Us
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Contact
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Plan
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html" className="footer-link">
                  Plan a Trip
                </a>
                {" "}
                <a href="destinations.html" className="footer-link">
                  Travel Guides
                </a>
                {" "}
                <a href="#" className="footer-link">
                  Travel Tips
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Contact
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="#" className="footer-link">
                  hello@voyageur.com
                </a>
                {" "}
                <a href="#" className="footer-link">
                  +1 (555) 789-TRIP
                </a>
                {" "}
                <a href="#" className="footer-link">
                  Portland, Oregon
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
              {" VOYAGEUR. All rights reserved."}
            </span>
            {" "}
            <span>
              Explore beyond the horizon ✦
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
