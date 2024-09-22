const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com/",
    viewportWidth: 1400,
    viewportHeight: 1200,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: mochawesome-report-chrome,
      overwrite: true,
      showPassed: true,
      html: false, 
      json: true,
      alwaysGenerateReport: true 
    },
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
