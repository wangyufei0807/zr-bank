/**
 * 用户中心页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//用户中心左侧展开收缩效果
		$(".m-side > .item").click(function () {
			$(this).find(".subList").toggle();
		})
	})

})