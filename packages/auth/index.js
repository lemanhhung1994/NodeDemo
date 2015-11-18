var Auth = require('./mongo-storage-adapter');

module.exports = function (request, response, next) {
    request.$mongo.then(function (connection) {
        request.auth = new Auth(connection, request.hasher);
        next();
    });
};