'use strict';

module.exports = {
  moduleFileExtensions: ['feature', 'js'],
  testMatch: ['**/features/**/*.feature'],
  transform: {
    '^.+\\.feature$': 'gherkin-jest',
  },
};
