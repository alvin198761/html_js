/**
 * Created by tangzhichao on 2017/2/27.
 */
export default {
  state: {
    el: null,
    currentCard: null
  },
  getters: {
    ['content/_apps'](state){
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
        } else {
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
    }
  },
  mutations: {
    ['content/initComponent'](state){
      console.log(state)
    },
    ['content/changeCard'](state, payload){
      state.currentCard = payload;
    },
    ['content/doAppLayout'](state, rootState){
      let menus = rootState.fisheye.menus;
      let cardHeight = $('.app-grid')[0].height();
      for (let menu in menus) {
        let gap = 20;
        let _top = gap;
        let _left = gap;
        for (let app in menu.apps) {
          app.left = _left;
          app.top = _top;

          //每循环一个图标后，给top的偏移量加90px
          _top += 90;
          //当下一个图标的top偏移量大于窗口高度时，top归零，left偏移量加90px
          if (_top + gap + 57 > cardHeight) {
            _top = gap;
            _left += 90;
          }
        }
      }
    }
  },
  actions: {
    ['content/doLayout']({commit, rootState}){
      commit('content/doAppLayout', rootState);
    }
  }
};
