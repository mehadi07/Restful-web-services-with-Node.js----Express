var movie = require('./../models/movieModel');


var get = function (req, res) {
    movie.find(function (err, movies) {
        if (err) {
            res.send(500);
            res.send("Internal Server Error");
        } else {
            res.status(200);
            res.send(movies);
        }
    })
};

var add = function (req, res) {

    var movie = new Movie(req.body);
    movie.save(function (err) {
        if (err) {
            res.status(500);
            res.send('Failed');
        } else {
            res.status(201);
            res.send(movie);
        }
    })
};

//module.exports.get = get;
//module.exports.add = add;

// another way of exporting module 

module.exports = {
    add: add,
    get: get
};
