exports.index = function (request, response) {
    request.$mongo.then(function (connection) {
        connection.collections(function (error, collections) {
            console.dir(collections[0]);

            response.end('xxx');
        });
    })
};

exports.more = function (request, response) {
    response.send('more action of some controller');
};
