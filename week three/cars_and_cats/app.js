var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/mario.png'){
        fs.readFile('./images/mario.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function( errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/dojocat.jpg'){
        fs.readFile('./images/dojocat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function( errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // else if(request.url === '/stylesheets/style.css'){
    //     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
    //     response.writeHead(200, {'Content-type': 'text/css'});
    //     response.write(contents);
    //     response.end();
    //     });
    // }

    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
var port_num =7077;
server.listen(port_num);
// print to terminal window
console.log(`Running in localhost at port ${port_num}`);
