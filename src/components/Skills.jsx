const skills = [
  {
    icon: '💻',
    title: 'Languages',
    tags: ['C++', 'Python', 'Java'],
  },
  {
    icon: '🌐',
    title: 'Frameworks & Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    tags: ['LeetCode', 'GitHub', 'Excel', 'Power BI'],
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    tags: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// 01. skills</div>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.title} className="skill-card">
            <div className="skill-card-icon">{s.icon}</div>
            <div className="skill-card-title">{s.title}</div>
            <div className="skill-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
