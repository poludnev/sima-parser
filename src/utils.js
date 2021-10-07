const fss = require('fs');
const { countries, brands, categories } = require('./data.js');

exports.convertPrice = (string) => Number(string.replace(/[^0-9.,]+/g, '').replace(',', '.'));

exports.readJSONtoItemsSync = (filePath) => {
  const data = fss.readFileSync(`a01-json/${filePath}`, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

exports.getItemData = (itemDataBlock) => {
  if (itemDataBlock === null) return [{ main: {}, other: ['n/a'] }];
  const result = [...itemDataBlock.children]
    .map((e) => e.textContent)
    .reduce(
      (acc, val) => {
        switch (true) {
          case val.includes('Арт.:'):
            acc.main.art = Number(val.split(':')[1].trim().split(';')[0]);
            break;
          case countries.includes(val.toLowerCase()):
            acc.main.country = val;
            break;
          case val.includes('В боксе'):
            acc.main.boxPcs = Number(val.slice(-'В боксе'.length).split(' ')[0]);
            break;
          case brands.includes(val.toLowerCase()):
            acc.main.brand = val;
            break;
          case categories.includes(val.toLowerCase()):
            acc.main.category = val;
            break;
          case val.includes('см ×'):
            acc.main.size = val;
            break;
          case !!val:
            acc.other.push(val);
            break;
          default:
            throw new Error('parse error');
        }
        return acc;
      },
      { main: {}, other: [] },
    );
  return result;
};
