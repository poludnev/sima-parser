const { convertPrice, requestAsync, readJSONtoItemsSync } = require('./utils.js');
const { countries, brands, categories } = require('./data.js');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = (file1, hostName = 'www.sima-land.ru') => {
  const dom = new JSDOM(file1);
  // console.log(dom.window.document.body.innerHTML)
  // fss.writeFileSync('test4.html', dom.window.document.body.innerHTML, 'utf-8');

  try {
    const cat = dom.window.document.querySelector('.catalog');
    if (cat === null) return [];

    const catalog = dom.window.document.querySelector('.catalog').children;

    // console.log(catalog.innerHTML);

    const items = [];
    [...catalog].forEach((item) => {
      const link = item.querySelector('[data-testid="anchor"]').href;
      const name = item.querySelector('[data-testid="item-name"]').textContent;
      const imageLink = item.querySelector('[data-testid="item-image"]').src;
      const priceRegular = item.querySelector('[data-testid="item-price"]');
      const priceDiscount = item.querySelector('[data-testid="price"]');

      const priceParent = priceDiscount.parentElement;

      const priceParentDiv = priceParent.parentElement;

      const itemDataBlock = priceParentDiv.parentElement.nextElementSibling;

      let itemData;

      if (itemDataBlock === null) {
        itemData = [{ main: {}, other: ['n/a'] }];
      } else {
        itemData = [...itemDataBlock.children]
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
      }

      const priceDiscountValue = convertPrice(priceDiscount.textContent);

      const priceRegularValue = convertPrice(priceRegular.textContent);

      items.push({
        name,
        link: `${hostName}${link}`,
        imageLink,
        priceRegularValue,
        priceDiscountValue,
        ...itemData.main,
        misc: itemData.other,
      });
    });

    return items;
  } catch (e) {
    console.log(e);
  }
};
