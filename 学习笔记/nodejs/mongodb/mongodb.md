### 文档(类似json格式字符串)

{ 区分大小写，每个文档大小不能超过16M }

### 集合(包含文档)

[  ]

### 数据库(包含集合)

### 安装(绿色版，也有对应的安装版)

下载压缩包解压到wamp与php，mysql，Apache一起

进入mongodb新建一个data文件夹和log.txt文件

- data是存储数据库文件的

- log.txt是存储日志的

管理员运行cmd，进入mongodb的bin目录

- 记住bin目录两个命令文件
  
  - mongo.exe是客户端连接程序
  
  - mongod.exe服务端启动程序

mongod --help帮助指令

- --logpath 指定日志存储文件

- --dbpath 指定数据库存储文件

- 

- --install

安装  mongod --install --dbpath c:/wamp/mongodb/data --logpath c:/wamp/mongodb/log.txt

在服务中右键启动mongodb服务

客户端连接进入mongodb的bin文件夹执行mongo命令

### 安装方式2

解压后进入bin目录

然后  mongod --port 端口 --dbpath 数据库存储目录（全路径） --logpath 日志文件（全路径）

这样之后该窗口不能关闭，不然该服务也关闭了

客户端连接：mongo localhost:8888

### mongodb入门语句

#### 创建数据库

- use 数据库名称       注意：如果没有该数据库就会创建，如果有就会切换，如果创建了该数据库，但是给数据库没有内容则自动删除该数据库

#### 查看数据库

- show dbs

#### 创建集合和文档

- mongodb的集合是自己创建的

- db 命令是当前数据库，就是前面use谁就是谁

- db.集合名.insert({ 文档 })

#### 查看集合

- show tables

#### 查询集合的文档

- db.集合名.find()     查询所有文档

- db.集合名.findOne()       查询集合的第一条文档

#### 删除集合

- db.集合名.drop()

#### 删除数据库

- db.dropDatababse()

### 添加文档

文档的格式是BSON格式，就是json格式的扩展

每个文档都有一个 _id的对象，也可以自己指定该id值但是不能重复，如果插入重复就会报错

- db.集合名.insert({ 文档 })

- 还可以直接写js代码，不如写一个for循环来批量插入文档

### 删除文档

- db.集合名.remove({ 条件 })            如果不写条件就会删除所有文档

- 比如删除age=5的    db.集合名.remove({age=5})

- 删除一些大于小于等条件
  
  - ```
    $lt (<),$lte (<=),$gt (>),$gte (>=)
    比如删除age大于7
    db.php.remove({age:{'$gt':7}})
    ```

### 更新文档

##### 方式一

- db.集合名.update({ 条件 },{ 新的文档 })        新的文档会覆盖整个文档

- db.集合名.update(条件, 新文档, 是否新增, 是否修改多条)
  
  - 是否新增：如果只是1（true）没有满足条件的就新增
  
  - 是否修改多条：1（true）如果有多个满足条件就修改多条

##### 方式二（上面的会覆盖）

- 使用修改器
  
  - $inc：加一个数字,就会加上该数字的结果    本来是1加10的话就是11
  
  - $set：修某个字段不存在就增加该字段
  
  - db.集合名.update({ 条件 },{'修改器':{修改的键:修改的值}})
  
  - 比如修改age=3的文档的name为xiaosan      
    
    - bd.php.update({age=3},{'$set':{name:'xiaosan'}})

### 查询文档

- db.集合名.find({ 条件 })

- 那些大于小于等条件就用操作符     db.php.find({age:{'$gt':2}})  //大于2的

- db.集合名.find({},{age:1})//1表示只显示age的键值

- db.集合名.find({},{age:0})//0表示显示除了age之外的键值

- 升序降序查询
  
  - db.集合名.find().sort({age:1})//根据age升序排列
  
  - db.集合名.find().sort({age:-1})//根据age降序排列

- 查询几个
  
  - db.集合名.find().limit(3)//查询前3个
  
  - db.集合名.find().skip(2).limit(3)//跨过前两个文档再显示3个文档

### 查看集合中的文档有多少条

- db.集合名.count()

#### 帮助指令

###### 全局

- help

###### 数据库

- db.help()

###### 集合

- db.集合名.help()





#  用户权限操作

每一个数据库都用自己的用户名和密码，登录该用户名和密码只能操作对应的数据库

但是系统自带一个admin数据库，在该数据库创建的用户是超级管理员，可以操作所有数据库



###  创建数据库用户（在创建别的数据库的用户之前必须先在admin数据库中创建超级管理员）

