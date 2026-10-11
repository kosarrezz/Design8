import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // این خط خیلی مهمه

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // این خط خیلی مهمه
  ],
})
