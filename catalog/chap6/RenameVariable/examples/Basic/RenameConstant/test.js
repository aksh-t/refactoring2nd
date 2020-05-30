const expect = require('chai').expect;
const { getCompanyName } = require('./main');

describe('getCompanyName', () => {
  it('', () => {
    expect(getCompanyName()).to.equal('Acme Gooseberries');
  });
});