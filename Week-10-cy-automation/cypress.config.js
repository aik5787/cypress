const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com/",
    viewportWidth: 1400,
    viewportHeight: 1200,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "mochawesome-report",
      reportFilename: "[status]_[datetime]-[name]-report",
      overwrite: false,
      showPassed: true,
      timestamp: "longDate",
    },
    setupNodeEvents(on, config) {
      mochawesome(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
