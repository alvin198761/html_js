/**
 * Created by tangzhichao on 2017/2/21.
 */
import JSDesktopPane from '../swing/JSDesktopPane';

export default {
  state: {
    desktop: null,
    mode: 'dev',
    user: {
      name: 'alvin'
    },
    projectId: 0
  },
  getters: {
    // ['gui/_dockAppButtons'](state, getters, rootState){
    //   return [
    //     {
    //       appid: '1',
    //       icon: 'appmarket.png',
    //       name: '应用市场',
    //       url: 'http://www.baidu.com/',
    //       sonMenu: "[]",
    //       asc: 1
    //     },
    //     {
    //       appid: '2',
    //       icon: 'big.png',
    //       name: 'QQ',
    //       url: 'http://www.qq.com/',
    //       sonMenu: "[]",
    //       asc: 2
    //     },
    //     {
    //       appid: '3',
    //       icon: 'weibo.png',
    //       name: '微博',
    //       url: 'http://www.163.com/',
    //       sonMenu: "[]",
    //       asc: 3
    //     },
    //     {
    //       appid: '4',
    //       icon: 'mail.png',
    //       name: '邮箱',
    //       url: 'http://www.weibo.com/',
    //       sonMenu: "[]",
    //       asc: 4
    //     },
    //     {
    //       appid: '5',
    //       icon: 'zone.png',
    //       name: '空间',
    //       url: 'http://www.csdn.net/',
    //       sonMenu: "[]",
    //       asc: 5
    //     },
    //     {
    //       appid: '6',
    //       icon: 'internet.png',
    //       name: '浏览网页',
    //       url: 'http://www.taobao.com/',
    //       sonMenu: "[]",
    //       asc: 6
    //     }
    //   ];
    // },
    // ['gui/floatMenus'](state){
    //   return [{//一级菜单
    //     menuid: 'm001',
    //     name: '主页',
    //     code: 'm001',
    //     icon: 'images/home.png'
    //   }, {
    //     menuid: 'm002',
    //     name: '邮件',
    //     code: 'm002',
    //     icon: 'images/email.png'
    //   }, {
    //     menuid: 'm003',
    //     name: '文件夹',
    //     code: 'm003',
    //     icon: 'images/portfolio.png'
    //   }, {
    //     menuid: 'm004',
    //     name: '音乐',
    //     code: 'm004',
    //     icon: 'images/music.png'
    //   }, {
    //     menuid: 'm005',
    //     name: '视频',
    //     code: 'm005',
    //     icon: 'images/video.png'
    //   }, {
    //     menuid: 'm006',
    //     name: '备忘录',
    //     code: 'm006',
    //     icon: 'images/history.png'
    //   }, {
    //     menuid: 'm007',
    //     name: '日历',
    //     code: 'm007',
    //     icon: 'images/calendar.png'
    //   }, {
    //     menuid: 'm008',
    //     name: 'RSS',
    //     code: 'm008',
    //     icon: 'images/rss.png'
    //   }
    //   ]
    // },
    ['gui/_apps'](state){
      let apps = [];
      let left = 20;
      let top = 20;
      let col = 0;
      let row = 4;
      let rowIndex = 0;
      for (let i = 0; i < 12; i++) {
        let y = top + (rowIndex * 90);
        let x = left + (col * 90);
        if (i % row == 0 && i != 0) {
          col++;
          rowIndex = 0;
        }else{
          rowIndex++;
        }

        apps.push({
          id: i,
          title: '测试应用' + i,
          img: require('../../assets/icon/jinshan.png'),
          url: 'http://www.baidu.com',
          top: y,
          left: x
        })
      }
      return apps;
    },
    ['gui/_tasks'](state){
      return [
        {
          id:'task1',
          title:'测试窗口',
          url:'http://www.baidu.com'
        }
      ]
    }
  },
  mutations: {
    ['gui/init'](state){
      state.desktop = new JSDesktopPane();
    },
    ['app/changeMode'] (state, payload){
      state.mode = payload.mode;
    },
    ['app/changeNavPath'](state, payload){
      state.navPath = payload.navPath;
    }
  },
  actions: {
    ['app/changeMode']({commit}, paylod){
      commit("changeMode", paylod);
    },
    ['app/changeNavPath'](context, payload){
      content.commit("app/changeNavPath", paylod)
    }
  }
};
