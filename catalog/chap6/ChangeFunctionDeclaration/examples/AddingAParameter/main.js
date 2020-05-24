const assert = require('assert');

module.exports = class Book {
  constructor() {
    this._reservations = [];
  }
  get reservations() {
    return this._reservations;
  }
  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
};