const getDataAndWriteToJSON = require('./getDataAndWriteToJSON.js');
const { writeExcel } = require('./excel.js');
const { readJSONtoItemsSync } = require('./utils.js');

module.exports = async (getProps = [], writeProps = []) => {
  const [runGet, hostName, path1, path2, pageStart, pageCount, destJSON] = getProps;

  const [runWrite, sourceFile, desctinationFile] = writeProps;

  if (runGet) {
    console.log('get data ran');
    await getDataAndWriteToJSON(
      hostName,
      path1,
      path2,
      pageStart,
      pageCount,
      destJSON || 'final.json',
    );
  }

  if (runWrite) {
    console.log('write data ran');
    const itemsToWrite = readJSONtoItemsSync(sourceFile || 'final.json');
    await writeExcel(itemsToWrite, desctinationFile || 'wood');
  }
  console.log('finished');
};
