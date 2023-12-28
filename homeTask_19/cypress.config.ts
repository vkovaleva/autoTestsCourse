import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,

  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
});
