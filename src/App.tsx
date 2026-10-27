import { ArrowUp, Code2, GitBranch, BriefcaseBusiness } from 'lucide-react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile } from './data/portfolio'

function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <a className="footer-logo" href="#inicio">
        <Code2 size={20} />
        <span>portfolio<span className="brand-dot">.</span>dev</span></a><span>Developed and designed by {profile.name} · © {new Date().getFullYear()}</span>
      <div className="footer-socials">
        {profile.github &&
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitBranch size={19} />
          </a>
        }
        {profile.linkedin &&
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness size={19} />
          </a>
        }
        <a href="#inicio" aria-label="Volver arriba">
          <ArrowUp size={19} />
        </a>
      </div>
    </div>
  </footer>
}

export default function App() {
  return <><Navbar /><main><Hero /><About /><Projects /><Skills /><Experience /><Contact /></main><Footer /></>
}
