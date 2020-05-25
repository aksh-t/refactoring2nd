function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

module.exports = function filterByInNewEngland(someCustomers) {
  const newEnglanders = someCustomers.filter(c => inNewEngland(c));
  return newEnglanders;
};