var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
   
    if (request.method === 'GET' && request.url === '/victory') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./victory.html', 'utf-8', function (err, data) {
            response.write(data);
            response.end();
        });

    } else {
        /*fs.readFile('./error.html', 'utf-8', function (err, data) {
            response.statusCode = 404;
            response.write(data);
            response.end();
        });*/
        fs.readFile('image.jpg', function (err, data) {
            response.statusCode = 404;
            response.setHeader("Content-Type", 'image/jpeg');
            response.end(data);
    
        });
    };
});

server.listen(7000);
console.log('Server running at http://localhost:7000/');