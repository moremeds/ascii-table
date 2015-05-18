var AsciiTable = require('../ascii-table');

var table = new AsciiTable('A Title');

table
    .setHeading('', 'Name', 'Age')
    .addRow(1, 'Bob', 52)
    .addRow(2, 'John', 34)
    .addRow(3, 'Jim', 83);

table.addFooter("123", "456");

console.log(table.toString())
