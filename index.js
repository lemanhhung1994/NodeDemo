var express = require('express');
var routing = require('./routes');
var configuring = require('./config');
var serviceRegistration = require('./services');
var app     = express();

configuring(app);

serviceRegistration(app);

routing(app);

app.listen(app.get('port'));
