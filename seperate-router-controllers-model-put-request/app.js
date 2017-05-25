var express = require('express');
var moviesRouter = require('./routes/moviesRouter');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/*To remove this error i am using 
" DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html" */
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/MovieDb');
var app = express();

//body-parser is a middleware so i am using app.use
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

// creating route



app.use('/movies', moviesRouter);
