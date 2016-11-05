'use strict';

require('babel-core/register')({});
require('babel-polyfill');

// var server = require('./server').default;

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, function () {
//   console.log('Server listening on: ' + PORT);
// });

var { app } = require('./server/');

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log('App listening on: ' + PORT);
});