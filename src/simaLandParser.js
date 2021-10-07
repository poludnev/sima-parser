const jsdom = require('jsdom');
const { convertPrice, getItemData } = require('./utils.js');

const { JSDOM } = jsdom;

module.exports = (file1, hostName = 'www.sima-land.ru') => {
  const dom = new JSDOM(file1);

  const cat = dom.window.document.querySelector('.catalog');
  if (cat === null) return [];

  const catalog = dom.window.document.querySelector('.catalog').children;

  const items = [];
  [...catalog].forEach((item) => {
    const priceRegular = item.querySelector('[data-testid="item-price"]');
    const priceDiscount = item.querySelector('[data-testid="price"]');
    const priceParent = priceDiscount.parentElement;
    const priceParentDiv = priceParent.parentElement;
    const itemDataBlock = priceParentDiv.parentElement.nextElementSibling;
    const itemData = getItemData(itemDataBlock);

    items.push({
      name: item.querySelector('[data-testid="item-name"]').textContent,
      link: `${hostName}${item.querySelector('[data-testid="anchor"]').href}`,
      imageLink: item.querySelector('[data-testid="item-image"]').src,
      priceRegularValue: convertPrice(priceRegular.textContent),
      priceDiscountValue: convertPrice(priceDiscount.textContent),
      ...itemData.main,
      misc: itemData.other,
    });
  });

  return items;
};
