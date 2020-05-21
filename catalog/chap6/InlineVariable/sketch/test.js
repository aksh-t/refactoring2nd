const expext = require('chai').expect;
const isOver1K = require('./main');

describe('isOver1K', function () {
  it('is over 1K', function () {
    const anOrder = { basePrice: 1001 };
    expext(isOver1K(anOrder)).to.equal(true);
  });
  it('is not over 1K', function () {
    const anOrder = { basePrice: 1000 };
    expext(isOver1K(anOrder)).to.equal(false);
  });
});