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
    ['taskbar/removeTask'](state, payload){
      let index = state.tasks.indexOf(payload.task);
      state.tasks.splice(index, 1);
    },
    ['taskbar/addTask'](state, payload){
      state.tasks.push(payload)
    }
  },
  actions: {
    ['taskbar/addTask']({rootState, commit}, payload){
      if (rootState.taskbar.tasks.indexOf(payload) === -1) {
        commit('taskbar/addTask', payload)
      } else {
        commit('browser/clickActiveChange', {id: payload})
      }
    },
    ['taskbar/activeTask']({commit}, payload){
      commit('browser/showBrowser', {id: '#window_' + payload.id + '_warp'});
      commit('browser/clickActiveChange', {id: '#window_' + payload.id + '_warp'})
    }
  }
};
