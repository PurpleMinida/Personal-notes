//get参数处理
const url = require('url');

let str = 'http://www.baidu.com/abc/qqq?flag=123&keyword=java';
let ret = url.parae(str[,true]);//返回一个对象 可通过点获取相应属性
								//true可以把参数变成一个对象
console.log(ret);

let ret1 = url.format(obj);  //把一个对象转成url字符串







//接收get参数

const http = require('http');
http.createServer((req,res)=>{
	let obj = url.parae(req.url,true);  //这里已经获取到get参数
	res.end(obj.query.username + '=======' + obj.query.password)
}).listen(3000,()=>{
	console.log('runing...');
});