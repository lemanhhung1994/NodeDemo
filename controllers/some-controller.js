exports.index = function (request, response) {
    response.send(request.myPackage.run());
};

exports.more = function (request, response) {
    response.send('more action of some controller');
};