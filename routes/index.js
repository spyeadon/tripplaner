var express = require('express');
var router = express.Router();
var db = require('../models/index.js').db;
var Hotel = require('../models/index.js').Hotel;
var Activity = require('../models/index.js').Activity;
var Restaurant = require('../models/index.js').Restaurant;


router.get('/', (req, res, next) => {

	var dbinfo = {};
	Hotel.findAll()
	.then( (hotels) => {
		//console.log(hotels);
		dbinfo.hotels = hotels;
		return Restaurant.findAll();
	})
	.then( (restaurants) => {
		dbinfo.restaurants = restaurants;
		return Activity.findAll();
	})
	.then( (activities) => {
		dbinfo.activities = activities;
	})
	.then(() => {
		res.render('index', {
			hotels: dbinfo.hotels,
			restaurants: dbinfo.restaurants,
			activities: dbinfo.activities
		});
	}) 
	.catch(next);

	
	
});

module.exports = router;