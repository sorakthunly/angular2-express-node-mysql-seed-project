var express = require('express');
var app = express();

// Import User Module Containing Functions Related To User Data
var user = require('../models/user');

// API Routes
app.get('/', function(req, res) {

	user.findAll(function(err, rows, fields) {
		if(err) throw err;
		res.json(rows);
	})
});

app.post('/adduser', function(req, res, next) {
	
	var data = req.body;
	user.findByUsername(data.username, function(err, rows, fields) {
		if(rows.length == 1) {
			user.sendResponse(false, res);
		} else {
			user.encrypt(data, function(err, hash) {
				data = {
					username: data.username,
					hashedpassword: hash
				};
				user.addUser(data, function(err, info) {
					if(err) throw err;
					console.log(info);
					user.sendResponse(true, res);
				});
			});
		};
	});
});

module.exports = app;
