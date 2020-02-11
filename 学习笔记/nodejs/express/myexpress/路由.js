/*
	路由（根据请求路径和请求方式进行路径分发处理）  
	http的请求方式
		post      添加
		get 	  查询
		put		  更新
		delete	  删除

	restful api（一种URL的格式）
*/
const express = require('express');
const app = express();


//基本的路由处理  (单一)
app.get('/',(req,res)=>{
	console.log('get data');
});

app.post('/',(req,res)=>{
	console.log('post data');
});

app.put('/',(req,res)=>{
	console.log('put data');
});

app.delete('/',(req,res)=>{
	console.log('delete data');
});


app.listen(3000,()=>{
	console.log('running');
});


//use可以监控所有的请求方式
app.use((req,res)=>{
	res.send('ok');
});