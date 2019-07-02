var http = require("http");

http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello world!!!");
    res.end();
    
}).listen(8080);
console.log("Static file server running at\n  => http://localhost:8080" );
