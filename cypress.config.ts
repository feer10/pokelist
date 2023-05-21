import { defineConfig } from 'cypress'

export default defineConfig({
  async setupNodeEvents() {
    //
  },
  e2e: {
    baseUrl: 'http://localhost:5173/',
    defaultCommandTimeout: 10000,
  },
  video: false,
})
