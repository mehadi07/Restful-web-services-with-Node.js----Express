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

module.exports = get;
