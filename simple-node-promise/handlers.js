const { getDecentCurrentlySupply } = require("./decent/assets")

const requestHandlers = {
    welcome: (res) => {
        res.write("welcome")
    },
    getData: (res) => {
        getDecentCurrentlySupply()
            .then(currentSupply => {
                res.write(`Current supply is: ${currentSupply}`)
                res.end()
            })
    },
    handle404: (res) => {
        res.write("Not support yet")        
    }
}

module.exports = {
    requestHandlers
}