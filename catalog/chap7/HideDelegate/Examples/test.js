const { expect } = require("chai");
const { Person, Department } = require("./main");

describe('', () => {
  it('client code', () => {
    const aPerson = new Person("Tom");
    const aDepartment = new Department();
    aDepartment.chargeCode = 101;
    aDepartment.manager = "Bob";
    aPerson.department = aDepartment;

    const manager = aPerson.manager;
    expect(manager).to.equal("Bob");
  });
});