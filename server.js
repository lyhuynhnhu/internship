var request = require("request");
var http = require("http");
var path=require('path');
var details;

function initialize() {
    // Setting URL for request
    var api = 'https://api-explorer.decent.ch/api/v1/assets/ALX';
    // Return new promise 
    return new Promise(function(resolve, reject) {
    	// Do async job
        request(api, { json: true }, (err, res, body) => {
            if (err) {
                reject(err); 
            }else{
                resolve(body.res.currentSupply);
            }
        });
    })

}

http.createServer( function(req, res){
    var endpoint=path.basename(req.url); 
    res.writeHead(200, {'Content-Type': 'text/html'});
    var initializePromise = initialize();
    if(endpoint == 'data'){
        initializePromise.then(function(result) {
            details = result;
            //print data
            console.log(details);
            res.write(details);
            res.end();
        }, function(err) {
            console.log(err);
        }); 
    }else{
        res.end('Hello world!');
    }   
    
}).listen(8080);