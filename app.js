// If we only had the one function:
    // var count = require('./firstModule');
var fm = require('./firstModule');

// Node comes with core modules out of the box:
var events = require('events');
    // See below for use of the eventEmitter function
var util   = require('util');
    // Util used for inheritance below
var fs = require('fs');
    // Used to read files in, see below


// Node is a platform to allow to run javascript on computer/server
// Allows to read, delete, update files and communicate with databases

// Testing the app in the terminal below (ctrl + `): 
console.log('hey there');

// The V8 engine that is the basis of node.js converts js to machine-readable code
// Node is written in C++
// The V8 engine embedded into node extends the abilities of js through C++

// The global objects available in all modules. Check out documentation
    // console
    // setTimeout
    // setInterval
    // require

setTimeout(function() {
    console.log('3 Seconds have Passed');
}, 3000);       // Milliseconds is 2nd arg

var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000)

console.log(__dirname);     // returns directory (double underscore)
console.log(__filename);    // returns filename  (double underscore)


// Normal function expressions:
function sayHi() {
    console.log('Hi');
}
sayHi(); // Typical

// Function Expressions:

var sayBye = function() {
    console.log('bye');
}

sayBye(); // Typical

// Now let's create a nother function which takes a function and calls that function:

function callFunction(fun) {
    fun();
}

callFunction(sayBye);   //Now saybye is passed as fun which is called in fun() 

/*************************************  Modules and Require  ***************************************/

// Module is just another JS file
// See firstModule for example function. See top of file for the require
//have to set the require = to a variable because module.exports is being RETURNED

// If you only had the one function:
    // console.log(count(['brad', 'emma', 'liz']));

// Since we have more than one in firstModule:

console.log(fm.count(['brad', 'emma', 'liz']));
console.log(fm.adder(4, 15));

// Using eventEmitter:
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
    console.log(msg);
});

myEmitter.emit('someEvent', 'Alert: The event was emitted');

// Using util:
var Person = function(name){
    this.name = name;
};

// This makes person inherit this attribute
util.inherits(Person, events.EventEmitter);

var brad = new Person('brad');
var liz = new Person('liz');
var emma = new Person('emma');
var people = [brad, liz, emma];

people.forEach(function(person) {
    person.on('speak', function(msg) {
            console.log(person.name + ' said: ' + msg);
    });
});

brad.emit('speak', 'O\'Doyle Rules');
emma.emit('speak', 'This is mines');

/****************************  File I/O  *******************************/

//Since readme is in the same dir, just name it but
//have to specify encoding
//sync means it's blocking, not async
var readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);

//Creates file and writes readme to it
//also not async
fs.writeFileSync('writeMe.txt', readme);

//to use the async methods, there is a third parameter 
//which specifies the callback function. When the 
//execution passes the code it needs the callback function
//to get back to that process. The function takes an error
//if there is one and the data that we read in
fs.readFile('readme.txt', 'utf8', function(err, data) {
    console.log(data);
});

// async write - needs callback
// fs.writeFile('writeMe1.txt', readme);

/********************************  Deleting and Creating Files & Dirs  ******************************/

// Deletes file 
fs.unlink('writeme.txt');

// Make Directory Synchronously, Lose Sync for Async
fs.mkdirSync('Stuff');

// Remove Directory Synchronously, Lose Sync for Async
fs.rmdirSync('Stuff');


