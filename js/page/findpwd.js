/**
 * 找回密码页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//找回密码第一步表单验证
		$("#findPwdForm1").validate({
			rules:{
				account:"required",
				verifycode:"required"
			},
			messages:{
				account:"用户名不能为空",
				verifycode:"验证码不能为空"
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		})

		//找回密码第二步表单验证
		$("#findPwdForm2").validate({
			rules:{
				phonecode:"required"
			},
			messages:{
				phonecode:"短信验证码不能为空"
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		})

		//找回密码第三步表单验证
		$("#findPwdForm3").validate({
			rules:{
				newpwd:{
					required:true,
					rangelength:[6,20]
				},
				confimnewpwd:{
					required:true,
					equalTo:"#newpwd"
				}
			},
			messages:{
				newpwd:{
					required:"密码不能为空",
					rangelength:"密码长度只能在6-20位字符之间"
				},
				confimnewpwd:{
					required:"确认密码不能为空",
					equalTo:"您输入的密码不一致"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		})
	})

})