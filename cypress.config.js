const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    // supportFile: 'support/e2e.ts',
    // specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    waitForAnimations: true,
    viewportWidth: 800,
    viewportHeight: 600,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
