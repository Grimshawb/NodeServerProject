var http = require('http');
var fs = require('fs');
const port = 8081;

var server = http.createServer(function(req, res) {
    console.log("Request was made at: " + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObject = {
        name: 'Ryu',
        job: 'Ninja',
        age: 32
    };

    // Response expects either a string or a buffer so can't just send an object
    res.end(JSON.stringify(myObject));
});

server.listen(port, '127.0.0.1');