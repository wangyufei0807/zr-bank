/**
 * ��������jsģ��
 */
define(function(require, exports, module){

    //���������ļ�
    require('jquery');
    require('tabs');

    //domҳ��ṹ������ִ��
    $(document).ready(function () {

        //��Ŀ����ѡ��л�
        $("#jobtab").tabso({
            cntSelect:"#jobcon",
            tabEvent:"click",
            tabStyle:"normal"
        });
    })
})