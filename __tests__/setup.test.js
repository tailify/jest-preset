'use strict';

jest.mock('fs', () => new (require('metro-memory-fs'))());
jest.mock('os', () => ({tmpdir: jest.fn()}));

let fs;
let os;

beforeEach(() => {
  jest.resetModules();

  fs = require('fs');
  os = require('os');

  global.CALLS = 0;

  fs.mkdirSync('/tmpdir');
  os.tmpdir.mockReturnValueOnce('/tmpdir');
});

it('requires files from the cache', () => {
  fs.writeFileSync('/tmpdir/step-definitions.json', JSON.stringify([
    './__fixtures__/pear.js',
    './__fixtures__/banana.js',
    './__fixtures__/melon.js',
  ].map(require.resolve)));

  require('../setup');
  expect(global.CALLS).toBe(3);
});

it('works with empty cache', () => {
  fs.writeFileSync('/tmpdir/step-definitions.json', JSON.stringify([]));

  require('../setup');
  expect(global.CALLS).toBe(0);
});

it('works with non-existing cache', () => {
  expect(() => require('../setup')).not.toThrowError();
});

it('throws when JSON is invalid', () => {
  fs.writeFileSync('/tmpdir/step-definitions.json', '{');

  expect(() => require('../setup')).toThrowError();
});
