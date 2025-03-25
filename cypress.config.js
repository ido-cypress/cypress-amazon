const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // pageLoadTimeout: 15000,
   // requestTimeout: 10000,
   // defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.amazon.com/"
  },
});
