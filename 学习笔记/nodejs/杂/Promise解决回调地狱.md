```
//原来
const fs = require('fs');
fs.readFile('xxx.xxx'),(err,data) => {
	console.log(111);
	fs.readFile('xxx.xxx'),(err,data) => {
		console.log(222);
		fs.readFile('xxx.xxx'),(err,data) => {
			console.log(333);
		}
	}
}

//异步时使用该对象
//Promise就是一个对象
/*
	就像一个容器封装一个异步操作
	容器内部有三种状态
		pending  正在处理
		resolved  成功
		rejected  失败
*/
函数内写一个回调函数
该函数是一个异步操作
new Promise((resolve,reject)=>{
	fs.readFile('xxx.xxx'),(err,data) => {
		if(err){
			// Promise的状态只要改变就不会往下执行，所以这个if不用return也可以
			reject(err)
		}
		resolve(data)
	}
})
//then方法需要两个回调处理函数,第一个是成功的回调，第二个是失败的回调
.then((data)=>{
	return new Promise((resolve,reject)=>{
	fs.readFile('xxx.xxx'),(err,data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        }
    })
},(err)=>{

})
//可以一直then下去，后面的then数据重前一个then的return获取
//也可以把Promise对象封装起来
```

```
//jQuery的Promise，jQuery已经封装好了
$.ajax({

}).then(data=>{
	return $.ajax({
	
	})
}).then(data=>{

})//这里的catch异常处理，只要前面任何出现异常就进入catch，前面出错的位置停止就不会往下执行了，这时就不知道是哪个then的错，如果想要知道哪里出错就在哪个then的第二个错误处理函数中设置，但是即使报错也会向下执行
.catch(err => {})
```

