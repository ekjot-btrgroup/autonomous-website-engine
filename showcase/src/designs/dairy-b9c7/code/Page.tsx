// Converted from the HTML template dairy-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/banner-2.webp";
import a1 from "./assets/banner.webp";
import a2 from "./assets/carousel-1.webp";
import a3 from "./assets/carousel-2.webp";
import a4 from "./assets/banner-1.webp";
import a5 from "./assets/service-1.webp";
import a6 from "./assets/service-2.webp";
import a7 from "./assets/service-3.webp";
import a8 from "./assets/product-1.webp";
import a9 from "./assets/product-2.webp";
import a10 from "./assets/product-3.webp";
import a11 from "./assets/product-4.webp";
import a12 from "./assets/animal.webp";
import a13 from "./assets/award.webp";
import a14 from "./assets/experience.webp";
import a15 from "./assets/testimonial-1.webp";
import a16 from "./assets/testimonial-2.webp";
import a17 from "./assets/testimonial-3.webp";
import a18 from "./assets/gallery-1.webp";
import a19 from "./assets/gallery-2.webp";
import a20 from "./assets/gallery-3.webp";
import a21 from "./assets/gallery-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Nunito:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-dairy-b9c7">
      {" "}
      <div className="announce">
        {"🌿 Fresh morning milk just left the barn — "}
        <a href="product.html">
          order today for doorstep delivery
        </a>
      </div>
      {" "}
      <header className="site-header">
        {" "}
        <div className="container nav-wrap">
          {" "}
          <a className="brand" href="index.html" aria-label="Meadowgold Creamery home">
            {" "}
            <span className="brand-mark" aria-hidden="true">
              {" "}
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c-2.8 2.4-6 5.7-6 9.3a6 6 0 0 0 12 0c0-3.6-3.2-6.9-6-9.3zm0 14a3.6 3.6 0 0 1-3.6-3.6c0-1.7 1.5-3.5 3.6-5.5 2.1 2 3.6 3.8 3.6 5.5A3.6 3.6 0 0 1 12 16.2z" />
              </svg>
              {" "}
            </span>
            {" "}
            <span className="brand-name">
              Meadow
              <em>
                gold
              </em>
            </span>
            {" "}
          </a>
          {" "}
          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation menu">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
          {" "}
          <nav aria-label="Primary">
            {" "}
            <ul className="nav-links" id="nav-links">
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
                <a className="nav-link" href="product.html">
                  Products
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="gallery.html">
                  Gallery
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="testimonial.html">
                  Reviews
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="team.html">
                  Team
                </a>
              </li>
              {" "}
              <li>
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
              <li className="nav-cta-item">
                <a className="btn btn-primary nav-cta" href="contact.html">
                  Order Fresh
                </a>
              </li>
              {" "}
            </ul>
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
            <img className="active" src={a1} alt="" />
            {" "}
            <img src={a2} alt="" />
            {" "}
            <img src={a3} alt="" />
            {" "}
          </div>
          {" "}
          <div className="container">
            {" "}
            <div className="hero-content">
              {" "}
              <span className="hero-kicker">
                <span className="dot" />
                {" Family farm · est. 1987"}
              </span>
              {" "}
              <h1>
                {"From green pastures, "}
                <em>
                  poured fresh
                </em>
                {" every morning"}
              </h1>
              {" "}
              <p className="lead">
                Meadowgold Creamery raises grass-fed cows on open meadows and turns their wholesome milk into yogurt, cheese and butter the old-fashioned way — small batches, no shortcuts.
              </p>
              {" "}
              <div className="hero-actions">
                {" "}
                <a className="btn btn-butter" href="product.html">
                  {" Explore the Creamery "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="btn btn-ghost" href="contact.html">
                  Plan a Farm Visit
                </a>
                {" "}
              </div>
              {" "}
              <div className="hero-trust">
                {" "}
                <span>
                  <span className="stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  {" 4.9 from 2,300+ homes"}
                </span>
                {" "}
                <span>
                  100% grass-fed cows
                </span>
                {" "}
                <span>
                  Delivered in 24h
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-chip" aria-hidden="true">
            {" "}
            <strong>
              Milked at 6 AM
            </strong>
            {" "}
            <small>
              Chilled, bottled and on the road by noon — every single day.
            </small>
            {" "}
          </div>
          {" "}
          <a className="hero-scroll" href="#story">
            <span className="mouse" />
            {" Scroll"}
          </a>
          {" "}
        </section>
        {" "}
        {" "}
        <div className="marquee" aria-hidden="true">
          {" "}
          <div className="marquee-track">
            {" "}
            <span>
              Grass-Fed
            </span>
            <span>
              Small Batch
            </span>
            <span>
              No Antibiotics
            </span>
            <span>
              Pasture Raised
            </span>
            <span>
              Family Owned
            </span>
            <span>
              Fresh Daily
            </span>
            {" "}
            <span>
              Grass-Fed
            </span>
            <span>
              Small Batch
            </span>
            <span>
              No Antibiotics
            </span>
            <span>
              Pasture Raised
            </span>
            <span>
              Family Owned
            </span>
            <span>
              Fresh Daily
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section" id="story">
          {" "}
          <div className="container">
            {" "}
            <div className="split">
              {" "}
              <div className="split-media reveal">
                {" "}
                <img className="img-main" src={a4} alt="Cows grazing on a sunny Meadowgold pasture" />
                {" "}
                <img className="img-float" src={a0} alt="Fresh glass bottles of Meadowgold milk" />
                {" "}
                <div className="badge-circle">
                  <strong>
                    38
                  </strong>
                  <small>
                    Years of
                    <br />
                    farming
                  </small>
                </div>
                {" "}
              </div>
              {" "}
              <div className="reveal d2">
                {" "}
                <span className="eyebrow">
                  Our story
                </span>
                {" "}
                <h2 className="mt-1">
                  A creamery that still believes milk should taste like the meadow
                </h2>
                {" "}
                <p className="lead mt-1">
                  In 1987 the Hart family planted their first clover fields. Today, three generations later, we still milk the same way: happy cows, green grass, and hands that never rush.
                </p>
                {" "}
                <p className="mt-1">
                  Every bottle is traceable to the exact pasture it came from — that's the Meadowgold promise.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    Rotational grazing across 240 acres of clover meadows
                  </li>
                  {" "}
                  <li>
                    Raw milk chilled within minutes of the morning milking
                  </li>
                  {" "}
                  <li>
                    Small-batch creamery runs, never mass-processed
                  </li>
                  {" "}
                </ul>
                {" "}
                <a className="btn btn-primary" href="about.html">
                  {"Meet the Farm Family "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  {" "}
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
        <section className="section section-soft">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <span className="eyebrow">
                Pasture to pour
              </span>
              {" "}
              <h2 className="mt-1">
                Wholesome at every step
              </h2>
              {" "}
              <p className="lead">
                Three simple promises that guide everything we bottle, churn and cut.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="img-card reveal">
                {" "}
                <img src={a5} alt="Meadowgold cows grazing on fresh green pasture" />
                {" "}
                <span className="step-badge">
                  Step 01
                </span>
                {" "}
                <div className="img-card-body">
                  {" "}
                  <h3>
                    Grazed on clover meadows
                  </h3>
                  {" "}
                  <p>
                    Our herd roams open pasture all year, eating grass and clover — never grain-heavy feeds.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="img-card reveal d1">
                {" "}
                <img src={a6} alt="Milking parlour at Meadowgold dairy farm" />
                {" "}
                <span className="step-badge">
                  Step 02
                </span>
                {" "}
                <div className="img-card-body">
                  {" "}
                  <h3>
                    Milked with gentle care
                  </h3>
                  {" "}
                  <p>
                    Morning and evening milking in a calm parlour, chilled to 4°C within minutes.
                  </p>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="img-card reveal d2">
                {" "}
                <img src={a7} alt="Small-batch cheese and butter crafting at Meadowgold" />
                {" "}
                <span className="step-badge">
                  Step 03
                </span>
                {" "}
                <div className="img-card-body">
                  {" "}
                  <h3>
                    Crafted in small batches
                  </h3>
                  {" "}
                  <p>
                    Our creamery turns fresh milk into yogurt, cultured butter and aged cheese by hand.
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <span className="eyebrow">
                Fresh from the creamery
              </span>
              {" "}
              <h2 className="mt-1">
                This week's harvest
              </h2>
              {" "}
              <p className="lead">
                Four everyday essentials, crafted each morning and delivered while they're still cold.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-4">
              {" "}
              <article className="product-card reveal">
                {" "}
                <div className="product-media">
                  {" "}
                  <img src={a8} alt="Meadowgold whole milk in a glass bottle" />
                  {" "}
                  <span className="product-tag">
                    Grass-fed
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <h3>
                    Whole Milk
                  </h3>
                  {" "}
                  <p>
                    Rich, creamy and unhomogenised — the cream still rises to the top.
                  </p>
                  {" "}
                  <div className="price-row">
                    {" "}
                    <span className="price">
                      {"$4.50 "}
                      <small>
                        / litre
                      </small>
                    </span>
                    {" "}
                    <button className="btn-add" type="button" aria-label="Add whole milk to basket">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal d1">
                {" "}
                <div className="product-media">
                  {" "}
                  <img src={a9} alt="Creamy Meadowgold Greek yogurt" />
                  {" "}
                  <span className="product-tag">
                    Live culture
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <h3>
                    Greek Yogurt
                  </h3>
                  {" "}
                  <p>
                    Thick, spoon-standing yogurt cultured for 12 hours with live probiotics.
                  </p>
                  {" "}
                  <div className="price-row">
                    {" "}
                    <span className="price">
                      {"$5.90 "}
                      <small>
                        / 500g
                      </small>
                    </span>
                    {" "}
                    <button className="btn-add" type="button" aria-label="Add Greek yogurt to basket">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal d2">
                {" "}
                <div className="product-media">
                  {" "}
                  <img src={a10} alt="Aged Meadowgold farmhouse cheese" />
                  {" "}
                  <span className="product-tag">
                    Aged 60 days
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <h3>
                    Farmhouse Cheese
                  </h3>
                  {" "}
                  <p>
                    Nutty, buttery wheels pressed from curd and aged in our cool cellar.
                  </p>
                  {" "}
                  <div className="price-row">
                    {" "}
                    <span className="price">
                      {"$9.20 "}
                      <small>
                        / 250g
                      </small>
                    </span>
                    {" "}
                    <button className="btn-add" type="button" aria-label="Add farmhouse cheese to basket">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="product-card reveal d3">
                {" "}
                <div className="product-media">
                  {" "}
                  <img src={a11} alt="Golden Meadowgold cultured butter" />
                  {" "}
                  <span className="product-tag butter">
                    Small batch
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="product-body">
                  {" "}
                  <h3>
                    Cultured Butter
                  </h3>
                  {" "}
                  <p>
                    Churned from cream and cultured overnight for that deep golden flavour.
                  </p>
                  {" "}
                  <div className="price-row">
                    {" "}
                    <span className="price">
                      {"$6.40 "}
                      <small>
                        / 250g
                      </small>
                    </span>
                    {" "}
                    <button className="btn-add" type="button" aria-label="Add cultured butter to basket">
                      {" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="center mt-3">
              {" "}
              <a className="btn btn-ghost-dark" href="product.html">
                {"View Full Product Range "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
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
        <section className="section stats-band">
          {" "}
          <div className="container">
            {" "}
            <div className="stats-grid">
              {" "}
              <div className="stat reveal">
                {" "}
                <strong>
                  240
                </strong>
                {" "}
                <span>
                  <img src={a12} alt="" />
                  {" Acres of pasture"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal d1">
                {" "}
                <strong>
                  120k
                </strong>
                {" "}
                <span>
                  Litres poured weekly
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal d2">
                {" "}
                <strong>
                  12
                </strong>
                {" "}
                <span>
                  <img src={a13} alt="" />
                  {" Gold awards"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="stat reveal d3">
                {" "}
                <strong>
                  38
                </strong>
                {" "}
                <span>
                  <img src={a14} alt="" />
                  {" Years on the farm"}
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
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <span className="eyebrow">
                Word from the table
              </span>
              {" "}
              <h2 className="mt-1">
                Loved in 2,300 kitchens
              </h2>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="quote-card reveal">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                {" "}
                <blockquote>
                  The milk tastes like the milk I drank at my grandmother's farm. My kids refuse anything else now.
                </blockquote>
                {" "}
                <div className="quotee">
                  {" "}
                  <img src={a15} alt="Portrait of Emma Whitfield" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Emma Whitfield
                    </strong>
                    {" "}
                    <small>
                      Mum of two · Maple Grove
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="quote-card reveal d1">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                {" "}
                <blockquote>
                  Their cultured butter is genuinely golden. It changed how our café does croissants.
                </blockquote>
                {" "}
                <div className="quotee">
                  {" "}
                  <img src={a16} alt="Portrait of James Okafor" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      James Okafor
                    </strong>
                    {" "}
                    <small>
                      Head Baker · Buttercup Café
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="quote-card reveal d2">
                {" "}
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {" "}
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                {" "}
                <blockquote>
                  We toured the farm and watched the whole process. Clean, honest, and the cows are clearly happy.
                </blockquote>
                {" "}
                <div className="quotee">
                  {" "}
                  <img src={a17} alt="Portrait of Priya Sharma" />
                  {" "}
                  <div>
                    {" "}
                    <strong>
                      Priya Sharma
                    </strong>
                    {" "}
                    <small>
                      Food Blogger · FreshBite
                    </small>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
            <div className="center mt-3">
              {" "}
              <a className="btn btn-ghost-dark" href="testimonial.html">
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
        <section className="section section-soft">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head center">
              {" "}
              <span className="eyebrow">
                Life on the farm
              </span>
              {" "}
              <h2 className="mt-1">
                Mornings at Meadowgold
              </h2>
              {" "}
            </div>
            {" "}
            <div className="gallery-grid">
              {" "}
              <a className="gallery-item tall reveal" href="gallery.html">
                {" "}
                <img src={a18} alt="Meadowgold herd at sunrise" />
                {" "}
                <span className="gallery-cap">
                  Dawn herd
                </span>
                {" "}
              </a>
              {" "}
              <a className="gallery-item reveal d1" href="gallery.html">
                {" "}
                <img src={a19} alt="Meadowgold creamery barn" />
                {" "}
                <span className="gallery-cap">
                  The barn
                </span>
                {" "}
              </a>
              {" "}
              <a className="gallery-item reveal d2" href="gallery.html">
                {" "}
                <img src={a20} alt="Fresh milk pouring at Meadowgold" />
                {" "}
                <span className="gallery-cap">
                  Morning pour
                </span>
                {" "}
              </a>
              {" "}
              <a className="gallery-item reveal d3" href="gallery.html">
                {" "}
                <img src={a21} alt="Cultured butter churning at Meadowgold" />
                {" "}
                <span className="gallery-cap">
                  Churning butter
                </span>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            <div className="center mt-3">
              {" "}
              <a className="btn btn-primary" href="gallery.html">
                See the Full Farm Album
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
                Taste the difference the meadow makes
              </h2>
              {" "}
              <p>
                Join the Meadowgold milk round — fresh dairy on your doorstep before breakfast, every single day.
              </p>
              {" "}
              <div className="cta-actions">
                {" "}
                <a className="btn btn-butter" href="contact.html">
                  {"Start a Milk Round "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="btn btn-ghost" href="product.html">
                  Browse the Range
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
      <footer className="site-footer">
        {" "}
        <div className="container footer-grid">
          {" "}
          <div className="footer-brand">
            {" "}
            <a className="brand" href="index.html" aria-label="Meadowgold Creamery home">
              {" "}
              <span className="brand-mark" aria-hidden="true">
                {" "}
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.2c-2.8 2.4-6 5.7-6 9.3a6 6 0 0 0 12 0c0-3.6-3.2-6.9-6-9.3zm0 14a3.6 3.6 0 0 1-3.6-3.6c0-1.7 1.5-3.5 3.6-5.5 2.1 2 3.6 3.8 3.6 5.5A3.6 3.6 0 0 1 12 16.2z" />
                </svg>
                {" "}
              </span>
              {" "}
              <span className="brand-name">
                Meadow
                <em>
                  gold
                </em>
              </span>
              {" "}
            </a>
            {" "}
            <p>
              Family-run since 1987. Grass-fed cows, green meadows and honest dairy — poured fresh every morning from our pasture to your table.
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
                <a href="index.html">
                  Home
                </a>
              </li>
              {" "}
              <li>
                <a href="about.html">
                  About the Farm
                </a>
              </li>
              {" "}
              <li>
                <a href="product.html">
                  Products
                </a>
              </li>
              {" "}
              <li>
                <a href="gallery.html">
                  Gallery
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
              Pages
            </h4>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="testimonial.html">
                  Reviews
                </a>
              </li>
              {" "}
              <li>
                <a href="team.html">
                  Our Team
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Contact
                </a>
              </li>
              {" "}
              <li>
                <a href="404.html">
                  404 Page
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="footer-col footer-news">
            {" "}
            <h4>
              Fresh in your inbox
            </h4>
            {" "}
            <p>
              Seasonal recipes, farm updates and first taste of new batches — once a week, no spam.
            </p>
            {" "}
            <form className="news-form" noValidate={true}>
              {" "}
              <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
              {" "}
              <button className="btn-mini" type="submit">
                Join
              </button>
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
              {" Meadowgold Creamery & Farm. All rights reserved."}
            </p>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="contact.html">
                  Privacy
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Terms
                </a>
              </li>
              {" "}
              <li>
                <a href="contact.html">
                  Delivery
                </a>
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <button className="back-to-top" type="button" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
