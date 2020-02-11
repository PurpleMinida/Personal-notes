# 第一部分

## 数据类型

```javascript
//基本（值）类型
    String：任意字符串
    Number：任意数字（小数正数负数）
    Boolean：true/false
    undefined：undefined
    null：null
//对象类型（引用）类型
    Object：任意对象
    Function：一种特别的对象（可以执行，对象存放数据，他是存放可以执行的代码）（只要[返回值]是函数类型加个小括号就可以执行）
    Array：一种特别的对象（有数值下标，内部数是有序的）
//判断数据类型
    typeof：返回值是字符串包住的
        可判断：undefined/数值/boolean/字符串/function
        不能判断：null与object   array与object
    instanceof：判断对象类型的 返回值是一个Boolean
        可判断：对象类型 function和array既是自己类也是object类型
    ===
        可判断：undefined和null以为这两个轧制油一个值 ， typeof null 时返回一个空对象object


//问题
undefined与null的区别
    undefined定义但未赋值
    null附了值只是值为null
    空字符串是string类型不是null
什么时候用null
    1.就是你想定义一个对象但是还不知道数据就开始赋值为null
    2.在最后要释放内存再把对象赋值为null（这时对象数据就会被回收）
严格区别变量类型和数据类型
    数据类型
        基本类型
        对象类型
    变量类型
        基本类型：保存的就是基本类型的数据
        引用类型：保存的是地址值
```

## 数据、变量、内存

```js
什么是数据
    存储在内存中代表特定信息的‘东东’，本质是010101...
什么是内存
    通电以后存储数据（临时的）
    内存条=》通电=》产生内存空间=》存储数据=》处理数据=》断电=》内存和数据消失
    一块内存存两个数据
        内部存储的数据
        地址值
    内存分类
        栈：全局变量、局部变量
        堆：对象
什么是变量
    可变的量，有变量名和变量值组成
    变量名用来查找对应的内存，变量值就是保存在内存中的数据


var a = 1;//a中保存的就是基本数据类型，那这里的a保存的就是1
b = a //这里就是把1复制一份给b

var a = {};//a中保存的就是对象的引用的地址
b = a//就是把a中的内容复制给b，只是a的内容是地址值，这时a/b任何一个变量改变对象的内容，都会改掉对象对应的内容，因为他们指向的是同一个堆内存对象

var a = {name:'tom'}
var b = {name:'tom'}//这种并不会指向同一个对象，而是创建了两个对象

函数中传递实参给形参也是赋值的过程
var obj = {name:'tom'}
function fn(o){} 
fn(obj)//这里也是把obj中保存的地址值传给了o，函数中o也是指向同一个对象，o改变也会改变obj

注意：
2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改后的数据
2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象

在一个函数中给以个对象重新赋值为另一个对象，那函数执行完变量会重新指向回原来的函数之外的对象，但是在函数中给对象的属性赋值，那么函数执行完就会改变对象的属性值
```

```js
在js调用函数时传递变量参数时，是引用传递，引用传递就是传地址值
var a = {age:12}
function fun(obj){
    obj = {age:13}
}
fun(a)//函数执行完会回收垃圾对象
console.log(a.age)//12  


在js调用函数时传递变量参数时，是值传递，值就是基本数据，就是等号后边的值
var a = 3
function fn(a){
    a = a+1
}
fn(a)
console.log(a)//3  就是因为值传递，所以把3传进去并不会改变外面a的值

//全局的变量如果没有赋值成null就不会释放，局部变量会自己释放。回收和释放是不同的概念，回收是垃圾回收器间隔时间时（某个时刻）回收掉，释放是执行完直接自己释放
js引擎如何管理内存
    内存生命周期
        分配小内存空间，得到他的使用权
        存储数据，可反复进行操作
        释放小内存空间
    释放内存
        局部变量：函数执行完自动释放
        对象：成为垃圾对象==》垃圾回收器回收
```

## 对象

```js
什么是对象
    多个数据的封装体
    保存对个数据的容器
    一个对象代表现实中的一个事物
为什么用对象
    统一管理多个数据
对象的组成     可以用点或中括号得到对象中的属性
    属性：属性名（字符串类型无论你有没有单引号，内部都转字符串）属性值（任意类型）
    方法：特别的属性
如何访问对象内部数据

可以用点或中括号得到对象中的属性
.属性名：使用简单，但是有时不能通用，有使用不了，
            1.属性名包含特殊字符就用不了，- 空格
            2.变量名不确定，就要用中括号放一个变量
['属性名']：能通用
```

