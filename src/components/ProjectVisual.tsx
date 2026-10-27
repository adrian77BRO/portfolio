import { Activity, ArrowUpRight, CalendarCheck2, CheckCircle2, Dumbbell, HeartPulse, MapPin, Navigation, Route, Stethoscope, TrendingUp, Users } from 'lucide-react'
import type { Project } from '../types'

export function ProjectVisual({ visual, title }: Pick<Project, 'visual' | 'title'>) {
  return (
    <div className={`project-art art-${visual}`} aria-label={`Vista conceptual de ${title}, no es una captura de la aplicación real`}>
      <span className="art-label">VISTA CONCEPTUAL</span>
      {visual === 'medical' && (
        <div className="medical-preview">
          <div className="medical-side"><span className="mini-logo"><Stethoscope size={19} /></span><span className="tiny-icon active" /><span className="tiny-icon" /><span className="tiny-icon" /></div>
          <div className="medical-main">
            <div className="mock-app-bar"><span>Dashboard <span className="muted-text">/ Resumen</span></span><span className="mock-user"><Users size={13} /></span></div>
            <strong>Bienvenido de nuevo <span>👋</span></strong><div className="muted-text mini-subtitle">Panel de gestión médica</div>
            <div className="mock-med-cards">
              <div><span><Users size={13} /> Pacientes</span><strong>128</strong><small>+12 este mes</small></div>
              <div><span><CalendarCheck2 size={13} /> Citas</span><strong>24</strong><small>Próximas</small></div>
              <div><span><HeartPulse size={13} /> Consultas</span><strong>86</strong><small>Registradas</small></div>
            </div>
            <div className="mock-schedule"><div className="mock-schedule-header"><span>Próximas citas</span><span>Ver todas <ArrowUpRight size={10} /></span></div><div className="mock-record"><div className="mock-record-avatar">P</div><span><strong>Consulta general</strong><small>09:30 AM · Confirmada</small></span><CheckCircle2 size={14} /></div><div className="mock-record second"><div className="mock-record-avatar">M</div><span><strong>Seguimiento</strong><small>11:00 AM · Pendiente</small></span></div></div>
          </div>
        </div>
      )}
      {visual === 'map' && (
        <div className="map-preview">
          <div className="map-grid-lines" /><span className="map-road road-1" /><span className="map-road road-2" /><span className="map-road road-3" />
          <div className="map-popover"><span className="map-popover-icon"><MapPin size={16} /></span><span><strong>Evento cercano</strong><small>Descubre experiencias</small></span></div>
          <span className="map-point point-one"><MapPin size={15} /></span><span className="map-point point-two"><MapPin size={13} /></span><span className="map-point point-three"><MapPin size={15} /></span><span className="map-point point-four"><MapPin size={13} /></span>
          <svg className="map-connection" viewBox="0 0 300 150" aria-hidden="true"><path d="M25 115 C95 135 100 28 174 65 S245 105 275 23" fill="none" stroke="#62d6eb" strokeWidth="2.5" strokeDasharray="5 6" /></svg>
          <div className="map-corner"><Navigation size={13} /> Explorar mapa</div>
        </div>
      )}
      {visual === 'taxi' && (
        <div className="taxi-preview"><div className="taxi-top"><span><Navigation size={14} /> Flota activa</span><span className="live-label">● En línea</span></div><div className="taxi-map"><div className="taxi-lane taxi-lane-1" /><div className="taxi-lane taxi-lane-2" /><div className="taxi-lane taxi-lane-3" /><span className="car-pin car-one">🚕</span><span className="car-pin car-two">🚕</span><span className="car-pin car-three">🚕</span><span className="tracking-line" /></div><div className="taxi-bottom"><span><Route size={15} /> Rutas registradas</span><strong>08 <TrendingUp size={13} /></strong></div></div>
      )}
      {visual === 'pulse' && (
        <div className="pulse-preview"><div className="pulse-top"><span><HeartPulse size={16} /> Monitoreo de signos</span><span className="live-label">● Activo</span></div><div className="pulse-number"><strong>72</strong><span>BPM<br /><small>Ritmo cardíaco</small></span></div><svg className="pulse-wave" viewBox="0 0 420 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 78 H50 L70 75 L90 86 L109 22 L126 113 L145 67 L165 78 H215 L235 75 L253 86 L272 22 L288 113 L309 67 L329 78 H420" fill="none" stroke="#56e0c5" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" /><path d="M0 78 H50 L70 75 L90 86 L109 22 L126 113 L145 67 L165 78 H215 L235 75 L253 86 L272 22 L288 113 L309 67 L329 78 H420 V130 H0Z" fill="url(#pulseFill)" /><defs><linearGradient id="pulseFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#56e0c5" stopOpacity=".13" /><stop offset="1" stopColor="#56e0c5" stopOpacity="0" /></linearGradient></defs></svg><div className="pulse-footer"><Activity size={15} /> Seguimiento continuo</div></div>
      )}
      {visual === 'gym' && (
        <div className="gym-preview"><div className="gym-title"><span className="gym-icon"><Dumbbell size={16} /></span><div><strong>Panel de membresías</strong><small>Vista general</small></div></div><div className="gym-stat"><span>Miembros activos</span><strong>248 <span className="growth">↗ 8.2%</span></strong></div><div className="gym-bars">{[31, 51, 38, 63, 54, 78, 67, 88, 76, 96].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><div className="gym-bottom"><span><Users size={14} /> Asistencias</span><span>Esta semana</span></div></div>
      )}
    </div>
  )
}
