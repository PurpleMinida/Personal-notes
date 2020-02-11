//hello world

const express = require('express');//返回值是一个函数
const app = express();//此处调用函数   此处的返回值是一个对象

app.get('/', (req, res) => res.send('Hello World!'));//send函数本质和end差不多  get第一个参数是路径
//   '/' 表示根路径
app.listen(3000, () => console.log('Example app listening on port 3000!'));




// let server = app.get('/',(req,res)=>{
// 	res.send('abc');
// });
// server.listen(3000,()=>{
// 	console.log('runing...');
// });





