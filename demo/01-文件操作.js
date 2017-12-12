const fs = require("fs");
const path = require('path');



//命令入参  process
console.log(process);
console.log(process.argv);
console.log(process.argv[0]);
console.log(process.argv[1]);

//获取最后的名称
process.argv.forEach(function (t) {
    console.log(path.basename(t))
});


//创建目录  在当前文件夹下创建demo1文件夹
fs.mkdir(path.join(__dirname,'demo'),function (err) {
      // console.log(err);
});


//创建一个绝对路径
//   /abc/abc/abc1

var   pathStr =  '/Users/ex-wangyuanzeng001/Desktop/node/sbc/kkk';
if(path.isAbsolute(pathStr)){
    console.log('这是一个绝对路径');
    mkdirs(pathStr,function (err) {
        
    });
}else {
    console.log('这是一个相对路径',function (err) {
        
    });
    mkdirs(path.join(__dirname,pathStr));
}


































