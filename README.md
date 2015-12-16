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

4. Based on your logic, run the commands in the webhooks.md file. For this we have kept the threshold for API count and then we make the call to the server. In this, you will be required to enter your appbase crendentials and address of where server is hosted.     

5. Run the server by following command:    
```
node server.js
```

## Dive into Codebase

The integration is divided into two sub modules:
 - Frontend Module: Simulates the API call and update the value in Appbase
 - Backend Module: Webhooks make the request to server and server updates the pricing plan for the user in the braintree.

When you update number of API call, it gets updated in the Appbase. In Appbase, webhooks are configured on the threshold that defines the pricing plan. So when the condition is made, the request is made on the backend module. 

For managing the subscription and plans:
 For this project, we have created 5 plans and you can create your own plans and specify in the config file. You can set the webhooks after that to call the server which will then update the plan in the braintree.

To configure the webhooks, one is required to run the curl statement that are available in the webhook file.

 This project ends the polling to check if the number of API calls has reach the threashold to change the pricing plane which otherwise would have required.