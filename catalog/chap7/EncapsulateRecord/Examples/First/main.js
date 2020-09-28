const organization = { name: "Acme Gooseberries", country: "GB" };
exports.organization = organization;

exports.H1 = function H1() {
  const result = `<h1>${organization.name}</h1>`;
  return result;
};

exports.updateName = function updateName(newName) {
  organization.name = newName;
};