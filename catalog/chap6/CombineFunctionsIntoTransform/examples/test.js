const expect = require('chai').expect;
const { client1, client2, client3 } = require('./main');

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