const customerData = {
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

function update(customerID, year, month, amount) {
  customerData[customerID].usages[year][month] = amount;
}

function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

exports.customerData = customerData;
exports.update = update;
exports.compareUsage = compareUsage;