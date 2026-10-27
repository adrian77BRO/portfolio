import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Camera, Check, ChevronRight, Code2, Database, GitBranch, Layers3, Server } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="availability"><span className="availability-pulse" /> Disponible para oportunidades junior</div>
          <div className="hero-kicker"><span className="mono-purple">&lt;</span> HI, I'M A FULL-STACK DEVELOPER <span className="mono-purple">/&gt;</span></div>
          <h1 className="hero-name">Adrián Pérez</h1>
          <p className="hero-role"><span className="hero-role-bar" aria-hidden="true" />{profile.role}</p>
          <p className="hero-statement">Construyo ideas en <span className="text-gradient">soluciones digitales</span><span className="gradient-period">.</span></p>
          <p className="hero-description">Me especializo en conectar interfaces, APIs y bases de datos para crear productos web y móviles funcionales. Me entusiasma convertir problemas reales en software útil.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#proyectos">Explorar proyectos <ArrowUpRight size={18} /></a>
            <a className="btn btn-secondary" href="#contacto">Contáctame <ArrowRight size={18} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatar">{profile.shortName}</div>
            <div><strong>{profile.role}</strong><span>{profile.location} · Web, mobile & backend</span></div>
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Ver GitHub"><GitBranch size={21} /></a>}
          </div>
        </div>
        <div className="hero-visual" aria-label="Ilustración conceptual del flujo de una aplicación full-stack">
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="float-chip chip-backend"><Server size={15} /> Backend API <span className="chip-dot" /></div>
          <div className="float-chip chip-database"><Database size={15} /> PostgreSQL</div>
          <div className="code-window">
            <div className="code-window-top"><div className="window-dots"><i /><i /><i /></div><span><Code2 size={13} /> developer.ts</span><Braces size={15} /></div>
            <div className="code-lines" aria-label="Fragmento de código de ejemplo">
              <div><span className="ln">01</span><span className="code-purple">interface</span> <span className="code-blue">Developer</span> {'{'}</div>
              <div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="code-teal">string</span>;</div>
              <div><span className="ln">03</span>&nbsp;&nbsp;stack: <span className="code-teal">string[]</span>;</div>
              <div><span className="ln">04</span>&nbsp;&nbsp;focus: <span className="code-teal">'impact'</span>;</div>
              <div><span className="ln">05</span>{'}'}</div>
              <div className="code-spacer"><span className="ln">06</span></div>
              <div><span className="ln">07</span><span className="code-purple">const</span> me = {'{'}</div>
              <div><span className="ln">08</span>&nbsp;&nbsp;name: <span className="code-green">'{profile.name}'</span>,</div>
              <div><span className="ln">09</span>&nbsp;&nbsp;stack: [<span className="code-green">'React'</span>, <span className="code-green">'Node'</span>,  <span className="code-green">'SQL'</span>],</div>
              <div><span className="ln">10</span>&nbsp;&nbsp;focus: <span className="code-green">'impact'</span>,</div>
              <div><span className="ln">11</span>{'}'}</div>
              <div><span className="ln">12</span><span className="code-muted">// always learning_</span><span className="cursor-block" /></div>
            </div>
            <div className="code-bottom"><span><span className="status-dot" /> build successful</span><span>UTF-8 &nbsp; TSX</span></div>
          </div>
          <div className="hero-photo-card" aria-label={profile.photoUrl ? `Fotografía de ${profile.name}` : 'Espacio para tu fotografía personal'}>
            {/*<div className="hero-photo-head"><span className="hero-photo-dot" /> ME <span className="hero-photo-head-line" /></div>*/}
            {profile.photoUrl && !photoFailed ? (
              <img className="hero-photo-image" src={profile.photoUrl} alt={`Retrato de ${profile.name}`} onError={() => setPhotoFailed(true)} />
            ) : (
              <div className="hero-photo-empty"><div className="hero-photo-icon"><Camera size={32} strokeWidth={1.55} /></div><strong>Tu fotografía aquí</strong><span>Retrato profesional</span></div>
            )}
            {/*<div className="hero-photo-caption"><span>FULL-STACK DEV</span><strong>{profile.name}</strong></div>*/}
          </div>
          <div className="stack-card">
            <span className="stack-card-icon"><Layers3 size={20} /></span>
            <div><strong>Full-stack mindset</strong><span>Frontend + Backend + Data</span></div>
            <span className="stack-check"><Check size={14} /></span>
          </div>
          <div className="tech-bubble tech-bubble-one">{`{ }`}</div><div className="tech-bubble tech-bubble-two"><ChevronRight size={19} /></div>
        </div>
      </div>
      <div className="container hero-footer"><span><ArrowDown size={14} /> DESLIZA PARA EXPLORAR</span><span>PORTAFOLIO PERSONAL / 2026</span></div>
    </section>
  )
}