# type类型

#### 类型还可以放到函数的形参中  返回值类型规定

```
function foo(a:number,b:string){}
//调用时一定要传规定参数
foo(12,'ds')
//返回值类型规定
function foo(a:number,b:string):number{ return c + d }
var ret:number = foo(12,'ds')
//空返回值
function foo(a:number,b:string):void{}
```

var foo:string = 'bar';  //这样以后就不能重新赋值foo改变类型

```
//对象的固定类型
var user:{name:string,age:number} = {name:'jack',age:18}
```

- ：boolean

- ：number

- ：string

- 数组
  
  - 数字数组
    - let arr：Array<number> = [1,2,3]
    - let arr:number[] = [1,2,3]
  - 字符串数组
    - let arr：Array<string> = [1,2,3]
    - let arr:string[] = [1,2,3]
  - 元组(包含number，string)
    - let arr:[number,string] = [10,'zs']  //后面的数组循序都不能反意义对应

- object
  
  - let user:object = {}

- interface
  
  - ```
    interface:Person{
        name:string,
        age:number
    }
    //然后对象的类型就可以简化对象的写法
    let zs:Person = {
        name:'zs',
        age:18
    }
    let ls:Person = {
        name:'ls',
        age:14
    }
    ```

- any任何类型
  
  - let lala:any = '12'

- void 空类型
  
  - 只能让用于函数返回值

- null

- undefined

# 安装typescript编译环境（本地）（在线去官网）

安装  npm i -g typescript

查看版本  tsc --version

查看使用帮助  tse --help

# 解构赋值（函数的参数也可以）

- ```
  //数组
  let arr = [1,2,3]
  [num1,num2,num3] = arr;
  //对象
  let user = {
      name:'zs',
      age:18
  }
  let {name:uname,age} = user
  //其中的name:uname表示起别名
  
  //函数的
  function add([x,y]):number{
      return x + y
  }
  add([10,20])  //x=10,y=20  传对象也可以
  ```

- ...剩余参数  用在对象时方法也会写入

# 类（就是构造函数的另一种书写方式）

```
//typescript的类的属性需要被定义才能使用
class Person {
    name:string;
    age:number;
    //也可以在这里 赋值
    type:string = 'hi';
    constructor(name:string,age:number){
        //这里使用上面需要想定义类型
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('hello');
    }
}
```

# 类的访问（默认是public）

- public 公开的   在成员前面加关键子
- private  私有的   只能在类内部访问
- protected  受保护的  也是私有的  但是可以被继承  被继承之后也是只能在继承的类中使用
- readonly  只读的不能修改  公开的  可以与其他三个一起使用 写在他们后面

# 继承（extends）

- 私有成员不能被继承  private  

# get set 存值 赋值器  也就是一个方法

```
class Person{
    private _age:number;
    get age(){
        return this._age
    }
    set age(val){
        if(val < 0){
            throw new Error('不能小于0')
        }
        this._age = val;
    }
}

let p1 = new Person();
p1.age = -10;
```

# 实例成员与静态成员

- 实例成员，只能通过 new 出来的实例访问
- 静态成员，也叫类本身的成员，只能通过类本身访问  static关键字

# 函数

- 参数和返回值的类型

- 可选参数
  
  - ```
    function(x?:number){} //x可传可不传
    ```
  
  - ```
    function(y:number = 20){} //默认值
    ```

- ...剩余参数

# for of循环（支持break）

- ```
  for (let val of arr){console.log(val)} //这时得到的是数组的值
  ```

# 模块

- 导出
  - export default xxx
  - export
- 导入
  - import xxx from '模块标识'
  - import {模块中的一部分} from '模块'
