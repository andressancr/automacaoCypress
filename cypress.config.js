const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'anm6fi',
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Andressa Relatórios",
      inlineAssets: true,
      saveAllAttemps: false
    },
  },
  e2e: {
    videosFolder: "cypress/reports/video",
    screenshotsFolder: "cypress/reports/screenshots",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})