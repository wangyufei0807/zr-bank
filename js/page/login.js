/**
 * 登录页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//表单验证
		$("#loginForm").validate({
			rules:{
				account:"required",
				password:"required"
			},
			messages:{
				account:"用户名不能为空",
				password:"密码不能为空"
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		})
	})

})