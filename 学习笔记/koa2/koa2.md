### 安装koa

npm install koa

```javascript
var koa = require('koa');
//实例化
var app = new koa();

//配置路由（express中路由是自带的）

//中间件
app.use( async (ctx)=>{
    ctx.body='hello koa2.x'
} )

//监听端口
app.listen(3000);
```

## async 让方法变成异步

## await 是等待异步方法的执行完成（必须用在async中）（把异步转成同步）

```javascript
//定义方法时在前面加个关键字就是异步的方法
async function getData(){
 return '这是一个数据'
}
async function test(){
 var d = await getData();
 console.log(d) 
}
test();

//以上获取getData函数中的数据也可以,因为返回的是promise对象
/*
var p = getData();
p.then(data){
    console.log(data)
}
*/
```

```javascript
//await把异步转成同步  一下输出1 2 3
async function getData(){
 console.log(2)
}
async function test(){
 console.log(1)
 var d = await getData();
 console.log(3)
 }
test();
```

```javascript
//await 与 promise
//这个函数返回一个异步的数据
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var username='张三';
            resolve(username);
        },1000)
    })
}
//这个函数中await等待异步执行完成接收数据
async function test(){
    var data = await getData();
    console.log(data);
}
test();
```

## koa 路由

安装     npm install --save koa-router

```javascript
//引入
//路由可以简写成(引入并实例化)  var router = require('koa-router')();
var Koa = require('koa');
var Router = require('koa-router');
//实例化
var app = new Koa();
var router = new Router();

//配置路由(下面可以连着写也可以多个router.get来写)
//ctx  就是上下文content  包含了request和response
router.get('/',async ()=>{
    //返回数据  express中是res.send()
    ctx.body = '首页'
}).get('/news',async (ctx)=>{

    //get传值 获取url中的参数  query和querystring
    //ctx.query() 对象中保存数据
    //ctx.querystring () 一条字符串中保存数据
    console.log(ctx.query());
    console.log(ctx.querystring());

    //ctx.request  会打印出所有请的信息

    
    ctx.body = "新闻"
});

//启动路由
app
    .use(router.routes()); //启动路由
    .use(router.allowedMethods()); //绑你设置相应头  可有可无

//监听端口
app.listen(3000);
```

##### 动态路由

```javascript
//动态路由 
router.get('/newscontent/:aid',async ()=>{
    //获取动态路由的传值
    console.log(ctx.params)  //打印出对象
})
```

## 中间件

- 应用级中间件
  
  - ```javascript
    //koa中间件
    /*也可以写某个路径，不写就是匹配所有路径
        app.use('/',async (ctx,next)=>{
         console.log(new Date());
         await next();
        })
    */
    //koa 中的中间件不像express那样按循序从上往下执行，写在哪里都会去匹配
    app.use(async (ctx,next)=>{
        console.log(new Date());
        await next();
    })
    ```
  
  - 

- 路由级中间件
  
  - ```javascript
    router.get('/news',async (ctx,next)=>{
        console.log('news1');
        await next();
    })
    router.get('/news',async (ctx)=>{
        ctx.body='news2'
    })
    ```

- 错误处理中间件
  
  - ```javascript
    //页面进来先执行这里，但不会执行if中的错误处理中间件，直接向下匹配路由，如果匹配成功就不会执行if，如果匹配不了就执行if，通过next分隔，不执行next以下的代码，当匹配完成之后在从里往外执行
    app.use(async (ctx,next)=>{
     console.log(new Date());
     await next();
    
     //错误处理中间件
     if(ctx.status==404){
         ctx.status = 404;
         ctx.body = "404页面"
     }
    })
    
    //洋葱图 比如 打印1 2 3 4 5
    app.use(async (ctx,next)=>{
        console.log(1)
        await next()
        console.log(5)
    })
    app.use(async (ctx,next)=>{
        consoleo.log(2)
        await next()
        console.log(4)
    })
    router.get('/news',async (ctx)=>{
        consloe.log(3)
        ctx.body = '新闻'
    })
    ```
  
  - 

- 第三方中间件

### koa结合ejs

1. npm install koa-views --save

   2. npm install ejs --save

3. var views = require('koa-views')

4. app.use(views(__dirname,{extension:'ejs'}))

5. await ctx.render('index')

