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
  const rawReading = acquireReading();
  // CommonJSでexportすると、同じモジュール内でもexports経由じゃないと参照できないっぽい
  const aReading = exports.enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
  return baseCharge;
};

exports.client2 = function client2() {
  const rawReading = acquireReading();
  // CommonJSでexportすると、同じモジュール内でもexports経由じゃないと参照できないっぽい
  const aReading = exports.enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;
  return taxableCharge;
};

exports.client3 = function client3() {
  const rawReading = acquireReading();
  // CommonJSでexportすると、同じモジュール内でもexports経由じゃないと参照できないっぽい
  const aReading = exports.enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
  return basicChargeAmount;
};

exports.enrichReading = function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};