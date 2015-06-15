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
		var rechargeType = $(".m-bankOption").attr("data-type");
		$(bankLi).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).find("span").addClass("u-radio-checked");
			$(this).addClass("current");
			$(this).find("radio").prop("checked",true);

			if( rechargeType )
			//下方银行限额显示
			var bankName = $(this).attr("data-name");
			$(".m-bankNorm").find(".bankInfo").hide();
			$("#chongzhi-" + bankName).show();
		})
		$(bankRadio).click(function () {
			$(bankLi).removeClass("current");
			$(bankRadio).removeClass("u-radio-checked");
			$(bankRadio).find("radio").prop("checked",false);

			$(this).addClass("u-radio-checked");
			$(this).parent("li").addClass("current");
			$(this).find("radio").prop("checked",true);

			//下方银行限额显示
			var bankName = $(this).parent("li").attr("data-name");
			$(".m-bankNorm").find(".bankInfo").hide();
			$("#chongzhi-" + bankName).show();
		})

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
		})

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
		})
	})

	function bankOpt(type){

	}


})