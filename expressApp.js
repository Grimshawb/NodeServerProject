var express = require('express');

// Gives us access to all the express stuff
var app = express();

// Sets up ejs as template engine
// Views folder is default
// .ejs files in views folder, structured like html
app.set('view engine', 'ejs');

// Middleware that allows to serve static pages such as css file 
app.use('/assets', express.static('assets'));

// Respond to the different types of HTTP methods
// In this one we're looking for just the forward slash as part of the url
app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/webpage/index.html');    // Sends file
});

// Use this to get info, e.g., from a database
app.get('/profile/:id', function(req, res) {
    //res.send('You requested the profile with id: ' + req.params.id);        Sends text, not ejs
    
    var data = {age: 30, job: 'ninja', hobbies: ['eating', 'drinking', 'not pooping']};
    
    res.render('profile', {person: req.params.id, data: data});     //This is the ejs method, the object is passed to 
                                                        //inject dynamic content to the ejs file
    
});

// Set up a port to listen to
app.listen(8081);