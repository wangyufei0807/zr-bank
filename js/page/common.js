/**
 * ͨ��jsģ��
 */
define(function(require, exports, module){

    //���������ļ�
    require('jquery');

    $(document).ready(function(){

        //��վ���������Ӳ˵�
        $("#subnav").mouseenter(function () {
            $(this).children(".dropdown").addClass("cur");
            $(this).children(".sublist").show();
        })
        $("#subnav").mouseleave(function () {
            $(this).children(".dropdown").removeClass("cur");
            $(this).children(".sublist").hide();
        })

        //�û���¼�������˵�
        $("#j-usernavdown").mouseover(function () {
            $(this).children(".user-link").addClass("cur");
            $(this).children(".user-menu").show();
        })
        $("#j-usernavdown").mouseout(function () {
            $(this).children(".user-link").removeClass("cur");
            $(this).children(".user-menu").hide();
        })

        //��վ�ײ�΢�ŵ���
        $("#wx-box").mouseenter(function () {
            $("#wx-pop").show();
        })
        $("#wx-box").mouseleave(function () {
            $("#wx-pop").hide();
        })
    })
})
