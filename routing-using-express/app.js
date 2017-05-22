var http = require('http');


var handleRequests = function (req, res) {
    if (req.url === '/') {
        res.write('Hello from Node.js');
    } else if (req.url === '/products') {
        res.write('List of Products');
    } else if (req.url === '/cart') {
        res.write('Showing Your Cart');
    }
    res.end();
};
var server = http.createServer(handleRequests);

server.listen(3000, function () {
    console.log("Server is running on Port 3000");
});
