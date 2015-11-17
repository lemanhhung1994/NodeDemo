var ConsoleLogger = function () {
    this.error = function (message) {
        console.log('[ERROR] ' + message);
    };
    this.message = function (message) {
        console.log('[MESSAGE] ' + message);
    };
    this.debug = function (message) {
        console.log('[DEBUG] ' + message);
    };
};

module.exports = ConsoleLogger;
