'use strict';

module.exports = {
  globalSetup: '@tailify/jest-preset/global-setup',
  moduleFileExtensions: ['feature', 'js', 'mjs'],
  setupFiles: ['@tailify/jest-preset/setup'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
    '^.+\\.m?js$': 'babel-jest',
  },
};
