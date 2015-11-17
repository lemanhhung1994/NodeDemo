var express = require('express');
var app     = express();
var myPackageService
            = require('./packages/my-package');

app.use(myPackageService);

app.get('/', function (request, response) {
   response.send(request.myPackage.run());
});

app.listen(3000);