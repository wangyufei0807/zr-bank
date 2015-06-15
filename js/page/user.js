/**
 * 用户中心页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//用户中心左侧导航展开收缩效果
		var sideItem = $(".m-side").find(".item").children("a");
		$(sideItem).click(function () {
			$(this).siblings("ul").slideToggle("slow");
		})

		//用户中心充值选择效果
		var bankRadio = $(".m-bankOption").children("li").children("span");
		var bankLi = $(".m-bankOption").children("li");

		$(bankLi).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).find("span").addClass("u-radio-checked");
			$(this).addClass("current");
			$(this).find("radio").prop("checked",true);
		})

		$(bankRadio).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).addClass("u-radio-checked");
			$(this).parent("li").addClass("current");
			$(this).find("radio").prop("checked",true);
		})

	})

})