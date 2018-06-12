'use strict';

const isPlainObj = require('is-plain-obj');

it('should export an object', () => {
  const preset = require('../jest-preset');

  expect(isPlainObj(preset)).toBe(true);
});
