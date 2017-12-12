const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');
const underScore = require('underscore');


/*
* 文件的操作： 打开、读、写、创建、删除
* */


fs.open('./abc.c', 'r',function (err, fd) {
    var buff = new Buffer(1024);
    fs.read(fd, buff, 0, buff.length, 0, function (err, besy) {
        console.log(besy);
        console.log(buff.toString());
    })

    fs.close(fd,function () {
         console.log('close  file!!');
    });
});

