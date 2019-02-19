

//var db_server 	= "scrumlords.cis440.com";		// mySQL server
//var db_port     = "3306"						// port
//var db_username = "scrumlords"; 				// login name
//var db_password = "!!Cis440"; 					// login password
//var db_table 	= "user"; 						// database to use
//var selectStmt  = "";
//var id = document.getElementById("myEmail");
//var password = document.getElementById("myPassword");
//var mysql = require('mysql');
//var express = require('express');
//var session = require('express-session');

//var tempUsername = 0;
//var tempPassword = 0;
//var inputValid = false;

//var connection = mysql.createConnection({
//  host     : 'localhost:3306',
//  port	   : '3306',
//  user     : 'scrumlords',
//  password : '!!Cis440',
//  database : 'restauranteer'
//});

//function initialize(){
//	connection.connect();
//}

//function submit(form){

//	tempUsername = document.getElementById('myEmail').value;
//	tempPassword = document.getElementById('myPassword').value;

//	selectStmt = "Select * from user where Cust_email = '" + tempUsername + "' and Cust_password = '" + tempPassword + "';";

//	runQuery();


//}

//function runQuery() {

//		MySql.Execute(
//			db_server,				// mySQL server
//			db_username, 				// login name
//			db_password, 			// login password
//			"restauranteer", 			// database to use
//									// SQL query string:
//			selectStmt,
//	        function (data) {
//	        	console.log(data);
//	        	if(data.Result.length==[0]) 
//	        		{inputValid=false;
//	        			alert("Please enter valid email and password");}
//	        			else
//	        				{inputValid=true;
//	        			alert("login successful!")
//	        			window.location.href = "RedirectPage.html";
//        		}
//	    	}
//	    );
//   }

    function LogOn(uid, pass)
    {
        var webMethod = "AccountServices.asmx/LogOn";
        var parameters = "{\"uid\":\"" + encodeURI(uid) + "\",\"pass\":\"" + encodeURI(pass) + "\"}";

        $.ajax({
            //post is more secure than get, and allows
            //us to send big data if we want.  really just
            //depends on the way the service you're talking to is set up, though
            type: "POST",
            //the url is set to the string we created above
            url: webMethod,
            //same with the data
            data: parameters,
            //these next two key/value pairs say we intend to talk in JSON format
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //jQuery sends the data and asynchronously waits for a response.  when it
            //gets a response, it calls the function mapped to the success key here
            success: function (msg)
            {
                //the server response is in the msg object passed in to the function here
                //since our logon web method simply returns a true/false, that value is mapped
                //to a generic property of the server response called d (I assume short for data
                //but honestly I don't know...)
                if (msg.d)
                {
                    //server replied true, so show the accounts panel
                    alert("success!");
                    window.location = './homepage-try.html';
                }
                else
                {
                    //server replied false, so let the user know
                    //the logon failed
                    alert("logon failed");
                }
            },
            error: function (e)
            {
                //if something goes wrong in the mechanics of delivering the
                //message to the server or the server processing that message,
                //then this function mapped to the error key is executed rather
                //than the one mapped to the success key.  This is just a garbage
                //alert becaue I'm lazy
                alert("boo...");
            }
        });

    }

//passes account info to the server, to create an account request
    function CreateAccount(id, pass, fname, lname)
    {
        var webMethod = "AccountServices.asmx/RequestAccount";
        var parameters = "{\"uid\":\"" + encodeURI(id) + "\",\"pass\":\"" + encodeURI(pass) + "\",\"firstName\":\"" + encodeURI(fname) + "\",\"lastName\":\"" + encodeURI(lname) + "\"}";

        $.ajax({
            type: "POST",
            url: webMethod,
            data: parameters,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg)
            {
                alert("Success");
                window.location = "./LoginPage.html";
            },
            error: function (e)
            {
                alert("boo...");
            }
        });

    }
function AddRestaurant(name, type, address, city, state, zip, comments)
    //score_food, score_atmo, score_service,phone, email, tried
    {
        var webMethod = "AccountServices.asmx/AddRestaurant";
        var parameters = "{\"name\":\"" + encodeURI(name) + "\",\"type\":\"" + encodeURI(type) + "\",\"address\":\"" + encodeURI(address) + "\",\"city\":\"" + encodeURI(city) + "\",\"state\":\"" + encodeURI(state) + "\",\"zip\":\"" + encodeURI(zip) + "\", \"comments\":\"" + encodeURI(comments) + "\"}";
        //"\",\"score_food\":\"" + encodeURI(score_food) + "\",\"score_atmo\":\"" + encodeURI(score_atmo) + "\", \"score_service\":\"" + encodeURI(score_service) ++ "\",\"phone\":\"" + encodeURI(phoemail\":\"" + encodeURI(email) + "\",\"tried\":\"" + encodeURI(tried)
        console.log(parameters);

        $.ajax({
            type: "POST",
            url: webMethod,
            data: parameters,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg)
            {
                alert("Success");
                window.location = "./homepage-try.html";
            },
            error: function (e)
            {
                alert("Server error");
            }
        });

    }




