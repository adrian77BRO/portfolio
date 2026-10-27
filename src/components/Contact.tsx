import { ArrowUpRight, Copy, Download, GitBranch, BriefcaseBusiness, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    if (!profile.email) return
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <SectionHeading number="05" eyebrow="CONTACTO" title="¿Construimos algo juntos?" />
        <div className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy"><span className="contact-status"><span className="availability-pulse"/> ABIERTO A OPORTUNIDADES JUNIOR</span><h3>Hablemos de tu<br/><span className="text-gradient">próximo proyecto.</span></h3><p>Estoy interesado en oportunidades como desarrollador full-stack junior, donde pueda aportar, aprender y construir soluciones de valor.</p>
            {profile.email ? <div className="contact-actions"><a href={`mailto:${profile.email}?subject=Oportunidad%20de%20desarrollo%20full-stack`} className="btn btn-primary"><Send size={17}/> Enviar correo <ArrowUpRight size={16}/></a><button type="button" className="btn btn-secondary" onClick={copyEmail}><Copy size={16}/>{copied ? 'Correo copiado' : 'Copiar correo'}</button></div> : <p className="config-hint">Antes de publicar: agrega tu correo en <code>src/data/portfolio.ts</code> para activar el contacto.</p>}
          </div>
          <div className="contact-methods">
            <div className="contact-method"><span><Mail size={17}/></span><div><small>EMAIL</small><strong>{profile.email || 'Pendiente de configurar'}</strong></div></div>
            <div className="contact-method"><span><MapPin size={17}/></span><div><small>UBICACIÓN</small><strong>{profile.location}</strong></div></div>
            {profile.github && <a className="contact-method social-method" href={profile.github} target="_blank" rel="noreferrer"><span><GitBranch size={17}/></span><div><small>GITHUB</small><strong>Ver repositorios</strong></div><ArrowUpRight size={15}/></a>}
            {profile.linkedin && <a className="contact-method social-method" href={profile.linkedin} target="_blank" rel="noreferrer"><span><BriefcaseBusiness size={17}/></span><div><small>LINKEDIN</small><strong>Ver perfil profesional</strong></div><ArrowUpRight size={15}/></a>}
            {profile.cvUrl && <a className="contact-method social-method" href={profile.cvUrl} target="_blank" rel="noreferrer"><span><Download size={17}/></span><div><small>CURRÍCULUM</small><strong>Descargar CV</strong></div><ArrowUpRight size={15}/></a>}
          </div>
        </div>
      </div>
    </section>
  )
}
