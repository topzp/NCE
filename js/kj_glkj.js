$(document).ready(function() {
    // input获取焦点、失去焦点
    var $input = $('input');
    $input.focus(function () {
        $(this).removeClass('unfocus');
        $(this).addClass('focus');
    });
    $input.blur(function () {
        $(this).removeClass('focus');
        $(this).addClass('unfocus');
    });

    // 调整content高度
    function min_height(className) {
        var $this = $(className);
        if ($this.height() < 800) {
            $this.addClass('min_height');
        }
    };
    window.onload = min_height(".glminer_list");
    window.onload = min_height(".glxx");

    // 显示取消关联界面
    $(".but_cancel").click(function () {
        $("#qxgl").removeClass('hidden');
    });
    // 隐藏取消关联界面
    $(".closed").on("click",function() {
        $("#qxgl").addClass('hidden');
    });

    $(".yglminer .but").click(function () {
        window.location.href = "kj_glkj.html";
    });


});