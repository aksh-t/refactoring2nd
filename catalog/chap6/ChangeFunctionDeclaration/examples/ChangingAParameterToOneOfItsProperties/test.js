const expect = require('chai').expect;
const filterByInNewEngland = require('./main');

describe('filterByInNewEngland', () => {
  it('', () => {
    const someCustomers = [
      { address: { state: "MA" } },
      { address: { state: "ZZ" } },
      { address: { state: "RI" } }
    ];
    expect(filterByInNewEngland(someCustomers)).to.deep.equal([
      { address: { state: "MA" } },
      { address: { state: "RI" } }
    ]);
  });
});