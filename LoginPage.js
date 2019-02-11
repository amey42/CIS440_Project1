var db_server 	= "scrumlords.cis440.com";		// mySQL server
var db_port     = "3306"						// port
var db_username = "scrumlords"; 				// login name
var db_password = "!!Cis440"; 					// login password
var db_table 	= "user"; 						// database to use
var selectStmt  = "SELECT Cust_email, Cust_password FROM user";
var id = document.getElementById("myEmail");
var password = document.getElementById("myPassword");
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');

var connection = mysql.createConnection({
  host     : 'localhost:3306',
  port	   : '3306',
  user     : 'scrumlords',
  password : '!!Cis440',
  database : 'restauranteer'
});



// function submit(){
// 	connection.connect();
// }

// function processQueryResult(returned){
// 	if (!returned.Success) {
// 		alert("Please enter existing ASU Email and Password");
// 	}
// 	else{
// 		if (returned.Result[0].Cust_password == password.value 
// 		 && returned.Result[0].Cust_email == id.value) {
// 			//*Display next page*
// 			alert("Login Successful")
// 		}
// 		else{
// 			alert("Please enter existing ASU ID and Password");
// 		}
// 	}
// }