const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    icon: '🏙️',
    title: 'UrbanEase',
    date: '2025',
    github: 'https://github.com/1508akshat/UrbanEase',
    live: 'https://theurbanease.vercel.app/',
    image: 'https://placehold.co/600x400/12121a/7c5cbf?text=UrbanEase+Preview',
    bullets: [
      'Built a full-stack web application to streamline urban service requests and civic issue reporting.',
      'Developed responsive UI with modern design, ensuring seamless experience across devices.',
      'Deployed live on Vercel with continuous integration for rapid iteration and updates.',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
  },
  {
    icon: '📦',
    title: 'Inventory Manager with Expiry Tracker',
    date: '2025',
    github: 'https://github.com/1508akshat/ExpiryTracker',
    live: null,
    image: 'https://placehold.co/600x400/12121a/4ade80?text=Inventory+App+Preview',
    bullets: [
      'Developed an inventory management system with integrated expiry date tracking for perishable items.',
      'Implemented alert system to notify users of upcoming and expired products to minimize waste.',
      'Designed an intuitive dashboard to manage stock levels, categories, and expiry timelines.',
    ],
    tech: ['Python', 'Data Management', 'Inventory System'],
  },
  {
    icon: '🎲',
    title: 'Dice Game Simulator',
    date: 'Jun 2025 – Jul 2025',
    github: 'https://github.com/1508akshat',
    live: null,
    image: 'https://placehold.co/600x400/12121a/60a5fa?text=Dice+Game+Preview',
    bullets: [
      'Developed a console-based multiplayer dice game in C++, enabling dynamic player input, real-time score tracking, and randomized gameplay.',
      'Applied OOP and modular functions to design scalable game logic and manage player data efficiently.',
      'Utilized STL Map and core DSA concepts for leaderboard management and optimized data handling.',
    ],
    tech: ['C++', 'OOP', 'STL (Map)', 'DSA'],
  },
  {
    icon: '💉',
    title: 'COVID-19 Vaccination Analysis & Dashboard',
    date: 'Apr 2025 – May 2025',
    github: 'https://github.com/1508akshat',
    live: null,
    image: 'https://placehold.co/600x400/12121a/f472b6?text=COVID+Dashboard',
    bullets: [
      'Processed 150K+ COVID-19 vaccination records to uncover temporal, demographic, and regional trends.',
      'Designed an interactive Excel dashboard with pivot tables, charts, and slicers for state-wise analysis.',
      'Created Python-based visualizations to present dose-wise and gender-based vaccination analytics.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Excel'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">// 02. projects</div>
      <h2 className="section-title">Things I've Built</h2>
      <div className="section-divider" />

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            {p.image && (
              <div className="project-image-wrap">
                <img src={p.image} alt={`${p.title} preview`} className="project-image" />
              </div>
            )}
            <div className="project-content">
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub <ExternalLinkIcon />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-live">
                      Live <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-date">{p.date}</div>
              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
