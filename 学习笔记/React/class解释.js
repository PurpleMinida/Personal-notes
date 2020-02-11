class Per{
	//每一个class都有constructor构造器,如果没有自己定义，内部也会自己有一个
	//每次new class时会自己调用
	//new 时传参也会进入constructor
	constructor(){};
	static info = 123;

	//静态方法挂载在constructor中
	static say(){
		console.log('我是静态方法挂载在constructor中')
	}
}

var per = new Per();



@@@class只不过是function的封装
@@@class中定义的方法会挂载到原型中(和直接给function的prototype添加方法一样)
class中只能有静态属性he方法



静态属性和方法static:放在constructor中
直接定义的方法放在prototype中