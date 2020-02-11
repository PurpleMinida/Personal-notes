//变量声明let const
let声明的变量不存在预解析(不存在变量提升)
let声明的变量不予许重复(在同一作用域)
var flag = 1;
var flag = 2;//可以

let flag = 1;
let flag = 2;//不行 但是在不同作用域可以
//在块级作用域定义的变量外面是不能访问的

{块级作用域}
if(){}
for(){}


//以前循环添加事件需要自定属性，有了let之后就不用了
document.querySelectorAll('li');
for(let i = 0;i<lis.length;i++){
	lis[i].onclick = function(){
		alert(i);
	}
}




const声明常量(同样有上面的特性)
//不能重新赋值
//一定要赋值
//块级作用域