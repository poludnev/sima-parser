[![Maintainability](https://api.codeclimate.com/v1/badges/26a96f82d7b374e1082e/maintainability)](https://codeclimate.com/github/poludnev/sima-parser/maintainability)

# sima-parser
A hastily made parser to fetch the product information from one company's website.

## How to use

### As far as the parser does not have cli, have to set values for the consts bewlo:

index.js:

1. The name of the host for the site to be parsed: 

    const hostName = 'www.sima-land.ru'; 
    
2. The first part for the full path before the page number ('/p'):

    const path1 = '/derevyannye-igrushki-dlya-razvlecheniy/p';
    
3. The second part of the full path after the page number: 

    const path2 = '/?c_id=51331&per-page=100&sort=price&viewtype=list';
    
4. Check the source file name. In fact, it does't matter what the name is if you use the whole script, but it does matter if you wnat only parse the site without make an excel file, or if you just want to convert the json source file you made before into xlss without paresing the site. In this cases you will have to change the file name deliberately.

    const sourceFile = 'woodEntertain.json';
    
5. A name of a result file without the 'xls' extension.

    const resultFileName = 'wood';
    
6. Numbers of the page to start and the pages quantity:

    const pageStart = 1;
    const pageCount = 2;

### Once the parameters checked, run the packet:

$ npm run

### The result files are located in the a02-excel catalog.
