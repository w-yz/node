var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
})

app.use('/admin', admin); // mount the sub app


// localhost:3000/admin/    不能使用  localhost:3000/  ，原因是  server是  app创建出来的
var server = app.listen(3000,function () {
    console.log(server._events);
});