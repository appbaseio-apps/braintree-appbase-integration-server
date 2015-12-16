# braintree-appbase-integration-server

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
