var bcrypt  = require('bcrypt-nodejs');
var Promise = require('bluebird');

var BCryptHashser = function () {

    this.hash = function (value) {

        return new Promise(function (resolve, reject) {
            bcrypt.hash(value, null, null, function(err, hash) {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });

    };

    this.check = function (value, hashed) {
        return new Promise(function (resolve, reject) {
            bcrypt.compare(value, hashed, function(err, res) {
                if (err) {
                    reject(err);
                } else if (res == false) {
                    reject(new Error('Hash mismatch'));
                } else {
                    resolve();
                }
            });
        })
    };
};

module.exports = BCryptHashser;