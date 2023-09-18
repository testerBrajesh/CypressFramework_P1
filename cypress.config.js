const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  projectId: '98g6xu',
  env: {
    url: "https://www.saucedemo.com/",
    userId: "standard_user",
    password: "secret_sauce"
  },
  projectId: "o734tq",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/integration/examples/*.js',
    testIsolation: false,

  },

});
