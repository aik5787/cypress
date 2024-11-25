const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
  },
});
