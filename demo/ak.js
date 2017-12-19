var express = require('express');
var app = express();

app.use(function (req,res,next) {
    console.log(123);
    next();
})
app.get('/abc', function (req, res, next) {
    res.send('Hello World!');
    next();
});
app.use('/abc', function (req, res, next) {
    console.log('Hello World!9999');

});

app.use(function (req,res,next) {
    console.log(999);
    next();
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});