// Converted from the HTML template ai-studio-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-img.webp";
import a1 from "./assets/about-img.webp";
import a2 from "./assets/project-1.webp";
import a3 from "./assets/project-2.webp";
import a4 from "./assets/project-3.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-ai-studio-a767">
      {" "}
      {" "}
      <div className="statusbar">
        {" "}
        <div className="container">
          {" "}
          <span className="live">
            <span className="dot" />
            ALL SYSTEMS NOMINAL
          </span>
          {" "}
          <span>
            Model training active — 3 pipelines running
          </span>
          {" "}
          <span className="spacer" />
          {" "}
          <a href="contact.html">
            Start a project →
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
              ◆
            </span>
            KOR
            <span>
              V
            </span>
            A
          </a>
          {" "}
          <nav id="mainnav">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="service.html">
              Services
            </a>
            {" "}
            <a href="project.html">
              Work
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="contact.html">
              Contact
            </a>
            {" "}
          </nav>
          {" "}
          <a href="contact.html" className="cta">
            Start Project
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
      <section className="hero-terminal">
        {" "}
        <div className="container">
          {" "}
          <div>
            {" "}
            <span className="eyebrow">
              AI Studio · Est. 2018
            </span>
            {" "}
            <h1>
              {"Precision-built "}
              <span>
                intelligence
              </span>
              {" for enterprise"}
            </h1>
            {" "}
            <p className="lead">
              We design, train, and deploy custom AI systems — from prototype to production. Machine learning, computer vision, NLP, and intelligent automation that actually works.
            </p>
            {" "}
            <div className="hero-actions">
              {" "}
              <a href="contact.html" className="btn-primary">
                Start a Project →
              </a>
              {" "}
              <a href="project.html" className="btn-ghost">
                View Our Work
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-tags">
              {" "}
              <span className="tag tag--amber">
                Machine Learning
              </span>
              {" "}
              <span className="tag">
                Computer Vision
              </span>
              {" "}
              <span className="tag">
                NLP
              </span>
              {" "}
              <span className="tag">
                MLOps
              </span>
              {" "}
              <span className="tag">
                Edge AI
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div>
            {" "}
            <div className="prompt-box reveal">
              {" "}
              <div className="line">
                {"$ korva init --project "}
                <span style={{ color: "var(--amber)" }}>
                  "your_ai_system"
                </span>
              </div>
              {" "}
              <div className="line" style={{ color: "var(--pass)" }}>
                ✓ Requirements analyzed
              </div>
              {" "}
              <div className="line" style={{ color: "var(--pass)" }}>
                ✓ Architecture designed
              </div>
              {" "}
              <div className="line" style={{ color: "var(--pass)" }}>
                ✓ Pipeline configured
              </div>
              {" "}
              <div className="line" style={{ color: "var(--amber)" }}>
                {"⟳ Training in progress... "}
                <span className="cursor" />
              </div>
              {" "}
            </div>
            {" "}
            <div className="hero-img reveal d1" style={{ marginTop: "1.2rem" }}>
              <img src={a0} alt="KORVA AI system architecture" />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <div className="eval-ticker">
        {" "}
        <div className="ticker-track">
          {" "}
          <span className="pass">
            ✓ vision-model-v3.2: accuracy 97.4%
          </span>
          {" "}
          <span className="pass">
            ✓ nlp-pipeline-v2.1: F1 0.94
          </span>
          {" "}
          <span className="amber">
            ⟳ fraud-detect-v4.0: training epoch 847/1000
          </span>
          {" "}
          <span className="pass">
            ✓ recommendation-engine: NDCG@10 0.89
          </span>
          {" "}
          <span className="pass">
            ✓ ocr-system-v2.0: CER 1.2%
          </span>
          {" "}
          <span className="fail">
            ✗ legacy-model-v1.0: deprecated
          </span>
          {" "}
          <span className="pass">
            ✓ anomaly-detector: precision 96.1%
          </span>
          {" "}
          <span className="amber">
            ⟳ speech-to-text-v3: fine-tuning
          </span>
          {" "}
          <span className="pass">
            ✓ vision-model-v3.2: accuracy 97.4%
          </span>
          {" "}
          <span className="pass">
            ✓ nlp-pipeline-v2.1: F1 0.94
          </span>
          {" "}
          <span className="amber">
            ⟳ fraud-detect-v4.0: training epoch 847/1000
          </span>
          {" "}
          <span className="pass">
            ✓ recommendation-engine: NDCG@10 0.89
          </span>
          {" "}
          <span className="pass">
            ✓ ocr-system-v2.0: CER 1.2%
          </span>
          {" "}
          <span className="fail">
            ✗ legacy-model-v1.0: deprecated
          </span>
          {" "}
          <span className="pass">
            ✓ anomaly-detector: precision 96.1%
          </span>
          {" "}
          <span className="amber">
            ⟳ speech-to-text-v3: fine-tuning
          </span>
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
            <span className="per" data-count="127">
              0
            </span>
            <span className="label">
              Models deployed
            </span>
          </div>
          {" "}
          <div className="cell reveal d1">
            <span className="per" data-count="99">
              0
            </span>
            <span className="label">
              % uptime SLA
            </span>
          </div>
          {" "}
          <div className="cell reveal d2">
            <span className="per" data-count="34">
              0
            </span>
            <span className="label">
              Enterprise clients
            </span>
          </div>
          {" "}
          <div className="cell reveal d3">
            <span className="per" data-count="8">
              0
            </span>
            <span className="label">
              Avg weeks to production
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section" id="services">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Capabilities
          </span>
          {" "}
          <h2>
            What we build
          </h2>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                🧠
              </div>
              {" "}
              <h3>
                Custom ML Models
              </h3>
              {" "}
              <p>
                From data preparation to deployment — we design and train models purpose-built for your problem. No off-the-shelf shortcuts.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                👁
              </div>
              {" "}
              <h3>
                Computer Vision
              </h3>
              {" "}
              <p>
                Object detection, image classification, OCR, and video analysis. Deployed on cloud, edge, and embedded systems.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                💬
              </div>
              {" "}
              <h3>
                {"NLP & Language"}
              </h3>
              {" "}
              <p>
                Text classification, entity extraction, summarization, and conversational AI. Fine-tuned on your domain vocabulary.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="icon">
                ⚡
              </div>
              {" "}
              <h3>
                {"MLOps & Infrastructure"}
              </h3>
              {" "}
              <p>
                Model versioning, CI/CD pipelines, monitoring, and auto-scaling. Production-grade infrastructure from day one.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d1">
              {" "}
              <div className="icon">
                📊
              </div>
              {" "}
              <h3>
                Data Engineering
              </h3>
              {" "}
              <p>
                Pipeline design, feature stores, data quality frameworks, and real-time streaming. Your data, structured and reliable.
              </p>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal d2">
              {" "}
              <div className="icon">
                📱
              </div>
              {" "}
              <h3>
                Edge AI
              </h3>
              {" "}
              <p>
                Model optimization for on-device inference — quantization, pruning, and ONNX conversion. Intelligence without latency.
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
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Architecture
          </span>
          {" "}
          <h2>
            How we work
          </h2>
          {" "}
          <div className="arch-grid">
            {" "}
            <div className="arch-card span-4 reveal">
              {" "}
              <span className="eyebrow">
                Phase 01
              </span>
              {" "}
              <h3>
                Discover
              </h3>
              {" "}
              <p>
                We map your problem space, audit your data, and define measurable success criteria before writing a line of code.
              </p>
              {" "}
              <span className="tag">
                2 weeks
              </span>
              {" "}
            </div>
            {" "}
            <div className="arch-card span-4 reveal d1">
              {" "}
              <span className="eyebrow">
                Phase 02
              </span>
              {" "}
              <h3>
                Prototype
              </h3>
              {" "}
              <p>
                Rapid experimentation — baseline models, feature engineering, and architecture exploration. We fail fast and iterate.
              </p>
              {" "}
              <span className="tag">
                2-3 weeks
              </span>
              {" "}
            </div>
            {" "}
            <div className="arch-card span-4 reveal d2">
              {" "}
              <span className="eyebrow">
                Phase 03
              </span>
              {" "}
              <h3>
                {"Train & Validate"}
              </h3>
              {" "}
              <p>
                Hyperparameter tuning, cross-validation, and adversarial testing. Models must meet defined thresholds before proceeding.
              </p>
              {" "}
              <span className="tag">
                3-4 weeks
              </span>
              {" "}
            </div>
            {" "}
            <div className="arch-card span-6 reveal">
              {" "}
              <span className="eyebrow">
                Phase 04
              </span>
              {" "}
              <h3>
                {"Deploy & Monitor"}
              </h3>
              {" "}
              <p>
                Production infrastructure, API endpoints, monitoring dashboards, and drift detection. We don't disappear after launch.
              </p>
              {" "}
              <span className="tag">
                1-2 weeks + ongoing
              </span>
              {" "}
            </div>
            {" "}
            <div className="arch-card span-6 reveal d1">
              {" "}
              <span className="eyebrow">
                Phase 05
              </span>
              {" "}
              <h3>
                {"Iterate & Improve"}
              </h3>
              {" "}
              <p>
                Continuous evaluation, retraining pipelines, and performance optimization. Your models get better every quarter.
              </p>
              {" "}
              <span className="tag">
                ongoing
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
          <div className="feature">
            {" "}
            <div className="frame reveal">
              <img src={a1} alt="KORVA team working on AI models" />
            </div>
            {" "}
            <div>
              {" "}
              <span className="kicker">
                Why KORVA
              </span>
              {" "}
              <h2>
                Precision over hype
              </h2>
              {" "}
              <p>
                The AI industry is full of buzzwords. We focus on what actually works — measurable outcomes, production reliability, and models that solve real problems.
              </p>
              {" "}
              <p>
                Every project starts with a success metric. Every model is validated against real-world data. Every deployment includes monitoring and drift detection.
              </p>
              {" "}
              <a href="about.html" className="link">
                Read our approach →
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
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Case Studies
          </span>
          {" "}
          <h2>
            Recent deployments
          </h2>
          {" "}
          <div className="projects-grid">
            {" "}
            <div className="project-card reveal">
              {" "}
              <div className="media">
                <img src={a2} alt="Vision system for manufacturing" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Manufacturing QA Vision
                </h3>
                {" "}
                <p>
                  Real-time defect detection for automotive parts. 99.2% accuracy, 4ms inference time on edge hardware.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    Computer Vision
                  </span>
                  <span>
                    Edge AI
                  </span>
                  <span>
                    Manufacturing
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal d1">
              {" "}
              <div className="media">
                <img src={a3} alt="NLP system for legal documents" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  Legal Document Analysis
                </h3>
                {" "}
                <p>
                  Automated contract review and risk scoring. Reduced review time from 4 hours to 12 minutes per document.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    NLP
                  </span>
                  <span>
                    Legal Tech
                  </span>
                  <span>
                    Enterprise
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="project-card reveal d2">
              {" "}
              <div className="media">
                <img src={a4} alt="Recommendation engine for e-commerce" />
              </div>
              {" "}
              <div className="body">
                {" "}
                <h3>
                  E-Commerce Recommendations
                </h3>
                {" "}
                <p>
                  Personalized product recommendations serving 2M+ daily users. 34% uplift in click-through rate.
                </p>
                {" "}
                <div className="meta">
                  <span>
                    ML
                  </span>
                  <span>
                    Recommendation
                  </span>
                  <span>
                    Retail
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {" "}
            <a href="project.html" className="link">
              View all case studies →
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
          <span className="kicker">
            Benchmarks
          </span>
          {" "}
          <h2>
            Performance metrics
          </h2>
          {" "}
          <div style={{ overflowX: "auto" }}>
            {" "}
            <table className="bench-table reveal">
              {" "}
              <thead>
                {" "}
                <tr>
                  <th>
                    Model
                  </th>
                  <th>
                    Task
                  </th>
                  <th>
                    Metric
                  </th>
                  <th>
                    Score
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
                {" "}
              </thead>
              {" "}
              <tbody>
                {" "}
                <tr>
                  <td>
                    vision-v3.2
                  </td>
                  <td>
                    Defect Detection
                  </td>
                  <td>
                    Accuracy
                  </td>
                  <td>
                    97.4%
                  </td>
                  <td className="pass">
                    PASS
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>
                    nlp-v2.1
                  </td>
                  <td>
                    Document Classification
                  </td>
                  <td>
                    F1 Score
                  </td>
                  <td>
                    0.94
                  </td>
                  <td className="pass">
                    PASS
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>
                    fraud-v4.0
                  </td>
                  <td>
                    Transaction Screening
                  </td>
                  <td>
                    AUC-ROC
                  </td>
                  <td>
                    0.987
                  </td>
                  <td className="amber">
                    TRAINING
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>
                    rec-engine
                  </td>
                  <td>
                    Product Recommendations
                  </td>
                  <td>
                    NDCG@10
                  </td>
                  <td>
                    0.89
                  </td>
                  <td className="pass">
                    PASS
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>
                    ocr-v2.0
                  </td>
                  <td>
                    Handwriting Recognition
                  </td>
                  <td>
                    CER
                  </td>
                  <td>
                    1.2%
                  </td>
                  <td className="pass">
                    PASS
                  </td>
                </tr>
                {" "}
                <tr>
                  <td>
                    anomaly-v1.3
                  </td>
                  <td>
                    Network Intrusion
                  </td>
                  <td>
                    Precision
                  </td>
                  <td>
                    96.1%
                  </td>
                  <td className="pass">
                    PASS
                  </td>
                </tr>
                {" "}
              </tbody>
              {" "}
            </table>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="section section--surface">
        {" "}
        <div className="container">
          {" "}
          <span className="kicker">
            Client Logs
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
                "KORVA took our messy sensor data and turned it into a predictive maintenance system that pays for itself every quarter. No hype, just results."
              </p>
              {" "}
              <span className="label">
                — VP Engineering, Industrial Automation Co.
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
                "Their computer vision system catches defects our human inspectors missed. 99.2% accuracy on the production line — and it runs on $200 edge hardware."
              </p>
              {" "}
              <span className="label">
                — Head of Quality, Automotive Manufacturer
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
                "From prototype to production in 6 weeks. They didn't just build a model — they built the infrastructure to keep it running and improving."
              </p>
              {" "}
              <span className="label">
                — CTO, FinTech Startup
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
              Start Building
            </span>
            {" "}
            <h2>
              Let's build your AI system
            </h2>
            {" "}
            <p>
              From prototype to production in 8 weeks. Measurable outcomes, not buzzwords.
            </p>
            {" "}
          </div>
          {" "}
          <div className="actions">
            {" "}
            <a href="contact.html" className="btn-primary">
              Start a Project →
            </a>
            {" "}
            <a href="project.html" className="btn-ghost">
              View Case Studies
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
                KOR
                <span>
                  V
                </span>
                A
              </div>
              {" "}
              <p>
                Custom AI systems — from prototype to production. Machine learning, computer vision, NLP, and intelligent automation.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Services
              </h4>
              {" "}
              <a href="service.html">
                Custom ML
              </a>
              <br />
              {" "}
              <a href="service.html">
                Computer Vision
              </a>
              <br />
              {" "}
              <a href="service.html">
                NLP
              </a>
              <br />
              {" "}
              <a href="service.html">
                MLOps
              </a>
              <br />
              {" "}
              <a href="service.html">
                Edge AI
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <a href="about.html">
                About
              </a>
              <br />
              {" "}
              <a href="project.html">
                Case Studies
              </a>
              <br />
              {" "}
              <a href="about.html">
                Careers
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Connect
              </h4>
              {" "}
              <a href="mailto:hello@korva.ai">
                hello@korva.ai
              </a>
              <br />
              {" "}
              <a href="contact.html">
                Start a Project
              </a>
              <br />
              {" "}
              <a href="about.html">
                Read the Blog
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
              {" KORVA AI Studio"}
            </span>
            {" "}
            <span>
              Precision intelligence · No hype
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
