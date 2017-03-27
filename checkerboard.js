
var dp = require("./lyingoutatable.js");
var dt = require("./textcell.js");
var TextCell = dt.TextCell;
var drawTable = dp.drawTable;

var rows = [0, 5].range( 
  (i) =>  [0, 5].range( 
    (j) => new TextCell(((j + i) % 2 == 0)? '##\n##' : '  '))
);
console.log(drawTable(rows));
