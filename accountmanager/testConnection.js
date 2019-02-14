var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'scrumlords.cis440.com',
  port	   : '3306',
  user     : 'scrumlords',
  password : '!!Cis440',
  database : 'restauranteer'
});

connection.connect(function(err){
	if (err)
	{
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Connected!");
});