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

        //��վ�ײ�΢�ŵ���
        $("#wx-box").mouseenter(function () {
            $("#wx-pop").show();
        })
        $("#wx-box").mouseleave(function () {
            $("#wx-pop").hide();
        })
    })
})
