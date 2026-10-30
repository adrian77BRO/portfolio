import type { Profile, Project } from '../types'

// EDITA AQUÍ TUS DATOS. No se inventaron correos, perfiles ni enlaces.
export const profile: Profile = {
  name: 'Adrián Pérez',
  shortName: 'AM',
  role: 'Desarrollador de software full-stack',
  photoUrl: '/perfil.png', // Agrega tu foto en public/foto-perfil.jpg y cambia el valor a '/foto-perfil.jpg'
  email: 'adriagon613@gmail.com', // Ejemplo: 'hola@tudominio.com'
  github: 'https://github.com/adrian77BRO', // Ejemplo: 'https://github.com/tuusuario'
  linkedin: 'https://www.linkedin.com/in/adri%C3%A1n-mauricio-hern%C3%A1ndez-p%C3%A9rez-ab929331b/', // Ejemplo: 'https://www.linkedin.com/in/tuusuario/'
  cvUrl: '/cv_adrimau.pdf', // Coloca tu archivo en public/cv.pdf y cambia el valor a '/cv.pdf'
  location: 'CDMX, México',
}

// Datos basados en los proyectos que describiste anteriormente.
// Ajusta descripciones y URLs para reflejar tu contribución exacta.
export const projects: Project[] = [
  {
    id: 'salud-confiable',
    title: 'Salud Confiable',
    eyebrow: 'Aplicación móvil · Salud',
    role: 'Desarrollador full-stack',
    categories: ['Full-stack'],
    description: 'Aplicación de gestión médica que integra pacientes, consultas, reservación de citas e historial clínico en un mismo flujo.',
    challenge: 'Organizar los procesos de atención médica y conectar la experiencia móvil con servicios y datos del sistema.',
    contributions: ['Gestión de pacientes y consultas', 'Reservación y seguimiento de citas', 'Consulta de historial clínico'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MySQL', 'REST API'],
    visual: 'medical',
    featured: true,
    repositoryUrl: 'https://github.com/adrian77BRO/salud-confiable',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.saludconfiable.app',
  },
  {
    id: 'narramap',
    title: 'NarraMap',
    eyebrow: 'Microservicios · Geolocalización',
    role: 'Desarrollo backend',
    categories: ['Backend'],
    description: 'Plataforma de experiencias geolocalizadas con servicios independientes para usuarios, eventos, rutas y negocios.',
    challenge: 'Diseñar servicios modulares, persistencia de datos y autenticación para recursos relacionados con ubicaciones.',
    contributions: ['APIs REST con NestJS', 'Modelado y consultas con Prisma y PostgreSQL', 'Autenticación JWT y módulos separados'],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT'],
    visual: 'map',
    featured: true,
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    id: 'taxitracker',
    title: 'TaxiTracker',
    eyebrow: 'Movilidad · Sensores',
    role: 'Desarrollo backend',
    categories: ['Backend', 'IoT'],
    description: 'Sistema para monitorear taxis, rutas y calidad de conducción mediante información geolocalizada y sensores.',
    challenge: 'Integrar la información de recorridos y comportamiento de conducción para su seguimiento y análisis.',
    contributions: ['Registro de concesionarios y conductores', 'Monitoreo con geolocalización y sensores', 'Estadísticas de viajes y zonas de demanda'],
    technologies: ['Backend', 'Geolocalización', 'IoT', 'Bases de datos'],
    visual: 'taxi',
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    id: 'pulsepro',
    title: 'PulsePro',
    eyebrow: 'Salud · Monitoreo',
    role: 'Full-stack y coordinación de proyecto',
    categories: ['Full-stack', 'IoT'],
    description: 'Sistema de monitoreo de signos vitales que reúne información de mediciones y facilita su seguimiento.',
    challenge: 'Construir una solución integral para consultar información de monitoreo de manera organizada.',
    contributions: ['Desarrollo de componentes full-stack', 'Visualización de datos de signos vitales', 'Coordinación y seguimiento del proyecto'],
    technologies: ['Full-stack', 'IoT', 'Visualización de datos'],
    visual: 'pulse',
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    id: 'gsoft',
    title: 'GSoft',
    eyebrow: 'Gestión · Fitness',
    role: 'Desarrollador backend',
    categories: ['Backend'],
    description: 'Sistema de administración de gimnasios, membresías, asistencias, rutinas y suscripciones.',
    challenge: 'Representar reglas de negocio para un servicio de membresías y operaciones diarias.',
    contributions: ['Gestión de membresías y suscripciones', 'Registro de asistencias', 'Seguimiento de rutinas'],
    technologies: ['Backend', 'APIs REST', 'Bases de datos'],
    visual: 'gym',
    repositoryUrl: '',
    demoUrl: '',
  },
]

export const skillGroups = [
  { title: 'Frontend', detail: 'Interfaces web y móviles', skills: ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'React Native'] },
  { title: 'Backend', detail: 'Servicios y lógica de negocio', skills: ['Node.js', 'NestJS', 'Express', 'Flask', 'APIs REST', 'JWT'] },
  { title: 'Bases de datos', detail: 'Modelado y persistencia', skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Prisma'] },
  { title: 'Mobile & tools', detail: 'Aplicaciones e integraciones', skills: ['Kotlin', 'Jetpack Compose', 'Git / GitHub', 'MQTT', 'Firebase'] },
]
