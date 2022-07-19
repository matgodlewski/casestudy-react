const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const sourceTask4 = path.resolve(appDirectory, 'src/case-study');
const targetDirectory = path.resolve(appDirectory, 'dist');

module.exports = {
  sourceTask4: (pathSegment) => path.resolve(sourceTask4, pathSegment),
  target: (pathSegment) => path.resolve(targetDirectory, pathSegment),
};
