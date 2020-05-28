const { expect, assert } = require('chai');
const spaceship = require('./main');
const { defaultOwner, setDefaultOwner } = require('./defaultOwner');

describe('spaceship', () => {
  it('', () => {
    expect(spaceship.owner).to.deep.equal({ firstName: "Rebecca", lastName: "Parsons" });
  });
});

// memo: このテストは失敗する
// なぜなら、main.jsでdefaultOwnerが書き変わってしまっているから
// describe('defaultOwner', () => {
//   it('', () => {
//     const owner1 = defaultOwner();
//     console.log("owner1", owner1);
//     assert.equal("Fowler", owner1.lastName, "when set");
//     const owner2 = defaultOwner();
//     owner2.lastName = "Parsons";
//     assert.equal("Parsons", owner1.lastName, "after change owner2"); // これでいい？
//   });
// });