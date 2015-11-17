var someController
    = require('./controllers/some-controller');

module.exports = function (app) {
    app.get('/', someController.index);
    app.get('/more', someController.more);
};
