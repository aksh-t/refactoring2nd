var expect = require('chai').expect;
const reportLines = require("./main");

describe('reportLines', function () {
  it('', function () {
    const aCustomer = { name: "Tom", location: "Hollywood" };
    expect(reportLines(aCustomer)).to.deep.equal([["name", "Tom"], ["location", "Hollywood"]]);
  });
});


