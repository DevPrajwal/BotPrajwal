'use strict';

const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('port', process.env.port || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send("hi,I am a bot");
});

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "devPrajwal") {
		res.send(res.query['hub.challenge']);
	}
	res.send("wrong token");
}); 

app.listen(app.get('port'),function(){ 
  console.log("running: port");
});
