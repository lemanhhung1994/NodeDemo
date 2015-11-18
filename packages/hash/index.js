var BCryptHasher = require('./bcrypt-adapter');
var MD5Hasher    = require('./md5-adapter');


module.exports = function (request, response, next) {
    if(request.app.get('hasher').adapter == 'bcrypt') {
        request.hasher = new BCryptHasher();
    } else {
        request.hasher = new MD5Hasher();
    }
    next();
};