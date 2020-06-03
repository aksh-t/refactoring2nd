function acquireReading() {
  const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  return reading;
}

function baseRate(month, year) {
  return 2;
}

function taxThreshold(year) {
  return 10;
}

exports.client1 = function client1() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const baseCharge = aReading.baseCharge;
  return baseCharge;
};

exports.client2 = function client2() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const taxableCharge = aReading.taxableCharge;
  return taxableCharge;
};

exports.client3 = function clinet3() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
  return basicChargeAmount;
};

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() { return this._customer; }
  get quantity() { return this._quantity; }
  get month() { return this._month; }
  get year() { return this._year; }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}