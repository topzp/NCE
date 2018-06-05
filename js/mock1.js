Mock.mock('http://ttt.com', function(options) {
    console.log(options);
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id|+1': 88,
        }
        ]
    });
    return Random.miner_grade();
});

var Random = Mock.Random;
Random.extend({
    // 登录
    login: function(date) {
        var logins = ['登录成功', '登陆失败'];
        return this.pick(logins);
    },
    yzm: function(date) {
        var yzms = ['验证成功', '验证失败'];
        return this.pick(yzms);
    },
});
console.log(Random.login());
console.log(Random.yzm());