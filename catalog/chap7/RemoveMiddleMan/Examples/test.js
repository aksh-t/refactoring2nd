const expect = require('chai').expect;
const { Person, Department } = require('./main');

describe('', () => {
  it('', () => {
    const data = {
      department: {
        manager: {
          name: "Martin"
        }
      }
    };
    const aPerson = new Person(data);

    const manager = aPerson.manager;
    expect(manager).to.deep.equal({ name: "Martin" });

  });
});