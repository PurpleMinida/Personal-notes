安装脚手架  npm 

- cnpm install -g @angular/cli

创建项目

- ng new 项目名称

安装package.json 中的依赖npm install 或cnpm install

运行项目

- ng serve --open

![](E:\重要文件\Angular\目录结构.PNG)

创建组件

- ng g查看可以创建什么
- ng g component 组件名              创建组件
  - 然后在app.module.ts文件中引入再配置，但是工命令创建的组件一般都会自动配好

#### app.module.ts说明

- declarations是配置模块的
- imports是配置组件的
- providers是配置服务的

# 绑定数据（angular的数据是直接写写进去的不用像vue那样写data中）

- 在对应组件的ts文件的export中定义数据
  - export中定义数据和方法（有个constructor是初始化的函数）
- 在html中用  {{}}  显示数据，在{{1+2}}可以做简单运算
- 如果定义的是一个对象，访问时通过点访问  {{obj.name}}
- 定义数据时也有关键字
  - public  公有
  - protected  保护      当前和子类中访问
  - private   私有    自己使用

# 绑定属性

- ```
  //普通属性
  <div [title]="数据"></div>
  //class属性  flag在ts文件中定义为true/false 
  <div [ngClass]="{'类名1':true,'类名2':flag}"></div>
  //style属性  其中attr在ts文件中定义了  attr = 'blue'
  <div [style]="{'color':'red','background-color':attr}"></div>
  ```

# 绑定html

- ```
  <span [innerHTML]="数据"></span>
  //这样会把定义数据中包含html标签的地方渲染成html
  ```

# 循环  *ngFor

- ts文件定义le一个数组 

- ```
  <li *ngFor="let item of arr">{{item}}</li>
  //arr是数组
  //item是每一项
  ```

- 循环中可以再套一层循环来输出数组中的对象或数组

- 循环时获取索引
  
  - ```
    <li *ngFor="let item of list;let key = index;">
        {{key}}---{{item.title}}
    </li>
    ```
  
  - 

# 引用图片

- 本地图片放在  静态资源文件夹 assets 组件中引用时就直接写这里的相对路径即可
- 网络图片  <img [src]="数据" />

# 条件渲染  *ngIf   *ngSwitch

- ```
  <div *ngIf = "数据true/false "></div>
  ```

- ```
  <ul [ngSwitch]="score">
      <li *ngSwitchCase="1">score=1</li>
      <li *ngSwitchCase="2">score=2</li>
      <li *ngSwitchCase="3">score=3</li>
      <li *ngSwitchDefault>默认</li>
  </ul>
  ```

# 管道类似vue的过滤器  |

- ```
  <div>{{数据 | 方法}}</div>
  ```

# 事件

- ```
  <button (click)="run()"></button>
  ```

- 然后run方法定义在constructor函数外面，就是与他平级定义即可

- 在方法中访问组件的数据直接  this.数据

- 若要改变数据的值直接重新赋值即可  this.数据 = 新值

# 表单事件和事件对象

- ```
  //e为事件对象
  //keydown键盘抬起事件
  <input type="text" (keydown)="keydown($event)" />
  ```

- 事件对象传递  $event    处理函数中用e接收

# 双向数据绑定

- 引入(在app.module.ts文件中)
  
  - ```
    import { FormsModule } from '@angular/forms';
    ```

- 声明（在app.module.ts的imports中添加FormsModule）
  
  - ```
    //使用
    <input type="text" [(ngModel)]="ts文件中定义的数据"/>
    ```

angular可以通过原生js直接操作DOM元素

ng2以后一个标签不能使用多条指令？

# 服务   类似vue的vuex

- 创建
  
  - ng g service my-new-service
  - 创建到指定目录下    ng g service service/storage

- 在app.module.ts中导入并配值
  
  - ```
    import { StorageService } from './services/storage.service'
    ```
  
  - 在providers中添加  StorageService

- 在组件中使用
  
  - ```
    方式一
    //先在组件中导入
    import { StorageService } from '../services/storage.service'
    //在new一下
    var storage = new StorageService;
    //访问storage.xxx
    
    方式二 （推荐）
    //就是导入后不要new，在constructor函数中写  storage是形参
    constructor(public storage:StorageService){
        //这里再访问方法  xxx是在服务中创建的方法
        this.storage.xxx()
    }
    ```

- 组件与组件间不能调用内部的方法等，服务于服务间就可以，但是服务不能调用组件的

# angular操作Dom

- 原生js
  
  - ```
    ngOnInit(){
        //这里是组件和命令初始化完成，并不是dom加载完成,不一定得到dom元素比如加个ngIf等指令就获取不到了
        let oBox:any = document.getElementById('box');
    }
    
    //生命周期，视图加载完成触发
    ngAfterViewInit():void{
        //这里完全可以获取到dom节点
    }
    ```

