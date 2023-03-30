// load the things we need
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {
    });
});

// browse page
app.get('/browse', function(req, res) {
    res.render('pages/browse');
});

// post page
app.get('/post', function(req, res) {
    res.render('pages/post');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// legal page
app.get('/legal', function(req, res) {
    res.render('pages/legal');
});

// login page
app.get('/login', function(req, res) {
    res.render('pages/login');
});


app.listen(8080);
console.log('8080 is the magic port');
