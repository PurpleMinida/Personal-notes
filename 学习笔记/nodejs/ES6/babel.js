babel转码器
.babelrc文件就是babel的配置文件

把高版本js转化成低版本

1 在项目根目录下创建  .babelrc  文件
2 .babelrc文件内容
	{
		"presets":[],//转码规则
		"plugins":[]
	}

	需要npm某些转码规则

npm全局安装 babel-cli可以使用babel命令






babel如果需要单独转一个js文件就是在node命令行（注意要先安装babel的转码器）
babel 文件
babel src -d dist   把当前src目录转换后放到dist目录中