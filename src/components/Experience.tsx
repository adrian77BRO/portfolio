import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <div className="container">
        <SectionHeading number="04" eyebrow="TRAYECTORIA" title="Experiencia aplicada." description="Experiencia profesional y proyectos técnicos que me han permitido trabajar en distintas áreas del desarrollo de software." />
        <div className="timeline">
          <article className="timeline-entry"><div className="timeline-track"><span className="timeline-icon"><BriefcaseBusiness size={19}/></span></div><div className="timeline-body"><div className="timeline-meta"><span>EXPERIENCIA PROFESIONAL</span><span>Full-stack</span></div><h3>Desarrollador full-stack</h3><h4>Salud Confiable · Desarrollos Inteligentes Tecnologías y Software</h4><p>Participación en una aplicación móvil de gestión médica, con funcionalidades para pacientes, citas, consultas e historial clínico.</p><div className="timeline-chips"><span>Aplicaciones móviles</span><span>Servicios backend</span><span>Gestión de datos</span></div></div></article>
          <article className="timeline-entry"><div className="timeline-track"><span className="timeline-icon"><GraduationCap size={20}/></span></div><div className="timeline-body"><div className="timeline-meta"><span>PROYECTOS ACADÉMICOS / PERSONALES</span><span>Backend & Full-stack</span></div><h3>Desarrollo de sistemas y soluciones técnicas</h3><h4>GSoft · TaxiTracker · PulsePro · NarraMap</h4><p>Desarrollo de soluciones con microservicios, sistemas de gestión, geolocalización, IoT y visualización de información.</p><div className="timeline-chips"><span>APIs REST</span><span>Arquitectura</span><span>IoT</span><span>Trabajo en equipo</span></div></div></article>
        </div>
      </div>
    </section>
  )
}