```javascript
var views = require('koa-views');
//新建一个views文件夹，文件夹中新建一个index.ejs
app.use(views('./views',{
    extension:'ejs'  //应用ejs模板引擎
}))
router.get('/',async (ctx)=>{
    await ctx.render('index');
    //render把后台的数据传递给前台
    /* 前台用 <%=title%> 就会把title的数据宣言在前台（如果把 = 改成 - 就会把字符串中的html标签解析）
    //前台要循环的话
    //<%for(var i=0;i<list.length;i++){%>
    //    <div><%=list[i]%></div>
    //<%}%>
    //前台中引入别的ejs文件(相当于把别的文件的代码直接复制在这里)
    //<% include xxx/xxx.ejs %>
    //前台的if
    /*
        <%if(num > 1){%>
            大于1
        <%}else{%>
            小于或等于1
        <%}%>
    */
    let title = "hello ejs"
    await ctx.render('index',{
        title:title
    })
    */
})

//如果每个render函数都要渲染相同的部分就把他放到公共里来
//在一个中间件中写
app.use(async (ctx,next)=>{
    ctx.state = {
        键:值
        键:值
    }
    await next();
})
//以上配置好后html中就可以 <%=键%> 得到数据



//下面配置模板引擎的话新建的index一定要.html结尾
var views = require('koa-views');


app.use(views(__dirname + '/views', {
  map: {
    html: 'underscore'
  }
}));
```

## post提交数据

安装  npm i --save koa-bodyparser

```javascript
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(async (ctx)=>{
    //得到数据 在对象中
    ctx.body = ctxrequest.body;
})
```

## koa  托管静态文件

npm install --save koa-static

```javascript
var serve = require('koa-static')
//下面可以配置多个
app.use(serve('路径'))

//前端引入时的路径不需要static的目录路径
```

## koa与art-template

npm i --save art-template

npm i --save koa-art-template

```javascript
//引入
var render = require('koa-art-template')
//配置
render(app, {
  root: path.join(__dirname, 'view'), //视图的位置

  extname: '.art',  //后缀名

  debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});
 //渲染

app.use(async function (ctx) {
  await ctx.render('user',{
      键:值
  });

});
//前端也是用对应的标签输出数据
```

## koa的cookie

```
//设置cookie
//name是键
//value是值
//option是设置一些参数，比如过期时间等等
ctx.cookies.set(name,value,[option])

//获取cookie
ctx.cookies.get('name')

如果要设置汉字的cookies，需要转成base64在把base64专户汉字,需要用到buffer模块
```

## koa的session

```
cookie保存在客户端，session保存在服务器上
session是基于cookie的，因为数据保存在服务器上，服务器只会把对应的key发送给浏览器，这时浏览器就把key保存在cookie中，下次请求时带上cookie中的key
```

```
1.npm install koa-session
2.const session = require('koa-session');
3.app.keys = ['some secret hurr'];


const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true, 

  overwrite: true, 

  httpOnly: true, 

  signed: true, 

  rolling: false, 
  renew: false,

};

app.use(session(CONFIG, app));


设置session
ctx.session.键= "值"
获取session
ctx.session.键
```

## es5与es6

```
//es5中
//定义类
function Person(){
    this.run = function(){}
}
Person.prototype.run = function(){}
//上面定义的是实例方法，只能通过new实例化之后调用
//定义在原型上的方法和属性，可以被多个实例共享，就是不管你new多少个，每个实例都可以调用该属性和方法

//定义静态方法
Person.fun = function(){}
//静态方法不用实例化调用
Person.fun();

//继承   原型链继承 和 对象冒充继承  一般两个结合使用
原型链继承 Son.prototype = new Person();
对象冒充继承  function Son(name,age){
    Person.call(this,name,age);
}


//es6
//类
class Person{
    constructor(name,age){  /*类的构造函数，实例化时执行，new时执行，new时传递的参数也会给这里*/
        this._name = name;
        this._age = age;
    }
    fun(){}
}
//继承  class Son extends Person{
    constructor(name,age){
        supper(name,age)  /*实例化子类时把子类的数据传给父类*/
    }
    run(){} /*实例方法需要new调用*/
    static run(){}  /*静态方法，不需要new调用*/
}
//单例
//构造函数只运行了一次，除第一次外，每次返回的都是原来的那个对象
//无论new多少次都是第一次
class Db{
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db();
            return Db.instance
        }
        return Db.instance;
    }
}
```



## 路由模块化(安装koa脚手架，该脚手架已经配置后了路由模块化)

```javascript
//全局安装（脚手架）
npm install koa-generator -g
//创建项目
koa koa_demo
//安装依赖
cd koa_demo
npm install
//启动项目
npm start


//自己配置
//新建一个router的js文件
//该文件这样写
//引入
var router = require('koa-router')();
//配置路由
router.get('/',(ctx)=>{
    ctx.body='hello1'
})
router.get('/user',(ctx)=>{
 ctx.body='hello2'
})
//暴露
module.exports = router;

//app.js主文件中引入路由模块
var rout = require('上面的路由文件的路径')
//启动路由
router.use('/xxx',rout.routes())
//这时请求xxx时就会去rout中 / 根路由
// 请求 xxx/sss 就会去xxx中找 sss 匹配路由

跟上面一样，只不过把 .routes 放到不同的位置而已
//也可以在路由模块暴露时直接启动路由，这样就不会忘记，启动路由了router.use('/xxx',rout.routes())
//上面暴露时module.exports = router.routes();
//router.use('/xxx',rout)
```


