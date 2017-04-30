"use strict";

var webServer = require('./lib/webServer');
var ws = webServer.build();

ws.get('/', function(req, res) {
	var params = {};
	res.render('search', params);
});

ws.post('/', webServer.parseUrlEncoded, function(req, res) {
	var params = {};
	res.render('search', params);
});