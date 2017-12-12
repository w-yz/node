const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');


/*
* 构建工程：热加载单一文件
* 0、获取文件路径
* 1、创建browser-sync服务器
* 2、监听文件变化
* 2.1 判断文件是否有变化，没有就退出 i
* 2.2 重新调用文件
* 【什么文件变化，就重新调用什么文件】
* */


//获取文件路径

var target = path.join(__dirname, process.argv[2] || './README.md');
var filename = target.replace(path.extname(target), '.html');
var indexpath = path.basename(filename);

browserSync({server: path.dirname(target), index: indexpath});

fs.watchFile(target, {interval: 200}, (curr, prev) => {
    if (curr.mtime != prev.mtime
    )
        return false;

    fs.readFile(target, 'utf-8', (err, content) => {
        if (err) {
            throw err;
        }
        var html = marked(content);
        fs.readFile(path.join(__dirname, "abc.css"), "utf8", (err, css) => {
            html = template.replace('{{{content}}}', html).replace('{{{styles}}}', css);

            fs.writeFile(target.replace(path.extname(target), ".html"), html, 'utf8', (err) => {
                browserSync.reload(indexpath);
                console.log('updated@' + new Date());
            })
        })
    })
})



