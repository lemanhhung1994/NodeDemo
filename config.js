var moment = require('moment');

module.exports = function (app) {
    app.set('port', 3000);

    app.set('logger', {
        adapter: 'file',
        file: {
            path: __dirname + '/log/' + moment(new Date()).format('YYYY-MM-DD') + '.log'
        }
    });

    app.set('hasher', {
        adapter: 'bcrypt',
        bcrypt: {
            salt: '123123',
            size: 10
        },
        md5: {

        }
    });
};
