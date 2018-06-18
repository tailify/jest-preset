'use strict';

module.exports = {
  globalSetup: '<rootDir>/node_modules/@tailify/jest-preset/global-setup.js',
  moduleFileExtensions: ['feature', 'js'],
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
  },
};
