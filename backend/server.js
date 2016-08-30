var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Thatsjoe1.',
	database: 'webpackcli'
});

connection.connect(function() {
	console.log("Database connected");
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(__dirname));


app.get('/', function(req, res) {
	connection.query('SELECT * FROM users ORDER BY id DESC', function(err, rows, fields) {
		if(err) throw err;
		// console.log(fields);
		res.json(rows);
	});
});

app.post('/adduser', function(req, res, next) {
	var user = req.body;
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			user = {
				username: user.username,
				hashedpassword: hash
			};
			console.log(user);

			var addUser = connection.query('INSERT INTO users SET ?', user, function(err, res) {
				if(err) throw err;
				// console.log(res);
			});

			if(addUser) {
				res.send({"Success": "The data has been added"});
			} else {
				res.send({"Error": "The data was not updated"});
			}
		});
	});
});





port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("listening to port " + port);
})

