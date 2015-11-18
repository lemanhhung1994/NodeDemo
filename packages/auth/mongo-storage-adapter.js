var Promise = require('bluebird');
var bcrypt  = require('bcrypt-nodejs');
var Auth = function (connection) {

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
                            }
                            if (bcrypt.compareSync(password, result[0].password)) {
                                resolve(result[0]);
                            } else {
                                reject(new Error('Auth fail: incorrect password'));
                            }
                        }
                    })
                }
            });
        });
    }
};

module.exports = Auth;