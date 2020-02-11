//路径操作
const path = require('path');

path.basename('aaa/bbb/xxx.html'[,'.html']); //返回xxx.html [是否需要后缀]
path.dirname()  //无文件名
path.extname()  //扩展名

path.format()  //obj -> string
path.parse()   //string -> obj

let obj = path.parse('E:\xxx\xxx.js');
/*
	{
		root:'E:\\',
		dir:'E:\\xxx',
		base:'xxx.js',
		ext:'.js',
		name:'xxx'
	}
*/
//获取其中的属性
console.log(obj.base);

path.isAbsolute() //是否为绝对路径

path.join('xxx','aaa','../');  //路径拼接自动不 \ .表示当前目录  ..表示上级目录(用了上级目录之后就不会往后面的目录去了)
path.normalize(path); //规范化路径

path.relative(from,to);  //从一个路径到另一个路径的相对路径
path.resolve();


//两个属性
path.delimiter;  //路径分隔符 windows \  linux /
path.sep  //环境变量分隔符 windows ;   linux  :
