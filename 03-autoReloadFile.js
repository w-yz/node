const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');


//获取输入参数
var  inputPath = process.argv[2];

console.log(path.isAbsolute(inputPath));  //是否是绝对路径

//如果是绝对路径转换为相对路径
const target = path.isAbsolute(inputPath)?  path.relative(__dirname,inputPath): inputPath;
console.log(target);

console.log(path.extname(target));
console.log(path.basename(target,path.extname(target))); //获取文件名


