import { Braces, Database, Monitor, Smartphone, Terminal } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const icons = [<Monitor size={22} />, <Terminal size={22}/>, <Database size={22}/>, <Smartphone size={22}/>]

export function Skills() {
  return (
    <section id="tecnologias" className="section skills-section">
      <div className="container">
        <SectionHeading number="03" eyebrow="STACK TECNOLÓGICO" title="Tecnología con propósito." description="Herramientas que he utilizado para desarrollar interfaces, servicios, persistencia de datos y aplicaciones móviles." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => <article className="skill-card panel" key={group.title}>
            <div className="skill-card-top"><span className="skill-icon">{icons[index]}</span><span className="skill-number">0{index + 1}</span></div>
            <h3>{group.title}</h3><p>{group.detail}</p>
            <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
        <div className="stack-banner"><span><Braces size={21} /> Mi enfoque</span><p>Más importante que conocer una herramienta es saber cuándo utilizarla, cómo estructurar la solución y cómo mantenerla.</p></div>
      </div>
    </section>
  )
}
