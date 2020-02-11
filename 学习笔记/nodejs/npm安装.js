全局安装 -g  
全局安装的包会在node.js环境的node_modules目录下，全局安装的包一般用于命令行工具
本地安装
安装在当前文件夹的node_modules文件夹内  一般用于实际的开发工作

npm常用命令
npm install -g 包名称@版本号（全局安装） 
 卸载  npm uninstall -g 包名称@版本号
  更新  npm update -g 包名称@版本号    不好用

npm install 包名称@版本号（本地安装）
 卸载  npm uninstall 包名称@版本号
   更新  npm update 包名称@版本号      不好用




安装时的两个
	开发环境（开发时使用的环境）
	生产环境（上线后再服务器的环境）

	--save  向生产环境添加依赖 dependencies
	--save-dev  向开发环境添加依赖 Dependencies





npm install 就会把生产环境和开发环境的包都下载下来
npm install --production