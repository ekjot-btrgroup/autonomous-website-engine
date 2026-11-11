// Converted from the HTML template footer-showcase-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bootstrap-footer-templates.webp";
import a1 from "./assets/demo-1.webp";
import a2 from "./assets/demo-2.webp";
import a3 from "./assets/demo-3.webp";
import a4 from "./assets/demo-4.webp";
import a5 from "./assets/demo-5.webp";
import a6 from "./assets/img-1.webp";
import a7 from "./assets/img-2.webp";
import a8 from "./assets/img-3.webp";
import a9 from "./assets/img-4.webp";
import a10 from "./assets/img-5.webp";
import a11 from "./assets/img-6.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-footer-showcase-4906">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav" aria-label="Main navigation">
            {" "}
            <a href="index.html" className="nav-logo">
              {" "}
              <span className="nav-logo-mark">
                🧩
              </span>
              {" FooterLab "}
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Gallery
              </a>
              {" "}
              <a href="#v1" className="nav-link">
                Classic
              </a>
              {" "}
              <a href="#v2" className="nav-link">
                Newsletter
              </a>
              {" "}
              <a href="#v4" className="nav-link">
                Mega
              </a>
              {" "}
              <a href="#v6" className="nav-link">
                Cards
              </a>
              {" "}
              <a href="404.html" className="nav-link">
                404
              </a>
              {" "}
              <a href="index.html#patterns" className="nav-cta">
                Browse patterns
              </a>
              {" "}
            </div>
            {" "}
            <button className="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
              {" "}
              <span />
              <span />
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
        <section className="page-hero">
          {" "}
          <div className="container">
            {" "}
            <div className="page-hero-copy">
              {" "}
              <span className="page-hero-kicker">
                ⚡ FooterLab — Pattern Library
              </span>
              {" "}
              <h1>
                {"Footer "}
                <span className="accent">
                  Design Patterns
                </span>
              </h1>
              {" "}
              <p className="page-hero-text">
                {" Six hand-crafted footer blueprints, ready to drop into any project. Every variant is framework-free, fully responsive and built with semantic HTML5, modern CSS and clean vanilla JavaScript. "}
              </p>
              {" "}
              <div className="page-hero-actions">
                {" "}
                <a href="#patterns" className="btn btn-teal">
                  Explore all 6 patterns
                </a>
                {" "}
                <a href="#v6" className="btn btn-ghost">
                  Skip to card footer
                </a>
                {" "}
              </div>
              {" "}
              <div className="page-hero-meta">
                {" "}
                <div>
                  <strong>
                    6
                  </strong>
                  <span>
                    Patterns
                  </span>
                </div>
                {" "}
                <div>
                  <strong>
                    0
                  </strong>
                  <span>
                    Frameworks
                  </span>
                </div>
                {" "}
                <div>
                  <strong>
                    100%
                  </strong>
                  <span>
                    Responsive
                  </span>
                </div>
                {" "}
                <div>
                  <strong>
                    +
                  </strong>
                  <span>
                    {"Dark & light"}
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="page-hero-media">
              {" "}
              <div className="page-hero-img-wrap">
                {" "}
                <img className="page-hero-img" src={a0} alt="Collage of footer design patterns" loading="lazy" />
                {" "}
              </div>
              {" "}
              <div className="page-hero-badge">
                {" "}
                <span className="dot" />
                {" Every footer, copy-paste ready "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section" id="patterns">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="section-tag">
                The Gallery
              </span>
              {" "}
              <h2 className="section-title">
                Six footers, six personalities
              </h2>
              {" "}
              <p>
                {" Each card below renders a "}
                <strong>
                  live footer
                </strong>
                {" — click through the index to jump straight to a pattern, then copy the markup straight into your project. "}
              </p>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="pattern-index">
              {" "}
              <a className="pattern-tile reveal" href="#v1">
                {" "}
                <img src={a1} alt="Classic footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Classic
                  </strong>
                  <span>
                    01
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
              <a className="pattern-tile reveal" href="#v2">
                {" "}
                <img src={a2} alt="Newsletter footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Newsletter
                  </strong>
                  <span>
                    02
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
              <a className="pattern-tile reveal" href="#v3">
                {" "}
                <img src={a3} alt="Minimal footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Minimal
                  </strong>
                  <span>
                    03
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
              <a className="pattern-tile reveal" href="#v4">
                {" "}
                <img src={a4} alt="Mega menu footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Mega Menu
                  </strong>
                  <span>
                    04
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
              <a className="pattern-tile reveal" href="#v5">
                {" "}
                <img src={a5} alt="Social footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Social
                  </strong>
                  <span>
                    05
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
              <a className="pattern-tile reveal" href="#v6">
                {" "}
                <img src={a6} alt="Card footer preview" loading="lazy" />
                {" "}
                <figcaption>
                  <strong>
                    Cards
                  </strong>
                  <span>
                    06
                  </span>
                </figcaption>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="showcase">
              {" "}
              <article className="footer-demo-card reveal" id="v1">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num">
                    01
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Classic Multi-Column
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Brand block + 3 link columns + social icons
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag dark">
                      Dark
                    </span>
                    {" "}
                    <span className="fd-tag">
                      Corporates
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-classic">
                    {" "}
                    <div className="container">
                      {" "}
                      <div className="flv-classic-main">
                        {" "}
                        <div className="brand">
                          {" "}
                          <div className="brand-mark">
                            {" "}
                            <img className="brand-avatar" src={a1} alt="FooterLab mark" loading="lazy" />
                            {" "}
                            <span className="brand-name">
                              FooterLab
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <p className="brand-desc">
                            {" The pattern library for teams that ship beautiful sites fast. Production-ready footers, thoughtfully crafted and free to use. "}
                          </p>
                          {" "}
                          <div className="flv-social">
                            {" "}
                            <a href="#" aria-label="Twitter">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.6c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.5 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1l-.7-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.7 11.3 11.3 0 0 0 8.1 19c7.1 0 11-6 11-11.2v-.5c.8-.6 1.4-1.3 2-2.1Z" />
                              </svg>
                            </a>
                            {" "}
                            <a href="#" aria-label="Facebook">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
                              </svg>
                            </a>
                            {" "}
                            <a href="#" aria-label="YouTube">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 8s-.2-1.6-.9-2.2c-.8-.9-1.7-.9-2.1-1C16.7 4.5 12 4.5 12 4.5h0s-4.7 0-8 .3c-.4.1-1.3.1-2.1 1C1.2 6.4 1 8 1 8s-.2 1.6-.2 3.2V13c0 1.6.2 3.2.2 3.2s.2 1.6.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 8 .3 8 .3s4.7 0 8-.3c.4-.1 1.3-.1 2.1-1 .7-.6.9-2.2.9-2.2s.2-1.6.2-3.2v-1.8c0-1.6-.2-3.2-.2-3.2ZM9.7 14.9V8.6l6 3.1-6 3.2Z" />
                              </svg>
                            </a>
                            {" "}
                            <a href="#" aria-label="Instagram">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2c2.7 0 3 .1 4.1.1 1 0 1.6.2 2 .4.5.2.9.4 1.2.8.4.4.6.7.8 1.2.2.4.4 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2-.2.5-.4.9-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .4-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4a3.4 3.4 0 0 1-1.2-.8 3.4 3.4 0 0 1-.8-1.2c-.2-.4-.4-1-.4-2C3.7 15 3.7 14.7 3.7 12s0-3 .1-4.1c0-1 .2-1.6.4-2 .2-.5.4-.9.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.4 2-.4C9 2 9.3 2 12 2Zm0 4.8A5.2 5.2 0 1 0 17.2 12 5.2 5.2 0 0 0 12 6.8Zm0 8.6A3.4 3.4 0 1 1 15.4 12 3.4 3.4 0 0 1 12 15.4Zm5.4-8.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Z" />
                              </svg>
                            </a>
                            {" "}
                            <a href="#" aria-label="LinkedIn">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5ZM2.5 8.5h5v13h-5Zm8 0h4.8v1.8h.1a5.3 5.3 0 0 1 4.7-2.6c5 0 6 3.3 6 7.6v8.2h-5v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9v7.4h-5Z" />
                              </svg>
                            </a>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flv-col">
                          {" "}
                          <h4 className="flv-col-title">
                            Product
                          </h4>
                          {" "}
                          <nav className="col-links" aria-label="Product links">
                            {" "}
                            <a href="#">
                              Features
                            </a>
                            {" "}
                            <a href="#">
                              Pricing
                            </a>
                            {" "}
                            <a href="#">
                              Integrations
                            </a>
                            {" "}
                            <a href="#">
                              Changelog
                            </a>
                            {" "}
                            <a href="#">
                              Roadmap
                            </a>
                            {" "}
                          </nav>
                          {" "}
                        </div>
                        {" "}
                        <div className="flv-col">
                          {" "}
                          <h4 className="flv-col-title">
                            Company
                          </h4>
                          {" "}
                          <nav className="col-links" aria-label="Company links">
                            {" "}
                            <a href="#">
                              About us
                            </a>
                            {" "}
                            <a href="#">
                              Careers
                            </a>
                            {" "}
                            <a href="#">
                              Blog
                            </a>
                            {" "}
                            <a href="#">
                              Press
                            </a>
                            {" "}
                            <a href="#">
                              Contact
                            </a>
                            {" "}
                          </nav>
                          {" "}
                        </div>
                        {" "}
                        <div className="flv-col">
                          {" "}
                          <h4 className="flv-col-title">
                            Support
                          </h4>
                          {" "}
                          <nav className="col-links" aria-label="Support links">
                            {" "}
                            <a href="#">
                              Help center
                            </a>
                            {" "}
                            <a href="#">
                              Documentation
                            </a>
                            {" "}
                            <a href="#">
                              API reference
                            </a>
                            {" "}
                            <a href="#">
                              Status
                            </a>
                            {" "}
                            <a href="#">
                              Community
                            </a>
                            {" "}
                          </nav>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flv-classic-bottom">
                      {" "}
                      <div className="container">
                        {" "}
                        <span>
                          {"© "}
                          <span data-year="">
                            2025
                          </span>
                          {" FooterLab. All rights reserved."}
                        </span>
                        {" "}
                        <div className="legal">
                          {" "}
                          <a href="#">
                            Privacy
                          </a>
                          {" "}
                          <a href="#">
                            Terms
                          </a>
                          {" "}
                          <a href="#">
                            Cookies
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
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" corporate and SaaS sites that need a familiar, information-dense closing block with a clear brand story and easy navigation."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-classic"}
                  </code>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              {" "}
              <article className="footer-demo-card reveal" id="v2">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num teal">
                    02
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Newsletter CTA Footer
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Email capture band + quick links + mini columns
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag dark">
                      Gradient
                    </span>
                    {" "}
                    <span className="fd-tag light">
                      Lead gen
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-newsletter">
                    {" "}
                    <div className="newsletter-band">
                      {" "}
                      <div className="container">
                        {" "}
                        <div>
                          {" "}
                          <h3>
                            Stay in the loop
                          </h3>
                          {" "}
                          <p>
                            Get one thoughtful email a month on footer design, UI craft and front-end tips. No spam, ever.
                          </p>
                          {" "}
                        </div>
                        {" "}
                        <form className="form newsletter-form" data-form="" noValidate={true}>
                          {" "}
                          <label className="visually-hidden" htmlFor="nl-email">
                            Email address
                          </label>
                          {" "}
                          <input className="form-input" type="email" id="nl-email" name="email" placeholder="you@studio.com" required={true} />
                          {" "}
                          <button className="btn btn-teal" type="submit">
                            Subscribe
                          </button>
                          {" "}
                          <p className="form-ok">
                            🎉 You're in! Check your inbox to confirm.
                          </p>
                          {" "}
                          <p className="form-err">
                            Please enter a valid email address.
                          </p>
                          {" "}
                        </form>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="quick">
                      {" "}
                      <div className="container">
                        {" "}
                        <span>
                          Quick links
                        </span>
                        {" "}
                        <a href="#">
                          Pricing
                        </a>
                        {" "}
                        <a href="#">
                          Showcase
                        </a>
                        {" "}
                        <a href="#">
                          Docs
                        </a>
                        {" "}
                        <a href="#">
                          Blog
                        </a>
                        {" "}
                        <a href="#">
                          Careers
                        </a>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="mini-links">
                      {" "}
                      <div className="container">
                        {" "}
                        <div className="mini-col">
                          {" "}
                          <h4>
                            Explore
                          </h4>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Classic footer
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Mega menu
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Card grid
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mini-col">
                          {" "}
                          <h4>
                            Resources
                          </h4>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Style guide
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Component library
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Icon set
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mini-col">
                          {" "}
                          <h4>
                            Company
                          </h4>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                About
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Journal
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Press kit
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mini-col">
                          {" "}
                          <h4>
                            Support
                          </h4>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Help
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Contact
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Status
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="mini-copy">
                      {" "}
                      <div className="container">
                        {" "}
                        <span>
                          {"© "}
                          <span data-year="">
                            2025
                          </span>
                          {" FooterLab — made for makers."}
                        </span>
                        {" "}
                        <span>
                          <a href="#">
                            Privacy
                          </a>
                          {" · "}
                          <a href="#">
                            Terms
                          </a>
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </footer>
                  {" "}
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" marketing sites and blogs where email capture is the #1 goal — a bold gradient band does the heavy lifting."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-newsletter"}
                  </code>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              {" "}
              <article className="footer-demo-card reveal" id="v3">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num">
                    03
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Minimal Centered
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Brand, single nav row, copyright + back-to-top
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag light">
                      Light
                    </span>
                    {" "}
                    <span className="fd-tag">
                      Airy
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-minimal">
                    {" "}
                    <div className="container">
                      {" "}
                      <div className="min-brand">
                        {" "}
                        <img className="min-mark" src={a3} alt="FooterLab mark" loading="lazy" />
                        {" "}
                        <span className="min-name">
                          FooterLab
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <p className="min-tagline">
                        {" Thoughtful footer patterns for focused products. Everything you need, nothing you don't. "}
                      </p>
                      {" "}
                      <nav className="min-nav" aria-label="Footer navigation">
                        {" "}
                        <a href="#">
                          Home
                        </a>
                        {" "}
                        <a href="#">
                          Patterns
                        </a>
                        {" "}
                        <a href="#">
                          About
                        </a>
                        {" "}
                        <a href="#">
                          Journal
                        </a>
                        {" "}
                        <a href="#">
                          Contact
                        </a>
                        {" "}
                      </nav>
                      {" "}
                      <div className="min-divider" role="presentation" />
                      {" "}
                      <p className="min-copy">
                        {"© "}
                        <span data-year="">
                          2025
                        </span>
                        {" FooterLab · "}
                        <a href="#">
                          Privacy
                        </a>
                        {" · "}
                        <a href="#">
                          Terms
                        </a>
                      </p>
                      {" "}
                      <a className="min-top" href="#top">
                        {" "}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 19V5m-7 7 7-7 7 7" />
                        </svg>
                        {" Back to top "}
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </footer>
                  {" "}
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" portfolios, landing pages and minimalist brands — one quiet, centered close that never distracts."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-minimal"}
                  </code>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              {" "}
              <article className="footer-demo-card reveal" id="v4">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num teal">
                    04
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Mega Menu Footer
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Brand + 4 deep columns incl. services, resources, company, legal
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag dark">
                      Dense
                    </span>
                    {" "}
                    <span className="fd-tag">
                      Portals
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-mega">
                    {" "}
                    <div className="container">
                      {" "}
                      <div className="flv-mega-main">
                        {" "}
                        <div className="mega-brand">
                          {" "}
                          <img className="brand-avatar" src={a4} alt="FooterLab mark" loading="lazy" />
                          {" "}
                          <h4>
                            FooterLab
                          </h4>
                          {" "}
                          <p>
                            {" The complete footer pattern library for enterprise teams — scalable, accessible and easy to theme. "}
                          </p>
                          {" "}
                          <div className="mega-contact">
                            {" "}
                            <a href="#">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              {" 123 Design Ave, Suite 8"}
                            </a>
                            {" "}
                            <a href="#">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2Z" />
                              </svg>
                              {" +1 (555) 010-2030"}
                            </a>
                            {" "}
                            <a href="#">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm18 2-10 7L2 6" />
                              </svg>
                              {" hello@footerlab.dev"}
                            </a>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="mega-col">
                          {" "}
                          <h5>
                            Services
                          </h5>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Web design
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                UI systems
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Front-end dev
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Accessibility
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Performance
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mega-col">
                          {" "}
                          <h5>
                            Resources
                          </h5>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Pattern library
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Blog
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Guides
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Changelog
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Templates
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mega-col">
                          {" "}
                          <h5>
                            Company
                          </h5>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                About
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Team
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Careers
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Press
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Contact
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                        <div className="mega-col">
                          {" "}
                          <h5>
                            Legal
                          </h5>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              <a href="#">
                                Privacy policy
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Terms of use
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Cookie policy
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Licenses
                              </a>
                            </li>
                            {" "}
                            <li>
                              <a href="#">
                                Security
                              </a>
                            </li>
                            {" "}
                          </ul>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flv-mega-bottom">
                      {" "}
                      <div className="container">
                        {" "}
                        <div className="pay">
                          {" "}
                          <span>
                            VISA
                          </span>
                          {" "}
                          <span>
                            Mastercard
                          </span>
                          {" "}
                          <span>
                            PayPal
                          </span>
                          {" "}
                          <span>
                            Stripe
                          </span>
                          {" "}
                        </div>
                        {" "}
                        <div className="copy">
                          {"© "}
                          <span data-year="">
                            2025
                          </span>
                          {" FooterLab · Enterprise pattern library"}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </footer>
                  {" "}
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" portals, marketplaces and enterprise sites that need deep navigation, contact details and trust signals in one place."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-mega"}
                  </code>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              {" "}
              <article className="footer-demo-card reveal" id="v5">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num">
                    05
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Social-Focused
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Centered brand + large social icons + mini subscribe
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag dark">
                      Community
                    </span>
                    {" "}
                    <span className="fd-tag">
                      Creators
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-social">
                    {" "}
                    <div className="container">
                      {" "}
                      <div className="soc-brand">
                        {" "}
                        <img className="soc-avatar" src={a5} alt="FooterLab profile" loading="lazy" />
                        {" "}
                        <span className="soc-name">
                          FooterLab
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <p className="soc-tagline">
                        {" Join 24,000+ designers and developers building better footers every week. Follow the journey below. "}
                      </p>
                      {" "}
                      <div className="soc-icons">
                        {" "}
                        <a href="#" aria-label="Twitter">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.6c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.5 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1l-.7-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.7 11.3 11.3 0 0 0 8.1 19c7.1 0 11-6 11-11.2v-.5c.8-.6 1.4-1.3 2-2.1Z" />
                          </svg>
                        </a>
                        {" "}
                        <a href="#" aria-label="Instagram">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2c2.7 0 3 .1 4.1.1 1 0 1.6.2 2 .4.5.2.9.4 1.2.8.4.4.6.7.8 1.2.2.4.4 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2-.2.5-.4.9-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .4-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4a3.4 3.4 0 0 1-1.2-.8 3.4 3.4 0 0 1-.8-1.2c-.2-.4-.4-1-.4-2C3.7 15 3.7 14.7 3.7 12s0-3 .1-4.1c0-1 .2-1.6.4-2 .2-.5.4-.9.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.4 2-.4C9 2 9.3 2 12 2Zm0 4.8A5.2 5.2 0 1 0 17.2 12 5.2 5.2 0 0 0 12 6.8Zm0 8.6A3.4 3.4 0 1 1 15.4 12 3.4 3.4 0 0 1 12 15.4Zm5.4-8.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Z" />
                          </svg>
                        </a>
                        {" "}
                        <a href="#" aria-label="YouTube">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 8s-.2-1.6-.9-2.2c-.8-.9-1.7-.9-2.1-1C16.7 4.5 12 4.5 12 4.5h0s-4.7 0-8 .3c-.4.1-1.3.1-2.1 1C1.2 6.4 1 8 1 8s-.2 1.6-.2 3.2V13c0 1.6.2 3.2.2 3.2s.2 1.6.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 8 .3 8 .3s4.7 0 8-.3c.4-.1 1.3-.1 2.1-1 .7-.6.9-2.2.9-2.2s.2-1.6.2-3.2v-1.8c0-1.6-.2-3.2-.2-3.2ZM9.7 14.9V8.6l6 3.1-6 3.2Z" />
                          </svg>
                        </a>
                        {" "}
                        <a href="#" aria-label="Dribbble">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.3c-.3-.1-3.5-.7-6.7-.3l-.3-.6a15.8 15.8 0 0 1-1.9-3.5A9 9 0 0 1 18.6 6.6ZM12 3.5a8.5 8.5 0 0 1 5.8 2.2 14.8 14.8 0 0 0-4.6 4.3 8.6 8.6 0 0 0-6.6-1A8.5 8.5 0 0 1 12 3.5ZM6.2 6.4a10.8 10.8 0 0 0-2.1 4.1 8.9 8.9 0 0 0 4.4.6 17 17 0 0 1 1.7 3.3c-.1.5-.2 1-.3 1.5A9.5 9.5 0 0 1 5.6 14 8.4 8.4 0 0 1 6.2 6.4Zm1.6 11.9A8.5 8.5 0 0 1 5 12.6a9.8 9.8 0 0 0 4.5 2.4c-.5 1.4-.8 2.6-.7 3.2-.1.6 0 1.1.1 1.6a8.7 8.7 0 0 1-1.1-1.5Zm4.2 2.2a8.4 8.4 0 0 1-2.8-.5c.1-.6.4-1.8.9-3.2a15 15 0 0 0 3.7.4 13.4 13.4 0 0 1-.3 3.2 8.6 8.6 0 0 1-1.5.1Zm3.4-.8a13 13 0 0 0 .3-3.4c2-.4 3.6.3 3.9.4a8.4 8.4 0 0 1-4.2 3Z" />
                          </svg>
                        </a>
                        {" "}
                      </div>
                      {" "}
                      <form className="form soc-mini" data-form="" noValidate={true}>
                        {" "}
                        <span className="soc-mini-label">
                          Subscribe for pattern drops
                        </span>
                        {" "}
                        <div className="soc-mini-row">
                          {" "}
                          <label className="visually-hidden" htmlFor="soc-email">
                            Email address
                          </label>
                          {" "}
                          <input className="form-input" type="email" id="soc-email" name="email" placeholder="you@studio.com" required={true} />
                          {" "}
                          <button className="btn btn-teal" type="submit">
                            Join
                          </button>
                          {" "}
                        </div>
                        {" "}
                        <p className="form-ok">
                          🎉 Welcome aboard — see you in your inbox!
                        </p>
                        {" "}
                        <p className="form-err">
                          Hmm, that email doesn't look right.
                        </p>
                        {" "}
                      </form>
                      {" "}
                      <p className="soc-copy">
                        {"© "}
                        <span data-year="">
                          2025
                        </span>
                        {" FooterLab · "}
                        <a href="#">
                          Privacy
                        </a>
                        {" · "}
                        <a href="#">
                          Terms
                        </a>
                        {" · "}
                        <a href="#">
                          RSS
                        </a>
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </footer>
                  {" "}
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" creators, influencers and community-first products where the social connection matters more than navigation."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-social"}
                  </code>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              {" "}
              <article className="footer-demo-card reveal" id="v6">
                {" "}
                <header className="fd-card-head">
                  {" "}
                  <div className="fd-num teal">
                    06
                  </div>
                  {" "}
                  <div>
                    {" "}
                    <h3 className="fd-title">
                      Card / Image Footer
                    </h3>
                    {" "}
                    <p className="fd-sub">
                      Brand + CTA, image card grid, links + bottom bar
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="fd-tags">
                    {" "}
                    <span className="fd-tag light">
                      Visual
                    </span>
                    {" "}
                    <span className="fd-tag">
                      Agencies
                    </span>
                    {" "}
                  </div>
                  {" "}
                </header>
                {" "}
                <div className="fd-frame">
                  {" "}
                  <footer className="flv-cards">
                    {" "}
                    <div className="container">
                      {" "}
                      <div className="flv-cards-main">
                        {" "}
                        <div className="cards-brand">
                          {" "}
                          <h3>
                            Work worth scrolling for
                          </h3>
                          {" "}
                          <p>
                            {" A gallery of recent patterns and projects. Hover a card to preview — every thumbnail links to a live, copy-paste-ready footer. "}
                          </p>
                          {" "}
                          <div className="cards-cta">
                            {" "}
                            <a href="#patterns" className="btn btn-navy">
                              View all patterns
                            </a>
                            {" "}
                            <a href="404.html" className="btn btn-outline">
                              Get the kit
                            </a>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="cards-grid">
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a6} alt="Footer pattern one" loading="lazy" />
                            <span>
                              Classic
                            </span>
                          </a>
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a7} alt="Footer pattern two" loading="lazy" />
                            <span>
                              Newsletter
                            </span>
                          </a>
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a8} alt="Footer pattern three" loading="lazy" />
                            <span>
                              Minimal
                            </span>
                          </a>
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a9} alt="Footer pattern four" loading="lazy" />
                            <span>
                              Mega
                            </span>
                          </a>
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a10} alt="Footer pattern five" loading="lazy" />
                            <span>
                              Social
                            </span>
                          </a>
                          {" "}
                          <a className="card-thumb" href="#patterns">
                            <img src={a11} alt="Footer pattern six" loading="lazy" />
                            <span>
                              Cards
                            </span>
                          </a>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flv-cards-bottom">
                      {" "}
                      <div className="container">
                        {" "}
                        <span>
                          {"© "}
                          <span data-year="">
                            2025
                          </span>
                          {" FooterLab. Crafted with care."}
                        </span>
                        {" "}
                        <div className="cards-foot-links">
                          {" "}
                          <a href="#">
                            About
                          </a>
                          {" "}
                          <a href="#">
                            Patterns
                          </a>
                          {" "}
                          <a href="#">
                            Contact
                          </a>
                          {" "}
                          <a href="#">
                            Privacy
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
                </div>
                {" "}
                <div className="fd-caption">
                  {" "}
                  <p className="fd-desc">
                    <strong>
                      Best for:
                    </strong>
                    {" design agencies, portfolios and galleries that want the footer to double as a mini showcase of their work."}
                  </p>
                  {" "}
                  <code className="fd-copy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {" .flv-cards"}
                  </code>
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
        <section className="section section-alt" id="about">
          {" "}
          <div className="container">
            {" "}
            <div className="section-head reveal">
              {" "}
              <span className="section-tag">
                Why FooterLab
              </span>
              {" "}
              <h2 className="section-title">
                Copy. Paste. Ship.
              </h2>
              {" "}
              <p>
                {" No build step, no dependencies. Every pattern is vanilla HTML5 + CSS3 with a sprinkle of vanilla JS, and every layout adapts to 980px / 720px breakpoints out of the box. "}
              </p>
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
      <footer className="site-footer">
        {" "}
        <div className="container">
          {" "}
          <div className="about">
            {" "}
            <h4>
              FooterLab
            </h4>
            {" "}
            <p className="about-text">
              {" A small, opinionated gallery of footer design patterns. Built for designers and developers who care about the last 10% of a page. "}
            </p>
            {" "}
            <div className="flv-social">
              {" "}
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.6c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.5 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1l-.7-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.7 11.3 11.3 0 0 0 8.1 19c7.1 0 11-6 11-11.2v-.5c.8-.6 1.4-1.3 2-2.1Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.1 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              {" "}
              <a href="#" aria-label="Dribbble">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.3c-.3-.1-3.5-.7-6.7-.3l-.3-.6a15.8 15.8 0 0 1-1.9-3.5A9 9 0 0 1 18.6 6.6ZM12 3.5a8.5 8.5 0 0 1 5.8 2.2 14.8 14.8 0 0 0-4.6 4.3 8.6 8.6 0 0 0-6.6-1A8.5 8.5 0 0 1 12 3.5ZM6.2 6.4a10.8 10.8 0 0 0-2.1 4.1 8.9 8.9 0 0 0 4.4.6 17 17 0 0 1 1.7 3.3c-.1.5-.2 1-.3 1.5A9.5 9.5 0 0 1 5.6 14 8.4 8.4 0 0 1 6.2 6.4Zm1.6 11.9A8.5 8.5 0 0 1 5 12.6a9.8 9.8 0 0 0 4.5 2.4c-.5 1.4-.8 2.6-.7 3.2-.1.6 0 1.1.1 1.6a8.7 8.7 0 0 1-1.1-1.5Zm4.2 2.2a8.4 8.4 0 0 1-2.8-.5c.1-.6.4-1.8.9-3.2a15 15 0 0 0 3.7.4 13.4 13.4 0 0 1-.3 3.2 8.6 8.6 0 0 1-1.5.1Zm3.4-.8a13 13 0 0 0 .3-3.4c2-.4 3.6.3 3.9.4a8.4 8.4 0 0 1-4.2 3Z" />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <h4>
              Patterns
            </h4>
            {" "}
            <ul>
              {" "}
              <li>
                <a href="#v1">
                  Classic multi-column
                </a>
              </li>
              {" "}
              <li>
                <a href="#v2">
                  Newsletter CTA
                </a>
              </li>
              {" "}
              <li>
                <a href="#v3">
                  Minimal centered
                </a>
              </li>
              {" "}
              <li>
                <a href="#v4">
                  Mega menu
                </a>
              </li>
              {" "}
              <li>
                <a href="#v5">
                  Social-focused
                </a>
              </li>
              {" "}
              <li>
                <a href="#v6">
                  Card / image grid
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
              Stay updated
            </h4>
            {" "}
            <form className="form mini-form" data-form="" noValidate={true}>
              {" "}
              <label className="visually-hidden" htmlFor="site-email">
                Email address
              </label>
              {" "}
              <input className="form-input" type="email" id="site-email" name="email" placeholder="you@studio.com" required={true} />
              {" "}
              <button className="btn btn-teal" type="submit">
                Join
              </button>
              {" "}
              <p className="form-ok">
                Thanks for subscribing! 🎉
              </p>
              {" "}
              <p className="form-err">
                Please enter a valid email.
              </p>
              {" "}
            </form>
            {" "}
            <p style={{ marginTop: "14px", fontSize: ".85rem", color: "rgba(203,213,225,.7)" }}>
              {" One email a month. Unsubscribe anytime. "}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="site-bottom">
          {" "}
          <div className="container">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2025
              </span>
              {" FooterLab · All rights reserved."}
            </span>
            {" "}
            <span>
              {"Framework-free · Responsive · "}
              <a href="index.html">
                Back to gallery
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
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 19V5m-7 7 7-7 7 7" />
        </svg>
        {" "}
      </button>
      {" "}
      {" "}
    </div>
  );
}
