const expect = require('chai').expect;
const { Order } = require("./main");

describe('Order', () => {
  it('price', () => {
    const aOrder = new Order(5, { price: 500 });
    // 5 * 500 * (0.98 - 0.03)
    expect(aOrder.price).to.equal(2375);
  });
});