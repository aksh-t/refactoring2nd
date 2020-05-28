const { expect, assert } = require('chai');
const spaceship = require('./main');
const { defaultOwner, setDefaultOwner } = require('./defaultOwner');

describe('spaceship', () => {
  it('', () => {
    expect(spaceship.owner.firstName).to.equal("Rebecca");
    expect(spaceship.owner.lastName).to.equal("Parsons");
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
    assert.equal("Fowler", owner1.lastName, "owner1 after owner2 lastName reassign");
    assert.equal("Fowler", owner2.lastName, "owner2 after owner2 lastName reassign");

    setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });
    const owner3 = defaultOwner();
    assert.equal("Parsons", owner3.lastName, "owner3 after setDefaultOwner");
    assert.equal("Fowler", owner1.lastName, "owner1 after setDefaultOwner");
    assert.equal("Fowler", owner2.lastName, "owner2 after setDefaultOwner");
  });
});