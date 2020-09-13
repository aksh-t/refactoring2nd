const expect = require('chai').expect;
const { client1, client2, client3, enrichReading } = require('./main');

describe('client1', () => {
  it('', () => {
    expect(client1()).to.equal(20);
  });
});

describe('client2', () => {
  it('', () => {
    expect(client2()).to.equal(10);
  });
});

describe('client3', () => {
  it('', () => {
    expect(client3()).to.equal(20);
  });
});

describe('enrichReading', () => {
  it('', () => {
    const aReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
    // 入力したReadingのディープコピーが返ってくる
    expect(enrichReading(aReading)).to.deep.equal(aReading);
  });
});