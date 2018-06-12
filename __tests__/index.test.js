'use strict';

it('should contain expected keys', () => {
  const preset = require('../jest-preset');
  expect(Object.keys(preset)).toMatchSnapshot();
});
