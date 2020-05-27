const { getDafaultOwner, setDefaultOwner } = require('./defaultOwner');

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

const spaceship = {};
spaceship.owner = getDafaultOwner();

module.exports = spaceship;
