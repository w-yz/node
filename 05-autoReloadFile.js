const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');

//通过xxx方式打开文件
fs.open('./abc.c', 'r+', function (err, fd) {
    if(err){
        console.log("open fail");
        return false;
    }
    console.log("open file  success!!!");

    var buff = new Buffer(1024);
    //读取指定大小文件内容
    fs.read(fd,buff,0,buff.length,0,function (err,bytes,buff) {
        console.log(err);
        console.log(bytes);
        console.log(buff);
        console.log(buff.toString());
    })

    //获取文件属性
    fs.stat('./abc.c',function (err,stats) {
        console.log(stats.size);//获取文件大小，既最后位置
        //写到文件最后
        fs.write(fd,(process.argv[3] == "true" ? "\n" : "") + process.argv[2],stats.size,function (err) {
            if(err){
                console.log("write fail");
            }
            console.log("write  succcess");
            //关闭文件操作
            fs.close(fd,function (err) {
                console.log("err:" + err); 
            });
        })

    });
})




