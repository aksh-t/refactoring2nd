module.exports = function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
};
function gatherCustomerData(out, aCustomer) {
  out.push(["location", aCustomer.location]);
}