var http = require("http");

var { requestHandlers } = require("./handlers");

http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        requestHandlers.welcome(res)
    } else if (url === "/data") {
        requestHandlers.getData(res)
    } else {
        requestHandlers.handle404(res)
    }

}).listen(3000)