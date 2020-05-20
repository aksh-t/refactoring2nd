const expect = require('chai').expect;
const Order = require('./main');

describe('Order', function () {
  it('normal', function () {
    const order = new Order({ quantity: 10, itemPrice: 50 });
    expect(order.price).to.equal(550);
  });
  it('discount and extra shipping', function () {
    const order = new Order({ quantity: 600, itemPrice: 100 });
    expect(order.price).to.equal(59600);
  });
});