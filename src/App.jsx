import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Extracurricular from './components/Extracurricular'
import Contact from './components/Contact'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <div className="hero-bg" />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Extracurricular />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built with React · Akshat Garg © 2025</p>
      </footer>
    </>
  )
}
