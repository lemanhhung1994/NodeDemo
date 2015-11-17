/**
 * Infrastructure configurations
 *
 * @type {*|exports|module.exports}
 */

var routing             = require('./routes');
var configuring         = require('./config');
var serviceRegistration = require('./services');


/**
 * Initialize the Application
 *
 * @type {*|exports|module.exports}
 */
var express = require('express');
var app     = express();

configuring(app);

serviceRegistration(app);

routing(app);


/**
 * Run the application
 */
app.listen(app.get('port'), function () {
    console.log('server started at %s', app.get('port'));
});