## 函数

```js
什么是函数
    实现特定功能的封装体
    只有函数可以执行
为什么用函数
    提高代码复用
    便于阅读交流
如何定义函数
    函数声明 function fun(){}
    表达式方式 var fun = function(){}  有变量提升的区别
如何调用（执行）函数
    fun()  直接调用
    obj.fun()  通过对象调用
    new fun()  new调用
    fun.call/apply(obj)  临时让fun成为指定对象的方法调用，就是obj和fun好无关系但是就能让fun成为obj的函数调用
```

## 回调函数

```js
什么是回调函数
    1.你定义的
    2.你没有调用
    3.最终自动执行
常见回调函数
    dom事件函数
    定时器回调函数
    ajax请求回调函数
    生命周期回调函数
```

## _IIFE

```js
理解
    Immediately-Invoked Function Expression
作用
    隐藏实现
    不会污染外部（全局）命名空间
(function(){})()
```

## this

```js
this是什么
    任何函数本质上都是通过某个对象来调用的，如果没有直接指定就是window
    所有函数内部都有一个变量this
    他的值是调用函数的当前对象
如何确定this的值
    test():window
    p.test():p
    new test(): 新创建的对象
    p.call(obj):obj
```

## 分号

```js
不用分号的情况
    1.自定义函数自调用，就是下一条语句以（）开头
        ;(function(){})()
    2.中括号开头的前一条语句
        ;[1.2.3].forEach(function(){})
```

# 第二部分

## 函数原型

```js
//原型上的方法需要实例调用
1.函数的prototype属性
    每个函数都有一个prototype属性，它默认指向一个object空对象（即称为：原型对象）
    原型对象中有一个属性constructor，它指向函数对象
2.给原型添加属性（一般都是方法）
    作用：函数的所有实例对象自动拥有原型中的属性和方法
```

## 显式原型与隐式原型

```js
显式原型属性
    每个函数都有一个prototype，显式原型
隐式原型
    每个实例对象都有一个__proto__，就是隐式原型属性，实例兑现才有的隐式原型

对象的隐式原型的值为其对应构造函数的显示原型的值
    function Fun(){}
    var fun = new Fun()
    console.log(Fun.prototype===fn.__proto__)//true

prototype与__proto__都是引用类型，保存的都是地址值，只不过地址值是一样的，都指向了原型对象

总结：
    函数的prototype属性：在定义函数时自动添加，默认是一个空对象
    对象的__proto__属性：创建对象是自动添加，默认值是构造函数的prototype属性值
    es6之前程序员能直接操作显式原型，不能操作隐式原型
```

## 原型链

```js
访问一个对象的属性时
    先在自身中找，找到返回
    如果没有，在沿着__proto__这条链上去找，找到返回
    如果最终没有找到，返回undefined
别名：隐式原型链
作用：查找对象的属性（方法） 


所有函数的__proto__都是一样的，因为所有函数创建时都是 var Foo = new Function(){}


//以下Object和Function均是你定义函数时的函数名称
函数的显示原型指向的对象默认是空Object实例对象（但是Object函数不满足）
Fun.prototype instanceof Object//true
Object.prototype instanceof Object//false
Function.prototype instanceof Object//true

所有函数都是Function的实例（包括Function他自己）
Function.__proto__ === Function.prototype

Object的原型对象是原型链的尽头
Object.prototype.__proto__ //null
```

## 原型链的属性

```js
1.读取对象的属性值时：会自动到原型链中查找
2.设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值
3.方法一般定义在原型中，属性一般通过构造函数定义在对象本身上
```

## instanceof

```js
实例对象 instanceof 构造函数
构造函数的显式原型对象在实例对象的原型链上，返回true，否者返回false

Function和Object是js内部的函数，就定义函数或对象时，js内部就会new Function或new Object
```

## 原型测试题

```js
1.
function A (){}
A.prototype.n = 1
var b = new A()
A.prototype = {
    n:2,
    m:3
}
var c = new A()
console.log(b.n,b.m,c.n,c.m)//1 undefined 2 3

2.
function F (){}
Object.prototype.a = function(){
    console.log('a()')
}
Function.prototype.b = function(){
    console.log('b()')
}
var f = new F();
f.a()//a()
f.b()//undefined
F.a()//a()
F.b()//b()
```

