# braintree-appbase-integration-server

Appbase and Braintree can be really powerful to update the pricing plan of the user on the certain condition. For this project, we are changing the pricing plan of the user based on the number of API calls made by the user. One can simulate the number of API calls from the frontend module.


## Getting Started

1. Enter your Braintree crendentials in the config file:

```
"braintreeMerchantId" : "your_braintree_merchant_id",
"braintreePublicKey" : "your_braintree_public_key",
"braintreePrivateKey" : "your_braintree_private_key",
```    

2. Create the plans in the braintree dashboard and update the id in the config file like this:   
```
"freePlanId": "53g2",
"startupPlanId": "832m",
"growthPlanId": "g27r",
"hackerPlanId": "nzdw",
"premierPlanId": "23vg",
"enterprisePlanId": "vtpb",
```     

3. Enter the subscription id that you want to update. It is associated with the specific user. For this demo, we are updating the spefic subscription id but you can move it out from the config file and update it for dynamically.

```
"subscriptionId": "jdm9bm"
```    

4. Install the dependencies of the project:     
```
npm install
```  
5. Set the webhooks that will be triggered when the condition =that is specified in webhooks.js is met. Once the condition is met, appbase webhooks will make the request on our server. You only need to run it once.

```
node webhooks.js
``` 

Before you change the value of any parameters in webhook file, please de-register the webhooks by running the following command and then make the changes:
```
node webhooks.js stop
```

6. Run the server by following command:    
```
node server.js
```    

To run the frontend, go to the the [frontend repository](https://github.com/yashshah/braintree-appbase-integration)


## Dive into Codebase

The integration is divided into two sub modules:
 - Frontend Module: Simulates the API call and update the value in Appbase
 - Backend Module: Webhooks make the request to server and server updates the pricing plan for the user in the braintree.

When you update number of API call, it gets updated in the Appbase. In Appbase, webhooks are configured on the threshold that defines the pricing plan. So when the condition is made, the request is made on the backend module. 

For managing the subscription and plans:
 For this project, we have created 5 plans and you can create your own plans and specify in the config file. You can set the webhooks after that to call the server which will then update the plan in the braintree.

To register the webhooks, one is required to run the webhooks.js once.

 This project ends the polling to check if the number of API calls has reach the threashold to change the pricing plane which otherwise would have required.