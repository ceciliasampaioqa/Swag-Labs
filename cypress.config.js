const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      debug: false,
      testops: {
        api: {
          token: 'dbbdc7464853e7cc16863576ba007d6e0fa7a846bcacae3268709660bf201d69',
        },
        project: 'SDEN',
        uploadAttachments: true,
        run: {
          complete: true,
        },
      },
      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        }
      }
    },
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-qase-reporter/plugin')(on, config)
      require('cypress-qase-reporter/metadata')(on)
    },
    baseUrl: 'https://www.saucedemo.com'
  }
})