## 变量提升(后)和函数提升(先)

```js
console.log(b)//undefined  变量提升
var b = 3

fun()//fun  函数提升
function fun(){
    console.log('fun')
}

var fn = function(){}//这是变量提升
```

## 执行上下文栈

- 就是栈中的后进先出，在栈中永远执行最顶上面那个

- 最底层是window，然后哪个函数进来就执行，如果该函数内部又调用另一个函数，那么调用的另一个函数就会进入栈中，等另一个函数执行完释放掉，再执行原来的那个函数，最后到window

### 测试题

```js
function a(){}
var a
consoleo.log(typeof a)//'function'

if(!(b in window)){
    var b = 1

}

console.log(b)//undefined

var c = 1
function c(){
    console.log(c)
}
c(2)//报错
为什么报错上面的执行顺序是
var c
function c(){
 console.log(c)
}
c = 1
c(2)
```

## 作用域与作用域链

```js
全局作用域
函数作用域
没有块作用域（es6有了），块就是{}中的作用域

作用：
    隔离变量

作用域链就是函数嵌套时在最里面访问某个变量是一层一层往外找

面试题：
    var x = 10
    function fn(){
        console.log(x)
    }
    function show(f){
        var x = 20
        f()
    }
    show(fn)//10， 这里有一个全局作用域，两个函数作用域，虽然把函数作为实参传递进去，但是他不会把函数嵌进show里面，所以打印x fn()函数自身没有x就到全局去找了

    var fn = function(){
        console.log(fn)
    }
    fn()//输出整函数

    var obj = {
        fn2:function(){
            console.log(fn2)//去本身内部作用域找没有fn2，然后就去全局找，如果你说为什么没有找对象的fn2呢，如果找对象的fn2就是console.log(this.fn2)
        }
    }
    obj.fn2()//报错
```

## 循环遍历添加事件（闭包开始例子）

```js
var btns = document.getElementByTagName('button')
//因为这里的length并不是存在的，因为btns是伪数组，所以length每次都要计算
for(var i = 0,length=btns.length;i++){
    var btn = btns[i]
    btn.onclick = function(){
        alert('第'+i+'个')
    }//这个函数只在后面某个时刻执行，但是for循环早就执行完了，所以每次弹出的都是i的最后一次++的值
}

for(var i = 0,length=btns.length;i++){
 var btn = btns[i]
 btn.index = i//将btn所对应的下标保存在btn上
 btn.onclick = function(){
 alert('第'+(this.index)+'个')
 }
}

//闭包
for(var i = 0,length=btns.length;i++){
 (function(i){
     var btn = btns[i]
     btn.onclick = function(){
     alert('第'+i+'个')
     }
 })(i)
}
```

## 闭包

```js
如何产生闭包
    当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生闭包
闭包是什么
    理解一：闭包是嵌套的内部函数（大多数人）
    理解二：包含被引用变量（函数）的对象（极少数人）
    注意：闭包存在于嵌套的内部函数中
产生闭包的条件
    函数嵌套
    内部函数引用外部函数的数据（变量/函数）

执行函数定义就会产生闭包（不用调用内部函数，要调用外部函数）

function fn1(){
    var a = 2
    var b = 'abc'
    function fn2(){//执行函数定义产生闭包，但是如果用一个变量等于一个函数的话是不会产生闭包的
        console.log(a)//引用了外部函数的数据
    }
}
```

## 创建的闭包

```js
1.将函数作为另一个函数的返回值
    function fn1(){
        var a = 2
        function fn2(){
            a++
            consoe.log(a)
        }        
        return fn2
    }
    var f = fn1()
    //闭包只产生一次（因为只调用了一次外部函数）
    f()//3  所以a的值原来是2，现在++等于3
    f()//4  因为上面把a变成了3，现在++等于4

2.将函数作为实参传递给另一个函数调用
```

## 闭包的作用

```js
1.使函数内部的变量在函数执行完后，还存活在内存中
2.让函数外部可以操作（读写）到函数内部的数据（变量函数）

函数执行完之后就自动释放了，但是全局var f = fn1()因为f还指向函数的返回值所以函数的返回值哪个函数没有释放
```

## 闭包的生命周期

