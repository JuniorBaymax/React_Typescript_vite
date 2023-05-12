/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
