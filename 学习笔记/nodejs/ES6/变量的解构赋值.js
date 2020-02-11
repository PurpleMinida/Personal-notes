//为三个变量赋值(数组)
var [a,b,c] = [1,2,3];
//默认值a
let [a=111,b,c] = [,23,];
//嵌套
let [a,[b,[c]]] = [1,[2,[3]]]

//对象解构赋值
let {foo,bar} = {bar:'world',foo:'hello'};
//对象属性别名foo别名abc(别名之后只能使用别名访问)
let {foo:abc,bar} = {bar:'world',foo:'hello'};
//默认值(有没有别名都是等号给默认值)
let {foo:abc='bosag',bar} = {bar:'world',foo:'hello'};
//直接是内置对象的方法
let {cos,sin,random} = Math;


//字符串解构赋值(一个字母对应一个字符)
let [a,b,c,e,d] = "hello";
let {length} = "hi";

