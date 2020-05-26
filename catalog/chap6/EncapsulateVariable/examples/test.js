const expect = require('chai').expect;
const spaceship = require('./main');

describe('spaceship', () => {
  it('', () => {
    expect(spaceship.owner).to.deep.equal({ firstName: "Martin", lastName: "Fowler" });
  });
});