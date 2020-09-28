const organization = { name: "Acme Gooseberries", country: "GB" };

function H1() {
  const result = `<h1>${organization.name}</h1>`;
  return result;
};

function updateName(newName) {
  organization.name = newName;
};

exports.organization = organization;
exports.H1 = H1;
exports.updateName = updateName;
