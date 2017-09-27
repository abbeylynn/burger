var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "cookie",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) {
		console.error("error connecting");
		return
	}
	console.log("connected!")
});

module.exports = connection;