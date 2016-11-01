let expect = require('chai').expect
let mathEnforcer = require("../Mocha Exercises/3Math").mathEnforcer

describe("MATH OBJECT", function() {

let calc;
  beforeEach(function() {
    
  });

  it('should be object, instance of calculator', () => {
        expect(mathEnforcer).to.be.an('object');
    });

    it('should have add, subtract, get functions', () => {
        expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
    })
     it("should return 10 after addfive(5)", function() {
   let value = mathEnforcer.addFive(5);
    expect(value).to.be.equal(10);
  });
  
  
    it("should return undefined after addfive", function() {
   let value = mathEnforcer.addFive();
    expect(value).to.be.undefined;
  });

     it("should return 10 after sum(5,5)", function() {
   let value = mathEnforcer.sum(5,5);
    expect(value).to.be.equal(10);
  });
  
  
    it("should return undefined after sum()", function() {
   let value = mathEnforcer.sum();
    expect(value).to.be.undefined;
  });


     it("should return 10 after subtractTen(12)", function() {
   let value = mathEnforcer.subtractTen(12);
    expect(value).to.be.equal(2);
  });
  
  
    it("should return undefined after subtractTen", function() {
   let value = mathEnforcer.subtractTen();
    expect(value).to.be.undefined;
  });
})