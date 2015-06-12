/**
 * 项目详情模块
 */
define(function(require, exports, module){

    //引入依赖文件
    require('jquery');
    require('tabs');
    require('jqueryslide');
    require('superslide');
    require('fancybox');

    //dom页面结构加载完执行
    $(document).ready(function () {

        //项目详情选项卡切换
        $("#pdtab").tabso({
            cntSelect:"#pdcon",
            tabEvent:"click",
            tabStyle:"normal"
        });

        /* 补充资料效果 */
        $(".imgslid").slide({titCell:".hd ul",mainCell:".list ul",autoPage:true,effect:"left",autoPlay:false,vis:2,scroll:1,prevCell:".backward",nextCell:".forward",trigger:"click"});
        $(".fancybox").fancybox({
            'hideOnOverlayClick':false
        });
        $("#j-sliderbox").Slide({
            effect : "scroolLoop",
            autoPlay:false,
            speed : "normal",
            timer : 3000,
            steps:1
        });
    })
})