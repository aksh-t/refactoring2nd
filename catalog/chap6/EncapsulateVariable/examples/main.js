let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
function getDafaultOwner() { return defaultOwner; }
function setDefaultOwner(arg) { defaultOwner = arg; }

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

const spaceship = {};
spaceship.owner = getDafaultOwner();

module.exports = spaceship;
