// Converted from the HTML template solar-energy-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/hero-sun.svg";
import a1 from "./assets/residential.svg";
import a2 from "./assets/commercial.svg";
import a3 from "./assets/battery-storage.svg";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-solar-energy-5ff1">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <a href="index.html" className="logo">
            {" "}
            <div className="logo-icon">
              ☼
            </div>
            {" SOLARIS "}
          </a>
          {" "}
          <nav className="nav-links">
            {" "}
            <a href="index.html" className="active">
              Home
            </a>
            {" "}
            <a href="about.html">
              About
            </a>
            {" "}
            <a href="services.html">
              Services
            </a>
            {" "}
            <a href="contact.html" className="nav-cta">
              Get a Quote →
            </a>
            {" "}
          </nav>
          {" "}
          <button className="menu-toggle" aria-label="Toggle menu">
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
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg-pattern" />
        {" "}
        <div className="hero-glow" />
        {" "}
        <div className="hero-glow-2" />
        {" "}
        <div className="container">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-badge">
              ☀ Clean Energy Future
            </div>
            {" "}
            <h1>
              Powering Tomorrow
              <br />
              {"with the "}
              <span>
                Sun
              </span>
            </h1>
            {" "}
            <p>
              Transform your home or business with premium solar energy solutions. Reduce your carbon footprint while saving thousands on electricity bills every year.
            </p>
            {" "}
            <div className="hero-buttons">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Start Your Solar Journey →
              </a>
              {" "}
              <a href="services.html" className="btn btn-secondary">
                Explore Services
              </a>
              {" "}
            </div>
            {" "}
            <div className="hero-stats">
              {" "}
              <div className="hero-stat">
                {" "}
                <h3 data-count="500" data-suffix="+">
                  0
                </h3>
                {" "}
                <p>
                  Projects Completed
                </p>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <h3 data-count="98" data-suffix="%">
                  0
                </h3>
                {" "}
                <p>
                  Client Satisfaction
                </p>
                {" "}
              </div>
              {" "}
              <div className="hero-stat">
                {" "}
                <h3 data-count="12" data-suffix="yr">
                  0
                </h3>
                {" "}
                <p>
                  Industry Experience
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="hero-image">
            {" "}
            <img src={a0} alt="Solar energy illustration" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="features section-pad">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-tag">
              Why Solar
            </div>
            {" "}
            <h2>
              Clean Energy for a Sustainable Future
            </h2>
            {" "}
            <p>
              Solar energy is the smartest investment you can make for your property, your wallet, and the planet.
            </p>
            {" "}
          </div>
          {" "}
          <div className="features-grid">
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                ☀
              </div>
              {" "}
              <h3>
                {"Renewable & Clean"}
              </h3>
              {" "}
              <p>
                Harness the power of the sun to generate clean electricity. No emissions, no pollution — just pure, sustainable energy for your daily needs.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                💰
              </div>
              {" "}
              <h3>
                Massive Savings
              </h3>
              {" "}
              <p>
                Slash your electricity bills by up to 70%. Solar panels pay for themselves in 5-7 years and continue generating free power for 25+ years.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                🎯
              </div>
              {" "}
              <h3>
                Increased Property Value
              </h3>
              {" "}
              <p>
                Homes with solar panels sell for 4-6% more than comparable properties. It's an upgrade that pays you back now and later.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                ⚡
              </div>
              {" "}
              <h3>
                Energy Independence
              </h3>
              {" "}
              <p>
                Stop relying on the grid and volatile utility rates. Generate your own power and take control of your energy future.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                🍃
              </div>
              {" "}
              <h3>
                Eco-Friendly Impact
              </h3>
              {" "}
              <p>
                Every solar installation reduces CO2 emissions equivalent to planting hundreds of trees. Make a real difference for the environment.
              </p>
              {" "}
            </div>
            {" "}
            <div className="feature-card reveal">
              {" "}
              <div className="feature-icon">
                🛠
              </div>
              {" "}
              <h3>
                Low Maintenance
              </h3>
              {" "}
              <p>
                Solar panels require minimal upkeep. With no moving parts and 25-year warranties, they just keep performing year after year.
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
      <section className="section-pad">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-tag">
              How It Works
            </div>
            {" "}
            <h2>
              Your Path to Solar in 4 Steps
            </h2>
            {" "}
            <p>
              We make going solar simple. From consultation to activation, our expert team handles everything.
            </p>
            {" "}
          </div>
          {" "}
          <div className="process-grid">
            {" "}
            <div className="process-step reveal">
              {" "}
              <div className="process-number">
                1
              </div>
              {" "}
              <h4>
                Free Consultation
              </h4>
              {" "}
              <p>
                We analyze your energy needs, roof condition, and sunlight exposure to design the perfect system.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <div className="process-number">
                2
              </div>
              {" "}
              <h4>
                Custom Design
              </h4>
              {" "}
              <p>
                Our engineers create a tailored solar solution optimized for maximum energy production and savings.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <div className="process-number">
                3
              </div>
              {" "}
              <h4>
                Professional Install
              </h4>
              {" "}
              <p>
                Our certified team installs your system quickly and cleanly, typically in just 1-3 days.
              </p>
              {" "}
            </div>
            {" "}
            <div className="process-step reveal">
              {" "}
              <div className="process-number">
                4
              </div>
              {" "}
              <h4>
                Start Saving
              </h4>
              {" "}
              <p>
                Flip the switch and watch your energy bills drop. We monitor performance and provide ongoing support.
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
      <section className="features section-pad">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-tag">
              Our Services
            </div>
            {" "}
            <h2>
              Comprehensive Solar Solutions
            </h2>
            {" "}
            <p>
              From residential rooftops to large-scale commercial installations, we deliver excellence at every level.
            </p>
            {" "}
          </div>
          {" "}
          <div className="services-grid">
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a1} alt="Residential solar installation" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Residential Solar
                </h3>
                {" "}
                <p>
                  Custom home solar systems designed to maximize your savings and energy independence.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a2} alt="Commercial solar installation" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Commercial Solar
                </h3>
                {" "}
                <p>
                  Scalable solar solutions for businesses looking to reduce operational costs and carbon footprint.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="service-card reveal">
              {" "}
              <div className="service-card-image">
                {" "}
                <img src={a3} alt="Battery energy storage" />
                {" "}
              </div>
              {" "}
              <div className="service-card-body">
                {" "}
                <h3>
                  Energy Storage
                </h3>
                {" "}
                <p>
                  Battery systems that store excess solar energy for use during peak hours or power outages.
                </p>
                {" "}
                <a href="services.html" className="service-link">
                  Learn More →
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
      <section className="testimonials section-pad">
        {" "}
        <div className="container">
          {" "}
          <div className="section-header">
            {" "}
            <div className="section-tag">
              Testimonials
            </div>
            {" "}
            <h2>
              What Our Clients Say
            </h2>
            {" "}
            <p>
              Real stories from homeowners and businesses who transformed their energy with SOLARIS.
            </p>
            {" "}
          </div>
          {" "}
          <div className="testimonial-grid">
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "Our electricity bill dropped by 80% in the first month. The installation was professional, clean, and completed in just two days. Best investment we've ever made."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  MR
                </div>
                {" "}
                <div>
                  {" "}
                  <h5>
                    Maria Rodriguez
                  </h5>
                  {" "}
                  <p>
                    Homeowner, Austin TX
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "SOLARIS helped us go green and save over $40,000 annually on energy. Their commercial team understood our needs perfectly and delivered beyond expectations."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  JC
                </div>
                {" "}
                <div>
                  {" "}
                  <h5>
                    James Chen
                  </h5>
                  {" "}
                  <p>
                    Operations Director, TechCorp
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="testimonial-card reveal">
              {" "}
              <div className="testimonial-stars">
                ★★★★★
              </div>
              {" "}
              <blockquote>
                "From the initial consultation to the final inspection, every step was seamless. We're now energy independent and our home value increased significantly."
              </blockquote>
              {" "}
              <div className="testimonial-author">
                {" "}
                <div className="testimonial-avatar">
                  SP
                </div>
                {" "}
                <div>
                  {" "}
                  <h5>
                    Sarah Patel
                  </h5>
                  {" "}
                  <p>
                    Homeowner, Denver CO
                  </p>
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
      <section className="cta-section">
        {" "}
        <div className="container">
          {" "}
          <div className="cta-content">
            {" "}
            <h2>
              Ready to Go Solar?
            </h2>
            {" "}
            <p>
              Join hundreds of satisfied customers who are already saving money and protecting the planet. Get your free solar assessment today.
            </p>
            {" "}
            <div className="cta-buttons">
              {" "}
              <a href="contact.html" className="btn btn-primary">
                Get Free Assessment →
              </a>
              {" "}
              <a href="tel:+18005551234" className="btn btn-secondary">
                Call (800) 555-1234
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
      <footer className="footer">
        {" "}
        <div className="container">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <a href="index.html" className="logo">
                {" "}
                <div className="logo-icon">
                  ☼
                </div>
                {" SOLARIS "}
              </a>
              {" "}
              <p>
                Powering Tomorrow with the Sun. Leading the transition to clean, renewable energy for homes and businesses across the nation.
              </p>
              {" "}
              <div className="footer-social">
                {" "}
                <a href="#" aria-label="Facebook">
                  f
                </a>
                {" "}
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                {" "}
                <a href="#" aria-label="LinkedIn">
                  i
                </a>
                {" "}
                <a href="#" aria-label="Instagram">
                  □
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="footer-col">
              {" "}
              <h4>
                Company
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Services
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
                    Blog
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
                Services
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="services.html">
                    Residential Solar
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Commercial Solar
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Energy Storage
                  </a>
                </li>
                {" "}
                <li>
                  <a href="services.html">
                    Maintenance
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
                Support
              </h4>
              {" "}
              <ul>
                {" "}
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    FAQ
                  </a>
                </li>
                {" "}
                <li>
                  <a href="#">
                    Warranty
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
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <p>
              © 2026 SOLARIS Energy. All rights reserved.
            </p>
            {" "}
            <div className="footer-bottom-links">
              {" "}
              <a href="#">
                Terms of Service
              </a>
              {" "}
              <a href="#">
                Privacy Policy
              </a>
              {" "}
              <a href="#">
                Sitemap
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
      {" "}
    </div>
  );
}
