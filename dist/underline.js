"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// UnderlinedCell Class
/*function UnderlinedCell(inner) {
  this.inner = inner;
}
/*
  minWidth() returns a number indicating this cell’s minimum width
  (in characters).

UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
/*
  minHeight() returns a number indicating the minimum height this
  cell requires (in lines).

UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
*/
/*
  draw(width, height) returns an array of length height, which contains
  a series of strings that are each width characters wide. This
  represents the content of the cell.

UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat(["-".repeat(width)]);
};    */
// End UnderlinedCell 

var UnderlinedCell = function () {
  function UnderlinedCell(inner) {
    _classCallCheck(this, UnderlinedCell);

    this.inner = inner;
  }

  _createClass(UnderlinedCell, [{
    key: "minWidth",
    value: function minWidth() {
      return this.inner.minWidth();
    }
  }, {
    key: "minHeight",
    value: function minHeight() {
      return this.inner.minHeight() + 1;
    }
  }, {
    key: "draw",
    value: function draw(width, height) {
      return this.inner.draw(width, height - 1).concat(["-".repeat(width)]);
    }
  }]);

  return UnderlinedCell;
}();

module.exports = {
  UnderlinedCell: UnderlinedCell
};