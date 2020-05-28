const { expect, assert } = require('chai');
const spaceship = require('./main');
const { defaultOwner, setDefaultOwner } = require('./defaultOwner');

describe('spaceship', () => {
  it('', () => {
    expect(spaceship.owner).to.deep.equal({ firstName: "Rebecca", lastName: "Parsons" });
  });
});


describe('defaultOwner', () => {
  it('', () => {
    // テストの事前状態を固定する
    setDefaultOwner({ firstName: "Martin", lastName: "Fowler" });

    const owner1 = defaultOwner();
    assert.equal("Fowler", owner1.lastName, "when set");
    const owner2 = defaultOwner();
    owner2.lastName = "Parsons";
    assert.equal("Fowler", owner1.lastName, "owner1 after change owner2");
    assert.equal("Parsons", owner2.lastName, "owner2 after change owner2");
  });
});