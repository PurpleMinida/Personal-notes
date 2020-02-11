//Buffer对象时node处理二进制的一个接口 时全局对象 可以直接使用不用导入

//实例化（构造方法）
Buffer.from(array);
Buffer.alloc(size);
//功能方法（静态方法  直接buffer点出来的方法）
Buffer.isEncoding() //判断是否支持该编码
Buffer.isBuffer() //判断是否为Buffer对象
Buffer.byteLength() //返回指定编码的直接长度，默认utf8
Buffer.concat() //将一组Buffer对象合并成一个Buffer对象
//实例方法（实例之后用哪个变量点出来的方法）参数自己查文档
write()  //在Buffer对象中写入内容
slice(start,end)  //截取新的Buffer对象
tuString()  //把Buffer对象转成字符串
toJSON()  //把Buffer对象转成json    

//toJSON类似下面
const buf = Buffer.from();
const json = JSON.stringify(buf);