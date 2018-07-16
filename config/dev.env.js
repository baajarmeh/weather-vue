var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URL: {
        search: '"https://www.metaweather.com/api/location/search/?"',
        weather: '"https://www.metaweather.com/api/location/"'
    }
})