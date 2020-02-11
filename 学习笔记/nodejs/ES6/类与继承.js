//类与继承
class Animal{
	//静态方法(只能通过类名调用，不能通过实例调用)
	static showInfo(){
		console.log('hi');
	}
	//构造函数
	constructor(name){
		this.name = name;
	}

	showName(){
		console.log(this.name);
	}
}
//实例化
let a = new Animal('spike');
a.showName();  //掉用普通方法
Animal.showInfo();  //调用静态方法

//添加方法或属性
Animal.abc = function(){}






//l类的继承extends
class Dog extends Animal{
	constructor(name,color){
		super(name); //super用来掉用父类  父类的参数
	}

	showColor(){
		console.log(this.color);
	}
}
let d = new Dog('dodo','yellow');
d.showColor();
d.showName();  //父类的方法被继承过来使用
Dog.showInfo();  //静态方法也被继承过来使用