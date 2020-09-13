var _ = require('lodash');

// 適当な値を返す関数を用意
function acquireReading() {
  const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  return reading;
};

// 適当な値を返す関数を用意
function baseRate(month, year) {
  return 2;
}

// 適当な値を返す関数を用意
function taxThreshold(year) {
  return 10;
}

exports.client1 = function client1() {
  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
  return baseCharge;
};

exports.client2 = function client2() {
  const aReading = acquireReading();
  const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  return taxableCharge;
};

exports.client3 = function client3() {
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
  return basicChargeAmount;

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};

exports.enrichReading = function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}