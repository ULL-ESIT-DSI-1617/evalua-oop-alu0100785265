"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textcell = require("./textcell.js");

var _textcell2 = _interopRequireDefault(_textcell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // RTextCell


var RTextCell = function (_TextCell) {
  _inherits(RTextCell, _TextCell);

  function RTextCell(text) {
    _classCallCheck(this, RTextCell);

    return _possibleConstructorReturn(this, (RTextCell.__proto__ || Object.getPrototypeOf(RTextCell)).call(this, text));
  }

  _createClass(RTextCell, [{
    key: "draw",
    value: function draw(width, height) {
      var result = [];
      for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(" ".repeat(width - line.length) + line);
      }
      return result;
    }
  }]);

  return RTextCell;
}(_textcell2.default);

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