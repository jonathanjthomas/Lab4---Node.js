const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response)=>{

    //EVERY RESPONSE HAS A HEADER AND A PAYLOAD. writeHead() writes to the head to tell the 
    // MIME type to the client. 
    if (request.url === '/'){
        response.write("Hello from Jonathan's first server :D !");
        response.end();
    }
    if (request.url === '/site'){
        fs.readFile('index.html', function(error,data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            return response.end();//return used for callback functions
        });
    }
    if (request.url === '/gateway_of_india.jpg'){
        fs.readFile('gateway_of_india.jpg',function(error,data){
        response.writeHead(200,{'Content-Type':'image/jpeg'})
        response.write(data);
        response.end;
        });
    }
    if (request.url === '/videos'){
        var video = require('./videos'); 
        let v= video.getVideos();
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(v));
        response.end();
    }
}).listen("8080");

console.log("Server started and loading on port 8080");