- ViewChild
  
  - ```
    //1 起名
    <div #mybox></div>
    
    //2 引入
    import {ViewChild} from '@angular/core';
    
    //3 ts文件中与construstor平级   相当于获取到dom节点给myBox变量
    @ViewChild('mybox') myBox:any;
    ngAfterViewInit():void{
        //这里操作dom
        console.log(this.mybox);
        //这里是dom
        console.log(this.mybox.nativeElement);
        this.mybox.nativeElement.style.width = 10px;
    }
    ```
  
  - 还可以获取整个组件，从而调用子组件中的方法和值，（angular中的父子组件并不用嵌套，只有在一个组件中使用了另一个组件的标签即可）
    
    - ```
      //1 在父组件中使用子组件并像上面一样用#起名字
      //2 引入ViewChild在父组件中引入
      //3 父组件@ViewChild('mybox') header:any;
      //4 在父组件中通过 this.header.方法() 调用子组件的方法
      ```

#### angular中的组件的html是直接鞋标签的不用html，body标签

# 组件通讯

- 父传子
  
  - ```
    //1 父组件给子组件的标签绑定一个自定义属性
    <app-child [msg]="msg"></app-child>
    //2 子组件引入Input模块
    import {Component,Oninit,Input} from '@angular/core';
    //3 子组件接收数据,其中的msg变量要和父组件的的属性绑定的值对应
    @Input() msg:string
    
    // 传方法也是一样不要带括号
    子组件访问值时  this.msg
    子组件访问方法  this.run()
    
    把整个父组件传过去
    <app-child [father]="this"></app-child>
    子组件
    @Input() father:string
    子组件使用
    this.father.父组件的数据或方法
    ```

- 子转父
  
  - ```
    通过ViewChild获取子组件
    
    在父组件中使用子组件并像上面一样用#起名字
    引入ViewChild在父组件中引入
    父组件@ViewChild('你起的名字') 变量:any;
    在父组件中通过 this.变量.属性/方法() 调用子组件的方法
    ```
  
  - 第二种方法（不常用，很复杂，广播数据）
    
    - ```
      子组件引入  Output和EventEmitter
      子组件(outer是自定义的变量，private是权限)   @Output() private outer = new EventEmitter();
      子组件然后广播数据  this.outer.emit('子组件数据');
      父组件中使用子组件的变迁时添加  <app-child (outer)="自己的方法([$event])"></app-child>
      父组件通过$event接收子组件广播的数据
      
      子组件广播，然后父组件接收到广播触发方法，这时子组件就调用了父组件的方法
      ```

- 非父子组件通讯（通过服务或者localstorage）

# 生命周期函数（8个）

- ```
  init的函数只触发一次
  check数据改变就触发
  
  ngOnChanges - 当数据绑定输入属性的值发生变化时调用
  ngOnInit - 在第一次 ngOnChanges 后调用
  ngDoCheck - 自定义的方法，用于检测和处理值的改变
  ngAfterContentInit - 在组件内容初始化之后调用
  ngAfterContentChecked - 组件每次检查内容时调用
  ngAfterViewInit - 组件相应的视图初始化之后调用
  ngAfterViewChecked - 组件每次检查视图时调用
  ngOnDestroy - 指令销毁前调用
  ```

# Rxjs 与 Promise相似，只不过rxjs更强大（this指向要注意因为用箭头函数所以没关系，但是用function一定要改）

- ```
  import {Observable} from 'rxjs';
  let stream = new Observable(observer => {
      //这里的定时器只是为了模仿请求效果，实际是直接写
      setTimeout(()=>{
          var username = 'lala';
          observer.next(username);
          observer.error('错误数据')
      },2000);
  })
  //通过subscribe获取返回的数据
  let xxx = 调用一个触发上面代码的方法
  xxx.subscribe((data)=>{})
  ```

- 取消请求(Promise不行)
  
  - ```
    //需接受subscribe之后才能取消
    let d = xxx.subscribe((data)=>{})
    //取消
    d.unsubscribe();
    ```

- 多起请求(Promise不行)
  
  - ```
    import {Observable} from 'rxjs';
    let stream = new Observable(observer => {
        //这里的就是两秒不断执行
        setInterval(()=>{
            var username = 'lala';
            observer.next(username);
            observer.error('错误数据')
        },2000);
    })
    //通过subscribe获取返回的数据
    let xxx = 调用一个触发上面代码的方法
    xxx.subscribe((data)=>{})
    ```

