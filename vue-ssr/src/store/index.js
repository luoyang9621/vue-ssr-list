import Vue from 'vue'
import Vuex from 'vuex'
import { getList1 } from './../axios/list';

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      list1: [],
    },
    mutations: {
      setList1(state, val) {
        state.list1 = val;
      }
    },
    actions: {
      getList1({ commit }) {
        console.log('store 调用action', Date.now());
        return getList1().then((res) =>{
          commit('setList1', res);
        });
      }
    },
    modules: {
    }
  });
}
