// fs.mkdir(path[,mode],callback)
// fs.mkdirSync(path[,mode])

const path = require('path');
const fs = require('fs');

//创建目录
fs.mkdir('路径',(err)=>{
	console.log(err);
});

fs.mkdirSync('路径');


//读取目录
fs.readdir('路径',callback);
fs.readdirSync();

fs.readdir('路径',(err,files)=>{
	console.log(files);
});

let files = fs.readdirSync('路径');

//删除目录
fs.rmdir('路径','目录名称',callback);
fs.rmdir('路径','目录名称',(err)=>{
	console.log(err);
});

fs.rmdirSync('路径','目录名称');
