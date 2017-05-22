var express = require('express');

var app = express();

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

//creating routes

app.get('/', function(req, res){
    res.send('Hello from express js');
});