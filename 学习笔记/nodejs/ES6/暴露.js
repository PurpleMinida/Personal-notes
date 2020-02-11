//暴露多个
export const foo = 'bar';
export const f = function(){};

//ES6解构赋值  导出 只能找export导出的
export {foo,f}

//别的文件导入
import express from 'express';
//就会把config的所有成员导出放到config变量中   只能找export导出的
import * as config from './config'
//就会只找export default导出的成员，相当于 module.exports
import config from './config'




//所有系统模块也可以结构赋值  就是导出特定的方法
path就是导出path模块的所有方法
import path from "path";
也可以导出单个方法
import { join } from "path";
