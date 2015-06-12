/**
 * 注册页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//表单验证
		$("#registerForm").validate({
			rules:{
				nickname:{
					required:true,
					rangelength:[6,16]
				},
				password:{
					required:true,
					rangelength:[6,20]
				},
				confirmpwd:{
					required:true,
					equalTo:"#password"
				},
				phone:{
					required:true,
					isMobile:true
				},
				verifycode:{
					required:true
				},
				phonecode:{
					required:true
				}
			},
			messages:{
				nickname:{
					required:"用户名不能为空",
					rangelength:"请输入6-16位字符，可以是字母、数字、中文"
				},
				password:{
					required:"密码不能为空",
					rangelength:"密码长度只能在6-20位字符之间"
				},
				confirmpwd:{
					required:"确认密码不能为空",
					equalTo:"您输入的密码不一致"
				},
				phone:{
					required:"手机号码不能为空",
					isMobile:"手机号码格式不正确，请重新输入"
				},
				verifycode:{
					required:"验证码不能为空"
				},
				phonecode:{
					required:"手机验证码不能为空"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		})
	})


})