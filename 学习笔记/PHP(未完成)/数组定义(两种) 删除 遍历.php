<?php

数组下标只有int和string类型  当为string类型时要有引号
	//1.
		$arr[] = 'PHP';
		$arr[] = 'java';
		$arr['qin'] = 'fulin';

	//2.
		$brr = array(1,2,3);
		$crr = array('id' => 1, 'qin' => 'fulin');



删除数组unset();
	删除单个
		unset($arr[0]);
	删除整个数组
		unset($brr);


遍历数组foreach
	不需要键时
		foreach ($arr as $value) {
			
		}
	需要键时
		foreach ($brr as $key => $value) {
			
		}
?>