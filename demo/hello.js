
var browserSync = require('browser-sync');
var path = require('path');
var fs = require('fs');

browserSync({
    server:__dirname,
    index: 'hello.html'
})
