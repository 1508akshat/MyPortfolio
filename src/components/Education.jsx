const education = [
  {
    title: 'B.Tech – Computer Science & Engineering',
    org: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    date: 'Aug 2023 – Present',
    desc: 'CGPA: 7.7',
  },
  {
    title: 'Intermediate (Class XII)',
    org: 'Bohra Public School',
    location: 'Ballabgarh, Faridabad',
    date: 'Apr 2021 – Mar 2023',
    desc: 'Percentage: 80.6%',
  },
  {
    title: 'Matriculation (Class X)',
    org: 'Bohra Public School',
    location: 'Ballabgarh, Faridabad',
    date: 'Apr 2020 – Mar 2021',
    desc: 'Percentage: 92.8%',
  },
]

const training = [
  {
    title: 'Data Structures & Algorithms Training',
    org: 'CipherSchools',
    date: 'Jun 2025 – Jul 2025',
    bullets: [
      'Completed a 70-hour intensive DSA training from CipherSchools.',
      'Gained hands-on experience in recursion, arrays, linked lists, stacks, queues, trees, graphs, and complexity analysis.',
      'Strengthened problem-solving and algorithmic thinking through structured practice.',
    ],
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">// 03. education & training</div>
      <h2 className="section-title">My Background</h2>
      <div className="section-divider" />

      <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'var(--code-font)' }}>
        Education
      </h3>

      <div className="timeline" style={{ marginBottom: '3rem' }}>
        {education.map((e) => (
          <div key={e.title} className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-title">{e.title}</div>
                <div className="timeline-date">{e.date}</div>
              </div>
              <div className="timeline-org">{e.org} · {e.location}</div>
              <div className="timeline-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'var(--code-font)' }}>
        Training
      </h3>

      <div className="timeline">
        {training.map((t) => (
          <div key={t.title} className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-date">{t.date}</div>
              </div>
              <div className="timeline-org">{t.org}</div>
              <ul className="timeline-bullets">
                {t.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
