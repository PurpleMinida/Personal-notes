npm install mysqljs/mysql

去npm复制mysql的实例代码（就是数据库驱动，创建连接）

```
//加载数据库驱动
var mysql      = require('mysql');
//创建数据库连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
//执行数据库操作
connection.connect();
//操作数据库
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
//关闭数据库
connection.end();
```

插入数据（改上面的）(data是数据)

```
let sql = 'insert into book set ?'
let data = {
    name:'zs',
    author:'lala',
    age:15
}
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
```

更改数据（都是通过？来填充一下位置）(其中book为表名)

```
let sql = 'update book set name=?,author=?,age=?';
let data = ['ls','wuwu',16,6];//数组最后的6是条件，比如id是6的

connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
```

删除数据

```
let sql = 'delete from book where id = ?';
let data = [7];//数组最后的6是条件，比如id是6的

connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1){
    console.log(删除成功);
  }
});
```

查询数据

```
let sql = 'select * from book';
let data = null;//数组最后的6是条件，比如id是6的 //查询id=6的 let data = [6]
//null是全部数据都显示出来
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);//通过[]得到特定条件数据
});
```

封装数据库
