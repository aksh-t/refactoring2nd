class Organization {
  constructor(data) {
    this._name = data.name;
    this._countory = data.country;
  }
  get name() { return this._name; }
  set name(aString) { this._name = aString; }
  get country() { return this._country; }
  set countory(aCountryCode) { this._countory = aCountryCode; }
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
