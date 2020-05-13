// var assert = require('assert');
// var assert = require('chai').assert;
// var expect = require('chai').expect;
var should = require('chai').should();
const { Province, sampleProvinceData } = require("../src/main");

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    // expect(asia.shortfall).equal(5);
    asia.shortfall.should.equal(5);
  });
});