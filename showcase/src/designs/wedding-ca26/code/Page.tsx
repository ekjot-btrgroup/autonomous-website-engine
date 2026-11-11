// Converted from the HTML template wedding-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/carousel-3.webp";
import a3 from "./assets/wedding-date-bg.webp";
import a4 from "./assets/story-1.webp";
import a5 from "./assets/story-2.webp";
import a6 from "./assets/story-3.webp";
import a7 from "./assets/story-4.webp";
import a8 from "./assets/team-1-bg.webp";
import a9 from "./assets/about-1.webp";
import a10 from "./assets/bride.webp";
import a11 from "./assets/groom.webp";
import a12 from "./assets/bridesmaid-team-2.webp";
import a13 from "./assets/bridesmaid-1.webp";
import a14 from "./assets/bridesmaid-3.webp";
import a15 from "./assets/bridesmaid-4.webp";
import a16 from "./assets/groomsmen-1.webp";
import a17 from "./assets/groomsmen-3.webp";
import a18 from "./assets/groomsmen-2.webp";
import a19 from "./assets/groomsmen-4.webp";
import a20 from "./assets/gallery-1.webp";
import a21 from "./assets/gallery-2.webp";
import a22 from "./assets/gallery-3.webp";
import a23 from "./assets/gallery-4.webp";
import a24 from "./assets/gallery-5.webp";
import a25 from "./assets/gallery-6.webp";
import a26 from "./assets/gallery-7.webp";
import a27 from "./assets/gallery-8.webp";
import a28 from "./assets/tamp-bg-1.webp";
import a29 from "./assets/bg-flower.webp";
import a30 from "./assets/footer-bg.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Great+Vibes&family=Jost:wght@300;400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-wedding-ca26">
      {" "}
      {" "}
      <header className="site-header" role="banner">
        {" "}
        <div className="container header-inner">
          {" "}
          <a href="index.html" className="brand" aria-label={"Mr&Mrs home"}>
            Mr
            <span className="amp">
              {"&"}
            </span>
            Mrs
          </a>
          {" "}
          <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav className="nav-links" role="navigation" aria-label="Main navigation">
            {" "}
            <a className="nav-link" href="#hero">
              Home
            </a>
            {" "}
            <a className="nav-link" href="#story">
              Our Story
            </a>
            {" "}
            <a className="nav-link" href="#couple">
              The Couple
            </a>
            {" "}
            <a className="nav-link" href="#party">
              Bridal Party
            </a>
            {" "}
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
            {" "}
            <a className="nav-link" href="#schedule">
              Schedule
            </a>
            {" "}
            <a className="nav-link" href="#rsvp">
              RSVP
            </a>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="hero" id="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img src={a0} alt="" className="active" />
          {" "}
          <img src={a1} alt="" />
          {" "}
          <img src={a2} alt="" />
          {" "}
        </div>
        {" "}
        <div className="hero-content">
          {" "}
          <div className="hero-eyebrow">
            Save the Date
          </div>
          {" "}
          <h1 className="hero-title">
            Mr
            <span className="amp">
              {"&"}
            </span>
            Mrs
          </h1>
          {" "}
          <p className="hero-names">
            {"Elena & James"}
          </p>
          {" "}
          <p className="hero-tagline">
            Together with their families, we joyfully invite you to celebrate our wedding day
          </p>
          {" "}
          <div className="date-badge">
            {" "}
            <img src={a3} alt="Wedding date backdrop" />
            {" "}
            <div className="date-badge-inner">
              {" "}
              <span className="db-label">
                Celebrating Our Forever
              </span>
              {" "}
              <span className="db-date">
                June 19 · 2027
              </span>
              {" "}
              <span className="db-place">
                The Rose Garden Estate, Hudson Valley
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="hero-scroll" aria-hidden="true">
          {" "}
          <span>
            Scroll
          </span>
          {" "}
          <div className="line" />
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section story" id="story">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              Our Journey
            </span>
            {" "}
            <h2>
              The Love Story
            </h2>
            {" "}
            <div className="ornament" aria-hidden="true">
              <span className="gem" />
            </div>
            {" "}
          </div>
          {" "}
          <div className="timeline">
            {" "}
            {" "}
            <div className="timeline-item reveal d-1">
              {" "}
              <div className="timeline-media frame">
                {" "}
                <img src={a4} alt="The first hello" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="timeline-body">
                {" "}
                <span className="tl-chapter">
                  The First Hello
                </span>
                {" "}
                <h3>
                  A rainy autumn evening
                </h3>
                {" "}
                <p>
                  A crowded bookstore, one shared umbrella, and a conversation that lasted until the staff locked the doors behind us. Two strangers became the easiest conversation either of us had ever had.
                </p>
                {" "}
                <span className="tl-date">
                  2018
                </span>
                {" "}
              </div>
              {" "}
              <div className="tl-dot" />
              {" "}
            </div>
            {" "}
            {" "}
            <div className="timeline-item reveal d-2">
              {" "}
              <div className="timeline-body">
                {" "}
                <span className="tl-chapter">
                  Where It All Began
                </span>
                {" "}
                <h3>
                  Sunday morning rituals
                </h3>
                {" "}
                <p>
                  Farmers’ markets and long drives became our Sunday tradition. Somewhere between the coffee and the road trips, we stopped saying “you two” and started saying “us.”
                </p>
                {" "}
                <span className="tl-date">
                  2020
                </span>
                {" "}
              </div>
              {" "}
              <div className="timeline-media frame">
                {" "}
                <img src={a5} alt="Sunday morning rituals" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="tl-dot" />
              {" "}
            </div>
            {" "}
            {" "}
            <div className="timeline-item reveal d-3">
              {" "}
              <div className="timeline-media frame">
                {" "}
                <img src={a6} alt="The proposal" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="timeline-body">
                {" "}
                <span className="tl-chapter">
                  The Proposal
                </span>
                {" "}
                <h3>
                  Golden hour on the cliffs
                </h3>
                {" "}
                <p>
                  James found one knee and a trembling voice as the sun bled into the horizon. Elena said yes before he could finish the question. The ocean cheered.
                </p>
                {" "}
                <span className="tl-date">
                  2024
                </span>
                {" "}
              </div>
              {" "}
              <div className="tl-dot" />
              {" "}
            </div>
            {" "}
            {" "}
            <div className="timeline-item reveal d-4">
              {" "}
              <div className="timeline-body">
                {" "}
                <span className="tl-chapter">
                  The Wedding Day
                </span>
                {" "}
                <h3>
                  And so begins forever
                </h3>
                {" "}
                <p>
                  Vows whispered under a rose arbor, dancing under string lights, and a very long table set for everyone we love. This is only the first chapter of the rest of our lives.
                </p>
                {" "}
                <span className="tl-date">
                  2027
                </span>
                {" "}
              </div>
              {" "}
              <div className="timeline-media frame">
                {" "}
                <img src={a7} alt="The wedding day" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="tl-dot" />
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
      <section className="section section--tint couple" id="couple">
        {" "}
        <div className="texture" aria-hidden="true">
          {" "}
          <img src={a8} alt="" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="couple-grid">
            {" "}
            <div className="couple-feature frame reveal">
              {" "}
              <img src={a9} alt="Elena and James" loading="lazy" />
              {" "}
            </div>
            {" "}
            <div className="couple-copy reveal d-2">
              {" "}
              <span className="eyebrow">
                The Happy Couple
              </span>
              {" "}
              <h2>
                {"Elena "}
                <span className="accent">
                  {"&"}
                </span>
                {" James"}
              </h2>
              {" "}
              <div className="ornament" aria-hidden="true">
                <span className="gem" />
              </div>
              {" "}
              <p>
                Together for nine years, engaged for three, and finally ready to say “I do.” Elena is a painter who finds beauty in the overlooked; James is a botanist who believes in growing things with patience and care. They met in the middle — a rainy bookstore, a shared umbrella, and a love that has bloomed ever since.
              </p>
              {" "}
              <div className="couple-names">
                {" "}
                <div className="portrait">
                  {" "}
                  <div className="photo">
                    {" "}
                    <img src={a10} alt="Elena — the bride" loading="lazy" />
                    {" "}
                  </div>
                  {" "}
                  <span className="name">
                    Elena
                  </span>
                  {" "}
                  <span className="role">
                    The Bride
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="portrait">
                  {" "}
                  <div className="photo">
                    {" "}
                    <img src={a11} alt="James — the groom" loading="lazy" />
                    {" "}
                  </div>
                  {" "}
                  <span className="name">
                    James
                  </span>
                  {" "}
                  <span className="role">
                    The Groom
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
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section party" id="party">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              Our People
            </span>
            {" "}
            <h2>
              The Bridal Party
            </h2>
            {" "}
            <div className="ornament" aria-hidden="true">
              <span className="gem" />
            </div>
            {" "}
          </div>
          {" "}
          <div className="party-team frame reveal">
            {" "}
            <img src={a12} alt="The whole bridal party" loading="lazy" />
            {" "}
          </div>
          {" "}
          <p className="party-team-caption reveal d-1">
            The whole crew—they kept every secret, planned every surprise
          </p>
          {" "}
          <div className="party-grid">
            {" "}
            {" "}
            <div className="party-card reveal d-1">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a13} alt="Sofia Reyes" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Sofia Reyes
              </h3>
              {" "}
              <span className="role">
                Maid of Honor
              </span>
              {" "}
              <span className="tag">
                Since kindergarten
              </span>
              {" "}
            </div>
            {" "}
            <div className="party-card reveal d-2">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a14} alt="Maya Chen" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Maya Chen
              </h3>
              {" "}
              <span className="role">
                Bridesmaid
              </span>
              {" "}
              <span className="tag">
                College roommate
              </span>
              {" "}
            </div>
            {" "}
            <div className="party-card reveal d-3">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a15} alt="Chloe Laurent" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Chloe Laurent
              </h3>
              {" "}
              <span className="role">
                Bridesmaid
              </span>
              {" "}
              <span className="tag">
                The adventure buddy
              </span>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="party-card reveal d-1">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a16} alt="Leo Whitfield" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Leo Whitfield
              </h3>
              {" "}
              <span className="role">
                Best Man
              </span>
              {" "}
              <span className="tag">
                Brother by choice
              </span>
              {" "}
            </div>
            {" "}
            <div className="party-card reveal d-2">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a17} alt="Daniel Okafor" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Daniel Okafor
              </h3>
              {" "}
              <span className="role">
                Groomsman
              </span>
              {" "}
              <span className="tag">
                The calm voice
              </span>
              {" "}
            </div>
            {" "}
            <div className="party-card reveal d-3">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a18} alt="Marcus Reed" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Marcus Reed
              </h3>
              {" "}
              <span className="role">
                Groomsman
              </span>
              {" "}
              <span className="tag">
                Co-worker turned friend
              </span>
              {" "}
            </div>
            {" "}
            <div className="party-card reveal d-4">
              {" "}
              <div className="party-photo">
                {" "}
                <img src={a19} alt="Ryan Cole" loading="lazy" />
                {" "}
              </div>
              {" "}
              <h3>
                Ryan Cole
              </h3>
              {" "}
              <span className="role">
                Groomsman
              </span>
              {" "}
              <span className="tag">
                The partner in crime
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
      <section className="section section--tint gallery" id="gallery">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow">
              Moments
            </span>
            {" "}
            <h2>
              The Gallery
            </h2>
            {" "}
            <div className="ornament" aria-hidden="true">
              <span className="gem" />
            </div>
            {" "}
          </div>
          {" "}
          <div className="gallery-grid">
            {" "}
            <div className="gallery-item reveal d-1">
              {" "}
              <img src={a20} alt="First look" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  First look
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-2">
              {" "}
              <img src={a21} alt="The vows" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  The vows
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-3">
              {" "}
              <img src={a22} alt="Golden hour" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  Golden hour
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-4">
              {" "}
              <img src={a23} alt="The rings" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  The rings
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-1">
              {" "}
              <img src={a24} alt="Dance floor" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  Dance floor
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-2">
              {" "}
              <img src={a25} alt="Table decor" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  Table décor
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-3">
              {" "}
              <img src={a26} alt="The bouquet" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  The bouquet
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="gallery-item reveal d-4">
              {" "}
              <img src={a27} alt="Endless love" loading="lazy" />
              {" "}
              <div className="gallery-caption">
                <div className="gl" />
                <span>
                  Endless love
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
      {" "}
      <section className="section quote">
        {" "}
        <div className="texture" aria-hidden="true">
          {" "}
          <img src={a28} alt="" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="quote-inner reveal">
            {" "}
            <p className="script">
              {"“Two souls, one heart, "}
              <br />
              {"and a lifetime of "}
              <span className="accent">
                maybes
              </span>
              {" still to come.”"}
            </p>
            {" "}
            <cite>
              {"— Elena & James, 2027"}
            </cite>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section schedule" id="schedule">
        {" "}
        <div className="schedule-bg">
          {" "}
          <img src={a3} alt="" aria-hidden="true" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="section-head reveal">
            {" "}
            <span className="eyebrow eyebrow--light">
              The Celebration Day
            </span>
            {" "}
            <h2>
              Event Schedule
            </h2>
            {" "}
            <div className="ornament ornament--light" aria-hidden="true">
              <span className="gem" />
            </div>
            {" "}
            <span className="schedule-date">
              Saturday, June 19, 2027
            </span>
            {" "}
          </div>
          {" "}
          <div className="schedule-grid">
            {" "}
            <div className="day-card reveal d-1">
              {" "}
              <span className="time">
                3:00 pm
              </span>
              {" "}
              <span className="title">
                {"Arrival & Prelude"}
              </span>
              {" "}
              <p className="note">
                Garden gates open; welcome drinks under the wisteria.
              </p>
              {" "}
            </div>
            {" "}
            <div className="day-card reveal d-2">
              {" "}
              <span className="time">
                4:00 pm
              </span>
              {" "}
              <span className="title">
                The Ceremony
              </span>
              {" "}
              <p className="note">
                We say “I do” beneath the rose arbor at the heart of the estate.
              </p>
              {" "}
            </div>
            {" "}
            <div className="day-card reveal d-3">
              {" "}
              <span className="time">
                6:00 pm
              </span>
              {" "}
              <span className="title">
                Cocktail Hour
              </span>
              {" "}
              <p className="note">
                Canapés, cool drinks, and the first of many toasts.
              </p>
              {" "}
            </div>
            {" "}
            <div className="day-card reveal d-1">
              {" "}
              <span className="time">
                7:30 pm
              </span>
              {" "}
              <span className="title">
                {"Dinner & Toasts"}
              </span>
              {" "}
              <p className="note">
                A long family-style table under string lights and stars.
              </p>
              {" "}
            </div>
            {" "}
            <div className="day-card reveal d-2">
              {" "}
              <span className="time">
                9:30 pm
              </span>
              {" "}
              <span className="title">
                {"First Dance & Dancing"}
              </span>
              {" "}
              <p className="note">
                The floor is yours the moment we take the first step.
              </p>
              {" "}
            </div>
            {" "}
            <div className="day-card reveal d-3">
              {" "}
              <span className="time">
                10:30 pm
              </span>
              {" "}
              <span className="title">
                {"Cake & Evening"}
              </span>
              {" "}
              <p className="note">
                Sweet endings, sparklers, and one last song.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <p className="venue">
            <strong>
              The Rose Garden Estate
            </strong>
            {" · 12 Magnolia Lane, Hudson Valley, New York"}
          </p>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section rsvp" id="rsvp">
        {" "}
        <div className="texture" aria-hidden="true">
          {" "}
          <img src={a29} alt="" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="rsvp-grid">
            {" "}
            <div className="rsvp-copy reveal">
              {" "}
              <span className="eyebrow">
                Will You Join Us?
              </span>
              {" "}
              <h2>
                {"Kindly "}
                <span className="accent">
                  RSVP
                </span>
              </h2>
              {" "}
              <div className="ornament" aria-hidden="true">
                <span className="gem" />
              </div>
              {" "}
              <p>
                We would be honored to have you with us on this special day. Please let us know whether you can celebrate alongside us by June 1, 2027.
              </p>
              {" "}
              <div className="rsvp-facts">
                {" "}
                <div className="rsvp-fact">
                  {" "}
                  <span className="gem" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Saturday, June 19, 2027
                    </strong>
                    {" "}
                    <small>
                      Ceremony at 4:00 pm sharp
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="rsvp-fact">
                  {" "}
                  <span className="gem" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      The Rose Garden Estate
                    </strong>
                    {" "}
                    <small>
                      12 Magnolia Lane, Hudson Valley, NY
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="rsvp-fact">
                  {" "}
                  <span className="gem" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Cocktail Attire
                    </strong>
                    {" "}
                    <small>
                      Garden-friendly footwear encouraged
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="rsvp-card reveal d-2">
              {" "}
              <h3>
                Your Response
              </h3>
              {" "}
              <div className="ornament" aria-hidden="true">
                <span className="gem" />
              </div>
              {" "}
              <form data-form="" noValidate={true}>
                {" "}
                <div className="form-row">
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="rsvp-name">
                      Full Name *
                    </label>
                    {" "}
                    <input type="text" id="rsvp-name" name="name" placeholder="e.g. Jane Doe" required={true} />
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="rsvp-email">
                      Email *
                    </label>
                    {" "}
                    <input type="email" id="rsvp-email" name="email" placeholder="e.g. jane@example.com" required={true} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="field">
                  {" "}
                  <label htmlFor="rsvp-attending">
                    Attending *
                  </label>
                  {" "}
                  <select id="rsvp-attending" name="attending" required={true}>
                    {" "}
                    <option value="" disabled={true}>
                      Select an option
                    </option>
                    {" "}
                    <option value="accepts">
                      Joyfully Accepts
                    </option>
                    {" "}
                    <option value="declines">
                      Regretfully Declines
                    </option>
                    {" "}
                  </select>
                  {" "}
                </div>
                {" "}
                <div className="field">
                  {" "}
                  <label htmlFor="rsvp-guests">
                    Number of Guests
                  </label>
                  {" "}
                  <input type="number" id="rsvp-guests" name="guests" min="1" max="4" placeholder="1" />
                  {" "}
                </div>
                {" "}
                <div className="field">
                  {" "}
                  <label htmlFor="rsvp-note">
                    A Note for the Couple
                  </label>
                  {" "}
                  <textarea id="rsvp-note" name="note" placeholder="Share a message or dietary requirements..." rows="3" />
                  {" "}
                </div>
                {" "}
                <button className="btn btn--gold" type="submit">
                  Send Our RSVP
                </button>
                {" "}
                <div className="form-ok">
                  Thank you! Your RSVP has been received — we can’t wait to celebrate with you.
                </div>
                {" "}
                <div className="form-err">
                  Please fill in the required fields to send your RSVP.
                </div>
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
      {" "}
      <footer className="footer" id="footer" role="contentinfo">
        {" "}
        <div className="footer-bg" aria-hidden="true">
          {" "}
          <img src={a30} alt="" />
          {" "}
        </div>
        {" "}
        <div className="container">
          {" "}
          <div className="footer-top">
            {" "}
            <div className="footer-about">
              {" "}
              <span className="brand">
                Mr
                <span className="amp">
                  {"&"}
                </span>
                Mrs
              </span>
              {" "}
              <p>
                Two hearts, one story. Thank you for being part of our journey. We cannot wait to celebrate with you.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Navigate
              </h4>
              {" "}
              <ul className="footer-links">
                {" "}
                <li>
                  <a href="#hero">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#story">
                    Our Story
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#couple">
                    The Couple
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#party">
                    Bridal Party
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#gallery">
                    Gallery
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#schedule">
                    Schedule
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#rsvp">
                    RSVP
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
                Contact
              </h4>
              {" "}
              <ul className="footer-contact">
                {" "}
                <li>
                  <span className="gem" />
                  12 Magnolia Lane, Hudson Valley, NY
                </li>
                {" "}
                <li>
                  <span className="gem" />
                  rsvp@mrandmrs.wedding
                </li>
                {" "}
                <li>
                  <span className="gem" />
                  +1 (555) 019-2027
                </li>
                {" "}
              </ul>
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
              {" Mr&Mrs · Crafted with love by "}
              <a href="https://uiuxlabz.com" target="_blank" rel="noopener">
                uiuxlabz
              </a>
            </span>
            {" "}
            <span>
              {" "}
              <a href="#hero">
                Back to top
              </a>
              {" "}
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
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {" "}
          <path d="M18 15l-6-6-6 6" />
          {" "}
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
