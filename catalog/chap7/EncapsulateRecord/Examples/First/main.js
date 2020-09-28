class Organization {
  constructor(data) {
    this._data = data;
  }
  get name() { return this._data.name; }
  set name(aString) { this._data.name = aString; }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

function getOrganization() {
  return organization;
}

function H1() {
  const result = `<h1>${getOrganization().name}</h1>`;
  return result;
};

function updateName(newName) {
  getOrganization().name = newName;
};

exports.organization = organization;
exports.H1 = H1;
exports.updateName = updateName;
