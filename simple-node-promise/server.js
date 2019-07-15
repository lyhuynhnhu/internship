const http = require('http');

const { requestHandlers } = require('./handlers');

http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    requestHandlers.welcome(res);
  } else if (url === '/data') {
    requestHandlers.getData(res);
  } else {
    requestHandlers.handle404(res);
  }
}).listen(3000);

console.log('running at http://localhost:3000/');
