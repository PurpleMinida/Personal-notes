<?php
	header("Content-Type:text/xml")
	//设置一下响应头

	//也可以把数据存到PHP数组中  再输出数组到页面
	//$arr = array();
	//$arr[0] = array('name'=>'zs','age'=>'18','sex'=>'male');
?>
<?xml version="1.0" encoding="UTF-8"?>
<peopleList>
	<people>
		<name><?php echo $arr[0]['name'] ?></name>
		<age><?php echo $arr[0]['age'] ?></age>
		<sex><?php echo $arr[0]['sex'] ?></sex>
	</people>
	<people>
		<name>ls</name>
		<age>19</age>
		<sex>female</sex>
	</people>
</peopleList>