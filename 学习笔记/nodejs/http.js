const http = require('http');
//创建服务器实例
let server = http.createServer();
//绑定请求事件
server.on('request',(req,res)=>{  //request请求事件
	res.end('hello');//向客户端相应
});
//监听端口
server.listen(3000);

--------------------------
//简写
http.createServer((req,res)=>{
	res.end('ok');
}).listen(3000);


以上的请求结果都返回  res.end()的内容但是要根据请求路径的不同返回不同的页面时

处理请求的分发
1 req对象是Class:http.IncomingMessage的实例对象
2 res对象是Class:http.ServerReaponce的实例
http.createServer((req,res)=>{
	if(req.url.startsWith('/index')){
		res.end('index');//end也有其他方法不如 write(可写多次)
	}else if(req.url.startsWith('/about')){
		res.end('about');
	}else{
		res.end('404');
	}
}).listen(3000,'127.0.0.1',()=>{
	console.log('runing');
});



---------------------------------------------------------
响应完整文件

const http = require('http');
const path = require('path');
const fs = require('fs');


http.createServer((req,res)=>{
	if(req.url.startsWith('/index')){
		fs.readFile('路径','utf8',(err,files)=>{
			res.end(files);
		});
	}else if(req.url.startsWith('/about')){

	}else if(req.url.startsWith('/list')){

	}
}).listen(3000,'127.0.0.1',()=>{
	console.log('runing');
});

/*

let readFile = (path,res) =>{
	fs.readFile('路径','utf8',(err,files)=>{
		res.end(files);
	});
}

	http.createServer((req,res)=>{
		if(req.url.startsWith('/index')){
			readFile('index.html',res);
		}else if(req.url.startsWith('/about')){
			readFile('about.html',res);
		}else if(req.url.startsWith('/list')){
			readFile('list.html',res);
		}else{
			res.end('404');
		}
		}).listen(3000,'127.0.0.1',()=>{
			console.log('runing');
	});
*/




req.method()  可以知道用户是用post get等方式提交的


路由 = 请求路径 + 请求方式
