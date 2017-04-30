"use strict";

// *** PUBLIC LIBRARIES ***
var expressServer = require('express');
var http = require('http');
var bodyParser = require('body-parser');

// *** PARSERS
exports.parseUrlEncoded = bodyParser.urlencoded({extended:false});

// *** BUILD SERVER
exports.build = function() {
	var app = expressServer();
	app.set('view engine', 'ejs');
	app.use(expressServer.static(__dirname + '/../public'));
	var port = process.env.PORT || 5000;
	http.createServer(app).listen(port);
	console.log("The server is running in port " + port);
	return app;
}