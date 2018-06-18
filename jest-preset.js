'use strict';

module.exports = {
  globalSetup: '<rootDir>/node_modules/@tailify/jest-preset/global-setup.js',
  moduleFileExtensions: ['feature', 'js'],
  setupFiles: ['<rootDir>/node_modules/@tailify/jest-preset/setup.js'],
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
  },
};
