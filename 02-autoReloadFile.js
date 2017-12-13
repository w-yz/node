const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');


//获取输入参数
var  inputPath = process.argv[2];

fs.stat(inputPath,function (err,stats) {
    console.log(err);
    console.log(stats);
    console.log(stats.size);
    console.log(stats.mtime);
})

