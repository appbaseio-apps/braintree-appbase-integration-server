// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var braintree = require("braintree");
var config = require('./config.json');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: config.braintreeMerchantId,
  publicKey: config.braintreePublicKey,
  privateKey: config.braintreePrivateKey
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    res.json({ message: 'Hooray! This is my first API call!' });   
});

router.get('/free', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.freePlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/startup', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.startupPlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/growth', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.growthPlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/hacker', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.hackerPlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});


router.get('/premier', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.premierPlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});


router.get('/enterprise', function(req, res) {
  	gateway.subscription.update(config.subscriptionId, {
  	  planId: config.enterprisePlanId,
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);