- rxjs工具方法  map，filter对返回的数据过滤
  
  - ```
    import {map filter} from 'rxjs/operators' 
    
    let xxx = 调用一个触发上面代码的方法
    xxx.pipe(
        filter((value)=>{
            //这里处理数据在return，一定要return
        }),//多个过滤器一起使用用逗号分隔
        map((value)=>{
    
        })
    )
    .subscribe((data)=>{})
    ```

# angular发请求

- get
  
  - ```
    //1 在app.module.ts中引入
    import {HttpClientModule} from '@angular/common/http';
    //2 在imports注册，添加HttpClientModule
    
    //组件中使用的话
    1  import {HttpClient} from '@angular/common/http';
    2  constructor(public http:HttpClient){}
    3  然后就可以在自己定义的方法中通过   this.http.get("接口")  发请求，在通过subscribe得到结果
    //接收结果直接在第三步后面接subscribe
    this.http.get("接口").subscribe((res)=>{
        //处理结果
    })
    ```

- post
  
  - ```
    //1 在app.module.ts中引入
    import {HttpClientModule} from '@angular/common/http';
    //2 在imports注册，添加HttpClientModule
    
    //也是在需要用的组件中
    import {HttpClient,HttpHeaders} from '@angular/common/http';
    //然后设置一下请求头，定义在你发请求的方法中
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    //请求
    this.http.post('url',{body},httpOptions).subscribe((res)=>{
        //处理结果
    })
    ```

- jsonp
  
  - ```
    //1 在app.module.ts中引入
    import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
    //2 在imports注册，添加HttpClientJsonpModule
    
    this.http.jsonp('url','回调方法名').subscribe((res)=>{
        //处理结果
    })
    ```

# 使用vue和react通用的axios实现请求

- ```
  1 安装  npm  onstall  axios
  2 引入  import axios from 'axios'
  axios.get('url').then((res)=>{}).then().catch()
  ```

# 路由（根据url地址动态挂载不同组件）

- ```
  ng new 项目名称            创建项目是会让你是否选择路由你就选择
  这样在app根组件中就会多出  app-routing.module.ts  文件，该文件就是配置路由的
  
  它会自己在app.module.ts中导入路由并在imports中配置了
  在app.component.html中多了一个<router-outlet></router-outlet>标签(就是一个容器)
  
  开始使用
  在app.module.ts中引入所有组件并在imports中注册（组件要使用本来就是要先这样做）
  在app-routing.module.ts中导入所有组件  import {xxx} from './xxx'
  然后
  const routes:Routes = [
      {path:'home',component:xxx},
      //重定向
      {path:'**',redirectTo:'home'}
  ]
  上面这样就会通过url来切换组件
  下面通过点击条转组件
  在父组件中
  <a router-link="home">home</a>  //静态的
  <a [router-link]="['/home']">home</a>  //动态的
  
  选中状态  active这个类样式直接在css中写，routerLinkActive值不过给他添加一个类名而已，类名是自定义的
  <a router-link="home" routerLinkActive="active">home</a>
  ```

# get传值（路由通过get传值）（两个不相关组件传值）

- ```
  就是点击a标签跳转时加上get参数
  <a router-link="home" [queryParams]="{键1:值1,键2:值2}">home</a>
  
  在需要接收get参数的组件中
  import {Activate的Route} from '@angular/router';
  constructor(public route:Activate的Route){}
  
  访问  this.route包含很多数据你可以打印出来看看
  this.route.queryParams是rxjs对象所以需要通过subscribe才能拿到数据
  this.route.queryParams.subscribe((data)=>{
      console.log(data);
  })
  ```

# 动态路由

- ```
  在app-routing.module.ts文件的路由配置中
  {path:'xxx组件/:id',component:xxx组件}
  
  然后router-link的第二个参数，他就会在url上/后的参数，下面两个任意一个即可,其中key没有引号，如果有引号就是静态的值
  <a [router-link]="['/home',key]">home</a>
  <a [routerLink]="['/home',key]">home</a>
  
  在需要接收的参数的组件中
  import {Activate的Route} from '@angular/router';
  constructor(public route:Activate的Route){}
  
  得到
  this.route.params.subscribe((data)=>{
      console.log(data);
  })
  ```

## js跳转动态路由

- ```
  给一个按钮一个点击事件触发一个方法
  该方法定义在对应自己的ts文件中
  然后该ts文件
  导入
  import {Router} from '@angular/router';
  注册
  constructor(public router:Router){}
  
  然后对应方法中
  this.router.navigate(['/xxx组件/','123']);  //其中123是静态值，注意/
  如果没有参数
  this.router.navigate(['/xxx组件']);
  ```

## get传值js跳转

- ```
  给一个按钮一个点击事件触发一个方法
  该方法定义在对应自己的ts文件中
  然后该ts文件
  导入
  import {Router,NavigationExtras} from '@angular/router';
  注册
  constructor(public router:Router){}
  
  在对应的方法中,类型就是NavigationExtras类型
  let queryParams:NavigationExtras = {
      queryParams:{'id':123}
  }
  this.router.navigate(['xxx组件'],queryParams);
  ```

