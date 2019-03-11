// Readable streams
// Writable Streams
// Difference btwn this and the fs readfile and writefile 
// Is that we can acquire the data instantly versus waiting for the 
// entire file 

var http = require('http');
var fs = require('fs');

// Creates read stream and buffer 
// Concats the current dir name and file
// Specify char encoding or you get hex in buffer
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// createReadStream inherits from eventEmitter which
// allows us to listen for the event when we receive data
// Data is the entire message, if large enough we see it broken into chunks 
/*
    myReadStream.on('data', function(chunk) {
        console.log('New chunk received: ');
        console.log(chunk);
        myWriteStream.write(chunk);
    });
*/

// Pipes are tools to get read-in data piped directly to a write-out stream
// Still need the readStream and the writeStream but we don't need this bit above
// Pipes only work on readable streams 

myReadStream.pipe(myWriteStream);

// Putting this together with the server in main.js


