//JavaScript functions for Restauranteer

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
                    //alert("success!");
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

//logs the user off both at the client and at the server
function LogOff()
{
    var webMethod = "AccountServices.asmx/LogOff";
    $.ajax({
        type: "POST",
        url: webMethod,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d) {
                //we logged off, so go back to logon page,
                //stop checking messages
                //and clear the chat panel
                window.location = "./LoginPage.html";
            }
            else {
            }
        },
        error: function (e) {
            alert("boo...");
        }
    });
}


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
                window.location = "./LoginPage.html";
            },
            error: function (e)
            {
                alert("boo...");
            }
        });

    }

    function AddRestaurantTry(name, type, address, city, state, zip)
    //score_food, score_atmo, score_service,phone, email, tried
    {
        var webMethod = "AccountServices.asmx/AddRestaurantTry";
        var parameters = "{\"name\":\"" + encodeURI(name) + "\",\"type\":\"" + encodeURI(type) + "\",\"address\":\"" + encodeURI(address) + "\",\"city\":\"" + encodeURI(city) + "\",\"state\":\"" + encodeURI(state) + "\",\"zip\":\"" + encodeURI(zip) + "\"}";
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
                window.location = "./homepage-try.html";
            },
            error: function (e)
            {
                alert("Server error");
            }
        });

    }




