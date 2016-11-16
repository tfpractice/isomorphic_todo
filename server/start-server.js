const {server} = require('universal-webpack');
const settings = require('../universal-webpack-settings')
// `configuration.context` and `configuration.output.path` are used
const configuration = require('../webpack.prod.config.js')
console.log('server', server);
server(configuration, settings)
