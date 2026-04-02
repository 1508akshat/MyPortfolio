const certs = [
  { icon: '☁️', name: 'Cloud Computing', issuer: 'NPTEL', date: 'Oct 2025', link: 'https://drive.google.com/file/d/194VbkiaKG8IVt7dHHjRIQGX-xsWgToKh/view' },
  { icon: '🤖', name: 'AI Foundation Associate', issuer: 'Oracle', date: 'Sep 2025', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8A9432C45AA5E46FAEF057790F6E9267C15251AAD21A12065804F66D92E5852F' },
  { icon: '🧮', name: 'Data Structures & Algorithms', issuer: 'CipherSchools', date: 'Jul 2025', link: 'https://www.cipherschools.com/certificate/preview?id=6881170b589a14da23de4577' },
  { icon: '✨', name: 'Career Essentials in Generative AI', issuer: 'Microsoft', date: 'May 2025', link: 'https://www.linkedin.com/learning/certificates/cc47dbb077e1b4a5fee8a20599d0667743c937d354430da1b3ae53b5d2b9c171' },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="section-label">// 04. certificates</div>
      <h2 className="section-title">Certifications</h2>
      <div className="section-divider" />

      <div className="certs-grid">
        {certs.map((c) => (
          <a key={c.name} className="cert-card" href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="cert-icon">{c.icon}</div>
            <div className="cert-info">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-date">{c.date}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
