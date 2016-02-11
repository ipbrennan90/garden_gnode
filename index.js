var express = require('express');
var app = express();
var fs = require('fs');
var _ = require('lodash');
var users = [];

app.get('/', function(req, res){
    res.send('hello!!!! world');
})


var server = app.listen(3000, function(){
    console.log( "server running at http://localhost:" + server.address().port);
})
