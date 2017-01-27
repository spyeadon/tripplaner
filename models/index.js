const Sequelize = require('sequelize');
var db = require('./db.js');
var Place = require('./place.js');
var Hotel = require('./hotel.js');
var Activity = require('./activity.js');
var Restaurant = require('./restaurant.js');


Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	db: db,
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}