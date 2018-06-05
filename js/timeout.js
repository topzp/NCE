// function timeout(){
//     var Today = new Date();
//     var time = Today.getFullYear();
//     var last_time = Today.getFullYear() +1;
//     var NowMonth = Today.getMonth()+1;
//     var NowDate = Today.getDate();
//     var last_Date = Today.getDate() -1;
//     var NowDay = time+"."+NowMonth+"."+NowDate;
//     var LastDay = last_time+"."+NowMonth+"."+last_Date;
//     console.log(NowDay);
//     console.log(LastDay);
//
// }

// window.onload=timeout();


// var timestamp = Date.parse(new Date());     //当前时间转换为时间戳
// console.log(timestamp);
function timestampToTime(timestamp) {       //时间戳转换为时间
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D;
}
timestampToTime(new Date());
console.log(timestampToTime(new Date()));

function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
    return y+"-"+m+"-"+d;
}

console.log("1年后："+GetDateStr(365));

