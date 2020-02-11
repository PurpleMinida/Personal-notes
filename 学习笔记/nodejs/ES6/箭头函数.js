
之前
function foo(){
	//函数体
	console.log('hello');
}
foo();

//箭头函数（上面效果与下面一样）
let foo = () => console.log('hello');
//调用
foo();

//作为匿名函数时
() => {/*函数体*/}


//this指向 因为箭头函数没有this 所以this就指向了外层代码的this
//取决于函数定义不是调用

//不能使用arguments
//可以这样
let foo = (...parem) => {
	console.log(parem);
}
foo(123,456);











1. 具有一个参数的简单函数

1
2
var single = a => a
single('hello, world') // 'hello, world'
　　

2. 没有参数的需要用在箭头前加上小括号

1
2
3
var log = () => {
    alert('no param')
}
　　

3. 多个参数需要用到小括号，参数间逗号间隔，例如两个数字相加

1
2
var add = (a, b) => a + b
add(3, 8) // 11
　　

4. 函数体多条语句需要用到大括号

1
2
3
4
5
6
7
var add = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    } else {
        return 0
    }
}
　　

5. 返回对象时需要用小括号包起来，因为大括号被占用解释为代码块了

1
2
3
4
5
6
7
var getHash = arr => {
    // ...
    return ({
        name: 'Jack',
        age: 33
    })
}
　　

6. 直接作为事件handler

1
2
3
document.addEventListener('click', ev => {
    console.log(ev)
})
　　

7. 作为数组排序回调

1
2
3
4
5
6
7
8
var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
    if (a - b > 0 ) {
        return 1
    } else {
        return -1
    }
})
arr // [1, 2, 3, 4, 8, 9]
　　

二、注意点
1. typeof运算符和普通的function一样

1
2
var func = a => a
console.log(typeof func); // "function"
　　

2. instanceof也返回true，表明也是Function的实例

1
console.log(func instanceof Function); // true
　　

3. this固定，不再善变

1
2
3
4
5
6
7
8
9
10
11
12
13
obj = {
    data: ['John Backus', 'John Hopcroft'],
    init: function() {
        document.onclick = ev => {
            alert(this.data) // ['John Backus', 'John Hopcroft']
        }
        // 非箭头函数
        // document.onclick = function(ev) {
        //     alert(this.data) // undefined
        // }
    }
}
obj.init()
这个很有用，再不用写me，self，_this了，或者bind。

 

4. 箭头函数不能用new

1
2
3
4
5
var Person = (name, age) => {
    this.name = name
    this.age = age
}
var p = new Func('John', 33) // error
　　

5. 不能使用argument

1
2
3
4
var func = () => {
    console.log(arguments)
}
func(55) //