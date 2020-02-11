const querystring = require('querystring');  //escape(str)与unescape(str) 内部自己调用
const http = require('http');

//parse方法的作用就是把字符串转成对象
let param = 'name=zs&password=123';
// let param = 'name=zs&abc=123&abc=456';  这是abc就成了一个数组存两个值
let obj = querystring.parse(param);
console.log(obj);

//stringify()把对象转成字符串
let obj = {
	name:'hi',
	abc:'hello'   //abc:['hello','world']
}
let string = querystring.stringify(obj);
console.log(string);








//接收post参数
const http = require('http');
http.createServer((req,res)=>{
	if(req.url.startsWith('/login')){
		let pdata = '';
		req.on('data',(chunk)=>{
			pdata += chunk;
		});

		req.on('end',()=>{
			console.log(pdata);
			let obj = querystring.parse(pdata);
			res.end(obj.username + '-----' + obj.password);
		});
	}

}).listen(3000,()=>{
	console.log('runing');
});