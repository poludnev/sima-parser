const xl = require('excel4node');
// const { head } = require('lodash');
const _ = require('lodash');
const headings = require('./data.js');

const wb = new xl.Workbook();
const ws = wb.addWorksheet('Sheet 1');

const putHeadings = (worksheet, data) => {
  for (let i = 0; i < data.length; i += 1) {
    worksheet.cell(1, i + 1).string(data[i]);
  }
};

putHeadings(ws, headings);

exports.writeExcel = (items, fileName) => {
  for (let i = 0; i < items.length; i += 1) {
    ws.cell(i + 2, 1).number(i + 1);
    ws.cell(i + 2, 2).string('Sima');
    ws.cell(i + 2, 3).string(!items[i].art ? 'n/a' : items[i].art.toString());
    ws.cell(i + 2, 4).string(items[i].name);
    ws.cell(i + 2, 5).string(items[i].link);
    ws.cell(i + 2, 6).string(items[i].imageLink);
    ws.cell(i + 2, 7).number(items[i].priceRegularValue);
    ws.cell(i + 2, 8).number(items[i].priceDiscountValue);
    ws.cell(i + 2, 9).number(_.isNaN(Number(items[i].boxPcs)) ? 0 : Number(items[i].boxPcs));
    ws.cell(i + 2, 10).string(items[i].brand || 'n/a');
    ws.cell(i + 2, 11).string(items[i].category || 'n/a');
    ws.cell(i + 2, 12).string(items[i].country || 'n/a');
    ws.cell(i + 2, 13).string(!items[i].misc ? 'n/a' : items[i].misc.join(', '));
  }
  wb.write(`a02-excel/${fileName}.xlsx`);
  console.log(`${fileName} has been written`);
};
