const fs = require('fs');
const os = require('os');
const path = require('path');

const cacheFilePath = path.join(os.tmpdir(), 'step-definitions.json');
if (fs.existsSync(cacheFilePath)) {
  const stepDefinitions = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));
  stepDefinitions.forEach(filePath => require(filePath));
}
