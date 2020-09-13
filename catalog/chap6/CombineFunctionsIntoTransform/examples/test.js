const expect = require('chai').expect;
var _ = require('lodash');
const { client1, client2, client3, enrichReading } = require('./main');
const { assert } = require('chai');

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
    const expectedReading = _.cloneDeep(aReading);
    expectedReading.baseCharge = 20;
    expectedReading.taxableCharge = 10;

    // 入力したReadingに派生情報が追加されて返ってくる
    expect(enrichReading(aReading)).to.deep.equal(expectedReading);
  });
});

describe('check reading unchanged', function () {
  const baseReading = { customer: "ivan", quantity: 15, month: 5, year: 2017 };
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  assert.deepEqual(baseReading, oracle);
});