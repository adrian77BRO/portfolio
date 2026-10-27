# Portafolio Full-stack Junior

Portafolio personal **React + TypeScript + Vite + CSS** con diseño oscuro responsivo, filtros de proyectos, navegación móvil y tarjetas de proyectos con detalles expandibles.

La información de proyectos está basada en los proyectos compartidos: Salud Confiable, NarraMap, TaxiTracker, PulsePro y GSoft. **Las capturas son visualizaciones conceptuales construidas en CSS, no imágenes de las aplicaciones reales.**

## Requisitos

- Node.js 20.19+ o 22.12+ (o una versión superior compatible con Vite).
- npm.

## Ejecución en local

```bash
npm install
npm run dev
```

Luego visita la dirección mostrada en consola (normalmente http://localhost:5173).

Para preparar la versión de producción:

```bash
npm run typecheck
npm run build
npm run preview
```

## Qué personalizar (antes de publicar)

1. **Nombre y enlaces:** en `src/data/portfolio.ts`, cambia `profile.name`, `profile.shortName`, `profile.email`, `profile.github` y `profile.linkedin`. Si el enlace está vacío, **no se muestra**.
2. **CV:** guarda tu archivo como `public/cv.pdf` y cambia `profile.cvUrl` a `'/cv.pdf'`.
3. **Proyectos:** modifica los objetos de `projects` en `src/data/portfolio.ts`. Completa `repositoryUrl` y `demoUrl` solo cuando existan URLs reales. El diseño las muestra automáticamente.
4. **Tecnologías:** revisa `skillGroups`; elimina cualquier tecnología que no puedas explicar en una entrevista.
5. **Experiencia:** verifica la redacción en `src/components/Experience.tsx`, incluyendo fechas, funciones y roles exactos cuando los tengas.
6. **SEO:** cambia el título, descripción y etiquetas OpenGraph en `index.html`.
7. **Capturas:** reemplaza los componentes conceptuales de `src/components/ProjectVisual.tsx` por `<img>` de tus aplicaciones reales, dentro de `public/images/`. Usa `alt` significativo.
8. **Proyectos privados:** si los repositorios pertenecen a una empresa o contienen datos privados, solicita permiso antes de compartir el código. Puedes publicar capturas autorizadas y explicar el proyecto sin exponer secretos.

## Estructura

```text
portafolio-fullstack/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectVisual.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Publicar

### Vercel o Netlify

1. Crea un repositorio Git y sube el proyecto a GitHub **sin** `node_modules`.
2. Importa el repositorio en el servicio de despliegue.
3. Configura **Build command:** `npm run build` y **Output directory:** `dist`.
4. Publica y comparte la URL en tu CV y LinkedIn.

### GitHub Pages

Si se sirve bajo `https://usuario.github.io/mi-portafolio/`, cambia `base` en `vite.config.ts` a `'/mi-portafolio/'`. Para Pages, usa una acción de GitHub Actions que publique `dist`. Las referencias absolutas del favicon y el CV pueden necesitar `import.meta.env.BASE_URL` o URLs relativas según el despliegue.

## Notas

- No hay backend ni formulario que envíe información a un servidor: la comunicación usa el enlace `mailto:` cuando se agrega un email.
- No se inventaron datos de contacto, métricas profesionales, links a demos, repositorios ni fechas laborales.
- El proyecto no requiere Tailwind ni otra librería CSS. Usa `lucide-react` para iconos.
- El CSS adapta el diseño a móvil y respeta `prefers-reduced-motion`.
