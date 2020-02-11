AntDesign组件库适用三大框架
npm i antd --save
import {组件名} from 'antd'
import 'antd/dist/antd.css'
直接使用antd中的组件标签即可

#### redux
npm i --save redux
新建一个js文件（数据）
store.js
```
    import reducer from './reducer'   //这里引入下面的reducer.js
    import { createStore } from 'redux'
    const store = createStore(reducer)  
        //createStore((state,action)=>{return state})
    export default store
```
新建另一个js文件（操作）
reducer.js
```
const defaultState = {//数据存放
    键：值
}//下面给默认值
export default (state = defaultState,action)=>{
    return state
}
```
然后在需要的state数据的组件中引入
```
    import store from 'store.js'

    //store.getState()就会得到整个仓库对象
    在组件的constructor中,把数据赋值给组件的数据存放位置
    this.state = store.getState()
```

redux devtools工具需要翻墙

组件更改store中的数据  请看https://www.jianshu.com/p/db0bee45b2da
```
    //组件中定义一个方法
    fun(){
        const action = {
            type:'xxx',//type一定要后面的键值对自己往后添加
            value:'yyy'
        }
        //调用dispatch方法把action（要修改的数据）传过去
        store.dispatch(action)
    }

    //在reducer.js文件中
    导出的那个action形参就会接受到传过来的数据
    export default(state = defaultState,action)=>{
        console.log(state,action)
        //state就是自己定义的数据
        //action就是传过来的数据

        //reducer里只能接受state，不能改变state
        if(action.type === 'xxx'){
            //上面的判断就是传过来的数据的type是不是xxx

            //因为不能直接修改仓库，所以把仓库复制到一个变量中,再返回那个变量
            let newState = JSON.parse(JSON.stringify(state))
            newState.xxx = action.value
            return newState
        }

        return state
    }

    //又在组件的constrouctor中订阅
    //this指向问题
    this.func = this.func.bind(this)
    store.subscribe(this.func)//订阅 就是store中的数据发生变化就会执行一个自定义函数
    //然后在组件中定义一个方法
    func(){
        把组件的数据整个替换
        this.setState(store.getState())
    }
```


#####由于action.type='xxx'如果xxx错误浏览器是不会报错的，所以排错困难就有了把action提取出来
新建一个js文件
actionTypes.js
```
    export const XXX = 'xxx'
    export const YYY = 'yyy'
    export const ZZZ = 'zzz'
```
然后哪个有用就导入
比如上面组件中定义action对象是的type属性和reducer.js中判断action.type都要用
import {XXX, YYY, ZZZ} from './actionType'
这时写错单词时就会报错信息

####action对象在一个文件中会太多太乱，所以也可以把组件中action对象提取出来到单独的文件

####中间件redux-thunk
npm install redux-thunk --save
在仓库文件中store.js
```
    import {createStore, applyMiddleware} from 'redux'
    import thunk from 'redux-thunk'
    import reducer from './reducer'
    conet store = createStore(
        reducer,//这是更改仓库的那个函数文件
        applyMiddleware(thunk)
    )
```

在组件生命周期中函数中(一般在componentDidMount函数中)
```
    componentDidMount(){
        const action = () => {
            return (dispatch) => {//这里就是action本来返回一个对象，现在返回一个函数，然后就是异步请求了
                axios.get().then((data)=>{
                    console.log(data)
                    //这个函数就是回调函数，然后在这里可以修改store仓库的数据
                    //这就是异步请求回来的数据重写到仓库中
                    dispatch(action)
                    //这里用dispatch（修改仓库的函数）需要通过参数传递过来，因为dispatch是applyMiddleware封装的方法
                })
            }
        }
        store.dispatch(action)
    }
```


#### redux-saga中间件
npm i --save redux-saga

仓库store.js文件中
```
    import createSagaMiddleware from 'redux-saga'
    import mySagas from './sagas'
    const sagaMiddlware = createSagaMiddleware()
    sagaMiddleware.run(mySagas)
```
新建一个sagas.js文件
```
    //es6的方法
    function* mySaga(){}
    export default mySaga
```

在组件生命周期中函数中(一般在componentDidMount函数中)
```
    componentDidMount(){
        const action = {
            type:'xxx'
        }
        store.dispatch(action)
    }
```
回到sagas.js文件中
```
    import { takeEvery, put } from 'redux-saga/effects'
    import { XXX } from 'actionTypes'
    //可能不是把组件引入，因为上面已经把action的type属性提取到了一个文件中，所以这里就引入哪个文件
    //我想尝试把整个组件引入试试，然后把action的type属性直接写入
    //generator
    function * mySaga(){
        //takeEvery就监听XXX改变，就触发一个自定义函数
        yield takeEvery(XXX, fun)
    }

    function* fun(){
        console.log('ok')
        //这里发请求得到数据就修改仓库
        //axios.get().then((res)=>{
        //    put(action)//修个要用put,要引入put
        //})
        //但是这里一般用yield
        const res = yield axios.get()
        const action = {}
        yield put(action)
    }
    export default mySaga
```


#####react-redux对redux的简化
npm install --save react-redux
npm install --save redux

组件中引入Provider就是一个组件，用这个组件包裹就可以获得仓库中的值
组件文件中
```
    import { Provider } from 'react-redux'
    import store from './store'
    const App = (
            <Provider store={store}>
                <Child></Child>
            </Provider>
        )
```
子组件下面的标签使用数据就要
```
    import { connect } from 'react-redux'
    //这里是组件的class

//映射成属性
const stateToProps = (state)=>{
    return {
        自定义键：仓库中的值
        xxx:state.yyy
    }
}
    //暴露
    export default connect(stateToProps,null)(Child)
    //然后上面class中render的标签就通过 this.props.xxx 得到数据
```

#### react-redux更改store中的数据

```
    //组件dom标签中定义一个触发函数的事件


    const dispatchToProps = (dispatch)=>{
        return {
            //这里定义上dom标签触发的事件方法，比如触发个fun方法
            fun(e){
                let action = {
                    type:'xxx',
                    value:'yyy'
                }
                dispatch(action)
            }
        }
    }
    //上面的null参数
    export default connect(stateToProps,dispatchToProps)(Child)

    //这样之后，在dom标签中通过 this.props.事件名
```
在reducer.js文件中
```
    const defaultState = {

    }
    export default (state = defaultState,action
        if(action.type === "xxx"){
            let newState = JSON.parse(JSON.stringify(state))
            newState.xxx = action.value
            return newState
        }
        return state
    }
```
