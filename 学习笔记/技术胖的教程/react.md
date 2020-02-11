create-react-app demo创建
npm start运行

public/index.html有一个id='root'的div
删除src所有文件
新建index.js文件
```import React from 'react'
    import ReactDom from 'react-dom'
    import App from './App'

    ReactDom.render(<App/>,document.getElementById('root'))
```
新建App.js
```import React,{Component,Fragment} from 'react'
class App extents Component{
    //数据存放位置
    constructor(props){
        super(props)
        this.state={
            数据存放位置
        }
    }

    render(){
        return(
                //一个根元素但是flex布局就不能很好的布局了(所以就出现了Fragment)
                <Fragment>//Fragment就不会因为一个根元素问题出现
                    <div>hello world</div>
                    <div>{this.state.xxx}读出数据</div>
                    <button onClick={this.fun}></button>
                    //item中包含有html标签 要输出时解析html
                    <div dangerouslySetInnerHTML={{__html:item}}></div>
                    //lable的for要改成htmlFor
                </Fragment>
            )
    }

    fun(e){
        //该变state数据要用一个方法
        this.setState({
            //键就是state中的数据，值就是修改的值
            键:值
            },()=>{//setState的也有回调函数})
    }
}
```
######方法和数据都可以定义在constructor中也可以定义在外面

插件就是让你打代码快的只在vscode中使用
simple react snippets

######父子组件传值
父->子
传
<Child conten={item}/>
接
{this.props.content}

子->父(先要父组件传方法名过来，子组件执行传过来的方法，就可以通过调用父组件的方法来操作父组件数据)
<Child xxx={this.fun} />
子组件中的标签
<div onClick={this.fun}></div>
定义一个方法
fun(){
    this.props.父子组件方法名()
}


#####单向数据流(父子组件传值子组件是不能修改父组件的数据)

######传值校验PropTypes
import PropTypes from 'prop-types'
class之外
Child.propTypes={
    content:PropTypes.string
    xxx.PropTypes.string.isRequired//必传
}
Child.defaultProps={
    xxx:'sss'
}



######ref（ref就是获取当前dom节点,然后操作当前节点）
<input type="text" ref={(input)=>{this.textInput = input}}>
使用
this.textInput.DOM方法

######生命周期
shouIdComponentUpdate()函数必须 return 一个Boolean值 true(往下执行)/false(不往下执行)

######生命周期函数性能优化(当调用setData时react会渲染整个组件树也就是所有组件)
但是其他组件的改变没变的组件不必渲染所以shouIdComponentUpdate的return true/false就是阻止渲染的
shouIdComponentUpdate(nextProps,nextState){
    //nextProps和nextState就是修改后的值，下面就是判断修改后的值与没有修改的值变不变化，变了就重新渲染，不变就不渲染
    if(nextProps.xxx !== this.props.xxx){
        return true
    }else{
        return false
    }
}


#####axios


#####easy-mock一个创建接口让前端程序员调试的网站

#####react-transition-group官方动画库
npm i react-transition-group -save
<!-- 基础库
    Transition
    CSSTransition
    TransitionGroup -->

import CSSTransition from 'react-transition-group'

<CSSTransition in={true/false} timeout={时长 2000} classNames="box">
    <div>动画</div>
</CSSTransition>

css中动画过程类名，下面的box是上面classNames的值
.box-enter{}
.box-enter-active{}
.box-enter-done{}
.box-exit{}
.box-exit-active{}
.box-exit-done{}

多DOM动画有TransitionGroup标签包裹