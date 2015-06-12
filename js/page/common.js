/**
 * 通用js模块
 */
define(function(require, exports, module){

    //引入依赖文件
    require('jquery');

    $(document).ready(function(){

        //网站导航下拉子菜单
        $("#subnav").mouseenter(function () {
            $(this).children(".dropdown").addClass("cur");
            $(this).children(".sublist").show();
        })
        $("#subnav").mouseleave(function () {
            $(this).children(".dropdown").removeClass("cur");
            $(this).children(".sublist").hide();
        })

        //用户登录后下拉菜单
        $("#j-usernavdown").mouseover(function () {
            $(this).children(".user-link").addClass("cur");
            $(this).children(".user-menu").show();
        })
        $("#j-usernavdown").mouseout(function () {
            $(this).children(".user-link").removeClass("cur");
            $(this).children(".user-menu").hide();
        })

        //网站底部微信弹出
        $("#wx-box").mouseenter(function () {
            $("#wx-pop").show();
        })
        $("#wx-box").mouseleave(function () {
            $("#wx-pop").hide();
        })
    })
})
