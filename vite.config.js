import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",   // CHANGE this to your repo name EXACTLY if different
  plugins: [react()],
})
