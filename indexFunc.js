'use strict';

require('babel-core/register')({});
require('babel-polyfill');
export default function(params) {
    var {app} = require('./server/');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, function() {
        console.log('App listening on: ' + PORT);
    });
}
