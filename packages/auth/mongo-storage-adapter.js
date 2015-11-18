var Promise = require('bluebird');

var Auth = function (connection, hasher) {

    this.attempt = function (username, password) {
        return new Promise(function (resolve, reject) {
            connection.collection('users').find({username: username}, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    result.toArray(function (error, result) {
                        if (error) {
                            reject(error);
                        } else {
                            if (result.length == 0) {
                                reject(new Error('Auth fail: incorrect username'));
                            } else {
                                return hasher.check(password, result[0].password).then(function () {
                                    resolve(result[0]);
                                }, function () {
                                    reject(new Error('Auth fail: incorrect password'))
                                });
                            }
                        }
                    })
                }
            });
        });
    }
};

module.exports = Auth;