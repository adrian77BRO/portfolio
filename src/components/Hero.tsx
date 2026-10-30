import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react'
import { profile } from '../data/portfolio'

/** Primera pantalla del portafolio: nombre, rol, fotografía y contacto. */
export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-aurora hero-aurora-violet" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-cyan" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-blue" aria-hidden="true" />

      <div className="container hero-intro">
        <div className="hero-intro-copy">
          <h1 className="hero-name" id="hero-title">Hola soy <span className="text-gradient">{profile.name}</span></h1>
          <p className="hero-role">Soy {profile.role.toLowerCase()}</p>
          <div className="hero-intro-actions">
            <a className="btn btn-primary" href="#contacto">Contáctame <ArrowUpRight size={18} /></a>
          </div>
        </div>

        <div className="hero-portrait" role="img" aria-label={profile.photoUrl && !photoFailed ? `Fotografía de ${profile.name}` : 'Espacio reservado para tu fotografía'}>
          {profile.photoUrl && !photoFailed ? (
            <img src={profile.photoUrl} alt="" onError={() => setPhotoFailed(true)} />
          ) : (
            <div className="hero-portrait-placeholder">
              <Camera size={40} strokeWidth={1.5} aria-hidden="true" />
              <span>Tu fotografía</span>
            </div>
          )}
        </div>
      </div>

      <a className="hero-scroll" href="#presentacion" aria-label="Desplazarse a la presentación profesional">
        <ArrowDown size={16} aria-hidden="true" /> <span>DESLIZA PARA EXPLORAR</span>
      </a>
    </section>
  )
}
