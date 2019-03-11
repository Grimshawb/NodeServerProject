var http = require('http');
var fs = require('fs');
const port = 8081;

var server = http.createServer(function(req, res) {
    console.log('Request was made at: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/webpage/bgrim2Assignment4.html');
    readStream.pipe(res);
});

server.listen(port, '127.0.0.1');

console.log("Listening at port: " + port);