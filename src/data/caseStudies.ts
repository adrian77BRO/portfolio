/**
 * Detalles adicionales de los proyectos.
 * Los diagramas son CONCEPTUALES y no documentación definitiva de la implementación.
 * Añade capturas reales solo si tienes permiso para publicarlas.
 */

export type ArchitectureStep = {
  name: string
  description: string
}

export type ProjectScreenshot = {
  src: string
  alt: string
  caption?: string
}

export type CaseStudy = {
  overview: string
  architecture: ArchitectureStep[]
  /** Decisiones o áreas técnicas respaldadas por lo que se conoce del proyecto. */
  highlights: { title: string; description: string }[]
  /** Añade imágenes locales en public/projects/{id}/ y sus rutas aquí. */
  screenshots: ProjectScreenshot[]
  /** Completa solo con problemas y resultados reales que puedas explicar. */
  solvedChallenges?: { problem: string; solution: string; result: string }[]
}

export const caseStudies: Record<string, CaseStudy> = {
  'salud-confiable': {
    overview: 'Proyecto de gestión médica en el que participé como desarrollador full-stack. La aplicación reúne funcionalidades relacionadas con el registro de pacientes, reservación de citas, consultas y monitoreo del historial clínico.',
    architecture: [
      { name: 'Aplicación móvil', description: 'Interacción con pacientes, consultas y citas' },
      { name: 'Servicios de aplicación', description: 'Reglas y operaciones del sistema' },
      { name: 'Información clínica', description: 'Datos de pacientes e historiales' },
    ],
    highlights: [
      { title: 'Flujos de atención', description: 'Gestión de pacientes, consultas y reservaciones dentro de una experiencia conectada.' },
      { title: 'Trabajo full-stack', description: 'Participación en funcionalidades que relacionan la aplicación móvil con los datos del sistema.' },
    ],
    screenshots: [
      { src: '/projects/salud-confiable/1.jpg', alt: 'Landing page de Salud Confiable', caption: 'Landing page de Salud Confiable' },
      { src: '/projects/salud-confiable/2.jpg', alt: 'Inicio de sesión de la aplicación móvil', caption: 'Inicio de sesión de la aplicación móvil' },
      { src: '/projects/salud-confiable/3.jpg', alt: 'Menú de la aplicación móvil', caption: 'Menú de la aplicación móvil' },
      { src: '/projects/salud-confiable/4.jpg', alt: 'Registro y listado de pacientes', caption: 'Registro y listado de pacientes' },
      { src: '/projects/salud-confiable/5.jpg', alt: 'Historial clínico del paciente', caption: 'Historial clínico del paciente' },
      { src: '/projects/salud-confiable/6.jpg', alt: 'Calendario de citas', caption: 'Calendario de citas' },
    ],
  },
  narramap: {
    overview: 'Plataforma de experiencias geolocalizadas, organizada mediante servicios para usuarios, autenticación, eventos y rutas. Esta experiencia destaca mi trabajo con APIs y persistencia de datos.',
    architecture: [
      { name: 'Aplicaciones cliente', description: 'Consumo de operaciones del sistema' },
      { name: 'Servicios NestJS', description: 'Usuarios, autenticación, eventos y rutas' },
      { name: 'Prisma', description: 'Acceso a datos y modelos' },
      { name: 'PostgreSQL', description: 'Persistencia de la información' },
    ],
    highlights: [
      { title: 'Servicios organizados por dominio', description: 'Separación de las funcionalidades de usuarios, autenticación, eventos y rutas.' },
      { title: 'Persistencia relacional', description: 'Modelos y consultas desarrollados con Prisma y PostgreSQL.' },
      { title: 'Control de acceso', description: 'Autenticación mediante JWT para operaciones protegidas.' },
    ],
    screenshots: [
      { src: '/projects/narramap/1.jpg', alt: 'Presentación de la aplicación', caption: 'Presentación de la aplicación' },
      { src: '/projects/narramap/2.png', alt: 'Mapa de NarraMap con ecos, eventos y negocios', caption: 'Mapa de NarraMap con ecos, eventos y negocios' },
      { src: '/projects/narramap/3.png', alt: 'Mapa con simbología de emociones', caption: 'Mapa con simbología de emociones' },
      { src: '/projects/narramap/4.png', alt: 'Perfil del usuario', caption: 'Perfil del usuario' },
      { src: '/projects/narramap/5.jpg', alt: 'Estados emocionales del usuario (ecos)', caption: 'Estados emocionales del usuario (ecos)' },
      { src: '/projects/narramap/6.png', alt: 'Eventos programados', caption: 'Eventos programados' },
      { src: '/projects/narramap/7.png', alt: 'Eco publicado', caption: 'Eco publicado' },
      { src: '/projects/narramap/8.png', alt: 'Publicación de estado emocional', caption: 'Publicación de estado emocional' },
      { src: '/projects/narramap/9.jpg', alt: 'Publicación de estado emocional 2', caption: 'Publicación de estado emocional 2' },
      { src: '/projects/narramap/10.png', alt: 'Publicación de evento', caption: 'Publicación de evento' },
      { src: '/projects/narramap/11.png', alt: 'Publicación de evento 2', caption: 'Publicación de evento 2' },
      { src: '/projects/narramap/12.png', alt: 'Registro de un negocio', caption: 'Registro de un negocio' },
      { src: '/projects/narramap/13.jpg', alt: 'Información del negocio', caption: 'Información del negocio' },
      { src: '/projects/narramap/14.png', alt: 'Información del negocio 2', caption: 'Información del negocio 2' },
      { src: '/projects/narramap/15.png', alt: 'Calificación del negocio', caption: 'Calificación del negocio' },
    ],
    solvedChallenges: [
      {
        problem: 'Formato de fechas en eventos con Prisma',
        solution: 'Revisé la validación del campo DateTime y ajusté el valor enviado para utilizar una fecha ISO 8601 completa.',
        result: 'El servicio pudo procesar el campo de fecha en el formato esperado por Prisma.',
      },
    ],
  },
  taxitracker: {
    overview: 'Sistema para gestionar unidades de taxi y examinar información relacionada con recorridos, ubicación y calidad de conducción. Mi participación estuvo centrada en el backend.',
    architecture: [
      { name: 'Ubicaciones y sensores', description: 'Origen de información de recorridos y conducción' },
      { name: 'Servicios backend', description: 'Registro y procesamiento de información' },
      { name: 'Almacenamiento', description: 'Conservación de los datos del sistema' },
      { name: 'Monitoreo y estadísticas', description: 'Consulta de ubicación, viajes e indicadores' },
    ],
    highlights: [
      { title: 'Gestión de actores', description: 'Operaciones de registro de concesionarios y conductores.' },
      { title: 'Datos geolocalizados', description: 'Funcionalidades relacionadas con el seguimiento de vehículos.' },
      { title: 'Información de conducción', description: 'Apoyo a estadísticas de viajes, estilo de conducción y demanda.' },
    ],
    screenshots: [],
  },
  pulsepro: {
    overview: 'Proyecto de monitoreo de signos vitales en el que participé tanto en desarrollo full-stack como en la coordinación del trabajo. Permite consultar información de pacientes y monitoreos.',
    architecture: [
      { name: 'Sensores', description: 'Fuente de las mediciones de signos vitales' },
      { name: 'Servicios de aplicación', description: 'Gestión de pacientes y registros de monitoreo' },
      { name: 'Historial', description: 'Consulta de mediciones registradas' },
      { name: 'Interfaz de monitoreo', description: 'Visualización de información para seguimiento' },
    ],
    highlights: [
      { title: 'Visualización de mediciones', description: 'Presentación y consulta de datos relacionados con los signos vitales.' },
      { title: 'Seguimiento histórico', description: 'Organización de información de monitoreos asociados a pacientes.' },
      { title: 'Coordinación', description: 'Participación en la organización y seguimiento de las actividades del proyecto.' },
    ],
    screenshots: [],
  },
  gsoft: {
    overview: 'Sistema de administración de gimnasios orientado a suscripciones, rutinas, registro de asistencia y seguimiento de membresías. Participé en el desarrollo backend.',
    architecture: [
      { name: 'Interfaz de gestión', description: 'Operaciones de administración del gimnasio' },
      { name: 'Backend', description: 'Lógica de membresías, rutinas y asistencias' },
      { name: 'Base de datos', description: 'Registros de miembros y suscripciones' },
    ],
    highlights: [
      { title: 'Reglas de negocio', description: 'Funcionalidades relacionadas con membresías y planes de suscripción.' },
      { title: 'Registro operativo', description: 'Gestión de las asistencias de los clientes.' },
      { title: 'Seguimiento deportivo', description: 'Organización de rutinas y planes de entrenamiento.' },
    ],
    screenshots: [],
  },
}
