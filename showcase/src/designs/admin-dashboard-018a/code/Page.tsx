// Converted from the HTML template admin-dashboard-html-template by engine/tools/html_page.py. Edit text via `npm run site -- copy`.
import "./template.css";
import templateScript from "./template.js?raw";
import { useTemplateRuntime } from "@/lib/template-runtime";
import a0 from "./assets/bootstrap-5-admin-template.webp";
import a1 from "./assets/user.webp";
import a2 from "./assets/testimonial-1.webp";
import a3 from "./assets/testimonial-2.webp";

const LINKS: string[] = ["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"];
const SCRIPTS: string[] = [];

export default function Page() {
  const ref = useTemplateRuntime(LINKS, SCRIPTS, templateScript);
  return (
    <div ref={ref} className="tpl-admin-dashboard-018a">
      {" "}
      <div className="sidebar-scrim" />
      {" "}
      {" "}
      <aside className="sidebar">
        {" "}
        <a href="index.html" className="sidebar-logo">
          {" "}
          <span className="sidebar-logo-mark">
            P
          </span>
          {" "}
          <span className="sidebar-logo-name">
            Panel
            <span>
              Pro
            </span>
          </span>
          {" "}
        </a>
        {" "}
        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          {" "}
          <span className="sidebar-label">
            Menu
          </span>
          {" "}
          <a href="index.html" className="sidebar-link active">
            {" "}
            <span className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            {" "}
            <span>
              Dashboard
            </span>
            {" "}
          </a>
          {" "}
          <a href="analytics.html" className="sidebar-link">
            {" "}
            <span className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <rect x="7" y="12" width="3" height="6" rx="1" />
                <rect x="12" y="8" width="3" height="10" rx="1" />
                <rect x="17" y="5" width="3" height="13" rx="1" />
              </svg>
            </span>
            {" "}
            <span>
              Analytics
            </span>
            {" "}
          </a>
          {" "}
          <a href="users.html" className="sidebar-link">
            {" "}
            <span className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            {" "}
            <span>
              Users
            </span>
            {" "}
            <span className="s-badge">
              3
            </span>
            {" "}
          </a>
          {" "}
          <a href="settings.html" className="sidebar-link">
            {" "}
            <span className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            {" "}
            <span>
              Settings
            </span>
            {" "}
          </a>
          {" "}
          <span className="sidebar-label">
            System
          </span>
          {" "}
          <a href="404.html" className="sidebar-link">
            {" "}
            <span className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </span>
            {" "}
            <span>
              Error 404
            </span>
            {" "}
          </a>
          {" "}
        </nav>
        {" "}
        <div className="sidebar-user">
          {" "}
          <img className="sidebar-user-avatar" src={a1} alt="Admin avatar" />
          {" "}
          <div className="sidebar-user-info">
            {" "}
            <div className="sidebar-user-name">
              Alex Morgan
            </div>
            {" "}
            <div className="sidebar-user-role">
              Administrator
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </aside>
      {" "}
      {" "}
      <div className="main-content">
        {" "}
        <header className="topbar">
          {" "}
          <button className="sidebar-toggle" aria-label="Toggle sidebar" aria-expanded="false">
            <span />
            <span />
            <span />
          </button>
          {" "}
          <div className="topbar-search">
            {" "}
            <svg className="search-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            {" "}
            <input type="search" placeholder="Search reports, users, pages…" aria-label="Search" />
            {" "}
          </div>
          {" "}
          <div className="topbar-actions">
            {" "}
            <button className="topbar-btn" aria-label="Messages">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              {" "}
              <span className="dot dot-red" />
              {" "}
            </button>
            {" "}
            <button className="topbar-btn" aria-label="Notifications">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {" "}
              <span className="dot dot-amber" />
              {" "}
            </button>
            {" "}
            <div className="topbar-user" role="button" tabIndex="0" aria-label="Account menu">
              {" "}
              <img src={a1} alt="Alex Morgan" />
              {" "}
              <div className="topbar-user-meta">
                {" "}
                <div className="topbar-user-name">
                  Alex Morgan
                </div>
                {" "}
                <div className="topbar-user-role">
                  Admin
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <main className="page-content">
          {" "}
          <div className="container">
            {" "}
            <div className="page-head">
              {" "}
              <div>
                {" "}
                <h1>
                  Dashboard
                </h1>
                {" "}
                <p className="crumb">
                  <a href="index.html">
                    Home
                  </a>
                  {" / Dashboard"}
                </p>
                {" "}
              </div>
              {" "}
              <div className="page-head-actions">
                {" "}
                <a href="analytics.html" className="btn btn--ghost btn--sm">
                  View Report
                </a>
                {" "}
                <a href="users.html" className="btn btn--primary btn--sm">
                  + Add User
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <section className="kpi-grid reveal visible" aria-label="Key metrics">
              {" "}
              <article className="kpi-card">
                {" "}
                <div className="kpi-top">
                  {" "}
                  <span className="kpi-icon kpi-icon-indigo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </span>
                  {" "}
                  <span className="trend trend-up">
                    ▲ 12.5%
                  </span>
                  {" "}
                </div>
                {" "}
                <p className="kpi-label">
                  Total Revenue
                </p>
                {" "}
                <div className="kpi-value" data-count="128430" data-prefix="$">
                  $0
                </div>
                {" "}
                <p className="kpi-delta">
                  vs. last month
                </p>
                {" "}
              </article>
              {" "}
              <article className="kpi-card">
                {" "}
                <div className="kpi-top">
                  {" "}
                  <span className="kpi-icon kpi-icon-emerald">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  {" "}
                  <span className="trend trend-up">
                    ▲ 8.2%
                  </span>
                  {" "}
                </div>
                {" "}
                <p className="kpi-label">
                  Total Users
                </p>
                {" "}
                <div className="kpi-value" data-count="8214">
                  0
                </div>
                {" "}
                <p className="kpi-delta">
                  2,340 active this week
                </p>
                {" "}
              </article>
              {" "}
              <article className="kpi-card">
                {" "}
                <div className="kpi-top">
                  {" "}
                  <span className="kpi-icon kpi-icon-amber">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" />
                      <path d="M1 10h22" />
                    </svg>
                  </span>
                  {" "}
                  <span className="trend trend-up">
                    ▲ 16.4%
                  </span>
                  {" "}
                </div>
                {" "}
                <p className="kpi-label">
                  Sessions
                </p>
                {" "}
                <div className="kpi-value" data-count="54832">
                  0
                </div>
                {" "}
                <p className="kpi-delta">
                  Avg. 2m 48s per visit
                </p>
                {" "}
              </article>
              {" "}
              <article className="kpi-card">
                {" "}
                <div className="kpi-top">
                  {" "}
                  <span className="kpi-icon kpi-icon-red">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  {" "}
                  <span className="trend trend-down">
                    ▼ 1.8%
                  </span>
                  {" "}
                </div>
                {" "}
                <p className="kpi-label">
                  Conversion
                </p>
                {" "}
                <div className="kpi-value" data-count="3.42" data-decimals="2" data-suffix="%">
                  0%
                </div>
                {" "}
                <p className="kpi-delta">
                  Goal: 4.0% this quarter
                </p>
                {" "}
              </article>
              {" "}
            </section>
            {" "}
            {" "}
            <section className="chart-grid">
              {" "}
              <div className="panel reveal d1">
                {" "}
                <div className="panel-head">
                  {" "}
                  <h3>
                    Revenue Overview
                  </h3>
                  {" "}
                  <span className="badge badge-indigo">
                    This year
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="panel-body">
                  {" "}
                  <div className="bar-chart" role="img" aria-label="Monthly revenue bar chart">
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $8.2k
                      </span>
                      <span className="bar" style={{ height: "42%" }} />
                      <span className="bar-label">
                        Jan
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $9.4k
                      </span>
                      <span className="bar" style={{ height: "48%" }} />
                      <span className="bar-label">
                        Feb
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $7.9k
                      </span>
                      <span className="bar" style={{ height: "41%" }} />
                      <span className="bar-label">
                        Mar
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $11.6k
                      </span>
                      <span className="bar" style={{ height: "60%" }} />
                      <span className="bar-label">
                        Apr
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $13.2k
                      </span>
                      <span className="bar" style={{ height: "68%" }} />
                      <span className="bar-label">
                        May
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $12.1k
                      </span>
                      <span className="bar" style={{ height: "62%" }} />
                      <span className="bar-label">
                        Jun
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $14.8k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "76%" }} />
                      <span className="bar-label">
                        Jul
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $16.5k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "85%" }} />
                      <span className="bar-label">
                        Aug
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $15.3k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "79%" }} />
                      <span className="bar-label">
                        Sep
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $17.9k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "92%" }} />
                      <span className="bar-label">
                        Oct
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $18.6k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "96%" }} />
                      <span className="bar-label">
                        Nov
                      </span>
                    </div>
                    {" "}
                    <div className="bar-col">
                      <span className="bar-value">
                        $19.5k
                      </span>
                      <span className="bar bar--emerald" style={{ height: "100%" }} />
                      <span className="bar-label">
                        Dec
                      </span>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="chart-legend">
                    {" "}
                    <span className="legend-item">
                      <span className="legend-swatch" style={{ background: "var(--indigo)" }} />
                      Current year
                    </span>
                    {" "}
                    <span className="legend-item">
                      <span className="legend-swatch" style={{ background: "var(--emerald)" }} />
                      Growth phase
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="panel reveal d2">
                {" "}
                <div className="panel-head">
                  {" "}
                  <h3>
                    Traffic Sources
                  </h3>
                  {" "}
                  <a href="analytics.html" className="section-link">
                    Details
                  </a>
                  {" "}
                </div>
                {" "}
                <div className="panel-body">
                  {" "}
                  <div className="donut-wrap">
                    {" "}
                    <div className="donut">
                      {" "}
                      <div className="donut-center">
                        <strong>
                          48.2%
                        </strong>
                        <span>
                          Organic
                        </span>
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="hbar-list">
                      {" "}
                      <div className="hbar-item">
                        {" "}
                        <div className="hbar-label-row">
                          <span>
                            Organic Search
                          </span>
                          <b>
                            48.2%
                          </b>
                        </div>
                        {" "}
                        <div className="hbar">
                          <span style={{ width: "48.2%" }} />
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="hbar-item">
                        {" "}
                        <div className="hbar-label-row">
                          <span>
                            Direct
                          </span>
                          <b>
                            26.0%
                          </b>
                        </div>
                        {" "}
                        <div className="hbar hbar--emerald">
                          <span style={{ width: "26%" }} />
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="hbar-item">
                        {" "}
                        <div className="hbar-label-row">
                          <span>
                            Referral
                          </span>
                          <b>
                            17.4%
                          </b>
                        </div>
                        {" "}
                        <div className="hbar hbar--amber">
                          <span style={{ width: "17.4%" }} />
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="hbar-item">
                        {" "}
                        <div className="hbar-label-row">
                          <span>
                            Social
                          </span>
                          <b>
                            8.4%
                          </b>
                        </div>
                        {" "}
                        <div className="hbar hbar--slate">
                          <span style={{ width: "8.4%" }} />
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
              </div>
              {" "}
            </section>
            {" "}
            {" "}
            <section className="section reveal d3">
              {" "}
              <div className="section-head">
                {" "}
                <h2 className="section-title">
                  Recent Activity
                </h2>
                {" "}
                <a href="analytics.html" className="section-link">
                  View all
                </a>
                {" "}
              </div>
              {" "}
              <div className="panel">
                {" "}
                <div className="activity-list">
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <img className="activity-avatar" src={a2} alt="Sarah Chen" />
                    {" "}
                    <div className="activity-body">
                      {" "}
                      <p>
                        <strong>
                          Sarah Chen
                        </strong>
                        {" upgraded to the "}
                        <strong>
                          Enterprise plan
                        </strong>
                      </p>
                      {" "}
                      <time>
                        Today, 09:24
                      </time>
                      {" "}
                    </div>
                    {" "}
                    <span className="badge badge-success">
                      Paid
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-icon activity-icon-amber">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </span>
                    {" "}
                    <div className="activity-body">
                      {" "}
                      <p>
                        {"Revenue crossed "}
                        <strong>
                          $120,000
                        </strong>
                        {" for the first time"}
                      </p>
                      {" "}
                      <time>
                        Yesterday, 18:02
                      </time>
                      {" "}
                    </div>
                    {" "}
                    <span className="badge badge-pending">
                      Milestone
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <img className="activity-avatar" src={a3} alt="Marcus Reid" />
                    {" "}
                    <div className="activity-body">
                      {" "}
                      <p>
                        <strong>
                          Marcus Reid
                        </strong>
                        {" created a new project \"Launch Kit\""}
                      </p>
                      {" "}
                      <time>
                        Yesterday, 14:41
                      </time>
                      {" "}
                    </div>
                    {" "}
                    <span className="badge badge-indigo">
                      Project
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-icon activity-icon-red">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </span>
                    {" "}
                    <div className="activity-body">
                      {" "}
                      <p>
                        {"Payment failure on invoice "}
                        <strong>
                          #INV-0914
                        </strong>
                        {" — retrying"}
                      </p>
                      {" "}
                      <time>
                        Yesterday, 11:05
                      </time>
                      {" "}
                    </div>
                    {" "}
                    <span className="badge badge-cancel">
                      Warning
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div className="activity-item">
                    {" "}
                    <span className="activity-icon activity-icon-emerald">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    {" "}
                    <div className="activity-body">
                      {" "}
                      <p>
                        {"Security scan completed — "}
                        <strong>
                          no vulnerabilities
                        </strong>
                        {" found"}
                      </p>
                      {" "}
                      <time>
                        2 days ago, 22:30
                      </time>
                      {" "}
                    </div>
                    {" "}
                    <span className="badge badge-active">
                      Secure
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
            <section className="section reveal d4">
              {" "}
              <div className="section-head">
                {" "}
                <h2 className="section-title">
                  Recent Orders
                </h2>
                {" "}
                <a href="analytics.html" className="section-link">
                  View all
                </a>
                {" "}
              </div>
              {" "}
              <div className="panel">
                {" "}
                <div className="table-wrap">
                  {" "}
                  <table className="table">
                    {" "}
                    <thead>
                      {" "}
                      <tr>
                        {" "}
                        <th>
                          Invoice
                        </th>
                        {" "}
                        <th>
                          Customer
                        </th>
                        {" "}
                        <th>
                          Date
                        </th>
                        {" "}
                        <th>
                          Amount
                        </th>
                        {" "}
                        <th>
                          Status
                        </th>
                        {" "}
                        <th>
                          Action
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
                        <td className="num">
                          #INV-0921
                        </td>
                        {" "}
                        <td>
                          <div className="cell-user">
                            <img src={a2} alt="Sarah Chen" />
                            <span>
                              <strong>
                                Sarah Chen
                              </strong>
                              {" sarah@example.com"}
                            </span>
                          </div>
                        </td>
                        {" "}
                        <td>
                          Aug 30, 2026
                        </td>
                        {" "}
                        <td className="num">
                          $1,240.00
                        </td>
                        {" "}
                        <td>
                          <span className="badge badge-paid">
                            Paid
                          </span>
                        </td>
                        {" "}
                        <td>
                          <div className="cell-actions">
                            <button className="icon-btn" aria-label="View invoice">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        {" "}
                      </tr>
                      {" "}
                      <tr>
                        {" "}
                        <td className="num">
                          #INV-0920
                        </td>
                        {" "}
                        <td>
                          <div className="cell-user">
                            <img src={a3} alt="Marcus Reid" />
                            <span>
                              <strong>
                                Marcus Reid
                              </strong>
                              {" marcus@example.com"}
                            </span>
                          </div>
                        </td>
                        {" "}
                        <td>
                          Aug 29, 2026
                        </td>
                        {" "}
                        <td className="num">
                          $860.50
                        </td>
                        {" "}
                        <td>
                          <span className="badge badge-pending">
                            Pending
                          </span>
                        </td>
                        {" "}
                        <td>
                          <div className="cell-actions">
                            <button className="icon-btn" aria-label="View invoice">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        {" "}
                      </tr>
                      {" "}
                      <tr>
                        {" "}
                        <td className="num">
                          #INV-0919
                        </td>
                        {" "}
                        <td>
                          <div className="cell-user">
                            <img src={a1} alt="Nina Patel" />
                            <span>
                              <strong>
                                Nina Patel
                              </strong>
                              {" nina@example.com"}
                            </span>
                          </div>
                        </td>
                        {" "}
                        <td>
                          Aug 28, 2026
                        </td>
                        {" "}
                        <td className="num">
                          $2,410.00
                        </td>
                        {" "}
                        <td>
                          <span className="badge badge-paid">
                            Paid
                          </span>
                        </td>
                        {" "}
                        <td>
                          <div className="cell-actions">
                            <button className="icon-btn" aria-label="View invoice">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        {" "}
                      </tr>
                      {" "}
                      <tr>
                        {" "}
                        <td className="num">
                          #INV-0918
                        </td>
                        {" "}
                        <td>
                          <div className="cell-user">
                            <img src={a3} alt="Leo Kim" />
                            <span>
                              <strong>
                                Leo Kim
                              </strong>
                              {" leo@example.com"}
                            </span>
                          </div>
                        </td>
                        {" "}
                        <td>
                          Aug 27, 2026
                        </td>
                        {" "}
                        <td className="num">
                          $530.00
                        </td>
                        {" "}
                        <td>
                          <span className="badge badge-cancel">
                            Failed
                          </span>
                        </td>
                        {" "}
                        <td>
                          <div className="cell-actions">
                            <button className="icon-btn" aria-label="View invoice">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        {" "}
                      </tr>
                      {" "}
                      <tr>
                        {" "}
                        <td className="num">
                          #INV-0917
                        </td>
                        {" "}
                        <td>
                          <div className="cell-user">
                            <img src={a2} alt="Amara Osei" />
                            <span>
                              <strong>
                                Amara Osei
                              </strong>
                              {" amara@example.com"}
                            </span>
                          </div>
                        </td>
                        {" "}
                        <td>
                          Aug 26, 2026
                        </td>
                        {" "}
                        <td className="num">
                          $1,790.00
                        </td>
                        {" "}
                        <td>
                          <span className="badge badge-paid">
                            Paid
                          </span>
                        </td>
                        {" "}
                        <td>
                          <div className="cell-actions">
                            <button className="icon-btn" aria-label="View invoice">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </button>
                          </div>
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
            </section>
            {" "}
          </div>
          {" "}
        </main>
        {" "}
        {" "}
        <footer className="footer">
          {" "}
          <div className="footer-grid">
            {" "}
            <div className="footer-brand">
              {" "}
              <h4>
                <span className="mark">
                  P
                </span>
                Panel
                <span style={{ color: "var(--emerald)" }}>
                  Pro
                </span>
              </h4>
              {" "}
              <p>
                A clean, modern admin dashboard template — KPI cards, charts, and user management in a framework-free, responsive layout.
              </p>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Manage
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html" className="footer-link">
                  Dashboard
                </a>
                {" "}
                <a href="analytics.html" className="footer-link">
                  Analytics
                </a>
                {" "}
                <a href="users.html" className="footer-link">
                  Users
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Account
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="settings.html" className="footer-link">
                  Settings
                </a>
                {" "}
                <a href="settings.html" className="footer-link">
                  Profile
                </a>
                {" "}
                <a href="settings.html" className="footer-link">
                  Notifications
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <h4 className="footer-heading">
                Help
              </h4>
              {" "}
              <div className="footer-links">
                {" "}
                <a href="index.html" className="footer-link">
                  Documentation
                </a>
                {" "}
                <a href="404.html" className="footer-link">
                  Error Page
                </a>
                {" "}
                <a href="settings.html" className="footer-link">
                  Contact Support
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
              {" PANELPRO. All rights reserved."}
            </span>
            {" "}
            <span className="tagline">
              Built for control. Crafted for clarity.
            </span>
            {" "}
          </div>
          {" "}
        </footer>
        {" "}
      </div>
      {" "}
      <button className="back-to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      {" "}
      {" "}
    </div>
  );
}
