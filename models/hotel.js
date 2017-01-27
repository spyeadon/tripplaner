const Sequelize = require('sequelize');
const db = require('./db.js');


var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER
	},
	amenitis: {
		type: Sequelize.STRING
	}
	
});


module.exports = Hotel;