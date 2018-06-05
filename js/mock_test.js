var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
// Mock响应模板
Mock.mock('http://test.com', {
    "user|1": [{   // 随机生成1到3个数组元素
        'name': '@cname',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 1,   // 18至28以内随机整数, 0只是用来确定类型             ？？？
        birth: Mock.Random.date(), //随机生成一个日期              ？？？
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        mobile:/^1[0-9]{10}$/,  //用正则匹配1开头的11位数字的手机号
    },{
        'gf': '@cname'
    }]
});

var Random = Mock.Random;
// console.log(Random.email());
Random.extend({
    // 矿机等级
    grade: function(date) {
        var grades = ['通用型矿机-A', '计算型矿机-B', '高频型矿机-C'];
        return this.pick(grades);
    },
    // 矿工状态
    sate: function(date) {
        var sates = ['已激活', '未激活'];
        return this.pick(sates);
    },
    // 矿工等级
    miner_grade: function(date) {
        var miner_grades = ['初级矿工Ⅰ','初级矿工Ⅱ','初级矿工Ⅲ','中级矿工Ⅰ','中级矿工Ⅱ','中级矿工Ⅲ',
            '高级矿工Ⅰ','高级矿工Ⅱ','高级矿工Ⅲ',];
        return this.pick(miner_grades);
    },
    //  剩余时间
    miner_time:function(data){
      var miner_time = ['365天', '188天', '332天', '15天'
      ]
        return this.pick(miner_time)
    },
    sex: function(date) {
        var sexes = ['男', '女', '中性', '未知'];
        return this.pick(sexes);
    }
});
console.log(Random.grade());
// console.log(Random.sate());
console.log(Random.miner_grade());
console.log(Random.sex());
console.log(Random.name());
console.log(Random.color());
console.log(Random.city());
console.log(Random.id());

