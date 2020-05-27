let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
exports.getDafaultOwner = function getDafaultOwner() { return defaultOwner; }
exports.setDefaultOwner = function setDefaultOwner(arg) { defaultOwner = arg; }
