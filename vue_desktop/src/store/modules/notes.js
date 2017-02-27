/**
 * Created by tangzhichao on 2017/2/27.
 */
export default {
  state: {
    notes: []
  },
  getters: {
    ['note/_tasks'](state){
      return state.notes;
    }
  },
  mutations: {
    ['note/initComponent'](state){

    }
  },
  actions: {}
};
