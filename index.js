const runApp = require('./src/init.js');

const hostName = 'www.sima-land.ru';

const path1 = '/derevyannye-igrushki-dlya-razvlecheniy/p';
const path2 = '/?c_id=51331&per-page=100&sort=price&viewtype=list';

const pageStart = 1;
const pageCount = 2;

const sourceFile = 'woodEntertain.json';

const getProps = [true, hostName, path1, path2, pageStart, pageCount, sourceFile];
const writeProps = [true, sourceFile, 'wood'];

runApp(getProps, writeProps);
