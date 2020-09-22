// 1-й вариант
// $ npm install convert-csv-to-json --save

let csvToJson = require('convert-csv-to-json');

let fileInputName = 'books.csv';
let fileOutputName = 'books.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);


// 2-й вариант 
// $ npm i --save csvtojson
const fs = require('fs');
const csvFilePath = 'books.csv'
const csv = require('csvtojson')
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFile('books.json', jsonObj);    
  })

// Async / await usage
const jsonArray = await csv().fromFile(csvFilePath);
