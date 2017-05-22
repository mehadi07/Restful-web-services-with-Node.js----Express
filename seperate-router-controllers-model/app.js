var express = require('express');
var moviesRouter = require('./routes/moviesRouter');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/MovieDb');
var app = express();

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

// creating route



app.use('/movies', moviesRouter);
