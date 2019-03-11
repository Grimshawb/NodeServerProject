// Example function uses require in app.js
var count = function(arr) {
    return "There are " + arr.length + " items in the array";
};

// With these `` you can embed variables without having to concatenate
var adder = function(a, b) {
    return `The sum of the numbers is ${a + b}`;
};

// Have to make the code available outside of the module

// If you only have one function then you can do this:
    // module.exports = count;

// If you have more though, then you need to qualify them
    // Qualifying can be done in a number of ways:
module.exports.count = count;
module.exports.adder = adder;

// You can name the variable with module.exports
//         var module.exports.count = function(arr) {
//            return "There are " + arr.length + " items in the array";
//         }; 
// Or you can declare them in a block like this:
// 
// module.exports = {
//    count: count,    
//    adder: adder
// };