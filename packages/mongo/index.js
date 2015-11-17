var MongoClient = require('mongodb').MongoClient;
var Promise     = require('bluebird');

module.exports = function (request, response, next) {

    request.$mongo = new Promise(function (resolve, reject) {
        MongoClient.connect('mongodb://localhost:27017/animals', function (error, connection) {
            if (error) reject(error);
            else resolve(connection);
        })
    });

    next();
};
