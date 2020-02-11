### 安装 socket.io

npm install socket.io



### 使用----------(使得前后端都有一个socket对象，都有emit和on方法，emit用于发送，on用于接收)（服务器把收到的信息如实返回就是一个聊天室）

```javascript
//后端nodejs

var http = require("http");

var server = http.createServer(function(req,res){
    //这里吧下面的前端页面通过读文件的方式返回浏览器
    if(req.url=="/"){
        fs.readFile("./xxx.html",function(err,data){
            res.end(data);
        })
    }
})

//创建io对象
var io = require('socket.io')(server);  //隐藏网址  /socket.io/socket.io.js
//监听连接事件
io.on("connection",function(socket){
    console.log("一个客户端连接了");
    //接收
    socket.on("tiwen",function(msg){
        console.log("收到提问" + msg);
        //发送  可以发送对象数组等等
        socket.emit("huida","吃了");
        //广播  就是把socket改成io，因为每个客户端都有一个特定的socket
        //  io.emit()
    })
});

server.listen(3000,"127.0.0.1");

//前端页面
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io();
    //发送
    socket.emit("tiwen","你吃了吗");
    //接收
    socket.on("huida",function(msg){
        alert("服务器说" + msg);
    })
</script>
```


