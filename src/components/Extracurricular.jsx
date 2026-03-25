const extras = [
  {
    icon: '🚀',
    title: 'Core Team & Content Manager — TechForge 2025 National Hackathon',
    date: 'Nov 2024 – Present',
    desc: 'Led planning and execution for a national-level hackathon hosted by The Code Breakers Club, featuring a ₹25 Lakh seed funding prize pool. Managed content strategy, communications, and event coordination.',
  },
  {
    icon: '❤️',
    title: 'Community Volunteer — Janak Sewa Samiti (Sneh Ashram)',
    date: 'May 2024',
    desc: 'Completed 30+ hours of community service supporting elderly care, charitable dispensary operations, and physiotherapy programs. Recognized for strong teamwork, empathy, and communication.',
  },
]

export default function Extracurricular() {
  return (
    <section id="extracurricular">
      <div className="section-label">// 06. extra-curricular</div>
      <h2 className="section-title">Beyond the Code</h2>
      <div className="section-divider" />

      <div className="extras-grid">
        {extras.map((e) => (
          <div key={e.title} className="extra-card">
            <div className="extra-icon">{e.icon}</div>
            <div>
              <div className="extra-title">{e.title}</div>
              <div className="extra-date">{e.date}</div>
              <div className="extra-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
