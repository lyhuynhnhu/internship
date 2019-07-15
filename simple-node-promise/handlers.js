const { getDecentCurrentlySupply } = require('./decent/assets');

const requestHandlers = {
  welcome: (res) => {
    res.write('welcome to Alax');
    res.end();
  },
  getData: (res) => {
    getDecentCurrentlySupply()
      .then((currentSupply) => {
        res.write(`Current supply is: ${currentSupply}`);
        res.end();
      });
  },
  handle404: (res) => {
    res.write('Not support yet');
    res.end();
  },
};

module.exports = {
  requestHandlers,
};
