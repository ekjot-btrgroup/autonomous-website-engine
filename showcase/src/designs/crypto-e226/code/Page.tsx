// Converted from the HTML template crypto-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-1.webp";
import a1 from "./assets/hero-2.webp";
import a2 from "./assets/icon-9.webp";
import a3 from "./assets/icon-10.webp";
import a4 from "./assets/icon-2.webp";
import a5 from "./assets/icon-6.webp";
import a6 from "./assets/about.webp";
import a7 from "./assets/icon-7.webp";
import a8 from "./assets/icon-3.webp";
import a9 from "./assets/icon-4.webp";
import a10 from "./assets/icon-5.webp";
import a11 from "./assets/icon-8.webp";
import a12 from "./assets/payment-1.webp";
import a13 from "./assets/payment-2.webp";
import a14 from "./assets/payment-3.webp";
import a15 from "./assets/payment-4.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-crypto-e226">
      {" "}
      {" "}
      <header className="site-header">
        {" "}
        <div className="nav-inner">
          {" "}
          <a className="brand" href="index.html" aria-label="Meridian Exchange — home">
            {" "}
            <svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              {" "}
              <path d="M22 2.5 39 12v20L22 41.5 5 32V12L22 2.5Z" stroke="#3df2b4" strokeWidth="2.6" strokeLinejoin="round" />
              {" "}
              <path d="M22 7v30" stroke="#3df2b4" strokeWidth="2" strokeLinecap="round" />
              {" "}
              <path d="M10 22h24" stroke="#5b93ff" strokeWidth="2" strokeLinecap="round" />
              {" "}
              <circle cx="22" cy="22" r="2.4" fill="#3df2b4" />
              {" "}
            </svg>
            {" "}
            <span className="brand-id">
              {" "}
              <span className="brand-name">
                Meridian
                <b>
                  EX
                </b>
              </span>
              {" "}
              <span className="brand-tag">
                Digital Asset Exchange
              </span>
              {" "}
            </span>
            {" "}
          </a>
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
              <a className="nav-link" href="service.html">
                Service
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="token.html">
                Token
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="roadmap.html">
                Roadmap
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="faq.html">
                FAQ
              </a>
            </li>
            {" "}
            <li>
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            {" "}
            <li>
              <a className="btn btn--primary btn-sm nav-cta" href="contact.html">
                Start Trading
              </a>
            </li>
            {" "}
          </ul>
          {" "}
          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation">
            {" "}
            <span />
            <span />
            <span />
            {" "}
          </button>
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
          <div className="grid-bg" aria-hidden="true" />
          {" "}
          <div className="wrap">
            {" "}
            <div className="hero-grid">
              {" "}
              <div className="hero-copy">
                {" "}
                <span className="pill pill--brand">
                  <span className="live-dot" aria-hidden="true" />
                  {" Markets live · 312 pairs"}
                </span>
                {" "}
                <h1>
                  {"Trade on the "}
                  <span className="grad-text">
                    meridian
                  </span>
                  {" where liquidity never sleeps"}
                </h1>
                {" "}
                <p className="hero-lede">
                  Meridian Exchange pairs deep order books with institutional-grade custody, so every trade clears the way a modern market should — fast, transparent and built for the long run.
                </p>
                {" "}
                <div className="hero-ctas">
                  {" "}
                  <a className="btn btn--primary btn-lg" href="contact.html">
                    {"Create Account "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                  <a className="btn btn--ghost btn-lg" href="token.html">
                    Explore MER Token
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="hero-note" aria-label="Platform highlights">
                  {" "}
                  <span className="hk">
                    4.2M+ traders
                  </span>
                  <span className="sep">
                    ·
                  </span>
                  {" "}
                  <span className="hk">
                    $8.4B daily volume
                  </span>
                  <span className="sep">
                    ·
                  </span>
                  {" "}
                  <span className="hk">
                    99.99% uptime
                  </span>
                  <span className="sep">
                    ·
                  </span>
                  {" "}
                  <span className="hk">
                    SOC 2 custody
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="hero-panel">
                {" "}
                <div className="float-chip reveal">
                  {" "}
                  <span className="fc-label">
                    24h Volume
                  </span>
                  {" "}
                  <span className="fc-num">
                    {"$8.4B "}
                    <span style={{ color: "var(--clr-brand)", fontSize: ".8em" }}>
                      ▲ 12.4%
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="monitor reveal">
                  {" "}
                  <div className="monitor-bar">
                    {" "}
                    <span className="m-dot" aria-hidden="true" />
                    <span className="m-dot" aria-hidden="true" />
                    <span className="m-dot" aria-hidden="true" />
                    {" "}
                    <span className="m-title">
                      meridian / markets / watch
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="hero-bg">
                    {" "}
                    <img src={a0} alt="Meridian Exchange trading dashboard with live market chart" className="active" />
                    {" "}
                    <img src={a1} alt="Crypto asset price charts on the Meridian Exchange terminal" />
                    {" "}
                  </div>
                  {" "}
                  <span className="monitor-tag">
                    <span className="live-dot" aria-hidden="true" />
                    {" Order book synced"}
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
        <div className="ticker" aria-label="Live market ticker">
          {" "}
          <div className="ticker-track">
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                BTC
              </span>
              <span className="tic-pair">
                BTC/USDT
              </span>
              <span className="tic-price">
                $63,420.10
              </span>
              <span className="tic-chg up">
                ▲ +3.21%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                ETH
              </span>
              <span className="tic-pair">
                ETH/USDT
              </span>
              <span className="tic-price">
                $3,412.88
              </span>
              <span className="tic-chg up">
                ▲ +1.84%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                SOL
              </span>
              <span className="tic-pair">
                SOL/USDT
              </span>
              <span className="tic-price">
                $176.42
              </span>
              <span className="tic-chg down">
                ▼ -0.62%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                MER
              </span>
              <span className="tic-pair">
                MER/USDT
              </span>
              <span className="tic-price">
                $0.0841
              </span>
              <span className="tic-chg up">
                ▲ +12.47%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                BNB
              </span>
              <span className="tic-pair">
                BNB/USDT
              </span>
              <span className="tic-price">
                $591.73
              </span>
              <span className="tic-chg up">
                ▲ +0.92%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                XRP
              </span>
              <span className="tic-pair">
                XRP/USDT
              </span>
              <span className="tic-price">
                $0.6221
              </span>
              <span className="tic-chg down">
                ▼ -0.34%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                ADA
              </span>
              <span className="tic-pair">
                ADA/USDT
              </span>
              <span className="tic-price">
                $0.4819
              </span>
              <span className="tic-chg up">
                ▲ +2.08%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                AVAX
              </span>
              <span className="tic-pair">
                AVAX/USDT
              </span>
              <span className="tic-price">
                $34.55
              </span>
              <span className="tic-chg up">
                ▲ +4.31%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                DOT
              </span>
              <span className="tic-pair">
                DOT/USDT
              </span>
              <span className="tic-price">
                $6.984
              </span>
              <span className="tic-chg down">
                ▼ -1.02%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                LINK
              </span>
              <span className="tic-pair">
                LINK/USDT
              </span>
              <span className="tic-price">
                $16.20
              </span>
              <span className="tic-chg up">
                ▲ +2.75%
              </span>
            </span>
            {" "}
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                BTC
              </span>
              <span className="tic-pair">
                BTC/USDT
              </span>
              <span className="tic-price">
                $63,420.10
              </span>
              <span className="tic-chg up">
                ▲ +3.21%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                ETH
              </span>
              <span className="tic-pair">
                ETH/USDT
              </span>
              <span className="tic-price">
                $3,412.88
              </span>
              <span className="tic-chg up">
                ▲ +1.84%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                SOL
              </span>
              <span className="tic-pair">
                SOL/USDT
              </span>
              <span className="tic-price">
                $176.42
              </span>
              <span className="tic-chg down">
                ▼ -0.62%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                MER
              </span>
              <span className="tic-pair">
                MER/USDT
              </span>
              <span className="tic-price">
                $0.0841
              </span>
              <span className="tic-chg up">
                ▲ +12.47%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                BNB
              </span>
              <span className="tic-pair">
                BNB/USDT
              </span>
              <span className="tic-price">
                $591.73
              </span>
              <span className="tic-chg up">
                ▲ +0.92%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                XRP
              </span>
              <span className="tic-pair">
                XRP/USDT
              </span>
              <span className="tic-price">
                $0.6221
              </span>
              <span className="tic-chg down">
                ▼ -0.34%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                ADA
              </span>
              <span className="tic-pair">
                ADA/USDT
              </span>
              <span className="tic-price">
                $0.4819
              </span>
              <span className="tic-chg up">
                ▲ +2.08%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                AVAX
              </span>
              <span className="tic-pair">
                AVAX/USDT
              </span>
              <span className="tic-price">
                $34.55
              </span>
              <span className="tic-chg up">
                ▲ +4.31%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                DOT
              </span>
              <span className="tic-pair">
                DOT/USDT
              </span>
              <span className="tic-price">
                $6.984
              </span>
              <span className="tic-chg down">
                ▼ -1.02%
              </span>
            </span>
            {" "}
            <span className="tic-item">
              <span className="tic-sym">
                LINK
              </span>
              <span className="tic-pair">
                LINK/USDT
              </span>
              <span className="tic-price">
                $16.20
              </span>
              <span className="tic-chg up">
                ▲ +2.75%
              </span>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <section className="section">
          {" "}
          <div className="wrap">
            {" "}
            <div className="stats">
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat-icon">
                  <img src={a2} alt="" />
                </span>
                {" "}
                <div>
                  <div className="stat-num">
                    2.4
                    <em>
                      M
                    </em>
                  </div>
                  <div className="stat-label">
                    Today Transactions
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat-icon">
                  <img src={a3} alt="" />
                </span>
                {" "}
                <div>
                  <div className="stat-num">
                    8.4
                    <em>
                      B
                    </em>
                  </div>
                  <div className="stat-label">
                    Monthly Volume USD
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat-icon">
                  <img src={a4} alt="" />
                </span>
                {" "}
                <div>
                  <div className="stat-num">
                    312
                  </div>
                  <div className="stat-label">
                    Live Markets
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="stat reveal">
                {" "}
                <span className="stat-icon">
                  <img src={a5} alt="" />
                </span>
                {" "}
                <div>
                  <div className="stat-num">
                    99.99
                    <em>
                      %
                    </em>
                  </div>
                  <div className="stat-label">
                    Uptime SLA
                  </div>
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
        <section className="section section--alt">
          {" "}
          <div className="wrap">
            {" "}
            <div className="split">
              {" "}
              <div className="split-art reveal">
                {" "}
                <img className="art" src={a6} alt="Meridian Exchange platform overview — portfolio and market dashboard" />
                {" "}
              </div>
              {" "}
              <div className="reveal">
                {" "}
                <span className="kicker">
                  Why Meridian
                </span>
                {" "}
                <h2 className="sec-title">
                  {"An exchange engineered for the "}
                  <span className="grad-text">
                    long run
                  </span>
                </h2>
                {" "}
                <p className="sec-lede">
                  We built Meridian for traders who think in years, not candles. Matching engines tuned for microseconds, cold-storage custody with on-chain proof, and a fee structure that rewards commitment — not noise.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Sub-millisecond matching across global PoPs
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Multi-signature cold vaults with verifiable reserves
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Transparent fee schedule — 0.05% spot, maker rebates
                  </li>
                  {" "}
                </ul>
                {" "}
                <div className="hero-ctas">
                  {" "}
                  <a className="btn btn--ghost" href="about.html">
                    {"More About Us "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
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
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section">
          {" "}
          <div className="wrap">
            {" "}
            <div className="sec-head sec-head--center reveal">
              {" "}
              <span className="kicker">
                Platform Features
              </span>
              {" "}
              <h2 className="sec-title">
                {"Everything a serious trader needs, "}
                <span className="grad-text">
                  one terminal
                </span>
              </h2>
              {" "}
              <p className="sec-lede">
                Security, speed and control — engineered into every layer of the platform, from the moment you sign up to the second your order fills.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a7} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Instant Onboarding
                </h3>
                {" "}
                <p className="card-text">
                  KYC that completes in minutes, multi-currency on-ramps and a guided setup that gets you from zero to first trade before your coffee goes cold.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a8} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Custody-grade Security
                </h3>
                {" "}
                <p className="card-text">
                  99% of assets sit in geographically distributed cold vaults behind multi-signature quorums, audited quarterly with verifiable reserve attestations.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a9} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Secure Storage
                </h3>
                {" "}
                <p className="card-text">
                  Non-custodial wallet options, hardware-key support and daily-reconciled accounting give you total visibility over every satoshi and wei.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a10} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Transparent Fees
                </h3>
                {" "}
                <p className="card-text">
                  A flat 0.05% spot fee with maker rebates, zero withdrawal surprises and a volume ladder that rewards the traders who keep markets tight.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a5} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Always-On Reliability
                </h3>
                {" "}
                <p className="card-text">
                  99.99% uptime backed by multi-region failover, load-tested matching engines and a status page that reports in plain language.
                </p>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a11} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  24/7 Human Support
                </h3>
                {" "}
                <p className="card-text">
                  A real support desk staffed by trading veterans, reachable in under two minutes around the clock — because your funds deserve more than a bot.
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
        {" "}
        <section className="section section--line">
          {" "}
          <div className="wrap">
            {" "}
            <div className="grid-2" style={{ alignItems: "center" }}>
              {" "}
              <div className="reveal">
                {" "}
                <span className="kicker">
                  Live Operations
                </span>
                {" "}
                <h2 className="sec-title">
                  {"The terminal that runs the "}
                  <span className="grad-text">
                    books
                  </span>
                </h2>
                {" "}
                <p className="sec-lede">
                  Every trade streams through a matching engine built for scale. Watch the order flow, match latency and system health stream in real time — no refresh button, no lag, no smoke.
                </p>
                {" "}
                <ul className="check-list">
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    600k orders per second sustained throughput
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Mean match latency under 12 milliseconds
                  </li>
                  {" "}
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Full REST, WebSocket and FIX connectivity
                  </li>
                  {" "}
                </ul>
                {" "}
              </div>
              {" "}
              <div className="terminal reveal">
                {" "}
                <div className="term-bar">
                  {" "}
                  <span className="term-dot" aria-hidden="true" />
                  <span className="term-dot" aria-hidden="true" />
                  <span className="term-dot" aria-hidden="true" />
                  {" "}
                  <span className="term-title">
                    meridian — engine watch
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="term-body" role="presentation">
                  {" "}
                  <div>
                    <span className="t-cmd">
                      $ meridian engine --status
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-ok">
                      [SYNC]
                    </span>
                    {" "}
                    <span className="t-dim">
                      ▸
                    </span>
                    {" node 8 connected "}
                    <span className="t-dim">
                      · latency 24ms
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-ok">
                      [SYNC]
                    </span>
                    {" "}
                    <span className="t-dim">
                      ▸
                    </span>
                    {" node 12 connected "}
                    <span className="t-dim">
                      · latency 31ms
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-blue">
                      [MATCH]
                    </span>
                    {" "}
                    <span className="t-dim">
                      ▸
                    </span>
                    {" BTC/USDT 63,420.10 × 2.4 BTC "}
                    <span className="t-dim">
                      @ 09:41:12
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-blue">
                      [MATCH]
                    </span>
                    {" "}
                    <span className="t-dim">
                      ▸
                    </span>
                    {" ETH/USDT 3,412.88 × 18.2 ETH "}
                    <span className="t-dim">
                      @ 09:41:13
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-blue">
                      [MATCH]
                    </span>
                    {" "}
                    <span className="t-dim">
                      ▸
                    </span>
                    {" MER/USDT 0.0841 × 1.2M MER "}
                    <span className="t-dim">
                      @ 09:41:14
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-ok">
                      [STATUS]
                    </span>
                    {" all systems operational "}
                    <span className="t-ok">
                      ✓
                    </span>
                  </div>
                  {" "}
                  <div>
                    <span className="t-cmd">
                      {"$ watch --markets 312 "}
                      <span className="cursor" />
                    </span>
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
        <section className="section section--alt">
          {" "}
          <div className="wrap">
            {" "}
            <div className="sec-head sec-head--center reveal">
              {" "}
              <span className="kicker">
                Our Services
              </span>
              {" "}
              <h2 className="sec-title">
                {"Buy, sell, stake and "}
                <span className="grad-text">
                  borrow
                </span>
              </h2>
              {" "}
              <p className="sec-lede">
                A full stack of financial services around a single digital-asset core — so your capital moves seamlessly between trade, yield and utility.
              </p>
              {" "}
            </div>
            {" "}
            <div className="grid-3">
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a7} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Currency Wallet
                </h3>
                {" "}
                <p className="card-text">
                  A multi-asset wallet with daily interest, gasless transfers and one-tap swaps across every pair we list.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a2} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  {"Spot & Margin Trading"}
                </h3>
                {" "}
                <p className="card-text">
                  Pro-level charts, advanced order types and isolated margin up to 10x with liquidation alerts you will actually notice.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a8} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  Institutional Custody
                </h3>
                {" "}
                <p className="card-text">
                  SOC 2-compliant cold storage, segregated accounts and role-based controls built for funds, treasuries and DAOs.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a10} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  {"Staking & Yield"}
                </h3>
                {" "}
                <p className="card-text">
                  Native staking, liquid restaking and structured vaults that turn idle balances into compounding positions.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a4} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  OTC Desk
                </h3>
                {" "}
                <p className="card-text">
                  Discreet block execution for large orders — dedicated counterparty, tight spreads and zero market impact.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
                {" "}
              </article>
              {" "}
              <article className="card reveal">
                {" "}
                <span className="icon-badge">
                  <img src={a11} alt="" />
                </span>
                {" "}
                <h3 className="card-title">
                  {"API & Automation"}
                </h3>
                {" "}
                <p className="card-text">
                  A clean WebSocket API, generous rate limits and webhooks so your bots trade exactly the way you tuned them.
                </p>
                {" "}
                <a className="card-link" href="service.html">
                  {"View service "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
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
          <div className="wrap">
            {" "}
            <div className="token-panel">
              {" "}
              <div className="grid-bg" aria-hidden="true" />
              {" "}
              <div className="token-grid">
                {" "}
                <div className="reveal">
                  {" "}
                  <span className="pill pill--gold">
                    MER Token Sale · Phase 3
                  </span>
                  {" "}
                  <h2 className="sec-title" style={{ marginTop: "1rem" }}>
                    {"Join the listing that could define the "}
                    <span className="grad-text">
                      next cycle
                    </span>
                  </h2>
                  {" "}
                  <p>
                    The MER token powers fee discounts, governance votes and staking rewards across the Meridian ecosystem. Phase 3 allocation is 38% filled — early buyers lock the lowest entry tier.
                  </p>
                  {" "}
                  <div className="countdown" data-countdown="" aria-label="Token sale countdown">
                    {" "}
                    <div className="cd-tile">
                      <span className="cd-num" data-d="">
                        00
                      </span>
                      <span className="cd-label">
                        Days
                      </span>
                    </div>
                    {" "}
                    <div className="cd-tile">
                      <span className="cd-num" data-h="">
                        00
                      </span>
                      <span className="cd-label">
                        Hours
                      </span>
                    </div>
                    {" "}
                    <div className="cd-tile">
                      <span className="cd-num" data-m="">
                        00
                      </span>
                      <span className="cd-label">
                        Minutes
                      </span>
                    </div>
                    {" "}
                    <div className="cd-tile">
                      <span className="cd-num" data-s="">
                        00
                      </span>
                      <span className="cd-label">
                        Seconds
                      </span>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="progress" role="presentation" aria-hidden="true">
                    <div className="progress-fill" style={{ width: "38%" }} />
                  </div>
                  {" "}
                  <div className="progress-meta">
                    <span>
                      {"Raised "}
                      <b>
                        $23.4M
                      </b>
                    </span>
                    <span>
                      {"Target $60M · "}
                      <b>
                        38%
                      </b>
                    </span>
                  </div>
                  {" "}
                  <a className="btn btn--gold" href="token.html">
                    {"Buy MER Token "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="reveal">
                  {" "}
                  <svg className="mer-coin" viewBox="0 0 110 110" fill="none" aria-hidden="true">
                    {" "}
                    <circle cx="55" cy="55" r="52" fill="url(#mint)" stroke="#3df2b4" strokeWidth="2.5" />
                    {" "}
                    <path d="M55 8v94" stroke="#eaf1fd" strokeWidth="2" opacity=".55" />
                    {" "}
                    <path d="M28 55h54" stroke="#5b93ff" strokeWidth="3" />
                    {" "}
                    <circle cx="55" cy="55" r="6" fill="#3df2b4" />
                    {" "}
                    <defs>
                      {" "}
                      <lineargradient id="mint" x1="0" y1="0" x2="110" y2="110">
                        {" "}
                        <stop stopColor="#0d1b33" />
                        <stop offset="1" stopColor="#062117" />
                        {" "}
                      </lineargradient>
                      {" "}
                    </defs>
                    {" "}
                  </svg>
                  {" "}
                  <div className="bar-row">
                    <span className="bar-name">
                      PUBLIC SALE
                    </span>
                    <div className="progress" role="presentation" aria-hidden="true">
                      <div className="progress-fill" style={{ width: "38%" }} />
                    </div>
                    <span className="bar-pct">
                      38%
                    </span>
                  </div>
                  {" "}
                  <div className="bar-row">
                    <span className="bar-name">
                      STAKING
                    </span>
                    <div className="progress" role="presentation" aria-hidden="true">
                      <div className="progress-fill" style={{ width: "30%", background: "linear-gradient(90deg,var(--clr-blue),var(--clr-brand))" }} />
                    </div>
                    <span className="bar-pct">
                      30%
                    </span>
                  </div>
                  {" "}
                  <div className="bar-row">
                    <span className="bar-name">
                      TEAM
                    </span>
                    <div className="progress" role="presentation" aria-hidden="true">
                      <div className="progress-fill" style={{ width: "15%", background: "linear-gradient(90deg,var(--clr-gold),var(--clr-blue))" }} />
                    </div>
                    <span className="bar-pct">
                      15%
                    </span>
                  </div>
                  {" "}
                  <div className="bar-row">
                    <span className="bar-name">
                      RESERVE
                    </span>
                    <div className="progress" role="presentation" aria-hidden="true">
                      <div className="progress-fill" style={{ width: "17%", background: "linear-gradient(90deg,var(--clr-muted),var(--clr-blue))" }} />
                    </div>
                    <span className="bar-pct">
                      17%
                    </span>
                  </div>
                  {" "}
                  <div className="pay-row">
                    {" "}
                    <span className="pay-chip">
                      Accepted:
                    </span>
                    {" "}
                    <img className="pay-icon" src={a12} alt="Payment method 1" />
                    {" "}
                    <img className="pay-icon" src={a13} alt="Payment method 2" />
                    {" "}
                    <img className="pay-icon" src={a14} alt="Payment method 3" />
                    {" "}
                    <img className="pay-icon" src={a15} alt="Payment method 4" />
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
        <section className="section section--alt">
          {" "}
          <div className="wrap">
            {" "}
            <div className="sec-head reveal">
              {" "}
              <span className="kicker">
                Roadmap
              </span>
              {" "}
              <h2 className="sec-title">
                {"Six quarters to a "}
                <span className="grad-text">
                  complete economy
                </span>
              </h2>
              {" "}
              <p className="sec-lede">
                From the core exchange to on-chain settlement and institutional rails — the Meridian roadmap is shipping, phase by phase.
              </p>
              {" "}
            </div>
            {" "}
            <div className="roadmap-strip">
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q1 2026
                </span>
                <h3>
                  Mainnet Exchange
                </h3>
                <p>
                  Spot engine, cold custody and full audit suite live.
                </p>
              </div>
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q2 2026
                </span>
                <h3>
                  MER Token Launch
                </h3>
                <p>
                  Public sale, staking vaults and fee-discount utilities.
                </p>
              </div>
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q3 2026
                </span>
                <h3>
                  {"Margin & Futures"}
                </h3>
                <p>
                  Derivatives suite with isolated margin and insurance fund.
                </p>
              </div>
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q4 2026
                </span>
                <h3>
                  Self-Custody App
                </h3>
                <p>
                  Non-custodial mobile wallet with hardware-key support.
                </p>
              </div>
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q1 2027
                </span>
                <h3>
                  On-Chain Settlement
                </h3>
                <p>
                  Verifiable settlement proofs and instant finality.
                </p>
              </div>
              {" "}
              <div className="rm-item reveal">
                <span className="rm-q">
                  Q2 2027
                </span>
                <h3>
                  Institutional Rails
                </h3>
                <p>
                  FIX gateway, custody API and prime services.
                </p>
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
          <div className="wrap">
            {" "}
            <div className="sec-head sec-head--center reveal">
              {" "}
              <span className="kicker">
                FAQs
              </span>
              {" "}
              <h2 className="sec-title">
                {"Quick answers, "}
                <span className="grad-text">
                  zero fine print
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="faq">
              {" "}
              <details className="reveal" open={true}>
                {" "}
                <summary>
                  How do I fund my Meridian account?
                </summary>
                {" "}
                <div className="faq-body">
                  <p>
                    Use a card, bank transfer or existing crypto to fund instantly. We support USD, EUR, GBP and 40+ crypto assets, with most deposits available for trading within minutes of confirmation.
                  </p>
                </div>
                {" "}
              </details>
              {" "}
              <details className="reveal">
                {" "}
                <summary>
                  Is Meridian Exchange safe to use?
                </summary>
                {" "}
                <div className="faq-body">
                  <p>
                    Yes. 99% of assets sit in geographically distributed cold vaults behind multi-signature quorums, and we publish quarterly reserve attestations. Full platform security is detailed on our security page.
                  </p>
                </div>
                {" "}
              </details>
              {" "}
              <details className="reveal">
                {" "}
                <summary>
                  What are the trading fees?
                </summary>
                {" "}
                <div className="faq-body">
                  <p>
                    Spot trading costs a flat 0.05% per fill, with maker rebates on high-volume tiers. Deposits are free, and withdrawal fees are shown clearly before you confirm any transaction.
                  </p>
                </div>
                {" "}
              </details>
              {" "}
              <details className="reveal">
                {" "}
                <summary>
                  When does the MER token sale end?
                </summary>
                {" "}
                <div className="faq-body">
                  <p>
                    The current Phase 3 allocation closes when the countdown above hits zero or the cap is reached, whichever comes first. See the token page for the full sale schedule and vesting terms.
                  </p>
                </div>
                {" "}
              </details>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="section section--alt" style={{ paddingTop: "0" }}>
          {" "}
          <div className="wrap">
            {" "}
            <div className="cta-banner reveal">
              {" "}
              <h2>
                Ready to trade the line that never sleeps?
              </h2>
              {" "}
              <p>
                Open an account in minutes, or talk to the team about institutional onboarding, OTC liquidity and custody.
              </p>
              {" "}
              <div className="cta-actions">
                {" "}
                <a className="btn btn--primary btn-lg" href="contact.html">
                  Start Trading
                </a>
                {" "}
                <a className="btn btn--ghost btn-lg" href="service.html">
                  Explore Services
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
      <footer className="site-footer">
        {" "}
        <div className="wrap">
          {" "}
          <div className="foot-grid">
            {" "}
            <div className="foot-brand">
              {" "}
              <a className="brand" href="index.html" aria-label="Meridian Exchange — home">
                {" "}
                <svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  {" "}
                  <path d="M22 2.5 39 12v20L22 41.5 5 32V12L22 2.5Z" stroke="#3df2b4" strokeWidth="2.6" strokeLinejoin="round" />
                  {" "}
                  <path d="M22 7v30" stroke="#3df2b4" strokeWidth="2" strokeLinecap="round" />
                  {" "}
                  <path d="M10 22h24" stroke="#5b93ff" strokeWidth="2" strokeLinecap="round" />
                  {" "}
                  <circle cx="22" cy="22" r="2.4" fill="#3df2b4" />
                  {" "}
                </svg>
                {" "}
                <span className="brand-id">
                  {" "}
                  <span className="brand-name">
                    Meridian
                    <b>
                      EX
                    </b>
                  </span>
                  {" "}
                  <span className="brand-tag">
                    Digital Asset Exchange
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
              <p>
                Meridian Exchange pairs deep order books with institutional-grade custody, so every trade clears the way a modern market should.
              </p>
              {" "}
              <div className="socials">
                {" "}
                <a className="social-btn" href="#" aria-label="Follow Meridian on X">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.1 3.7H5.3L17.8 20Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="social-btn" href="#" aria-label="Meridian on GitHub">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38s1.95.13 2.86.38c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.15c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="social-btn" href="#" aria-label="Join Meridian on Telegram">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.6 3.4 2.9 11.2c-.8.3-.7 1.5.1 1.7l4.5 1.4 1.7 5.2c.2.8 1.3.9 1.8.3l2.3-2.5 4.7 3.5c.6.5 1.5.1 1.7-.6l2.9-15.6c.2-1-.8-1.8-1.7-1.4Z" />
                  </svg>
                  {" "}
                </a>
                {" "}
                <a className="social-btn" href="#" aria-label="Email Meridian Exchange">
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="foot-col">
              {" "}
              <h3 className="foot-title">
                Platform
              </h3>
              {" "}
              <ul className="foot-links">
                {" "}
                <li>
                  <a className="foot-link" href="index.html">
                    Home
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="service.html">
                    Services
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="token.html">
                    MER Token
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="roadmap.html">
                    Roadmap
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="foot-col">
              {" "}
              <h3 className="foot-title">
                Company
              </h3>
              {" "}
              <ul className="foot-links">
                {" "}
                <li>
                  <a className="foot-link" href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="faq.html">
                    FAQs
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="contact.html">
                    Contact
                  </a>
                </li>
                {" "}
                <li>
                  <a className="foot-link" href="404.html">
                    404 Page
                  </a>
                </li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="foot-col">
              {" "}
              <h3 className="foot-title">
                Newsletter
              </h3>
              {" "}
              <p style={{ color: "var(--clr-muted)", fontSize: ".9rem", marginBottom: ".4rem" }}>
                Market signals, listing drops and product updates — no noise.
              </p>
              {" "}
              <form className="foot-news" noValidate={true}>
                {" "}
                <input className="input" type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
                {" "}
                <button className="btn btn--primary btn-sm" type="submit">
                  Join
                </button>
                {" "}
              </form>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="foot-bottom">
            {" "}
            <p>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" Meridian Exchange. All rights reserved."}
            </p>
            {" "}
            <p className="legal">
              <a href="#">
                Privacy
              </a>
              <a href="#">
                Terms
              </a>
              <a href="#">
                Risk Disclosure
              </a>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      <a className="back-to-top" href="#" aria-label="Back to top">
        {" "}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
        {" "}
      </a>
      {" "}
      {" "}
      {" "}
    </div>
  );
}
