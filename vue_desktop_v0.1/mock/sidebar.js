/**
 * Created by tangzhichao on 2017/1/9.
 */
module.exports = {
  "GET /api/sidebar/apps": function (req, res) {
    let data = [
      {
        id: 'site_001',
        type: 1,
        title: '应用市场',
        icon: 'appmarket.png',
        url: 'http://www.baidu.com'
      },
      {
        id: 'site_002',
        type: 1,
        title: 'QQ',
        icon: 'big.png',
        url: 'http://www.qq.com'
      },
      {
        id: 'site_003',
        type: 1,
        title: '微博',
        icon: 'weibo.png',
        url: 'http://www.weibo.com'
      },
      {
        id: 'site_004',
        type: 1,
        title: '邮箱',
        icon: 'mail.png',
        url: 'http://mail.163.com'
      },
      {
        id: 'site_005',
        type: 1,
        title: '浏览网页',
        icon: 'internet.png',
        url: 'http://www.ifeng.com'
      },
      {
        id: 'site_006',
        type: 1,
        title: '空间',
        icon: 'zone.png',
        url: 'http://www.csdn.net'
      }
    ];
    setTimeout(function () {
      res.json(data)
    }, 500)
  }
};
