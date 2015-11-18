var Promise = require('bluebird');
var md5 = require('md5');

var MD5Hasher = function () {

    this.hash = function (value) {
        return new Promise(function (resolve, reject) {
            resolve(md5(value));
        })
    };

    this.check = function (value, hashed) {
        return new Promise(function (resolve, reject) {
            if(md5(value) == hashed) {
                resolve();
            } else {
                reject();
            }
        })
    }
};

module.exports = MD5Hasher;