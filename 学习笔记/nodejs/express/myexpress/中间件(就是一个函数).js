//  中间件：就是处理过程的一个环节
//通过next一个一个往下  第一个不执行是不能执行后面的use的


@@@@应用中间件

const express = require('express');
const app = express();
let total = 0;

app.use('/user',(req,res,next)=>{    //把'/user'参数省略就会无论访问哪个文件都会记录
	//记录访问时间
	console.log(Date.now());
	//next方法的作用就是把请求传递给下一个中间件
	next();
});

app.use('/user',(req,res,next)=>{
	//记录访问日志
	console.log('访问了/user');
	next();
});

app.use('/user',(req,res)=>{
	total++;
	console.log(total);
	res.send('result');
});

app.listen(3000,()=>{
	console.log('running...');
});

----------------------------------------------

@@@@路由中间件

中间件的挂载方式
use
路由方式：get post put delete;

const express = require('express');
const app = express();


//两个函数中间件  可以一直写函数写下去
app.get('/abc',(req,res,next)=>{
	console.log(1);
	next();
	//next('route');可以跳过一个路由
},(req,res)=>{
	console.log(2);
	res.send('abc');
});

//上面是写函数的中间件  也可以多次调用方法的中间件
app.get('/abc',(req,res,next)=>{
	console.log(1);
	next();
});
app.get('/abc',(req,res,next)=>{
	console.log(2);
	res.send('bbb');
});

//还可以吧函数定义在外面 通过数组(要有顺序)传递给第三个参数的方式
let fun1 = function(req,res,next){
	console.log(1);
	next();
}
let fun2 = function(req,res,next){
	console.log(1);
	next();
}
let fun3 = function(req,res,next){
	console.log(1);
	next();
}

app.get('/abc',[fun1,fun2,fun3]);

//还可以数组和函数混用

let fun1 = function(req,res,next){
	console.log(1);
	next();
}
let fun2 = function(req,res,next){
	console.log(1);
	next();
}

app.get('/abc',[fun1,fun2],(req,res,next)=>{
	console.log(1);
	res.send('bbb');
});



app.listen(3000,()=>{
	console.log('running...');
});




@@@@第三方中间件  安装 body-parser