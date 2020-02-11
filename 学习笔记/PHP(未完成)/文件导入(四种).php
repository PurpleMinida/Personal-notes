<?php
	//include与include_once  (只有运行到改代码时才导入文件,报错时会继续向下执行代码 once就只导入一次不会重复导入)
		include "路径";
		include("路径");

		include_once "路径";
		include_once("路径");



	//require与require_once  (文件开始就导入文件,报错时不会继续向下执行代码 once就只导入一次不会重复导入)
		require "路径";
		require("路径");

		require_once "路径";
		require_once("路径");
?>