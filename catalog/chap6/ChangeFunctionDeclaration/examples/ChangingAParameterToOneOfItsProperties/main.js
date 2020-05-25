function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

module.exports = function filterByInNewEngland(someCustomers) {
  const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
  return newEnglanders;
};