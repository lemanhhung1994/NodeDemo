exports.index = function (request, response) {
    request.logger.debug('this is a debug message');
    request.$mongo.then(function (connection) {
        connection.collections(function (error, collections) {
            var collectionNames = [];
            collections.forEach(function (collection) {
                collectionNames.push(collection.s.name);
            });
            response.json(collectionNames);
        });
    })
};

exports.more = function (request, response) {
    response.send('more action of some controller');
};
