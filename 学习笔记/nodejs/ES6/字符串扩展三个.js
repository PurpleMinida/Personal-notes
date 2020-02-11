/*
	includes('子字串',[下标]) //判断(ture/false)一个字符串是否包含一个子字串片段  [从哪个字符下标开始]
	startsWith('子字串') //判断一个字符串是否已特定字符串开始
	endsWith('子字串') //判断一个字符串是否已特定字符串结束
*/




//模板字符串
let obj = {
	name:'zs',
	age:16,
	sex:'nan'
}

let tpl = `
	<div>
		<span>${obj.name}</span>
		<span>${obj.age}</span>
		<span>${obj.sex}</span>
		<span>${1+1}</span>
		<span>${fn()}</span>
	</div>
`;