var BCryptHasher = require('./bcrypt-adapter');


module.exports = function (request, response, next) {
    request.hasher = new BCryptHasher();
    next();
};