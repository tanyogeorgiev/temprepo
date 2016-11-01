let expect = require('chai').expect
let isOddOrEven = require("../Mocha Exercises/evenorodd").isOddOrEven

describe("isOddOrEven(number) testing", function() {
  it("should return undefined for (2)", function() {
    expect(isOddOrEven(2)).to.be.undefined;
  });
   it("should return even for ('aaaa')", function() {
    expect(isOddOrEven('aaaa')).to.be.equal('even');
  });
  it("should return even for ('aaa')", function() {
    expect(isOddOrEven('aaa')).to.be.equal('odd');
  });
 
 
});