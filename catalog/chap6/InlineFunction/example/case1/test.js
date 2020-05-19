const rating = require("./main");
var expect = require('chai').expect;

describe('rating', function () {
  it('moreThanFiveLateDeliveries', function () {
    const driver = { numberOfLateDeliveries: 6 };
    expect(rating(driver)).equal(2);
  });
  it('not moreThanFiveLateDeliveries', function () {
    const driver = { numberOfLateDeliveries: 5 };
    expect(rating(driver)).equal(1);
  });
});


