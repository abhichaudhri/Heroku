Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @abhichaudhri Sign out
1
0 0 trrohith/DSCAOG
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
DSCAOG/index.js
2e10bd5  an hour ago
@trrohith trrohith name change
     
43 lines (36 sloc)  1.44 KB

// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
process.env.DEBUG = 'actions-on-google:*';
const express = require('express')();
const bodyParser = require('body-parser');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
express.use(bodyParser.json()); 
express.use(bodyParser.urlencoded({ extended: true }));

express.set('port', (process.env.PORT || 1911))
express.get('/', function(req,res){
  res.send('Hello world, I am a chat bot for Workshop');
})

express.post('/googlewebhook/', function (request, response) {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
   const agent = new WebhookClient({ request, response });
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

function details(agent){
    agent.add(`This is more details from Firebase`);
}
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Details', Details);
});

express.listen(express.get('port'), function () {
  console.log('running on port', express.get('port'))
});
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.