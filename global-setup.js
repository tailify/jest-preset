const fs = require('fs');
const os = require('os');
const path = require('path');

const HasteMap = require('jest-haste-map');

module.exports = async () => {
  const cacheDirectory = os.tmpdir();
  if (!fs.existsSync(cacheDirectory)) {
    fs.mkdirSync(cacheDirectory);
  }

  const defaultConfig = {
    cacheDirectory,
    extensions: ['js'],
    ignorePattern: / ^/,
    maxWorkers: 1,
    platforms: [],
    roots: ['.'],
  };

  const { hasteFS } = await new HasteMap(defaultConfig).build();
  const stepDefinitions = hasteFS.matchFiles(/__steps__/).map(filePath => path.resolve(filePath));

  const cacheFilePath = path.join(cacheDirectory, 'step-definitions.json');
  fs.writeFileSync(cacheFilePath, JSON.stringify(stepDefinitions));
};
