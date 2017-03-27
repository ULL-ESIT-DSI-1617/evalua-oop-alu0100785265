"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
function TextCell(text) {
  this.text = text.split("\n");
}*/

var TextCell = function () {
  function TextCell(text) {
    _classCallCheck(this, TextCell);

    this.text = text.split("\n");
  }

  /*
    minWidth() returns a number indicating this cell’s minimum width
    (in characters).
  
  TextCell.prototype.minWidth = function() {
    /* 
      The reduce() method applies a function against an accumulator and
      each element in the array (from left to right) to reduce it to a
      single value.
    */
  /* return this.text.reduce(function(width, line) {
     return Math.max(width, line.length);
   }, 0);
  };*/


  _createClass(TextCell, [{
    key: "minWidth",
    value: function minWidth() {
      return this.text.reduce(function (width, line) {
        Math.max(width, line.length);
      }, 0);
    }

    /*
      minHeight() returns a number indicating the minimum height this
      cell requires (in lines).
    
    TextCell.prototype.minHeight = function() {
      return this.text.length;
    };
    */

  }, {
    key: "minHeight",
    value: function minHeight() {
      return this.text.length;
    }
    /*
      draw(width, height) returns an array of length height, which contains
      a series of strings that are each width characters wide. This
      represents the content of the cell.
    
    TextCell.prototype.draw = function(width, height) {
      var result = [];
      for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + " ".repeat(width - line.length));
      }
      return result;
    };*/

  }, {
    key: "draw",
    value: function draw(width, height) {
      var result = [];
      for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + " ".repeat(width - line.length));
      }
      return result;
    }
  }]);

  return TextCell;
}();
//export default TextCell;

module.exports = {
  TextCell: TextCell
};
// End TextCell