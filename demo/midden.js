var express = require('express');
var app = express();
var underscore = require('underscore');


app.get('/article/:id/:kp', function(req, res) {
    console.log(req.params.id);
    console.log(req.params.kp);
    res.send(req.params.id);
});

app.listen(3000);

//http://localhost:3000/article/9/abc