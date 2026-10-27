import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Si publicas en GitHub Pages bajo /repositorio/, ajusta esta ruta.
})
