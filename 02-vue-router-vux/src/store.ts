import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from './k-vue-x';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        addCount(state: any) {
            state.count++;
        }
    },
    getters: {
        leftCount(state: any) {
            return 10 - state.count;
        }
    },
    actions: {
        addCount({ commit, state, getters }: any) {
            commit('addCount')
        }
    },
});
