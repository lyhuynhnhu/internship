const request = require('request');

function makePromiseRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

module.exports = {
  makePromiseRequest,
};
