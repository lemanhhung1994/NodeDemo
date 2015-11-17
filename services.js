module.exports = function (app) {
    app.use(require('./packages/my-package'));
    app.use(require('./packages/logger'));
    app.use(require('./packages/mongo'))
};
