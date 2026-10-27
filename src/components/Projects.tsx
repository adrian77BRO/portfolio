import { useState } from 'react'
import { ArrowUpRight, ChevronDown, ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { Filter, Project } from '../types'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeading } from './SectionHeading'

const filters: Filter[] = ['Todos', 'Full-stack', 'Backend', 'IoT']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `project-details-${project.id}`

  return (
    <article className={`project-card ${project.featured ? 'is-featured' : ''}`}>
      <ProjectVisual visual={project.visual} title={project.title} />
      <div className="project-content">
        <div className="project-topline"><span>PROYECTO / {String(index + 1).padStart(2, '0')}</span><span>{project.role}</span></div>
        <div className="project-title-row"><div><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3></div><span className="project-arrow"><ArrowUpRight size={21}/></span></div>
        <p className="project-description">{project.description}</p>
        <div className="tags">{project.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          <button className="project-details-button" type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded(open => !open)}>
            {expanded ? 'Ocultar detalles' : 'Ver detalles'} <ChevronDown className={expanded ? 'rotated' : ''} size={15}/>
          </button>
          <div className="project-external-links">
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" title={`Repositorio de ${project.title}`} aria-label={`Abrir repositorio de ${project.title}`}><GitBranch size={18}/></a>}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" title={`Demo de ${project.title}`} aria-label={`Abrir demostración de ${project.title}`}><ExternalLink size={18}/></a>}
          </div>
        </div>
        {expanded && (
          <div className="project-more" id={detailsId}>
            <strong>Reto técnico</strong><p>{project.challenge}</p>
            <strong>Funcionalidades / aportaciones</strong>
            <ul>{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const filtered = filter === 'Todos' ? projects : projects.filter(project => project.categories.includes(filter))

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <SectionHeading number="02" eyebrow="TRABAJO SELECCIONADO" title="Proyectos que hablan por mí." description="Soluciones en salud, movilidad, geolocalización y gestión. Cada proyecto presenta el problema y lo que desarrollé." aside={<span className="project-count">{String(projects.length).padStart(2, '0')} PROYECTOS</span>}/>
        <div className="project-toolbar" role="group" aria-label="Filtrar proyectos">
          {filters.map(item => <button type="button" key={item} aria-pressed={filter === item} className={`filter-button ${filter === item ? 'selected' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="project-grid" aria-live="polite">
          {filtered.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <div className="projects-note">* Las visualizaciones son ilustraciones de interfaz, no capturas de los proyectos. Sustitúyelas por imágenes reales cuando estén disponibles.</div>
      </div>
    </section>
  )
}
