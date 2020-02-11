####路由
npm i --save reatc-router-dom

index.js引入router.js
import AppRouter from './router'
ReactDOM.render(<AppRouter />,document.getElementById('root'))

router.js
```
    import React from 'react'
    import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
    导入别的组件
    funciotn AppRouter(){
        return (
            <Router>
                <Link to='/'>index</Link>
                <Link to='/list/'>list</Link>
                <Route path='/' component={上面导入的组件}>
                <Route path='/list' component={上面导入的组件}>
            </Router>
        )
    }
    export default AppRouter
```

精确匹配exact
<Route path='/' exact component={上面导入的组件}>

####路由传值 查看https://www.jianshu.com/p/ad8cc02b9e6c
<Link to='/123'>index</Link>
<Route path='/:id' exact component={上面导入的组件}>

在导航到的组件中，就是上面<Route path='/:id' exact component={组件}>的component组件中获得
得到路由传的值在 this.props.match中，可以打印this.props查看所有内容

####重定向
在使用重定向的地方 引入Redirect
import {Redirect} from 'react-router-dom'

使用
<Redirect to='/home' />

####编程式重定向
在constructor中添加
this.props.history.push('/home/')

