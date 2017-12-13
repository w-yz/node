/**
 * Created by wangyuanzeng on 2017/10/31.
 */

const fs = require("fs");
const path = require("path");


var target = path.join(__dirname, process.argv[2] || "./");

console.log(target);

fs.readdir(target, function (err, files) {
    files.forEach(function (file) {
        fs.stat(path.join(target, file),function (err, stats) {
            console.log(stats.mtime + "\t" + stats.size + "\t" + file);
        });
    });
})

