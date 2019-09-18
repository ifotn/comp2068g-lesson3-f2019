// include connect middleware to run the web server instead of node's http module
var connect = require('connect');

// create an instance of a web server
var app = connect();

// create function to process a Hello World request / response
var helloWorld = (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
};

var goodbyeWorld = (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Goodbye World');
    res.end();
}

var notFound = (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Not Found');
    res.end();
}

// set up routes
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use(notFound);  // this must go AFTER the other routes or it overrides them all as it has no path

// listen for events on port 3000
app.listen(3000);

// show that the server is running
console.log('Server running on port 3000');
