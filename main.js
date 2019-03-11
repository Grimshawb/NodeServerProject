var http   = require('http');
var fs = require('fs');
const port = 8081;

// Set this to a variable to refer to later
var server = http.createServer(function(request, response) {
    
    //You can get some info about the request too
    console.log('The request url: ' + request.url);
    
    // Send http header
    // http status 200: ok
    // Content type text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Create the readStream with directory and fileName
    var readStream = fs.createReadStream(__dirname + 'n/readme.txt');

    // Send the response body
    //response.end('Hello World!\n');

    // Pipe it into the response stream (see fileStream.js)
    readStream.pipe(response);
})

// Set the server to listen at port
// 127.0.0.1 is the local host IP Address
server.listen(port, '127.0.0.1');

console.log('Listening at port: ' + port);


