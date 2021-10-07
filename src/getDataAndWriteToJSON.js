const fss = require('fs');

const fs = fss.promises;
const requestAsync = require('./requests.js');
const simaLandParser = require('./simaLandParser.js');

/* eslint no-await-in-loop: 0 */
module.exports = async (
  hostName,
  path1,
  path2,
  pageStart,
  pagesCount,
  destinationFile = 'final.json',
) => {
  const arr = [];
  for (let i = pageStart; i <= pagesCount; i += 1) {
    const fullPath = `${path1}${i}${path2}`;
    const result = await requestAsync(hostName, fullPath);

    console.log(`page number: ${i}`);

    const items = simaLandParser(result);
    arr.push(...items);
  }

  const str = JSON.stringify(arr.flat());
  await fs.writeFile(`a01-json/${destinationFile}`, str, (err) => {
    if (err !== null) {
      console.log('write file error:', err);
      return;
    }
    console.log('write complete');
  });
  console.log('req finished');

  return arr;
};
