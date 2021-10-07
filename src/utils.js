const fss = require('fs');

exports.convertPrice = (string) => Number(string.replace(/[^0-9.,]+/g, '').replace(',', '.'));

exports.readJSONtoItemsSync = (filePath) => {
  const data = fss.readFileSync(`a01-json/${filePath}`, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};
