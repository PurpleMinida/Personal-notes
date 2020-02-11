const fs = require('fs');
/*
	大文件操作(流式操作)
	fs.createReadStream(path[,options]);
	fs.createWriteStream(path[,options]);
*/

let num = 1;
let readStrem = fs.createReadStream('被读的文件路径');
let writeStrem = fs.createWriteStream('写入文件的路径');

//一种
readStrem.on('data',(chunk)=>{ //chunk是一段一段的数据
	writeStrem.write(chunk);
	num++;
});
readStrem.on('end',()=>{
	console.log('文件处理完成'+num+'次');
});

//二种
readStrem.pipe(writeStrem);