const { defaultOwner, setDefaultOwner } = require('./defaultOwner');

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

const spaceship = {};
spaceship.owner = defaultOwner();

module.exports = spaceship;
