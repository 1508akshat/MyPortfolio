const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 4 4l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="hero-eyebrow">Hello, world!</div>

          <h1 className="hero-name">
            Akshat <span>Garg</span>
          </h1>

          <p className="hero-title">
            <strong>CSE Student @ LPU</strong> · Aspiring Software Developer &amp; Data Enthusiast
          </p>

          <div className="hero-links">
            <a href="https://github.com/1508akshat" target="_blank" rel="noopener noreferrer" className="hero-link">
              <GithubIcon /> github.com/1508akshat
            </a>
            <a href="https://linkedin.com/in/akshat-lpu2027" target="_blank" rel="noopener noreferrer" className="hero-link">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="mailto:ak15garg2005@gmail.com" className="hero-link">
              <MailIcon /> ak15garg2005@gmail.com
            </a>
            <a href="tel:+919599436837" className="hero-link">
              <PhoneIcon /> +91 9599436837
            </a>
          </div>

          <div className="hero-cta-group">
            <a href="#projects" className="hero-cta">
              View My Work <ArrowIcon />
            </a>
            <a href="/resume.pdf" download="Akshat_Garg_Resume.pdf" className="hero-cta secondary">
              Download Resume <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img src="/profile.jpg" alt="Akshat Garg" className="hero-photo" />
        </div>
      </div>

      <div className="hero-stats">
        <div>
          <div className="hero-stat-value">200+</div>
          <div className="hero-stat-label">LeetCode Problems</div>
        </div>
        <div>
          <div className="hero-stat-value">150+</div>
          <div className="hero-stat-label">Day Coding Streak</div>
        </div>
        <div>
          <div className="hero-stat-value">7.7</div>
          <div className="hero-stat-label">CGPA @ LPU</div>
        </div>
        <div>
          <div className="hero-stat-value">4</div>
          <div className="hero-stat-label">Certifications</div>
        </div>
      </div>
    </section>
  )
}
