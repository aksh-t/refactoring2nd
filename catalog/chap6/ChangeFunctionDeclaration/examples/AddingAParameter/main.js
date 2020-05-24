module.exports = class Book {
  constructor() {
    this._reservations = [];
  }
  get reservations() {
    return this._reservations;
  }
  addReservation(customer) {
    this.zz_addReservation(customer);
  }
  zz_addReservation(customer) {
    this._reservations.push(customer);
  }
}