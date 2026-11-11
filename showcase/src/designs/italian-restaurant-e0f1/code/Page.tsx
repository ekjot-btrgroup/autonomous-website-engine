// Converted from the HTML template italian-restaurant-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/testimonial-bg.webp";
import a1 from "./assets/menu-1.webp";
import a2 from "./assets/menu-2.webp";
import a3 from "./assets/menu-3.webp";
import a4 from "./assets/about-us.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Lato:wght@300;400;700;900&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-italian-restaurant-e0f1">
      {" "}
      {" "}
      <div className="reservation-bar">
        {" "}
        <div className="container">
          {" "}
          <span className="live">
            📞 Reservations: (555) 234-5678
          </span>
          {" "}
          <a href="contact.html">
            Book a Table
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <header className="sitehead">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="mark">
            {" "}
            <span className="glyph">
              B
            </span>
            {" Trattoria Bella "}
          </a>
          {" "}
          <nav>
            {" "}
            <a href="index.html">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="menu.html">
              Menu
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Reserve a Table
          </a>
          {" "}
          <button className="burger" aria-label="Toggle navigation" aria-expanded="false">
            ☰
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero-italian">
        {" "}
        <div className="bg" style={{ backgroundImage: `url(${a0})` }} />
        {" "}
        <div className="container">
          {" "}
          <div className="content">
            {" "}
            <span className="tagline">
              Est. 1998 — Little Italy
            </span>
            {" "}
            <h1>
              {"Authentic Italian, "}
              <em>
                Made with Love
              </em>
            </h1>
            {" "}
            <p className="lead">
              From our family to yours, every dish at Trattoria Bella is crafted with the finest imported ingredients, time-honored recipes, and a passion for true Italian dining.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="menu.html" className="btn-primary">
                Explore Our Menu
              </a>
              {" "}
              <a href="contact.html" className="btn-ghost">
                Reserve a Table
              </a>
              {" "}
            </div>
            {" "}
            <div className="spec-box">
              {" "}
              <span className="spec-label">
                Open Daily
              </span>
              {" Lunch 11:30am–2:30pm • Dinner 5:00pm–10:00pm "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <div className="stats-strip">
        {" "}
        <div className="container">
          {" "}
          <div className="cell">
            {" "}
            <span className="num" data-year="">
              27
            </span>
            {" "}
            <span className="label">
              Years of Tradition
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell">
            {" "}
            <span className="num">
              4.9
            </span>
            {" "}
            <span className="label">
              Customer Rating
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell">
            {" "}
            <span className="num">
              50+
            </span>
            {" "}
            <span className="label">
              Signature Dishes
            </span>
            {" "}
          </div>
          {" "}
          <div className="cell">
            {" "}
            <span className="num">
              15k
            </span>
            {" "}
            <span className="label">
              Happy Guests Yearly
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Our Specialties
          </span>
          {" "}
          <h2>
            From Our Kitchen
          </h2>
          {" "}
          <p style={{ maxWidth: "560px", marginBottom: "2.5rem" }}>
            Handmade pasta, wood-fired pizza, and classic Italian dishes prepared with ingredients imported directly from Italy.
          </p>
          {" "}
          <div className="menu-grid">
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="frame">
                {" "}
                <img src={a1} alt="Truffle Tagliatelle" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Truffle Tagliatelle
              </h3>
              {" "}
              <span className="price">
                $24
              </span>
              {" "}
              <p>
                Handmade egg pasta tossed in a rich truffle cream sauce with shaved Parmigiano-Reggiano.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d1">
              {" "}
              <div className="frame">
                {" "}
                <img src={a2} alt="Margherita DOP" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Margherita DOP
              </h3>
              {" "}
              <span className="price">
                $18
              </span>
              {" "}
              <p>
                San Marzano tomatoes, fresh mozzarella di bufala, basil, and our signature wood-fired crust.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d2">
              {" "}
              <div className="frame">
                {" "}
                <img src={a3} alt="Osso Buco" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Osso Buco
              </h3>
              {" "}
              <span className="price">
                $32
              </span>
              {" "}
              <p>
                Braised veal shanks in white wine, vegetables, and broth, served over saffron risotto.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            {" "}
            <a href="menu.html" className="link">
              View Full Menu →
            </a>
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
        <div className="container">
          {" "}
          <div className="feature">
            {" "}
            <div className="frame reveal">
              {" "}
              <img src={a4} alt="Inside Trattoria Bella" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="reveal d1">
              {" "}
              <span className="kicker">
                Our Story
              </span>
              {" "}
              <h2>
                A Taste of Italy in Every Bite
              </h2>
              {" "}
              <p>
                Founded in 1998 by Chef Marco Bellini, Trattoria Bella began as a dream to bring the authentic flavors of Tuscany to our neighborhood. What started as a small family kitchen has grown into a beloved gathering place for food lovers seeking genuine Italian hospitality.
              </p>
              {" "}
              <p>
                Every morning, our team sources the freshest local produce, imported olive oils, and artisan cheeses to create dishes that honor the simplicity and depth of Italian cooking.
              </p>
              {" "}
              <a href="about.html" className="btn-primary">
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Guest Experiences
          </span>
          {" "}
          <h2>
            What Our Guests Say
          </h2>
          {" "}
          <p style={{ maxWidth: "560px", marginBottom: "2.5rem" }}>
            The warmth of our dining room is matched only by the reviews of our cherished guests.
          </p>
          {" "}
          <div className="testimonials-grid">
            {" "}
            <div className="testimonial reveal">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "The handmade pasta here is extraordinary. You can taste the love in every bite. Our family has been coming here for years and it never disappoints."
              </p>
              {" "}
              <span className="author">
                — Maria C., Regular Guest
              </span>
              {" "}
            </div>
            {" "}
            <div className="testimonial reveal d1">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "An unforgettable dining experience. The osso buco rivals anything I had in Milan. The staff made us feel like family from the moment we walked in."
              </p>
              {" "}
              <span className="author">
                — James R., Food Critic
              </span>
              {" "}
            </div>
            {" "}
            <div className="testimonial reveal d2">
              {" "}
              <div className="stars">
                ★★★★★
              </div>
              {" "}
              <p>
                "Best Italian restaurant in the city, hands down. The truffle tagliatelle is a must-try. Perfect ambiance for date night or a family celebration."
              </p>
              {" "}
              <span className="author">
                — Sophie L., Local Guide
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
      <section className="cta-band">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="kicker">
              Make a Reservation
            </span>
            {" "}
            <h2>
              Book Your Table Tonight
            </h2>
            {" "}
            <p>
              Join us for an evening of authentic Italian cuisine, warm hospitality, and unforgettable flavors.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="contact.html" className="btn-ghost">
              Reserve Now
            </a>
            {" "}
            <a href="menu.html" className="btn-ghost">
              View Menu
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="hours-strip">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="day">
              Monday – Thursday
            </span>
            {" "}
            <span className="time">
              11:30am – 10:00pm
            </span>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <span className="day">
              Friday – Saturday
            </span>
            {" "}
            <span className="time">
              11:30am – 11:00pm
            </span>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <span className="day">
              Sunday
            </span>
            {" "}
            <span className="time">
              12:00pm – 9:00pm
            </span>
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
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="brand">
                Trattoria Bella
              </div>
              {" "}
              <p>
                Authentic Italian cuisine made with love. Join us for an unforgettable dining experience in the heart of Little Italy.
              </p>
              {" "}
              <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
                123 Via Roma, Little Italy
                <br />
                New York, NY 10013
                <br />
                (555) 234-5678
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Quick Links
              </h4>
              {" "}
              <a href="index.html">
                Home
              </a>
              {" "}
              <a href="about.html">
                About Us
              </a>
              {" "}
              <a href="menu.html">
                Our Menu
              </a>
              {" "}
              <a href="contact.html">
                Reservations
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Hours
              </h4>
              {" "}
              <a href="#">
                Mon–Thu: 11:30–10pm
              </a>
              {" "}
              <a href="#">
                Fri–Sat: 11:30–11pm
              </a>
              {" "}
              <a href="#">
                Sunday: 12–9pm
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Follow Us
              </h4>
              {" "}
              <a href="#">
                Instagram
              </a>
              {" "}
              <a href="#">
                Facebook
              </a>
              {" "}
              <a href="#">
                Yelp
              </a>
              {" "}
              <a href="#">
                Google Maps
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="base">
            {" "}
            <span>
              {"© "}
              <span data-year="" />
              {" Trattoria Bella. All rights reserved."}
            </span>
            {" "}
            <span>
              Crafted with love in Little Italy
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
