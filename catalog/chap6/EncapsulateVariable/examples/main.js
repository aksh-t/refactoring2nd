let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

const spaceship = {};
spaceship.owner = defaultOwner;

defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };

module.exports = spaceship;
