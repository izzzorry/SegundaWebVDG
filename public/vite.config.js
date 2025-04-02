import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext', // Asegúrate de que la compilación sea compatible con los módulos ES
  },
})
