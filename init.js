const getDataAndWriteToJSON = require('./getDataAndWriteToJSON.js');
const { writeExcel } = require('./excel.js');
const { readJSONtoItemsSync } = require('./utils.js');

const hostName = 'www.sima-land.ru';
const path1 = `/bloknoty-i-zapisnye-knizhki/p`;
const path2 = `/?c_id=121&per-page=100&sort=price&viewtype=list&f={"trademark"%3A["15733"%2C"16838"%2C"3718"]}`;

// getDataAndWriteToJSON(hostName, path1, path2, 1);

// const itemsToWrite = readJSONtoItemsSync('final.json');

// writeExcel(readJSONtoItemsSync('final.json'), 'staionary');

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
