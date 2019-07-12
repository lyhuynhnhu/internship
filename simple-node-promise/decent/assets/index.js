const { makePromiseRequest } = require("../../utils")

function getDecentCurrentlySupply(onReject, onSuccess) {
    var url = 'https://api-explorer.decent.ch/api/v1/assets/ALX'

    return makePromiseRequest(url)
        .then((data) => {
            return data.res.currentSupply
        })
        .catch(console.log)
}

module.exports = {
    getDecentCurrentlySupply
}