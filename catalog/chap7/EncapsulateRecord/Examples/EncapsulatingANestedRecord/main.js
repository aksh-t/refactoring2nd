var _ = require('lodash');

const rawCustomerData = {
  "1920": {
    name: "martin",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55,
      },
      "2015": {
        "1": 70,
        "2": 63
      }
    }
  },
  "38673": {
    name: "neal",
    id: "38673",
  }
};

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}

// customerDataがletで宣言されていることを期待してるっぽい
let customerData;

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData.rawData; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }

// たぶんこんな感じで、CustomerDataクラスを初期化することを、期待していると思われる
setRawDataOfCustomers(rawCustomerData);

function update(customerID, year, month, amount) {
  getCustomerData().setUsage(customerID, year, month, amount);
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

exports.customerData = customerData;
exports.update = update;
exports.compareUsage = compareUsage;