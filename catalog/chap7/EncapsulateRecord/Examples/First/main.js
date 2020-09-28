const organization = { name: "Acme Gooseberries", country: "GB" };

function getRawDataOfOrganization() {
  return organization;
}

function H1() {
  const result = `<h1>${getRawDataOfOrganization().name}</h1>`;
  return result;
};

function updateName(newName) {
  getRawDataOfOrganization().name = newName;
};

exports.organization = organization;
exports.H1 = H1;
exports.updateName = updateName;
