describe("Movies Controller", function () {

    var movieController, movie, req, res;
    movie = {
        find: jasmine.createSpy()
    };
    res = {
        send: jasmine.createSpy(),
        status: jasmine.createSpy()
    };
    movieController = require('./../controllers/moviesController')(movie);


    describe("Get", function () {
        it('should call movie.find function', function () {
            movieController.get(req, res);
            expect(movie.find).toHaveBeenCalled();
        });
    });
});
