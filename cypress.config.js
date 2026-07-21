const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Example/usage tests hit a real site (see cypress/e2e/emulate.cy.js) so the
    // README's usage snippet is honest, runnable code, not a fictional example.
    // The catalog-smoke spec deliberately overrides this with a local URL — it
    // loops over every catalog entry and shouldn't hammer a third-party site.
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: false,
  },
})
