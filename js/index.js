
var myChartContainer = document.getElementById('main');
//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizemyChartContainer = function () {
    myChartContainer.style.width = 770+'px';
    myChartContainer.style.height = 400+'px';
};
//设置容器高宽
resizemyChartContainer();
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(myChartContainer);

// 指定图表的配置项和数据
var option = {
    tooltip: {
        //坐标轴触发，主要用于柱状图，折线图等
        trigger:'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["5.24","5.25","5.26","5.27","5.28","5.29"],
        axisLine:{
            lineStyle: {
            color: "#676767",
            },
        },
    },
    yAxis: {
        axisLine:{
            lineStyle: {
                color: "#676767",
            },
        },
    },
    series: [{
        name: 'NCE价格',
        type: 'line',
        data: [2, 4, 4.5, 5, 5, 5],
        itemStyle: {
            normal: {
                color: "rgba(44, 168, 255, 0.2)",
                lineStyle: {
                    color: "#2ca8ff",
                }
            }
        },
        areaStyle: {},
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//用于使chart自适应高度和宽度
window.onresize = function () {
    //重置容器高宽
    resizemyChartContainer();
    myChart.resize();
};



$.ajax({
    url: 'http://test.com',
    type: 'get',
    dataType: 'json',
    success:function () {
        if(Random.sate() === "未激活"){
            $('.state').removeClass('hidden');
            $('.grade_miner .grade_content').append(Random.grade());
            $('.grade_state .grade_content').append("未激活");
            $('.grade_state .grade_content').attr("style","color:#FF0000");
            $('.grade_time .grade_content').append(Random.miner_time());
            $('.grade_focrse .grade_content').append(Random.id());
            $('.miner_text').append(Random.miner_grade());
            $('.balance_nub').text(Random.color());
            $('.profit_nub').text(Random.color());
            $('.extract_nub').text(Random.color());
            $('.account_nub').text(Random.color());

        }else {
            $('.grade_miner .grade_content').append(Random.grade());
            $('.grade_state .grade_content').append('已激活');
            $('.grade_time .grade_content').append(Random.miner_time());
            $('.grade_focrse .grade_content').append(Random.id());
            $('.miner_text').append(Random.miner_grade());
            $('.balance_nub').text(Random.color());
            $('.profit_nub').text(Random.color());
            $('.extract_nub').text(Random.color());
            $('.account_nub').text(Random.color());

        }
    },
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
});


