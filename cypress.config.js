const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  retries: { openMode: 2, runMode: 2 },
  video: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Seczetta E2E Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    excludeSpecPattern: [
      "**/cypress/e2e/1-getting-started",
      "**/cypress/e2e/2-advanced-examples",
    ],
    baseUrl: "https://automation.staging.iam2secz.com",
  },

  env: {
    automation_staging_url: "https://automation.staging.iam2secz.com",
    flipon_staging_url: "https://flipperon.staging.iam2secz.com",
  },
});
