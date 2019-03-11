var http = require('http');
var fs = require('fs');
var port = 8081;

var server = http.createServer(function(req, res) {
    console.log("Request was made: " + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/webpage/index.html').pipe(res);
    }
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream(__dirname + '/readme.txt').pipe(res);
    }
    else if (req.url === '/about') {
        var myObjects = [{name: 'Emma', age: 2}, {name: 'Liam', age: 4}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(myObjects));
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/webpage/notFound.html').pipe(res);
    }
});

server.listen(port, '127.0.0.1');