脚手架就是帮你准备好基础文件，你只要使用即可

安装  npm install -g vue-cli

##### 一些命令

- vue list  列出模板
- vue --help  帮助
- vue init webpack 名字     初始化一个项目
  - 会创建一个文件夹，该文件夹就会有所有基础文件
  - 这里初始化的项目是webpack创建好的脚手架，在GitHub上下载下来的

### 自定义脚手架

- 创建一个文件夹

- 文件夹中创建index.js
  
  - index.js文件
  
  - ```
    #!/user/bin/env node
    
    //使用node开发命令行工具所执行的JavaScript脚本必须在顶部加入#!/user/bin/env node
    //console.log("fulin-cli 脚手架工具");
    
    //1.获取用户输入的命令,process.argv就是把参数存在一个数组中，这种是原生的方法
    console.log(process.argv);
    //但是这里我们使用一个包commander
    /*
        npm install commander 
        导包  var program = require("commander");
        然后去官网复制示例，可以更改示例的内容 比如更改版本号
        然后慢慢排至就可以得到后面的参数
    */
    
    //2.根据不同命令执行不同操作
    ```
  
  - 

- npm init -y
  
  - package.json文件中添加bin
  
  - ```
    {
      "name": "vue-cli",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "bin":{
          "fu":"index.js"
      }
    }
    ```

- 最后  npm link  就会进入到命令行中使用，卸载该命令的话   npm unlink  需要更改命令的话就要先卸载改掉bin中的命令在连接

- 这时在命令行  输入  fu  命令就会执行indexjs文件啦 该命令在任何目录下都可以执行

- ```
  fu -h|--help 查看帮助
  fu -V|--version  查看版本
  fu list 列出所有可用模板
  fu init <template-name> <project-name>  基于指定模板初始化项目
  ```

自定义的命令  fu list  会列出模板

模板要自己指定

- 在GitHub上创建仓库，每个仓库就是一个模板

- ```
  //在index.js中创建一个模板对象
  const templates = {
      'tpl-a':{
          url:'github上的地址',
          description:'a模板'
      },
      'tpl-b':{
          url:'github上的地址',
          description:'b模板'
      },
      'tpl-c':{
          url:'github上的地址',
          description:'c模板'
      }
  }
  //然后在list中配置，显示所有模板
  
  再到init中配置下载项，下载需要一个第三方包,该包会在GitHub上下载对应的包，配置在init中就可以下载GitHub的仓库模板啦
  npm install download-git-repo
  ```

#### 命令行交互（就是更改package.json文件的某些字段）（在package.json文件需要修改的地方有{{}}包住  "name":"{{ name }}"，这样模板引擎handlebars就可以解析）

在GitHub上是{{}}

- 但是下载下来的包还是写死的  只不过是有大括号版写死  这时又要一个包inquirer
- 然后又在init中配置该包，怎么配置去inquirer的GitHub
- 然后用fs写入package.json文件

#### 视觉美化（就是加一些下载中的进度条效果）

- npm install ora   添加loading效果

- ```
  const ora = require('ora')
  //又在init中配置   .action中
  ```

- npm install chalk   添加颜色

- npm install log-symbols   成功失败显示√或×

#### npm 发包

- 注册npm账号
- 搜索是否有重复报名
- 在package.json中的name改成以后用户通过报名搜索的报名，与项目名无关
- 在命令行登录npm  执行npm login命令  输入用户密码邮箱
- 在项目中 执行   npm publish
- 然后用户就可以下载npm install使用了，包括你定义的命令
