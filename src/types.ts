export type Filter = 'Todos' | 'Full-stack' | 'Backend' | 'IoT'

export type Project = {
  id: string
  title: string
  eyebrow: string
  role: string
  categories: Exclude<Filter, 'Todos'>[]
  description: string
  challenge: string
  contributions: string[]
  technologies: string[]
  visual: 'medical' | 'map' | 'taxi' | 'pulse' | 'gym'
  featured?: boolean
  /** Agrega URLs reales antes de publicarlo. Si están vacías, no se muestran enlaces. */
  repositoryUrl?: string
  demoUrl?: string
}

export type Profile = {
  name: string
  shortName: string
  role: string
  photoUrl: string
  email: string
  github: string
  linkedin: string
  cvUrl: string
  location: string
}
