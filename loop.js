// include http module
var http = require('http');

// start the server
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text-plain'});

    // output numbers from 1 to 20 in a loop
    for (var i = 1; i <= 20; i++) {
        response.write(i + '\n');
    }

    // end the response
    response.end();

}).listen(3000);

console.log('Server running on port 3000');