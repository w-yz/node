const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');

fs.open('./abc.c', 'r', function (err, fd) {
    console.log(err ? "open fail" : "open success");
})
fs.open('./he.txt', 'r', function (err, fd) {
    console.log(err ? "open fail" : "open success");
})



