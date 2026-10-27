import { ArrowUpRight, Code2, Database, Smartphone, Workflow } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const features = [
  { icon: <Code2 size={19} />, title: 'Experiencia frontend', copy: 'Interfaces con React, React Native y TypeScript.' },
  { icon: <Database size={19} />, title: 'Lógica y datos', copy: 'APIs REST, autenticación y bases de datos relacionales.' },
  { icon: <Smartphone size={19} />, title: 'Apps móviles', copy: 'Proyectos con Kotlin, Compose y Expo.' },
  { icon: <Workflow size={19} />, title: 'Arquitectura', copy: 'Experiencia desarrollando microservicios con NestJS.' },
]

export function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container">
        <SectionHeading number="01" eyebrow="SOBRE MÍ" title="Más allá de escribir código." description="Me interesa entender el problema, diseñar una solución y llevarla desde la idea hasta una implementación funcional." />
        <div className="about-grid">
          <div className="about-story panel">
            <span className="about-mark">“</span>
            <p>Disfruto desarrollar soluciones que conectan <em>personas, procesos y tecnología.</em> He trabajado en proyectos de salud, movilidad, monitoreo IoT y sistemas empresariales.</p>
            <p>Mi enfoque combina el desarrollo de interfaces con la construcción de servicios backend, siempre buscando código mantenible, claridad y aprendizaje continuo.</p>
            <a className="inline-link" href="#contacto">¿Trabajamos juntos? <ArrowUpRight size={17} /></a>
          </div>
          <div className="about-highlights">
            {features.map(feature => (
              <article className="feature-item" key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
