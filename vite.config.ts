/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "/src/tests/setup",
  },
})
