/**
 * ��Ŀ����ģ��
 */
define(function(require, exports, module){

    //���������ļ�
    require('jquery');
    require('tabs');
    require('jqueryslide');
    require('superslide');
    require('fancybox');

    //domҳ��ṹ������ִ��
    $(document).ready(function () {

        //��Ŀ����ѡ��л�
        $("#pdtab").tabso({
            cntSelect:"#pdcon",
            tabEvent:"click",
            tabStyle:"normal"
        });

        /* ��������Ч�� */
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