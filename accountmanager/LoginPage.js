

var db_server 	= "scrumlords.cis440.com";		// mySQL server
var db_port     = "3306"						// port
var db_username = "scrumlords"; 				// login name
var db_password = "!!Cis440"; 					// login password
var db_table 	= "user"; 						// database to use
var selectStmt  = "";
var id = document.getElementById("myEmail");
var password = document.getElementById("myPassword");
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');

var tempUsername = 0;
var tempPassword = 0;
var inputValid = false;

var connection = mysql.createConnection({
  host     : 'localhost:3306',
  port	   : '3306',
  user     : 'scrumlords',
  password : '!!Cis440',
  database : 'restauranteer'
});

function initialize(){
	connection.connect();
}

function submit(form){

	tempUsername = document.getElementById('myEmail').value;
	tempPassword = document.getElementById('myPassword').value;

	selectStmt = "Select * from user where Cust_email = '" + tempUsername + "' and Cust_password = '" + tempPassword + "';";

	runQuery();


}

function runQuery() {

		MySql.Execute(
			db_server,				// mySQL server
			db_username, 				// login name
			db_password, 			// login password
			"restauranteer", 			// database to use
									// SQL query string:
			selectStmt,
	        function (data) {
	        	console.log(data);
	        	if(data.Result.length==[0]) 
	        		{inputValid=false;
	        			alert("Please enter valid email and password");}
	        			else
	        				{inputValid=true;
	        			alert("login successful!")
	        			window.location.href = "RedirectPage.html";
        		}
	    	}
	    );

   }

   function createNewAccount()
   {
   		var fname = document.getElementByName('fname');
   		var lname = document.getElementByName('lname');
   		var email = document.getElementByName('email');
   		var password = document.getElementByName('password');

   		// code to pass variables to web services to see if email already exists
   		// if it does not exist, call method to create new entry in db and navigate to homepage
   		console.log(fname);
   		console.log(lname);
   		console.log(email);
   		console.log(password);
   		debugger;

   		// window.location='./loginPage.html'
   }