# 路由嵌套（路由组件嵌套）

- ```
  在对应组件中通过ng创建一个子组件，创建在哪都可以只不过放在里面可以清楚嵌套关系
  在app-routing.module.ts文件中导入所有组件
  然后
  const routes:Routes = [
      {
          path:'xxx',
          component:xxx,
          children:[
              //这里配置子路由
              {path:'xxx',component:xxx},
              //重定向子路由
              {path:'**',redirectTo:xxx}
          ]
      }
  ]
  
  然后因为要在父组件中点击切换子组件，所以在父组件中
  这里也可以加点样式 通过 routerLinkActive="类名"
  <a [routerLink]="['/father/children']">xxx</a>
  
  最后因为需要容器所以在父组件中放一个容器
  <router-outlet></router-outlet>
  ```

# 因为很多东西都要在constructor中定义，所以当多个时用逗号分隔

- ```
  constructor(public route:ActivatedRoute,public common:CommonService){}
  ```

##### 如果当组件挂载上去是需要掉用方法就在组件的生命周期函数中通过  this.方法()  调用

# angular内置模块（引入就能使用）

# 自定义模块（当项目比较大的时候使用）

- ```
  创建模块（创建的模块只有一个ts文件，这里ts文件就像app.module.ts作用一样，但是app根组件不只有一个ts文件还有html，css等，这时通过在根的位置创建组件生成的，所以我们也要用创建组件的命令，创建出这些文件）
  ng g module xxx模块
  然后在该模块中创建组件的话，就会像app根组件一样把信息注册在ts文件中，这里的话就会注册在模块的ts文件中，结构是与app根模块相似的，一个是根的东西，一个是组件的
  在模块中也可以创建服务
  也是和app.module.ts一样需要哪个组件就要导入并注册
  
  在外部需要访问模块中的组件时，组件内部需要暴露
  在模块的ts文件中添加
  exports:[xxx组件1,xxx组件2]
  
  在别的模块中需要使用就要引入组件（模块只是区分块，你需要模块中暴露的哪个组件还是要导入）
  在别的模块的ts文件中
  import {xxx暴露的组件} from './xxx/xxx'
  然后注册在imports中
  imports:[
      xxx
  ]
  然后当前模块的html中就可以通过标签来使用组件
  
  自己模块中的组件就可以直接使用，但是别的模块需要使用的话，只能通过暴露才能使用
  ```

# 自定义模块懒加载

- ```
  创建模块是如果需要路由加上 --routing 然后模块中就会有一个路由文件
  ng g module module/user --routing
  
  然后在模块的路由文件中
  导入自己的组件
  import {xxx组件} from './xxx'
  配置路由
  const routes:Routes = {
      {
          path:'',//这里为空是模块的匹配
          component:xxx组件
      },
      //如果该模块中还有其他组件要匹配就像下面，就是在自己模块中创建了组件
      {
          path:'xxx组件',
          component:自己内部的组件,
          //下面是嵌套组件，父组件需要有ring器<router-outlet></router-outlet>并不是根组件的哪个容器
          children:[
              {
                  path:'xxx组件',
                  component:xxx组件
              }
          ]
      }
  }
  
  然后在根组件
  html文件
  <a [routerLink]="['/模块名称']">xxx模块</a>
  容器
  <router-outlet></router-outlet>
  ts路由文件中
  const routes:Routes = [
      {
          path:'xxx模块',
          //模块名称是在自己模块的ts文件中的  export class xxx {} 其中的xxx就是模块的名称
          //模块的xxx.module.ts路径 就是模块的ts文件，下面写进去是不需要ts后缀
          loadChildren:'模块的xxx.module.ts路径#模块名称'
      },
      //重定向到哪个模块
      {
          path:'**',redirectTo:'模块名称'
      }
  ]
  ```

- 其实就是根组件动态加载模块，模块中再加载组件，如果组件有父子关系，父组件要有容器，并不说根组件的那个容器可以放所有容器，他只会放自己匹配到的那个组件，而如果匹配到的那个组件中也有子组件的话他是不会显示那个子组件的，只有父组件中有容器时他才能显示出来

# DOM操作

+ 在组件生命周期函数中用原生js操作dom

+ ViewChild操作dom
  
  + ```
    //给定名子
    <div #mybox><?div>
    //在组件的类里面，注意不是组件生命周期里面,后面的mybox:any就是把获取到DOM元素赋值给一个变量
    @ViewChild('mybox') mybox:any
    //然后又在组件生命周期函数中通过  this.mybox.nativeElement  操作dom元素
    ```
  
  + 
