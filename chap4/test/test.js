var assert = require('assert');
const {Province, sampleProvinceData} = require("../src/main");

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});