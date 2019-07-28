const http = require('http');

const server = http.createServer(function (request, response){
    if(request.url === '/'){
        console.log("request /");
        response.write("hello world");
        response.statusCode = 200;
        response.end();
    }

    if(request.url === '/api/courses'){
        response.write(JSON.stringify([1 ,2, 3]));
        response.end();
    }

});

server.listen(3000);

console.log("listening...");

