var check = $('#mycheck');
check.click(function () {
    if ($(this).is(":checked")) {
        $('label').addClass('check');
    } else {
        $('label').removeClass('check');
    }
});

$('.agree_content').click(function () {
    $('.fixed').removeClass('hidden');
});

$('.fixed img').click(function () {
    $('.fixed').addClass('hidden');
});


