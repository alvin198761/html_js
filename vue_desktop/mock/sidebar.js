/**
 * Created by tangzhichao on 2017/1/9.
 */
module.exports = {
  "GET /api/sidebar/apps": function (req, res) {
    let data = [
      {
        id: '001',
        title:'应用市场',
        icon: 'appmarket.png',
        url:'http://www.baidu.com'
      },
      {
        id: '002',
        title:'QQ',
        icon: 'big.png',
        url:'http://www.qq.com'
      },
      {
        id: '003',
        title:'微博',
        icon: 'weibo.png',
        url:'http://www.weibo.com'
      },
      {
        id: '004',
        title:'邮箱',
        icon: 'mail.png',
        url:'http://mail.163.com'
      },
      {
        id: '005',
        title:'浏览网页',
        icon: 'internet.png',
        url:'http://www.ifeng.com'
      },
      {
        id: '006',
        title:'空间',
        icon: 'zone.png',
        url:'http://www.csdn.net'
      }
    ];
    setTimeout(function () {
      res.json(data)
    }, 500)
  }
};
