'use strict';

jest.mock('child_process', () => ({ execSync() {} }));

jest.mock('jest-haste-map/build/crawlers/watchman', () =>
  jest.fn(options => {
    const walkSync = require('klaw-sync');

    const {data, ignore, roots} = options;
    const list = walkSync('/', { nodir: true });

    const files = Object.create(null);
    list.forEach(file => {
      if (new RegExp(roots.join('|')).test(file.path) && !ignore(file.path)) {
        files[file.path] = ['', 32, 0, [], null];
      }
    });
    data.files = files;

    return Promise.resolve(data);
  }),
);

jest.mock('graceful-fs', () => new (require('metro-memory-fs'))());

jest.mock('fs', () => require('graceful-fs'));

jest.mock('os', () => ({tmpdir: jest.fn()}));

let fs;
let globalSetup;
let os;

beforeEach(() => {
  jest.resetModules();

  fs = require('graceful-fs');
  os = require('os');

  fs.mkdirSync('/fruits');
  fs.mkdirSync('/fruits/__steps__');
  fs.writeFileSync('/fruits/__steps__/pear.js', '');
  fs.writeFileSync('/fruits/__steps__/banana.js', '');
  fs.writeFileSync('/fruits/kiwi.js', '');
  fs.writeFileSync('/fruits/strawberry.js', '');
  fs.mkdirSync('/vegetables');
  fs.mkdirSync('/vegetables/__steps__');
  fs.writeFileSync('/vegetables/__steps__/melon.js', '');
  fs.writeFileSync('/vegetables/potato.js', '');

  globalSetup = require('../global-setup');
});

it('writes step definitions to cache file', async () => {
  os.tmpdir.mockReturnValueOnce('/tmpdir');

  await globalSetup();

  const cacheFilePath = '/tmpdir/step-definitions.json';
  const stepDefinitions = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));
  expect(stepDefinitions).toMatchSnapshot();
});
