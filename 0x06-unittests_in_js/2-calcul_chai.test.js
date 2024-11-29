const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  it('should return the correct sum when both arguments are rounded', () => {
    expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
  });

  it('should return the correct difference when both arguments are rounded', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.6)).to.equal(-4);
  });

  it('should return "Error" when division by zero occurs', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return the correct division result when both arguments are rounded', () => {
    expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
  });
});
