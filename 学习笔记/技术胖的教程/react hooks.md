hooks是2018年底出的，需要版本16.8以上版本

下面是定义组件
#####useState
```
import React,{ useState } from 'react';
function Xxx(){
    const [ aaa, setAaa ] = useState(0)//数组结构，传入的0参数是第一个也就是aaa的值
    //定义多个时,注意useState不能在if判断中
    //const [ name, setName ] = useState('福林')
    //const [ age, setAge ] = useState(22)
    //const [ sex, setSex ] = useState('男')
    //等同于下面
    //let _useState = userState(0)
    //let aaa = _useState[0]
    //let setAaa = _useState[1]
    return (//因为结构出来就是一个函数的局部变量了，所以直接使用
        <div>{Aaa}</div>
        <button onClick={()=>{setCount(aaa+1)}}>click me</button>
    )
}
export default Xxx
```

####useEffect
useEffect相当于组件的componentDidMount与componentDidUpdate的两个生命周期函数
```
    import {useEffect} from react
    function Example(){
        //return之前,useEffect()函数是异步的
        useEffect(()=>{
            //这里就是生命周期触发的代码

            //这里如果return就相当于componentWillUnmont组件销毁生命周期函数
            return ()=>{
                //组件销毁触发代码，但是组件嵌套时点到父组件时也会触发当前组件离开
            }
        })
        return (
            <div>xxx</div>
        )
    }


    由于上面点到父组件时也会触发当前组件离开，这时就要请出useEffect的第二个参数，是个数组,如果数组有值就会，监听值的变化触发，为空就是组件被解绑时执行
    useEffect(()=>{
        return ()=>{}
    },[])
```


###useContext
```
    import React,{useState,createContext,useContext} from 'react'
    const Xxx = createContext();

    function Child(){
        let aaa = useContext(Xxx)
        return (<div>{aaa}</div>)
    }

    function Father(){
        const [bbb,setBbb] = useState(0)//初始bbb值为0

        return (<div>
                <Xxx.provider value={bbb}>
                    <Child />
                </Xxx.provider>
            </div>
        )
    }
```

#### useReducer
```
    import React,{useReducer} from 'react';
    function ReducerDemo(){
        //useReducer接收两个参数，1.函数  2.aaa初始值，就是数组的第一项
        //而函数又接收两个参数，1.state   2.action
        //aaa会接收useReducer第一个参数函数的处理结果，
        //dispatch函数会把数据传递到action中
        const [aaa,dispatch] = useReducer((state,action)=>{
            switch(action){
                case 'add':
                    return state+1
                case 'sub':
                    return state-1
                default :
                    return state
            }
        },0)

        return (<div>
                <h2>{aaa}</h2>
                <button onClick={()=>{dispath('add')}}>加</button>
                <button onClick={()=>{dispath('sub')}}>减</button>
            </div>
        )
    }

    export default ReducerDemo
```

export暴露的只能用{}接收

####useReducer与useContext结合，达到Redux状态管理的效果
因为useContext共享state，类似Redux的数据仓库
因为useReducer修改state，类似Redux的Reducer
```
    //一个js文件中,先实现useContext
    import React,{createContext} from 'react'
    export const Xxx = createContext({})
    export const Yyy = props => {
        return (
            <Xxx.Provider value={值}>
                {props.children}
            </Xxx.Provider>
        )
    }

    //另一个js文件中
    import React from 'react';
    import Child1 from './child1';
    import Child2 from './child2';
    import Father from '上面的js文件';

    function Example(){
        return (
            <div>
                <Father>
                    <Child1></Child1>
                    <Child2></Child2>
                </Father>
            </div>
        )
    }

    //在Child1组件中
    import React,{useContext} from 'react'
    import { Qqq } from '上面第一个js文件'

    function Child1(){
        const BianLiang = useContext(Qqq)
        return (<div>{BianLiang}</div>)
    }

    export default Child1


    //最后实现useReducer，我已经乱了
```


####useMemo
以前组件更新时，为了不使其他组件重新渲染，都会在shouldComponentUpdate中return false阻止不必要的组件重新渲染
但是react hooks时用函数定义组件的所以没有生命周期，虽然useEffect可以试想几个生命周期，但是useEffect没有shouldComponentUpdate的生命周实现




####useRef
```
import React,{ useRef } from "react"

function Example(){
    const InputEl = useRef(null)
    const onButtonClick = ()=>{
        console.log(inputEl.current)
        inputEl.current.value = 'fulinihao'
    }

    return (
        <>
            <input ref={inputEl} type='text' />
            <button onClick={onButtonClick}>在input上展示文字</button>
        </>
    )
}

export default Example
```



####自定义hooks函数