//Express

var express = require('express');

var router = require('./src/api');

var app = express();


app.use('/', express.static('public'));

//routes

app.use('/api/', router)
//body Parser

//session

//Static

//Mongoose

//routes

//listener
app.listen(8080,  function(){
	console.log("Hey there, the server is running on 8080");
});