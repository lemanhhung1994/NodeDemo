var express = require('express');
var app     = express();
var someController
            = require('./controllers/some-controller');



app.get('/', someController.index);
app.get('/more', someController.more);

app.listen(3000);
