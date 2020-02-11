//包含文件名的路径 __filename
console.log(__filename);
//不包含文件名的路径 __dirname
console.log(__dirname);

//定时函数 setTimeout setInterval

//process.argv是一个数组，默认有两个元素 一是node.js环境的路径 二是当前文件的全路径
//从第三个参数开始表示从命令行接收的参数  node xxx.js  123 456 789  后是参数
console.log(process.argv);

//process.arch  系统位数