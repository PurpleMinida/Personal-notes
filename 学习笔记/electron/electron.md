NW.js和electron一样，electron比较流行

Deco IDE工具是react-native的开发工具

安装   npm install -g electron

# 第一种创建项目的方法

github克隆   git clone https://github.com/electron/electron-quick-start

进入该仓库    cd electron-quick-start

安装并运行    npm install && npm start

### 基本文件

- ![](E:\重要文件\electron\基本文件.PNG)

- 主要的文件   index.html和main.js，package.json

### 运行项目

- electron .

# 第二种创建项目的方法（也会创建基本文件，主要的在src里面）

- 通过electron-forge         类似脚手架
- 安装     
  - npm install -g electron-forge
- 创建项目
  - electron-forge init my-new-app
- cd 到项目里面
  - cd my-new-app
- 运行项目
  - npm start

# 第三种创建项目的的方法（手动创建）

- 新建一个文件夹

- 新建一个index.html和main.js  然后 npm init生成一package.json 文件

- 注意package.json文件中的js主进程是main.js

- 然后在main.js文件中
  
  - ```
    //引入electron
    var electron = require('electron');
    
    //创建electron实例
    var app = electron.app;
    
    //创建BrowserWindow引用
    var BrowserWindow = electron.BrowserWindow
    
    //变量保存对应用窗口的引用
    var mainWindow = null;
    
    app.on('ready',function(){
        //创建BrowserWindow的实例  赋值给win打开窗口
        //传入窗口的宽高
        //每new一次BrowserWindow就会创建一个窗口
        mainWindow = new BrowserWindow({width:400，height:400});
    
        //mainWindow.loadURl(path.join()) 与下面一样效果，只不过要通过path模块拼接路径
        mainWindow.loadFile('index.html'); //把index.html加载到窗口里面
    
        //当用户关闭窗口是把主进程关闭
        mainWindow.on('closed',()=>{
            mainWindow = null;
        })
    })
```js
- 运行项目
  
  - electron .

# 运行流程

在package.json中找到主进程js文件执行

# 自动打开调试工具

在ready中添加 

- mainWindow.webContents.openDevTools();

# 通过拖拽文件到electron应用打开文件

在electron中可以使用所有的h5和node的api

就是通过h5的拖拽事件，然后再通过事件参数获取的对应的文件路径等信息

在通过node的fs模块读文件写进你的elect日内引中就可以像应用拖放文件来打开文件

# 主进程和渲染进程

- 主进程就是main.js中的进程
- 渲染进程就是html文件
- 有的代码只能在主进程或渲染进程中

# electron-dome应用（其中有很多api自己使用）

- https://github.com/electron/electron-api-demos

# 打包就可以上线了（怎么打包自己查）（怎么更改应用图标也是自己查）
```

配置环境变量
https://npm.taobao.org/mirrors
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/

# 配置了一整天终于成功了
1.cnpm install -g electron
2.cnpm install -g electron-forge
3.electron-forge init my-app
4.Ctrl+C 删掉node_modules 重新cnpm install
5.cnpm install electron-prebuilt-compile --save-dev
6.package.json中把electron-prebuilt-compile的版本号前面 ^ 的去掉
7.npm start
# 但是打包不了


# 全手动才是最好的，又能打包
1.npm init -y 创建package.json文件
2.创建main.js文件
    去官网复制代码，注意其中的loadFile函数要改成loadURL
3.创建index.html文件
    去官网复制
4.yarn add electron --save-dev
5.运行 electron .
#### 打包
1.把项目文件全部复制除了node_modules文件夹，放到一个空的文件夹
2.在该文件夹打开cmd，执行 asar pack ./ app.asar 该命令需要全局安装asar
3.会生成app.asar文件，把该文件放到electron的壳文件中即可运行


# 使用electron-builder打包，一劳永逸，不仅打包成exe还打包绿色版本
1. yarn add electron --save-dev （当前安装就是安装在dependencies中的，所以要删掉）可以安装在devDependencies中，但是安装在dependencies中要在package.json中删掉
2. yarn add electron-builder --dev
3. package.json中的script中添加 "dist": "electron-builder",
    "pack": "electron-builder --dir"
4.在package.json添加
    ```js
    "build": {
    "appId": "fulin",
    "mac": {
      "target": [
        "dmg",
        "zip"
      ]
    },
    "win": {
      "icon": "./fulin.ico",
      "target": [
        "nsis",
        "zip"
      ]
    }
  },
  "postinstall": "electron-builder install-app-deps",
    ```
5.yarn run dist打包
怕以后版本变化我把版本号先记下来
```js
"devDependencies": {
    "electron": "^7.0.0",
    "electron-builder": "^21.2.0"
  }
```

# 最成功的
1.全局安装electron-prebuilt和electron-builder
 2.package.json中的script中添加 "dist": "electron-builder",
    "pack": "electron-builder --dir"(这一步可能都不用)
3.项目本身需要安装 cnpm install electron --save-dev
4.在package.json添加
    ```js
    "build": {
    "appId": "fulin",
    "mac": {
      "target": [
        "dmg",
        "zip"
      ]
    },
    "win": {
      "icon": "./fulin.ico",
      "target": [
        "nsis",
        "zip"
      ]
    }
  },
  "postinstall": "electron-builder install-app-deps",
  "electronDownload": {
      "mirror": "https://npm.taobao.org/mirrors/electron/"
  }
    ```
5.electron-builder打包

#YesYesYesYesYesYesYesYes
1.解压压缩包
2.yarn全局安装electron-builder
3.配置package.json
  ```js
    "script":{
      "dist": "electron-builder",
      "pack": "electron-builder --dir"
    },

    "build": {
    "appId": "fulin",
    "mac": {
      "target": [
        "dmg",
        "zip"
      ]
    },
    "win": {
      "icon": "./fulin.ico",
      "target": [
        "nsis",
        "zip"
      ]
    }
  },
  "postinstall": "electron-builder install-app-deps",
  ```
  4.yarn run dist打包
  5.npm start运行

  自定关闭窗口的函数名不要用close，不然这样没效果