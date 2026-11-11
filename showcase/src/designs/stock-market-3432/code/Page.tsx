// Converted from the HTML template stock-market-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/carousel-1.webp";
import a1 from "./assets/carousel-2.webp";
import a2 from "./assets/about-1.webp";
import a3 from "./assets/about-2.webp";
import a4 from "./assets/about-5.webp";
import a5 from "./assets/service-1.webp";
import a6 from "./assets/service-2.webp";
import a7 from "./assets/service-3.webp";
import a8 from "./assets/service-4.webp";
import a9 from "./assets/service-5.webp";
import a10 from "./assets/service-6.webp";
import a11 from "./assets/header-1.webp";
import a12 from "./assets/team-1.webp";
import a13 from "./assets/team-2.webp";
import a14 from "./assets/team-3.webp";
import a15 from "./assets/team-4.webp";
import a16 from "./assets/testimonial-1.webp";
import a17 from "./assets/testimonial-2.webp";
import a18 from "./assets/testimonial-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500;1,9..144,600&family=Work+Sans:wght@300;400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-stock-market-3432">
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav className="nav">
            {" "}
            <a href="index.html" className="nav-logo">
              <span className="logo-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              TRADEPULSE
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Home
              </a>
              {" "}
              <a href="about.html" className="nav-link">
                About
              </a>
              {" "}
              <a href="services.html" className="nav-link">
                Services
              </a>
              {" "}
              <a href="blog.html" className="nav-link">
                Blog
              </a>
              {" "}
              <a href="contact.html" className="nav-link">
                Contact
              </a>
              {" "}
              <a href="contact.html" className="nav-link nav-cta">
                Open Account
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
      <section className="hero">
        {" "}
        <div className="hero-bg">
          {" "}
          <img className="active" src={a0} alt="Global financial market trading screens showing live charts" />
          {" "}
          <img src={a1} alt="Modern trading desk with real-time market data displays" />
          {" "}
        </div>
        {" "}
        <div className="hero-overlay" />
        {" "}
        <div className="container hero-content">
          {" "}
          <span className="hero-badge">
            Live Market Intelligence
          </span>
          {" "}
          <h1 className="hero-title reveal">
            {"The market speaks in signals. "}
            <em>
              We translate.
            </em>
          </h1>
          {" "}
          <p className="hero-sub reveal d1">
            TRADEPULSE turns global market data into clear, actionable intelligence — real-time alerts, AI-driven signals, and institutional-grade analytics in one calm, focused command center.
          </p>
          {" "}
          <div className="hero-ctas reveal d2">
            {" "}
            <a href="contact.html" className="btn btn--gold btn--lg">
              Open an Account
            </a>
            {" "}
            <a href="services.html" className="btn btn--outline btn--lg">
              Explore Services
            </a>
            {" "}
          </div>
          {" "}
          <div className="hero-metrics reveal d3">
            {" "}
            <div className="hero-metric">
              <div className="num">
                3.2M+
              </div>
              <span className="lbl">
                Active Investors
              </span>
            </div>
            {" "}
            <div className="hero-metric">
              <div className="num">
                120+
              </div>
              <span className="lbl">
                Markets Covered
              </span>
            </div>
            {" "}
            <div className="hero-metric">
              <div className="num">
                99.99%
              </div>
              <span className="lbl">
                Platform Uptime
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className="ticker" aria-label="Live market index quotes">
        {" "}
        <div className="ticker-track">
          {" "}
          <div className="ticker-group">
            {" "}
            <div className="tick">
              <span className="tick-sym">
                {"S&P 500"}
              </span>
              <span className="tick-val">
                5,862.14
              </span>
              <span className="tick-delta tick-up">
                ▲ 0.84%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                NASDAQ 100
              </span>
              <span className="tick-val">
                20,114.03
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.32%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                DOW JONES
              </span>
              <span className="tick-val">
                44,218.07
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.12%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                EUR/USD
              </span>
              <span className="tick-val">
                1.0842
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.18%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                GOLD
              </span>
              <span className="tick-val">
                2,714.80
              </span>
              <span className="tick-delta tick-up">
                ▲ 0.51%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                CRUDE OIL
              </span>
              <span className="tick-val">
                69.84
              </span>
              <span className="tick-delta tick-down">
                ▼ 1.06%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                BTC/USD
              </span>
              <span className="tick-val">
                61,240.50
              </span>
              <span className="tick-delta tick-up">
                ▲ 2.45%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                ETH/USD
              </span>
              <span className="tick-val">
                2,418.16
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.72%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                AAPL
              </span>
              <span className="tick-val">
                232.91
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.37%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                TSLA
              </span>
              <span className="tick-val">
                244.60
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.94%
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="ticker-group">
            {" "}
            <div className="tick">
              <span className="tick-sym">
                {"S&P 500"}
              </span>
              <span className="tick-val">
                5,862.14
              </span>
              <span className="tick-delta tick-up">
                ▲ 0.84%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                NASDAQ 100
              </span>
              <span className="tick-val">
                20,114.03
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.32%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                DOW JONES
              </span>
              <span className="tick-val">
                44,218.07
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.12%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                EUR/USD
              </span>
              <span className="tick-val">
                1.0842
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.18%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                GOLD
              </span>
              <span className="tick-val">
                2,714.80
              </span>
              <span className="tick-delta tick-up">
                ▲ 0.51%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                CRUDE OIL
              </span>
              <span className="tick-val">
                69.84
              </span>
              <span className="tick-delta tick-down">
                ▼ 1.06%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                BTC/USD
              </span>
              <span className="tick-val">
                61,240.50
              </span>
              <span className="tick-delta tick-up">
                ▲ 2.45%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                ETH/USD
              </span>
              <span className="tick-val">
                2,418.16
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.72%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                AAPL
              </span>
              <span className="tick-val">
                232.91
              </span>
              <span className="tick-delta tick-up">
                ▲ 1.37%
              </span>
            </div>
            {" "}
            <div className="tick">
              <span className="tick-sym">
                TSLA
              </span>
              <span className="tick-val">
                244.60
              </span>
              <span className="tick-delta tick-down">
                ▼ 0.94%
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              01 · Market Pulse
            </span>
            {" "}
            <h2 className="section-title">
              {"The numbers that "}
              <em>
                move first.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Every session, TRADEPULSE processes billions of data points so you see the market the way institutions do.
            </p>
            {" "}
          </div>
          {" "}
          <div className="stats-grid reveal d1">
            {" "}
            <div className="stat">
              <div className="stat-num">
                $14.8B
                <span className="suffix">
                  +
                </span>
              </div>
              <div className="stat-lbl">
                Assets Analyzed Daily
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                3.2M
                <span className="suffix">
                  +
                </span>
              </div>
              <div className="stat-lbl">
                Active Investors
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                120
                <span className="suffix">
                  +
                </span>
              </div>
              <div className="stat-lbl">
                Markets Covered
              </div>
            </div>
            {" "}
            <div className="stat">
              <div className="stat-num">
                40
                <span className="suffix">
                  ms
                </span>
              </div>
              <div className="stat-lbl">
                Signal Latency
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="split">
            {" "}
            <div className="split-media reveal">
              {" "}
              <div className="media-stack">
                {" "}
                <img className="main" src={a2} alt="TRADEPULSE analysts reviewing market charts in the trading office" loading="lazy" />
                {" "}
                <img className="overlay" src={a3} alt="Analyst monitoring live stock prices on a second screen" loading="lazy" />
                {" "}
                <div className="float-card">
                  {" "}
                  <div className="fc-num">
                    78%
                  </div>
                  {" "}
                  <div className="fc-lbl">
                    Signal hit rate · trailing 12 months
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="split-body reveal d1">
              {" "}
              <span className="section-tag">
                02 · Why TRADEPULSE
              </span>
              {" "}
              <h2 className="section-title">
                {"Intelligence that works "}
                <em>
                  while markets sleep.
                </em>
              </h2>
              {" "}
              <p>
                {"TRADEPULSE was built by traders who were tired of noise. We bundle exchange-grade data, machine-learning signals, and a round-the-clock analyst desk into one disciplined platform — so your decisions rest on "}
                <strong>
                  evidence, not headlines.
                </strong>
              </p>
              {" "}
              <ul className="check-list">
                {" "}
                <li>
                  Real-time data from 120+ exchanges and dark pools
                </li>
                {" "}
                <li>
                  AI signal engine trained on 20 years of market history
                </li>
                {" "}
                <li>
                  Human analysts on the desk 24/5 for live commentary
                </li>
                {" "}
                <li>
                  Institutional-grade risk and portfolio analytics
                </li>
                {" "}
              </ul>
              {" "}
              <a href="about.html" className="btn btn--navy">
                Our Story
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
      <section className="chart-band">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              03 · The Terminal
            </span>
            {" "}
            <h2 className="section-title">
              {"Watch the tape. "}
              <em>
                Trade the truth.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Full-featured charting with 40ms exchange feeds, 60+ technical indicators, and one-click execution — from your browser, desktop, or phone.
            </p>
            {" "}
          </div>
          {" "}
          <div className="term reveal d1">
            {" "}
            <div className="term-bar">
              {" "}
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              {" "}
              <span className="term-title">
                Tradepulse Terminal
              </span>
              {" "}
            </div>
            {" "}
            <div className="term-tabs">
              {" "}
              <span className="on">
                NASDAQ:COMP
              </span>
              <span>
                BTC-USD
              </span>
              <span>
                XAU-USD
              </span>
              <span>
                ES=F
              </span>
              <span>
                NQ=F
              </span>
              {" "}
            </div>
            {" "}
            <div className="term-body">
              {" "}
              <img src={a4} alt="TRADEPULSE charting terminal showing an ascending market chart" loading="lazy" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="term-stats reveal d2">
            {" "}
            <div className="term-stat">
              <div className="ts-num">
                40ms
              </div>
              <div className="ts-lbl">
                Average Feed Latency
              </div>
            </div>
            {" "}
            <div className="term-stat">
              <div className="ts-num">
                60+
              </div>
              <div className="ts-lbl">
                Built-in Indicators
              </div>
            </div>
            {" "}
            <div className="term-stat">
              <div className="ts-num">
                99.99%
              </div>
              <div className="ts-lbl">
                Platform Uptime
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              {"04 · Products & Pricing"}
            </span>
            {" "}
            <h2 className="section-title">
              {"Choose your "}
              <em>
                edge.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Six products, one platform. Start lean, scale to a full institutional desk.
            </p>
            {" "}
          </div>
          {" "}
          <div className="cards-grid">
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-media">
                <img src={a5} alt="Real-time market alerts delivered to a mobile phone" loading="lazy" />
                <span className="card-tag card-tag--gold">
                  Popular
                </span>
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  01
                </span>
                {" "}
                <h3>
                  Real-Time Alerts
                </h3>
                {" "}
                <p>
                  Price, volume, and volatility alerts fired the instant they matter — on web, mobile, or your inbox.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $19
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal d1">
              {" "}
              <div className="service-media">
                <img src={a6} alt="Financial analyst writing a daily market briefing" loading="lazy" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  02
                </span>
                {" "}
                <h3>
                  Market Pro Insights
                </h3>
                {" "}
                <p>
                  Daily analyst briefings, earnings previews, and live commentary from the trading-room floor.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $29
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal d2">
              {" "}
              <div className="service-media">
                <img src={a7} alt="Portfolio performance dashboard with analytics" loading="lazy" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  03
                </span>
                {" "}
                <h3>
                  Portfolio Analytics
                </h3>
                {" "}
                <p>
                  Track performance, exposure, and drawdown across every position with institutional-grade reporting.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $39
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal">
              {" "}
              <div className="service-media">
                <img src={a8} alt="AI signal engine data visualization" loading="lazy" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  04
                </span>
                {" "}
                <h3>
                  AI Signal Engine
                </h3>
                {" "}
                <p>
                  Machine-learned signals built on two decades of market history, re-scored every single day.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $59
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal d1">
              {" "}
              <div className="service-media">
                <img src={a9} alt="Options chain and derivatives grid on screen" loading="lazy" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  05
                </span>
                {" "}
                <h3>
                  {"Options & Derivatives"}
                </h3>
                {" "}
                <p>
                  Greeks, spreads, and volatility surfaces made legible — no quant background required.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $49
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="service-card reveal d2">
              {" "}
              <div className="service-media">
                <img src={a10} alt="Institutional data center infrastructure" loading="lazy" />
              </div>
              {" "}
              <div className="service-body">
                {" "}
                <span className="service-idx">
                  06
                </span>
                {" "}
                <h3>
                  Institutional Feed
                </h3>
                {" "}
                <p>
                  Exchange-grade data with 40ms latency, tick history, and API access for serious desks.
                </p>
                {" "}
                <div className="service-foot">
                  <span className="price">
                    $99
                    <span>
                      /mo
                    </span>
                  </span>
                  <a href="services.html" className="btn btn--navy btn--sm">
                    Details
                  </a>
                </div>
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              05 · The Command Center
            </span>
            {" "}
            <h2 className="section-title">
              {"Your entire market, "}
              <em>
                on one screen.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              A command center designed for focus — everything you need to act, nothing you don't.
            </p>
            {" "}
          </div>
          {" "}
          <div className="browser reveal d1">
            {" "}
            <div className="browser-bar">
              {" "}
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              {" "}
              <span className="browser-url">
                app.tradepulse.com/command
              </span>
              {" "}
            </div>
            {" "}
            <img src={a11} alt="TRADEPULSE command center dashboard with watchlists and live charts" loading="lazy" />
            {" "}
          </div>
          {" "}
          <div className="feature-grid">
            {" "}
            <div className="feature reveal">
              {" "}
              <span className="feature-icon" aria-hidden="true">
                📊
              </span>
              {" "}
              <div>
                <h3>
                  Custom Watchlists
                </h3>
                <p>
                  Group the tickers that matter into focused boards with live quotes.
                </p>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature reveal d1">
              {" "}
              <span className="feature-icon" aria-hidden="true">
                ⚡
              </span>
              {" "}
              <div>
                <h3>
                  One-Click Execution
                </h3>
                <p>
                  Route orders to your broker from any chart in under a second.
                </p>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature reveal d2">
              {" "}
              <span className="feature-icon" aria-hidden="true">
                🧪
              </span>
              {" "}
              <div>
                <h3>
                  Paper Trading
                </h3>
                <p>
                  Test strategies against live data with zero capital at risk.
                </p>
              </div>
              {" "}
            </div>
            {" "}
            <div className="feature reveal d3">
              {" "}
              <span className="feature-icon" aria-hidden="true">
                🌡️
              </span>
              {" "}
              <div>
                <h3>
                  Risk Heatmaps
                </h3>
                <p>
                  See sector and portfolio exposure at a glance, in real time.
                </p>
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
      <section className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              06 · The Desk
            </span>
            {" "}
            <h2 className="section-title">
              {"The people behind "}
              <em>
                the pulse.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              Analysts and researchers who have covered markets through every cycle since 2016.
            </p>
            {" "}
          </div>
          {" "}
          <div className="team-grid">
            {" "}
            <div className="team-card reveal">
              {" "}
              <img src={a12} alt="Portrait of Amara Okafor, Chief Market Strategist" loading="lazy" />
              {" "}
              <h3>
                Amara Okafor
              </h3>
              {" "}
              <div className="team-role">
                Chief Market Strategist
              </div>
              {" "}
              <p className="team-bio">
                22 years across sell-side research and global macro.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal d1">
              {" "}
              <img src={a13} alt="Portrait of Daniel Reyes, Head of Quant Research" loading="lazy" />
              {" "}
              <h3>
                Daniel Reyes
              </h3>
              {" "}
              <div className="team-role">
                Head of Quant Research
              </div>
              {" "}
              <p className="team-bio">
                Former quant desk lead; builds our signal engine.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal d2">
              {" "}
              <img src={a14} alt="Portrait of Sofia Lindqvist, Senior Equity Analyst" loading="lazy" />
              {" "}
              <h3>
                Sofia Lindqvist
              </h3>
              {" "}
              <div className="team-role">
                Senior Equity Analyst
              </div>
              {" "}
              <p className="team-bio">
                Covered tech and industrials for a decade.
              </p>
              {" "}
            </div>
            {" "}
            <div className="team-card reveal d3">
              {" "}
              <img src={a15} alt="Portrait of James Whitfield, Director of Risk" loading="lazy" />
              {" "}
              <h3>
                James Whitfield
              </h3>
              {" "}
              <div className="team-role">
                Director of Risk
              </div>
              {" "}
              <p className="team-bio">
                Keeps conviction disciplined and drawdowns small.
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
      <section className="section section--white">
        {" "}
        <div className="container">
          {" "}
          <div className="section-head section-head--center reveal">
            {" "}
            <span className="section-tag">
              07 · From the Floor
            </span>
            {" "}
            <h2 className="section-title">
              {"Traders who "}
              <em>
                trust the tape.
              </em>
            </h2>
            {" "}
            <p className="section-sub">
              3.2 million investors use TRADEPULSE to cut noise and raise conviction.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testi-grid">
            {" "}
            <div className="testi-card reveal">
              {" "}
              <div className="testi-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-quote">
                TRADEPULSE cut my screen time in half and doubled my conviction. The signal engine is scary good.
              </p>
              {" "}
              <div className="testi-person">
                {" "}
                <img src={a16} alt="Portrait of Priya Sharma" loading="lazy" />
                {" "}
                <div>
                  <div className="testi-name">
                    Priya Sharma
                  </div>
                  <div className="testi-role">
                    Day Trader
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testi-card reveal d1">
              {" "}
              <div className="testi-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-quote">
                The AI flagged the pullback three sessions before it hit. That single call paid for the year.
              </p>
              {" "}
              <div className="testi-person">
                {" "}
                <img src={a17} alt="Portrait of Marcus Chen" loading="lazy" />
                {" "}
                <div>
                  <div className="testi-name">
                    Marcus Chen
                  </div>
                  <div className="testi-role">
                    Portfolio Manager
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testi-card reveal d2">
              {" "}
              <div className="testi-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {" "}
              <p className="testi-quote">
                Institutional tools without the institutional minimums. Our desk runs on it daily.
              </p>
              {" "}
              <div className="testi-person">
                {" "}
                <img src={a18} alt="Portrait of Elena Petrova" loading="lazy" />
                {" "}
                <div>
                  <div className="testi-name">
                    Elena Petrova
                  </div>
                  <div className="testi-role">
                    Swing Trader
                  </div>
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
      <section className="cta-band">
        {" "}
        <div className="container reveal">
          {" "}
          <h2 className="cta-title">
            {"Ready to trade with "}
            <em>
              conviction?
            </em>
          </h2>
          {" "}
          <p className="cta-desc">
            Open your account in minutes and get your first 30 days of Pro free — no credit card required.
          </p>
          {" "}
          <div className="cta-actions">
            {" "}
            <a href="contact.html" className="btn btn--gold btn--lg">
              Open an Account
            </a>
            {" "}
            <a href="contact.html" className="btn btn--outline btn--lg">
              Talk to the Desk
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div>
              {" "}
              <div className="footer-brand">
                <span className="logo-mark" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                TRADEPULSE
              </div>
              {" "}
              <p className="footer-brand-desc">
                A stock-market intelligence platform that fuses real-time data, AI signals, and human analysts into one disciplined command center.
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
                <a href="index.html" className="footer-link">
                  Home
                </a>
                {" "}
                <a href="about.html" className="footer-link">
                  About
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Services
                </a>
                {" "}
                <a href="blog.html" className="footer-link">
                  Blog
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Platform
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="services.html" className="footer-link">
                  Real-Time Alerts
                </a>
                {" "}
                <a href="services.html" className="footer-link">
                  Pricing Plans
                </a>
                {" "}
                <a href="blog.html" className="footer-link">
                  Market Briefings
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
                Get Started
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="contact.html" className="footer-link">
                  Open an Account
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Talk to the Desk
                </a>
                {" "}
                <a href="about.html" className="footer-link">
                  Our Story
                </a>
                {" "}
                <a href="contact.html" className="footer-link">
                  Support
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
              {" TRADEPULSE. All rights reserved."}
            </span>
            {" "}
            <span className="tagline">
              Markets move. Trade with conviction.
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
