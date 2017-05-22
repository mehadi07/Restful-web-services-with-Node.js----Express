var express = require('express');

var app = express();

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

// creating route

var moviesRouter = express.Router();

moviesRouter.route('')
.get(function(req, res){
    res.send('List of Movies');
});

app.use('/movies', moviesRouter);