/**
 * 用户中心页面JS模块
 */
define(function(require, exports, module){

	//引入依赖文件
	require('jquery');
	require('validate');
	require('dialog');

	//dom页面结构加载完执行
	$(document).ready(function(){

		//用户中心左侧导航展开收缩效果
		var sideItem = $(".m-side").find(".item").children("a");
		$(sideItem).click(function () {
			$(this).siblings("ul").slideToggle("slow");
		});

		//用户中心充值选择效果
		var bankRadio = $(".m-bankOption").children("li").children("span");
		var bankLi = $(".m-bankOption").children("li");
		var rechargeType = $(".m-bankOption").attr("data-type");
		$(bankLi).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).find("span").addClass("u-radio-checked");
			$(this).addClass("current");
			$(this).find("radio").prop("checked",true);

			if( rechargeType == 1){
				//下方银行限额显示
				var bankName = $(this).attr("data-name");
				$(".m-bankNorm").find(".bankInfo").hide();
				$("#chongzhi-" + bankName).show();
			}
		});
		$(bankRadio).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).addClass("u-radio-checked");
			$(this).parent("li").addClass("current");
			$(this).find("radio").prop("checked",true);

			if(rechargeType == 1){
				//下方银行限额显示
				var bankName = $(this).parent("li").attr("data-name");
				$(".m-bankNorm").find(".bankInfo").hide();
				$("#chongzhi-" + bankName).show();
			}
		});

		//个人充值表单验证
		$("#pRechargeForm").validate({
			rules:{
				money:{
					required:true,
					isAmount:true
				}
			},
			messages:{
				money:{
					required:"充值金额不能为空",
					isAmount:"请输入正确的金额"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		});

		//企业充值表单验证
		$("#cRechargeForm").validate({
			rules:{
				money:{
					required:true,
					isAmount:true
				}
			},
			messages:{
				money:{
					required:"充值金额不能为空",
					isAmount:"请输入正确的金额"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent().find(".ipt-err"));
			}
		});

		//基本信息 - 绑定手机表单验证-第一步
		var phoneForm1 = $("#phoneEditForm1").validate({
			rules:{
				phonecode:{
					required:true
				},
				password:{
					required:true
				}
			},
			messages:{
				phonecode:{
					required:"手机验证码不能为空"
				},
				password:{
					required:"登录密码不能为空"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent());
			}
		});

		//基本信息 - 绑定手机表单验证-第二步
		var phoneForm2 = $("#phoneEditForm2").validate({
			rules:{
				newphone:{
					required:true,
					isMobile:true
				},
				phonecode:{
					required:true
				}
			},
			messages:{
				newphone:{
					required:"手机号码不能为空",
					isMobile:"手机号码格式不正确，请重新输入"
				},
				phonecode:{
					required:"手机验证码不能为空"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent());
			}
		});

		// 点击修改弹出框
		$("#j-phoneEdit").click(function () {
			var d = dialog({
				title: '绑定手机修改',
				url:"userInfo/resetMobile.html",
				height:320
			});
			d.showModal();
		});

		// 修改绑定手机第一步
		$("#subbt-step1").click(function () {
			//判断表单是否通过验证
			if(phoneForm1.form()){
				$("#phoneEditForm1").hide();
				$("#phoneEditForm2").show()
			}
		});

		// 修改绑定手机第二步
		$("#subbt-step2").click(function () {
			//判断表单是否通过验证
			if(phoneForm2.form()){
				$("#phoneEditForm2").hide();
				$("#phoneEditForm3").show();
			}
		});

		//邮箱绑定验证
		var emailForm = $("#emailEditForm").validate({
			rules:{
				email:{
					required:true,
					email:true
				}
			},
			messages:{
				email:{
					required:"邮箱不能为空",
					email:"邮箱格式不正确，请重新输入"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent());
			}
		});

		//基本信息 - 邮箱验证
		$("#j-emailEdit").click(function () {
			var d = dialog({
				title: '邮箱验证',
				url:"userInfo/bindEmail.html",
				height:300
			});
			d.showModal();
		})

		//修改密码 - 表单验证
		var pwdForm = $("#pwdEditForm").validate({
			rules:{
				oldPlainPassword:{
					required:true,
					rangelength:[6,20]
				},
				newPlainPassword:{
					required:true,
					rangelength:[6,20]
				},
				renewPlainPassword:{
					required:true,
					equalTo:"#newPlainPassword"
				},
			},
			messages:{
				oldPlainPassword:{
					required:"用户名不能为空",
					rangelength:"请输入6-16位字符，可以是字母、数字、中文"
				},
				newPlainPassword:{
					required:"密码不能为空",
					rangelength:"密码长度只能在6-20位字符之间"
				},
				renewPlainPassword:{
					required:"确认密码不能为空",
					equalTo:"您输入的密码不一致"
				}
			},
			errorPlacement: function (error, element) {
				error.appendTo(element.parent());
			}
		});

		//基本信息 - 修改密码
		$("#j-passwordEdit").click(function () {
			var d = dialog({
				title: '邮箱验证',
				url:"userInfo/updatePwd.html",
				height:350
			});
			d.showModal();
		});

		//消息 全选反选
		$("#allsel").click(function () {
			$("[name='id[]']").each(function(){//反选
				if($(this).prop("checked")){
					$(this).prop("checked",false);
				}else{
					$(this).prop("checked",true);
				}
			})
		})
	})
})