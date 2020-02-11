#文档片段DocumentFragment（每次往页面中添加DOM节点就会执行一遍reflow或layout过程，这样很耗性能，所以把所有的节点先添加到DocumentFragment中再一次性添加到页面上）
```js
//创建文档片段（类似一个容器）
var k = document.createDocumentFragment();

//创建一个p节点
var = document.createElement("p")
p.innerHTML = 'fulin'
//再创建一个span节点
var span = document.createElement('span')
span.innerHTML = 'nihao'

//把p和span节点先添加到DocumentFragment中
k.appendChild(p)
k.appendChild(span)

//在获取页面需要添加的元素，再把k添加进去
var div = document.getElementById('div')
div.appendChild(k)
```