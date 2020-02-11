//一个js文件
	var sum = function(a,b) {
		return parseInt(a) + parseInt(b);
	}
	//导出模块成员
	exports.sum = sum;

	//导出成员的另一种方式
	module.exports = sum;

	//不常用导出
	var flag = 56;
	global.flag = flag;

//另一个js文件（已加载的文件不会导入 比如导入多次相同文件就只导入一次）
	var module = require('./xxx.js');
	//以exports.sum = sum;模式导出时调用
	var ret = module.sum(12,13);
	console.log(ret);

	//以module.exports = sum;模式导出时调用
	var ret = module(12,15);
	console.log(ret);

	//以	global.flag = flag;模式导出时调用 不用变量接收
	require('./xxx.js');
	console.log(global.flag);