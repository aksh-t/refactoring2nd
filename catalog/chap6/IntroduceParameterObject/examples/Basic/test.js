const expect = require('chai').expect;
const alerts = require('./main');

describe('alerts', () => {
  it('', () => {
    expect(alerts).to.deep.equal([
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 58, time: "2016-11-10 09:30" },
    ]);
  });
});