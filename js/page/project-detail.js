/**
 * ��Ŀ����ģ��
 */
define(function(require, exports, module){

    //���������ļ�
    require('jquery');
    require('tabs');

    //domҳ��ṹ������ִ��
    $(document).ready(function () {

        //��Ŀ����ѡ��л�
        $("#pdtab").tabso({
            cntSelect:"#pdcon",
            tabEvent:"click",
            tabStyle:"normal"
        });
    })
})