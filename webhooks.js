// Include the Appbase lib and json for the credentials
var config = require('./config.json');
var Appbase = require('appbase-js');

// Create Appbase reference object
var appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  username: config.appbase_username,
  password: config.appbase_password,
  appname: config.appbase_app_name
})

// Appbase type that we will be using
var appbase_type = "test"

// 2D array where we have defined the URL where we want webhook request to happen
// when the API call range is between the specified values
var url_value_array = [
			["http://104.236.204.23:8080/api/enterprise",100000000,1000000000],
			["http://104.236.204.23:8080/api/premier",50000000,100000000],
			["http://104.236.204.23:8080/api/growth",10000000,50000000],
			["http://104.236.204.23:8080/api/startup",1000000,10000000],
			["http://104.236.204.23:8080/api/hacker",100000,1000000],
			["http://104.236.204.23:8080/api/free",0,100000]
		]

// Loop through all the url and values and set the webhooks
for(index in url_value_array){
	// Set webhooks in Appbase
	appbaseRef.searchStreamToURL(
	{
	    type: appbase_type,
	    body:{
		    query:{
	      	    range : {
	      	        count : {
	      	            gte : url_value_array[index][1],
	      	        	lt : url_value_array[index][2]
	      	        }
	      	    }
	        }
	    }	
	},
	{
	    url: url_value_array[index][0],
	    method: "GET"
	}).on('data', function(res) {
	 	console.log("Webhook successfully registered: ", res);
	 	// If "stop" argument is passed, we de-register all the webhook that were set previously
	 	if(process.argv[2] == "stop"){
	 		this.stop().on('data', function(res) {
	 		    console.log("Webhook de-registered: ", res);
	 		});
	 	}
	})
}