```js
产生
    只要执行函数，函数内部嵌套的函数会提升，所以只有进入有嵌套的函数就会产生
    
function fn1(){
    //产生
    var a = 2
    function fn2(){
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1()
f()//3
f()//4
f = null//闭包死亡（包含闭包的函数对象成为垃圾对象）
```

## 闭包应用

```js
js模块的应用
    1.一个js文件模块，用一个函数包含全部内容，定义变量和函数都在该函数中，然后该函数return全局函数的变量或方法时包在一个对象中，当其他文件引入js模块文件，就执行js模块文件的全局方法在通过点执行return的方法
    例子
    //一个js文件中
    function module(){
        var msg = 'hello'
        function do(){
            console.log('do()'+msg.toUpperCase())
        }
        function go(){
            console.log('go()'+msg.toLowerCase())
        }
        //这里不return也可以，你直接赋值到window上
        /*这种方式最好用因为直接引入就可以用，下面哪种还需要执行一次函数
            window.module = {
                do:do,
                go:go
            }
        */
        return{
            do:do,
            go:go
        }
    }
    //另外的html文件（也不一定是html文件吧，因为js文件中也能引入js文件）
    引入之后执行全局函数赋值给一个变量
    var f = module()
    通过点调用内部的闭包函数
    f.do()
    f.go()

```
## 闭包的缺点
```js
1.缺点
    函数执行完后，函数内的局部变量没有释放，占用内存时间会变长
    就会造成内存泄漏，内存泄漏就是内存被白白占用着又用不上
2.解决
    能不用闭包就不用
    及时释放，就是让接受的那个变量等于null
```
## 内存溢出与内存泄漏
```js
    伪数组就是一个对象，而对象的键是0,1,2,3
    {
        0:'hello',
        1:'hi',
        2:'hihi'
    }

    内存溢出就是对象啊变量啊等数据保存在内存中时，超出了内存的容量

    内存泄漏就是占用的内存没有释放，内存泄漏累积多的话就容易导致内存溢出，setInterval也会造成内存泄漏，闭包也会，因为闭包不等于null的话函数的局部变量也会一直保存在内存中

```
## 面试题
```js
1.
var name = 'the window'
var object = {
    name:'my object',
    getNameFunc:function(){
        return function(){
            return this.name
        }
    }
}
alert(object.getNameFunc()())//the window
//object.getNameFunc()的this就是object但是又加了一个（）this就不是object，就相当于定义的函数直接执行，那么该函数的this就是window


2.
var name = 'the window'
var object = {
    name:'my object',
    getNameFunc:function(){
        return function(){
            return this.name
        }
    }
}
alert(object.getNameFunc()())//my object
```
## 对象创建模式
```js
1.开始时不确定对象内部数据
    var p = new Object()
    p.name = 'tom'
    p.age = 12
    p.setName = function (name){
        this.name = name
    }

2.开始时确定数据
    var p = {
        name:'tom',
        age:12,
        setName:function (name){
             this.name = name
        }
    }

3.工厂模式(通过工厂函数动态创建对象并返回)
    function createPerson(name,age){
        var obj = {
            name:'tom',
            age:12,
            setName:function (name){
                 this.name = name
            }
        }
        return obj
    }

4.自定义构造函数模式(new多次时会，会造成内存浪费掉，因为有相同的函数)
    function Person(name,age){
        this.name = name
        this.age = age
        this.setName = function (name){
                 this.name = name
            }
    } 
    var p1 = new Person('tom',12)
    var p2 = new Person('jack',13)

5.构造函数+原型(就是把函数放到原型上)
    function Person(name,age){
        this.name = name
        this.age = age
        Person.prototype.setName = function (name){
                 this.name = name
            }
    } 
    var p1 = new Person('tom',12)
    var p2 = new Person('jack',13)
```
## 继承
```js
原型链继承(子类型的原型为父类型的一个实例对象)(主要继承的是方法)

    //父类型
    function Supper(){
        this.supProp = 'Supper property'
    }
    Supper.prototype.showSupperProp = function (){
        console.log(this.supProp)
    }

    //子类型
    function Sub(){
        this.subProp = 'Sub property'
    }
    Sub.prototype = new Supper()//这里实行原型继承
    Sub.prototype.constructor = Sub//这里让constructor指回Sub构造函数
    Sub.prototype.showSubProp = function (){
        console.log(this.subProp)
    }

    var sub = new Sub()
    sub.showSupperProp()//这里就可以调用父类型的方法
    sub.showSubProp()//也可以调用自己的原型上的方法
    consoleo.log(sub.constructor)//Supper函数，因为constructor原型上，但是上面已经把sub的原型等于new Supper了，所以这里constructor变成了Supper函数


借用构造函数继承(主要继承的是属性)
    function Person(name,age){
        this.name = name
        this.age = age
    }
    function Student(name,age,price){
        Person.call(this,name,age)//this指向的是Person，这里相当于执行Person方法
        this.price = price
    }

    var s = new Student('Tom',20,14000)
    console.log(s.name,s.age,s.price)

组合继承(结合上面两种)
    function Person(name,age){
        this.name = name
        this.age = age
    }
    Person.prototype.setName = function (name){
        this.name = name
    }


    function Student(name,age,price){
        Person.call(this,name,age)//主要继承父类的属性
        this.price = price
    }
    Student.prototype = new Person()//主要继承父类的方法
    Student.prototype.constructor = Student//把constructor重新指回Student构造函数
    Student.prototype.setPrice = function (price){
        this.price = price
    }

    var s = new Student('Tom',20,14000)
    s.setName('Bob')
    s.setPrice('16000')
    console.log(s.name,s.age,s.price)
```
## 进程与线程
```js
进程
    程序运行占据的独有的一块内存
    一个进程中的数据供他所有线程使用，但是不供其他进程使用，因为每个进程是独立的
线程
    是进程内的一个独立执行单元

程序运行启动进程，一个程序可以有多个进程

多线程
    优点：提高CPU利用率
    缺点：1.多线程开销大
         2.线程间切换开销（多线程不一定同时执行多个线程，如果是单核CPU就会这个线程执行一点那个线程执行一点）
单线程
    优点：顺序编程简单易懂
    缺点：效率低
```
## 浏览器内核

