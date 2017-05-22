var http = require('http');


var handleRequests = function(req, res){
    console.log('url is ' + req.url);
    
    res.write('Hello from Node.js ');
    res.end();
};
var server = http.createServer(handleRequests);

server.listen(3000, function(){
    console.log("Server is running on Port 3000");
});