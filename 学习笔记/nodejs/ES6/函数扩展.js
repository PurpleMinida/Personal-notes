/*
	函数扩展
	1 参数默认值
	2 参数解构赋值
	3 rest参数
	4 ...扩展运算符
*/

1 参数默认值
以前给参数默认值
function foo(parem){
	let p = parem || 'hello';
}
现在es6给默认值
function foo(parem = 'hi'){

}

-------------------------
2 参数解构赋值
function foo({name='lj',age=45}={}){

}
foo({name:'lk',age:'21'});
-------------------------
3 rest参数
function foo(a,...parem){
	会把剩余的参数存到一名为parem的数组中
	console.log(a); //1
	console.log(parem); //[2,3]
}
foo(1,2,3);
---------------------
4 ...扩展运算符
function foo(a,b,c,d,e){
	console.log(a + b + c + d + e); //15
}
let arr = [1,2,3,4,5];
foo(...arr); //就把数组的每个值传进去了



合并数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = [...arr1,...arr2]; //arr = [1,2,3,4,5,6]