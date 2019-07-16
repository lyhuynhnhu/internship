const { makePromiseRequest } = require('../../utils');

function getDecentCurrentlySupply() {
  const url = 'https://api-explorer.decent.ch/api/v1/assets/ALX';

  return makePromiseRequest(url)
    .then(data => data.res.currentSupply)
    .catch(err => console.log(err));
}

module.exports = {
  getDecentCurrentlySupply,
};
