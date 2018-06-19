'use strict';

module.exports = {
  globalSetup: '@tailify/jest-preset/global-setup',
  moduleFileExtensions: ['feature', 'js'],
  setupFiles: ['@tailify/jest-preset/setup'],
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
  },
};
