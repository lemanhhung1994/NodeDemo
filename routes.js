var someController
    = require('./controllers/some-controller');

module.exports = function (app) {
    app.get('/', someController.index);
    app.get('/more', someController.more);
    app.get('/auth', function (request, response) {
        request.auth.attempt(request.query.username, request.query.password).then(function (user) {
            console.dir(user);
            response.send('login success');
        }, function (error) {
            console.dir(error);
            response.send('login fail');
        });
    });
    app.get('/hash', function (req, res) {
        req.hasher.hash(req.query.hash).then(function (hash) {
            res.send(hash);
        });
    })
};
