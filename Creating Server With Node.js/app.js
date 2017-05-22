var http = require('http');

var server = http.createServer();

server.listen(3000, function(){
    console.log("Server is running on Port 3000");
});