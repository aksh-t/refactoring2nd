const expect = require('chai').expect;
const { organization, H1, updateName } = require('./main');

describe('H1', () => {
  it('', () => {
    expect(H1()).to.equal("<h1>Acme Gooseberries</h1>");
  });
});

describe('updateName', () => {
  it('', () => {
    updateName("Hoge");
    expect(organization.name).to.equal("Hoge");
  });
});