## 定时器引发的思考
```js
1.定时器真的定时执行吗
    setInterval定时的时间也不是最准确的会有一点延迟，如果里面有循环等时间长的代码会超时执行（不能接受的超长时间）
```
## js是单线程的
```js
alert会暂停当前主线程执行，同时会暂停定时器执行（同时暂停了计时）(alert点击确定之后，才会重新计时定时器)

js引擎执行代码的基本流程
    先执行初始化代码
        设置定时器
        绑定事件监听
        发送ajax请求
    后面在某个时刻才会执行回调代码(异步执行)

```
## 事件循环模型
```js
1.先执行堆栈里的初始化代码
2.把回调代码给到对应的事件(定时器/DOM事件/ajax)管理模块
3.当触发了某个事件，对应的模块就会把对应的回调函数放到回调队列里面执行
```

## H5 Web Workers多线程
```js
页面有一个输入框和一个按钮，输入几位就计算第几位的斐波那契数列
function fibonacci(n){
    return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}
但是当输入的位数较大时主线程就一直在计算(函数递归，在栈中一直堆叠函数)，这时页面就不能操作了

这时就出现了多线程Web Workers
    可以把大量的计算代码交给Web Workers运行，从而不冻结页面
    但是子线程完全受主线程控制，且不得操作DOM，所以这个新标准没有改变js单线程的本质

使用
    1.新建一个js文件(主要把计算的过程放进去)
    2.在主线程(html文件中)
        //创建一个Worker对象
        var worker = new Worker('分线程路劲就是上面的js文件路径')
        //向分线程发送消息(这里把number传递过去)
        worker.postMessage(number)
        //绑定接收消息的监听(数据在event.data中)
        worker.onmessage = function (event){
            console.log(event.data)
        }
    3.在分线程的js文件中
        //这是计算斐波那契数列的函数
        function fibonacci(n){
            return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
        }

        //监听主线程传递过来的数据
        var onmessage = function (event){
            //接收主线程传递过来的数据
            var number = event.data
            //计算斐波那契数列结果
            var result = fibonacci(number)
            //把结果发送到主线程
            postMessage(result)
        }

注意：
    分线程中的this并不指向window，你可以打印看一下
    所以在分线程中使用不了alert()等window的方法
    因为全局对象不再是window，所以更新不了界面

不足：
    慢
    不能跨域加载js
    分线程不能访问DOM
    不一定兼容每个浏览器
```