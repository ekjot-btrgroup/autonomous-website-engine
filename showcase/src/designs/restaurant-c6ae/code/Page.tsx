// Converted from the HTML template restaurant-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/slider-1.webp";
import a1 from "./assets/menu-1.webp";
import a2 from "./assets/menu-2.webp";
import a3 from "./assets/menu-3.webp";
import a4 from "./assets/menu-4.webp";
import a5 from "./assets/menu-5.webp";
import a6 from "./assets/menu-6.webp";
import a7 from "./assets/about-us.webp";
import a8 from "./assets/slider-2.webp";
import a9 from "./assets/menu-7.webp";
import a10 from "./assets/menu-8.webp";
import a11 from "./assets/slider-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-restaurant-c6ae">
      {" "}
      {" "}
      <div className="reservation-bar">
        {" "}
        <div className="container">
          {" "}
          <span className="live">
            ◆ OPEN TONIGHT
          </span>
          {" "}
          <span>
            Dinner 18:00–22:00 · Reservations recommended
          </span>
          {" "}
          <a href="contact.html">
            Reserve a Table →
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
            <span className="glyph">
              O
            </span>
            OLIVO
          </a>
          {" "}
          <nav id="mainnav">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="menu.html">
              Menu
            </a>
            {" "}
            <a href="about.html">
              Our Story
            </a>
            {" "}
            <a href="contact.html">
              Reservations
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Reserve a Table
          </a>
          {" "}
          <button className="burger" id="burger" aria-label="Menu">
            ☰
          </button>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero-tasting">
        {" "}
        <div className="bg" style={{ backgroundImage: `url(${a0})` }} />
        {" "}
        <div className="container">
          {" "}
          <div className="content">
            {" "}
            <span className="course-number">
              First Course — Amuse-Bouche
            </span>
            {" "}
            <h1>
              {"Seasonal kitchen, "}
              <em>
                warm table
              </em>
            </h1>
            {" "}
            <p className="lead">
              Market-driven cuisine served in a candlelit dining room. Every dish tells the story of where it came from — the farmer, the season, the soil.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="menu.html" className="btn-primary">
                View Menu →
              </a>
              {" "}
              <a href="contact.html" className="btn-ghost">
                Reserve Tonight
              </a>
              {" "}
            </div>
            {" "}
            <div className="spec-box reveal">
              {" "}
              <span className="spec-label">
                Tonight's Service
              </span>
              <br />
              {" Seatings: 18:00 · 18:30 · 19:00 · 19:30 · 20:00 · 20:30"}
              <br />
              {" Tasting Menu: 7 courses · €85 pp · Wine pairing +€45"}
              <br />
              {" À la carte available at the bar "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <div className="course-strip">
        {" "}
        <div className="container">
          {" "}
          <div className="item">
            <span>
              Amuse
            </span>
            {" Tonight's Selection"}
          </div>
          {" "}
          <div className="item">
            <span>
              Entrée
            </span>
            {" Market Vegetables"}
          </div>
          {" "}
          <div className="item">
            <span>
              Poison
            </span>
            {" Line-Caught Fish"}
          </div>
          {" "}
          <div className="item">
            <span>
              Viande
            </span>
            {" Heritage Meats"}
          </div>
          {" "}
          <div className="item">
            <span>
              Fromage
            </span>
            {" Artisan Cheeses"}
          </div>
          {" "}
          <div className="item">
            <span>
              Dessert
            </span>
            {" Seasonal Sweet"}
          </div>
          {" "}
          <div className="item">
            <span>
              Mignardises
            </span>
            {" Petits Fours"}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="readouts">
        {" "}
        <div className="container">
          {" "}
          <div className="cell reveal">
            <span className="per" data-count="12">
              0
            </span>
            <span className="label">
              Years serving
            </span>
          </div>
          {" "}
          <div className="cell reveal d1">
            <span className="per" data-count="7">
              0
            </span>
            <span className="label">
              Course tasting
            </span>
          </div>
          {" "}
          <div className="cell reveal d2">
            <span className="per" data-count="40">
              0
            </span>
            <span className="label">
              Wine labels
            </span>
          </div>
          {" "}
          <div className="cell reveal d3">
            <span className="per" data-count="4">
              0
            </span>
            <span className="label">
              Seats at the bar
            </span>
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
            Tonight's Highlights
          </span>
          {" "}
          <h2>
            From the kitchen
          </h2>
          {" "}
          <div className="menu-grid">
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="frame">
                <img src={a1} alt="Amuse-bouche" />
              </div>
              {" "}
              <h3>
                Amuse-Bouche
              </h3>
              {" "}
              <div className="price">
                Included
              </div>
              {" "}
              <p>
                Chilled cucumber velouté with dill oil and smoked trout roe. A bright opening to tonight's journey.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d1">
              {" "}
              <div className="frame">
                <img src={a2} alt="Heritage beetroot" />
              </div>
              {" "}
              <h3>
                Heritage Beetroot
              </h3>
              {" "}
              <div className="price">
                €18
              </div>
              {" "}
              <p>
                Roasted candy-stripe beetroot, goat cheese mousse, walnut crumble, aged balsamic. Vegetarian.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d2">
              {" "}
              <div className="frame">
                <img src={a3} alt="Line-caught sea bass" />
              </div>
              {" "}
              <h3>
                Line-Caught Sea Bass
              </h3>
              {" "}
              <div className="price">
                €32
              </div>
              {" "}
              <p>
                Pan-seared sea bass, fennel purée, citrus gremolata, charred leek. Sustainably sourced from the North Sea.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal">
              {" "}
              <div className="frame">
                <img src={a4} alt="Heritage pork loin" />
              </div>
              {" "}
              <h3>
                Heritage Pork Loin
              </h3>
              {" "}
              <div className="price">
                €34
              </div>
              {" "}
              <p>
                Slow-roasted pork loin, apple cider jus, roasted root vegetables, thyme gremolata. From Fernhill Farm.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d1">
              {" "}
              <div className="frame">
                <img src={a5} alt="Artisan cheese board" />
              </div>
              {" "}
              <h3>
                Artisan Cheese Board
              </h3>
              {" "}
              <div className="price">
                €16
              </div>
              {" "}
              <p>
                Selection of 5 artisan cheeses, house chutney, sourdough crackers, honeycomb. Rotating selection.
              </p>
              {" "}
            </div>
            {" "}
            <div className="menu-card reveal d2">
              {" "}
              <div className="frame">
                <img src={a6} alt="Chocolate fondant" />
              </div>
              {" "}
              <h3>
                Chocolate Fondant
              </h3>
              {" "}
              <div className="price">
                €14
              </div>
              {" "}
              <p>
                Valrhona dark chocolate fondant, salted caramel ice cream, cocoa nib tuile. 12-minute bake.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {" "}
            <a href="menu.html" className="link">
              View full menu →
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
              <img src={a7} alt="Chef at work" />
            </div>
            {" "}
            <div>
              {" "}
              <span className="kicker">
                The Chef
              </span>
              {" "}
              <h2>
                Cooking is listening
              </h2>
              {" "}
              <p>
                Chef Marco Bellini learned to cook in his grandmother's kitchen in Emilia-Romagna — not from textbooks, but from seasons. Every morning starts at the market, not the whiteboard.
              </p>
              {" "}
              <p>
                "I don't design menus. I listen to what the land is offering this week, and I build the meal around that. The best dish is the one that couldn't have existed last week."
              </p>
              {" "}
              <p>
                After 8 years in Michelin-starred kitchens across Europe, Marco opened OLIVO with a simple idea: cook what's honest, serve it warmly, and let the ingredients speak.
              </p>
              {" "}
              <a href="about.html" className="link">
                Read our story →
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
            The Space
          </span>
          {" "}
          <h2>
            Inside OLIVO
          </h2>
          {" "}
          <div className="gallery-mosaic">
            {" "}
            <div className="item wide reveal">
              <img src={a0} alt="Dining room" />
            </div>
            {" "}
            <div className="item tall reveal d1">
              <img src={a8} alt="Bar area" />
            </div>
            {" "}
            <div className="item reveal d2">
              <img src={a9} alt="Plating" />
            </div>
            {" "}
            <div className="item reveal d3">
              <img src={a10} alt="Wine service" />
            </div>
            {" "}
            <div className="item wide reveal">
              <img src={a11} alt="Private dining" />
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
        <div className="container">
          {" "}
          <span className="kicker">
            Guest Book
          </span>
          {" "}
          <h2>
            What they say
          </h2>
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
                "The tasting menu was a journey — each course built on the last. The beetroot dish alone was worth the visit. We'll be back monthly."
              </p>
              {" "}
              <span className="author">
                — Sarah M., regular guest
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
                "Finally, a restaurant where the wine list is as thoughtful as the food. The sommelier paired every course perfectly — and didn't push the expensive bottles."
              </p>
              {" "}
              <span className="author">
                — James T., wine enthusiast
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
                "We celebrated our anniversary here. Marco came to the table, explained every dish, and made us feel like family. The chocolate fondant was extraordinary."
              </p>
              {" "}
              <span className="author">
                {"— Elena & David K."}
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
      <div className="hours-strip">
        {" "}
        <div className="container">
          {" "}
          <div>
            <div className="day">
              Mon – Tue
            </div>
            <div className="time">
              Closed
            </div>
          </div>
          {" "}
          <div>
            <div className="day">
              Wed – Thu
            </div>
            <div className="time">
              18:00 – 22:00
            </div>
          </div>
          {" "}
          <div>
            <div className="day">
              Fri – Sat
            </div>
            <div className="time">
              18:00 – 23:00
            </div>
          </div>
          {" "}
          <div>
            <div className="day">
              Sunday
            </div>
            <div className="time">
              12:00 – 16:00
            </div>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <section className="cta-band">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="kicker">
              Your Table Awaits
            </span>
            {" "}
            <h2>
              Reserve tonight
            </h2>
            {" "}
            <p>
              7-course tasting menu, à la carte, or just a glass at the bar. We'll save you a seat.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="contact.html" className="btn-primary">
              Reserve a Table →
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="brand">
                OLIVO
              </div>
              {" "}
              <p>
                {"Seasonal kitchen & wine bar. Market-driven cuisine in a candlelit setting."}
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Dining
              </h4>
              {" "}
              <a href="menu.html">
                Tasting Menu
              </a>
              <br />
              {" "}
              <a href="menu.html">
                À la Carte
              </a>
              <br />
              {" "}
              <a href="menu.html">
                Wine List
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Private Events
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Restaurant
              </h4>
              {" "}
              <a href="about.html">
                Our Story
              </a>
              <br />
              {" "}
              <a href="about.html">
                The Chef
              </a>
              <br />
              {" "}
              <a href="about.html">
                The Team
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Gift Vouchers
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Visit Us
              </h4>
              {" "}
              <p>
                23 Olive Lane
                <br />
                London EC2R 8AH
              </p>
              {" "}
              <a href="tel:+442071234567">
                +44 20 7123 4567
              </a>
              <br />
              {" "}
              <a href="mailto:hello@olivo.kitchen">
                hello@olivo.kitchen
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
              {" OLIVO Kitchen"}
            </span>
            {" "}
            <span>
              Cooked with care
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
