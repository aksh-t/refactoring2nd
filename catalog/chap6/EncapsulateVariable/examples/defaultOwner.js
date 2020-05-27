let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
exports.defaultOwner = function defaultOwner() { return defaultOwnerData; }
exports.setDefaultOwner = function setDefaultOwner(arg) { defaultOwnerData = arg; }
