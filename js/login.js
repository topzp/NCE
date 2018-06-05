// $('.btn').click(function (params) {
//     if ($('#zh').val() == '') {
//         $('.zhtishi').removeClass('hide');
//         setTimeout(function (params) {
//             $('.zhtishi').addClass('hide');
//         }, 2000)
//     } else if ($('#pass').val() == '') {
//         $('.mmtishi').removeClass('hide');
//         setTimeout(function (params) {
//             $('.mmtishi').addClass('hide');
//         }, 2000)
//     } else if (!$('.yzm').hasClass('hide')) {
//         if (!$('#sryzm').val == '') {
//             $.ajax({
//                 url: "", //请求的url地址
//                 dataType: "json", //返回格式为json
//                 type: "GET",
//                 data: {
//                     'code': $('#sryzm').val()
//                 },
//                 success: function (req) {
//                     if (req.code == 0) {
//                         login();
//                     } else {
//                         $('.yzmtishi').removeClass('hide');
//                         setTimeout(function (params) {
//                             $('.yzmtishi').addClass('hide');
//                         }, 2000)
//                     }
//                 }
//             });
//         }
//     } else {
//         login();
//     }
// });

//图形验证码
// $('.tp').click(function (params) {
//     var time = new Date().getTime();
//     var imgurl = '';
//     $.ajax({
//         url: "", //请求的url地址
//         dataType: "json", //返回格式为json
//         type: "GET",
//         success: function (req) {
//             $('#yztp').attr('src', imgurl);
//         }
//     });
// });

//登录
// function login(params) {
//     $.ajax({
//         url: "", //请求的url地址
//         dataType: "json", //返回格式为json
//         type: "GET",
//         data: {
//             'name': $('#zh').val(),
//             'password': $('#pass').val(),
//         },
//         success: function (req) {
//             if (req.Code == 0) {
//                 window.location.href = 'index.html';
//             } else {
//                 alert(req.Msg);
//                 $('.yzm').removeClass('hide');
//             }
//         }
//     });
// };

$('.btn').click(function (params) {
    if ($('#zh').val() == '') {
        $('.zhtishi').removeClass('hide');
        setTimeout(function (params) {
            $('.zhtishi').addClass('hide');
        }, 2000)
    } else if ($('#pass').val() == '') {
        $('.mmtishi').removeClass('hide');
        setTimeout(function (params) {
            $('.mmtishi').addClass('hide');
        }, 2000)
    } else {
        login();
    };
});

function login(){
    $.ajax({
        url:"http://ttt.com",
        dataType: "json",
        type: "post",
        data:{
            'name': $('#zh').val(),
            'password': $('#pass').val(),
        },
        // success:function(){
        //     console.log("传了");
        //     // window.location.href = "index.html";
        // },
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
    if(Random.login() == '登录成功'){
        window.location.href = "index.html";
    }else{
        $('.yzm').removeClass('hide');
            if(Random.yzm() == '验证成功'){
                window.location.href = "index.html";
            }else{
                $('.yzmtishi').removeClass('hide');
                setTimeout(function (params) {
                    $('.yzmtishi').addClass('hide');
                }, 2000)
            }
    }
});
};

