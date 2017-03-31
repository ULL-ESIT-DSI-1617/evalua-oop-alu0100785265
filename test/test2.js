'use strict'

var  dp = require('../src/textcell.js');
var TextCell = dp.TextCell;


describe("textcell", function() {
  
  it("must minHeight", function() {
      new TextCell(String("hola")).minHeight().should.equal(1);
  })
  
  it("must minWidt", function() {
      var p = new TextCell(String('hola'));
      var l = "hola";
      p.should.not.equal(l);
  })
   it("must minWidt", function() {
      var p = new TextCell(String('hola'));
      var l = "hola";
      p.draw(4,1).should.have.ownProperty(0).equal("hola");
  })
});

var assert = require("assert");
describe("Cadenas",function(){
describe("subcadenas",function(){
   it('deberia retornar una sub cadenas',function(){
   assert.equal("Hola","Para queq Hola".substring(10,15));
   })
}) 
});


describe("Cadenas",function(){
describe("subcadenas",function(){
   it('usando la libreria should',function(){
   'Hola que tal'.substring(10,15).should.equal('al');
});
});
});


var  d = require('../src/rtextcell.js');
var RTextCell= d.RTextCell;


describe("rtextcell", function() {
  
  it("must minHeight", function() {
      new RTextCell(String("hola")).minHeight().should.equal(1);
  })
  
  it("must minWidt", function() {
      var p = new TextCell(String('hola'));
      var l = "hola";
      p.draw(7,1).should.have.ownProperty(0).equal("hola   ");
  })
  
  
});