describe("createCalculator()", function() {
  let calc;
  beforeEach(function() {
    calc = createCalculator();
  });

  it('should be object, instance of calculator', () => {
        expect(calculator).to.be.an('object');
    });

    it('should have add, subtract, get functions', () => {
        expect(calc.hasOwnProperty('add')).to.be.true;
        expect(calc.hasOwnProperty('subtract')).to.be.true;
        expect(calc.hasOwnProperty('get')).to.be.true;
    });


  it("should return 5 after {add 3; add 2}", function() {
   let value = calc.get();
    expect(value).to.be.equal(0);
  });
  it("should return 5 after {add 3; add 2}", function() {
    calc.add(3); calc.add(2); let value = calc.get();
    expect(value).to.be.equal(5);
  });
 
  it("should return 5 after {add 3; add 2}", function() {
    calc.substract(3); calc.substract(2); let value = calc.get();
    expect(value).to.be.equal(-5);
  });
  it("should return 5 after {add 3; add 2}", function() {
    calc.add(10); calc.substract('7');calc.add('-2');calc.substract('-1'); let value = calc.get();
    expect(value).to.be.equal(2);
  });
    it("should return 5 after {add 3; add 2}", function() {
    calc.add(5.3); calc.substract(1.1); let value = calc.get();
    expect(value).to.be.equal(4.2);
  });
    it("should return 5 after {add 3; add 2}", function() {
    calc.add('hello');  let value = calc.get();
    expect(value).to.be.NaN;
  });
    it("should return 5 after {add 3; add 2}", function() {
    calc.substract('hello');  let value = calc.get();
    expect(value).to.be.NaN;
  });
  
});
