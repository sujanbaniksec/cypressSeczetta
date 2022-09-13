const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  retries: { openMode: 2, runMode: 2 },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
