var express = require('express');
var app = express();


app.get('/abc/k1/v1', function (req, res, next) {
    console.log(req.ip);
    console.log(req.path);
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.protocol);
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.param("name"));
    console.log(req.body);
    console.log(req.params);
    res.send('Hello World!');
});

//http://192.168.1.101:3000/abc/k1/v1?name=889
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});