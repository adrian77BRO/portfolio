import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink, GitBranch, Layers3 } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { ProjectVisual } from '../components/ProjectVisual'
import { caseStudies } from '../data/caseStudies'
import { profile, projects } from '../data/portfolio'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const index = projects.findIndex(item => item.id === id)
  const project = index >= 0 ? projects[index] : undefined
  const study = project ? caseStudies[project.id] : undefined

  useEffect(() => {
    document.title = project ? `${project.title} | Portafolio de ${profile.name}` : `Proyecto no encontrado | ${profile.name}`
  }, [project])

  if (!project || !study) {
    return (
      <section className="detail-not-found container" aria-labelledby="detail-not-found-title">
        <span className="detail-overline">ERROR / 404</span>
        <h1 id="detail-not-found-title">Proyecto no encontrado.</h1>
        <p>La página solicitada no existe. Puedes consultar los proyectos disponibles en el portafolio.</p>
        <Link className="btn btn-primary" to="/#proyectos"><ArrowLeft size={17} /> Volver a proyectos</Link>
      </section>
    )
  }

  const nextProject = projects[(index + 1) % projects.length]

  return (
    <article className="detail-page">
      <div className="detail-bg" aria-hidden="true" />
      <div className="container detail-container">
        <nav className="detail-breadcrumb" aria-label="Ruta de navegación">
          <Link to="/#proyectos">Proyectos</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">{project.title}</span>
        </nav>

        <header className="detail-header">
          <div className="detail-header-main">
            <span className="detail-overline"><span className="detail-overline-dot" /> CASO DE ESTUDIO / {String(index + 1).padStart(2, '0')}</span>
            <h1>{project.title}<span className="gradient-period">.</span></h1>
            <p className="detail-lead">{project.description}</p>
            <div className="detail-header-tags">
              {project.categories.map(category => <span className="detail-category" key={category}>{category}</span>)}
              <span className="detail-role-tag">{project.role}</span>
            </div>
          </div>
          <div className="detail-header-actions">
            <Link className="btn btn-secondary" to="/#proyectos"><ArrowLeft size={17} /> Volver al portafolio</Link>
            {project.repositoryUrl && <a className="btn btn-outline" href={project.repositoryUrl} rel="noreferrer" target="_blank"><GitBranch size={17} /> Código <ExternalLink size={14} /></a>}
            {project.demoUrl && <a className="btn btn-primary" href={project.demoUrl} rel="noreferrer" target="_blank">Ver demo <ArrowUpRight size={17} /></a>}
          </div>
        </header>

        <div className="detail-visual-frame">
          {study.screenshots.length > 0 ? (
            <img className="detail-real-cover" src={study.screenshots[0].src} alt={study.screenshots[0].alt} />
          ) : (
            <ProjectVisual visual={project.visual} title={project.title} />
          )}
          <div className="detail-visual-footnote">
            <Layers3 size={15} aria-hidden="true" />
            {study.screenshots.length > 0 ? 'Captura del proyecto' : 'Visualización conceptual · No es una captura de la aplicación real'}
          </div>
        </div>

        <div className="detail-layout">
          <div className="detail-article">
            <section className="detail-section" aria-labelledby="detail-overview-title">
              <span className="detail-section-number">01 / CONTEXTO</span>
              <h2 id="detail-overview-title">¿De qué trata el proyecto?</h2>
              <p>{study.overview}</p>
              <div className="detail-challenge-box">
                <span className="detail-challenge-label">EL DESAFÍO</span>
                <p>{project.challenge}</p>
              </div>
            </section>

            <section className="detail-section" aria-labelledby="detail-role-title">
              <span className="detail-section-number">02 / RESPONSABILIDADES</span>
              <h2 id="detail-role-title">Mi participación</h2>
              <p>Estas son las funcionalidades y áreas del proyecto en las que participé:</p>
              <ul className="detail-contributions">
                {project.contributions.map(contribution => (
                  <li key={contribution}><CheckCircle2 size={19} aria-hidden="true" /><span>{contribution}</span></li>
                ))}
              </ul>
            </section>

            <section className="detail-section" aria-labelledby="detail-architecture-title">
              <span className="detail-section-number">03 / DISEÑO TÉCNICO</span>
              <h2 id="detail-architecture-title">Arquitectura del sistema</h2>
              <p>Un esquema conceptual de los componentes principales y su relación. Puedes ajustarlo a la arquitectura exacta de tu implementación.</p>
              <ol className="detail-architecture" aria-label="Componentes de la arquitectura conceptual">
                {study.architecture.map((step, stepIndex) => (
                  <li className="detail-architecture-step" key={step.name}>
                    <span className="detail-step-index">{String(stepIndex + 1).padStart(2, '0')}</span>
                    <strong>{step.name}</strong>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ol>
              <p className="detail-architecture-note">* Diagrama simplificado y conceptual; no implica tecnologías o integraciones no confirmadas.</p>
            </section>

            <section className="detail-section" aria-labelledby="detail-technical-title">
              <span className="detail-section-number">04 / EXPERIENCIA TÉCNICA</span>
              <h2 id="detail-technical-title">Aspectos técnicos destacados</h2>
              <div className="detail-highlights">
                {study.highlights.map((highlight, highlightIndex) => (
                  <div className="detail-highlight" key={highlight.title}>
                    <span className="detail-highlight-number">{String(highlightIndex + 1).padStart(2, '0')}</span>
                    <div><h3>{highlight.title}</h3><p>{highlight.description}</p></div>
                  </div>
                ))}
              </div>
            </section>

            {study.solvedChallenges && study.solvedChallenges.length > 0 && (
              <section className="detail-section" aria-labelledby="detail-solutions-title">
                <span className="detail-section-number">05 / RESOLUCIÓN DE PROBLEMAS</span>
                <h2 id="detail-solutions-title">Retos que resolví</h2>
                {study.solvedChallenges.map((item, challengeIndex) => (
                  <div className="detail-solved-challenge" key={`${item.problem}-${challengeIndex}`}>
                    <h3>{item.problem}</h3>
                    <p><strong>¿Cómo lo abordé?</strong> {item.solution}</p>
                    <p><strong>Resultado:</strong> {item.result}</p>
                  </div>
                ))}
              </section>
            )}

            {study.screenshots.length > 0 && (
              <section className="detail-section" aria-labelledby="detail-gallery-title">
                <span className="detail-section-number">{study.solvedChallenges?.length ? '06' : '05'} / EVIDENCIA VISUAL</span>
                <h2 id="detail-gallery-title">Capturas del proyecto</h2>
                <div className="detail-gallery">
                  {study.screenshots.map((screenshot, screenshotIndex) => (
                    <figure key={`${screenshot.src}-${screenshotIndex}`}>
                      <a href={screenshot.src} target="_blank" rel="noreferrer" aria-label={`Ver imagen completa: ${screenshot.alt}`}>
                        <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                      </a>
                      {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="detail-aside" aria-label="Ficha del proyecto">
            <div className="detail-facts">
              <span className="detail-aside-title">FICHA DEL PROYECTO</span>
              <div className="detail-fact"><span>Proyecto</span><strong>{project.title}</strong></div>
              <div className="detail-fact"><span>Mi rol</span><strong>{project.role}</strong></div>
              <div className="detail-fact"><span>Área</span><strong>{project.eyebrow}</strong></div>
              <div className="detail-fact detail-fact-last"><span>Tecnologías y conceptos</span>
                <div className="tags">{project.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
              </div>
              {(project.demoUrl || project.repositoryUrl) && (
                <div className="detail-sidebar-links">
                  {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><GitBranch size={17} /> Repositorio <ArrowUpRight size={15} /></a>}
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Demostración <ArrowUpRight size={15} /></a>}
                </div>
              )}
            </div>
          </aside>
        </div>

        <footer className="detail-next">
          <div><span className="detail-section-number">CONTINÚA EXPLORANDO</span><h2>Conoce mi siguiente proyecto.</h2></div>
          <Link className="detail-next-link" to={`/proyectos/${nextProject.id}`}><span><small>SIGUIENTE PROYECTO</small><strong>{nextProject.title}</strong></span><ArrowRight size={22} aria-hidden="true" /></Link>
        </footer>
      </div>
    </article>
  )
}
