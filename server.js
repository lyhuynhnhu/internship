var http = require("http");
var path=require('path'),
    url=require('url');

http.createServer( function(req, res1){
    var endpoint=path.basename(req.url); 

    if (endpoint) {
        const request = require('request');
        request('https://api-explorer.decent.ch/api/v1/assets/ALX', { json: true }, (err, res2, body) => {
            if (err) {
                return console.log(err); 
            }
            console.log(body.res.currentSupply);
            //res.writeHead(200, {'Content-Type': 'text/html'});
            res1.write(body.res.currentSupply);      
        });
        

    } else {
        res1.writeHead(200, {'Content-Type': 'text/html'});  
        res1.write('Hello world!');     
    }
    res1.end();
    
}).listen(8080);

console.log("Static file server running at\n  => http://localhost:8080" );
