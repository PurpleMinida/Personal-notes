创建仓库：createState()
    import { createStore } from 'redux'
    //state 是一个仓库对象，保存数据的对象
    const state = createState((state,action)=>{return state}))
    export default store

使用：组件中import引入上面的文件
    store.getState()就会得到整个仓库对象（你要把数据赋值到自己的state中）

组件修改仓库：