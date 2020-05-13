// var assert = require('assert');
// var assert = require('chai').assert;
// var should = require('chai').should();
var expect = require('chai').expect;
const { Province, sampleProvinceData } = require("../src/main");

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    // asia.shortfall.should.equal(5);
    expect(asia.shortfall).equal(5);
  });
});