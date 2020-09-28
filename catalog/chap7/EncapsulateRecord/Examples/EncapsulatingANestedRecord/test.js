const expect = require('chai').expect;
const { customerData, update, compareUsage } = require('./main');

describe('compareUsage', () => {
  it('', () => {
    const [customerID, year, month] = ["1920", "2016", "1"];
    const expectObject = { laterAmount: 50, change: 50 - 70 };
    expect(compareUsage(customerID, year, month)).to.deep.equal(expectObject);
  });
});

// 先に更新するとテストが失敗するので、更新のテストを後にする
// FIXME: 順番に依存しないテストにするべき
describe('update', () => {
  it('', () => {
    const [customerID, year, month, amount] = ["1920", "2016", "1", 100];
    update(customerID, year, month, amount);
    expect(customerData._data[customerID].usages[year][month]).to.equal(amount);
  });
});
