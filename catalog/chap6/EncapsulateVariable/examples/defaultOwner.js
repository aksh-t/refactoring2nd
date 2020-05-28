let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
exports.defaultOwner = function defaultOwner() { return new Person(defaultOwnerData); };
exports.setDefaultOwner = function setDefaultOwner(arg) { defaultOwnerData = arg; };

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstNmae = data.firstName;
  }
  get lastName() { return this._lastName; }
  get firstName() { return this._firstNmae; }
}