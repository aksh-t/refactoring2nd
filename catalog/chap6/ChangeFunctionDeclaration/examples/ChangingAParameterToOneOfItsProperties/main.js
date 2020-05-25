function inNewEngland(aCustomer) {
  return xxNEWinNewEngland(aCustomer.address.state);
}

function xxNEWinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

module.exports = function filterByInNewEngland(someCustomers) {
  const newEnglanders = someCustomers.filter(c => xxNEWinNewEngland(c.address.state));
  return newEnglanders;
};