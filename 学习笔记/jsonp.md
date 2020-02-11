跨域 img，link，script标签都可以

img标签就会把得到数据解析成图片

link标签会把解析成css样式

script会解析成js代码

但是由于link和img标签得到的数据没法拿，所以就用script

script是通过返回一函数的调用，该函数的参数就是要返回到前端的数据，这样函数内部就可以把得到返回的数据

封装一个jsonp方法(jsonp只支持get方式)

```
//封装成下面的样子
jsonp({
    url:'',
    data:'',
    success:function(){}
})

function(option){
    //因为那个函数调用需要是全局的，所以把success函数挂载到全局
    window.getData = option.success;
    //url的回调函数问题
    option.url = option.url + '?callback=getDate';
    //自动创建script标签
    var script = document.createElement('script');
    script.src = option.url;
    //将script放到DOM中
    document.body.appendChild(script);
}


//但是调用多次该函数就会相同的注册getData函数，而且每次执行的还是最后挂载的那个函数所以不能单纯的在window上挂载函数需要，随机的给函数起名再挂载在window上，比如random函数
function(option){
    var callbackName = parserInt(Math.random())
     //因为那个函数调用需要是全局的，所以把success函数挂载到全局
     window[callbackName] = option.success;
     //url的回调函数问题
     option.url = option.url + '?callback=' + callbackName;
     //自动创建script标签
     var script = document.createElement('script');
     script.src = option.url;
     //将script放到DOM中
     document.body.appendChild(script);
}

//如果请求过多就会生成很多的script标签
所以每次请求完成之后要把script删除掉
function(option){
     var callbackName = parserInt(Math.random())
     //因为那个函数调用需要是全局的，所以把success函数挂载到全局
     这里删除，多包了一层函数
     window[callbackName] = function(data){
         //这里重调用哪个方法
         option.success(data);
         //可以删除了
         document.body.removeChild(script)
     };
     //url的回调函数问题
     option.url = option.url + '?callback=' + callbackName;
     //自动创建script标签
     var script = document.createElement('script');
     script.src = option.url;
     //将script放到DOM中
     document.body.appendChild(script);
}


全局也会多出很多函数，你也可以定义到一个对象中
先定义一个window.callbacks = {}
然后里面的window[callbackName]改成window.callbacks[callbackName]
下面的url中  callbackName 也对应该一下
```
