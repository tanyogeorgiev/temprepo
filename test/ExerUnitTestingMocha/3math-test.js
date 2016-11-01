let expect = require('chai').expect
let mathEnforcer = require("../../Mocha Exercises/3Math").mathEnforcer

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
   it("should return 10 after addfive(5.2)", function() {
   let value = mathEnforcer.addFive(5.2);
    expect(value).to.be.equal(5+5.2);
  });
   it("should return 10 after addfive(-5.2)", function() {
   let value = mathEnforcer.addFive(-5.2);
    expect(value).to.be.closeTo(5-5.2,0.01);
  });
  
    it("should return undefined after addfive", function() {
   let value = mathEnforcer.addFive();
    expect(value).to.be.undefined;
  });
  it("should return undefined after addfive", function() {
   let value = mathEnforcer.addFive('22');
    expect(value).to.be.undefined;
  });

     it("should return 10 after sum(5,5)", function() {
   let value = mathEnforcer.sum(5,5);
    expect(value).to.be.equal(10);
  });
     it("should return 10 after sum(0.01,5)", function() {
   let value = mathEnforcer.sum(0.01,5);
    expect(value).to.be.closeTo(5.01,0.01);
  });
    it("should return 10 after sum(5,-15)", function() {
   let value = mathEnforcer.sum(5,-15);
    expect(value).to.be.equal(5-15);
  });
    it("should return 10 after sum(5.1,5.2)", function() {
   let value = mathEnforcer.sum(5.1,5.2);
    expect(value).to.be.equal(5.1+5.2);
  });
  
    it("should return undefined after sum()", function() {
   let value = mathEnforcer.sum();
    expect(value).to.be.undefined;
  });
   it("should return undefined after sum('2')", function() {
   let value = mathEnforcer.sum();
    expect(value).to.be.undefined;
  });

     it("should return 10 after subtractTen(12)", function() {
   let value = mathEnforcer.subtractTen(12);
    expect(value).to.be.equal(2);
  });
  it("should return 10 after subtractTen(12)", function() {
   let value = mathEnforcer.subtractTen(-20012);
    expect(value).to.be.equal(-10-20012);
  });
  it("should return 10 after subtractTen(0.01)", function() {
   let value = mathEnforcer.subtractTen(0.01);
    expect(value).to.be.equal(-10+0.01);
  });
   it("should return 10 after subtractTen(1.2)", function() {
   let value = mathEnforcer.subtractTen(1.2);
    expect(value).to.be.equal(1.2-10);
  });
  
  
    it("should return undefined after subtractTen", function() {
   let value = mathEnforcer.subtractTen();
    expect(value).to.be.undefined;
  });
  it("should return undefined after subtractTen", function() {
   let value = mathEnforcer.subtractTen('ss');
    expect(value).to.be.undefined;
  });
})