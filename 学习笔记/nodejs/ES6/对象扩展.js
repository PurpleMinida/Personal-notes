var foo = {
	name:name
	//name

	_bianliang:4,//有下滑线


	say:function(){}
	//say(){}

	//取值器(当你访问当前对象(foo)的对应属性(bianliang)是调用)
	get bianliang(){}

	//赋值器
	set bianliang(value){
		this._bianliang = 20;//赋值是也要下划线
	}
}

console.log(foo.bianliang);//访问无下划线  触发get

//赋值触发set
foo.bianliang = 10;  