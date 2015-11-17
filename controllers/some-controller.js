exports.index = function (request, response) {
    request.logger.debug('this is a debug message');
    response.send(request.myPackage.run());
};

exports.more = function (request, response) {
    response.send('more action of some controller');
};
