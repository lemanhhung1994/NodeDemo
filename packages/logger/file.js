var FileLogger = function (fs) {
    var self = this;
    this.setFile = function (file) {
        this.file = file;
        return this;
    };
    this.error = function (message) {
        fs.appendFile(self.file, '[ERROR] ' + message + '\n');
    };
    this.message = function (message) {
        fs.appendFile(self.file, '[MESSAGE] ' + message + '\n');
    };
    this.debug = function (message) {
        fs.appendFile(self.file, '[DEBUG] ' + message + '\n');
    };
};

module.exports = FileLogger;