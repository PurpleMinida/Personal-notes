# 构造器模式(就是构造函数，new)
    - new的三大特点
        - 1.自动创建一个对象
        - 2.this指向该创建的对象
        - 3.自动返回该对象
+ 基础构造器(就是一个构造函数,缺点就是方法不能被继承)
     ```js
     function Persion(name,age,sex){
        this.name = name
        this.age = age
        this.sex = sex

        this.say = function(){
            consoel.log('hello')
        }
     }
     ```
+ '原型构造器'
    ```js
    function Persion(name,age,sex){
        this.name = name
        this.age = age
        this.sex = sex
     }
     Persion.prototype.say = function(){
            consoel.log('hello')
        }
    ```

# 模块化模式
    + 1.函数模块化  以前的模块化是通过定义不同函数区分不同模块（但是函数名在全局会有污染）
    + 2.对象模块化  通过不同对象区分不同模块（但是对象内部的数据在外部能够更改）
    + 3.自执行函数（没有函数名污染，有访问不了内部数据）
    + 4.模块化的放大模式（把自己传进去，为自己添加/修改等操作属性，在重新返回）
            ```js
            var fulin = (function(mod){
                    mod.m3 = function () {}
                    return mod
                })(fulin);
            ```
    + 5.宽放大模式（由于js模块加载循序问题，如果上面的fulin模块没有加载进来，再把fulin传进去就会报错，所以可以有一个空对象代替）
            ```js
            var fulin = (function(mod){
                    mod.m3 = function () {}
                    return mod
                })(window.fulin || {});
            ```
    + 6.输入全局变量(模块内部虽然可以访问全局的变量，但是直接访问的话，会让人不知道当前变量是哪里来的，所以把全局变量作为参数传递到模块使用)
            ```js
            var module1 = (function ($, YAHOO) {
                //...
                })(jQuery, YAHOO);
            ```

# 暴露模块模式（就是一个有名称的自执行函数返回一个对象，该对象内部数据是该函数的私有属性和方法，然后通过该方法名点出调用函数内部的属性或方法）
```js
var fun = function(){
    var a = 1;
    function say(){
        //...
    }
    return{
        a:a,
        say:say
    }
}();
fun.a
fun.say
```

# 单例模式（无论实例化多少次构造函数，只返回第一次创建的那个实例）
最简单的单例模式()
    ```js
    let timeTool = {}
    ```

惰性单例(使用闭包保存外层函数的一个变量，通过该变量保存曾经实例化的对象，如果该变量有曾经实例化的对象就返回，没有就实例化在返回)
    ```js
    let timeTool = (function() {
      let _instance = null;
      
      function Init() {//Into是构造函数
        //私有变量
        let now = new Date();
        //公用属性和方法
        this.name = '处理时间工具库',
        this.getISODate = function() {
          return now.toISOString();
        }
        this.getUTCDate = function() {
          return now.toUTCString();
        }
      }
      
      return function() {
        if(!_instance) {
          _instance = new Init();
        }
        return _instance;
      }
    })()
    //使用
    let instance1 = timeTool();
    let instance2 = timeTool();
    console.log(instance1 === instance2); //true
    ```