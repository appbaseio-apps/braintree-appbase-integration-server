var config = require('./config.json');
var Appbase = require('appbase-js');

var appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  username: config.appbase_username,
  password: config.appbase_password,
  appname: config.appbase_app_name
})
var appbase_type = "test"
var url_value_array = [
			["http://104.236.204.23:8080/api/enterprise",100000000,1000000000],
			["http://104.236.204.23:8080/api/premier",50000000,100000000],
			["http://104.236.204.23:8080/api/growth",10000000,50000000],
			["http://104.236.204.23:8080/api/startup",1000000,10000000],
			["http://104.236.204.23:8080/api/hacker",100000,1000000],
			["http://104.236.204.23:8080/api/free",0,100000]
		]
for(index in url_value_array){
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
	}, {
	    url: url_value_array[index][0],
	    method: "GET",
	    string_body: url_value_array[index][0]
	}).on('data', function(res) {
	 	console.log("Webhook successfully registered: ", res);
	 	if(process.argv[2] == "stop"){
	 		this.stop().on('data', function(res) {
	 		    console.log("Webhook de-registered: ", res);
	 		});
	 	}
	})
}