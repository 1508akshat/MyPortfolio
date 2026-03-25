export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-label">// 05. achievements</div>
      <h2 className="section-title">Highlights</h2>
      <div className="section-divider" />

      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-icon">⚡</div>
          <div className="achievement-title">LeetCode Consistency</div>
          <ul className="achievement-bullets">
            <li>Solved <strong style={{color: 'var(--text)'}}>200+ DSA problems</strong> on LeetCode</li>
            <li>Maintained a <strong style={{color: 'var(--text)'}}>150+ day active coding streak</strong></li>
          </ul>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">🏆</div>
          <div className="achievement-title">TechForge 2025 Hackathon</div>
          <ul className="achievement-bullets">
            <li>Core Team & Content Manager for a national-level event</li>
            <li>₹25 Lakh seed funding prize pool hosted by The Code Breakers Club</li>
          </ul>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">📚</div>
          <div className="achievement-title">DSA Foundations</div>
          <ul className="achievement-bullets">
            <li>Completed 70-hour intensive DSA program from CipherSchools</li>
            <li>Strong grasp of recursion, trees, graphs & complexity analysis</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
