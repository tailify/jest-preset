'use strict';

module.exports = {
  globalSetup: '@tailify/jest-preset/global-setup',
  moduleFileExtensions: ['feature', 'js', 'mjs'],
  setupFiles: ['@tailify/jest-preset/setup'],
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
    '^.+\\.m?js$': 'babel-jest',
  },
};
