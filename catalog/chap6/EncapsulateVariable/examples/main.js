let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
function getDafaultOwner() { return defaultOwner; }
function setDefaultOwner(arg) { defaultOwner = arg; }

defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };

const spaceship = {};
spaceship.owner = defaultOwner;

module.exports = spaceship;
