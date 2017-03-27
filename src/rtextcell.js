'use strict'
// RTextCell

var dp = require('./textcell.js');
var TextCell = dp.TextCell;
//import TextCell from "./textcell.js";
class RTextCell extends TextCell{
    constructor(text){
        super(text);
    }
    draw(width, height) {
      var result = [];
      for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(" ".repeat(width - line.length) + line);
      }
      return result;
    }
}

/*function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(" ".repeat(width - line.length) + line);
  }
  return result;
};*/
// End RTextCell 
module.exports = {
  
  RTextCell: RTextCell
};
