var ConsoleLogger = require('./console');
var FileLogger    = require('./file');
var fs            = require('fs');

module.exports = function (request, response, next) {
    var loggerConfig = request.app.get('logger');
    var logger = null;
    if (loggerConfig.adapter == 'console') {
        logger = new ConsoleLogger();
    } else {
        logger = new FileLogger(fs);
        logger.setFile(loggerConfig.file.path);
    }

    request.logger = logger;
    next();
};