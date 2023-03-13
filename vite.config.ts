import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/_variables.scss";
          @import "./src/assets/_typography.scss";
        `,
      },
    },
  },
})
