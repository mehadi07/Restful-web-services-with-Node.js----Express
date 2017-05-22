var express = require('express');
var moviesRouter = require('./routes/moviesRouter');

var app = express();

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// creating route



app.use('/movies', moviesRouter);