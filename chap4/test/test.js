// var assert = require('assert');
// var assert = require('chai').assert;
// var should = require('chai').should();
var expect = require('chai').expect;
const { Province, sampleProvinceData } = require("../src/main");

describe('province', function () {
  const asia = new Province(sampleProvinceData()); // これはやってはいけない
  it('shortfall', function () {
    // assert.equal(asia.shortfall, 5);
    // asia.shortfall.should.equal(5);
    expect(asia.shortfall).equal(5);
  });
  it('profit', function () {
    expect(asia.profit).equal(230);
  });
});