组件的样式
	如果不是行内样式会自己应用样式(className)

	但是在组件的标签或是返回值标签的行内样式不能直接写 style="样式"
	需要  style={{样式:"值",样式2:"值"}}   
	因为是jsx所以外层{}表示要写js语法了
	内层{}表示js的对象

	一些有 - 的属性要用驼峰 比如padding-left  =>  paddingLeft
	内部的对象也可以抽离出来
	也可以把多个对象放到一个对象的属性中(内个属性值对应一个对象通过点来访问对象中的对象)
	还可以把对象抽到一个js文件中再暴露出来 再导入到需要的文件（import导入时只能在页面导入，不能在function，for.....等地方导入）


<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div id="app"></div>

<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<script type="text/babel">
	function Hello(props){
	return <div style={{background:'red',paddingLeft:'50px'}}>{props.name}</div>
	}

	ReactDOM.render(<div>
		<Hello name="zs"></Hello>
	</div>,document.getElementById('app'))
</script>
</body>
</html>