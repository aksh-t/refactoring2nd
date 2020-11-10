const { expect } = require("chai");
const { Person, Department } = require("./main");

describe('', () => {
  it('client code', () => {
    const aPerson = new Person("Tom");
    aPerson.chargeCode = 101;
    aPerson.manager = "Bob";

    const manager = aPerson.manager;
    expect(manager).to.equal("Bob");
  });
});