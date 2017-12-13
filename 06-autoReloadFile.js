const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync');


//监听文件是否发生变化

fs.watchFile('./abc.c',{interval:10},function (curr,prev) {
    console.log(curr.mtimeMs + "-----" + prev.mtimeMs);

})




