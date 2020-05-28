let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
exports.defaultOwner = function defaultOwner() { return Object.assign({}, defaultOwnerData); };
exports.setDefaultOwner = function setDefaultOwner(arg) { defaultOwnerData = arg; };
