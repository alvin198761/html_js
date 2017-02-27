/**
 * Created by tangzhichao on 2017/2/27.
 */
export default {
  state: {
    el: null,
    contextMenuData: [[{
      text: "工具栏"
    }, {
      text: "任务管理器"
    }, {
      text: "显示桌面"
    }], [{
      text: "属性"
    }]],
    tasks: []
  },
  getters: {
    ['taskbar/_tasks'](state){
      return state.tasks;
    }
  },
  mutations: {
    ['taskbar/initComponent'](state){
      state.el = $('#bottomBar')
    },
    ['taskbar/taskMenu'](state){
      state.el.smartMenu(state.contextMenuData, {
        name: "task_bar",
      });
    },
    ['taskbar/openBrower'](state, payload){
      state.tasks.push(payload)
      console.log(payload)
    }
  },
  actions: {}
};
