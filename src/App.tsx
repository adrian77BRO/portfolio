import { useEffect } from 'react'
import { ArrowUp, Briefcase, Code2, GitBranch } from 'lucide-react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile } from './data/portfolio'
import { ProjectDetail } from './pages/ProjectDetail'

function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Permite enlaces desde /proyectos/:id a las secciones de la portada.
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const id = decodeURIComponent(hash.slice(1))
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      } else {
        window.scrollTo(0, 0)
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function Home() {
  useEffect(() => {
    document.title = `Portafolio Full-stack | ${profile.name}`
  }, [])

  return <><Hero /><About /><Projects /><Skills /><Experience /><Contact /></>
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link className="footer-logo" to="/#inicio"><Code2 size={20} /><span>portfolio<span className="brand-dot">.</span>dev</span></Link>
        <span>Hecho con React + TypeScript · © {new Date().getFullYear()} {profile.name}</span>
        <div className="footer-socials">
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={19} /></a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={19} /></a>}
          <Link to="/#inicio" aria-label="Volver arriba"><ArrowUp size={19} /></Link>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          <Route path="*" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
