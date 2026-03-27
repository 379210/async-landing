import './App.css'

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <span className="logo">async</span>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#cta" className="btn btn-sm">Get started</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">Now in beta</div>
        <h1>
          Build faster,<br />
          <span className="gradient-text">ship async.</span>
        </h1>
        <p className="hero-sub">
          The modern platform for teams that move fast. Automate workflows,
          collaborate in real time, and deploy without the waiting.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary">Start for free</a>
          <a href="#how" className="btn btn-ghost">See how it works →</a>
        </div>
        <div className="hero-glow" />
      </section>

      <section className="features" id="features">
        <h2 className="section-title">Everything you need to move fast</h2>
        <p className="section-sub">No setup required. No waiting. Just ship.</p>
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how" id="how">
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.title} className="step">
              <div className="step-num">{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="cta">
        <h2>Ready to go async?</h2>
        <p>Join thousands of teams already shipping faster.</p>
        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@company.com" />
          <button type="submit" className="btn btn-primary">Get early access</button>
        </form>
      </section>

      <footer className="footer">
        <span className="logo">async</span>
        <span className="muted">© {new Date().getFullYear()} Async Inc. All rights reserved.</span>
      </footer>
    </div>
  )
}

const features = [
  { icon: '⚡', title: 'Instant deploys', desc: 'Push code and go live in seconds. Zero-downtime deployments out of the box.' },
  { icon: '🔄', title: 'Async workflows', desc: 'Automate repetitive tasks with powerful, event-driven workflow engine.' },
  { icon: '🤝', title: 'Real-time collaboration', desc: 'Work together without stepping on each other. Conflicts resolved automatically.' },
  { icon: '📊', title: 'Built-in analytics', desc: 'Understand your app at a glance with live dashboards and alerts.' },
  { icon: '🔒', title: 'Enterprise security', desc: 'SOC 2 compliant. End-to-end encryption. Role-based access control.' },
  { icon: '🌐', title: 'Global edge network', desc: 'Serve your users from the nearest edge node, anywhere in the world.' },
]

const steps = [
  { title: 'Connect your repo', desc: 'Link your GitHub or GitLab repository in one click.' },
  { title: 'Configure your pipeline', desc: 'Define your build, test, and deploy steps with a simple config file.' },
  { title: 'Ship continuously', desc: 'Every push triggers your pipeline. Async keeps everything in sync.' },
]
