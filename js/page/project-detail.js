/**
 * 项目详情模块
 */
define(function(require, exports, module){

    //引入依赖文件
    require('jquery');
    require('tabs');

    //dom页面结构加载完执行
    $(document).ready(function () {

        //项目详情选项卡切换
        $("#pdtab").tabso({
            cntSelect:"#pdcon",
            tabEvent:"click",
            tabStyle:"normal"
        });
    })
})