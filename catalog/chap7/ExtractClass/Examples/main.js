const _ = require('lodash');

class Person {
  constructor(data) {
    this._name = data.name;
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;

    this._telephoneNumber = new TelephoneNumber(
      _.pick(data, ['officeAreaCode', 'officeNumber'])
    );
  }
  get name() { return this._name; }
  set name(arg) { this._name = arg; }
  get telephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }
  get officeAreaCode() { return this._telephoneNumber.officeAreaCode; }
  set officeAreaCode(arg) { this._telephoneNumber.officeAreaCode = arg; }
  get officeNumber() { return this._telephoneNumber.officeNumber; }
  set officeNumber(arg) { this._telephoneNumber.officeNumber = arg; }
}

class TelephoneNumber {
  constructor(data) {
    this._officeAreaCode = data.officeAreaCode;
    this._officeNumber = data.officeNumber;
  }
  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = arg; }
}

exports.Person = Person;
exports.TelephoneNumber = TelephoneNumber;