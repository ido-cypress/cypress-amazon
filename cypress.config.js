const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    defaultCommandTimeout: 15000,

    setupNodeEvents(on, config) {
      // Here, you can pass `newUrl` as an environment variable
      config.env.newUrl = "https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z?th=1"
      config.env.cartUrl = "https://www.amazon.com/gp/cart/view.html?ref_=nav_cart"
      
      return config;
    },
    baseUrl: "https://www.amazon.com/",
  },

  env: {
    NAME : "Ido Cypress",
    EMAIL: "ido.cypress.github@gmail.com",
    PASSWORD: "Aa123456!"
    }
});
