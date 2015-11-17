var MyPackage = require('./MyPackage');

module.exports = function (request, response, next) {
    request.myPackage = new MyPackage();
    next();
};
