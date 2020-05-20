const expect = require("chai").expect;
const price = require("./main");

describe('price', function () {
  it('normal', function () {
    const order = { quantity: 10, itemPrice: 50 };
    expect(price(order)).to.equal(550);
  });
  it('discount and extra shipping', function () {
    const order = { quantity: 600, itemPrice: 100 };
    expect(price(order)).to.equal(59600);
  });
});
