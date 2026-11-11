// Converted from the HTML template admin-panel-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/user.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-admin-panel-302c">
      {" "}
      {" "}
      <header className="header">
        {" "}
        <div className="container">
          {" "}
          <nav>
            {" "}
            <a href="index.html" className="nav-logo">
              <span className="logo-icon">
                ☁
              </span>
              CloudBase
            </a>
            {" "}
            <div className="nav-links">
              {" "}
              <a href="index.html" className="nav-link active">
                Dashboard
              </a>
              {" "}
              <a href="dashboard.html" className="nav-link">
                Analytics
              </a>
              {" "}
              <a href="projects.html" className="nav-link">
                Projects
              </a>
              {" "}
              <a href="team.html" className="nav-link">
                Team
              </a>
              {" "}
              <a href="settings.html" className="nav-link">
                Settings
              </a>
              {" "}
            </div>
            {" "}
            <div className="nav-cta">
              {" "}
              <div className="header-search">
                {" "}
                <span className="search-icon">
                  🔍
                </span>
                {" "}
                <input type="text" placeholder="Search projects, clients…" aria-label="Search" />
                {" "}
              </div>
              {" "}
              <div className="user-dropdown" id="userDropdown">
                {" "}
                <button className="user-dropdown-trigger" type="button" aria-expanded="false" aria-haspopup="true">
                  {" "}
                  <img className="avatar" src={a0} alt="Sarah Chen avatar" />
                  {" "}
                  <span className="user-name">
                    Sarah Chen
                  </span>
                  {" "}
                  <span className="dropdown-arrow">
                    ▼
                  </span>
                  {" "}
                </button>
                {" "}
                <div className="user-dropdown-menu" role="menu">
                  {" "}
                  <a href="settings.html">
                    👤 My Profile
                  </a>
                  {" "}
                  <a href="settings.html">
                    ⚙️ Account Settings
                  </a>
                  {" "}
                  <a href="team.html">
                    👥 Manage Team
                  </a>
                  {" "}
                  <div className="dropdown-divider" />
                  {" "}
                  <a href="404.html">
                    🚪 Sign Out
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="nav-toggle" aria-label="Toggle menu" aria-expanded="false" role="button" tabIndex="0">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <section className="page-hero">
        {" "}
        <div className="container">
          {" "}
          <h1 className="page-title">
            Good morning, Sarah ☀️
          </h1>
          {" "}
          <p className="page-subtitle">
            Here's what's happening across your workspace today.
          </p>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <main>
        {" "}
        <div className="container">
          {" "}
          {" "}
          <section className="kpi-grid" aria-label="Key metrics">
            {" "}
            <article className="kpi-card reveal">
              {" "}
              <div className="kpi-icon kpi-icon--primary">
                💰
              </div>
              {" "}
              <div className="kpi-body">
                {" "}
                <div className="kpi-value">
                  $84,250
                </div>
                {" "}
                <div className="kpi-label">
                  Monthly Revenue
                </div>
                {" "}
                <span className="kpi-trend kpi-trend--up">
                  ▲ 12.4%
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="kpi-card reveal d1">
              {" "}
              <div className="kpi-icon kpi-icon--success">
                📦
              </div>
              {" "}
              <div className="kpi-body">
                {" "}
                <div className="kpi-value">
                  1,432
                </div>
                {" "}
                <div className="kpi-label">
                  Active Projects
                </div>
                {" "}
                <span className="kpi-trend kpi-trend--up">
                  ▲ 8.1%
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="kpi-card reveal d2">
              {" "}
              <div className="kpi-icon kpi-icon--purple">
                👥
              </div>
              {" "}
              <div className="kpi-body">
                {" "}
                <div className="kpi-value">
                  286
                </div>
                {" "}
                <div className="kpi-label">
                  Team Members
                </div>
                {" "}
                <span className="kpi-trend kpi-trend--up">
                  ▲ 5.6%
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="kpi-card reveal d3">
              {" "}
              <div className="kpi-icon kpi-icon--dark">
                ⚡
              </div>
              {" "}
              <div className="kpi-body">
                {" "}
                <div className="kpi-value">
                  99.98%
                </div>
                {" "}
                <div className="kpi-label">
                  Uptime SLA
                </div>
                {" "}
                <span className="kpi-trend kpi-trend--down">
                  ▼ 0.02%
                </span>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </section>
          {" "}
          {" "}
          <section className="analytics-grid">
            {" "}
            <div className="card reveal">
              {" "}
              <div className="card-header">
                {" "}
                <h3>
                  📋 Recent Projects
                </h3>
                {" "}
                <a href="projects.html" className="btn btn-outline btn-sm">
                  View All →
                </a>
                {" "}
              </div>
              {" "}
              <div className="table-responsive">
                {" "}
                <table className="data-table">
                  {" "}
                  <thead>
                    {" "}
                    <tr>
                      {" "}
                      <th>
                        Project
                      </th>
                      {" "}
                      <th>
                        Client
                      </th>
                      {" "}
                      <th>
                        Status
                      </th>
                      {" "}
                      <th>
                        Progress
                      </th>
                      {" "}
                      <th>
                        Due Date
                      </th>
                      {" "}
                    </tr>
                    {" "}
                  </thead>
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      {" "}
                      <td className="project-name">
                        Nimbus Analytics
                      </td>
                      {" "}
                      <td className="project-client">
                        Orbit Labs
                      </td>
                      {" "}
                      <td>
                        <span className="status-badge status-badge--active">
                          Active
                        </span>
                      </td>
                      {" "}
                      <td>
                        {" "}
                        <div className="progress-cell">
                          {" "}
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "78%" }} />
                          </div>
                          {" "}
                          <span className="progress-text">
                            78%
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </td>
                      {" "}
                      <td>
                        Sep 14
                      </td>
                      {" "}
                    </tr>
                    {" "}
                    <tr>
                      {" "}
                      <td className="project-name">
                        Stratus CRM
                      </td>
                      {" "}
                      <td className="project-client">
                        Vantage Inc.
                      </td>
                      {" "}
                      <td>
                        <span className="status-badge status-badge--pending">
                          In Review
                        </span>
                      </td>
                      {" "}
                      <td>
                        {" "}
                        <div className="progress-cell">
                          {" "}
                          <div className="progress-bar">
                            <div className="progress-fill progress-fill--purple" style={{ width: "54%" }} />
                          </div>
                          {" "}
                          <span className="progress-text">
                            54%
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </td>
                      {" "}
                      <td>
                        Sep 21
                      </td>
                      {" "}
                    </tr>
                    {" "}
                    <tr>
                      {" "}
                      <td className="project-name">
                        Cumulus Mobile
                      </td>
                      {" "}
                      <td className="project-client">
                        PixelWorks
                      </td>
                      {" "}
                      <td>
                        <span className="status-badge status-badge--active">
                          Active
                        </span>
                      </td>
                      {" "}
                      <td>
                        {" "}
                        <div className="progress-cell">
                          {" "}
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: "92%" }} />
                          </div>
                          {" "}
                          <span className="progress-text">
                            92%
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </td>
                      {" "}
                      <td>
                        Sep 05
                      </td>
                      {" "}
                    </tr>
                    {" "}
                    <tr>
                      {" "}
                      <td className="project-name">
                        Cirrus ERP
                      </td>
                      {" "}
                      <td className="project-client">
                        Northwind Co.
                      </td>
                      {" "}
                      <td>
                        <span className="status-badge status-badge--completed">
                          Completed
                        </span>
                      </td>
                      {" "}
                      <td>
                        {" "}
                        <div className="progress-cell">
                          {" "}
                          <div className="progress-bar">
                            <div className="progress-fill progress-fill--success" style={{ width: "100%" }} />
                          </div>
                          {" "}
                          <span className="progress-text">
                            100%
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </td>
                      {" "}
                      <td>
                        Aug 28
                      </td>
                      {" "}
                    </tr>
                    {" "}
                    <tr>
                      {" "}
                      <td className="project-name">
                        Altostratus BI
                      </td>
                      {" "}
                      <td className="project-client">
                        Skyline Group
                      </td>
                      {" "}
                      <td>
                        <span className="status-badge status-badge--cancelled">
                          On Hold
                        </span>
                      </td>
                      {" "}
                      <td>
                        {" "}
                        <div className="progress-cell">
                          {" "}
                          <div className="progress-bar">
                            <div className="progress-fill progress-fill--purple" style={{ width: "30%" }} />
                          </div>
                          {" "}
                          <span className="progress-text">
                            30%
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </td>
                      {" "}
                      <td>
                        Oct 02
                      </td>
                      {" "}
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
            <div className="card reveal d1">
              {" "}
              <div className="card-header">
                {" "}
                <h3>
                  ⚡ Activity Feed
                </h3>
                {" "}
                <span className="form-hint">
                  Live
                </span>
                {" "}
              </div>
              {" "}
              <div className="card-body">
                {" "}
                <div className="activity-feed">
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-dot activity-dot--success" />
                    {" "}
                    <div className="activity-content">
                      {" "}
                      <p className="activity-text">
                        <strong>
                          Maya Patel
                        </strong>
                        {" deployed "}
                        <strong>
                          Nimbus Analytics
                        </strong>
                        {" to production"}
                      </p>
                      {" "}
                      <p className="activity-time">
                        12 min ago
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-dot activity-dot--primary" />
                    {" "}
                    <div className="activity-content">
                      {" "}
                      <p className="activity-text">
                        <strong>
                          Liam Novak
                        </strong>
                        {" commented on "}
                        <strong>
                          Stratus CRM
                        </strong>
                      </p>
                      {" "}
                      <p className="activity-time">
                        1 hr ago
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-dot activity-dot--warning" />
                    {" "}
                    <div className="activity-content">
                      {" "}
                      <p className="activity-text">
                        <strong>
                          API usage
                        </strong>
                        {" exceeded 80% of quota this month"}
                      </p>
                      {" "}
                      <p className="activity-time">
                        3 hrs ago
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-dot activity-dot--purple" />
                    {" "}
                    <div className="activity-content">
                      {" "}
                      <p className="activity-text">
                        <strong>
                          Zoe Turner
                        </strong>
                        {" invited 3 members to "}
                        <strong>
                          CloudBase
                        </strong>
                      </p>
                      {" "}
                      <p className="activity-time">
                        5 hrs ago
                      </p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-dot activity-dot--success" />
                    {" "}
                    <div className="activity-content">
                      {" "}
                      <p className="activity-text">
                        <strong>
                          Cirrus ERP
                        </strong>
                        {" was marked as completed"}
                      </p>
                      {" "}
                      <p className="activity-time">
                        Yesterday
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
          <section className="section">
            {" "}
            <div className="section-header reveal">
              {" "}
              <div>
                {" "}
                <h2 className="section-title">
                  Quick Access
                </h2>
                {" "}
                <p className="section-sub">
                  Jump straight into your most-used workspaces.
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="kpi-grid">
              {" "}
              <article className="kpi-card reveal">
                {" "}
                <div className="kpi-icon kpi-icon--primary">
                  📊
                </div>
                {" "}
                <div className="kpi-body">
                  {" "}
                  <div className="kpi-value">
                    Analytics
                  </div>
                  {" "}
                  <div className="kpi-label">
                    {"Detailed usage & performance metrics"}
                  </div>
                  {" "}
                  <a href="dashboard.html" className="btn btn-outline btn-sm" style={{ marginTop: "12px" }}>
                    Open →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="kpi-card reveal d1">
                {" "}
                <div className="kpi-icon kpi-icon--purple">
                  🗂️
                </div>
                {" "}
                <div className="kpi-body">
                  {" "}
                  <div className="kpi-value">
                    Projects
                  </div>
                  {" "}
                  <div className="kpi-label">
                    Manage deliverables and milestones
                  </div>
                  {" "}
                  <a href="projects.html" className="btn btn-outline btn-sm" style={{ marginTop: "12px" }}>
                    Open →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="kpi-card reveal d2">
                {" "}
                <div className="kpi-icon kpi-icon--success">
                  👥
                </div>
                {" "}
                <div className="kpi-body">
                  {" "}
                  <div className="kpi-value">
                    Team
                  </div>
                  {" "}
                  <div className="kpi-label">
                    Your people, roles and availability
                  </div>
                  {" "}
                  <a href="team.html" className="btn btn-outline btn-sm" style={{ marginTop: "12px" }}>
                    Open →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article className="kpi-card reveal d3">
                {" "}
                <div className="kpi-icon kpi-icon--dark">
                  ⚙️
                </div>
                {" "}
                <div className="kpi-body">
                  {" "}
                  <div className="kpi-value">
                    Settings
                  </div>
                  {" "}
                  <div className="kpi-label">
                    {"Profile, workspace & notifications"}
                  </div>
                  {" "}
                  <a href="settings.html" className="btn btn-outline btn-sm" style={{ marginTop: "12px" }}>
                    Open →
                  </a>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </div>
        {" "}
      </main>
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
              <span className="brand">
                ☁ CloudBase
              </span>
              {" "}
              <p>
                A modern SaaS admin panel — clean card-based layout, KPI metrics, project management, team and settings in one template.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Product
              </h4>
              {" "}
              <a href="dashboard.html">
                Analytics
              </a>
              <br />
              {" "}
              <a href="projects.html">
                Projects
              </a>
              <br />
              {" "}
              <a href="team.html">
                Team
              </a>
              <br />
              {" "}
              <a href="settings.html">
                Settings
              </a>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4>
                Resources
              </h4>
              {" "}
              <a href="404.html">
                Documentation
              </a>
              <br />
              {" "}
              <a href="404.html">
                API Reference
              </a>
              <br />
              {" "}
              <a href="404.html">
                Changelog
              </a>
              <br />
              {" "}
              <a href="404.html">
                Status
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
              <a href="team.html">
                About Us
              </a>
              <br />
              {" "}
              <a href="settings.html">
                Contact
              </a>
              <br />
              {" "}
              <a href="404.html">
                Privacy
              </a>
              <br />
              {" "}
              <a href="404.html">
                Terms
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer-bottom">
            {" "}
            <span>
              {"© "}
              <span data-year="">
                2026
              </span>
              {" CloudBase. All rights reserved."}
            </span>
            {" "}
            <span>
              Framework-free · Responsive · Production-ready
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
