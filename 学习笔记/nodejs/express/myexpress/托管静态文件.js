//托管静态文件
const express = require('express');
const app = express();

let server = app.use(express.static('public'));//public是静态资源的根路径(文件夹)

server.listen(3000,()=>{
	console.log('running...');
});


//let server = app.use('/abc',express.static('public'));
//abc参数是虚拟目录访问时需要进入该虚拟目录

//可以指定多个路径访问
// app.use('/abc',express.static('hello'));
// app.use('/cba',express.static('world'));