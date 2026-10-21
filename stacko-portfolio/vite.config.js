import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // El build SSR (prerender) empaqueta todas las dependencias para que Node no tenga que resolver CJS/ESM
  ssr: {
    noExternal: true,
  },
})
