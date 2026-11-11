// Converted from the HTML template coral-resort-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/room-1.webp";
import a3 from "./assets/room-2.webp";
import a4 from "./assets/room-3.webp";
import a5 from "./assets/about.webp";
import a6 from "./assets/signature.webp";
import a7 from "./assets/gallery-sm-1.webp";
import a8 from "./assets/gallery-sm-2.webp";
import a9 from "./assets/gallery-sm-3.webp";
import a10 from "./assets/gallery-sm-4.webp";
import a11 from "./assets/gallery-sm-5.webp";
import a12 from "./assets/gallery-sm-6.webp";
import a13 from "./assets/blog-1.webp";
import a14 from "./assets/blog-2.webp";
import a15 from "./assets/blog-3.webp";
import a16 from "./assets/feature.webp";

const LINKS: string[] = ["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css", "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-coral-resort-a022">
      {" "}
      {" "}
      <nav className="nav nav--transparent" role="navigation" aria-label="Main navigation">
        {" "}
        <div className="nav__inner">
          {" "}
          <a href="index.html" className="nav__logo">
            Coral
            <span>
              uxe
            </span>
          </a>
          {" "}
          <button className="nav__toggle" aria-label="Toggle menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <div className="nav__links">
            {" "}
            <a href="index.html" className="nav__link nav__link--active">
              Home
            </a>
            {" "}
            <a href="about.html" className="nav__link">
              About
            </a>
            {" "}
            <a href="rooms.html" className="nav__link">
              Rooms
            </a>
            {" "}
            <a href="contact.html" className="nav__link">
              Contact
            </a>
            {" "}
            <a href="contact.html" className="nav__cta">
              Book Now
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      {" "}
      <section className="hero" aria-label="Hero">
        {" "}
        <div className="hero__slides">
          {" "}
          <div className="hero__slide active">
            {" "}
            <img src={a0} alt="Overwater villas at sunset" />
            {" "}
          </div>
          {" "}
          <div className="hero__slide">
            {" "}
            <img src={a1} alt="Turquoise lagoon view" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero__overlay" />
        {" "}
        <div className="hero__content">
          {" "}
          <h1 className="hero__title">
            {"Where the ocean meets "}
            <em>
              quiet luxury
            </em>
          </h1>
          {" "}
          <p className="hero__subtitle">
            Private villas above turquoise waters in Baa Atoll, Maldives
          </p>
          {" "}
        </div>
        {" "}
        <div className="hero__controls">
          {" "}
          <button className="hero__control hero__control--prev" aria-label="Previous slide">
            <i className="fa-solid fa-chevron-left" />
          </button>
          {" "}
          <button className="hero__control hero__control--next" aria-label="Next slide">
            <i className="fa-solid fa-chevron-right" />
          </button>
          {" "}
        </div>
        {" "}
        <div className="hero__booking">
          {" "}
          <div className="hero__booking-inner">
            {" "}
            <div className="booking-field">
              {" "}
              <span className="booking-field__label">
                Check In
              </span>
              {" "}
              <input type="date" aria-label="Check in date" />
              {" "}
            </div>
            {" "}
            <div className="booking-field">
              {" "}
              <span className="booking-field__label">
                Check Out
              </span>
              {" "}
              <input type="date" aria-label="Check out date" />
              {" "}
            </div>
            {" "}
            <div className="booking-field">
              {" "}
              <span className="booking-field__label">
                Guests
              </span>
              {" "}
              <select aria-label="Number of guests">
                {" "}
                <option>
                  2 Adults
                </option>
                {" "}
                <option>
                  1 Adult
                </option>
                {" "}
                <option>
                  3 Adults
                </option>
                {" "}
                <option>
                  2 Adults, 1 Child
                </option>
                {" "}
              </select>
              {" "}
            </div>
            {" "}
            <button className="booking-btn" type="button">
              Check Availability
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--lg" aria-label="Our Rooms">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header fade-up">
            {" "}
            <span className="section-label">
              Our Rooms
            </span>
            {" "}
            <h2 className="section-title">
              Private Villas With Ocean Views
            </h2>
            {" "}
            <p className="section-subtitle">
              Each villa is a sanctuary of calm, designed to frame the endless horizon of the Indian Ocean.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="rooms-scroll">
          {" "}
          <div className="rooms-scroll__track" style={{ cursor: "grab" }}>
            {" "}
            {" "}
            <article className="room-card fade-up fade-up-delay-1">
              {" "}
              <div className="room-card__img">
                {" "}
                <img src={a2} alt="Honeymoon Villa overwater" />
                {" "}
                <span className="room-card__badge">
                  Most Popular
                </span>
                {" "}
              </div>
              {" "}
              <div className="room-card__body">
                {" "}
                <span className="room-card__price">
                  {"$680 "}
                  <small>
                    / night
                  </small>
                </span>
                {" "}
                <h3 className="room-card__name">
                  Honeymoon Overwater Villa
                </h3>
                {" "}
                <p className="room-card__desc">
                  Perched above the crystal lagoon with a glass floor panel, private sun deck, and direct ocean access.
                </p>
                {" "}
                <div className="room-card__amenities">
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-bed" />
                    {" King Bed"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-water" />
                    {" Ocean View"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-wifi" />
                    {" Wi-Fi"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-wind" />
                    {" A/C"}
                  </span>
                  {" "}
                </div>
                {" "}
                <a href="rooms.html" className="room-card__cta">
                  View Details
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="room-card fade-up fade-up-delay-2">
              {" "}
              <div className="room-card__img">
                {" "}
                <img src={a3} alt="Deluxe Beach Suite" />
                {" "}
              </div>
              {" "}
              <div className="room-card__body">
                {" "}
                <span className="room-card__price">
                  {"$520 "}
                  <small>
                    / night
                  </small>
                </span>
                {" "}
                <h3 className="room-card__name">
                  Deluxe Beach Suite
                </h3>
                {" "}
                <p className="room-card__desc">
                  Steps from the white sand shore with a private garden, outdoor rain shower, and veranda facing the reef.
                </p>
                {" "}
                <div className="room-card__amenities">
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-bed" />
                    {" Queen Bed"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-umbrella-beach" />
                    {" Beach"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-wifi" />
                    {" Wi-Fi"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-wind" />
                    {" A/C"}
                  </span>
                  {" "}
                </div>
                {" "}
                <a href="rooms.html" className="room-card__cta">
                  View Details
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            {" "}
            <article className="room-card fade-up fade-up-delay-3">
              {" "}
              <div className="room-card__img">
                {" "}
                <img src={a4} alt="Sea View Residence" />
                {" "}
                <span className="room-card__badge">
                  New
                </span>
                {" "}
              </div>
              {" "}
              <div className="room-card__body">
                {" "}
                <span className="room-card__price">
                  {"$890 "}
                  <small>
                    / night
                  </small>
                </span>
                {" "}
                <h3 className="room-card__name">
                  Sea View Residence
                </h3>
                {" "}
                <p className="room-card__desc">
                  A two-storey residence with infinity plunge pool, butler service, and panoramic reef views from the rooftop terrace.
                </p>
                {" "}
                <div className="room-card__amenities">
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-bed" />
                    {" King Bed"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-water" />
                    {" Reef View"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-person-swimming" />
                    {" Pool"}
                  </span>
                  {" "}
                  <span className="room-card__amenity">
                    <i className="fa-solid fa-concierge-bell" />
                    {" Butler"}
                  </span>
                  {" "}
                </div>
                {" "}
                <a href="rooms.html" className="room-card__cta">
                  View Details
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <div className="container" style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
            {" "}
            <button className="hero__control rooms-scroll__prev" aria-label="Scroll rooms left">
              <i className="fa-solid fa-chevron-left" />
            </button>
            {" "}
            <button className="hero__control rooms-scroll__next" aria-label="Scroll rooms right">
              <i className="fa-solid fa-chevron-right" />
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section bg-sand" aria-label="About Coraluxe">
        {" "}
        <div className="container">
          {" "}
          <div className="about-split">
            {" "}
            <div className="about-split__images fade-up">
              {" "}
              <div className="about-split__main">
                {" "}
                <img src={a5} alt="Resort overwater villas aerial view" />
                {" "}
              </div>
              {" "}
              <div className="about-split__accent">
                {" "}
                <img src={a6} alt="Resort manager signature" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="about-split__content fade-up fade-up-delay-2">
              {" "}
              <span className="section-label">
                Welcome to Coraluxe
              </span>
              {" "}
              <h2>
                Baa Atoll, Maldives
              </h2>
              {" "}
              <p>
                One of the most beautiful coral atolls in the world, Baa Atoll is a UNESCO Biosphere Reserve teeming with manta rays, vibrant coral gardens, and waters so clear they seem to glow.
              </p>
              {" "}
              <p>
                Coraluxe was conceived as a sanctuary where architecture dissolves into nature. Every villa, every pathway, every meal is designed to honour the ocean that surrounds us.
              </p>
              {" "}
              <blockquote>
                {" “True luxury is not about excess. It is the art of being present — of listening to the tide, watching the light change, and remembering what matters.” "}
              </blockquote>
              {" "}
              <div className="about-stats">
                {" "}
                <div>
                  {" "}
                  <div className="about-stat__number">
                    42
                  </div>
                  {" "}
                  <div className="about-stat__label">
                    Ocean Villas
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="about-stat__number">
                    12+
                  </div>
                  {" "}
                  <div className="about-stat__label">
                    Years of Excellence
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="about-stat__number">
                    98%
                  </div>
                  {" "}
                  <div className="about-stat__label">
                    Guest Satisfaction
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
      <section className="section" aria-label="Gallery">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header section-header--center fade-up">
            {" "}
            <span className="section-label">
              Gallery
            </span>
            {" "}
            <h2 className="section-title">
              Glimpses of Paradise
            </h2>
            {" "}
            <p className="section-subtitle">
              Every corner of Coraluxe tells a story of beauty, craft, and reverence for the sea.
            </p>
            {" "}
          </div>
          {" "}
          <div className="gallery-grid fade-up">
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a7} alt="Overwater villa at golden hour" />
              {" "}
              <span>
                Golden Hour
              </span>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a8} alt="Coral reef snorkeling" />
              {" "}
              <span>
                Coral Reef
              </span>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a9} alt="Infinity pool sunset" />
              {" "}
              <span>
                Infinity Pool
              </span>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a10} alt="Beach dining setup" />
              {" "}
              <span>
                Beach Dining
              </span>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a11} alt="Spa treatment room" />
              {" "}
              <span>
                Serenity Spa
              </span>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid__item">
              {" "}
              <img src={a12} alt="Night sky from the jetty" />
              {" "}
              <span>
                Starry Nights
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
      {" "}
      <section className="section section--ocean section--lg" aria-label="Guest Testimonials">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header section-header--center fade-up">
            {" "}
            <span className="section-label">
              Guest Experiences
            </span>
            {" "}
            <h2 className="section-title">
              Words That Warm Our Hearts
            </h2>
            {" "}
            <p className="section-subtitle">
              From guests who found something unexpected here.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonials-grid fade-up">
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                “We came for our anniversary and left feeling like we had discovered a secret world. The villa, the staff, the reef — everything was perfection.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {"E & M"}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    {"Elena & Marcus"}
                  </div>
                  {" "}
                  <div className="testimonial-card__location">
                    London, United Kingdom
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                “I have stayed at luxury resorts around the world. Coraluxe is different. It feels intimate, personal, and genuinely connected to the ocean.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  A
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    Akiko Tanaka
                  </div>
                  {" "}
                  <div className="testimonial-card__location">
                    Tokyo, Japan
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card">
              {" "}
              <div className="testimonial-card__stars">
                {" "}
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                {" "}
              </div>
              {" "}
              <p className="testimonial-card__text">
                “The snorkeling was otherworldly. We swam with mantas right off our villa deck. My daughter says it was the best day of her life.”
              </p>
              {" "}
              <div className="testimonial-card__author">
                {" "}
                <div className="testimonial-card__avatar">
                  {"S & J"}
                </div>
                {" "}
                <div>
                  {" "}
                  <div className="testimonial-card__name">
                    {"Sophie & James"}
                  </div>
                  {" "}
                  <div className="testimonial-card__location">
                    Sydney, Australia
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
      <section className="section" aria-label="Blog">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header section-header--center fade-up">
            {" "}
            <span className="section-label">
              Journal
            </span>
            {" "}
            <h2 className="section-title">
              Discover Hidden Island Beauty
            </h2>
            {" "}
            <p className="section-subtitle">
              Stories, guides, and reflections from life at the edge of the ocean.
            </p>
            {" "}
          </div>
          {" "}
          <div className="blog-grid fade-up">
            {" "}
            <article className="blog-card">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a13} alt="Maldives snorkeling guide" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <span className="blog-card__date">
                  15 March 2026
                </span>
                {" "}
                <h3 className="blog-card__title">
                  <a href="#">
                    A Guide to Snorkeling Baa Atoll's Coral Gardens
                  </a>
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  From manta ray hotspots to hidden channels, here is everything you need to know for an unforgettable underwater experience.
                </p>
                {" "}
                <a href="#" className="blog-card__link">
                  {"Read More "}
                  <i className="fa-solid fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a14} alt="Sustainable luxury travel" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <span className="blog-card__date">
                  28 February 2026
                </span>
                {" "}
                <h3 className="blog-card__title">
                  <a href="#">
                    Sustainable Luxury: How Coraluxe Protects the Reef
                  </a>
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  Our commitment to marine conservation goes beyond words. Learn about our coral restoration programme and reef-safe practices.
                </p>
                {" "}
                <a href="#" className="blog-card__link">
                  {"Read More "}
                  <i className="fa-solid fa-arrow-right" />
                </a>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="blog-card">
              {" "}
              <div className="blog-card__img">
                {" "}
                <img src={a15} alt="Maldivian cuisine" />
                {" "}
              </div>
              {" "}
              <div className="blog-card__body">
                {" "}
                <span className="blog-card__date">
                  10 January 2026
                </span>
                {" "}
                <h3 className="blog-card__title">
                  <a href="#">
                    Five Things to Do in Baa Atoll Beyond the Beach
                  </a>
                </h3>
                {" "}
                <p className="blog-card__excerpt">
                  Dolphin cruises, local island visits, and night fishing — the experiences that make a Maldives trip truly unforgettable.
                </p>
                {" "}
                <a href="#" className="blog-card__link">
                  {"Read More "}
                  <i className="fa-solid fa-arrow-right" />
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
      <section className="cta-banner" aria-label="Call to action">
        {" "}
        <div className="cta-banner__bg">
          {" "}
          <img src={a16} alt="Resort aerial view" />
          {" "}
        </div>
        {" "}
        <div className="cta-banner__overlay" />
        {" "}
        <div className="cta-banner__content fade-up">
          {" "}
          <h2 className="cta-banner__title">
            Begin Your Coraluxe Story
          </h2>
          {" "}
          <p className="cta-banner__text">
            Let us craft a stay that feels entirely yours — from the villa you choose to the moments you will never forget.
          </p>
          {" "}
          <a href="contact.html" className="cta-banner__btn">
            Reserve Your Stay
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <footer className="footer" role="contentinfo">
        {" "}
        <div className="container">
          {" "}
          <div className="footer__grid">
            {" "}
            <div>
              {" "}
              <div className="footer__brand">
                Coral
                <span>
                  uxe
                </span>
              </div>
              {" "}
              <p className="footer__desc">
                A luxury coral resort in Baa Atoll, Maldives. Where the ocean meets quiet luxury, and every moment is designed to be remembered.
              </p>
              {" "}
              <div className="footer__social">
                {" "}
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                {" "}
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                {" "}
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube" />
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Explore
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="about.html">
                    About Coraluxe
                  </a>
                </li>
                {" "}
                <li>
                  <a href="rooms.html">
                    {"Rooms & Villas"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Dining
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    {"Spa & Wellness"}
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Experiences
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Practical
              </h4>
              {" "}
              <ul className="footer__links">
                {" "}
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Getting Here
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Travel Insurance
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    FAQs
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer__heading">
                Newsletter
              </h4>
              {" "}
              <p className="footer__desc">
                Island stories, exclusive offers, and underwater discoveries delivered to your inbox.
              </p>
              {" "}
              <div className="footer__newsletter-input">
                {" "}
                <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
                {" "}
                <button type="button" aria-label="Subscribe to newsletter">
                  <i className="fa-solid fa-paper-plane" />
                </button>
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
              © 2026 Coraluxe Resort. All rights reserved.
            </span>
            {" "}
            <span>
              {"Baa Atoll, Maldives · "}
              <a href="contact.html">
                +960 700 1234
              </a>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fa-solid fa-arrow-up" />
      </button>
      {" "}
      {" "}
    </div>
  );
}
