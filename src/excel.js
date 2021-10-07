const xl = require('excel4node');
const _ = require('lodash');

exports.writeExcel = (items, fileName) => {
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet('Sheet 1');

  ws.cell(1, 1).string('nn');
  ws.cell(1, 2).string('company');
  ws.cell(1, 3).string('article');
  ws.cell(1, 4).string('name');
  ws.cell(1, 5).string('link');
  ws.cell(1, 6).string('imageLink');
  ws.cell(1, 7).string('price');
  ws.cell(1, 8).string('discountPrice');
  ws.cell(1, 9).string('boxPcs');
  ws.cell(1, 10).string('brand');
  ws.cell(1, 11).string('category');
  ws.cell(1, 12).string('country');
  ws.cell(1, 13).string('other');

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