先   use admin   再db.addUser('root','123456')

- 1 先选择数据库 		use 数据库
- 2  添加用户        db.addUser('用户名','密码',是否只读)
  - 是否只读，默认是false就是可读可写，true就只能读不能改

这样设置之后就要重新安装mongodb

- 先停掉mongodb的服务
- 进入bin目录以管理员cmd执行， mongod --remove
- 再安装加上  --auth  
  - 上面的方式一安装就   mongod --install --dbpath c:/wamp/mongodb/data --logpath c:/wamp/mongodb/log.txt --auth
  - 上面的方式二安装就   mongod --port 端口 --dbpath 数据库存储目录（全路径） --logpath 日志文件（全路径） --auth

###  验证用户（如果不验证直接操作则报错）

- 先选择数据库    use 数据库
- 再验证(返回1即通过)    db.auth('用户名','密码')

###  删除用户和修改密码

- 创建的用户会在该数据库中的system.users的集合中
- 删除用户就直接删除该集合的文档即可    db.system.users.remove({ 条件 })



#  索引（可以提高查询速度,但是降低了插入文档的速度）

- 创建单列索引

  - db.集合名.ensureIndex({键名:1})   //1表示升序，-1表示降序

- 创建多列索引

  - db.集合名.ensureIndex({键名:1/-1,键名:1/-1})
  - 查看索引情况  db.集合名.getIndexes()   其中的id是主键索引    key中就是索引情况

- 子文档索引

  - 

  ```
  //正常
  {name:'手机',spc:{weight:100,area:'纽约'}}
  //查询
  db.集合名.find({'spc.weight':100})
  
  //创建子文档索引
  db.集合名.ensureIndex({'spc.weight':1/-1})
  ```

- 唯一索引{unique:true}当插入相同的键值时就会报错

  - db.集合名.ensureIndex({键名:1},{unique:true})

- 查看索引
  -  db.集合名.getIndexes() 
  - 查看本次查询使用的索引和查询数据的状态信息
  -  db.集合名.find({name:'xiao'}).explain()
    - cursor表示当前所用索引
    - nscanned表示扫描的文档数
- 删除索引
  - db.集合名.dropIndex({name:1/-1})
  - 删除所有索引  db.集合名.dropIndexes()
- 重建索引
  - db.集合名.reIndex()



#  mongodb数据的导入和导出

- 导出（mongoexport）

  - -h host主机

  - --port 端口

  - -d 指明使用的库

  - -c 指明要导出的集合

  - -o 指明导出的文件名

  - --csv 指定导出的csv格式

  - -q 过滤导出

  - -f field1 field2  列明

  - -u  用户名

  - -p 密码

  - 进入到mongodb的bin目录执行导出，注意导出要用超级管理员用户

    - ```
      mongoexport -h localhost --port 8888 -d stu -c php -o c:/php.json -u root -p 123456
      ```

- 导入（mongoimport）(需要先创建一个数据库让数据导入，就是先use一个库)

  - -d 待导入的数据库
  - -c 待导入的集合（没有会自己创建）
  - --type csv/json(默认)
  - --file 备份文件路径
  - 上面的一些参数也要配置下来

#  主从

启动时通过  --master指定主服务器

指定从服务器  --slave --source 127.0.0.1:1111   //127.0.0.1是主服务器的地址1111是主服务器的端口

这时从服务器就已经同步了主服务器，在主服务器中的修改从服务器也会修改

#  php操作mongodb

下载php_mongodb.dll扩展

把上面的扩展拷贝到php文件夹的ext文件夹下，改名为php_mongo.dll

打开php.ini文件添加extension=php_mongo.dll

重启Apache，phpinfo()出现mongo就安装成功了



操作  mongodb中的.变成了->  {}变成了array()

- ```
  $m = new MongoClient("mongodb://root:123456@localhost:8888/admin");
  $db = $m->selectDb("stu");//选择数据库
  //添加文档    mongodb中的.变成了->  {}变成了array()
  $db->集合名->insert(array('name'=>'xiaoming','age'=>18))
  //查询文档
  $db->集合名->find();
  //条件查询
  $db->集合名->find(array('age'=>18));
  //大于5  $gt只能用单引号不然解析成变量
  $db->集合名->find(array('age'=>array('$gt'=>5)));
  //降序
  $db->集合名->find().sort(array('age'=>-1));
  
  //修改
  $db->集合名->update(array('age'=>3),array('$set'=>array('name'=>'xaiosan')));
  //删除文档
  $db->集合名->remove(array('age'=>6))
  ```

- 










































































