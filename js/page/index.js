/**
 * 首页模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('kinmaxshow');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//焦点图
		$("#kinMaxShow").kinMaxShow();

	})

})