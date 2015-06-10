/**
 * 关于我们js模块
 */
define(function(require, exports, module){

    //引入依赖文件
    require('jquery');
    require('tabs');

    //dom页面结构加载完执行
    $(document).ready(function () {

        //项目详情选项卡切换
        $("#jobtab").tabso({
            cntSelect:"#jobcon",
            tabEvent:"click",
            tabStyle:"normal"
        });
    })
})