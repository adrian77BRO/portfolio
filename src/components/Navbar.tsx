import { useEffect, useState } from 'react'
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import { Link } from 'react-router'

const links = [
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Tecnologías', href: '/#tecnologias' },
  { label: 'Experiencia', href: '/#experiencia' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Navegación principal">
        <Link className="brand" to="/#inicio" onClick={() => setIsOpen(false)} aria-label="Ir al inicio">
          <span className="brand-mark"><Code2 size={19} strokeWidth={2.5} /></span>
          <span>portfolio<span className="brand-dot">.</span>dev</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`} id="mobile-navigation">
          {links.map(link => (
            <Link to={link.href} key={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
          <Link className="nav-mobile-contact" to="/#contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>

        <Link className="nav-contact btn btn-outline btn-sm" to="/#contacto">Hablemos <ArrowUpRight size={16} /></Link>
        <button
          type="button"
          className="mobile-toggle"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(open => !open)}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
    </header>
  )
}
