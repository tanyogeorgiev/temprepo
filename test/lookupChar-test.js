let expect = require('chai').expect
let lookupChar = require("../Mocha Exercises/2CharLookup").lookupChar

describe("lookupChar(string,index) testing", function() {
  it("should return undefined for (2,2)", function() {
    expect(lookupChar(2,2)).to.be.undefined;
  });
  it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aaa','aa')).to.be.undefined;
  });
    
   it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aladin',3.2)).to.be.undefined;
  });
  it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aladin',10)).to.equal('Incorrect index');
  });
  it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aladin',-1)).to.equal('Incorrect index');
  });
  it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aladin',1)).to.equal('l');
  });
  it("should return undefined for ('aaa','aa')", function() {
    expect(lookupChar('aladin',6)).to.equal('Incorrect index');
  });
})