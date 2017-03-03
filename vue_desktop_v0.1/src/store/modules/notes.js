/**
 * Created by tangzhichao on 2017/2/27.
 */
import http from '../../plugins/http';
export default {
  state: {
    notes: [],
    zIndex: 999
  },
  getters: {
    ['note/_notes'](state){
      return state.notes;
    }
  },
  mutations: {
    ['note/zIndex'](state){
      state.zIndex++;
    },
    ['note/initComponent'](state, payload){
      http.get('/api/note').then(function (res) {
        state.notes = res.data;
      }).catch(function (res) {
        state.nodes = [];
      })
    }
  },
  actions: {}
};
