module.exports = function (app) {
    app.use(require('./packages/my-package'));
    app.use(require('./packages/hash'));
    app.use(require('./packages/logger'));
    app.use(require('./packages/mongo'));
    app.use(require('./packages/auth'))
};
