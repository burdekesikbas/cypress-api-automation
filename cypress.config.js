const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "3c23py",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
