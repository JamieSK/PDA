let Calculator = require('../../public/js/calculator.js');
let assert = require('assert');

describe('calculator', function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add', function() {
    calculator.previousTotal = 23;
    calculator.add(2);
    assert.equal(calculator.runningTotal, 25);
  });

  it('should be able to subtract', function() {
    calculator.previousTotal = 23;
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, 21);
  });

  it('should be able to multiply', function() {
    calculator.previousTotal = 23;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 46);
  });

  it('should be able to divide', function() {
    calculator.previousTotal = 23;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 11.5);
  });

  it('should make the running total a number when it\'s clicked', function() {
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
  });

  it('should append to the running total a number when it\'s clicked', function() {
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 22);
  });

  it('should clear the running total if newTotal == true', function() {
    calculator.numberClick(2);
    calculator.newTotal = true;
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4);
  });

  it('should log the operator when clicked', function() {
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  });

  it('should clear the operator when clicking equals', function() {
    calculator.operatorClick('+');
    calculator.operatorClick('=');
    assert.equal(calculator.previousOperator, null);
  });

  it('should replace previousTotal with runningTotal when an operator is clicked', function() {
    calculator.runningTotal = 7;
    assert.equal(calculator.previousTotal, 0);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 7);
  });

  it('should flag newTotal == true when an operator is clicked', function() {
    calculator.numberClick(2);
    assert.equal(calculator.newTotal, false);
    calculator.operatorClick('=');
    assert.equal(calculator.newTotal, true);
  });

  it('should set runningTotal to 0 when clearClick()', function() {
    calculator.runningTotal = 2;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

  it('should set previousOperator and previousTotal to null when clearClick() and runningTotal == 0', function() {
    calculator.previousOperator = '+';
    calculator.previousTotal = 2;
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
  });
});
