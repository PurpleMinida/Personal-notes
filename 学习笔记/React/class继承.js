class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	};
	say(){
		console.log('这时Person中的say方法');
	}
}



class Chinese extends Person {
	constructor(color,language){
		//在用了继承在constructor中必须显示调用super方法
		//super方法表示调用父类的constructor方法
		//如果父类的constructor方法需要传参数也在super中传递
		super();
		this.color = color;
		this.language = language;
	}
}


var p1 = new Person('zs',13);
console.log(p1);


var c1 = new Chinese('yellow','汉语');
console.log(c1);

实例可以点出父类的属性和方法，但点不出static的属性和方法
static的属性和方法 可以这样点出  Chinese.属性/方法