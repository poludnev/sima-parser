const runApp = require('./init.js');

const hostName = 'www.sima-land.ru';

// https://www.sima-land.ru/search/p2/?q=деревянные игрушки&per-page=100&sort=rank&viewtype=list&f={"category_tree"%3A["687"]%2C"json_iif"%3A["8974"]%2C"wholesale"%3A["3"]}
// https://www.sima-land.ru/search/p36/?q=деревянные игрушки&per-page=100&sort=rank&viewtype=list&f={"category_tree"%3A["687"]%2C"json_iif"%3A["8974"]%2C"wholesale"%3A["3"]}
// https://www.sima-land.ru/derevyannye-igrushki/p2/?c_id=51331&per-page=100&sort=price&viewtype=list
//https://www.sima-land.ru/trademark/lesnaya-masterskaya/smotret-vse/p2/?c_id=2584&per-page=100&sort=price&viewtype=list

const path1 = '/derevyannye-igrushki-dlya-razvlecheniy/p';

const path2 = '/?c_id=51331&per-page=100&sort=price&viewtype=list';

const pageStart = 1;
const pageCount = 8;

const sourceFile = 'woodEntertain.json';

let getProps = [true, hostName, path1, path2, pageStart, pageCount, sourceFile];
let writeProps = [true, sourceFile, 'opyty'];

// runApp(getProps, writeProps);

getProps = [
  false,
  hostName,
  '/nabory-dlya-opytov/p',
  '/?c_id=22725&per-page=100&sort=price&viewtype=list',
  1,
  10,
  'opyty.json',
];
writeProps = [true, 'opyty.json', 'opyty'];

runApp(getProps, writeProps);
//https://www.sima-land.ru/nabory-dlya-opytov/p2/?c_id=22725&per-page=100&sort=price&viewtype=list
// https://www.sima-land.ru/derevyannye-konstruktory/p2/?c_id=51338&per-page=100&sort=price&viewtype=list
// https://www.sima-land.ru/derevyannye-igrushki-dlya-razvlecheniy/p2/?c_id=51366&per-page=100&sort=price&viewtype=list
// https://www.sima-land.ru/derevyannye-igrushki-dlya-razvlecheniy/p2/?c_id=51366&per-page=100&sort=price&viewtype=list

// https://www.sima-land.ru/derevyannye-igrushki/p2/?c_id=51331&per-page=100&sort=price&viewtype=list
