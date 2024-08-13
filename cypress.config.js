const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "56j26c",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
