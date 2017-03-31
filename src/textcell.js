'use strict'
/*
function TextCell(text) {
  this.text = text.split("\n");
}*/

class TextCell{
    constructor(text){
        this.text = text.split("\n");
    }
    
    

  minWidth(){
      return this.text.reduce((width, line) => {
            return Math.max(width, line.length);
  }, 0);
  }
      
  

    minHeight(){
        return this.text.length;
    }

    draw(width, height){
        let result = [];
         for (var i = 0; i < height; i++) {
           var line = this.text[i] || "";
           result.push(line + " ".repeat(width - line.length));
  }
  return result;
        
    }
}

module.exports = {
  TextCell: TextCell
};
// End TextCell