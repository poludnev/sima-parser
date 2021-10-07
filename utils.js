const fss = require('fs');
const fs = fss.promises;
const { requestAsync } = require('./requests.js');
const DomParser = require('dom-parser');
const parser = new DomParser();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { simaLandParser } = require('./simaLandParser.js');

var xl = require('excel4node');

exports.convertPrice = (string) => Number(string.replace(/[^0-9\.,]+/g, '').replace(',', '.'));

exports.readJSONtoItemsSync = (filePath) => {
  const data = fss.readFileSync(`a01-json/${filePath}`, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

// exports.writeExcel = (items, fileName) => {
// var wb = new xl.Workbook();
// var ws = wb.addWorksheet('Sheet 1');
// var ws2 = wb.addWorksheet('Sheet 2');

// ws.cell(1, 1).string('nn');
// ws.cell(1, 2).string('company');
// ws.cell(1, 3).string('article');
// ws.cell(1, 4).string('name');
// ws.cell(1, 5).string('link');
// ws.cell(1, 6).string('imageLink');
// ws.cell(1, 7).string('price');
// ws.cell(1, 8).string('discountPrice');
// ws.cell(1, 9).string('boxPcs');
// ws.cell(1, 10).string('brand');
// ws.cell(1, 11).string('category');
// ws.cell(1, 12).string('country');
// ws.cell(1, 13).string('other');

// for (let i = 0; i < items.length; i += 1) {
//   ws.cell(i + 2, 1).number(i + 1);

//   ws.cell(i + 2, 2).string('Sima');
//   console.log(i, items[i].art)
//   ws.cell(i + 2, 3).string(!items[i].art ? 'n/a' : items[i].art.toString());
//   ws.cell(i + 2, 4).string(items[i].name);
//   ws.cell(i + 2, 5).string(items[i].link);
//   ws.cell(i + 2, 6).string(items[i].imageLink);
//   ws.cell(i + 2, 7).number(items[i].priceRegularValue);
//   // console.log(i, items[i].priceRegularValue)
//   ws.cell(i + 2, 8).number(items[i].priceDiscountValue);
//   // console.log(i, isNaN(Number(items[i].boxPcs)))
//   ws.cell(i + 2, 9).number(isNaN(Number(items[i].boxPcs)) ? 0 : Number(items[i].boxPcs));
//   ws.cell(i + 2, 10).string(items[i].brand || 'n/a');
//   // console.log(i, items[i].brand)
//   ws.cell(i + 2, 11).string(items[i].category || 'n/a');
//   ws.cell(i + 2, 12).string(items[i].country || 'n/a');
//   ws.cell(i + 2, 13).string(items[i].misc.join(', '));
// }
// wb.write(`${fileName}.xlsx`);
// console.log(`${fileName} has been written`);
// };
