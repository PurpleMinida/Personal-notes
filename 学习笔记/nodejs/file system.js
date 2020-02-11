const fs = require('fs');

有Sync的方法都表示同步的方法  没有就是异步


@@@查看文件


异步    (没有返回值undefined)   (会把他放到时间队列中)

fs.stat(path,callback);  
fs.stat('./xxx.txt',(err,stat) => {
	//一般回调函数的第一个参数是错误对象err为null表示没有错误
	//stat是一个对象 该对象的属性和方法自己查文档  常用的两个  stat.isFile()是否为文件  stat.isDirectory()是否为目录
	if(err) return;
	console.log(stat);
	/*
		atime  访问时间
		ctime  文件的状态信息发生变化的时间（比如文件的权限）
		mtime  文件数据发生变化的时间
		birthtime  文件创建的时间
	*/
});

同步   (接收返回值)

let ret = fs.statSync(path);  
console.log(ret);




@@@读文件

异步
const fs = require('fs');
fs.readFile(file[,options],callback);  //options是设置编码的 如果没有就是Buffer实例对象  r 等权限
/*
	fs.readFile('路径',(err,data)=>{
		if(err) return;
		console.log(data.toString);  //data是Buffer对象   data.toString()转码
	});

	fs.readFile('路径','utf8',(err,data)=>{
		if(err) return;
		console.log(data);
	});
*/

同步
let ret = fs.readFileSync('路径');  //参数和异步是一样的
console.log(ret);

@@@写文件
fs.writeFile('路径','内容',callback);
fs.writeFile('xxx.txt','内容','utf8',(err)=>{
	console.log(err);
});

fs.writeFileSync();

